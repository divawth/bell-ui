import Yox from 'yox'

import template from './template/Drawer.hbs'
// import './style/Drawer.styl'

import Icon from '../icon/Icon'

import {
  TRUE,
  FALSE,
  UNDEFINED,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_LEFT,
  RAW_RIGHT,
  RAW_BOTTOM,
  RAW_TOP,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
  toPixel,
  toNumber,
  onTransitionEnd,
} from '../util'

const CLASS_VISIBLE = '${prefix}drawer-visible'
const CLASS_FADE = '${prefix}drawer-fade'

export default Yox.define({

  template,

  model: 'visible',

  name: '${prefix}Drawer',

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
    showMask: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    maskClosable: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    visible: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  computed: {
    wrapperStyle() {
      const placement = this.get('placement')
      if (placement === RAW_LEFT
        || placement === RAW_RIGHT
      ) {
        const width = toNumber(this.get('width'))
        return {
          width: toPixel(width)
        }
      }
      const height = toNumber(this.get('height'))
      return {
        height: toPixel(height)
      }
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

  transitions: {
    drawer: {
      enter(node) {

        const me = this as any
        const drawer = node as HTMLElement
        const wrapper = me.$refs.wrapper as HTMLElement
        me.wrapperElement = wrapper

        // 设置为 display block
        Yox.dom.addClass(drawer, CLASS_VISIBLE)
        me.fire({
          type: 'open',
          ns: 'drawer',
        })

        setTimeout(
          function () {
            if (!me.get('visible')) {
              return
            }

            Yox.dom.addClass(drawer, CLASS_FADE)
            onTransitionEnd(
              wrapper,
              function () {
                if (!me.get('visible')) {
                  return
                }
                me.fire({
                  type: 'opened',
                  ns: 'drawer',
                })
              }
            )
          },
          50
        )

      },
      leave(node, done) {

        const me = this as any
        const drawer = node as HTMLElement
        const wrapper = me.wrapperElement as HTMLElement
        me.wrapperElement = UNDEFINED

        Yox.dom.removeClass(drawer, CLASS_FADE)
        me.fire({
          type: 'close',
          ns: 'drawer',
        })

        onTransitionEnd(
          wrapper,
          function () {
            if (me.get('visible')) {
              return
            }
            Yox.dom.removeClass(drawer, CLASS_VISIBLE)
            me.fire({
              type: 'closed',
              ns: 'drawer',
            })
            done()
          }
        )

      }
    },
  },

  components: {
    Icon,
  }

})
