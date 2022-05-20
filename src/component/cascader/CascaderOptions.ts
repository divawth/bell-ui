import Yox from 'yox'

import template from './template/CascaderOptions.hbs'

import Icon from '../icon/Icon'

import {
  TRUE,
  FALSE,
  UNDEFINED,
  RAW_ARRAY,
  RAW_NUMBER,
  RAW_FUNCTION,
} from '../constant'

import {
  isLeafOption,
} from './util'

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

  methods: {
    onClick(option: any, index: number) {

      const me = this
      const isLeaf = isLeafOption(option)

      me.fire(
        {
          type: 'click',
          ns: 'cascaderOptions',
        },
        {
          level: me.get('level'),
          index,
          option,
          isLeaf,
        }
      )

      const loadData = me.get('loadData')

      if (loadData && !isLeaf && Yox.array.falsy(option.children)) {

        const keypath = `options.${index}`

        me.set(`${keypath}.isLoading`, TRUE)

        loadData(option)
        .then(function (children: any[]) {
          if (children && children.length > 0) {
            me.set(`${keypath}.children`, children)
          }
          else {
            me.set(`${keypath}.isLeaf`, TRUE)
          }
        })
        .finally(function () {
          me.set(`${keypath}.isLoading`, FALSE)
        })
      }

    }
  },

  components: {
    Icon,
  }

})

CascaderOptions.components.CascaderOptions = CascaderOptions

export default CascaderOptions