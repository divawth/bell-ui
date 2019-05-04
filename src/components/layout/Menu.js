import template from './template/Menu.html'

export default {
  propTypes: {
    mode: {
      type: 'string',
      value: 'horizontal'
    },
    theme: {
      type: 'string',
      value: 'dark'
    },
    activeName: {
      type: ['numeric', 'string'],
      value: -1
    },
    openNames: {
      type: 'array'
    },
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    }
  },

  template,

  events: {
    menuItemActive(event, data) {
      let me = this;
      me.fire(
        'select',
        {
          name: data.name
        }
      );
      me.updateActiveName(data.name);
    }
  },

  methods: {
    updateActiveName(name) {
      let me = this;
      me.fire(
        'activeMenuChange',
        {
          name: name
        },
        true
      );
    }
  },

  watchers: {
    activeName(activeName) {
      let me = this;
      me.fire(
        'select',
        {
          name: activeName
        }
      );
      me.updateActiveName(activeName);
    }
  },

  afterMount() {
    let me = this;
    me.updateActiveName(me.get('activeName'));
    let openNames = me.get('openNames');
    if (openNames && openNames.length) {
      me.fire(
        'activeSubMenuChange',
        {
          openNames: openNames
        },
        true
      );
    }
  }
};