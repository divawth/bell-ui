export default {
    template: `
        <div class="bell-menu-sub-menu
            {{#if className}} {{className}}{{/if}}
            {{#if isOpen}} bell-active{{/if}}
        "{{#if style}} style="{{style}}"{{/if}}>
            <div class="bell-menu-title" on-click="click(name)">
                <span class="bell-menu-title-text">
                    {{#if hasSlot('title')}}
                        <slot name="title" />
                    {{/if}}
                </span>
                {{#if isCollapsed}}
                    <i class="
                        bell-icon 
                        bell-menu-title-icon 
                        bell-icon-ios-arrow-down
                        {{#if isOpen}} bell-menu-open{{/if}}
                    "></i>
                {{/if}}
            </div>
            {{#if isOpen && hasSlot('children')}}
                <div class="bell-menu-groups" transition="groups">
                    <slot name="children" />
                </div>
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
        name: {
            type: 'string'
        },
        isCollapsed: {
            type: ['string', 'boolean']
        }
    },

    data() {
        return {
            isOpen: false
        }
    },

    events: {
        activeSubMenuChange(openNames) {
            let me = this;
            let isOpen = openNames.indexOf(me.get('name')) != -1;
            this.set({
                isOpen: isOpen
            });
        }
    },

    transitions: {
        groups: {
            enter(el, done) {
                let clientHeight = el.clientHeight;
                el.style.height = 0;
                setTimeout(
                    () => {
                        el.style.height = clientHeight + 'px';
                    },
                    50
                );
                setTimeout(done, 300);
            },
            leave(el, done) {
                el.style.height = 0;
                Yox.dom.removeClass(el, 'bell-visible');
                setTimeout(done, 300);
            }
        }
    },

    methods: {
        click(name) {
            this.toggle('isOpen');
            this.fire(
                'click',
                {
                    isOpen: this.get('isOpen')
                }
            );
        }
    }
};