import Yox, { CustomEventInterface } from 'yox'

import template from './template/Slider.hbs'
// import './style/Slider.styl'

import Tooltip from '../tooltip/Tooltip'

import {
  UNDEFINED,
  DOCUMENT,
  RAW_ARRAY,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_FUNCTION,
  RAW_EVENT_MOUSEMOVE,
  RAW_EVENT_MOUSEUP,
  RAW_TOP,
  RAW_RIGHT,
  RAW_CUSTOM,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  toPixel,
  toNumber,
} from '../util'

import {
  endDrag,
  startDrag,
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

    },
    inlineStyle(): object[] | void {
      const result: object[] = []

      const width = this.get('width')
      const height = this.get('height')

      if (width || height) {
        const customStyle: Record<string, string> = {}
        if (width) {
          customStyle.width = toPixel(width)
        }
        if (height) {
          customStyle.height = toPixel(height)
        }
        result.push(customStyle)
      }

      const style = this.get('style')
      if (style) {
        result.push(style)
      }

      if (result.length > 0) {
        return result
      }
    },
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
    hoverThumbIndex(index) {
      if (index >= 0) {
        this.set('showTooltipIndex', this.get('showTooltip') ? index : -1)
      }
      else if (this.get('dragThumbIndex') < 0) {
        this.set('showTooltipIndex', -1)
      }
    },
    dragThumbIndex(index) {
      if (index < 0 && this.get('hoverThumbIndex') < 0) {
        this.set('showTooltipIndex', -1)
      }
    },
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
    onThumbMouseEnter(event: CustomEventInterface, index: number) {
      event.stop()
      const dragThumbIndex = this.get('dragThumbIndex')
      if (dragThumbIndex >= 0) {
        if (dragThumbIndex === index) {
          this.set('hoverThumbIndex', index)
        }
      }
      else {
        this.set('hoverThumbIndex', index)
      }
    },
    onThumbMouseLeave(event: CustomEventInterface) {
      event.stop()
      this.set('hoverThumbIndex', -1)
    },
  },

  afterMount() {

    const me = this

    let element: HTMLElement | void
    let dragThumbIndex = -1
    let min = 0
    let max = 0
    let step = 0

    const onTrackMouseDown = function (event: CustomEventInterface) {

      event.stop()

      element = (event.originalEvent as MouseEvent).currentTarget as HTMLElement
      if (!element) {
        return
      }

      max = me.get('maxNumber')
      min = me.get('minNumber')
      step = me.get('stepNumber')

      const ratio = getRatio(event)

      dragThumbIndex = 0
      if (me.get('isRange')) {
        // 当前坐标距离哪个 thumb 近就移动哪个
        const percent = ratio * 100
        const valuePercentArray = me.get('valuePercentArray')

        if (Math.abs(valuePercentArray[0].percent - percent) > Math.abs(valuePercentArray[1].percent - percent)) {
          dragThumbIndex = 1
        }

        updatePosition(
          ratio,
          dragThumbIndex
        )
      }
      else {
        updatePosition(ratio)
      }

      me.set('dragThumbIndex', dragThumbIndex)

      startDrag()

      Yox.dom.on(DOCUMENT, RAW_EVENT_MOUSEMOVE, onTrackMouseMove)
      Yox.dom.on(DOCUMENT, RAW_EVENT_MOUSEUP, onTrackMouseUp)

    }

    const onTrackMouseMove = function (event: CustomEventInterface) {

      updatePosition(
        getRatio(event),
        dragThumbIndex
      )

    }

    const onTrackMouseUp = function () {

      Yox.dom.off(DOCUMENT, RAW_EVENT_MOUSEMOVE, onTrackMouseMove)
      Yox.dom.off(DOCUMENT, RAW_EVENT_MOUSEUP, onTrackMouseUp)

      me.set('dragThumbIndex', -1)

      element = UNDEFINED
      endDrag()

    }

    const getRatio = function (event: CustomEventInterface) {

      const mouseEvent = event.originalEvent as MouseEvent
      const rect = (element as HTMLElement).getBoundingClientRect()

      let ratio = me.get('vertical')
        ? (rect.bottom - mouseEvent.clientY) / rect.height
        : (mouseEvent.clientX - rect.left) / rect.width

      if (ratio < 0) {
        ratio = 0
      }
      else if (ratio > 1) {
        ratio = 1
      }

      console.log(element, rect)
      console.log(mouseEvent.clientX)
      console.log(ratio)

      return me.get('reverse') ? (1 - ratio) : ratio

    }

    const updatePosition = function (ratio: number, index?: number) {

      let newValue = (max - min) * ratio + min
      if (step > 0) {
        let count = Math.round(newValue / step)
        newValue = step * count
      }

      if (me.get('isRange')) {

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

    // @ts-ignore
    this.onTrackMouseDown = onTrackMouseDown

  },

  components: {
    Tooltip,
  },

})