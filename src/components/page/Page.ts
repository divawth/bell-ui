import Yox from 'yox'

import template from './template/Page.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMBER,
  RAW_ARRAY,
  RAW_BOTTOM,
  RAW_TOP,
  RAW_DEFAULT,
  RAW_SMALL,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  model: 'current',

  propTypes: {
    size: {
      type: oneOf([RAW_DEFAULT, RAW_SMALL]),
      value: RAW_DEFAULT,
    },
    simple: {
      type: RAW_BOOLEAN,
    },
    total: {
      type: RAW_NUMBER,
    },
    current: {
      type: RAW_NUMBER,
      value: 1,
    },
    pageSize: {
      type: RAW_NUMBER,
      value: 10,
    },
    pageSizeOptions: {
      type: RAW_ARRAY,
    },
    showJumper: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    showTotal: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    placement: {
      type: oneOf([RAW_TOP, RAW_BOTTOM]),
      value: RAW_BOTTOM,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data() {
    return {
      tempPage: '',
    }
  },

  computed: {
    pageList(): object[] {

      const result = []

      const current = this.get('current')
      const count = this.get('count')

      if (count === 0) {
        return result
      }

      // 先用 current 拆出中间的 5 个页码
      let start = current - 2
      let end = current + 2

      if (start < 1) {
        start = 1
        end = Math.min(count, start + 4)
      }
      if (end > count) {
        end = count
        start = Math.max(1, end - 4)
      }

      for (let i = start; i <= end; i++) {
        result.push({
          value: i,
          active: i === current,
        })
      }

      if (start > 1) {
        // 和第一页至少隔了一个页码
        if (start - 1 > 1) {
          result.unshift({
            prev: TRUE,
          })
        }
        result.unshift({
          value: 1,
          active: 1 === current,
        })
      }

      if (end < count) {
        // 和最后一页至少隔了一个页码
        if (count - end > 1) {
          result.push({
            next: TRUE,
          })
        }
        result.push({
          value: count,
          active: count === current,
        })
      }

      return result

    },
    pageSizeList(): object[] {

      const result = []
      const pageSizeOptions = this.get('pageSizeOptions')

      if (pageSizeOptions) {
        Yox.array.each(
          pageSizeOptions,
          function (value) {
            result.push({
              text: value + ' 条/页',
              value,
            })
          }
        )
      }

      return result

    },
    count(): number {
      const total = this.get('total')
      const pageSize = this.get('pageSize')
      return Math.ceil(total / pageSize)
    }
  },

  events: {
    'change.select': function (event, data) {

      if (event.phase !== Yox.Event.PHASE_UPWARD) {
        return
      }

      event.stop()

      this.fire(
        'pageSizeChange.page',
        {
          value: data.value
        }
      )

    },
    'enter.input': function (event) {

      if (event.phase !== Yox.Event.PHASE_UPWARD) {
        return
      }

      event.stop()

      this.jump()

    }
  },

  watchers: {
    current(value: number) {
      this.set('tempPage', value)
      this.fire(
        'pageChange.page',
        {
          value,
        }
      )
    }
  },

  methods: {

    showError(error: string) {
      this.fire(
        'error.page',
        {
          error,
        }
      )
    },

    jump() {
      let page = this.get('tempPage')
      if (page) {
        if (Yox.is.numeric(page)) {
          page = +page
          if (page > this.get('count')) {
            this.showError('max')
          }
          else if (page <= 0) {
            this.showError('min')
          }
          else {
            this.changePage(page)
          }
        }
        else {
          this.showError('pattern')
        }
      }
      else {
        this.showError('empty')
      }
    },

    changePage(page: number) {
      this.set('current', page)
    },
  },

})