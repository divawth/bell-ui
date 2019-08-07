import Yox from 'yox'

import template from './template/Message.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_TYPE_ARRAY,
  RAW_TYPE_PRIMARY,
  RAW_FUNCTION,
} from '../constant'

import {
  oneOf,
  onTransitionEnd,
  supportTransform,
} from '../util'

const CLASS_VISIBLE = '${prefix}message-visible'

export default Yox.define({

  template,

  propTypes: {
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_TYPE_PRIMARY,
    },
    content: {
      type: RAW_STRING,
    },
    icon: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    closable: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    center: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    duration: {
      type: RAW_NUMERIC,
      value: 1500,
    },
    top: {
      type: RAW_NUMERIC,
      value: 15,
    },
    onClose: {
      type: RAW_FUNCTION,
    }
  },

  data() {
    const me = this
    return {
      closeAlert() {
        me.hide()
      }
    }
  },

  methods: {
    show() {

      const me = this

      const element = me.$el
      Yox.dom.addClass(element, CLASS_VISIBLE)
      element.style.top = me.get('top') + 'px'

      setTimeout(
        function () {
          if (me.$el) {
            me.hide()
          }
        },
        me.get('duration')
      )

    },
    hide() {

      const me = this

      const element = me.$el
      Yox.dom.removeClass(element, CLASS_VISIBLE)
      element.style.top = '0px'

      onTransitionEnd(
        element,
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
    }
  },

  afterMount() {

    const me = this

    if (!supportTransform) {
      const element = me.$el
      element.style.marginLeft = -0.5 * element.offsetWidth + 'px'
    }


    setTimeout(
      function () {
        if (me.$el) {
          me.show()
        }
      },
      300
    )

  }

})