import Yox from 'yox'

import Icon from '../icon/Icon'
import template from './template/CollapseItem.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMBER,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  findComponentUpward,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}CollapseItem',

  propTypes: {
    title: {
      type: RAW_STRING,
      required: TRUE,
    },
    name: {
      type: [RAW_STRING, RAW_NUMBER],
      required: TRUE,
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  data(options) {

    const collapse = findComponentUpward(options.parent, '${prefix}Collapse')

    let opened = FALSE

    if (collapse) {
      let name = this.get('name')
      let value = collapse.get('value')

      opened = Yox.is.array(value)
        ? Yox.array.has(value, name, FALSE)
        : value == name
    }

    return {
      opened,
    }
  },

  events: {
    change: {
      listener(event, data) {

        // 只接收父级事件，再上一级的就不管了
        // 避免嵌套面板的问题
        if (event.target !== this.$parent) {
          return
        }

        const name = this.get('name')

        this.set(
          'opened',
          Yox.is.array(data.value)
            ? Yox.array.has(data.value, name, FALSE)
            : data.value == name
        )

      },
      ns: 'collapse',
    }
  },

  methods: {
    click() {
      this.fire(
        {
          type: 'open',
          ns: 'collapseItem',
        },
        {
          name: this.get('name'),
          opened: !this.get('opened'),
        }
      )
    },
  },

  components: {
    Icon,
  }

})