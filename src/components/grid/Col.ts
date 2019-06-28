import Yox, { Data } from 'yox'

import template from './template/Col.hbs'

import {
  RAW_STRING,
  RAW_NUMERIC,
  RAW_OBJECT
} from '../constant'

import { findComponentUpward } from '../util'

export default Yox.define({
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
  computed: {
    xsClass(): string {
      let data = this.get('xs')
      if (!data) {
        return
      }
      return this.getClass('xs', data)
    },
    smClass(): string {
      let data = this.get('sm')
      if (!data) {
        return
      }
      return this.getClass('sm', data)
    },
    mdClass(): string {
      let data = this.get('md')
      if (!data) {
        return
      }
      return this.getClass('md', data)
    },
    lgClass(): string {
      let data = this.get('lg')
      if (!data) {
        return
      }
      return this.getClass('lg', data)
    },
    inlineStyle(): string {
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
      return `${style}padding-left: ${gap}px; padding-right: ${gap}px`
    }
  },

  methods: {
    getClass(name: string, data: Data) {
      let classArr = []
      if (Yox.is.object(data)) {
        if (data.span) {
          classArr.push('${prefix}col-' + name + '-' + data.span)
        }
        if (data.order) {
          classArr.push('${prefix}col-' + name + '-order-' + data.order)
        }
        if (data.offset) {
          classArr.push('${prefix}col-' + name + '-offset-' + data.offset)
        }
        if (data.push) {
          classArr.push('${prefix}col-' + name + '-push-' + data.push)
        }
        if (data.pull) {
          classArr.push('${prefix}col-' + name + '-pull-' + data.pull)
        }
      }
      else {
        classArr.push('${prefix}col-' + name + '-' + data)
      }

      return classArr.join(' ')
    }
  },

  events: {
    'gutterChanged.row': function (event, data) {
      this.set({
        gutter: data.gutter
      })
      event.stop()
    }
  },

  afterMount() {
    let row = findComponentUpward(this.$parent, '${prefix}raw')
    this.set('gutter', row.get('gutter'))
  }
})
