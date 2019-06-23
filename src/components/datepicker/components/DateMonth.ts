import template from '../template/DateMonth.hbs'
import { RAW_STRING } from '../../constant'
import { MONTHS } from '../function/constant'
import { isDate } from '../../util'
import Yox from 'yox'

export default Yox.create({

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
    let checkedMonth = ''
    let checkedYear = ''
    if (this.get('value')) {
      checkedYear = this.get('value').getFullYear()
      checkedMonth = this.get('value').getMonth()
    }
    return {
      checkedMonth: checkedMonth,
      checkedYear: checkedYear,
      modeYear: year,
      months: MONTHS
    }
  },

  watchers: {
    value(value) {
      let checkedMonth = ''
      let checkedYear = ''
      if (value) {
        checkedYear = value.getFullYear()
        checkedMonth = value.getMonth()
      }
      this.set({
        checkedYear,
        checkedMonth
      })
    }
  },

  methods: {
    click(month) {

      let year = this.get('modeYear')

      this.set({
        checkedYear: year,
        checkedMonth: month
      })

      this.fire(
        'change.month',
        {
          year: year,
          month: month + 1
        }
      )
    }
  },

  afterMount() {
    if (this.get('value')) {
      this.fire(
        'change.month',
        {
          year: this.get('checkedYear'),
          month: this.get('checkedMonth') + 1
        }
      )
    }
  }
})