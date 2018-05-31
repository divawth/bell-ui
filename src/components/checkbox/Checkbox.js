export default {
    template: `
        <label class="bell-checkbox
            {{#if className}} {{className}}{{/if}}
            {{#if disabled}} bell-checkbox-disabled{{/if}}
            {{#if type}} bell-checkbox-{{type}}{{/if}}
            {{#if size}} bell-checkbox-{{size}}{{/if}}
            {{#if isChecked}} bell-active{{/if}}
            {{#if indeterminate}} bell-checkbox-indeterminate{{/if}}
        "{{#if style}} style="{{style}}"{{/if}}>

            <span class="bell-checkbox-wrapper
                {{#if isChecked}} bell-active{{/if}}
            " on-click="click()">
                <span class="bell-checkbox-inner"></span>
                <input class="bell-checkbox-input" type="checkbox" value="{{value}}" />
            </span>

            <span class="bell-checkbox-label">
                {{#if label}}
                    {{label}}
                {{else}}
                    {{#if hasSlot('children')}}
                        <slot name="children" />
                    {{/if}}
                {{/if}}
            </span>

        </label>
    `,

    model: 'modelValue',

    propTypes: {
        className: {
            type: 'string'
        },
        style: {
            type: 'string'
        },
        label: {
            type: 'string'
        },
        modelValue: {
            type: 'string'
        },
        indeterminate: {
            type: ['numeric', 'boolean']
        },
        value: {
            type: ['numeric', 'boolean']
        },
        disabled: {
            type: ['string', 'boolean']
        },
        checked: {
            type: ['string', 'boolean']
        },
        type: {
            type: 'string'
        },
        size: {
            type: 'string'
        },
        onChange: {
            type: 'function'
        }
    },

    data() {
        let me = this;
        return {
            isChecked: me.get('checked') ? true : false
        }
    },

    events: {
        updateCheckboxValue(event, data) {
            let me = this;
            let isChecked = Yox.is.array(data.value)
                && Yox.array.has(data.value, me.get('value'));
            me.set({
                isChecked: isChecked,
                modelValue: isChecked
            });
            me.get('onChange') && me.get('onChange')(isChecked);
        },
        updateCheckboxType(event, data) {
            let me = this;
            me.set({
                type: data.type
            });
        },
        updateCheckboxDisabled(event, data) {
            let me = this;
            me.set({
                disabled: data.disabled
            });
        }
    },

    watchers: {
        modelValue(value) {
            this.set({
                isChecked: value,
            });
        }
    },

    methods: {
        click() {
            let me = this;
            if (me.get('disabled')) {
                return;
            }
            let isChecked = me.get('isChecked');
            me.fire(
                'updateCheckbox',
                {
                    isChecked: !isChecked,
                    value: me.get('value')
                }
            );
            me.set({
                isChecked: !isChecked,
                modelValue: !isChecked
            });
            me.get('onChange') && me.get('onChange')(!isChecked);
        }
    }
};