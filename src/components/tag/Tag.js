export default {
    template: `
        <div class="bell-tag
            {{#if className}} {{className}}{{/if}}
            {{#if border}} bell-tag-border{{/if}}
            {{#if size}} {{size}}{{/if}}
            {{#if type}} {{type}}{{/if}}
            {{#if checked}} bell-tag-checked{{/if}}
        "{{#if style}} style="{{style}}"{{/if}} on-click="click()">
            <div class="bell-tag-text">
                {{#if hasSlot('children')}}
                    <slot name="children" />
                {{/if}}

                {{#if closable}}
                    <i class="bell-tag-close-icon bell-icon bell-icon-ios-close-empty" on-click="close()"></i>
                {{/if}}
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
        size: {
            type: 'string'
        },
        closable: {
            type: 'boolean',
            value: false
        },
        border: {
            type: 'boolean',
            value: false
        },
        type: {
            type: 'string'
        },
        checkable: {
            type: 'boolean',
            value: false
        },
        checked: {
            type: 'boolean',
            value: true
        }
    },

    watchers: {
        checked(value) {
            this.fire(
                'check',
                {
                    value: value
                }
            );
        }
    },

    methods: {
        click() {
            let me = this;
            if (!me.get('checkable')) {
                return;
            }
            me.toggle('checked');
        },
        close() {
            this.fire('close');
        }
    }
};