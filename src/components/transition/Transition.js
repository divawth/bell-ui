import {
    addClass,
    removeClass
} from './util'

let FADE = 'fade';
let ZOOM = 'zoom';
let COLLAPSE = 'collapse';

export default {
    template: `<slot name="children" />`,

    propTypes: {
        // 是否在初始渲染时使用过渡
        appear: {
            type: ['numeric', 'boolean']
        },
        // 是否使用 CSS 过渡类。如果设置为 false，将只通过组件事件触发注册的 JavaScript 钩子
        css: {
            type: ['numeric', 'boolean']
        },
        // 指定过渡事件类型
        type: {
            type: 'string'
        },
        mode: {
            type: 'string'
        },
        value: {
            type: ['numeric', 'boolean']
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

        onEnter: {
            type: 'function'
        },
        onLeave: {
            type: 'function'
        },
        onAppear: {
            type: 'function'
        },
        onEnd: {
            type: 'function'
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
        afterEnter: {
            type: 'function'
        },
        afterLeave: {
            type: 'function'
        },
        afterAppear: {
            type: 'function'
        }
    },

    watchers: {
        value(value) {
            let me = this;
            if (value) {
                me.begin();
            }
            else {
                me.beginTo();
            }
        }
    },

    methods: {
        begin() {
            let me = this;
            me.enter();
            setTimeout(
                () => {
                    me.leave();
                    setTimeout(
                        () => {
                            me.appear();
                            setTimeout(
                                () => {
                                    me.end();
                                },
                                100
                            );
                        },
                        300
                    );
                },
                100
            );
        },

        enter() {
            let me = this;
            let element = me.$el;
            if (me.get('css') === false) {
                me.get('onEnter') && me.get('onEnter')();
                return;
            }
            if (me.get('mode') === FADE) {
                element.style.opacity = '';
            }
            else if (me.get('mode') === COLLAPSE) {
                me.collapseClientHeight = element.clientHeight;
                me.collapsePaddingTop = element.style.paddingTop;
                me.collapsePaddingBottom = element.style.paddingBottom;
                element.style.height = me.collapseClientHeight + 'px';
            }
            else {
                element.style.display = '';
            }
            addClass(element, me.get('enterClass'));
        },

        leave() {
            let me = this;
            let element = me.$el;
            if (me.get('css') === false) {
                me.get('onLeave') && me.get('onLeave')();
                return;
            }
            if (me.get('mode') === COLLAPSE) {
                element.style.height = 0;
                element.style.paddingTop = 0;
                element.style.paddingBottom = 0;
            }
            addClass(element, me.get('leaveClass'));
        },

        appear() {
            let me = this;
            let element = me.$el;
            if (me.get('css') === false) {
                me.get('onAppear') && me.get('onAppear')();
                return;
            }
            removeClass(element, me.get('enterClass'));
            removeClass(element, me.get('leaveClass'));
            addClass(element, me.get('appearClass'));
        },

        end() {
            let me = this;
            let element = me.$el;
            if (me.get('css') === false) {
                me.get('onEnd') && me.get('onEnd')();
                return;
            }
            if (me.get('mode') === FADE) {
                element.style.opacity = 0;
            }
            else if (me.get('mode') === COLLAPSE) {
                element.style.height = '';
                element.style.display = 'none';
                element.style.paddingTop = '';
                element.style.paddingBottom = '';
            }
            else {
                element.style.display = 'none';
            }
            removeClass(element, me.get('appearClass'));
        },

        beginTo() {
            let me = this;
            me.enterTo();
            setTimeout(
                () => {
                    me.leaveTo();
                    setTimeout(
                        () => {
                            me.appearTo();
                            setTimeout(
                                () => {
                                    me.endTo();
                                },
                                100
                            );
                        },
                        300
                    );
                },
                100
            );
        },

        enterTo() {
            let me = this;
            let element = me.$el;
            if (me.get('css') === false) {
                me.get('onEnter') && me.get('onEnter')();
                return;
            }
            if (me.get('mode') === FADE) {
                element.style.opacity = '';
            }
            else if (me.get('mode') === COLLAPSE) {
                element.style.height = 0;
                element.style.paddingTop = 0;
                element.style.paddingBottom = 0;
                element.style.display = '';
            }
            else {
                element.style.display = '';
            }
            addClass(element, me.get('enterToClass'));
        },

        leaveTo() {
            let me = this;
            let element = me.$el;
            if (me.get('css') === false) {
                me.get('onLeave') && me.get('onLeave')();
                return;
            }
            if (me.get('mode') === COLLAPSE) {
                element.style.height = me.collapseClientHeight + 'px';
                element.style.paddingTop = me.collapsePaddingTop;
                element.style.paddingBottom = me.collapsePaddingBottom;
            }
            addClass(element, me.get('leaveToClass'));
        },

        appearTo() {
            let me = this;
            let element = me.$el;
            if (me.get('css') === false) {
                me.get('onAppear') && me.get('onAppear')();
                return;
            }
            removeClass(element, this.get('enterToClass'));
            removeClass(element, this.get('leaveToClass'));
            addClass(element, this.get('appearToClass'));
        },

        endTo() {
            let me = this;
            let element = me.$el;
            if (me.get('css') === false) {
                me.get('onEnd') && me.get('onEnd')();
                return;
            }
            if (me.get('mode') === FADE) {
                element.style.opacity = 1;
            }
            else if (me.get('mode') === COLLAPSE) {
                element.style.height = '';
            }
            removeClass(element, me.get('appearToClass'));
        }
    },

    afterMount() {
        let me = this;
        if (me.get('type')) {
            me.$el.style.transitionTimingFunction = me.get('type');
        }

        me.set({
            enterClass: me.get('enterClass') ? me.get('enterClass') : 'bell-' + me.get('mode') +'-enter',
            leaveClass: me.get('leaveClass') ? me.get('leaveClass') : 'bell-' + me.get('mode') +'-leave',
            appearClass: me.get('appearClass') ? me.get('appearClass') : 'bell-' + me.get('mode') +'-appear',
            enterToClass: me.get('enterToClass') ? me.get('enterToClass') : 'bell-' + me.get('mode') +'-enter-to',
            leaveToClass: me.get('leaveToClass') ? me.get('leaveToClass') : 'bell-' + me.get('mode') +'-leave-to',
            appearToClass: me.get('appearToClass') ? me.get('appearToClass') : 'bell-' + me.get('mode') +'-appear-to',
            enterActiveClass: me.get('enterActiveClass') ? me.get('enterActiveClass') : 'bell-' + me.get('mode') +'-enter-active',
            leaveActiveClass: me.get('leaveActiveClass') ? me.get('leaveActiveClass') : 'bell-' + me.get('mode') +'-leave-active',
            appearActiveClass: me.get('appearActiveClass') ? me.get('appearActiveClass') : 'bell-' + me.get('mode') +'-appear-active',
        });

        if (me.get('appear')) {
            if (me.get('value')) {
                me.begin();
            }
            else {
                me.beginTo();
            }
        }
    }
};