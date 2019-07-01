import Yox, { Listener, CustomEventInterface, Data } from 'yox'

import template from './template/Page.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMBER,
  RAW_SIZE_ARRAY,
  RAW_ARRAY,
  RAW_BOTTOM,
  RAW_TOP,
} from '../constant'
import { oneOf } from '../util'

export default Yox.define({

  propTypes: {
    size: {
      type: oneOf(RAW_SIZE_ARRAY)
    },
    simple: {
      type: RAW_BOOLEAN
    },
    total: {
      type: RAW_NUMBER
    },
    current: {
      type: RAW_NUMBER,
      value: 1
    },
    pageSize: {
      type: RAW_NUMBER,
      value: 10
    },
    showSizer: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    pageSizeOpts: {
      type: RAW_ARRAY
    },
    showElevator: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    showTotal: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    placement: {
      type: oneOf([RAW_TOP, RAW_BOTTOM]),
      value: RAW_BOTTOM
    },
    prevText: {
      type: RAW_STRING
    },
    nextText: {
      type: RAW_STRING
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
    let getPageList = function () {
      let pageList = []
      if (me.get('showSizer')
        && me.get('pageSizeOpts')
      ) {
        Yox.array.each(
          me.get('pageSizeOpts'),
          function (value) {
            pageList.push({
              text: value + ' 条/页',
              value: value
            })
          }
        )
      }
      return pageList
    }
    return {
      pageList: getPageList(),
      count: 0,
      currentPage: 1,
      elevatorPage: ''
    }
  },

  events: {
    change: function (event: CustomEventInterface) {
      if (event.target != this) {
        event.stop()
      }
    }
  },

  watchers: {
    current(value: number) {
      this.fire(
        'change.page',
        {
          value: value
        }
      )
    }
  },

  methods: {

    showError(error: string) {
      this.fire('error.page', {
        errMsg: error
      })
    },
    elevator() {
      let page = this.get('elevatorPage')
      if (Yox.is.numeric(page)) {
        page = +page
        if (page > this.get('count')) {
          this.showError(`输入页码值过大`)
        }
        else if (page <= 0) {
          this.showError(`输入页码值过小`)
        }
        else {
          this.changePage(page)
        }
        return
      }
      this.showError(`输入格式错误`)
    },

    pageSizeChange(event: CustomEventInterface, data: Data) {
      this.updateCount()
      this.fire(
        'pageSizeChange.page',
        {
          value: data.value
        }
      )
      event.stop()
    },

    fastPrev() {
      let me = this
      if (me.get('current') < 1) {
        return
      }
      me.decrease('current', 5, 1)
    },

    fastNext() {
      let me = this
      if (me.get('current') >= me.get('count')) {
        return
      }
      me.increase('current', 5, me.get('count'))
    },

    prev() {
      let me = this
      if (me.get('current') < 1) {
        return
      }
      me.decrease('current', 1, 1)

      if (me.get('simple')) {
        me.decrease('currentPage', 1, 1)
      }
    },

    next() {
      let me = this
      if (me.get('current') >= me.get('count')) {
        return
      }
      me.increase('current', 1, me.get('count'))
      if (me.get('simple')) {
        me.increase('currentPage', 1, me.get('count'))
      }
    },

    changePage(page: number) {
      this.set({
        current: page,
        currentPage: page
      })
    },

    updateCount() {
      let me = this
      if (me.get('total')) {
        let count = 1
        if (me.get('total') > me.get('pageSize')) {
          count = Math.ceil(me.get('total') / me.get('pageSize'))
        }

        me.set({
          count: count
        })
      }
    }
  },

  afterMount() {

    let me = this, doc = document

    me.updateCount()

    const onKeydown: Listener = function (event) {

      let currentPage = +me.get('currentPage')
      let current = me.get('current')
      let count = me.get('count')

      switch ((event.originalEvent as KeyboardEvent).keyCode) {
        case 40:
          current = current + 1 > count ? count : current + 1
          break
        case 38:
          current = current > 1 ? current - 1 : 1
          break
        case 13:
          if (Yox.is.number(currentPage)
            && currentPage > 0
            && currentPage <= count
          ) {
            current = currentPage
          }
          break
      }

      me.set({
        current: current,
        currentPage: current
      })

    }

    Yox.dom.on(
      doc,
      'keydown',
      onKeydown
    )

    me.on(
      'beforeDestroy.hook',
      function () {
        Yox.dom.off(
          doc,
          'keydown',
          onKeydown
        )
      }
    )

  }
})