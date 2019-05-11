import template from './template/Row.html'
import { 
  TRUE,
  RAW_STRING, 
  RAW_NUMERIC
} from '../constant'

export default {
  propTypes: {
    gutter: {
      type: RAW_NUMERIC
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

  template,

  watchers: {
    gutter: {
      watcher: function (value) {
        this.fire(
          'gridGutterChanged',
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
      let gap = this.get('gutter') / 2
      let style = Yox.sring.trim(this.get('style'))
      if (style && !Yox.sring.endsWith(style, ';')) {
        style += ';'
      }
      return `${style}margin-left: -${gap}px; margin-right: -${gap}px;`
    }
  }
}