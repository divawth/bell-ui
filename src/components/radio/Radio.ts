import Yox from 'yox'

import template from './template/Radio.hbs'

import {
  TRUE,
  FALSE,
  UNDEFINED,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_TYPE_ARRAY,
  RAW_DEFAULT,
  RAW_TYPE_PRIMARY,
  RAW_SIZE_COMMON,
} from '../constant'

import {
  oneOf,
  findComponentUpward,
} from '../util'

export default Yox.define({

  template,

  model: 'checked',

  propTypes: {
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
    },
    size: {
      type: oneOf(RAW_SIZE_COMMON),
    },
    label: {
      type: RAW_STRING,
    },
    name: {
      type: RAW_STRING,
    },
    value: {
      type: [RAW_NUMERIC, RAW_BOOLEAN, RAW_STRING]
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    checked: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data() {
    return {
      isFocus: FALSE,
    }
  },

  events: {
    'change.radioGroup': function (_, data) {
      if (data.value !== UNDEFINED) {
        this.set('checked', data.value == this.get('value'))
      }
      if (data.disabled !== UNDEFINED) {
        this.set('disabled', data.disabled)
      }
    }
  },

  watchers: {
    checked(checked) {
      this.fire(
        'change.radio',
        {
          value: this.get('value'),
          checked,
        }
      )
    }
  },

  methods: {
    handleClick() {
      if (this.get('checked')) {
        return
      }
      this.set('checked', TRUE)
    },
    handleFocus() {
      this.set('isFocus', TRUE)
    },
    handleBlur() {
      this.set('isFocus', FALSE)
    }
  },

  beforeCreate(options) {

    const props = options.props || (options.props = {})

    const radioGroup = findComponentUpward(options.parent, '${prefix}radioGroup')
    if (radioGroup) {

      // 有 group，则 type 和 size 全听 group 的
      if (props.type !== UNDEFINED) {
        delete props.type
      }
      if (props.size !== UNDEFINED) {
        delete props.size
      }

      if (props.name === UNDEFINED) {
        props.name = radioGroup.get('name')
      }

      if (props.disabled === UNDEFINED) {
        props.disabled = radioGroup.get('disabled')
      }

      if (props.checked === UNDEFINED) {
        props.checked = radioGroup.get('value') == props.value
      }
    }
    else {
      // 没有 group，则要给 type 和 size 默认值
      if (props.type === UNDEFINED) {
        props.type = RAW_TYPE_PRIMARY
      }
      if (props.size === UNDEFINED) {
        props.size = RAW_DEFAULT
      }
    }

  }

})
