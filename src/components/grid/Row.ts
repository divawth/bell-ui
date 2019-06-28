import Yox from 'yox'

import template from './template/Row.hbs'

import {
  TRUE,
  RAW_STRING,
  RAW_NUMERIC
} from '../constant'

export default Yox.define({
  propTypes: {
    gutter: {
      type: RAW_NUMERIC,
      value: 0
    },
    type: {
      type: RAW_STRING
    },
    justify: {
      type: RAW_STRING
    },
    align: {
      type: RAW_STRING
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  name: '${prefix}raw',

  template,

  watchers: {
    gutter: {
      watcher: function (value) {
        this.fire(
          'gutterChanged.row',
          {
            gutter: value
          },
          TRUE
        )
      },
      immediate: TRUE
    }
  },

  computed: {
    inlineStyle() {
      let gap = 0
      let style = ''
      if (this.get('style')
        && Yox.string.trim(this.get('style'))
        && !Yox.string.endsWith(style, ';')
      ) {
        style += ';'
      }
      if (this.get('gutter')) {
        gap = +this.get('gutter') / 2
      }
      return `${style}margin-left: -${gap}px; margin-right: -${gap}px;`
    }
  }
})
