import Yox, { CustomEventInterface } from 'yox'

import Tag from '../tag/Tag'
import Popover from '../popover/Popover'
import DateView from './component/Date'
import DateRange from './component/DateRange'
import DateWeek from './component/DateWeek'
import DateMonth from './component/DateMonth'
import DateYear from './component/DateYear'

import template from './template/DatePicker.hbs'
// import './style/DatePicker.styl'

import {
  TRUE,
  FALSE,
  UNDEFINED,
  RAW_STRING,
  RAW_DATE,
  RAW_ARRAY,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_FUNCTION,
  RAW_BOTTOM_START,
  RAW_SIZE_ARRAY,
  RAW_DEFAULT,
  RAW_PLACEMENT_ARRAY,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_ERROR,
  RAW_TYPE_WARNING,
  RAW_CUSTOM,
  RAW_STYLE_TYPE,
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
  toTimestamp,
  toSimpleDate,
} from './util'

import {
  oneOf,
  toPixel,
} from '../util'

import {
  fireClickEvent,
  onClickEventByEnterPress,
} from '../event'

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

  name: '${prefix}DatePicker',

  propTypes: {
    type: {
      type: oneOf([RAW_TYPE_DATE, RAW_TYPE_DATE_RANGE, RAW_TYPE_WEEK, RAW_TYPE_YEAR, RAW_TYPE_MONTH]),
      value: RAW_TYPE_DATE,
    },
    status: {
      type: oneOf([RAW_TYPE_INFO, RAW_TYPE_SUCCESS, RAW_TYPE_ERROR, RAW_TYPE_WARNING]),
    },
    size: {
      type: oneOf(RAW_SIZE_ARRAY),
      value: RAW_DEFAULT,
    },
    splitPanel: {
      type: RAW_BOOLEAN,
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
    },
    multiple: {
      type: RAW_BOOLEAN,
    },
    block: {
      type: RAW_BOOLEAN,
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
    },
    width: {
      type: RAW_NUMERIC,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
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
      RAW_CUSTOM,

      isFocus: FALSE,
      isVisible: FALSE,
      formatText: props.format || defaultFormat[props.type || RAW_TYPE_DATE]
    }
  },

  components: {
    Tag,
    Popover,
    DateView,
    DateRange,
    DateWeek,
    DateMonth,
    DateYear,
  },

  computed: {
    inlineStyle(): object[] | void {
      const result: object[] = []

      const width = this.get('width')
      if (width) {
        result.push({
          width: toPixel(width)
        })
      }

      const style = this.get('style')
      if (style) {
        result.push(style)
      }

      if (result.length > 0) {
        return result
      }
    },
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

  events: [
    {
      type: 'change',
      ns: 'date',
      listener(event, data) {
        event.stop()
        // @ts-ignore
        this.dateChange(data.timestamp)
      }
    },
    {
      type: 'change',
      ns: 'year',
      listener(event, data) {
        event.stop()
        const date = new Date()
        date.setFullYear(data.year)
        // @ts-ignore
        this.dateChange(toTimestamp(date), YEAR_FORMAT)
      }
    },
    {
      type: 'change',
      ns: 'month',
      listener(event, data: SimpleDate) {
        event.stop()
        const date = new Date()
        date.setFullYear(data.year)
        date.setMonth(data.month - 1)
        // @ts-ignore
        this.dateChange(toTimestamp(date), MONTH_FORMAT)
      }
    },
    {
      type: 'change',
      ns: 'week',
      listener(event, data: SimpleDate) {
        event.stop()
        // @ts-ignore
        this.dateRangeChange(data.start.timestamp, data.end.timestamp)
      }
    },
    {
      type: 'change',
      ns: 'range',
      listener(event, data: SimpleDate) {
        event.stop()
        // @ts-ignore
        this.dateRangeChange(data.start.timestamp, data.end.timestamp)
      }
    },
    {
      listener(event) {

        event.stop()

        // @ts-ignore
        this.set('isVisible', FALSE)

      },
      type: 'outside',
      ns: 'popover',
    }
  ],

  methods: {

    onClick() {
      this.toggle('isVisible')
      fireClickEvent()
    },

    onClearClick(event: CustomEventInterface) {

      // 停止冒泡，否则会展开下拉框
      event.stop()
      fireClickEvent(event)

      const value = this.get('multiple') ? [] : UNDEFINED

      this.set('value', value)

      this.fire(
        {
          type: 'clear',
          ns: 'datePicker',
        },
        TRUE
      )

      this.fireChange(value)

    },

    onItemRemove(event: CustomEventInterface, index: number) {

      event.stop()

      this.removeAt('value', index)
      this.fireChange(this.get('value'))

    },

    onShortcutClick(data: Shortcut) {

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
            me.fireChange(me.get('value'))
          }
        }
        else {
          me.append('value', date)
          me.fireChange(me.get('value'))
        }
      }
      else {
        me.set('value', date)
        me.fireChange(date)
      }

      if (!me.get('multiple')) {
        me.nextTick(
          function () {
            me.set('isVisible', FALSE)
          }
        )
      }

    },

    dateRangeChange(start: number, end: number) {

      const value = [new Date(start), new Date(end)]

      this.set('value', value)
      this.fireChange(value)

      if (!this.get('multiple')) {
        this.nextTick(
          function () {
            this.set('isVisible', FALSE)
          }
        )
      }

    },

    fireChange(value) {
      this.fire(
        {
          type: 'change',
          ns: 'datePicker',
        },
        {
          value,
        }
      )
    }
  },

  afterUpdate() {
    if (this.get('isVisible') && this.get('multiple')) {
      const overlay = this.$refs.overlay as any
      overlay.refreshOverlayRect()
    }
  },

  afterMount() {
    onClickEventByEnterPress(this)
  }

})
