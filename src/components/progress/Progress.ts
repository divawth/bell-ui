import Yox from 'yox'

import template from './template/Progress.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_STATUS_ARRAY,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}progress',

  propTypes: {
    percent: {
      type: RAW_NUMERIC,
      value: 0,
    },
    status: {
      type: oneOf(RAW_STATUS_ARRAY),
    },
    thickness: {
      type: RAW_STRING,
      value: 8,
    },
    inside: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    vertical: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    active: {
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
})
