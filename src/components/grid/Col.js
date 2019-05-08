import template from './template/Col.html'

export default {
  propTypes: {
    span: {
      type: 'numeric'
    },
    order: {
      type: 'numeric'
    },
    offset: {
      type: 'numeric'
    },
    push: {
      type: 'numeric'
    },
    pull: {
      type: 'numeric'
    },
    xs: {
      type: ['numeric', 'object']
    },
    sm: {
      type: ['numeric', 'object']
    },
    md: {
      type: ['numeric', 'object']
    },
    lg: {
      type: ['numeric', 'object']
    },
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    }
  },
  
  template,

  data () {
    return {
      style: '',
      gutter: ''
    }
  },

  events: {
    gridGutterChanged(_, data) {
      this.set({
        gutter: data.gutter
      })
    }
  },

  computed: {
    xsClass() {
      let data = this.get('xs')
      if (!data) {
        return
      }
      return this.getClass('xs', data)
    },
    smClass() {
      let data = this.get('sm')
      if (!data) {
        return
      }
      return this.getClass('sm', data)
    },
    mdClass() {
      let data = this.get('md')
      if (!data) {
        return
      }
      return this.getClass('md', data)
    },
    lgClass() {
      let data = this.get('lg')
      if (!data) {
        return
      }
      return this.getClass('lg', data)
    },
    style() {
      let gap = this.get('gutter') / 2
      let style = ''
      style = 'padding-left:' + gap + 'pxpadding-right: ' + gap + 'px'
      return style
    }
  },

  methods: {
    getClass(name, data) {
      let classArr = []
      if (Yox.is.object(data)) {
        if (data.span) {
          classArr.push(${prefix} + 'col-' + name + '-' + data.span)
        }
        if (data.order) {
          classArr.push(${prefix} + 'col-' + name + '-order-' + data.order)
        }
        if (data.offset) {
          classArr.push(${prefix} + 'col-' + name + '-offset-' + data.offset)
        }
        if (data.push) {
          classArr.push(${prefix} + 'col-' + name + '-push-' + data.push)
        }
        if (data.pull) {
          classArr.push(${prefix} + 'col-' + name + '-pull-' + data.pull)
        }
      }
      else {
        classArr.push(${prefix} + 'col-' + name + '-' + data)
      }

      return classArr.join(' ')
    }
  }
}