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
  oneOf, toPixel,
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
    defaultVisible: {
      type: RAW_BOOLEAN,
    },
    visible: {
      type: RAW_BOOLEAN,
    },
    disabled: {
      type: RAW_BOOLEAN,
    },
    delay: {
      type: RAW_NUMERIC,
      value: HOVER_DELAY,
    },
    trigger: {
      type: oneOf([RAW_HOVER, RAW_CLICK]),
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
    const visible = this.get('visible')
    const defaultVisible = this.get('defaultVisible')
    return {
      isVisible: typeof visible === 'boolean'
        ? visible
        : typeof defaultVisible === 'boolean'
          ? defaultVisible
          : FALSE,
    }
  },

  computed: {
    mode() {
      const visible = this.get('visible')
      return typeof visible === 'boolean'
        ? RAW_CUSTOM
        : this.get('trigger')
    },
    contentStyle(): Record<string, string> | void {

      const maxWidth = this.get('maxWidth')
      const maxHeight = this.get('maxHeight')

      if (maxWidth || maxHeight) {
        const result: Record<string, string> = {}
        if (maxWidth) {
          result.maxWidth = toPixel(maxWidth)
        }
        if (maxHeight) {
          result.maxHeight = toPixel(maxHeight)
        }
        return result
      }

    },
  },

  watchers: {
    visible(value) {
      this.set({
        isVisible: value,
      })
    }
  },

  methods: {
    onPopoverOpen(event: CustomEventInterface) {
      event.stop()
      this.set('isVisible', TRUE)
      // @ts-ignore
      this.fireChange(TRUE)
    },
    onPopoverClose(event: CustomEventInterface) {
      event.stop()
      this.set('isVisible', FALSE)
      // @ts-ignore
      this.fireChange(FALSE)
    },
    onPopoverOutside(event: CustomEventInterface) {
      event.stop()
      this.fire({
        type: 'outside',
        ns: 'tooltip',
      })
    },
    fireChange(visible: boolean) {
      if (this.get('visible') !== visible) {
        this.fire(
          {
            type: 'change',
            ns: 'tooltip',
          },
          {
            visible,
          }
        )
      }
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
