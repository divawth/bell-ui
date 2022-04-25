import Yox from 'yox'

import template from './template/ColorSwatch.hbs'
// import './style/ColorSwatch.styl'

import {
  TRUE,
  FALSE,
  RAW_ARRAY,
  RAW_STRING,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  spaceListStyle,
  spaceItemStyle,
} from '../util'

const swatchGaps = [10, 8]

export default Yox.define({

  template,

  name: '${prefix}ColorSwatch',

  propTypes: {
    swatches: {
      type: RAW_ARRAY,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  computed: {
    swatchListStyle(): object[] | void {
      return spaceListStyle(
        swatchGaps,
        FALSE,
        TRUE,
        this.get('style')
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

  methods: {
    onColorClick(color: string) {
      this.fire(
        {
          type: 'change',
          ns: 'colorSwatch',
        },
        {
          color,
        }
      )
    },
  }

})
