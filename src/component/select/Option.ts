import Yox from 'yox'

import template from './template/Option.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_NUMBER,
  RAW_BOOLEAN,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  findComponentUpward,
} from '../util'

import {
  isOptionSelected,
} from './util'

export default Yox.define({

  template,

  name: '${prefix}Option',

  propTypes: {
    value: {
      type: [RAW_STRING, RAW_NUMBER],
      required: TRUE,
    },
    text: {
      type: RAW_STRING,
      required: TRUE,
    },
    disabled: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  data(options) {

    const select = findComponentUpward(options.parent, '${prefix}Select')

    const props = options.props || {}

    return {
      isSelected: select
        ? isOptionSelected(select.get('value'), props.value)
        : FALSE
    }
  },

  events: {
    change: {
      listener(_, data) {
        this.set({
          isSelected: isOptionSelected(data.value, this.get('value'))
        })
      },
      ns: 'select'
    }
  },

  methods: {
    onClick() {
      this.fire(
        {
          type: 'update',
          ns: 'option',
        },
        {
          isSelected: TRUE,
          value: this.get('value'),
        }
      )
    }
  }

})
