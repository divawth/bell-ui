import Yox from 'yox'

import template from './template/ProgressTrack.hbs'

import {
  RAW_BOOLEAN,
  RAW_NUMERIC,
} from '../constant'

import {
  toPixel,
  toPercent,
} from '../util'

export default Yox.define({

  template,

  propTypes: {
    vertical: {
      type: RAW_BOOLEAN,
    },
    inside: {
      type: RAW_BOOLEAN,
    },
    thickness: {
      type: RAW_NUMERIC,
    },
    percent: {
      type: RAW_NUMERIC,
    },
  },

  computed: {
    inlineStyle(): Record<string, string> {

      const vertical = this.get('vertical')
      const thickness = this.get('thickness')

      if (vertical) {
        return {
          width: toPixel(thickness)
        }
      }

      return {
        height: toPixel(thickness)
      }
    },
    barStyle(): Record<string, string> {

      const vertical = this.get('vertical')
      const thickness = this.get('thickness')
      const percent = this.get('percent')

      if (vertical) {
        return {
          width: toPixel(thickness),
          height: toPercent(percent),
        }
      }

      return {
        width: toPercent(percent),
        height: toPixel(thickness),
        lineHeight: toPixel(thickness),
      }
    },
  }

})