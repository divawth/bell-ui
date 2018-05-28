export default {
    template: `
<div class="bell-alert
{{#if type}} bell-alert-{{type}}{{/if}}
{{#if hasDesc}} bell-alert-with-desc{{/if}}
{{#if showIcon}} bell-alert-with-icon{{/if}}
{{#if center}} bell-alert-center{{/if}}
">
    {{#if showIcon}}
    <span class="bell-alert-icon">
        <i class="bell-icon
        {{#if type == 'info'}} bell-icon-information-circled
        {{else if type == 'success'}} bell-icon-checkmark-circled
        {{else if type == 'warning'}} bell-icon-android-alert
        {{else if type == 'error'}} bell-icon-close-circled
        {{/if}}
        "></i>
    </span>
    {{/if}}

    <span class="bell-alert-content" style="padding-right: {{paddingRight}}px">
        <slot name="children" />
    </span>

    {{#if closable}}
    <span ref="close" class="bell-alert-close" on-click="close()">
        {{#if closeText}}
            {{closeText}}
        {{else}}
            <i class="bell-icon bell-icon-ios-close-empty"></i>
        {{/if}}
    </span>
    {{/if}}
</div>
    `,

    propTypes: {
        type: {
            type: 'string',
            value: 'info'
        },
        closable: {
            type: ['string', 'boolean']
        },
        showIcon: {
            type: ['string', 'boolean']
        },
        center: {
            type: ['string', 'boolean']
        },
        closeText: {
            type: 'string'
        },
        close: {
            type: 'function'
        }
    },

    data: function () {
        return {
            hasDesc: false,
            paddingRight: 0
        }
    },

    watchers: {

    },

    methods: {
        close: function () {
            let me = this;
            let container = me.$el;
            let classNames = container.getAttribute('class');
            container.setAttribute('class', classNames + ' bell-hide');
            setTimeout(
                function () {
                    container.remove()
                },
                500
            );
            me.get('close') && me.get('close')();
        }
    },

    events: {
        hasDesc: function () {
            this.set({
                hasDesc: true
            });
        }
    },

    afterMount: function () {
        let me = this;

        if (me.get('closable')) {
            me.set({
                paddingRight: me.$refs.close.clientWidth
            });
        }
    },

    beforeDestroy: function () {
    }
};