import Yox, { CustomEventInterface } from 'yox'

import template from './template/Dropdown.hbs'
// import './style/Dropdown.styl'

import Popover from '../popover/Popover'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_HOVER,
  RAW_CLICK,
  RAW_CUSTOM,
  RAW_PLACEMENT_ARRAY,
  RAW_BOTTOM,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Dropdown',

  propTypes: {
    placement: {
      type: oneOf(RAW_PLACEMENT_ARRAY),
      value: RAW_BOTTOM,
    },
    trigger: {
      type: oneOf([RAW_HOVER, RAW_CLICK, RAW_CUSTOM]),
      value: RAW_HOVER,
    },
    visible: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    maxHeight: {
      type: RAW_NUMERIC,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  events: {
    click: {
      listener(event) {
        event.stop()
        this.fire({
          type: 'close',
          ns: 'dropdown',
        })
      },
      ns: 'dropdownItem',
    },
    open: {
      listener(event) {
        event.stop()
        this.fire({
          type: 'open',
          ns: 'dropdown',
        })
      },
      ns: 'popover',
    },
    close: {
      listener(event) {
        event.stop()
        this.fire({
          type: 'close',
          ns: 'dropdown',
        })
      },
      ns: 'popover',
    },
    outside: {
      listener(event) {
        event.stop()
        this.fire({
          type: 'outside',
          ns: 'dropdown',
        })
      },
      ns: 'popover',
    }
  },

  methods: {
    refresh() {
      const popover = this.$refs.popover as any
      popover.refreshOverlayRect()
    },
  },

  components: {
    Popover,
  }
})