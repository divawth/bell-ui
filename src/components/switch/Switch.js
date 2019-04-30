
import SwitchTpl from './template/Switch.html'

export default {
  template: SwitchTpl,

  model: 'checked',

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    type: {
      type: 'string'
    },
    size: {
      type: 'string'
    },
    disabled: {
      type: 'boolean'
    },
    checked: {
      type: 'boolean'
    }
  },

  methods: {
    click() {
      let me = this;
      if (me.get('disabled')) {
        return;
      }

      me.toggle('checked');
      me.fire(
        'change',
        {
          checked: me.get('checked')
        }
      );
    }
  }
};