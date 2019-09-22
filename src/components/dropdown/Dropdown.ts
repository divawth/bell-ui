import Yox, { CustomEventInterface } from 'yox'

import template from './template/Dropdown.hbs'

import {
  TRUE,
  FALSE,
  UNDEFINED,
  DOCUMENT,
  RAW_STRING,
  RAW_HOVER,
  RAW_CLICK,
  RAW_CUSTOM,
  RAW_PLACEMENT_ARRAY,
  RAW_BOTTOM,
  RAW_NUMBER,
  RAW_BOOLEAN,
  RAW_TOP,
  RAW_RIGHT,
  RAW_LEFT,
  RAW_NUMERIC,
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
    visible(isOpen: boolean) {
      this.set({ isOpen })
    },
    isOpen(isOpen: boolean) {
      const me = this
      const element = me.$el as HTMLElement
      const list = me.$refs.list as HTMLElement
      if (isOpen) {

        Yox.dom.addClass(element, CLASS_VISIBLE)

        // 用 js 计算的原因
        // 1. css transform 被动画占用了
        // 2. 兼容 IE

        let cssText = ''

        const width = list.offsetWidth
        const height = list.offsetHeight
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

        list.style.cssText = cssText

        setTimeout(
          function () {
            Yox.dom.addClass(element, CLASS_FADE)
          },
          20
        )
      }
      else {
        Yox.dom.removeClass(element, CLASS_FADE)
        onTransitionEnd(
          list,
          function () {
            Yox.dom.removeClass(element, CLASS_VISIBLE)
          }
        )
      }
    }
  },

  data() {
    return {
      isOpen: FALSE,
      RAW_HOVER,
      RAW_CLICK,
      RAW_CUSTOM,
    }
  },

  events: {
    'click.dropdownItem': function () {
      this.set('isOpen', FALSE)
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
        this.set('isOpen', TRUE)
      }
    },
    leave() {
      const me = this as any
      me.leaveTimer = setTimeout(
        function () {
          me.leaveTimer = UNDEFINED
          me.set('isOpen', FALSE)
        },
        300
      )
    }
  },

  afterMount() {

    const me = this

    const triggerByCustom = me.get('trigger') === RAW_CUSTOM

    const onClick = function (event: CustomEventInterface) {
      if (!me.get('isOpen')) {
        return
      }
      const element = me.$el
      const target = event.originalEvent.target as HTMLElement
      if (contains(element, target)) {
        return
      }
      if (triggerByCustom) {
        me.fire('outside.dropdown')
      }
      else {
        me.set('isOpen', FALSE)
      }
    }

    Yox.dom.on(
      DOCUMENT,
      RAW_CLICK,
      onClick
    )

    me.on(
      'beforeDestroy.hook',
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