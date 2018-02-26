export default {
    template: `
<label class="bell-checkbox
{{#if disabled}} bell-checkbox-disabled{{/if}}
{{#if type}} bell-checkbox-{{type}}{{/if}}
{{#if size}} bell-checkbox-{{size}}{{/if}}
{{#if isChecked}} bell-active{{/if}}
{{#if indeterminate}} bell-checkbox-indeterminate{{/if}}
">
    <span class="bell-checkbox-wrapper{{#if isChecked}} bell-active{{/if}}" on-click="click()">
        <span class="bell-checkbox-inner"></span>
        <input class="bell-checkbox-input" type="checkbox" value="{{value}}" />
    </span>

    <span class="bell-checkbox-label">
        {{#if label}}
            {{label}}
        {{else}}
            <slot name="children" />
        {{/if}}
    </span>
</label>
    `,

    model: 'modelValue',

    propTypes: {
        label: {
            type: 'string'
        },
        indeterminate: {
            type: ['string', 'number', 'boolean']
        },
        modelValue: {
            type: 'string'
        },
        value: {
            type: ['string', 'number', 'boolean']
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

    data: function () {
        let me = this;
        return {
            isChecked: me.get('checked') ? true : false
        }
    },

    events: {
        updateCheckboxValue: function (event, data) {
            var me = this;
            var isChecked = Yox.is.array(data.value) && Yox.array.has(data.value, me.get('value'));
            me.set({
                isChecked: isChecked,
                modelValue: isChecked
            });
            me.get('onChange') && me.get('onChange')(isChecked);
        },
        updateCheckboxType: function (event, data) {
            var me = this;
            me.set({
                type: data.type
            });
        },
        updateCheckboxDisabled: function (event, data) {
            var me = this;
            me.set({
                disabled: data.disabled
            });
        }
    },

    watchers: {
        modelValue: function (value) {
            this.set({
                isChecked: value,
            });
        }
    },

    methods: {
        click: function () {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            var isChecked = me.get('isChecked');
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
}