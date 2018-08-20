export default {
    template: `
        <div class="bell-form-item
            {{#if className}} {{className}}{{/if}}
        "{{#if style}} {{style}}{{/if}}>
            {{#if label}}
            <label class="bell-form-item-label" style="width: {{labelWidth}}px;">
                {{label}}
            </label>
            {{/if}}
            <div 
                class="bell-form-item-content" 
                {{#if label}}style="padding-left: {{labelWidth}}px;"{{/if}}
            >
                {{#if hasSlot('children')}}
                    <slot name="children" />
                {{/if}}
            </div>
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
            type: 'number',
            value: 80
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