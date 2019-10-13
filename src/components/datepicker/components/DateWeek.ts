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
  FALSE,
  RAW_DATE,
  RAW_STRING,
  RAW_NUMBER,
  RAW_BOOLEAN,
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
      return toSimpleDate(this.get('timestamp'))
    },
    datasource(): DateRow[] {
      return createDateViewDatasource(this.get('timestamp'))
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
    isEnabled(item: SimpleDate) {
      return this.inCurrentMonth(item)
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
    inCurrentMonth(item: SimpleDate) {
      const date = this.get('date')
      return date.year === item.year && date.month === item.month
    },
    offset(offset: number) {
      this.set(
        'timestamp',
        offsetMonth(this.get('timestamp'), offset)
      )
    },
    click(row: DateRow) {

      const { start, end } = row

      // start 和 end 总得有一个在当前月份内，否则要更新视图月份
      if (!this.inCurrentMonth(start) && !this.inCurrentMonth(end)) {
        const date = new Date(this.get('timestamp'))
        date.setFullYear(start.year)
        date.setMonth(start.month - 1)
        this.set('timestamp', date.getTime())
      }

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
