import template from './template/Layout.html'

export default {
  propTypes: {
    fixed: {
      type: 'boolean'
    },
    hasSider(value) {
      return value ? true : false;
    },
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    }
  },

  data() {
    let me = this;
    return {
      hasSider: me.get('hasSider')
    };
  },

  template,

  events: {
    hasSider(event) {
      if (event.phase === 0) {
        return;
      }
      if (event.phase > 0) {
        this.set({
          hasSider: true
        });
        this.fire(
          'hasSider',
          true
        );
      }
      event.stop();
    }
  }
};