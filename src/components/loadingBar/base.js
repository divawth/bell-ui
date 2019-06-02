import template from './template/LoadingBar.html'
import { NULL, RAW_STRING, RAW_NUMERIC } from '../constant'

let namespace = '${prefix}loadingbar'
let instance = NULL
let timer = NULL

export const add = function(data) {
  if (instance) {
    remove()
  }
  let body = Yox.dom.find('#${prefix}loadingbar-wrapper')
  let element = Yox.dom.createElement('div')
  Yox.dom.prop(element, 'id', namespace)
  Yox.dom.append(body, element)

  instance = new Yox({
    el: '#' + namespace,
    replace: true,
    props: {
      percent: data.percent,
      height: data.height,
      type: data.type,
      color: data.color
    },
    template,
    propTypes: {
      type: {
        type: RAW_STRING
      },
      height: {
        type: RAW_NUMERIC,
        value: 2
      },
      percent: {
        type: RAW_NUMERIC,
        value: 0
      },
      color: {
        type: RAW_STRING
      }
    },

    afterMount() {
      let me = this
      let timerStart = function () {
        timer = setTimeout(
          function () {
            if (!timer || !me) {
              return
            }
            me.increase('percent', Math.floor(Math.random() * 10), 98)
            if (me.get('percent') <= 98) {
              timerStart()
            }
          },
          200
        )
      }
      timerStart()
    },

    beforeDestroy() {
      if (timer) {
        clearTimeout(timer)
      }
    }
  })
  return instance
}

export const remove = function() {
  if (instance) {
    instance.destroy()
    instance = NULL
  }
  let body = Yox.dom.find('#${prefix}loadingbar-wrapper')
  let element = Yox.dom.find(`#${namespace}`)
  if (element) {
    Yox.dom.remove(body, element)
  }
}

export const update = function(config) {
  if (instance) {
    instance.set(config)
  }
}
