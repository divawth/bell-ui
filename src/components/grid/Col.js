import template from './template/Col.html'
import { 
  RAW_STRING, 
  RAW_NUMERIC,
  RAW_OBJECT
} from '../constant'

export default {
  propTypes: {
    span: {
      type: RAW_NUMERIC
    },
    order: {
      type: RAW_NUMERIC
    },
    offset: {
      type: RAW_NUMERIC
    },
    push: {
      type: RAW_NUMERIC
    },
    pull: {
      type: RAW_NUMERIC
    },
    xs: {
      type: [RAW_NUMERIC, RAW_OBJECT]
    },
    sm: {
      type: [RAW_NUMERIC, RAW_OBJECT]
    },
    md: {
      type: [RAW_NUMERIC, RAW_OBJECT]
    },
    lg: {
      type: [RAW_NUMERIC, RAW_OBJECT]
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
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