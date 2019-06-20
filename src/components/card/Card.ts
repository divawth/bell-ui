import template from './template/Card.html'

import {
  TRUE,
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

export default {

  propTypes: {
    bordered: {
      type: RAW_BOOLEAN,
      value: TRUE
    },
    hoverDisabled: {
      type: RAW_BOOLEAN,
      value: TRUE
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template
}