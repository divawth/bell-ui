export default {
    template: `
        <div class="bell-sider
        {{#if className}} {{className}}{{/if}}"
        {{#if style}} style="{{style}}"{{/if}}>
            {{$children}}
        </div>
    `,
    propTypes: {
        style: {
            type: 'string'
        },
        className: {
            type: 'string'
        }
    },
    afterMount: function () {
        var me = this;
        me.fire(
            'hasSider',
            {
                hasSider: true
            }
        );
    }
}