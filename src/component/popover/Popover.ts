import Yox, { YoxInterface, CustomEventInterface, Data } from 'yox'

import template from './template/Popover.hbs'
// import './style/Popover.styl'

import {
  NULL,
  TRUE,
  FALSE,
  UNDEFINED,
  DOCUMENT,
  RAW_NUMERIC,
  RAW_HOVER,
  RAW_CLICK,
  RAW_CUSTOM,
  RAW_BOOLEAN,
  RAW_EVENT_BEFORE_DESTROY,
  RAW_BOTTOM,
  RAW_TOP,
  RAW_LEFT,
  RAW_RIGHT,
  RAW_PLACEMENT_ARRAY,
  RAW_TOP_START,
  RAW_TOP_END,
  RAW_LEFT_START,
  RAW_LEFT_END,
  RAW_RIGHT_START,
  RAW_RIGHT_END,
  RAW_BOTTOM_START,
  RAW_BOTTOM_END,
} from '../constant'

import {
  oneOf,
  contains,
  toNumber,
  onTransitionEnd,
} from '../util'

const CLASS_OVERLAY = '${prefix}popover-overlay'
const CLASS_OVERLAY_TRANSITION = '${prefix}popover-overlay-transition'
const CLASS_OVERLAY_FADE = '${prefix}popover-overlay-fade'

export default Yox.define({

  template,

  name: '${prefix}Popover',

  propTypes: {
    placement: {
      type: oneOf(RAW_PLACEMENT_ARRAY),
      value: RAW_BOTTOM,
    },
    trigger: {
      type: oneOf([RAW_HOVER, RAW_CLICK, RAW_CUSTOM]),
      value: RAW_HOVER,
    },
    disabled: {
      type: RAW_BOOLEAN,
    },
    visible: {
      type: RAW_BOOLEAN,
    },
    offsetX: {
      type: RAW_NUMERIC,
    },
    offsetY: {
      type: RAW_NUMERIC,
    },
    gap: {
      type: RAW_NUMERIC,
      value: 5,
    },
  },

  data() {
    return {
      overlayStyle: UNDEFINED,
      addFadeStyle: UNDEFINED,
      removeFadeStyle: UNDEFINED,
      RAW_HOVER,
      RAW_CLICK,
      RAW_CUSTOM,
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
        this.fire({
          type: 'open',
          ns: 'popover',
        })
      }
    },
    leave() {
      const me = this as any
      me.leaveTimer = setTimeout(
        function () {
          if (me.$el) {
            me.leaveTimer = UNDEFINED
            me.fire({
              type: 'close',
              ns: 'popover',
            })
          }
        },
        300
      )
    },
    toggleVisible() {
      if (this.get('visible')) {
        this.fire({
          type: 'close',
          ns: 'popover',
        })
      }
      else {
        this.fire({
          type: 'open',
          ns: 'popover',
        })
      }
    },

    setOverlayStyle(el: HTMLElement, style: Data, clear?: boolean) {
      const target = el.style
      for (let key in style) {
        target[key] = style[key] != NULL && !clear ? style[key] : ''
      }
    },

  },

  transitions: {
    overlay: {
      enter(node) {

        const me = this as any

        const placement = me.get('placement')
        const offsetX = toNumber(me.get('offsetX')) || 0
        const offsetY = toNumber(me.get('offsetY')) || 0
        const gap = toNumber(me.get('gap'))

        const triggerElement = me.$refs.trigger as HTMLElement
        const triggerRect = triggerElement.getBoundingClientRect()
        const triggerLeft = window.pageXOffset + triggerRect.left
        const triggerTop = window.pageYOffset + triggerRect.top

        Yox.dom.addClass(node, CLASS_OVERLAY)
        Yox.dom.addClass(node, '${prefix}popover-overlay-' + placement)

        let x = 0, y = 0

        if (placement === RAW_TOP
          || placement === RAW_TOP_START
          || placement === RAW_TOP_END
        ) {
          y = triggerTop - gap
        }
        else if (placement === RAW_BOTTOM
          || placement === RAW_BOTTOM_START
          || placement === RAW_BOTTOM_END
        ) {
          y = triggerTop + triggerRect.height + gap
        }
        else if (placement === RAW_LEFT
          || placement === RAW_LEFT_START
          || placement === RAW_LEFT_END
        ) {
          x = triggerLeft - gap
        }
        else if (placement === RAW_RIGHT
          || placement === RAW_RIGHT_START
          || placement === RAW_RIGHT_END
        ) {
          x = triggerLeft + triggerRect.width + gap
        }

        if (placement === RAW_TOP
          || placement === RAW_BOTTOM
        ) {
          x = triggerLeft + 0.5 * triggerRect.width
        }
        else if (placement === RAW_TOP_START
          || placement === RAW_BOTTOM_START
        ) {
          x = triggerLeft
        }
        else if (placement === RAW_TOP_END
          || placement === RAW_BOTTOM_END
        ) {
          x = triggerLeft + triggerRect.width
        }
        else if (placement === RAW_LEFT
          || placement === RAW_RIGHT
        ) {
          y = triggerTop + 0.5 * triggerRect.height
        }
        else if (placement === RAW_LEFT_START
          || placement === RAW_RIGHT_START
        ) {
          y = triggerTop
        }
        else if (placement === RAW_LEFT_END
          || placement === RAW_RIGHT_END
        ) {
          y = triggerTop + triggerRect.height
        }

        const overlayStyle = {
          left: (x + offsetX) + 'px',
          top: (y + offsetY) + 'px',
        }

        me.set({
          overlayStyle,
        })

        me.setOverlayStyle(node, overlayStyle)

        me.animateTimer = setTimeout(
          function () {
            Yox.dom.addClass(node, CLASS_OVERLAY_TRANSITION)

            me.animateTimer = setTimeout(
              function () {
                Yox.dom.addClass(node, CLASS_OVERLAY_FADE)
              },
              20
            )
          },
          20
        )

      },
      leave(node, done) {

        const me = this

        const overlayStyle = me.get('overlayStyle')
        if (!overlayStyle) {
          done()
          return
        }

        Yox.dom.removeClass(node, CLASS_OVERLAY_FADE)

        onTransitionEnd(
          node,
          function () {
            me.setOverlayStyle(node, overlayStyle, TRUE)
            Yox.dom.removeClass(node, CLASS_OVERLAY_TRANSITION)
            Yox.dom.removeClass(node, CLASS_OVERLAY)
            done()
          }
        )

      }
    }
  },

  afterMount() {

    const me = this as any

    const onClick = function (event: CustomEventInterface) {
      if (!me.get('visible')) {
        return
      }
      const trigger = me.$refs.trigger as HTMLElement
      const overlay = me.$refs.overlay as HTMLElement
      const target = event.originalEvent.target as HTMLElement
      if (contains(trigger, target) || contains(overlay, target)) {
        return
      }
      if (me.get('trigger') === RAW_CUSTOM) {
        me.fire({
          type: 'outside',
          ns: 'popover',
        })
      }
      else {
        me.fire({
          type: 'close',
          ns: 'popover',
        })
      }
    }

    Yox.dom.on(
      DOCUMENT,
      RAW_CLICK,
      onClick
    )

    const destroy = function (component: YoxInterface) {
      if (component === me) {
        if (me.leaveTimer) {
          clearTimeout(me.leaveTimer)
        }
        if (me.animateTimer) {
          clearTimeout(me.animateTimer)
        }
        Yox.dom.off(DOCUMENT, RAW_CLICK, onClick)
        Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy)
      }
    }
    Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy)

  }

})
