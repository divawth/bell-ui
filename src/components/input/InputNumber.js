export default {
    template: `
        <div class="bell-input-number
        {{#if size}} bell-input-number-{{size}}{{/if}}
        {{#if disabled}} bell-input-number-disabled{{/if}}
        {{#if readonly}} bell-input-number-readonly{{/if}}
        ">
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
        maxValue: {
            type: ['number', 'string']
        },
        minValue: {
            type: ['number', 'string']
        },
        value: {
            type: ['number', 'string'],
            value: 0
        },
        step: {
            type: ['number', 'string'],
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
        up: function () {
            var me = this;
            me.increase('value', me.get('step'), me.get('maxValue'));
        },
        down: function () {
            var me = this;
            var value = me.decrease('value', me.get('step'), me.get('minValue'));
        },
        blur: function (...args) {
            this.get('onBlur') && this.get('onBlur')(...args)
        },
        focus: function (...args) {
            this.get('onFocus') && this.get('onFocus')(...args)
        }
    }
}
