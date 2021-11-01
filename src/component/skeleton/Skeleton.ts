import Yox from 'yox'

import template from './template/Skeleton.hbs'
// import './style/Skeleton.styl'

import {
  TRUE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_STYLE_TYPE,
  RAW_OBJECT,
  RAW_SMALL,
  RAW_LARGE,
  RAW_SHAPE_CIRCLE,
  RAW_SHAPE_ROUND,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}Skeleton',

  propTypes: {
    text: {
      type: [RAW_BOOLEAN, RAW_OBJECT],
      value: TRUE,
    },
    image: {
      type: [RAW_BOOLEAN, RAW_OBJECT],
    },
    loading: {
      type: RAW_BOOLEAN,
    },
    active: {
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
    computedText() {
      const text = this.get('text')
      if (text) {
        let rows = 3
        if (Yox.is.object(text) && text.rows) {
          rows = text.rows
        }

        const allWidth = Yox.is.array(text.width) ? text.width : []
        const lastWidth = Yox.is.number(text.width) ? text.width : (rows > 1 ? '60%' : '100%')

        const result = []
        for (let i = 0; i < rows; i++) {
          let width = allWidth[i] || (i === rows - 1 ? lastWidth : '100%')
          result.push({
            width: Yox.is.number(width) ? width + 'px' : width
          })
        }

        return result
      }
    },
    imageSize() {
      const image = this.get('image')
      if (image) {
        const defaultSize = 48
        if (Yox.is.boolean(image)) {
          return defaultSize
        }
        if (Yox.is.number(image.size)) {
          return image.size
        }
        if (image.size === RAW_SMALL) {
          return 36
        }
        if (image.size === RAW_LARGE) {
          return 60
        }
        return defaultSize
      }
    },
    imageShape() {
      const image = this.get('image')
      if (image) {
        const defaultShape = RAW_SHAPE_CIRCLE
        if (Yox.is.boolean(image)) {
          return defaultShape
        }
        if (image.shape === RAW_SHAPE_ROUND) {
          return RAW_SHAPE_ROUND
        }
        return defaultShape
      }
    }
  }

})
