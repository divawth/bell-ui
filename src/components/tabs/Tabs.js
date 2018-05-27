export default {
    template: `
        <div class="bell-tabs">
            <div class="bell-tabs-labels">
                {{#each tabLabels}}
                    {{#if label}}
                        <span class="bell-tabs-label
                            {{#if value == name}} bell-active{{/if}}
                        " on-click="clickTabLabel(this)">
                            {{label}}
                        </span>
                    {{/if}}
                {{/each}}
            </div>

            <div class="bell-tabs-contents" style="transform: translateX({{translateStyle}});">
                {{#if hasSlot('children')}}
                    <slot name="children" />
                {{/if}}
            </div>
        </div>
    `,
    propTypes: {
        value: {
            type: 'string'
        }
    },

    data: function () {
        return {
            tabLabels: []
        };
    },

    computed: {
        translateStyle: function () {
            var me = this;
            var index = 0;
            Yox.array.each(
                me.get('tabLabels'),
                function (item, key) {
                    if (item.name == me.get('value')) {
                        index = key;
                        return false;
                    }
                }
            );
            return index * (-100) + '%';
            console.log(index * (-100) + '%');

        }
    },

    events: {
        addTabLabel: function (event, data) {
            var me = this;
            var tabLabels = me.copy(me.get('tabLabels'));
            tabLabels.push(data);
            me.set({
                tabLabels: tabLabels
            });
        }
    },

    watchers: {
        value: function (value) {
            this.fire(
                'tabsValueUpdate',
                {
                    value: value
                },
                true
            );
        }
    },

    methods: {
        clickTabLabel: function (data) {
            var me = this;
            me.set({
                value: data.name
            });
        }
    },

    afterMount: function () {
        var me = this;
    }
}