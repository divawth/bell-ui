export default {
    template: `
        <div class="bell-tag
        {{#if border}} bell-tag-border{{/if}}
        {{#if size}} {{size}}{{/if}}
        {{#if type}} {{type}}{{/if}}
        {{#if checked}} bell-tag-checked{{/if}}
        " on-click="click()">
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
        },
        onClose: {
            type: 'function'
        },
        onChecked: {
            type: 'function'
        }
    },

    watchers: {
        checked: function (value) {
            me.get('onChecked') && me.get('onChecked')(value);
        }
    },

    methods: {
        click: function () {
            var me = this;
            if (!me.get('checkable')) {
                return;
            }
            me.toggle('checked');
        },
        close: function () {
            var me = this;
            me.get('onClose') && me.get('onClose')();
        }
    }
}