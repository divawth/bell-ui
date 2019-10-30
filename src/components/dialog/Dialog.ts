import Yox from 'yox'

import Icon from '../icon/Icon'
import template from './template/Dialog.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
} from '../constant'

import {
  onTransitionEnd,
} from '../util'

const CLASS_VISIBLE = '${prefix}dialog-visible'
const CLASS_FADE = '${prefix}dialog-fade'

export default Yox.define({

  template,

  model: 'visible',

  name: '${prefix}dialog',

  propTypes: {
    title: {
      type: RAW_STRING,
    },
    visible: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    mask: {
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
      value: 500,
    },
    height: {
      type: RAW_NUMERIC,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  watchers: {
    visible(visible, oldVisible) {

      const me = this
      const element = me.$el
      const wrapper = me.$refs.wrapper as HTMLElement

      if (visible) {

        // 设置为 display block
        Yox.dom.addClass(element, CLASS_VISIBLE)
        me.fire('open.dialog')

        setTimeout(
          function () {
            Yox.dom.addClass(element, CLASS_FADE)

            onTransitionEnd(
              wrapper,
              function () {
                if (me.$el) {
                  me.fire('opened.dialog')
                }
              }
            )
          },
          50
        )

      }
      else if (oldVisible) {

        Yox.dom.removeClass(element, CLASS_FADE)
        me.fire('close.dialog')

        onTransitionEnd(
          wrapper,
          function () {
            if (me.$el) {
              Yox.dom.removeClass(element, CLASS_VISIBLE)
              me.fire('closed.dialog')
            }
          }
        )

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

  components: {
    Icon,
  }

})
