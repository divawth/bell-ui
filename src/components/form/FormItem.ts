import Yox from 'yox'

import template from './template/FormItem.hbs'

import {
  TRUE,
  FALSE,
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
      required: TRUE,
    },
    label: {
      type: RAW_STRING,
    },
    showRequiredMark: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    labelAlign: {
      type: oneOf([RAW_TOP, RAW_BOTTOM, RAW_MIDDLE]),
    },
    showMessage: {
      type: RAW_BOOLEAN,
      value: TRUE,
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

    return {
      error: UNDEFINED,
      itemLabelWidth: form.get('labelWidth'),
    }
  },

  computed: {
    itemMessage(): string {
      return this.get('error') || this.get('message')
    }
  },

  events: {
    'validate.form': function (_, data) {
      const { errors } = data
      this.set(
        'error',
        errors
        ? errors[this.get('prop')]
        : UNDEFINED
      )
    }
  }

})
