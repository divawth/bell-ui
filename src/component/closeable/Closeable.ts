import Yox from 'yox'

import template from './template/Closeable.hbs'
// import './style/Closeable.styl'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_ALWAYS,
  RAW_HOVER,
  RAW_STYLE_TYPE,
} from '../constant'

import { oneOf } from '../util'

export default Yox.define({

  template,

  name: '${prefix}Closeable',

  propTypes: {
    needClose: {
      type: RAW_BOOLEAN,
    },
    showClose: {
      type: oneOf([RAW_ALWAYS, RAW_HOVER]),
    },
    draggable: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  data() {
    return {
      RAW_ALWAYS,
      RAW_HOVER,
    }
  }

})
