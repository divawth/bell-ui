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
    },
    title: {
      type: RAW_STRING,
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

  computed: {
    innerTitle() {
      const title = this.get('title')
      if (title) {
        return title
      }
      const text = this.get('text')
      if (typeof text === 'string') {
        return text
      }
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
          type: 'click',
          ns: 'option',
        },
        {
          value: this.get('value'),
        }
      )
    }
  }

})
