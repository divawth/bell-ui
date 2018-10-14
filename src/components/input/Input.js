let TEXT_TYPE_PASSWORD = 'password';
let TEXT_TYPE_TEXTAREA = 'textarea';
let TEXT_TYPE_TEXT = 'text';

export default {
    template: `
        <div class="bell-input-wrapper
            {{#if hasSlot('prepend')}} bell-input-has-prepend{{/if}}
            {{#if hasSlot('append')}} bell-input-has-append{{/if}}
            {{#if className}} {{className}}{{/if}}
            {{#if size}} bell-input-wrapper-{{size}}{{/if}}
            {{#if status}} bell-input-wrapper-{{status}}{{/if}}
            {{#if isFocus}} bell-focus{{/if}}
            {{#if clearable}} bell-input-wrapper-clearable{{/if}}
            {{#if disabled}} bell-input-wrapper-disabled{{/if}}
            "{{#if style}} style="{{style}}"{{/if}}
        >

            {{#if hasSlot('prepend')}}
                <div class="bell-input-prepend">
                    <slot name="prepend" />
                </div>
            {{/if}}

            <div class="bell-input{{#if type === TEXT_TYPE_TEXTAREA}} bell-textarea{{/if}}">

                {{#if type === TEXT_TYPE_TEXTAREA}}

                    <textarea class="bell-input-el"
                        style="height: {{#if rows}}{{rows * 25}}{{else}}50{{/if}}px"
                        {{#if rows}} rows="{{rows}}"{{/if}}
                        {{#if placeholder}} placeholder="{{placeholder}}"{{/if}}
                        {{#if disabled}} disabled{{/if}}
                        model="value"
                    >
                    </textarea>

                {{else}}

                    <input ref="input"
                        type="{{currentType}}"
                        class="bell-input-el
                            {{#if size}} bell-input-{{size}}{{/if}}
                        "
                        {{#if placeholder}} placeholder="{{placeholder}}"{{/if}}
                        {{#if disabled}} disabled="disabled"{{/if}}
                        model="value"
                        on-blur="blur()"
                        on-focus="focus()"
                    />

                    {{#if clearable}}
                        <i class="bell-icon
                            bell-icon-ios-close
                            bell-input-clear-icon
                        " on-click="clear()"></i>
                    {{/if}}

                    {{#if secure}}
                        {{#if isSecure}}
                            <i class="bell-icon
                                bell-icon-eye
                                bell-input-icon-eye
                            " on-click="toggle('isSecure')"></i>
                        {{else}}
                            <i class="bell-icon
                                bell-icon-eye-disabled
                                bell-input-icon-eye
                            " on-click="toggle('isSecure')"></i>
                        {{/if}}
                    {{/if}}

                {{/if}}

            </div>
            {{#if hasSlot('append')}}
                <div class="bell-input-append">
                    <slot name="append" />
                </div>
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
        status: {
            type: 'string'
        },
        placeholder: {
            type: 'string'
        },
        value: {
            type: 'string'
        },
        icon: {
            type: 'string'
        },
        rows: {
            type: 'number'
        },
        disabled: {
            type: 'boolean'
        },
        clearable: {
            type: 'boolean'
        },
        secure: {
            type: 'boolean'
        }
    },

    data() {
        let me = this;
        return {
            TEXT_TYPE_TEXT: TEXT_TYPE_TEXT,
            TEXT_TYPE_TEXTAREA: TEXT_TYPE_TEXTAREA,
            TEXT_TYPE_PASSWORD: TEXT_TYPE_PASSWORD,

            isSecure: true,
            isFocus: false,
            currentType: me.get('type')
        }
    },

    watchers: {
        value(value) {
            this.fire(
                'change',
                {
                    value: value
                }
            );
        },
        isSecure(isSecure) {
            this.set({
                currentType: isSecure ? TEXT_TYPE_PASSWORD : TEXT_TYPE_TEXT
            });
        }
    },

    methods: {
        blur(args) {
            this.set({
                isFocus: false
            });
            this.fire('blur');
        },
        focus(args) {
            this.set({
                isFocus: true
            });
            this.fire('focus');
        },
        clear() {
            this.set({
                value: ''
            });
        }
    },

    afterMount() {
        let me = this;

        me.documentKeydownHandler = function (event) {
            event = event.originalEvent;
            if (me.$refs && event.target == me.$refs.input) {
                me.fire('keydown');
                if (event.keyCode === 13) {
                    me.fire('enter');
                }
            }
        };
        me.documentKeyupHandler = function (event) {
            event = event.originalEvent;
            if (me.$refs && event.target == me.$refs.input) {
                me.fire('keyup');
            }
        };
        me.documentKeypressHandler = function (event) {
            event = event.originalEvent;
            if (me.$refs && event.target == me.$refs.input) {
                me.fire('keypress');
            }
        };
        Yox.dom.on(
            document,
            'keydown',
            me.documentKeydownHandler
        );
        Yox.dom.on(
            document,
            'keyup',
            me.documentKeyupHandler
        );
        Yox.dom.on(
            document,
            'keypress',
            me.documentKeypressHandler
        );
    },

    beforeDestroy() {
        let me = this;
        Yox.dom.off(
            document,
            'keydown',
            me.documentKeydownHandler
        );
        Yox.dom.off(
            document,
            'keyup',
            me.documentKeyupHandler
        );
        Yox.dom.off(
            document,
            'keypress',
            me.documentKeypressHandler
        );
    }
};