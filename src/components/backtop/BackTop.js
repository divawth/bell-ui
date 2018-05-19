export default {
    template: `
<div class="bell-backtop
{{#if className}} {{className}}{{/if}}
{{#if !isShow}} bell-hide{{/if}}
{{#if !fix}} bell-backtop-fix{{/if}}
"
style="bottom: {{bottom}}px; right: {{right}}px;" on-click="back()"
>
    <i class="bell-icon bell-icon-chevron-up"></i>
</div>
    `,
    propTypes: {
        bottom: {
            type: ['string', 'number'],
            value: 30
        },
        right: {
            type: ['string', 'number'],
            value: 30
        },
        height: {
            type: ['string', 'number'],
            value: 400
        },
        className: {
            type: 'string'
        },
        click: {
            type: 'function'
        },
        fix: {
            type: 'string'
        }
    },

    data: function () {
        return {
            isShow: false
        }
    },

    methods: {
        back: function () {
            var me = this;
            var top = me.container.scrollTop;
            me.container.scrollTop = 0;
            me.get('click') && me.get('click')(top);
        }
    },

    afterMount: function (argument) {
        var me = this;
        var container = me.container = me.$parent.$el;
        me.handleScroll =  function () {
            me.set({
                isShow: container.scrollTop >= me.get('height')
            });
        };

        container.addEventListener('scroll', me.handleScroll);
        container.addEventListener('resize', me.handleScroll);
    },

    beforeDestroy: function () {
        var me = this;
        me.container.removeEventListener('scroll', me.handleScroll);
        me.container.removeEventListener('resize', me.handleScroll);
    }
}