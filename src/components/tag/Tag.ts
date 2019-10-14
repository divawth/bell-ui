import Yox from 'yox'

import Icon from '../icon/Icon'
import template from './template/Tag.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_SIZE_COMMON,
  RAW_TYPE_ARRAY,
  RAW_DEFAULT,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  model: 'checked',

  name: '${prefix}tag',

  propTypes: {
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
    },
    size: {
      type: oneOf(RAW_SIZE_COMMON),
      value: RAW_DEFAULT,
    },
    checkable: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    closable: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    checked: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    color: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  watchers: {
    checked(checked) {
      this.fire(
        'change.tag',
        {
          checked,
        }
      )
    }
  },

  components: {
    Icon,
  }

})
