import Yox from 'yox'

import template from './template/Message.hbs'
// import './style/Message.styl'

import Icon from '../icon/Icon'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
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

const CLASS_VISIBLE = '${prefix}message-visible'

export default Yox.define({

  template,

  name: '${prefix}Message',

  propTypes: {
    status: {
      type: oneOf(RAW_STATUS_ARRAY),
      value: RAW_TYPE_INFO,
    },
    content: {
      type: RAW_STRING,
      required: TRUE,
    },
    closable: {
      type: RAW_BOOLEAN,
    },
    duration: {
      type: RAW_NUMERIC,
      value: 2000,
    },
    top: {
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
      isVisible: FALSE,
    }
  },

  methods: {

    show() {

      const me = this
      if (me.get('isVisible')) {
        return
      }

      const top = this.get('top')

      const element = me.$el
      Yox.dom.addClass(element, CLASS_VISIBLE)
      element.style.top = toPixel(top)

      me.set({
        isVisible: TRUE,
      })

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
      if (!me.get('isVisible')) {
        return
      }

      const element = me.$el
      Yox.dom.removeClass(element, CLASS_VISIBLE)
      element.style.top = '0px'

      me.set({
        isVisible: FALSE,
      })

      onTransitionEnd(
        element,
        function () {
          if (me.$el) {
            me.fire({
              type: 'hide',
              ns: 'message',
            })
          }
        }
      )
    }
  },

  components: {
    Icon,
  },

})