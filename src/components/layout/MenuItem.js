export default {
    template: `
        <div class="bell-menu-item
            {{#if className}} {{className}}{{/if}}
            {{#if isActive}} bell-active{{/if}}
        " style="{{style}}" on-click="click(name)">

            <span class="bell-left-icon">
                {{#if hasSlot('leftIcon')}}
                    <slot name="leftIcon" />
                {{/if}}
            </span>

            <span class="bell-menu-item-content">
                {{#if hasSlot('children')}}
                    <slot name="children" />
                {{/if}}
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
        name: {
            type: 'string'
        },
        hash: {
            type: 'string'
        },
        disabled: {
            type: 'boolean'
        }
    },

    data() {
        return {
            isActive: false
        }
    },

    events: {
        activeMenuChange(event, data) {
            let me = this;
            me.set({
                isActive: me.get('name') === data.name
            });
        }
    },

    methods: {
        click(name) {
            let me = this;
            if (me.get('disabled')) {
                return;
            }
            if (me.get('hash')) {
                location.href = me.get('hash');
            }

            me.set({
                isActive: true
            });

            me.fire(
                'menuItemActive',
                {
                    name: name
                }
            );
        }
    }
};