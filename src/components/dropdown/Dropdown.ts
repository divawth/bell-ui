import Yox, { CustomEventInterface } from 'yox'

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
  RAW_NUMBER,
  DOCUMENT,
} from '../constant'

import {
  oneOf,
  contains,
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
      type: RAW_NUMBER,
      value: 280
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
    visible(isOpen: boolean) {
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
  },

  afterMount() {
    const me = this
    if (me.get('trigger') === RAW_CLICK) {
      const dropdownClick = function (event: CustomEventInterface) {
        let element = me.$el
        let target = event.originalEvent.target as HTMLElement
        if (contains(element, target)) {
          return
        }
        me.set({
          isOpen: FALSE
        })
      }
      Yox.dom.on(
        DOCUMENT,
        'click',
        dropdownClick
      )
      me.on(
        'beforeDestroy.hook',
        function (event) {
          Yox.dom.off(
            DOCUMENT,
            'click',
            dropdownClick
          )
        }
      )
    }
  }
})