export default {

  template: `
        <div class="{{#if button}}bell-radio-button{{else}}bell-radio-group{{/if}}
            {{#if type && button}} bell-radio-button-{{type}}{{else if type}} bell-radio-group-{{type}}{{/if}}
            {{#if size && button}} bell-radio-button-{{size}}{{/if}}
            {{#if disabled && button}} bell-radio-button-disabled{{else if disabled}} bell-radio-group-disabled{{/if}}
            {{#if vertical}} bell-radio-vertical{{/if}}
            {{#if className}} {{className}}{{/if}}
        "{{#if style}} style="{{style}}"{{/if}}>

            {{#if hasSlot('children')}}
                <slot name="children" />
            {{/if}}

        </div>
    `,

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