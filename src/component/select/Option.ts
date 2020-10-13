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

function isOptionSelected(values: any[] | any, value: any) {
  return Yox.is.array(values)
    ? Yox.array.has(values, value, FALSE)
    : values == value
}

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

  events: {
    change: {
      listener(_, data) {

        const { value, selectedOptions } = data
  
        const isSelected = isOptionSelected(value, this.get('value'))
  
        this.set('isSelected', isSelected)
  
        if (isSelected) {
          selectedOptions.push({
            text: this.getText(),
            value: this.get('value')
          })
        }
      },
      ns: 'select',
    },
  },

  methods: {
    clickOption(): void {
      this.fireEvent(TRUE)
    },
    getText(): string {
      return this.get('text') || Yox.dom.text(this.$el)
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
  },

  afterMount() {
    this.fireEvent(this.get('isSelected'))
  },

  beforeDestroy() {
    this.fireEvent(FALSE)
  }

})
