import Yox, { CustomEventInterface } from 'yox'

import template from './template/Textarea.hbs'

import {
  TRUE,
  FALSE,
  DOCUMENT,
  RAW_BOOLEAN,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_OBJECT,
  RAW_EVENT_KEYDOWN,
  RAW_EVENT_KEYPRESS,
  RAW_EVENT_KEYUP,
  RAW_SIZE_COMMON,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_ERROR,
  RAW_TYPE_WARNING,
  RAW_DEFAULT,
  RAW_SMALL,
  RAW_LARGE,
} from '../constant'

import {
  oneOf,
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

  propTypes: {
    value: {
      type: RAW_STRING,
    },
    size: {
      type: oneOf(RAW_SIZE_COMMON),
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
      value: FALSE,
    },
    wrap: {
      type: oneOf(['hard', 'soft']),
    },
    autoFocus: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    spellCheck: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    readOnly: {
      type: RAW_BOOLEAN,
      value: FALSE,
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
      type: RAW_STRING,
    },
  },

  data() {
    return {
      isSecure: TRUE,
      isFocus: FALSE,
    }
  },

  watchers: {
    value(value) {
      this.fire(
        'change.input',
        { value }
      )
    },
  },

  methods: {
    handleFocus() {
      this.set('isFocus', TRUE)
      this.fire('focus.input')
    },
    handleBlur() {
      this.set('isFocus', FALSE)
      this.fire('blur.input')
    },
  },

  computed: {
    textareaStyle() {

      let size = this.get('size')
      let autoSize = this.get('autoSize')

      // 单行的高度
      const ROW_HEIGHT = fontSizes[size] * 1.5

      // 上下 padding + border
      const PADDING_VERTICAL = 2 * (1 + sizes[size])

      if (autoSize) {
        let rows = this.get('rows')
        let value = this.get('value')
        if (Yox.is.object(autoSize)) {
          rows = value ? value.split('\n').length : autoSize.minRows
          return `min-height: ${autoSize.minRows * ROW_HEIGHT + PADDING_VERTICAL}px;max-height: ${autoSize.maxRows * ROW_HEIGHT + PADDING_VERTICAL}px;height: ${rows * ROW_HEIGHT + PADDING_VERTICAL}px;`
        }

        rows = value ? value.split('\n').length : 1
        return `min-height: ${ROW_HEIGHT + PADDING_VERTICAL}px;height: ${rows * ROW_HEIGHT + PADDING_VERTICAL}px;`
      }

      return `height: ${this.get('rows') * ROW_HEIGHT + PADDING_VERTICAL}px;`

    }
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
        me.fire('enter.input')
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

    me.on(
      'beforeDestroy.hook',
      function (event) {
        if (event.phase === Yox.Event.PHASE_CURRENT) {
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
        }
      }
    )

  }
})
