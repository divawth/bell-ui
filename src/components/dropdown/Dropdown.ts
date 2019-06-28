import Yox from 'yox'

import template from './template/Dropdown.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_HOVER,
  RAW_CLICK,
  RAW_CUSTOM,
  RAW_PLACEMENT_ARRAY,
  RAW_BOTTOM,
  RAW_NUMERIC,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({
  propTypes: {
    placement: {
      type: oneOf(RAW_PLACEMENT_ARRAY),
      value: RAW_BOTTOM
    },
    trigger: {
      type: oneOf([RAW_HOVER, RAW_CLICK, RAW_CUSTOM]),
      value: RAW_HOVER
    },
    visible: {
      type(props, key) {
        if (props[ 'trigger' ] !== RAW_CUSTOM) {
          Yox.logger.warn(`${key} 期望在 trigger 取值为 custom 时传值`)
        }
        return true
      }
    },
    height: {
      type: RAW_NUMERIC,
      value: 200
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
    visible(isOpen) {
      this.set({ isOpen })
    }
  },

  data() {
    return {
      isOpen: FALSE,
      FALSE,
      TRUE,
      RAW_HOVER,
      RAW_CLICK,
      RAW_CUSTOM
    }
  },

  events: {
    'click.dropdownItem': function () {
      this.set({
        isOpen: FALSE
      })
    }
  }
})