import Yox from 'yox'

import Icon from '../icon/Icon'
import template from './template/Drawer.hbs'

import {
  TRUE,
  FALSE,
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
      value: TRUE,
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

        // 设置为 display block
        Yox.dom.addClass(element, CLASS_VISIBLE)
        me.fire('open.drawer')

        setTimeout(
          function () {
            Yox.dom.addClass(element, CLASS_FADE)
            onTransitionEnd(
              wrapper,
              function () {
                if (me.$el) {
                  me.fire('opened.drawer')
                }
              }
            )
          },
          30
        )

      }
      else {

        Yox.dom.removeClass(element, CLASS_FADE)
        me.fire('close.drawer')

        onTransitionEnd(
          wrapper,
          function () {
            if (me.$el) {
              Yox.dom.removeClass(element, CLASS_VISIBLE)
              me.fire('closed.drawer')
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
        const width = toNumber(this.get('width'))
        style = `width: ${width}px;`
      }
      else {
        const height = toNumber(this.get('height'))
        style = `height: ${height}px;`
      }
      return style
    }
  },

  methods: {
    open() {
      this.set('visible', TRUE)
    },
    close() {
      this.set('visible', FALSE)
    }
  },

  components: {
    Icon,
  }

})
