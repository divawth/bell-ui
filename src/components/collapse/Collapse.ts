import Yox from 'yox'

import template from './template/Collapse.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
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
        'accordion.collapse',
        { accordion },
        TRUE
      )
    }
  },

  events: {
    'open.panel': function (event, data) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        event.stop()
        this.fire(
          'open.collapse',
          data,
          TRUE
        )
      }
    }
  }

})
