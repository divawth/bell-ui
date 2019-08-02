import Yox, { Listener } from 'yox'

import template from './template/Input.hbs'

import {
  TRUE,
  FALSE,
  DOCUMENT,
  RAW_BOOLEAN,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_OBJECT,
} from '../constant'

import {
  oneOf,
} from '../util'

const TEXT_TYPE_PASSWORD = 'password'
const TEXT_TYPE_TEXTAREA = 'textarea'
const TEXT_TYPE_TEXT = 'text'
const ROW_HEIGHT = 22

export default Yox.define({
  propTypes: {
    value: {
      type: RAW_STRING,
    },
    size: {
      type: RAW_STRING,
    },
    search: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    enterButton: {
      type: [ RAW_BOOLEAN, RAW_STRING ],
    },
    autoSize: {
      type: [ RAW_BOOLEAN, RAW_OBJECT ],
    },
    type: {
      type: RAW_STRING,
      value: 'text',
    },
    status: {
      type: RAW_STRING,
    },
    placeholder: {
      type: RAW_STRING,
    },
    rows: {
      type: RAW_NUMERIC,
      value: 2
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    clearable: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    secure: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    prefix: {
      type: RAW_STRING,
    },
    suffix: {
      type: RAW_STRING,
    },
    autoComplete: {
      type: oneOf(['on', 'off']),
    },
    wrap: {
      type: oneOf(['hard', 'soft']),
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
    style: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    }
  },

  template,

  data() {
    return {
      isSecure: TRUE,
      isFocus: FALSE,
      currentType: this.get('type'),

      TEXT_TYPE_TEXT,
      TEXT_TYPE_TEXTAREA,
      TEXT_TYPE_PASSWORD,
    }
  },

  filters: {
    isBoolean: Yox.is.boolean
  },

  watchers: {
    value(value) {
      this.fire(
        'change.input',
        { value }
      )
    },
    isSecure(isSecure) {
      this.set({
        currentType: isSecure
          ? TEXT_TYPE_PASSWORD
          : TEXT_TYPE_TEXT
      })
    }
  },

  methods: {
    focus() {
      this.set('isFocus', TRUE)
      this.fire('focus.input')
    },
    blur() {
      this.set('isFocus', FALSE)
      this.fire('blur.input')
    },
    clear() {
      this.set('value', '')
      this.fire('clear.input')
    },
    search() {
      this.fire(
        'search.input',
        {
          value: this.get('value')
        }
      )
    }
  },

  computed: {
    textareaStyle() {
      let size = this.get('autoSize')
      if (size) {
        let minRows = 2
        let maxRows = 2
        let rows = 2
        let value = this.get('value')
        if (Yox.is.object(size)) {
          minRows = size.minRows
          maxRows = size.maxRows
          rows = value ? value.split('\n').length : minRows
          return `min-height: ${minRows * ROW_HEIGHT}px;max-height: ${maxRows * ROW_HEIGHT}px;height: ${rows * ROW_HEIGHT}px;`
        }
        else {
          rows = value ? value.split('\n').length : minRows
          return `min-height: ${minRows * ROW_HEIGHT}px;height: ${rows * ROW_HEIGHT}px;`
        }
      }
      else {
        return `height: ${this.get('rows') * ROW_HEIGHT}px;`
      }
    }
  },

  afterMount() {

    const me = this

    const onKeydown: Listener = function (event) {
      if (!me.get('isFocus')) {
        return
      }
      me.fire('keydown.input')
      if ((event.originalEvent as KeyboardEvent).keyCode === 13) {
        me.fire('enter.input')
      }
    }
    const onKeyup: Listener = function (event) {
      if (!me.get('isFocus')) {
        return
      }
      me.fire('keyup.input')
    }
    const onKeypress: Listener = function (event) {
      if (!me.get('isFocus')) {
        return
      }
      me.fire('keypress.input')
    }

    Yox.dom.on(
      DOCUMENT,
      'keydown',
      onKeydown
    )
    Yox.dom.on(
      DOCUMENT,
      'keyup',
      onKeyup
    )
    Yox.dom.on(
      DOCUMENT,
      'keypress',
      onKeypress
    )

    me.on(
      'beforeDestroy.hook',
      function (event) {
        if (event.phase === Yox.Event.PHASE_CURRENT) {
          Yox.dom.off(
            DOCUMENT,
            'keydown',
            onKeydown
          )
          Yox.dom.off(
            DOCUMENT,
            'keyup',
            onKeyup
          )
          Yox.dom.off(
            DOCUMENT,
            'keypress',
            onKeypress
          )
        }
      }
    )

  }
})
