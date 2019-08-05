import Yox, { CustomEventInterface } from 'yox'

import template from './template/Anchor.hbs'

import {
  TRUE,
  FALSE,
  WINDOW,
  DOCUMENT,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMBER,
} from '../constant'

import { debounce } from '../util'

export default Yox.define({

  propTypes: {
    affix: {
      type: RAW_BOOLEAN,
    },
    container: {
      type: RAW_STRING,
    },
    showInk: {
      type: RAW_BOOLEAN,
    },
    offsetTop: {
      type: RAW_NUMBER,
      value: 0
    },
    offsetBottom: {
      type: RAW_NUMBER,
    },
    bounds: {
      type: RAW_NUMBER,
      value: 5,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  template,

  data() {
    return {
      scrollElement: WINDOW,
      isAffix: true,
    }
  },

  afterMount() {
    const me = this
    if (!me.get('affix')) {
      return
    }

    const offsetTop = me.get('offsetTop')
    const offsetBottom = me.get('offsetBottom')
    const container = me.get('container')

    let scrollElement = me.get('scrollElement')
    if (Yox.is.string(container)) {
      let element = Yox.dom.find(container)
      if (!element) {
        return
      }
      scrollElement = element
      me.set({
        scrollElement
      })
    }
    else if (container) {
      scrollElement = container
      me.set({
        scrollElement
      })
    }

    const handlerScroll = debounce(
      function (event: CustomEventInterface) {
        let scrollTop: number, scrollHeight: number, clientHeight: number
        let target = event.originalEvent.target
        if (target === DOCUMENT) {
          scrollTop = window.scrollY
          scrollHeight = window.pageYOffset
          clientHeight = window.innerHeight
        }
        else {
          scrollTop = (target as HTMLElement).scrollTop
          scrollHeight = (target as HTMLElement).scrollHeight
          clientHeight = (target as HTMLElement).clientHeight
        }
        const scrollBottom = scrollHeight - clientHeight - scrollTop
        if (scrollTop > offsetTop) {
          me.set({
            isAffix: TRUE
          })
          console.log('触发顶部事件')
        }
        else if (scrollTop <= offsetTop) {
          me.set({
            isAffix: FALSE
          })
        }
        else if (offsetBottom && offsetBottom <= scrollBottom) {
          console.log('触发底部事件')
        }
      },
      1000,
      TRUE
    )

    const handlerHashChange = function () {
      console.log(arguments)
    }
    Yox.dom.on(
      scrollElement,
      'scroll',
      handlerScroll
    )
    Yox.dom.on(
      DOCUMENT,
      'hashchange',
      handlerHashChange
    )

    me.on(
      'beforeDestroy.hook',
      function (event) {
        if (event.phase === Yox.Event.PHASE_CURRENT) {
          Yox.dom.off(
            scrollElement,
            'scroll',
            handlerScroll
          )
          Yox.dom.off(
            DOCUMENT,
            'hashchange',
            handlerHashChange
          )
        }
      }
    )
  }
})
