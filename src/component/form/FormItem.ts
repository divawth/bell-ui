import Yox from 'yox'

import template from './template/FormItem.hbs'

import {
  TRUE,
  UNDEFINED,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_TOP,
  RAW_BOTTOM,
  RAW_MIDDLE,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
  findComponentUpward,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}FormItem',

  propTypes: {
    prop: {
      type: RAW_STRING,
    },
    label: {
      type: RAW_STRING,
    },
    showRequiredMark: {
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
    extra: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  data(options) {

    const form = findComponentUpward(options.parent, '${prefix}Form')

    return {
      error: UNDEFINED,
      itemLabelWidth: form.get('labelWidth'),
    }
  },

  computed: {
    itemMessage(): string {
      return this.get('error') || this.get('message')
    },
    showItemMessage(): string {
      return this.get('showMessage') && this.get('itemMessage')
    }
  },

  events: {
    validate: {
      listener(_, data) {
        const { errors } = data
        this.set(
          'error',
          errors
          ? errors[this.get('prop')]
          : UNDEFINED
        )
      },
      ns: 'form',
    }
  }

})
