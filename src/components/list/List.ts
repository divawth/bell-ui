import Yox from 'yox'

import template from './template/List.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_SIZE_COMMON,
  RAW_DEFAULT,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}list',

  propTypes: {
    simple: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    loading: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    clickable: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    size: {
      type: oneOf(RAW_SIZE_COMMON),
      value: RAW_DEFAULT,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },
})
