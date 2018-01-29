export default {
    template: `
<div class="bell-input-wrapper"
    {{#if style}} style="{{style}}"{{/if}}
>
    {{#if type != TEXT_TYPE_TEXTAREA}}
        {{#if !label}}
            {{$children}}
        {{else}}
            <span class="bell-input-label" on-click="click">
                {{label}}
            </span>
        {{/if}}

        <input type="text" class="bell-input{{#if size}} bell-input-{{size}}{{/if}}"
        {{#if placeholder}} placeholder="{{placeholder}}"{{/if}}
        {{#if disabled}}disabled="disabled"{{/if}}
        model="value" on-blur="blur()" on-focus="focus()"
        ></input>

    {{else}}
        <textarea class="bell-textarea"
            style="height: {{#if rows}}{{rows * 25}}{{else}}50{{/if}}px"
            {{#if rows}} rows="{{rows}}"{{/if}}
            {{#if placeholder}} placeholder="{{placeholder}}" {{if}}
            {{#if disabled}}disabled="disabled"{{/if}}
            model="value"
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
            type: ['string', 'number']
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
            type: 'string'
        },
        onChange: {
            type: 'function'
        },
        onBlur: {
            type: 'function'
        },
        onFocus: {
            type: 'function'
        }
    },
    data: function () {
        return {
            TEXT_TYPE_INPUT: 'input',
            TEXT_TYPE_TEXTAREA: 'textarea'
        }
    },

    watchers: {
        value: function (value) {
            this.get('onChange') && this.get('onChange')(value);
        }
    },

    methods: {
        blur: function () {
            this.get('onBlur') && this.get('onBlur')(arguments);
        },
        focus: function () {
            this.get('onFocus') && this.get('onFocus')(arguments);
        }
    }
}