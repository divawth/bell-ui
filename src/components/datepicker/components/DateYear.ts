import template from '../template/DateYear.hbs'
import { RAW_STRING } from '../../constant';
import { isDate } from '../../util'
import Yox from 'yox'

export default Yox.define({

  propTypes: {
    startDate: {
      type: isDate()
    },
    value: {
      type: isDate()
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template,

  data() {
    let year = new Date().getFullYear()
    if (this.get('startDate')) {
      year = this.get('startDate').getFullYear()
    }
    let checkedYear = ''
    if (this.get('value')) {
      checkedYear = this.get('value').getFullYear()
    }
    return {
      modeYear: year,
      checkedYear: checkedYear,
      years: []
    }
  },

  watchers: {
    value(value) {
      let checkedYear = ''
      if (value) {
        checkedYear = value.getFullYear()
      }
      this.set({ checkedYear })
    }
  },

  methods: {
    prev() {
      this.decrease('modeYear', 12)
      this.getYearList(this.get('modeYear'))
    },
    next() {
      this.increase('modeYear', 12)
      this.getYearList(this.get('modeYear'))
    },
    click(year) {
      this.set({
        checkedYear: year
      })
      this.fire(
        'change.year',
        {
          year: year
        }
      )
    },
    getYearList(startYear) {
      let years = []
      for (let item = startYear; item < startYear + 12; item++) {
        years.push(item)
      }
      this.set({
        modeYear: startYear,
        years: years
      })
    }
  },

  afterMount() {
    this.getYearList(this.get('modeYear'))
    if (this.get('value')) {
      this.fire(
        'change.year',
        {
          year: this.get('checkedYear')
        }
      )
    }
  }
})
