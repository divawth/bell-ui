import template from './template/Badge.html'
import { RAW_STRING, RAW_BOOLEAN, RAW_NUMERIC } from '../constant'

export default {
  propTypes: {
    count: {
      type: RAW_NUMERIC
    },
    maxCount: {
      type: RAW_NUMERIC
    },
    dot: {
      type: RAW_BOOLEAN
    },
    hidden: {
      type: RAW_BOOLEAN
    },
    type: {
      type: RAW_STRING
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template,

  filters: {
    getText(count, maxCount) {
      maxCount = Yox.is.number(maxCount) ? +maxCount : 1
      let countStr = Yox.is.number(count) ? +count : 0

      return maxCount < countStr
        ? maxCount + '+'
        : count
    }
  }
}