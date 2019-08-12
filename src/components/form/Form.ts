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
    labelAlign: {
      type: oneOf([RAW_LEFT, RAW_RIGHT, RAW_TOP]),
      value: RAW_RIGHT,
    },
    labelWidth: {
      type: RAW_STRING,
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
      const me = this
      const validator = new Validator()
      const errors = validator.validate(
        me.get('value'),
        me.get('rules'),
        me.get('messages')
      )
      if (!errors) {
        callback(TRUE)
      }
      else {
        me.fire(
          'validate.form',
          { errors },
          TRUE
        )
        callback(FALSE, errors)
      }
    }
  }
})