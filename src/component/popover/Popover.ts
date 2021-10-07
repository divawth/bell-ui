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
  HOVER_DELAY,
} from '../constant'

import {
  oneOf,
  contains,
  toNumber,
  getPageX,
  getPageY,
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
    delay: {
      type: RAW_NUMERIC,
      value: HOVER_DELAY,
    },
    offsetX: {
      type: RAW_NUMERIC,
    },
    offsetY: {
      type: RAW_NUMERIC,
    },
    gap: {
      type: RAW_NUMERIC,
    },
  },

  data() {
    return {
      isHover: FALSE,
      RAW_HOVER,
      RAW_CLICK,
      RAW_CUSTOM,
    }
  },

  watchers: {
    disabled(value) {
      if (value && this.get('visible')) {
        this.fireClose()
      }
    }
  },

  methods: {
    enter() {
      const me = this as any
      me.set('isHover', TRUE)

      if (me.leaveTimer) {
        clearTimeout(me.leaveTimer)
        me.leaveTimer = UNDEFINED
        return
      }

      const delay = toNumber(me.get('delay'))
      if (delay > 0) {
        me.enterTimer = setTimeout(
          function () {
            if (me.get('isHover')) {
              me.fireOpen()
            }
          },
          delay
        )
      }
      else {
        me.fireOpen()
      }
    },
    leave() {
      const me = this as any
      me.set('isHover', FALSE)
      me.leaveTimer = setTimeout(
        function () {
          me.fireClose()
        },
        300
      )
    },
    fireOpen() {

      const me = this as any

      if (me.enterTimer) {
        clearTimeout(me.enterTimer)
        me.enterTimer = UNDEFINED
      }

      me.fire({
        type: 'open',
        ns: 'popover',
      })

    },
    fireClose() {

      const me = this as any

      if (me.leaveTimer) {
        clearTimeout(me.leaveTimer)
        me.leaveTimer = UNDEFINED
      }

      me.fire({
        type: 'close',
        ns: 'popover',
      })

    },
    toggleVisible() {
      if (this.get('visible')) {
        this.fireClose()
      }
      else {
        this.fireOpen()
      }
    },

    getOverlayPosition() {

      const me = this as any

      const placement = me.get('placement')
      const offsetX = toNumber(me.get('offsetX'), 0)
      const offsetY = toNumber(me.get('offsetY'), 0)
      const gap = toNumber(me.get('gap'), 0)

      const triggerElement = me.$refs.trigger as HTMLElement
      const triggerRect = triggerElement.getBoundingClientRect()
      const triggerLeft = getPageX() + triggerRect.left
      const triggerTop = getPageY() + triggerRect.top

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

      return {
        left: x + offsetX,
        top: y + offsetY,
      }

    },

    refreshOverlayPosition() {

      const overlayElement = this.$refs.overlay as HTMLElement
      if (!overlayElement) {
        return
      }

      const overlayPosition = this.getOverlayPosition()
      this.setOverlayPosition(
        overlayElement,
        overlayPosition.left,
        overlayPosition.top
      )

    },

    setOverlayPosition(el: HTMLElement, left: number | void, top: number | void) {
      const target = el.style
      target.left = left != NULL ? left + 'px' : ''
      target.top = top != NULL ? top + 'px' : ''
    },

  },

  transitions: {
    overlay: {
      enter(node) {

        const me = this as any

        const placement = me.get('placement')

        Yox.dom.addClass(node, CLASS_OVERLAY)
        Yox.dom.addClass(node, '${prefix}popover-overlay-' + placement)

        const overlayPosition = me.getOverlayPosition()
        me.setOverlayPosition(
          node,
          overlayPosition.left,
          overlayPosition.top
        )

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
          30
        )

      },
      leave(node, done) {

        const me = this

        Yox.dom.removeClass(node, CLASS_OVERLAY_FADE)

        onTransitionEnd(
          node,
          function () {
            me.setOverlayPosition(node, UNDEFINED, UNDEFINED)
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
        me.fireClose()
      }
    }

    Yox.dom.on(
      DOCUMENT,
      RAW_CLICK,
      onClick
    )

    const destroy = function (component: YoxInterface) {
      if (component === me) {
        if (me.enterTimer) {
          clearTimeout(me.enterTimer)
        }
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
