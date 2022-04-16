import Yox from 'yox'

import template from './template/ColorPicker.hbs'
// import './style/ColorPicker.styl'

import Popover from '../popover/Popover'
import ColorPanel from './ColorPanel'

import {
  FALSE,
  RAW_ARRAY,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_DEFAULT,
  RAW_CUSTOM,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_ERROR,
  RAW_TYPE_WARNING,
  RAW_SIZE_ARRAY,
  RAW_PLACEMENT_ARRAY,
  RAW_BOTTOM_START,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  hsv2rgb,
  formatRgb,
  parseColor,
  MODE_HEX,
  COLOR_DEFAULT,
} from './util'

import {
  oneOf,
  toPixel,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}ColorPicker',

  propTypes: {
    status: {
      type: oneOf([RAW_TYPE_INFO, RAW_TYPE_SUCCESS, RAW_TYPE_ERROR, RAW_TYPE_WARNING]),
    },
    size: {
      type: oneOf(RAW_SIZE_ARRAY),
      value: RAW_DEFAULT,
    },
    disabled: {
      type: RAW_BOOLEAN,
    },
    block: {
      type: RAW_BOOLEAN,
    },
    placement: {
      type: oneOf(RAW_PLACEMENT_ARRAY),
      value: RAW_BOTTOM_START,
    },
    defaultValue: {
      type: RAW_STRING,
    },
    value: {
      type: RAW_STRING,
    },
    modes: {
      type: RAW_ARRAY,
    },
    swatches: {
      type: RAW_ARRAY,
    },
    showAlpha: {
      type: RAW_BOOLEAN,
    },
    width: {
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
    const modes = this.get('modes')
    const mode = modes && modes[0] || MODE_HEX

    let value = this.get('value')
    if (!value) {
      value = this.get('defaultValue') || COLOR_DEFAULT
    }

    const { rgb, hsv, alpha } = parseColor(value, this.get('showAlpha'))

    return {
      RAW_CUSTOM: RAW_CUSTOM,
      visible: FALSE,
      mode,
      rgb,
      hsv,
      alpha,
    }
  },

  computed: {
    inlineStyle(): object[] | void {
      const result: object[] = []

      const width = this.get('width')
      if (width) {
        result.push({
          width: toPixel(width)
        })
      }

      const style = this.get('style')
      if (style) {
        result.push(style)
      }

      if (result.length > 0) {
        return result
      }
    },
    colorStyle() {
      const rgb = this.get('rgb')
      if (rgb) {
        const alpha = this.get('alpha')
        return {
          backgroundColor: formatRgb(rgb, alpha),
        }
      }
    },
  },

  watchers: {
    value(value: string) {
      // @ts-ignore
      this.setColor(value)
    }
  },

  events: {
    outside: {
      listener(event) {
        event.stop()
        this.set({
          visible: FALSE,
        })
      },
      ns: 'popover',
    },
    hsvChange: {
      listener(event, data) {
        event.stop()
        const { hsv } = data
        this.set({
          hsv,
          rgb: hsv2rgb(hsv[0], hsv[1], hsv[2])
        })
      },
      ns: 'colorPanel'
    },
    colorChange(event, data) {

      if (event.phase !== Yox.Event.PHASE_UPWARD) {
        return
      }

      event.stop()
      // @ts-ignore
      this.setColor(data.color)

    },
    alphaChange: {
      listener(event, data) {
        event.stop()
        this.set(data)
      },
      ns: 'colorPanel'
    },
    modeChange: {
      listener(event) {
        event.stop()

        const modes = this.get('modes')
        if (!modes) {
          return
        }

        const mode = this.get('mode')
        const index = modes.indexOf(mode)
        let newIndex = index + 1
        if (newIndex >= modes.length) {
          newIndex = 0
        }

        this.set({
          mode: modes[newIndex]
        })

      },
      ns: 'colorPanel'
    }
  },

  methods: {
    setColor(value: string) {
      const { rgb, hsv, alpha } = parseColor(value, this.get('showAlpha'))
      this.set({
        rgb,
        hsv,
        alpha,
      })
    }
  },

  components: {
    Popover,
    ColorPanel,
  }

})
