import template from './template/Layout.html'

export default {
  propTypes: {
    fixed: {
      type: 'boolean'
    },
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    }
  },

  template,

  data () {
    return {
      hasSider: false
    }
  },

  events: {
    hasSider(event) {
      if (event.phase === Yox.Event.PHASE_CURRENT) {
        return
      }
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        this.set({
          hasSider: true
        })
        this.fire(
          'hasSider',
          true
        )
      }
      // 阻止嵌套模式下 上层 layout 发下来的 hasSider 事件
      event.stop()
    }
  }
}