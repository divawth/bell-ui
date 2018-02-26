export default {
    template: `
<label class="bell-radio
{{#if isChecked}} bell-active{{/if}}
{{#if isDisabled}} bell-radio-disabled{{/if}}
">
    <span class="bell-radio-wrapper" on-click="click()">
        <span class="bell-redio-inner"></span>
        <input class="bell-radio-input" type="radio" value="{{value}}" />
    </span>

    <span class="bell-radio-label">
        {{#if label}}
            {{label}}
        {{else}}
            <slot name="children" />
        {{/if}}
    </span>
</label>
    `,

    propTypes: {
        label: {
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
        }
    },

    data: function () {
        let me = this;
        return {
            isChecked: me.get('checked'),
            name: '',
            isDisabled: me.get('disabled'),
        }
    },

    events: {
        updateRadioName: function (event, data) {
            this.set({
                name: data.name
            });
        },
        updateRadioValue: function (event, data) {
            var me = this;
            me.set({
                isChecked: data.value == me.get('value')
            });
        },
        updateRadioDisabled: function (event, data) {
            var me = this;
            me.set({
                isDisabled: data.disabled
            });
        }
    },

    methods: {
        click: function () {
            var me = this;
            if (me.get('isDisabled')) {
                return;
            }
            var isChecked = me.get('isChecked');
            me.set({
                isChecked: !isChecked
            });
            me.fire(
                'radioValueChange',
                {
                    value: me.get('value')
                }
            );
            return;
        }
    }
}