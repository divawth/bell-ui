import Yox, { CustomEventInterface } from 'yox'

import Popover from '../popover/Popover'
import TimePanel from './TimePanel'

import template from './template/TimePicker.hbs'
// import './style/TimePicker.styl'

import {
  FALSE,
  UNDEFINED,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_BOTTOM_START,
  RAW_SIZE_ARRAY,
  RAW_DEFAULT,
  RAW_PLACEMENT_ARRAY,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_ERROR,
  RAW_TYPE_WARNING,
  RAW_CUSTOM,
} from '../constant'

import {
  toTimeProps,
  formatTime,
  createRangeList,
} from './util'

import {
  oneOf,
  toNumber,
} from '../util'

import {
  fireClickEvent,
} from '../event'

const DEFAULT_HOUR_STEP = 1
const DEFAULT_MINUTE_STEP = 1
const DEFAULT_SECOND_STEP = 1

export default Yox.define({

  template,

  name: '${prefix}TimePicker',

  propTypes: {
    status: {
      type: oneOf([RAW_TYPE_INFO, RAW_TYPE_SUCCESS, RAW_TYPE_ERROR, RAW_TYPE_WARNING]),
    },
    size: {
      type: oneOf(RAW_SIZE_ARRAY),
      value: RAW_DEFAULT,
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    block: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    placement: {
      type: oneOf(RAW_PLACEMENT_ARRAY),
      value: RAW_BOTTOM_START,
    },
    defaultValue: {
      type: function (key: string, value: any) {

      }
    },
    placeholder: {
      type: RAW_STRING,
      value: '请选择时间...'
    },
    clearable: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    format: {
      type: RAW_STRING,
    },
    hourStep: {
      type: RAW_NUMERIC,
    },
    minuteStep: {
      type: RAW_NUMERIC,
    },
    secondStep: {
      type: RAW_NUMERIC,
    },
    width: {
      type: RAW_NUMERIC,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data(options) {

    const props: Record<string, any> = toTimeProps(
      options.props && options.props.defaultValue,
      this.get('hourList'),
      this.get('minuteList'),
      this.get('secondList')
    )

    props.visible = FALSE
    props.RAW_CUSTOM = RAW_CUSTOM

    return props
  },

  components: {
    Popover,
    TimePanel,
  },

  computed: {
    componentWidth(): number {
      if (this.get('block')) {
        return
      }
      const width = this.get('width')
      if (width > 0) {
        return width
      }
      return this.get('needSecond') ? 170 : 125
    },
    needSecond(): boolean {
      return this.get('format') !== 'HH:mm'
    },
    hourList(): number[] {
      const hourStep = toNumber(this.get('hourStep'), DEFAULT_HOUR_STEP)
      return createRangeList(0, 23, hourStep)
    },
    minuteList(): number[] {
      const minuteStep = toNumber(this.get('minuteStep'), DEFAULT_MINUTE_STEP)
      return createRangeList(0, 59, minuteStep)
    },
    secondList(): number[] {
      if (this.get('needSecond')) {
        const secondStep = toNumber(this.get('secondStep'), DEFAULT_SECOND_STEP)
        return createRangeList(0, 59, secondStep)
      }
      return []
    },
    hasValue(): boolean {
      return this.get('hour') >= 0
        && this.get('minute') >= 0
        && (!this.get('needSecond') || this.get('second') >= 0)
    }
  },

  events: {
    change: {
      listener(event, data) {

        event.stop()

        const { hourIndex, minuteIndex, secondIndex } = data

        this.set({
          hourIndex,
          minuteIndex,
          secondIndex,
          text: formatTime(
            this.get('hourList')[hourIndex],
            this.get('minuteList')[minuteIndex],
            this.get('secondList')[secondIndex]
          )
        })

      },
      ns: 'timePanel',
    },
    submit: {
      listener(event, data) {

        event.stop()

        const { hour, minute, second } = data

        this.set({
          hour,
          minute,
          second,
          visible: FALSE,
          text: formatTime(hour, minute, second),
        })

        this.fireChange(hour, minute, second)

      },
      ns: 'timePanel',
    },
    outside: {
      listener(event) {

        event.stop()

        this.set({
          visible: FALSE,
          text: formatTime(
            this.get('hour'),
            this.get('minute'),
            this.get('second')
          )
        })

      },
      ns: 'popover',
    }
  },

  methods: {

    handleClearClick(event: CustomEventInterface) {

      // 停止冒泡，否则会展开下拉框
      event.stop()
      fireClickEvent(event)

      const props = toTimeProps(
        UNDEFINED,
        this.get('hourList'),
        this.get('minuteList'),
        this.get('secondList')
      )

      this.set(props)

      this.fireChange(props.hour, props.minute, props.second)

    },

    fireChange(hour: number, minute: number, second: number) {

      const data: Record<string, number> = {
        hour,
        minute,
      }

      if (this.get('needSecond')) {
        data.second = second
      }

      this.fire(
        {
          type: 'change',
          ns: 'timePicker',
        },
        data
      )

    }

  },

})
