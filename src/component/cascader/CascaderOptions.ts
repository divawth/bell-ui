import Yox from 'yox'

import template from './template/CascaderOptions.hbs'

import Icon from '../icon/Icon'
import CascaderOption from './CascaderOption'

import {
  TRUE,
  FALSE,
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
    value: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    multiple: {
      type: RAW_BOOLEAN,
    },
    loadData: {
      type: RAW_FUNCTION,
    },
  },

  computed: {
    currentValue() {
      return this.get('value')[this.get('level')]
    },
    nextOptions() {
      const options = this.get('options')
      const currentValue = this.get('currentValue')
      if (currentValue !== UNDEFINED) {
        for (let i = 0, len = options.length; i < len; i++) {
          if (options[i].value == currentValue) {
            return options[i].children
          }
        }
      }
    }
  },

  events: {
    click: {
      listener(_, data) {

        const me = this

        const { index, option } = data
        const loadData = me.get('loadData')

        if (loadData && !data.isLeaf && Yox.array.falsy(option.children)) {

          const setOptionProp = function (key: string, value: any) {
            const keypath = `options.${index}`
            const newOption = me.copy(me.get(keypath))
            newOption[key] = value
            me.set(keypath, newOption)
          }

          setOptionProp('isLoading', TRUE)

          loadData(option)
          .then(function (children: any[]) {
            if (children && children.length > 0) {
              setOptionProp('children', children)
            }
            else {
              setOptionProp('isLeaf', TRUE)
            }
          })
          .finally(function () {
            setOptionProp('isLoading', FALSE)
          })

        }

      },
      ns: 'cascaderOption'
    }
  },

  components: {
    Icon,
    CascaderOption,
  }

})

CascaderOptions.components.CascaderOptions = CascaderOptions

export default CascaderOptions