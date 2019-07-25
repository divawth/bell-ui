import Yox from 'yox'

import template from './template/ButtonGroup.hbs'

import {
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({
  propTypes: {
    size: {
      type: oneOf(['large', 'small', 'tiny']),
    },
    shape: {
      type: oneOf(['round', 'circle']),
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