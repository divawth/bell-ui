import Yox from 'yox'

import template from './template/Alert.hbs'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_TYPE_ARRAY,
  RAW_TYPE_PRIMARY,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_WARNING,
  RAW_TYPE_ERROR,
  RAW_FUNCTION
} from '../constant'

import {
  oneOf,
  onTransitionEnd,
} from '../util'

export default Yox.define({

  propTypes: {
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_TYPE_PRIMARY,
    },
    closable: {
      type: RAW_BOOLEAN,
    },
    showIcon: {
      type: RAW_BOOLEAN,
    },
    center: {
      type: RAW_BOOLEAN,
    },
    close: {
      type: RAW_FUNCTION,
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
      const close = me.get('close')
      if (close) {
        close()
        return
      }

      Yox.dom.addClass(me.$el, '${prefix}hide')

      onTransitionEnd(
        me.$el,
        function () {
          if (me.$el) {
            me.$el.remove()
            me.fire('close.alert')
          }
        }
      )

    }
  }
})
