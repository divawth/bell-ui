import Yox, { CustomEvent } from 'yox'

import template from './template/Anchor.hbs'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  DOCUMENT,
  RAW_NUMBER,
  TRUE,
  FALSE,
} from '../constant'
import { debounce } from '../util';

export default Yox.define({

  propTypes: {
    affix: {
      type: RAW_BOOLEAN
    },
    container: {
      type: RAW_STRING
    },
    showInk: {
      type: RAW_BOOLEAN
    },
    offsetTop: {
      type: RAW_NUMBER,
      value: 0
    },
    offsetBottom: {
      type: RAW_NUMBER
    },
    bounds: {
      type: RAW_NUMBER,
      value: 5
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
      scrollElement: window,
      isAffix: true
    }
  },

  afterMount() {
    const me = this
    if (!me.get('affix')) {
      return
    }

    const offsetTop = me.get('offsetTop')
    const offsetBottom = me.get('offsetBottom')
    const scrollElement = me.get('scrollElement')

    if (Yox.is.string(me.get('container'))) {
      let element = document.querySelector(me.get('container'))
      if (!element) {
        return
      }
      me.set({
        scrollElement: element
      })
    }
    else if (me.get('conatiner')) {
      me.set({
        scrollElement: me.get('container')
      })
    }
    const handlerScroll = debounce(
      function (event: CustomEvent) {
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
      me.get('scrollElement'),
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
