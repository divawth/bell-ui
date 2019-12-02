import Yox from 'yox'

import { Validator } from './util/validate'

import template from './template/Form.hbs'
// import './style/Form.styl'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_LEFT,
  RAW_RIGHT,
  RAW_TOP,
  RAW_NUMERIC,
} from '../constant'

import {
  oneOf,
} from '../util'

const validator = new Validator()

export default Yox.define({

  template,

  name: '${prefix}form',

  propTypes: {
    inline: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    showColon: {
      type: RAW_BOOLEAN,
      value: FALSE,
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
      type: RAW_STRING,
    }
  },

  methods: {
    validate(value: object, rules: object, messages: object) {

      const errors = validator.validate(value, rules, messages)

      this.fire(
        'validate.form',
        { errors },
        TRUE
      )

      return errors

    }
  }
})