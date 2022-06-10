import Yox from 'yox'

import template from './template/Pagination.hbs'
// import './style/Pagination.styl'

import Icon from '../icon/Icon'
import Input from '../input/Input'
import Button from '../button/Button'
import Select from '../select/Select'
import PrevPage from './PrevPage'
import NextPage from './NextPage'

import {
  TRUE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_ARRAY,
  RAW_BOTTOM,
  RAW_TOP,
  RAW_DEFAULT,
  RAW_SMALL,
  RAW_NUMERIC,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
  toNumber,
} from '../util'

import {
  onClickEventByEnterPress,
} from '../event'

export default Yox.define({

  template,

  model: 'current',

  name: '${prefix}Pagination',

  propTypes: {
    size: {
      type: oneOf([RAW_DEFAULT, RAW_SMALL]),
      value: RAW_DEFAULT,
    },
    simple: {
      type: RAW_BOOLEAN,
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
    },
    showTotal: {
      type: RAW_BOOLEAN,
    },
    placement: {
      type: oneOf([RAW_TOP, RAW_BOTTOM]),
      value: RAW_BOTTOM,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  data() {
    return {
      page: '',
      focused: '',
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

  events: [
    {
      type: 'change',
      ns: 'select',
      listener(event, data) {

        if (event.phase !== Yox.Event.PHASE_UPWARD) {
          return
        }

        event.stop()

        // @ts-ignore
        this.fire(
          {
            type: 'change',
            ns: 'pagination',
          },
          {
            pageSize: data.value
          }
        )

      }
    },
    {
      type: 'change',
      ns: 'input',
      listener(event) {

        if (event.phase !== Yox.Event.PHASE_UPWARD) {
          return
        }

        // @ts-ignore
        event.stop()

      }
    },
    {
      type: 'enter',
      ns: 'input',
      listener(event) {

        if (event.phase !== Yox.Event.PHASE_UPWARD) {
          return
        }

        event.stop()

        // @ts-ignore
        this.onJumpClick()

      }
    }
  ],

  watchers: {
    current(current: number) {
      this.set('page', current)
    }
  },

  methods: {

    onPageClick(page: number) {
      this.setCurrent(page)
    },
    onPageFocus(page: number) {
      this.set({
        focused: `${page}_page`,
      })
    },
    onPageBlur(page: number) {
      if (this.get('focused') === `${page}_page`) {
        this.set({
          focused: '',
        })
      }
    },

    onPrevPageClick() {
      this.decreaseCurrent(1)
    },
    onPrevPageFocus() {
      this.set({
        focused: 'prev_page',
      })
    },
    onPrevPageBlur() {
      if (this.get('focused') === 'prev_page') {
        this.set({
          focused: '',
        })
      }
    },

    onNextPageClick() {
      this.increaseCurrent(1)
    },
    onNextPageFocus() {
      this.set({
        focused: 'next_page',
      })
    },
    onNextPageBlur() {
      if (this.get('focused') === 'next_page') {
        this.set({
          focused: '',
        })
      }
    },

    onJumpClick() {
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
            this.setCurrent(page)
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

    showError(error: string) {
      this.fire(
        {
          type: 'error',
          ns: 'pagination',
        },
        {
          error,
        }
      )
    },

    setCurrent(current: number) {
      if (this.get('current') === current) {
        return
      }
      this.set('current', current)
      this.fire(
        {
          type: 'change',
          ns: 'pagination',
        },
        {
          current,
        }
      )
    },

    decreaseCurrent(step: number) {
      const value = toNumber(this.get('current'), 1) - step
      this.setCurrent(
        value < 1 ? 1 : value
      )
    },

    increaseCurrent(step: number) {
      const value = toNumber(this.get('current'), 1) + step
      const count = this.get('count')
      this.setCurrent(
        value > count ? count : value
      )
    }

  },

  afterMount() {
    const me = this
    onClickEventByEnterPress(me, function () {
      const focused = me.get('focused')
      if (focused) {
        const parts = focused.split('_')
        if (parts[1] === 'page') {
          if (parts[0] === 'prev') {
            me.onPrevPageClick()
          }
          else if (parts[0] === 'next') {
            me.onNextPageClick()
          }
          else {
            me.onPageClick(
              toNumber(parts[0])
            )
          }
        }
      }
    })
  },

  components: {
    Icon,
    Input,
    Button,
    Select,
    PrevPage,
    NextPage,
  }

})