import Yox from 'yox'
import template from './template/Message.hbs'
import {
  TRUE,
  RAW_BOOLEAN,
  RAW_STRING,
  FALSE
} from '../constant'

let id = 0

const createMessage = function (data) {

  const namespace = '${prefix}message-' + id++
  const element = Yox.dom.createElement('div') as HTMLElement
  Yox.dom.prop(element, 'id', namespace)
  Yox.dom.append(document.body, element)

  let instance = new Yox({
    el: '#' + namespace,
    replace: TRUE,
    template,
    props: {
      content: data.content,
      type: data.type,
      showIcon: data.showIcon,
      closable: data.closable,
      closeText: data.closeText,
      center: data.center
    },
    propTypes: {
      content: {
        type: RAW_STRING
      },
      type: {
        type: RAW_STRING
      },
      showIcon: {
        type: RAW_BOOLEAN,
        value: TRUE
      },
      closable: {
        type: RAW_BOOLEAN
      },
      closeText: {
        type: RAW_STRING
      },
      center: {
        type: RAW_BOOLEAN
      }
    },

    data() {
      return {
        marginLeft: 0,
        top: 0,
        isShow: FALSE,
        close() {
          if (instance) {
            instance.destroy()
          }
          if (Yox.is.func(data.onClose)) {
            data.onClose()
          }
        }
      }
    },

    methods: {
      fadeIn() {
        let me = this
        me.fadeInFuc = setTimeout(
          function () {
            me.set({
              isShow: true,
              top: me.top
            })
            me.fadeOut()
          },
          me.fadeInTime
        )
      },
      fadeOut() {
        let me = this
        me.showTimeFuc = setTimeout(
          function () {
            me.set({
              isShow: false,
              top: 0
            })

            me.fadeOutFuc = setTimeout(
              function () {
                if (instance) {
                  instance.destroy()
                }
                if (Yox.is.func(data.onClose)) {
                  data.onClose()
                }
              },
              me.fadeOutTime
            )
          },
          me.showTime
        )
      }
    },

    afterMount() {
      let me = this
      me.fadeInTime = 300
      me.fadeOutTime = 300
      me.showTime = data.duration || 1500
      me.top = data.top || 15

      me.set({
        marginLeft: me.$el.clientWidth
      })

      me.fadeIn()
    },

    beforeDestroy() {
      let me = this
      clearTimeout(me.fadeInFuc)
      clearTimeout(me.showTimeFuc)
      clearTimeout(me.fadeOutFuc)
    }
  })
}

export const add = function (data) {
  createMessage(data)
}