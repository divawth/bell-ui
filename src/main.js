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
            var me = this;
            me.$children.some(child => {
                if (child.$options.props.name == data.name) {
                    $(child.$el).addClass('bell-active');
                }
                else {
                    $(child.$el).removeClass('bell-active');
                }
            });
        }
    },

    afterMount: function (argument) {


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
        to: {
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
            if (me.get('to')) {
                location.href = me.get('to');
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
            type: 'string'
        },
        showIcon: {
            type: 'string'
        },
        center: {
            type: 'boolean'
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
    Desc: Desc
});

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvU2lkZXIuanMiLCJjb21wb25lbnRzL2xheW91dC9Db250ZW50LmpzIiwiY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwiY29tcG9uZW50cy9sYXlvdXQvTWVudS5qcyIsImNvbXBvbmVudHMvbGF5b3V0L01lbnVJdGVtLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvU3VibWVudS5qcyIsImNvbXBvbmVudHMvbGF5b3V0L0NhcmQuanMiLCJjb21wb25lbnRzL2JyZWFkY3J1bWIvQnJlYWRjcnVtYi5qcyIsImNvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iSXRlbS5qcyIsImNvbXBvbmVudHMvYnV0dG9uL0J1dHRvbi5qcyIsImNvbXBvbmVudHMvaW5wdXQvSW5wdXQuanMiLCJjb21wb25lbnRzL3NlbGVjdC9TZWxlY3QuanMiLCJjb21wb25lbnRzL3BhZ2UvUGFnZS5qcyIsImNvbXBvbmVudHMvYWxlcnQvQWxlcnQuanMiLCJjb21wb25lbnRzL2FsZXJ0L0Rlc2MuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtaGVhZGVyXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtc2lkZXJcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1jb250ZW50XCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtZm9vdGVyXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IFNpZGVyIGZyb20gJy4vU2lkZXInXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtbGF5b3V0e3sjaWYgaGFzU2lkZXJ9fSBiZWxsLWhhcy1zaWRlcnt7L2lmfX1cIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcblxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhc1NpZGVyOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBhZnRlck1vdW50OiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgaWYgKG1lLiRvcHRpb25zLnByb3BzLiRjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1lLiRvcHRpb25zLnByb3BzLiRjaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQudGFnID09ICdTaWRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc1NpZGVyOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1tZW51XCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG5cbiAgICBldmVudHM6IHtcbiAgICAgICAgc2V0QWN0aXZlTWVudTogZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgbWUuJGNoaWxkcmVuLnNvbWUoY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC4kb3B0aW9ucy5wcm9wcy5uYW1lID09IGRhdGEubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAkKGNoaWxkLiRlbCkuYWRkQ2xhc3MoJ2JlbGwtYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoY2hpbGQuJGVsKS5yZW1vdmVDbGFzcygnYmVsbC1hY3RpdmUnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFmdGVyTW91bnQ6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1tZW51LWl0ZW1cIiBkYXRhLW5hbWU9XCJ7e25hbWV9fVwiIG9uLWNsaWNrPVwiaGFuZGxlQ2xpY2sobmFtZSlcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICB0bzoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcblxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBoYW5kbGVDbGljazogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAobWUuZ2V0KCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1lLmdldCgndG8nKSkge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBtZS5nZXQoJ3RvJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLmZpcmUoXG4gICAgICAgICAgICAgICAgJ3NldEFjdGl2ZU1lbnUnLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLXN1Yi1tZW51XCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtY2FyZFwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLWJyZWFkLWNydW1iXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLWJyZWFkLWNydW1iLWl0ZW1cIj5cbiAgICAgICAgICAgIDxhIHt7I2lmIHRvfX1ocmVmPVwie3t0b319XCJ7ey9pZn19IGNsYXNzPVwiYmVsbC1icmVhZC1jcnVtYi1saW5rXCI+XG4gICAgICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLWJyZWFkLWNydW1iLWdhcFwiPlxuICAgICAgICAgICAgICAgIHt7I2lmIHNlcGFyYXRvcn19XG4gICAgICAgICAgICAgICAgICAgIHt7c2VwYXJhdG9yfX1cbiAgICAgICAgICAgICAgICB7e2Vsc2V9fVxuICAgICAgICAgICAgICAgICAgICAvXG4gICAgICAgICAgICAgICAge3svaWZ9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgYCxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICB0bzoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgc2VwYXJhdG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1idXR0b25cbiAgICAgICAgICAgIHt7I2lmIHR5cGV9fSBiZWxsLXt7dHlwZX19e3svaWZ9fVxuICAgICAgICAgICAge3sjaWYgc2hhcGV9fSBiZWxsLXt7c2hhcGV9fXt7L2lmfX1cbiAgICAgICAgICAgIHt7I2lmIHNpemV9fSBiZWxsLXt7c2l6ZX19e3svaWZ9fVxuICAgICAgICAgICAge3sjaWYgbG9uZ319IGJlbGwtbG9uZ3t7L2lmfX1cbiAgICAgICAgICAgIHt7I2lmIGRpc2FibGVkfX0gYmVsbC1kaXNhYmxlZHt7L2lmfX1cbiAgICAgICAgXCIgb24tY2xpY2s9XCJjbGlja1wiPlxuXG4gICAgICAgICAgICB7eyNpZiBpY29ufX1cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJlbGwtaWNvbiB7e2ljb259fVwiPjwvaT5cbiAgICAgICAgICAgIHt7L2lmfX1cblxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge3tsYWJlbH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgbG9uZzoge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJiZWxsLWlucHV0LXdyYXBwZXJcIlxuICAgIHt7I2lmIHN0eWxlfX0gc3R5bGU9XCJ7e3N0eWxlfX1cInt7L2lmfX1cbj5cbiAgICB7eyNpZiB0eXBlICE9IFRFWFRfVFlQRV9URVhUQVJFQX19XG4gICAgICAgIHt7I2lmICFsYWJlbH19XG5cbiAgICAgICAge3tlbHNlfX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1pbnB1dC1sYWJlbFwiIG9uLWNsaWNrPVwiY2xpY2tcIj5cbiAgICAgICAgICAgICAgICB7e2xhYmVsfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAge3svaWZ9fVxuXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYmVsbC1pbnB1dHt7I2lmIHNpemV9fSBiZWxsLWlucHV0LXt7c2l6ZX19e3svaWZ9fVwiXG4gICAgICAgIHt7I2lmIHBsYWNlaG9sZGVyfX0gcGxhY2Vob2xkZXI9XCJ7e3BsYWNlaG9sZGVyfX1cInt7L2lmfX1cbiAgICAgICAge3sjaWYgZGlzYWJsZWR9fWRpc2FibGVkPVwiZGlzYWJsZWRcInt7L2lmfX1cbiAgICAgICAgbW9kZWw9XCJ2YWx1ZVwiXG4gICAgICAgID48L2lucHV0PlxuXG4gICAge3tlbHNlfX1cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiYmVsbC10ZXh0YXJlYVwiXG4gICAgICAgICAgICBzdHlsZT1cImhlaWdodDoge3sjaWYgcm93c319e3tyb3dzICogMjV9fXt7ZWxzZX19NTB7ey9pZn19cHhcIlxuICAgICAgICAgICAge3sjaWYgcm93c319IHJvd3M9XCJ7e3Jvd3N9fVwie3svaWZ9fVxuICAgICAgICAgICAge3sjaWYgcGxhY2Vob2xkZXJ9fSBwbGFjZWhvbGRlcj1cInt7cGxhY2Vob2xkZXJ9fVwiIHt7aWZ9fVxuICAgICAgICAgICAge3sjaWYgZGlzYWJsZWR9fWRpc2FibGVkPVwiZGlzYWJsZWRcInt7L2lmfX1cbiAgICAgICAgICAgIG1vZGVsPVwidmFsdWVcIlxuICAgICAgICA+XG4gICAgICAgIDwvdGV4dGFyZWE+XG4gICAge3svaWZ9fVxuXG48L2Rpdj5cbiAgICBgLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICByb3dzOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgVEVYVF9UWVBFX0lOUFVUOiAnaW5wdXQnLFxuICAgICAgICAgICAgVEVYVF9UWVBFX1RFWFRBUkVBOiAndGV4dGFyZWEnXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2hlcnM6IHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWZ0ZXJNb3VudDogZnVuY3Rpb24gKCkge1xuXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImJlbGwtc2VsZWN0XG57eyNpZiBzaXplfX0gYmVsbC1zZWxlY3Qte3tzaXplfX17ey9pZn19XG57eyNpZiBkaXNhYmxlZH19IGJlbGwtc2VsZWN0LWRpc2FibGVke3svaWZ9fVxuXCJcbiAgICB7eyNpZiBzdHlsZX19IHN0eWxlPVwie3tzdHlsZX19XCJ7ey9pZn19XG4+XG4gICAgPGRpdiBjbGFzcz1cImJlbGwtc2VsZWN0LWJ1dHRvbnt7I2lmIHZpc2libGV9fSBiZWxsLWFjdGl2ZXt7L2lmfX1cIiBvbi1jbGljaz1cInRvZ2dsZU1lbnUoKVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG1vZGVsPVwidmFsdWVcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtc2VsZWN0LXZhbHVle3sjaWYgdmFsdWVUb1RleHQodmFsdWUpID09IG51bGx9fSBiZWxsLWhpZGV7ey9pZn19XCI+XG4gICAgICAgICAgICB7e3t2YWx1ZVRvVGV4dCh2YWx1ZSl9fX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtc2VsZWN0LXBsYWNlaG9sZGVye3sjaWYgdmFsdWVUb1RleHQodmFsdWUpICE9IG51bGx9fSBiZWxsLWhpZGV7ey9pZn19XCI+XG4gICAgICAgICAgICB7eyNpZiBkZWZhdWx0VGV4dH19XG4gICAgICAgICAgICAgICAge3t7ZGVmYXVsdFRleHR9fX1cbiAgICAgICAgICAgIHt7ZWxzZX19XG4gICAgICAgICAgICAgICAg6K+36YCJ5oupLi4uXG4gICAgICAgICAgICB7ey9pZn19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLWljb24gYmVsbC1pY29uLWFycm93LWRvd24tYiBiZWxsLXNlbGVjdC1hcnJvd1wiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJiZWxsLXNlbGVjdC1kcm9wZG93bnt7I2lmICF2aXNpYmxlfX0gYmVsbC1oaWRle3svaWZ9fVwiXG4gICAge3sjaWYgc3R5bGV9fSBzdHlsZT1cInt7c3R5bGV9fVwie3svaWZ9fVxuICAgID5cbiAgICAgICAgPHVsIGNsYXNzPVwiYmVsbC1zZWxlY3QtZHJvcGRvd24tbGlzdFwiPlxuICAgICAgICAgICAge3sjZWFjaCBsaXN0OmluZGV4fX1cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImJlbGwtc2VsZWN0LWRyb3Bkb3duLWl0ZW17eyNpZiBmb2N1c0luZGV4ID09IGluZGV4fX0gYmVsbC1mb2N1c3t7L2lmfX17eyNpZiB2YWx1ZSA9PSB2YWx9fSBiZWxsLWFjdGl2ZXt7L2lmfX1cIiBvbi1jbGljaz1cIml0ZW1DbGljayhpbmRleClcIj5cbiAgICAgICAgICAgICAgICB7e3RleHR9fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIHt7L2VhY2h9fVxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4gICAgYCxcblxuICAgIHByb3BUeXBlczoge1xuXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlZmF1bHRUZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuXG4gICAgICAgIGxpc3Q6IHtcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICByZXF1aXJlOiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcblxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcblxuICAgICAgICBhdXRvQ29tcGxldGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBmb2N1c0luZGV4OiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZmlsdGVyczoge1xuICAgICAgICB2YWx1ZVRvVGV4dDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlTWFwW3ZhbHVlXTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHRvZ2dsZU1lbnU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAobWUuZ2V0KCdkaXNhYmxlZCcpIHx8IG1lLmdldCgnYXV0b0NvbXBsZXRlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgICAgIHZpc2libGU6ICFtZS5nZXQoJ3Zpc2libGUnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXRlbUNsaWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IG1lLmdldCgnbGlzdCcpXG4gICAgICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBsaXN0W2luZGV4XS52YWwsXG4gICAgICAgICAgICAgICAgZm9jdXNJbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldEZvY3VzSW5kZXg6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZm9jdXNJbmRleCA9IG1lLmdldCgnZm9jdXNJbmRleCcpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gbWUuZ2V0KCd2YWx1ZScpO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSBtZS5nZXQoJ2xpc3QnKTtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBsaXN0Lmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgIGlmIChmb2N1c0luZGV4ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmb2N1c0luZGV4ID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wdGlvbiA9PSAndXAnKSB7XG4gICAgICAgICAgICAgICAgZm9jdXNJbmRleCA9IGZvY3VzSW5kZXggKyAxID4gbGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmb2N1c0luZGV4ICsgMTtcbiAgICAgICAgICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgICAgICAgICBmb2N1c0luZGV4OiBmb2N1c0luZGV4XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb24gPT0gJ2Rvd24nKSB7XG4gICAgICAgICAgICAgICAgZm9jdXNJbmRleCA9IGZvY3VzSW5kZXggLSAxIDwgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmb2N1c0luZGV4IC0gMTtcbiAgICAgICAgICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgICAgICAgICBmb2N1c0luZGV4OiBmb2N1c0luZGV4XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb24gPT0gJ2VudGVyJykge1xuICAgICAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBsaXN0W2ZvY3VzSW5kZXhdLnZhbCxcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNJbmRleDogZm9jdXNJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZnRlck1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIG1lLnZhbHVlTWFwID0ge307XG4gICAgICAgIFlveC5hcnJheS5lYWNoKFxuICAgICAgICAgICAgbWUuZ2V0KCdsaXN0JyksXG4gICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBtZS52YWx1ZU1hcFtpdGVtLnZhbF0gPSBpdGVtLnRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udmFsID09IG1lLmdldCgndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNJbmRleDogaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIG1lLmRvY3VtZW50Q2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChtZS4kZWwuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbWUuZG9jdW1lbnRLZXlkb3duSGFuZGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBjb2RlID0gZS5rZXlDb2RlO1xuICAgICAgICAgICAgaWYgKCFtZS5nZXQoJ3Zpc2libGUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2RlID09PSA0MCkge1xuICAgICAgICAgICAgICAgIC8vIHVwXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIG1lLnNldEZvY3VzSW5kZXgoJ3VwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb2RlID09PSAzOCkge1xuICAgICAgICAgICAgICAgIC8vIGRvd25cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbWUuc2V0Rm9jdXNJbmRleCgnZG93bicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29kZSA9PSAxMykge1xuICAgICAgICAgICAgICAgIC8vIGVudGVyXG4gICAgICAgICAgICAgICAgbWUuc2V0Rm9jdXNJbmRleCgnZW50ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICAgIG1lLmRvY3VtZW50Q2xpY2tIYW5kbGVyXG4gICAgICAgICk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAna2V5ZG93bicsXG4gICAgICAgICAgICBtZS5kb2N1bWVudEtleWRvd25IYW5kZXJcbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgYmVmb3JlRGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBtZS52YWx1ZU1hcCA9IG51bGw7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnY2xpY2snLFxuICAgICAgICAgICAgbWUuZG9jdW1lbnRDbGlja0hhbmRsZXJcbiAgICAgICAgKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdrZXlkb3duJyxcbiAgICAgICAgICAgIG1lLmRvY3VtZW50S2V5ZG93bkhhbmRlclxuICAgICAgICApO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJiZWxsLXBhZ2Vcbnt7I2lmIHNpemV9fSBiZWxsLXBhZ2Ute3tzaXplfX17ey9pZn19XG57eyNpZiBjbGFzc05hbWV9fSB7e2NsYXNzTmFtZX19e3svaWZ9fVxuXCI+XG57eyNwYXJ0aWFsIHBhZ2VDZW50ZXJ9fVxuICAgIHt7I2lmIGN1cnJlbnQgLSAzID4gMX19XG4gICAgICAgIDxsaSBjbGFzcz1cImJlbGwtcGFnZS1pdGVtIGJlbGwtcGFnZS1pdGVtLXByZXZcIiBvbi1jbGljaz1cImZhc3RQcmV2KClcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmVsbC1pY29uIGJlbGwtaWNvbi1pb3MtYXJyb3ctbGVmdFwiPjwvaT5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmVsbC1pY29uIGJlbGwtaWNvbi1pb3MtYXJyb3ctbGVmdFwiPjwvaT5cbiAgICAgICAgPC9saT5cbiAgICB7ey9pZn19XG5cbiAgICB7eyNpZiBjdXJyZW50IC0gMiA+IDF9fVxuICAgICAgICA8bGkgY2xhc3M9XCJiZWxsLXBhZ2UtaXRlbVwiIG9uLWNsaWNrPVwiY2hhbmdlUGFnZShjdXJyZW50IC0gMilcIj5cbiAgICAgICAgICAgIHt7IGN1cnJlbnQgLSAyIH19XG4gICAgICAgIDwvbGk+XG4gICAge3svaWZ9fVxuXG4gICAge3sjaWYgY3VycmVudCAtIDEgPiAxfX1cbiAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW1cIiBvbi1jbGljaz1cImNoYW5nZVBhZ2UoY3VycmVudCAtIDEpXCI+XG4gICAgICAgICAgICB7eyBjdXJyZW50IC0gMSB9fVxuICAgICAgICA8L2xpPlxuICAgIHt7L2lmfX1cblxuICAgIHt7I2lmIGN1cnJlbnQgIT0gMSAmJiBjdXJyZW50ICE9IGNvdW50fX1cbiAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW0gYmVsbC1hY3RpdmVcIj5cbiAgICAgICAgICAgIHt7IGN1cnJlbnQgfX1cbiAgICAgICAgPC9saT5cbiAgICB7ey9pZn19XG5cbiAgICB7eyNpZiBjdXJyZW50ICsgMSA8IGNvdW50fX1cbiAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW1cIiBvbi1jbGljaz1cImNoYW5nZVBhZ2UoY3VycmVudCArIDEpXCI+XG4gICAgICAgICAgICB7eyBjdXJyZW50ICsgMSB9fVxuICAgICAgICA8L2xpPlxuICAgIHt7L2lmfX1cblxuICAgIHt7I2lmIGN1cnJlbnQgKyAyIDwgY291bnR9fVxuICAgICAgICA8bGkgY2xhc3M9XCJiZWxsLXBhZ2UtaXRlbVwiIG9uLWNsaWNrPVwiY2hhbmdlUGFnZShjdXJyZW50ICsgMilcIj5cbiAgICAgICAgICAgIDxhPnt7IGN1cnJlbnQgKyAyIH19PC9hPlxuICAgICAgICA8L2xpPlxuICAgIHt7L2lmfX1cblxuICAgIHt7I2lmIGN1cnJlbnQgKyAzIDwgY291bnR9fVxuICAgICAgICA8bGkgY2xhc3M9XCJiZWxsLXBhZ2UtaXRlbSBiZWxsLXBhZ2UtaXRlbS1uZXh0XCIgb24tY2xpY2s9XCJmYXN0TmV4dCgpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJlbGwtaWNvbiBiZWxsLWljb24taW9zLWFycm93LXJpZ2h0XCI+PC9pPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJiZWxsLWljb24gYmVsbC1pY29uLWlvcy1hcnJvdy1yaWdodFwiPjwvaT5cbiAgICAgICAgPC9saT5cbiAgICB7ey9pZn19XG57ey9wYXJ0aWFsfX1cblxuICAgIHt7I2lmIHNob3dUb3RhbH19XG4gICAgPHNwYW4gY2xhc3M9XCJiZWxsLXBhZ2UtdG90YWxcIj5cbiAgICAgICAg5YWxIHt7dG90YWx9fSDmnaFcbiAgICA8L3NwYW4+XG4gICAge3svaWZ9fVxuXG4gICAge3sjaWYgc2hvd1NpemVyfX1cbiAgICA8ZGl2IGNsYXNzPVwiYmVsbC1wYWdlLXNlbGVjdFwiPlxuICAgICAgICA8U2VsZWN0IGxpc3Q9XCJ7e3BhZ2VMaXN0fX1cIlxuICAgICAgICAgICAgbW9kZWw9XCJwYWdlU2l6ZVwiXG4gICAgICAgICAgICBzaXplPVwie3tzaXplfX1cIlxuICAgICAgICAvPlxuICAgIDwvZGl2PlxuICAgIHt7L2lmfX1cblxuICAgIHt7I2lmICFzaW1wbGV9fVxuICAgIDx1bCBjbGFzcz1cImJlbGwtcGFnZS1saXN0XCI+XG5cbiAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW0gYmVsbC1wYWdlLXByZXZ7eyNpZiBjdXJyZW50IDw9IDF9fSBiZWxsLWRpc2FibGVke3svaWZ9fVwiIG9uLWNsaWNrPVwicHJldigpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJlbGwtaWNvbiBiZWxsLWljb24taW9zLWFycm93LWxlZnRcIj48L2k+XG4gICAgICAgIDwvbGk+XG5cbiAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW17eyNpZiBjdXJyZW50ID09IDF9fSBiZWxsLWFjdGl2ZXt7L2lmfX1cIiBvbi1jbGljaz1cImNoYW5nZVBhZ2UoMSlcIj5cbiAgICAgICAgICAgIDFcbiAgICAgICAgPC9saT5cblxuICAgICAgICB7eyNpZiBjb3VudCA+IDF9fVxuICAgICAgICAgICAge3s+IHBhZ2VDZW50ZXJ9fVxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW17eyNpZiBjdXJyZW50ID09IGNvdW50fX0gYmVsbC1hY3RpdmV7ey9pZn19XCIgb24tY2xpY2s9XCJjaGFuZ2VQYWdlKGNvdW50KVwiPlxuICAgICAgICAgICAgICAgIHt7Y291bnR9fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAge3svaWZ9fVxuXG4gICAgICAgIDxsaSBjbGFzcz1cImJlbGwtcGFnZS1pdGVtIGJlbGwtcGFnZS1uZXh0IHt7Y291bnR9fXt7I2lmIGN1cnJlbnQgPj0gY291bnR9fSBiZWxsLWRpc2FibGVke3svaWZ9fVwiIG9uLWNsaWNrPVwibmV4dCgpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJlbGwtaWNvbiBiZWxsLWljb24taW9zLWFycm93LXJpZ2h0XCI+PC9pPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAge3tlbHNlfX1cbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtcGFnZS1zaW1wbGVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW0gYmVsbC1wYWdlLXByZXZ7eyNpZiBjdXJyZW50IDw9IDF9fSBiZWxsLWRpc2FibGVke3svaWZ9fVwiIG9uLWNsaWNrPVwicHJldigpXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiZWxsLWljb24gYmVsbC1pY29uLWlvcy1hcnJvdy1sZWZ0XCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1wYWdlLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgPElucHV0IG1vZGVsPVwiY3VycmVudFBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwie3tzaXplfX1cIlxuICAgICAgICAgICAgICAgID48L0lucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHt7Jy8nfX1cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLXBhZ2UtaXRlbXt7I2lmIGN1cnJlbnQgPT0gY291bnR9fSBiZWxsLWFjdGl2ZXt7L2lmfX1cIiBvbi1jbGljaz1cImNoYW5nZVBhZ2UoY291bnQpXCI+XG4gICAgICAgICAgICAgICAge3tjb3VudH19XG4gICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW0gYmVsbC1wYWdlLW5leHQge3tjb3VudH19e3sjaWYgY3VycmVudCA+PSBjb3VudH19IGJlbGwtZGlzYWJsZWR7ey9pZn19XCIgb24tY2xpY2s9XCJuZXh0KClcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJlbGwtaWNvbiBiZWxsLWljb24taW9zLWFycm93LXJpZ2h0XCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICB7ey9pZn19XG5cbiAgICB7eyNpZiBzaG93RWxldmF0b3J9fVxuICAgIDxkaXYgY2xhc3M9XCJiZWxsLXBhZ2UtZWxldmF0b3JcIj5cbiAgICAgICAg6Lez6IezXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLXBhZ2UtaW5wdXRcIj5cbiAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpS4uLlwiXG4gICAgICAgICAgICAgICAgbW9kZWw9XCJjdXJyZW50UGFnZVwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cInt7c2l6ZX19XCJcbiAgICAgICAgICAgID48L0lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAg6aG1XG4gICAgPC9kaXY+XG4gICAge3svaWZ9fVxuPC9kaXY+XG4gICAgYCxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBzaW1wbGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2VTaXplOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIHZhbHVlOiAxMFxuICAgICAgICB9LFxuICAgICAgICBzaG93U2l6ZXI6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2VTaXplT3B0czoge1xuICAgICAgICAgICAgdHlwZTogJ2FycmF5J1xuICAgICAgICB9LFxuICAgICAgICBzaG93RWxldmF0b3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dUb3RhbDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZToge1xuICAgICAgICAgICAgdHlwZTogJ2Z1bmN0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICBvblBhZ2VTaXplQ2hhbmdlOiB7XG4gICAgICAgICAgICB0eXBlOiAnZnVuY3Rpb24nXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICB2YXIgZ2V0UGFnZUxpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcGFnZUxpc3QgPSBbXTtcbiAgICAgICAgICAgIGlmIChtZS5nZXQoJ3Nob3dTaXplcicpXG4gICAgICAgICAgICAgICAgJiYgbWUuZ2V0KCdwYWdlU2l6ZU9wdHMnKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgWW94LmFycmF5LmVhY2goXG4gICAgICAgICAgICAgICAgICAgIG1lLmdldCgncGFnZVNpemVPcHRzJyksXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdmFsdWUgKyAnIOadoS/pobUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbDogdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYWdlTGlzdDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhZ2VMaXN0OiBnZXRQYWdlTGlzdCgpLFxuICAgICAgICAgICAgY291bnQ6IDAsXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogMVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHdhdGNoZXJzOiB7XG4gICAgICAgIHBhZ2VTaXplOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICBtZS51cGRhdGVDb3VudCgpO1xuICAgICAgICAgICAgbWUuZ2V0KCdvblBhZ2VTaXplQ2hhbmdlJykgJiYgbWUuZ2V0KCdvblBhZ2VTaXplQ2hhbmdlJykodmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW50OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICBtZS5nZXQoJ29uQ2hhbmdlJykgJiYgbWUuZ2V0KCdvbkNoYW5nZScpKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgZmFzdFByZXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAobWUuZ2V0KCdjdXJyZW50JykgPCAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWUuZGVjcmVhc2UoJ2N1cnJlbnQnLCA1LCAxKTtcbiAgICAgICAgfSxcblxuICAgICAgICBmYXN0TmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIGlmIChtZS5nZXQoJ2N1cnJlbnQnKSA+PSBtZS5nZXQoJ2NvdW50JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZS5pbmNyZWFzZSgnY3VycmVudCcsIDUsIG1lLmdldCgnY291bnQnKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJldjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIGlmIChtZS5nZXQoJ2N1cnJlbnQnKSA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZS5kZWNyZWFzZSgnY3VycmVudCcsIDEsIDEpO1xuXG4gICAgICAgICAgICBpZiAobWUuZ2V0KCdzaW1wbGUnKSkge1xuICAgICAgICAgICAgICAgIG1lLmRlY3JlYXNlKCdjdXJyZW50UGFnZScsIDEsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAobWUuZ2V0KCdjdXJyZW50JykgPj0gbWUuZ2V0KCdjb3VudCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWUuaW5jcmVhc2UoJ2N1cnJlbnQnLCAxLCBtZS5nZXQoJ2NvdW50JykpO1xuICAgICAgICAgICAgaWYgKG1lLmdldCgnc2ltcGxlJykpIHtcbiAgICAgICAgICAgICAgICBtZS5pbmNyZWFzZSgnY3VycmVudFBhZ2UnLCAxLCBtZS5nZXQoJ2NvdW50JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNoYW5nZVBhZ2U6IGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgY3VycmVudDogcGFnZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogcGFnZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdXBkYXRlQ291bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAobWUuZ2V0KCd0b3RhbCcpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgICAgICBpZiAobWUuZ2V0KCd0b3RhbCcpID4gbWUuZ2V0KCdwYWdlU2l6ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gTWF0aC5jZWlsKG1lLmdldCgndG90YWwnKSAvIG1lLmdldCgncGFnZVNpemUnKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IGNvdW50XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0Q3VycmVudDogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIHZhciBjdXJyZW50UGFnZSA9ICttZS5nZXQoJ2N1cnJlbnRQYWdlJyk7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IG1lLmdldCgnY3VycmVudCcpO1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gbWUuZ2V0KCdjb3VudCcpO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9uID09ICdlbnRlcicpIHtcbiAgICAgICAgICAgICAgICBpZiAoWW94LmlzLm51bWJlcihjdXJyZW50UGFnZSlcbiAgICAgICAgICAgICAgICAgICAgJiYgY3VycmVudFBhZ2UgPiAwXG4gICAgICAgICAgICAgICAgICAgICYmIGN1cnJlbnRQYWdlIDw9IGNvdW50XG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50UGFnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb24gPT0gJ3VwJykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50ID4gMSA/IGN1cnJlbnQgLSAxIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbiA9PSAnZG93bicpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudCArIDEgPiBjb3VudCA/IGNvdW50IDogY3VycmVudCArIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgY3VycmVudDogY3VycmVudCxcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogY3VycmVudFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWZ0ZXJNb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBtZS51cGRhdGVDb3VudCgpO1xuXG4gICAgICAgIG1lLmRvY3VtZW50S2V5ZG93bkhhbmRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgY29kZSA9IGUua2V5Q29kZTtcbiAgICAgICAgICAgIGlmIChjb2RlID09PSA0MCkge1xuICAgICAgICAgICAgICAgIC8vIHVwXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIG1lLnNldEN1cnJlbnQoJ2Rvd24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvZGUgPT09IDM4KSB7XG4gICAgICAgICAgICAgICAgLy8gZG93blxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBtZS5zZXRDdXJyZW50KCd1cCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29kZSA9PSAxMykge1xuICAgICAgICAgICAgICAgIC8vIGVudGVyXG4gICAgICAgICAgICAgICAgbWUuc2V0Q3VycmVudCgnZW50ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2tleWRvd24nLFxuICAgICAgICAgICAgbWUuZG9jdW1lbnRLZXlkb3duSGFuZGVyXG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIGJlZm9yZURlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdrZXlkb3duJyxcbiAgICAgICAgICAgIG1lLmRvY3VtZW50S2V5ZG93bkhhbmRlclxuICAgICAgICApO1xuICAgIH1cbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiYmVsbC1hbGVydFxue3sjaWYgdHlwZX19IGJlbGwtYWxlcnQte3t0eXBlfX17ey9pZn19XG57eyNpZiBoYXNEZXNjfX0gYmVsbC1hbGVydC13aXRoLWRlc2N7ey9pZn19XG57eyNpZiBzaG93SWNvbn19IGJlbGwtYWxlcnQtd2l0aC1pY29ue3svaWZ9fVxuXCI+XG4gICAge3sjaWYgc2hvd0ljb259fVxuICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1hbGVydC1pY29uXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiYmVsbC1pY29uXG4gICAgICAgIHt7I2lmIHR5cGUgPT0gJ2luZm8nfX0gYmVsbC1pY29uLWluZm9ybWF0aW9uLWNpcmNsZWRcbiAgICAgICAge3tlbHNlIGlmIHR5cGUgPT0gJ3N1Y2Nlc3MnfX0gYmVsbC1pY29uLWNoZWNrbWFyay1jaXJjbGVkXG4gICAgICAgIHt7ZWxzZSBpZiB0eXBlID09ICd3YXJuaW5nJ319IGJlbGwtaWNvbi1hbmRyb2lkLWFsZXJ0XG4gICAgICAgIHt7ZWxzZSBpZiB0eXBlID09ICdlcnJvcid9fSBiZWxsLWljb24tY2xvc2UtY2lyY2xlZFxuICAgICAgICB7ey9pZn19XG4gICAgICAgIFwiPjwvaT5cbiAgICA8L3NwYW4+XG4gICAge3svaWZ9fVxuXG4gICAgPGRpdiBjbGFzcz1cImJlbGwtYWxlcnQtY29udGVudFwiPlxuICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgPC9kaXY+XG5cbiAgICB7eyNpZiBjbG9zYWJsZX19XG4gICAgPHNwYW4gY2xhc3M9XCJiZWxsLWFsZXJ0LWNsb3NlXCIgb24tY2xpY2s9XCJjbG9zZSgpXCI+XG4gICAgICAgIHt7I2lmIGNsb3NlVGV4dH19XG4gICAgICAgICAgICB7e2Nsb3NlVGV4dH19XG4gICAgICAgIHt7ZWxzZX19XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJlbGwtaWNvbiBiZWxsLWljb24taW9zLWNsb3NlLWVtcHR5XCI+PC9pPlxuICAgICAgICB7ey9pZn19XG4gICAgPC9zcGFuPlxuICAgIHt7L2lmfX1cbjwvZGl2PlxuICAgIGAsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICB2YWx1ZTogJ2luZm8nXG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NhYmxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBzaG93SWNvbjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgY2VudGVyOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VUZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZToge1xuICAgICAgICAgICAgdHlwZTogJ2Z1bmN0aW9uJ1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhc0Rlc2M6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2hlcnM6IHtcblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQobWUuJGVsKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcygnYmVsbC1oaWRlJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyWzBdLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICA1MDBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtZS5nZXQoJ2Nsb3NlJykgJiYgbWUuZ2V0KCdjbG9zZScpKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWZ0ZXJNb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBtZS4kb3B0aW9ucy5wcm9wcy4kY2hpbGRyZW47XG4gICAgICAgIGlmIChZb3guaXMuYXJyYXkoY2hpbGRyZW4pXG4gICAgICAgICAgICAmJiBtZS4kb3B0aW9ucy5wcm9wcy4kY2hpbGRyZW4ubGVuZ3RoXG4gICAgICAgICkge1xuICAgICAgICAgICAgbWUuJG9wdGlvbnMucHJvcHMuJGNoaWxkcmVuLnNvbWUoY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC50YWcgPT0gJ0Rlc2MnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNEZXNjOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGJlZm9yZURlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICB9XG59OyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1hbGVydC1kZXNjXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCIvKlxuICogQGZpbGUg5Li75qih5Z2XXG4gKiBAYXV0aG9yIHdhbmd0aWFuaHVhXG4gKi9cblxuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXInXG5pbXBvcnQgU2lkZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9TaWRlcidcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvQ29udGVudCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9Gb290ZXInXG5pbXBvcnQgTWVudSBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L01lbnUnXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9NZW51SXRlbSdcbmltcG9ydCBTdWJtZW51IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvU3VibWVudSdcbmltcG9ydCBDYXJkIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvQ2FyZCdcblxuXG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tICcuL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iJ1xuaW1wb3J0IEJyZWFkY3J1bWJJdGVtIGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1iL0JyZWFkY3J1bWJJdGVtJ1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9idXR0b24vQnV0dG9uJ1xuaW1wb3J0IElucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9JbnB1dCdcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC9TZWxlY3QnXG5pbXBvcnQgUGFnZSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZS9QYWdlJ1xuXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi9jb21wb25lbnRzL2FsZXJ0L0FsZXJ0J1xuaW1wb3J0IERlc2MgZnJvbSAnLi9jb21wb25lbnRzL2FsZXJ0L0Rlc2MnXG5cbllveC5jb21wb25lbnQoe1xuICAgIExheW91dDogTGF5b3V0LFxuICAgIEhlYWRlcjogSGVhZGVyLFxuICAgIFNpZGVyOiBTaWRlcixcbiAgICBDb250ZW50OiBDb250ZW50LFxuICAgIEZvb3RlcjogRm9vdGVyLFxuICAgIE1lbnU6IE1lbnUsXG4gICAgTWVudUl0ZW06IE1lbnVJdGVtLFxuICAgIFN1Ym1lbnU6IFN1Ym1lbnUsXG4gICAgQ2FyZDogQ2FyZCxcblxuICAgIEJyZWFkY3J1bWI6IEJyZWFkY3J1bWIsXG4gICAgQnJlYWRjcnVtYkl0ZW06IEJyZWFkY3J1bWJJdGVtLFxuXG4gICAgQnV0dG9uOiBCdXR0b24sXG4gICAgSW5wdXQ6IElucHV0LFxuICAgIFNlbGVjdDogU2VsZWN0LFxuICAgIFBhZ2U6IFBhZ2UsXG5cbiAgICBBbGVydDogQWxlcnQsXG4gICAgRGVzYzogRGVzY1xufSk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsYUFBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7O0lBSVgsQ0FBQzs7O0FDTEwsWUFBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7O0lBSVgsQ0FBQzs7O0FDTEwsY0FBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7O0lBSVgsQ0FBQzs7O0FDTEwsYUFBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7O0lBSVgsQ0FBQzs7O0NBQ0osRENERCxhQUFlO0lB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
