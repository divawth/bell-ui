import Yox, { CustomEventInterface } from 'yox'

import template from './template/Tooltip.hbs'
// import './style/Tooltip.styl'

import Popover from '../popover/Popover'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_NUMBER,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_HOVER,
  RAW_CLICK,
  RAW_CUSTOM,
  RAW_PLACEMENT_ARRAY,
  RAW_BOTTOM,
  RAW_THEME_ARRAY,
  RAW_DARK,
  HOVER_DELAY,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Tooltip',

  propTypes: {
    content: {
      type: [RAW_STRING, RAW_NUMBER],
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
      type: oneOf([RAW_HOVER, RAW_CLICK, RAW_CUSTOM]),
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
      type: RAW_STYLE_TYPE,
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
        this.open()
      },
      ns: 'popover',
    },
    close: {
      listener(event) {
        event.stop()
        this.close()
      },
      ns: 'popover',
    },
    outside: {
      listener(event) {
        event.stop()
        this.fire({
          type: 'outside',
          ns: 'tooltip',
        })
      },
      ns: 'popover',
    }
  },

  methods: {
    open() {
      this.set('isVisible', TRUE)
    },
    close() {
      this.set('isVisible', FALSE)
    },
    refresh() {
      const popover = this.$refs.popover as any
      popover.refreshOverlayRect()
    },
  },

  components: {
    Popover,
  },
})
