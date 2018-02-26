export default {
    template: `
<div class="bell-switch
{{#if type}} bell-switch-{{type}}{{/if}}
{{#if size}} bell-switch-{{size}}{{/if}}
{{#if disabled}} bell-switch-disabled{{/if}}
{{#if isChecked}} bell-active{{/if}}
{{#if className}} {{className}}{{/if}}
" on-click="click()">
    <span class="bell-switch-button">
        {{#if $children}}
            <slot name="children" />
        {{else if size != 'small'}}
            {{#if isChecked}}
                {{#if onLabel}}
                    <span class="bell-switch-on">
                        {{onLabel}}
                    </span>
                {{/if}}
            {{else}}
                {{#if offLabel}}
                    <span class="bell-switch-off">
                        {{offLabel}}
                    </span>
                {{/if}}
            {{/if}}
        {{/if}}
    </span>
    <input class="bell-switch-input" type="hidden" value="{{value}}" />
</div>
    `,
    model: 'modelValue',
    propTypes: {
        className: {
            type: 'string'
        },
        label: {
            type: 'string'
        },
        modelValue: {
            type: 'string'
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
        },
        onLabel: {
            type: 'string'
        },
        offLabel: {
            type: 'string'
        }
    },

    data: function () {
        let me = this;
        return {
            isChecked: me.get('checked') ? true : false
        }
    },

    methods: {
        click: function () {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            var isChecked = me.get('isChecked');
            me.set({
                isChecked: !isChecked,
                modelValue: !isChecked
            });
            me.get('onChange') && me.get('onChange')(!isChecked);
        }
    }
}