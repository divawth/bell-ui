import Yox from 'yox'

import template from './template/Progress.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_TYPE_ARRAY,
  RAW_TYPE_PRIMARY,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({
  template,
  propTypes: {
    percent: {
      type: RAW_NUMERIC,
      value: 0,
    },
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_TYPE_PRIMARY,
    },
    thickness: {
      type: RAW_STRING,
      value: 10,
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
