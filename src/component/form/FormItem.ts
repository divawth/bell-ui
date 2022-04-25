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
  RAW_HORIZONTAL,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
  toPixel,
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
      value: RAW_TOP,
    },
    showMessage: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    adaptive: {
      type: RAW_BOOLEAN,
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
      RAW_TOP,
      RAW_HORIZONTAL,
      error: UNDEFINED,
      formLayout: form.get('layout'),
      formLabelWidth: form.get('labelWidth'),
    }

  },

  computed: {
    itemLabelWidth(): string {
      const formLayout = this.get('formLayout')
      const formLabelWidth = this.get('formLabelWidth')
      return formLayout === RAW_HORIZONTAL && formLabelWidth
        ? toPixel(formLabelWidth)
        : ''
    },
    itemMessage(): string {
      return this.get('error') || this.get('message')
    },
    showItemMessage(): string {
      return this.get('showMessage') && this.get('itemMessage')
    }
  },

  filters: {
    formatMessage(msg: string) {
      return msg.replace(/\n/g, '<br>')
    }
  },

  events: {
    layoutChange: {
      listener(_, data) {
        this.set({
          formLayout: data.layout,
        })
      },
      ns: 'form',
    },
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
