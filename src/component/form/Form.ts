import Yox, { Data } from 'yox'

import template from './template/Form.hbs'
// import './style/Form.styl'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_LEFT,
  RAW_RIGHT,
  RAW_NUMERIC,
  RAW_INLINE,
  RAW_VERTICAL,
  RAW_HORIZONTAL,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
  spaceListStyle,
} from '../util'

import {
  formInlineItemGaps,
} from './util'

export default Yox.define({

  template,

  name: '${prefix}Form',

  propTypes: {
    layout: {
      type: oneOf([RAW_INLINE, RAW_HORIZONTAL, RAW_VERTICAL]),
      value: RAW_HORIZONTAL,
    },
    showColon: {
      type: RAW_BOOLEAN,
    },
    scrollToFirstError: {
      type: RAW_BOOLEAN,
    },
    labelAlign: {
      type: oneOf([RAW_LEFT, RAW_RIGHT]),
      value: RAW_RIGHT,
    },
    labelWidth: {
      type: RAW_NUMERIC,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  computed: {
    inlineStyle() {
      const layout = this.get('layout')
      const style = this.get('style')
      if (layout === RAW_INLINE) {
        return spaceListStyle(
          formInlineItemGaps,
          FALSE,
          TRUE,
          style
        )
      }
      return style
    }
  },

  watchers: {
    layout(value) {
      this.fire(
        {
          type: 'layoutChange',
          ns: 'form',
        },
        {
          layout: value,
        },
        TRUE
      )
    }
  },

  methods: {
    validate(errors: Data | void) {
      this.fire(
        {
          type: 'validate',
          ns: 'form',
        },
        {
          errors,
          hasScrolled: FALSE,
        },
        TRUE
      )
    },
  }
})