import Yox from 'yox'

import template from './template/TimeLine.hbs'

import { RAW_BOOLEAN } from '../constant'

export default Yox.define({
  propTypes: {
    pending: {
      type: RAW_BOOLEAN,
    }
  },
  template,
})
