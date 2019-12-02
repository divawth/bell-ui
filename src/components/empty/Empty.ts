import Yox from 'yox'

import template from './template/Empty.hbs'
// import './style/Empty.styl'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}empty',

  propTypes: {
    simple: {
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