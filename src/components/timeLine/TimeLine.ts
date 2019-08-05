import Yox from 'yox'

import template from './template/TimeLine.hbs'

import {
  FALSE,
  RAW_BOOLEAN,
} from '../constant'

export default Yox.define({
  template,
  propTypes: {
    pending: {
      type: RAW_BOOLEAN,
      value: FALSE,
    }
  },
})
