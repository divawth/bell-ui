import Yox from 'yox'

import template from './template/Dialog.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

import {
  onTransitionEnd,
} from '../util'

const CLASS_OPEN = '${prefix}dialog-open'
const CLASS_LEAVE = '${prefix}dialog-leave'

export default Yox.create({
  propTypes: {
    title: {
      type: RAW_STRING,
      value: '温馨提示'
    },
    open: {
      type: RAW_BOOLEAN
    },
    closable: {
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

  model: 'open',

  watchers: {
    open(isOpen) {
      const element = this.$el
      if (isOpen) {
        Yox.dom.addClass(element, CLASS_OPEN)
      }
      else {
        Yox.dom.addClass(element, CLASS_LEAVE)
        onTransitionEnd(
          element,
          function () {
            Yox.dom.removeClass(element, CLASS_OPEN)
            Yox.dom.removeClass(element, CLASS_LEAVE)
          }
        )
      }
    }
  },

  methods: {
    close() {
      this.set('open', FALSE)
    }
  },

  afterMount() {
    Yox.dom.append(document.body, this.$el)
  },

  beforeDestroy() {
    Yox.dom.remove(document.body, this.$el)
  }
})
