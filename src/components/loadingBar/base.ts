import template from './template/LoadingBar.hbs'
import { NULL, RAW_STRING, RAW_NUMERIC, TRUE, RAW_NUMBER } from '../constant'
import Yox from 'yox';

interface Config {
  type?: string,
  color?: string,
  height?: number,
  percent?: number
}

let namespace = '${prefix}loadingbar'
let instance = NULL
let timer = NULL


export const add = function(data: Config) {
  if (instance) {
    remove()
  }
  let body = Yox.dom.find('#${prefix}loadingbar-wrapper') as HTMLElement
  let element = Yox.dom.createElement('div') as HTMLElement
  Yox.dom.prop(element, 'id', namespace)
  Yox.dom.append(body, element)

  instance = new Yox({
    el: '#' + namespace,
    replace: TRUE,
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
        type: RAW_NUMBER,
        value: 2
      },
      percent: {
        type: RAW_NUMBER,
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
          300
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
  let body = Yox.dom.find('#${prefix}loadingbar-wrapper') as HTMLElement
  let element = Yox.dom.find(`#${namespace}`)
  if (element) {
    Yox.dom.remove(body, element)
  }
}

export const update = function(config: Config) {
  if (instance) {
    instance.set(config)
  }
}
