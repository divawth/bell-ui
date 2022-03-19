import Yox from 'yox'

import template from './template/Row.hbs'

import {
  TRUE,
  RAW_ARRAY,
  RAW_OBJECT,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_TOP,
  RAW_MIDDLE,
  RAW_BOTTOM,
  RAW_STYLE_TYPE,
  RAW_EVENT_BEFORE_DESTROY,
  RAW_BOOLEAN,
} from '../constant'

import { oneOf, toPixel } from '../util'

import {
  parseGutter,
  getBreakpoint,
  watchBreakpoint,
  unwatchBreakpoint,
} from './util'

export default Yox.define({

  template,

  name: '${prefix}Row',

  propTypes: {
    gutter: {
      type: [RAW_NUMERIC, RAW_OBJECT, RAW_ARRAY],
    },
    justify: {
      type: oneOf(['start', 'end', 'center', 'space-around', 'space-between']),
    },
    align: {
      type: oneOf([RAW_TOP, RAW_MIDDLE, RAW_BOTTOM]),
    },
    autoWrap: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  data() {
    return {
      breakpoint: getBreakpoint(),
    }
  },

  computed: {
    responsiveGutter() {
      let gutter = this.get('gutter')
      if (gutter) {
        if (!Yox.is.array(gutter)) {
          gutter = [gutter]
        }
        const breakpoint = this.get('breakpoint')
        return [
          parseGutter(breakpoint, gutter[0]),
          parseGutter(breakpoint, gutter[1]),
        ]
      }
    },
    inlineStyle(): object[] | void {

      const result: object[] = []

      const responsiveGutter = this.get('responsiveGutter')
      if (responsiveGutter) {
        if (responsiveGutter[0] > 0) {
          result.push({
            marginLeft: toPixel(responsiveGutter[0] / -2),
            marginRight: toPixel(responsiveGutter[0] / -2),
          })
        }
        if (responsiveGutter[1] > 0) {
          result.push({
            rowGap: toPixel(responsiveGutter[1]),
          })
        }
      }

      const style = this.get('style')
      if (style) {
        result.push(style)
      }

      if (result.length > 0) {
        return result
      }

    }
  },

  watchers: {
    autoWrap(autoWrap) {
      this.fire(
        {
          type: 'change',
          ns: 'row',
        },
        {
          autoWrap,
        },
        TRUE
      )
    },
    breakpoint(breakpoint) {
      this.fire(
        {
          type: 'change',
          ns: 'row',
        },
        {
          breakpoint,
        },
        TRUE
      )
    },
    responsiveGutter(responsiveGutter) {
      this.fire(
        {
          type: 'change',
          ns: 'row',
        },
        {
          responsiveGutter,
        },
        TRUE
      )
    }
  },

  afterMount() {

    const me = this
    const watcher = function (value) {
      me.set('breakpoint', value)
    }

    watchBreakpoint(watcher)

    const destroy = function (component) {
      if (component === me) {
        unwatchBreakpoint(watcher)
        Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy)
      }
    }
    Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy)

  }
})
