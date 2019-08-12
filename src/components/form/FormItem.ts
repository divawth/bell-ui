import Yox from 'yox'

import template from './template/FormItem.hbs'

import {
  findComponentUpward,
} from '../util'

import {
  FALSE,
  UNDEFINED,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
} from '../constant'

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
    const prop = this.get('prop')

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
