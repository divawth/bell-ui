import template from './template/ButtonGroup.html'

import {
  oneOf,
} from '../util'

import {
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

export default {
  propTypes: {
    size: {
      type: oneOf(['large', 'small', 'tiny'])
    },
    shape: {
      type: oneOf(['round', 'circle'])
    },
    vertical: {
      type: RAW_BOOLEAN
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },
  template,
}