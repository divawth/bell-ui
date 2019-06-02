import MsgboxTpl from './template/Msgbox.html'
import ConfirmTpl from './template/Confirm.html'
import { RAW_OBJECT, RAW_STRING, RAW_BOOLEAN, TRUE, RAW_FUNCTION, RAW_NUMERIC, FALSE } from '../constant'

let id = 0

const createAlert = function (data) {

  let namespace = '${prefix}msg-alert-' + id++
  let body = Yox.dom.find('#${prefix}msgbox-wrapper')
  let element = Yox.dom.createElement('div')
  Yox.dom.prop(element, 'id', namespace)
  Yox.dom.append(body, element)

  let instance = new Yox({
    el: '#' + namespace,
    replace: true,
    template: MsgboxTpl,
    props: {
      title: data.title,
      closable: data.closable,
      content: data.content || data,
      button: data.button,
      maskClosable: data.maskClosable,
      onClose: data.onClose,
      width: data.width,
      mask: data.mask
    },
    propTypes: {
      title: {
        type: RAW_STRING,
        value: '温馨提示'
      },
      closable: {
        type: RAW_BOOLEAN,
        value: TRUE
      },
      mask: {
        type: RAW_BOOLEAN,
        value: TRUE
      },
      content: {
        type: RAW_STRING
      },
      button: {
        type: RAW_OBJECT,
        value: {
          text: '我知道了',
          type: 'primary'
        }
      },
      maskClosable: {
        type: RAW_BOOLEAN,
        value: TRUE
      },
      onClose: {
        type: RAW_FUNCTION
      },
      width: {
        type: RAW_NUMERIC
      }
    },
    data() {
      return {
        isHidden: true
      }
    },

    methods: {
      maskClick() {
        if (!this.get('maskClosable')) {
          return
        }
        this.hide()
      },
      hide() {
        let me = this
        me.set({
          isHidden: true
        })
        me.transTimer = setTimeout(
          function () {
            me.get('onClose') && me.get('onClose')()
            if (instance) {
              instance.destroy()
            }
          },
          500
        )
      }
    },

    afterMount() {
      let me = this
      me.transTimer = setTimeout(
        function () {
          me.set({
            isHidden: false
          })
        },
        300
      )
    },

    beforeDestroy() {
      let me = this
      clearTimeout(me.transTimer)
    }
  })
}

const createConfirm = function (data) {

  let namespace = '${prefix}msg-confirm-' + id++
  let body = Yox.dom.find('#${prefix}msgbox-wrapper')
  let element = Yox.dom.createElement('div')
  Yox.dom.prop(element, 'id', namespace)
  Yox.dom.append(body, element)

  let instance = new Yox({
    el: '#' + namespace,
    replace: true,
    template: ConfirmTpl,
    props: {
      title: data.title || data,
      closable: data.closable,
      content: data.content || data,
      buttons: data.buttons,
      maskClosable: data.maskClosable,
      onClose: data.onClose,
      mask: data.mask,
      width: data.width
    },
    propTypes: {
      title: {
        type: RAW_STRING,
        value: '温馨提示'
      },
      closable: {
        type: RAW_BOOLEAN,
        value: TRUE
      },
      mask: {
        type: RAW_BOOLEAN,
        value: TRUE
      },
      content: {
        type: RAW_STRING
      },
      buttons: {
        type: RAW_OBJECT
      },
      maskClosable: {
        type: RAW_BOOLEAN,
        value: TRUE
      },
      onClose: {
        type: RAW_FUNCTION
      },
      width: {
        type: RAW_NUMERIC
      }
    },
    data() {
      return {
        isHidden: true
      }
    },

    methods: {
      buttonClick(index) {
        this.get('buttons.' + index + '.action').call(instance)
      },

      maskClick() {
        if (!this.get('maskClosable')) {
          return
        }
        this.hide()
      },

      hide() {
        let me = this
        me.set({
          isHidden: true
        })
        me.transTimer = setTimeout(
          function () {
            me.get('onClose') && me.get('onClose')()
            if (instance) {
              instance.destroy()
            }
          },
          500
        )
      }
    },

    afterMount() {
      let me = this
      me.transTimer = setTimeout(
        function () {
          me.set({
            isHidden: false
          })
        },
        300
      )
    },

    beforeDestroy() {
      let me = this
      clearTimeout(me.transTimer)
    }
  })
}

export const addAlert = function (data) {
  createAlert(data)
}

export const addConfirm = function (data) {
  createConfirm(data)
}
