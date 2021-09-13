import Yox, { Listener } from 'yox'

import template from './template/InputNumber.hbs'
// import './style/InputNumber.styl'

import Icon from '../icon/Icon'

import {
  TRUE,
  FALSE,
  DOCUMENT,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_SIZE_ARRAY,
  RAW_DEFAULT,
  RAW_EVENT_KEYDOWN,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_ERROR,
  RAW_TYPE_WARNING,
  RAW_EVENT_BEFORE_DESTROY,
} from '../constant'

import {
  oneOf,
  toNumber,
  toString,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}InputNumber',

  propTypes: {
    status: {
      type: oneOf([RAW_TYPE_INFO, RAW_TYPE_SUCCESS, RAW_TYPE_ERROR, RAW_TYPE_WARNING]),
    },
    size: {
      type: oneOf(RAW_SIZE_ARRAY),
      value: RAW_DEFAULT,
    },
    max: {
      type: RAW_NUMERIC,
    },
    min: {
      type: RAW_NUMERIC,
    },
    value: {
      type: RAW_NUMERIC,
    },
    step: {
      type: RAW_NUMERIC,
      value: 1,
    },
    editable: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    showButton: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    autoFocus: {
      type: RAW_BOOLEAN,
    },
    readOnly: {
      type: RAW_BOOLEAN,
    },
    disabled: {
      type: RAW_BOOLEAN,
    },
    block: {
      type: RAW_BOOLEAN,
    },
    placeholder: {
      type: RAW_STRING,
    },
    width: {
      type: RAW_NUMERIC,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data(options) {
    const props = options.props || {}
    return {
      isFocus: FALSE,
      inputStringValue: toString(props.value),
    }
  },

  computed: {
    upDisabled(): boolean {
      const max = toNumber(this.get('max'), FALSE)
      return max !== FALSE
        && max - this.get('value') < this.get('step')
    },
    downDisabled(): boolean {
      const min = toNumber(this.get('min'), FALSE)
      return min !== FALSE
        && this.get('value') - min < this.get('step')
    }
  },

  watchers: {
    value(value) {
      if (this.get('isFocus')) {
        return
      }
      this.updateInputValue(value)
    },
  },

  methods: {
    handleUpClick() {
      const inputElement = this.$refs.input as HTMLInputElement
      inputElement.stepUp()
      this.handleInput()
    },
    handleDownClick() {
      const inputElement = this.$refs.input as HTMLInputElement
      inputElement.stepDown()
      this.handleInput()
    },
    handleFocus() {
      this.set('isFocus', TRUE)
      this.fire({
        type: 'focus',
        ns: 'inputNumber',
      })
    },
    handleBlur() {
      this.set('isFocus', FALSE)
      this.fire({
        type: 'blur',
        ns: 'inputNumber',
      })
    },
    handleEnterPress() {
      this.fire({
        type: 'enter',
        ns: 'inputNumber',
      })
      this.handleChange()
    },
    handleInput() {

      const inputElement = this.$refs.input as HTMLInputElement
      const inputStringValue = inputElement.value

      const oldValue = this.get('value')

      this.updateInputValue(inputStringValue)

      const newValue = this.get('value')

      if (newValue !== oldValue) {
        this.fireChange(newValue)
      }

    },
    handleChange() {

      const value = this.get('value')

      if (Yox.is.numeric(value)) {
        return
      }

      const newValue = ''

      this.updateInputValue(newValue)

      if (newValue !== value) {
        this.fireChange(newValue)
      }

    },

    updateInputValue(value: any) {
      this.set({
        inputStringValue: toString(value),
        value: toNumber(value, value),
      })
    },

    fireChange(value) {
      this.fire(
        {
          type: 'change',
          ns: 'inputNumber',
        },
        {
          value,
        }
      )
    }

  },

  components: {
    Icon,
  },

  afterMount() {

    const me = this

    const inputElement = me.$refs.input as HTMLInputElement

    me.watch(
      'inputStringValue',
      function (value) {
        inputElement.value = value
      },
      TRUE
    )

    const onKeydown: Listener = function (event) {
      if (!me.get('isFocus')) {
        return
      }
      // 阻止事件默认行为，避免光标的跳动
      switch ((event.originalEvent as KeyboardEvent).keyCode) {
        case 13:
          me.handleEnterPress()
          break
        case 38:
          me.handleUpClick()
          event.prevent()
          break
        case 40:
          me.handleDownClick()
          event.prevent()
          break
      }
    }

    Yox.dom.on(
      DOCUMENT,
      RAW_EVENT_KEYDOWN,
      onKeydown
    )

    const onDestroy = function (component) {
      if (component === me) {
        Yox.dom.off(DOCUMENT, RAW_EVENT_KEYDOWN, onKeydown)
        Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, onDestroy)
      }
    }
    Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, onDestroy)

  }
})
