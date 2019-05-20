import template from '../template/DateYear.html'

export default {

  propTypes: {
    startYear: {
      type: 'numeric'
    },
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    }
  },
  
  template,

  data() {
    return {
      modeYear: this.get('startYear'),
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
    let today = new Date()
    let start = this.get('startYear')
    start = start ? start : today.getFullYear()
    this.getYearList(start)
  }
}