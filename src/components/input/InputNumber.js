export default {
    template: `
        <div class="bell-input-number
            {{#if className}} {{className}}{{/if}}
            {{#if size}} bell-input-number-{{size}}{{/if}}
            {{#if disabled}} bell-input-number-disabled{{/if}}
            {{#if readonly}} bell-input-number-readonly{{/if}}
        "{{#if style}} style="{{style}}"{{/if}}>

            <div class="bell-input-number-actions">
                <span class="bell-icon bell-icon-ios-arrow-up" on-click="up()"></span>
                <span class="bell-icon bell-icon-ios-arrow-down" on-click="down()"></span>
            </div>

            <div class="bell-input-number-wrapper">
                <input type="text" class="bell-input"
                {{#if disabled}}disabled="disabled"{{/if}}
                {{#if readonly || !editable}}readonly="readonly"{{/if}}
                model="value" on-blur="blur()" on-focus="focus()"
                ></input>
            </div>

        </div>
    `,
    propTypes: {
        className: {
            type: 'string'
        },
        style: {
            type: 'string'
        },
        maxValue: {
            type: 'numeric'
        },
        minValue: {
            type: 'numeric'
        },
        value: {
            type: 'numeric',
            value: 0
        },
        step: {
            type: 'numeric',
            value: 1
        },
        size: {
            type: 'string'
        },
        readonly: {
            type: 'boolean',
            value: false
        },
        disabled: {
            type: ['string', 'boolean']
        },
        editable: {
            type: ['string', 'boolean']
        },

        onChange: {
            type: 'function'
        },
        onFocus: {
            type: 'function'
        },
        onBlur: {
            type: 'function'
        }
    },

    methods: {
        up() {
            let me = this;
            me.increase('value', me.get('step'), me.get('maxValue'));
        },
        down() {
            let me = this;
            let value = me.decrease('value', me.get('step'), me.get('minValue'));
        },
        blur(...args) {
            this.get('onBlur') && this.get('onBlur')(...args)
        },
        focus(...args) {
            this.get('onFocus') && this.get('onFocus')(...args)
        }
    }
};
