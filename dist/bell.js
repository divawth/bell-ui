(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

    var FADE = 'fade';
    var COLLAPSE = 'collapse';

    var Transition = {
        template: '<slot name="children" />',

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
                Yox.dom.addClass(element, me.get('enterClass'));
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
                Yox.dom.addClass(element, me.get('leaveClass'));
            },
            appear: function appear() {
                var me = this;
                var element = me.$el;
                if (me.get('css') === false) {
                    me.get('onAppear') && me.get('onAppear')();
                    return;
                }
                Yox.dom.removeClass(element, me.get('enterClass'));
                Yox.dom.removeClass(element, me.get('leaveClass'));
                Yox.dom.addClass(element, me.get('appearClass'));
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
                Yox.dom.removeClass(element, me.get('appearClass'));
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
                Yox.dom.addClass(element, me.get('enterToClass'));
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
                Yox.dom.addClass(element, me.get('leaveToClass'));
            },
            appearTo: function appearTo() {
                var me = this;
                var element = me.$el;
                if (me.get('css') === false) {
                    me.get('onAppear') && me.get('onAppear')();
                    return;
                }
                Yox.dom.removeClass(element, this.get('enterToClass'));
                Yox.dom.removeClass(element, this.get('leaveToClass'));
                Yox.dom.addClass(element, this.get('appearToClass'));
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
                Yox.dom.removeClass(element, me.get('appearToClass'));
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
        template: '\n        <div class="bell-layout bell-row\n            {{#if hasSider}} bell-col-span-24{{else}} column{{/if}}\n            {{#if fixed}} bell-layout-fixed{{/if}}\n            {{#if className}} {{className}}{{/if}}"\n            {{#if style}} style="{{style}}"{{/if}}\n        >\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </div>\n    ',

        data: function data() {
            var me = this;
            return {
                hasSider: me.get('hasSider')
            };
        },


        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            fixed: {
                type: 'boolean'
            },
            hasSider: function hasSider(value) {
                return value ? true : false;
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
        template: '\n        <div class="bell-layout-header bell-col-span-24\n            {{#if className}} {{className}}{{/if}}"\n            {{#if style}} style="{{style}}"{{/if}}\n        >\n            {{#if hasSlot(\'left\')}}\n                <div class="bell-layout-header-left">\n                    <slot name="left" />\n                </div>\n            {{/if}}\n\n            {{#if hasSlot(\'center\') || hasSlot(\'children\')}}\n                <div class="bell-layout-header-center">\n                    <slot name="center" />\n                    <slot name="children" />\n                </div>\n            {{/if}}\n\n            {{#if hasSlot(\'right\')}}\n                <div class="bell-layout-header-right">\n                    <slot name="right" />\n                </div>\n            {{/if}}\n        </div>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            }
        }
    };

    var Sider = {
        template: '\n        <div class="bell-layout-sider bell-col-span-6\n            {{#if className}} {{className}}{{/if}}\n            {{#if collapsed}} bell-layout-sider-collapsed{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n\n            {{#if collapsible}}\n                <div class="bell-sider-trigger" on-click="toggle(\'collapsed\')">\n                    {{#if collapsed}}\n                        <i class="bell-icon bell-icon-chevron-right"></i>\n                    {{else}}\n                        <i class="bell-icon bell-icon-chevron-left"></i>\n                    {{/if}}\n                </div>\n            {{/if}}\n\n\n            {{#if hasSlot(\'trigger\')}}\n                <div class="bell-sider-trigger" on-click="toggle(\'collapsed\')">\n                    <slot name="trigger" />\n                </div>\n            {{/if}}\n        </div>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            collapsible: {
                type: ['string', 'boolean']
            }
        },

        data: function data() {
            return {
                collapsed: false
            };
        },


        watchers: {
            collapsed: function collapsed(_collapsed) {
                var me = this;
                Yox.nextTick(function () {
                    me.fire('collapse', {
                        isCollapsed: _collapsed
                    });
                });
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
        template: '\n        <div class="bell-layout-content bell-col-span\n            {{#if hasSider}}-18{{else}}-24{{/if}}\n            {{#if className}} {{className}}{{/if}}"\n            {{#if style}} style="{{style}}"{{/if}}\n        >\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </div>\n    ',

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
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            }
        }
    };

    var Footer = {
        template: '\n        <div class="bell-layout-footer bell-col-span-24\n            {{#if className}} {{className}}{{/if}}"\n            {{#if style}} style="{{style}}"{{/if}}\n        >\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </div>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            }
        }
    };

    var Menu = {
        template: '\n        <div class="bell-menu\n            {{#if className}} {{className}}{{/if}}\n            {{#if mode}} bell-menu-{{mode}}{{/if}}\n            {{#if theme}} bell-menu-{{theme}}{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            mode: {
                type: 'string'
            },
            theme: {
                type: 'string',
                value: 'dark'
            },
            activeName: {
                type: ['numeric', 'string'],
                value: -1
            },
            openNames: {
                type: 'array'
            }
        },

        events: {
            menuItemActive: function menuItemActive(event, data) {
                var me = this;
                me.fire('select', {
                    name: data.name
                });
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
                me.fire('select', {
                    name: _activeName
                });
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
        template: '\n        <div class="bell-menu-item\n            {{#if className}} {{className}}{{/if}}\n            {{#if isActive}} bell-active{{/if}}\n        " style="{{style}}" on-click="click(name)">\n\n            {{#if hasSlot(\'leftIcon\')}}\n            <span class="bell-left-icon">\n                <slot name="leftIcon" />\n            </span>\n            {{/if}}\n\n            <span class="bell-menu-item-content">\n                {{#if hasSlot(\'children\')}}\n                    <slot name="children" />\n                {{/if}}\n            </span>\n\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
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
        template: '\n        <div class="bell-menu-group\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n\n            <div class="bell-menu-group-title">\n                {{title}}\n            </div>\n\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            title: {
                type: 'string'
            }
        }
    };

    var Submenu = {
        template: '\n        <div class="bell-menu-sub-menu\n            {{#if className}} {{className}}{{/if}}\n            {{#if isOpen}} bell-active{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n            <div class="bell-menu-title" on-click="click(name)">\n                <span class="bell-menu-title-text">\n                    {{#if hasSlot(\'title\')}}\n                        <slot name="title" />\n                    {{/if}}\n                </span>\n                {{#if isCollapsed}}\n                    <i class="\n                        bell-icon \n                        bell-menu-title-icon \n                        bell-icon-ios-arrow-down\n                        {{#if isOpen}} bell-menu-open{{/if}}\n                    "></i>\n                {{/if}}\n            </div>\n            {{#if isOpen && hasSlot(\'children\')}}\n                <div class="bell-menu-groups" transition="groups">\n                    <slot name="children" />\n                </div>\n            {{/if}}\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            name: {
                type: 'string'
            },
            isCollapsed: {
                type: ['string', 'boolean']
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
                this.toggle('isOpen');
                this.fire('click', {
                    isOpen: this.get('isOpen')
                });
            }
        }
    };

    var Row = {
        template: '\n        <div class="bell-row\n            {{#if className}} {{className}}{{/if}}\n            {{#if gutter}} bell-row-gutter{{/if}}\n            {{#if type}} bell-row-{{type}}{{/if}}\n            {{#if justify}} bell-row-justify-{{justify}}{{/if}}\n            {{#if align}} bell-row-align-{{align}}{{/if}}\n        " style="{{style}}">\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            gutter: {
                type: 'numeric'
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
        template: '\n        <div class="bell-col\n            {{#if className}} {{className}}{{/if}}\n            {{#if span}} bell-col-span-{{span}}{{/if}}\n            {{#if order}} bell-col-order-{{order}}{{/if}}\n            {{#if push}} bell-col-push-{{push}}{{/if}}\n            {{#if pull}} bell-col-pull-{{pull}}{{/if}}\n            {{#if offset}} bell-col-span-offset-{{offset}}{{/if}}\n            {{#if xsClass}} {{xsClass}}{{/if}}\n            {{#if mdClass}} {{mdClass}}{{/if}}\n            {{#if smClass}} {{smClass}}{{/if}}\n            {{#if lgClass}} {{lgClass}}{{/if}}\n        " style="{{style}}">\n\n            <div class="bell-col-content">\n\n                {{#if hasSlot(\'children\')}}\n                    <slot name="children" />\n                {{/if}}\n\n            </div>\n\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            span: {
                type: 'numeric'
            },
            order: {
                type: 'numeric'
            },
            offset: {
                type: 'numeric'
            },
            push: {
                type: 'numeric'
            },
            pull: {
                type: 'numeric'
            },
            xs: {
                type: ['numeric', 'object']
            },
            sm: {
                type: ['numeric', 'object']
            },
            md: {
                type: ['numeric', 'object']
            },
            lg: {
                type: ['numeric', 'object']
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
        template: '\n        <i class="{{#if type}}bell-icon bell-icon-{{type}}{{/if}}\n            {{#if className}} {{className}}{{/if}}"\n            style="font-size: {{size}}px;{{#if color}} color: {{color}};{{/if}}{{#if style}} {{style}}{{/if}}"\n        >\n        </i>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            type: {
                type: 'string'
            },
            size: function size(value) {
                return value != null ? +value : 14;
            },
            color: {
                type: 'string'
            }
        }
    };

    var contains = function contains(element, target) {
      if (element.contains && element.contains(target)) {
        return true;
      } else if (element.compareDocumentPosition && element.compareDocumentPosition(target) > 16) {
        return true;
      }
      return false;
    };

    var Drawer = {
        template: '\n        <div class="bell-drawer\n            {{#if className}} {{className}}{{/if}}\n            {{#if open}} bell-drawer-open{{else}} bell-drawer-hidden{{/if}}\n            {{#if position}} bell-drawer-{{position}}{{/if}}\n        " style="{{#if style}} {{style}}{{/if}};">\n\n            {{#if useMask}}\n                <div class="bell-drawer-mask"></div>\n            {{/if}}\n\n            <div ref="drawContent" class="bell-drawer-content"\n                style="{{#if position == "left" || position == "right"}}\n                        width: {{size}}px;\n                    {{else}}\n                        height: {{size}}px;\n                    {{/if}}\n                "\n            >\n                {{#if hasSlot(\'children\')}}\n                    <slot name="children" />\n                {{/if}}\n            </div>\n\n        </div>\n    ',

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
                type: 'boolean'
            },
            open: {
                type: 'boolean'
            },
            size: function size(value) {
                return value != null ? +value : 300;
            }
        },

        afterMount: function afterMount() {

            var me = this;

            me.documentClickHandler = function (event) {

                if (!me.get('open')) {
                    return;
                }
                var element = me.$refs.drawContent;
                var target = event.originalEvent.target;
                if (contains(element, target)) {
                    return;
                }
                me.set({
                    open: false
                });
            };

            Yox.dom.on(document, 'click', me.documentClickHandler);
        },
        beforeDestroy: function beforeDestroy() {
            var me = this;
            Yox.dom.on(document, 'click', me.documentClickHandler);
        }
    };

    var Breadcrumb = {
        template: '\n        <div class="bell-breadcrumb bell-texts\n        {{#if className}} {{className}}{{/if}}\n        " {{#if style}} style="{{style}}"{{/if}}\n        >\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </div>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            }
        }
    };

    var BreadcrumbItem = {
        template: '\n        <span class="bell-breadcrumb-item bell-text\n            {{#if className}} {{className}}{{/if}}\n        " {{#if style}} style="{{style}}"{{/if}}>\n            <a {{#if to}}href="{{to}}"{{/if}} class="bell-breadcrumb-link">\n                {{#if hasSlot(\'children\')}}\n                    <slot name="children" />\n                {{/if}}\n            </a>\n            <span class="bell-breadcrumb-gap">\n                {{#if separator}}\n                    {{separator}}\n                {{else}}\n                    /\n                {{/if}}\n            </span>\n        </span>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            to: {
                type: 'string'
            },
            separator: {
                type: 'string'
            }
        }
    };

    var Button = {
        template: '\n        <button class="bell-button\n            {{#if className}} {{className}}{{/if}}\n            {{#if type}} bell-button-{{type}}{{/if}}\n            {{#if shape}} bell-button-{{shape}}{{/if}}\n            {{#if size}} bell-button-{{size}}{{/if}}\n            {{#if fluid}} bell-button-fluid{{/if}}\n        "{{#if disabled}} disabled{{/if}} on-click="click"\n        {{#if style}} style="{{style}}"{{/if}}>\n\n            {{#if hasSlot(\'leftIcon\')}}\n                <slot name="leftIcon" />\n            {{/if}}\n\n            {{#if label}}\n                <span>\n                    {{label}}\n                </span>\n            {{else if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n\n            {{#if hasSlot(\'rightIcon\')}}\n                <slot name="rightIcon" />\n            {{/if}}\n        </button>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
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
            fluid: {
                type: 'boolean'
            },
            disabled: {
                type: 'boolean'
            }
        }
    };

    var TEXT_TYPE_PASSWORD = 'password';
    var TEXT_TYPE_TEXTAREA = 'textarea';
    var TEXT_TYPE_TEXT = 'text';

    var Input = {
        template: '\n        <div class="bell-input-wrapper\n            {{#if hasSlot(\'prepend\')}} bell-input-has-prepend{{/if}}\n            {{#if hasSlot(\'append\')}} bell-input-has-append{{/if}}\n            {{#if className}} {{className}}{{/if}}\n            {{#if size}} bell-input-wrapper-{{size}}{{/if}}\n            {{#if status}} bell-input-wrapper-{{status}}{{/if}}\n            {{#if isFocus}} bell-focus{{/if}}\n            {{#if clearable}} bell-input-wrapper-clearable{{/if}}\n            {{#if disabled}} bell-input-wrapper-disabled{{/if}}\n            "{{#if style}} style="{{style}}"{{/if}}\n        >\n\n            {{#if hasSlot(\'prepend\')}}\n                <div class="bell-input-prepend">\n                    <slot name="prepend" />\n                </div>\n            {{/if}}\n\n            <div class="bell-input{{#if type === TEXT_TYPE_TEXTAREA}} bell-textarea{{/if}}">\n\n                {{#if type === TEXT_TYPE_TEXTAREA}}\n\n                    <textarea class="bell-input-el"\n                        style="height: {{#if rows}}{{rows * 25}}{{else}}50{{/if}}px"\n                        {{#if rows}} rows="{{rows}}"{{/if}}\n                        {{#if placeholder}} placeholder="{{placeholder}}"{{/if}}\n                        {{#if disabled}} disabled{{/if}}\n                        model="value"\n                    >\n                    </textarea>\n\n                {{else}}\n\n                    <input ref="input"\n                        type="{{currentType}}"\n                        class="bell-input-el\n                            {{#if size}} bell-input-{{size}}{{/if}}\n                        "\n                        {{#if placeholder}} placeholder="{{placeholder}}"{{/if}}\n                        {{#if disabled}} disabled="disabled"{{/if}}\n                        model="value"\n                        on-blur="blur()"\n                        on-focus="focus()"\n                    />\n\n                    {{#if clearable}}\n                        <i class="bell-icon\n                            bell-icon-ios-close\n                            bell-input-clear-icon\n                        " on-click="clear()"></i>\n                    {{/if}}\n\n                    {{#if secure}}\n                        {{#if isSecure}}\n                            <i class="bell-icon\n                                bell-icon-eye\n                                bell-input-icon-eye\n                            " on-click="toggle(\'isSecure\')"></i>\n                        {{else}}\n                            <i class="bell-icon\n                                bell-icon-eye-disabled\n                                bell-input-icon-eye\n                            " on-click="toggle(\'isSecure\')"></i>\n                        {{/if}}\n                    {{/if}}\n\n                {{/if}}\n\n            </div>\n            {{#if hasSlot(\'append\')}}\n                <div class="bell-input-append">\n                    <slot name="append" />\n                </div>\n            {{/if}}\n        </div>\n    ',

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
            status: {
                type: 'string'
            },
            placeholder: {
                type: 'string'
            },
            value: {
                type: 'string'
            },
            icon: {
                type: 'string'
            },
            rows: {
                type: 'number'
            },
            disabled: {
                type: 'boolean'
            },
            clearable: {
                type: 'boolean'
            },
            secure: {
                type: 'boolean'
            }
        },

        data: function data() {
            var me = this;
            return {
                TEXT_TYPE_TEXT: TEXT_TYPE_TEXT,
                TEXT_TYPE_TEXTAREA: TEXT_TYPE_TEXTAREA,
                TEXT_TYPE_PASSWORD: TEXT_TYPE_PASSWORD,

                isSecure: true,
                isFocus: false,
                currentType: me.get('type')
            };
        },


        watchers: {
            value: function value(_value) {
                this.fire('change', {
                    value: _value
                });
            },
            isSecure: function isSecure(_isSecure) {
                this.set({
                    currentType: _isSecure ? TEXT_TYPE_PASSWORD : TEXT_TYPE_TEXT
                });
            }
        },

        methods: {
            blur: function blur(args) {
                this.set({
                    isFocus: false
                });
                this.fire('blur');
            },
            focus: function focus(args) {
                this.set({
                    isFocus: true
                });
                this.fire('focus');
            },
            clear: function clear() {
                this.set({
                    value: ''
                });
            }
        },

        afterMount: function afterMount() {
            var me = this;

            me.documentKeydownHandler = function (event) {
                event = event.originalEvent;
                if (me.$refs && event.target == me.$refs.input) {
                    me.fire('keydown');
                    if (event.keyCode === 13) {
                        me.fire('enter');
                    }
                }
            };
            me.documentKeyupHandler = function (event) {
                event = event.originalEvent;
                if (me.$refs && event.target == me.$refs.input) {
                    me.fire('keyup');
                }
            };
            me.documentKeypressHandler = function (event) {
                event = event.originalEvent;
                if (me.$refs && event.target == me.$refs.input) {
                    me.fire('keypress');
                }
            };
            Yox.dom.on(document, 'keydown', me.documentKeydownHandler);
            Yox.dom.on(document, 'keyup', me.documentKeyupHandler);
            Yox.dom.on(document, 'keypress', me.documentKeypressHandler);
        },
        beforeDestroy: function beforeDestroy() {
            var me = this;
            Yox.dom.off(document, 'keydown', me.documentKeydownHandler);
            Yox.dom.off(document, 'keyup', me.documentKeyupHandler);
            Yox.dom.off(document, 'keypress', me.documentKeypressHandler);
        }
    };

    var InputNumber = {
        template: '\n        <div class="bell-input-wrapper\n            {{#if hasSlot(\'prepend\')}} bell-input-has-prepend{{/if}}\n            {{#if hasSlot(\'append\')}} bell-input-has-append{{/if}}\n            {{#if className}} {{className}}{{/if}}\n            {{#if size}} bell-input-wrapper-{{size}}{{/if}}\n            {{#if status}} bell-input-wrapper-{{status}}{{/if}}\n            {{#if isFocus}} bell-focus{{/if}}\n            {{#if clearable}} bell-input-wrapper-clearable{{/if}}\n            {{#if disabled}} bell-input-wrapper-disabled{{/if}}\n            "{{#if style}} style="{{style}}"{{/if}}\n        >\n\n            {{#if hasSlot(\'prepend\')}}\n                <div class="bell-input-prepend">\n                    <slot name="prepend" />\n                </div>\n            {{/if}}\n\n            <div class="bell-input-number\n                {{#if className}} {{className}}{{/if}}\n                {{#if size}} bell-input-number-{{size}}{{/if}}\n                {{#if status}} bell-input-number-{{status}}{{/if}}\n                {{#if disabled}} bell-input-number-disabled{{/if}}\n                {{#if readonly}} bell-input-number-readonly{{/if}}\n                {{#if isFocus}} bell-focus{{/if}}\n            "{{#if style}} style="{{style}}"{{/if}}>\n\n                <span class="bell-input-number-wrapper">\n                    <input type="text" class="bell-input"\n                    {{#if placeholder}} placeholder="{{placeholder}}"{{/if}}\n                    {{#if disabled}}disabled="disabled"{{/if}}\n                    {{#if readonly || !editable}}readonly="readonly"{{/if}}\n                    model="value" on-blur="blur()" on-focus="focus()"\n                    ></input>\n                </span>\n\n                <span class="bell-input-number-actions">\n                    <span class="bell-icon bell-icon-up bell-icon-ios-arrow-up"\n                        {{#if maxValue != null && value >= maxValue}} disabled="disabled"{{/if}}\n                        on-click="up()"></span>\n                    <span class="bell-icon bell-icon-down bell-icon-ios-arrow-down"\n                        {{#if minValue != null && value <= minValue}} disabled="disabled"{{/if}}\n                        on-click="down()"\n                    ></span>\n                </span>\n\n            </div>\n            {{#if hasSlot(\'append\')}}\n                <div class="bell-input-append">\n                    <slot name="append" />\n                </div>\n            {{/if}}\n        </div>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            status: {
                type: 'string'
            },
            maxValue: {
                type: 'numeric'
            },
            minValue: {
                type: 'numeric',
                value: 0
            },
            value: {
                type: 'numeric'
            },
            step: function step(val) {
                return val === undefined ? 1 : +val;
            },
            size: {
                type: 'string'
            },
            readonly: {
                type: 'boolean',
                value: false
            },
            disabled: {
                type: 'boolean'
            },
            editable: {
                type: 'boolean',
                value: true
            },
            placeholder: {
                type: 'string'
            }
        },

        data: function data() {
            return {
                isFocus: false
            };
        },


        watchers: {
            value: function value(val) {
                var me = this;
                if (!Yox.is.numeric(val)) {
                    me.set({
                        value: +me.get('minValue')
                    });
                    return;
                }
                me.fire('change', {
                    value: +val
                });
            }
        },

        methods: {
            up: function up() {
                var me = this;
                me.increase('value', me.get('step'), me.get('maxValue'));
                me.fire('change', {
                    value: +me.get('value')
                });
            },
            down: function down() {
                var me = this;
                var value = me.decrease('value', me.get('step'), me.get('minValue'));
                me.fire('change', {
                    value: +me.get('value')
                });
            },
            blur: function blur() {
                this.set({
                    isFocus: false
                });
                this.fire('blur');
            },
            focus: function focus() {
                this.set({
                    isFocus: true
                });
                this.fire('focus');
            },
            documentKeydownHander: function documentKeydownHander(event) {
                var me = this;
                switch (event.originalEvent.keyCode) {
                    case 38:
                        me.up();
                        break;
                    case 40:
                        me.down();
                        break;
                }
            }
        },

        afterMount: function afterMount() {
            var me = this;
            me.documentKeydownHander = me.documentKeydownHander.bind(me);
            Yox.dom.on(document, 'keydown', me.documentKeydownHander);
        },
        beforeDestroy: function beforeDestroy() {
            var me = this;
            Yox.dom.off(document, 'keydown', me.documentKeydownHander);
        }
    };

    var Radio = {
        template: '\n        <label class="bell-radio\n            {{#if className}} {{className}}{{/if}}\n            {{#if isChecked}} bell-active{{/if}}\n            {{#if isDisabled}} bell-radio-disabled{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n\n            <span class="bell-radio-wrapper" on-click="click()">\n                <span class="bell-radio-inner"></span>\n                <input class="bell-radio-input" type="radio" value="{{value}}" />\n            </span>\n\n            <span class="bell-radio-label">\n                {{#if label}}\n                    {{label}}\n                {{else}}\n                    {{#if hasSlot(\'children\')}}\n                        <slot name="children" />\n                    {{/if}}\n                {{/if}}\n            </span>\n\n        </label>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            label: {
                type: 'string'
            },
            value: {
                type: ['numeric', 'boolean', 'string']
            },
            disabled: {
                type: 'boolean'
            },
            checked: {
                type: 'boolean'
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
                this.set({
                    isChecked: data.value == this.get('value')
                });
            },
            updateRadioDisabled: function updateRadioDisabled(event, data) {
                this.set({
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

                me.fire('radioValueChange', {
                    value: me.get('value')
                });
                return;
            }
        }
    };

    var RadioGroup = {

      template: '\n        <div class="{{#if button}}bell-radio-button{{else}}bell-radio-group{{/if}}\n            {{#if type && button}} bell-radio-button-{{type}}{{else if type}} bell-radio-group-{{type}}{{/if}}\n            {{#if size && button}} bell-radio-button-{{size}}{{/if}}\n            {{#if disabled && button}} bell-radio-button-disabled{{else if disabled}} bell-radio-group-disabled{{/if}}\n            {{#if vertical}} bell-radio-vertical{{/if}}\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n\n        </div>\n    ',

      propTypes: {
        className: {
          type: 'string'
        },
        style: {
          type: 'string'
        },
        name: {
          type: 'string'
        },
        value: {
          type: 'string'
        },
        size: {
          type: 'string'
        },
        type: {
          type: 'string'
        },
        disabled: {
          type: ['numeric', 'boolean']
        },
        vertical: {
          type: ['numeric', 'boolean']
        },
        button: {
          type: ['numeric', 'boolean']
        }
      },

      events: {
        radioValueChange: function radioValueChange(event, data) {
          var me = this;
          me.set({
            value: data.value
          });

          me.fire('change', {
            value: data.value
          });

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

        me.fire('updateRadioValue', {
          value: me.get('value')
        }, true);

        if (me.get('disabled')) {
          me.fire('updateRadioDisabled', {
            disabled: me.get('disabled') ? true : false
          }, true);
        }
      }
    };

    var Checkbox = {
        template: '\n        <label class="bell-checkbox\n            {{#if className}} {{className}}{{/if}}\n            {{#if disabled}} bell-checkbox-disabled{{/if}}\n            {{#if type}} bell-checkbox-{{type}}{{/if}}\n            {{#if size}} bell-checkbox-{{size}}{{/if}}\n            {{#if isChecked}} bell-active{{/if}}\n            {{#if indeterminate}} bell-checkbox-indeterminate{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n\n            <span class="bell-checkbox-wrapper\n                {{#if isChecked}} bell-active{{/if}}\n            " on-click="click()">\n                <span class="bell-checkbox-inner"></span>\n                <input class="bell-checkbox-input" type="checkbox" value="{{value}}" />\n            </span>\n\n            <span class="bell-checkbox-label">\n                {{#if label}}\n                    {{label}}\n                {{else}}\n                    {{#if hasSlot(\'children\')}}\n                        <slot name="children" />\n                    {{/if}}\n                {{/if}}\n            </span>\n\n        </label>\n    ',

        model: 'modelValue',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            label: {
                type: 'string'
            },
            indeterminate: {
                type: 'boolean'
            },
            value: {
                type: ['string', 'numeric', 'boolean']
            },
            disabled: {
                type: 'boolean'
            },
            checked: {
                type: 'boolean'
            },
            type: {
                type: 'string'
            },
            size: {
                type: 'string'
            }
        },

        data: function data() {
            return {
                isChecked: this.get('checked') ? true : false
            };
        },


        events: {
            updateCheckboxValue: function updateCheckboxValue(event, data) {
                var me = this;
                var isChecked = Yox.is.array(data.value) && Yox.array.has(data.value, me.get('value'));
                me.set({
                    isChecked: isChecked
                });
            },
            updateCheckboxType: function updateCheckboxType(event, data) {
                this.set({
                    type: data.type
                });
            },
            updateCheckboxDisabled: function updateCheckboxDisabled(event, data) {
                this.set({
                    disabled: data.disabled
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
                me.fire('change', {
                    isChecked: !isChecked,
                    value: me.get('value')
                });
                me.set({
                    isChecked: !isChecked
                });
            }
        }
    };

    var CheckboxGroup = {
        template: '\n        <div class="bell-checkbox-group\n            {{#if className}} {{className}}{{/if}}\n            {{#if type}} bell-checkbox-group-{{type}}{{/if}}\n            {{#if size}} bell-checkbox-group-{{size}}{{/if}}\n            {{#if vertical}} bell-checkbox-vertical{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </div>\n    ',

        model: 'modelValue',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
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
                type: 'string'
            },
            type: {
                type: 'string'
            },
            disabled: {
                type: ['string', 'numeric', 'boolean']
            },
            vertical: {
                type: ['string', 'numeric', 'boolean']
            }
        },

        events: {
            change: function change(event, data) {
                var me = this;
                if (event.target == me) {
                    return;
                }
                event.stop();

                var result = Yox.is.array(me.get('modelValue')) ? me.copy(me.get('modelValue')) : [];
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
                me.fire('change', {
                    value: result
                });
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
        template: '\n        <div class="bell-switch\n            {{#if type}} bell-switch-{{type}}{{/if}}\n            {{#if size}} bell-switch-{{size}}{{/if}}\n            {{#if disabled}} bell-switch-disabled{{/if}}\n            {{#if checked}} bell-active{{/if}}\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}} on-click="click()">\n\n            <span class="bell-switch-button">\n                <span class="bell-switch-on">\n                    {{#if hasSlot(\'checkedText\')}}\n                        <slot name="checkedText" />\n                    {{/if}}\n                </span>\n                <span class="bell-switch-off">\n                    {{#if hasSlot(\'unCheckedText\')}}\n                        <slot name="unCheckedText" />\n                    {{/if}}\n                </span>\n            </span>\n            <input class="bell-switch-input" type="hidden" value="{{value}}" />\n        </div>\n    ',

        model: 'checked',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            type: {
                type: 'string'
            },
            size: {
                type: 'string'
            },
            disabled: {
                type: 'boolean'
            },
            checked: {
                type: 'boolean'
            }
        },

        methods: {
            click: function click() {
                var me = this;
                if (me.get('disabled')) {
                    return;
                }

                me.toggle('checked');
                me.fire('change', {
                    checked: me.get('checked')
                });
            }
        }
    };

    var Tag = {
        template: '\n        <div class="bell-tag\n            {{#if className}} {{className}}{{/if}}\n            {{#if border}} bell-tag-border{{/if}}\n            {{#if size}} {{size}}{{/if}}\n            {{#if type}} {{type}}{{/if}}\n            {{#if checked}} bell-tag-checked{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}} on-click="click()">\n            <div class="bell-tag-text">\n                {{#if hasSlot(\'children\')}}\n                    <slot name="children" />\n                {{/if}}\n\n                {{#if closable}}\n                    <i class="bell-tag-close-icon bell-icon bell-icon-ios-close-empty" on-click="close()"></i>\n                {{/if}}\n            </div>\n        </div>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
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
            }
        },

        watchers: {
            checked: function checked(value) {
                this.fire('check', {
                    value: value
                });
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
                this.fire('close');
            }
        }
    };

    var Select = {
        template: '\n        <div class="bell-select\n            {{#if size}} bell-select-{{size}}{{/if}}\n            {{#if type}} bell-select-{{type}}{{/if}}\n            {{#if disabled}} bell-select-disabled{{/if}}\n            {{#if placement}} bell-select-{{placement}}{{/if}}\n            {{#if multiple}} bell-select-multiple{{/if}}\n            {{#if className}} {{className}}{{/if}}\n            {{#if visible}} bell-active{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n\n            <div class="bell-select-button" on-click="toggleMenu()">\n\n                <input type="hidden" model="value" />\n\n                <span class="bell-select-value\n                    {{#if value == null}} bell-hide{{/if}}\n                ">\n                    {{#if selectedText && !multiple}}\n                        {{selectedText}}\n                    {{else if selectedText}}\n                        {{#each selectedText:index}}\n                        <Tag size="tiny" closable on-close="tagClose($event, this, index)">\n                            {{this}}\n                        </Tag>\n                        {{/each}}\n                    {{else if defaultText}}\n                        {{{defaultText}}}\n                    {{else}}\n                        \u8BF7\u9009\u62E9...\n                    {{/if}}\n                </span>\n\n                <span class="bell-select-placeholder\n                    {{#if value != null}} bell-hide{{/if}}\n                ">\n                    {{#if defaultText}}\n                        {{{defaultText}}}\n                    {{else}}\n                        \u8BF7\u9009\u62E9...\n                    {{/if}}\n                </span>\n\n                <span class="bell-icon bell-icon-arrow-down-b bell-select-arrow"></span>\n            </div>\n\n            <div class="bell-select-dropdown">\n                <ul class="bell-select-list">\n                    {{#if hasSlot(\'children\')}}\n                        <slot name="children" />\n                    {{/if}}\n                </ul>\n            </div>\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            defaultText: {
                type: 'string'
            },
            value: {
                type: ['numeric', 'string']
            },
            size: {
                type: 'string'
            },
            type: {
                type: 'string'
            },
            disabled: {
                type: 'boolean'
            },
            placement: {
                type: 'string'
            },
            multiple: {
                type: 'boolean'
            }
        },

        data: function data() {
            return {
                count: 0,
                visible: false,
                hoverIndex: 0,
                selectedIndex: null,
                selectedText: null
            };
        },


        watchers: {
            value: function value(_value) {
                var me = this;
                me.fire('optionSelectedChange', {
                    value: _value
                }, true);

                me.fire('change', {
                    value: _value,
                    text: me.get('selectedText'),
                    index: me.get('selectedIndex')
                });
            }
        },

        events: {
            selectedOptionChange: function selectedOptionChange(event) {
                var me = this;
                var option = event.target;
                if (me.get('selectedText') == null && me.get('selectedIndex') == null) {
                    me.set({
                        selectedIndex: option.get('index'),
                        selectedText: option.get('text')
                    });
                }
                event.stop();
            },
            optionAdd: function optionAdd() {
                this.increase('count');
            },
            optionRemove: function optionRemove() {
                this.decrease('count');
            },
            optionSelect: function optionSelect(event) {

                var me = this;
                var option = event.target;

                var value = option.get('value');
                var text = option.get('text');
                var index = option.get('index');

                if (me.get('multiple')) {

                    me.set({
                        value: me.setArrayValue(value, me.get('value')),
                        selectedText: me.setArrayValue(text, me.get('selectedText')),
                        selectedIndex: index,
                        visible: true
                    });
                } else {

                    me.set({
                        value: value,
                        selectedText: text,
                        selectedIndex: index,
                        visible: false
                    });
                }
            }
        },

        methods: {
            setArrayValue: function setArrayValue(text, values) {

                values = this.copy(values);
                if (Array.isArray(values)) {
                    var index = values.indexOf(text);
                    if (index >= 0) {
                        values.splice(index, 1);
                    } else {
                        values.push(text);
                    }
                } else {
                    values = [text];
                }

                return values.length ? values : null;
            },

            tagClose: function tagClose(event, text, index) {

                var me = this;

                this.set({
                    value: me.setArrayValue(me.get('value')[index], me.get('value')),
                    selectedText: me.setArrayValue(text, me.get('selectedText'))
                });
                event.stop();
            },
            toggleMenu: function toggleMenu() {
                var me = this;
                if (me.get('disabled')) {
                    return false;
                }
                me.toggle('visible');
            },
            decreaseHoverIndex: function decreaseHoverIndex() {
                var me = this;
                var hoverIndex = me.get('hoverIndex');
                hoverIndex = hoverIndex <= 0 ? me.get('count') - 1 : hoverIndex - 1;
                me.set({
                    hoverIndex: hoverIndex
                });
                me.fire('optionHoveredChange', {
                    index: hoverIndex
                }, true);
            },
            increaseHoverIndex: function increaseHoverIndex() {

                var me = this;
                var hoverIndex = me.get('hoverIndex');
                hoverIndex = hoverIndex >= me.get('count') - 1 ? 0 : hoverIndex + 1;
                me.set({
                    hoverIndex: hoverIndex
                });

                me.fire('optionHoveredChange', {
                    index: hoverIndex
                }, true);
            },
            selectOption: function selectOption() {
                this.fire('optionHoveredChange', {
                    index: this.get('hoverIndex'),
                    selected: true
                }, true);
            }
        },

        afterMount: function afterMount() {
            var me = this;

            if (me.get('value') != null && me.get('selectedText') == null && me.get('selectedIndex') == null) {
                me.fire('optionSelectedChange', {
                    value: me.get('value')
                }, true);
            }

            me.documentClickHandler = function (e) {

                if (!me.get('visible')) {
                    return;
                }

                var element = me.$el;
                var target = e.originalEvent.target;
                if (contains(element, target)) {
                    return;
                }
                me.set({
                    visible: false
                });
            };

            me.documentKeydownHander = function (e) {

                if (!me.get('visible')) {
                    return;
                }

                switch (e.originalEvent.keyCode) {

                    case 40:
                        e.prevent();
                        me.increaseHoverIndex();
                        break;

                    case 38:
                        e.prevent();
                        me.decreaseHoverIndex();
                        break;

                    case 13:
                        me.selectOption();

                }        };

            Yox.dom.on(document, 'click', me.documentClickHandler);
            Yox.dom.on(document, 'keydown', me.documentKeydownHander);
        },
        beforeDestroy: function beforeDestroy() {
            var me = this;
            Yox.dom.off(document, 'click', me.documentClickHandler);
            Yox.dom.off(document, 'keydown', me.documentKeydownHander);
        }
    };

    var Option = {
        template: '\n        <li class="bell-select-option\n            {{#if className}} {{className}}{{/if}}\n            {{#if isHover}} bell-hover{{/if}}\n            {{#if isSelected}} bell-active{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}} on-click="click(index)">\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{else}}\n                {{text}}\n            {{/if}}\n        </li>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            value: {
                type: ['string', 'numeric']
            },
            text: {
                type: ['string', 'numeric']
            },
            index: {
                type: ['string', 'numeric'],
                require: true
            }
        },

        events: {
            optionHoveredChange: function optionHoveredChange(event, data) {
                var me = this;
                var isHover = data.index == me.get('index');
                me.set({
                    isHover: isHover
                });
                if (isHover && !me.get('isSelected')) {
                    me.set({
                        isSelected: data.selected
                    });
                }
            },
            optionSelectedChange: function optionSelectedChange(event, data) {
                var me = this;
                var value = me.get('value');
                var values = data.value;

                var isSelected = Array.isArray(values) ? values.indexOf(value) >= 0 : values == value;
                me.set({
                    isSelected: isSelected
                });
                // 默认值的时候需要传给上层
                if (isSelected) {
                    me.fire('selectedOptionChange');
                }
            }
        },

        data: function data() {
            return {
                isSelected: false,
                isHover: false
            };
        },


        methods: {
            click: function click() {
                this.fire('optionSelect');
            }
        },

        afterMount: function afterMount() {

            var me = this;
            me.fire('optionAdd', {
                value: me.get('value'),
                text: me.get('text'),
                index: me.get('index')
            });
        },
        beforeDestroy: function beforeDestroy() {
            this.fire('optionRemove');
        }
    };

    var Page = {
        template: '\n        <div class="bell-page\n            {{#if size}} bell-page-{{size}}{{/if}}\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n            {{#partial pageCenter}}\n                {{#if current - 3 > 1}}\n                    <li class="bell-page-item bell-page-item-prev" on-click="fastPrev()">\n                        <i class="bell-icon bell-icon-ios-arrow-left"></i>\n                        <i class="bell-icon bell-icon-ios-arrow-left"></i>\n                    </li>\n                {{/if}}\n\n                {{#if current - 2 > 1}}\n                    <li class="bell-page-item" on-click="changePage(current - 2)">\n                        {{ current - 2 }}\n                    </li>\n                {{/if}}\n\n                {{#if current - 1 > 1}}\n                    <li class="bell-page-item" on-click="changePage(current - 1)">\n                        {{ current - 1 }}\n                    </li>\n                {{/if}}\n\n                {{#if current != 1 && current != count}}\n                    <li class="bell-page-item bell-active">\n                        {{ current }}\n                    </li>\n                {{/if}}\n\n                {{#if current + 1 < count}}\n                    <li class="bell-page-item" on-click="changePage(current + 1)">\n                        {{ current + 1 }}\n                    </li>\n                {{/if}}\n\n                {{#if current + 2 < count}}\n                    <li class="bell-page-item" on-click="changePage(current + 2)">\n                        {{ current + 2 }}\n                    </li>\n                {{/if}}\n\n                {{#if current + 3 < count}}\n                    <li class="bell-page-item bell-page-item-next" on-click="fastNext()">\n                        <i class="bell-icon bell-icon-ios-arrow-right"></i>\n                        <i class="bell-icon bell-icon-ios-arrow-right"></i>\n                    </li>\n                {{/if}}\n            {{/partial}}\n\n            {{#if showTotal}}\n            <span class="bell-page-total">\n                \u5171 {{total}} \u6761\n            </span>\n            {{/if}}\n\n            {{#if showSizer}}\n            <div class="bell-page-select">\n                <Select model="pageSize"\n                    size="{{size}}"\n                    placement="{{placement}}"\n                    on-change="pageSizeChange()"\n                >\n                    {{#each pageList:index}}\n                        <Option index="{{index}}" value="{{value}}" text="{{text}}">\n                            {{text}}\n                        </Option>\n                    {{/each}}\n                </Select>\n            </div>\n            {{/if}}\n\n            {{#if !simple}}\n            <ul class="bell-page-list">\n\n                <li class="bell-page-item bell-page-prev{{#if current <= 1}} bell-disabled{{/if}}" on-click="prev()">\n                    <i class="bell-icon bell-icon-ios-arrow-left"></i>\n                </li>\n\n                <li class="bell-page-item{{#if current == 1}} bell-active{{/if}}" on-click="changePage(1)">\n                    1\n                </li>\n\n                {{#if count > 1}}\n                    {{> pageCenter}}\n                    <li class="bell-page-item{{#if current == count}} bell-active{{/if}}" on-click="changePage(count)">\n                        {{count}}\n                    </li>\n                {{/if}}\n\n                <li class="bell-page-item bell-page-next {{count}}{{#if current >= count}} bell-disabled{{/if}}" on-click="next()">\n                    <i class="bell-icon bell-icon-ios-arrow-right"></i>\n                </li>\n            </ul>\n\n            {{else}}\n                <div class="bell-page-simple">\n                    <span class="bell-page-item bell-page-prev{{#if current <= 1}} bell-disabled{{/if}}" on-click="prev()">\n                        <i class="bell-icon bell-icon-ios-arrow-left"></i>\n                    </span>\n\n                    <div class="bell-page-input">\n                        <Input type="input"\n                            model="currentPage"\n                            size="{{size}}"\n                        ></Input>\n                    </div>\n\n                    {{\'/\'}}\n\n                    <span class="bell-page-item{{#if current == count}} bell-active{{/if}}" on-click="changePage(count)">\n                        {{count}}\n                    </span>\n\n                    <span class="bell-page-item bell-page-next {{count}}{{#if current >= count}} bell-disabled{{/if}}" on-click="next()">\n                        <i class="bell-icon bell-icon-ios-arrow-right"></i>\n                    </span>\n                </div>\n            {{/if}}\n\n            {{#if showElevator}}\n                <div class="bell-page-elevator">\n                    \u8DF3\u81F3\n                    <div class="bell-page-input">\n                        <Input type="input"\n                            placeholder="\u8BF7\u8F93\u5165..."\n                            model="currentPage"\n                            size="{{size}}"\n                        ></Input>\n                    </div>\n                    \u9875\n                </div>\n            {{/if}}\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            size: {
                type: 'string'
            },
            simple: {
                type: 'string'
            },
            total: {
                type: 'numeric'
            },
            current: {
                type: 'numeric',
                value: 1
            },
            pageSize: function pageSize(value) {
                return !isNaN(+value) ? +value : 10;
            },
            showSizer: function showSizer(value) {
                return value ? true : false;
            },
            pageSizeOpts: {
                type: 'array'
            },
            showElevator: function showElevator(value) {
                return value ? true : false;
            },
            showTotal: function showTotal(value) {
                return value ? true : false;
            },
            placement: {
                type: 'string'
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
                            value: value
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


        events: {
            change: function change(event) {
                if (event.target != this) {
                    event.stop();
                }
            }
        },

        watchers: {
            current: function current(value) {
                this.fire('change', {
                    value: value
                });
            }
        },

        methods: {
            pageSizeChange: function pageSizeChange(event, data) {

                this.updateCount();
                this.fire('pageSizeChange', {
                    value: data.value
                });
                event.stop();
            },
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
            }
        },

        afterMount: function afterMount() {
            var me = this;
            me.updateCount();

            me.documentKeydownHander = function (event) {

                var currentPage = +me.get('currentPage');
                var current = me.get('current');
                var count = me.get('count');

                switch (event.originalEvent.keyCode) {
                    case 40:
                        current = current + 1 > count ? count : current + 1;
                        break;
                    case 38:
                        current = current > 1 ? current - 1 : 1;
                        break;
                    case 13:
                        if (Yox.is.number(currentPage) && currentPage > 0 && currentPage <= count) {
                            current = currentPage;
                        }
                        break;
                }
                me.set({
                    current: current,
                    currentPage: current
                });
            };

            Yox.dom.on(document, 'keydown', me.documentKeydownHander);
        },
        beforeDestroy: function beforeDestroy() {
            var me = this;
            Yox.dom.off(document, 'keydown', me.documentKeydownHander);
        }
    };

    var Upload = {
      template: '\n    <div class="bell-upload\n      {{#if className}} {{className}}{{/if}}\n    "{{#if style}} style="{{style}}"{{/if}} on-click="click()">\n      {{#if hasSlot(\'children\')}}\n        <slot name="children" />\n      {{/if}}\n    </div>\n  ',
      propTypes: {
        className: {
          type: 'string'
        },
        style: {
          type: 'string'
        },
        action: {
          type: 'string'
        },
        data: {
          type: 'object'
        },
        multiple: {
          type: 'boolean',
          value: function value(_value) {
            return _value ? true : false;
          }
        },
        accept: {
          type: 'array'
        }
      },

      watchers: {},

      methods: {
        createInputElement: function createInputElement() {
          var me = this;
          me.inputElement = document.createElement('input');
          me.inputElement.type = 'file';

          me.inputElement.multiple = me.get('multiple');

          var accept = me.get('accept');
          if (accept) {
            me.inputElement.accept = me.get('accept').join(',');
          }

          me.inputElement.style.display = 'none';
          me.$el.appendChild(me.inputElement);

          me.fileChange = function (event) {

            var files = event.target.files;

            me.fire('uploadstart', {
              file: files[0]
            });
            me.upload(files[0]);
          };
          me.inputElement.onchange = me.fileChange;
        },

        upload: function upload(file) {
          var me = this;
          var xhr = new XMLHttpRequest();
          me.xhr = xhr;

          xhr.open('post', me.get('action'), true);
          var formData = new FormData();
          var data = me.get('data');
          if (data) {
            for (var key in data) {
              formData.appendChild(key, data[key]);
            }
          }
          formData.appendChild('file', file);
          xhr.send(formData);

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              // 4 为完成
              if (xhr.status == 200) {
                // 200 为成功
                me.fire('uploadsuccess', JSON.parse(xhr.responseText));
              } else {
                me.fire('uploadsuccess', JSON.parse(xhr.responseText));
              }
            }
          };
        },

        click: function click() {
          this.inputElement.click();
        }
      },

      afterMount: function afterMount() {
        var me = this;
        me.createInputElement();
      }
    };

    var Alert = {
        template: '\n        <div class="bell-alert\n            {{#if className}} {{className}}{{/if}}\n            {{#if type}} bell-alert-{{type}}{{/if}}\n            {{#if hasDesc}} bell-alert-with-desc{{/if}}\n            {{#if showIcon}} bell-alert-with-icon{{/if}}\n            {{#if center}} bell-alert-center{{/if}}\n        " {{#if style}} style="{{style}}"{{/if}}>\n\n            {{#if showIcon}}\n                <span class="bell-alert-icon">\n                    <i class="bell-icon\n                    {{#if type == \'primary\'}} bell-icon-information-circled\n                    {{else if type == \'success\'}} bell-icon-checkmark-circled\n                    {{else if type == \'warning\'}} bell-icon-android-alert\n                    {{else if type == \'error\'}} bell-icon-close-circled\n                    {{/if}}\n                    "></i>\n                </span>\n            {{/if}}\n\n            <span class="bell-alert-content">\n                {{#if hasSlot(\'children\')}}\n                    <slot name="children" />\n                {{/if}}\n            </span>\n\n            {{#if closable}}\n                <span ref="close" class="bell-alert-close" on-click="close()">\n                    {{#if closeText}}\n                        {{closeText}}\n                    {{else}}\n                        <i class="bell-icon bell-icon-ios-close-empty"></i>\n                    {{/if}}\n                </span>\n            {{/if}}\n        </div>\n    ',

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

        data: function data() {
            return {
                hasDesc: false,
                paddingRight: 0
            };
        },


        methods: {
            close: function close() {
                var container = this.$el;
                var classNames = container.getAttribute('class');
                Yox.dom.addClass(container, 'bell-hide');
                setTimeout(function () {
                    container.remove();
                }, 500);
                this.fire('close');
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
        }
    };

    var Desc = {
        template: '\n        <div class="bell-alert-desc\n            {{#if className}} {{className}}{{/if}}\n        " {{#if style}} style="{{style}}"{{/if}}>\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </div>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            }
        },
        afterMount: function afterMount() {
            this.fire('hasDesc');
        }
    };

    var Spinner = {
        template: '\n        <div class="bell-spinner\n            {{#if className}} {{className}}{{/if}}\n            {{#if size}} {{size}}{{/if}}\n            {{#if type}} {{type}}{{/if}}\n            {{#if fix}} bell-spinner-fix{{/if}}\n        " {{#if style}} style="{{style}}"{{/if}}>\n\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{else}}\n                <div class="bell-spinner-main">\n                    <span class="bell-spinner-dot"></span>\n                    {{#if text}}\n                        <span class="bell-spinner-text">\n                            {{text}}\n                        </span>\n                    {{/if}}\n                </div>\n            {{/if}}\n\n        </div>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            size: {
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
        template: '\n        <div class="bell-backtop\n        {{#if className}} {{className}}{{/if}}\n        {{#if !isShow}} bell-hide{{/if}}\n        {{#if !fix}} bell-backtop-fix{{/if}}\n        "\n        style="bottom: {{bottom}}px;\n            right: {{right}}px;\n            {{#if style}} {{style}}{{/if}}\n        " on-click="back()">\n            <i class="bell-icon bell-icon-chevron-up"></i>\n        </div>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            bottom: {
                type: 'numeric',
                value: 30
            },
            right: {
                type: 'numeric',
                value: 30
            },
            height: {
                type: 'numeric',
                value: 400
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
                me.fire('click');
            }
        },

        afterMount: function afterMount() {
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
        template: '\n        <div class="bell-avatar\n            {{#if className}} {{className}}{{/if}}\n            {{#if size}} bell-avatar-{{size}}{{/if}}\n            {{#if shape}} bell-avatar-{{shape}}{{/if}}\n        " style="font-size: {{fontSize}}px;\n            background-color: {{backgroundColor}};\n            color: {{color}};\n            {{#if style}} {{style}}{{/if}}"\n        >\n            {{#if src}}\n                <img{{#if srcset}} srcset="{{srcset}}"{{/if}} ondragstart="return false" src="{{src}}" />\n            {{else}}\n                {{#if hasSlot(\'children\')}}\n                    <slot name="children" />\n                {{/if}}\n            {{/if}}\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
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
            fontSize: function fontSize(value) {
                return value != null ? +value : 14;
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
        template: '\n        <div class="bell-badge\n            {{#if type}} bell-badge-{{type}}{{/if}}\n            {{#if className}} {{className}}{{/if}}\n            " {{#if style}} style="{{style}}"{{/if}}\n        >\n\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n\n            {{#if !hidden}}\n                {{#if dot}}\n                    <span class="bell-badge-dot"></span>\n                {{else}}\n                    <span class="bell-badge-count\n                        {{#if !hasSlot(\'children\')}} bell-badge-count-alone{{/if}}\n                    ">\n                        {{getText(count, maxCount)}}\n                    </span>\n                {{/if}}\n            {{/if}}\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            count: {
                type: 'numeric'
            },
            maxCount: {
                type: 'numeric'
            },
            dot: {
                type: 'boolean'
            },
            hidden: {
                type: 'boolean'
            },
            type: {
                type: 'string'
            }
        },

        filters: {
            getText: function getText(count, maxCount) {
                maxCount = Yox.is.number(maxCount) ? +maxCount : 1;
                var countStr = Yox.is.number(count) ? +count : 0;

                return maxCount < countStr ? maxCount + '+' : count;
            }
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
        } else if (Yox.is.object(year)) {
            valid = true;
            date = year.date;
            month = year.month;
            year = year.year;
        } else if (Yox.is.string(year)) {
            valid = true;
            var parts = year.split(month || '-');
            year = parts[0];
            month = parts[1];
            date = parts[2];
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

    var lpad = function lpad(num, length) {
        if (num == undefined) {
            return '';
        }
        if (length == null) {
            length = 2;
        }
        var arr = new Array(length - ('' + num).length + 1);

        return arr.join('0') + num;
    };

    var DAY_MAP = {
        '1': '一',
        '2': '二',
        '3': '三',
        '4': '四',
        '5': '五',
        '6': '六',
        '0': '日'
    };

    var DatePicker = {
        template: '\n        <div class="bell-datepicker\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n\n            <div class="bell-datepicker-el" on-click="click()">\n                <Input placeholder="\u8BF7\u9009\u62E9\u65E5\u671F..."\n                    model="formateDate"\n                    type="input"\n                    on-focus="focus()"\n                    clearable\n                />\n            </div>\n\n            <div class="bell-datepicker-poper\n                {{#if isPopuping}} bell-isPopuping{{/if}}\n                {{#if isPopdowning}} bell-isPopdowning{{/if}}\n                {{#if isOpen}} bell-show{{/if}}\n            ">\n                {{#if mode == \'date\'}}\n                    <Date />\n                {{else if mode == \'dateRange\'}}\n                    <DateRange />\n                {{else if mode == \'week\'}}\n                    <DateWeek />\n                {{else if mode == \'year\'}}\n                    <DateYear />\n                {{else if mode == \'month\'}}\n                    <DateMonth />\n                {{/if}}\n            </div>\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            mode: {
                type: 'string'
            },
            value: {
                type: 'object'
            },
            formateText: {
                type: 'string'
            }
        },

        data: function data() {
            return {
                date: null,
                start: null,
                end: null,

                isPopuping: false,
                isPopdowning: false,
                isOpen: false
            };
        },


        events: {
            change: function change(event, data) {

                if (event.target != this) {
                    if (!data.value) {
                        this.fire('clear');
                    }
                    event.stop();
                }
            },
            yearChange: function yearChange(event, date) {
                this.dateChange(date);
            },
            monthChange: function monthChange(event, date) {
                this.dateChange(date);
            },
            deteChange: function deteChange(event, date) {
                this.dateChange(date);
            },
            weekRangeChange: function weekRangeChange(event, date) {
                this.dateRangeChange(date);
            },
            deteRangeChange: function deteRangeChange(event, date) {
                this.dateRangeChange(date);
            }
        },

        methods: {
            focus: function focus() {
                this.open();
            },
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
                });
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
                });
            },
            formateDate: function formateDate(date) {

                if (!date) {
                    return false;
                }
                var argsLen = arguments.length;
                var result = '';
                var me = this;
                var startFormat = me.get('formateText').split('$')[0];
                var endFormat = me.get('formateText').split('$')[1];

                if (argsLen > 1) {
                    var start = arguments[0];
                    var end = arguments[1];

                    var formatStart = startFormat.replace(/yyyy/i, start.year).replace(/yy/i, +('' + start.year).substr(2)).replace(/MM/, lpad(start.month)).replace(/M/, start.month).replace(/dd/i, lpad(start.date)).replace(/d/i, start.date).replace(/w/, DAY_MAP[start.day]);

                    var formatEnd = endFormat.replace(/yyyy/i, end.year).replace(/yy/i, +('' + end.year).substr(2)).replace(/MM/, lpad(end.month)).replace(/M/, end.month).replace(/dd/i, lpad(end.date)).replace(/d/i, end.date).replace(/w/, DAY_MAP[end.day]);

                    result = formatStart + formatEnd;
                } else {
                    result = startFormat.replace(/yyyy/i, date.year).replace(/yy/i, +('' + date.year).substr(2)).replace(/MM/, lpad(date.month)).replace(/M/, date.month).replace(/dd/i, lpad(date.date)).replace(/d/i, date.date).replace(/w/, DAY_MAP[date.day]);
                }
                return result.trim();
            },
            dateChange: function dateChange(date) {

                var me = this;
                var formateDate = me.get('formateDate');
                var newFormateDate = me.formateDate(date);
                if (newFormateDate !== formateDate) {
                    me.fire('change', {
                        value: {
                            formateDate: newFormateDate,
                            date: date
                        },
                        oldValue: {
                            formateDate: formateDate,
                            date: me.get('date')
                        }
                    });
                }
                me.set({
                    date: date,
                    formateDate: newFormateDate
                });
                me.close();
            },
            dateRangeChange: function dateRangeChange(data) {
                var end = data.end;

                if (!end) {
                    return;
                }

                var me = this;
                var start = data.start;

                me.fire('change', {
                    value: {
                        start: start,
                        end: end,
                        startDate: me.formateDate(start),
                        endDate: me.formateDate(end),
                        formateDate: me.formateDate(start, end)
                    },
                    oldValue: {
                        start: me.get('start'),
                        end: me.get('end'),
                        startDate: me.formateDate(me.get('start')),
                        endDate: me.formateDate(me.get('end')),
                        formateDate: me.formateDate(me.get('start'), me.get('end'))
                    }
                });

                me.set({
                    start: start,
                    end: end,
                    formateDate: me.formateDate(start, end)
                });
                me.close();
            }
        },

        afterMount: function afterMount() {
            var me = this;
            if (!me.get('formateText')) {
                switch (me.get('mode')) {
                    case 'date':
                        me.set({
                            formateText: 'YYYY/MM/DD'
                        });
                        break;
                    case 'dateRange':
                        me.set({
                            formateText: 'YYYY/MM/DD $- YYYY/MM/DD'
                        });
                        break;
                    case 'week':
                        me.set({
                            formateText: 'YYYY/MM/DD $- YYYY/MM/DD'
                        });
                        break;
                    case 'year':
                        me.set({
                            formateText: 'YYYY'
                        });
                        break;
                    case 'month':
                        me.set({
                            formateText: 'YYYY/MM'
                        });
                        break;
                }
            }

            if (me.get('value')) {
                me.dateChange(me.get('value'));
            }

            me.documentClickHandler = function (e) {
                if (!me.get('isOpen')) {
                    return;
                }
                var element = me.$el;
                var target = e.originalEvent.target;
                if (contains(element, target)) {
                    return;
                }
                me.close();
            };

            Yox.dom.on(document, 'click', me.documentClickHandler);
        },
        beforeDestroy: function beforeDestroy() {
            Yox.dom.off(document, 'click', this.documentClickHandler);
        }
    };

    var WEEKS = ['日', '一', '二', '三', '四', '五', '六'];

    var DAY = 24 * 60 * 60 * 1000;
    var stableDuration = 41 * DAY;

    var Date$1 = {
        template: '\n        <div class="bell-datepicker-date\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} {{style}}{{/if}}>\n\n            <div class="bell-datepicker-header">\n                <span class="bell-datepicker-header-button" on-click="prevYear()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="prevMonth()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                </span>\n\n                <span class="bell-text-medium">\n                    {{currentYear}} \u5E74\n                </span>\n                <span class="bell-text-medium">\n                    {{currentMonth}} \u6708\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="nextMonth()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="nextYear()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                </span>\n            </div>\n\n            <div class="bell-datepicker-table-date">\n                <div class="bell-datepicker-weeks">\n                    {{#each weeks}}\n                        <span class="bell-datepicker-col bell-text-sub">\n                            {{this}}\n                        </span>\n                    {{/each}}\n                </div>\n                <div class="bell-datepicker-days">\n                    {{#each dateList:index}}\n                        <div class="bell-datepicker-row">\n                            {{#each this:index}}\n                                <span\n                                    class="bell-datepicker-col\n                                    {{#if isCurrentMonth}} bell-datepicker-col-current-month{{/if}}\n                                    {{#if isPrevMonth}} bell-datepicker-col-prev-month{{/if}}\n                                    {{#if isLastMonth}} bell-datepicker-col-last-month{{/if}}\n                                    {{#if isCurrentDate}} bell-datepicker-col-checked{{/if}}"\n                                    on-click="click(this)"\n                                >\n                                    {{date}}\n                                </span>\n                            {{/each}}\n                        </div>\n                    {{/each}}\n                </div>\n            </div>\n\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            date: {
                type: 'numeric'
            },
            firstDay: {
                type: 'numeric'
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
                me.fire('deteChange', date);

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

                var startDate = void 0;
                var endDate = void 0;

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
        }
    };

    var WEEKS$1 = ['日', '一', '二', '三', '四', '五', '六'];

    var DAY$1 = 24 * 60 * 60 * 1000;
    var stableDuration$1 = 41 * DAY$1;

    var DateRange = {
        template: '\n        <div class="bell-datepicker-daterange\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} {{style}}{{/if}}>\n\n            <div class="bell-datepicker-header">\n                <span class="bell-datepicker-header-button" on-click="prevYear()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="prevMonth()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                </span>\n\n                <span class="bell-text-medium">\n                    {{currentYear}} \u5E74\n                </span>\n                <span class="bell-text-medium bell-datepicker-header-month">\n                    {{currentMonth}} \u6708\n                </span>\n\n                <span class="bell-text-medium">\n                    {{currentYear}} \u5E74\n                </span>\n                <span class="bell-text-medium">\n                    {{currentMonth + 1}} \u6708\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="nextMonth()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="nextYear()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                </span>\n            </div>\n\n            <div class="bell-datepicker-daterange-wrapper">\n                <div class="bell-datepicker-table-date">\n                    <div class="bell-datepicker-weeks">\n                        {{#each weeks}}\n                            <span class="bell-datepicker-col bell-text-sub">\n                                {{this}}\n                            </span>\n                        {{/each}}\n                    </div>\n                    <div class="bell-datepicker-days">\n                        {{#each dateList:key}}\n                            <div class="bell-datepicker-row">\n                                {{#each this:index}}\n                                    <span\n                                        class="bell-datepicker-col\n                                        {{#if isCurrentMonth}} bell-datepicker-col-current-month{{/if}}\n                                        {{#if isPrevMonth}} bell-datepicker-col-prev-month{{/if}}\n                                        {{#if isLastMonth}} bell-datepicker-col-last-month{{/if}}\n                                        {{#if isCurrentMonth && isCheckedDate}} bell-datepicker-col-checked{{/if}}\n                                        {{#if isCurrentMonth && isRangeDate}} bell-datepicker-col-range{{/if}}"\n                                        on-click="click(this)"\n                                        on-mouseover="hover(this)"\n                                    >\n                                        {{date}}\n                                    </span>\n                                {{/each}}\n                            </div>\n                        {{/each}}\n                    </div>\n                </div>\n                <div class="bell-datepicker-table-date">\n                    <div class="bell-datepicker-weeks">\n                        {{#each weeks}}\n                            <span class="bell-datepicker-col bell-text-sub">\n                                {{this}}\n                            </span>\n                        {{/each}}\n                    </div>\n                    <div class="bell-datepicker-days">\n                        {{#each nextDateList:key}}\n                            <div class="bell-datepicker-row">\n                                {{#each this:index}}\n                                    <span\n                                        class="bell-datepicker-col\n                                        {{#if isCurrentMonth}} bell-datepicker-col-current-month{{/if}}\n                                        {{#if isPrevMonth}} bell-datepicker-col-prev-month{{/if}}\n                                        {{#if isLastMonth}} bell-datepicker-col-last-month{{/if}}\n                                        {{#if isCurrentMonth && isCheckedDate}} bell-datepicker-col-checked{{/if}}\n                                        {{#if isCurrentMonth && isRangeDate}} bell-datepicker-col-range{{/if}}"\n                                        on-click="click(this)"\n                                        on-mouseover="hover(this)"\n                                    >\n                                        {{date}}\n                                    </span>\n                                {{/each}}\n                            </div>\n                        {{/each}}\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            start: {
                type: 'numeric'
            },
            end: {
                type: 'numeric'
            },
            firstDay: {
                type: 'numeric'
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

                var startDate = void 0;
                var endDate = void 0;

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
        }
    };

    var WEEKS$2 = ['日', '一', '二', '三', '四', '五', '六'];

    var DAY$2 = 24 * 60 * 60 * 1000;
    var stableDuration$2 = 41 * DAY$2;

    var DateWeek = {
        template: '\n        <div class="bell-datepicker-week\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} {{style}}{{/if}}>\n\n            <div class="bell-datepicker-header">\n                <span class="bell-datepicker-header-button" on-click="prevYear()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="prevMonth()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                </span>\n\n                <span class="bell-text-medium">\n                    {{currentYear}} \u5E74\n                </span>\n                <span class="bell-text-medium bell-datepicker-header-month">\n                    {{currentMonth}} \u6708\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="nextMonth()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="nextYear()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                </span>\n            </div>\n\n            <div class="bell-datepicker-table-week">\n                <div class="bell-datepicker-weeks">\n                    {{#each weeks}}\n                        <span class="bell-datepicker-col bell-text-sub">\n                            {{this}}\n                        </span>\n                    {{/each}}\n                </div>\n                <div class="bell-datepicker-body">\n                    {{#each dateList:index}}\n                        <div class="bell-datepicker-row\n                        {{#if checkedIndex == index}} bell-datepicker-row-checked{{/if}}\n                        " on-click="click(this)">\n                            {{#each this:key}}\n                                <span\n                                    class="bell-datepicker-col\n                                    {{#if isCurrentMonth}} bell-datepicker-col-current-month{{/if}}\n                                    {{#if isPrevMonth}} bell-datepicker-col-prev-month{{/if}}\n                                    {{#if isLastMonth}} bell-datepicker-col-last-month{{/if}}\n                                    {{#if isCurrentDate}} bell-datepicker-col-checked{{/if}}"\n                                >\n                                    {{date}}\n                                </span>\n                            {{/each}}\n                        </div>\n                    {{/each}}\n                </div>\n            </div>\n\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            // 表示第几周
            week: {
                type: 'numeric'
            },
            // date
            date: {
                type: 'numeric'
            },
            firstDay: {
                type: 'numeric'
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

                var startDate = void 0;
                var endDate = void 0;

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
        }
    };

    var MONTHS = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

    var DateMonth = {
        template: '\n        <div class="bell-datepicker-month\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} {{style}}{{/if}}>\n\n            <div class="bell-datepicker-header">\n                <span class="bell-datepicker-header-button" on-click="prevMore()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="prev()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                </span>\n\n                <span class="bell-text-medium">\n                    {{modeYear}} \u5E74\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="next()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="nextMore()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                </span>\n            </div>\n\n            <div class="bell-datepicker-body">\n                {{#each months:index}}\n                    <span\n                        class="bell-datepicker-col\n                        {{#if checkedMonth == index && checkedYear == modeYear}} bell-datepicker-col-checked{{/if}}"\n                        on-click="click(index)"\n                    >\n                        {{this}}\n                    </span>\n                {{/each}}\n            </div>\n\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            date: {
                type: 'numeric'
            },
            firstDay: {
                type: 'numeric'
            },
            year: {
                type: 'numeric'
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
        template: '\n        <div class="bell-datepicker-month\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} {{style}}{{/if}}>\n\n            <div class="bell-datepicker-header">\n                <span class="bell-datepicker-header-button" on-click="prev()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>\n                </span>\n\n                <span class="bell-text-medium">\n                    {{modeYear}} \u5E74 ~ {{modeYear + 12}} \u5E74\n                </span>\n\n                <span class="bell-datepicker-header-button" on-click="next()">\n                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>\n                </span>\n            </div>\n\n            <div class="bell-datepicker-body">\n                {{#each years:index}}\n                    <span\n                        class="bell-datepicker-col\n                        {{#if checkedYear == this}} bell-datepicker-col-checked{{/if}}"\n                        on-click="click(this)"\n                    >\n                        {{this}}\n                    </span>\n                {{/each}}\n            </div>\n\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            startYear: {
                type: 'numeric'
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

        template: '\n        <div class="bell-tooltip\n            {{#if className}} {{className}}{{/if}}\n            {{#if isShow}} bell-show{{/if}}\n            {{#if isHover}} bell-hover{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n            <div class="bell-tooltip-el"\n                on-mouseover="hover()"\n                on-mouseleave="leave()"\n                on-click="click()"\n            >\n                {{#if hasSlot(\'children\')}}\n                    <slot name="children" />\n                {{/if}}\n            </div>\n\n            <div class="bell-tooltip-popper\n                {{#if disabled}} bell-tooltip-disabled{{/if}}"\n                data-placement="{{placement ? placement : \'bottom\'}}"\n            >\n                <div class="bell-tooltip-arrow"></div>\n                <div class="bell-tooltip-inner"\n                style="{{#if maxWidth}}max-width: {{maxWidth}}px{{/if}};\n                    {{#if maxHeight}} max-height: {{maxHeight}}px{{/if}};\n                ">\n                    {{content}}\n                </div>\n            </div>\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
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
                type: 'numeric'
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
        template: '\n        <div class="bell-tooltip-inner-content\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            }
        },

        afterMount: function afterMount() {
            var me = this;
            me.fire('hasTooltipItem');
        }
    };

    var Collapse = {
        template: '\n        <div class="bell-collapse\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} {{style}}{{/if}}>\n\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            activeName: {
                type: ['numeric', 'string']
            },
            accordion: {
                type: 'boolean'
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
        afterMount: function afterMount() {
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

    var closeTimer = void 0,
        initTimer = void 0,
        openTimer = void 0;

    var Panel = {
        template: '\n        <div class="bell-panel\n            {{#if className}} {{className}}{{/if}}\n            {{#if isOpen}} bell-panel-open{{/if}}\n        "{{#if style}} {{style}}{{/if}}>\n            <div class="bell-panel-el\n                {{#if arrowOpen}} bell-panel-el-open{{/if}}"\n                on-click="click()"\n            >\n                <Icon type="arrow-down-b" className="bell-panel-el-icon"></Icon>\n                {{title}}\n            </div>\n\n            <div ref="panelInner" class="bell-panel-inner">\n                {{#if hasSlot(\'children\')}}\n                    <slot name="children" />\n                {{/if}}\n            </div>\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            title: {
                type: 'string'
            },
            name: {
                type: 'numeric'
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
                var accordion = data.accordion;
                this.set({
                    accordion: accordion
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
        template: '\n        <div class="bell-card\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </div>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            }
        }
    };

    var CardHeader = {
        template: '\n        <div class="bell-card-header\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n\n            {{#if hasSlot(\'avatar\')}}\n                <slot name="avatar" />\n            {{/if}}\n\n            <div class="bell-card-header-detail">\n                {{#if hasSlot(\'title\')}}\n                    <div class="bell-card-header-title\n                        {{#if titleClass}} {{titleClass}}{{/if}}\n                    ">\n                        <slot name="title" />\n                    </div>\n                {{/if}}\n\n                {{#if hasSlot(\'subTitle\')}}\n                    <div class="bell-card-header-sub-title\n                        {{#if subTitleClass}} {{subTitleClass}}{{/if}}\n                    ">\n                        <slot name="subTitle" />\n                    </div>\n                {{/if}}\n            </div>\n\n            {{#if hasSlot(\'extra\')}}\n                <span class="bell-card-header-extra">\n                    <slot name="extra" />\n                </span>\n            {{/if}}\n\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            titleClass: {
                type: 'string'
            },
            subTitleClass: {
                type: 'string'
            }
        }
    };

    var CardMedia = {
        template: '\n        <div class="bell-card-media\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n\n            <div class="bell-card-media-detail">\n\n                {{#if title}}\n                    <div class="bell-card-media-title\n                        {{#if titleClass}} {{titleClass}}{{/if}}\n                    ">\n                        {{title}}\n                    </div>\n                {{/if}}\n\n                {{#if subTitle}}\n                    <div class="bell-card-media-sub-title\n                        {{#if subTitleClass}} {{subTitleClass}}{{/if}}\n                    ">\n                        {{subTitle}}\n                    </div>\n                {{/if}}\n\n            </div>\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
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
        template: '\n        <div class="bell-card-title\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n\n            {{#if hasSlot(\'title\')}}\n                <span class="bell-card-title-text\n                    {{#if titleClass}} {{titleClass}}{{/if}}\n                ">\n                    <slot name="title" />\n                </span>\n            {{/if}}\n\n            {{#if hasSlot(\'extra\')}}\n                <span class="bell-card-title-extra">\n                    <slot name="extra" />\n                </span>\n            {{/if}}\n\n            {{#if hasSlot(\'subTitle\')}}\n                <div class="bell-card-sub-title\n                    {{#if subTitleClass}} {{subTitleClass}}{{/if}}\n                ">\n                    <slot name="subTitle" />\n                </div>\n            {{/if}}\n\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            titleClass: {
                type: 'string'
            },
            subTitleClass: {
                type: 'string'
            }
        }
    };

    var CardText = {
        template: '\n        <div class="bell-card-text\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}\n        >\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </div>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            }
        }
    };

    var CardActions = {
        template: '\n        <div class="bell-card-actions\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </div>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            }
        }
    };

    var List = {
        template: '\n        <ul class="bell-list\n            {{#if className}} {{className}}{{/if}}\n            {{#if border}} bell-list-border{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n\n            {{#if hasSlot(\'subHeader\')}}\n                <div class="bell-list-header">\n                    <slot name="subHeader" />\n                </div>\n            {{/if}}\n\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </ul>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            border: {
                type: 'boolean',
                value: true
            }
        }
    };

    var Item = {
        template: '\n        <li class="bell-list-item\n            {{#if className}} {{className}}{{/if}}\n            {{#if hasSlot(\'header\')}} bell-list-item-has-header{{/if}}\n            {{#if hasSlot(\'footer\')}} bell-list-item-has-footer{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}} on-click="itemClick($event, hasSlot(\'nested\'))">\n\n            <div class="bell-list-item-content\n                {{#if !disableHover}} bell-list-item-content-hover{{/if}}\n                {{#if active}} bell-active{{/if}}\n            ">\n                {{#if hasSlot(\'header\')}}\n                    <div class="bell-list-item-header">\n                        <slot name="header" />\n                    </div>\n                {{/if}}\n\n                {{#if hasSlot(\'footer\')}}\n                    <div class="bell-list-item-footer">\n                        <slot name="footer" />\n                    </div>\n                {{/if}}\n\n                {{#if hasSlot(\'children\')}}\n                    <div class="bell-list-item-text">\n                        <slot name="children" />\n                    </div>\n                {{/if}}\n            </div>\n\n            {{#if hasSlot(\'nested\')}}\n                <div class="bell-list-item-nested{{#if nestedIsShow}} bell-show{{/if}}">\n                    <slot name="nested" />\n                </div>\n            {{/if}}\n\n        </li>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            disableHover: {
                type: 'boolean'
            },
            active: {
                type: 'boolean'
            }
        },

        data: function data() {
            return {
                nestedIsShow: false
            };
        },


        methods: {
            itemClick: function itemClick(event, hasNested) {
                if (!hasNested) {
                    this.fire('click');
                    event.stop();
                    return;
                }
                this.toggle('nestedIsShow');
                event.stop();
            }
        }
    };

    var Divider = {
        template: '\n        <li class="bell-list-divider\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n        </li>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            }
        }
    };

    var Circle = {
        template: '\n        <div class="bell-circle\n            {{#if className}} {{className}}{{/if}}\n        "\n            style="width: {{size}}px;\n                height: {{size}}px;\n                {{#if style}} {{style}}{{/if}}\n            "\n        >\n            <svg viewBox="0 0 100 100">\n                <path d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94"\n                    stroke="{{trailColor}}"\n                    stroke-width="{{trailWidth}}"\n                    fill-opacity="0"\n                />\n                <path d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94"\n                    stroke-linecap="{{strokeLinecap}}"\n                    stroke="{{strokeColor}}"\n                    stroke-width="{{strokeWidth}}"\n                    fill-opacity="0"\n                    style="\n                        stroke-dasharray: {{strokeDasharray}};\n                        stroke-dashoffset: {{strokeDashoffset}};\n                        transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease\n                    "\n                />\n            </svg>\n            <div class="bell-circle-inner">\n                {{#if hasSlot(\'children\')}}\n                    <slot name="children" />\n                {{/if}}\n            </div>\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
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
        template: '\n        <div class="bell-progress\n            {{#if className}} {{className}}{{/if}}\n            {{#if type}} {{type}}{{/if}}\n            {{#if active}} active{{/if}}\n            {{#if vertical}} bell-progress-vertical{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n\n            <div class="bell-progress-outer">\n                <div class="bell-progress-inner"\n                    style="{{#if vertical}} width: {{strokeWidth}}px;{{/if}}\n                ">\n                    <div class="bell-progress-bg"\n                        style="\n                        {{#if !vertical}}\n                            width: {{percent}}%;\n                            height: {{strokeWidth}}px;\n                        {{else}}\n                            height: {{percent}}%;\n                            width: {{strokeWidth}}px;\n                        {{/if}}\n                        "\n                    >\n                    </div>\n                </div>\n            </div>\n\n            {{#if !hideInfo}}\n            <span class="bell-progress-inner-text">\n                {{#if hasSlot(\'children\')}}\n                    <slot name="children" />\n                {{else}}\n                    {{percent}}%\n                {{/if}}\n            </span>\n            {{/if}}\n\n        </div>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
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

    var SLIDER_TOOLTIP_MARGIN_TOP = 68;
    var SLIDER_TOOLTIP_MARGIN_LEFT = 29;

    var Slider = {
        template: '\n        <div class="bell-slider\n            {{#if className}} {{className}}{{/if}}\n            {{#if disabled}} bell-slider-disabled{{/if}}\n            {{#if type}} bell-slider-{{type}}{{/if}}\n            {{#if dragging}} dragging{{/if}}\n        "{{#if style}} style="{{style}}" {{/if}}\n            on-blur="handleBlur($event)"\n            on-focus="handleFocus($event)"\n            on-touchstart="handleTouchStart($event)"\n            on-touchend="handleTouchEnd($event)"\n            on-touchcancel="handleTouchEnd($event)"\n            on-mousedown="handleMouseDown($event)"\n            on-mouseup="handleMouseUp($event)"\n            on-mouseenter="handleMouseEnter($event)"\n            on-mouseleave="handleMouseLeave($event)"\n        >\n\n            <input type="hidden" disabled="{{disabled ? \' disabled\' : \'\'}}" model="value">\n\n            <div class="bell-slider-bg">\n                <div class="bell-slider-fill"\n                    style="{{fillStyle}}"\n                ></div>\n\n                <div class="bell-slider-thumb"\n                    style="{{thumbStyle}}"\n                    title="\u503C\uFF1A{{value}}\uFF1B\u5360\u6BD4\uFF1A{{percent + \'%\'}}"\n                >\n                </div>\n            </div>\n\n            <div class="bell-tooltip\n                {{#if dragging}} bell-show{{/if}}\n            " style="{{tooltipStyle}}">\n\n                <div ref="tooltip" class="bell-tooltip-popper" data-placement="top">\n                    <div class="bell-tooltip-arrow"></div>\n                    <div class="bell-tooltip-inner">\n                        {{percent}}%\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    ',

        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
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
                var range = me.get('max') - me.get('min');
                var percentNum = range > 0 ? (me.get('value') - me.get('min')) / range * 100 : 0;

                return percentNum > 100 ? 100 : percentNum < 0 ? 0 : percentNum.toFixed(2);
            },
            fillStyle: function fillStyle() {
                return 'width: ' + this.get('percent') + '%';
            },
            tooltipStyle: function tooltipStyle() {
                var me = this;
                if (!me.$refs) {
                    if (me.get('percent')) {
                        return '';
                    }
                    return '';
                }

                return 'left: ' + me.get('percent') + '%;' + 'margin-left: -' + SLIDER_TOOLTIP_MARGIN_LEFT + 'px;' + 'top: -' + SLIDER_TOOLTIP_MARGIN_TOP + 'px;';
            },
            thumbStyle: function thumbStyle() {
                return 'left: ' + this.get('percent') + '%';
            },
            range: function range() {
                return this.get('max') - this.get('min');
            }
        },

        methods: {
            handleTouchStart: function handleTouchStart(event) {
                var me = this;
                if (me.get('disabled')) {
                    return;
                }

                me.setValue(event);

                Yox.dom.on(document, 'touchmove', me.handleTouchMove);
                Yox.dom.on(document, 'touchup', me.handleTouchEnd);
                Yox.dom.on(document, 'touchend', me.handleTouchEnd);
                Yox.dom.on(document, 'touchcancel', me.handleTouchEnd);

                event.prevent();
                me.onDragStart(event);
            },
            handleTouchEnd: function handleTouchEnd(event) {
                var me = this;
                if (me.get('disabled')) {
                    return;
                }
                Yox.dom.off(document, 'touchmove', me.handleTouchMove);
                Yox.dom.off(document, 'touchup', me.handleTouchEnd);
                Yox.dom.off(document, 'touchend', me.handleTouchEnd);
                Yox.dom.off(document, 'touchcancel', me.handleTouchEnd);
                event.prevent();
                me.onDragStop(event);
            },
            handleTouchMove: function handleTouchMove(event) {
                this.onDragUpdate(event);
            },
            handleDragMouseMove: function handleDragMouseMove(event) {
                this.onDragUpdate(event);
            },
            handleMouseDown: function handleMouseDown(event) {
                var me = this;
                if (me.get('disabled')) {
                    return;
                }

                me.setValue(event);

                Yox.dom.on(document, 'mousemove', me.handleDragMouseMove);
                Yox.dom.on(document, 'mouseup', me.handleDragMouseEnd);

                event.prevent();
                me.onDragStart();
            },
            handleDragMouseEnd: function handleDragMouseEnd() {
                var me = this;
                if (me.get('disabled')) {
                    return;
                }
                Yox.dom.off(document, 'mousemove', me.handleDragMouseMove);
                Yox.dom.off(document, 'mouseup', me.handleDragMouseEnd);
                me.onDragStop();
            },
            onDragStart: function onDragStart() {
                this.set({
                    dragging: 1,
                    active: 1
                });
                this.fire('dragStart');
            },
            onDragStop: function onDragStop() {
                this.set({
                    dragging: 0,
                    active: 0
                });
                this.fire('dragStop');
            },
            onDragUpdate: function onDragUpdate(event) {
                var me = this;
                if (me.get('draging')) {
                    return;
                }
                me.set('draging', 1);

                window.requestAnimationFrame(function () {
                    me.set('draging', 0);
                    if (!me.get('disabled')) {
                        me.setValue(event);
                    }
                });
            },
            handleMouseUp: function handleMouseUp() {
                if (this.get('disabled')) {
                    return;
                }
                this.set('active', 0);
            },
            handleMouseEnter: function handleMouseEnter() {
                if (this.get('disabled')) {
                    return;
                }
                this.set('hover', 1);
            },
            handleMouseLeave: function handleMouseLeave() {
                if (this.get('disabled')) {
                    return;
                }
                this.set('hover', 0);
            },
            setValue: function setValue(event) {

                event = event.originalEvent;
                var clientX = event.touches ? event.touches[0].clientX : event.clientX;

                var me = this;
                var element = me.$el;
                var oldValue = me.get('value');
                var elementLeft = element.getBoundingClientRect().left;
                var elementWidth = element.offsetWidth;
                var min = me.get('min');

                var value = 0;
                value = elementWidth && (clientX - elementLeft) / elementWidth * me.get('range');
                value = Math.round(value / me.get('step')) * me.get('step') + min;
                value = parseFloat(value.toFixed(5));

                value = value > me.get('max') ? me.get('max') : value < min ? min : value;

                if (value !== oldValue) {
                    me.set({
                        value: value
                    });
                    me.fire('change', {
                        value: value,
                        oldValue: oldValue
                    });
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

    var Rate = {
        template: '\n        <div class="bell-rate\n            {{#if className}} {{className}}{{/if}}\n            {{#if readOnly}} bell-rate-readonly{{/if}}\n            {{#if type}} bell-rate-{{type}}{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}} on-mouseleave="handleLeave()">\n\n            <input type="hidden" model="value">\n            {{#each 1 => count}}\n                <span class="bell-icon bell-rate-star-full\n                    {{#if activeValue - this >= 1}} active{{/if}}\n                " on-mousemove="handleMove($event, this)"\n                on-click="handleClick($event, this)"\n                >\n                    {{#if half}}\n                        <span type="half"\n                        class="bell-icon bell-rate-star-content\n                        {{#if activeValue - this == 0.5}} active{{/if}}">\n                        </span>\n                    {{/if}}\n                </span>\n            {{/each}}\n\n            {{#if showTexts}}\n                <span class="bell-rate-text">\n                    {{#if hasSlot(\'children\')}}\n                        <slot name="children" />\n                    {{else}}\n                        {{value}} \u661F\n                    {{/if}}\n                </span>\n            {{/if}}\n\n        </div>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            count: {
                type: 'number',
                value: 5
            },
            value: {
                type: 'numeric'
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
            type: {
                type: 'string'
            }
        },

        data: function data() {
            return {
                hoverValue: -1
            };
        },


        computed: {
            activeValue: function activeValue() {
                var hoverValue = this.get('hoverValue');
                return hoverValue < 0 ? this.get('value') : hoverValue;
            }
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
                index += 1;

                if (me.get('readOnly')) {
                    return;
                }
                event = event.originalEvent;
                var isHalf = event && event.target.getAttribute('type') == 'half';

                if (isHalf) {
                    index -= 0.5;
                }

                me.set({
                    hoverValue: index
                });
            },
            handleLeave: function handleLeave() {
                var me = this;
                if (me.get('readOnly')) {
                    return;
                }

                me.set({
                    hoverValue: me.get('value') >= 0 ? me.get('value') : -1
                });
            },
            handleClick: function handleClick(event, index) {
                var me = this;
                if (me.get('readOnly')) {
                    return;
                }

                index += 1;
                event = event.originalEvent;

                var isHalf = event && event.target.getAttribute('type') == 'half';
                if (isHalf) {
                    index -= 0.5;
                }
                me.set({
                    value: index
                });
                me.fire('change', {
                    value: index
                });
            }
        }
    };

    var Tabs = {
        template: '\n        <div class="bell-tabs\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n\n            <div class="bell-tabs-labels">\n                {{#each tabLabels}}\n                    {{#if label}}\n                        <span class="bell-tabs-label\n                            {{#if value == name}} bell-active{{/if}}\n                        " on-click="clickTabLabel(this)">\n                            {{label}}\n                        </span>\n                    {{/if}}\n                {{/each}}\n            </div>\n\n            <div class="bell-tabs-contents" style="transform: translateX({{translateStyle}});">\n                {{#if hasSlot(\'children\')}}\n                    <slot name="children" />\n                {{/if}}\n            </div>\n        </div>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
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
        }
    };

    var TabPanel = {
        template: '\n        <div class="bell-tabs-panel\n            {{#if className}} {{className}}{{/if}}\n            {{#if isActive}} active{{/if}}\n        "{{#if style}} style="{{style}}"{{/if}}>\n\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n\n        </div>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
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
                    });            }
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

    var TimeLine = {
        template: '\n        <ul class="bell-time-line\n            {{#if pending}} bell-time-line-padding{{/if}}\n        ">\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </ul>\n    ',
        propTypes: {
            pending: {
                type: 'boolean'
            }
        }
    };

    var TimeLineItem = {
        template: '\n        <li class="bell-time-line-item">\n            <div class="bell-time-line-tail"></div>\n            {{#if hasSlot(\'dot\')}}\n                <slot name="dot" />\n            {{else}}\n                <div class="bell-time-line-dot"\n                    style="color: {{color}}"\n                ></div>\n            {{/if}}\n            <div class="bell-time-line-content">\n                {{#if hasSlot(\'children\')}}\n                    <slot name="children" />\n                {{/if}}\n            </div>\n        </li>\n    ',
        propTypes: {
            color: {
                type: 'string',
                value: '#348EED'
            }
        }

    };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function type(value) {
      return Object.prototype.toString.call(value).toLowerCase().slice(8, -1);
    }

    function checkInteger(rule, value) {
      if (type(value) !== 'number' || value % 1 !== 0) {
        return 'type';
      }

      if (rule.hasOwnProperty('min') && value < rule.min) {
        return 'min';
      }

      if (rule.hasOwnProperty('max') && value > rule.max) {
        return 'max';
      }
    }

    function checkNumber(rule, value) {
      if (type(value) !== 'number' || isNaN(value)) {
        return 'type';
      }

      if (rule.hasOwnProperty('min') && value < rule.min) {
        return 'min';
      }

      if (rule.hasOwnProperty('max') && value > rule.max) {
        return 'max';
      }
    }

    function checkString(rule, value) {
      if (value == '') {
        if (rule.empty === true) {
          return;
        } else {
          return 'empty';
        }
      }
      if (type(value) !== 'string') {
        return 'type';
      }

      if (rule.hasOwnProperty('min') && value.length < rule.min) {
        return 'min';
      }
      if (rule.hasOwnProperty('max') && value.length > rule.max) {
        return 'max';
      }

      if (rule.hasOwnProperty('pattern') && !rule.pattern.test(value)) {
        return 'pattern';
      }
    }

    function checkBoolean(rule, value) {
      if (type(value) !== 'boolean') {
        return 'type';
      }
    }

    function checkEnum(rule, value) {
      if (rule.values.indexOf(value) < 0) {
        return 'type';
      }
    }

    function checkArray(rule, value) {
      if (!value || type(value) !== 'array') {
        return 'type';
      }

      var length = value.length;


      if (rule.hasOwnProperty('min') && length < rule.min) {
        return 'min';
      }

      if (rule.hasOwnProperty('max') && length < rule.max) {
        return 'max';
      }
      var itemType = rule.itemType;


      if (!itemType) {
        return;
      }
      for (var i = 0; i < length; i++) {
        if (type(value[i]) !== itemType) {
          return 'itemType';
        }
      }
    }

    function checkObject(rule, value) {
      if (!value || type(value) !== 'object') {
        return 'type';
      }
    }

    var Validator = function () {
      function Validator(translate) {
        _classCallCheck(this, Validator);

        this.rules = {
          int: checkInteger,
          integer: checkInteger,
          number: checkNumber,
          string: checkString,
          bool: checkBoolean,
          boolean: checkBoolean,
          enum: checkEnum,
          array: checkArray,
          object: checkObject
        };

        this.messages = {};
        this.translate = translate;
      }

      Validator.prototype.validate = function validate(data, rules, messages) {

        var errors = {};

        for (var key in rules) {

          var value = data[key];
          var rule = rules[key];

          switch (type(rule)) {

            case 'string':

              rule = {
                type: rule
              };

              break;

            case 'array':
              rule = {
                type: 'enum',
                value: rule
              };

              break;

            case 'regexp':

              rule = {
                type: 'string',
                pattern: rule
              };

              break;

          }

          if (type(rule) != 'object' || !rule.type) {
            throw new TypeError(key + '\'s rule is not found.');
          }

          var errorType;
          if (data.hasOwnProperty(key)) {
            errorType = this.rules[rule.type](rule, value, data);
          } else {
            if (rule.required !== false) {
              errorType = 'required';
            } else {
              continue;
            }
          }

          if (errorType) {
            var message = messages && messages[key] && messages[key][errorType];
            if (type(message) !== 'string') {
              message = this.messages[rule.type] && this.messages[rule.type][errorType];
            }

            if (type(message) === 'string') {
              errors[key] = message;
            } else if (this.translate) {
              errors[key] = this.translate(key, value, errorType, rule);
            } else {
              errors[key] = errorType;
            }
          }
        }

        if (Object.keys(errors).length > 0) {
          return errors;
        }
      };

      return Validator;
    }();

    var validate = {
      Validator: Validator,
      checkInteger: checkInteger,
      checkNumber: checkNumber,
      checkString: checkString,
      checkBoolean: checkBoolean,
      checkEnum: checkEnum,
      checkObject: checkObject,
      checkArray: checkArray
    };
    var validate_1 = validate.Validator;

    var Form = {
        template: '\n        <div class="bell-form\n            {{#if className}} {{className}}{{/if}}\n            {{#if inline}} bell-form-inline{{/if}}\n        "{{#if style}} {{style}}{{/if}}>\n            {{#if hasSlot(\'children\')}}\n                <slot name="children" />\n            {{/if}}\n        </div>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            value: {
                type: 'object'
            },
            rules: {
                type: 'object'
            },
            messages: {
                type: 'object'
            },
            inline: {
                type: 'boolean'
            },
            labelPosition: {
                type: ['left', 'right', 'top'],
                value: 'left'
            },
            labelWidth: {
                type: 'number'
            },
            showMessage: {
                type: 'boolean'
            }
        },
        methods: {
            validate: function validate$$1(callback) {
                var me = this;
                var validator = new validate_1(function (rule, value, errorType, messgae) {
                    return errorType;
                });
                var errors = validator.validate(me.get('value'), me.get('rules'), me.get('messages'));
                var isValid = !errors;
                if (isValid) {
                    callback(true);
                } else {
                    callback(false, errors);
                }
            }
        },
        afterMount: function afterMount() {
            var me = this;
            me.fire('setRules', {
                rules: me.get('rules'),
                value: me.get('value')
            }, true);
        }
    };

    var FormItem = {
        template: '\n        <div class="bell-form-item\n            {{#if className}} {{className}}{{/if}}\n        "{{#if style}} {{style}}{{/if}}>\n            {{#if label}}\n            <label class="bell-form-item-label" style="width: {{labelWidth}}px;">\n                {{label}}\n            </label>\n            {{/if}}\n            <div \n                class="bell-form-item-content" \n                {{#if label}}style="padding-left: {{labelWidth}}px;"{{/if}}\n            >\n                {{#if hasSlot(\'children\')}}\n                    <slot name="children" />\n                {{/if}}\n            </div>\n        </div>\n    ',
        propTypes: {
            className: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            prop: {
                type: 'string'
            },
            label: {
                type: 'string'
            },
            labelWidth: {
                type: 'number',
                value: 80
            },
            required: {
                type: 'boolean'
            },
            rules: {
                type: 'number'
            },
            errorMsg: {
                type: 'string'
            }
        },

        data: function data() {
            return {
                rules: [],
                defaultValue: ''
            };
        },

        events: {
            setRules: function setRules(event, data) {
                var me = this;
                var prop = me.get('prop');
                var defaultValue = data.value && data.value[prop];
                var rules = data.rules && data.rules[prop];
                me.set({
                    rules: rules,
                    defaultValue: defaultValue
                });
            }
        }
    };

    var _template$propTypes$m;

    var Dialog = (_template$propTypes$m = {

      template: '\n    <div class="bell-dialog\n      {{#if className}} {{className}}{{/if}}\n    " style="{{#if !open}}display: none;{{/if}}{{#if style}}{{style}}{{/if}}">\n      <div class="bell-dialog-content">\n        \n        {{#if hasSlot(\'title\')}}\n        <div class="bell-dialog-title">\n          <slot name="title" />\n        </div>\n        {{/if}}\n\n        {{#if hasSlot(\'children\')}}\n        <div class="bell-dialog-body">\n          <slot name="children" />\n        </div>\n        {{/if}}\n\n        {{#if hasSlot(\'actions\')}}\n        <div class="bell-dialog-actions">\n          <slot name="actions" />\n        </div>\n        {{/if}}\n\n      </div>\n      <div class="bell-dialog-mask" on-click="maskClick()"></div>\n    </div>\n  ',

      propTypes: {
        className: {
          type: 'string'
        },
        style: {
          type: 'string'
        },
        open: {
          type: ['string', 'number', 'boolean']
        }
      },

      methods: {
        maskClick: function maskClick() {
          this.fire('maskClick');
        }
      },

      watchers: {
        open: function open(isOpen) {
          this.setStatus();
        }
      }

    }, _template$propTypes$m['methods'] = {
      setStatus: function setStatus() {
        var me = this;
        var element = me.$el;
        var contentElement = element.querySelector('.bell-dialog-content');
        if (me.get('open')) {
          contentElement.style.marginTop = '-250px';
          element.style.display = 'flex';
          setTimeout(function () {
            contentElement.style.marginTop = 0;
          }, 300);
        } else {
          contentElement.style.marginTop = '-250px';
          setTimeout(function () {
            element.style.display = 'none';
          }, 300);
        }
      }
    }, _template$propTypes$m.afterMount = function afterMount() {
      this.setStatus();
      document.body.appendChild(this.$el);
    }, _template$propTypes$m);

    var id = 0;

    var createMessage = function createMessage(_data) {

        var namespace = 'bell-message-' + id++;
        var body = document.body;
        var element = document.createElement('div');
        element.setAttribute('id', namespace);
        body.appendChild(element);

        var instance = new Yox({

            el: '#' + namespace,

            replace: true,

            template: '\n            <div class="bell-message bell-message-{{type}}\n                {{#if isShow}} bell-show{{/if}}\n            " style="margin-left: -{{marginLeft / 2}}px;\n                {{#if top}} top: {{top}}px;{{/if}}\n            ">\n                <Alert type="{{type}}" closeText="{{closeText}}" center="{{center}}" showIcon="{{showIcon}}" closable="{{closable}}" close="{{close}}">\n                    {{content}}\n                </Alert>\n            </div>\n        ',

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
        body.appendChild(element);

        var instance = new Yox({

            el: '#' + namespace,

            replace: true,

            template: '\n            <div class="bell-notice bell-notice-{{type}}\n                {{#if isShow}} bell-show{{/if}}\n            " style="width: {{width}}px;\n                {{#if right}} right: {{right}}px;{{/if}}\n            ">\n\n                <div class="bell-notice-title">\n                    {{title}}\n                </div>\n\n                <div class="bell-notice-desc">\n                    {{content}}\n                </div>\n\n                {{#if duration == 0}}\n                    <i class="bell-icon bell-notice-close bell-icon-ios-close-empty" on-click="close()"></i>\n                {{/if}}\n\n            </div>\n        ',

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
    body.appendChild(element);

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
        body.appendChild(element);

        var instance = new Yox({
            el: '#' + namespace,
            replace: true,
            template: '\n            <div class="bell-msg-alert-wrapper\n            {{#if isHidden}} bell-msg-alert-hidden{{/if}}\n            ">\n                <div class="bell-msg-alert"{{#if width}} style="width: {{width}}px;"{{/if}}>\n                    {{#if closable}}\n                    <div class="bell-msg-alert-close" on-click="hide()">\n                        <i class="bell-icon bell-icon-ios-close-empty"></i>\n                    </div>\n                    {{/if}}\n\n                    {{#if title}}\n                    <div class="bell-msg-alert-title bell-text-main bell-text-medium">\n                        {{{title}}}\n                    </div>\n                    {{/if}}\n\n                    <div class="bell-msg-alert-desc bell-text-sub bell-text-small">\n                        {{{content}}}\n                    </div>\n\n                    <div class="bell-msg-alert-footer">\n                        <Button type="{{button.type}}" on-click="hide()">\n                            {{button.text}}\n                        </Button>\n                    </div>\n                </div>\n                <div class="bell-msg-mask" on-click="maskClick()"></div>\n            </div>\n        ',
            data: function data() {
                return {
                    isHidden: true,
                    closable: _data.closable,
                    title: _data.title || '温馨提示',
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
        body.appendChild(element);

        var instance = new Yox({
            el: '#' + namespace,
            replace: true,
            template: '\n            <div class="bell-msg-confirm-wrapper\n            {{#if isHidden}} bell-msg-confirm-hidden{{/if}}\n            ">\n                <div class="bell-msg-confirm"{{#if width}} style="width: {{width}}px;{{/if}}">\n                    {{#if closable}}\n                    <div class="bell-msg-confirm-close" on-click="hide()">\n                        <i class="bell-icon bell-icon-ios-close-empty"></i>\n                    </div>\n                    {{/if}}\n\n                    {{#if title}}\n                    <div class="bell-msg-confirm-title bell-text-main bell-text-medium">\n                        {{{title}}}\n                    </div>\n                    {{/if}}\n\n                    <div class="bell-msg-confirm-desc bell-text-sub bell-text-small">\n                        {{{content}}}\n                    </div>\n                    {{#if buttons}}\n                    <div class="bell-msg-confirm-footer">\n                        {{#each buttons:index}}\n                        <Button type="{{type}}" on-click="buttonClick(index)">\n                            {{text}}\n                        </Button>\n                        {{/each}}\n                    </div>\n                    {{/if}}\n                </div>\n                <div class="bell-msg-mask" on-click="maskClick()"></div>\n            </div>\n        ',
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
    body$1.appendChild(element$1);

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
        body.appendChild(element);

        instance = new Yox({

            el: '#' + namespace,

            replace: true,

            props: {
                percent: data.percent,
                height: data.height,
                type: data.type,
                color: data.color
            },

            template: '\n            <div class="bell-loading-bar\n                {{#if type}} bell-loading-bar-{{type}}{{/if}}"\n            >\n                <div class="bell-loading-bar-inner">\n                    <div class="bell-loading-bar-bg"\n                        style="\n                            width: {{percent}}%;\n                            height: {{height}}px;\n                            {{#if color}} color: {{color}};{{/if}}\n                        "\n                    >\n                    </div>\n                </div>\n            </div>\n        ',

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
    body$2.appendChild(element$2);

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
      Drawer: Drawer,

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
      Option: Option,
      Page: Page,
      Date: Date$1,
      DateRange: DateRange,
      DateWeek: DateWeek,
      DateMonth: DateMonth,
      DateYear: DateYear,
      DatePicker: DatePicker,
      Upload: Upload,

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
      Divider: Divider,
      Circle: Circle,
      Progress: Progress,
      Slider: Slider,
      Tag: Tag,
      Rate: Rate,
      Tabs: Tabs,
      TabPanel: TabPanel,

      Transfer: Transfer,
      TimeLine: TimeLine,
      TimeLineItem: TimeLineItem,
      Form: Form,
      FormItem: FormItem,
      Dialog: Dialog

    });

})));
