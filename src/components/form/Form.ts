import Yox from 'yox'

import { Validator } from './util/validate'

import template from './template/Form.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_OBJECT,
  RAW_BOOLEAN,
  RAW_LEFT,
  RAW_RIGHT,
  RAW_TOP,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}form',

  propTypes: {
    value: {
      type: RAW_OBJECT,
    },
    rules: {
      type: RAW_OBJECT,
    },
    messages: {
      type: RAW_OBJECT,
    },
    inline: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    labelPosition: {
      type: oneOf([RAW_LEFT, RAW_RIGHT, RAW_TOP]),
      value: RAW_RIGHT,
    },
    labelWidth: {
      type: RAW_STRING,
      value: 80,
    },
    showMessage: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  methods: {
    validate(callback: Function) {
      let me = this
      const validator = new Validator()
      let errors = validator.validate(
        me.get('value'),
        me.get('rules'),
        me.get('messages')
      )
      let isValid = !errors
      if (isValid) {
        callback(TRUE)
      }
      else {
        me.fire(
          'validateError.form',
          { errors },
          TRUE
        )
        callback(FALSE, errors)
      }
    }
  }
})