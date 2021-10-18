import Yox from 'yox'

import template from './template/ProgressTrack.hbs'

import {
  RAW_BOOLEAN,
  RAW_NUMERIC,
} from '../constant'

export default Yox.define({

  template,

  propTypes: {
    vertical: {
      type: RAW_BOOLEAN,
    },
    inside: {
      type: RAW_BOOLEAN,
    },
    thickness: {
      type: RAW_NUMERIC,
    },
    percent: {
      type: RAW_NUMERIC,
    },
  }

})