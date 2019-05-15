import template from './template/Avatar.html'
import {
  RAW_STRING,
  RAW_NUMERIC,
  RAW_SIZE_ARRAY,
  RAW_DEFAULT,
  RAW_SHAPE_CIRCLE,
  RAW_SHAPE_ROUND,
  RAW_ICON_TYPE_ARRAY
} from '../constant'
import { oneOf } from '../util';

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
    icon: {
      type: RAW_STRING
    },
    iconType: {
      type: oneOf(RAW_ICON_TYPE_ARRAY)
    },
    fontSize: {
      type: RAW_NUMERIC
    },
    bgColor: {
      type: RAW_STRING
    },
    color: {
      type: RAW_STRING,
      value: '#ffffff'
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template,
  
  data () {
    return {
      transformStyle: `scale(1) translateX(-50%)`
    }
  },

  watchers: {
    
  },

  afterMount () {
    let elWidth = this.$el.clientWidth - 8
    this.watch(
      'text',
      {
        watcher: function () {
          this.nextTick(function () {
            let scale = elWidth / this.$refs.textStr.clientWidth 
            this.set(
              'transformStyle',
              `scale(${scale > 1 ? 1 : scale}) translateX(-50%)`
            )
          })
        },
        immediate: true
      }
    )
  }
}