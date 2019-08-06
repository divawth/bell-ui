import Yox from 'yox'

import template from './template/Drawer.hbs'

import {
  TRUE,
  FALSE,
  BODY,
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

import {
  onTransitionEnd,
} from '../util'

const CLASS_OPEN = '${prefix}drawer-open'
const CLASS_LEAVE = '${prefix}drawer-leave'

export default Yox.define({

  template,

  model: 'open',

  propTypes: {
    title: {
      type: RAW_STRING,
    },
    width: {
      type: RAW_STRING,
      value: 256,
    },
    height: {
      type: RAW_STRING,
      value: 256,
    },
    maskClosable: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    closable: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    placement: {
      type: RAW_STRING,
      value: 'left',
    },
    mask: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    open: {
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

  watchers: {
    open(isOpen) {
      const me = this
      const element = this.$el
      if (isOpen) {
        Yox.dom.addClass(element, CLASS_OPEN)
        onTransitionEnd(
          element,
          function () {
            me.fire('open.drawer')
          }
        )
      }
      else {
        Yox.dom.addClass(element, CLASS_LEAVE)
        onTransitionEnd(
          element,
          function () {
            Yox.dom.removeClass(element, CLASS_OPEN)
            Yox.dom.removeClass(element, CLASS_LEAVE)
            me.fire('close.drawer')
          }
        )
      }
    }
  },

  computed: {
    contentStyle() {
      let style = ''
      const placement = this.get('placement')
      if (placement === 'left'
        || placement === 'right'
      ) {
        let width = +this.get('width')
        if (width < 100) {
          style = `width: ${width}%;`
        }
        else {
          style = `width: ${width}px;`
        }
      }
      else {
        let height = +this.get('height')
        if (height < 100) {
          style = `height: ${height}%;`
        }
        else {
          style = `height: ${height}px;`
        }
      }
      return style
    }
  },

  afterMount() {
    Yox.dom.append(BODY, this.$el)
  },

  beforeDestroy() {
    Yox.dom.remove(BODY, this.$el)
  }

})
