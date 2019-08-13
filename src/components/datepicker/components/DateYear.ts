import Yox from 'yox'

import template from '../template/DateYear.hbs'

import {
  RAW_STRING,
} from '../../constant'

import {
  isDate,
} from '../../util'

const SHOW_COUNT = 12

export default Yox.define({

  template,

  propTypes: {
    startDate: {
      type: isDate,
    },
    value: {
      type: isDate,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data() {

    let startDate = this.get('startDate')
    let value = this.get('value')

    let year = startDate
      ? startDate.getFullYear()
      : new Date().getFullYear()

    let checkedYear = ''
    if (value) {
      checkedYear = value.getFullYear()
    }

    return {
      modeYear: year,
      checkedYear,
      years: [],
    }
  },

  watchers: {
    value(value: Date) {
      this.set({
        checkedYear: value ? value.getFullYear() : 0
      })
    }
  },

  methods: {
    prev() {
      this.decrease('modeYear', SHOW_COUNT)
      this.getYearList(this.get('modeYear'))
    },
    next() {
      this.increase('modeYear', SHOW_COUNT)
      this.getYearList(this.get('modeYear'))
    },
    click(year: number) {
      this.set({
        checkedYear: year
      })
      this.fire(
        'change.year',
        {
          year,
        }
      )
    },
    getYearList(startYear: number) {
      const years = []
      for (let i = startYear, endYear = startYear + SHOW_COUNT; i < endYear; i++) {
        years.push(i)
      }
      this.set({
        modeYear: startYear,
        years: years,
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
