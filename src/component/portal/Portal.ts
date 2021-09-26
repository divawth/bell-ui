import Yox from 'yox'

import template from './template/Portal.hbs'
// import './style/Portal.styl'

import {
  TRUE,
  BODY,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_EVENT_BEFORE_DESTROY,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}Portal',

  propTypes: {
    visible: {
      type: RAW_BOOLEAN,
    },
    selector: {
      type: RAW_STRING,
    },
  },

  afterMount() {

    const me = this
    const selector = me.get('selector')
    const container = (selector ? Yox.dom.find(selector) : BODY) as HTMLElement

    me.watch(
      'visible',
      function (value, oldValue) {
        if (value) {
          container.appendChild(me.$el)
        }
        else if (oldValue) {
          container.removeChild(me.$el)
        }
      },
      TRUE
    )

    const destroy = function (component) {
      if (component === me) {
        if (me.get('visible')) {
          container.removeChild(me.$el)
        }
        Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy)
      }
    }
    Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy)

  }
})
