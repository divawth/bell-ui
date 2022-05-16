import Yox from 'yox'

import template from './template/ColorPicker.hbs'
// import './style/ColorPicker.styl'

import Popover from '../popover/Popover'
import ColorPanel from './ColorPanel'

import {
  TRUE,
  FALSE,
  UNDEFINED,
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
  rgb2hex,
  hsv2rgb,
  stringifyRgb,
  parseColor,
  MODE_HEX,
  MODE_RGB,
  COLOR_DEFAULT,
} from './util'

import {
  oneOf,
  toPixel,
} from '../util'

import {
  fireClickEvent,
  onClickEventByEnterPress,
} from '../event'

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
      isFocus: FALSE,
      isVisible: FALSE,
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
          backgroundColor: stringifyRgb(rgb, alpha),
        }
      }
    },
    colorValue() {

      const showAlpha = this.get('showAlpha')
      let alpha = UNDEFINED
      if (showAlpha) {
        alpha = this.get('alpha')
      }

      const mode = this.get('mode')
      const rgb = this.get('rgb')
      if (mode === MODE_HEX) {
        return rgb2hex(rgb[0], rgb[1], rgb[2], alpha)
      }
      else if (mode === MODE_RGB) {
        return stringifyRgb(rgb, alpha)
      }

      return ''

    }
  },

  watchers: {
    value(value: string) {
      // @ts-ignore
      this.setColor(value)
    },
    showAlpha() {
      this.set({
        alpha: 1,
      })
      // @ts-ignore
      this.fireChange()
    }
  },

  events: {
    outside: {
      listener(event) {
        event.stop()
        this.set({
          isVisible: FALSE,
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
        // @ts-ignore
        this.fireChange()
      },
      ns: 'colorPanel'
    },
    colorChange(event, data) {

      if (event.phase !== Yox.Event.PHASE_UPWARD) {
        return
      }

      event.stop()
      // @ts-ignore
      if (this.setColor(data.color)) {
        // @ts-ignore
        this.fireChange()
      }

    },
    alphaChange: {
      listener(event, data) {
        event.stop()
        this.set(data)
        // @ts-ignore
        this.fireChange()
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
        // @ts-ignore
        this.fireChange()

      },
      ns: 'colorPanel'
    }
  },

  methods: {

    onClick() {
      this.toggle('isVisible')
      fireClickEvent()
    },

    setColor(value: string) {

      const { rgb, hsv, alpha } = parseColor(value, this.get('showAlpha'))
      const oldRgb = this.get('rgb')

      // hex 转 hsv，有时因为精度会导致值不一样
      // 这里用 rgb 判断一下，如果新旧值相同，则不再转 hsv
      if (rgb2hex(rgb[0], rgb[1], rgb[2]) === rgb2hex(oldRgb[0], oldRgb[1], oldRgb[2])) {
        return
      }

      this.set({
        rgb,
        hsv,
        alpha,
      })

      return TRUE

    },
    fireChange() {
      const value = this.get('colorValue')
      this.set('value', value)
      this.fire(
        {
          type: 'change',
          ns: 'colorPicker',
        },
        {
          value,
        }
      )
    }
  },

  afterMount() {
    onClickEventByEnterPress(this)
  },

  components: {
    Popover,
    ColorPanel,
  }

})
