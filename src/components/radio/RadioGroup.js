import RadioGroupTpl from './template/RadioGroup.html'

export default {

  template: RadioGroupTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    value: {
      type: 'string'
    },
    size: {
      type: 'string'
    },
    type: {
      type: 'string'
    },
    disabled: {
      type: ['numeric', 'boolean']
    },
    vertical: {
      type: ['numeric', 'boolean']
    },
    button: {
      type: ['numeric', 'boolean']
    }
  },

  events: {
    radioValueChange(event, data) {
      let me = this;
      me.set({
        value: data.value
      });

      me.fire(
        'change',
        {
          value: data.value
        }
      );

      me.fire(
        'updateRadioValue',
        {
          value: data.value
        },
        true
      );
    }
  },
  afterMount() {
    let me = this;
    me.fire(
      'updateRadioName',
      {
        name: me.get('name')
      },
      true
    );
    
    me.fire(
      'updateRadioValue',
      {
        value: me.get('value')
      },
      true
    );

    if (me.get('disabled')) {
      me.fire(
        'updateRadioDisabled',
        {
          disabled: me.get('disabled') ? true : false
        },
        true
      );
    }
  }
};