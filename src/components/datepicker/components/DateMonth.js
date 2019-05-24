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
  '十二月'
]

import template from '../template/DateMonth.html'
import { RAW_NUMERIC, RAW_STRING } from '../../constant';

export default {

  propTypes: {
    date: {
      type: RAW_NUMERIC
    },
    firstDay: {
      type: RAW_NUMERIC
    },
    year: {
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
      checkedMonth: '',
      checkedYear: '',
      modeYear: this.get('year') ? this.get('year') : new Date().getFullYear(),
      months: MONTHS
    }
  },

  methods: {
    prevMore() {
      this.decrease('modeYear', 10)
    },
    prev() {
      this.decrease('modeYear', 1)
    },
    nextMore() {
      this.increase('modeYear', 10)
    },
    next() {
      this.increase('modeYear', 1)
    },
    click(month) {

      let year = this.get('modeYear')

      this.set({
        checkedYear: year,
        checkedMonth: month
      })

      this.fire(
        'monthChange',
        {
          year: year,
          month: month + 1
        }
      )

    }
  }
};
