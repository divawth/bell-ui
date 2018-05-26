export default {
    template: `
        <div class="bell-menu
            {{#if mode}} bell-menu-{{mode}}{{/if}}
            {{#if theme}} bell-menu-{{theme}}{{/if}}
        ">
            {{#if hasSlot('children')}}
                <slot name="children" />
            {{/if}}
        </div>
    `,

    propTypes: {
        mode: {
            type: 'string'
        },
        theme: {
            type: 'string',
            value: 'dark'
        },
        activeName: {
            type: ['string', 'number'],
            value: -1
        },
        openNames: {
            type: 'array'
        },
        onSelect: {
            type: 'function'
        }
    },

    events: {
        menuItemActive: function (event, data) {
            this.updateActiveName(data.name);
        }
    },

    methods: {
        updateActiveName: function (name) {
            var me = this;
            me.fire(
                'activeMenuChange',
                {
                    name: name
                },
                true
            );
        }
    },

    watchers: {
        activeName: function (activeName) {
            var me = this;
            me.get('onSelect') && me.get('onSelect')(activeName);
            me.updateActiveName(activeName);
        }
    },

    afterMount: function () {
        var me = this;
        me.updateActiveName(me.get('activeName'));
        var openNames = me.get('openNames');
        if (openNames && openNames.length) {
            me.fire(
                'activeSubMenuChange',
                {
                    openNames: openNames
                },
                true
            );
        }
    }
}