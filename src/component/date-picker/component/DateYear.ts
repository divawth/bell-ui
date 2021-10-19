import Yox from 'yox'

import Icon from '../../icon/Icon'
import template from '../template/DateYear.hbs'

import {
  RAW_DATE,
  RAW_STRING,
  RAW_ARRAY,
  RAW_NUMBER,
  RAW_STYLE_TYPE,
} from '../../constant'

import {
  toDate,
  createYearViewDatasource,
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
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
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
      year: (date ? toDate(date) : new Date()).getFullYear(),
      count: 12,
    }
  },

  computed: {
    datasource(): number[][] {
      return createYearViewDatasource(this.get('year'), this.get('count'))
    },
    checkedYears(): number[] {
      let checkedDate = this.get('checkedDate')
      if (Yox.is.array(checkedDate)) {
        return checkedDate.map(function (date: number | Date) {
          return date ? toDate(date).getFullYear() : 0
        })
      }
      return [checkedDate ? toDate(checkedDate).getFullYear() : 0]
    }
  },

  filters: {
    isChecked(year: number) {
      const checkedYears = this.get('checkedYears')
      return Yox.array.has(checkedYears, year)
    }
  },

  methods: {
    click(item: number) {
      this.fire(
        {
          type: 'change',
          ns: 'year',
        },
        {
          year: item,
        }
      )
    }
  },

  components: {
    Icon,
  }

})
