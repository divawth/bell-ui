import template from './template/Dialog.html'
import { RAW_STRING, RAW_BOOLEAN } from '../constant'

export default {
  propTypes: {
    open: {
      type: RAW_BOOLEAN
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template,

  methods: {
    maskClick: function () {
      this.fire('maskClick')
    }
  },

  watchers: {
    open: function () {
      this.setStatus()
    }
  },

  methods: {
    setStatus: function () {
      let me = this
      let element = me.$el
      var contentElement = element.querySelector('.bell-dialog-content')
      if (me.get('open')) {
        contentElement.style.marginTop = '-250px'
        element.style.display = 'flex'
        setTimeout(
          function () {
            contentElement.style.marginTop = 0
          },
          300
        )
      }
      else {
        contentElement.style.marginTop = '-250px'
        setTimeout(
          function () {
            element.style.display = 'none'
          },
          300
        )
      }
    }
  },

  afterMount() {
    this.setStatus()
    Yox.dom.append(document.body, this.$el)
  }

}