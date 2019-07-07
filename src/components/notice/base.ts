import template from './template/Notice.hbs'
import {
  TRUE,
  RAW_FUNCTION,
  RAW_STRING,
  RAW_NUMERIC,
} from '../constant'
import Yox, { Data } from 'yox'
import { onTransitionEnd } from '../util';

let id = 0
function createNotice(data: Data) {

  let namespace = '${prefix}notice-' + id++
  let body = Yox.dom.find('#${prefix}notice-wrapper') as HTMLElement
  let element = Yox.dom.createElement('div') as HTMLElement
  Yox.dom.prop(element, 'id', namespace)
  Yox.dom.append(body, element)

  new Yox({
    el: '#' + namespace,
    replace: TRUE,
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
        visible: false,
        rightSize: 15
      }
    },
    methods: {
      close() {
        this.hide()
      },
      fadeIn() {
        let me = this
        setTimeout(
          function () {
            if (!me.$el) {
              return
            }
            me.set({
              visible: true,
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
        let me = this
        me.set({
          visible: false,
          rightSize: `-${me.$el.clientWidth}`
        })

        me.nextTick(function () {
          onTransitionEnd(
            me.$el,
            function () {
              me.get('onClose') && me.get('onClose')()
              if (me.$el) {
                me.destroy()
              }
            }
          )
        })
      }
    },

    afterMount() {
      this.set({
        rightSize: `-${this.$el.clientWidth}`
      })
      this.fadeIn()
    }
  })
}

export function add(data: Data) {
  createNotice(data)
}