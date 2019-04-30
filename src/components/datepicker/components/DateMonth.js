const MONTHS = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月',
];

import DateMonthTpl from '../template/DateMonth.html'

export default {
  template: DateMonthTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    date: {
      type: 'numeric'
    },
    firstDay: {
      type: 'numeric'
    },
    year: {
      type: 'numeric'
    }
  },

  data() {
    let me = this;
    return {
      checkedMonth: '',
      checkedYear: '',
      modeYear: me.get('year') ? me.get('year') : new Date().getFullYear(),
      months: MONTHS
    }
  },

  methods: {
    prevMore() {
      this.decrease('modeYear', 10);
    },
    prev() {
      this.decrease('modeYear', 1);
    },
    nextMore() {
      this.increase('modeYear', 10);
    },
    next() {
      this.increase('modeYear', 1);
    },
    click(month) {

      let me = this;
      let year = me.get('modeYear');

      me.set({
        checkedYear: year,
        checkedMonth: month
      });

      me.fire(
        'monthChange',
        {
          year: year,
          month: month + 1
        }
      );

    }
  }
};