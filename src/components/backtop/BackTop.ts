import Yox from 'yox'

import template from './template/BackTop.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_NUMERIC,
  WINDOW,
} from '../constant'

import {
  scrollTop,
} from '../util'

export default Yox.define({

  template,

  propTypes: {
    bottom: {
      type: RAW_NUMERIC,
      value: 30,
    },
    right: {
      type: RAW_NUMERIC,
      value: 30,
    },
    height: {
      type: RAW_NUMERIC,
    },
    duration: {
      type: RAW_NUMERIC,
      value: 1000,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data() {
    return {
      hidden: FALSE
    }
  },

  events: {
    click() {
      const parent = this.$parent
      if (!parent) {
        return
      }
      const parentElement = parent.$el
      scrollTop(
        parentElement,
        parentElement.scrollTop,
        0,
        this.get('duration')
      )
    }
  },

  afterMount() {
    const me = this, parent = me.$parent
    if (!parent) {
      return
    }
    const parentElement = parent.$el,
    onRefresh = function () {
      me.set({
        hidden: parentElement.scrollTop < (me.get('height') || parentElement.clientHeight)
      })
    }
    Yox.dom.on(parentElement, 'scroll', onRefresh)
    Yox.dom.on(WINDOW, 'resize', onRefresh)
    me.on(
      'beforeDestroy.hook',
      function (event) {
        if (event.phase === Yox.Event.PHASE_CURRENT) {
          Yox.dom.off(parentElement, 'scroll', onRefresh)
          Yox.dom.off(WINDOW, 'resize', onRefresh)
        }
      }
    )
  }

})
