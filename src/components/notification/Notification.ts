import Yox from 'yox'

import template from './template/Notification.hbs'

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
  onTransitionEnd,
  toNumber,
} from '../util'

const CLASS_VISIBLE = '${prefix}notification-visible'

export default Yox.define({

  template,

  propTypes: {
    title: {
      type: RAW_STRING,
      value: '温馨提示',
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
              me.fire('hide.notification')
            }
          }
        )
      })
    }
  }

})