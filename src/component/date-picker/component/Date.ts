import Yox from 'yox'

import Icon from '../../icon/Icon'
import template from '../template/Date.hbs'

import DateMonth from './DateMonth'
import DateYear from './DateYear'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_ARRAY,
  RAW_NUMBER,
  RAW_FUNCTION,
  RAW_DATE,
  RAW_BOOLEAN,
} from '../../constant'

import {
  WEEKS,
  RAW_TYPE_DATE,
  RAW_TYPE_YEAR,
  RAW_TYPE_MONTH,

  DateRow,
  SimpleDate,
  toSimpleDate,
  toTimestamp,
  offsetMonth,
  createDateViewDatasource,
} from '../util'

export default Yox.define({

  template,

  propTypes: {
    defaultDate: {
      type: [RAW_DATE, RAW_NUMBER],
    },
    checkedDate: {
      type: [RAW_DATE, RAW_NUMBER, RAW_ARRAY],
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
    let date = props.defaultDate
    if (!date) {
      if (Yox.is.array(props.checkedDate)) {
        date = props.checkedDate[0]
      }
      else {
        date = props.checkedDate
      }
    }
    return {
      type: RAW_TYPE_DATE,
      RAW_TYPE_DATE,
      RAW_TYPE_YEAR,
      RAW_TYPE_MONTH,

      weeks: WEEKS,
      timestamp: toTimestamp(date),
    }
  },

  computed: {
    date(): SimpleDate {
      return toSimpleDate(this.get('timestamp'))
    },
    datasource(): DateRow[] {
      return createDateViewDatasource(this.get('timestamp'))
    },
    checkedTimestamps(): number[] {
      let checkedDate = this.get('checkedDate')
      if (Yox.is.array(checkedDate)) {
        return checkedDate.map(function (date: number | Date) {
          return date ? toTimestamp(date) : 0
        })
      }
      return [checkedDate ? toTimestamp(checkedDate) : 0]
    }
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

    isChecked(item: SimpleDate) {
      const checkedTimestamps = this.get('checkedTimestamps')
      return Yox.array.has(checkedTimestamps, item.timestamp)
    }
  },

  events: {
    'change.year': function (event, data) {
      event.stop()
      const date = new Date(this.get('timestamp'))
      date.setFullYear(data.year)
      this.set({
        type: RAW_TYPE_DATE,
        timestamp: date.getTime()
      })
    },
    'change.month': function (event, data) {
      event.stop()
      const date = new Date(this.get('timestamp'))
      date.setFullYear(data.year)
      date.setMonth(data.month - 1)
      this.set({
        type: RAW_TYPE_DATE,
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
    click(item: SimpleDate) {
      this.fire(
        {
          type: 'change',
          ns: 'date',
        },
        item
      )
    }
  }

})
