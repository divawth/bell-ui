import Yox from 'yox'

import template from './template/Divider.hbs'
// import './style/Divider.styl'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_LEFT,
  RAW_RIGHT,
  RAW_CENTER,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Divider',

  propTypes: {
    vertical: {
      type: RAW_BOOLEAN,
    },
    dashed: {
      type: RAW_BOOLEAN,
    },
    align: {
      type: oneOf([RAW_CENTER, RAW_LEFT, RAW_RIGHT]),
      value: RAW_CENTER,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },
})
