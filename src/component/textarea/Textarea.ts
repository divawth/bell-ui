import Yox, { CustomEventInterface } from 'yox'

import template from './template/Textarea.hbs'
// import './style/Textarea.styl'

import {
  TRUE,
  FALSE,
  DOCUMENT,
  RAW_BOOLEAN,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_OBJECT,
  RAW_HORIZONTAL,
  RAW_VERTICAL,
  RAW_EVENT_KEYDOWN,
  RAW_EVENT_KEYPRESS,
  RAW_EVENT_KEYUP,
  RAW_SIZE_ARRAY,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_ERROR,
  RAW_TYPE_WARNING,
  RAW_DEFAULT,
  RAW_SMALL,
  RAW_LARGE,
  RAW_EVENT_BEFORE_DESTROY,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf, toPixel,
} from '../util'

const sizes = {}
const fontSizes = {}

sizes[RAW_DEFAULT] = 5
sizes[RAW_SMALL] = 3
sizes[RAW_LARGE] = 8

fontSizes[RAW_DEFAULT] = 14
fontSizes[RAW_SMALL] = 12
fontSizes[RAW_LARGE] = 16

export default Yox.define({

  template,

  name: '${prefix}Textarea',

  propTypes: {
    value: {
      type: RAW_STRING,
    },
    size: {
      type: oneOf(RAW_SIZE_ARRAY),
      value: RAW_DEFAULT,
    },
    autoSize: {
      type: [RAW_BOOLEAN, RAW_OBJECT],
    },
    status: {
      type: oneOf([RAW_TYPE_INFO, RAW_TYPE_SUCCESS, RAW_TYPE_ERROR, RAW_TYPE_WARNING]),
    },
    placeholder: {
      type: RAW_STRING,
    },
    rows: {
      type: RAW_NUMERIC,
      value: 3
    },
    disabled: {
      type: RAW_BOOLEAN,
    },
    resize: {
      type: oneOf([RAW_HORIZONTAL, RAW_VERTICAL]),
    },
    wrap: {
      type: oneOf(['hard', 'soft']),
    },
    autoFocus: {
      type: RAW_BOOLEAN,
    },
    spellCheck: {
      type: RAW_BOOLEAN,
    },
    readOnly: {
      type: RAW_BOOLEAN,
    },
    block: {
      type: RAW_BOOLEAN,
    },
    showCount: {
      type: RAW_BOOLEAN,
    },
    maxLength: {
      type: RAW_NUMERIC,
    },
    width: {
      type: RAW_NUMERIC,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    },
  },

  data() {
    return {
      RAW_HORIZONTAL,
      RAW_VERTICAL,
      isFocus: FALSE,
    }
  },

  computed: {
    hasCount() {
      return this.get('showCount') && this.get('maxLength') > 0
    },
    inlineStyle(): object[] | void {
      const result: object[] = []

      const width = this.get('width')
      if (width) {
        result.push({
          width: toPixel(width)
        })
      }

      const style = this.get('style')
      if (style) {
        result.push(style)
      }

      if (result.length > 0) {
        return result
      }
    },
    textareaStyle() {

      let rows = this.get('rows')
      let size = this.get('size')
      let autoSize = this.get('autoSize')

      // 单行的高度
      const ROW_HEIGHT = fontSizes[size] * 1.5

      // 上下 padding + border
      const PADDING_VERTICAL = 2 * (1 + sizes[size])

      if (autoSize) {
        let value = this.get('value')
        if (Yox.is.object(autoSize)) {
          rows = value ? value.split('\n').length : autoSize.minRows
          return {
            minHeight: toPixel(autoSize.minRows * ROW_HEIGHT + PADDING_VERTICAL),
            maxHeight: toPixel(autoSize.maxRows * ROW_HEIGHT + PADDING_VERTICAL),
            height: toPixel(rows * ROW_HEIGHT + PADDING_VERTICAL),
          }
        }

        rows = value ? value.split('\n').length : 1
        return {
          minHeight: toPixel(ROW_HEIGHT + PADDING_VERTICAL),
          height: toPixel(rows * ROW_HEIGHT + PADDING_VERTICAL),
        }
      }

      return {
        height: toPixel(rows * ROW_HEIGHT + PADDING_VERTICAL),
      }

    }
  },

  watchers: {
    value(value) {
      this.fire(
        {
          type: 'change',
          ns: 'textarea',
        },
        { value }
      )
    },
  },

  filters: {
    formatValueLength(value) {
      return value
        ? value.length
        : 0
    }
  },

  methods: {
    handleFocus() {
      this.set('isFocus', TRUE)
      this.fire({
        type: 'focus',
        ns: 'textarea',
      })
    },
    handleBlur() {
      this.set('isFocus', FALSE)
      this.fire({
        type: 'blur',
        ns: 'textarea',
      })
    },
  },

  afterMount() {

    const me = this

    const onKeydown = function (event: CustomEventInterface) {

      if (!me.get('isFocus')) {
        return
      }

      const originalEvent = event.originalEvent as KeyboardEvent
      me.fire(
        new Yox.Event('keydown.input', originalEvent)
      )

      if (originalEvent.keyCode === 13) {
        me.fire({
          type: 'enter',
          ns: 'textarea',
        })
      }

    }
    const onKeyup = function (event: CustomEventInterface) {

      if (!me.get('isFocus')) {
        return
      }

      const originalEvent = event.originalEvent as KeyboardEvent
      me.fire(
        new Yox.Event('keyup.input', originalEvent)
      )

    }
    const onKeypress = function (event: CustomEventInterface) {

      if (!me.get('isFocus')) {
        return
      }

      const originalEvent = event.originalEvent as KeyboardEvent
      me.fire(
        new Yox.Event('keypress.input', originalEvent)
      )

    }

    Yox.dom.on(
      DOCUMENT,
      RAW_EVENT_KEYDOWN,
      onKeydown
    )
    Yox.dom.on(
      DOCUMENT,
      RAW_EVENT_KEYUP,
      onKeyup
    )
    Yox.dom.on(
      DOCUMENT,
      RAW_EVENT_KEYPRESS,
      onKeypress
    )

    const destroy = function (component) {
      if (component === me) {
        Yox.dom.off(
          DOCUMENT,
          RAW_EVENT_KEYDOWN,
          onKeydown
        )
        Yox.dom.off(
          DOCUMENT,
          RAW_EVENT_KEYUP,
          onKeyup
        )
        Yox.dom.off(
          DOCUMENT,
          RAW_EVENT_KEYPRESS,
          onKeypress
        )
        Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy)
      }
    }
    Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy)

  }
})
