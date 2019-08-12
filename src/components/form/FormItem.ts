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
    labelWidth: {
      type: RAW_NUMERIC,
    },
    labelFor: {
      type: RAW_STRING,
    },
    required: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    showMessage: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    error: {
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

    let rules = form.get('rules')
    let messages = form.get('messages')
    if (rules && prop) {
      rules = rules[ prop ]
    }
    if (messages && prop) {
      messages = messages[ prop ]
    }

    let labelWidth = this.get('labelWidth')
    let showMessage = this.get('showMessage')

    if (labelWidth === UNDEFINED) {
      labelWidth = form.get('labelWidth')
    }
    if (showMessage === UNDEFINED) {
      showMessage = form.get('showMessage')
    }

    let required = this.get('required')
    if (required === UNDEFINED && rules) {
      required = rules.required
    }

    return {
      rules: rules,
      messages: messages,
      defaultValue: form.get('value'),
      errorMsg: '',
      isShowError: showMessage,
      isRequired: required,
      width: labelWidth,
    }
  },

  events: {
    'validate.form': function (_, data) {
      let error = data.errors[ this.get('prop') ]
      this.set('errorMsg', error)
    }
  }

})
