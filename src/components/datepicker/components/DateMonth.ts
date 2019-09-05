import Yox from 'yox'

import template from '../template/DateMonth.hbs'

import backIconTemplate from '../template/backIcon.hbs'
import forwardIconTemplate from '../template/forwardIcon.hbs'

import DateYear from './DateYear'

import {
  RAW_TYPE_YEAR,
  RAW_TYPE_MONTH,
  toDate,
  toTimestamp,
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

      year: (toDate(date) || new Date()).getFullYear(),
    }
  },

  components: {
    DateYear,
  },

  partials: {
    backIcon: backIconTemplate,
    forwardIcon: forwardIconTemplate,
  },

  computed: {
    datasource(): SimpleMonth[][] {
      return createMonthViewDatasource(this.get('year'))
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