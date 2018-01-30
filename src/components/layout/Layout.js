import Header from './Header'
import Sider from './Sider'
import Content from './Content'
import Footer from './Footer'

export default {
    template: `
        <div class="bell-layout
        {{#if hasSider}} bell-has-sider{{/if}}
        {{#if className}} {{className}}{{/if}}"
        {{#if style}} style="{{style}}"{{/if}}>
            {{$children}}
        </div>
    `,

    data: function () {
        return {
            hasSider: false
        };
    },
    propTypes: {
        style: {
            type: 'string'
        },
        className: {
            type: 'string'
        }
    },
    events: {
        hasSider: function (event, data) {
            var me = this;
            me.set({
                hasSider: data.hasSider
            });
            return false;
        }
    }
}