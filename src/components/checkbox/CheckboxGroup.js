export default {
    template: `
        <div class="bell-checkbox-group
            {{#if className}} {{className}}{{/if}}
            {{#if type}} bell-checkbox-group-{{type}}{{/if}}
            {{#if size}} bell-checkbox-group-{{size}}{{/if}}
            {{#if vertical}} bell-checkbox-vertical{{/if}}
        "{{#if style}} style="{{style}}"{{/if}}>
            {{#if hasSlot('children')}}
                <slot name="children" />
            {{/if}}
        </div>
    `,

    model: 'modelValue',

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
        modelValue: {
            type: 'array',
            value: () => {
                return [];
            }
        },
        size: {
            type: 'string'
        },
        type: {
            type: 'string'
        },
        disabled: {
            type: ['string', 'numeric', 'boolean']
        },
        vertical: {
            type: ['string', 'numeric', 'boolean']
        }
    },

    events: {
        change(events, data) {
            let me = this;
            if (events.target == me) {
                return;
            }
            events.stop();

            let result = Yox.is.array(me.get('modelValue')) ? me.copy(me.get('modelValue')) : [];
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
            me.fire('change', {
                value: result
            });
        }
    },
    watchers: {
        modelValue(value) {
            this.fire(
                'updateCheckboxValue',
                {
                    value: value
                },
                true
            );
        }
    },
    afterMount() {
        let me = this;
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