import Yox from 'yox'

import template from './template/Dialog.hbs'
// import './style/Dialog.styl'

import Icon from '../icon/Icon'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
} from '../constant'

import {
  screenWidth,
  onTransitionEnd,
} from '../util'

const CLASS_VISIBLE = '${prefix}dialog-visible'
const CLASS_FADE = '${prefix}dialog-fade'

export default Yox.define({

  template,

  model: 'visible',

  name: '${prefix}Dialog',

  propTypes: {
    title: {
      type: RAW_STRING,
    },
    visible: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    mask: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    closable: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    maskClosable: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    width: {
      type: RAW_NUMERIC,
      value: screenWidth > 1024 ? 500 : 300,
    },
    height: {
      type: RAW_NUMERIC,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  methods: {
    open() {
      this.set('visible', TRUE)
    },
    close() {
      this.set('visible', FALSE)
    }
  },

  afterMount() {

    const me = this

    me.watch(
      'visible',
      function (visible, oldVisible) {

        const element = me.$el
        const wrapper = me.$refs.wrapper as HTMLElement

        if (visible) {

          // 设置为 display block
          Yox.dom.addClass(element, CLASS_VISIBLE)
          me.fire({
            type: 'open',
            ns: 'dialog',
          })

          setTimeout(
            function () {
              Yox.dom.addClass(element, CLASS_FADE)

              onTransitionEnd(
                wrapper,
                function () {
                  if (me.$el) {
                    me.fire({
                      type: 'opened',
                      ns: 'dialog',
                    })
                  }
                }
              )
            },
            50
          )

        }
        else if (oldVisible) {

          Yox.dom.removeClass(element, CLASS_FADE)
          me.fire({
            type: 'close',
            ns: 'dialog',
          })

          onTransitionEnd(
            wrapper,
            function () {
              if (me.$el) {
                Yox.dom.removeClass(element, CLASS_VISIBLE)
                me.fire({
                  type: 'closed',
                  ns: 'dialog',
                })
              }
            }
          )

        }
      },
      TRUE
    )

  },

  components: {
    Icon,
  }

})
