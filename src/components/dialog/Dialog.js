import template from './template/Dialog.html'
import { RAW_STRING, RAW_BOOLEAN, TRUE } from '../constant'

export default {
  propTypes: {
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
      let element = this.$el
      if (isOpen) {
        Yox.dom.addClass(element, '${prefix}dialog-open')
      }
      else {
        Yox.dom.addClass(element, '${prefix}dialog-leave')
        setTimeout(
          function () {
            Yox.dom.removeClass(element, '${prefix}dialog-open')
            Yox.dom.removeClass(element, '${prefix}dialog-leave')
          },
          300
        )
      }
    }
  },

  methods: {
    maskClick: function () {
      this.set('open', false)
    },
    close: function () {
      this.set('open', false)
    }
  },

  afterMount() {
    Yox.dom.append(document.body, this.$el)
  },
  
  beforeDestroy() {
    Yox.dom.remove(document.body, this.$el)
  }
}