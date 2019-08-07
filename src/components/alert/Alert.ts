import Yox from 'yox'

import template from './template/Alert.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_TYPE_ARRAY,
  RAW_TYPE_PRIMARY,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_WARNING,
  RAW_TYPE_ERROR,
  RAW_FUNCTION,
} from '../constant'

import {
  oneOf,
  onTransitionEnd,
} from '../util'

export default Yox.define({

  template,

  propTypes: {
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_TYPE_PRIMARY,
    },
    closable: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    icon: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    center: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    onClose: {
      type: RAW_FUNCTION,
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
      RAW_TYPE_PRIMARY,
      RAW_TYPE_INFO,
      RAW_TYPE_SUCCESS,
      RAW_TYPE_WARNING,
      RAW_TYPE_ERROR,
    }
  },

  methods: {
    close() {

      const me = this

      // 外部自定义关闭逻辑
      const onClose = me.get('onClose')
      if (onClose) {
        onClose()
        return
      }

      me.fire('close.alert')

      Yox.dom.addClass(me.$el, '${prefix}alert-hidden')

      onTransitionEnd(
        me.$el,
        function () {
          const element = me.$el
          if (!element) {
            return
          }
          me.destroy()
        }
      )

    }
  }
})
