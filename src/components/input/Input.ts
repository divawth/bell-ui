import Yox, { Listener } from 'yox'

import template from './template/Input.hbs'

import {
  TRUE,
  FALSE,
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
const ROWS_HEIGHT = 22

export default Yox.define({
  propTypes: {
    value: {
      type: RAW_STRING
    },
    size: {
      type: RAW_STRING
    },
    search: {
      type: RAW_BOOLEAN
    },
    enterButton: {
      type: [ RAW_BOOLEAN, RAW_STRING ]
    },
    autoSize: {
      type: [ RAW_BOOLEAN, RAW_OBJECT ]
    },
    type: {
      type: RAW_STRING
    },
    status: {
      type: RAW_STRING
    },
    placeholder: {
      type: RAW_STRING
    },
    rows: {
      type: RAW_NUMERIC,
      value: 2
    },
    disabled: {
      type: RAW_BOOLEAN
    },
    clearable: {
      type: RAW_BOOLEAN
    },
    secure: {
      type: RAW_BOOLEAN
    },
    prefix: {
      type: RAW_STRING
    },
    suffix: {
      type: RAW_STRING
    },
    autocomplete: {
      type: oneOf([ 'on', 'off' ])
    },
    wrap: {
      type: oneOf([ 'hard', 'soft' ])
    },
    spellcheck: {
      type: RAW_BOOLEAN
    },
    readonly: {
      type: RAW_BOOLEAN
    },
    maxLength: {
      type: RAW_NUMERIC
    },
    style: {
      type: RAW_STRING
    },
    className: {
      type: RAW_STRING
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
    blur() {
      this.set('isFocus', FALSE)
      this.fire('blur.input')
    },
    focus() {
      this.set('isFocus', TRUE)
      this.fire('focus.input')
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
    textComputedStyle() {
      let size = this.get('autoSize')
      if (size) {
        let minRows = 2
        let maxRows = 2
        let height = 2
        if (Yox.is.object(size)) {
          minRows = size.minRows
          maxRows = size.maxRows
          height = this.get('value') ? this.get('value').split('\n').length : minRows
          return `min-height: ${minRows * ROWS_HEIGHT}px;max-height: ${maxRows * ROWS_HEIGHT}px;height: ${height * ROWS_HEIGHT}px;`
        }
        else {
          height = this.get('value') ? this.get('value').split('\n').length : minRows
          return `min-height: ${minRows * ROWS_HEIGHT}px;height: ${height * ROWS_HEIGHT}px;`
        }
      }
      else {
        return `height: ${this.get('rows') * ROWS_HEIGHT}px`
      }
    }
  },

  afterMount() {

    const me = this, doc = document

    const onKeydown: Listener = function (event) {
      const { originalEvent } = event
      if (me.$refs && originalEvent.target == me.$refs.input) {
        me.fire('keydown.input')
        if ((originalEvent as KeyboardEvent).keyCode === 13) {
          me.fire('enter.input')
        }
      }
    }
    const onKeyup: Listener = function (event) {
      const { originalEvent } = event
      if (me.$refs && originalEvent.target == me.$refs.input) {
        me.fire('keyup.input')
      }
    }
    const onKeypress: Listener = function (event) {
      const { originalEvent } = event
      if (me.$refs && originalEvent.target == me.$refs.input) {
        me.fire('keypress.input')
      }
    }

    Yox.dom.on(
      doc,
      'keydown',
      onKeydown
    )
    Yox.dom.on(
      doc,
      'keyup',
      onKeyup
    )
    Yox.dom.on(
      doc,
      'keypress',
      onKeypress
    )

    me.on(
      'beforeDestroy.hook',
      function () {
        Yox.dom.off(
          doc,
          'keydown',
          onKeydown
        )
        Yox.dom.off(
          doc,
          'keyup',
          onKeyup
        )
        Yox.dom.off(
          doc,
          'keypress',
          onKeypress
        )
      }
    )

  }
})
