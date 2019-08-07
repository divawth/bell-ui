import Yox from 'yox'

import template from './template/Menu.hbs'

import {
  TRUE,
  FALSE,

  RAW_ARRAY,
  RAW_STRING,
  RAW_BOOLEAN,

  RAW_HORIZONTAL,
  RAW_VERTICAL,
  RAW_INLINE,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}menu',

  propTypes: {
    mode: {
      type: oneOf([RAW_HORIZONTAL, RAW_VERTICAL, RAW_INLINE]),
      value: RAW_HORIZONTAL,
    },
    theme: {
      type: oneOf(['dark', 'light']),
      value: 'dark',
    },
    collapsed: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    activeName: {
      type: RAW_STRING,
    },
    openNames: {
      type: RAW_ARRAY,
      value() {
        return []
      }
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  watchers: {
    collapsed(collapsed: boolean) {
      this.fire(
        'collapsedChanged',
        { collapsed },
        TRUE
      )
    }
  },

  events: {
    menuItemSelected(event, data) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        this.fire(
          'menuItemSelected',
          data,
          TRUE
        )
      }
    }
  }
})