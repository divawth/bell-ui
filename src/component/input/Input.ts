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

  name: '${prefix}Input',

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
    },
    disabled: {
      type: RAW_BOOLEAN,
    },
    clearable: {
      type: RAW_BOOLEAN,
    },
    secure: {
      type: RAW_BOOLEAN,
    },
    prefix: {
      type: RAW_STRING,
    },
    suffix: {
      type: RAW_STRING,
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

  computed: {
    hasCount() {
      return this.get('showCount') && this.get('maxLength') > 0
    },
  },

  filters: {
    formatValueLength(value) {
      return value
        ? value.length
        : 0
    }
  },

  watchers: {
    value(value) {
      this.fire(
        {
          type: 'change',
          ns: 'input',
        },
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
      this.fire({
        type: 'focus',
        ns: 'input',
      })
    },
    handleBlur() {
      this.set('isFocus', FALSE)
      this.fire({
        type: 'blur',
        ns: 'input',
      })
    },
    handleClearClick() {
      this.set('value', '')
      this.fire({
        type: 'clear',
        ns: 'input',
      })
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

      switch (originalEvent.keyCode) {
        case 13:
          me.fire({
            type: 'enter',
            ns: 'input',
          })
          break

        case 38:
          // 避免光标跑到最前面
          event.prevent()
          me.fire({
            type: 'up',
            ns: 'input',
          })
          break

        case 40:
          // 避免光标跑到最后面
          event.prevent()
          me.fire({
            type: 'down',
            ns: 'input',
          })
          break
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
