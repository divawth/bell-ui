export default {
    template: `
        <div class="bell-collapse
        {{#if className}} {{className}}{{/if}}
        ">
            {{$children}}
        </div>
    `,
    propTypes: {
        className: {
            type: 'string'
        },
        activeName: {
            type: ['string', 'number']
        },
        accordion: {
            type: ['string', 'number', 'boolean']
        }
    },

    events: {
        panelOpen: function (event, data) {
            var me = this;
            if (data.name) {
                me.fire(
                    'panelActiveName',
                    {
                        name: name
                    },
                    true
                );
            }
        }
    },
    afterMount: function (argument) {
        let me = this;
        let name = me.get('activeName');
        let accordion = me.get('accordion');
        if (name) {
            me.fire(
                'panelActiveName',
                {
                    name: name
                },
                true
            );
        }
        if (accordion) {
            me.fire(
                'panelAccordion',
                {
                    accordion: true
                },
                true
            );
        }
    }

}