import template from './template/Dropdown.html'
import { 
  TRUE,
  FALSE,
  RAW_STRING, 
  RAW_BOOLEAN,
  RAW_HOVER,
  RAW_CLICK,
  RAW_CUSTOM,

  RAW_TOP, 
  RAW_TOP_START,
  RAW_TOP_END,
  RAW_BOTTOM,
  RAW_BOTTOM_START,
  RAW_BOTTOM_END,
  RAW_LEFT,
  RAW_LEFT_START,
  RAW_LEFT_END,
  RAW_RIGHT,
  RAW_RIGHT_START,
  RAW_RIGHT_END
} from '../constant'
import { 
  oneOf
} from '../util'

export default {
  propTypes: {
    placement: {
      type: oneOf([
        RAW_TOP, 
        RAW_TOP_START,
        RAW_TOP_END,
        RAW_BOTTOM,
        RAW_BOTTOM_START,
        RAW_BOTTOM_END,
        RAW_LEFT,
        RAW_LEFT_START,
        RAW_LEFT_END,
        RAW_RIGHT,
        RAW_RIGHT_START,
        RAW_RIGHT_END
      ]),
      value: RAW_BOTTOM
    },
    trigger: {
      type: oneOf([RAW_HOVER, RAW_CLICK, RAW_CUSTOM]),
      value: RAW_HOVER
    },
    visible: {
      type: function () {
        return function (props, key) {
          if (props[ 'trigger' ] !== RAW_CUSTOM) {
            Yox.logger.warn(`${key} 期望在 trigger 取值为 custom 时传值`)
          }
          return true
        }
      }
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
    visible (isOpen) {
      this.set({ isOpen })
    }
  },

  data () {
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
}