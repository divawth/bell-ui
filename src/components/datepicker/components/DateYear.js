import template from '../template/DateYear.html'
import { RAW_NUMERIC, RAW_STRING } from '../../constant';

export default {

  propTypes: {
    startYear: {
      type: RAW_NUMERIC
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
    let start = this.get('startYear')
    start = start ? start : new Date().getFullYear()
    return {
      modeYear: start,
      checkedYear: '',
      years: []
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
        'yearChange',
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
  }
}
