export default {
    template: `
        <div class="bell-tabs-panel
        {{#if isActive}} active{{/if}}">
            {{#if hasSlot('children')}}
                <slot name="children" />
            {{/if}}
        </div>
    `,
    propTypes: {
        name: {
            type: 'string'
        },
        label: {
            type: 'string'
        }
    },

    data: function () {
        return {
            isActive: false
        }
    },

    events: {
        tabsValueUpdate: function (event, data) {
            var me = this;
            if (!data.value) {
                return;
            }
            me.set({
                isActive: me.get('name') == data.value
            });
        }
    },

    afterMount: function () {
        var me = this;
        me.fire(
            'addTabLabel',
            {
                label: me.get('label'),
                name: me.get('name')
            }
        );
    }
}