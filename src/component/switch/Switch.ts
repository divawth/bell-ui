import Yox from 'yox'

import template from './template/Switch.hbs'
// import './style/Switch.styl'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_DEFAULT,
  RAW_SMALL,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  model: 'checked',

  name: '${prefix}Switch',

  propTypes: {
    size: {
      type: oneOf([RAW_DEFAULT, RAW_SMALL]),
      value: RAW_DEFAULT,
    },
    disabled: {
      type: RAW_BOOLEAN,
    },
    checked: {
      type: RAW_BOOLEAN,
    },
    loading: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  methods: {
    handleClick() {
      this.fire(
        {
          type: 'change',
          ns: 'switch',
        },
        {
          checked: this.toggle('checked')
        }
      )
    }
  }
})