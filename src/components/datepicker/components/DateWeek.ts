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
import { DateType } from '../type';

export default Yox.define({

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
    currentYear(): number {
      let me = this
      return simplifyDate(me.get('modeDate')).year
    },
    currentMonth(): number {
      let me = this
      return simplifyDate(me.get('modeDate')).month
    }
  },

  methods: {
    changeDate(offset: number) {
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
    click(date: DateType[]) {
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
    refresh(start: number) {
      let me = this
      let dateList = me.get('dateList')
      let checkedIndex = undefined
      let checkedDateTime = 0
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
    getDatasource(
      start: number,
      end: number,
      date: DateType,
      checkedDateTime: number
    ) {
      let data = []
      for (let time = start; time <= end; time += DAY) {
        let item: DateType = simplifyDate(
          new Date(time)
        )
        item.isCurrentDate = checkedDateTime && checkedDateTime === getOffsetTime(parseDate(item))
        item.isPrevMonth = item.month < date.month
        item.isCurrentMonth = item.month == date.month
        item.isLastMonth = item.month > date.month
        data.push(item)
      }
      return data

    },
    createRenderData(modeDate: Date, checkedDateTime: number) {
      let me = this
      let firstDay = me.get('firstDay') || 0
      let date = normalizeDate(modeDate)

      let startDate = normalizeDate(
        firstDateInWeek(firstDateInMonth(date), firstDay)
      )
      let endDate = normalizeDate(
        lastDateInWeek(lastDateInMonth(date), firstDay)
      )

      let duration = endDate - startDate
      let offset = STABLE_DURATION - duration

      if (offset > 0) {
        endDate += offset
      }

      let list = me.getDatasource(
        startDate,
        endDate,
        simplifyDate(
          new Date(date)
        ),
        checkedDateTime
      )
      return me.format(list)
    },
    format(list: DateType[]) {
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
