import Yox from 'yox'

import Icon from '../icon/Icon'
import Input from '../input/Input'
import Button from '../button/Button'
import Select from '../select/Select'

import template from './template/Pagination.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_ARRAY,
  RAW_BOTTOM,
  RAW_TOP,
  RAW_DEFAULT,
  RAW_SMALL,
  RAW_NUMERIC,
} from '../constant'

import {
  oneOf,
  toNumber,
} from '../util'

export default Yox.define({

  template,

  model: 'current',

  name: '${prefix}pagination',

  propTypes: {
    size: {
      type: oneOf([RAW_DEFAULT, RAW_SMALL]),
      value: RAW_DEFAULT,
    },
    simple: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    total: {
      type: RAW_NUMERIC,
      required: TRUE,
    },
    current: {
      type: RAW_NUMERIC,
      value: 1,
    },
    pageSize: {
      type: RAW_NUMERIC,
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
    hideOnSinglePage: {
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
      page: '',
    }
  },

  computed: {
    pageList(): object[] {

      const result = []

      const current = toNumber(this.get('current'))
      const count = toNumber(this.get('count'))

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
        'change.pagination',
        {
          pageSize: data.value
        }
      )

    },
    'change.input': function (event) {

      if (event.phase !== Yox.Event.PHASE_UPWARD) {
        return
      }

      event.stop()

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
    current(current: number) {
      this.set('page', current)
      this.fire(
        'change.pagination',
        {
          current,
        }
      )
    }
  },

  methods: {

    showError(error: string) {
      this.fire(
        'error.pagination',
        {
          error,
        }
      )
    },

    jump() {
      let page = this.get('page')
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
            this.set('current', page)
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

  },

  components: {
    Icon,
    Input,
    Button,
    Select,
  }

})