export default {
    template: `
        <div class="bell-input-number
        {{#if size}} bell-input-number-{{size}}{{/if}}
        {{#if disabled}} bell-input-number-disabled{{/if}}
        {{#if readonly}} bell-input-number-readonly{{/if}}
        {{#if isFocus}} bell-focus{{/if}}
        ">
            <div class="bell-input-number-actions">
                <span class="bell-icon icon-ios-arrow-up" on-click="up()"></span>
                <span class="bell-icon icon-ios-arrow-down" on-click="down()"></span>
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

    data: function () {
        return {
            isFocus: false
        }
    },

    propTypes: {
        maxValue: {
            type: ['number', 'string']
        },
        minValue: {
            type: ['number', 'string']
        },
        value: {
            type: ['number', 'string']
        },
        step: {
            type: ['number', 'string'],
            value: 1
        },
        size: {
            type: 'string'
        },
        readonly: {
            type: ['string', 'boolean']
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
            var value = me.decrease('value', me.get('step'), me.get('minValue'));
        },
        down: function () {
            var me = this;
            me.increase('value', me.get('step'), me.get('maxValue'));
        },
        blur: function (...args) {
            var me = this;
            me.set({
                isFocus: false
            });
            me.get('onBlur') && me.get('onBlur')(...args)
        },
        focus: function (...args) {
            var me = this;
            me.set({
                isFocus: true
            });
            me.get('onFocus') && me.get('onFocus')(...args)
        }
    }
}
