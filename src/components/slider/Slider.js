import template from './template/Slider.html'
import { requestAnimationFrame } from '../util'
import { RAW_ARRAY, RAW_NUMBER, RAW_STRING, RAW_BOOLEAN, FALSE, TRUE } from '../constant'

export default {
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
    percent() {
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
    handleTouchStart(event) {
      let me = this
      if (me.get('disabled')) {
        return
      }
      me.setValue(event)
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
      me.onDragStart(event)
    },

    handleTouchEnd(event) {
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
      me.onDragStop(event)
    },

    handleTouchMove(event) {
      this.onDragUpdate(event)
    },

    handleDragMouseMove(event) {
      this.onDragUpdate(event)
    },

    handleMouseDown(event) {
      let me = this
      if (me.get('disabled')) {
        return
      }
      me.setValue(event)
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

    onDragUpdate(event) {
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

    setValue(event) {

      event = event.originalEvent
      let clientX = event.touches ? event.touches[0].clientX : event.clientX

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

  },

  afterMount() {
    let me = this
    me.handleDragMouseMove = me.handleDragMouseMove.bind(me)
    me.handleDragMouseEnd = me.handleDragMouseEnd.bind(me)
    me.handleTouchMove = me.handleTouchMove.bind(me)
    me.handleTouchEnd = me.handleTouchEnd.bind(me)
  }
}