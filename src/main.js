(function (global, factory) {
    (factory());
}(this, (function () { 'use strict';

var Header = {
    template: `
        <div class="bell-header">
            {{$children}}
        </div>
    `
};

var Sider = {
    template: `
        <div class="bell-sider">
            {{$children}}
        </div>
    `
};

var Content = {
    template: `
        <div class="bell-content">
            {{$children}}
        </div>
    `
};

var Footer = {
    template: `
        <div class="bell-footer">
            {{$children}}
        </div>
    `
};

var Layout = {
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
};

var Menu = {
    template: `
        <div class="bell-menu">
            {{$children}}
        </div>
    `,

    propTypes: {
        activeName: {
            type: 'string'
        }
    },

    events: {
        setActiveMenu: function (event, data) {
            this.updateChild(data.name);
        }
    },

    methods: {
        updateChild: function (activeName) {
            var me = this;
            me.$children.some(child => {
                if (child.$options.props.name == activeName) {
                    $(child.$el).addClass('bell-active');
                }
                else {
                    $(child.$el).removeClass('bell-active');
                }
            });
        }
    },

    watchers: {
        activeName: function (activeName) {
            this.updateChild(activeName);
        }
    }
};

var MenuItem = {
    template: `
        <div class="bell-menu-item" data-name="{{name}}" on-click="handleClick(name)">
            {{$children}}
        </div>
    `,

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
        handleClick: function (name) {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            if (me.get('hash')) {
                location.href = me.get('hash');
            }

            me.fire(
                'setActiveMenu',
                {
                    name: name
                }
            );
        }
    }
};

var Submenu = {
    template: `
        <div class="bell-sub-menu">
            {{$children}}
        </div>
    `
};

var Card = {
    template: `
        <div class="bell-card">
            {{$children}}
        </div>
    `
};

var Breadcrumb = {
    template: `
        <div class="bell-bread-crumb">
            {{$children}}
        </div>
    `
};

var BreadcrumbItem = {
    template: `
        <span class="bell-bread-crumb-item">
            <a {{#if to}}href="{{to}}"{{/if}} class="bell-bread-crumb-link">
                {{$children}}
            </a>
            <span class="bell-bread-crumb-gap">
                {{#if separator}}
                    {{separator}}
                {{else}}
                    /
                {{/if}}
            </span>
        </span>
    `,

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
    template: `
        <div class="bell-button
            {{#if type}} bell-{{type}}{{/if}}
            {{#if shape}} bell-{{shape}}{{/if}}
            {{#if size}} bell-{{size}}{{/if}}
            {{#if long}} bell-long{{/if}}
            {{#if disabled}} bell-disabled{{/if}}
        " on-click="click">

            {{#if icon}}
                <i class="bell-icon {{icon}}"></i>
            {{/if}}

            <span>
                {{#if label}}
                    {{label}}
                {{else}}
                    {{$children}}
                {{/if}}
            </span>
        </div>
    `,
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
            type: 'boolean'
        },
        disabled: {
            type: 'boolean'
        }
    }
};

var Input = {
    template: `
<div class="bell-input-wrapper"
    {{#if style}} style="{{style}}"{{/if}}
>
    {{#if type != TEXT_TYPE_TEXTAREA}}
        {{#if !label}}

        {{else}}
            <span class="bell-input-label" on-click="click">
                {{label}}
            </span>
        {{/if}}

        <input type="text" class="bell-input{{#if size}} bell-input-{{size}}{{/if}}"
        {{#if placeholder}} placeholder="{{placeholder}}"{{/if}}
        {{#if disabled}}disabled="disabled"{{/if}}
        model="value"
        ></input>

    {{else}}
        <textarea class="bell-textarea"
            style="height: {{#if rows}}{{rows * 25}}{{else}}50{{/if}}px"
            {{#if rows}} rows="{{rows}}"{{/if}}
            {{#if placeholder}} placeholder="{{placeholder}}" {{if}}
            {{#if disabled}}disabled="disabled"{{/if}}
            model="value"
        >
        </textarea>
    {{/if}}

</div>
    `,

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
    data: function () {
        return {
            TEXT_TYPE_INPUT: 'input',
            TEXT_TYPE_TEXTAREA: 'textarea'
        }
    },

    watchers: {
        value: function (value) {
            console.log(value);
        }
    },

    afterMount: function () {

    }
};

var Select = {
    template: `
<div class="bell-select
{{#if size}} bell-select-{{size}}{{/if}}
{{#if disabled}} bell-select-disabled{{/if}}
"
    {{#if style}} style="{{style}}"{{/if}}
>
    <div class="bell-select-button{{#if visible}} bell-active{{/if}}" on-click="toggleMenu()">
        <input type="hidden" model="value" />
        <span class="bell-select-value{{#if valueToText(value) == null}} bell-hide{{/if}}">
            {{{valueToText(value)}}}
        </span>
        <span class="bell-select-placeholder{{#if valueToText(value) != null}} bell-hide{{/if}}">
            {{#if defaultText}}
                {{{defaultText}}}
            {{else}}
                请选择...
            {{/if}}
        </span>
        <span class="bell-icon bell-icon-arrow-down-b bell-select-arrow"></span>
    </div>

    <div class="bell-select-dropdown{{#if !visible}} bell-hide{{/if}}"
    {{#if style}} style="{{style}}"{{/if}}
    >
        <ul class="bell-select-dropdown-list">
            {{#each list:index}}
            <li class="bell-select-dropdown-item{{#if focusIndex == index}} bell-focus{{/if}}{{#if value == val}} bell-active{{/if}}" on-click="itemClick(index)">
                {{text}}
            </li>
            {{/each}}
        </ul>
    </div>
</div>
    `,

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

        autoComplete: {
            type: 'string'
        }
    },

    data: function () {
        return {
            visible: false,
            focusIndex: null
        }
    },

    filters: {
        valueToText: function (value) {
            if (value == null) {
                return '';
            }
            return this.valueMap[value];
        }
    },

    methods: {
        toggleMenu: function () {
            var me = this;
            if (me.get('disabled') || me.get('autoComplete')) {
                return false;
            }
            me.set({
                visible: !me.get('visible')
            });
        },

        itemClick: function (index) {
            var me = this;
            var list = me.get('list');
            me.set({
                value: list[index].val,
                focusIndex: index,
                visible: false
            });
        },

        setFocusIndex: function (option) {
            var me = this;
            var focusIndex = me.get('focusIndex');
            var value = me.get('value');
            var list = me.get('list');
            var length = list.length - 1;

            if (focusIndex == null) {
                focusIndex = 0;
            }

            if (option == 'up') {
                focusIndex = focusIndex + 1 > length
                            ? 0
                            : focusIndex + 1;
                me.set({
                    focusIndex: focusIndex
                });
            }
            else if (option == 'down') {
                focusIndex = focusIndex - 1 < 0
                            ? length
                            : focusIndex - 1;
                me.set({
                    focusIndex: focusIndex
                });
            }
            else if (option == 'enter') {
                me.set({
                    value: list[focusIndex].val,
                    focusIndex: focusIndex,
                    visible: false
                });
            }
        }
    },

    afterMount: function () {
        var me = this;
        me.valueMap = {};
        Yox.array.each(
            me.get('list'),
            function (item, index) {
                me.valueMap[item.val] = item.text;
                if (item.val == me.get('value')) {
                    me.set({
                        focusIndex: index
                    });
                }
            }
        );

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
            }
            else if (code === 38) {
                // down
                e.preventDefault();
                me.setFocusIndex('down');
            }
            else if (code == 13) {
                // enter
                me.setFocusIndex('enter');
            }
        };

        document.addEventListener(
            'click',
            me.documentClickHandler
        );
        document.addEventListener(
            'keydown',
            me.documentKeydownHander
        );
    },

    beforeDestroy: function () {
        var me = this;
        me.valueMap = null;
        document.removeEventListener(
            'click',
            me.documentClickHandler
        );
        document.removeEventListener(
            'keydown',
            me.documentKeydownHander
        );
    }
};

