export default {
    template: `
        <div class="bell-menu
            {{#if className}} {{className}}{{/if}}
            {{#if mode}} bell-menu-{{mode}}{{/if}}
            {{#if theme}} bell-menu-{{theme}}{{/if}}
        "{{#if style}} style="{{style}}"{{/if}}>

            {{#if hasSlot('children')}}
                <slot name="children" />
            {{/if}}

        </div>
    `,

    propTypes: {
        className: {
            type: 'string'
        },
        style: {
            type: 'string'
        },
        mode: {
            type: 'string'
        },
        theme: {
            type: 'string',
            value: 'dark'
        },
        activeName: {
            type: 'numeric',
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
        menuItemActive(event, data) {
            let me = this;
            me.get('onSelect') && me.get('onSelect')(data.name);
            me.updateActiveName(data.name);
        }
    },

    methods: {
        updateActiveName(name) {
            let me = this;
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
        activeName(activeName) {
            let me = this;
            me.get('onSelect') && me.get('onSelect')(activeName);
            me.updateActiveName(activeName);
        }
    },

    afterMount() {
        let me = this;
        me.updateActiveName(me.get('activeName'));
        let openNames = me.get('openNames');
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
};