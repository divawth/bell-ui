import Yox, { CustomEventInterface } from 'yox'

import DateView from './components/Date'
import DateRange from './components/DateRange'
import DateWeek from './components/DateWeek'
import DateMonth from './components/DateMonth'
import DateYear from './components/DateYear'

import template from './template/DatePicker.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_DATE,
  RAW_ARRAY,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_FUNCTION,
  RAW_BOTTOM_START,
  RAW_SIZE_COMMON,
  RAW_DEFAULT,
  RAW_PLACEMENT_ARRAY,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_ERROR,
  RAW_TYPE_WARNING,
  UNDEFINED,
} from '../constant'

import {
  RAW_TYPE_DATE,
  RAW_TYPE_DATE_RANGE,
  RAW_TYPE_WEEK,
  RAW_TYPE_YEAR,
  RAW_TYPE_MONTH,

  Shortcut,
  formatDate,
  SimpleDate,
  SimpleRange,
  toTimestamp,
  toSimpleDate,
} from './util'

import {
  oneOf,
} from '../util'

const YEAR_FORMAT = 'yyyy'
const MONTH_FORMAT = 'yyyy-MM'
const DATE_FORMAT = 'yyyy-MM-dd'

const defaultFormat = {}
defaultFormat[RAW_TYPE_DATE] = DATE_FORMAT
defaultFormat[RAW_TYPE_DATE_RANGE] = DATE_FORMAT
defaultFormat[RAW_TYPE_WEEK] = DATE_FORMAT
defaultFormat[RAW_TYPE_MONTH] = MONTH_FORMAT
defaultFormat[RAW_TYPE_YEAR] = YEAR_FORMAT

export default Yox.define({

  template,

  propTypes: {
    type: {
      type: oneOf([RAW_TYPE_DATE, RAW_TYPE_DATE_RANGE, RAW_TYPE_WEEK, RAW_TYPE_YEAR, RAW_TYPE_MONTH]),
      value: RAW_TYPE_DATE,
    },
    status: {
      type: oneOf([RAW_TYPE_INFO, RAW_TYPE_SUCCESS, RAW_TYPE_ERROR, RAW_TYPE_WARNING]),
    },
    size: {
      type: oneOf(RAW_SIZE_COMMON),
      value: RAW_DEFAULT,
    },
    splitPanel: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    defaultDate: {
      type: RAW_DATE,
    },
    value: {
      type: function (key: string, value: any) {

      }
    },
    shortcuts: {
      type: RAW_ARRAY,
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    multiple: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    placement: {
      type: oneOf(RAW_PLACEMENT_ARRAY),
      value: RAW_BOTTOM_START,
    },
    placeholder: {
      type: RAW_STRING,
      value: '请选择日期...'
    },
    format: {
      type: RAW_STRING,
    },
    disabledDate: {
      type: RAW_FUNCTION,
    },
    clearable: {
      type: RAW_BOOLEAN,
      value: FALSE,
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
    const props = options.props || {}
    return {
      RAW_TYPE_DATE,
      RAW_TYPE_DATE_RANGE,
      RAW_TYPE_WEEK,
      RAW_TYPE_YEAR,
      RAW_TYPE_MONTH,

      visible: FALSE,
      formatText: props.format || defaultFormat[props.type || RAW_TYPE_DATE]
    }
  },

  components: {
    DateView,
    DateRange,
    DateWeek,
    DateMonth,
    DateYear,
  },

  computed: {
    defaultSimpleDate(): SimpleDate {
      const defaultDate = this.get('defaultDate')
      return toSimpleDate(toTimestamp(defaultDate))
    },
    formatedValues(): string[] {

      const value = this.get('value')
      const formatText = this.get('formatText')

      if (Yox.is.array(value)) {
        return value.map(function (date: Date) {
          return formatDate(date, formatText)
        })
      }
      else if (value) {
        return [formatDate(value, formatText)]
      }
      return []

    },
  },

  events: {
    'change.input': function (event) {
      event.stop()
    },
    'clear.input': function (event) {
      event.stop()
      this.fire('clear.datepicker', TRUE)
    },
    'change.date': function (event, data) {
      event.stop()
      this.dateChange(data.timestamp)
    },
    'change.year': function (event, data) {
      event.stop()
      const date = new Date()
      date.setFullYear(data.year)
      this.dateChange(toTimestamp(date), YEAR_FORMAT)
    },
    'change.month': function (event, data: SimpleDate) {
      event.stop()
      const date = new Date()
      date.setFullYear(data.year)
      date.setMonth(data.month - 1)
      this.dateChange(toTimestamp(date), MONTH_FORMAT)
    },

    'change.week': function (event, data: SimpleRange) {
      event.stop()
      this.dateRangeChange(data.start.timestamp, data.end.timestamp)
    },
    'change.range': function (event, data: SimpleRange) {
      event.stop()
      this.dateRangeChange(data.start.timestamp, data.end.timestamp)
    }
  },

  methods: {

    handleClearClick(event: CustomEventInterface) {

      // 停止冒泡，否则会展开下拉框
      event.stop()

      this.set({
        value: this.get('multiple') ? [] : UNDEFINED,
      })

      this.fire('clear.datepicker', TRUE)
      this.fire('clear.datepicker')

    },

    handleRemoveItem(event: CustomEventInterface, index: number) {

      event.stop()

      this.removeAt('value', index)

    },

    handleShortcutClick(data: Shortcut) {
      const value = data.onClick.call(this)
      if (Yox.is.array(value)) {
        if (!value[0] || !value[1]) {
          Yox.logger.warn(`shortcuts value 传值错误`)
          return
        }
        this.dateRangeChange(
          toTimestamp(value[0]),
          toTimestamp(value[1])
        )
      }
      else {
        if (!value) {
          Yox.logger.warn(`shortcuts value 传值错误`)
          return
        }
        const type = this.get('type')
        if (type === RAW_TYPE_DATE_RANGE || type === RAW_TYPE_WEEK) {
          Yox.logger.warn(`shortcuts value 需返回数组类型`)
          return
        }
        this.dateChange(
          toTimestamp(value as any)
        )
      }
    },

    dateChange(timestamp: number, dateFormat = DATE_FORMAT) {

      const me = this
      const value = me.get('value')

      const date = new Date(timestamp)

      if (me.get('multiple')) {
        if (Yox.is.array(value)) {
          // 判断年月日是否存在
          const format = formatDate(date, dateFormat)
          let existed = FALSE
          Yox.array.each(
            value,
            function (item: Date) {
              if (format === formatDate(item, dateFormat)) {
                existed = TRUE
                return FALSE
              }
            }
          )
          if (!existed) {
            me.append('value', date)
          }
        }
        else {
          me.append('value', date)
        }
      }
      else {
        me.set('value', date)
      }

      if (!me.get('multiple')) {
        me.nextTick(
          function () {
            me.set('visible', FALSE)
          }
        )
      }

    },

    dateRangeChange(start: number, end: number) {

      this.set('value', [new Date(start), new Date(end)])

      if (!this.get('multiple')) {
        this.nextTick(
          function () {
            this.set('visible', FALSE)
          }
        )
      }

    }
  },

})
