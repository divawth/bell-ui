import Yox from 'yox'

import { Validator } from './util/validate'

import template from './template/Form.hbs'

import {
  TRUE,
  RAW_STRING,
  RAW_OBJECT,
  RAW_BOOLEAN,
  RAW_NUMERIC,
} from '../constant'

import {
  oneOf
} from '../util'

export default Yox.define({
  propTypes: {
    value: {
      type: RAW_OBJECT
    },
    rules: {
      type: RAW_OBJECT
    },
    messages: {
      type: RAW_OBJECT
    },
    inline: {
      type: RAW_BOOLEAN
    },
    labelPosition: {
      type: oneOf(['left', 'right', 'top']),
      value: 'left'
    },
    labelWidth: {
      type: RAW_STRING,
      value: 80
    },
    showMessage: {
      type: RAW_BOOLEAN,
      value: TRUE
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  name: '${prefix}form',

  template,

  methods: {
    validate(callback) {
      let me = this
      const validator = new Validator()
      let errors = validator.validate(
        me.get('value'),
        me.get('rules'),
        me.get('messages')
      )
      let isValid = !errors
      if (isValid) {
        callback(true)
      }
      else {
        me.fire(
          'validateError.form',
          { errors },
          TRUE
        )
        callback(false, errors)
      }
    }
  }
})