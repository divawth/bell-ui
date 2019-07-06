import Yox, { Data } from 'yox'
import template from './template/Message.hbs'
import {
  TRUE,
  RAW_BOOLEAN,
  RAW_STRING,
  FALSE,
  RAW_TYPE_ARRAY
} from '../constant'
import { onTransitionEnd, oneOf } from '../util';

let id = 0

function createMessage(data: Data) {

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
        type: oneOf(RAW_TYPE_ARRAY)
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
        showTime: data.duration || 1500,
        isShow: FALSE,
        close() {
          if (Yox.is.func(data.onClose)) {
            data.onClose()
          }
          if (instance) {
            instance.destroy()
          }
        }
      }
    },

    methods: {
      fadeIn() {
        let me = this
        setTimeout(
          function () {
            if (!me.$el) {
              return
            }
            me.set({
              isShow: TRUE,
              top: data.top || 15
            })
            me.fadeOut()
          },
          300
        )
      },
      fadeOut() {
        let me = this
        setTimeout(
          function () {
            if (!me.$el) {
              return
            }
            me.set({
              isShow: false,
              top: 0
            })

            onTransitionEnd(
              me.$el,
              function () {
                if (Yox.is.func(data.onClose)) {
                  data.onClose()
                }
                me.destroy()
              }
            )
          },
          me.get('showTime')
        )
      }
    },

    afterMount() {
      let me = this
      me.set({
        marginLeft: me.$el.clientWidth
      })

      me.fadeIn()
    }
  })
}

export function add(data: Data) {
  createMessage(data)
}