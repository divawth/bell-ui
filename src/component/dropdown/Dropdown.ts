import Yox, { CustomEventInterface } from 'yox'

import template from './template/Dropdown.hbs'
// import './style/Dropdown.styl'

import {
  FALSE,
  UNDEFINED,
  DOCUMENT,
  RAW_STRING,
  RAW_HOVER,
  RAW_CLICK,
  RAW_CUSTOM,
  RAW_PLACEMENT_ARRAY,
  RAW_BOTTOM,
  RAW_BOOLEAN,
  RAW_TOP,
  RAW_RIGHT,
  RAW_LEFT,
  RAW_NUMERIC,
  RAW_EVENT_BEFORE_DESTROY,
} from '../constant'

import {
  oneOf,
  contains,
  onTransitionEnd,
} from '../util'

const CLASS_VISIBLE = '${prefix}dropdown-visible'
const CLASS_FADE = '${prefix}dropdown-fade'

export default Yox.define({

  template,

  name: '${prefix}dropdown',

  propTypes: {
    placement: {
      type: oneOf(RAW_PLACEMENT_ARRAY),
      value: RAW_BOTTOM,
    },
    trigger: {
      type: oneOf([RAW_HOVER, RAW_CLICK, RAW_CUSTOM]),
      value: RAW_HOVER,
    },
    visible: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    height: {
      type: RAW_NUMERIC,
      value: 280,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  watchers: {
    // 同步外部的传值
    visible(visible, oldVisible) {
      const me = this
      const element = me.$el as HTMLElement
      const overlay = me.$refs.overlay as HTMLElement
      if (visible) {

        Yox.dom.addClass(element, CLASS_VISIBLE)

        // 用 js 计算的原因
        // 1. css transform 被动画占用了
        // 2. 兼容 IE

        let cssText = ''

        const width = overlay.offsetWidth
        const height = overlay.offsetHeight
        switch (me.get('placement')) {
          case RAW_BOTTOM:
          case RAW_TOP:
            cssText = `margin-left:${-0.5 * width}px`
            break
          case RAW_LEFT:
          case RAW_RIGHT:
            cssText = `margin-top:${-0.5 * height}px`
            break
        }

        overlay.style.cssText = cssText

        setTimeout(
          function () {
            Yox.dom.addClass(element, CLASS_FADE)
          },
          50
        )
      }
      else if (oldVisible) {
        Yox.dom.removeClass(element, CLASS_FADE)
        onTransitionEnd(
          overlay,
          function () {
            Yox.dom.removeClass(element, CLASS_VISIBLE)
          }
        )
      }
    }
  },

  data() {
    return {
      RAW_HOVER,
      RAW_CLICK,
      RAW_CUSTOM,
    }
  },

  events: {
    'click.dropdownItem': function () {
      this.fire('close.dropdown')
    }
  },

  methods: {
    enter() {
      const me = this as any
      if (me.leaveTimer) {
        clearTimeout(me.leaveTimer)
        me.leaveTimer = UNDEFINED
      }
      else {
        this.fire('open.dropdown')
      }
    },
    leave() {
      const me = this as any
      me.leaveTimer = setTimeout(
        function () {
          if (me.$el) {
            me.leaveTimer = UNDEFINED
            me.fire('close.dropdown')
          }
        },
        300
      )
    },
    toggleVisible() {
      if (this.get('visible')) {
        this.fire('close.dropdown')
      }
      else {
        this.fire('open.dropdown')
      }
    }
  },

  afterMount() {

    const me = this

    const onClick = function (event: CustomEventInterface) {
      if (!me.get('visible')) {
        return
      }
      const element = me.$el
      const target = event.originalEvent.target as HTMLElement
      if (contains(element, target)) {
        return
      }
      if (me.get('trigger') === RAW_CUSTOM) {
        me.fire('outside.dropdown')
      }
      else {
        me.fire('close.dropdown')
      }
    }

    Yox.dom.on(
      DOCUMENT,
      RAW_CLICK,
      onClick
    )

    me.on(
      RAW_EVENT_BEFORE_DESTROY,
      function (event) {
        if (event.phase === Yox.Event.PHASE_CURRENT) {
          Yox.dom.off(
            DOCUMENT,
            RAW_CLICK,
            onClick
          )
        }
      }
    )

  }
})