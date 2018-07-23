export default {
    template: `
        <div class="bell-form-item
            {{#if className}} {{className}}{{/if}}
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
        prop: {
            type: 'string'
        },
        label: {
            type: 'string'
        },
        labelWidth: {
            type: 'number'
        },
        required: {
            type: 'boolean'
        },
        rules: {
            type: 'number'
        },
        errorMsg: {
            type: 'string'
        }
    },
    data() {
        return {
            rules: [],
            defaultValue: ''
        }
    },
    events: {
        setRules(event, data) {
            let me = this;
            let prop = me.get('prop');
            let defaultValue = data.value && data.value[prop];
            let rules = data.rules && data.rules[prop];
            me.set({
                rules,
                defaultValue
            });
        }
    }
};