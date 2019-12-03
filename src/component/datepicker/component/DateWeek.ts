import Yox from 'yox'

import Icon from '../../icon/Icon'
import template from '../template/DateWeek.hbs'

import DateMonth from './DateMonth'
import DateYear from './DateYear'

import {
  WEEKS,
  RAW_TYPE_WEEK,
  RAW_TYPE_YEAR,
  RAW_TYPE_MONTH,

  DateRow,
  SimpleDate,
  toSimpleDate,
  toTimestamp,
  offsetMonth,
  createDateViewDatasource,
} from '../util'

import {
  TRUE,
  FALSE,
  RAW_DATE,
  RAW_STRING,
  RAW_NUMBER,
  RAW_BOOLEAN,
  RAW_FUNCTION,
} from '../../constant'

export default Yox.define({

  template,

  propTypes: {
    defaultDate: {
      type: [RAW_DATE, RAW_NUMBER],
    },
    checkedDate: {
      type: [RAW_DATE, RAW_NUMBER],
    },
    disabledDate: {
      type: RAW_FUNCTION,
    },
    canPickYear: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    canPickMonth: {
      type: RAW_BOOLEAN,
      value: FALSE,
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
      type: RAW_TYPE_WEEK,
      RAW_TYPE_WEEK,
      RAW_TYPE_YEAR,
      RAW_TYPE_MONTH,

      weeks: WEEKS,
      timestamp: toTimestamp(props.defaultDate || props.checkedDate),
    }
  },

  computed: {
    date(): SimpleDate {
      const checkedDate = this.get('checkedDate')
      return toSimpleDate(
        checkedDate
          ? toTimestamp(checkedDate)
          : this.get('timestamp')
      )
    },
    datasource(): DateRow[] {
      const date = this.get('date')
      return createDateViewDatasource(date.timestamp)
    },
    checkedTimestamp(): number {
      const checkedDate = this.get('checkedDate')
      return checkedDate ? toTimestamp(checkedDate) : 0
    },
  },

  components: {
    Icon,
    DateYear,
    DateMonth,
  },

  filters: {
    isCurrentMonth(item: SimpleDate) {
      const date = this.get('date')
      return date.year === item.year && date.month === item.month
    },

    isEnabled(item: SimpleDate) {
      const disabledDate = this.get('disabledDate')
      return disabledDate
        ? disabledDate(item)
        : TRUE
    },
  },

  events: {
    'change.year': function (event, data) {
      event.stop()
      const date = new Date(this.get('timestamp'))
      date.setFullYear(data.year)
      this.set({
        type: RAW_TYPE_WEEK,
        timestamp: date.getTime()
      })
    },
    'change.month': function (event, data) {
      event.stop()
      const date = new Date(this.get('timestamp'))
      date.setFullYear(data.year)
      date.setMonth(data.month - 1)
      this.set({
        type: RAW_TYPE_WEEK,
        timestamp: date.getTime()
      })
    }
  },

  methods: {
    offset(offset: number) {
      this.set(
        'timestamp',
        offsetMonth(this.get('timestamp'), offset)
      )
    },
    click(colIndex: number) {

      const { start, end } = this.get(`datasource.${colIndex}`)

      this.fire(
        'change.week',
        {
          start,
          end,
        }
      )

    },
  }

})
