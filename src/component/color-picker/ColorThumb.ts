import Yox from 'yox'

import template from './template/ColorThumb.hbs'

import {
  RAW_STRING,
  RAW_STYLE_TYPE,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}ColorThumb',

  propTypes: {
    color: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  computed: {
    colorStyle() {
      const color = this.get('color')
      return {
        backgroundColor: color,
      }
    },
  },

})
