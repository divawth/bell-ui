import Yox from 'yox'

import template from './template/FormItem.hbs'

import {
  UNDEFINED,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_TOP,
  RAW_BOTTOM,
  RAW_MIDDLE,
} from '../constant'

import {
  oneOf,
  findComponentUpward,
} from '../util'

export default Yox.define({

  template,

  propTypes: {
    prop: {
      type: RAW_STRING,
    },
    label: {
      type: RAW_STRING,
    },
    required: {
      type: RAW_BOOLEAN,
    },
    labelAlign: {
      type: oneOf([RAW_TOP, RAW_BOTTOM, RAW_MIDDLE]),
    },
    showMessage: {
      type: RAW_BOOLEAN,
    },
    message: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data(options) {

    const form = findComponentUpward(options.parent, '${prefix}form')

    let showMessage = this.get('showMessage')
    if (showMessage === UNDEFINED) {
      showMessage = form.get('showMessage')
    }

    let required = this.get('required')
    if (required === UNDEFINED) {
      const rules = form.get('rules')
      if (rules) {
        required = rules.required
      }
    }

    return {
      error: UNDEFINED,
      showError: showMessage,
      isRequired: required,
      labelWidth: form.get('labelWidth'),
    }
  },

  computed: {
    computedError(): string {
      return this.get('error') || this.get('message')
    }
  },

  events: {
    'validate.form': function (_, data) {
      const { errors } = data
      if (errors) {
        this.set('error', errors[this.get('prop')])
      }
      else {
        this.set('error', UNDEFINED)
      }
    }
  }

})
