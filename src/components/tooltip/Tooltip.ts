import Yox from 'yox'

import template from './template/Tooltip.hbs'

import {
  TRUE,
  FALSE,
  UNDEFINED,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_CLICK,
  RAW_HOVER,
} from '../constant'

import {
  oneOf,
  toNumber,
  supportTransform,
  onTransitionEnd,
} from '../util'

const CLASS_VISIBLE = '${prefix}tooltip-visible'
const CLASS_FADE = '${prefix}tooltip-fade'

export default Yox.define({

  template,

  propTypes: {
    content: {
      type: RAW_STRING,
    },
    placement: {
      type: RAW_STRING,
      value: 'bottom',
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    delay: {
      type: RAW_NUMERIC,
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
    disabled() {
      this.setPosition()
    },
    isVisible(visible) {
      const element = this.$el
      const popup = this.$refs.popup as HTMLElement
      if (visible) {
        Yox.dom.addClass(element, CLASS_VISIBLE)
        this.setPosition()
        if (supportTransform) {
          setTimeout(
            function () {
              Yox.dom.addClass(element, CLASS_FADE)
            },
            20
          )
        }
      }
      else {
        if (supportTransform) {
          Yox.dom.removeClass(element, CLASS_FADE)
          onTransitionEnd(
            popup,
            function () {
              Yox.dom.removeClass(element, CLASS_VISIBLE)
            }
          )
        }
        else {
          Yox.dom.removeClass(element, CLASS_VISIBLE)
        }
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

      if (placement === 'bottom') {
        marginLeft = -(popupWidth / 2)
      }
      else if (placement === 'bottom-start') {
        marginLeft = 0
      }
      else if (placement === 'bottom-end') {
        marginLeft = 0
      }
      else if (placement === 'top') {
        marginLeft = -(popupWidth / 2)
        marginTop = -popupHeight
      }
      else if (placement === 'top-start') {
        marginTop = -popupHeight
      }
      else if (placement === 'top-end') {
        marginTop = -popupHeight
      }
      else if (placement === 'left') {
        marginLeft = -popupWidth
        marginTop = -(popupHeight / 2)
      }
      else if (placement === 'left-start') {
        marginLeft = -popupWidth
      }
      else if (placement === 'left-end') {
        marginLeft = -popupWidth
      }
      else if (placement === 'right') {
        marginTop = -(popupHeight / 2)
      }

      popupElement.style.marginLeft = (marginLeft + offsetX) + 'px'
      popupElement.style.marginTop = (marginTop + offsetY) + 'px'

    },

    enter() {
      const me = this as any
      me.set('isHover', TRUE)
      me.timer = setTimeout(
        function () {
          if (me.get('isHover')) {
            me.set('isVisible', TRUE)
          }
        },
        toNumber(me.get('delay'))
      )
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

  beforeDestroy() {
    const me = this as any
    if (me.timer) {
      clearTimeout(me.timer)
    }
  }

})
