export default {
    template: `
<div class="
bell-checkbox-group
{{#if type}} bell-checkbox-group-{{type}}{{/if}}
{{#if size}} bell-checkbox-group-{{size}}{{/if}}
{{#if vertical}} bell-checkbox-vertical{{/if}}
">
    {{$children}}
</div>
    `,
    model: 'modelValue',
    propTypes: {
        name: {
            type: 'string'
        },
        modelValue: {
            type: 'array',
            value: function () {
                return [];
            }
        },
        size: {
            type: ['string', 'number']
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
        onChange: {
            type: 'function'
        }
    },

    events: {
        updateCheckbox: function (events, data) {
            var me = this;
            var result = Yox.is.array(me.get('modelValue')) ? me.get('modelValue') : [];
            if (data.isChecked) {
                if (Yox.array.indexOf(result, data.value) === -1) {
                    result.push(data.value);
                }
            }
            else {
                Yox.array.remove(result, data.value);
            }

            me.set({
                modelValue: result
            });
            me.get('onChange') && me.get('onChange')(result);
        }
    },
    watchers: {
        modelValue: function (value) {
            this.fire(
                'updateCheckboxValue',
                {
                    value: value
                },
                true
            );
        }
    },
    afterMount: function () {
        var me = this;
        if (me.get('type')) {
            me.fire(
                'updateCheckboxType',
                {
                    type: me.get('type')
                },
                true
            );
        }
        if (me.get('disabled')) {
            me.fire(
                'updateCheckboxDisabled',
                {
                    disabled: me.get('disabled')
                },
                true
            );
        }
    }
}