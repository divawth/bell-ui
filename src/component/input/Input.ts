import Yox, { CustomEventInterface } from 'yox'

import template from './template/Input.hbs'
// import './style/Input.styl'

import Icon from '../icon/Icon'

import {
  TRUE,
  FALSE,
  DOCUMENT,
  RAW_BOOLEAN,
  RAW_STRING,
  RAW_NUMBER,
  RAW_NUMERIC,
  RAW_EVENT_KEYDOWN,
  RAW_EVENT_KEYPRESS,
  RAW_EVENT_KEYUP,
  RAW_SIZE_ARRAY,
  RAW_DEFAULT,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_ERROR,
  RAW_TYPE_WARNING,
  RAW_EVENT_BEFORE_DESTROY,
} from '../constant'

import {
  oneOf,
} from '../util'

const TEXT_TYPE_PASSWORD = 'password'
const TEXT_TYPE_TEXT = 'text'

export default Yox.define({

  template,

  name: '${prefix}input',

  propTypes: {
    value: {
      type: [RAW_STRING, RAW_NUMBER],
    },
    size: {
      type: oneOf(RAW_SIZE_ARRAY),
      value: RAW_DEFAULT,
    },
    type: {
      type: oneOf([TEXT_TYPE_TEXT, TEXT_TYPE_PASSWORD]),
      value: TEXT_TYPE_TEXT,
    },
    status: {
      type: oneOf([RAW_TYPE_INFO, RAW_TYPE_SUCCESS, RAW_TYPE_ERROR, RAW_TYPE_WARNING]),
    },
    placeholder: {
      type: RAW_STRING,
    },
    block: {
      type: RAW_BOOLEAN,
      value: FALSE,
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
      currentType: this.get('type'),

      TEXT_TYPE_TEXT,
      TEXT_TYPE_PASSWORD,
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
        currentType: isSecure
          ? TEXT_TYPE_PASSWORD
          : TEXT_TYPE_TEXT
      })
    }
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
    handleClearClick() {
      this.set('value', '')
      this.fire('clear.input')
    },
  },

  components: {
    Icon,
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
      RAW_EVENT_BEFORE_DESTROY,
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
