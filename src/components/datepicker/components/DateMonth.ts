import Yox from 'yox'

import Icon from '../../icon/Icon'
import template from '../template/DateMonth.hbs'

import DateYear from './DateYear'

import {
  RAW_TYPE_YEAR,
  RAW_TYPE_MONTH,
  toDate,
  SimpleMonth,
  createMonthViewDatasource,
} from '../util'

import {
  FALSE,
  RAW_DATE,
  RAW_STRING,
  RAW_NUMBER,
  RAW_ARRAY,
  RAW_BOOLEAN,
} from '../../constant'

function toMonthTimestamp(date: Date | number | void) {
  if (date) {
    date = toDate(date)
    date.setDate(1)
    return date.getTime()
  }
  return 0
}

export default Yox.define({

  template,

  propTypes: {
    defaultDate: {
      type: RAW_NUMBER,
    },
    checkedDate: {
      type: [RAW_DATE, RAW_NUMBER, RAW_ARRAY],
    },
    canPickYear: {
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
      type: RAW_TYPE_MONTH,
      RAW_TYPE_YEAR,
      RAW_TYPE_MONTH,

      year: (date ? toDate(date) : new Date()).getFullYear(),
    }
  },

  components: {
    Icon,
    DateYear,
  },

  computed: {
    datasource(): SimpleMonth[][] {
      return createMonthViewDatasource(this.get('year'))
    },
    checkedTimestamps(): number[] {
      const checkedDate = this.get('checkedDate')
      if (Yox.is.array(checkedDate)) {
        return checkedDate.map(toMonthTimestamp)
      }
      return [toMonthTimestamp(checkedDate)]
    }
  },

  filters: {
    isChecked(item: SimpleMonth) {
      const checkedTimestamps = this.get('checkedTimestamps')
      return Yox.array.has(checkedTimestamps, item.timestamp)
    }
  },

  events: {
    'change.year': function (event, data) {
      event.stop()
      this.set({
        type: RAW_TYPE_MONTH,
        year: data.year,
      })
    },
  },

  methods: {
    click(item: SimpleMonth) {
      this.fire(
        'change.month',
        item
      )
    }
  }

})