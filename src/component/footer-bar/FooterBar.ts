import Yox from 'yox'

import template from './template/FooterBar.hbs'
// import './style/FooterBar.styl'

import {
  RAW_STRING,
  RAW_STYLE_TYPE,
} from '../constant'

import { oneOf } from '../util'

export default Yox.define({

  template,

  name: '${prefix}FooterBar',

  propTypes: {
    align: {
      type: oneOf(['start', 'end', 'center']),
      value: 'center',
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

})