import TagTpl from './template/Tag.html'

export default {
  template: TagTpl,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    size: {
      type: 'string'
    },
    closable: {
      type: 'boolean',
      value: false
    },
    border: {
      type: 'boolean',
      value: false
    },
    type: {
      type: 'string'
    },
    checkable: {
      type: 'boolean',
      value: false
    },
    checked: {
      type: 'boolean',
      value: true
    }
  },

  watchers: {
    checked(value) {
      this.fire(
        'check',
        {
          value: value
        }
      );
    }
  },

  methods: {
    click() {
      let me = this;
      if (!me.get('checkable')) {
        return;
      }
      me.toggle('checked');
    },
    close() {
      this.fire('close');
    }
  }
};