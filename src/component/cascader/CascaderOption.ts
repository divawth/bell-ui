import Yox, { CustomEventInterface, Data } from 'yox'

import template from './template/CascaderOption.hbs'

import Icon from '../icon/Icon'
import Checkbox from '../checkbox/Checkbox'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_NUMBER,
  RAW_BOOLEAN,
  RAW_OBJECT,
  RAW_ARRAY,
} from '../constant'

import {
  isLeafOption,
} from './util'

export default Yox.define({

  template,

  name: '${prefix}CascaderOption',

  propTypes: {
    level: {
      type: RAW_NUMBER,
      required: TRUE,
    },
    index: {
      type: RAW_NUMBER,
      required: TRUE,
    },
    option: {
      type: RAW_OBJECT,
      required: TRUE,
    },
    checkable: {
      type: RAW_BOOLEAN,
    },
    selectedValue: {
      type: [RAW_STRING, RAW_NUMBER],
      required: TRUE,
    },
    checkedValues: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    indeterminateValues: {
      type: RAW_ARRAY,
      required: TRUE,
    },
  },

  computed: {
    interactive() {
      return !this.get('option.disabled') && !this.get('option.isLoading')
    },
    selected() {
      return this.get('option.value') == this.get('selectedValue')
    },
    checked() {
      if (this.get('indeterminate')) {
        return FALSE
      }
      return Yox.array.has(
        this.get('checkedValues'),
        this.get('option.value')
      )
    },
    indeterminate() {
      return Yox.array.has(
        this.get('indeterminateValues'),
        this.get('option.value')
      )
    },
  },

  methods: {
    onClick() {

      const option = this.get('option')
      const level = this.get('level')

      const options: any[] = []
      const values: any[] = []
      options[level] = option
      values[level] = option.value

      this.fire(
        {
          type: 'select',
          ns: 'cascaderOption'
        },
        {
          options,
          values,
          level,
          checked: this.get('checked'),
          index: this.get('index'),
          isLeaf: isLeafOption(option),
        }
      )

    },
    onCheckboxChange(event: CustomEventInterface, data: Data) {

      event.stop()

      const option = this.get('option')
      const level = this.get('level')

      const options: any[] = []
      const values: any[] = []
      options[level] = option
      values[level] = option.value

      this.fire(
        {
          type: 'check',
          ns: 'cascaderOption'
        },
        {
          options,
          values,
          level,
          checked: data.checked,
        }
      )

    }
  },

  components: {
    Icon,
    Checkbox,
  }

})
