import Yox from 'yox'

import template from './template/Avatar.hbs'

import {
  TRUE,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_SIZE_ARRAY,
  RAW_DEFAULT,
  RAW_SHAPE_CIRCLE,
  RAW_SHAPE_ROUND,
} from '../constant'

import {
  oneOf,
  supportTransform,
} from '../util'

const SPACE_HORIZONTAL = 8

export default Yox.define({

  propTypes: {
    shape: {
      type: oneOf([RAW_SHAPE_CIRCLE, RAW_SHAPE_ROUND]),
      value: RAW_SHAPE_ROUND
    },
    size: {
      type: oneOf(RAW_SIZE_ARRAY),
      value: RAW_DEFAULT
    },
    text: {
      type: RAW_STRING
    },
    src: {
      type: RAW_STRING
    },
    srcset: {
      type: RAW_STRING
    },
    fontSize: {
      type: RAW_NUMERIC
    },
    bgColor: {
      type: RAW_STRING
    },
    color: {
      type: RAW_STRING,
      value: '#FFF'
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template,

  data() {
    return {
      supportTransform,
    }
  },

  afterMount() {
    if (supportTransform) {
      const me = this
      me.watch(
        'text',
        {
          watcher: function () {
            me.nextTick(function () {

              const { $el, $refs } = me
              if (!$el || !$refs) {
                return
              }

              const { textSpan } = $refs

              const scale = textSpan && (textSpan as HTMLElement).offsetWidth
                ? ($el.offsetWidth - SPACE_HORIZONTAL) / (textSpan as HTMLElement).offsetWidth
                : 1

              me.set(
                'transform',
                `scale(${Math.min(scale, 1)}) translateX(-50%)`
              )

            })
          },
          immediate: TRUE
        }
      )
    }
  }
})
