export default {
    template: `
        <div class="bell-alert
            {{#if className}} {{className}}{{/if}}
            {{#if type}} bell-alert-{{type}}{{/if}}
            {{#if hasDesc}} bell-alert-with-desc{{/if}}
            {{#if showIcon}} bell-alert-with-icon{{/if}}
            {{#if center}} bell-alert-center{{/if}}
        " {{#if style}} style="{{style}}"{{/if}}>

            {{#if showIcon}}
                <span class="bell-alert-icon">
                    <i class="bell-icon
                    {{#if type == 'primary'}} bell-icon-information-circled
                    {{else if type == 'success'}} bell-icon-checkmark-circled
                    {{else if type == 'warning'}} bell-icon-android-alert
                    {{else if type == 'error'}} bell-icon-close-circled
                    {{/if}}
                    "></i>
                </span>
            {{/if}}

            <span class="bell-alert-content">
                {{#if hasSlot('children')}}
                    <slot name="children" />
                {{/if}}
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
        className: {
            type: 'string'
        },
        style: {
            type: 'string'
        },
        type: {
            type: 'string',
            value: 'primary'
        },
        closable: {
            type: 'boolean'
        },
        showIcon: {
            type: 'boolean'
        },
        center: {
            type: 'boolean'
        },
        closeText: {
            type: 'string'
        }
    },

    data() {
        return {
            hasDesc: false,
            paddingRight: 0
        }
    },

    methods: {
        close() {
            let container = this.$el;
            let classNames = container.getAttribute('class');
            Yox.dom.addClass(container, 'bell-hide');
            setTimeout(
                () => {
                    container.remove();
                },
                500
            );
            this.fire('close');
        }
    },

    events: {
        hasDesc() {
            this.set({
                hasDesc: true
            });
        }
    },

    afterMount() {
        let me = this;

        if (me.get('closable')) {
            me.set({
                paddingRight: me.$refs.close.clientWidth
            });
        }
    }
};