var Page = {
    template: `
<div class="bell-page
{{#if size}} bell-page-{{size}}{{/if}}
{{#if className}} {{className}}{{/if}}
">
{{#partial pageCenter}}
    {{#if current - 3 > 1}}
        <li class="bell-page-item bell-page-item-prev" on-click="fastPrev()">
            <i class="bell-icon bell-icon-ios-arrow-left"></i>
            <i class="bell-icon bell-icon-ios-arrow-left"></i>
        </li>
    {{/if}}

    {{#if current - 2 > 1}}
        <li class="bell-page-item" on-click="changePage(current - 2)">
            {{ current - 2 }}
        </li>
    {{/if}}

    {{#if current - 1 > 1}}
        <li class="bell-page-item" on-click="changePage(current - 1)">
            {{ current - 1 }}
        </li>
    {{/if}}

    {{#if current != 1 && current != count}}
        <li class="bell-page-item bell-active">
            {{ current }}
        </li>
    {{/if}}

    {{#if current + 1 < count}}
        <li class="bell-page-item" on-click="changePage(current + 1)">
            {{ current + 1 }}
        </li>
    {{/if}}

    {{#if current + 2 < count}}
        <li class="bell-page-item" on-click="changePage(current + 2)">
            <a>{{ current + 2 }}</a>
        </li>
    {{/if}}

    {{#if current + 3 < count}}
        <li class="bell-page-item bell-page-item-next" on-click="fastNext()">
            <i class="bell-icon bell-icon-ios-arrow-right"></i>
            <i class="bell-icon bell-icon-ios-arrow-right"></i>
        </li>
    {{/if}}
{{/partial}}

    {{#if showTotal}}
    <span class="bell-page-total">
        共 {{total}} 条
    </span>
    {{/if}}

    {{#if showSizer}}
    <div class="bell-page-select">
        <Select list="{{pageList}}"
            model="pageSize"
            size="{{size}}"
        />
    </div>
    {{/if}}

    {{#if !simple}}
    <ul class="bell-page-list">

        <li class="bell-page-item bell-page-prev{{#if current <= 1}} bell-disabled{{/if}}" on-click="prev()">
            <i class="bell-icon bell-icon-ios-arrow-left"></i>
        </li>

        <li class="bell-page-item{{#if current == 1}} bell-active{{/if}}" on-click="changePage(1)">
            1
        </li>

        {{#if count > 1}}
            {{> pageCenter}}
            <li class="bell-page-item{{#if current == count}} bell-active{{/if}}" on-click="changePage(count)">
                {{count}}
            </li>
        {{/if}}

        <li class="bell-page-item bell-page-next {{count}}{{#if current >= count}} bell-disabled{{/if}}" on-click="next()">
            <i class="bell-icon bell-icon-ios-arrow-right"></i>
        </li>
    </ul>
    {{else}}
        <div class="bell-page-simple">
            <span class="bell-page-item bell-page-prev{{#if current <= 1}} bell-disabled{{/if}}" on-click="prev()">
                <i class="bell-icon bell-icon-ios-arrow-left"></i>
            </span>

            <div class="bell-page-input">
                <Input model="currentPage"
                    size="{{size}}"
                ></Input>
            </div>

            {{'/'}}

            <span class="bell-page-item{{#if current == count}} bell-active{{/if}}" on-click="changePage(count)">
                {{count}}
            </span>

            <span class="bell-page-item bell-page-next {{count}}{{#if current >= count}} bell-disabled{{/if}}" on-click="next()">
                <i class="bell-icon bell-icon-ios-arrow-right"></i>
            </span>
        </div>
    {{/if}}

    {{#if showElevator}}
    <div class="bell-page-elevator">
        跳至
        <div class="bell-page-input">
            <Input placeholder="请输入..."
                model="currentPage"
                size="{{size}}"
            ></Input>
        </div>
        页
    </div>
    {{/if}}
</div>
    `,

    propTypes: {
        size: {
            type: 'string'
        },
        simple: {
            type: 'string'
        },
        total: {
            type: 'string'
        },
        current: {
            type: 'string',
            value: 1
        },
        pageSize: {
            type: 'string',
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
        onChange: {
            type: 'function'
        },
        onPageSizeChange: {
            type: 'function'
        }
    },

    data: function () {
        var me = this;
        var getPageList = function () {
            var pageList = [];
            if (me.get('showSizer')
                && me.get('pageSizeOpts')
            ) {
                Yox.array.each(
                    me.get('pageSizeOpts'),
                    function (value) {
                        pageList.push({
                            text: value + ' 条/页',
                            val: value
                        });
                    }
                );
            }
            return pageList;
        };
        return {
            pageList: getPageList(),
            count: 0,
            currentPage: 1
        }
    },

    watchers: {
        pageSize: function (value) {
            var me = this;
            me.updateCount();
            me.get('onPageSizeChange') && me.get('onPageSizeChange')(value);
        },
        current: function (value) {
            var me = this;
            me.get('onChange') && me.get('onChange')(value);
        }
    },

    methods: {

        fastPrev: function () {
            var me = this;
            if (me.get('current') < 1) {
                return;
            }
            me.decrease('current', 5, 1);
        },

        fastNext: function () {
            var me = this;
            if (me.get('current') >= me.get('count')) {
                return;
            }
            me.increase('current', 5, me.get('count'));
        },

        prev: function () {
            var me = this;
            if (me.get('current') < 1) {
                return;
            }
            me.decrease('current', 1, 1);

            if (me.get('simple')) {
                me.decrease('currentPage', 1, 1);
            }
        },

        next: function () {
            var me = this;
            if (me.get('current') >= me.get('count')) {
                return;
            }
            me.increase('current', 1, me.get('count'));
            if (me.get('simple')) {
                me.increase('currentPage', 1, me.get('count'));
            }
        },

        changePage: function (page) {
            this.set({
                current: page,
                currentPage: page
            });
        },

        updateCount: function () {
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

        setCurrent: function (option) {
            var me = this;
            var currentPage = +me.get('currentPage');
            var current = me.get('current');
            var count = me.get('count');

            if (option == 'enter') {
                if (Yox.is.number(currentPage)
                    && currentPage > 0
                    && currentPage <= count
                ) {
                    current = currentPage;
                }
            }
            else if (option == 'up') {
                current = current > 1 ? current - 1 : 1;
            }
            else if (option == 'down') {
                current = current + 1 > count ? count : current + 1;
            }

            me.set({
                current: current,
                currentPage: current
            });
        }
    },

    afterMount: function () {
        var me = this;
        me.updateCount();

        me.documentKeydownHander = function (e) {
            var code = e.keyCode;
            if (code === 40) {
                // up
                e.preventDefault();
                me.setCurrent('down');
            }
            else if (code === 38) {
                // down
                e.preventDefault();
                me.setCurrent('up');
            }
            else if (code == 13) {
                // enter
                me.setCurrent('enter');
            }
        };

        document.addEventListener(
            'keydown',
            me.documentKeydownHander
        );
    },

    beforeDestroy: function () {
        var me = this;
        document.addEventListener(
            'keydown',
            me.documentKeydownHander
        );
    }
};

var Alert = {
    template: `
<div class="bell-alert
{{#if type}} bell-alert-{{type}}{{/if}}
{{#if hasDesc}} bell-alert-with-desc{{/if}}
{{#if showIcon}} bell-alert-with-icon{{/if}}
{{#if center}} bell-alert-center{{/if}}
">
    {{#if showIcon}}
    <span class="bell-alert-icon">
        <i class="bell-icon
        {{#if type == 'info'}} bell-icon-information-circled
        {{else if type == 'success'}} bell-icon-checkmark-circled
        {{else if type == 'warning'}} bell-icon-android-alert
        {{else if type == 'error'}} bell-icon-close-circled
        {{/if}}
        "></i>
    </span>
    {{/if}}

    <div class="bell-alert-content">
        {{$children}}
    </div>

    {{#if closable}}
    <span class="bell-alert-close" on-click="close()">
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

    data: function () {
        return {
            hasDesc: false
        }
    },

    watchers: {

    },

    methods: {
        close: function () {
            var me = this;
            var container = $(me.$el);
            container.addClass('bell-hide');
            setTimeout(
                function () {
                    container[0].remove();
                },
                500
            );
            me.get('close') && me.get('close')();
        }
    },

    afterMount: function () {
        var me = this;
        var children = me.$options.props.$children;
        if (Yox.is.array(children)
            && me.$options.props.$children.length
        ) {
            me.$options.props.$children.some(child => {
                if (child.tag == 'Desc') {
                    me.set({
                        hasDesc: true
                    });
                }
            });
        }
    },

    beforeDestroy: function () {
    }
};

var Desc = {
    template: `
        <div class="bell-alert-desc">
            {{$children}}
        </div>
    `
};

var Spin = {
    template: `
<div class="bell-spin
{{#if size}} bell-spin-{{size}}{{/if}}
">
    {{#if text}}
        <span class="bell-spin-text">
            {{text}}
        </span>
    {{else}}
        <span class="bell-spin-item"></span>
        <span class="bell-spin-item"></span>
        <span class="bell-spin-item"></span>
        <span class="bell-spin-item"></span>
        <span class="bell-spin-item"></span>
    {{/if}}
</div>
    `,
    propTypes: {
        size: {
            type: 'string'
        },
        text: {
            type: 'string'
        }
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
    Card: Card,

    Breadcrumb: Breadcrumb,
    BreadcrumbItem: BreadcrumbItem,

    Button: Button,
    Input: Input,
    Select: Select,
    Page: Page,

    Alert: Alert,
    Desc: Desc,
    Spin: Spin
});

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvU2lkZXIuanMiLCJjb21wb25lbnRzL2xheW91dC9Db250ZW50LmpzIiwiY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwiY29tcG9uZW50cy9sYXlvdXQvTWVudS5qcyIsImNvbXBvbmVudHMvbGF5b3V0L01lbnVJdGVtLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvU3VibWVudS5qcyIsImNvbXBvbmVudHMvbGF5b3V0L0NhcmQuanMiLCJjb21wb25lbnRzL2JyZWFkY3J1bWIvQnJlYWRjcnVtYi5qcyIsImNvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iSXRlbS5qcyIsImNvbXBvbmVudHMvYnV0dG9uL0J1dHRvbi5qcyIsImNvbXBvbmVudHMvaW5wdXQvSW5wdXQuanMiLCJjb21wb25lbnRzL3NlbGVjdC9TZWxlY3QuanMiLCJjb21wb25lbnRzL3BhZ2UvUGFnZS5qcyIsImNvbXBvbmVudHMvYWxlcnQvQWxlcnQuanMiLCJjb21wb25lbnRzL2FsZXJ0L0Rlc2MuanMiLCJjb21wb25lbnRzL3NwaW4vU3Bpbi5qcyIsImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1zaWRlclwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1mb290ZXJcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgU2lkZXIgZnJvbSAnLi9TaWRlcidcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1sYXlvdXR7eyNpZiBoYXNTaWRlcn19IGJlbGwtaGFzLXNpZGVye3svaWZ9fVwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGFzU2lkZXI6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGFmdGVyTW91bnQ6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBpZiAobWUuJG9wdGlvbnMucHJvcHMuJGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgbWUuJG9wdGlvbnMucHJvcHMuJGNoaWxkcmVuLnNvbWUoY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC50YWcgPT0gJ1NpZGVyJykge1xuICAgICAgICAgICAgICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzU2lkZXI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLW1lbnVcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBhY3RpdmVOYW1lOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGV2ZW50czoge1xuICAgICAgICBzZXRBY3RpdmVNZW51OiBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGQoZGF0YS5uYW1lKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZUNoaWxkOiBmdW5jdGlvbiAoYWN0aXZlTmFtZSkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIG1lLiRjaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuJG9wdGlvbnMucHJvcHMubmFtZSA9PSBhY3RpdmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICQoY2hpbGQuJGVsKS5hZGRDbGFzcygnYmVsbC1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoY2hpbGQuJGVsKS5yZW1vdmVDbGFzcygnYmVsbC1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaGVyczoge1xuICAgICAgICBhY3RpdmVOYW1lOiBmdW5jdGlvbiAoYWN0aXZlTmFtZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDaGlsZChhY3RpdmVOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtbWVudS1pdGVtXCIgZGF0YS1uYW1lPVwie3tuYW1lfX1cIiBvbi1jbGljaz1cImhhbmRsZUNsaWNrKG5hbWUpXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgaGFzaDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcblxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBoYW5kbGVDbGljazogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAobWUuZ2V0KCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1lLmdldCgnaGFzaCcpKSB7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IG1lLmdldCgnaGFzaCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5maXJlKFxuICAgICAgICAgICAgICAgICdzZXRBY3RpdmVNZW51JyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1zdWItbWVudVwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLWNhcmRcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1icmVhZC1jcnVtYlwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1icmVhZC1jcnVtYi1pdGVtXCI+XG4gICAgICAgICAgICA8YSB7eyNpZiB0b319aHJlZj1cInt7dG99fVwie3svaWZ9fSBjbGFzcz1cImJlbGwtYnJlYWQtY3J1bWItbGlua1wiPlxuICAgICAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1icmVhZC1jcnVtYi1nYXBcIj5cbiAgICAgICAgICAgICAgICB7eyNpZiBzZXBhcmF0b3J9fVxuICAgICAgICAgICAgICAgICAgICB7e3NlcGFyYXRvcn19XG4gICAgICAgICAgICAgICAge3tlbHNlfX1cbiAgICAgICAgICAgICAgICAgICAgL1xuICAgICAgICAgICAgICAgIHt7L2lmfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgIGAsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgdG86IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHNlcGFyYXRvcjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtYnV0dG9uXG4gICAgICAgICAgICB7eyNpZiB0eXBlfX0gYmVsbC17e3R5cGV9fXt7L2lmfX1cbiAgICAgICAgICAgIHt7I2lmIHNoYXBlfX0gYmVsbC17e3NoYXBlfX17ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBzaXplfX0gYmVsbC17e3NpemV9fXt7L2lmfX1cbiAgICAgICAgICAgIHt7I2lmIGxvbmd9fSBiZWxsLWxvbmd7ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBkaXNhYmxlZH19IGJlbGwtZGlzYWJsZWR7ey9pZn19XG4gICAgICAgIFwiIG9uLWNsaWNrPVwiY2xpY2tcIj5cblxuICAgICAgICAgICAge3sjaWYgaWNvbn19XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiZWxsLWljb24ge3tpY29ufX1cIj48L2k+XG4gICAgICAgICAgICB7ey9pZn19XG5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHt7I2lmIGxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAge3tsYWJlbH19XG4gICAgICAgICAgICAgICAge3tlbHNlfX1cbiAgICAgICAgICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICAgICAgICAgIHt7L2lmfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBsb25nOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImJlbGwtaW5wdXQtd3JhcHBlclwiXG4gICAge3sjaWYgc3R5bGV9fSBzdHlsZT1cInt7c3R5bGV9fVwie3svaWZ9fVxuPlxuICAgIHt7I2lmIHR5cGUgIT0gVEVYVF9UWVBFX1RFWFRBUkVBfX1cbiAgICAgICAge3sjaWYgIWxhYmVsfX1cblxuICAgICAgICB7e2Vsc2V9fVxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLWlucHV0LWxhYmVsXCIgb24tY2xpY2s9XCJjbGlja1wiPlxuICAgICAgICAgICAgICAgIHt7bGFiZWx9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICB7ey9pZn19XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJiZWxsLWlucHV0e3sjaWYgc2l6ZX19IGJlbGwtaW5wdXQte3tzaXplfX17ey9pZn19XCJcbiAgICAgICAge3sjaWYgcGxhY2Vob2xkZXJ9fSBwbGFjZWhvbGRlcj1cInt7cGxhY2Vob2xkZXJ9fVwie3svaWZ9fVxuICAgICAgICB7eyNpZiBkaXNhYmxlZH19ZGlzYWJsZWQ9XCJkaXNhYmxlZFwie3svaWZ9fVxuICAgICAgICBtb2RlbD1cInZhbHVlXCJcbiAgICAgICAgPjwvaW5wdXQ+XG5cbiAgICB7e2Vsc2V9fVxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJiZWxsLXRleHRhcmVhXCJcbiAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiB7eyNpZiByb3dzfX17e3Jvd3MgKiAyNX19e3tlbHNlfX01MHt7L2lmfX1weFwiXG4gICAgICAgICAgICB7eyNpZiByb3dzfX0gcm93cz1cInt7cm93c319XCJ7ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBwbGFjZWhvbGRlcn19IHBsYWNlaG9sZGVyPVwie3twbGFjZWhvbGRlcn19XCIge3tpZn19XG4gICAgICAgICAgICB7eyNpZiBkaXNhYmxlZH19ZGlzYWJsZWQ9XCJkaXNhYmxlZFwie3svaWZ9fVxuICAgICAgICAgICAgbW9kZWw9XCJ2YWx1ZVwiXG4gICAgICAgID5cbiAgICAgICAgPC90ZXh0YXJlYT5cbiAgICB7ey9pZn19XG5cbjwvZGl2PlxuICAgIGAsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHJvd3M6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBURVhUX1RZUEVfSU5QVVQ6ICdpbnB1dCcsXG4gICAgICAgICAgICBURVhUX1RZUEVfVEVYVEFSRUE6ICd0ZXh0YXJlYSdcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaGVyczoge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZnRlck1vdW50OiBmdW5jdGlvbiAoKSB7XG5cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiYmVsbC1zZWxlY3Rcbnt7I2lmIHNpemV9fSBiZWxsLXNlbGVjdC17e3NpemV9fXt7L2lmfX1cbnt7I2lmIGRpc2FibGVkfX0gYmVsbC1zZWxlY3QtZGlzYWJsZWR7ey9pZn19XG5cIlxuICAgIHt7I2lmIHN0eWxlfX0gc3R5bGU9XCJ7e3N0eWxlfX1cInt7L2lmfX1cbj5cbiAgICA8ZGl2IGNsYXNzPVwiYmVsbC1zZWxlY3QtYnV0dG9ue3sjaWYgdmlzaWJsZX19IGJlbGwtYWN0aXZle3svaWZ9fVwiIG9uLWNsaWNrPVwidG9nZ2xlTWVudSgpXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbW9kZWw9XCJ2YWx1ZVwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1zZWxlY3QtdmFsdWV7eyNpZiB2YWx1ZVRvVGV4dCh2YWx1ZSkgPT0gbnVsbH19IGJlbGwtaGlkZXt7L2lmfX1cIj5cbiAgICAgICAgICAgIHt7e3ZhbHVlVG9UZXh0KHZhbHVlKX19fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1zZWxlY3QtcGxhY2Vob2xkZXJ7eyNpZiB2YWx1ZVRvVGV4dCh2YWx1ZSkgIT0gbnVsbH19IGJlbGwtaGlkZXt7L2lmfX1cIj5cbiAgICAgICAgICAgIHt7I2lmIGRlZmF1bHRUZXh0fX1cbiAgICAgICAgICAgICAgICB7e3tkZWZhdWx0VGV4dH19fVxuICAgICAgICAgICAge3tlbHNlfX1cbiAgICAgICAgICAgICAgICDor7fpgInmi6kuLi5cbiAgICAgICAgICAgIHt7L2lmfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtaWNvbiBiZWxsLWljb24tYXJyb3ctZG93bi1iIGJlbGwtc2VsZWN0LWFycm93XCI+PC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImJlbGwtc2VsZWN0LWRyb3Bkb3due3sjaWYgIXZpc2libGV9fSBiZWxsLWhpZGV7ey9pZn19XCJcbiAgICB7eyNpZiBzdHlsZX19IHN0eWxlPVwie3tzdHlsZX19XCJ7ey9pZn19XG4gICAgPlxuICAgICAgICA8dWwgY2xhc3M9XCJiZWxsLXNlbGVjdC1kcm9wZG93bi1saXN0XCI+XG4gICAgICAgICAgICB7eyNlYWNoIGxpc3Q6aW5kZXh9fVxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1zZWxlY3QtZHJvcGRvd24taXRlbXt7I2lmIGZvY3VzSW5kZXggPT0gaW5kZXh9fSBiZWxsLWZvY3Vze3svaWZ9fXt7I2lmIHZhbHVlID09IHZhbH19IGJlbGwtYWN0aXZle3svaWZ9fVwiIG9uLWNsaWNrPVwiaXRlbUNsaWNrKGluZGV4KVwiPlxuICAgICAgICAgICAgICAgIHt7dGV4dH19XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAge3svZWFjaH19XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiAgICBgLFxuXG4gICAgcHJvcFR5cGVzOiB7XG5cbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVmYXVsdFRleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgbGlzdDoge1xuICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgIHJlcXVpcmU6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcblxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuXG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuXG4gICAgICAgIGF1dG9Db21wbGV0ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGZvY3VzSW5kZXg6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmaWx0ZXJzOiB7XG4gICAgICAgIHZhbHVlVG9UZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVNYXBbdmFsdWVdO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdG9nZ2xlTWVudTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIGlmIChtZS5nZXQoJ2Rpc2FibGVkJykgfHwgbWUuZ2V0KCdhdXRvQ29tcGxldGUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogIW1lLmdldCgndmlzaWJsZScpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpdGVtQ2xpY2s6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIHZhciBsaXN0ID0gbWUuZ2V0KCdsaXN0JylcbiAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGxpc3RbaW5kZXhdLnZhbCxcbiAgICAgICAgICAgICAgICBmb2N1c0luZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0Rm9jdXNJbmRleDogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIHZhciBmb2N1c0luZGV4ID0gbWUuZ2V0KCdmb2N1c0luZGV4Jyk7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBtZS5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IG1lLmdldCgnbGlzdCcpO1xuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGxpc3QubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgaWYgKGZvY3VzSW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvY3VzSW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3B0aW9uID09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICBmb2N1c0luZGV4ID0gZm9jdXNJbmRleCArIDEgPiBsZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZvY3VzSW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIGZvY3VzSW5kZXg6IGZvY3VzSW5kZXhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbiA9PSAnZG93bicpIHtcbiAgICAgICAgICAgICAgICBmb2N1c0luZGV4ID0gZm9jdXNJbmRleCAtIDEgPCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBsZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZvY3VzSW5kZXggLSAxO1xuICAgICAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIGZvY3VzSW5kZXg6IGZvY3VzSW5kZXhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbiA9PSAnZW50ZXInKSB7XG4gICAgICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGxpc3RbZm9jdXNJbmRleF0udmFsLFxuICAgICAgICAgICAgICAgICAgICBmb2N1c0luZGV4OiBmb2N1c0luZGV4LFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFmdGVyTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgbWUudmFsdWVNYXAgPSB7fTtcbiAgICAgICAgWW94LmFycmF5LmVhY2goXG4gICAgICAgICAgICBtZS5nZXQoJ2xpc3QnKSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIG1lLnZhbHVlTWFwW2l0ZW0udmFsXSA9IGl0ZW0udGV4dDtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS52YWwgPT0gbWUuZ2V0KCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c0luZGV4OiBpbmRleFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgbWUuZG9jdW1lbnRDbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKG1lLiRlbC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBtZS5kb2N1bWVudEtleWRvd25IYW5kZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGNvZGUgPSBlLmtleUNvZGU7XG4gICAgICAgICAgICBpZiAoIW1lLmdldCgndmlzaWJsZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbWUuc2V0Rm9jdXNJbmRleCgndXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvZGUgPT09IDM4KSB7XG4gICAgICAgICAgICAgICAgLy8gZG93blxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBtZS5zZXRGb2N1c0luZGV4KCdkb3duJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb2RlID09IDEzKSB7XG4gICAgICAgICAgICAgICAgLy8gZW50ZXJcbiAgICAgICAgICAgICAgICBtZS5zZXRGb2N1c0luZGV4KCdlbnRlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnY2xpY2snLFxuICAgICAgICAgICAgbWUuZG9jdW1lbnRDbGlja0hhbmRsZXJcbiAgICAgICAgKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdrZXlkb3duJyxcbiAgICAgICAgICAgIG1lLmRvY3VtZW50S2V5ZG93bkhhbmRlclxuICAgICAgICApO1xuICAgIH0sXG5cbiAgICBiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIG1lLnZhbHVlTWFwID0gbnVsbDtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICBtZS5kb2N1bWVudENsaWNrSGFuZGxlclxuICAgICAgICApO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2tleWRvd24nLFxuICAgICAgICAgICAgbWUuZG9jdW1lbnRLZXlkb3duSGFuZGVyXG4gICAgICAgICk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImJlbGwtcGFnZVxue3sjaWYgc2l6ZX19IGJlbGwtcGFnZS17e3NpemV9fXt7L2lmfX1cbnt7I2lmIGNsYXNzTmFtZX19IHt7Y2xhc3NOYW1lfX17ey9pZn19XG5cIj5cbnt7I3BhcnRpYWwgcGFnZUNlbnRlcn19XG4gICAge3sjaWYgY3VycmVudCAtIDMgPiAxfX1cbiAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW0gYmVsbC1wYWdlLWl0ZW0tcHJldlwiIG9uLWNsaWNrPVwiZmFzdFByZXYoKVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJiZWxsLWljb24gYmVsbC1pY29uLWlvcy1hcnJvdy1sZWZ0XCI+PC9pPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJiZWxsLWljb24gYmVsbC1pY29uLWlvcy1hcnJvdy1sZWZ0XCI+PC9pPlxuICAgICAgICA8L2xpPlxuICAgIHt7L2lmfX1cblxuICAgIHt7I2lmIGN1cnJlbnQgLSAyID4gMX19XG4gICAgICAgIDxsaSBjbGFzcz1cImJlbGwtcGFnZS1pdGVtXCIgb24tY2xpY2s9XCJjaGFuZ2VQYWdlKGN1cnJlbnQgLSAyKVwiPlxuICAgICAgICAgICAge3sgY3VycmVudCAtIDIgfX1cbiAgICAgICAgPC9saT5cbiAgICB7ey9pZn19XG5cbiAgICB7eyNpZiBjdXJyZW50IC0gMSA+IDF9fVxuICAgICAgICA8bGkgY2xhc3M9XCJiZWxsLXBhZ2UtaXRlbVwiIG9uLWNsaWNrPVwiY2hhbmdlUGFnZShjdXJyZW50IC0gMSlcIj5cbiAgICAgICAgICAgIHt7IGN1cnJlbnQgLSAxIH19XG4gICAgICAgIDwvbGk+XG4gICAge3svaWZ9fVxuXG4gICAge3sjaWYgY3VycmVudCAhPSAxICYmIGN1cnJlbnQgIT0gY291bnR9fVxuICAgICAgICA8bGkgY2xhc3M9XCJiZWxsLXBhZ2UtaXRlbSBiZWxsLWFjdGl2ZVwiPlxuICAgICAgICAgICAge3sgY3VycmVudCB9fVxuICAgICAgICA8L2xpPlxuICAgIHt7L2lmfX1cblxuICAgIHt7I2lmIGN1cnJlbnQgKyAxIDwgY291bnR9fVxuICAgICAgICA8bGkgY2xhc3M9XCJiZWxsLXBhZ2UtaXRlbVwiIG9uLWNsaWNrPVwiY2hhbmdlUGFnZShjdXJyZW50ICsgMSlcIj5cbiAgICAgICAgICAgIHt7IGN1cnJlbnQgKyAxIH19XG4gICAgICAgIDwvbGk+XG4gICAge3svaWZ9fVxuXG4gICAge3sjaWYgY3VycmVudCArIDIgPCBjb3VudH19XG4gICAgICAgIDxsaSBjbGFzcz1cImJlbGwtcGFnZS1pdGVtXCIgb24tY2xpY2s9XCJjaGFuZ2VQYWdlKGN1cnJlbnQgKyAyKVwiPlxuICAgICAgICAgICAgPGE+e3sgY3VycmVudCArIDIgfX08L2E+XG4gICAgICAgIDwvbGk+XG4gICAge3svaWZ9fVxuXG4gICAge3sjaWYgY3VycmVudCArIDMgPCBjb3VudH19XG4gICAgICAgIDxsaSBjbGFzcz1cImJlbGwtcGFnZS1pdGVtIGJlbGwtcGFnZS1pdGVtLW5leHRcIiBvbi1jbGljaz1cImZhc3ROZXh0KClcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmVsbC1pY29uIGJlbGwtaWNvbi1pb3MtYXJyb3ctcmlnaHRcIj48L2k+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJlbGwtaWNvbiBiZWxsLWljb24taW9zLWFycm93LXJpZ2h0XCI+PC9pPlxuICAgICAgICA8L2xpPlxuICAgIHt7L2lmfX1cbnt7L3BhcnRpYWx9fVxuXG4gICAge3sjaWYgc2hvd1RvdGFsfX1cbiAgICA8c3BhbiBjbGFzcz1cImJlbGwtcGFnZS10b3RhbFwiPlxuICAgICAgICDlhbEge3t0b3RhbH19IOadoVxuICAgIDwvc3Bhbj5cbiAgICB7ey9pZn19XG5cbiAgICB7eyNpZiBzaG93U2l6ZXJ9fVxuICAgIDxkaXYgY2xhc3M9XCJiZWxsLXBhZ2Utc2VsZWN0XCI+XG4gICAgICAgIDxTZWxlY3QgbGlzdD1cInt7cGFnZUxpc3R9fVwiXG4gICAgICAgICAgICBtb2RlbD1cInBhZ2VTaXplXCJcbiAgICAgICAgICAgIHNpemU9XCJ7e3NpemV9fVwiXG4gICAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAge3svaWZ9fVxuXG4gICAge3sjaWYgIXNpbXBsZX19XG4gICAgPHVsIGNsYXNzPVwiYmVsbC1wYWdlLWxpc3RcIj5cblxuICAgICAgICA8bGkgY2xhc3M9XCJiZWxsLXBhZ2UtaXRlbSBiZWxsLXBhZ2UtcHJldnt7I2lmIGN1cnJlbnQgPD0gMX19IGJlbGwtZGlzYWJsZWR7ey9pZn19XCIgb24tY2xpY2s9XCJwcmV2KClcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmVsbC1pY29uIGJlbGwtaWNvbi1pb3MtYXJyb3ctbGVmdFwiPjwvaT5cbiAgICAgICAgPC9saT5cblxuICAgICAgICA8bGkgY2xhc3M9XCJiZWxsLXBhZ2UtaXRlbXt7I2lmIGN1cnJlbnQgPT0gMX19IGJlbGwtYWN0aXZle3svaWZ9fVwiIG9uLWNsaWNrPVwiY2hhbmdlUGFnZSgxKVwiPlxuICAgICAgICAgICAgMVxuICAgICAgICA8L2xpPlxuXG4gICAgICAgIHt7I2lmIGNvdW50ID4gMX19XG4gICAgICAgICAgICB7ez4gcGFnZUNlbnRlcn19XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJiZWxsLXBhZ2UtaXRlbXt7I2lmIGN1cnJlbnQgPT0gY291bnR9fSBiZWxsLWFjdGl2ZXt7L2lmfX1cIiBvbi1jbGljaz1cImNoYW5nZVBhZ2UoY291bnQpXCI+XG4gICAgICAgICAgICAgICAge3tjb3VudH19XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICB7ey9pZn19XG5cbiAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW0gYmVsbC1wYWdlLW5leHQge3tjb3VudH19e3sjaWYgY3VycmVudCA+PSBjb3VudH19IGJlbGwtZGlzYWJsZWR7ey9pZn19XCIgb24tY2xpY2s9XCJuZXh0KClcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmVsbC1pY29uIGJlbGwtaWNvbi1pb3MtYXJyb3ctcmlnaHRcIj48L2k+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICB7e2Vsc2V9fVxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1wYWdlLXNpbXBsZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLXBhZ2UtaXRlbSBiZWxsLXBhZ2UtcHJldnt7I2lmIGN1cnJlbnQgPD0gMX19IGJlbGwtZGlzYWJsZWR7ey9pZn19XCIgb24tY2xpY2s9XCJwcmV2KClcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJlbGwtaWNvbiBiZWxsLWljb24taW9zLWFycm93LWxlZnRcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLXBhZ2UtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXQgbW9kZWw9XCJjdXJyZW50UGFnZVwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJ7e3NpemV9fVwiXG4gICAgICAgICAgICAgICAgPjwvSW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge3snLyd9fVxuXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtcGFnZS1pdGVte3sjaWYgY3VycmVudCA9PSBjb3VudH19IGJlbGwtYWN0aXZle3svaWZ9fVwiIG9uLWNsaWNrPVwiY2hhbmdlUGFnZShjb3VudClcIj5cbiAgICAgICAgICAgICAgICB7e2NvdW50fX1cbiAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLXBhZ2UtaXRlbSBiZWxsLXBhZ2UtbmV4dCB7e2NvdW50fX17eyNpZiBjdXJyZW50ID49IGNvdW50fX0gYmVsbC1kaXNhYmxlZHt7L2lmfX1cIiBvbi1jbGljaz1cIm5leHQoKVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmVsbC1pY29uIGJlbGwtaWNvbi1pb3MtYXJyb3ctcmlnaHRcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIHt7L2lmfX1cblxuICAgIHt7I2lmIHNob3dFbGV2YXRvcn19XG4gICAgPGRpdiBjbGFzcz1cImJlbGwtcGFnZS1lbGV2YXRvclwiPlxuICAgICAgICDot7Poh7NcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtcGFnZS1pbnB1dFwiPlxuICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwi6K+36L6T5YWlLi4uXCJcbiAgICAgICAgICAgICAgICBtb2RlbD1cImN1cnJlbnRQYWdlXCJcbiAgICAgICAgICAgICAgICBzaXplPVwie3tzaXplfX1cIlxuICAgICAgICAgICAgPjwvSW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICDpobVcbiAgICA8L2Rpdj5cbiAgICB7ey9pZn19XG48L2Rpdj5cbiAgICBgLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHNpbXBsZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgdG90YWw6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgfSxcbiAgICAgICAgcGFnZVNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgdmFsdWU6IDEwXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dTaXplcjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgcGFnZVNpemVPcHRzOiB7XG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dFbGV2YXRvcjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd1RvdGFsOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2hhbmdlOiB7XG4gICAgICAgICAgICB0eXBlOiAnZnVuY3Rpb24nXG4gICAgICAgIH0sXG4gICAgICAgIG9uUGFnZVNpemVDaGFuZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6ICdmdW5jdGlvbidcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIHZhciBnZXRQYWdlTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwYWdlTGlzdCA9IFtdO1xuICAgICAgICAgICAgaWYgKG1lLmdldCgnc2hvd1NpemVyJylcbiAgICAgICAgICAgICAgICAmJiBtZS5nZXQoJ3BhZ2VTaXplT3B0cycpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBZb3guYXJyYXkuZWFjaChcbiAgICAgICAgICAgICAgICAgICAgbWUuZ2V0KCdwYWdlU2l6ZU9wdHMnKSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB2YWx1ZSArICcg5p2hL+mhtScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhZ2VMaXN0O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZUxpc3Q6IGdldFBhZ2VMaXN0KCksXG4gICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2hlcnM6IHtcbiAgICAgICAgcGFnZVNpemU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIG1lLnVwZGF0ZUNvdW50KCk7XG4gICAgICAgICAgICBtZS5nZXQoJ29uUGFnZVNpemVDaGFuZ2UnKSAmJiBtZS5nZXQoJ29uUGFnZVNpemVDaGFuZ2UnKSh2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbnQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIG1lLmdldCgnb25DaGFuZ2UnKSAmJiBtZS5nZXQoJ29uQ2hhbmdlJykodmFsdWUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICBmYXN0UHJldjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIGlmIChtZS5nZXQoJ2N1cnJlbnQnKSA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZS5kZWNyZWFzZSgnY3VycmVudCcsIDUsIDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZhc3ROZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKG1lLmdldCgnY3VycmVudCcpID49IG1lLmdldCgnY291bnQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lLmluY3JlYXNlKCdjdXJyZW50JywgNSwgbWUuZ2V0KCdjb3VudCcpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBwcmV2OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKG1lLmdldCgnY3VycmVudCcpIDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lLmRlY3JlYXNlKCdjdXJyZW50JywgMSwgMSk7XG5cbiAgICAgICAgICAgIGlmIChtZS5nZXQoJ3NpbXBsZScpKSB7XG4gICAgICAgICAgICAgICAgbWUuZGVjcmVhc2UoJ2N1cnJlbnRQYWdlJywgMSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIGlmIChtZS5nZXQoJ2N1cnJlbnQnKSA+PSBtZS5nZXQoJ2NvdW50JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZS5pbmNyZWFzZSgnY3VycmVudCcsIDEsIG1lLmdldCgnY291bnQnKSk7XG4gICAgICAgICAgICBpZiAobWUuZ2V0KCdzaW1wbGUnKSkge1xuICAgICAgICAgICAgICAgIG1lLmluY3JlYXNlKCdjdXJyZW50UGFnZScsIDEsIG1lLmdldCgnY291bnQnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2hhbmdlUGFnZTogZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBwYWdlLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBwYWdlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIGlmIChtZS5nZXQoJ3RvdGFsJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgICAgIGlmIChtZS5nZXQoJ3RvdGFsJykgPiBtZS5nZXQoJ3BhZ2VTaXplJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSBNYXRoLmNlaWwobWUuZ2V0KCd0b3RhbCcpIC8gbWUuZ2V0KCdwYWdlU2l6ZScpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgICAgICAgICBjb3VudDogY291bnRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBzZXRDdXJyZW50OiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRQYWdlID0gK21lLmdldCgnY3VycmVudFBhZ2UnKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gbWUuZ2V0KCdjdXJyZW50Jyk7XG4gICAgICAgICAgICB2YXIgY291bnQgPSBtZS5nZXQoJ2NvdW50Jyk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb24gPT0gJ2VudGVyJykge1xuICAgICAgICAgICAgICAgIGlmIChZb3guaXMubnVtYmVyKGN1cnJlbnRQYWdlKVxuICAgICAgICAgICAgICAgICAgICAmJiBjdXJyZW50UGFnZSA+IDBcbiAgICAgICAgICAgICAgICAgICAgJiYgY3VycmVudFBhZ2UgPD0gY291bnRcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnRQYWdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbiA9PSAndXAnKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgPiAxID8gY3VycmVudCAtIDEgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9uID09ICdkb3duJykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50ICsgMSA+IGNvdW50ID8gY291bnQgOiBjdXJyZW50ICsgMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBjdXJyZW50LFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZnRlck1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIG1lLnVwZGF0ZUNvdW50KCk7XG5cbiAgICAgICAgbWUuZG9jdW1lbnRLZXlkb3duSGFuZGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBjb2RlID0gZS5rZXlDb2RlO1xuICAgICAgICAgICAgaWYgKGNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbWUuc2V0Q3VycmVudCgnZG93bicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29kZSA9PT0gMzgpIHtcbiAgICAgICAgICAgICAgICAvLyBkb3duXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIG1lLnNldEN1cnJlbnQoJ3VwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb2RlID09IDEzKSB7XG4gICAgICAgICAgICAgICAgLy8gZW50ZXJcbiAgICAgICAgICAgICAgICBtZS5zZXRDdXJyZW50KCdlbnRlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAna2V5ZG93bicsXG4gICAgICAgICAgICBtZS5kb2N1bWVudEtleWRvd25IYW5kZXJcbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgYmVmb3JlRGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2tleWRvd24nLFxuICAgICAgICAgICAgbWUuZG9jdW1lbnRLZXlkb3duSGFuZGVyXG4gICAgICAgICk7XG4gICAgfVxufTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJiZWxsLWFsZXJ0XG57eyNpZiB0eXBlfX0gYmVsbC1hbGVydC17e3R5cGV9fXt7L2lmfX1cbnt7I2lmIGhhc0Rlc2N9fSBiZWxsLWFsZXJ0LXdpdGgtZGVzY3t7L2lmfX1cbnt7I2lmIHNob3dJY29ufX0gYmVsbC1hbGVydC13aXRoLWljb257ey9pZn19XG57eyNpZiBjZW50ZXJ9fSBiZWxsLWFsZXJ0LWNlbnRlcnt7L2lmfX1cblwiPlxuICAgIHt7I2lmIHNob3dJY29ufX1cbiAgICA8c3BhbiBjbGFzcz1cImJlbGwtYWxlcnQtaWNvblwiPlxuICAgICAgICA8aSBjbGFzcz1cImJlbGwtaWNvblxuICAgICAgICB7eyNpZiB0eXBlID09ICdpbmZvJ319IGJlbGwtaWNvbi1pbmZvcm1hdGlvbi1jaXJjbGVkXG4gICAgICAgIHt7ZWxzZSBpZiB0eXBlID09ICdzdWNjZXNzJ319IGJlbGwtaWNvbi1jaGVja21hcmstY2lyY2xlZFxuICAgICAgICB7e2Vsc2UgaWYgdHlwZSA9PSAnd2FybmluZyd9fSBiZWxsLWljb24tYW5kcm9pZC1hbGVydFxuICAgICAgICB7e2Vsc2UgaWYgdHlwZSA9PSAnZXJyb3InfX0gYmVsbC1pY29uLWNsb3NlLWNpcmNsZWRcbiAgICAgICAge3svaWZ9fVxuICAgICAgICBcIj48L2k+XG4gICAgPC9zcGFuPlxuICAgIHt7L2lmfX1cblxuICAgIDxkaXYgY2xhc3M9XCJiZWxsLWFsZXJ0LWNvbnRlbnRcIj5cbiAgICAgICAge3skY2hpbGRyZW59fVxuICAgIDwvZGl2PlxuXG4gICAge3sjaWYgY2xvc2FibGV9fVxuICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1hbGVydC1jbG9zZVwiIG9uLWNsaWNrPVwiY2xvc2UoKVwiPlxuICAgICAgICB7eyNpZiBjbG9zZVRleHR9fVxuICAgICAgICAgICAge3tjbG9zZVRleHR9fVxuICAgICAgICB7e2Vsc2V9fVxuICAgICAgICAgICAgPGkgY2xhc3M9XCJiZWxsLWljb24gYmVsbC1pY29uLWlvcy1jbG9zZS1lbXB0eVwiPjwvaT5cbiAgICAgICAge3svaWZ9fVxuICAgIDwvc3Bhbj5cbiAgICB7ey9pZn19XG48L2Rpdj5cbiAgICBgLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgdmFsdWU6ICdpbmZvJ1xuICAgICAgICB9LFxuICAgICAgICBjbG9zYWJsZToge1xuICAgICAgICAgICAgdHlwZTogWydzdHJpbmcnLCAnYm9vbGVhbiddXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dJY29uOiB7XG4gICAgICAgICAgICB0eXBlOiBbJ3N0cmluZycsICdib29sZWFuJ11cbiAgICAgICAgfSxcbiAgICAgICAgY2VudGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBbJ3N0cmluZycsICdib29sZWFuJ11cbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VUZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZToge1xuICAgICAgICAgICAgdHlwZTogJ2Z1bmN0aW9uJ1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhc0Rlc2M6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2hlcnM6IHtcblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQobWUuJGVsKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcygnYmVsbC1oaWRlJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyWzBdLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICA1MDBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtZS5nZXQoJ2Nsb3NlJykgJiYgbWUuZ2V0KCdjbG9zZScpKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWZ0ZXJNb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBtZS4kb3B0aW9ucy5wcm9wcy4kY2hpbGRyZW47XG4gICAgICAgIGlmIChZb3guaXMuYXJyYXkoY2hpbGRyZW4pXG4gICAgICAgICAgICAmJiBtZS4kb3B0aW9ucy5wcm9wcy4kY2hpbGRyZW4ubGVuZ3RoXG4gICAgICAgICkge1xuICAgICAgICAgICAgbWUuJG9wdGlvbnMucHJvcHMuJGNoaWxkcmVuLnNvbWUoY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC50YWcgPT0gJ0Rlc2MnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNEZXNjOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGJlZm9yZURlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICB9XG59OyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1hbGVydC1kZXNjXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJiZWxsLXNwaW5cbnt7I2lmIHNpemV9fSBiZWxsLXNwaW4te3tzaXplfX17ey9pZn19XG5cIj5cbiAgICB7eyNpZiB0ZXh0fX1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLXNwaW4tdGV4dFwiPlxuICAgICAgICAgICAge3t0ZXh0fX1cbiAgICAgICAgPC9zcGFuPlxuICAgIHt7ZWxzZX19XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1zcGluLWl0ZW1cIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1zcGluLWl0ZW1cIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1zcGluLWl0ZW1cIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1zcGluLWl0ZW1cIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1zcGluLWl0ZW1cIj48L3NwYW4+XG4gICAge3svaWZ9fVxuPC9kaXY+XG4gICAgYCxcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvKlxuICogQGZpbGUg5Li75qih5Z2XXG4gKiBAYXV0aG9yIHdhbmd0aWFuaHVhXG4gKi9cblxuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXInXG5pbXBvcnQgU2lkZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9TaWRlcidcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvQ29udGVudCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9Gb290ZXInXG5pbXBvcnQgTWVudSBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L01lbnUnXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9NZW51SXRlbSdcbmltcG9ydCBTdWJtZW51IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvU3VibWVudSdcbmltcG9ydCBDYXJkIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvQ2FyZCdcblxuXG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tICcuL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iJ1xuaW1wb3J0IEJyZWFkY3J1bWJJdGVtIGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1iL0JyZWFkY3J1bWJJdGVtJ1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9idXR0b24vQnV0dG9uJ1xuaW1wb3J0IElucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9JbnB1dCdcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC9TZWxlY3QnXG5pbXBvcnQgUGFnZSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZS9QYWdlJ1xuXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi9jb21wb25lbnRzL2FsZXJ0L0FsZXJ0J1xuaW1wb3J0IERlc2MgZnJvbSAnLi9jb21wb25lbnRzL2FsZXJ0L0Rlc2MnXG5pbXBvcnQgU3BpbiBmcm9tICcuL2NvbXBvbmVudHMvc3Bpbi9TcGluJ1xuXG5Zb3guY29tcG9uZW50KHtcbiAgICBMYXlvdXQ6IExheW91dCxcbiAgICBIZWFkZXI6IEhlYWRlcixcbiAgICBTaWRlcjogU2lkZXIsXG4gICAgQ29udGVudDogQ29udGVudCxcbiAgICBGb290ZXI6IEZvb3RlcixcbiAgICBNZW51OiBNZW51LFxuICAgIE1lbnVJdGVtOiBNZW51SXRlbSxcbiAgICBTdWJtZW51OiBTdWJtZW51LFxuICAgIENhcmQ6IENhcmQsXG5cbiAgICBCcmVhZGNydW1iOiBCcmVhZGNydW1iLFxuICAgIEJyZWFkY3J1bWJJdGVtOiBCcmVhZGNydW1iSXRlbSxcblxuICAgIEJ1dHRvbjogQnV0dG9uLFxuICAgIElucHV0OiBJbnB1dCxcbiAgICBTZWxlY3Q6IFNlbGVjdCxcbiAgICBQYWdlOiBQYWdlLFxuXG4gICAgQWxlcnQ6IEFsZXJ0LFxuICAgIERlc2M6IERlc2MsXG4gICAgU3BpbjogU3BpblxufSk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsYUFBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7O0lBSVgsQ0FBQzs7O0FDTEwsWUFBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7O0lBSVgsQ0FBQzs7O0FDTEwsY0FBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7O0lBSVgsQ0FBQzs7O0FDTEwsYUFBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7O0lBSVgsQ0FBQzs7O0NBQ0osRENERCxhQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7SUFJWCxDQUFDOztJQUVELElBQUksRUFBRSxZQUFZO1FBQ2QsT0FBTztZQUNILFFBQVEsRUFBRSxLQUFLO1NBQ2xCLENBQUM7S0FDTDs7SUFFRCxVQUFVLEVBQUUsVUFBVSxRQUFRLEVBQUU7UUFDNUIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3BDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJO2dCQUN0QyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksT0FBTyxFQUFFO29CQUN0QixFQUFFLENBQUMsR0FBRyxDQUFDO3dCQUNILFFBQVEsRUFBRSxJQUFJO3FCQUNqQixDQUFDLENBQUM7aUJBQ047YUFDSixDQUFDLENBQUM7U0FDTjtLQUNKOzs7QUM3QkwsV0FBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7O0lBSVgsQ0FBQzs7SUFFRCxTQUFTLEVBQUU7UUFDUCxVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsUUFBUTtTQUNqQjtLQUNKOztJQUVELE1BQU0sRUFBRTtRQUNKLGFBQWEsRUFBRSxVQUFVLEtBQUssRUFBRSxJQUFJLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7S0FDSjs7SUFFRCxPQUFPLEVBQUU7UUFDTCxXQUFXLEVBQUUsVUFBVSxVQUFVLEVBQUU7WUFDL0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ2QsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJO2dCQUN2QixJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxVQUFVLEVBQUU7b0JBQ3pDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUN4QztxQkFDSTtvQkFDRCxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztpQkFDM0M7YUFDSixDQUFDLENBQUM7U0FDTjtLQUNKOztJQUVELFFBQVEsRUFBRTtRQUNOLFVBQVUsRUFBRSxVQUFVLFVBQVUsRUFBRTtZQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2hDO0tBQ0o7OztBQ3JDTCxlQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7SUFJWCxDQUFDOztJQUVELFNBQVMsRUFBRTtRQUNQLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLFFBQVE7U0FDakI7O1FBRUQsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFLFNBQVM7U0FDbEI7S0FDSjs7SUFFRCxPQUFPLEVBQUU7UUFDTCxXQUFXLEVBQUUsVUFBVSxJQUFJLEVBQUU7WUFDekIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ2QsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNwQixPQUFPO2FBQ1Y7WUFDRCxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2hCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNsQzs7WUFFRCxFQUFFLENBQUMsSUFBSTtnQkFDSCxlQUFlO2dCQUNmO29CQUNJLElBQUksRUFBRSxJQUFJO2lCQUNiO2FBQ0osQ0FBQztTQUNMO0tBQ0o7OztBQ3JDTCxjQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7SUFJWCxDQUFDOzs7QUNMTCxXQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7SUFJWCxDQUFDOzs7QUNMTCxpQkFBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7O0lBSVgsQ0FBQzs7O0FDTEwscUJBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7OztJQWFYLENBQUM7O0lBRUQsU0FBUyxFQUFFO1FBQ1AsRUFBRSxFQUFFO1lBQ0EsSUFBSSxFQUFFLFFBQVE7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDUCxJQUFJLEVBQUUsUUFBUTtTQUNqQjtLQUNKOzs7QUN2QkwsYUFBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQlgsQ0FBQztJQUNELFNBQVMsRUFBRTtRQUNQLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsS0FBSyxFQUFFO1lBQ0gsSUFBSSxFQUFFLFFBQVE7U0FDakI7UUFDRCxLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsUUFBUTtTQUNqQjtRQUNELElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLFFBQVE7U0FDakI7UUFDRCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsU0FBUztTQUNsQjtRQUNELFFBQVEsRUFBRTtZQUNOLElBQUksRUFBRSxTQUFTO1NBQ2xCO0tBQ0o7OztBQzdDTCxZQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUErQlgsQ0FBQzs7SUFFRCxTQUFTLEVBQUU7UUFDUCxXQUFXLEVBQUU7WUFDVCxJQUFJLEVBQUUsUUFBUTtTQUNqQjtRQUNELEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsS0FBSyxFQUFFO1lBQ0gsSUFBSSxFQUFFLFFBQVE7U0FDakI7UUFDRCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsUUFBUTtTQUNqQjtRQUNELElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsS0FBSyxFQUFFO1lBQ0gsSUFBSSxFQUFFLFFBQVE7U0FDakI7UUFDRCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsUUFBUTtTQUNqQjtRQUNELElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFLFFBQVE7U0FDakI7S0FDSjtJQUNELElBQUksRUFBRSxZQUFZO1FBQ2QsT0FBTztZQUNILGVBQWUsRUFBRSxPQUFPO1lBQ3hCLGtCQUFrQixFQUFFLFVBQVU7U0FDakM7S0FDSjs7SUFFRCxRQUFRLEVBQUU7UUFDTixLQUFLLEVBQUUsVUFBVSxLQUFLLEVBQUU7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUM7U0FDckI7S0FDSjs7SUFFRCxVQUFVLEVBQUUsWUFBWTs7S0FFdkI7OztBQzlFTCxhQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQ1gsQ0FBQzs7SUFFRCxTQUFTLEVBQUU7O1FBRVAsS0FBSyxFQUFFO1lBQ0gsSUFBSSxFQUFFLFFBQVE7U0FDakI7O1FBRUQsV0FBVyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFFBQVE7U0FDakI7O1FBRUQsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLE9BQU87WUFDYixPQUFPLEVBQUUsSUFBSTtTQUNoQjs7UUFFRCxLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsUUFBUTtTQUNqQjs7UUFFRCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsUUFBUTtTQUNqQjs7UUFFRCxRQUFRLEVBQUU7WUFDTixJQUFJLEVBQUUsUUFBUTtTQUNqQjs7UUFFRCxZQUFZLEVBQUU7WUFDVixJQUFJLEVBQUUsUUFBUTtTQUNqQjtLQUNKOztJQUVELElBQUksRUFBRSxZQUFZO1FBQ2QsT0FBTztZQUNILE9BQU8sRUFBRSxLQUFLO1lBQ2QsVUFBVSxFQUFFLElBQUk7U0FDbkI7S0FDSjs7SUFFRCxPQUFPLEVBQUU7UUFDTCxXQUFXLEVBQUUsVUFBVSxLQUFLLEVBQUU7WUFDMUIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUNmLE9BQU8sRUFBRSxDQUFDO2FBQ2I7WUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7S0FDSjs7SUFFRCxPQUFPLEVBQUU7UUFDTCxVQUFVLEVBQUUsWUFBWTtZQUNwQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDZCxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDOUMsT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFDRCxFQUFFLENBQUMsR0FBRyxDQUFDO2dCQUNILE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO2FBQzlCLENBQUMsQ0FBQztTQUNOOztRQUVELFNBQVMsRUFBRSxVQUFVLEtBQUssRUFBRTtZQUN4QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDZCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQztZQUN6QixFQUFFLENBQUMsR0FBRyxDQUFDO2dCQUNILEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRztnQkFDdEIsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLE9BQU8sRUFBRSxLQUFLO2FBQ2pCLENBQUMsQ0FBQztTQUNOOztRQUVELGFBQWEsRUFBRSxVQUFVLE1BQU0sRUFBRTtZQUM3QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDZCxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3RDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7WUFFN0IsSUFBSSxVQUFVLElBQUksSUFBSSxFQUFFO2dCQUNwQixVQUFVLEdBQUcsQ0FBQyxDQUFDO2FBQ2xCOztZQUVELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDaEIsVUFBVSxHQUFHLFVBQVUsR0FBRyxDQUFDLEdBQUcsTUFBTTs4QkFDdEIsQ0FBQzs4QkFDRCxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixFQUFFLENBQUMsR0FBRyxDQUFDO29CQUNILFVBQVUsRUFBRSxVQUFVO2lCQUN6QixDQUFDLENBQUM7YUFDTjtpQkFDSSxJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUU7Z0JBQ3ZCLFVBQVUsR0FBRyxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUM7OEJBQ2pCLE1BQU07OEJBQ04sVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDN0IsRUFBRSxDQUFDLEdBQUcsQ0FBQztvQkFDSCxVQUFVLEVBQUUsVUFBVTtpQkFDekIsQ0FBQyxDQUFDO2FBQ047aUJBQ0ksSUFBSSxNQUFNLElBQUksT0FBTyxFQUFFO2dCQUN4QixFQUFFLENBQUMsR0FBRyxDQUFDO29CQUNILEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRztvQkFDM0IsVUFBVSxFQUFFLFVBQVU7b0JBQ3RCLE9BQU8sRUFBRSxLQUFLO2lCQUNqQixDQUFDLENBQUM7YUFDTjtTQUNKO0tBQ0o7O0lBRUQsVUFBVSxFQUFFLFlBQVk7UUFDcEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsRUFBRSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDakIsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQ1YsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDZCxVQUFVLElBQUksRUFBRSxLQUFLLEVBQUU7Z0JBQ25CLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2xDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUM3QixFQUFFLENBQUMsR0FBRyxDQUFDO3dCQUNILFVBQVUsRUFBRSxLQUFLO3FCQUNwQixDQUFDLENBQUM7aUJBQ047YUFDSjtTQUNKLENBQUM7O1FBRUYsRUFBRSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQyxFQUFFO1lBQ25DLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUMzQixPQUFPLEtBQUssQ0FBQzthQUNoQjtZQUNELEVBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQ0gsT0FBTyxFQUFFLEtBQUs7YUFDakIsQ0FBQyxDQUFDO1NBQ04sQ0FBQzs7UUFFRixFQUFFLENBQUMscUJBQXFCLEdBQUcsVUFBVSxDQUFDLEVBQUU7WUFDcEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDcEIsT0FBTzthQUNWO1lBQ0QsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFOztnQkFFYixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUI7aUJBQ0ksSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFOztnQkFFbEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNuQixFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzVCO2lCQUNJLElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRTs7Z0JBRWpCLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDN0I7U0FDSixDQUFDOztRQUVGLFFBQVEsQ0FBQyxnQkFBZ0I7WUFDckIsT0FBTztZQUNQLEVBQUUsQ0FBQyxvQkFBb0I7U0FDMUIsQ0FBQztRQUNGLFFBQVEsQ0FBQyxnQkFBZ0I7WUFDckIsU0FBUztZQUNULEVBQUUsQ0FBQyxxQkFBcUI7U0FDM0IsQ0FBQztLQUNMOztJQUVELGFBQWEsRUFBRSxZQUFZO1FBQ3ZCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLEVBQUUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFFBQVEsQ0FBQyxtQkFBbUI7WUFDeEIsT0FBTztZQUNQLEVBQUUsQ0FBQyxvQkFBb0I7U0FDMUIsQ0FBQztRQUNGLFFBQVEsQ0FBQyxtQkFBbUI7WUFDeEIsU0FBUztZQUNULEVBQUUsQ0FBQyxxQkFBcUI7U0FDM0IsQ0FBQztLQUNMOzs7QUNqTkwsV0FBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTZIWCxDQUFDOztJQUVELFNBQVMsRUFBRTtRQUNQLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLFFBQVE7U0FDakI7UUFDRCxLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsUUFBUTtTQUNqQjtRQUNELE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxRQUFRO1lBQ2QsS0FBSyxFQUFFLENBQUM7U0FDWDtRQUNELFFBQVEsRUFBRTtZQUNOLElBQUksRUFBRSxRQUFRO1lBQ2QsS0FBSyxFQUFFLEVBQUU7U0FDWjtRQUNELFNBQVMsRUFBRTtZQUNQLElBQUksRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsSUFBSSxFQUFFLE9BQU87U0FDaEI7UUFDRCxZQUFZLEVBQUU7WUFDVixJQUFJLEVBQUUsUUFBUTtTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNQLElBQUksRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFFBQVE7U0FDakI7UUFDRCxRQUFRLEVBQUU7WUFDTixJQUFJLEVBQUUsVUFBVTtTQUNuQjtRQUNELGdCQUFnQixFQUFFO1lBQ2QsSUFBSSxFQUFFLFVBQVU7U0FDbkI7S0FDSjs7SUFFRCxJQUFJLEVBQUUsWUFBWTtRQUNkLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLElBQUksV0FBVyxHQUFHLFlBQVk7WUFDMUIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7bUJBQ2hCLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO2NBQzNCO2dCQUNFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSTtvQkFDVixFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztvQkFDdEIsVUFBVSxLQUFLLEVBQUU7d0JBQ2IsUUFBUSxDQUFDLElBQUksQ0FBQzs0QkFDVixJQUFJLEVBQUUsS0FBSyxHQUFHLE1BQU07NEJBQ3BCLEdBQUcsRUFBRSxLQUFLO3lCQUNiLENBQUMsQ0FBQztxQkFDTjtpQkFDSixDQUFDO2FBQ0w7WUFDRCxPQUFPLFFBQVEsQ0FBQztTQUNuQixDQUFDO1FBQ0YsT0FBTztZQUNILFFBQVEsRUFBRSxXQUFXLEVBQUU7WUFDdkIsS0FBSyxFQUFFLENBQUM7WUFDUixXQUFXLEVBQUUsQ0FBQztTQUNqQjtLQUNKOztJQUVELFFBQVEsRUFBRTtRQUNOLFFBQVEsRUFBRSxVQUFVLEtBQUssRUFBRTtZQUN2QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDZCxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDakIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuRTtRQUNELE9BQU8sRUFBRSxVQUFVLEtBQUssRUFBRTtZQUN0QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDZCxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkQ7S0FDSjs7SUFFRCxPQUFPLEVBQUU7O1FBRUwsUUFBUSxFQUFFLFlBQVk7WUFDbEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ2QsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdkIsT0FBTzthQUNWO1lBQ0QsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2hDOztRQUVELFFBQVEsRUFBRSxZQUFZO1lBQ2xCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztZQUNkLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN0QyxPQUFPO2FBQ1Y7WUFDRCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzlDOztRQUVELElBQUksRUFBRSxZQUFZO1lBQ2QsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ2QsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdkIsT0FBTzthQUNWO1lBQ0QsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztZQUU3QixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2xCLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNwQztTQUNKOztRQUVELElBQUksRUFBRSxZQUFZO1lBQ2QsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ2QsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3RDLE9BQU87YUFDVjtZQUNELEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNsQixFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ2xEO1NBQ0o7O1FBRUQsVUFBVSxFQUFFLFVBQVUsSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsV0FBVyxFQUFFLElBQUk7YUFDcEIsQ0FBQyxDQUFDO1NBQ047O1FBRUQsV0FBVyxFQUFFLFlBQVk7WUFDckIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ2QsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNqQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2QsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ3RDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2lCQUMzRDs7Z0JBRUQsRUFBRSxDQUFDLEdBQUcsQ0FBQztvQkFDSCxLQUFLLEVBQUUsS0FBSztpQkFDZixDQUFDLENBQUM7YUFDTjtTQUNKOztRQUVELFVBQVUsRUFBRSxVQUFVLE1BQU0sRUFBRTtZQUMxQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDZCxJQUFJLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztZQUU1QixJQUFJLE1BQU0sSUFBSSxPQUFPLEVBQUU7Z0JBQ25CLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO3VCQUN2QixXQUFXLEdBQUcsQ0FBQzt1QkFDZixXQUFXLElBQUksS0FBSztrQkFDekI7b0JBQ0UsT0FBTyxHQUFHLFdBQVcsQ0FBQztpQkFDekI7YUFDSjtpQkFDSSxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLE9BQU8sR0FBRyxPQUFPLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNDO2lCQUNJLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRTtnQkFDdkIsT0FBTyxHQUFHLE9BQU8sR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZEOztZQUVELEVBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQ0gsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFdBQVcsRUFBRSxPQUFPO2FBQ3ZCLENBQUMsQ0FBQztTQUNOO0tBQ0o7O0lBRUQsVUFBVSxFQUFFLFlBQVk7UUFDcEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDOztRQUVqQixFQUFFLENBQUMscUJBQXFCLEdBQUcsVUFBVSxDQUFDLEVBQUU7WUFDcEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNyQixJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7O2dCQUViLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN6QjtpQkFDSSxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7O2dCQUVsQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkI7aUJBQ0ksSUFBSSxJQUFJLElBQUksRUFBRSxFQUFFOztnQkFFakIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMxQjtTQUNKLENBQUM7O1FBRUYsUUFBUSxDQUFDLGdCQUFnQjtZQUNyQixTQUFTO1lBQ1QsRUFBRSxDQUFDLHFCQUFxQjtTQUMzQixDQUFDO0tBQ0w7O0lBRUQsYUFBYSxFQUFFLFlBQVk7UUFDdkIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsUUFBUSxDQUFDLGdCQUFnQjtZQUNyQixTQUFTO1lBQ1QsRUFBRSxDQUFDLHFCQUFxQjtTQUMzQixDQUFDO0tBQ0w7Q0FDSjs7QUM1VUQsWUFBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpQ1gsQ0FBQzs7SUFFRCxTQUFTLEVBQUU7UUFDUCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsUUFBUTtZQUNkLEtBQUssRUFBRSxNQUFNO1NBQ2hCO1FBQ0QsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztTQUM5QjtRQUNELFFBQVEsRUFBRTtZQUNOLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUM7U0FDOUI7UUFDRCxNQUFNLEVBQUU7WUFDSixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDO1NBQzlCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFFBQVE7U0FDakI7UUFDRCxLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsVUFBVTtTQUNuQjtLQUNKOztJQUVELElBQUksRUFBRSxZQUFZO1FBQ2QsT0FBTztZQUNILE9BQU8sRUFBRSxLQUFLO1NBQ2pCO0tBQ0o7O0lBRUQsUUFBUSxFQUFFOztLQUVUOztJQUVELE9BQU8sRUFBRTtRQUNMLEtBQUssRUFBRSxZQUFZO1lBQ2YsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ2QsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2hDLFVBQVU7Z0JBQ04sWUFBWTtvQkFDUixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFFO2lCQUN4QjtnQkFDRCxHQUFHO2FBQ04sQ0FBQztZQUNGLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1NBQ3hDO0tBQ0o7O0lBRUQsVUFBVSxFQUFFLFlBQVk7UUFDcEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQzNDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2VBQ25CLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNO1VBQ3ZDO1lBQ0UsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUk7Z0JBQ3RDLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxNQUFNLEVBQUU7b0JBQ3JCLEVBQUUsQ0FBQyxHQUFHLENBQUM7d0JBQ0gsT0FBTyxFQUFFLElBQUk7cUJBQ2hCLENBQUMsQ0FBQztpQkFDTjthQUNKLENBQUMsQ0FBQztTQUNOO0tBQ0o7O0lBRUQsYUFBYSxFQUFFLFlBQVk7S0FDMUI7Q0FDSjs7QUNyR0QsV0FBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7O0lBSVgsQ0FBQzs7O0FDTEwsV0FBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JYLENBQUM7SUFDRCxTQUFTLEVBQUU7UUFDUCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsUUFBUTtTQUNqQjtRQUNELElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxRQUFRO1NBQ2pCO0tBQ0o7OztBQ3pCTDs7Ozs7QUFLQSxBQXVCQSxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ1YsTUFBTSxFQUFFLE1BQU07SUFDZCxNQUFNLEVBQUUsTUFBTTtJQUNkLEtBQUssRUFBRSxLQUFLO0lBQ1osT0FBTyxFQUFFLE9BQU87SUFDaEIsTUFBTSxFQUFFLE1BQU07SUFDZCxJQUFJLEVBQUUsSUFBSTtJQUNWLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLElBQUksRUFBRSxJQUFJOztJQUVWLFVBQVUsRUFBRSxVQUFVO0lBQ3RCLGNBQWMsRUFBRSxjQUFjOztJQUU5QixNQUFNLEVBQUUsTUFBTTtJQUNkLEtBQUssRUFBRSxLQUFLO0lBQ1osTUFBTSxFQUFFLE1BQU07SUFDZCxJQUFJLEVBQUUsSUFBSTs7SUFFVixLQUFLLEVBQUUsS0FBSztJQUNaLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLElBQUk7Q0FDYixDQUFDLENBQUM7Ozs7In0=
