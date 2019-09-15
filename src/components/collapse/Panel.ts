import Yox from 'yox'

import template from './template/Panel.hbs'

import {
  NULL,
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
} from '../constant'

import {
  findComponentUpward,
} from '../util'

export default Yox.define({

  template,

  propTypes: {
    title: {
      type: RAW_STRING,
    },
    name: {
      type: RAW_NUMERIC,
    },
    active: {
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

  data(options) {
    const collapse = findComponentUpward(options.parent, '${prefix}collapse')
    return {
      opened: FALSE,
      accordion: collapse
        ? collapse.get('accordion')
        : FALSE
    }
  },

  events: {
    'accordion.collapse': function (_, data) {
      this.set({
        accordion: data.accordion,
      })
    },
    'open.collapse': function (_, data) {
      const me = this
      if (data.name === me.get('name')) {
        me.set('opened', data.opened)
      }
      else if (data.opened && me.get('accordion')) {
        me.set('opened', FALSE)
      }
    }
  },

  methods: {
    click() {
      this.fire(
        'open.panel',
        {
          name: this.get('name'),
          opened: !this.get('opened'),
        }
      )
    },
  },

  afterMount() {
    this.watch(
      'active',
      {
        watcher(active: boolean) {
          if (active == NULL) {
            return
          }
          this.fire(
            'open.panel',
            {
              name: this.get('name'),
              opened: active,
            }
          )
        },
        immediate: TRUE,
      }
    )
  }
})