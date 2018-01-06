import Header from './Header'
import Sider from './Sider'
import Content from './Content'
import Footer from './Footer'

export default {
    template: `
        <div class="bell-layout{{#if hasSider}} bell-has-sider{{/if}}">
            {{$children}}
        </div>
    `,

    data: function () {
        return {
            hasSider: false
        };
    },

    afterMount: function (argument) {
        var me = this;
        if (me.$options.props.$children.length) {
            me.$options.props.$children.some(child => {
                if (child.tag == 'Sider') {
                    me.set({
                        hasSider: true
                    });
                }
            });
        }
    }
}