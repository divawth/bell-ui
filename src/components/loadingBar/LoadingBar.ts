import Yox from 'yox'

import template from './template/LoadingBar.hbs'

import {
  NULL,
  UNDEFINED,
  RAW_STRING,
  RAW_NUMBER,
  RAW_TYPE_ARRAY,
  RAW_TYPE_PRIMARY,
} from '../constant'

import {
  oneOf,
} from '../util'

let timer = NULL

export default Yox.define({

  template,

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
    const me = this
    const next = function () {
      timer = setTimeout(
        function () {
          if (!timer) {
            return
          }
          me.increase('percent', Math.floor(Math.random() * 10), 98)
          if (me.get('percent') < 98) {
            next()
          }
        },
        300
      )
    }
    next()
  },

  beforeDestroy() {
    if (timer) {
      clearTimeout(timer)
      timer = UNDEFINED
    }
  }
})