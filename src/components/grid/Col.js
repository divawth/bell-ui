export default {
    template: `
        <div class="bell-col
            {{#if className}} {{className}}{{/if}}
            {{#if span}} bell-col-span-{{span}}{{/if}}
            {{#if order}} bell-col-order-{{order}}{{/if}}
            {{#if push}} bell-col-push-{{push}}{{/if}}
            {{#if pull}} bell-col-pull-{{pull}}{{/if}}
            {{#if offset}} bell-col-span-offset-{{offset}}{{/if}}
            {{#if xsClass}} {{xsClass}}{{/if}}
            {{#if mdClass}} {{mdClass}}{{/if}}
            {{#if smClass}} {{smClass}}{{/if}}
            {{#if lgClass}} {{lgClass}}{{/if}}
        " style="{{style}}">

            <div class="bell-col-content">

                {{#if hasSlot('children')}}
                    <slot name="children" />
                {{/if}}

            </div>

        </div>
    `,

    propTypes: {
        className: {
            type: 'string'
        },
        span: {
            type: 'numeric'
        },
        order: {
            type: 'numeric'
        },
        offset: {
            type: 'numeric'
        },
        push: {
            type: 'numeric'
        },
        pull: {
            type: 'numeric'
        },
        xs: {
            type: ['numeric', 'object']
        },
        sm: {
            type: ['numeric', 'object']
        },
        md: {
            type: ['numeric', 'object']
        },
        lg: {
            type: ['numeric', 'object']
        }
    },

    data() {
        let me = this;
        return {
            style: '',
            gutter: ''
        }
    },

    events: {
        updateGridGutter(event, data) {
            this.set({
                gutter: data.gutter
            });
        }
    },

    computed: {
        xsClass() {
            let me = this;
            let data = me.get('xs');
            if (!data) {
                return;
            }
            return me.getClass('xs', data);
        },
        smClass() {
            let me = this;
            let data = me.get('sm');
            if (!data) {
                return;
            }
            return me.getClass('sm', data);
        },
        mdClass() {
            let me = this;
            let data = me.get('md');
            if (!data) {
                return;
            }
            return me.getClass('md', data);
        },
        lgClass() {
            let me = this;
            let data = me.get('lg');
            if (!data) {
                return;
            }
            return me.getClass('lg', data);
        },
        style() {
            let me = this;
            let gap = me.get('gutter') / 2;
            let style = '';
            style = 'padding-left:' + gap + 'px;padding-right: ' + gap + 'px;';
            return style;
        }
    },

    methods: {
        getClass(name, data) {
            let me = this;
            let classArr = [];
            if (Yox.is.object(data)) {
                if (data.span) {
                    classArr.push('bell-col-span-' + name + '-' + data.span);
                }
                if (data.order) {
                    classArr.push('bell-col-' + name + '-order-' + data.order);
                }
                if (data.offset) {
                    classArr.push('bell-col-' + name + '-offset-' + data.offset);
                }
                if (data.push) {
                    classArr.push('bell-col-' + name + '-push-' + data.push);
                }
                if (data.pull) {
                    classArr.push('bell-col-' + name + '-pull-' + data.pull);
                }
            }
            else {
                classArr.push('bell-col-span-' + name + '-' + data);
            }

            return classArr.join(' ');
        }
    }
};