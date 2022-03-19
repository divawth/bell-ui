import Yox from 'yox'

import template from './template/Notification.hbs'
// import './style/Notification.styl'

import Icon from '../icon/Icon'

import {
  RAW_STRING,
  RAW_NUMERIC,
  RAW_STATUS_ARRAY,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_WARNING,
  RAW_TYPE_ERROR,
} from '../constant'

import {
  oneOf,
  toPixel,
  toNumber,
  onTransitionEnd,
} from '../util'

const CLASS_VISIBLE = '${prefix}notification-visible'

export default Yox.define({

  template,

  name: '${prefix}Notification',

  propTypes: {
    title: {
      type: RAW_STRING,
    },
    content: {
      type: RAW_STRING,
    },
    status: {
      type: oneOf(RAW_STATUS_ARRAY),
    },
    duration: {
      type: RAW_NUMERIC,
      value: 4500,
    },
    width: {
      type: RAW_NUMERIC,
      value: 320,
    },
    right: {
      type: RAW_NUMERIC,
      value: 15,
    },
  },

  data() {
    return {
      RAW_TYPE_INFO,
      RAW_TYPE_SUCCESS,
      RAW_TYPE_WARNING,
      RAW_TYPE_ERROR,
    }
  },

  computed: {
    inlineStyle(): Record<string, string> {
      const customStyle: Record<string, string> = {}

      const width = this.get('width')
      const right = this.get('right')

      customStyle.width = toPixel(width)
      customStyle.right = toPixel(right)

      return customStyle
    },
  },

  methods: {

    show() {

      const me = this

      Yox.dom.addClass(me.$el, CLASS_VISIBLE)

      const duration = toNumber(me.get('duration'))

      if (duration > 0) {
        setTimeout(
          function () {
            if (me.$el) {
              me.hide()
            }
          },
          duration
        )
      }

    },

    hide() {

      const me = this

      Yox.dom.removeClass(me.$el, CLASS_VISIBLE)

      me.nextTick(function () {
        if (!me.$el) {
          return
        }
        onTransitionEnd(
          me.$el,
          function () {
            if (me.$el) {
              me.fire({
                type: 'hide',
                ns: 'notification',
              })
            }
          }
        )
      })
    }
  },

  components: {
    Icon,
  }

})