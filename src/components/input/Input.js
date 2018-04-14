let TEXT_TYPE_TEXTAREA = 'textarea';
let TEXT_TYPE_INPUT = 'input';

export default {
    template: `
        <div class="bell-{{type}}
        {{#if size}} bell-input-{{size}}{{/if}}
        {{#if isFocus}} bell-focus{{/if}}
        {{#if className}} bell-input-{{className}}{{/if}}
        {{#if clearable}} bell-input-clearable{{/if}}
        {{#if disabled}} bell-input-disabled{{/if}}"
        {{#if style}} style="{{style}}"{{/if}}
        >
            {{#if type === TEXT_TYPE_INPUT}}

                <input ref="input"
                    type="text"
                    class="bell-input-el
                        {{#if size}} bell-input-{{size}}{{/if}}
                    "
                    {{#if placeholder}} placeholder="{{placeholder}}"{{/if}}
                    {{#if disabled}} disabled="disabled"{{/if}}
                    model="value"
                    on-blur="blur()"
                    on-focus="focus()"
                ></input>

                {{#if clearable}}
                    <i class="bell-icon
                        icon-ios-close
                        bell-input-clear-icon
                    " on-click="clear()"></i>
                {{/if}}

            {{else if type === TEXT_TYPE_TEXTAREA}}

                <textarea class="bell-input-el"
                    style="height: {{#if rows}}{{rows * 25}}{{else}}50{{/if}}px"
                    {{#if rows}} rows="{{rows}}"{{/if}}
                    {{#if placeholder}} placeholder="{{placeholder}}" {{if}}
                    {{#if disabled}} disabled="disabled"{{/if}}
                    model="value"
                >
                </textarea>

            {{/if}}

        </div>
    `,

    propTypes: {
        style: {
            type: 'string'
        },
        size: {
            type: 'string'
        },
        className: {
            type: 'string'
        },
        type: {
            type: 'string'
        },
        placeholder: {
            type: 'string'
        },
        value: {
            type: ['string', 'number']
        },

        icon: {
            type: 'string'
        },
        rows: {
            type: 'string'
        },
        disabled: {
            type: 'string'
        },
        clearable: {
            type: ['string', 'number', 'boolean']
        },

        onChange: {
            type: 'function'
        },
        onFocus: {
            type: 'function'
        },
        onBlur: {
            type: 'function'
        },
        onClick: {
            type: 'function'
        },
        onEnter: {
            type: 'function'
        },
        onKeyup: {
            type: 'function'
        },
        onKeydown: {
            type: 'function'
        },
        onKeypress: {
            type: 'function'
        }
    },
    data: function () {
        return {
            TEXT_TYPE_INPUT: TEXT_TYPE_INPUT,
            TEXT_TYPE_TEXTAREA: TEXT_TYPE_TEXTAREA,
            isFocus: false
        }
    },

    watchers: {
        value: function (value) {
            this.get('onChange') && this.get('onChange')(value);
        }
    },

    methods: {
        blur: function (args) {
            this.set({
                isFocus: false
            });
            this.get('onBlur') && this.get('onBlur')(args);
        },
        focus: function (args) {
            this.set({
                isFocus: true
            });
            this.get('onFocus') && this.get('onFocus')(args);
        },
        clear: function () {
            this.set({
                value: ''
            });
        },
        labelClick: function (args) {
            var me = this;
            me.get('onChange') && me.get('onChange')(me.get('value'), args);
        }
    },
    afterMount: function () {
        var me = this;
        if (!me.$refs) {
            return;
        }
        me.documentKeydownHandler = function (event) {
            if (event.target == me.$refs.input) {
                me.get('onKeydown') && me.get('onKeydown')(event);
                if (event.keyCode === 13) {
                    me.get('onEnter') && me.get('onEnter')(event);
                }
            }
        };
        me.documentKeyupHandler = function (event) {
            if (event.target == me.$refs.input) {
                me.get('onKeyup') && me.get('onKeyup')(event);
            }
        };
        me.documentKeypressHandler = function (event) {
            if (event.target == me.$refs.input) {
                me.get('onKeypress') && me.get('onKeypress')(event);
            }
        };
        document.addEventListener(
            'keydown',
            me.documentKeydownHandler
        );
        document.addEventListener(
            'keyup',
            me.documentKeyupHandler
        );
        document.addEventListener(
            'keypress',
            me.documentKeypressHandler
        );
    },
    beforeDestroy: function () {
        var me = this;
        if (!me.$refs) {
            return;
        }
        document.removeEventListener(
            'keydown',
            me.documentKeydownHandler
        );
        document.removeEventListener(
            'keyup',
            me.documentKeyupHandler
        );
        document.removeEventListener(
            'keypress',
            me.documentKeypressHandler
        );
    },
}