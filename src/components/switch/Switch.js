export default {
    template: `
        <div class="bell-switch
            {{#if type}} bell-switch-{{type}}{{/if}}
            {{#if size}} bell-switch-{{size}}{{/if}}
            {{#if disabled}} bell-switch-disabled{{/if}}
            {{#if isChecked}} bell-active{{/if}}
            {{#if className}} {{className}}{{/if}}
        "{{#if style}} style="{{style}}"{{/if}} on-click="click()">

            <span class="bell-switch-button">
                <span class="bell-switch-on">
                    {{#if hasSlot('checkedText')}}
                        <slot name="checkedText" />
                    {{/if}}
                </span>
                <span class="bell-switch-off">
                    {{#if hasSlot('unCheckedText')}}
                        <slot name="unCheckedText" />
                    {{/if}}
                </span>
            </span>
            <input class="bell-switch-input" type="hidden" value="{{value}}" />
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
        label: {
            type: 'string'
        },
        modelValue: {
            type: 'string'
        },
        type: {
            type: 'string'
        },
        size: {
            type: 'string'
        },
        disabled: {
            type: ['numeric', 'string', 'boolean']
        },
        checked: {
            type: ['numeric', 'string', 'boolean']
        },
        onLabel: {
            type: 'string'
        },
        offLabel: {
            type: 'string'
        }
    },

    data() {
        let me = this;
        return {
            isChecked: me.get('checked') ? true : false
        }
    },

    methods: {
        click() {
            let me = this;
            if (me.get('disabled')) {
                return;
            }
            let isChecked = me.get('isChecked');
            me.set({
                isChecked: !isChecked,
                modelValue: !isChecked
            });
            me.fire(
                'change',
                {
                    isChecked: !isChecked
                }
            );
        }
    }
};