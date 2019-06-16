import template from './template/Avatar.html'

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

export default {

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
      this.watch(
        'text',
        {
          watcher: function () {
            this.nextTick(function () {

              const { $el, $refs } = this
              if (!$el || !$refs) {
                return
              }

              const { textSpan } = $refs

              const scale = textSpan && textSpan.offsetWidth
                ? ($el.offsetWidth - SPACE_HORIZONTAL) / textSpan.offsetWidth
                : 1

              this.set(
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
}