import Yox from 'yox'

import template from './template/Circle.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}circle',

  propTypes: {
    dashboard: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    percent: {
      type: RAW_NUMERIC,
      value: 0,
    },
    size: {
      type: RAW_NUMERIC,
      value: 120,
    },
    strokeWidth: {
      type: RAW_NUMERIC,
      value: 6,
    },
    strokeColor: {
      type: RAW_STRING,
      value: '#2db7f5',
    },
    strokeLinecap: {
      type: oneOf(['square', 'round']),
      value: 'round',
    },
    trailWidth: {
      type: RAW_NUMERIC,
      value: 5,
    },
    trailColor: {
      type: RAW_STRING,
      value: '#eaeef2',
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  computed: {
    computedStrokeWidth() {
      return this.get('percent') === 0 && this.get('dashboard')
        ? 0
        : this.get('strokeWidth')
    },
    trailStyle() {
      let style = []
      let len = this.get('len')
      if (this.get('dashboard')) {
        style = [
          `stroke-dasharray: ${len - 75}px ${len}px`,
          `stroke-dashoffset: -${75 / 2}px`,
          'transition: stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        ]
      }
      return style.join(';')
    },
    pathStyle() {
      let style = []
      let percent = this.get('percent')
      let len = this.get('len')
      if (this.get('dashboard')) {
        style = [
          `stroke-dasharray: ${(percent / 100) * (len - 75)}px ${len}px`,
          `stroke-dashoffset: -${75 / 2}px`,
          'transition: stroke-dashoffset .3s ease 0s, stroke-dasharray .6s ease 0s, stroke .6s, stroke-width .06s ease .6s'
        ]
      }
      else {
        style = [
          `stroke-dasharray: ${len}px ${len}px`,
          `stroke-dashoffset: ${((100 - percent) / 100 * len)}px`,
          'transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
        ]
      }
      return style.join(';')
    },
    radius() {
      return 50 - this.get('strokeWidth') / 2
    },
    len() {
      return Math.PI * 2 * this.get('radius')
    },
    path() {
      let radius = this.get('radius')
      if (this.get('dashboard')) {
        return `M 50,50 m 0,${radius}
        a ${radius},${radius} 0 1 1 0,-${2 * radius}
        a ${radius},${radius} 0 1 1 0,${2 * radius}`
      }
      else {
        return `M 50,50 m 0,-${radius}
        a ${radius},${radius} 0 1 1 0,${2 * radius}
        a ${radius},${radius} 0 1 1 0,-${2 * radius}`
      }
    }
  }
})
