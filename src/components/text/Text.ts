import Yox from 'yox'

import template from './template/Text.hbs'

import {
  RAW_STRING,
  RAW_DEFAULT,
  RAW_SIZE_ARRAY,
  RAW_TYPE_PRIMARY,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_WARNING,
  RAW_TYPE_ERROR,
  RAW_TYPE_CONTENT,
  RAW_TYPE_TITLE,
  RAW_TYPE_MUTED,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}text',

  propTypes: {
    type: {
      type: oneOf([
        RAW_TYPE_PRIMARY,
        RAW_TYPE_INFO,
        RAW_TYPE_SUCCESS,
        RAW_TYPE_WARNING,
        RAW_TYPE_ERROR,
        RAW_TYPE_TITLE,
        RAW_TYPE_CONTENT,
        RAW_TYPE_MUTED,
      ]),
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
