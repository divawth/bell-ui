import Yox, { CustomEventInterface } from 'yox'

import template from './template/ColorPanel.hbs'

import Button from '../button/Button'
import ColorThumb from './ColorThumb'
import HexInput from './HexInput'
import RgbInput from './RgbInput'

import {
  TRUE,
  FALSE,
  DOCUMENT,
  UNDEFINED,
  RAW_ARRAY,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_EVENT_MOUSEMOVE,
  RAW_EVENT_MOUSEUP,
} from '../constant'

import {
  MODE_HEX,
  MODE_RGB,
  formatRgb,
  normalizeAlpha,
  normalizeHue,
  normalizeSaturation,
  normalizeValue,
} from './util'

import {
  oneOf,
  spaceListStyle,
  spaceItemStyle,
} from '../util'

import {
  endDrag,
  startDrag,
} from '../event'

const swatchGaps = [10, 8]

export default Yox.define({

  template,

  name: '${prefix}ColorPanel',

  propTypes: {
    mode: {
      type: oneOf([MODE_HEX, MODE_RGB]),
    },
    swatches: {
      type: RAW_ARRAY,
    },
    showAlpha: {
      type: RAW_BOOLEAN,
    },
    rgb: {
      type: RAW_ARRAY,
    },
    // 色调
    hue: {
      type: RAW_NUMERIC,
    },
    // 饱和度
    saturation: {
      type: RAW_NUMERIC,
    },
    // 明度
    value: {
      type: RAW_NUMERIC,
    },
    // 透明度
    alpha: {
      type: RAW_NUMERIC,
    },
    className: {
      type: RAW_STRING,
    },
  },

  data() {
    return {
      MODE_HEX,
      MODE_RGB,
    }
  },

  computed: {
    palleteLayerStyle() {
      const hueThumbColor = this.get('hueThumbColor')
      return {
        backgroundImage: `linear-gradient(90deg, white, ${hueThumbColor})`
      }
    },
    palleteThumbStyle() {
      const saturation = this.get('saturation')
      const value = this.get('value')
      return {
        left: `${saturation}%`,
        bottom: `${value}%`,
      }
    },
    palleteThumbColor() {
      const rgb = this.get('rgb')
      if (rgb) {
        return formatRgb(rgb)
      }
    },
    hueThumbStyle() {
      const hue = this.get('hue')
      return {
        left: `${(hue / 359) * 100}%`,
      }
    },
    hueThumbColor() {
      const hue = this.get('hue')
      return `hsl(${hue}, 100%, 50%)`
    },
    alphaMaskStyle() {
      const rgb = this.get('rgb')
      if (rgb) {
        return {
          backgroundImage: `linear-gradient(to right, ${formatRgb(rgb, 0)} 0%, ${formatRgb(rgb, 1)} 100%)`
        }
      }
    },
    alphaThumbStyle() {
      const alpha = this.get('alpha')
      return {
        left: `${alpha * 100}%`,
      }
    },
    alphaThumbColor() {
      const rgb = this.get('rgb')
      if (rgb) {
        const alpha = this.get('alpha')
        return formatRgb(rgb, alpha)
      }
    },
    swatchListStyle(): object[] | void {
      return spaceListStyle(
        swatchGaps,
        FALSE,
        TRUE
      )
    },
    swatchItemStyle(): Record<string, string> | void {
      return spaceItemStyle(
        swatchGaps,
        FALSE,
        TRUE
      )
    },
  },

  filters: {
    formatMode(mode: string, showAlpha: boolean) {
      return mode.toUpperCase() + (showAlpha ? 'A' : '')
    }
  },

  methods: {
    selectColor(color: string) {
      this.fire(
        {
          type: 'colorChange',
          ns: 'colorPanel',
        },
        {
          color,
        }
      )

    },
  },

  afterMount() {

    const me = this

    let palleteEl: HTMLElement | void
    let hueEl: HTMLElement | void
    let alphaEl: HTMLElement | void

    const onPalleteMouseDown = function (event: CustomEventInterface) {

      event.stop()

      palleteEl = me.$refs.pallete as HTMLElement | void
      if (!palleteEl) {
        return
      }

      startDrag()

      Yox.dom.on(DOCUMENT, RAW_EVENT_MOUSEMOVE, onPalleteMouseMove)
      Yox.dom.on(DOCUMENT, RAW_EVENT_MOUSEUP, onPalleteMouseUp)

    }

    const onPalleteMouseMove = function (event: CustomEventInterface) {

      const mouseEvent = event.originalEvent as MouseEvent
      const rect = (palleteEl as HTMLElement).getBoundingClientRect()

      const saturation = (mouseEvent.clientX - rect.left) / rect.width
      const value = (rect.bottom - mouseEvent.clientY) / rect.height

      me.fire(
        {
          type: 'hsvChange',
          ns: 'colorPanel',
        },
        {
          hsv: [
            me.get('hue'),
            normalizeSaturation(saturation),
            normalizeValue(value),
          ]
        }
      )

    }

    const onPalleteMouseUp = function () {

      Yox.dom.off(DOCUMENT, RAW_EVENT_MOUSEMOVE, onPalleteMouseMove)
      Yox.dom.off(DOCUMENT, RAW_EVENT_MOUSEUP, onPalleteMouseUp)

      palleteEl = UNDEFINED
      endDrag()

    }


    const onHueMouseDown = function (event: CustomEventInterface) {

      event.stop()

      hueEl = me.$refs.hue as HTMLElement | void
      if (!hueEl) {
        return
      }

      startDrag()

      Yox.dom.on(DOCUMENT, RAW_EVENT_MOUSEMOVE, onHueMouseMove)
      Yox.dom.on(DOCUMENT, RAW_EVENT_MOUSEUP, onHueMouseUp)

    }

    const onHueMouseMove = function (event: CustomEventInterface) {

      const mouseEvent = event.originalEvent as MouseEvent
      const rect = (hueEl as HTMLElement).getBoundingClientRect()

      const hue = ((mouseEvent.clientX - rect.left) / rect.width) * 360

      me.fire(
        {
          type: 'hsvChange',
          ns: 'colorPanel',
        },
        {
          hsv: [
            normalizeHue(hue),
            me.get('saturation'),
            me.get('value'),
          ]
        }
      )

    }

    const onHueMouseUp = function () {

      Yox.dom.off(DOCUMENT, RAW_EVENT_MOUSEMOVE, onHueMouseMove)
      Yox.dom.off(DOCUMENT, RAW_EVENT_MOUSEUP, onHueMouseUp)

      hueEl = UNDEFINED
      endDrag()

    }



    const onAlphaMouseDown = function (event: CustomEventInterface) {

      event.stop()

      alphaEl = me.$refs.alpha as HTMLElement | void
      if (!alphaEl) {
        return
      }

      startDrag()

      Yox.dom.on(DOCUMENT, RAW_EVENT_MOUSEMOVE, onAlphaMouseMove)
      Yox.dom.on(DOCUMENT, RAW_EVENT_MOUSEUP, onAlphaMouseUp)

    }

    const onAlphaMouseMove = function (event: CustomEventInterface) {

      const mouseEvent = event.originalEvent as MouseEvent
      const rect = (alphaEl as HTMLElement).getBoundingClientRect()

      const alpha = (mouseEvent.clientX - rect.left) / rect.width

      me.fire(
        {
          type: 'alphaChange',
          ns: 'colorPanel',
        },
        {
          alpha: normalizeAlpha(alpha),
        }
      )

    }

    const onAlphaMouseUp = function () {

      Yox.dom.off(DOCUMENT, RAW_EVENT_MOUSEMOVE, onAlphaMouseMove)
      Yox.dom.off(DOCUMENT, RAW_EVENT_MOUSEUP, onAlphaMouseUp)

      alphaEl = UNDEFINED
      endDrag()

    }

    // @ts-ignore
    me.onPalleteMouseDown = onPalleteMouseDown
    // @ts-ignore
    me.onHueMouseDown = onHueMouseDown
    // @ts-ignore
    me.onAlphaMouseDown = onAlphaMouseDown

  },

  components: {
    Button,
    ColorThumb,
    HexInput,
    RgbInput,
  }

})
