import template from './template/Alert.html'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_TYPE_ARRAY,
  RAW_TYPE_PRIMARY
} from '../constant'

import {
  oneOf
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
    closeText: {
      type: RAW_STRING
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
      let me = this
      Yox.dom.addClass(me.$el, 'bell-hide')
      setTimeout(
        function () {
          me.$el.remove()
        },
        500
      )
      me.fire('close')
    }
  }
}