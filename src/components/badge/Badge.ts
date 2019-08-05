import Yox from 'yox'

import template from './template/Badge.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMBER,
  RAW_TYPE_ARRAY,
  RAW_TYPE_ERROR,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  propTypes: {
    text: {
      type: RAW_STRING,
    },
    count: {
      type: RAW_NUMBER,
    },
    max: {
      type: RAW_NUMBER,
      value: 999,
    },
    dot: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    hidden: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    ripple: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_TYPE_ERROR,
    },
    status: {
      type: oneOf(RAW_TYPE_ARRAY),
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  filters: {
    isNumber: Yox.is.numeric,
    formatText(count: any, max: any) {
      count = Yox.is.numeric(count) ? +count : 0
      max = Yox.is.numeric(max) ? +max : 1
      return max < count
        ? max + '+'
        : count
    }
  },

})
