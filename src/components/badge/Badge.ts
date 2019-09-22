import Yox from 'yox'

import template from './template/Badge.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_TYPE_ARRAY,
  RAW_TYPE_ERROR,
  RAW_STATUS_ARRAY,
  RAW_NUMERIC,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  propTypes: {
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_TYPE_ERROR,
    },
    status: {
      type: oneOf(RAW_STATUS_ARRAY),
    },
    text: {
      type: RAW_STRING,
    },
    count: {
      type: RAW_NUMERIC,
    },
    max: {
      type: RAW_NUMERIC,
      value: 99,
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
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  filters: {
    isNumeric: Yox.is.numeric,
    formatText(count: any, max: any) {
      count = Yox.is.numeric(count) ? +count : 0
      max = Yox.is.numeric(max) ? +max : 1
      return max < count
        ? max + '+'
        : count
    }
  },

})
