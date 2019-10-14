import Yox from 'yox'

import template from './template/Text.hbs'

import {
  RAW_STRING,
  RAW_TYPE_ARRAY,
  RAW_SIZE_ARRAY,
  RAW_DEFAULT,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}text',

  propTypes: {
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
    },
    size: {
      type: oneOf(RAW_SIZE_ARRAY),
      value: RAW_DEFAULT,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  }
})
