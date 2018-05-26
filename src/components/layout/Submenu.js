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
            {{#if isOpen && hasSlot('children')}}
            <div class="bell-menu-groups" transition="groups">
                <slot name="children" />
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
            this.set({
                isOpen: isOpen
            });
        }
    },

    transitions: {
        groups: {
            enter: function (el, done) {
                var clientHeight = el.clientHeight;
                el.style.height = 0;
                setTimeout(
                    function () {
                        el.style.height = clientHeight + 'px';
                    },
                    50
                );
                setTimeout(done, 300);
            },
            leave: function (el, done) {
                el.style.height = 0;
                Yox.dom.removeClass(el, 'bell-visible');
                setTimeout(done, 300);
            }
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