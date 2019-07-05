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
import template from '../template/Date.hbs'
import {
  RAW_NUMERIC,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_FUNCTION,
  RAW_ARRAY,
  NULL,
  TRUE
} from '../../constant'
import { isDate } from '../../util'
import Yox, { CustomEventInterface } from 'yox'
import { DateType } from '../type'

export default Yox.define({

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
      currentDate: NULL,
      modeDate: simplifyDate(modeDate),

      dateList: [],
      selectedDates: selectedDates
    }
  },

  events: {
    'clear.datepicker': function (event: CustomEventInterface) {
      this.set({
        selectedDates: [],
        currentDate: NULL,
        dateList: this.createRenderData(this.get('modeDate'), NULL, [])
      })
      event.stop()
    }
  },

  watchers: {
    value(date: Date) {
      let value = date ? simplifyDate(date) : NULL
      this.set({
        currentDate: value,
        dateList: this.createRenderData(
          this.get('modeDate'),
          value,
          this.get('selectedDates')
        )
      })
    },
    currentDate(date: DateType) {
      this.fire(
        'change.date',
        {
          date: date,
          selectedDates: this.get('selectedDates')
        }
      )
    }
  },

  methods: {
    changeDateList(offset: number) {
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

    addDates(date: DateType) {
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

    click(date: DateType) {
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

    getDateString(date: DateType) {
      return `${date.year}/${date.month}/${date.date}/${date.day}`
    },
    getDateIndex(item: DateType, list: string[]) {
      return list.indexOf(
        this.getDateString(item)
      )
    },

    getDataSource(
      start: number,
      end: number,
      modeDate: DateType,
      currentDate: DateType,
      selectedDates: string[]
    ) {
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
    createRenderData(modeDate: DateType, currentDate: DateType, selectedDates: string[]) {
      let firstDay = this.get('firstDay') || 0
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
      let list = this.getDataSource(
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
    const me = this
    let value = me.get('value') ? simplifyDate(me.get('value')) : NULL
    me.set({
      currentDate: value,
      dateList: me.createRenderData(
        me.get('modeDate'),
        value,
        me.get('selectedDates')
      )
    })
    if (me.get('selected')) {
      me.fire(
        'change.date',
        {
          date: value,
          selectedDates: me.get('selectedDates')
        }
      )
    }
  }
})
