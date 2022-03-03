import Yox, { CustomEventInterface } from 'yox'

import template from './template/Slider.hbs'
// import './style/Slider.styl'

import Tooltip from '../tooltip/Tooltip'

import {
  TRUE,
  FALSE,
  UNDEFINED,
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
      // innerValue 在交互时不能变，交互完了之后，和 value 同步一次最新值即可
      innerValue: this.get('value'),
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
    valuePercentArray: {
      deps: ['innerValue', 'innerValue.*'],
      get() {
        const min = this.get('minNumber')
        const max = this.get('maxNumber')
        const innerValue = this.get('innerValue')
        if (Yox.is.array(innerValue)) {
          return [
            {
              value: innerValue[0],
              percent: getPercentByValue(min, max, innerValue[0])
            },
            {
              value: innerValue[1],
              percent: getPercentByValue(min, max, innerValue[1])
            },
          ]
        }
        return [
          {
            value: innerValue,
            percent: getPercentByValue(min, max, innerValue),
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
    formatBarStyle(valuePercentArray: any[], reverse: boolean, fromName: string, toName: string): any {

      let fromPercnet = valuePercentArray[0].percent
      let toPercent: number

      if (valuePercentArray[1]) {
        toPercent = valuePercentArray[1].percent
        if (fromPercnet > toPercent) {
          fromPercnet = valuePercentArray[1].percent
          toPercent = valuePercentArray[0].percent
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

  events: {
    outside: {
      listener(event) {
        if (event.phase !== Yox.Event.PHASE_UPWARD) {
          return
        }
        event.stop()
        this.set('showTooltipIndex', -1)
      },
      ns: 'tooltip'
    }
  },

  watchers: {
    'valuePercentArray.*.value': function () {
      // @ts-ignore
      this.refreshTooltip()
    },
    value(value) {
      if (this.get('hoverThumbIndex') < 0
        && this.get('dragThumbIndex') < 0
      ) {
        this.set('innerValue', value)
      }
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
      const dragThumbIndex = this.get('dragThumbIndex')
      if (dragThumbIndex >= 0) {
        if (dragThumbIndex === index) {
          this.set('hoverThumbIndex', index)
        }
      }
      else {
        this.set({
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
          showTooltipIndex: -1,
        })
      }
    },
    thumbMouseDown(event: CustomEventInterface, index: number) {
      event.stop()
      this.set({
        dragThumbIndex: index,
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
        const valuePercentArray = me.get('valuePercentArray')

        updatePosition(
          ratio,
          Math.abs(valuePercentArray[0].percent - percent) > Math.abs(valuePercentArray[1].percent - percent)
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

        me.set('innerValue.' + index, newValue)

        const value = me.copy(
          me.get('innerValue')
        )

        // 交换值
        if (value[0] > value[1]) {
          const temp = value[0]
          value[0] = value[1]
          value[1] = temp
        }

        me.set('value', value)

      }
      else {
        me.set({
          innerValue: newValue,
          value: newValue,
        })
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
      me.set(
        'innerValue',
        me.get('value')
      )
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