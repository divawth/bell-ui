import {
  firstDateInWeek,
  lastDateInWeek,
  normalizeDate,
  firstDateInMonth,
  lastDateInMonth,
  simplifyDate,
  offsetMonth,
  parseDate
} from '../function/util'
import template from '../template/Date.html'
import { RAW_NUMERIC, RAW_STRING } from '../../constant';

const WEEKS = [
  '日',
  '一',
  '二',
  '三',
  '四',
  '五',
  '六'
]

const DAY = 24 * 60 * 60 * 1000
const stableDuration = 41 * DAY

export default {

  propTypes: {
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
    let me = this
    return {
      weeks: WEEKS,
      dateList: [],
      checkedDate: '',
      // 视图日期
      modeDate: ''
    }
  },

  computed: {
    currentYear() {
      let me = this
      let date = me.get('modeDate')
      date = date
        ? simplifyDate(date)
        : simplifyDate(new Date())
      return date.year
    },
    currentMonth() {
      let me = this
      let date = me.get('modeDate')
      date = date
        ? simplifyDate(date)
        : simplifyDate(new Date())
      return date.month
    }
  },

  methods: {
    changeDate(offset) {
      let me = this
      let date = me.get('modeDate')

      date = offsetMonth(date, offset)

      me.set({
        modeDate: date,
        dateList: me.createRenderData(date, me.get('checkedDate'))
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
      if (!date.isCurrentMonth) {
        return
      }
      let me = this
      me.fire(
        'deteChange',
        date
      )

      date = parseDate(date)
      me.set({
        checkedDate: date,
        modeDate: date,
        dateList: me.createRenderData(date, date),
      })
    },
    // 获取渲染模板的数据
    getDatasource(start, end, modeDate, checkedDate) {
      let me = this
      let data = []
      modeDate = simplifyDate(modeDate)
      checkedDate = simplifyDate(checkedDate)
      for (let time = start, item; time <= end; time += DAY) {
        item = simplifyDate(time)
        if (item.year == checkedDate.year
          && item.month == checkedDate.month
          && item.date == checkedDate.date
          && item.day == checkedDate.day
        ) {
          item.isCurrentDate = true
        }

        item.isPrevMonth = item.month < modeDate.month
        item.isCurrentMonth = item.month == modeDate.month
        item.isLastMonth = item.month > modeDate.month
        data.push(item)
      }
      return data

    },
    createRenderData(modeDate, checkedDate) {

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
      let offset = stableDuration - duration

      if (offset > 0) {
        endDate += offset
      }
      let list = me.getDatasource(startDate, endDate, modeDate, checkedDate)
      return me.format(list)
    },
    format(list) {
      let result = []
      let arr = []
      for (let i = 0; i < list.length; i++) {
        arr.push(list[i])
        if (i % 7 == 6) {
          result.push(arr)
          arr = []
        }
      }
      return result
    }
  },

  afterMount() {
    let me = this

    let today = new Date()
    let date = me.get('checkedDate')
    date = date ? date : today

    me.set({
      modeDate: date,
      checkedDate: date,
      dateList: me.createRenderData(date, date)
    })
  }
}
