export default {
    template: `
        <div class="bell-layout-sider bell-col-span-6
            {{#if className}} {{className}}{{/if}}
            {{#if collapsed}} bell-sider-collapsed{{/if}}
        "
        {{#if style}} style="{{style}}"{{/if}}>
            {{#if hasSlot('children')}}
                <slot name="children" />
            {{/if}}

            {{#if collapsible}}
                <div class="bell-sider-trigger" on-click="toggle('collapsed')">
                    {{#if collapsed}}
                        <i class="bell-icon bell-icon-chevron-right"></i>
                    {{else}}
                        <i class="bell-icon bell-icon-chevron-left"></i>
                    {{/if}}
                </div>
            {{/if}}
        </div>
    `,
    propTypes: {
        style: {
            type: 'string'
        },
        className: {
            type: 'string'
        },
        collapsible: {
            type: ['string', 'boolean']
        },
        onToggleCollapse: {
            type: 'toggle'
        }
    },

    data: function () {
        return {
            collapsed: false
        }
    },

    wactchers: {
        collapsed: function (value) {
            this.get('onToggleCollapse') && this.get('onToggleCollapse')(value);
        }
    },

    afterMount: function () {
        var me = this;
        me.fire(
            'hasSider',
            {
                hasSider: true
            }
        );
    }
}