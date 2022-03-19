import Yox from 'yox'

import template from './template/Avatar.hbs'
// import './style/Avatar.styl'

import {
  TRUE,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_FUNCTION,
  RAW_DEFAULT,
  RAW_SHAPE_CIRCLE,
  RAW_SMALL,
  RAW_LARGE,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
  toPixel,
  toNumber,
} from '../util'

const SPACE_HORIZONTAL = 8

const SIZE_DEFAULT = 32
const SIZE_SMALL = 24
const SIZE_LARGE = 40

export default Yox.define({

  template,

  name: '${prefix}Avatar',

  propTypes: {
    size: {
      type: [RAW_STRING, RAW_NUMERIC],
      value: RAW_DEFAULT,
    },
    shape: {
      type: oneOf([RAW_SHAPE_CIRCLE]),
    },
    text: {
      type: RAW_STRING,
    },
    url: {
      type: RAW_STRING,
    },
    formatUrl: {
      type: RAW_FUNCTION,
    },
    src: {
      type: RAW_STRING,
    },
    srcSet: {
      type: RAW_STRING,
    },
    alt: {
      type: RAW_STRING,
    },
    color: {
      type: RAW_STRING,
    },
    fontSize: {
      type: RAW_NUMERIC,
    },
    backgroundColor: {
      type: RAW_STRING,
    },
    clickable: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  computed: {
    sizeValue() {
      const size = this.get('size')
      const value = toNumber(size)
      if (value > 0) {
        return value
      }
      if (size === RAW_SMALL) {
        return SIZE_SMALL
      }
      if (size === RAW_LARGE) {
        return SIZE_LARGE
      }
      return SIZE_DEFAULT
    },
    inlineStyle(): object[] | void {
      const result: object[] = []

      const customStyle: Record<string, string> = {}

      const sizeValue = this.get('sizeValue')
      customStyle.width = toPixel(sizeValue)
      customStyle.height = toPixel(sizeValue)

      const backgroundColor = this.get('backgroundColor')
      if (backgroundColor) {
        customStyle.backgroundColor = backgroundColor
      }

      if (Yox.object.keys(customStyle).length > 0) {
        result.push(customStyle)
      }

      const style = this.get('style')
      if (style) {
        result.push(style)
      }

      if (result.length > 0) {
        return result
      }
    },
    textStyle() {

      const customStyle: Record<string, string> = {}

      const color = this.get('color')
      const fontSize = this.get('fontSize')

      if (color) {
        customStyle.color = color
      }
      if (fontSize) {
        customStyle.fontSize = toPixel(fontSize)
      }

      if (Yox.object.keys(customStyle).length > 0) {
        return customStyle
      }

    }
  },

  afterMount() {

    const me = this

    me.watch(
      'text',
      function () {
        me.nextTick(function () {

          const element = me.$refs && me.$refs.text as HTMLElement
          if (!element) {
            return
          }

          const scale = element.offsetWidth
            ? (me.$el.offsetWidth - SPACE_HORIZONTAL) / element.offsetWidth
            : 1

          element.style.transform = `scale(${Math.min(scale, 1)}) translateX(-50%)`

        })
      },
      TRUE
    )

  }
})
