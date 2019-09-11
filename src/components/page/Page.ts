import Yox, { Listener, CustomEventInterface, Data } from 'yox'

import template from './template/Page.hbs'

import {
  FALSE,
  DOCUMENT,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMBER,
  RAW_ARRAY,
  RAW_BOTTOM,
  RAW_TOP,
  RAW_DEFAULT,
  RAW_SMALL,
  RAW_EVENT_KEYDOWN,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

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
    showSizer: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    pageSizeOpts: {
      type: RAW_ARRAY,
    },
    showElevator: {
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
    prevText: {
      type: RAW_STRING,
    },
    nextText: {
      type: RAW_STRING,
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
      currentPage: 1,
      elevatorPage: ''
    }
  },

  computed: {
    pageList(): object[] {

      const pageList = []
      const pageSizeOpts = this.get('pageSizeOpts')

      if (this.get('showSizer') && pageSizeOpts) {
        Yox.array.each(
          pageSizeOpts,
          function (value) {
            pageList.push({
              text: value + ' 条/页',
              value,
            })
          }
        )
      }

      return pageList

    },
    count(): number {
      const total = this.get('total')
      if (total) {
        const pageSize = this.get('pageSize')
        return total > pageSize
          ? Math.ceil(total / pageSize)
          : 1
      }
      return 0
    }
  },

  events: {
    change(event) {
      if (event.target !== this) {
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
      this.fire(
        'error.page',
        {
          msg: error,
        }
      )
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
      event.stop()
      this.fire(
        'change.page',
        {
          pageSize: data.value
        }
      )
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
      me.set(
        'currentPage',
        me.decrease('current', 1, 1)
      )
    },

    next() {
      let me = this
      if (me.get('current') >= me.get('count')) {
        return
      }
      me.set(
        'currentPage',
        me.increase('current', 1, me.get('count'))
      )
    },

    changePage(page: number) {
      this.set({
        current: page,
        currentPage: page
      })
    },
  },

  afterMount() {

    const me = this

    const onKeydown: Listener = function (event) {

      const { target, keyCode } =  event.originalEvent as KeyboardEvent
      const { simpleInput, elevatorInput } = me.$refs
      if (target !== simpleInput && target !== elevatorInput) {
        return
      }

      let currentPage = +me.get('currentPage')
      let current = me.get('current')
      let count = me.get('count')

      switch (keyCode) {
        case 40:
          current = Math.min(current + 1, count)
          break
        case 38:
          current = Math.max(current - 1, 1)
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
      DOCUMENT,
      RAW_EVENT_KEYDOWN,
      onKeydown
    )

    me.on(
      'beforeDestroy.hook',
      function (event) {
        if (event.phase === Yox.Event.PHASE_CURRENT) {
          Yox.dom.off(
            DOCUMENT,
            RAW_EVENT_KEYDOWN,
            onKeydown
          )
        }
      }
    )

  }
})