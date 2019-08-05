import Yox, { Data } from 'yox'

import template from './template/Message.hbs'

import {
  TRUE,
  FALSE,
  DOCUMENT,
  RAW_BOOLEAN,
  RAW_STRING,
  RAW_TYPE_ARRAY,
} from '../constant'

import { onTransitionEnd, oneOf } from '../util'

let id = 0

export function createMessage(data: Data) {

  const namespace = '${prefix}message-' + (++id)
  const element = Yox.dom.createElement('div') as HTMLElement
  Yox.dom.prop(element, 'id', namespace)
  Yox.dom.append(DOCUMENT.body, element)

  const options = Yox.define({
    el: '#' + namespace,
    replace: TRUE,
    template,
    props: {
      content: data.content,
      type: data.type,
      showIcon: data.showIcon,
      closable: data.closable,
      closeText: data.closeText,
      center: data.center,
    },
    propTypes: {
      content: {
        type: RAW_STRING,
      },
      type: {
        type: oneOf(RAW_TYPE_ARRAY),
      },
      showIcon: {
        type: RAW_BOOLEAN,
        value: TRUE,
      },
      closable: {
        type: RAW_BOOLEAN,
        value: FALSE,
      },
      closeText: {
        type: RAW_STRING,
      },
      center: {
        type: RAW_BOOLEAN,
      }
    },

    data() {
      return {
        marginLeft: 0,
        top: 0,
        showTime: data.duration || 1500,
        isShow: FALSE,
        close() {
          this.hide()
        }
      }
    },

    methods: {
      fadeIn() {
        const me = this
        setTimeout(
          function () {
            if (me.$el) {
              me.show()
            }
          },
          300
        )
      },
      fadeOut() {
        const me = this
        setTimeout(
          function () {
            if (me.$el) {
              me.hide()
            }
          },
          me.get('showTime')
        )
      },
      show() {
        this.set({
          isShow: TRUE,
          top: data.top || 15
        })
        this.fadeOut()
      },
      hide() {
        const me = this

        me.set({
          isShow: FALSE,
          top: 0
        })

        onTransitionEnd(
          me.$el,
          function () {
            if (Yox.is.func(data.onClose)) {
              data.onClose()
            }
            if (me.$el) {
              me.destroy()
            }
          }
        )
      }
    },

    afterMount() {
      this.set({
        marginLeft: this.$el.clientWidth
      })
      this.fadeIn()
    }
  })

  new Yox(options)

}
