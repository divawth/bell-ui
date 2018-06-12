export default {
    template: `
        <label class="bell-radio
            {{#if className}} {{className}}{{/if}}
            {{#if isChecked}} bell-active{{/if}}
            {{#if isDisabled}} bell-radio-disabled{{/if}}
        "{{#if style}} style="{{style}}"{{/if}}>

            <span class="bell-radio-wrapper" on-click="click()">
                <span class="bell-radio-inner"></span>
                <input class="bell-radio-input" type="radio" value="{{value}}" />
            </span>

            <span class="bell-radio-label">
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
        value: {
            type: ['numeric', 'boolean', 'string']
        },
        disabled: {
            type: ['numeric', 'boolean']
        },
        checked: {
            type: ['numeric', 'boolean']
        }
    },

    data() {
        let me = this;
        return {
            isChecked: me.get('checked'),
            name: '',
            isDisabled: me.get('disabled'),
        }
    },

    events: {
        updateRadioName(event, data) {
            this.set({
                name: data.name
            });
        },
        updateRadioValue(event, data) {
            let me = this;
            me.set({
                isChecked: data.value == me.get('value')
            });
        },
        updateRadioDisabled(event, data) {
            let me = this;
            me.set({
                isDisabled: data.disabled
            });
        }
    },

    methods: {
        click() {
            let me = this;
            if (me.get('isDisabled')) {
                return;
            }

            me.fire(
                'radioValueChange',
                {
                    value: me.get('value')
                }
            );
            return;
        }
    }
};