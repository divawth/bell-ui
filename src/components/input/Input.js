export default {
    template: `
    <div class="bell-input-wrapper"
    {{#if style}} style="{{style}}"{{/if}}
>

    {{#if type != TEXT_TYPE_TEXTAREA}}
        {{#if !label}}
        <i class="bell-input-icon{{#if icon}} icon{{/if}}" on-click="click"></i>
        {{else}}
        <span class="bell-input-label" on-click="click">
            {{label}}
        </span>
        {{/if}}

        <input type="text" class="bell-input{{#if size}} bell-input-{{size}}{{/if}}"
        {{#if placeholder}} placeholder="{{placeholder}}"{{/if}}
        {{#if disabled}}disabled="disabled"{{/if}}
        model="text"
        ></input>

    {{else}}
        <textarea class="bell-textarea"
            style="height: {{#if rows}}{{rows * 25}}{{else}}50{{/if}}px"
            {{#if rows}} rows="{{rows}}"{{/if}}
            {{#if placeholder}} placeholder="{{placeholder}}" {{if}}
            {{#if disabled}}disabled="disabled"{{/if}}
        >
        </textarea>
    {{/if}}

</div>
    `,

    propTypes: {
        placeholder: {
            type: 'string'
        },
        style: {
            type: 'string'
        },
        value: {
            type: 'string'
        },
        onValueChange: {
            type: 'function'
        },
        size: {
            type: 'string'
        },
        icon: {
            type: 'string'
        },
        label: {
            type: 'string'
        },
        type: {
            type: 'string'
        },
        rows: {
            type: 'string'
        },
        disabled: {
            type: 'boolean'
        }
    },
    data: function () {
        return {
            text: '',
            TEXT_TYPE_INPUT: 'input',
            TEXT_TYPE_TEXTAREA: 'textarea'
        }
    },
    watchers: {
        text: function (value) {
            var me = this;
            var onValueChange = me.get('onValueChange');
            if (onValueChange) {
                onValueChange(value);
            }
        }
    },
    afterMount: function () {
        var me = this;
        var value = me.get('value');

        me.set({
            text: value
        });
    }
}