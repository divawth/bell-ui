import Yox from 'yox'

import Icon from '../icon/Icon'
import template from './template/BackTop.hbs'

import {
  FALSE,
  BODY,
  WINDOW,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_EVENT_SCROLL,
  RAW_EVENT_RESIZE,
  RAW_EVENT_BEFORE_DESTROY,
} from '../constant'

import {
  scrollTop, onTransitionEnd,
} from '../util'

const CLASS_VISIBLE = '${prefix}backtop-visible'
const CLASS_FADE = '${prefix}backtop-fade'

export default Yox.define({

  template,

  name: '${prefix}backtop',

  propTypes: {
    bottom: {
      type: RAW_NUMERIC,
      value: 30,
    },
    right: {
      type: RAW_NUMERIC,
      value: 30,
    },
    height: {
      type: RAW_NUMERIC,
    },
    duration: {
      type: RAW_NUMERIC,
      value: 1000,
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
      visible: FALSE
    }
  },

  events: {
    click() {

      let parentElement = this.$parent && this.$parent.$el
      if (!parentElement || parentElement === this.$el) {
        parentElement = BODY
      }

      scrollTop(
        parentElement,
        parentElement.scrollTop,
        0,
        this.get('duration')
      )

    }
  },

  watchers: {
    visible(visible) {

      const me = this
      const element = me.$el

      if (visible) {

        // 设置为 display block
        Yox.dom.addClass(element, CLASS_VISIBLE)

        setTimeout(
          function () {
            Yox.dom.addClass(element, CLASS_FADE)
          },
          30
        )

      }
      else {

        Yox.dom.removeClass(element, CLASS_FADE)

        onTransitionEnd(
          element,
          function () {
            if (me.$el) {
              Yox.dom.removeClass(element, CLASS_VISIBLE)
            }
          }
        )

      }

    }
  },

  components: {
    Icon,
  },

  afterMount() {

    let me = this, parentElement = me.$parent && me.$parent.$el
    if (!parentElement || parentElement === me.$el) {
      parentElement = BODY
    }

    const height = me.get('height'),

    onRefresh = function () {
      me.set({
        visible: parentElement.scrollTop >= (height || parentElement.clientHeight)
      })
    }

    Yox.dom.on(parentElement, RAW_EVENT_SCROLL, onRefresh)
    Yox.dom.on(WINDOW, RAW_EVENT_RESIZE, onRefresh)

    me.on(
      RAW_EVENT_BEFORE_DESTROY,
      function (event) {
        if (event.phase === Yox.Event.PHASE_CURRENT) {
          Yox.dom.off(parentElement, RAW_EVENT_SCROLL, onRefresh)
          Yox.dom.off(WINDOW, RAW_EVENT_RESIZE, onRefresh)
        }
      }
    )

  }

})
