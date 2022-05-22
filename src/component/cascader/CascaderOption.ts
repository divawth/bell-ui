import Yox from 'yox'

import template from './template/CascaderOption.hbs'

import Icon from '../icon/Icon'
import Checkbox from '../checkbox/Checkbox'

import {
  TRUE,
  RAW_NUMBER,
  RAW_BOOLEAN,
  RAW_OBJECT,
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
    checked: {
      type: RAW_BOOLEAN,
    },
    checkable: {
      type: RAW_BOOLEAN,
    },
  },

  methods: {
    onClick() {
      const option = this.get('option')
      this.fire(
        {
          type: 'click',
          ns: 'cascaderOption'
        },
        {
          option,
          level: this.get('level'),
          index: this.get('index'),
          isLeaf: isLeafOption(option),
        }
      )
    }
  },

  components: {
    Icon,
    Checkbox,
  }

})
