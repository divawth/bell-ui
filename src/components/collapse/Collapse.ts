import Yox from 'yox'

import template from './template/Collapse.hbs'

import {
  TRUE,
  RAW_STRING,
  RAW_BOOLEAN,
  FALSE,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}collapse',

  propTypes: {
    accordion: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    simple: {
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

  watchers: {
    accordion(accordion: boolean) {
      this.fire(
        'change.collapse',
        { accordion },
        TRUE
      )
    }
  },

  events: {
    'open.panel': function (event, data) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        this.fire(
          'open.collapse',
          data,
          TRUE
        )
      }
    }
  }

})
