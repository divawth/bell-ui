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

    events: {
        setActiveMenu: function (event, data) {
            console.log(data);
        }
    },

    afterMount: function (argument) {


    }
};

var MenuItem = {
    template: `
        <div class="bell-menu-item" on-click="handleClick(name)">
            {{$children}}
        </div>
    `,

    propTypes: {
        name: {
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
                {{label}}
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
        <span class="bell-select-arrow"></span>
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
        <li class="bell-page-item" on-click="fastPrev()">
            ...
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
        <li class="bell-page-item" on-click="fastNext()">
            ...
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
            <
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
            {{{'>'}}}
        </li>
    </ul>
    {{else}}
        <div class="bell-page-simple">
            <span class="bell-page-item bell-page-prev{{#if current <= 1}} bell-disabled{{/if}}" on-click="prev()">
                <
            </span>

            <div class="bell-page-input">
                <Input placeholder="请输入..."
                    model="currentPage"
                    size="{{size}}"
                ></Input>
            </div>

            {{'/'}}

            <span class="bell-page-item{{#if current == count}} bell-active{{/if}}" on-click="changePage(count)">
                {{count}}
            </span>

            <span class="bell-page-item bell-page-next {{count}}{{#if current >= count}} bell-disabled{{/if}}" on-click="next()">
                {{{'>'}}}
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
            count: 0
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
        },

        next: function () {
            var me = this;
            if (me.get('current') >= me.get('count')) {
                return;
            }
            me.increase('current', 1, me.get('count'));
        },

        changePage: function (page) {
            this.set({
                current: page
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
    Page: Page
});

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvU2lkZXIuanMiLCJjb21wb25lbnRzL2xheW91dC9Db250ZW50LmpzIiwiY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwiY29tcG9uZW50cy9sYXlvdXQvTWVudS5qcyIsImNvbXBvbmVudHMvbGF5b3V0L01lbnVJdGVtLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvU3VibWVudS5qcyIsImNvbXBvbmVudHMvbGF5b3V0L0NhcmQuanMiLCJjb21wb25lbnRzL2JyZWFkY3J1bWIvQnJlYWRjcnVtYi5qcyIsImNvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iSXRlbS5qcyIsImNvbXBvbmVudHMvYnV0dG9uL0J1dHRvbi5qcyIsImNvbXBvbmVudHMvaW5wdXQvSW5wdXQuanMiLCJjb21wb25lbnRzL3NlbGVjdC9TZWxlY3QuanMiLCJjb21wb25lbnRzL3BhZ2UvUGFnZS5qcyIsImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1zaWRlclwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1mb290ZXJcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgU2lkZXIgZnJvbSAnLi9TaWRlcidcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1sYXlvdXR7eyNpZiBoYXNTaWRlcn19IGJlbGwtaGFzLXNpZGVye3svaWZ9fVwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGFzU2lkZXI6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGFmdGVyTW91bnQ6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBpZiAobWUuJG9wdGlvbnMucHJvcHMuJGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgbWUuJG9wdGlvbnMucHJvcHMuJGNoaWxkcmVuLnNvbWUoY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC50YWcgPT0gJ1NpZGVyJykge1xuICAgICAgICAgICAgICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzU2lkZXI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLW1lbnVcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcblxuICAgIGV2ZW50czoge1xuICAgICAgICBzZXRBY3RpdmVNZW51OiBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFmdGVyTW91bnQ6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1tZW51LWl0ZW1cIiBvbi1jbGljaz1cImhhbmRsZUNsaWNrKG5hbWUpXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcblxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBoYW5kbGVDbGljazogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAobWUuZ2V0KCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5maXJlKFxuICAgICAgICAgICAgICAgICdzZXRBY3RpdmVNZW51JyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1zdWItbWVudVwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLWNhcmRcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1icmVhZC1jcnVtYlwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1icmVhZC1jcnVtYi1pdGVtXCI+XG4gICAgICAgICAgICA8YSB7eyNpZiB0b319aHJlZj1cInt7dG99fVwie3svaWZ9fSBjbGFzcz1cImJlbGwtYnJlYWQtY3J1bWItbGlua1wiPlxuICAgICAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1icmVhZC1jcnVtYi1nYXBcIj5cbiAgICAgICAgICAgICAgICB7eyNpZiBzZXBhcmF0b3J9fVxuICAgICAgICAgICAgICAgICAgICB7e3NlcGFyYXRvcn19XG4gICAgICAgICAgICAgICAge3tlbHNlfX1cbiAgICAgICAgICAgICAgICAgICAgL1xuICAgICAgICAgICAgICAgIHt7L2lmfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgIGAsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgdG86IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHNlcGFyYXRvcjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtYnV0dG9uXG4gICAgICAgICAgICB7eyNpZiB0eXBlfX0gYmVsbC17e3R5cGV9fXt7L2lmfX1cbiAgICAgICAgICAgIHt7I2lmIHNoYXBlfX0gYmVsbC17e3NoYXBlfX17ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBzaXplfX0gYmVsbC17e3NpemV9fXt7L2lmfX1cbiAgICAgICAgICAgIHt7I2lmIGxvbmd9fSBiZWxsLWxvbmd7ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBkaXNhYmxlZH19IGJlbGwtZGlzYWJsZWR7ey9pZn19XG4gICAgICAgIFwiIG9uLWNsaWNrPVwiY2xpY2tcIj5cblxuICAgICAgICAgICAge3sjaWYgaWNvbn19XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiZWxsLWljb24ge3tpY29ufX1cIj48L2k+XG4gICAgICAgICAgICB7ey9pZn19XG5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHt7bGFiZWx9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3BUeXBlczoge1xuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGxvbmc6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiYmVsbC1pbnB1dC13cmFwcGVyXCJcbiAgICB7eyNpZiBzdHlsZX19IHN0eWxlPVwie3tzdHlsZX19XCJ7ey9pZn19XG4+XG4gICAge3sjaWYgdHlwZSAhPSBURVhUX1RZUEVfVEVYVEFSRUF9fVxuICAgICAgICB7eyNpZiAhbGFiZWx9fVxuICAgICAgICAgICAgPGkgY2xhc3M9XCJiZWxsLWlucHV0LWljb257eyNpZiBpY29ufX0gaWNvbnt7L2lmfX1cIiBvbi1jbGljaz1cImNsaWNrXCI+PC9pPlxuICAgICAgICB7e2Vsc2V9fVxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLWlucHV0LWxhYmVsXCIgb24tY2xpY2s9XCJjbGlja1wiPlxuICAgICAgICAgICAgICAgIHt7bGFiZWx9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICB7ey9pZn19XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJiZWxsLWlucHV0e3sjaWYgc2l6ZX19IGJlbGwtaW5wdXQte3tzaXplfX17ey9pZn19XCJcbiAgICAgICAge3sjaWYgcGxhY2Vob2xkZXJ9fSBwbGFjZWhvbGRlcj1cInt7cGxhY2Vob2xkZXJ9fVwie3svaWZ9fVxuICAgICAgICB7eyNpZiBkaXNhYmxlZH19ZGlzYWJsZWQ9XCJkaXNhYmxlZFwie3svaWZ9fVxuICAgICAgICBtb2RlbD1cInZhbHVlXCJcbiAgICAgICAgPjwvaW5wdXQ+XG5cbiAgICB7e2Vsc2V9fVxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJiZWxsLXRleHRhcmVhXCJcbiAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiB7eyNpZiByb3dzfX17e3Jvd3MgKiAyNX19e3tlbHNlfX01MHt7L2lmfX1weFwiXG4gICAgICAgICAgICB7eyNpZiByb3dzfX0gcm93cz1cInt7cm93c319XCJ7ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBwbGFjZWhvbGRlcn19IHBsYWNlaG9sZGVyPVwie3twbGFjZWhvbGRlcn19XCIge3tpZn19XG4gICAgICAgICAgICB7eyNpZiBkaXNhYmxlZH19ZGlzYWJsZWQ9XCJkaXNhYmxlZFwie3svaWZ9fVxuICAgICAgICAgICAgbW9kZWw9XCJ2YWx1ZVwiXG4gICAgICAgID5cbiAgICAgICAgPC90ZXh0YXJlYT5cbiAgICB7ey9pZn19XG5cbjwvZGl2PlxuICAgIGAsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHJvd3M6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBURVhUX1RZUEVfSU5QVVQ6ICdpbnB1dCcsXG4gICAgICAgICAgICBURVhUX1RZUEVfVEVYVEFSRUE6ICd0ZXh0YXJlYSdcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaGVyczoge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZnRlck1vdW50OiBmdW5jdGlvbiAoKSB7XG5cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiYmVsbC1zZWxlY3Rcbnt7I2lmIHNpemV9fSBiZWxsLXNlbGVjdC17e3NpemV9fXt7L2lmfX1cbnt7I2lmIGRpc2FibGVkfX0gYmVsbC1zZWxlY3QtZGlzYWJsZWR7ey9pZn19XG5cIlxuICAgIHt7I2lmIHN0eWxlfX0gc3R5bGU9XCJ7e3N0eWxlfX1cInt7L2lmfX1cbj5cbiAgICA8ZGl2IGNsYXNzPVwiYmVsbC1zZWxlY3QtYnV0dG9ue3sjaWYgdmlzaWJsZX19IGJlbGwtYWN0aXZle3svaWZ9fVwiIG9uLWNsaWNrPVwidG9nZ2xlTWVudSgpXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbW9kZWw9XCJ2YWx1ZVwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1zZWxlY3QtdmFsdWV7eyNpZiB2YWx1ZVRvVGV4dCh2YWx1ZSkgPT0gbnVsbH19IGJlbGwtaGlkZXt7L2lmfX1cIj5cbiAgICAgICAgICAgIHt7e3ZhbHVlVG9UZXh0KHZhbHVlKX19fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1zZWxlY3QtcGxhY2Vob2xkZXJ7eyNpZiB2YWx1ZVRvVGV4dCh2YWx1ZSkgIT0gbnVsbH19IGJlbGwtaGlkZXt7L2lmfX1cIj5cbiAgICAgICAgICAgIHt7I2lmIGRlZmF1bHRUZXh0fX1cbiAgICAgICAgICAgICAgICB7e3tkZWZhdWx0VGV4dH19fVxuICAgICAgICAgICAge3tlbHNlfX1cbiAgICAgICAgICAgICAgICDor7fpgInmi6kuLi5cbiAgICAgICAgICAgIHt7L2lmfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtc2VsZWN0LWFycm93XCI+PC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImJlbGwtc2VsZWN0LWRyb3Bkb3due3sjaWYgIXZpc2libGV9fSBiZWxsLWhpZGV7ey9pZn19XCJcbiAgICB7eyNpZiBzdHlsZX19IHN0eWxlPVwie3tzdHlsZX19XCJ7ey9pZn19XG4gICAgPlxuICAgICAgICA8dWwgY2xhc3M9XCJiZWxsLXNlbGVjdC1kcm9wZG93bi1saXN0XCI+XG4gICAgICAgICAgICB7eyNlYWNoIGxpc3Q6aW5kZXh9fVxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1zZWxlY3QtZHJvcGRvd24taXRlbXt7I2lmIGZvY3VzSW5kZXggPT0gaW5kZXh9fSBiZWxsLWZvY3Vze3svaWZ9fXt7I2lmIHZhbHVlID09IHZhbH19IGJlbGwtYWN0aXZle3svaWZ9fVwiIG9uLWNsaWNrPVwiaXRlbUNsaWNrKGluZGV4KVwiPlxuICAgICAgICAgICAgICAgIHt7dGV4dH19XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAge3svZWFjaH19XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiAgICBgLFxuXG4gICAgcHJvcFR5cGVzOiB7XG5cbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVmYXVsdFRleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgbGlzdDoge1xuICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgIHJlcXVpcmU6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcblxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuXG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuXG4gICAgICAgIGF1dG9Db21wbGV0ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGZvY3VzSW5kZXg6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmaWx0ZXJzOiB7XG4gICAgICAgIHZhbHVlVG9UZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVNYXBbdmFsdWVdO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdG9nZ2xlTWVudTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIGlmIChtZS5nZXQoJ2Rpc2FibGVkJykgfHwgbWUuZ2V0KCdhdXRvQ29tcGxldGUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogIW1lLmdldCgndmlzaWJsZScpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpdGVtQ2xpY2s6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIHZhciBsaXN0ID0gbWUuZ2V0KCdsaXN0JylcbiAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGxpc3RbaW5kZXhdLnZhbCxcbiAgICAgICAgICAgICAgICBmb2N1c0luZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0Rm9jdXNJbmRleDogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIHZhciBmb2N1c0luZGV4ID0gbWUuZ2V0KCdmb2N1c0luZGV4Jyk7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBtZS5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IG1lLmdldCgnbGlzdCcpO1xuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGxpc3QubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgaWYgKGZvY3VzSW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvY3VzSW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3B0aW9uID09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICBmb2N1c0luZGV4ID0gZm9jdXNJbmRleCArIDEgPiBsZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZvY3VzSW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIGZvY3VzSW5kZXg6IGZvY3VzSW5kZXhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbiA9PSAnZG93bicpIHtcbiAgICAgICAgICAgICAgICBmb2N1c0luZGV4ID0gZm9jdXNJbmRleCAtIDEgPCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBsZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZvY3VzSW5kZXggLSAxO1xuICAgICAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIGZvY3VzSW5kZXg6IGZvY3VzSW5kZXhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbiA9PSAnZW50ZXInKSB7XG4gICAgICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGxpc3RbZm9jdXNJbmRleF0udmFsLFxuICAgICAgICAgICAgICAgICAgICBmb2N1c0luZGV4OiBmb2N1c0luZGV4LFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFmdGVyTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgbWUudmFsdWVNYXAgPSB7fTtcbiAgICAgICAgWW94LmFycmF5LmVhY2goXG4gICAgICAgICAgICBtZS5nZXQoJ2xpc3QnKSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIG1lLnZhbHVlTWFwW2l0ZW0udmFsXSA9IGl0ZW0udGV4dDtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS52YWwgPT0gbWUuZ2V0KCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c0luZGV4OiBpbmRleFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgbWUuZG9jdW1lbnRDbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKG1lLiRlbC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBtZS5kb2N1bWVudEtleWRvd25IYW5kZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGNvZGUgPSBlLmtleUNvZGU7XG4gICAgICAgICAgICBpZiAoIW1lLmdldCgndmlzaWJsZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbWUuc2V0Rm9jdXNJbmRleCgndXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvZGUgPT09IDM4KSB7XG4gICAgICAgICAgICAgICAgLy8gZG93blxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBtZS5zZXRGb2N1c0luZGV4KCdkb3duJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb2RlID09IDEzKSB7XG4gICAgICAgICAgICAgICAgLy8gZW50ZXJcbiAgICAgICAgICAgICAgICBtZS5zZXRGb2N1c0luZGV4KCdlbnRlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnY2xpY2snLFxuICAgICAgICAgICAgbWUuZG9jdW1lbnRDbGlja0hhbmRsZXJcbiAgICAgICAgKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdrZXlkb3duJyxcbiAgICAgICAgICAgIG1lLmRvY3VtZW50S2V5ZG93bkhhbmRlclxuICAgICAgICApO1xuICAgIH0sXG5cbiAgICBiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIG1lLnZhbHVlTWFwID0gbnVsbDtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICBtZS5kb2N1bWVudENsaWNrSGFuZGxlclxuICAgICAgICApO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2tleWRvd24nLFxuICAgICAgICAgICAgbWUuZG9jdW1lbnRLZXlkb3duSGFuZGVyXG4gICAgICAgICk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImJlbGwtcGFnZVxue3sjaWYgc2l6ZX19IGJlbGwtcGFnZS17e3NpemV9fXt7L2lmfX1cbnt7I2lmIGNsYXNzTmFtZX19IHt7Y2xhc3NOYW1lfX17ey9pZn19XG5cIj5cbnt7I3BhcnRpYWwgcGFnZUNlbnRlcn19XG4gICAge3sjaWYgY3VycmVudCAtIDMgPiAxfX1cbiAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW1cIiBvbi1jbGljaz1cImZhc3RQcmV2KClcIj5cbiAgICAgICAgICAgIC4uLlxuICAgICAgICA8L2xpPlxuICAgIHt7L2lmfX1cblxuICAgIHt7I2lmIGN1cnJlbnQgLSAyID4gMX19XG4gICAgICAgIDxsaSBjbGFzcz1cImJlbGwtcGFnZS1pdGVtXCIgb24tY2xpY2s9XCJjaGFuZ2VQYWdlKGN1cnJlbnQgLSAyKVwiPlxuICAgICAgICAgICAge3sgY3VycmVudCAtIDIgfX1cbiAgICAgICAgPC9saT5cbiAgICB7ey9pZn19XG5cbiAgICB7eyNpZiBjdXJyZW50IC0gMSA+IDF9fVxuICAgICAgICA8bGkgY2xhc3M9XCJiZWxsLXBhZ2UtaXRlbVwiIG9uLWNsaWNrPVwiY2hhbmdlUGFnZShjdXJyZW50IC0gMSlcIj5cbiAgICAgICAgICAgIHt7IGN1cnJlbnQgLSAxIH19XG4gICAgICAgIDwvbGk+XG4gICAge3svaWZ9fVxuXG4gICAge3sjaWYgY3VycmVudCAhPSAxICYmIGN1cnJlbnQgIT0gY291bnR9fVxuICAgICAgICA8bGkgY2xhc3M9XCJiZWxsLXBhZ2UtaXRlbSBiZWxsLWFjdGl2ZVwiPlxuICAgICAgICAgICAge3sgY3VycmVudCB9fVxuICAgICAgICA8L2xpPlxuICAgIHt7L2lmfX1cblxuICAgIHt7I2lmIGN1cnJlbnQgKyAxIDwgY291bnR9fVxuICAgICAgICA8bGkgY2xhc3M9XCJiZWxsLXBhZ2UtaXRlbVwiIG9uLWNsaWNrPVwiY2hhbmdlUGFnZShjdXJyZW50ICsgMSlcIj5cbiAgICAgICAgICAgIHt7IGN1cnJlbnQgKyAxIH19XG4gICAgICAgIDwvbGk+XG4gICAge3svaWZ9fVxuXG4gICAge3sjaWYgY3VycmVudCArIDIgPCBjb3VudH19XG4gICAgICAgIDxsaSBjbGFzcz1cImJlbGwtcGFnZS1pdGVtXCIgb24tY2xpY2s9XCJjaGFuZ2VQYWdlKGN1cnJlbnQgKyAyKVwiPlxuICAgICAgICAgICAgPGE+e3sgY3VycmVudCArIDIgfX08L2E+XG4gICAgICAgIDwvbGk+XG4gICAge3svaWZ9fVxuXG4gICAge3sjaWYgY3VycmVudCArIDMgPCBjb3VudH19XG4gICAgICAgIDxsaSBjbGFzcz1cImJlbGwtcGFnZS1pdGVtXCIgb24tY2xpY2s9XCJmYXN0TmV4dCgpXCI+XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgPC9saT5cbiAgICB7ey9pZn19XG57ey9wYXJ0aWFsfX1cblxuICAgIHt7I2lmIHNob3dUb3RhbH19XG4gICAgPHNwYW4gY2xhc3M9XCJiZWxsLXBhZ2UtdG90YWxcIj5cbiAgICAgICAg5YWxIHt7dG90YWx9fSDmnaFcbiAgICA8L3NwYW4+XG4gICAge3svaWZ9fVxuXG4gICAge3sjaWYgc2hvd1NpemVyfX1cbiAgICA8ZGl2IGNsYXNzPVwiYmVsbC1wYWdlLXNlbGVjdFwiPlxuICAgICAgICA8U2VsZWN0IGxpc3Q9XCJ7e3BhZ2VMaXN0fX1cIlxuICAgICAgICAgICAgbW9kZWw9XCJwYWdlU2l6ZVwiXG4gICAgICAgICAgICBzaXplPVwie3tzaXplfX1cIlxuICAgICAgICAvPlxuICAgIDwvZGl2PlxuICAgIHt7L2lmfX1cblxuICAgIHt7I2lmICFzaW1wbGV9fVxuICAgIDx1bCBjbGFzcz1cImJlbGwtcGFnZS1saXN0XCI+XG5cbiAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW0gYmVsbC1wYWdlLXByZXZ7eyNpZiBjdXJyZW50IDw9IDF9fSBiZWxsLWRpc2FibGVke3svaWZ9fVwiIG9uLWNsaWNrPVwicHJldigpXCI+XG4gICAgICAgICAgICA8XG4gICAgICAgIDwvbGk+XG5cbiAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW17eyNpZiBjdXJyZW50ID09IDF9fSBiZWxsLWFjdGl2ZXt7L2lmfX1cIiBvbi1jbGljaz1cImNoYW5nZVBhZ2UoMSlcIj5cbiAgICAgICAgICAgIDFcbiAgICAgICAgPC9saT5cblxuICAgICAgICB7eyNpZiBjb3VudCA+IDF9fVxuICAgICAgICAgICAge3s+IHBhZ2VDZW50ZXJ9fVxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW17eyNpZiBjdXJyZW50ID09IGNvdW50fX0gYmVsbC1hY3RpdmV7ey9pZn19XCIgb24tY2xpY2s9XCJjaGFuZ2VQYWdlKGNvdW50KVwiPlxuICAgICAgICAgICAgICAgIHt7Y291bnR9fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAge3svaWZ9fVxuXG4gICAgICAgIDxsaSBjbGFzcz1cImJlbGwtcGFnZS1pdGVtIGJlbGwtcGFnZS1uZXh0IHt7Y291bnR9fXt7I2lmIGN1cnJlbnQgPj0gY291bnR9fSBiZWxsLWRpc2FibGVke3svaWZ9fVwiIG9uLWNsaWNrPVwibmV4dCgpXCI+XG4gICAgICAgICAgICB7e3snPid9fX1cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIHt7ZWxzZX19XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLXBhZ2Utc2ltcGxlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtcGFnZS1pdGVtIGJlbGwtcGFnZS1wcmV2e3sjaWYgY3VycmVudCA8PSAxfX0gYmVsbC1kaXNhYmxlZHt7L2lmfX1cIiBvbi1jbGljaz1cInByZXYoKVwiPlxuICAgICAgICAgICAgICAgIDxcbiAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtcGFnZS1pbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpS4uLlwiXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsPVwiY3VycmVudFBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwie3tzaXplfX1cIlxuICAgICAgICAgICAgICAgID48L0lucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHt7Jy8nfX1cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLXBhZ2UtaXRlbXt7I2lmIGN1cnJlbnQgPT0gY291bnR9fSBiZWxsLWFjdGl2ZXt7L2lmfX1cIiBvbi1jbGljaz1cImNoYW5nZVBhZ2UoY291bnQpXCI+XG4gICAgICAgICAgICAgICAge3tjb3VudH19XG4gICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW0gYmVsbC1wYWdlLW5leHQge3tjb3VudH19e3sjaWYgY3VycmVudCA+PSBjb3VudH19IGJlbGwtZGlzYWJsZWR7ey9pZn19XCIgb24tY2xpY2s9XCJuZXh0KClcIj5cbiAgICAgICAgICAgICAgICB7e3snPid9fX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAge3svaWZ9fVxuXG4gICAge3sjaWYgc2hvd0VsZXZhdG9yfX1cbiAgICA8ZGl2IGNsYXNzPVwiYmVsbC1wYWdlLWVsZXZhdG9yXCI+XG4gICAgICAgIOi3s+iHs1xuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1wYWdlLWlucHV0XCI+XG4gICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLor7fovpPlhaUuLi5cIlxuICAgICAgICAgICAgICAgIG1vZGVsPVwiY3VycmVudFBhZ2VcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJ7e3NpemV9fVwiXG4gICAgICAgICAgICA+PC9JbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIOmhtVxuICAgIDwvZGl2PlxuICAgIHt7L2lmfX1cbjwvZGl2PlxuICAgIGAsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgc2ltcGxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICB0b3RhbDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVudDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICB9LFxuICAgICAgICBwYWdlU2l6ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICB2YWx1ZTogMTBcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd1NpemVyOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBwYWdlU2l6ZU9wdHM6IHtcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheSdcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0VsZXZhdG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBzaG93VG90YWw6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgb25DaGFuZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6ICdmdW5jdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAgb25QYWdlU2l6ZUNoYW5nZToge1xuICAgICAgICAgICAgdHlwZTogJ2Z1bmN0aW9uJ1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgdmFyIGdldFBhZ2VMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBhZ2VMaXN0ID0gW107XG4gICAgICAgICAgICBpZiAobWUuZ2V0KCdzaG93U2l6ZXInKVxuICAgICAgICAgICAgICAgICYmIG1lLmdldCgncGFnZVNpemVPcHRzJylcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIFlveC5hcnJheS5lYWNoKFxuICAgICAgICAgICAgICAgICAgICBtZS5nZXQoJ3BhZ2VTaXplT3B0cycpLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHZhbHVlICsgJyDmnaEv6aG1JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWw6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFnZUxpc3Q7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdlTGlzdDogZ2V0UGFnZUxpc3QoKSxcbiAgICAgICAgICAgIGNvdW50OiAwXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2hlcnM6IHtcbiAgICAgICAgcGFnZVNpemU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIG1lLnVwZGF0ZUNvdW50KCk7XG4gICAgICAgICAgICBtZS5nZXQoJ29uUGFnZVNpemVDaGFuZ2UnKSAmJiBtZS5nZXQoJ29uUGFnZVNpemVDaGFuZ2UnKSh2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbnQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIG1lLmdldCgnb25DaGFuZ2UnKSAmJiBtZS5nZXQoJ29uQ2hhbmdlJykodmFsdWUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICBmYXN0UHJldjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIGlmIChtZS5nZXQoJ2N1cnJlbnQnKSA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZS5kZWNyZWFzZSgnY3VycmVudCcsIDUsIDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZhc3ROZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKG1lLmdldCgnY3VycmVudCcpID49IG1lLmdldCgnY291bnQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lLmluY3JlYXNlKCdjdXJyZW50JywgNSwgbWUuZ2V0KCdjb3VudCcpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBwcmV2OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKG1lLmdldCgnY3VycmVudCcpIDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lLmRlY3JlYXNlKCdjdXJyZW50JywgMSwgMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIGlmIChtZS5nZXQoJ2N1cnJlbnQnKSA+PSBtZS5nZXQoJ2NvdW50JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZS5pbmNyZWFzZSgnY3VycmVudCcsIDEsIG1lLmdldCgnY291bnQnKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2hhbmdlUGFnZTogZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBwYWdlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIGlmIChtZS5nZXQoJ3RvdGFsJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgICAgIGlmIChtZS5nZXQoJ3RvdGFsJykgPiBtZS5nZXQoJ3BhZ2VTaXplJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSBNYXRoLmNlaWwobWUuZ2V0KCd0b3RhbCcpIC8gbWUuZ2V0KCdwYWdlU2l6ZScpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgICAgICAgICBjb3VudDogY291bnRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBzZXRDdXJyZW50OiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRQYWdlID0gK21lLmdldCgnY3VycmVudFBhZ2UnKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gbWUuZ2V0KCdjdXJyZW50Jyk7XG4gICAgICAgICAgICB2YXIgY291bnQgPSBtZS5nZXQoJ2NvdW50Jyk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb24gPT0gJ2VudGVyJykge1xuICAgICAgICAgICAgICAgIGlmIChZb3guaXMubnVtYmVyKGN1cnJlbnRQYWdlKVxuICAgICAgICAgICAgICAgICAgICAmJiBjdXJyZW50UGFnZSA+IDBcbiAgICAgICAgICAgICAgICAgICAgJiYgY3VycmVudFBhZ2UgPD0gY291bnRcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnRQYWdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbiA9PSAndXAnKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgPiAxID8gY3VycmVudCAtIDEgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9uID09ICdkb3duJykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50ICsgMSA+IGNvdW50ID8gY291bnQgOiBjdXJyZW50ICsgMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBjdXJyZW50LFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZnRlck1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIG1lLnVwZGF0ZUNvdW50KCk7XG5cbiAgICAgICAgbWUuZG9jdW1lbnRLZXlkb3duSGFuZGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBjb2RlID0gZS5rZXlDb2RlO1xuICAgICAgICAgICAgaWYgKGNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbWUuc2V0Q3VycmVudCgnZG93bicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29kZSA9PT0gMzgpIHtcbiAgICAgICAgICAgICAgICAvLyBkb3duXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIG1lLnNldEN1cnJlbnQoJ3VwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb2RlID09IDEzKSB7XG4gICAgICAgICAgICAgICAgLy8gZW50ZXJcbiAgICAgICAgICAgICAgICBtZS5zZXRDdXJyZW50KCdlbnRlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAna2V5ZG93bicsXG4gICAgICAgICAgICBtZS5kb2N1bWVudEtleWRvd25IYW5kZXJcbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgYmVmb3JlRGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2tleWRvd24nLFxuICAgICAgICAgICAgbWUuZG9jdW1lbnRLZXlkb3duSGFuZGVyXG4gICAgICAgICk7XG4gICAgfVxufTsiLCIvKlxuICogQGZpbGUg5Li75qih5Z2XXG4gKiBAYXV0aG9yIHdhbmd0aWFuaHVhXG4gKi9cblxuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXInXG5pbXBvcnQgU2lkZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9TaWRlcidcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvQ29udGVudCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9Gb290ZXInXG5pbXBvcnQgTWVudSBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L01lbnUnXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9NZW51SXRlbSdcbmltcG9ydCBTdWJtZW51IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvU3VibWVudSdcbmltcG9ydCBDYXJkIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvQ2FyZCdcblxuXG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tICcuL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iJ1xuaW1wb3J0IEJyZWFkY3J1bWJJdGVtIGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1iL0JyZWFkY3J1bWJJdGVtJ1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9idXR0b24vQnV0dG9uJ1xuaW1wb3J0IElucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9JbnB1dCdcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC9TZWxlY3QnXG5pbXBvcnQgUGFnZSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZS9QYWdlJ1xuXG5Zb3guY29tcG9uZW50KHtcbiAgICBMYXlvdXQ6IExheW91dCxcbiAgICBIZWFkZXI6IEhlYWRlcixcbiAgICBTaWRlcjogU2lkZXIsXG4gICAgQ29udGVudDogQ29udGVudCxcbiAgICBGb290ZXI6IEZvb3RlcixcbiAgICBNZW51OiBNZW51LFxuICAgIE1lbnVJdGVtOiBNZW51SXRlbSxcbiAgICBTdWJtZW51OiBTdWJtZW51LFxuICAgIENhcmQ6IENhcmQsXG5cbiAgICBCcmVhZGNydW1iOiBCcmVhZGNydW1iLFxuICAgIEJyZWFkY3J1bWJJdGVtOiBCcmVhZGNydW1iSXRlbSxcblxuICAgIEJ1dHRvbjogQnV0dG9uLFxuICAgIElucHV0OiBJbnB1dCxcbiAgICBTZWxlY3Q6IFNlbGVjdCxcbiAgICBQYWdlOiBQYWdlXG59KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxhQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7SUFJWCxDQUFDOzs7QUNMTCxZQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7SUFJWCxDQUFDOzs7QUNMTCxjQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7SUFJWCxDQUFDOzs7QUNMTCxhQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7SUFJWCxDQUFDOzs7Q0FDSixEQ0RELGFBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7O0lBRUQsSUFBSSxFQUFFLFlBQVk7UUFDZCxPQUFPO1lBQ0gsUUFBUSxFQUFFLEtBQUs7U0FDbEIsQ0FBQztLQUNMOztJQUVELFVBQVUsRUFBRSxVQUFVLFFBQVEsRUFBRTtRQUM1QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZCxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFD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
