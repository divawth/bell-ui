import Yox from 'yox'

import template from './template/Breadcrumb.hbs'
// import './style/Breadcrumb.styl'

import {
  RAW_STRING,
  RAW_STYLE_TYPE,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}Breadcrumb',

  propTypes: {
    separator: {
      type: RAW_STRING,
      value: '/',
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

})