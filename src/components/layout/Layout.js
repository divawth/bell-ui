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
      if (event.phase === 0) {
        return
      }
      if (event.phase > 0) {
        this.set({
          hasSider: true
        })
        this.fire(
          'hasSider',
          true
        )
      }
      event.stop()
    }
  }
}