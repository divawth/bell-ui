import template from './template/Row.html'

export default {
  propTypes: {
    gutter: {
      type: 'numeric'
    },
    type: {
      type: 'string'
    },
    justify: {
      type: 'string'
    },
    align: {
      type: 'string'
    },
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
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
          true
        )
      },
      immediate: true
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