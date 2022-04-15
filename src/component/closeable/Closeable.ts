import Yox from 'yox'

import template from './template/Closeable.hbs'
// import './style/Closeable.styl'

import {
  RAW_BOOLEAN,
  RAW_STRING,
  RAW_STYLE_TYPE,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}Closeable',

  propTypes: {
    showClose: {
      type: RAW_BOOLEAN,
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

})
