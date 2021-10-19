import Yox from 'yox'

import template from './template/Dialog.hbs'
// import './style/Dialog.styl'

import Icon from '../icon/Icon'

import {
  TRUE,
  FALSE,
  UNDEFINED,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  screenWidth,
  onTransitionEnd,
} from '../util'

const CLASS_VISIBLE = '${prefix}dialog-visible'
const CLASS_FADE = '${prefix}dialog-fade'

export default Yox.define({

  template,

  model: 'visible',

  name: '${prefix}Dialog',

  propTypes: {
    title: {
      type: RAW_STRING,
    },
    visible: {
      type: RAW_BOOLEAN,
    },
    showMask: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    closable: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    maskClosable: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    width: {
      type: RAW_NUMERIC,
      value: screenWidth > 1024 ? 500 : 300,
    },
    height: {
      type: RAW_NUMERIC,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
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
    dialog: {
      enter(node) {

        const me = this as any
        const dialog = node as HTMLElement
        const wrapper = me.$refs.wrapper as HTMLElement
        me.wrapperElement = wrapper

        // 设置为 display block
        Yox.dom.addClass(dialog, CLASS_VISIBLE)
        me.fire({
          type: 'open',
          ns: 'dialog',
        })

        setTimeout(
          function () {
            if (!me.get('visible')) {
              return
            }

            Yox.dom.addClass(dialog, CLASS_FADE)

            onTransitionEnd(
              wrapper,
              function () {
                if (!me.get('visible')) {
                  return
                }
                me.fire({
                  type: 'opened',
                  ns: 'dialog',
                })
              }
            )
          },
          50
        )

      },
      leave(node, done) {

        const me = this as any
        const dialog = node as HTMLElement
        const wrapper = me.wrapperElement as HTMLElement
        me.wrapperElement = UNDEFINED

        Yox.dom.removeClass(dialog, CLASS_FADE)
        me.fire({
          type: 'close',
          ns: 'dialog',
        })

        onTransitionEnd(
          wrapper,
          function () {
            if (me.get('visible')) {
              return
            }
            Yox.dom.removeClass(dialog, CLASS_VISIBLE)
            me.fire({
              type: 'closed',
              ns: 'dialog',
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
