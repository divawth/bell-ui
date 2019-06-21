import Yox from 'yox'

import template from './template/Drawer.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

import {
  onTransitionEnd,
} from '../util'

const CLASS_OPEN = '${prefix}drawer-open'
const CLASS_LEAVE = '${prefix}drawer-leave'

export default Yox.create({
  propTypes: {
    title: {
      type: RAW_STRING
    },
    width: {
      type: RAW_STRING,
      value: 256
    },
    height: {
      type: RAW_STRING,
      value: 256
    },
    maskClosable: {
      type: RAW_BOOLEAN,
      value: TRUE
    },
    closable: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    placement: {
      type: RAW_STRING,
      value: 'left'
    },
    mask: {
      type: RAW_BOOLEAN,
      value: TRUE
    },
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

  model: 'open',

  template,

  watchers: {
    open(isOpen) {
      const element = this.$el
      if (isOpen) {
        Yox.dom.addClass(element, CLASS_OPEN)
        this.fire('open.drawer')
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
        this.fire('close.drawer')
      }
    }
  },

  computed: {
    contentStyle() {
      let style = ''
      if (this.get('placement') === 'left'
        || this.get('placement') === 'right'
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
    Yox.dom.append(document.body, this.$el)
  },

  beforeDestroy() {
    Yox.dom.remove(document.body, this.$el)
  }
})
