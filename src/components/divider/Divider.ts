import Yox from 'yox'

import template from './template/Divider.hbs'

import {
  FALSE,

  RAW_STRING,
  RAW_BOOLEAN,

  RAW_LEFT,
  RAW_RIGHT,
  RAW_CENTER,

  RAW_VERTICAL,
  RAW_HORIZONTAL,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({
  template,
  propTypes: {
    type: {
      type: oneOf([RAW_HORIZONTAL, RAW_VERTICAL]),
      value: RAW_HORIZONTAL,
    },
    dashed: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    align: {
      type: oneOf([RAW_CENTER, RAW_LEFT, RAW_RIGHT]),
      value: RAW_CENTER,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },
})
