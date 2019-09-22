import Yox from 'yox'

import template from './template/Avatar.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_DEFAULT,
  RAW_SIZE_ARRAY,
  RAW_BOOLEAN,
} from '../constant'

import {
  oneOf,
  supportTransform,
} from '../util'

const SPACE_HORIZONTAL = 8

export default Yox.define({

  template,

  propTypes: {
    size: {
      type: oneOf(RAW_SIZE_ARRAY),
      value: RAW_DEFAULT,
    },
    circle: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    text: {
      type: RAW_STRING,
    },
    src: {
      type: RAW_STRING,
    },
    srcSet: {
      type: RAW_STRING,
    },
    alt: {
      type: RAW_STRING,
    },
    color: {
      type: RAW_STRING,
    },
    fontSize: {
      type: RAW_NUMERIC,
    },
    backgroundColor: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  afterMount() {

    if (!supportTransform) {
      return
    }

    const me = this

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

  }
})
