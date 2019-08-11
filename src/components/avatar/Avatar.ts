import Yox from 'yox'

import template from './template/Avatar.hbs'

import {
  TRUE,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_SIZE_ARRAY,
  RAW_DEFAULT,
  RAW_SHAPE_CIRCLE,
} from '../constant'

import {
  oneOf,
  supportTransform,
} from '../util'

const SPACE_HORIZONTAL = 8

export default Yox.define({

  template,

  propTypes: {
    shape: {
      type: oneOf([RAW_SHAPE_CIRCLE]),
    },
    size: {
      type: oneOf(RAW_SIZE_ARRAY),
      value: RAW_DEFAULT,
    },
    text: {
      type: RAW_STRING,
    },
    src: {
      type: RAW_STRING,
    },
    srcset: {
      type: RAW_STRING,
    },
    fontSize: {
      type: RAW_NUMERIC,
    },
    bgColor: {
      type: RAW_STRING,
    },
    color: {
      type: RAW_STRING,
      value: '#fff',
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  afterMount() {

    const me = this

    if (supportTransform) {
      me.watch(
        'text',
        function () {
          me.nextTick(function () {

            const element = me.$refs && me.$refs.text as HTMLElement
            if (!element) {
              return
            }

            const scale = element.offsetWidth
              ? (me.$el.offsetWidth - SPACE_HORIZONTAL) / element.offsetWidth
              : 1

            element.style.transform = `scale(${Math.min(scale, 1)}) translateX(-50%)`

          })
        },
        TRUE
      )
      return
    }


  }
})
