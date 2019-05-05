import template from './template/Content.html'

export default {
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    }
  },

  template,

  events: {
    hasSider(event) {
      this.set({
        hasSider: true
      })
    }
  },

  data() {
    return {
      hasSider: false
    }
  }
}