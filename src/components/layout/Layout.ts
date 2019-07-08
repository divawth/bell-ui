import Yox, { CustomEventInterface } from 'yox'

import template from './template/Layout.hbs'

import {
  FALSE,
  TRUE,
  RAW_STRING,
  RAW_BOOLEAN
} from '../constant'

export default Yox.define({
  propTypes: {
    fixed: {
      type: RAW_BOOLEAN
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
      hasSider: FALSE
    }
  },

  events: {
    'hasSider.sider': function(event: CustomEventInterface) {
      const me = this
      if (event.phase === Yox.Event.PHASE_CURRENT) {
        return
      }
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        me.set({
          hasSider: TRUE
        })
        me.fire(
          'hasSider.layout',
          TRUE
        )
      }
      // 阻止嵌套模式下 上层 layout 发下来的 hasSider 事件
      event.stop()
    }
  }
})
