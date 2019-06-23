import {
  firstDateInWeek,
  lastDateInWeek,
  normalizeDate,
  firstDateInMonth,
  lastDateInMonth,
  simplifyDate,
  offsetMonth,
  parseDate,
  getOffsetTime
} from '../function/util'
import template from '../template/DateWeek.hbs'
import { RAW_NUMERIC, RAW_STRING, UNDEFINED } from '../../constant'
import { WEEKS, DAY, STABLE_DURATION } from '../function/constant'
import { isDate } from '../../util'
import Yox from 'yox';

export default Yox.create({

  propTypes: {
    startDate: {
      type: isDate()
    },
    date: {
      type: RAW_NUMERIC
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
      dateList: [],
      modeDate: this.get('startDate') ? this.get('startDate') : new Date(),
      checkedIndex: 0,
      checkedDateTime: -1
    }
  },

  computed: {
    currentYear() {
      return simplifyDate(this.get('modeDate')).year
    },
    currentMonth() {
      return simplifyDate(this.get('modeDate')).month
    }
  },

  methods: {
    changeDate(offset) {
      let me = this
      let date = me.get('modeDate')
      date = offsetMonth(date, offset)
      me.set({
        checkedIndex: -1,
        modeDate: date,
        dateList: me.createRenderData(
          date,
          me.get('checkedDateTime')
        )
      })
    },
    prevYear() {
      this.changeDate(-12)
    },
    prevMonth() {
      this.changeDate(-1)
    },
    nextYear() {
      this.changeDate(12)
    },
    nextMonth() {
      this.changeDate(1)
    },
    click(date) {
      this.fire(
        'change.week',
        {
          start: date[ 0 ],
          end: date[ date.length - 1 ]
        }
      )
      this.refresh(
        getOffsetTime(parseDate(date[ 0 ]))
      )
    },
    refresh(start) {
      let me = this
      let dateList = me.get('dateList')
      let checkedIndex = undefined
      let checkedDateTime = ''
      for (let i = 0; i < dateList.length; i++) {
        let item = dateList[i][0]
        let itemTime = getOffsetTime(parseDate(item))
        if (itemTime == start) {
          checkedDateTime = itemTime
          checkedIndex = i
        }
      }
      me.set({
        checkedDateTime,
        checkedIndex
      })
    },
    // 获取渲染模板的数据
    getDatasource(start, end, date, checkedDateTime) {
      let data = []
      date = simplifyDate(date)
      for (let time = start, item; time <= end; time += DAY) {
        item = simplifyDate(time)
        item.isCurrentDate = checkedDateTime && checkedDateTime === getOffsetTime(parseDate(item))
        item.isPrevMonth = item.month < date.month
        item.isCurrentMonth = item.month == date.month
        item.isLastMonth = item.month > date.month
        data.push(item)
      }
      return data

    },
    createRenderData(modeDate, checkedDateTime) {
      let me = this
      let firstDay = me.get('firstDay') || 0
      modeDate = normalizeDate(modeDate)

      let startDate
      let endDate

      startDate = firstDateInWeek(firstDateInMonth(modeDate), firstDay)
      endDate = lastDateInWeek(lastDateInMonth(modeDate), firstDay)

      startDate = normalizeDate(startDate)
      endDate = normalizeDate(endDate)

      let duration = endDate - startDate
      let offset = STABLE_DURATION - duration

      if (offset > 0) {
        endDate += offset
      }

      let list = me.getDatasource(startDate, endDate, modeDate, checkedDateTime)
      return me.format(list)
    },
    format(list) {
      let me = this
      let result = []
      let arr = []
      let checkedIndex = -1
      for (let i = 0; i < list.length; i++) {
        arr.push(list[i])
        if (i % 7 == 6) {
          if (getOffsetTime(parseDate(arr[0])) === me.get('checkedDateTime')) {
            checkedIndex = result.length
          }
          result.push(arr)
          arr = []
        }
      }
      me.set({
        checkedIndex: checkedIndex
      })
      return result
    }
  },

  afterMount() {
    const me = this
    let today = new Date()
    let date = me.get('modeDate')
    date = date ? date : today
    me.set({
      modeDate: date,
      dateList: me.createRenderData(
        date,
        me.get('checkedDateTime')
      )
    })
    let start = me.get('value') ? me.get('value')[ 0 ] : UNDEFINED
    if (start) {
      me.refresh(
        getOffsetTime(start)
      )
      this.fire(
        'change.week',
        {
          start: simplifyDate(start),
          end: simplifyDate(me.get('value')[ 1 ])
        }
      )
    }
  }
})
