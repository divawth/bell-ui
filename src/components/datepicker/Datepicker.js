import Date from './components/Date'
import DateRange from './components/DateRange'
import DateWeek from './components/DateWeek'
import DateMonth from './components/DateMonth'
import DateYear from './components/DateYear'

import { lpad, simplifyDate } from './function/util'
import { contains, oneOf } from '../util'
import template from './template/DatePicker.html'
import { RAW_STRING, NULL, FALSE, RAW_OBJECT, RAW_ARRAY } from '../constant'


const DAY_MAP = [ '日', '一', '二', '三', '四', '五', '六' ]

export default {

  propTypes: {
    type: {
      type: oneOf(['date', 'dateRange', 'week', 'year', 'month']),
      value: 'date'
    },
    value: {
      type: 'date'
    },
    shortcuts: {
      type: RAW_ARRAY
    },
    formateText: {
      type: RAW_STRING
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  model: 'value',

  template,

  data() {
    return {
      date: NULL,
      start: NULL,
      end: NULL,

      visible: FALSE
    }
  },

  components: {
    Date,
    DateRange,
    DateWeek,
    DateMonth,
    DateYear
  },

  events: {
    change(_, data) {
      if (!data.value) {
        this.fire('clear.datePicker')
      }
    },

    yearChange(event, date) {
      this.dateChange(date)
      event.stop()
    },

    monthChange(event, date) {
      this.dateChange(date)
      event.stop()
    },

    deteChange(event, date) {
      this.dateChange(date)
      event.stop()
    },

    weekRangeChange(event, date) {
      this.dateRangeChange(date)
      event.stop()
    },

    deteRangeChange(event, date) {
      this.dateRangeChange(date)
      event.stop()
    }
  },

  methods: {
    shortcutClick(data) {
      let date = data.value && data.value()
      if (!date) {
        Yox.logger.warn(`shortcuts value 传值错误`)
      }
      this.dateChange(date)
      data.onClick && data.onClick()
    },

    focus() {
      this.set('visible', true)
    },

    open() {
      this.set('visible', true)
    },

    close() {
      this.set('visible', false)
    },

    formateDate(date) {

      if (!date) {
        return false
      }
      let argsLen = arguments.length
      let result = ''
      let me = this
      let startFormat = me.get('formateText').split('$')[0]
      let endFormat = me.get('formateText').split('$')[1]

      if (argsLen > 1) {
        let start = arguments[0]
        let end = arguments[1]

        let formatStart = startFormat
          .replace(/yyyy/i, start.year)
          .replace(/yy/i, +('' + start.year).substr(2))
          .replace(/MM/, lpad(start.month))
          .replace(/M/, start.month)
          .replace(/dd/i, lpad(start.date))
          .replace(/d/i, start.date)
          .replace(/w/, DAY_MAP[start.day])

        let formatEnd = endFormat
          .replace(/yyyy/i, end.year)
          .replace(/yy/i, +('' + end.year).substr(2))
          .replace(/MM/, lpad(end.month))
          .replace(/M/, end.month)
          .replace(/dd/i, lpad(end.date))
          .replace(/d/i, end.date)
          .replace(/w/, DAY_MAP[end.day])

        result = formatStart + formatEnd

      }
      else {
        result = startFormat
          .replace(/yyyy/i, date.year)
          .replace(/yy/i, +('' + date.year).substr(2))
          .replace(/MM/, lpad(date.month))
          .replace(/M/, date.month)
          .replace(/dd/i, lpad(date.date))
          .replace(/d/i, date.date)
          .replace(/w/, DAY_MAP[date.day])
      }
      return result.trim()
    },

    dateChange(date) {

      date = simplifyDate(date)
      
      let me = this
      let formateDate = me.get('formateDate')
      let newFormateDate = me.formateDate(date)
      if (newFormateDate !== formateDate) {
        me.fire(
          'change',
          {
            value: {
              formateDate: newFormateDate,
              date: date,
            },
            oldValue: {
              formateDate: formateDate,
              date: me.get('date')
            }
          }
        )
      }
      me.set({
        date: date,
        formateDate: newFormateDate
      })
      me.close()

    },

    dateRangeChange(data) {
      
      let end = data.end

      if (!end) {
        return
      }

      let me = this
      let start = data.start

      me.fire(
        'change',
        {
          value: {
            start: start,
            end: end,
            startDate: me.formateDate(start),
            endDate: me.formateDate(end),
            formateDate: me.formateDate(start, end)
          },
          oldValue: {
            start: me.get('start'),
            end: me.get('end'),
            startDate: me.formateDate(me.get('start')),
            endDate: me.formateDate(me.get('end')),
            formateDate: me.formateDate(me.get('start'), me.get('end'))
          }
        }
      )

      me.set({
        start: start,
        end: end,
        formateDate: me.formateDate(start, end)
      })
      me.close()

    }
  },

  afterMount() {
    let me = this
    if (!me.get('formateText')) {
      let formateText = ''
      switch (me.get('type')) {
        case 'date':
          formateText = 'YYYY/MM/DD'
          break
        case 'dateRange':
          formateText = 'YYYY/MM/DD $- YYYY/MM/DD'
          break
        case 'week':
          formateText = 'YYYY/MM/DD $- YYYY/MM/DD'
          break
        case 'year':
          formateText = 'YYYY'
          break
        case 'month':
          formateText = 'YYYY/MM'
          break
      }
      me.set({ formateText })
    }
    

    if (me.get('value')) {
      me.dateChange(me.get('value'))
    }

    me.documentClickHandler = function (e) {
      let element = me.$el
      let target = e.originalEvent.target
      if (contains(element, target)) {
        return
      }
      me.close()
    }

    Yox.dom.on(
      document,
      'click',
      me.documentClickHandler
    )

  },

  beforeDestroy() {
    Yox.dom.off(
      document,
      'click',
      this.documentClickHandler
    )
  }
}
