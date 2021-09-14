import Yox, { CustomEventInterface, YoxInterface } from 'yox'

import template from './template/InputNumber.hbs'
// import './style/InputNumber.styl'

import Icon from '../icon/Icon'
import Input from '../input/Input'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_SIZE_ARRAY,
  RAW_DEFAULT,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_ERROR,
  RAW_TYPE_WARNING,
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
    showButton: {
      type: RAW_BOOLEAN,
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
    customClassName(): string {
      const classNames = ['${prefix}input-number']
      const className = this.get('className')
      if (className) {
        classNames.push(className)
      }
      return classNames.join(' ')
    },
    upDisabled(): boolean {
      if (this.get('disabled') || this.get('readOnly')) {
        return TRUE
      }
      const max = toNumber(this.get('max'), FALSE)
      return max !== FALSE
        && max - this.get('value') < this.get('step')
    },
    downDisabled(): boolean {
      if (this.get('disabled') || this.get('readOnly')) {
        return TRUE
      }
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
    handleFocus(event: CustomEventInterface) {
      event.stop()
      this.set('isFocus', TRUE)
      this.fire({
        type: 'focus',
        ns: 'inputNumber',
      })
    },
    handleBlur(event: CustomEventInterface) {
      event.stop()
      this.set('isFocus', FALSE)
      this.fire('update')
      this.fire({
        type: 'blur',
        ns: 'inputNumber',
      })
    },
    handleEnter(event: CustomEventInterface) {
      event.stop()
      this.fire('update')
      this.fire({
        type: 'enter',
        ns: 'inputNumber',
      })
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
    Input,
  },

  afterMount() {

    const inputElement = (this.$refs.input as YoxInterface).$refs.input as HTMLInputElement

    this.watch(
      'inputStringValue',
      function (value) {
        inputElement.value = value
      },
      TRUE
    )

    this
    .on(
      'input',
      function (event: CustomEventInterface) {

        event.stop()

        const inputStringValue = inputElement.value
        const oldValue = this.get('value')

        this.updateInputValue(inputStringValue)

        const newValue = this.get('value')

        if (newValue !== oldValue) {
          this.fireChange(newValue)
        }

      }
    )
    .on(
      'update',
      function (event: CustomEventInterface) {

        event.stop()

        const value = this.get('value')

        if (Yox.is.numeric(value)) {
          return
        }

        // input 控件如果输入了非数字值，会自动变成 ''
        // 因此，当读值为 '' 时，需强制设值一次
        const inputStringValue = this.get('inputStringValue')
        if (!inputStringValue) {
          inputElement.value = ''
        }

        const newValue = ''

        this.updateInputValue(newValue)

        if (newValue !== value) {
          this.fireChange(newValue)
        }

      }
    )
    .on(
      'up',
      function (event: CustomEventInterface) {

        // 阻止事件默认行为，避免光标的跳动
        event.prevent()
        event.stop()

        inputElement.stepUp()
        this.fire('input')

      }
    )
    .on(
      'down',
      function (event: CustomEventInterface) {

        // 阻止事件默认行为，避免光标的跳动
        event.prevent()
        event.stop()

        inputElement.stepDown()
        this.fire('input')

      }
    )

  }
})
