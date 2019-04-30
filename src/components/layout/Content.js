import ContentTpl from './template/Content.html'

export default {
  template: ContentTpl,

  events: {
    childrenHasSider(value) {
      this.set({
        hasSider: value
      });
    }
  },

  data() {
    return {
      hasSider: false
    }
  },

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    }
  }
};