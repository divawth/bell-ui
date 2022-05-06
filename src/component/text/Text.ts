import Yox from 'yox'

import template from './template/Text.hbs'
// import './style/Text.styl'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_SMALL,
  RAW_TYPE_PRIMARY,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_WARNING,
  RAW_TYPE_ERROR,
  RAW_TYPE_CONTENT,
  RAW_TYPE_TITLE,
  RAW_TYPE_MUTED,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Text',

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
      type: oneOf([RAW_SMALL]),
    },
    bold: {
      type: RAW_BOOLEAN,
    },
    block: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  }
})
