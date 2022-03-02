import Yox, { CustomEventInterface } from 'yox'

import template from './template/Slider.hbs'
// import './style/Slider.styl'

import Tooltip from '../tooltip/Tooltip'

import {
  TRUE,
  FALSE,
  DOCUMENT,
  RAW_ARRAY,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_FUNCTION,
  RAW_EVENT_MOUSEMOVE,
  RAW_EVENT_MOUSEUP,
  RAW_RIGHT,
  RAW_TOP,
  RAW_CUSTOM,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  toNumber,
  getPageX,
  getPageY,
} from '../util'

import {
  fireClickEvent,
} from '../event'

function getPercentByValue(min: number, max: number, rawValue: any) {

  const range = max - min

  let value = toNumber(rawValue)

  if (value > max) {
    value = max
  }
  else if (value < min) {
    value = min
  }

  return range > 0
    ? (value - min) / range * 100
    : 0

}

export default Yox.define({

  template,

  name: '${prefix}Slider',

  propTypes: {
    value: {
      type: [RAW_NUMERIC, RAW_ARRAY],
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
    reverse: {
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
      type: RAW_STYLE_TYPE,
    }
  },

  data() {
    return {
      RAW_TOP,
      RAW_RIGHT,
      RAW_CUSTOM,
      inInteraction: FALSE,
      hoverThumbIndex: -1,
      dragThumbIndex: -1,
      showTooltipIndex: -1,
    }
  },

  computed: {
    isRange(): boolean {
      const value = this.get('value')
      return Yox.is.array(value)
    },
    minNumber(): number {
      return toNumber(this.get('min'))
    },
    maxNumber(): number {
      return toNumber(this.get('max'))
    },
    stepNumber(): number {
      return toNumber(this.get('step'))
    },
    percentArray: {
      deps: ['value', 'value.*'],
      get() {
        const min = this.get('minNumber')
        const max = this.get('maxNumber')
        const value = this.get('value')
        if (Yox.is.array(value)) {
          return [
            {
              value: value[0],
              percent: getPercentByValue(min, max, value[0])
            },
            {
              value: value[1],
              percent: getPercentByValue(min, max, value[1])
            },
          ]
        }
        return [
          {
            value,
            percent: getPercentByValue(min, max, value),
          }
        ]
      }
    },
    stops(): object[] {

      const vertical = this.get('vertical')
      const reverse = this.get('reverse')
      const min = this.get('minNumber')
      const max = this.get('maxNumber')
      const step = this.get('stepNumber')
      const range = max - min

      const result: object[] = []

      if (max - min > step) {
        let count = Math.floor(range / step)
        let interval = 100 / count
        for (let i = 1; i < count; i++) {

          let value = i * interval
          let percent = value + '%'

          result.push({
            value,
            style: vertical
              ? (reverse ? { top: percent } : { bottom: percent })
              : (reverse ? { right: percent } : { left: percent })
          })

        }
      }

      return result

    }
  },

  filters: {
    formatBarStyle(percentArray: any[], reverse: boolean, fromName: string, toName: string): any {

      let fromPercnet = percentArray[0].percent
      let toPercent: number

      if (percentArray[1]) {
        toPercent = percentArray[1].percent
        if (fromPercnet > toPercent) {
          fromPercnet = percentArray[1].percent
          toPercent = percentArray[0].percent
        }
      }
      else {
        toPercent = fromPercnet
        fromPercnet = 0
      }

      if (reverse) {
        const temp = fromName
        fromName = toName
        toName = temp
      }

      return {
        [fromName]: fromPercnet + '%',
        [toName]: (100 - toPercent) + '%'
      }

    },
    formatThumbStyle(percent: number, name: string): any {

      return {
        [name]: percent + '%'
      }

    }
  },

  watchers: {
    value() {
      // @ts-ignore
      this.refreshTooltip()
    },
    'value.*': function () {
      // @ts-ignore
      this.refreshTooltip()
    },
    showTooltipIndex(value, oldValue) {
      if (oldValue >= 0) {
        const tooltip = this.$refs['tooltip' + oldValue] as any
        tooltip.close()
      }
      if (value >= 0) {
        const tooltip = this.$refs['tooltip' + value] as any
        tooltip.open()
      }
    }
  },

  methods: {
    refreshTooltip() {
      const index = this.get('showTooltipIndex')
      if (index < 0) {
        return
      }
      this.nextTick(function () {
        const tooltip = this.$refs['tooltip' + index] as any
        tooltip.refresh()
      })
    },
    trackMouseDown(event: CustomEventInterface) {
      event.stop()
      fireClickEvent(event)
      // @ts-ignore
      this.onTrackMouseDown(event)
    },
    thumbMouseEnter(event: CustomEventInterface, index: number) {
      event.stop()
      if (!this.get('inInteraction')) {
        this.set({
          inInteraction: TRUE,
          hoverThumbIndex: index,
          showTooltipIndex: this.get('showTooltip') ? index : -1,
        })
      }
    },
    thumbMouseLeave(event: CustomEventInterface) {
      event.stop()
      this.set('hoverThumbIndex', -1)
      if (this.get('dragThumbIndex') < 0) {
        this.set({
          inInteraction: FALSE,
          showTooltipIndex: -1,
        })
      }
    },
    thumbMouseDown(event: CustomEventInterface, index: number) {
      event.stop()
      this.set({
        inInteraction: TRUE,
        dragThumbIndex: index,
        showTooltipIndex: this.get('showTooltip') ? index : -1,
      })
      // @ts-ignore
      this.onThumbMouseDown()
    }
  },

  afterMount() {

    const me = this

    let isRange = FALSE
    let dragThumbIndex = -1

    let isVertical = FALSE
    let isReverse = FALSE
    let min = 0
    let max = 0
    let step = 0

    let trackLeft = 0
    let trackTop = 0
    let trackRight = 0
    let trackBottom = 0

    const onTrackMouseDown = function (event: CustomEventInterface) {

      updateVariable()

      const { pageX, pageY } = event.originalEvent as MouseEvent
      const ratio = getRatio(pageX, pageY)

      if (isRange) {
        // 当前坐标距离哪个 thumb 近就移动哪个
        const percent = ratio * 100
        const percentArray = me.get('percentArray')

        updatePosition(
          ratio,
          Math.abs(percentArray[0].percent - percent) > Math.abs(percentArray[1].percent - percent)
            ? 1
            : 0
        )

        updateValue()

      }
      else {
        updatePosition(ratio)
      }

    }

    const onThumbMouseDown = function () {

      updateVariable()

      Yox.dom.on(DOCUMENT, RAW_EVENT_MOUSEMOVE, onThumbMouseMove)
      Yox.dom.on(DOCUMENT, RAW_EVENT_MOUSEUP, onThumbMouseUp)

    }

    const onThumbMouseMove = function (event: CustomEventInterface) {

      const { pageX, pageY } = event.originalEvent as MouseEvent

      updatePosition(
        getRatio(pageX, pageY),
        dragThumbIndex
      )

    }

    const onThumbMouseUp = function () {

      Yox.dom.off(DOCUMENT, RAW_EVENT_MOUSEMOVE, onThumbMouseMove)
      Yox.dom.off(DOCUMENT, RAW_EVENT_MOUSEUP, onThumbMouseUp)

      updateValue()

      me.set('dragThumbIndex', -1)
      if (me.get('hoverThumbIndex') < 0) {
        me.set({
          inInteraction: FALSE,
          showTooltipIndex: -1,
        })
      }

    }

    const getRatio = function (x: number, y: number) {

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

      return isReverse ? (1 - ratio) : ratio

    }

    const updatePosition = function (ratio: number, index?: number) {

      let newValue = (max - min) * ratio + min
      if (step > 0) {
        let count = Math.round(newValue / step)
        newValue = step * count
      }

      if (isRange) {
        me.set('value.' + index, newValue)
      }
      else {
        me.set('value', newValue)
      }

    }

    const updateVariable = function () {

      isRange = me.get('isRange')
      dragThumbIndex = me.get('dragThumbIndex')

      isVertical = me.get('vertical')
      isReverse = me.get('reverse')
      max = me.get('maxNumber')
      min = me.get('minNumber')
      step = me.get('stepNumber')

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

    const updateValue = function () {

      const value = me.get('value')

      if (Yox.is.array(value)) {

        const value = me.copy(me.get('value'))

        // 交换值
        if (value[0] > value[1]) {
          value[0] = value.splice(1, 1, value[0])[0]
        }

        me.set('value', value)

      }
    }

    // @ts-ignore
    this.onTrackMouseDown = onTrackMouseDown
    // @ts-ignore
    this.onThumbMouseDown = onThumbMouseDown

  },

  components: {
    Tooltip,
  },

})