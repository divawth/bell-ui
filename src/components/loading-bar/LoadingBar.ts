import Yox from 'yox'

import template from './template/LoadingBar.hbs'

import {
  UNDEFINED,
  RAW_STRING,
  RAW_NUMBER,
  RAW_TYPE_ARRAY,
  RAW_TYPE_PRIMARY,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}loadingBar',

  propTypes: {
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_TYPE_PRIMARY,
    },
    height: {
      type: RAW_NUMBER,
      value: 2,
    },
    percent: {
      type: RAW_NUMBER,
      value: 0,
    },
    color: {
      type: RAW_STRING,
    }
  },

  afterMount() {
    const me = this as any
    const next = function () {
      me.timer = setTimeout(
        function () {
          if (!me.timer) {
            return
          }
          const value = me.increase('percent', Math.floor(Math.random() * 10), 98)
          if (value < 98) {
            next()
          }
        },
        300
      )
    }
    next()
  },

  beforeDestroy() {
    const me = this as any
    if (me.timer) {
      clearTimeout(me.timer)
      me.timer = UNDEFINED
    }
  }
})