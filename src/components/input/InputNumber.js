export default {
    template: `
        <div class="bell-input-number
            {{#if className}} {{className}}{{/if}}
            {{#if size}} bell-input-number-{{size}}{{/if}}
            {{#if status}} bell-input-number-{{status}}{{/if}}
            {{#if disabled}} bell-input-number-disabled{{/if}}
            {{#if readonly}} bell-input-number-readonly{{/if}}
            {{#if isFocus}} bell-focus{{/if}}
        "{{#if style}} style="{{style}}"{{/if}}>

            <span class="bell-input-number-wrapper">
                <input type="text" class="bell-input"
                {{#if disabled}}disabled="disabled"{{/if}}
                {{#if readonly || !editable}}readonly="readonly"{{/if}}
                model="value" on-blur="blur()" on-focus="focus()"
                ></input>
            </span>

            <span class="bell-input-number-actions">
                <span class="bell-icon bell-icon-up bell-icon-ios-arrow-up"
                    {{#if maxValue != null && value >= maxValue}} disabled="disabled"{{/if}}
                    on-click="up()"></span>
                <span class="bell-icon bell-icon-down bell-icon-ios-arrow-down"
                    {{#if minValue != null && value <= minValue}} disabled="disabled"{{/if}}
                    on-click="down()"
                ></span>
            </span>

        </div>
    `,
    propTypes: {
        className: {
            type: 'string'
        },
        style: {
            type: 'string'
        },
        status: {
            type: 'string'
        },
        maxValue: {
            type: 'numeric'
        },
        minValue: {
            type: 'numeric',
            value: 0
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
            type: ['numeric', 'boolean'],
            value: false
        },
        disabled: {
            type: ['numeric', 'boolean']
        },
        editable: {
            type: ['numeric', 'boolean'],
            value: true
        }
    },

    data() {
        return {
            isFocus: false
        }
    },

    watchers: {
        value(val) {
            let me = this;
            if (!Yox.is.numeric(val)) {
                me.set({
                    value: me.get('minValue')
                });
                return;
            }
            me.fire(
                'change',
                {
                    value: val
                }
            );
        }
    },

    methods: {
        up() {
            let me = this;
            me.increase('value', me.get('step'), me.get('maxValue'));
            me.fire('change', {
                value: me.get('value')
            });
        },
        down() {
            let me = this;
            let value = me.decrease('value', me.get('step'), me.get('minValue'));
            me.fire('change', {
                value: me.get('value')
            });
        },
        blur() {
            let me = this;
            me.set({
                isFocus: false
            });
            me.fire('blur');
        },
        focus() {
            let me = this;
            me.set({
                isFocus: true
            });
            this.fire('focus');
        }
    }
};
