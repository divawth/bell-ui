export default {
    template: `
        <div class="bell-drawer
            {{#if className}} {{className}}{{/if}}
            {{#if open}} bell-drawer-open{{else}} bell-drawer-hidden{{/if}}
            {{#if position}} bell-drawer-{{position}}{{/if}}
        " style="{{#if style}} {{style}}{{/if}}">

            <div class="bell-drawer-content"></div>

            {{#if useMask}}
                <div class="bell-drawer-mask"></div>
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
        position: {
            type: 'string',
            value: 'left'
        },
        useMask: {
            type: 'boolean',
        },
        open: {
            type: 'boolean'
        }
    },
    watchers: {
        useMask: function (argument) {
            console.log(arguments)
        }
    }
};