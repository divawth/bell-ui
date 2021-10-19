import Yox, { Data } from 'yox'

import template from './template/Form.hbs'
// import './style/Form.styl'

import {
  TRUE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_LEFT,
  RAW_RIGHT,
  RAW_TOP,
  RAW_NUMERIC,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Form',

  propTypes: {
    inline: {
      type: RAW_BOOLEAN,
    },
    showColon: {
      type: RAW_BOOLEAN,
    },
    labelAlign: {
      type: oneOf([RAW_LEFT, RAW_RIGHT, RAW_TOP]),
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