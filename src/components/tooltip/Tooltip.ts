import Yox, { CustomEventInterface } from 'yox'

import template from './template/Tooltip.hbs'

import {
  TRUE,
  FALSE,
  DOCUMENT,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_CLICK,
  RAW_HOVER,
  RAW_PLACEMENT_ARRAY,
  RAW_BOTTOM,
  HOVER_DELAY,
  RAW_RIGHT,
  RAW_LEFT_END,
  RAW_LEFT_START,
  RAW_LEFT,
  RAW_TOP_END,
  RAW_TOP_START,
  RAW_TOP,
  RAW_BOTTOM_START,
  RAW_BOTTOM_END,
  RAW_THEME_ARRAY,
  RAW_DARK,
} from '../constant'

import {
  oneOf,
  toNumber,
  contains,
  onTransitionEnd,
} from '../util'

const CLASS_VISIBLE = '${prefix}tooltip-visible'
const CLASS_FADE = '${prefix}tooltip-fade'
const CLASS_DISABLED = '${prefix}tooltip-disabled'

export default Yox.define({

  template,

  propTypes: {
    content: {
      type: RAW_STRING,
    },
    theme: {
      type: oneOf(RAW_THEME_ARRAY),
      value: RAW_DARK,
    },
    placement: {
      type: oneOf(RAW_PLACEMENT_ARRAY),
      value: RAW_BOTTOM,
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    delay: {
      type: RAW_NUMERIC,
      value: HOVER_DELAY,
    },
    mode: {
      type: oneOf([RAW_CLICK, RAW_HOVER]),
      value: RAW_HOVER,
    },
    maxWidth: {
      type: RAW_NUMERIC,
    },
    maxHeight: {
      type: RAW_NUMERIC,
    },
    offsetX: {
      type: RAW_NUMERIC,
    },
    offsetY: {
      type: RAW_NUMERIC,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data() {
    return {
      isVisible: FALSE,
      isHover: FALSE,
    }
  },

  watchers: {
    disabled(disabled) {
      if (disabled) {
        Yox.dom.addClass(this.$el, CLASS_DISABLED)
      }
      else {
        Yox.dom.removeClass(this.$el, CLASS_DISABLED)
      }
      this.set('isVisible', FALSE)
    },
    isVisible(visible) {
      const element = this.$el
      const popup = this.$refs.popup as HTMLElement
      if (visible) {
        Yox.dom.addClass(element, CLASS_VISIBLE)
        this.setPosition()
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
          popup,
          function () {
            Yox.dom.removeClass(element, CLASS_VISIBLE)
          }
        )
      }
    }
  },

  methods: {
    setPosition() {
      const me = this
      const placement = me.get('placement')
      const offsetX = toNumber(me.get('offsetX'))
      const offsetY = toNumber(me.get('offsetY'))

      const popupElement = this.$refs.popup as HTMLElement
      const popupWidth = popupElement.offsetWidth
      const popupHeight = popupElement.offsetHeight

      let marginLeft = 0
      let marginTop = 0

      if (placement === RAW_BOTTOM) {
        marginLeft = -(popupWidth / 2)
      }
      else if (placement === RAW_BOTTOM_START) {
        marginLeft = 0
      }
      else if (placement === RAW_BOTTOM_END) {
        marginLeft = 0
      }
      else if (placement === RAW_TOP) {
        marginLeft = -(popupWidth / 2)
        marginTop = -popupHeight
      }
      else if (placement === RAW_TOP_START) {
        marginTop = -popupHeight
      }
      else if (placement === RAW_TOP_END) {
        marginTop = -popupHeight
      }
      else if (placement === RAW_LEFT) {
        marginLeft = -popupWidth
        marginTop = -(popupHeight / 2)
      }
      else if (placement === RAW_LEFT_START) {
        marginLeft = -popupWidth
      }
      else if (placement === RAW_LEFT_END) {
        marginLeft = -popupWidth
      }
      else if (placement === RAW_RIGHT) {
        marginTop = -(popupHeight / 2)
      }

      popupElement.style.marginLeft = (marginLeft + offsetX) + 'px'
      popupElement.style.marginTop = (marginTop + offsetY) + 'px'

    },

    enter() {
      const me = this as any
      const delay = toNumber(me.get('delay'))
      if (delay > 0) {
        me.set('isHover', TRUE)
        me.timer = setTimeout(
          function () {
            if (me.get('isHover')) {
              me.set('isVisible', TRUE)
            }
          },
          delay
        )
      }
      else {
        me.set('isVisible', TRUE)
      }
    },

    leave() {
      this.set({
        isVisible: FALSE,
        isHover: FALSE,
      })
    },

    click() {
      this.toggle('isVisible')
    }
  },

  afterMount() {

    const me = this

    if (me.get('mode') === RAW_CLICK) {

      const onClick = function (event: CustomEventInterface) {
        if (!me.get('isVisible')) {
          return
        }
        const element = me.$el
        const target = event.originalEvent.target as HTMLElement
        if (contains(element, target)) {
          return
        }
        me.set('isVisible', FALSE)
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
  },

  beforeDestroy() {
    const me = this as any
    if (me.timer) {
      clearTimeout(me.timer)
    }
  }

})
