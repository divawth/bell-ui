import Yox from 'yox'

import template from './template/Option.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_NUMBER,
  RAW_BOOLEAN,
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
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    text: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
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

  watchers: {
    isSelected(isSelected) {
      this.fireEvent(isSelected)
    }
  },

  methods: {
    handleClick(): void {
      this.fireEvent(TRUE)
    },
    getText(): string {
      return this.get('text') || Yox.dom.getText(this.$el)
    },
    fireEvent(isSelected: boolean) {
      this.fire(
        {
          type: 'update',
          ns: 'selectOption',
        },
        {
          isSelected,
          value: this.get('value'),
        }
      )
    }
  }

})
