import LayoutTpl from './template/Layout.html'

export default {
  template: LayoutTpl,

  data() {
    let me = this;
    return {
      hasSider: me.get('hasSider')
    };
  },

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    fixed: {
      type: 'boolean'
    },
    hasSider(value) {
      return value ? true : false;
    }
  },

  events: {
    hasSider(event, data) {
      let me = this;
      me.set({
        hasSider: data.hasSider
      });
      me.fire(
        'childrenHasSider',
        {},
        true
      );
      return false;
    }
  }
};