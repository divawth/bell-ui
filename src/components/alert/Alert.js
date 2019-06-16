import template from './template/Alert.html'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_TYPE_ARRAY,
  RAW_TYPE_PRIMARY
} from '../constant'

import {
  oneOf,
  onTransitionEnd,
} from '../util'

export default {

  propTypes: {
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_TYPE_PRIMARY
    },
    closable: {
      type: RAW_BOOLEAN
    },
    showIcon: {
      type: RAW_BOOLEAN
    },
    center: {
      type: RAW_BOOLEAN
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template,

  methods: {
    close() {
      const me = this
      Yox.dom.addClass(me.$el, '${prefix}hide')
      onTransitionEnd(
        me.$el,
        function () {
          me.$el && me.$el.remove()
          me.fire('close.alert')
        }
      )
    }
  }
}