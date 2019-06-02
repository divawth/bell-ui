import template from './template/Input.html'
import { RAW_BOOLEAN, RAW_STRING, RAW_NUMERIC, RAW_OBJECT } from '../constant'
import { oneOf } from '../util'

const TEXT_TYPE_PASSWORD = 'password'
const TEXT_TYPE_TEXTAREA = 'textarea'
const TEXT_TYPE_TEXT = 'text'
const ROWS_HEIGHT = 22

export default {
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
      isSecure: true,
      isFocus: false,
      currentType: this.get('type'),

      TEXT_TYPE_TEXT,
      TEXT_TYPE_TEXTAREA,
      TEXT_TYPE_PASSWORD,

      isBoolean(value) {
        return Yox.is.boolean(value)
      }
    }
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
        currentType: isSecure ? TEXT_TYPE_PASSWORD : TEXT_TYPE_TEXT
      })
    }
  },

  methods: {
    blur() {
      this.set('isFocus', false)
      this.fire('blur.input')
    },
    focus() {
      this.set('isFocus', true)
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

    let me = this
    me.documentKeydownHandler = function (event) {
      event = event.originalEvent
      if (me.$refs && event.target == me.$refs.input) {
        me.fire('keydown.input')
        if (event.keyCode === 13) {
          me.fire('enter.input')
        }
      }
    }
    me.documentKeyupHandler = function (event) {
      event = event.originalEvent
      if (me.$refs && event.target == me.$refs.input) {
        me.fire('keyup.input')
      }
    }
    me.documentKeypressHandler = function (event) {
      event = event.originalEvent
      if (me.$refs && event.target == me.$refs.input) {
        me.fire('keypress.input')
      }
    }
    Yox.dom.on(
      document,
      'keydown',
      me.documentKeydownHandler
    )
    Yox.dom.on(
      document,
      'keyup',
      me.documentKeyupHandler
    )
    Yox.dom.on(
      document,
      'keypress',
      me.documentKeypressHandler
    )
    
  },

  beforeDestroy() {
    Yox.dom.off(
      document,
      'keydown',
      this.documentKeydownHandler
    )
    Yox.dom.off(
      document,
      'keyup',
      this.documentKeyupHandler
    )
    Yox.dom.off(
      document,
      'keypress',
      this.documentKeypressHandler
    )
  }
}