import Yox from 'yox'

import template from './template/Notification.hbs'
// import './style/Notification.styl'

import Icon from '../icon/Icon'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_STATUS_ARRAY,
} from '../constant'

import {
  oneOf,
  toPixel,
  toNumber,
  onTransitionEnd,
  getStatusIconName,
} from '../util'

const CLASS_VISIBLE = '${prefix}notification-visible'
const CLASS_FADE = '${prefix}notification-fade'

export default Yox.define({

  template,

  name: '${prefix}Notification',

  propTypes: {
    title: {
      type: RAW_STRING,
    },
    content: {
      type: RAW_STRING,
    },
    status: {
      type: oneOf(RAW_STATUS_ARRAY),
    },
    duration: {
      type: RAW_NUMERIC,
      value: 4500,
    },
    gap: {
      type: RAW_NUMERIC,
      value: 16,
    },
    right: {
      type: RAW_NUMERIC,
      value: 15,
    },
    width: {
      type: RAW_NUMERIC,
      value: 320,
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
      const width = toNumber(this.get('width'))
      const right = toNumber(this.get('right'))
      const top = 24 + height + count * gap

      me.set({
        isVisible: TRUE,
        actualTop: top,
      })

      const element = me.$el
      Yox.dom.addClass(element, CLASS_VISIBLE)
      element.style.top = toPixel(top)
      element.style.right = toPixel(right)
      element.style.width = toPixel(width)

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
            ns: 'notification',
          })
        }
      )

    }
  },

  components: {
    Icon,
  }

})