import Yox from 'yox'

import template from './template/Link.hbs'
// import './style/Link.styl'

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

  name: '${prefix}Link',

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
      value: RAW_TYPE_PRIMARY,
    },
    size: {
      type: oneOf([RAW_SMALL]),
    },
    underline: {
      type: RAW_BOOLEAN,
    },
    disabled: {
      type: RAW_BOOLEAN,
    },
    href: {
      type: RAW_STRING,
    },
    target: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  }
})
