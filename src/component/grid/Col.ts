import Yox, { Data } from 'yox'

import template from './template/Col.hbs'

import {
  RAW_STRING,
  RAW_NUMBER,
  RAW_NUMERIC,
  RAW_OBJECT,
  RAW_STYLE_TYPE,
} from '../constant'

import { findComponentUpward, toPixel } from '../util'

import {
  responsiveArray
} from './util'

export default Yox.define({

  template,

  name: '${prefix}Col',

  propTypes: {
    flex: {
      type: [RAW_NUMBER, RAW_STRING],
    },
    span: {
      type: RAW_NUMERIC,
    },
    order: {
      type: RAW_NUMERIC,
    },
    offset: {
      type: RAW_NUMERIC,
    },
    pull: {
      type: RAW_NUMERIC,
    },
    push: {
      type: RAW_NUMERIC,
    },
    xs: {
      type: [RAW_NUMERIC, RAW_OBJECT],
    },
    sm: {
      type: [RAW_NUMERIC, RAW_OBJECT],
    },
    md: {
      type: [RAW_NUMERIC, RAW_OBJECT],
    },
    lg: {
      type: [RAW_NUMERIC, RAW_OBJECT],
    },
    xl: {
      type: [RAW_NUMERIC, RAW_OBJECT],
    },
    xxl: {
      type: [RAW_NUMERIC, RAW_OBJECT],
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  data(options) {
    const row = findComponentUpward(options.parent, '${prefix}Row')
    return {
      autoWrap: row.get('autoWrap'),
      breakpoint: row.get('breakpoint'),
      responsiveGutter: row.get('responsiveGutter'),
    }
  },

  events: {
    change: {
      listener(_, data) {
        this.set(data)
      },
      ns: 'row',
    }
  },

  computed: {
    responsiveClass() {
      const me = this
      const breakpoint = me.get('breakpoint')

      const breakpointList = responsiveArray.map(
        function (breakpoint) {
          return me.get(breakpoint)
        }
      )

      let breakpointName: string | void
      let breakpointConfig: Data | void
      const startIndex = responsiveArray.indexOf(breakpoint)
      if (startIndex >= 0) {
        for (let i = startIndex; i >= 0; i--) {
          const value = breakpointList[i]
          if (value) {
            breakpointName = responsiveArray[i]
            breakpointConfig = value
            break
          }
        }
      }

      if (breakpointConfig) {
        const result: string[] = []
        if (Yox.is.object(breakpointConfig)) {
          const { span, order, offset, pull, push } = breakpointConfig
          if (span) {
            result.push('${prefix}col-' + breakpointName + '-' + span)
          }
          if (order) {
            result.push('${prefix}col-' + breakpointName + '-order-' + order)
          }
          if (offset) {
            result.push('${prefix}col-' + breakpointName + '-offset-' + offset)
          }
          if (pull) {
            result.push('${prefix}col-' + breakpointName + '-pull-' + pull)
          }
          if (push) {
            result.push('${prefix}col-' + breakpointName + '-push-' + push)
          }
        }
        else if (Yox.is.numeric(breakpointConfig)) {
          result.push('${prefix}col-' + breakpointName + '-' + breakpointConfig)
        }
        if (result.length) {
          return result.join(' ')
        }
      }

    },
    inlineStyle(): object[] | void {

      const result: object[] = []

      const customStyle: Record<string, string | number> = {}

      const flex = this.get('flex')
      if (Yox.is.numeric(flex)) {
        customStyle.flex = `${flex} ${flex} auto`
      }
      else if (flex && Yox.is.string(flex)) {
        customStyle.flex = /^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)
          ? `0 0 ${flex}`
          : flex
      }

      const autoWrap = this.get('autoWrap')
      // Hack for Firefox to avoid size issue
      // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
      if (!autoWrap && customStyle.flex) {
        customStyle.minWidth = 0
      }

      const responsiveGutter = this.get('responsiveGutter')
      if (responsiveGutter && responsiveGutter[0] > 0) {
        customStyle.paddingLeft = toPixel(responsiveGutter[0] / 2)
        customStyle.paddingRight = toPixel(responsiveGutter[0] / 2)
      }

      if (Yox.object.keys(customStyle).length) {
        result.push(customStyle)
      }

      const style = this.get('style')
      if (style) {
        result.push(style)
      }

      if (result.length) {
        return result
      }

    }
  },
})
