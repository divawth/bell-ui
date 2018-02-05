import {
    addClass,
    removeClass
} from './util'

let FADE = 'fade';
let ZOOM = 'zoom';
let COLLAPSE = 'collapse';

export default {
    template: `{{$children}}`,

    propTypes: {
        // 用于自动生成 CSS 过渡类名。用于自动生成 CSS 过渡类名。例如：name: 'fade' 将自动拓展为.bell-fade-enter，.bell-fade-enter-active等。
        name: {
            type: 'string'
        },
        // 是否在初始渲染时使用过渡
        appear: {
            type: ['string', 'number', 'boolean']
        },
        // 是否使用 CSS 过渡类。如果设置为 false，将只通过组件事件触发注册的 JavaScript 钩子
        css: {
            type: ['string', 'number', 'boolean']
        },
        // 指定过渡事件类型
        type: {
            type: 'string'
        },
        mode: {
            type: 'string'
        },
        value: {
            type: ['string', 'number', 'boolean']
        },
        enterClass: {
            type: 'string'
        },
        leaveClass: {
            type: 'string'
        },
        appearClass: {
            type: 'string'
        },
        enterToClass: {
            type: 'string'
        },
        leaveToClass: {
            type: 'string'
        },
        appearToClass: {
            type: 'string'
        },
        enterActiveClass: {
            type: 'string'
        },
        leaveActiveClass: {
            type: 'string'
        },
        appearActiveClass: {
            type: 'string'
        },
        beforeEnter: {
            type: 'function'
        },
        beforeLeave: {
            type: 'function'
        },
        beforeAppear: {
            type: 'function'
        },
        onEnter: {
            type: 'function'
        },
        onLeave: {
            type: 'function'
        },
        onAppear: {
            type: 'function'
        },
        afterEnter: {
            type: 'function'
        },
        afterLeave: {
            type: 'function'
        },
        afterAppear: {
            type: 'function'
        },
    },

    watchers: {
        value: function (value) {
            var me = this;
            if (value) {
                me.begin();
            }
            else {
                me.beginTo();
            }
        }
    },

    methods: {
        begin: function () {
            var me = this;
            me.enter();
            setTimeout(
                function () {
                    me.leave();
                    setTimeout(
                        function () {
                            me.appear();
                        },
                        300
                    );
                },
                100
            );
        },
        enter: function () {
            var me = this;
            removeClass(me.$el, this.get('appearToClass'));
            addClass(me.$el, this.get('enterClass'));
        },
        leave: function () {
            var me = this;
            addClass(me.$el, this.get('leaveClass'));
        },
        appear: function () {
            var me = this;
            removeClass(me.$el, this.get('enterClass'));
            removeClass(me.$el, this.get('leaveClass'));
            addClass(me.$el, this.get('appearClass'));
        },
        beginTo: function () {
            var me = this;
            me.enterTo();
            setTimeout(
                function () {
                    me.leaveTo();
                    setTimeout(
                        function () {
                            me.appearTo();
                        },
                        300
                    );
                },
                100
            );
        },
        enterTo: function () {
            var me = this;
            removeClass(me.$el, this.get('appearClass'));
            addClass(me.$el, this.get('enterToClass'));
        },
        leaveTo: function () {
            var me = this;
            addClass(me.$el, this.get('leaveToClass'));
        },
        appearTo: function () {
            var me = this;
            removeClass(me.$el, this.get('enterToClass'));
            removeClass(me.$el, this.get('leaveToClass'));
            addClass(me.$el, this.get('appearToClass'));
        },
    },

    afterMount: function () {
        var me = this;
        if (me.get('type')) {
            me.$el.style.transitionTimingFunction = me.get('type');
        }
        if (me.get('mode') === FADE) {
            me.set({
                enterClass: me.get('enterClass') ? me.get('enterClass') : 'bell-fade-enter',
                leaveClass: me.get('leaveClass') ? me.get('leaveClass') : 'bell-fade-leave',
                appearClass: me.get('appearClass') ? me.get('appearClass') : 'bell-fade-appear',
                enterToClass: me.get('enterToClass') ? me.get('enterToClass') : 'bell-fade-enter-to',
                leaveToClass: me.get('leaveToClass') ? me.get('leaveToClass') : 'bell-fade-leave-to',
                appearToClass: me.get('appearToClass') ? me.get('appearToClass') : 'bell-fade-appear-to',
                enterActiveClass: me.get('enterActiveClass') ? me.get('enterActiveClass') : 'bell-fade-enter-active',
                leaveActiveClass: me.get('leaveActiveClass') ? me.get('leaveActiveClass') : 'bell-fade-leave-active',
                appearActiveClass: me.get('appearActiveClass') ? me.get('appearActiveClass') : 'bell-fade-appear-active',
            });
        }
    }
}