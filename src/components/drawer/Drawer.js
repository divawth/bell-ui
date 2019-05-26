import {
  contains
} from '../util'
import template from './template/Drawer.html'
import { RAW_STRING, RAW_BOOLEAN, TRUE } from '../constant'

export default {
  template,

  propTypes: {
    title: {
      type: RAW_STRING
    },
    position: {
      type: RAW_STRING,
      value: 'left'
    },
    useMask: {
      type: RAW_BOOLEAN,
      value: TRUE
    },
    open: {
      type: RAW_BOOLEAN
    },
    size: function (value) {
      return value != null ? +value : 300
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  model: 'open',

  watchers: {
    open(isOpen) {
      if (isOpen) {
        this.open()
      }
      else {
        this.close()
      }
    }
  },

  methods: {
    open() {
      
    },
    close() {

    }
  },

  afterMount() {
    let me = this
    Yox.dom.append(document.body, this.$el)
    me.documentClickHandler = function (event) {
      if (!me.get('open')) {
        return
      }
      let element = me.$refs.drawContent
      let target = event.originalEvent.target
      if (contains(element, target)) {
        return
      }
      me.set({
        open: false
      })
    }

    Yox.dom.on(
      document,
      'click',
      me.documentClickHandler
    )
  },

  beforeDestroy() {
    Yox.dom.remove(document.body, this.$el)
    Yox.dom.on(
      document,
      'click',
      this.documentClickHandler
    )
  }
}