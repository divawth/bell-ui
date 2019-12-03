import Yox from 'yox'

import template from './template/Layout.hbs'
// import './style/Layout.styl'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}layout',

  propTypes: {
    vertical: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  }

})
