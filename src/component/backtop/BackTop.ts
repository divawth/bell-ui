import Yox from 'yox'

import template from './template/BackTop.hbs'
// import './style/BackTop.styl'

import Icon from '../icon/Icon'

import {
  FALSE,
  WINDOW,
  DOCUMENT,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_EVENT_SCROLL,
  RAW_EVENT_RESIZE,
  RAW_EVENT_BEFORE_DESTROY,
} from '../constant'

import {
  toNumber,
  scrollTo,
  onTransitionEnd,
  supportTransform,
} from '../util'

const CLASS_VISIBLE = '${prefix}backtop-visible'
const CLASS_FADE = '${prefix}backtop-fade'

export default Yox.define({

  template,

  name: '${prefix}BackTop',

  propTypes: {
    target: {
      type: RAW_STRING,
    },
    bottom: {
      type: RAW_NUMERIC,
    },
    right: {
      type: RAW_NUMERIC,
    },
    height: {
      type: RAW_NUMERIC,
      value: 0,
    },
    duration: {
      type: RAW_NUMERIC,
      value: 500,
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
      visible: FALSE,
      legacy: !supportTransform,
    }
  },

  watchers: {
    visible(visible, oldVisible) {

      const me = this
      const element = me.$el

      if (visible) {

        // 设置为 display block
        Yox.dom.addClass(element, CLASS_VISIBLE)

        setTimeout(
          function () {
            Yox.dom.addClass(element, CLASS_FADE)
          },
          50
        )

      }
      else if (oldVisible) {

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

    const me = this

    let container: Document | HTMLElement = DOCUMENT
    let containerElement = DOCUMENT.documentElement

    const target = me.get('target')
    if (target) {
      containerElement = Yox.dom.find(target) as HTMLElement
      if (!containerElement) {
        Yox.logger.fatal(`target is not existed: ${target}`)
        return
      }
      container = containerElement
    }

    const height = toNumber(me.get('height'))
    const onRefresh = function () {
      me.set({
        visible: containerElement.scrollTop >= height
      })
    }

    const duration = toNumber(this.get('duration'))
    me.on('click', function () {
      scrollTo(
        containerElement,
        containerElement.scrollTop,
        0,
        duration
      )
    })

    Yox.dom.on(container, RAW_EVENT_SCROLL, onRefresh)
    Yox.dom.on(WINDOW, RAW_EVENT_RESIZE, onRefresh)

    const destroy = function (component) {
      if (component === me) {
        Yox.dom.off(container, RAW_EVENT_SCROLL, onRefresh)
        Yox.dom.off(WINDOW, RAW_EVENT_RESIZE, onRefresh)
        Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy)
      }
    }
    Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy)

  }

})
