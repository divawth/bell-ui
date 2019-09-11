import Yox from 'yox'

import template from './template/Drawer.hbs'

import {
  TRUE,
  FALSE,
  BODY,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_LEFT,
  RAW_RIGHT,
  RAW_BOTTOM,
  RAW_TOP,
} from '../constant'

import {
  oneOf,
  toNumber,
  onTransitionEnd,
} from '../util'

const CLASS_VISIBLE = '${prefix}drawer-visible'
const CLASS_FADE = '${prefix}drawer-fade'

export default Yox.define({

  template,

  model: 'visible',

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
    placement: {
      type: oneOf([RAW_LEFT, RAW_RIGHT, RAW_TOP, RAW_BOTTOM]),
      value: RAW_LEFT,
    },
    closable: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    mask: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    maskClosable: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    visible: {
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
    visible(isOpen) {
      const me = this
      const element = this.$el
      const wrapper = this.$refs.wrapper as HTMLElement
      if (isOpen) {
        Yox.dom.addClass(element, CLASS_VISIBLE)
        setTimeout(
          function () {
            if (me.$el) {
              Yox.dom.addClass(element, CLASS_FADE)
              me.fire('open.drawer')
            }
          },
          20
        )
      }
      else {
        Yox.dom.removeClass(element, CLASS_FADE)
        onTransitionEnd(
          wrapper,
          function () {
            if (me.$el) {
              Yox.dom.removeClass(element, CLASS_VISIBLE)
              me.fire('close.drawer')
            }
          }
        )
      }
    }
  },

  computed: {
    wrapperStyle() {
      let style = ''
      const placement = this.get('placement')
      if (placement === RAW_LEFT
        || placement === RAW_RIGHT
      ) {
        let width = toNumber(this.get('width'))
        if (width < 100) {
          style = `width: ${width}%;`
        }
        else {
          style = `width: ${width}px;`
        }
      }
      else {
        let height = toNumber(this.get('height'))
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

  methods: {
    close() {
      this.set('visible', FALSE)
    }
  },

  afterMount() {
    Yox.dom.append(BODY, this.$el)
  },

  beforeDestroy() {
    Yox.dom.remove(BODY, this.$el)
  }

})
