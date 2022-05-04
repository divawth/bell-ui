import Yox from 'yox'

import template from './template/Message.hbs'
// import './style/Message.styl'

import Icon from '../icon/Icon'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_STATUS_ARRAY,
  RAW_TYPE_INFO,
} from '../constant'

import {
  oneOf,
  toPixel,
  toNumber,
  onTransitionEnd,
  getStatusIconName,
} from '../util'

const CLASS_VISIBLE = '${prefix}message-visible'
const CLASS_FADE = '${prefix}message-fade'

export default Yox.define({

  template,

  name: '${prefix}Message',

  propTypes: {
    status: {
      type: oneOf(RAW_STATUS_ARRAY),
      value: RAW_TYPE_INFO,
    },
    content: {
      type: RAW_STRING,
      required: TRUE,
    },
    closable: {
      type: RAW_BOOLEAN,
    },
    duration: {
      type: RAW_NUMERIC,
      value: 2000,
    },
    gap: {
      type: RAW_NUMERIC,
      value: 12,
    },
    top: {
      type: RAW_NUMERIC,
      value: 15,
    },
  },

  data() {
    return {
      isVisible: FALSE,
      actualTop: 0,
    }
  },

  computed: {
    iconName(): string {
      return getStatusIconName(
        this.get('status')
      )
    },
  },

  methods: {
    move(distance: number) {

      const me = this
      if (!me.get('isVisible')) {
        return
      }

      const element = me.$el
      if (element) {
        const gap = toNumber(this.get('gap'))
        const actualTop = this.get('actualTop') - distance - gap
        me.set({
          actualTop,
        })
        element.style.top = toPixel(actualTop)
      }

    },
    show(height: number, count: number) {

      const me = this
      if (me.get('isVisible')) {
        return
      }

      const gap = toNumber(this.get('gap'))
      const top = toNumber(this.get('top')) + height + count * gap

      me.set({
        isVisible: TRUE,
        actualTop: top,
      })

      const element = me.$el
      Yox.dom.addClass(element, CLASS_VISIBLE)
      element.style.top = toPixel(top)

      setTimeout(
        function () {
          if (!me.$el) {
            return
          }

          Yox.dom.addClass(element, CLASS_FADE)

          const duration = toNumber(me.get('duration'))
          if (duration > 0) {
            setTimeout(
              function () {
                if (me.$el) {
                  me.hide()
                }
              },
              duration
            )
          }
        },
        50
      )

    },
    hide() {

      const me = this
      if (!me.get('isVisible')) {
        return
      }

      me.set({
        isVisible: FALSE,
      })

      const element = me.$el
      Yox.dom.removeClass(element, CLASS_FADE)

      onTransitionEnd(
        element,
        function () {
          if (!me.$el) {
            return
          }
          Yox.dom.removeClass(element, CLASS_VISIBLE)
          me.fire({
            type: 'hide',
            ns: 'message',
          })
        }
      )

    }
  },

  components: {
    Icon,
  },

})