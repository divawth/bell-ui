export default {
    template: `
        <div class="bell-form
            {{#if className}} {{className}}{{/if}}
            {{#if inline}} bell-form-inline{{/if}}
        "{{#if style}} {{style}}{{/if}}>
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
        value: {
            type: 'object'
        },
        rules: {
            type: 'object'
        },
        inline: {
            type: 'boolean'
        },
        labelPosition: {
            type: ['left', 'right', 'top'],
            value: 'left'
        },
        labelWidth: {
            type: 'number'
        },
        showMessage: {
            type: 'boolean'
        }
    },
    methods: {
        getValue(){}
    },
    afterMount() {
        let me = this;
        me.fire(
            'setRules',
            {
                rules: me.get('rules'),
                value: me.get('value')
            },
            true
        );
    }
};