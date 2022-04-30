import Yox from 'yox'

import template from './template/Guide.hbs'
// import './style/Guide.styl'

import {
  RAW_STRING,
  RAW_STYLE_TYPE,
} from '../constant'

import { oneOf } from '../util'

export default Yox.define({

  template,

  name: '${prefix}Guide',

  propTypes: {
    title: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

})