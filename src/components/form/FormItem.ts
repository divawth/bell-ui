import Yox from 'yox'

import template from './template/FormItem.hbs'

import {
  UNDEFINED,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_TOP,
  RAW_BOTTOM,
  RAW_MIDDLE,
  TRUE,
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
      if (errors) {
        this.set('error', errors[this.get('prop')])
      }
      else {
        this.set('error', UNDEFINED)
      }
    }
  }

})
