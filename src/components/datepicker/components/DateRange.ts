import Yox, { CustomEvent } from 'yox'

import {
  firstDateInWeek,
  lastDateInWeek,
  normalizeDate,
  firstDateInMonth,
  lastDateInMonth,
  simplifyDate,
  offsetMonth,
  parseDate,
  getOffsetTime,
  formatList
} from '../function/util'
import template from '../template/DateRange.hbs'
import { RAW_NUMERIC, RAW_STRING, RAW_BOOLEAN, RAW_ARRAY, RAW_FUNCTION, NULL } from '../../constant'
import { isDate } from '../../util'
import { WEEKS, DAY, STABLE_DURATION } from '../function/constant'
import { DateType } from '../type';

export default Yox.define({

  propTypes: {
    splitPanel: {
      type: RAW_BOOLEAN
    },
    startDate: {
      type: isDate()
    },
    value: {
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
    return {
      weeks: WEEKS,

      startModeDate: '',
      endModeDate: '',

      checkedStartDate: '',
      checkedEndDate: '',

      startModeList: [],
      endModeList: []
    }
  },

  computed: {
    startModeDateYear(): number {
      return simplifyDate(this.get('startModeDate')).year
    },
    startModeDateMonth(): number {
      return simplifyDate(this.get('startModeDate')).month
    },
    endModeDateYear(): number {
      return simplifyDate(this.get('endModeDate')).year
    },
    endModeDateMonth(): number {
      return simplifyDate(this.get('endModeDate')).month
    }
  },

  events: {
    'clear.datepicker': function (event: CustomEvent) {
      this.set({
        checkedStartDate: '',
        checkedEndDate: '',
        endModeList: this.createRenderData(this.get('endModeDate')),
        startModeList: this.createRenderData(this.get('startModeDate'))
      })
      event.stop()
    }
  },

  methods: {
    changeStartModeDate(offset: number) {
      let me = this
      let startModeDate = me.get('startModeDate')
      startModeDate = offsetMonth(startModeDate, offset)
      let startModeList = me.createRenderData(
        startModeDate,
        me.get('checkedStartDate'),
        me.get('checkedEndDate')
      )
      me.set({
        startModeDate,
        startModeList
      })
      if (me.get('endModeDate').getTime() <= startModeDate.getTime()) {
        me.changeEndModeDate(offset)
      }
    },
    changeEndModeDate(offset: number) {
      let me = this
      let endModeDate = me.get('endModeDate')
      endModeDate = offsetMonth(endModeDate, offset)
      let endModeList = me.createRenderData(
        endModeDate,
        me.get('checkedStartDate'),
        me.get('checkedEndDate')
      )
      me.set({
        endModeDate,
        endModeList
      })
      if (me.get('endModeDate').getTime() <= me.get('startModeDate').getTime()) {
        me.changeStartModeDate(offset)
      }
    },
    startPrevYear() {
      this.changeStartModeDate(-12)
      if (!this.get('splitPanel')) {
        this.changeEndModeDate(-12)
      }
    },
    startPrevMonth() {
      this.changeStartModeDate(-1)
      if (!this.get('splitPanel')) {
        this.changeEndModeDate(-1)
      }
    },
    startNextYear() {
      this.changeStartModeDate(12)
    },
    startNextMonth() {
      this.changeStartModeDate(1)
    },
    endPrevYear() {
      this.changeEndModeDate(-12)
    },
    endPrevMonth() {
      this.changeEndModeDate(-1)
    },
    endNextYear() {
      this.changeEndModeDate(12)
      if (!this.get('splitPanel')) {
        this.changeStartModeDate(12)
      }
    },
    endNextMonth() {
      this.changeEndModeDate(1)
      if (!this.get('splitPanel')) {
        this.changeStartModeDate(1)
      }
    },
    hover(date: DateType) {
      let me = this
      let startDate = me.get('checkedStartDate')
      let endDate = me.get('checkedEndDate')

      if (!startDate || endDate) {
        return
      }

      let rangDate = NULL
      if (!startDate
        || me.get('checkedEndDate')
        || getOffsetTime(parseDate(date)) < getOffsetTime(parseDate(startDate))
      ) {
        rangDate = ''
      } else {
        rangDate = date
      }

      me.refresh(
        getOffsetTime(parseDate(startDate)),
        getOffsetTime(parseDate(rangDate))
      )
    },
    click(date: DateType) {
      let me = this
      let checkedStartDate = me.get('checkedStartDate')
      let checkedEndDate = me.get('checkedEndDate')

      if (!checkedStartDate || me.get('checkedEndDate')
        || getOffsetTime(parseDate(date)) < getOffsetTime(parseDate(checkedStartDate))
      ) {
        checkedStartDate = date
        checkedEndDate = ''
      }
      else {
        checkedEndDate = date
      }
      me.set({
        checkedStartDate,
        checkedEndDate
      })
      me.refresh(
        getOffsetTime(parseDate(checkedStartDate)),
        getOffsetTime(parseDate(checkedEndDate))
      )

      if (checkedStartDate && checkedEndDate) {
        me.fire(
          'change.daterange',
          {
            start: checkedStartDate,
            end: checkedEndDate
          }
        )
      }
    },
    refresh(start: number, end: number) {
      let me = this

      let startModeList: DateType[][] = me.copy(me.get('startModeList'))
      let endModeList: DateType[][] = me.copy(me.get('endModeList'))

      if (end) {
        Yox.array.each(
          startModeList,
          (arr) => {
            Yox.array.each(
              arr,
              (item) => {
                let itemTime = getOffsetTime(parseDate(item))
                item.isRangeDate
                  = itemTime < end
                  && itemTime > start
                item.isCheckedDate
                  = itemTime == end || itemTime == start
              }
            )
          }
        )
        Yox.array.each(
          endModeList,
          (arr) => {
            Yox.array.each(
              arr,
              (item) => {
                let itemTime = getOffsetTime(parseDate(item))
                item.isRangeDate
                  = itemTime < end
                  && itemTime > start
                item.isCheckedDate
                  = itemTime == end || itemTime == start
              }
            )
          }
        )
      }
      else if (start) {
        Yox.array.each(
          startModeList,
          (arr) => {
            Yox.array.each(
              arr,
              (item) => {
                item.isCheckedDate
                  = getOffsetTime(parseDate(item)) == start
                item.isRangeDate = false
              }
            )
          }
        )
        Yox.array.each(
          endModeList,
          (arr) => {
            Yox.array.each(
              arr,
              (item) => {
                item.isCheckedDate
                  = getOffsetTime(parseDate(item)) == start
                item.isRangeDate = false
              }
            )
          }
        )
      }

      me.set({
        startModeList: startModeList,
        endModeList: endModeList
      })
    },
    getDataSource(
      start: number,
      end: number,
      date: DateType,
      checkedStartDate?: DateType,
      checkedEndDate?: DateType
    ) {
      let data = []

      let checkedStart: number = 0
      if (checkedStartDate) {
        checkedStart = getOffsetTime(
          parseDate(checkedStartDate)
        )
      }
      let checkedEnd: number = 0
      if (checkedEnd) {
        checkedEnd = getOffsetTime(
          parseDate(checkedEndDate)
        )
      }

      for (let time = start; time <= end; time += DAY) {
        let item: DateType = simplifyDate(
          new Date(time)
        )
        let itemTime = getOffsetTime(parseDate(item))
        item.isPrevMonth = item.month < date.month
        item.isCurrentMonth = item.month == date.month
        item.isLastMonth = item.month > date.month
        item.isCheckedDate = itemTime === checkedStart || itemTime === checkedEnd
        item.isRangeDate = itemTime > checkedStart && itemTime < checkedEnd
        if (this.get('disabledDate')) {
          item.disabled = this.get('disabledDate')(parseDate(item))
        }
        data.push(item)
      }
      return data
    },

    createRenderData(
      date: Date,
      checkedStartDate?: DateType,
      checkedEndDate?: DateType
    ) {
      let me = this
      let firstDay = me.get('firstDay') || 0
      let currentDate = normalizeDate(date)

      let startDate: number = normalizeDate(
        firstDateInWeek(
          firstDateInMonth(currentDate),
          firstDay
        )
      )
      let endDate: number = normalizeDate(
        lastDateInWeek(
          lastDateInMonth(currentDate),
          firstDay
        )
      )

      let duration = endDate - startDate
      let offset = STABLE_DURATION - duration

      if (offset > 0) {
        endDate += offset
      }
      let list = me.getDataSource(
        startDate,
        endDate,
        simplifyDate(
          new Date(currentDate)
        ),
        checkedStartDate,
        checkedEndDate
      )
      return formatList(list)
    }
  },

  watchers: {
    value(value: Date[]) {
      let checkedStartDate = simplifyDate(value[ 0 ])
      let checkedEndDate = simplifyDate(value[ 1 ])
      let startModeList = this.createRenderData(
        this.get('startModeDate'),
        checkedStartDate,
        checkedEndDate
      )
      let endModeList = this.createRenderData(
        this.get('endModeDate'),
        checkedStartDate,
        checkedEndDate
      )
      this.set({
        checkedStartDate,
        checkedEndDate,
        startModeList,
        endModeList
      })
    }
  },

  afterMount() {

    const me = this
    let startModeDate = me.get('startDate') ? me.get('startDate') : new Date()
    let endModeDate = offsetMonth(startModeDate, 1)
    let startModeList = me.createRenderData(
      startModeDate,
      me.get('checkedStartDate'),
      me.get('checkedEndDate')
    )
    let endModeList = me.createRenderData(
      endModeDate,
      me.get('checkedStartDate'),
      me.get('checkedEndDate')
    )

    let value = me.get('value')
    if (value) {
      let checkedStartDate = simplifyDate(value[ 0 ])
      let checkedEndDate = simplifyDate(value[ 1 ])
      me.set({
        checkedStartDate,
        checkedEndDate
      })
      me.fire(
        'change.daterange',
        {
          start: checkedStartDate,
          end: checkedEndDate
        }
      )
    }

    me.set({
      startModeDate,
      endModeDate,
      startModeList,
      endModeList
    })

  }
})
