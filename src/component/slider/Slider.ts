import Yox, { CustomEventInterface } from 'yox'

import template from './template/Slider.hbs'
// import './style/Slider.styl'

import Tooltip from '../tooltip/Tooltip'

import {
  TRUE,
  FALSE,
  DOCUMENT,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_FUNCTION,
  RAW_EVENT_MOUSEMOVE,
  RAW_EVENT_MOUSEUP,
  RAW_RIGHT,
  RAW_TOP,
  RAW_CUSTOM,
} from '../constant'

import {
  toNumber,
  getPageX,
  getPageY,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Slider',

  propTypes: {
    value: {
      type: RAW_NUMERIC,
      value: 0,
    },
    max: {
      type: RAW_NUMERIC,
      value: 100,
    },
    min: {
      type: RAW_NUMERIC,
      value: 0,
    },
    step: {
      type: RAW_NUMERIC,
      value: 1,
    },
    block: {
      type: RAW_BOOLEAN,
    },
    vertical: {
      type: RAW_BOOLEAN,
    },
    disabled: {
      type: RAW_BOOLEAN,
    },
    showStops: {
      type: RAW_BOOLEAN,
    },
    showTooltip: {
      type: RAW_BOOLEAN,
    },
    formatTooltip: {
      type: RAW_FUNCTION,
    },
    width: {
      type: RAW_NUMERIC,
    },
    height: {
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
      RAW_TOP,
      RAW_RIGHT,
      RAW_CUSTOM,
      thumbIsDragging: FALSE,
      mouseInThumb: FALSE,
      tooltipVisible: FALSE,
    }
  },

  computed: {
    percent(): number {

      const min = toNumber(this.get('min'))
      const max = toNumber(this.get('max'))
      const range = max - min

      let value = toNumber(this.get('value'))
      if (value > max) {
        value = max
      }
      else if (value < min) {
        value = min
      }

      return range > 0
        ? (value - min) / range * 100
        : 0

    },
    stops(): number[] {

      const min = toNumber(this.get('min'))
      const max = toNumber(this.get('max'))
      const step = toNumber(this.get('step'))
      const range = max - min

      const result: number[] = []

      if (max - min > step) {
        let count = Math.floor(range / step)
        let interval = 100 / count
        for (let i = 1; i < count; i++) {
          result.push(
            i * interval
          )
        }
      }

      return result

    }
  },

  watchers: {
    value() {
      this.nextTick(function () {
        const tooltip = this.$refs.tooltip as any
        tooltip.refresh()
      })
    },
    tooltipVisible(value, oldValue) {
      const tooltip = this.$refs.tooltip as any
      if (value) {
        tooltip.open()
      }
      else if (oldValue) {
        tooltip.close()
      }
    }
  },

  afterMount() {

    const me = this

    let isVertical = FALSE
    let min = 0
    let max = 0
    let step = 0

    let trackLeft = 0
    let trackTop = 0
    let trackRight = 0
    let trackBottom = 0

    const onMouseMove = function (event: CustomEventInterface) {

      const originalEvent = event.originalEvent as MouseEvent
      updatePosition(originalEvent.pageX, originalEvent.pageY)

    }

    const onMouseUp = function () {

      Yox.dom.off(DOCUMENT, RAW_EVENT_MOUSEMOVE, onMouseMove)
      Yox.dom.off(DOCUMENT, RAW_EVENT_MOUSEUP, onMouseUp)

      me.set('thumbIsDragging', FALSE)
      if (!me.get('mouseInThumb')) {
        me.set('tooltipVisible', FALSE)
      }

    }

    const updatePosition = function (x: number, y: number) {

      let ratio = 0

      if (isVertical) {
        if (y < trackTop) {
          y = trackTop
        }
        else if (y > trackBottom) {
          y = trackBottom
        }
        ratio = (trackBottom - y) / (trackBottom - trackTop)
      }
      else {
        if (x < trackLeft) {
          x = trackLeft
        }
        else if (x > trackRight) {
          x = trackRight
        }
        ratio = (x - trackLeft) / (trackRight - trackLeft)
      }

      let newValue = (max - min) * ratio + min
      if (step > 0) {
        let count = Math.round(newValue / step)
        me.set('value', step * count)
      }
      else {
        me.set('value', newValue)
      }

    }

    const updateValues = function () {

      isVertical = me.get('vertical')
      max = toNumber(me.get('max'))
      min = toNumber(me.get('min'))
      step = toNumber(me.get('step'))

      const { top, left, right, bottom } = me.$el.getBoundingClientRect()

      if (isVertical) {
        const pageY = getPageY()
        trackTop = pageY + top
        trackBottom = pageY + bottom
      }
      else {
        const pageX = getPageX()
        trackLeft = pageX + left
        trackRight = pageX + right
      }

    }

    me
    .on(
      'thumbMouseEnter.slider',
      function (event) {

        event.stop()

        me.set({
          mouseInThumb: TRUE,
          tooltipVisible: me.get('showTooltip'),
        })

      }
    )
    .on(
      'thumbMouseLeave.slider',
      function (event) {

        event.stop()

        me.set('mouseInThumb', FALSE)
        if (!me.get('thumbIsDragging')) {
          me.set('tooltipVisible', FALSE)
        }

      }
    )
    .on(
      'thumbMouseDown.slider',
      function (event) {

        event.stop()

        updateValues()

        Yox.dom.on(DOCUMENT, RAW_EVENT_MOUSEMOVE, onMouseMove)
        Yox.dom.on(DOCUMENT, RAW_EVENT_MOUSEUP, onMouseUp)

        me.set({
          thumbIsDragging: TRUE,
          tooltipVisible: me.get('showTooltip'),
        })

      }
    )
    .on(
      'trackClick.slider',
      function (event) {

        event.stop()

        updateValues()

        const originalEvent = event.originalEvent as MouseEvent
        updatePosition(originalEvent.pageX, originalEvent.pageY)

      }
    )

  },

  components: {
    Tooltip,
  },

})