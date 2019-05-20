import { lpad } from './function/util'
import { contains, oneOf } from '../util'
import template from './template/DatePicker.html'
import { RAW_STRING, NULL, FALSE } from '../constant';

const DAY_MAP = [ '日', '一', '二', '三', '四', '五', '六' ]

export default {

  propTypes: {
    mode: {
      type: oneOf(['date', 'dateRange', 'week', 'year', 'month']),
      value: 'date'
    },
    value: {
      type: 'object'
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

  mode: 'value',

  template,
  
  data() {
    return {
      date: NULL,
      start: NULL,
      end: NULL,

      isPopuping: FALSE,
      isPopdowning: FALSE,
      isOpen: FALSE
    }
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

    focus() {
      this.open()
    },

    open() {
      let me = this;
      me.set({
        isPopuping: true
      });
      setTimeout(
        () => {
          me.set({
            isPopuping: false,
            isOpen: true
          });
        }
      );
    },

    close() {
      let me = this;
      if (!me.get('isOpen')) {
        return;
      }
      me.set({
        isPopdowning: true
      });
      setTimeout(
        () => {
          me.set({
            isPopdowning: false,
            isOpen: false
          });
        }
      );
    },

    formateDate(date) {

      if (!date) {
        return false;
      }
      let argsLen = arguments.length;
      let result = '';
      let me = this;
      let startFormat = me.get('formateText').split('$')[0];
      let endFormat = me.get('formateText').split('$')[1];

      if (argsLen > 1) {
        let start = arguments[0];
        let end = arguments[1];

        let formatStart = startFormat
          .replace(/yyyy/i, start.year)
          .replace(/yy/i, +('' + start.year).substr(2))
          .replace(/MM/, lpad(start.month))
          .replace(/M/, start.month)
          .replace(/dd/i, lpad(start.date))
          .replace(/d/i, start.date)
          .replace(/w/, DAY_MAP[start.day]);

        let formatEnd = endFormat
          .replace(/yyyy/i, end.year)
          .replace(/yy/i, +('' + end.year).substr(2))
          .replace(/MM/, lpad(end.month))
          .replace(/M/, end.month)
          .replace(/dd/i, lpad(end.date))
          .replace(/d/i, end.date)
          .replace(/w/, DAY_MAP[end.day]);

        result = formatStart + formatEnd;

      }
      else {
        result = startFormat
          .replace(/yyyy/i, date.year)
          .replace(/yy/i, +('' + date.year).substr(2))
          .replace(/MM/, lpad(date.month))
          .replace(/M/, date.month)
          .replace(/dd/i, lpad(date.date))
          .replace(/d/i, date.date)
          .replace(/w/, DAY_MAP[date.day]);
      }
      return result.trim();
    },

    dateChange(date) {

      let me = this;
      let formateDate = me.get('formateDate');
      let newFormateDate = me.formateDate(date);
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
        );
      }
      me.set({
        date: date,
        formateDate: newFormateDate
      });
      me.close();

    },

    dateRangeChange(data) {
      let end = data.end;

      if (!end) {
        return;
      }

      let me = this;
      let start = data.start;

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
      );

      me.set({
        start: start,
        end: end,
        formateDate: me.formateDate(start, end)
      });
      me.close();

    }
  },

  afterMount() {
    let me = this;
    if (!me.get('formateText')) {
      switch (me.get('mode')) {
        case 'date':
          me.set({
            formateText: 'YYYY/MM/DD'
          });
          break;
        case 'dateRange':
          me.set({
            formateText: 'YYYY/MM/DD $- YYYY/MM/DD'
          });
          break;
        case 'week':
          me.set({
            formateText: 'YYYY/MM/DD $- YYYY/MM/DD'
          });
          break;
        case 'year':
          me.set({
            formateText: 'YYYY'
          });
          break;
        case 'month':
          me.set({
            formateText: 'YYYY/MM'
          });
          break;
      }
    }

    if (me.get('value')) {
      me.dateChange(me.get('value'));
    }

    me.documentClickHandler = function (e) {
      if (!me.get('isOpen')) {
        return
      }
      let element = me.$el;
      let target = e.originalEvent.target;
      if (contains(element, target)) {
        return;
      }
      me.close();
    };

    Yox.dom.on(
      document,
      'click',
      me.documentClickHandler
    );

  },

  beforeDestroy() {
    Yox.dom.off(
      document,
      'click',
      this.documentClickHandler
    );
  }
};