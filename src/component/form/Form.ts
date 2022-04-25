import Yox, { Data } from 'yox'

import template from './template/Form.hbs'
// import './style/Form.styl'

import {
  TRUE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_LEFT,
  RAW_RIGHT,
  RAW_NUMERIC,
  RAW_INLINE,
  RAW_VERTICAL,
  RAW_HORIZONTAL,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Form',

  propTypes: {
    layout: {
      type: oneOf([RAW_INLINE, RAW_HORIZONTAL, RAW_VERTICAL]),
      value: RAW_HORIZONTAL,
    },
    showColon: {
      type: RAW_BOOLEAN,
    },
    labelAlign: {
      type: oneOf([RAW_LEFT, RAW_RIGHT]),
      value: RAW_RIGHT,
    },
    labelWidth: {
      type: RAW_NUMERIC,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  watchers: {
    layout(value) {
      this.fire(
        {
          type: 'layoutChange',
          ns: 'form',
        },
        {
          layout: value,
        },
        TRUE
      )
    }
  },

  methods: {
    validate(errors: Data | void) {
      this.fire(
        {
          type: 'validate',
          ns: 'form',
        },
        { errors },
        TRUE
      )
    },
  }
})