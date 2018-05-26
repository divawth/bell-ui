export default {
    template: `
        <div class="bell-menu-sub-menu
            {{#if className}} {{className}}{{/if}}
            {{#if isOpen}} bell-active{{/if}}
        "
        {{#if style}} style="{{style}}"{{/if}}>
            <div class="bell-menu-title" on-click="click(name)">
                {{#if hasSlot('title')}}
                    <slot name="title" />
                {{/if}}

                {{#if isOpen}}
                    <i class="bell-icon bell-menu-title-icon bell-icon-ios-arrow-up"></i>
                {{else}}
                    <i class="bell-icon bell-menu-title-icon bell-icon-ios-arrow-down"></i>
                {{/if}}
            </div>
            <div class="bell-menu-groups
            {{#if isOpen}} bell-show{{/if}}">
                {{#if hasSlot('children')}}
                    <slot name="children" />
                {{/if}}
            </div>
        </div>
    `,
    propTypes: {
        style: {
            type: 'string'
        },
        className: {
            type: 'string'
        },
        name: {
            type: 'string'
        }
    },

    data: function () {
        return {
            isOpen: false
        }
    },

    events: {
        activeSubMenuChange: function (openNames) {
            var me = this;
            var isOpen = openNames.indexOf(me.get('name')) != -1;
            console.log(isOpen);
            this.set({
                isOpen: isOpen
            });
        }
    },

    methods: {
        click: function (name) {
            var me = this;
            me.toggle('isOpen');
        }
    },
    afterMount: {

    }

}