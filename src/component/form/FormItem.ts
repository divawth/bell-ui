import Yox from 'yox'

import template from './template/FormItem.hbs'

import {
  TRUE,
  FALSE,
  UNDEFINED,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_INLINE,
  RAW_HORIZONTAL,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  toPixel,
  spaceItemStyle,
  findComponentUpward,
} from '../util'

import {
  formInlineItemGaps,
} from './util'

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
      RAW_HORIZONTAL,
      error: UNDEFINED,
      formLayout: form.get('layout'),
      formLabelWidth: form.get('labelWidth'),
    }

  },

  computed: {
    inlineStyle() {
      const formLayout = this.get('formLayout')
      const style = this.get('style')
      if (formLayout === RAW_INLINE) {
        return spaceItemStyle(
          formInlineItemGaps,
          FALSE,
          TRUE,
          style
        )
      }
      return style
    },
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
    },
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
        const error = errors
          ? errors[this.get('prop')]
          : UNDEFINED

        this.set({
          error
        })

        if (!data.hasScrolled && data.scrollToFirstError) {
          const el = this.$el
          if (el.scrollIntoView) {
            el.scrollIntoView()
          }
          data.hasScrolled = TRUE
        }

      },
      ns: 'form',
    }
  }

})
