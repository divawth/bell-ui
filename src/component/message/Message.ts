import Yox from 'yox'

import template from './template/Message.hbs'
// import './style/Message.styl'

import Icon from '../icon/Icon'

import {
  TRUE,
  RAW_STRING,
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
    center: {
      type: RAW_BOOLEAN,
    }
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

    show(top: number, duration: number) {

      const me = this

      const element = me.$el
      Yox.dom.addClass(element, CLASS_VISIBLE)
      element.style.top = toPixel(top)

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

      const element = me.$el
      Yox.dom.removeClass(element, CLASS_VISIBLE)
      element.style.top = '0px'

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