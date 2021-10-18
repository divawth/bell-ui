import Yox from 'yox'

import template from './template/Icon.hbs'
// import './style/Icon.styl'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_STYLE_TYPE,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}Icon',

  propTypes: {
    name: {
      type: RAW_STRING,
      required: TRUE,
    },
    size: {
      type: RAW_NUMERIC,
    },
    color: {
      type: RAW_STRING,
    },
    spin: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },
})