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
  toPixel,
  toNumber,
  getPageX,
  getPageY,
  onTransitionEnd,
  readElementRectInfo,
} from '../util'

import {
  fireClickEvent,
  offClickEvent,
  onClickEvent,
  isClickEvent,
} from '../event'

const CLASS_POPOVER = '${prefix}popover'
const CLASS_POPOVER_TRANSITION = '${prefix}popover-transition'
const CLASS_POPOVER_FADE = '${prefix}popover-fade'

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
    widthAlign: {
      type: RAW_BOOLEAN,
    },
    showArrow: {
      type: RAW_BOOLEAN,
    },
    showDelay: {
      type: RAW_NUMERIC,
      value: HOVER_DELAY,
    },
    hideDelay: {
      type: RAW_NUMERIC,
      value: 300,
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
    click(event: CustomEventInterface) {
      event.stop()
      fireClickEvent(event, TRUE)
    },
    enter() {
      const me = this as any
      me.set('isHover', TRUE)

      if (me.leaveTimer) {
        clearTimeout(me.leaveTimer)
        me.leaveTimer = UNDEFINED
        return
      }

      const showDelay = toNumber(me.get('showDelay'))
      if (showDelay > 0) {
        me.enterTimer = setTimeout(
          function () {
            me.enterTimer = UNDEFINED
            if (me.get('isHover')) {
              me.fireOpen()
            }
          },
          showDelay
        )
      }
      else {
        me.fireOpen()
      }
    },
    leave() {
      const me = this as any
      me.set('isHover', FALSE)

      const hideDelay = toNumber(me.get('hideDelay'))
      if (hideDelay > 0) {
        me.leaveTimer = setTimeout(
          function () {
            me.leaveTimer = UNDEFINED
            me.fireClose()
          },
          hideDelay
        )
      }
      else {
        me.fireClose()
      }
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

    getOverlayRect() {

      const me = this as any

      const widthAlign = me.get('widthAlign')
      const placement = me.get('placement') || RAW_BOTTOM
      const offsetX = toNumber(me.get('offsetX'), 0)
      const offsetY = toNumber(me.get('offsetY'), 0)
      const gap = toNumber(me.get('gap'), 0)

      const triggerElement = me.$refs.trigger as HTMLElement
      const triggerRect = triggerElement.getBoundingClientRect()
      const triggerLeft = getPageX() + triggerRect.left
      const triggerTop = getPageY() + triggerRect.top

      let x = 0, y = 0, isVertical = FALSE

      if (placement === RAW_TOP
        || placement === RAW_TOP_START
        || placement === RAW_TOP_END
      ) {
        y = triggerTop - gap
        isVertical = TRUE
      }
      else if (placement === RAW_BOTTOM
        || placement === RAW_BOTTOM_START
        || placement === RAW_BOTTOM_END
      ) {
        y = triggerTop + triggerRect.height + gap
        isVertical = TRUE
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
        x: x + offsetX,
        y: y + offsetY,
        width: isVertical && widthAlign ? triggerRect.width : UNDEFINED,
      }

    },

    refreshOverlayRect() {

      const overlayElement = this.$refs.overlay as HTMLElement
      if (!overlayElement) {
        return
      }

      const overlayRect = this.getOverlayRect()
      this.setOverlayRect(
        overlayElement,
        overlayRect.x,
        overlayRect.y,
        overlayRect.width
      )

    },

    setOverlayRect(el: HTMLElement, x: number | void, y: number | void, width: number | void) {
      const target = el.style
      target.left = x != NULL ? toPixel(x as number) : ''
      target.top = y != NULL ? toPixel(y as number) : ''
      target.width = width != NULL ? toPixel(width as number) : ''
    },

  },

  transitions: {
    overlay: {
      enter(node) {

        const me = this as any

        const triggerElement = me.$refs.trigger as HTMLElement
        const placement = me.get('placement') || RAW_BOTTOM

        readElementRectInfo(
          triggerElement,
          function () {

            if (!me.$el || !me.get('visible')) {
              return
            }

            Yox.dom.addClass(node, CLASS_POPOVER)
            Yox.dom.addClass(node, '${prefix}popover-' + placement)
            if (me.get('showArrow')) {
              Yox.dom.addClass(node, '${prefix}popover-with-arrow')
            }

            const overlayRect = me.getOverlayRect()
            me.setOverlayRect(
              node,
              overlayRect.x,
              overlayRect.y,
              overlayRect.width
            )

            me.animateTimer = setTimeout(
              function () {
                Yox.dom.addClass(node, CLASS_POPOVER_TRANSITION)

                me.animateTimer = setTimeout(
                  function () {
                    Yox.dom.addClass(node, CLASS_POPOVER_FADE)
                  },
                  20
                )
              },
              30
            )

          }
        )

      },
      leave(node, done) {

        const me = this

        Yox.dom.removeClass(node, CLASS_POPOVER_FADE)

        onTransitionEnd(
          node,
          function () {
            me.setOverlayRect(node, UNDEFINED, UNDEFINED, UNDEFINED)
            Yox.dom.removeClass(node, CLASS_POPOVER_TRANSITION)
            Yox.dom.removeClass(node, CLASS_POPOVER)
            done()
          }
        )

      }
    }
  },

  afterMount() {

    const me = this as any

    const onNativeClick = function (event: CustomEventInterface) {
      if (!me.get('visible') || !isClickEvent()) {
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

    const onGlobalClick = function (event: CustomEventInterface, data: Data) {
      if (!data.isFromPopover) {
        onNativeClick(event)
      }
    }

    Yox.dom.on(
      DOCUMENT,
      RAW_CLICK,
      onNativeClick
    )

    onClickEvent(onGlobalClick)

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
        offClickEvent(onGlobalClick)
        Yox.dom.off(DOCUMENT, RAW_CLICK, onNativeClick)
        Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy)
      }
    }
    Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy)

  }

})
