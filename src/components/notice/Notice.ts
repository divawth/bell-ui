import Yox from 'yox'

import template from './template/Notice.hbs'

import {
  TRUE,
  FALSE,
  RAW_FUNCTION,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_TYPE_ARRAY,
  RAW_TYPE_PRIMARY,
} from '../constant'

import {
  oneOf,
  onTransitionEnd,
} from '../util'

const CLASS_VISIBLE = '${prefix}notice-visible'

export default Yox.define({

  template,

  propTypes: {
    title: {
      type: RAW_STRING,
      value: '温馨提示',
    },
    content: {
      type: RAW_STRING,
    },
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_TYPE_PRIMARY,
    },
    duration: {
      type: RAW_NUMERIC,
      value: 4500,
    },
    width: {
      type: RAW_NUMERIC,
      value: 320,
    },
    right: {
      type: RAW_NUMERIC,
      value: 15,
    },
    onClose: {
      type: RAW_FUNCTION,
    }
  },

  methods: {
    hide() {
      const me = this

      Yox.dom.removeClass(me.$el, CLASS_VISIBLE)

      me.nextTick(function () {
        if (!me.$el) {
          return
        }
        onTransitionEnd(
          me.$el,
          function () {
            if (me.$el) {
              const onClose = me.get('onClose')
              if (onClose) {
                onClose()
              }
              me.destroy()
            }
          }
        )
      })
    }
  },

  afterMount() {
    const me = this
    setTimeout(
      function () {

        const element = me.$el
        if (!element) {
          return
        }

        Yox.dom.addClass(element, CLASS_VISIBLE)

        const duration = me.get('duration')
        if (duration == 0) {
          return
        }


        setTimeout(
          function () {
            if (me.$el) {
              me.hide()
            }
          },
          duration
        )

      },
      300
    )
  }

})