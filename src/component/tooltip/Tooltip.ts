import Yox, { CustomEventInterface } from 'yox'

import template from './template/Tooltip.hbs'
// import './style/Tooltip.styl'

import Popover from '../popover/Popover'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_CLICK,
  RAW_HOVER,
  RAW_PLACEMENT_ARRAY,
  RAW_BOTTOM,
  RAW_THEME_ARRAY,
  RAW_DARK,
  HOVER_DELAY,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Tooltip',

  propTypes: {
    content: {
      type: RAW_STRING,
    },
    theme: {
      type: oneOf(RAW_THEME_ARRAY),
      value: RAW_DARK,
    },
    placement: {
      type: oneOf(RAW_PLACEMENT_ARRAY),
      value: RAW_BOTTOM,
    },
    disabled: {
      type: RAW_BOOLEAN,
    },
    delay: {
      type: RAW_NUMERIC,
      value: HOVER_DELAY,
    },
    mode: {
      type: oneOf([RAW_CLICK, RAW_HOVER]),
      value: RAW_HOVER,
    },
    maxWidth: {
      type: RAW_NUMERIC,
    },
    maxHeight: {
      type: RAW_NUMERIC,
    },
    offsetX: {
      type: RAW_NUMERIC,
    },
    offsetY: {
      type: RAW_NUMERIC,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data() {
    return {
      isVisible: FALSE,
    }
  },

  events: {
    open: {
      listener(event) {
        event.stop()
        this.set('isVisible', TRUE)
      },
      ns: 'popover',
    },
    close: {
      listener(event) {
        event.stop()
        this.set('isVisible', FALSE)
      },
      ns: 'popover',
    }
  },

  components: {
    Popover,
  },
})
