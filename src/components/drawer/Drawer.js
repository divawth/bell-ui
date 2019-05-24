import {
  contains
} from '../util'
import template from './template/Drawer.html'
import { RAW_STRING, RAW_BOOLEAN } from '../constant'

export default {
  template,

  propTypes: {
    position: {
      type: RAW_STRING,
      value: 'left'
    },
    useMask: {
      type: RAW_BOOLEAN,
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

  afterMount() {
    let me = this
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
    Yox.dom.on(
      document,
      'click',
      this.documentClickHandler
    )
  }
}