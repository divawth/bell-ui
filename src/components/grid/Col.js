export default {
    template: `
<div class="bell-col
{{#if span}} bell-col-span-{{span}}{{/if}}
{{#if order}} bell-col-order-{{order}}{{/if}}
{{#if push}} bell-col-push-{{push}}{{/if}}
{{#if pull}} bell-col-pull-{{pull}}{{/if}}
{{#if offset}} bell-col-offset-{{offset}}{{/if}}
{{#if className}} {{className}}{{/if}}
{{#if xsClass}} {{xsClass}}{{/if}}
{{#if mdClass}} {{mdClass}}{{/if}}
{{#if smClass}} {{smClass}}{{/if}}
{{#if lgClass}} {{lgClass}}{{/if}}
" style="{{style}}">
    <div class="bell-col-content">
        <slot name="children" />
    </div>
</div>
    `,

    propTypes: {
        span: {
            type: ['string', 'number']
        },
        order: {
            type: ['string', 'number']
        },
        offset: {
            type: ['string', 'number']
        },
        push: {
            type: ['string', 'number']
        },
        pull: {
            type: ['string', 'number']
        },
        className: {
            type: 'string'
        },
        xs: {
            type: ['string', 'number', 'object']
        },
        sm: {
            type: ['string', 'number', 'object']
        },
        md: {
            type: ['string', 'number', 'object']
        },
        lg: {
            type: ['string', 'number', 'object']
        }
    },

    data: function () {
        let me = this;
        return {
            style: '',
            gutter: ''
        }
    },

    events: {
        updateGridGutter: function (event, data) {
            this.set({
                gutter: data.gutter
            });
        }
    },

    computed: {
        xsClass: function () {
            var me = this;
            var data = me.get('xs');
            if (!data) {
                return;
            }
            return me.getClass('xs', data);
        },
        smClass: function () {
            var me = this;
            var data = me.get('sm');
            if (!data) {
                return;
            }
            return me.getClass('sm', data);
        },
        mdClass: function () {
            var me = this;
            var data = me.get('md');
            if (!data) {
                return;
            }
            return me.getClass('md', data);
        },
        lgClass: function () {
            var me = this;
            var data = me.get('lg');
            if (!data) {
                return;
            }
            return me.getClass('lg', data);
        },
        style: function () {
            var me = this;
            var gap = me.get('gutter') / 2;
            var style = '';
            style = 'padding-left:' + gap + 'px;padding-right: ' + gap + 'px;';
            return style;
        }
    },

    methods: {
        getClass: function (name, data) {
            var me = this;
            var classArr = [];
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
}