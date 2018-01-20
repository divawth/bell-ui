(function (global, factory) {
	(factory());
}(this, (function () { 'use strict';

var Header = {
    template: "\n        <div class=\"bell-header\">\n            {{$children}}\n        </div>\n    "
};

var Sider = {
    template: "\n        <div class=\"bell-sider\">\n            {{$children}}\n        </div>\n    "
};

var Content = {
    template: "\n        <div class=\"bell-content\">\n            {{$children}}\n        </div>\n    "
};

var Footer = {
    template: "\n        <div class=\"bell-footer\">\n            {{$children}}\n        </div>\n    "
};

var Layout = {
    template: '\n        <div class="bell-layout{{#if hasSider}} bell-has-sider{{/if}}">\n            {{$children}}\n        </div>\n    ',

    data: function data() {
        return {
            hasSider: false
        };
    },

    afterMount: function afterMount(argument) {
        var me = this;
        if (me.$options.props.$children.length) {
            me.$options.props.$children.some(function (child) {
                if (child.tag == 'Sider') {
                    me.set({
                        hasSider: true
                    });
                }
            });
        }
    }
};

var Menu = {
    template: '\n        <div class="bell-menu">\n            {{$children}}\n        </div>\n    ',

    propTypes: {
        activeName: {
            type: 'string'
        }
    },

    events: {
        setActiveMenu: function setActiveMenu(event, data) {
            this.updateChild(data.name);
        }
    },

    methods: {
        updateChild: function updateChild(activeName) {
            var me = this;
            me.$children.some(function (child) {
                if (child.$options.props.name == activeName) {
                    $(child.$el).addClass('bell-active');
                } else {
                    $(child.$el).removeClass('bell-active');
                }
            });
        }
    },

    watchers: {
        activeName: function activeName(_activeName) {
            this.updateChild(_activeName);
        }
    }
};

var MenuItem = {
    template: '\n        <div class="bell-menu-item" data-name="{{name}}" on-click="handleClick(name)">\n            {{$children}}\n        </div>\n    ',

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

    methods: {
        handleClick: function handleClick(name) {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            if (me.get('hash')) {
                location.href = me.get('hash');
            }

            me.fire('setActiveMenu', {
                name: name
            });
        }
    }
};

var Submenu = {
    template: "\n        <div class=\"bell-sub-menu\">\n            {{$children}}\n        </div>\n    "
};

var Breadcrumb = {
    template: "\n        <div class=\"bell-bread-crumb\">\n            {{$children}}\n        </div>\n    "
};

var BreadcrumbItem = {
    template: '\n        <span class="bell-bread-crumb-item">\n            <a {{#if to}}href="{{to}}"{{/if}} class="bell-bread-crumb-link">\n                {{$children}}\n            </a>\n            <span class="bell-bread-crumb-gap">\n                {{#if separator}}\n                    {{separator}}\n                {{else}}\n                    /\n                {{/if}}\n            </span>\n        </span>\n    ',

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
    template: '\n<div class="bell-button\n    {{#if type}} bell-{{type}}{{/if}}\n    {{#if shape}} bell-{{shape}}{{/if}}\n    {{#if size}} bell-{{size}}{{/if}}\n    {{#if long}} bell-long{{/if}}\n    {{#if disabled}} bell-disabled{{/if}}\n    {{#if className}} {{className}}{{/if}}\n" on-click="click">\n\n    {{#if icon}}\n        <i class="bell-icon {{icon}}"></i>\n    {{/if}}\n\n    <span>\n        {{#if label}}\n            {{label}}\n        {{else}}\n            {{$children}}\n        {{/if}}\n    </span>\n</div>\n    ',
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

var Input = {
    template: '\n<div class="bell-input-wrapper"\n    {{#if style}} style="{{style}}"{{/if}}\n>\n    {{#if type != TEXT_TYPE_TEXTAREA}}\n        {{#if !label}}\n\n        {{else}}\n            <span class="bell-input-label" on-click="click">\n                {{label}}\n            </span>\n        {{/if}}\n\n        <input type="text" class="bell-input{{#if size}} bell-input-{{size}}{{/if}}"\n        {{#if placeholder}} placeholder="{{placeholder}}"{{/if}}\n        {{#if disabled}}disabled="disabled"{{/if}}\n        model="value"\n        ></input>\n\n    {{else}}\n        <textarea class="bell-textarea"\n            style="height: {{#if rows}}{{rows * 25}}{{else}}50{{/if}}px"\n            {{#if rows}} rows="{{rows}}"{{/if}}\n            {{#if placeholder}} placeholder="{{placeholder}}" {{if}}\n            {{#if disabled}}disabled="disabled"{{/if}}\n            model="value"\n        >\n        </textarea>\n    {{/if}}\n\n</div>\n    ',

    propTypes: {
        placeholder: {
            type: 'string'
        },
        style: {
            type: 'string'
        },
        value: {
            type: 'string'
        },
        size: {
            type: 'string'
        },
        icon: {
            type: 'string'
        },
        label: {
            type: 'string'
        },
        type: {
            type: 'string'
        },
        rows: {
            type: 'string'
        },
        disabled: {
            type: 'string'
        }
    },
    data: function data() {
        return {
            TEXT_TYPE_INPUT: 'input',
            TEXT_TYPE_TEXTAREA: 'textarea'
        };
    },

    watchers: {
        value: function value(_value) {
            console.log(_value);
        }
    },

    afterMount: function afterMount() {}
};

var Radio = {
    template: '\n<label class="bell-radio\n{{#if isChecked}} bell-active{{/if}}\n{{#if isDisabled}} bell-radio-disabled{{/if}}\n">\n    <span class="bell-radio-wrapper" on-click="click()">\n        <span class="bell-redio-inner"></span>\n        <input class="bell-radio-input" type="radio" value="{{value}}" />\n    </span>\n\n    <span class="bell-radio-label">\n        {{#if label}}\n            {{label}}\n        {{else}}\n            {{$children}}\n        {{/if}}\n    </span>\n</label>\n    ',

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
    template: '\n<div class="\n{{#if button}}bell-radio-button{{else}}bell-radio-group-wrapper{{/if}}\n{{#if type}} bell-radio-group-{{type}}{{/if}}\n{{#if size}} bell-radio-group-{{size}}{{/if}}\n{{#if disabled}} bell-radio-group-disabled{{/if}}\n{{#if vertical}} bell-radio-vertical{{/if}}\n">\n    {{$children}}\n</div>\n    ',
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
    template: '\n<label class="bell-checkbox\n{{#if disabled}} bell-checkbox-disabled{{/if}}\n{{#if type}} bell-checkbox-{{type}}{{/if}}\n{{#if size}} bell-checkbox-{{size}}{{/if}}\n{{#if isChecked}} bell-active{{/if}}\n{{#if indeterminate}} bell-checkbox-indeterminate{{/if}}\n">\n    <span class="bell-checkbox-wrapper{{#if isChecked}} bell-active{{/if}}" on-click="click()">\n        <span class="bell-redio-inner"></span>\n        <input class="bell-checkbox-input" type="checkbox" value="{{value}}" />\n    </span>\n\n    <span class="bell-checkbox-label">\n        {{#if label}}\n            {{label}}\n        {{else}}\n            {{$children}}\n        {{/if}}\n    </span>\n</label>\n    ',

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
    template: '\n<div class="\nbell-checkbox-group\n{{#if type}} bell-checkbox-group-{{type}}{{/if}}\n{{#if size}} bell-checkbox-group-{{size}}{{/if}}\n{{#if vertical}} bell-checkbox-vertical{{/if}}\n">\n    {{$children}}\n</div>\n    ',
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
    template: '\n<div class="bell-page\n{{#if size}} bell-page-{{size}}{{/if}}\n{{#if className}} {{className}}{{/if}}\n">\n{{#partial pageCenter}}\n    {{#if current - 3 > 1}}\n        <li class="bell-page-item bell-page-item-prev" on-click="fastPrev()">\n            <i class="bell-icon bell-icon-ios-arrow-left"></i>\n            <i class="bell-icon bell-icon-ios-arrow-left"></i>\n        </li>\n    {{/if}}\n\n    {{#if current - 2 > 1}}\n        <li class="bell-page-item" on-click="changePage(current - 2)">\n            {{ current - 2 }}\n        </li>\n    {{/if}}\n\n    {{#if current - 1 > 1}}\n        <li class="bell-page-item" on-click="changePage(current - 1)">\n            {{ current - 1 }}\n        </li>\n    {{/if}}\n\n    {{#if current != 1 && current != count}}\n        <li class="bell-page-item bell-active">\n            {{ current }}\n        </li>\n    {{/if}}\n\n    {{#if current + 1 < count}}\n        <li class="bell-page-item" on-click="changePage(current + 1)">\n            {{ current + 1 }}\n        </li>\n    {{/if}}\n\n    {{#if current + 2 < count}}\n        <li class="bell-page-item" on-click="changePage(current + 2)">\n            <a>{{ current + 2 }}</a>\n        </li>\n    {{/if}}\n\n    {{#if current + 3 < count}}\n        <li class="bell-page-item bell-page-item-next" on-click="fastNext()">\n            <i class="bell-icon bell-icon-ios-arrow-right"></i>\n            <i class="bell-icon bell-icon-ios-arrow-right"></i>\n        </li>\n    {{/if}}\n{{/partial}}\n\n    {{#if showTotal}}\n    <span class="bell-page-total">\n        \u5171 {{total}} \u6761\n    </span>\n    {{/if}}\n\n    {{#if showSizer}}\n    <div class="bell-page-select">\n        <Select list="{{pageList}}"\n            model="pageSize"\n            size="{{size}}"\n            placement="{{placement}}"\n        />\n    </div>\n    {{/if}}\n\n    {{#if !simple}}\n    <ul class="bell-page-list">\n\n        <li class="bell-page-item bell-page-prev{{#if current <= 1}} bell-disabled{{/if}}" on-click="prev()">\n            <i class="bell-icon bell-icon-ios-arrow-left"></i>\n        </li>\n\n        <li class="bell-page-item{{#if current == 1}} bell-active{{/if}}" on-click="changePage(1)">\n            1\n        </li>\n\n        {{#if count > 1}}\n            {{> pageCenter}}\n            <li class="bell-page-item{{#if current == count}} bell-active{{/if}}" on-click="changePage(count)">\n                {{count}}\n            </li>\n        {{/if}}\n\n        <li class="bell-page-item bell-page-next {{count}}{{#if current >= count}} bell-disabled{{/if}}" on-click="next()">\n            <i class="bell-icon bell-icon-ios-arrow-right"></i>\n        </li>\n    </ul>\n    {{else}}\n        <div class="bell-page-simple">\n            <span class="bell-page-item bell-page-prev{{#if current <= 1}} bell-disabled{{/if}}" on-click="prev()">\n                <i class="bell-icon bell-icon-ios-arrow-left"></i>\n            </span>\n\n            <div class="bell-page-input">\n                <Input model="currentPage"\n                    size="{{size}}"\n                ></Input>\n            </div>\n\n            {{\'/\'}}\n\n            <span class="bell-page-item{{#if current == count}} bell-active{{/if}}" on-click="changePage(count)">\n                {{count}}\n            </span>\n\n            <span class="bell-page-item bell-page-next {{count}}{{#if current >= count}} bell-disabled{{/if}}" on-click="next()">\n                <i class="bell-icon bell-icon-ios-arrow-right"></i>\n            </span>\n        </div>\n    {{/if}}\n\n    {{#if showElevator}}\n    <div class="bell-page-elevator">\n        \u8DF3\u81F3\n        <div class="bell-page-input">\n            <Input placeholder="\u8BF7\u8F93\u5165..."\n                model="currentPage"\n                size="{{size}}"\n            ></Input>\n        </div>\n        \u9875\n    </div>\n    {{/if}}\n</div>\n    ',

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
            type: 'string'
        },
        pageSizeOpts: {
            type: 'array'
        },
        showElevator: {
            type: 'string'
        },
        showTotal: {
            type: 'string'
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
    template: '\n<div class="bell-alert\n{{#if type}} bell-alert-{{type}}{{/if}}\n{{#if hasDesc}} bell-alert-with-desc{{/if}}\n{{#if showIcon}} bell-alert-with-icon{{/if}}\n{{#if center}} bell-alert-center{{/if}}\n">\n    {{#if showIcon}}\n    <span class="bell-alert-icon">\n        <i class="bell-icon\n        {{#if type == \'info\'}} bell-icon-information-circled\n        {{else if type == \'success\'}} bell-icon-checkmark-circled\n        {{else if type == \'warning\'}} bell-icon-android-alert\n        {{else if type == \'error\'}} bell-icon-close-circled\n        {{/if}}\n        "></i>\n    </span>\n    {{/if}}\n\n    <span class="bell-alert-content" style="padding-right: {{paddingRight}}px">\n        {{$children}}\n    </span>\n\n    {{#if closable}}\n    <span ref="close" class="bell-alert-close" on-click="close()">\n        {{#if closeText}}\n            {{closeText}}\n        {{else}}\n            <i class="bell-icon bell-icon-ios-close-empty"></i>\n        {{/if}}\n    </span>\n    {{/if}}\n</div>\n    ',

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

    afterMount: function afterMount() {
        var me = this;
        var children = me.$options.props.$children;
        if (Yox.is.array(children) && me.$options.props.$children.length) {
            me.$options.props.$children.some(function (child) {
                if (child.tag == 'Desc') {
                    me.set({
                        hasDesc: true
                    });
                }
            });
        }
        if (me.get('closable')) {
            me.set({
                paddingRight: me.$refs.close.clientWidth
            });
        }
    },

    beforeDestroy: function beforeDestroy() {}
};

var Desc = {
    template: "\n        <div class=\"bell-alert-desc\">\n            {{$children}}\n        </div>\n    "
};

var Spinner = {
    template: '\n<div class="bell-spinner\n{{#if size}} bell-spinner-{{size}}{{/if}}\n{{#if fix}} bell-spinner-{{fix}}{{/if}}\n">\n    {{#if text && type != \'circle\'}}\n        <span class="bell-spinner-text">\n            {{text}}\n        </span>\n    {{else}}\n        <div class="bell-spinner-list">\n            {{#if type == \'circle\'}}\n                <i class="bell-spinner-icon bell-icon bell-icon-load-c" style="font-size: 18px;"></i>\n                <span class="bell-spinner-text">\n                    {{text}}\n                </span>\n            {{else}}\n                <span class="bell-spinner-item"></span>\n                <span class="bell-spinner-item"></span>\n                <span class="bell-spinner-item"></span>\n                <span class="bell-spinner-item"></span>\n                <span class="bell-spinner-item"></span>\n            {{/if}}\n        </div>\n    {{/if}}\n</div>\n    ',
    propTypes: {
        size: {
            type: 'string'
        },
        text: {
            type: 'string'
        },
        fix: {
            type: 'string'
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
    template: '\n<div class="bell-avatar\n{{#if className}} {{className}}{{/if}}\n{{#if size}} bell-avatar-{{size}}{{/if}}\n{{#if shape}} bell-avatar-{{shape}}{{/if}}\n" style="font-size: {{fontSize}}px;\nbackground-color: {{backgroundColor}};\ncolor: {{color}}">\n    {{#if src}}\n        <img ondragstart="return false" src="{{src}}" />\n    {{else}}\n        {{$children}}\n    {{/if}}\n</div>\n    ',
    propTypes: {
        shape: {
            type: 'string'
        },
        src: {
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
    template: '\n<div class="bell-badge\n{{#if type}} bell-badge-{{type}}{{/if}}\n{{#if className}} {{className}}{{/if}}\n">\n    {{$children}}\n    {{#if !hidden}}\n        {{#if dot}}\n            <span class="bell-badge-dot"></span>\n        {{else}}\n            <span class="bell-badge-count{{#if !$children}} bell-badge-count-alone{{/if}}">\n                {{getText()}}\n            </span>\n        {{/if}}\n    {{/if}}\n</div>\n    ',
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
        getText: function getText() {
            var me = this;
            var maxCount = Yox.is.number(+me.get('maxCount')) ? +me.get('maxCount') : '';
            var count = Yox.is.number(+me.get('count')) ? +me.get('count') : '';

            return maxCount < count ? maxCount + '+' : me.get('count');
        }
    }
};

var Card = {
    template: "\n        <div class=\"bell-card\">\n            {{$children}}\n        </div>\n    "
};

var CardHeader = {
    template: '\n<div class="bell-card-header">\n\n    {{$children}}\n\n    <div class="bell-card-header-detail">\n        {{#if title}}\n        <div class="bell-card-header-title\n        {{#if titleClass}} {{titleClass}}{{/if}}\n        ">\n            {{title}}\n        </div>\n        {{/if}}\n\n        {{#if subTitle}}\n        <div class="bell-card-header-sub-title\n        {{#if subTitleClass}} {{subTitleClass}}{{/if}}\n        ">\n            {{subTitle}}\n        </div>\n        {{/if}}\n    </div>\n</div>\n    ',

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
    template: '\n<div class="bell-card-media">\n\n    {{$children}}\n\n    <div class="bell-card-media-detail">\n        {{#if title}}\n        <div class="bell-card-media-title\n        {{#if titleClass}} {{titleClass}}{{/if}}\n        ">\n            {{title}}\n        </div>\n        {{/if}}\n        {{#if subTitle}}\n        <div class="bell-card-media-sub-title\n        {{#if subTitleClass}} {{subTitleClass}}{{/if}}\n        ">\n            {{subTitle}}\n        </div>\n        {{/if}}\n    </div>\n</div>\n    ',

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
    template: '\n<div class="bell-card-title">\n\n    {{$children}}\n\n    {{#if title}}\n    <div class="bell-card-title-text\n    {{#if titleClass}} {{titleClass}}{{/if}}\n    ">\n        {{title}}\n    </div>\n    {{/if}}\n\n    {{#if subTitle}}\n    <div class="bell-card-sub-title\n    {{#if subTitleClass}} {{subTitleClass}}{{/if}}\n    ">\n        {{subTitle}}\n    </div>\n    {{/if}}\n</div>\n    ',

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
    template: "\n        <div class=\"bell-card-text\">\n            {{$children}}\n        </div>\n    "
};

var CardActions = {
    template: "\n        <div class=\"bell-card-actions\">\n            {{$children}}\n        </div>\n    "
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

Yox.prototype.$message = {
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

Yox.prototype.$notice = {
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
        console.log('destroy');
    }
};

/*
 * @file 主模块
 * @author wangtianhua
 */

Yox.component({
    Layout: Layout,
    Header: Header,
    Sider: Sider,
    Content: Content,
    Footer: Footer,
    Menu: Menu,
    MenuItem: MenuItem,
    Submenu: Submenu,

    Breadcrumb: Breadcrumb,
    BreadcrumbItem: BreadcrumbItem,

    Button: Button,
    Input: Input,
    Radio: Radio,
    RadioGroup: RadioGroup,
    Checkbox: Checkbox,
    CheckboxGroup: CheckboxGroup,
    Select: Select,
    Page: Page,

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
    CardActions: CardActions
});

})));
