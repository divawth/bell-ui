import Yox from 'yox'

import template from './template/Collapse.hbs'

import {
  TRUE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC
} from '../constant'

export default Yox.create({

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
        'accordionChanged',
        { accordion },
        TRUE
      )
    }
  },

  events: {
    panelOpen(event, data) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        this.fire(
          'panelOpen',
          {
            name: data.name,
            isOpen: data.isOpen
          },
          TRUE
        )
      }
    }
  }

})
