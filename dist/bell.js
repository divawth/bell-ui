(function (global, factory) {
	(factory());
}(this, (function () { 'use strict';

var addClass = function addClass(element, className) {
    var classNameArray = element.className.split(/\s/g);
    if (Yox.array.indexOf(classNameArray, className) > 0) {
        return;
    } else {
        classNameArray.push(className);
        element.className = classNameArray.join(' ');
    }
};

var removeClass = function removeClass(element, className) {
    var classNameArray = element.className.split(/\s/g);
    var index = Yox.array.indexOf(classNameArray, className);
    if (index > 0) {
        classNameArray.splice(index);
        element.className = classNameArray.join(' ');
        if (Yox.array.indexOf(classNameArray, className) > 0) {
            removeClass(element, className);
        }
    } else {
        return;
    }
};

var FADE = 'fade';
var COLLAPSE = 'collapse';

var Transition = {
    template: '<slot name="children" />',

    propTypes: {
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

        onEnter: {
            type: 'function'
        },
        onLeave: {
            type: 'function'
        },
        onAppear: {
            type: 'function'
        },
        onEnd: function onEnd() {

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
        value: function value(_value) {
            var me = this;
            if (_value) {
                me.begin();
            } else {
                me.beginTo();
            }
        }
    },

    methods: {
        dispose: function dispose() {},
        begin: function begin() {
            var me = this;
            me.enter();
            setTimeout(function () {
                me.leave();
                setTimeout(function () {
                    me.appear();
                    setTimeout(function () {
                        me.end();
                    }, 100);
                }, 300);
            }, 100);
        },
        enter: function enter() {
            var me = this;
            var element = me.$el;
            if (me.get('css') === false) {
                me.get('onEnter') && me.get('onEnter')();
                return;
            }
            if (me.get('mode') === FADE) {
                element.style.opacity = '';
            } else if (me.get('mode') === COLLAPSE) {
                me.collapseClientHeight = element.clientHeight;
                me.collapsePaddingTop = element.style.paddingTop;
                me.collapsePaddingBottom = element.style.paddingBottom;
                element.style.height = me.collapseClientHeight + 'px';
            } else {
                element.style.display = '';
            }
            addClass(element, me.get('enterClass'));
        },
        leave: function leave() {
            var me = this;
            var element = me.$el;
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
        appear: function appear() {
            var me = this;
            var element = me.$el;
            if (me.get('css') === false) {
                me.get('onAppear') && me.get('onAppear')();
                return;
            }
            removeClass(element, me.get('enterClass'));
            removeClass(element, me.get('leaveClass'));
            addClass(element, me.get('appearClass'));
        },
        end: function end() {
            var me = this;
            var element = me.$el;
            if (me.get('css') === false) {
                me.get('onEnd') && me.get('onEnd')();
                return;
            }
            if (me.get('mode') === FADE) {
                element.style.opacity = 0;
            } else if (me.get('mode') === COLLAPSE) {
                element.style.height = '';
                element.style.display = 'none';
                element.style.paddingTop = '';
                element.style.paddingBottom = '';
            } else {
                element.style.display = 'none';
            }
            removeClass(element, me.get('appearClass'));
        },
        beginTo: function beginTo() {
            var me = this;
            me.enterTo();
            setTimeout(function () {
                me.leaveTo();
                setTimeout(function () {
                    me.appearTo();
                    setTimeout(function () {
                        me.endTo();
                    }, 100);
                }, 300);
            }, 100);
        },
        enterTo: function enterTo() {
            var me = this;
            var element = me.$el;
            if (me.get('css') === false) {
                me.get('onEnter') && me.get('onEnter')();
                return;
            }
            if (me.get('mode') === FADE) {
                element.style.opacity = '';
            } else if (me.get('mode') === COLLAPSE) {
                element.style.height = 0;
                element.style.paddingTop = 0;
                element.style.paddingBottom = 0;
                element.style.display = '';
            } else {
                element.style.display = '';
            }
            addClass(element, me.get('enterToClass'));
        },
        leaveTo: function leaveTo() {
            var me = this;
            var element = me.$el;
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
        appearTo: function appearTo() {
            var me = this;
            var element = me.$el;
            if (me.get('css') === false) {
                me.get('onAppear') && me.get('onAppear')();
                return;
            }
            removeClass(element, this.get('enterToClass'));
            removeClass(element, this.get('leaveToClass'));
            addClass(element, this.get('appearToClass'));
        },
        endTo: function endTo() {
            var me = this;
            var element = me.$el;
            if (me.get('css') === false) {
                me.get('onEnd') && me.get('onEnd')();
                return;
            }
            if (me.get('mode') === FADE) {
                element.style.opacity = 1;
            } else if (me.get('mode') === COLLAPSE) {
                element.style.height = '';
            }
            removeClass(element, me.get('appearToClass'));
        }
    },

    afterMount: function afterMount() {
        var me = this;
        if (me.get('type')) {
            me.$el.style.transitionTimingFunction = me.get('type');
        }
        me.set({
            enterClass: me.get('enterClass') ? me.get('enterClass') : 'bell-' + me.get('mode') + '-enter',
            leaveClass: me.get('leaveClass') ? me.get('leaveClass') : 'bell-' + me.get('mode') + '-leave',
            appearClass: me.get('appearClass') ? me.get('appearClass') : 'bell-' + me.get('mode') + '-appear',
            enterToClass: me.get('enterToClass') ? me.get('enterToClass') : 'bell-' + me.get('mode') + '-enter-to',
            leaveToClass: me.get('leaveToClass') ? me.get('leaveToClass') : 'bell-' + me.get('mode') + '-leave-to',
            appearToClass: me.get('appearToClass') ? me.get('appearToClass') : 'bell-' + me.get('mode') + '-appear-to',
            enterActiveClass: me.get('enterActiveClass') ? me.get('enterActiveClass') : 'bell-' + me.get('mode') + '-enter-active',
            leaveActiveClass: me.get('leaveActiveClass') ? me.get('leaveActiveClass') : 'bell-' + me.get('mode') + '-leave-active',
            appearActiveClass: me.get('appearActiveClass') ? me.get('appearActiveClass') : 'bell-' + me.get('mode') + '-appear-active'
        });

        if (me.get('appear')) {
            if (me.get('value')) {
                me.begin();
            } else {
                me.beginTo();
            }
        }
    }
};

var Layout = {
    template: '\n        <div class="bell-layout bell-row\n        {{#if hasSider}} bell-col-span-24{{else}} column{{/if}}\n        {{#if className}} {{className}}{{/if}}"\n        {{#if style}} style="{{style}}"{{/if}}>\n            <slot name="children" />\n        </div>\n    ',

    data: function data() {
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
        hasSider: function hasSider(event, data) {
            var me = this;
            me.set({
                hasSider: data.hasSider
            });
            me.fire('childrenHasSider', {}, true);
            return false;
        }
    }
};

var Header = {
    template: '\n        <div class="bell-layout-header bell-col-span-24\n        {{#if className}} {{className}}{{/if}}"\n        {{#if style}} style="{{style}}"{{/if}}>\n            <slot name="children" />\n        </div>\n    ',
    propTypes: {
        style: {
            type: 'string'
        },
        className: {
            type: 'string'
        }
    }
};

var Sider = {
    template: '\n        <div class="bell-layout-sider bell-col-span-6\n            {{#if className}} {{className}}{{/if}}\n            {{#if collapsed}} bell-sider-collapsed{{/if}}\n        "\n        {{#if style}} style="{{style}}"{{/if}}>\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n\n            {{#if collapsible}}\n                <div class="bell-sider-trigger" on-click="toggle(\'collapsed\')">\n                    {{#if collapsed}}\n                        <i class="bell-icon bell-icon-chevron-right"></i>\n                    {{else}}\n                        <i class="bell-icon bell-icon-chevron-left"></i>\n                    {{/if}}\n                </div>\n            {{/if}}\n        </div>\n    ',
    propTypes: {
        style: {
            type: 'string'
        },
        className: {
            type: 'string'
        },
        collapsible: {
            type: ['string', 'boolean']
        },
        onToggleCollapse: {
            type: 'toggle'
        }
    },

    data: function data() {
        return {
            collapsed: false
        };
    },

    wactchers: {
        collapsed: function collapsed(value) {
            this.get('onToggleCollapse') && this.get('onToggleCollapse')(value);
        }
    },

    afterMount: function afterMount() {
        var me = this;
        me.fire('hasSider', {
            hasSider: true
        });
    }
};

var Content = {
    template: '\n        <div class="bell-layout-content bell-col-span{{#if hasSider}}-18{{else}}-24{{/if}}\n        {{#if className}} {{className}}{{/if}}"\n        {{#if style}} style="{{style}}"{{/if}}>\n            <slot name="children" />\n        </div>\n    ',

    events: {
        childrenHasSider: function childrenHasSider(value) {
            this.set({
                hasSider: value
            });
        }
    },

    data: function data() {
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
    }
};

var Footer = {
    template: '\n        <div class="bell-layout-footer bell-col-span-24\n        {{#if className}} {{className}}{{/if}}"\n        {{#if style}} style="{{style}}"{{/if}}>\n            <slot name="children" />\n        </div>\n    ',
    propTypes: {
        style: {
            type: 'string'
        },
        className: {
            type: 'string'
        }
    }
};

var Menu = {
    template: '\n        <div class="bell-menu\n            {{#if mode}} bell-menu-{{mode}}{{/if}}\n            {{#if theme}} bell-menu-{{theme}}{{/if}}\n        ">\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </div>\n    ',

    propTypes: {
        mode: {
            type: 'string'
        },
        theme: {
            type: 'string',
            value: 'dark'
        },
        activeName: {
            type: ['string', 'number'],
            value: -1
        },
        openNames: {
            type: 'array'
        },
        onSelect: {
            type: 'function'
        }
    },

    events: {
        menuItemActive: function menuItemActive(event, data) {
            var me = this;
            me.get('onSelect') && me.get('onSelect')(data.name);
            me.updateActiveName(data.name);
        }
    },

    methods: {
        updateActiveName: function updateActiveName(name) {
            var me = this;
            me.fire('activeMenuChange', {
                name: name
            }, true);
        }
    },

    watchers: {
        activeName: function activeName(_activeName) {
            var me = this;
            me.get('onSelect') && me.get('onSelect')(_activeName);
            me.updateActiveName(_activeName);
        }
    },

    afterMount: function afterMount() {
        var me = this;
        me.updateActiveName(me.get('activeName'));
        var openNames = me.get('openNames');
        if (openNames && openNames.length) {
            me.fire('activeSubMenuChange', {
                openNames: openNames
            }, true);
        }
    }
};

var MenuItem = {
    template: '\n        <div class="bell-menu-item\n        {{#if isActive}} bell-active{{/if}}\n        " on-click="click(name)">\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </div>\n    ',

    propTypes: {
        name: {
            type: 'string'
        },
        hash: {
            type: 'string'
        },
        disabled: {
            type: 'boolean'
        }
    },

    data: function data() {
        return {
            isActive: false
        };
    },

    events: {
        activeMenuChange: function activeMenuChange(event, data) {
            var me = this;
            me.set({
                isActive: me.get('name') === data.name
            });
        }
    },

    methods: {
        click: function click(name) {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            if (me.get('hash')) {
                location.href = me.get('hash');
            }
            me.set({
                isActive: true
            });

            me.fire('menuItemActive', {
                name: name
            });
        }
    }
};

var MenuGroup = {
    template: '\n        <div class="bell-menu-group">\n            <div class="bell-menu-group-title">\n                {{title}}\n            </div>\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </div>\n    ',

    propTypes: {
        title: {
            type: 'string'
        }
    }
};

var Submenu = {
    template: '\n        <div class="bell-menu-sub-menu\n            {{#if className}} {{className}}{{/if}}\n            {{#if isOpen}} bell-active{{/if}}\n        "\n        {{#if style}} style="{{style}}"{{/if}}>\n            <div class="bell-menu-title" on-click="click(name)">\n                {{#if hasSlot(\'title\')}}\n                    <slot name="title" />\n                {{/if}}\n\n                {{#if isOpen}}\n                    <i class="bell-icon bell-menu-title-icon bell-icon-ios-arrow-up"></i>\n                {{else}}\n                    <i class="bell-icon bell-menu-title-icon bell-icon-ios-arrow-down"></i>\n                {{/if}}\n            </div>\n            {{#if isOpen && hasSlot(\'children\')}}\n            <div class="bell-menu-groups" transition="groups">\n                <slot name="children" />\n            {{/if}}\n        </div>\n    ',
    propTypes: {
        style: {
            type: 'string'
        },
        className: {
            type: 'string'
        },
        name: {
            type: 'string'
        }
    },

    data: function data() {
        return {
            isOpen: false
        };
    },

    events: {
        activeSubMenuChange: function activeSubMenuChange(openNames) {
            var me = this;
            var isOpen = openNames.indexOf(me.get('name')) != -1;
            this.set({
                isOpen: isOpen
            });
        }
    },

    transitions: {
        groups: {
            enter: function enter(el, done) {
                var clientHeight = el.clientHeight;
                el.style.height = 0;
                setTimeout(function () {
                    el.style.height = clientHeight + 'px';
                }, 50);
                setTimeout(done, 300);
            },
            leave: function leave(el, done) {
                el.style.height = 0;
                Yox.dom.removeClass(el, 'bell-visible');
                setTimeout(done, 300);
            }
        }
    },

    methods: {
        click: function click(name) {
            var me = this;
            me.toggle('isOpen');
        }
    },
    afterMount: {}

};

var Row = {
    template: '\n<div class="bell-row\n{{#if gutter}} bell-row-gutter{{/if}}\n{{#if type}} bell-row-{{type}}{{/if}}\n{{#if justify}} bell-row-flex-{{justify}}{{/if}}\n{{#if align}} bell-row-flex-{{align}}{{/if}}\n" style="{{style}}">\n    <slot name="children" />\n</div>\n    ',

    propTypes: {
        gutter: {
            type: ['number', 'string']
        },
        type: {
            type: 'string'
        },
        justify: {
            type: 'string'
        },
        align: {
            type: 'string'
        }
    },

    data: function data() {
        return {
            style: ''
        };
    },

    computed: {
        style: function style() {
            var me = this;
            var gap = me.get('gutter') / 2;
            var style = '';
            style = 'margin-left: -' + gap + 'px;margin-right: -' + gap + 'px;';
            return style;
        }
    },

    afterMount: function afterMount() {
        var me = this;
        me.fire('updateGridGutter', {
            gutter: me.get('gutter')
        }, true);
    }
};

var Col = {
    template: '\n<div class="bell-col\n{{#if span}} bell-col-span-{{span}}{{/if}}\n{{#if order}} bell-col-order-{{order}}{{/if}}\n{{#if push}} bell-col-push-{{push}}{{/if}}\n{{#if pull}} bell-col-pull-{{pull}}{{/if}}\n{{#if offset}} bell-col-offset-{{offset}}{{/if}}\n{{#if className}} {{className}}{{/if}}\n{{#if xsClass}} {{xsClass}}{{/if}}\n{{#if mdClass}} {{mdClass}}{{/if}}\n{{#if smClass}} {{smClass}}{{/if}}\n{{#if lgClass}} {{lgClass}}{{/if}}\n" style="{{style}}">\n    <div class="bell-col-content">\n        <slot name="children" />\n    </div>\n</div>\n    ',

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

    data: function data() {
        return {
            style: '',
            gutter: ''
        };
    },

    events: {
        updateGridGutter: function updateGridGutter(event, data) {
            this.set({
                gutter: data.gutter
            });
        }
    },

    computed: {
        xsClass: function xsClass() {
            var me = this;
            var data = me.get('xs');
            if (!data) {
                return;
            }
            return me.getClass('xs', data);
        },
        smClass: function smClass() {
            var me = this;
            var data = me.get('sm');
            if (!data) {
                return;
            }
            return me.getClass('sm', data);
        },
        mdClass: function mdClass() {
            var me = this;
            var data = me.get('md');
            if (!data) {
                return;
            }
            return me.getClass('md', data);
        },
        lgClass: function lgClass() {
            var me = this;
            var data = me.get('lg');
            if (!data) {
                return;
            }
            return me.getClass('lg', data);
        },
        style: function style() {
            var me = this;
            var gap = me.get('gutter') / 2;
            var style = '';
            style = 'padding-left:' + gap + 'px;padding-right: ' + gap + 'px;';
            return style;
        }
    },

    methods: {
        getClass: function getClass(name, data) {
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
            } else {
                classArr.push('bell-col-span-' + name + '-' + data);
            }

            return classArr.join(' ');
        }
    }
};

var Icon = {
    template: '\n        <span class="bell-icon bell-icon-{{type}}\n        {{#if className}} {{className}}{{/if}}"\n        style="font-size: {{size}}px;">\n        </span>\n    ',
    propTypes: {
        type: {
            type: 'string'
        },
        size: {
            type: 'number',
            value: 12
        },
        className: {
            type: 'string'
        }
    }
};

var Breadcrumb = {
    template: "\n        <div class=\"bell-breadcrumb bell-texts\">\n            <slot name=\"children\" />\n        </div>\n    "
};

var BreadcrumbItem = {
    template: '\n        <span class="bell-breadcrumb-item bell-text">\n            <a {{#if to}}href="{{to}}"{{/if}} class="bell-breadcrumb-link">\n                <slot name="children" />\n            </a>\n            <span class="bell-breadcrumb-gap">\n                {{#if separator}}\n                    {{separator}}\n                {{else}}\n                    /\n                {{/if}}\n            </span>\n        </span>\n    ',

    propTypes: {
        to: {
            type: 'string'
        },
        separator: {
            type: 'string'
        }
    }
};

var Button = {
    template: '\n<button class="bell-button\n    {{#if type}} {{type}}{{/if}}\n    {{#if shape}} {{shape}}{{/if}}\n    {{#if size}} {{size}}{{/if}}\n    {{#if long}} bell-button-long{{/if}}\n    {{#if className}} {{className}}{{/if}}\n    {{#if !label && !children && icon}} bell-icon-only{{/if}}\n"{{#if disabled}} disabled{{/if}} on-click="click">\n\n    {{#if icon}}\n        <i class="bell-icon bell-icon-{{icon}}"></i>\n    {{/if}}\n\n    {{#if label}}\n        <span>\n            {{label}}\n        </span>\n    {{else}}\n        <slot name="children" />\n    {{/if}}\n</button>\n    ',
    propTypes: {
        type: {
            type: 'string'
        },
        label: {
            type: 'string'
        },
        shape: {
            type: 'string'
        },
        icon: {
            type: 'string'
        },
        size: {
            type: 'string'
        },
        long: {
            type: ['string', 'boolean']
        },
        disabled: {
            type: ['string', 'boolean']
        },
        className: {
            type: 'string'
        }
    }
};

var TEXT_TYPE_TEXTAREA = 'textarea';
var TEXT_TYPE_INPUT = 'input';

var Input = {
    template: '\n        <div class="bell-{{type}}\n        {{#if size}} bell-input-{{size}}{{/if}}\n        {{#if isFocus}} bell-focus{{/if}}\n        {{#if className}} bell-input-{{className}}{{/if}}\n        {{#if clearable}} bell-input-clearable{{/if}}\n        {{#if disabled}} bell-input-disabled{{/if}}"\n        {{#if style}} style="{{style}}"{{/if}}\n        >\n            {{#if type === TEXT_TYPE_INPUT}}\n\n                <input ref="input"\n                    type="text"\n                    class="bell-input-el\n                        {{#if size}} bell-input-{{size}}{{/if}}\n                    "\n                    {{#if placeholder}} placeholder="{{placeholder}}"{{/if}}\n                    {{#if disabled}} disabled="disabled"{{/if}}\n                    model="value"\n                    on-blur="blur()"\n                    on-focus="focus()"\n                ></input>\n\n                {{#if clearable}}\n                    <i class="bell-icon\n                        bell-icon-ios-close\n                        bell-input-clear-icon\n                    " on-click="clear()"></i>\n                {{/if}}\n\n            {{else if type === TEXT_TYPE_TEXTAREA}}\n\n                <textarea class="bell-input-el"\n                    style="height: {{#if rows}}{{rows * 25}}{{else}}50{{/if}}px"\n                    {{#if rows}} rows="{{rows}}"{{/if}}\n                    {{#if placeholder}} placeholder="{{placeholder}}" {{if}}\n                    {{#if disabled}} disabled="disabled"{{/if}}\n                    model="value"\n                >\n                </textarea>\n\n            {{/if}}\n\n        </div>\n    ',

    propTypes: {
        style: {
            type: 'string'
        },
        size: {
            type: 'string'
        },
        className: {
            type: 'string'
        },
        type: {
            type: 'string'
        },
        placeholder: {
            type: 'string'
        },
        value: {
            type: ['string', 'number']
        },

        icon: {
            type: 'string'
        },
        rows: {
            type: 'string'
        },
        disabled: {
            type: 'string'
        },
        clearable: {
            type: ['string', 'number', 'boolean']
        },

        onChange: {
            type: 'function'
        },
        onFocus: {
            type: 'function'
        },
        onBlur: {
            type: 'function'
        },
        onClick: {
            type: 'function'
        },
        onEnter: {
            type: 'function'
        },
        onKeyup: {
            type: 'function'
        },
        onKeydown: {
            type: 'function'
        },
        onKeypress: {
            type: 'function'
        }
    },
    data: function data() {
        return {
            TEXT_TYPE_INPUT: TEXT_TYPE_INPUT,
            TEXT_TYPE_TEXTAREA: TEXT_TYPE_TEXTAREA,
            isFocus: false
        };
    },

    watchers: {
        value: function value(_value) {
            this.get('onChange') && this.get('onChange')(_value);
        }
    },

    methods: {
        blur: function blur(args) {
            this.set({
                isFocus: false
            });
            this.get('onBlur') && this.get('onBlur')(args);
        },
        focus: function focus(args) {
            this.set({
                isFocus: true
            });
            this.get('onFocus') && this.get('onFocus')(args);
        },
        clear: function clear() {
            this.set({
                value: ''
            });
        },
        labelClick: function labelClick(args) {
            var me = this;
            me.get('onChange') && me.get('onChange')(me.get('value'), args);
        }
    },
    afterMount: function afterMount() {
        var me = this;
        if (!me.$refs) {
            return;
        }
        me.documentKeydownHandler = function (event) {
            if (event.target == me.$refs.input) {
                me.get('onKeydown') && me.get('onKeydown')(event);
                if (event.keyCode === 13) {
                    me.get('onEnter') && me.get('onEnter')(event);
                }
            }
        };
        me.documentKeyupHandler = function (event) {
            if (event.target == me.$refs.input) {
                me.get('onKeyup') && me.get('onKeyup')(event);
            }
        };
        me.documentKeypressHandler = function (event) {
            if (event.target == me.$refs.input) {
                me.get('onKeypress') && me.get('onKeypress')(event);
            }
        };
        document.addEventListener('keydown', me.documentKeydownHandler);
        document.addEventListener('keyup', me.documentKeyupHandler);
        document.addEventListener('keypress', me.documentKeypressHandler);
    },
    beforeDestroy: function beforeDestroy() {
        var me = this;
        if (!me.$refs) {
            return;
        }
        document.removeEventListener('keydown', me.documentKeydownHandler);
        document.removeEventListener('keyup', me.documentKeyupHandler);
        document.removeEventListener('keypress', me.documentKeypressHandler);
    }
};

var InputNumber = {
    template: '\n        <div class="bell-input-number\n        {{#if size}} bell-input-number-{{size}}{{/if}}\n        {{#if disabled}} bell-input-number-disabled{{/if}}\n        {{#if readonly}} bell-input-number-readonly{{/if}}\n        ">\n            <div class="bell-input-number-actions">\n                <span class="bell-icon bell-icon-ios-arrow-up" on-click="up()"></span>\n                <span class="bell-icon bell-icon-ios-arrow-down" on-click="down()"></span>\n            </div>\n\n            <div class="bell-input-number-wrapper">\n                <input type="text" class="bell-input"\n                {{#if disabled}}disabled="disabled"{{/if}}\n                {{#if readonly || !editable}}readonly="readonly"{{/if}}\n                model="value" on-blur="blur()" on-focus="focus()"\n                ></input>\n            </div>\n        </div>\n    ',
    propTypes: {
        maxValue: {
            type: ['number', 'string']
        },
        minValue: {
            type: ['number', 'string']
        },
        value: {
            type: ['number', 'string'],
            value: 0
        },
        step: {
            type: ['number', 'string'],
            value: 1
        },
        size: {
            type: 'string'
        },
        readonly: {
            type: 'boolean',
            value: false
        },
        disabled: {
            type: ['string', 'boolean']
        },
        editable: {
            type: ['string', 'boolean']
        },

        onChange: {
            type: 'function'
        },
        onFocus: {
            type: 'function'
        },
        onBlur: {
            type: 'function'
        }
    },

    methods: {
        up: function up() {
            var me = this;
            me.increase('value', me.get('step'), me.get('maxValue'));
        },
        down: function down() {
            var me = this;
            var value = me.decrease('value', me.get('step'), me.get('minValue'));
        },
        blur: function blur() {
            this.get('onBlur') && this.get('onBlur').apply(undefined, arguments);
        },
        focus: function focus() {
            this.get('onFocus') && this.get('onFocus').apply(undefined, arguments);
        }
    }
};

var Radio = {
    template: '\n<label class="bell-radio\n{{#if isChecked}} bell-active{{/if}}\n{{#if isDisabled}} bell-radio-disabled{{/if}}\n">\n    <span class="bell-radio-wrapper" on-click="click()">\n        <span class="bell-radio-inner"></span>\n        <input class="bell-radio-input" type="radio" value="{{value}}" />\n    </span>\n\n    <span class="bell-radio-label">\n        {{#if label}}\n            {{label}}\n        {{else}}\n            <slot name="children" />\n        {{/if}}\n    </span>\n</label>\n    ',

    propTypes: {
        label: {
            type: 'string'
        },
        value: {
            type: ['string', 'number', 'boolean']
        },
        disabled: {
            type: ['string', 'boolean']
        },
        checked: {
            type: ['string', 'boolean']
        }
    },

    data: function data() {
        var me = this;
        return {
            isChecked: me.get('checked'),
            name: '',
            isDisabled: me.get('disabled')
        };
    },

    events: {
        updateRadioName: function updateRadioName(event, data) {
            this.set({
                name: data.name
            });
        },
        updateRadioValue: function updateRadioValue(event, data) {
            var me = this;
            me.set({
                isChecked: data.value == me.get('value')
            });
        },
        updateRadioDisabled: function updateRadioDisabled(event, data) {
            var me = this;
            me.set({
                isDisabled: data.disabled
            });
        }
    },

    methods: {
        click: function click() {
            var me = this;
            if (me.get('isDisabled')) {
                return;
            }
            var isChecked = me.get('isChecked');
            me.set({
                isChecked: !isChecked
            });
            me.fire('radioValueChange', {
                value: me.get('value')
            });
            return;
        }
    }
};

var RadioGroup = {
    template: '\n<div class="\n{{#if button}}bell-radio-button{{else}}bell-radio-group-wrapper{{/if}}\n{{#if type}} bell-radio-group-{{type}}{{/if}}\n{{#if size}} bell-radio-group-{{size}}{{/if}}\n{{#if disabled}} bell-radio-group-disabled{{/if}}\n{{#if vertical}} bell-radio-vertical{{/if}}\n">\n    <slot name="children" />\n</div>\n    ',
    propTypes: {
        name: {
            type: 'string'
        },
        value: {
            type: ['string', 'number']
        },
        size: {
            type: ['string', 'number']
        },
        type: {
            type: 'string'
        },
        disabled: {
            type: ['string', 'boolean']
        },
        vertical: {
            type: ['string', 'boolean']
        },

        button: {
            type: ['string', 'boolean']
        },
        onChange: {
            type: 'function'
        }
    },

    events: {
        radioValueChange: function radioValueChange(event, data) {
            var me = this;
            me.set({
                value: data.value
            });
            me.get('onChange') && me.get('onChange')(data.value);
            me.fire('updateRadioValue', {
                value: data.value
            }, true);
        }
    },
    afterMount: function afterMount() {
        var me = this;
        me.fire('updateRadioName', {
            name: me.get('name')
        }, true);

        if (me.get('disabled')) {
            me.fire('updateRadioDisabled', {
                disabled: me.get('disabled') ? true : false
            }, true);
        }
    }
};

var Checkbox = {
    template: '\n<label class="bell-checkbox\n{{#if disabled}} bell-checkbox-disabled{{/if}}\n{{#if type}} bell-checkbox-{{type}}{{/if}}\n{{#if size}} bell-checkbox-{{size}}{{/if}}\n{{#if isChecked}} bell-active{{/if}}\n{{#if indeterminate}} bell-checkbox-indeterminate{{/if}}\n">\n    <span class="bell-checkbox-wrapper{{#if isChecked}} bell-active{{/if}}" on-click="click()">\n        <span class="bell-checkbox-inner"></span>\n        <input class="bell-checkbox-input" type="checkbox" value="{{value}}" />\n    </span>\n\n    <span class="bell-checkbox-label">\n        {{#if label}}\n            {{label}}\n        {{else}}\n            <slot name="children" />\n        {{/if}}\n    </span>\n</label>\n    ',

    model: 'modelValue',

    propTypes: {
        label: {
            type: 'string'
        },
        indeterminate: {
            type: ['string', 'number', 'boolean']
        },
        modelValue: {
            type: 'string'
        },
        value: {
            type: ['string', 'number', 'boolean']
        },
        disabled: {
            type: ['string', 'boolean']
        },
        checked: {
            type: ['string', 'boolean']
        },
        type: {
            type: 'string'
        },
        size: {
            type: 'string'
        },
        onChange: {
            type: 'function'
        }
    },

    data: function data() {
        var me = this;
        return {
            isChecked: me.get('checked') ? true : false
        };
    },

    events: {
        updateCheckboxValue: function updateCheckboxValue(event, data) {
            var me = this;
            var isChecked = Yox.is.array(data.value) && Yox.array.has(data.value, me.get('value'));
            me.set({
                isChecked: isChecked,
                modelValue: isChecked
            });
            me.get('onChange') && me.get('onChange')(isChecked);
        },
        updateCheckboxType: function updateCheckboxType(event, data) {
            var me = this;
            me.set({
                type: data.type
            });
        },
        updateCheckboxDisabled: function updateCheckboxDisabled(event, data) {
            var me = this;
            me.set({
                disabled: data.disabled
            });
        }
    },

    watchers: {
        modelValue: function modelValue(value) {
            this.set({
                isChecked: value
            });
        }
    },

    methods: {
        click: function click() {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            var isChecked = me.get('isChecked');
            me.fire('updateCheckbox', {
                isChecked: !isChecked,
                value: me.get('value')
            });
            me.set({
                isChecked: !isChecked,
                modelValue: !isChecked
            });
            me.get('onChange') && me.get('onChange')(!isChecked);
        }
    }
};

var CheckboxGroup = {
    template: '\n<div class="\nbell-checkbox-group\n{{#if type}} bell-checkbox-group-{{type}}{{/if}}\n{{#if size}} bell-checkbox-group-{{size}}{{/if}}\n{{#if vertical}} bell-checkbox-vertical{{/if}}\n">\n    <slot name="children" />\n</div>\n    ',
    model: 'modelValue',
    propTypes: {
        name: {
            type: 'string'
        },
        modelValue: {
            type: 'array',
            value: function value() {
                return [];
            }
        },
        size: {
            type: ['string', 'number']
        },
        type: {
            type: 'string'
        },
        disabled: {
            type: ['string', 'boolean']
        },
        vertical: {
            type: ['string', 'boolean']
        },
        onChange: {
            type: 'function'
        }
    },

    events: {
        updateCheckbox: function updateCheckbox(events, data) {
            var me = this;
            var result = Yox.is.array(me.get('modelValue')) ? me.get('modelValue') : [];
            if (data.isChecked) {
                if (Yox.array.indexOf(result, data.value) === -1) {
                    result.push(data.value);
                }
            } else {
                Yox.array.remove(result, data.value);
            }

            me.set({
                modelValue: result
            });
            me.get('onChange') && me.get('onChange')(result);
        }
    },
    watchers: {
        modelValue: function modelValue(value) {
            this.fire('updateCheckboxValue', {
                value: value
            }, true);
        }
    },
    afterMount: function afterMount() {
        var me = this;
        if (me.get('type')) {
            me.fire('updateCheckboxType', {
                type: me.get('type')
            }, true);
        }
        if (me.get('disabled')) {
            me.fire('updateCheckboxDisabled', {
                disabled: me.get('disabled')
            }, true);
        }
    }
};

var Switch = {
    template: '\n<div class="bell-switch\n{{#if type}} bell-switch-{{type}}{{/if}}\n{{#if size}} bell-switch-{{size}}{{/if}}\n{{#if disabled}} bell-switch-disabled{{/if}}\n{{#if isChecked}} bell-active{{/if}}\n{{#if className}} {{className}}{{/if}}\n" on-click="click()">\n    <span class="bell-switch-button">\n        {{#if hasSlot(\'children\')}}\n            <slot name="children" />\n        {{else if size != \'small\'}}\n            {{#if isChecked}}\n                {{#if onLabel}}\n                    <span class="bell-switch-on">\n                        {{onLabel}}\n                    </span>\n                {{/if}}\n            {{else}}\n                {{#if offLabel}}\n                    <span class="bell-switch-off">\n                        {{offLabel}}\n                    </span>\n                {{/if}}\n            {{/if}}\n        {{/if}}\n    </span>\n    <input class="bell-switch-input" type="hidden" value="{{value}}" />\n</div>\n    ',
    model: 'modelValue',
    propTypes: {
        className: {
            type: 'string'
        },
        label: {
            type: 'string'
        },
        modelValue: {
            type: 'string'
        },
        disabled: {
            type: ['string', 'boolean']
        },
        checked: {
            type: ['string', 'boolean']
        },
        type: {
            type: 'string'
        },
        size: {
            type: 'string'
        },
        onChange: {
            type: 'function'
        },
        onLabel: {
            type: 'string'
        },
        offLabel: {
            type: 'string'
        }
    },

    data: function data() {
        var me = this;
        return {
            isChecked: me.get('checked') ? true : false
        };
    },

    methods: {
        click: function click() {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            var isChecked = me.get('isChecked');
            me.set({
                isChecked: !isChecked,
                modelValue: !isChecked
            });
            me.get('onChange') && me.get('onChange')(!isChecked);
        }
    }
};

var Select = {
    template: '\n<div class="bell-select\n{{#if size}} bell-select-{{size}}{{/if}}\n{{#if disabled}} bell-select-disabled{{/if}}\n{{#if placement}} bell-select-{{placement}}{{/if}}\n"\n    {{#if style}} style="{{style}}"{{/if}}\n>\n    <div class="bell-select-button{{#if visible}} bell-active{{/if}}" on-click="toggleMenu()">\n        <input type="hidden" model="value" />\n        <span class="bell-select-value{{#if valueToText(value) == null}} bell-hide{{/if}}">\n            {{{valueToText(value)}}}\n        </span>\n        <span class="bell-select-placeholder{{#if valueToText(value) != null}} bell-hide{{/if}}">\n            {{#if defaultText}}\n                {{{defaultText}}}\n            {{else}}\n                \u8BF7\u9009\u62E9...\n            {{/if}}\n        </span>\n        <span class="bell-icon bell-icon-arrow-down-b bell-select-arrow"></span>\n    </div>\n\n    <div class="bell-select-dropdown{{#if !visible}} bell-hide{{/if}}"\n    {{#if style}} style="{{style}}"{{/if}}\n    >\n        <ul class="bell-select-dropdown-list">\n            {{#each list:index}}\n            <li class="bell-select-dropdown-item{{#if focusIndex == index}} bell-focus{{/if}}{{#if value == val}} bell-active{{/if}}" on-click="itemClick(index)">\n                {{text}}\n            </li>\n            {{/each}}\n        </ul>\n    </div>\n</div>\n    ',

    propTypes: {

        style: {
            type: 'string'
        },

        defaultText: {
            type: 'string'
        },

        list: {
            type: 'array',
            require: true
        },

        value: {
            type: 'string'
        },

        size: {
            type: 'string'
        },

        disabled: {
            type: 'string'
        },

        placement: {
            type: 'string'
        },

        autoComplete: {
            type: 'string'
        }
    },

    data: function data() {
        return {
            visible: false,
            focusIndex: null
        };
    },

    filters: {
        valueToText: function valueToText(value) {
            if (value == null) {
                return '';
            }
            return this.valueMap[value];
        }
    },

    methods: {
        toggleMenu: function toggleMenu() {
            var me = this;
            if (me.get('disabled') || me.get('autoComplete')) {
                return false;
            }
            me.set({
                visible: !me.get('visible')
            });
        },

        itemClick: function itemClick(index) {
            var me = this;
            var list = me.get('list');
            me.set({
                value: list[index].val,
                focusIndex: index,
                visible: false
            });
        },

        setFocusIndex: function setFocusIndex(option) {
            var me = this;
            var focusIndex = me.get('focusIndex');
            var value = me.get('value');
            var list = me.get('list');
            var length = list.length - 1;

            if (focusIndex == null) {
                focusIndex = 0;
            }

            if (option == 'up') {
                focusIndex = focusIndex + 1 > length ? 0 : focusIndex + 1;
                me.set({
                    focusIndex: focusIndex
                });
            } else if (option == 'down') {
                focusIndex = focusIndex - 1 < 0 ? length : focusIndex - 1;
                me.set({
                    focusIndex: focusIndex
                });
            } else if (option == 'enter') {
                me.set({
                    value: list[focusIndex].val,
                    focusIndex: focusIndex,
                    visible: false
                });
            }
        }
    },

    afterMount: function afterMount() {
        var me = this;
        me.valueMap = {};
        Yox.array.each(me.get('list'), function (item, index) {
            me.valueMap[item.val] = item.text;
            if (item.val == me.get('value')) {
                me.set({
                    focusIndex: index
                });
            }
        });

        me.documentClickHandler = function (e) {
            if (me.$el.contains(e.target)) {
                return false;
            }
            me.set({
                visible: false
            });
        };

        me.documentKeydownHander = function (e) {
            var code = e.keyCode;
            if (!me.get('visible')) {
                return;
            }
            if (code === 40) {
                // up
                e.preventDefault();
                me.setFocusIndex('up');
            } else if (code === 38) {
                // down
                e.preventDefault();
                me.setFocusIndex('down');
            } else if (code == 13) {
                // enter
                me.setFocusIndex('enter');
            }
        };

        document.addEventListener('click', me.documentClickHandler);
        document.addEventListener('keydown', me.documentKeydownHander);
    },

    beforeDestroy: function beforeDestroy() {
        var me = this;
        me.valueMap = null;
        document.removeEventListener('click', me.documentClickHandler);
        document.removeEventListener('keydown', me.documentKeydownHander);
    }
};

var Page = {
    template: '\n<div class="bell-page\n{{#if size}} bell-page-{{size}}{{/if}}\n{{#if className}} {{className}}{{/if}}\n">\n{{#partial pageCenter}}\n    {{#if current - 3 > 1}}\n        <li class="bell-page-item bell-page-item-prev" on-click="fastPrev()">\n            <i class="bell-icon bell-icon-ios-arrow-left"></i>\n            <i class="bell-icon bell-icon-ios-arrow-left"></i>\n        </li>\n    {{/if}}\n\n    {{#if current - 2 > 1}}\n        <li class="bell-page-item" on-click="changePage(current - 2)">\n            {{ current - 2 }}\n        </li>\n    {{/if}}\n\n    {{#if current - 1 > 1}}\n        <li class="bell-page-item" on-click="changePage(current - 1)">\n            {{ current - 1 }}\n        </li>\n    {{/if}}\n\n    {{#if current != 1 && current != count}}\n        <li class="bell-page-item bell-active">\n            {{ current }}\n        </li>\n    {{/if}}\n\n    {{#if current + 1 < count}}\n        <li class="bell-page-item" on-click="changePage(current + 1)">\n            {{ current + 1 }}\n        </li>\n    {{/if}}\n\n    {{#if current + 2 < count}}\n        <li class="bell-page-item" on-click="changePage(current + 2)">\n            {{ current + 2 }}\n        </li>\n    {{/if}}\n\n    {{#if current + 3 < count}}\n        <li class="bell-page-item bell-page-item-next" on-click="fastNext()">\n            <i class="bell-icon bell-icon-ios-arrow-right"></i>\n            <i class="bell-icon bell-icon-ios-arrow-right"></i>\n        </li>\n    {{/if}}\n{{/partial}}\n\n    {{#if showTotal}}\n    <span class="bell-page-total">\n        \u5171 {{total}} \u6761\n    </span>\n    {{/if}}\n\n    {{#if showSizer}}\n    <div class="bell-page-select">\n        <Select list="{{pageList}}"\n            model="pageSize"\n            size="{{size}}"\n            placement="{{placement}}"\n        />\n    </div>\n    {{/if}}\n\n    {{#if !simple}}\n    <ul class="bell-page-list">\n\n        <li class="bell-page-item bell-page-prev{{#if current <= 1}} bell-disabled{{/if}}" on-click="prev()">\n            <i class="bell-icon bell-icon-ios-arrow-left"></i>\n        </li>\n\n        <li class="bell-page-item{{#if current == 1}} bell-active{{/if}}" on-click="changePage(1)">\n            1\n        </li>\n\n        {{#if count > 1}}\n            {{> pageCenter}}\n            <li class="bell-page-item{{#if current == count}} bell-active{{/if}}" on-click="changePage(count)">\n                {{count}}\n            </li>\n        {{/if}}\n\n        <li class="bell-page-item bell-page-next {{count}}{{#if current >= count}} bell-disabled{{/if}}" on-click="next()">\n            <i class="bell-icon bell-icon-ios-arrow-right"></i>\n        </li>\n    </ul>\n\n    {{else}}\n        <div class="bell-page-simple">\n            <span class="bell-page-item bell-page-prev{{#if current <= 1}} bell-disabled{{/if}}" on-click="prev()">\n                <i class="bell-icon bell-icon-ios-arrow-left"></i>\n            </span>\n\n            <div class="bell-page-input">\n                <Input type="input"\n                    model="currentPage"\n                    size="{{size}}"\n                ></Input>\n            </div>\n\n            {{\'/\'}}\n\n            <span class="bell-page-item{{#if current == count}} bell-active{{/if}}" on-click="changePage(count)">\n                {{count}}\n            </span>\n\n            <span class="bell-page-item bell-page-next {{count}}{{#if current >= count}} bell-disabled{{/if}}" on-click="next()">\n                <i class="bell-icon bell-icon-ios-arrow-right"></i>\n            </span>\n        </div>\n    {{/if}}\n\n    {{#if showElevator}}\n    <div class="bell-page-elevator">\n        \u8DF3\u81F3\n        <div class="bell-page-input">\n            <Input type="input"\n                placeholder="\u8BF7\u8F93\u5165..."\n                model="currentPage"\n                size="{{size}}"\n            ></Input>\n        </div>\n        \u9875\n    </div>\n    {{/if}}\n</div>\n    ',

    propTypes: {
        size: {
            type: 'string'
        },
        simple: {
            type: 'string'
        },
        total: {
            type: ['string', 'number']
        },
        current: {
            type: ['string', 'number'],
            value: 1
        },
        pageSize: {
            type: ['string', 'number'],
            value: 10
        },
        showSizer: {
            type: ['string', 'boolean', 'number']
        },
        pageSizeOpts: {
            type: 'array'
        },
        showElevator: {
            type: ['string', 'boolean', 'number']
        },
        showTotal: {
            type: ['string', 'boolean', 'number']
        },
        className: {
            type: 'string'
        },
        placement: {
            type: 'string'
        },
        onChange: {
            type: 'function'
        },
        onPageSizeChange: {
            type: 'function'
        }
    },

    data: function data() {
        var me = this;
        var getPageList = function getPageList() {
            var pageList = [];
            if (me.get('showSizer') && me.get('pageSizeOpts')) {
                Yox.array.each(me.get('pageSizeOpts'), function (value) {
                    pageList.push({
                        text: value + ' 条/页',
                        val: value
                    });
                });
            }
            return pageList;
        };
        return {
            pageList: getPageList(),
            count: 0,
            currentPage: 1
        };
    },

    watchers: {
        pageSize: function pageSize(value) {
            var me = this;
            me.updateCount();
            me.get('onPageSizeChange') && me.get('onPageSizeChange')(value);
        },
        current: function current(value) {
            var me = this;
            me.get('onChange') && me.get('onChange')(value);
        }
    },

    methods: {

        fastPrev: function fastPrev() {
            var me = this;
            if (me.get('current') < 1) {
                return;
            }
            me.decrease('current', 5, 1);
        },

        fastNext: function fastNext() {
            var me = this;
            if (me.get('current') >= me.get('count')) {
                return;
            }
            me.increase('current', 5, me.get('count'));
        },

        prev: function prev() {
            var me = this;
            if (me.get('current') < 1) {
                return;
            }
            me.decrease('current', 1, 1);

            if (me.get('simple')) {
                me.decrease('currentPage', 1, 1);
            }
        },

        next: function next() {
            var me = this;
            if (me.get('current') >= me.get('count')) {
                return;
            }
            me.increase('current', 1, me.get('count'));
            if (me.get('simple')) {
                me.increase('currentPage', 1, me.get('count'));
            }
        },

        changePage: function changePage(page) {
            this.set({
                current: page,
                currentPage: page
            });
        },

        updateCount: function updateCount() {
            var me = this;
            if (me.get('total')) {
                var count = 1;
                if (me.get('total') > me.get('pageSize')) {
                    count = Math.ceil(me.get('total') / me.get('pageSize'));
                }

                me.set({
                    count: count
                });
            }
        },

        setCurrent: function setCurrent(option) {
            var me = this;
            var currentPage = +me.get('currentPage');
            var current = me.get('current');
            var count = me.get('count');

            if (option == 'enter') {
                if (Yox.is.number(currentPage) && currentPage > 0 && currentPage <= count) {
                    current = currentPage;
                }
            } else if (option == 'up') {
                current = current > 1 ? current - 1 : 1;
            } else if (option == 'down') {
                current = current + 1 > count ? count : current + 1;
            }

            me.set({
                current: current,
                currentPage: current
            });
        }
    },

    afterMount: function afterMount() {
        var me = this;
        me.updateCount();

        me.documentKeydownHander = function (e) {
            var code = e.keyCode;
            if (code === 40) {
                // up
                e.preventDefault();
                me.setCurrent('down');
            } else if (code === 38) {
                // down
                e.preventDefault();
                me.setCurrent('up');
            } else if (code == 13) {
                // enter
                e.preventDefault();
                me.setCurrent('enter');
            }
        };

        document.addEventListener('keydown', me.documentKeydownHander);
    },

    beforeDestroy: function beforeDestroy() {
        var me = this;
        document.removeEventListener('keydown', me.documentKeydownHander);
    }
};

var Alert = {
    template: '\n<div class="bell-alert\n{{#if type}} bell-alert-{{type}}{{/if}}\n{{#if hasDesc}} bell-alert-with-desc{{/if}}\n{{#if showIcon}} bell-alert-with-icon{{/if}}\n{{#if center}} bell-alert-center{{/if}}\n">\n    {{#if showIcon}}\n    <span class="bell-alert-icon">\n        <i class="bell-icon\n        {{#if type == \'info\'}} bell-icon-information-circled\n        {{else if type == \'success\'}} bell-icon-checkmark-circled\n        {{else if type == \'warning\'}} bell-icon-android-alert\n        {{else if type == \'error\'}} bell-icon-close-circled\n        {{/if}}\n        "></i>\n    </span>\n    {{/if}}\n\n    <span class="bell-alert-content" style="padding-right: {{paddingRight}}px">\n        <slot name="children" />\n    </span>\n\n    {{#if closable}}\n    <span ref="close" class="bell-alert-close" on-click="close()">\n        {{#if closeText}}\n            {{closeText}}\n        {{else}}\n            <i class="bell-icon bell-icon-ios-close-empty"></i>\n        {{/if}}\n    </span>\n    {{/if}}\n</div>\n    ',

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

    data: function data() {
        return {
            hasDesc: false,
            paddingRight: 0
        };
    },

    watchers: {},

    methods: {
        close: function close() {
            var me = this;
            var container = me.$el;
            var classNames = container.getAttribute('class');
            container.setAttribute('class', classNames + ' bell-hide');
            setTimeout(function () {
                container.remove();
            }, 500);
            me.get('close') && me.get('close')();
        }
    },

    events: {
        hasDesc: function hasDesc() {
            this.set({
                hasDesc: true
            });
        }
    },

    afterMount: function afterMount() {
        var me = this;

        if (me.get('closable')) {
            me.set({
                paddingRight: me.$refs.close.clientWidth
            });
        }
    },

    beforeDestroy: function beforeDestroy() {}
};

var Desc = {
    template: '\n        <div class="bell-alert-desc">\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </div>\n    ',
    afterMount: function afterMount() {
        var me = this;
        me.fire('hasDesc');
    }
};

var Spinner = {
    template: '\n<div class="bell-spinner\n{{#if size}} {{size}}{{/if}}\n{{#if type}} {{type}}{{/if}}\n{{#if fix}} bell-spinner-fix{{/if}}\n" {{#if style}} style="{{style}}"{{/if}}>\n\n    {{#if hasSlot(\'children\')}}\n        <slot name="children" />\n    {{else}}\n        <div class="bell-spinner-main">\n            <span class="bell-spinner-dot"></span>\n            {{#if text}}\n                <span class="bell-spinner-text">\n                    {{text}}\n                </span>\n            {{/if}}\n        </div>\n    {{/if}}\n</div>\n    ',
    propTypes: {
        size: {
            type: 'string'
        },
        style: {
            type: 'string'
        },
        text: {
            type: 'string'
        },
        fix: {
            type: 'boolean'
        },
        type: {
            type: 'string'
        }
    }
};

var BackTop = {
    template: '\n<div class="bell-backtop\n{{#if className}} {{className}}{{/if}}\n{{#if !isShow}} bell-hide{{/if}}\n{{#if !fix}} bell-backtop-fix{{/if}}\n"\nstyle="bottom: {{bottom}}px; right: {{right}}px;" on-click="back()"\n>\n    <i class="bell-icon bell-icon-chevron-up"></i>\n</div>\n    ',
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

    data: function data() {
        return {
            isShow: false
        };
    },

    methods: {
        back: function back() {
            var me = this;
            var top = me.container.scrollTop;
            me.container.scrollTop = 0;
            me.get('click') && me.get('click')(top);
        }
    },

    afterMount: function afterMount(argument) {
        var me = this;
        var container = me.container = me.$parent.$el;
        me.handleScroll = function () {
            me.set({
                isShow: container.scrollTop >= me.get('height')
            });
        };

        container.addEventListener('scroll', me.handleScroll);
        container.addEventListener('resize', me.handleScroll);
    },

    beforeDestroy: function beforeDestroy() {
        var me = this;
        me.container.removeEventListener('scroll', me.handleScroll);
        me.container.removeEventListener('resize', me.handleScroll);
    }
};

var Avatar = {
    template: '\n<div class="bell-avatar\n{{#if className}} {{className}}{{/if}}\n{{#if size}} bell-avatar-{{size}}{{/if}}\n{{#if shape}} bell-avatar-{{shape}}{{/if}}\n" style="font-size: {{fontSize}}px;\nbackground-color: {{backgroundColor}};\ncolor: {{color}}">\n    {{#if src}}\n        <img{{#if srcset}} srcset="{{srcset}}"{{/if}} ondragstart="return false" src="{{src}}" />\n    {{else}}\n        <slot name="children" />\n    {{/if}}\n</div>\n    ',
    propTypes: {
        shape: {
            type: 'string'
        },
        src: {
            type: 'string'
        },
        srcset: {
            type: 'string'
        },
        size: {
            type: 'string'
        },
        className: {
            type: 'string'
        },
        fontSize: {
            type: ['string', 'number']
        },
        backgroundColor: {
            type: 'string'
        },
        color: {
            type: 'string'
        }
    }
};

var Badge = {
    template: '\n<div class="bell-badge\n{{#if type}} bell-badge-{{type}}{{/if}}\n{{#if className}} {{className}}{{/if}}\n">\n    <slot name="children" />\n    {{#if !hidden}}\n        {{#if dot}}\n            <span class="bell-badge-dot"></span>\n        {{else}}\n            <span class="bell-badge-count{{#if !$slot_children}} bell-badge-count-alone{{/if}}">\n                {{getText(count, maxCount)}}\n            </span>\n        {{/if}}\n    {{/if}}\n</div>\n    ',
    propTypes: {
        count: {
            type: ['string', 'number']
        },
        maxCount: {
            type: ['string', 'number']
        },
        dot: {
            type: ['string', 'number', 'boolean']
        },
        className: {
            type: 'string'
        },
        hidden: {
            type: ['string', 'number', 'boolean']
        },
        type: {
            type: 'string'
        }
    },

    filters: {
        getText: function getText(count, maxCount) {
            var maxCount = Yox.is.number(maxCount) ? +maxCount : 1;
            var countStr = Yox.is.number(count) ? +count : 0;

            return maxCount < countStr ? maxCount + '+' : count;
        }
    }
};

var DatePicker = {
    template: '\n        <div class="bell-datepicker\n        ">\n            <div class="bell-datepicker-el" on-click="click()">\n                <Input placeholder="\u8BF7\u9009\u62E9\u65E5\u671F..."\n                    style="width: 200px;"\n                    model="value"\n                    onFocus="{{onFocus}}"\n                    type="input"\n                    clearable\n                >\n                </Input>\n            </div>\n\n            <div class="bell-datepicker-poper\n            {{#if isPopuping}} bell-isPopuping{{/if}}\n            {{#if isPopdowning}} bell-isPopdowning{{/if}}\n            {{#if isOpen}} bell-show{{/if}}\n            ">\n                {{#if mode == \'date\'}}\n                    <Date></Date>\n                {{else if mode == \'dateRange\'}}\n                    <DateRange></DateRange>\n                {{else if mode == \'week\'}}\n                    <DateWeek></DateWeek>\n                {{else if mode == \'year\'}}\n                    <DateYear></DateYear>\n                {{else if mode == \'month\'}}\n                    <DateMonth></DateMonth>\n                {{/if}}\n            </div>\n        </div>\n    ',

    propTypes: {
        mode: {
            type: 'string'
        },
        onChange: {
            type: 'function'
        }
    },

    events: {
        yearChange: function yearChange(event, data) {
            var me = this;
            me.get('onChange') && me.get('onChange')({
                year: data.year
            });
            me.set({
                currentValue: data,
                value: data.year + '年'
            });
            me.close();
        },
        monthChange: function monthChange(event, data) {
            var me = this;
            me.get('onChange') && me.get('onChange')({
                year: data.year,
                month: data.month
            });
            me.set({
                currentValue: data,
                value: data.year + '年' + data.month + '月'
            });
            me.close();
        },
        weekRangeChange: function weekRangeChange(event, data) {
            this.rangeChange(data);
        },
        deteRangeChange: function deteRangeChange(event, data) {
            this.rangeChange(data);
        },
        deteChange: function deteChange(event, data) {
            var me = this;
            var date = data.date;
            var value = me.get('value');
            var newValue = me.formateDate(date);
            if (newValue !== value) {
                me.get('onChange') && me.get('onChange')({
                    value: newValue,
                    date: date
                }, {
                    value: value,
                    date: me.get('currentValue')
                });
            }
            me.set({
                currentValue: date,
                value: me.formateDate(date)
            });
            me.close();
        }
    },

    data: function data() {
        var me = this;
        return {
            value: '',
            currentValue: null,
            isPopuping: false,
            isPopdowning: false,
            isOpen: false,
            onFocus: function onFocus() {
                me.open();
            }
        };
    },

    methods: {
        open: function open() {
            var me = this;
            me.set({
                isPopuping: true
            });
            setTimeout(function () {
                me.set({
                    isPopuping: false,
                    isOpen: true
                });
            }, 300);
        },
        close: function close() {
            var me = this;
            if (!me.get('isOpen')) {
                return;
            }
            me.set({
                isPopdowning: true
            });
            setTimeout(function () {
                me.set({
                    isPopdowning: false,
                    isOpen: false
                });
            }, 300);
        },
        formateDate: function formateDate(date) {
            return date.year + '年' + date.month + '月' + date.date + '日';
        },
        rangeChange: function rangeChange(data) {
            var me = this;
            var start = data.start;
            var end = data.end;
            if (!end) {
                return;
            }
            me.get('onChange') && me.get('onChange')({
                start: start,
                end: end,
                date: me.formateDate(start)
            }, {
                start: start,
                end: end,
                date: me.formateDate(end)
            });
            me.set({
                currentValue: {
                    start: start,
                    end: end,
                    date: me.formateDate(start)
                },
                value: me.formateDate(start) + '-' + me.formateDate(end)
            });
            me.close();
        }
    },

    afterMount: function afterMount() {
        var me = this;
        me.documentClickHandler = function (e) {
            if (me.$el.contains(e.target)) {
                return false;
            }
            me.close();
        };
        document.addEventListener('click', me.documentClickHandler);
    },

    beforeDestroy: function beforeDestroy() {
        var me = this;
        document.removeEventListener('click', me.documentClickHandler);
    }
};

var normalizeDate = function normalizeDate(date) {
    return date.setHours(0, 0, 0, 0);
};

var offsetSecond = function offsetSecond(date, offset) {
    if (!Yox.is.numeric(date)) {
        date = date.getTime();
    }
    return new Date(date + offset * 1000);
};

var offsetMinute = function offsetMinute(date, offset) {
    return offsetSecond(date, offset * 60);
};

var offsetHour = function offsetHour(date, offset) {
    return offsetMinute(date, offset * 60);
};

var offsetDate = function offsetDate(date, offset) {
    return offsetHour(date, offset * 24);
};

var offsetMonth = function offsetMonth(date, offset) {
    if (!Yox.is.numeric(date)) {
        date = date.getTime();
    }
    date = new Date(date);
    date.setDate(1);
    date.setMonth(date.getMonth() + offset);
    return date;
};

var firstDateInWeek = function firstDateInWeek(date, firstDay) {
    if (Yox.is.numeric(date)) {
        date = new Date(date);
    }
    var day = date.getDay();
    day = day >= firstDay ? day : day + 7;

    return offsetDate(date, -1 * (day - firstDay));
};

var lastDateInWeek = function lastDateInWeek(date, firstDay) {
    return offsetDate(firstDateInWeek(date, firstDay), 6);
};

var firstDateInMonth = function firstDateInMonth(date) {
    if (Yox.is.numeric(date)) {
        date = new Date(date);
    }
    return offsetDate(date, 1 - date.getDate());
};

var lastDateInMonth = function lastDateInMonth(date) {
    return offsetDate(firstDateInMonth(offsetMonth(date, 1)), -1);
};



var parseDate = function parseDate(year, month, date) {
    var valid = false;

    if (Yox.is.numeric(year) && Yox.is.numeric(month) && Yox.is.numeric(date)) {
        valid = true;
    } else if (arguments.length === 1) {
        if (Yox.is.object(year)) {
            valid = true;
            date = year.date;
            month = year.month;
            year = year.year;
        }
    } else if (arguments.length === 2) {
        if (Yox.is.string(year)) {
            valid = true;
            var parts = year.split(month || '-');
            year = parts[0];
            month = parts[1];
            date = parts[2];
        }
    }

    if (valid) {
        year = '' + year;
        if (year.length === 4 && month >= 1 && month <= 12 && date >= 1 && date <= 31) {
            return new Date(year, month - 1, date);
        }
    }
};

var simplifyDate = function simplifyDate(date) {
    if (!date) {
        return;
    }

    if (Yox.is.number(date)) {
        date = new Date(date);
    }

    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        day: date.getDay()
    };
};

var getOffsetTime = function getOffsetTime(date) {
    if (!date) {
        return 0;
    }
    return date.getTime();
};

var WEEKS = ['日', '一', '二', '三', '四', '五', '六'];

var DAY = 24 * 60 * 60 * 1000;
var stableDuration = 41 * DAY;

var Date$1 = {
    template: '\n        <div class="bell-datepicker-date">\n            <div class="bell-datepicker-header">\n                <span class="bell-datepicker-header-button" on-click="prevYear()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="prevMonth()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                </span>\n\n                <span class="bell-text-medium">\n                    {{currentYear}} \u5E74\n                </span>\n                <span class="bell-text-medium">\n                    {{currentMonth}} \u6708\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="nextMonth()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="nextYear()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                </span>\n            </div>\n            <div class="bell-datepicker-table-date">\n                <div class="bell-datepicker-weeks">\n                    {{#each weeks}}\n                        <span class="bell-datepicker-col bell-text-sub">\n                            {{this}}\n                        </span>\n                    {{/each}}\n                </div>\n                <div class="bell-datepicker-days">\n                    {{#each dateList:index}}\n                        <div class="bell-datepicker-row">\n                            {{#each this:index}}\n                                <span\n                                    class="bell-datepicker-col\n                                    {{#if isCurrentMonth}} bell-datepicker-col-current-month{{/if}}\n                                    {{#if isPrevMonth}} bell-datepicker-col-prev-month{{/if}}\n                                    {{#if isLastMonth}} bell-datepicker-col-last-month{{/if}}\n                                    {{#if isCurrentDate}} bell-datepicker-col-checked{{/if}}"\n                                    on-click="click(this)"\n                                >\n                                    {{date}}\n                                </span>\n                            {{/each}}\n                        </div>\n                    {{/each}}\n                </div>\n            </div>\n        </div>\n    ',

    propTypes: {
        date: {
            type: ['string', 'number']
        },
        firstDay: {
            type: ['number', 'string']
        }
    },

    data: function data() {
        return {
            weeks: WEEKS,
            dateList: [],
            checkedDate: '',
            // 视图日期
            modeDate: ''
        };
    },

    computed: {
        currentYear: function currentYear() {
            var me = this;
            var date = me.get('modeDate');
            date = date ? simplifyDate(date) : simplifyDate(new Date());
            return date.year;
        },
        currentMonth: function currentMonth() {
            var me = this;
            var date = me.get('modeDate');
            date = date ? simplifyDate(date) : simplifyDate(new Date());
            return date.month;
        }
    },

    methods: {
        changeDate: function changeDate(offset) {
            var me = this;
            var date = me.get('modeDate');

            date = offsetMonth(date, offset);

            me.set({
                modeDate: date,
                dateList: me.createRenderData(date, me.get('checkedDate'))
            });
        },
        prevYear: function prevYear() {
            this.changeDate(-12);
        },
        prevMonth: function prevMonth() {
            this.changeDate(-1);
        },
        nextYear: function nextYear() {
            this.changeDate(12);
        },
        nextMonth: function nextMonth() {
            this.changeDate(1);
        },
        click: function click(date) {
            if (!date.isCurrentMonth) {
                return;
            }
            var me = this;
            me.fire('deteChange', {
                date: date
            });

            date = parseDate(date);
            me.set({
                checkedDate: date,
                modeDate: date,
                dateList: me.createRenderData(date, date)
            });
        },
        // 获取渲染模板的数据
        getDatasource: function getDatasource(start, end, modeDate, checkedDate) {
            var data = [];
            modeDate = simplifyDate(modeDate);
            checkedDate = simplifyDate(checkedDate);
            for (var time = start, item; time <= end; time += DAY) {
                item = simplifyDate(time);
                if (item.year == checkedDate.year && item.month == checkedDate.month && item.date == checkedDate.date && item.day == checkedDate.day) {
                    item.isCurrentDate = true;
                }

                item.isPrevMonth = item.month < modeDate.month;
                item.isCurrentMonth = item.month == modeDate.month;
                item.isLastMonth = item.month > modeDate.month;
                data.push(item);
            }
            return data;
        },
        createRenderData: function createRenderData(modeDate, checkedDate) {

            var me = this;
            var firstDay = me.get('firstDay') || 0;
            modeDate = normalizeDate(modeDate);

            var startDate;
            var endDate;

            startDate = firstDateInWeek(firstDateInMonth(modeDate), firstDay);
            endDate = lastDateInWeek(lastDateInMonth(modeDate), firstDay);

            startDate = normalizeDate(startDate);
            endDate = normalizeDate(endDate);

            var duration = endDate - startDate;
            var offset = stableDuration - duration;

            if (offset > 0) {
                endDate += offset;
            }
            var list = me.getDatasource(startDate, endDate, modeDate, checkedDate);
            return me.format(list);
        },
        format: function format(list) {
            var result = [];
            var arr = [];
            for (var i = 0; i < list.length; i++) {
                arr.push(list[i]);
                if (i % 7 == 6) {
                    result.push(arr);
                    arr = [];
                }
            }
            return result;
        }
    },

    afterMount: function afterMount() {
        var me = this;

        var today = new Date();

        var date = me.get('checkedDate');
        date = date ? date : today;

        me.set({
            modeDate: date,
            checkedDate: date,
            dateList: me.createRenderData(date, date)
        });
    },
    beforeDestroy: function beforeDestroy() {

    }
};

var WEEKS$1 = ['日', '一', '二', '三', '四', '五', '六'];

var DAY$1 = 24 * 60 * 60 * 1000;
var stableDuration$1 = 41 * DAY$1;

var DateRange = {
    template: '\n        <div class="bell-datepicker-daterange">\n            <div class="bell-datepicker-header">\n                <span class="bell-datepicker-header-button" on-click="prevYear()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="prevMonth()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                </span>\n\n                <span class="bell-text-medium">\n                    {{currentYear}} \u5E74\n                </span>\n                <span class="bell-text-medium bell-datepicker-header-month">\n                    {{currentMonth}} \u6708\n                </span>\n\n                <span class="bell-text-medium">\n                    {{currentYear}} \u5E74\n                </span>\n                <span class="bell-text-medium">\n                    {{currentMonth + 1}} \u6708\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="nextMonth()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="nextYear()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                </span>\n            </div>\n            <div class="bell-datepicker-daterange-wrapper">\n                <div class="bell-datepicker-table-date">\n                    <div class="bell-datepicker-weeks">\n                        {{#each weeks}}\n                            <span class="bell-datepicker-col bell-text-sub">\n                                {{this}}\n                            </span>\n                        {{/each}}\n                    </div>\n                    <div class="bell-datepicker-days">\n                        {{#each dateList:key}}\n                            <div class="bell-datepicker-row">\n                                {{#each this:index}}\n                                    <span\n                                        class="bell-datepicker-col\n                                        {{#if isCurrentMonth}} bell-datepicker-col-current-month{{/if}}\n                                        {{#if isPrevMonth}} bell-datepicker-col-prev-month{{/if}}\n                                        {{#if isLastMonth}} bell-datepicker-col-last-month{{/if}}\n                                        {{#if isCurrentMonth && isCheckedDate}} bell-datepicker-col-checked{{/if}}\n                                        {{#if isCurrentMonth && isRangeDate}} bell-datepicker-col-range{{/if}}"\n                                        on-click="click(this)"\n                                        on-mouseover="hover(this)"\n                                    >\n                                        {{date}}\n                                    </span>\n                                {{/each}}\n                            </div>\n                        {{/each}}\n                    </div>\n                </div>\n                <div class="bell-datepicker-table-date">\n                    <div class="bell-datepicker-weeks">\n                        {{#each weeks}}\n                            <span class="bell-datepicker-col bell-text-sub">\n                                {{this}}\n                            </span>\n                        {{/each}}\n                    </div>\n                    <div class="bell-datepicker-days">\n                        {{#each nextDateList:key}}\n                            <div class="bell-datepicker-row">\n                                {{#each this:index}}\n                                    <span\n                                        class="bell-datepicker-col\n                                        {{#if isCurrentMonth}} bell-datepicker-col-current-month{{/if}}\n                                        {{#if isPrevMonth}} bell-datepicker-col-prev-month{{/if}}\n                                        {{#if isLastMonth}} bell-datepicker-col-last-month{{/if}}\n                                        {{#if isCurrentMonth && isCheckedDate}} bell-datepicker-col-checked{{/if}}\n                                        {{#if isCurrentMonth && isRangeDate}} bell-datepicker-col-range{{/if}}"\n                                        on-click="click(this)"\n                                        on-mouseover="hover(this)"\n                                    >\n                                        {{date}}\n                                    </span>\n                                {{/each}}\n                            </div>\n                        {{/each}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    ',

    propTypes: {
        start: {
            type: ['string', 'number']
        },
        end: {
            type: ['string', 'number']
        },
        firstDay: {
            type: ['number', 'string']
        }
    },

    data: function data() {
        var me = this;
        return {
            weeks: WEEKS$1,
            // 视图日期
            modeDate: '',

            checkedStartDate: me.get('start') ? simplifyDate(new Date(me.get('start'))) : '',
            checkedEndDate: me.get('end') ? simplifyDate(new Date(me.get('end'))) : '',

            dateList: [],
            nextDateList: []
        };
    },

    computed: {
        currentYear: function currentYear() {
            var me = this;
            var date = me.get('modeDate');
            date = date ? simplifyDate(date) : simplifyDate(new Date());
            return date.year;
        },
        currentMonth: function currentMonth() {
            var me = this;
            var date = me.get('modeDate');
            date = date ? simplifyDate(date) : simplifyDate(new Date());
            return date.month;
        }
    },

    methods: {
        changeDate: function changeDate(offset) {
            var me = this;
            var date = me.get('modeDate');

            date = offsetMonth(date, offset);

            var dateList = me.createRenderData(date, me.get('checkedStartDate'), me.get('checkedEndDate'));
            var nextDateList = me.createRenderData(offsetMonth(date, 1), me.get('checkedStartDate'), me.get('checkedEndDate'));
            me.set({
                modeDate: date,
                dateList: dateList,
                nextDateList: nextDateList
            });
        },
        prevYear: function prevYear() {
            this.changeDate(-12);
        },
        prevMonth: function prevMonth() {
            this.changeDate(-1);
        },
        nextYear: function nextYear() {
            this.changeDate(12);
        },
        nextMonth: function nextMonth() {
            this.changeDate(1);
        },
        hover: function hover(date) {
            var me = this;
            var startDate = me.get('checkedStartDate');
            var endDate = me.get('checkedEndDate');

            if (!date.isCurrentMonth || !startDate || endDate) {
                return;
            }

            var rangDate = '';
            if (!startDate || me.get('checkedEndDate') || getOffsetTime(parseDate(date)) < getOffsetTime(parseDate(startDate))) {
                rangDate = '';
            } else {
                rangDate = date;
            }

            me.refresh(getOffsetTime(parseDate(startDate)), getOffsetTime(parseDate(rangDate)));
        },
        click: function click(date) {
            if (!date.isCurrentMonth) {
                return;
            }
            var me = this;
            var checkedStartDate = me.get('checkedStartDate');
            var checkedEndDate = me.get('checkedEndDate');

            if (!checkedStartDate || me.get('checkedEndDate') || getOffsetTime(parseDate(date)) < getOffsetTime(parseDate(checkedStartDate))) {
                checkedStartDate = date;
                checkedEndDate = '';
            } else {
                checkedEndDate = date;
            }
            me.set({
                checkedStartDate: checkedStartDate,
                checkedEndDate: checkedEndDate
            });
            me.refresh(getOffsetTime(parseDate(checkedStartDate)), getOffsetTime(parseDate(checkedEndDate)));

            me.fire('deteRangeChange', {
                start: checkedStartDate,
                end: checkedEndDate
            });
        },
        refresh: function refresh(start, end) {
            var me = this;

            var dateList = me.copy(me.get('dateList'));
            var nextDateList = me.copy(me.get('nextDateList'));

            if (end) {
                Yox.array.each(dateList, function (arr) {
                    Yox.array.each(arr, function (item) {
                        var itemTime = getOffsetTime(parseDate(item));
                        item.isRangeDate = itemTime < end && itemTime > start;
                        item.isCheckedDate = itemTime == end || itemTime == start;
                    });
                });
                Yox.array.each(nextDateList, function (arr) {
                    Yox.array.each(arr, function (item) {
                        var itemTime = getOffsetTime(parseDate(item));
                        item.isRangeDate = itemTime < end && itemTime > start;
                        item.isCheckedDate = itemTime == end || itemTime == start;
                    });
                });
            } else if (start) {
                Yox.array.each(dateList, function (arr) {
                    Yox.array.each(arr, function (item) {
                        item.isCheckedDate = getOffsetTime(parseDate(item)) == start;
                        item.isRangeDate = false;
                    });
                });
                Yox.array.each(nextDateList, function (arr) {
                    Yox.array.each(arr, function (item) {
                        item.isCheckedDate = getOffsetTime(parseDate(item)) == start;
                        item.isRangeDate = false;
                    });
                });
            }

            me.set({
                dateList: dateList,
                nextDateList: nextDateList
            });
        },
        // 获取渲染模板的数据
        getDatasource: function getDatasource(start, end, date, checkedStart, checkedEnd) {
            var data = [];
            date = simplifyDate(date);
            checkedStart = getOffsetTime(parseDate(checkedStart));
            checkedEnd = getOffsetTime(parseDate(checkedEnd));

            for (var time = start, item; time <= end; time += DAY$1) {
                item = simplifyDate(time);
                var itemTime = getOffsetTime(parseDate(item));
                item.isPrevMonth = item.month < date.month;
                item.isCurrentMonth = item.month == date.month;
                item.isLastMonth = item.month > date.month;
                item.isCheckedDate = itemTime === checkedStart || itemTime === checkedEnd;
                item.isRangeDate = itemTime > checkedStart && itemTime < checkedEnd;
                data.push(item);
            }
            return data;
        },
        createRenderData: function createRenderData(date, checkedStart, checkedEnd) {

            var me = this;
            var firstDay = me.get('firstDay') || 0;
            date = normalizeDate(date);

            var startDate;
            var endDate;

            startDate = firstDateInWeek(firstDateInMonth(date), firstDay);
            endDate = lastDateInWeek(lastDateInMonth(date), firstDay);

            startDate = normalizeDate(startDate);
            endDate = normalizeDate(endDate);

            var duration = endDate - startDate;
            var offset = stableDuration$1 - duration;

            if (offset > 0) {
                endDate += offset;
            }
            var list = me.getDatasource(startDate, endDate, date, checkedStart, checkedEnd);
            return me.format(list);
        },
        format: function format(list) {
            var result = [];
            var arr = [];
            for (var i = 0; i < list.length; i++) {
                arr.push(list[i]);
                if (i % 7 == 6) {
                    result.push(arr);
                    arr = [];
                }
            }
            return result;
        }
    },

    afterMount: function afterMount() {
        var me = this;

        var today = new Date();

        var date = me.get('start');
        date = date ? date : today;

        var dateList = me.createRenderData(date, me.get('checkedStartDate'), me.get('checkedEndDate'));
        var nextDateList = me.createRenderData(offsetMonth(date, 1), me.get('CheckedStartDate'), me.get('CheckedEndDate'));
        me.set({
            modeDate: date,
            dateList: dateList,
            nextDateList: nextDateList
        });
    },
    beforeDestroy: function beforeDestroy() {

    }
};

var WEEKS$2 = ['日', '一', '二', '三', '四', '五', '六'];

var DAY$2 = 24 * 60 * 60 * 1000;
var stableDuration$2 = 41 * DAY$2;

var DateWeek = {
    template: '\n        <div class="bell-datepicker-week">\n            <div class="bell-datepicker-header">\n                <span class="bell-datepicker-header-button" on-click="prevYear()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="prevMonth()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                </span>\n\n                <span class="bell-text-medium">\n                    {{currentYear}} \u5E74\n                </span>\n                <span class="bell-text-medium bell-datepicker-header-month">\n                    {{currentMonth}} \u6708\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="nextMonth()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="nextYear()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                </span>\n            </div>\n            <div class="bell-datepicker-table-week">\n                <div class="bell-datepicker-weeks">\n                    {{#each weeks}}\n                        <span class="bell-datepicker-col bell-text-sub">\n                            {{this}}\n                        </span>\n                    {{/each}}\n                </div>\n                <div class="bell-datepicker-body">\n                    {{#each dateList:index}}\n                        <div class="bell-datepicker-row\n                        {{#if checkedIndex == index}} bell-datepicker-row-checked{{/if}}\n                        " on-click="click(this)">\n                            {{#each this:key}}\n                                <span\n                                    class="bell-datepicker-col\n                                    {{#if isCurrentMonth}} bell-datepicker-col-current-month{{/if}}\n                                    {{#if isPrevMonth}} bell-datepicker-col-prev-month{{/if}}\n                                    {{#if isLastMonth}} bell-datepicker-col-last-month{{/if}}\n                                    {{#if isCurrentDate}} bell-datepicker-col-checked{{/if}}"\n                                >\n                                    {{date}}\n                                </span>\n                            {{/each}}\n                        </div>\n                    {{/each}}\n                </div>\n            </div>\n        </div>\n    ',

    propTypes: {
        // 表示第几周
        week: {
            type: ['string', 'number']
        },
        // date
        date: {
            type: ['string', 'number']
        },
        firstDay: {
            type: ['number', 'string']
        }
    },

    data: function data() {
        var me = this;
        return {
            weeks: WEEKS$2,
            dateList: [],
            // 默认是某周第一天
            modeDate: me.get('date') ? parseDate(me.get('date')) : '',
            checkedIndex: me.get('week'),
            checkedDateTime: -1
        };
    },

    computed: {
        currentYear: function currentYear() {
            var me = this;
            var date = me.get('modeDate');
            date = date ? simplifyDate(date) : simplifyDate(new Date());
            return date.year;
        },
        currentMonth: function currentMonth() {
            var me = this;
            var date = me.get('modeDate');
            date = date ? simplifyDate(date) : simplifyDate(new Date());
            return date.month;
        }
    },

    methods: {
        changeDate: function changeDate(offset) {
            var me = this;
            var date = me.get('modeDate');

            date = offsetMonth(date, offset);

            me.set({
                checkedIndex: -1,
                modeDate: date,
                dateList: me.createRenderData(date, me.get('checkedDateTime'))
            });
        },
        prevYear: function prevYear() {
            this.changeDate(-12);
        },
        prevMonth: function prevMonth() {
            this.changeDate(-1);
        },
        nextYear: function nextYear() {
            this.changeDate(12);
        },
        nextMonth: function nextMonth() {
            this.changeDate(1);
        },
        click: function click(date) {
            var me = this;
            me.fire('weekRangeChange', {
                start: date[0],
                end: date[date.length - 1]
            });
            me.refresh(getOffsetTime(parseDate(date[0])), getOffsetTime(parseDate(date[date.length - 1])));
        },
        refresh: function refresh(start, end) {
            var me = this;
            var dateList = me.get('dateList');
            var checkedIndex = '';
            var checkedDateTime = '';
            for (var i = 0; i < dateList.length; i++) {
                var item = dateList[i][0];
                var itemTime = getOffsetTime(parseDate(item));
                if (itemTime == start) {
                    checkedDateTime = itemTime;
                    checkedIndex = i;
                }
            }
            me.set({
                checkedDateTime: checkedDateTime,
                checkedIndex: checkedIndex
            });
        },
        // 获取渲染模板的数据
        getDatasource: function getDatasource(start, end, date, checkedDateTime) {
            var data = [];
            date = simplifyDate(date);
            for (var time = start, item; time <= end; time += DAY$2) {
                item = simplifyDate(time);
                item.isCurrentDate = checkedDateTime && checkedDateTime === getOffsetTime(parseDate(item));
                item.isPrevMonth = item.month < date.month;
                item.isCurrentMonth = item.month == date.month;
                item.isLastMonth = item.month > date.month;
                data.push(item);
            }
            return data;
        },
        createRenderData: function createRenderData(modeDate, checkedDateTime) {

            var me = this;
            var firstDay = me.get('firstDay') || 0;
            modeDate = normalizeDate(modeDate);

            var startDate;
            var endDate;

            startDate = firstDateInWeek(firstDateInMonth(modeDate), firstDay);
            endDate = lastDateInWeek(lastDateInMonth(modeDate), firstDay);

            startDate = normalizeDate(startDate);
            endDate = normalizeDate(endDate);

            var duration = endDate - startDate;
            var offset = stableDuration$2 - duration;

            if (offset > 0) {
                endDate += offset;
            }

            var list = me.getDatasource(startDate, endDate, modeDate, checkedDateTime);
            return me.format(list);
        },
        format: function format(list) {
            var me = this;
            var result = [];
            var arr = [];
            var checkedIndex = -1;
            for (var i = 0; i < list.length; i++) {
                arr.push(list[i]);
                if (i % 7 == 6) {
                    if (getOffsetTime(parseDate(arr[0])) === me.get('checkedDateTime')) {
                        checkedIndex = result.length;
                    }
                    result.push(arr);
                    arr = [];
                }
            }
            me.set({
                checkedIndex: checkedIndex
            });
            return result;
        }
    },

    afterMount: function afterMount() {
        var me = this;

        var today = new Date();

        var date = me.get('modeDate');
        date = date ? date : today;

        me.set({
            modeDate: date,
            dateList: me.createRenderData(date, me.get('checkedDateTime'))
        });
    },
    beforeDestroy: function beforeDestroy() {

    }
};

var MONTHS = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

var DateMonth = {
    template: '\n        <div class="bell-datepicker-month">\n            <div class="bell-datepicker-header">\n                <span class="bell-datepicker-header-button" on-click="prevMore()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="prev()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                </span>\n\n                <span class="bell-text-medium">\n                    {{modeYear}} \u5E74\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="next()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="nextMore()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                </span>\n            </div>\n\n            <div class="bell-datepicker-body">\n                {{#each months:index}}\n                    <span\n                        class="bell-datepicker-col\n                        {{#if checkedMonth == index && checkedYear == modeYear}} bell-datepicker-col-checked{{/if}}"\n                        on-click="click(index)"\n                    >\n                        {{this}}\n                    </span>\n                {{/each}}\n            </div>\n        </div>\n    ',

    propTypes: {
        year: {
            type: ['string', 'number']
        }
    },

    data: function data() {
        var me = this;
        return {
            checkedMonth: '',
            checkedYear: '',
            modeYear: me.get('year') ? me.get('year') : new Date().getFullYear(),
            months: MONTHS
        };
    },

    methods: {
        prevMore: function prevMore() {
            this.decrease('modeYear', 10);
        },
        prev: function prev() {
            this.decrease('modeYear', 1);
        },
        nextMore: function nextMore() {
            this.increase('modeYear', 10);
        },
        next: function next() {
            this.increase('modeYear', 1);
        },
        click: function click(month) {

            var me = this;
            var year = me.get('modeYear');

            me.set({
                checkedYear: year,
                checkedMonth: month
            });

            me.fire('monthChange', {
                year: year,
                month: month + 1
            });
        }
    }
};

var DateYear = {
    template: '\n        <div class="bell-datepicker-month">\n            <div class="bell-datepicker-header">\n                <span class="bell-datepicker-header-button" on-click="prev()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                </span>\n\n                <span class="bell-text-medium">\n                    {{modeYear}} \u5E74 ~ {{modeYear + 12}} \u5E74\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="next()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                </span>\n            </div>\n            <div class="bell-datepicker-body">\n                {{#each years:index}}\n                    <span\n                        class="bell-datepicker-col\n                        {{#if checkedYear == this}} bell-datepicker-col-checked{{/if}}"\n                        on-click="click(this)"\n                    >\n                        {{this}}\n                    </span>\n                {{/each}}\n            </div>\n        </div>\n    ',

    propTypes: {
        startYear: {
            type: ['string', 'number']
        }
    },

    data: function data() {
        var me = this;
        return {
            modeYear: me.get('startYear'),
            checkedYear: '',
            years: []
        };
    },

    methods: {
        prev: function prev() {
            var me = this;
            me.decrease('modeYear', 12);
            me.getYearList(me.get('modeYear'));
        },
        next: function next() {
            var me = this;
            me.increase('modeYear', 12);
            me.getYearList(me.get('modeYear'));
        },
        click: function click(year) {
            var me = this;
            me.set({
                checkedYear: year
            });

            me.fire('yearChange', {
                year: year
            });
        },
        getYearList: function getYearList(startYear) {
            var me = this;
            var years = [];
            for (var item = startYear; item < startYear + 12; item++) {
                years.push(item);
            }
            me.set({
                modeYear: startYear,
                years: years
            });
        }
    },

    afterMount: function afterMount() {
        var me = this;
        var today = new Date();
        var start = me.get('startYear');
        start = start ? start : today.getFullYear();
        me.getYearList(start);
    }
};

var timer = void 0;
var Tooltip = {
    template: '\n        <div class="bell-tooltip\n        {{#if isShow}} bell-show{{/if}}\n        {{#if isHover}} bell-hover{{/if}}\n        ">\n            <div class="bell-tooltip-el"\n            on-mouseover="hover()"\n            on-mouseleave="leave()"\n            on-click="click()">\n                <slot name="children" />\n            </div>\n\n            <div class="bell-tooltip-popper\n            {{#if disabled}} bell-tooltip-disabled{{/if}}"\n            data-placement="{{placement ? placement : \'bottom\'}}">\n                <div class="bell-tooltip-arrow"></div>\n                <div class="bell-tooltip-inner"\n                style="{{#if maxWidth}} max-width: {{maxWidth}}px{{/if}};\n                {{#if maxHeight}} max-height: {{maxHeight}}px{{/if}};\n                ">\n                    {{content}}\n                </div>\n            </div>\n        </div>\n    ',
    propTypes: {
        content: {
            type: 'string'
        },
        placement: {
            type: 'string'
        },
        disabled: {
            type: ['string', 'boolean']
        },
        delay: {
            type: ['number', 'string']
        },
        mode: {
            type: 'string'
        },
        maxWidth: {
            type: 'numeric'
        },
        maxHeight: {
            type: 'numeric'
        },
        offsetX: {
            type: 'numeric'
        },
        offsetY: {
            type: 'numeric'
        }
    },

    events: {
        hasTooltipItem: function hasTooltipItem(event, data) {
            var me = this;
            var element = me.$el.getElementsByClassName('bell-tooltip-el')[0];
            var content = element.getElementsByClassName('bell-tooltip-inner-content');
            var inner = me.$el.getElementsByClassName('bell-tooltip-inner')[0];
            if (content.length) {
                for (var i = 0; i < content.length; i++) {
                    inner.appendChild(content[i]);
                }
            }
        }
    },

    data: function data() {
        return {
            isShow: false,
            isHover: false
        };
    },

    watchers: {
        disabled: function disabled(_disabled) {
            this.setPos();
        }
    },

    methods: {
        setPos: function setPos() {
            var me = this;
            var offsetX = me.get('offsetX') ? +me.get('offsetX') : 0;
            var offsetY = me.get('offsetY') ? +me.get('offsetY') : 0;

            var poperElement = me.$el.getElementsByClassName('bell-tooltip-popper')[0];
            var placement = me.get('placement') || 'bottom';
            var poperElementWidth = poperElement.clientWidth;
            var poperElementHeight = poperElement.clientHeight;

            var marginLeft = 0;
            var marginTop = 0;

            if (placement == 'bottom') {
                marginLeft = -(poperElementWidth / 2);
            } else if (placement == 'bottom-start') {
                marginLeft = 0;
            } else if (placement == 'bottom-end') {
                marginLeft = 0;
            } else if (placement == 'top') {
                marginLeft = -(poperElementWidth / 2);
                marginTop = -poperElementHeight;
            } else if (placement == 'top-start') {
                marginTop = -poperElementHeight;
            } else if (placement == 'top-end') {
                marginTop = -poperElementHeight;
            } else if (placement == 'left') {
                marginLeft = -poperElementWidth;
                marginTop = -(poperElementHeight / 2);
            } else if (placement == 'left-start') {
                marginLeft = -poperElementWidth;
            } else if (placement == 'left-end') {
                marginLeft = -poperElementWidth;
            } else if (placement == 'right') {
                marginTop = -(poperElementHeight / 2);
            }

            if (Yox.is.number(offsetX)) {
                marginLeft += offsetX;
            }
            if (Yox.is.number(offsetY)) {
                marginTop += offsetY;
            }

            poperElement.style.marginLeft = marginLeft + 'px';
            poperElement.style.marginTop = marginTop + 'px';
        },
        leave: function leave() {
            var me = this;
            if (me.get('mode') && me.get('mode') == 'click') {
                return;
            }
            me.set({
                isShow: false,
                isHover: false
            });
        },
        hover: function hover() {
            var me = this;
            if (me.get('mode') && me.get('mode') == 'click') {
                return;
            }
            var delay = me.get('delay') ? +me.get('delay') : 0;
            me.set({
                isHover: true
            });
            Yox.nextTick(function () {
                me.setPos();
                timer = setTimeout(function () {
                    if (me.get('isHover')) {
                        me.set({
                            isShow: true
                        });
                    }
                }, delay);
            });
        },
        click: function click() {
            var me = this;
            if (!me.get('mode') || me.get('mode') == 'hover') {
                return;
            }

            me.set({
                isShow: !me.get('isShow')
            });
            Yox.nextTick(function () {
                me.setPos();
            });
        }
    },

    beforeDestroy: function beforeDestroy() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }
};

var TooltipItem = {
    template: '\n        <div class="bell-tooltip-inner-content">\n            <slot name="children" />\n        </div>\n    ',
    afterMount: function afterMount() {
        var me = this;
        me.fire('hasTooltipItem');
    }
};

var Collapse = {
    template: '\n        <div class="bell-collapse\n        {{#if className}} {{className}}{{/if}}\n        ">\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </div>\n    ',
    propTypes: {
        className: {
            type: 'string'
        },
        activeName: {
            type: ['string', 'number']
        },
        accordion: {
            type: ['string', 'number', 'boolean']
        }
    },

    events: {
        panelOpen: function panelOpen(event, data) {
            var me = this;
            if (data.name) {
                me.fire('panelActiveName', {
                    name: name
                }, true);
            }
        }
    },
    afterMount: function afterMount(argument) {
        var me = this;
        var name = me.get('activeName');
        var accordion = me.get('accordion');
        if (name) {
            me.fire('panelActiveName', {
                name: name
            }, true);
        }
        if (accordion) {
            me.fire('panelAccordion', {
                accordion: true
            }, true);
        }
    }

};

var closeTimer = void 0;
var initTimer = void 0;
var openTimer = void 0;
var Panel = {
    template: '\n        <div class="bell-panel\n        {{#if className}} {{className}}{{/if}}\n        {{#if isOpen}} bell-panel-open{{/if}}\n        ">\n            <div class="bell-panel-el\n            {{#if arrowOpen}} bell-panel-el-open{{/if}}" on-click="click()">\n                <Icon type="arrow-down-b" className="bell-panel-el-icon"></Icon>\n                {{title}}\n            </div>\n\n            <div ref="panelInner" class="bell-panel-inner">\n                {{#if hasSlot(\'children\')}}\n                    <slot name="children" />\n                {{/if}}\n            </div>\n        </div>\n    ',
    propTypes: {
        className: {
            type: 'string'
        },
        title: {
            type: 'string'
        },
        name: {
            type: ['string', 'number']
        }
    },
    data: function data() {
        return {
            isOpen: false,
            arrowOpen: false,
            accordion: false
        };
    },
    events: {
        panelAccordion: function panelAccordion(event, data) {
            this.set({
                accordion: data.accordion
            });
        },
        panelActiveName: function panelActiveName(event, data) {
            var me = this;
            if (data.name === me.get('name')) {
                me.toggleStatus(true);
            } else if (me.get('accordion')) {
                me.toggleStatus(false);
            }
        }
    },
    methods: {
        toggleStatus: function toggleStatus(isOpen) {
            var me = this;
            var arrowOpen = me.get('arrowOpen');
            if (isOpen == arrowOpen) {
                return;
            }
            if (isOpen) {
                me.open();
                if (me.get('accordion')) {
                    me.fire('panelOpen', {
                        name: me.get('name')
                    });
                }
            } else {
                me.close();
            }
            me.set({
                arrowOpen: isOpen
            });
        },
        click: function click() {
            var me = this;
            var isOpen = !me.get('isOpen');
            me.toggleStatus(isOpen);
        },
        close: function close() {
            var me = this;
            var innerElement = me.$refs.panelInner;
            innerElement.style.height = innerElement.clientHeight + 'px';

            closeTimer = setTimeout(function () {
                innerElement.style.height = 0;
                initTimer = setTimeout(function () {
                    me.set({
                        isOpen: false
                    });
                    innerElement.style.height = '';
                }, 100);
            });
        },
        open: function open() {
            var me = this;
            var innerElement = me.$refs.panelInner;
            me.set({
                isOpen: true
            });

            Yox.nextTick(function () {
                var height = innerElement.clientHeight;
                innerElement.style.height = 0;

                openTimer = setTimeout(function () {
                    innerElement.style.height = height + 'px';
                    initTimer = setTimeout(function () {
                        innerElement.style.height = '';
                    }, 100);
                });
            });
        }
    },
    beforeDestroy: function beforeDestroy() {
        closeTimer = null;
        initTimer = null;
        openTimer = null;
        clearTimeout(closeTimer);
        clearTimeout(initTimer);
        clearTimeout(openTimer);
    }
};

var Card = {
    template: "\n        <div class=\"bell-card\">\n            <slot name=\"children\" />\n        </div>\n    "
};

var CardHeader = {
    template: '\n<div class="bell-card-header">\n\n    <slot name="children" />\n\n    <div class="bell-card-header-detail">\n        {{#if title}}\n        <div class="bell-card-header-title\n        {{#if titleClass}} {{titleClass}}{{/if}}\n        ">\n            {{title}}\n        </div>\n        {{/if}}\n\n        {{#if subTitle}}\n        <div class="bell-card-header-sub-title\n        {{#if subTitleClass}} {{subTitleClass}}{{/if}}\n        ">\n            {{subTitle}}\n        </div>\n        {{/if}}\n    </div>\n</div>\n    ',

    propTypes: {
        title: {
            type: 'string'
        },
        titleClass: {
            type: 'string'
        },
        subTitle: {
            type: 'string'
        },
        subTitleClass: {
            type: 'string'
        }
    }
};

var CardMedia = {
    template: '\n<div class="bell-card-media">\n\n    <slot name="children" />\n\n    <div class="bell-card-media-detail">\n        {{#if title}}\n        <div class="bell-card-media-title\n        {{#if titleClass}} {{titleClass}}{{/if}}\n        ">\n            {{title}}\n        </div>\n        {{/if}}\n        {{#if subTitle}}\n        <div class="bell-card-media-sub-title\n        {{#if subTitleClass}} {{subTitleClass}}{{/if}}\n        ">\n            {{subTitle}}\n        </div>\n        {{/if}}\n    </div>\n</div>\n    ',

    propTypes: {
        title: {
            type: 'string'
        },
        titleClass: {
            type: 'string'
        },
        subTitle: {
            type: 'string'
        },
        subTitleClass: {
            type: 'string'
        }
    }
};

var CardTitle = {
    template: '\n<div class="bell-card-title">\n\n    <slot name="children" />\n\n    {{#if title}}\n    <div class="bell-card-title-text\n    {{#if titleClass}} {{titleClass}}{{/if}}\n    ">\n        {{title}}\n    </div>\n    {{/if}}\n\n    {{#if subTitle}}\n    <div class="bell-card-sub-title\n    {{#if subTitleClass}} {{subTitleClass}}{{/if}}\n    ">\n        {{subTitle}}\n    </div>\n    {{/if}}\n</div>\n    ',

    propTypes: {
        title: {
            type: 'string'
        },
        titleClass: {
            type: 'string'
        },
        subTitle: {
            type: 'string'
        },
        subTitleClass: {
            type: 'string'
        }
    }
};

var CardText = {
    template: "\n        <div class=\"bell-card-text\">\n            <slot name=\"children\" />\n        </div>\n    "
};

var CardActions = {
    template: "\n        <div class=\"bell-card-actions\">\n            <slot name=\"children\" />\n        </div>\n    "
};

var List = {
    template: '\n        <ul class="bell-list\n        {{#if border}} bell-border{{/if}}\n        ">\n            <slot name="children" />\n        </ul>\n    ',
    propTypes: {
        border: {
            type: 'boolean'
        }
    }
};

var Item = {
    template: '\n        <li class="bell-item\n        {{#if !disableHover}} bell-item-hover{{/if}}\n        {{#if active}} bell-active{{/if}}"\n        on-click="click">\n            {{#if hasSlot(\'itemHeader\')}}\n                <div class="bell-item-header">\n                    <slot name="itemHeader" />\n                </div>\n            {{/if}}\n\n            {{#if hasSlot(\'itemFooter\')}}\n                <div class="bell-item-footer">\n                    <slot name="itemFooter" />\n                </div>\n            {{/if}}\n\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </li>\n    ',
    propTypes: {
        disableHover: {
            type: 'boolean'
        },
        active: {
            type: 'boolean'
        }
    }
};

var Circle = {
    template: '\n        <div class="bell-circle"\n            style="width: {{size}}px;\n                height: {{size}}px;\n            "\n        >\n            <svg viewBox="0 0 100 100">\n                <path d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94"\n                    stroke="{{trailColor}}"\n                    stroke-width="{{trailWidth}}"\n                    fill-opacity="0"\n                />\n                <path d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94"\n                    stroke-linecap="{{strokeLinecap}}"\n                    stroke="{{strokeColor}}"\n                    stroke-width="{{strokeWidth}}"\n                    fill-opacity="0"\n                    style="\n                        stroke-dasharray: {{strokeDasharray}};\n                        stroke-dashoffset: {{strokeDashoffset}};\n                        transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease\n                    "\n                />\n            </svg>\n            <div class="bell-circle-inner">\n                {{#if hasSlot(\'children\')}}\n                    <slot name="children" />\n                {{/if}}\n            </div>\n        </div>\n    ',
    propTypes: {
        percent: {
            type: 'number',
            value: 0
        },
        size: {
            type: 'number',
            value: 120
        },
        strokeWidth: {
            type: 'number',
            value: 6
        },
        strokeColor: {
            type: 'string',
            value: '#2db7f5'
        },
        strokeLinecap: {
            type: ['square', 'round'],
            value: 'round'
        },
        trailWidth: {
            type: 'number',
            value: 5
        },
        trailColor: {
            type: 'string',
            value: '#eaeef2'
        }
    },
    computed: {
        strokeDasharray: function strokeDasharray() {
            var me = this;
            var len = Math.PI * 2 * (50 - me.get('strokeWidth') / 2);
            return len + 'px ' + len + 'px';
        },
        strokeDashoffset: function strokeDashoffset() {
            var me = this;
            var len = Math.PI * 2 * (50 - me.get('strokeWidth') / 2);
            var percent = me.get('percent');
            return (100 - percent) / 100 * len + 'px';
        }
    }
};

var Progress = {
    template: '\n        <div class="bell-progress\n            {{#if type}} {{type}}{{/if}}\n            {{#if active}} active{{/if}}\n            {{#if vertical}} bell-progress-vertical{{/if}}\n        ">\n            <div class="bell-progress-outer">\n                <div class="bell-progress-inner"\n                    style="{{#if vertical}} width: {{strokeWidth}}px;{{/if}}\n                ">\n                    <div class="bell-progress-bg"\n                        style="\n                        {{#if !vertical}}\n                            width: {{percent}}%;\n                            height: {{strokeWidth}}px;\n                        {{else}}\n                            height: {{percent}}%;\n                            width: {{strokeWidth}}px;\n                        {{/if}}\n                        "\n                    >\n                    </div>\n                </div>\n            </div>\n            {{#if !hideInfo}}\n            <span class="bell-progress-inner-text">\n                {{#if hasSlot(\'children\')}}\n                    <slot name="children" />\n                {{else}}\n                    {{percent}}%\n                {{/if}}\n            </span>\n            {{/if}}\n        </div>\n    ',
    propTypes: {
        percent: {
            type: 'number',
            value: 0
        },
        type: {
            type: 'string'
        },
        strokeWidth: {
            type: 'string',
            value: 10
        },
        hideInfo: {
            type: 'boolean',
            value: false
        },
        vertical: {
            type: 'boolean',
            value: false
        },
        active: {
            type: 'boolean',
            value: false
        }
    }
};

var SLIDER_TOOLTIP_MARGIN_TOP = 56;
var SLIDER_TOOLTIP_MARGIN_LEFT = 30;
var SLIDER_TOOLTIP_THUMB_WIDTH = 10;

var Slider = {
    template: '\n        <div class="bell-slider\n            {{#if disabled}} disabled{{/if}}\n            {{#if type}} {{type}}{{/if}}\n            {{#if dragging}} dragging{{/if}}\n            "\n            on-blur="handleBlur($event)"\n            on-focus="handleFocus($event)"\n            on-touchstart="handleTouchStart($event)"\n            on-touchend="handleTouchEnd($event)"\n            on-touchcancel="handleTouchEnd($event)"\n            on-mousedown="handleMouseDown($event)"\n            on-mouseup="handleMouseUp($event)"\n            on-mouseenter="handleMouseEnter($event)"\n            on-mouseleave="handleMouseLeave($event)"\n        >\n\n            <input type="hidden" disabled="{{disabled ? \' disabled\' : \'\'}}" model="value">\n\n            <div class="bell-slider-bg"></div>\n\n            <div class="bell-slider-fill"\n                style="{{fillStyle}}"\n            ></div>\n\n            <div class="bell-slider-thumb"\n                style="{{thumbStyle}}"\n                title="\u503C\uFF1A{{value}}\uFF1B\u5360\u6BD4\uFF1A{{percent + \'%\'}}"\n            >\n            </div>\n\n            <div class="bell-tooltip{{#if dragging}} bell-show{{/if}}"\n                style="{{tooltipStyle}}"\n            >\n                <div ref="tooltip" class="bell-tooltip-popper" data-placement="top">\n                    <div class="bell-tooltip-arrow"></div>\n                    <div class="bell-tooltip-inner">\n                        {{percent}}%\n                    </div>\n                </div>\n            </div>\n        </div>\n    ',
    propTypes: {
        value: {
            type: ['number', 'array'],
            value: 40
        },
        // 最大值
        max: {
            type: 'number',
            value: 100
        },
        // 最小值
        min: {
            type: 'number',
            value: 0
        },
        // 最小步数
        step: {
            type: 'number',
            value: 1
        },
        disabled: {
            type: 'boolean',
            value: false
        },
        range: {
            type: 'boolean',
            value: false
        },

        type: {
            type: 'string'
        },
        onDragStart: {
            type: 'function'
        },
        onDragStop: {
            type: 'function'
        },
        onChange: {
            type: 'function'
        }
    },
    data: function data() {
        return {
            dragging: false
        };
    },

    computed: {
        percent: function percent() {
            var me = this;
            var min = me.get('min');
            var max = me.get('max');
            var value = me.get('value');

            var range = max - min;
            var percentNum = range > 0 ? (value - min) / range * 100 : 0;

            return percentNum > 100 ? 100 : percentNum < 0 ? 0 : percentNum.toFixed(2);
        },
        fillStyle: function fillStyle() {
            var me = this;
            return 'width: ' + me.get('percent') + '%';
        },

        tooltipStyle: function tooltipStyle() {
            var me = this;
            if (!me.$refs) {
                if (me.get('percent')) {
                    return '';
                }
                return '';
            }

            var boundingRect = me.$refs.tooltip.getBoundingClientRect();
            var marginLeft = boundingRect.width / 2;
            marginLeft = !marginLeft ? SLIDER_TOOLTIP_MARGIN_LEFT : marginLeft - SLIDER_TOOLTIP_THUMB_WIDTH / 2;

            var marginTop = +boundingRect.height;
            marginTop = !marginTop ? SLIDER_TOOLTIP_MARGIN_TOP : marginTop + SLIDER_TOOLTIP_THUMB_WIDTH;

            return 'left: ' + me.get('percent') + '%;' + 'margin-left: -' + marginLeft + 'px;' + 'top: -' + marginTop + 'px;';
        },

        thumbStyle: function thumbStyle() {
            var me = this;
            return 'left: ' + me.get('percent') + '%';
        },

        range: function range() {
            var me = this;
            return me.get('max') - me.get('min');
        }
    },

    methods: {

        handleTouchStart: function handleTouchStart(e) {
            var me = this;
            if (me.get('disabled')) {
                return;
            }

            me.setValue(e.touches[0]);

            document.addEventListener('touchmove', me.handleTouchMove);
            document.addEventListener('touchup', me.handleTouchEnd);
            document.addEventListener('touchend', me.handleTouchEnd);
            document.addEventListener('touchcancel', me.handleTouchEnd);

            e.preventDefault();
            me.onDragStart(e);
        },

        handleTouchEnd: function handleTouchEnd() {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            document.removeEventListener('touchmove', me.handleTouchMove);
            document.removeEventListener('touchup', me.handleTouchEnd);
            document.removeEventListener('touchend', me.handleTouchEnd);
            document.removeEventListener('touchcancel', me.handleTouchEnd);
            me.onDragStop(e);
        },

        handleTouchMove: function handleTouchMove(e) {
            var me = this;
            me.onDragUpdate(e.touches[0]);
        },

        handleDragMouseMove: function handleDragMouseMove(e) {
            var me = this;
            me.onDragUpdate(e);
        },

        handleMouseDown: function handleMouseDown(e) {
            var me = this;
            if (me.get('disabled')) {
                return;
            }

            me.setValue(e.originalEvent);

            document.addEventListener('mousemove', me.handleDragMouseMove);
            document.addEventListener('mouseup', me.handleDragMouseEnd);

            e.prevent();
            me.onDragStart(e.originalEvent);
        },

        handleDragMouseEnd: function handleDragMouseEnd(e) {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            document.removeEventListener('mousemove', me.handleDragMouseMove);
            document.removeEventListener('mouseup', me.handleDragMouseEnd);
            me.onDragStop(e);
        },

        onDragStart: function onDragStart(e) {
            var me = this;
            me.set({
                dragging: 1,
                active: 1
            });

            me.get('onDragStart') && me.get('onDragStart')(e);
        },

        onDragStop: function onDragStop(e) {
            var me = this;
            me.set({
                dragging: 0,
                active: 0
            });

            me.get('onDragStop') && me.get('onDragStop')(e);
        },

        onDragUpdate: function onDragUpdate(e) {
            var me = this;
            if (me.get('dragRunning')) {
                return;
            }
            me.set('dragRunning', 1);

            window.requestAnimationFrame(function () {
                me.set('dragRunning', 0);
                if (!me.get('disabled')) {
                    me.setValue(e);
                }
            });
        },

        handleMouseUp: function handleMouseUp() {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            me.set('active', 0);
        },

        handleMouseEnter: function handleMouseEnter() {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            me.set('hover', 1);
        },

        handleMouseLeave: function handleMouseLeave() {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            me.set('hover', 0);
        },
        setValue: function setValue(e) {
            var me = this;
            var element = me.$el;
            var oldValue = me.get('value');
            var elementLeft = element.getBoundingClientRect().left;
            var elementWidth = element.offsetWidth;
            var step = me.get('step');
            var range = me.get('range');
            var max = me.get('max');
            var min = me.get('min');

            var value = 0;
            value = elementWidth && (e.clientX - elementLeft) / elementWidth * range;
            value = Math.round(value / step) * step + min;
            value = parseFloat(value.toFixed(5));

            value = value > max ? max : value < min ? min : value;

            if (value !== oldValue) {
                me.set({
                    value: value
                });
                me.get('onChange') && me.get('onChange')(value, oldValue);
            }
        }

    },

    afterMount: function afterMount() {
        var me = this;

        me.handleDragMouseMove = me.handleDragMouseMove.bind(me);
        me.handleDragMouseEnd = me.handleDragMouseEnd.bind(me);
        me.handleTouchMove = me.handleTouchMove.bind(me);
        me.handleTouchEnd = me.handleTouchEnd.bind(me);
    }
};

var Tag = {
    template: '\n        <div class="bell-tag\n        {{#if border}} bell-tag-border{{/if}}\n        {{#if size}} {{size}}{{/if}}\n        {{#if type}} {{type}}{{/if}}\n        {{#if checked}} bell-tag-checked{{/if}}\n        " on-click="click()">\n            <div class="bell-tag-text">\n                {{#if hasSlot(\'children\')}}\n                    <slot name="children" />\n                {{/if}}\n\n                {{#if closable}}\n                    <i class="bell-tag-close-icon bell-icon bell-icon-ios-close-empty" on-click="close()"></i>\n                {{/if}}\n            </div>\n        </div>\n    ',
    propTypes: {
        size: {
            type: 'string'
        },
        closable: {
            type: 'boolean',
            value: false
        },
        border: {
            type: 'boolean',
            value: false
        },
        type: {
            type: 'string'
        },
        checkable: {
            type: 'boolean',
            value: false
        },
        checked: {
            type: 'boolean',
            value: true
        },
        onClose: {
            type: 'function'
        },
        onChecked: {
            type: 'function'
        }
    },

    watchers: {
        checked: function checked(value) {
            me.get('onChecked') && me.get('onChecked')(value);
        }
    },

    methods: {
        click: function click() {
            var me = this;
            if (!me.get('checkable')) {
                return;
            }
            me.toggle('checked');
        },
        close: function close() {
            var me = this;
            me.get('onClose') && me.get('onClose')();
        }
    }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Rate = {
    template: '\n        <div class="bell-rate\n        {{#if readOnly}} bell-rate-read-only{{/if}}\n        " on-mouseleave="handleLeave()">\n            <input type="hidden" model="value">\n            {{#each createRateList():index}}\n                <span class="bell-icon bell-rate-star-full\n                    {{#if hoverValue >= index}} active{{/if}}\n                " on-mousemove="handleMove($event, index)"\n                on-click="handleClick($event, index)"\n                >\n                    {{#if half}}\n                        <span type="half"\n                        class="bell-icon bell-rate-star-content\n                        {{#if index - hoverValue == 0.5}} active{{/if}}">\n                        </span>\n                    {{/if}}\n                </span>\n            {{/each}}\n\n            {{#if showTexts}}\n                <span class="bell-rate-text">\n                    {{#if hasSlot(\'children\')}}\n                        <slot name="children" />\n                    {{else}}\n                        {{value + 1}} \u661F\n                    {{/if}}\n                </span>\n            {{/if}}\n        </div>\n    ',
    propTypes: {
        count: {
            type: 'number',
            value: 5
        },
        value: function value(_value) {
            console.log(typeof _value === 'undefined' ? 'undefined' : _typeof(_value), _value);
            return _value;
        },
        half: {
            type: 'boolean',
            value: false
        },
        readOnly: {
            type: 'boolean',
            value: false
        },
        showTexts: {
            type: 'boolean',
            value: false
        },
        texts: {
            type: 'array'
        },
        textColor: {
            type: 'string',
            value: '#1F2D3D'
        },
        onChange: {
            type: 'function'
        }
    },

    data: function data() {
        return {
            hoverValue: -1
        };
    },

    filters: {
        createRateList: function createRateList() {
            var me = this;
            var list = new Array(me.get('count'));
            var texts = me.get('texts');
            if (texts && texts.length) {
                Yox.array.each(list, function (item, index) {
                    item.push({
                        text: texts[index] ? texts[index] : texts[texts.length]
                    });
                });
            }
            return list;
        }
    },

    methods: {
        handleMove: function handleMove(event, index) {
            var me = this;

            if (me.get('readOnly')) {
                return;
            }

            var isHalf = event.originalEvent && event.originalEvent.target.getAttribute('type') == 'half';
            var currentValue = index;
            if (isHalf) {
                currentValue -= 0.5;
            }

            me.set({
                hoverValue: currentValue
            });
        },

        handleLeave: function handleLeave() {
            var me = this;
            if (me.get('readOnly')) {
                return;
            }

            var value = me.get('value');
            me.set({
                hoverValue: value >= 0 ? value : -1
            });
        },

        handleClick: function handleClick(event, index) {
            var me = this;
            if (me.get('readOnly')) {
                return;
            }
            var isHalf = event.originalEvent && event.originalEvent.target.getAttribute('type') == 'half';
            var currentValue = index;
            if (isHalf) {
                currentValue -= 0.5;
            }

            me.set({
                value: currentValue
            });
        }
    }
};

var Tabs = {
    template: '\n        <div class="bell-tabs">\n            <div class="bell-tabs-labels">\n                {{#each tabLabels}}\n                    {{#if label}}\n                        <span class="bell-tabs-label\n                            {{#if value == name}} bell-active{{/if}}\n                        " on-click="clickTabLabel(this)">\n                            {{label}}\n                        </span>\n                    {{/if}}\n                {{/each}}\n            </div>\n\n            <div class="bell-tabs-contents" style="transform: translateX({{translateStyle}});">\n                {{#if hasSlot(\'children\')}}\n                    <slot name="children" />\n                {{/if}}\n            </div>\n        </div>\n    ',
    propTypes: {
        value: {
            type: 'string'
        }
    },

    data: function data() {
        return {
            tabLabels: []
        };
    },

    computed: {
        translateStyle: function translateStyle() {
            var me = this;
            var index = 0;
            Yox.array.each(me.get('tabLabels'), function (item, key) {
                if (item.name == me.get('value')) {
                    index = key;
                    return false;
                }
            });
            return index * -100 + '%';
            console.log(index * -100 + '%');
        }
    },

    events: {
        addTabLabel: function addTabLabel(event, data) {
            var me = this;
            var tabLabels = me.copy(me.get('tabLabels'));
            tabLabels.push(data);
            me.set({
                tabLabels: tabLabels
            });
        }
    },

    watchers: {
        value: function value(_value) {
            this.fire('tabsValueUpdate', {
                value: _value
            }, true);
        }
    },

    methods: {
        clickTabLabel: function clickTabLabel(data) {
            var me = this;
            me.set({
                value: data.name
            });
        }
    },

    afterMount: function afterMount() {

    }
};

var TabPanel = {
    template: '\n        <div class="bell-tabs-panel\n        {{#if isActive}} active{{/if}}">\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </div>\n    ',
    propTypes: {
        name: {
            type: 'string'
        },
        label: {
            type: 'string'
        }
    },

    data: function data() {
        return {
            isActive: false
        };
    },

    events: {
        tabsValueUpdate: function tabsValueUpdate(event, data) {
            var me = this;
            if (!data.value) {
                return;
            }
            me.set({
                isActive: me.get('name') == data.value
            });
        }
    },

    afterMount: function afterMount() {
        var me = this;
        me.fire('addTabLabel', {
            label: me.get('label'),
            name: me.get('name')
        });
    }
};

var Transfer = {
    template: '\n        <div class="bell-transfer">\n            <div class="bell-transfer-list">\n                <div class="bell-transfer-list-header">\n                    <span class="bell-transfer-list-header-checkbox">\n                        <Checkbox model="checkLeftAll" onChange="{{onCheckLeftAllChange}}">\n                        </Checkbox>\n                    </span>\n                    <span class="bell-transfer-list-header-title">\n                        {{leftLabel}}\n                    </span>\n                    <span class="bell-transfer-list-header-count">\n                        {{left.length}} / {{leftList.length}}\n                    </span>\n                </div>\n\n                <div class="bell-transfer-list-body">\n                    <CheckboxGroup vertical model="left" onChange="{{onLeftChange}}">\n                        {{#each leftList}}\n                            <Checkbox value="{{this.key}}">\n                                <span>\n                                    {{text}}\n                                </span>\n                            </Checkbox>\n                        {{/each}}\n                    </CheckboxGroup>\n                </div>\n            </div>\n\n            <div class="bell-transfer-actions">\n                <Button shape="circle" on-click="addToLeft()">\n                    <i class="bell-icon bell-icon-ios-arrow-left"></i>\n                </Button>\n                <Button shape="circle" on-click="addToRight()">\n                    <i class="bell-icon bell-icon-ios-arrow-right"></i>\n                </Button>\n            </div>\n\n            <div class="bell-transfer-list">\n                <div class="bell-transfer-list-header">\n                    <span class="bell-transfer-list-header-checkbox">\n                        <Checkbox model="checkRightAll" onChange="{{onCheckRightAllChange}}">\n                        </Checkbox>\n                    </span>\n                    <span class="bell-transfer-list-header-title">\n                        {{rightLabel}}\n                    </span>\n                    <span class="bell-transfer-list-header-count">\n                        {{right.length}} / {{rightList.length}}\n                    </span>\n                </div>\n                <div class="bell-transfer-list-body">\n                    <CheckboxGroup vertical model="right" onChange="{{onRightChange}}">\n                        {{#each rightList}}\n                            <Checkbox value="{{this.key}}">\n                                <span>\n                                    {{text}}\n                                </span>\n                            </Checkbox>\n                        {{/each}}\n                    </CheckboxGroup>\n                </div>\n            </div>\n        </div>\n    ',
    propTypes: {
        data: {
            type: 'array',
            value: function value() {
                return [];
            }
        },
        targetKeys: {
            type: 'array',
            value: function value() {
                return [];
            }
        },
        onChange: {
            type: 'function'
        },
        leftLabel: {
            type: 'string'
        },
        rightLabel: {
            type: 'string'
        }
    },
    data: function data() {
        var me = this;
        return {
            leftKeys: [],
            rightKeys: [],

            checkLeftAll: false,
            checkRightAll: false,

            left: [],
            right: [],

            onLeftChange: function onLeftChange(left) {
                me.set({
                    left: left,
                    checkLeftAll: left && left.length == me.get('leftList.length')
                });
            },
            onRightChange: function onRightChange(right) {
                me.set({
                    right: right,
                    checkRightAll: right && right.length == me.get('rightList.length')
                });
            },
            onCheckLeftAllChange: function onCheckLeftAllChange(isCheckAll) {
                me.set({
                    left: isCheckAll ? me.getListKeys(me.get('leftList')) : []
                });
            },
            onCheckRightAllChange: function onCheckRightAllChange(isCheckAll) {
                me.set({
                    right: isCheckAll ? me.getListKeys(me.get('rightList')) : []
                });
            }
        };
    },
    computed: {
        rightList: {
            deps: ['targetKeys', 'targetKeys.length', 'data.*'],
            get: function get() {
                var me = this;
                var data = me.get('data');
                var targetKeys = me.get('targetKeys');
                if (!data || !targetKeys) {
                    return [];
                }
                return data.filter(function (item) {
                    return targetKeys.indexOf(item['key']) !== -1;
                });
            }
        },
        leftList: {
            deps: ['targetKeys', 'targetKeys.length', 'data.*', 'data'],
            get: function get() {
                var me = this;
                var data = me.get('data');
                var targetKeys = me.get('targetKeys');
                if (!data || !targetKeys) {
                    return [];
                }
                return data.filter(function (item) {
                    return targetKeys.indexOf(item['key']) === -1;
                });
            }
        }
    },
    methods: {
        addToLeft: function addToLeft() {
            var me = this;
            me.get('right').map(function (item) {
                Yox.array.remove('targetKeys', item.key);
            });
        },
        addToRight: function addToRight() {
            var me = this;
            me.set({
                targetKeys: Yox.array.merge(me.get('targetKeys'), me.get('left'))
            });
        },
        getListCheckedkeys: function getListCheckedkeys(list) {
            var keys = [];
            if (list.length) {
                keys = list.map(function (item) {
                    if (item.checked) {
                        return item.keys;
                    }
                });
            }
            return keys;
        },
        getListKeys: function getListKeys(list) {
            var keys = [];
            if (list.length) {
                keys = list.map(function (item) {
                    return item.key;
                });
            }
            return keys;
        }
    }
};

var id = 0;

var createMessage = function createMessage(_data) {
    var namespace = 'bell-message-' + id++;
    var body = document.body;
    var element = document.createElement('div');
    element.setAttribute('id', namespace);
    body.append(element);

    var instance = new Yox({
        el: '#' + namespace,
        replace: true,
        template: '\n<div class="bell-message bell-message-{{type}}\n{{#if isShow}} bell-show{{/if}}\n" style="margin-left: -{{marginLeft / 2}}px;\n{{#if top}} top: {{top}}px;{{/if}}">\n    <Alert type="{{type}}" closeText="{{closeText}}" center="{{center}}" showIcon="{{showIcon}}" closable="{{closable}}" close="{{close}}">\n        {{content}}\n    </Alert>\n</div>',
        data: function data() {
            return {
                marginLeft: 0,
                top: 0,
                content: _data.content,
                type: _data.type,
                showIcon: _data.showIcon,
                closable: _data.closable,
                closeText: _data.closeText,
                center: _data.center,
                isShow: false,
                close: function close() {
                    element.remove();
                    if (Yox.is.func(_data.onClose)) {
                        _data.onClose();
                    }
                }
            };
        },

        methods: {
            fadeIn: function fadeIn() {
                var me = this;
                me.fadeInFuc = setTimeout(function () {
                    me.set({
                        isShow: true,
                        top: me.top
                    });
                    me.fadeOut();
                }, me.fadeInTime);
            },
            fadeOut: function fadeOut() {
                var me = this;
                me.showTimeFuc = setTimeout(function () {
                    me.set({
                        isShow: false,
                        top: 0
                    });

                    me.fadeOutFuc = setTimeout(function () {
                        element.remove();
                        if (Yox.is.func(_data.onClose)) {
                            _data.onClose();
                        }
                        if (instance) {
                            instance.destroy();
                        }
                    }, me.fadeOutTime);
                }, me.showTime);
            }
        },

        afterMount: function afterMount() {
            var me = this;

            me.fadeInTime = 300;
            me.fadeOutTime = 300;
            me.showTime = _data.duration || 1500;
            me.top = _data.top || 15;

            me.set({
                marginLeft: me.$el.clientWidth
            });

            me.fadeIn();
        },

        beforeDestroy: function beforeDestroy() {
            var me = this;
            clearTimeout(me.fadeInFuc);
            clearTimeout(me.showTimeFuc);
            clearTimeout(me.fadeOutFuc);
        }
    });
};

var add = function add(data) {
    createMessage(data);
};

var config = {};

var addMessage = function addMessage(type, arg) {
    var data = {};
    data.type = type;

    if (Yox.is.string(arg)) {
        data.content = arg;
    } else {
        Yox.object.extend(data, arg, config);
    }

    add(data);
};

var updateConfig = function updateConfig(data) {
    if (data.duration) {
        config.duration = data.duration;
    }

    if (data.top) {
        config.top = data.top;
    }
};

Yox.prototype.$Message = {
    success: function success(arg) {
        addMessage('success', arg);
    },
    info: function info(arg) {
        addMessage('info', arg);
    },
    warning: function warning(arg) {
        addMessage('warning', arg);
    },
    error: function error(arg) {
        addMessage('error', arg);
    },
    loading: function loading(arg) {
        addMessage('loading', arg);
    },
    config: function config(options) {
        updateConfig(options);
    },
    destroy: function destroy() {
        console.log('destroy');
    }
};

var id$1 = 0;

var createNotice = function createNotice(_data) {
    var namespace = 'bell-notice-' + id$1++;
    var body = document.getElementById('bell-notice-wrapper');
    var element = document.createElement('div');
    element.setAttribute('id', namespace);
    body.append(element);

    var instance = new Yox({
        el: '#' + namespace,
        replace: true,
        template: '\n<div class="bell-notice bell-notice-{{type}}\n{{#if isShow}} bell-show{{/if}}\n" style="width: {{width}}px;\n{{#if right}} right: {{right}}px;{{/if}}">\n    <div class="bell-notice-title">\n        {{title}}\n    </div>\n    <div class="bell-notice-desc">\n        {{content}}\n    </div>\n    {{#if duration == 0}}\n    <i class="bell-icon bell-notice-close bell-icon-ios-close-empty" on-click="close()"></i>\n    {{/if}}\n</div>',
        data: function data() {
            return {
                width: _data.width || 320,
                right: 0,

                type: _data.type,
                title: _data.title,
                content: _data.content,
                duration: _data.duration,

                isShow: false
            };
        },

        methods: {
            close: function close() {
                this.hide();
            },
            fadeIn: function fadeIn() {
                var me = this;
                me.fadeInFuc = setTimeout(function () {
                    me.set({
                        isShow: true,
                        right: me.right
                    });
                    if (_data.duration == 0) {
                        return;
                    }
                    me.fadeOut();
                }, me.fadeInTime);
            },
            fadeOut: function fadeOut() {
                var me = this;
                me.showTimeFuc = setTimeout(function () {
                    me.hide();
                }, me.showTime);
            },
            hide: function hide() {
                var me = this;
                me.set({
                    isShow: false,
                    right: -me.$el.clientWidth
                });
                me.fadeOutFuc = setTimeout(function () {
                    element.remove();
                    if (Yox.is.func(_data.onClose)) {
                        _data.onClose();
                    }
                    if (instance) {
                        instance.destroy();
                    }
                }, me.fadeOutTime);
            }
        },

        afterMount: function afterMount() {
            var me = this;

            me.fadeInTime = 300;
            me.fadeOutTime = 300;
            me.showTime = _data.duration || 4500;
            me.right = _data.right || 15;

            me.set({
                right: -me.$el.clientWidth
            });
            me.fadeIn();
        },

        beforeDestroy: function beforeDestroy() {
            var me = this;
            clearTimeout(me.fadeInFuc);
            clearTimeout(me.showTimeFuc);
            clearTimeout(me.fadeOutFuc);
        }
    });
};

var add$1 = function add(data) {
    createNotice(data);
};

var config$1 = {};

var addNotice = function addNotice(type, arg) {
    var data = {};
    data.type = type;

    if (Yox.is.string(arg)) {
        data.content = arg;
    } else {
        Yox.object.extend(data, arg, config$1);
    }

    add$1(data);
};

var updateConfig$1 = function updateConfig(data) {
    if (data.duration) {
        config$1.duration = data.duration;
    }

    if (data.top) {
        config$1.top = data.top;
    }
};

var body = document.body;
var element = document.createElement('div');
element.setAttribute('id', 'bell-notice-wrapper');
body.append(element);

Yox.prototype.$Notice = {
    success: function success(arg) {
        addNotice('success', arg);
    },
    info: function info(arg) {
        addNotice('info', arg);
    },
    warning: function warning(arg) {
        addNotice('warning', arg);
    },
    error: function error(arg) {
        addNotice('error', arg);
    },
    loading: function loading(arg) {
        addNotice('loading', arg);
    },
    config: function config(options) {
        updateConfig$1(options);
    },
    destroy: function destroy() {
        config$1 = {};
    }
};

var id$2 = 0;

var createAlert = function createAlert(_data) {

    var namespace = 'bell-msg-alert-' + id$2++;
    var body = document.getElementById('bell-msgbox-wrapper');
    var element = document.createElement('div');
    element.setAttribute('id', namespace);
    body.append(element);

    var instance = new Yox({
        el: '#' + namespace,
        replace: true,
        template: '\n            <div class="bell-msg-alert-wrapper\n            {{#if isHidden}} bell-msg-alert-hidden{{/if}}\n            ">\n                <div class="bell-msg-alert"{{#if width}} style="width: {{width}}px;"{{/if}}>\n                    {{#if closable}}\n                    <div class="bell-msg-alert-close" on-click="hide()">\n                        <i class="bell-icon bell-icon-ios-close-empty"></i>\n                    </div>\n                    {{/if}}\n\n                    <div class="bell-msg-alert-title bell-text-main bell-text-medium">\n                        {{#if title}}\n                            {{title}}\n                        {{/if}}\n                    </div>\n\n                    <div class="bell-msg-alert-desc bell-text-sub bell-text-small">\n                        {{content}}\n                    </div>\n\n                    <div class="bell-msg-alert-footer">\n                        <Button type="{{button.type}}" on-click="hide()">\n                            {{button.text}}\n                        </Button>\n                    </div>\n                </div>\n                <div class="bell-msg-mask" on-click="maskClick()"></div>\n            </div>\n        ',
        data: function data() {
            return {
                isHidden: true,
                closable: _data.closable,
                title: _data.title || _data,
                content: _data.content || _data,
                button: _data.button || {
                    text: '我知道了',
                    type: 'info'
                }
            };
        },

        methods: {
            maskClick: function maskClick() {
                if (!_data.maskClosable) {
                    return;
                }
                this.hide();
            },
            hide: function hide() {
                var me = this;
                var transTime = 500;
                me.set({
                    isHidden: true
                });
                me.transTimeFuc = setTimeout(function () {
                    element.remove();
                    if (Yox.is.func(_data.onClose)) {
                        _data.onClose();
                    }
                    if (instance) {
                        instance.destroy();
                    }
                }, transTime);
            }
        },

        afterMount: function afterMount() {
            var me = this;
            var transTime = 300;
            me.transTimeFuc = setTimeout(function () {
                me.set({
                    isHidden: false
                });
            }, transTime);
        },

        beforeDestroy: function beforeDestroy() {
            var me = this;
            clearTimeout(me.transTimeFuc);
        }
    });
};

var createConfirm = function createConfirm(_data2) {
    var namespace = 'bell-msg-confirm-' + id$2++;
    var body = document.getElementById('bell-msgbox-wrapper');
    var element = document.createElement('div');
    element.setAttribute('id', namespace);
    body.append(element);

    var instance = new Yox({
        el: '#' + namespace,
        replace: true,
        template: '\n            <div class="bell-msg-confirm-wrapper\n            {{#if isHidden}} bell-msg-confirm-hidden{{/if}}\n            ">\n                <div class="bell-msg-confirm"{{#if width}} style="width: {{width}}px;{{/if}}">\n                    {{#if closable}}\n                    <div class="bell-msg-confirm-close" on-click="hide()">\n                        <i class="bell-icon bell-icon-ios-close-empty"></i>\n                    </div>\n                    {{/if}}\n\n                    <div class="bell-msg-confirm-title bell-text-main bell-text-medium">\n                        {{#if title}}\n                            {{title}}\n                        {{/if}}\n                    </div>\n\n                    <div class="bell-msg-confirm-desc bell-text-sub bell-text-small">\n                        {{content}}\n                    </div>\n                    {{#if buttons}}\n                    <div class="bell-msg-confirm-footer">\n                        {{#each buttons:index}}\n                        <Button type="{{type}}" on-click="buttonClick(index)">\n                            {{text}}\n                        </Button>\n                        {{/each}}\n                    </div>\n                    {{/if}}\n                </div>\n                <div class="bell-msg-mask" on-click="maskClick()"></div>\n            </div>\n        ',
        data: function data() {
            return {
                isHidden: true,
                width: _data2.width,
                closable: _data2.closable,
                title: _data2.title || _data2,
                content: _data2.content || _data2,
                buttons: _data2.buttons,
                maskClosable: _data2.maskClosable
            };
        },

        methods: {
            buttonClick: function buttonClick(index) {
                var me = this;
                var handler = me.get('buttons.' + index + '.action');
                handler.call(instance);
                return false;
            },
            maskClick: function maskClick() {
                if (!_data2.maskClosable) {
                    return;
                }
                this.hide();
            },
            hide: function hide() {
                var me = this;
                var transTime = 500;
                me.set({
                    isHidden: true
                });
                me.transTimeFuc = setTimeout(function () {
                    element.remove();
                    if (Yox.is.func(_data2.onClose)) {
                        _data2.onClose();
                    }
                    if (instance) {
                        instance.destroy();
                    }
                }, transTime);
            }
        },

        afterMount: function afterMount() {
            var me = this;
            var transTime = 300;
            me.transTimeFuc = setTimeout(function () {
                me.set({
                    isHidden: false
                });
            }, transTime);
        },

        beforeDestroy: function beforeDestroy() {
            var me = this;
            clearTimeout(me.transTimeFuc);
        }
    });
};

var addAlert = function addAlert(data) {
    createAlert(data);
};

var addConfirm = function addConfirm(data) {
    createConfirm(data);
};

var body$1 = document.body;
var element$1 = document.createElement('div');
element$1.setAttribute('id', 'bell-msgbox-wrapper');
body$1.append(element$1);

Yox.prototype.$Alert = function (data) {
    addAlert(data);
};

Yox.prototype.$Confirm = function (data) {
    addConfirm(data);
};

var namespace = 'bell-loading-bar';
var instance = null;
var timer$1 = null;

var add$2 = function add(data) {

    if (instance) {
        remove();
    }

    var body = document.getElementById('bell-loading-bar-wrapper');
    var element = document.createElement('div');
    element.setAttribute('id', namespace);
    body.append(element);

    instance = new Yox({
        el: '#' + namespace,
        replace: true,
        props: {
            percent: data.percent,
            height: data.height,
            type: data.type,
            color: data.color
        },
        template: '\n            <div class="bell-loading-bar\n            {{#if type}} bell-loading-bar-{{type}}{{/if}}">\n                <div class="bell-loading-bar-inner">\n                    <div class="bell-loading-bar-bg"\n                        style="\n                            width: {{percent}}%;\n                            height: {{height}}px;\n                            {{#if color}} color: {{color}};{{/if}}\n                        "\n                    >\n                    </div>\n                </div>\n            </div>\n        ',
        propTypes: {
            type: {
                type: 'string'
            },
            height: {
                type: 'number',
                value: 2
            },
            percent: {
                type: 'number',
                value: 0
            },
            color: {
                type: 'string'
            }
        },
        afterMount: function afterMount() {
            var me = this;
            var timerStart = function timerStart() {
                timer$1 = setTimeout(function () {
                    if (!timer$1 || !me) {
                        return;
                    }
                    me.increase('percent', Math.floor(Math.random() * 10), 98);
                    if (me.get('percent') <= 98) {
                        timerStart();
                    }
                }, 200);
            };
            timerStart();
        },
        beforeDestroy: function beforeDestroy() {
            if (timer$1) {
                clearTimeout(timer$1);
            }
        }
    });

    return instance;
};

var remove = function remove() {

    if (instance) {
        instance.destroy();
        instance = null;
    }
    var body = document.getElementById('bell-loading-bar-wrapper');
    var element = document.getElementById(namespace);
    if (element) {
        body.removeChild(element);
    }
};

var update = function update(config) {
    if (instance) {
        instance.set(config);
    }
};

var body$2 = document.body;
var element$2 = document.createElement('div');
element$2.setAttribute('id', 'bell-loading-bar-wrapper');
body$2.append(element$2);

var config$2 = {};

var updateConfig$2 = function updateConfig(data) {
    config$2.type = data.type ? data.type : config$2.type;
    config$2.color = data.color ? data.color : config$2.color;
    config$2.height = data.height ? data.height : config$2.height;
};

Yox.prototype.$LoadingBar = {
    // 开始从 0 显示进度条，并自动加载进度
    start: function start(options) {
        return add$2(Yox.object.extend({}, options, config$2));
    },

    // 结束进度条，自动补全剩余进度
    finish: function finish() {
        update({
            percent: 100
        });

        setTimeout(function () {
            return remove();
        }, 1000);
    },
    // 精确加载到指定的进度
    update: function update$$1(data) {
        return update(data);
    },
    config: function config(data) {
        updateConfig$2(data);
    },
    destroy: function destroy() {
        config$2 = {};
        element$2.remove();
    }
};

/*
 * @file 主模块
 * @author wangtianhua
 */

Yox.component({
    Transition: Transition,

    Layout: Layout,
    Header: Header,
    Sider: Sider,
    Content: Content,
    Footer: Footer,
    Menu: Menu,
    MenuItem: MenuItem,
    MenuGroup: MenuGroup,
    Submenu: Submenu,
    Row: Row,
    Col: Col,
    Icon: Icon,

    Breadcrumb: Breadcrumb,
    BreadcrumbItem: BreadcrumbItem,

    Button: Button,
    Input: Input,
    InputNumber: InputNumber,
    Radio: Radio,
    RadioGroup: RadioGroup,
    Checkbox: Checkbox,
    CheckboxGroup: CheckboxGroup,
    Switch: Switch,
    Select: Select,
    Page: Page,
    Date: Date$1,
    DateRange: DateRange,
    DateWeek: DateWeek,
    DateMonth: DateMonth,
    DateYear: DateYear,
    DatePicker: DatePicker,

    Tooltip: Tooltip,
    TooltipItem: TooltipItem,

    Alert: Alert,
    Desc: Desc,
    Spinner: Spinner,
    BackTop: BackTop,
    Avatar: Avatar,
    Badge: Badge,

    Card: Card,
    CardHeader: CardHeader,
    CardMedia: CardMedia,
    CardTitle: CardTitle,
    CardText: CardText,
    CardActions: CardActions,

    Collapse: Collapse,
    Panel: Panel,
    List: List,
    Item: Item,
    Circle: Circle,
    Progress: Progress,
    Slider: Slider,
    Tag: Tag,
    Rate: Rate,
    Tabs: Tabs,
    TabPanel: TabPanel,

    Transfer: Transfer
});

})));
