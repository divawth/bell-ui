import Yox from 'yox'

import template from './template/Card.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

export default Yox.define({
  template,
  propTypes: {
    simple: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    hoverable: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },
})