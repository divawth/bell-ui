import Yox from 'yox'

import template from './template/Tag.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

export default Yox.create({
  propTypes: {
    size: {
      type: RAW_STRING,
      value: 'small'
    },
    closable: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    border: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    dot: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    type: {
      type: RAW_STRING
    },
    checkable: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    checked: {
      type: RAW_BOOLEAN,
      value: TRUE
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },
  template,

  watchers: {
    checked(value) {
      this.fire(
        'change.tag',
        {
          value: value
        }
      )
    }
  },

  methods: {
    click() {
      if (!this.get('checkable')) {
        return
      }
      this.toggle('checked')
    },
    close() {
      this.fire('close.tag')
    }
  }
})
