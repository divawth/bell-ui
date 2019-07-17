import Yox, { CustomEvent } from 'yox'

import template from './template/Slider.hbs'

import { requestAnimationFrame } from '../util'

import {
  TRUE,
  FALSE,
  RAW_ARRAY,
  RAW_NUMBER,
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

export default Yox.define({
  propTypes: {
    type: {
      type: RAW_STRING
    },
    value: {
      type: [RAW_NUMBER, RAW_ARRAY],
      value: 40
    },
    max: {
      type: RAW_NUMBER,
      value: 100
    },
    min: {
      type: RAW_NUMBER,
      value: 0
    },
    step: {
      type: RAW_NUMBER,
      value: 1
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template,

  data() {
    return {
      dragging: FALSE
    }
  },

  computed: {
    percent(): number | string {
      let range = this.get('max') - this.get('min')
      let percentNum = range > 0
        ? (this.get('value') - this.get('min')) / range * 100
        : 0

      return percentNum > 100
        ? 100
        : (percentNum < 0 ? 0 : percentNum.toFixed(2))
    }
  },

  methods: {
    handleTouchStart(event: CustomEvent) {
      let me = this
      if (me.get('disabled')) {
        return
      }
      me.setValue(event.originalEvent as TouchEvent)
      Yox.dom.on(
        document,
        'touchmove',
        me.handleTouchMove
      )
      Yox.dom.on(
        document,
        'touchup',
        me.handleTouchEnd
      )

      Yox.dom.on(
        document,
        'touchend',
        me.handleTouchEnd
      )
      Yox.dom.on(
        document,
        'touchcancel',
        me.handleTouchEnd
      )
      event.prevent()
      me.onDragStart()
    },

    handleTouchEnd(event: CustomEvent) {
      let me = this
      if (me.get('disabled')) {
        return
      }
      Yox.dom.off(
        document,
        'touchmove',
        me.handleTouchMove
      )
      Yox.dom.off(
        document,
        'touchup',
        me.handleTouchEnd
      )
      Yox.dom.off(
        document,
        'touchend',
        me.handleTouchEnd
      )
      Yox.dom.off(
        document,
        'touchcancel',
        me.handleTouchEnd
      )
      event.prevent()
      me.onDragStop()
    },

    handleTouchMove(event: CustomEvent) {
      this.onDragUpdate(event.originalEvent as TouchEvent)
    },

    handleDragMouseMove(event: CustomEvent) {
      this.onDragUpdate(event.originalEvent as MouseEvent)
    },

    handleMouseDown(event: CustomEvent) {
      let me = this
      if (me.get('disabled')) {
        return
      }
      me.setValue(event.originalEvent as MouseEvent)
      Yox.dom.on(
        document,
        'mousemove',
        me.handleDragMouseMove
      )
      Yox.dom.on(
        document,
        'mouseup',
        me.handleDragMouseEnd
      )
      event.prevent()
      me.onDragStart()
    },

    handleDragMouseEnd() {
      let me = this
      if (me.get('disabled')) {
        return
      }
      Yox.dom.off(
        document,
        'mousemove',
        me.handleDragMouseMove
      )
      Yox.dom.off(
        document,
        'mouseup',
        me.handleDragMouseEnd
      )
      me.onDragStop()
    },

    onDragStart() {
      this.set({
        dragging: TRUE
      })
      this.fire('dragStart')
    },

    onDragStop() {
      this.set({
        dragging: FALSE
      })
      this.fire('dragStop')
    },

    onDragUpdate(event: TouchEvent | MouseEvent) {
      let me = this
      if (me.get('draging')) {
        return
      }
      me.set('draging', TRUE)

      requestAnimationFrame(function () {
        me.set('draging', FALSE)
        if (!me.get('disabled')) {
          me.setValue(event)
        }
      })
    },

    setValue(event: TouchEvent | MouseEvent) {

      let clientX = (event as TouchEvent).touches
        ? (event as TouchEvent).touches[0].clientX
        : (event as MouseEvent).clientX

      let me = this
      let element = me.$el
      let oldValue = me.get('value')
      let elementLeft = element.getBoundingClientRect().left
      let elementWidth = element.offsetWidth
      let min = me.get('min')
      let max = me.get('max')
      let range = max - min
      let value = 0
      value = elementWidth && ((clientX - elementLeft) / elementWidth * range)
      value = Math.round(value / me.get('step')) * me.get('step') + min
      value = parseFloat(value.toFixed(5))

      value = value > max
        ? max
        : (value < min ? min : value)

      if (value !== oldValue) {
        me.set({
          value: value
        })
        me.fire(
          'change.slider',
          {
            value: value,
            oldValue: oldValue
          }
        )
      }
    }
  }
})