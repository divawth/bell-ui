import Yox from 'yox'

import template from './template/ButtonGroup.hbs'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_LARGE,
  RAW_SMALL,
  RAW_TINY,
  RAW_SHAPE_CIRCLE,
  RAW_SHAPE_ROUND,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({
  propTypes: {
    size: {
      type: oneOf([RAW_LARGE, RAW_SMALL, RAW_TINY]),
    },
    shape: {
      type: oneOf([RAW_SHAPE_ROUND, RAW_SHAPE_CIRCLE]),
    },
    vertical: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },
  template,
})