import Yox from 'yox'

import template from './template/Badge.hbs'
// import './style/Badge.styl'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMBER,
  RAW_NUMERIC,
  RAW_DEFAULT,
  RAW_TYPE_ARRAY,
  RAW_TYPE_ERROR,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_WARNING,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
  supportTransform,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Badge',

  propTypes: {
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_TYPE_ERROR,
    },
    status: {
      type: oneOf([
        RAW_TYPE_INFO,
        RAW_TYPE_SUCCESS,
        RAW_TYPE_ERROR,
        RAW_TYPE_WARNING,
        RAW_DEFAULT,
        'processing',
      ]),
    },
    text: {
      type: [RAW_STRING, RAW_NUMBER],
    },
    count: {
      type: RAW_NUMERIC,
    },
    max: {
      type: RAW_NUMERIC,
      value: 99,
    },
    dot: {
      type: RAW_BOOLEAN,
    },
    hidden: {
      type: RAW_BOOLEAN,
    },
    ripple: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  filters: {
    isNumeric: Yox.is.numeric,
    formatText(count: any, max: any) {
      count = Yox.is.numeric(count) ? +count : 0
      max = Yox.is.numeric(max) ? +max : 1
      return max < count
        ? max + '+'
        : count
    }
  },

  watchers: {
    count() {
      this.updatePosition()
    },
    max() {
      this.updatePosition()
    },
    hidden() {
      this.updatePosition()
    }
  },

  methods: {
    updatePosition() {
      if (supportTransform) {
        return
      }
      const append = this.$refs.append as HTMLElement
      if (!append || !Yox.string.has(append.className, '${prefix}badge-text-append')) {
        return
      }
      append.style.marginLeft = -0.5 * append.offsetWidth + 'px'
      append.style.marginTop = -0.5 * append.offsetHeight + 'px'
    }
  },

  afterMount() {
    this.updatePosition()
  }

})
