import Yox from 'yox'

import template from './template/Breadcrumb.hbs'
// import './style/Breadcrumb.styl'

import {
  RAW_STRING,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}breadcrumb',

  propTypes: {
    separator: {
      type: RAW_STRING,
      value: '/',
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

})