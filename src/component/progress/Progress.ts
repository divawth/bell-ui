import Yox from 'yox'

import template from './template/Progress.hbs'
// import './style/Progress.styl'

import ProgressTrack from './ProgressTrack'

import {
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_STATUS_ARRAY,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Progress',

  propTypes: {
    percent: {
      type: RAW_NUMERIC,
      value: 0,
    },
    status: {
      type: oneOf(RAW_STATUS_ARRAY),
    },
    thickness: {
      type: RAW_STRING,
      value: 8,
    },
    inside: {
      type: RAW_BOOLEAN,
    },
    vertical: {
      type: RAW_BOOLEAN,
    },
    active: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  components: {
    ProgressTrack,
  }
})
