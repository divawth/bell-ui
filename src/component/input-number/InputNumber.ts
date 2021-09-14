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

import {
  isHelper,
  isDot,
  isMinus,
  isNumber,
} from './util'

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
    precision: {
      type: RAW_NUMERIC,
    },
    showStep: {
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
      isComposition: FALSE,
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
    customPrecision(): number {
      return toNumber(
        this.get('precision'),
        -1
      )
    },
    customMin(): number {
      return toNumber(
        this.get('min'),
        Number.MIN_VALUE
      )
    },
    customMax(): number {
      return toNumber(
        this.get('max'),
        Number.MAX_VALUE
      )
    },
    upDisabled(): boolean {
      if (this.get('disabled') || this.get('readOnly')) {
        return TRUE
      }
      return this.get('customMax') - this.get('value') < this.get('step')
    },
    downDisabled(): boolean {
      if (this.get('disabled') || this.get('readOnly')) {
        return TRUE
      }
      return this.get('value') - this.get('customMin') < this.get('step')
    }
  },

  watchers: {
    value(value) {
      this.updateInputValue(value)
    },
  },

  methods: {

    handleFocus(event: CustomEventInterface) {
      event.stop()
      this.fire({
        type: 'focus',
        ns: 'inputNumber',
      })
    },
    handleBlur(event: CustomEventInterface) {
      event.stop()
      this.correctValue()
      this.fire({
        type: 'blur',
        ns: 'inputNumber',
      })
    },
    handleInput(event: CustomEventInterface) {
      event.stop()
      if (this.get('isComposition')) {
        return
      }
      this.changeValue()
    },
    handleKeydown(event: CustomEventInterface) {
      event.stop()

      if (this.get('isComposition')) {
        return
      }

      const { metaKey, ctrlKey, shiftKey, keyCode } = event.originalEvent as KeyboardEvent
      // 组合键可放行
      if (metaKey || ctrlKey || shiftKey || isHelper(keyCode)) {
        return
      }

      // 在这控制一些非法字符，可以避免光标因为重置 value 而跳到最后的问题

      const textInputElement = this.getTextInput()

      const isFirstChar = textInputElement.selectionStart === textInputElement.selectionEnd
        && textInputElement.selectionStart === 0

      const inputStringValue = this.get('inputStringValue')

      if (isFirstChar) {
        if (inputStringValue.indexOf('-') < 0) {
          // 第一个字符，只能输入 - 和 数字
          if (isNumber(keyCode) || isMinus(keyCode)) {
            return
          }
        }
        event.prevent()
      }
      else {
        const dotIndex = inputStringValue.indexOf('.')

        // 不在首位时，只能输入 . 和数字
        if (isNumber(keyCode)) {
          const customPrecision = this.get('customPrecision')
          const precisionLength = dotIndex > 0 ? inputStringValue.substr(dotIndex + 1).length : 0
          if (customPrecision >= 0 && precisionLength >= customPrecision) {
            event.prevent()
          }
        }
        else if (isDot(keyCode)) {
          if (dotIndex > 0) {
            event.prevent()
          }
        }
        else {
          event.prevent()
        }
      }

    },
    handleKeyup(event: CustomEventInterface) {
      event.stop()
    },
    handleEnter(event: CustomEventInterface) {
      event.stop()
      this.correctValue()
      this.fire({
        type: 'enter',
        ns: 'inputNumber',
      })
    },
    handleUp(event: CustomEventInterface) {
      event.stop()

      if (this.get('isComposition')) {
        return
      }

      const numberInputElement = this.getNumberInput()

      numberInputElement.stepUp()
      this.getTextInput().value = numberInputElement.value

      this.changeValue()

    },
    handleDown(event: CustomEventInterface) {
      event.stop()

      if (this.get('isComposition')) {
        return
      }

      const numberInputElement = this.getNumberInput()

      numberInputElement.stepDown()
      this.getTextInput().value = numberInputElement.value

      this.changeValue()

    },
    handleCompositionStart(event: CustomEventInterface) {
      event.stop()
      this.set('isComposition', TRUE)
    },
    handleCompositionEnd(event: CustomEventInterface) {
      event.stop()
      this.set('isComposition', FALSE)
      this.getTextInput().value = this.get('inputStringValue')
    },

    updateInputValue(value: any) {
      this.set({
        inputStringValue: toString(value),
        value: toNumber(value, value),
      })
    },

    changeValue() {

      const textInputElement = this.getTextInput()

      const oldStringValue = this.get('inputStringValue')
      const newStringValue = textInputElement.value

      if (newStringValue !== oldStringValue
        && newStringValue
        && newStringValue !== '-'
        && toNumber(newStringValue, FALSE) === FALSE
      ) {
        // 输入了错误字符
        textInputElement.value = oldStringValue
        return
      }

      const oldValue = this.get('value')

      this.updateInputValue(newStringValue)

      const newValue = this.get('value')

      if (newValue !== oldValue) {
        this.fireChange(newValue)
      }

    },

    correctValue() {

      const value = this.get('value')

      let newValue = ''

      if (Yox.is.number(value)) {
        const min = this.get('customMin')
        const max = this.get('customMax')
        if (value < min) {
          newValue = min
        }
        else if (value > max) {
          newValue = max
        }
        else {
          return
        }
      }

      this.updateInputValue(newValue)

      if (newValue !== value) {
        this.fireChange(newValue)
      }

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
    },

    getTextInput() {
      return (this.$refs.input as YoxInterface).$refs.input as HTMLInputElement
    },

    getNumberInput() {
      return this.$refs.numberInput as HTMLInputElement
    }

  },

  components: {
    Icon,
    Input,
  },

  afterMount() {

    this.watch(
      'inputStringValue',
      function (value) {
        this.getTextInput().value = value
        this.getNumberInput().value = value
      },
      TRUE
    )

  }
})
