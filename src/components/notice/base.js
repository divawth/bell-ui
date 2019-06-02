import template from './template/Notice.html'
import { RAW_FUNCTION, RAW_STRING, RAW_NUMERIC } from '../constant'

let id = 0

let createNotice = function (data) {

  let namespace = '${prefix}notice-' + id++
  let body = Yox.dom.find('#${prefix}notice-wrapper')
  let element = Yox.dom.createElement('div')
  Yox.dom.prop(element, 'id', namespace)
  Yox.dom.append(body, element)

  let instance = new Yox({
    el: '#' + namespace,
    replace: true,
    template,
    
    props: {
      title: data.title,
      content: data.content,
      type: data.type,
      duration: data.duration,
      width: data.width,
      right: data.right,
      onClose: data.onClose
    },
    propTypes: {
      title: {
        type: RAW_STRING,
        value: '温馨提示'
      },
      content: {
        type: RAW_STRING
      },
      type: {
        type: RAW_STRING
      },
      duration: {
        type: RAW_NUMERIC,
        value: 4500
      },
      width: {
        type: RAW_NUMERIC,
        value: 320
      },
      right: {
        type: RAW_NUMERIC,
        value: 15
      },
      onClose: {
        type: RAW_FUNCTION
      }
    },
    data () {
      return {
        isShow: false,
        rightSize: 15
      }
    },
    methods: {
      close() {
        this.hide()
      },
      fadeIn() {
        let me = this
        me.fadeInTimer = setTimeout(
          function () {
            me.set({
              isShow: true,
              rightSize: me.get('right')
            })
            if (me.get('duration') == 0) {
              return
            }
            me.fadeOut()
          },
          300
        )
      },
      fadeOut() {
        let me = this
        me.showTimer = setTimeout(
          function () {
            me.hide()
          },
          me.get('duration')
        )
      },
      hide() {
        let me = this
        me.set({
          isShow: false,
          rightSize: `-${me.$el.clientWidth}`
        })
        me.fadeOutTimer = setTimeout(
          function () {
            me.get('onClose') && me.get('onClose')()
            if (instance) {
              instance.destroy()
            }
          },
          300
        )
      }
    },

    afterMount() {
      this.set({
        rightSize: `-${this.$el.clientWidth}`
      })
      this.fadeIn()
    },

    beforeDestroy() {
      let me = this
      clearTimeout(me.fadeInTimer)
      clearTimeout(me.showTimer)
      clearTimeout(me.fadeOutTimer)
    }
  })
}

export let add = function (data) {
  createNotice(data)
}