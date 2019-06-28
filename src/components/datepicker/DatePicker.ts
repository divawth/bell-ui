import Yox, { Listener } from 'yox'

import Date from './components/Date'
import DateRange from './components/DateRange'
import DateWeek from './components/DateWeek'
import DateMonth from './components/DateMonth'
import DateYear from './components/DateYear'

import { lpad, simplifyDate } from './function/util'
import { contains, oneOf, isDate } from '../util'
import template from './template/DatePicker.hbs'
import { RAW_STRING, NULL, FALSE, RAW_PLACEMENT_ARRAY, RAW_ARRAY, RAW_BOOLEAN, RAW_BOTTOM_START, RAW_FUNCTION, RAW_SIZE_ARRAY } from '../constant'


const DAY_MAP = [ '日', '一', '二', '三', '四', '五', '六' ]

export default Yox.define({

  propTypes: {
    type: {
      type: oneOf(['date', 'dateRange', 'week', 'year', 'month']),
      value: 'date'
    },
    size: {
      type: oneOf(RAW_SIZE_ARRAY)
    },
    value: {
      type: isDate()
    },
    shortcuts: {
      type: RAW_ARRAY
    },
    splitPanel: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    multiple: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    placement: {
      type: oneOf(RAW_PLACEMENT_ARRAY),
      value: RAW_BOTTOM_START
    },
    startDate: {
      type: isDate()
    },
    formatText: {
      type: RAW_STRING
    },
    disabledDate: {
      type: RAW_FUNCTION
    },
    confirm: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    clearable: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    open: {
      type: RAW_BOOLEAN
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

  computed: {
    autoClose(): boolean {
      return this.get('multiple') || this.get('confirm')
    },
    isOpen(): boolean {
      return this.get('visible') || this.get('open')
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
    'clear.input': function (event) {
      this.fire(
        'clear.datepicker',
        true
      )
      event.stop()
    },
    'change.date': function (event, data) {
      if (data.selectedDates) {
        this.set({
          selectedDates: data.selectedDates
        })
      }
      this.dateChange(data.date)
      event.stop()
    },
    change(_, data) {
      if (!data.value) {
        this.fire('clear.datePicker')
      }
    },

    'change.year': function (event, date) {
      this.dateChange(date)
      event.stop()
    },

    'change.month': function (event, date) {
      this.dateChange(date)
      event.stop()
    },

    'change.week': function (event, date) {
      this.dateRangeChange(date)
      event.stop()
    },

    'change.daterange': function (event, date) {
      this.dateRangeChange(date)
      event.stop()
    }
  },

  methods: {
    shortcutClick(data) {
      let date = data.value && data.value()
      if (!date) {
        Yox.logger.warn(`shortcuts value 传值错误`)
        return
      }
      if (!Yox.is.array(date)) {
        date = simplifyDate(date)
        this.dateChange(date)
      }
      else {
        this.dateRangeChange({
          start: simplifyDate(date[ 0 ]),
          end: simplifyDate(date[ 1 ])
        })
      }
      this.set({
        value: date
      })
      data.onClick && data.onClick()
    },

    focus() {
      this.set('visible', true)
    },

    close() {
      this.set('visible', false)
    },

    formatDate(start: any, end?: any) {

      if (!start) {
        return ''
      }
      let result = ''
      let me = this
      let startFormat = me.get('formatText').split('$')[0]
      let endFormat = me.get('formatText').split('$')[1]

      if (end) {
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
          .replace(/yyyy/i, start.year)
          .replace(/yy/i, +('' + start.year).substr(2))
          .replace(/MM/, lpad(start.month))
          .replace(/M/, start.month)
          .replace(/dd/i, lpad(start.date))
          .replace(/d/i, start.date)
          .replace(/w/, DAY_MAP[start.day])
      }
      return result.trim()
    },

    dateChange(date) {

      let me = this
      let multiple = me.get('multiple')

      if (!multiple) {
        let formatDate = me.get('formatDate')
        let newFormateDate = me.formatDate(date)
        if (newFormateDate !== formatDate) {
          me.fire(
            'change.datepicker',
            {
              value: {
                formatDate: newFormateDate,
                date: date,
              },
              oldValue: {
                formatDate: formatDate,
                date: me.get('date')
              }
            }
          )
        }
        me.set({
          date: date,
          formatDate: newFormateDate
        })
      }
      else {
        let formatDateArray = []
        let selectedDates = me.get('selectedDates')
        selectedDates.forEach(item => {
          let dateArray = item.split('/')
          let date = {
            year: dateArray[ 0 ],
            month: dateArray[ 1 ],
            date: dateArray[ 2 ],
            day: dateArray[ 3 ],
          }
          formatDateArray.push(
            me.formatDate(date)
          )
        });
        me.set({
          formatDate: formatDateArray.join(', ')
        })
      }
      !me.get('autoClose') && me.close()
    },

    dateRangeChange(data) {

      let end = data.end

      if (!end) {
        return
      }

      let me = this
      let start = data.start

      me.fire(
        'change.datepicker',
        {
          value: {
            start: start,
            end: end,
            startDate: me.formatDate(start),
            endDate: me.formatDate(end),
            formatDate: me.formatDate(start, end)
          },
          oldValue: {
            start: me.get('start'),
            end: me.get('end'),
            startDate: me.formatDate(me.get('start')),
            endDate: me.formatDate(me.get('end')),
            formatDate: me.formatDate(me.get('start'), me.get('end'))
          }
        }
      )

      me.set({
        start: start,
        end: end,
        formatDate: me.formatDate(start, end)
      })
      !me.get('autoClose') && me.close()
    },
    clear() {
      this.set('formatDate', '')
      this.fire('clear.datepicker', true)
      this.fire('clear.datepicker')
      this.close()
    },
    ok() {
      this.close()
      this.fire('ok.datepicker')
    }
  },

  afterMount() {
    const me = this, doc = document

    if (!me.get('formatText')) {
      let formatText = ''
      switch (me.get('type')) {
        case 'date':
          formatText = 'YYYY/MM/DD'
          break
        case 'dateRange':
          formatText = 'YYYY/MM/DD $- YYYY/MM/DD'
          break
        case 'week':
          formatText = 'YYYY/MM/DD $- YYYY/MM/DD'
          break
        case 'year':
          formatText = 'YYYY'
          break
        case 'month':
          formatText = 'YYYY/MM'
          break
      }
      me.set({ formatText })
    }

    const onClick: Listener = function (event) {
      let element = me.$el
      let target = event.originalEvent.target
      if (contains(element, target)) {
        return
      }
      me.close()
    }

    Yox.dom.on(
      doc,
      'click',
      onClick
    )

    me.on(
      'beforeDestroy.hook',
      function () {
        Yox.dom.off(
          doc,
          'click',
          onClick
        )
      }
    )
  }
})
