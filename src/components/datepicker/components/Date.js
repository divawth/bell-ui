import {
  firstDateInWeek,
  lastDateInWeek,
  normalizeDate,
  firstDateInMonth,
  lastDateInMonth,
  simplifyDate,
  offsetMonth,
  parseDate,
  formatList
} from '../function/util'
import { WEEKS, DAY, STABLE_DURATION } from '../function/constant'
import template from '../template/Date.html'
import { 
  RAW_NUMERIC, 
  RAW_STRING, 
  RAW_BOOLEAN, 
  RAW_FUNCTION, 
  RAW_ARRAY
} from '../../constant'
import { isDate } from '../../util'

export default {

  propTypes: {
    multiple: {
      type: RAW_BOOLEAN
    },
    startDate: {
      type: isDate()
    },
    value: {
      type: isDate()
    },
    selected: {
      type: RAW_ARRAY
    },
    disabledDate: {
      type: RAW_FUNCTION
    },
    firstDay: {
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
    let modeDate = this.get('startDate') ? this.get('startDate') : new Date()
    let selectedDates = []
    if (this.get('selected') && this.get('selected').length) {
      selectedDates = this.get('selected').map(function (item) {
        let date = simplifyDate(item)
        return `${date.year}/${date.month}/${date.date}/${date.day}`
      })
    }
    return {
      weeks: WEEKS,
      currentDate: null,
      modeDate: simplifyDate(modeDate),

      dateList: [],
      selectedDates: selectedDates
    }
  },

  events: {
    'clear.datepicker': function (event) {
      this.set({
        currentDate: null,
        selectedDates: [],
        dateList: this.createRenderData(this.get('modeDate'), null, [])
      })
      event.stop()
    }
  },

  watchers: {
    value(date) {
      let value = date ? simplifyDate(date) : null
      this.set({
        currentDate: value,
        dateList: this.createRenderData(
          this.get('modeDate'), 
          value,
          this.get('selectedDates')
        )
      })
    },
    currentDate: {
      watcher: function (date) {
        this.fire(
          'change.date',
          {
            date: date,
            selectedDates: this.get('selectedDates')
          }
        )
      },
      sync: true
    }
  },

  methods: {
    changeDateList(offset) {
      let me = this
      let modeDate = simplifyDate(
        offsetMonth(
          parseDate(me.get('modeDate')), 
          offset
        )
      ) 
      let dateList = me.createRenderData(
        modeDate, 
        me.get('currentDate'),
        me.get('selectedDates')
      )
      me.set({
        modeDate: modeDate,
        dateList: dateList
      })
    },

    addDates(date) {
      let selectedDates = this.copy(this.get('selectedDates'))
      let index = this.getDateIndex(date, selectedDates)
      if (index < 0) {
        selectedDates.push(
          this.getDateString(date)
        )
      }
      else {
        selectedDates.splice(index, 1)
      }
      this.set({ selectedDates })
    },

    click(date) {
      let me = this
      me.get('multiple') && me.addDates(date)
      me.set({
        currentDate: date,
        dateList: me.createRenderData(
          me.get('modeDate'), 
          date,
          me.get('selectedDates')
        )
      })
    },

    getDateString(date) {
      return `${date.year}/${date.month}/${date.date}/${date.day}`
    },
    getDateIndex(item, list) {
      return list.indexOf(this.getDateString(item))
    },

    getDataSource(start, end, modeDate, currentDate, selectedDates) {
      let data = []
      for (let time = start, item; time <= end; time += DAY) {
        item = simplifyDate(time)

        if (this.get('multiple')) {
          if (this.getDateIndex(item, selectedDates) >= 0) {
            item.isCurrentDate = true
          }
        }
        else if (currentDate
          && currentDate.year === item.year 
          && currentDate.month === item.month
          && currentDate.date === item.date
        ) {
          item.isCurrentDate = true
        }
        if (this.get('disabledDate')) {
          item.disabled = this.get('disabledDate')(parseDate(item))
        }
        item.isPrevMonth = item.month < modeDate.month
        item.isCurrentMonth = item.month == modeDate.month
        item.isLastMonth = item.month > modeDate.month
        data.push(item)
      }
      return data
    },
    createRenderData(modeDate, currentDate, selectedDates) {
      let me = this
      let firstDay = me.get('firstDay') || 0
      let modeDateString = parseDate(modeDate)
      let startDate
      let endDate

      startDate = firstDateInWeek(firstDateInMonth(modeDateString), firstDay)
      endDate = lastDateInWeek(lastDateInMonth(modeDateString), firstDay)

      startDate = normalizeDate(startDate)
      endDate = normalizeDate(endDate)

      let duration = endDate - startDate
      let offset = STABLE_DURATION - duration

      if (offset > 0) {
        endDate += offset
      }
      let list = me.getDataSource(
        startDate, 
        endDate, 
        modeDate, 
        currentDate, 
        selectedDates
      )
      return formatList(list)
    }
  },

  afterMount() {
    let value = this.get('value') ? simplifyDate(this.get('value')) : null
    this.set({
      currentDate: value,
      dateList: this.createRenderData(
        this.get('modeDate'), 
        value, 
        this.get('selectedDates')
      )
    })
    if (this.get('selected')) {
      this.fire(
        'change.date',
        {
          date: value,
          selectedDates: this.get('selectedDates')
        }
      )
    }
  }
}
