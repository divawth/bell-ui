import template from './template/MenuItem.html'

export default {
  propTypes: {
    name: {
      type: 'string'
    },
    hash: {
      type: 'string'
    },
    disabled: {
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

  data() {
    return {
      isActive: false
    }
  },

  events: {
    activeMenuChange(event, data) {
      let me = this;
      me.set({
        isActive: me.get('name') === data.name
      });
    }
  },

  methods: {
    click(name) {
      let me = this;
      if (me.get('disabled')) {
        return;
      }
      if (me.get('hash')) {
        location.href = me.get('hash');
      }

      me.set({
        isActive: true
      });

      me.fire(
        'menuItemActive',
        {
          name: name
        }
      );
    }
  }
};