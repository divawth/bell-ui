import Yox, { YoxInterface } from 'yox'

import template from './template/CarouselItem.hbs'
// import './style/CarouselItem.styl'

import {
  RAW_STRING,
  RAW_STYLE_TYPE,
  RAW_EVENT_BEFORE_DESTROY,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}CarouselItem',

  propTypes: {
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  afterMount() {

    const me = this
    const element = me.$el as HTMLElement

    const updateSize = function (width: number, height: number) {
      me.fire(
        {
          type: 'sizeChange',
          ns: 'carouselItem',
        },
        {
          width,
          height,
        }
      )
    }

    updateSize(element.clientWidth, element.clientHeight)

    // @ts-ignore
    if (ResizeObserver) {

      // @ts-ignore
      const resizeObserver = new ResizeObserver(function (entries) {
        const { width, height } = entries[0].contentRect
        updateSize(width, height)
      })
      resizeObserver.observe(element)

      const destroy = function (component: YoxInterface) {
        if (component === me) {
          resizeObserver.disconnect()
          Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy)
        }
      }
      Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy)

    }

  }

})
