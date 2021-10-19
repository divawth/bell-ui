import Yox from 'yox'

import template from './template/Empty.hbs'
// import './style/Empty.styl'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_STYLE_TYPE,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}Empty',

  propTypes: {
    simple: {
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