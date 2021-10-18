import Yox from 'yox'

import template from './template/Layout.hbs'
// import './style/Layout.styl'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_STYLE_TYPE,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}Layout',

  propTypes: {
    vertical: {
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
