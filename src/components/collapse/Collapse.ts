import Yox from 'yox'

import template from './template/Collapse.hbs'

import {
  TRUE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
} from '../constant'

export default Yox.define({

  name: '${prefix}collapse',

  propTypes: {
    activeName: {
      type: RAW_NUMERIC
    },
    accordion: {
      type: RAW_BOOLEAN
    },
    bordered: {
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

  template,

  watchers: {
    accordion(accordion) {
      this.fire(
        'change.accordion',
        { accordion },
        TRUE
      )
    }
  },

  events: {
    'change.opened': function (event, data) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        this.fire(
          'change.opened',
          data,
          TRUE
        )
      }
    }
  }

})
