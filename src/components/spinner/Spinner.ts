import Yox from 'yox'

import template from './template/Spinner.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_SIZE_COMMON,
  RAW_DEFAULT,
  RAW_TYPE_ARRAY,
  RAW_TYPE_PRIMARY,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({
  template,
  propTypes: {
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_TYPE_PRIMARY,
    },
    size: {
      type: oneOf(RAW_SIZE_COMMON),
      value: RAW_DEFAULT,
    },
    fixed: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    text: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    },
  },
})