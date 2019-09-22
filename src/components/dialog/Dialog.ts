import Yox from 'yox'

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

export default Yox.define({

  template,

  model: 'visible',

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
      const element = me.$el
      if (isOpen) {
        Yox.dom.addClass(element, CLASS_VISIBLE)
      }
      else {
        Yox.dom.removeClass(element, CLASS_VISIBLE)
        // 动画一般作用在 wrapper 上面
        // 监听 $el 没用的
        onTransitionEnd(
          me.$refs.wrapper as HTMLElement,
          function () {
            me.fire('close.dialog')
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

})
