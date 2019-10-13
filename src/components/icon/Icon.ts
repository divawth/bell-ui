import Yox from 'yox'

import template from './template/Icon.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
} from '../constant'

export default Yox.define({
  template,
  propTypes: {
    name: {
      type: RAW_STRING,
    },
    size: {
      type: RAW_NUMERIC,
      value: 14,
    },
    color: {
      type: RAW_STRING,
    },
    spin: {
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