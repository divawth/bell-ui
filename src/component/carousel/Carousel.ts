import Yox, { YoxInterface } from 'yox'

import template from './template/Carousel.hbs'
// import './style/Carousel.styl'

import ResizeObserver from '../resize-observer/ResizeObserver'

import {
  TRUE,
  UNDEFINED,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_CLICK,
  RAW_HOVER,
  RAW_TOP,
  RAW_RIGHT,
  RAW_BOTTOM,
  RAW_LEFT,
  RAW_VERTICAL,
  RAW_HORIZONTAL,
  RAW_STYLE_TYPE,
  RAW_SLOT_CHILDREN,
  RAW_EVENT_BEFORE_DESTROY,
} from '../constant'

import {
  oneOf,
  toPixel,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Carousel',

  propTypes: {
    autoPlay: {
      type: RAW_BOOLEAN,
    },
    interval: {
      type: RAW_NUMERIC,
      value: 3000,
    },
    trigger: {
      type: oneOf([RAW_CLICK, RAW_HOVER]),
      value: RAW_CLICK
    },
    indicatorType: {
      type: oneOf(['dot', 'line']),
      value: 'dot'
    },
    indicatorPosition: {
      type: oneOf([
        RAW_TOP,
        RAW_RIGHT,
        RAW_BOTTOM,
        RAW_LEFT,
      ]),
      value: RAW_BOTTOM,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  data() {
    const children = this.get(RAW_SLOT_CHILDREN)
    return {
      RAW_CLICK,
      RAW_HOVER,
      RAW_TOP,
      RAW_RIGHT,
      RAW_BOTTOM,
      RAW_LEFT,

      index: 0,
      count: children
        ? children.length
        : 0,
      size: UNDEFINED,
    }
  },

  computed: {
    direction() {
      const indicatorPosition = this.get('indicatorPosition')
      return indicatorPosition === 'left' || indicatorPosition === 'right'
        ? RAW_VERTICAL
        : RAW_HORIZONTAL
    },
    inlineStyle(): object[] | void {
      const result: object[] = []

      const size = this.get('size')
      if (size) {
        result.push({
          width: toPixel(size.width),
          height: toPixel(size.height),
        })
      }

      const style = this.get('style')
      if (style) {
        result.push(style)
      }

      if (result.length > 0) {
        return result
      }
    },
  },

  events: {
    resize: {
      listener(event, data) {
        if (event.phase !== Yox.Event.PHASE_UPWARD) {
          return
        }
        event.stop()
        this.set('size', data)
      },
      ns: 'resizeObserver'
    }
  },

  watchers: {
    index(value) {
      // @ts-ignore
      this.move(value, TRUE)
    },
    direction() {
      // @ts-ignore
      this.move(this.get('index'))
    }
  },

  methods: {
    go(index: number) {
      this.set('index', index)
    },
    prev() {
      const index = this.get('index') - 1
      const count = this.get('count')
      // @ts-ignore
      this.go(index < 0 ? (count - 1) : index)
    },
    next() {
      const index = this.get('index') + 1
      const count = this.get('count')
      // @ts-ignore
      this.go(index === count ? 0 : index)
    },
    move(index: number, animated?: boolean) {

      const size = this.get('size')
      if (!size) {
        return
      }

      const element = this.$refs.list as HTMLElement

      element.style.transitionDuration = animated ? '0.2s' : ''
      element.style.transform = this.get('direction') === RAW_HORIZONTAL
        ? ('translateX(-' + toPixel(index * size.width) + ')')
        : ('translateY(-' + toPixel(index * size.height) + ')')

    }
  },

  components: {
    ResizeObserver
  },

  afterMount() {

    const me = this

    // 自动播放
    let autoPlayTimer: number

    const autoPlayHandler = function () {

      // @ts-ignore
      me.next()

      autoPlayTimer = window.setTimeout(
        autoPlayHandler,
        me.get('interval')
      )

    }

    me.watch(
      'autoPlay',
      function (newValue) {
        if (newValue) {
          autoPlayTimer = window.setTimeout(
            autoPlayHandler,
            me.get('interval')
          )
        }
        else if (autoPlayTimer) {
          clearTimeout(autoPlayTimer)
          autoPlayTimer = 0
        }
      },
      TRUE
    )

    const destroy = function (component: YoxInterface) {
      if (component === me) {
        if (autoPlayTimer) {
          clearTimeout(autoPlayTimer)
        }
        Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy)
      }
    }
    Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy)

  },

  beforePropsUpdate(props) {

    const children = props[RAW_SLOT_CHILDREN]

    this.set('count', children ? children.length : 0)

  }

})
