export default {

    template: `
        <div class="{{#if button}}bell-radio-button{{else}}bell-radio-group-wrapper{{/if}}
            {{#if type}} bell-radio-group-{{type}}{{/if}}
            {{#if size}} bell-radio-group-{{size}}{{/if}}
            {{#if disabled}} bell-radio-group-disabled{{/if}}
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
            type: 'numeric'
        },
        size: {
            type: 'numeric'
        },
        type: {
            type: 'string'
        },
        disabled: {
            type: ['string', 'boolean']
        },
        vertical: {
            type: ['string', 'boolean']
        },
        button: {
            type: ['string', 'boolean']
        },
        onChange: {
            type: 'function'
        }
    },

    events: {
        radioValueChange(event, data) {
            let me = this;
            me.set({
                value: data.value
            });
            me.get('onChange') && me.get('onChange')(data.value);
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