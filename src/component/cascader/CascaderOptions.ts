import Yox from 'yox'

import template from './template/CascaderOptions.hbs'

import Icon from '../icon/Icon'
import CascaderOption from './CascaderOption'

import {
  TRUE,
  UNDEFINED,
  RAW_ARRAY,
  RAW_NUMBER,
  RAW_BOOLEAN,
  RAW_FUNCTION,
} from '../constant'

const CascaderOptions = Yox.define({

  template,

  name: '${prefix}CascaderOptions',

  propTypes: {
    level: {
      type: RAW_NUMBER,
      required: TRUE,
    },
    options: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    multiple: {
      type: RAW_BOOLEAN,
    },
    loadData: {
      type: RAW_FUNCTION,
    },
    loadingValues: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    checkedValues: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    selectedValues: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    indeterminateValues: {
      type: RAW_ARRAY,
      required: TRUE,
    },
  },

  computed: {
    currentLoadingValues() {

      const result: any[] = []

      const loadingValues = this.get('loadingValues')
      const level = this.get('level')

      Yox.array.each(
        loadingValues,
        function (values: any[]) {
          if (values.length === level + 1) {
            result.push(values[level])
          }
        }
      )

      return result

    },
    currentCheckedValues() {

      const result: any[] = []

      const checkedValues = this.get('checkedValues')
      const level = this.get('level')

      Yox.array.each(
        checkedValues,
        function (values: any[]) {
          if (values.length === level + 1) {
            result.push(values[level])
          }
        }
      )

      return result

    },
    currentIndeterminateValues() {

      const result: any[] = []

      const indeterminateValues = this.get('indeterminateValues')
      const level = this.get('level')

      Yox.array.each(
        indeterminateValues,
        function (values: any[]) {
          const value = values[level]
          if (!Yox.array.has(indeterminateValues, value)) {
            result.push(value)
          }
        }
      )

      return result

    },
    currentSelectedValue() {
      const level = this.get('level')
      return this.get(`selectedValues.${level}`)
    },
    currentSelectedOption: {
      deps: ['options.length', 'options.*.value', 'currentLoadingValues', 'currentSelectedValue'],
      get() {
        const currentSelectedValue = this.get('currentSelectedValue')
        if (currentSelectedValue !== UNDEFINED) {
          const options = this.get('options')
          for (let i = 0, len = options.length; i < len; i++) {
            if (options[i].value == currentSelectedValue) {
              return options[i]
            }
          }
        }
      }
    }
  },

  events: {
    loadingStart: {
      listener(_, data) {
        // @ts-ignore
        this.addLevelInfoIfNeeded(data)
      },
      ns: 'cascaderOption'
    },
    loadingEnd: {
      listener(_, data) {
        // @ts-ignore
        this.addLevelInfoIfNeeded(data)
      },
      ns: 'cascaderOption'
    },
    select: {
      listener(_, data) {
        // @ts-ignore
        this.addLevelInfoIfNeeded(data)
      },
      ns: 'cascaderOption'
    },
    check: {
      listener(_, data) {
        // @ts-ignore
        this.addLevelInfoIfNeeded(data)
      },
      ns: 'cascaderOption'
    }
  },

  methods: {
    addLevelInfoIfNeeded(data: Record<string, any>) {
      const level = this.get('level')
      if (data.level !== level) {
        const currentSelectedOption = this.get('currentSelectedOption')
        if (currentSelectedOption) {
          data.options[level] = currentSelectedOption
          data.values[level] = currentSelectedOption.value
        }
        return TRUE
      }
    }
  },

  components: {
    Icon,
    CascaderOption,
  }

})

CascaderOptions.components.CascaderOptions = CascaderOptions

export default CascaderOptions