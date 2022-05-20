import Yox from 'yox'

import template from './template/CascaderOptions.hbs'

import Icon from '../icon/Icon'

import {
  TRUE,
  UNDEFINED,
  RAW_NUMBER,
  RAW_ARRAY,
} from '../constant'

const CascaderOptions = Yox.define({

  template,

  name: '${prefix}CascaderOptions',

  propTypes: {
    index: {
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
  },

  computed: {
    currentValue() {
      return this.get('value')[this.get('index')]
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

  methods: {
    onClick(option: any) {
      this.fire(
        {
          type: 'click',
          ns: 'cascaderOptions',
        },
        {
          index: this.get('index'),
          option,
        }
      )
    }
  },

  components: {
    Icon,
  }

})

CascaderOptions.components.CascaderOptions = CascaderOptions

export default CascaderOptions