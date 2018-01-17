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
{{#if placement}} bell-select-{{placement}}{{/if}}
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

        placement: {
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
            placement="{{placement}}"
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
            type: ['string', 'number']
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

var Spinner = {
    template: `
<div class="bell-spinner
{{#if size}} bell-spinner-{{size}}{{/if}}
{{#if fix}} bell-spinner-{{fix}}{{/if}}
">
    {{#if text && type != 'circle'}}
        <span class="bell-spinner-text">
            {{text}}
        </span>
    {{else}}
        <div class="bell-spinner-list">
            {{#if type == 'circle'}}
                <i class="bell-spinner-icon bell-icon bell-icon-load-c" style="font-size: 18px;"></i>
                <span class="bell-spinner-text">
                    {{text}}
                </span>
            {{else}}
                <span class="bell-spinner-item"></span>
                <span class="bell-spinner-item"></span>
                <span class="bell-spinner-item"></span>
                <span class="bell-spinner-item"></span>
                <span class="bell-spinner-item"></span>
            {{/if}}
        </div>
    {{/if}}
</div>
    `,
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
    template: `
<div class="bell-backtop
{{#if className}} {{className}}{{/if}}
{{#if !isShow}} bell-hide{{/if}}
{{#if !fix}} bell-backtop-fix{{/if}}
"
style="bottom: {{bottom}}px; right: {{right}}px;" on-click="back()"
>
    <i class="bell-icon bell-icon-chevron-up"></i>
</div>
    `,
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

    data: function () {
        return {
            isShow: false
        }
    },

    methods: {
        back: function () {
            var me = this;
            var top = me.container.scrollTop;
            me.container.scrollTop = 0;
            me.get('click') && me.get('click')(top);
        }
    },

    afterMount: function (argument) {
        var me = this;
        var container = me.container = me.$parent.$el;
        me.handleScroll =  function () {
            me.set({
                isShow: container.scrollTop >= me.get('height')
            });
        };

        container.addEventListener('scroll', me.handleScroll);
        container.addEventListener('resize', me.handleScroll);
    },

    beforeDestroy: function () {
        var me = this;
        me.container.removeEventListener('scroll', me.handleScroll);
        me.container.removeEventListener('resize', me.handleScroll);
    }
};

var Avatar = {
    template: `
<div class="bell-avatar
{{#if className}} {{className}}{{/if}}
{{#if size}} bell-avatar-{{size}}{{/if}}
{{#if shape}} bell-avatar-{{shape}}{{/if}}
" style="font-size: {{fontSize}}px;
background-color: {{backgroundColor}};
color: {{color}}">
    {{#if src}}
        <img ondragstart="return false" src="{{src}}" />
    {{else}}
        {{$children}}
    {{/if}}
</div>
    `,
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

var Card = {
    template: `
        <div class="bell-card">
            {{$children}}
        </div>
    `
};

var CardHeader = {
    template: `
<div class="bell-card-header">

    {{$children}}

    <div class="bell-card-header-detail">
        {{#if title}}
        <div class="bell-card-header-title
        {{#if titleClass}} {{titleClass}}{{/if}}
        ">
            {{title}}
        </div>
        {{/if}}

        {{#if subTitle}}
        <div class="bell-card-header-sub-title
        {{#if subTitleClass}} {{subTitleClass}}{{/if}}
        ">
            {{subTitle}}
        </div>
        {{/if}}
    </div>
</div>
    `,

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
    template: `
<div class="bell-card-media">

    {{$children}}

    <div class="bell-card-media-detail">
        {{#if title}}
        <div class="bell-card-media-title
        {{#if titleClass}} {{titleClass}}{{/if}}
        ">
            {{title}}
        </div>
        {{/if}}
        {{#if subTitle}}
        <div class="bell-card-media-sub-title
        {{#if subTitleClass}} {{subTitleClass}}{{/if}}
        ">
            {{subTitle}}
        </div>
        {{/if}}
    </div>
</div>
    `,

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
    template: `
<div class="bell-card-title">

    {{$children}}

    {{#if title}}
    <div class="bell-card-title-text
    {{#if titleClass}} {{titleClass}}{{/if}}
    ">
        {{title}}
    </div>
    {{/if}}

    {{#if subTitle}}
    <div class="bell-card-sub-title
    {{#if subTitleClass}} {{subTitleClass}}{{/if}}
    ">
        {{subTitle}}
    </div>
    {{/if}}
</div>
    `,

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
    template: `
        <div class="bell-card-text">
            {{$children}}
        </div>
    `
};

var CardActions = {
    template: `
        <div class="bell-card-actions">
            {{$children}}
        </div>
    `
};

/*
 * @file 主模块
 * @author wangtianhua
 */

Yox.component({
    Layout,
    Header,
    Sider,
    Content,
    Footer,
    Menu,
    MenuItem,
    Submenu,

    Breadcrumb,
    BreadcrumbItem,

    Button,
    Input,
    Select,
    Page,

    Alert,
    Desc,
    Spinner,
    BackTop,
    Avatar,

    Card,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText,
    CardActions
});

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvU2lkZXIuanMiLCJjb21wb25lbnRzL2xheW91dC9Db250ZW50LmpzIiwiY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwiY29tcG9uZW50cy9sYXlvdXQvTWVudS5qcyIsImNvbXBvbmVudHMvbGF5b3V0L01lbnVJdGVtLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvU3VibWVudS5qcyIsImNvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iLmpzIiwiY29tcG9uZW50cy9icmVhZGNydW1iL0JyZWFkY3J1bWJJdGVtLmpzIiwiY29tcG9uZW50cy9idXR0b24vQnV0dG9uLmpzIiwiY29tcG9uZW50cy9pbnB1dC9JbnB1dC5qcyIsImNvbXBvbmVudHMvc2VsZWN0L1NlbGVjdC5qcyIsImNvbXBvbmVudHMvcGFnZS9QYWdlLmpzIiwiY29tcG9uZW50cy9hbGVydC9BbGVydC5qcyIsImNvbXBvbmVudHMvYWxlcnQvRGVzYy5qcyIsImNvbXBvbmVudHMvc3Bpbm5lci9TcGlubmVyLmpzIiwiY29tcG9uZW50cy9iYWNrdG9wL0JhY2tUb3AuanMiLCJjb21wb25lbnRzL2F2YXRhci9BdmF0YXIuanMiLCJjb21wb25lbnRzL2NhcmQvQ2FyZC5qcyIsImNvbXBvbmVudHMvY2FyZC9DYXJkSGVhZGVyLmpzIiwiY29tcG9uZW50cy9jYXJkL0NhcmRNZWRpYS5qcyIsImNvbXBvbmVudHMvY2FyZC9DYXJkVGl0bGUuanMiLCJjb21wb25lbnRzL2NhcmQvQ2FyZFRleHQuanMiLCJjb21wb25lbnRzL2NhcmQvQ2FyZEFjdGlvbnMuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtaGVhZGVyXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtc2lkZXJcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1jb250ZW50XCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtZm9vdGVyXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IFNpZGVyIGZyb20gJy4vU2lkZXInXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtbGF5b3V0e3sjaWYgaGFzU2lkZXJ9fSBiZWxsLWhhcy1zaWRlcnt7L2lmfX1cIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcblxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhc1NpZGVyOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBhZnRlck1vdW50OiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgaWYgKG1lLiRvcHRpb25zLnByb3BzLiRjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1lLiRvcHRpb25zLnByb3BzLiRjaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQudGFnID09ICdTaWRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc1NpZGVyOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1tZW51XCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgYWN0aXZlTmFtZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBldmVudHM6IHtcbiAgICAgICAgc2V0QWN0aXZlTWVudTogZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkKGRhdGEubmFtZSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICB1cGRhdGVDaGlsZDogZnVuY3Rpb24gKGFjdGl2ZU5hbWUpIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICBtZS4kY2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLiRvcHRpb25zLnByb3BzLm5hbWUgPT0gYWN0aXZlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAkKGNoaWxkLiRlbCkuYWRkQ2xhc3MoJ2JlbGwtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKGNoaWxkLiRlbCkucmVtb3ZlQ2xhc3MoJ2JlbGwtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2hlcnM6IHtcbiAgICAgICAgYWN0aXZlTmFtZTogZnVuY3Rpb24gKGFjdGl2ZU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGQoYWN0aXZlTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLW1lbnUtaXRlbVwiIGRhdGEtbmFtZT1cInt7bmFtZX19XCIgb24tY2xpY2s9XCJoYW5kbGVDbGljayhuYW1lKVwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGhhc2g6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKG1lLmdldCgnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtZS5nZXQoJ2hhc2gnKSkge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBtZS5nZXQoJ2hhc2gnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuZmlyZShcbiAgICAgICAgICAgICAgICAnc2V0QWN0aXZlTWVudScsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtc3ViLW1lbnVcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1icmVhZC1jcnVtYlwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1icmVhZC1jcnVtYi1pdGVtXCI+XG4gICAgICAgICAgICA8YSB7eyNpZiB0b319aHJlZj1cInt7dG99fVwie3svaWZ9fSBjbGFzcz1cImJlbGwtYnJlYWQtY3J1bWItbGlua1wiPlxuICAgICAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1icmVhZC1jcnVtYi1nYXBcIj5cbiAgICAgICAgICAgICAgICB7eyNpZiBzZXBhcmF0b3J9fVxuICAgICAgICAgICAgICAgICAgICB7e3NlcGFyYXRvcn19XG4gICAgICAgICAgICAgICAge3tlbHNlfX1cbiAgICAgICAgICAgICAgICAgICAgL1xuICAgICAgICAgICAgICAgIHt7L2lmfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgIGAsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgdG86IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHNlcGFyYXRvcjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtYnV0dG9uXG4gICAgICAgICAgICB7eyNpZiB0eXBlfX0gYmVsbC17e3R5cGV9fXt7L2lmfX1cbiAgICAgICAgICAgIHt7I2lmIHNoYXBlfX0gYmVsbC17e3NoYXBlfX17ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBzaXplfX0gYmVsbC17e3NpemV9fXt7L2lmfX1cbiAgICAgICAgICAgIHt7I2lmIGxvbmd9fSBiZWxsLWxvbmd7ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBkaXNhYmxlZH19IGJlbGwtZGlzYWJsZWR7ey9pZn19XG4gICAgICAgIFwiIG9uLWNsaWNrPVwiY2xpY2tcIj5cblxuICAgICAgICAgICAge3sjaWYgaWNvbn19XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiZWxsLWljb24ge3tpY29ufX1cIj48L2k+XG4gICAgICAgICAgICB7ey9pZn19XG5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHt7I2lmIGxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAge3tsYWJlbH19XG4gICAgICAgICAgICAgICAge3tlbHNlfX1cbiAgICAgICAgICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICAgICAgICAgIHt7L2lmfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBsb25nOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImJlbGwtaW5wdXQtd3JhcHBlclwiXG4gICAge3sjaWYgc3R5bGV9fSBzdHlsZT1cInt7c3R5bGV9fVwie3svaWZ9fVxuPlxuICAgIHt7I2lmIHR5cGUgIT0gVEVYVF9UWVBFX1RFWFRBUkVBfX1cbiAgICAgICAge3sjaWYgIWxhYmVsfX1cblxuICAgICAgICB7e2Vsc2V9fVxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLWlucHV0LWxhYmVsXCIgb24tY2xpY2s9XCJjbGlja1wiPlxuICAgICAgICAgICAgICAgIHt7bGFiZWx9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICB7ey9pZn19XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJiZWxsLWlucHV0e3sjaWYgc2l6ZX19IGJlbGwtaW5wdXQte3tzaXplfX17ey9pZn19XCJcbiAgICAgICAge3sjaWYgcGxhY2Vob2xkZXJ9fSBwbGFjZWhvbGRlcj1cInt7cGxhY2Vob2xkZXJ9fVwie3svaWZ9fVxuICAgICAgICB7eyNpZiBkaXNhYmxlZH19ZGlzYWJsZWQ9XCJkaXNhYmxlZFwie3svaWZ9fVxuICAgICAgICBtb2RlbD1cInZhbHVlXCJcbiAgICAgICAgPjwvaW5wdXQ+XG5cbiAgICB7e2Vsc2V9fVxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJiZWxsLXRleHRhcmVhXCJcbiAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiB7eyNpZiByb3dzfX17e3Jvd3MgKiAyNX19e3tlbHNlfX01MHt7L2lmfX1weFwiXG4gICAgICAgICAgICB7eyNpZiByb3dzfX0gcm93cz1cInt7cm93c319XCJ7ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBwbGFjZWhvbGRlcn19IHBsYWNlaG9sZGVyPVwie3twbGFjZWhvbGRlcn19XCIge3tpZn19XG4gICAgICAgICAgICB7eyNpZiBkaXNhYmxlZH19ZGlzYWJsZWQ9XCJkaXNhYmxlZFwie3svaWZ9fVxuICAgICAgICAgICAgbW9kZWw9XCJ2YWx1ZVwiXG4gICAgICAgID5cbiAgICAgICAgPC90ZXh0YXJlYT5cbiAgICB7ey9pZn19XG5cbjwvZGl2PlxuICAgIGAsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHJvd3M6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBURVhUX1RZUEVfSU5QVVQ6ICdpbnB1dCcsXG4gICAgICAgICAgICBURVhUX1RZUEVfVEVYVEFSRUE6ICd0ZXh0YXJlYSdcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaGVyczoge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZnRlck1vdW50OiBmdW5jdGlvbiAoKSB7XG5cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiYmVsbC1zZWxlY3Rcbnt7I2lmIHNpemV9fSBiZWxsLXNlbGVjdC17e3NpemV9fXt7L2lmfX1cbnt7I2lmIGRpc2FibGVkfX0gYmVsbC1zZWxlY3QtZGlzYWJsZWR7ey9pZn19XG57eyNpZiBwbGFjZW1lbnR9fSBiZWxsLXNlbGVjdC17e3BsYWNlbWVudH19e3svaWZ9fVxuXCJcbiAgICB7eyNpZiBzdHlsZX19IHN0eWxlPVwie3tzdHlsZX19XCJ7ey9pZn19XG4+XG4gICAgPGRpdiBjbGFzcz1cImJlbGwtc2VsZWN0LWJ1dHRvbnt7I2lmIHZpc2libGV9fSBiZWxsLWFjdGl2ZXt7L2lmfX1cIiBvbi1jbGljaz1cInRvZ2dsZU1lbnUoKVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG1vZGVsPVwidmFsdWVcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtc2VsZWN0LXZhbHVle3sjaWYgdmFsdWVUb1RleHQodmFsdWUpID09IG51bGx9fSBiZWxsLWhpZGV7ey9pZn19XCI+XG4gICAgICAgICAgICB7e3t2YWx1ZVRvVGV4dCh2YWx1ZSl9fX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtc2VsZWN0LXBsYWNlaG9sZGVye3sjaWYgdmFsdWVUb1RleHQodmFsdWUpICE9IG51bGx9fSBiZWxsLWhpZGV7ey9pZn19XCI+XG4gICAgICAgICAgICB7eyNpZiBkZWZhdWx0VGV4dH19XG4gICAgICAgICAgICAgICAge3t7ZGVmYXVsdFRleHR9fX1cbiAgICAgICAgICAgIHt7ZWxzZX19XG4gICAgICAgICAgICAgICAg6K+36YCJ5oupLi4uXG4gICAgICAgICAgICB7ey9pZn19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLWljb24gYmVsbC1pY29uLWFycm93LWRvd24tYiBiZWxsLXNlbGVjdC1hcnJvd1wiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJiZWxsLXNlbGVjdC1kcm9wZG93bnt7I2lmICF2aXNpYmxlfX0gYmVsbC1oaWRle3svaWZ9fVwiXG4gICAge3sjaWYgc3R5bGV9fSBzdHlsZT1cInt7c3R5bGV9fVwie3svaWZ9fVxuICAgID5cbiAgICAgICAgPHVsIGNsYXNzPVwiYmVsbC1zZWxlY3QtZHJvcGRvd24tbGlzdFwiPlxuICAgICAgICAgICAge3sjZWFjaCBsaXN0OmluZGV4fX1cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImJlbGwtc2VsZWN0LWRyb3Bkb3duLWl0ZW17eyNpZiBmb2N1c0luZGV4ID09IGluZGV4fX0gYmVsbC1mb2N1c3t7L2lmfX17eyNpZiB2YWx1ZSA9PSB2YWx9fSBiZWxsLWFjdGl2ZXt7L2lmfX1cIiBvbi1jbGljaz1cIml0ZW1DbGljayhpbmRleClcIj5cbiAgICAgICAgICAgICAgICB7e3RleHR9fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIHt7L2VhY2h9fVxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4gICAgYCxcblxuICAgIHByb3BUeXBlczoge1xuXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlZmF1bHRUZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuXG4gICAgICAgIGxpc3Q6IHtcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICByZXF1aXJlOiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcblxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcblxuICAgICAgICBwbGFjZW1lbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgYXV0b0NvbXBsZXRlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgZm9jdXNJbmRleDogbnVsbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGZpbHRlcnM6IHtcbiAgICAgICAgdmFsdWVUb1RleHQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU1hcFt2YWx1ZV07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICB0b2dnbGVNZW51OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKG1lLmdldCgnZGlzYWJsZWQnKSB8fCBtZS5nZXQoJ2F1dG9Db21wbGV0ZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiAhbWUuZ2V0KCd2aXNpYmxlJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGl0ZW1DbGljazogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSBtZS5nZXQoJ2xpc3QnKVxuICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbGlzdFtpbmRleF0udmFsLFxuICAgICAgICAgICAgICAgIGZvY3VzSW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRGb2N1c0luZGV4OiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGZvY3VzSW5kZXggPSBtZS5nZXQoJ2ZvY3VzSW5kZXgnKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IG1lLmdldCgndmFsdWUnKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gbWUuZ2V0KCdsaXN0Jyk7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gbGlzdC5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICBpZiAoZm9jdXNJbmRleCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9jdXNJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcHRpb24gPT0gJ3VwJykge1xuICAgICAgICAgICAgICAgIGZvY3VzSW5kZXggPSBmb2N1c0luZGV4ICsgMSA+IGxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZm9jdXNJbmRleCArIDE7XG4gICAgICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNJbmRleDogZm9jdXNJbmRleFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9uID09ICdkb3duJykge1xuICAgICAgICAgICAgICAgIGZvY3VzSW5kZXggPSBmb2N1c0luZGV4IC0gMSA8IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZm9jdXNJbmRleCAtIDE7XG4gICAgICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNJbmRleDogZm9jdXNJbmRleFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9uID09ICdlbnRlcicpIHtcbiAgICAgICAgICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbGlzdFtmb2N1c0luZGV4XS52YWwsXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzSW5kZXg6IGZvY3VzSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWZ0ZXJNb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBtZS52YWx1ZU1hcCA9IHt9O1xuICAgICAgICBZb3guYXJyYXkuZWFjaChcbiAgICAgICAgICAgIG1lLmdldCgnbGlzdCcpLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgbWUudmFsdWVNYXBbaXRlbS52YWxdID0gaXRlbS50ZXh0O1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnZhbCA9PSBtZS5nZXQoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzSW5kZXg6IGluZGV4XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBtZS5kb2N1bWVudENsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAobWUuJGVsLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIG1lLmRvY3VtZW50S2V5ZG93bkhhbmRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgY29kZSA9IGUua2V5Q29kZTtcbiAgICAgICAgICAgIGlmICghbWUuZ2V0KCd2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29kZSA9PT0gNDApIHtcbiAgICAgICAgICAgICAgICAvLyB1cFxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBtZS5zZXRGb2N1c0luZGV4KCd1cCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29kZSA9PT0gMzgpIHtcbiAgICAgICAgICAgICAgICAvLyBkb3duXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIG1lLnNldEZvY3VzSW5kZXgoJ2Rvd24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvZGUgPT0gMTMpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnRlclxuICAgICAgICAgICAgICAgIG1lLnNldEZvY3VzSW5kZXgoJ2VudGVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICBtZS5kb2N1bWVudENsaWNrSGFuZGxlclxuICAgICAgICApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2tleWRvd24nLFxuICAgICAgICAgICAgbWUuZG9jdW1lbnRLZXlkb3duSGFuZGVyXG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIGJlZm9yZURlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgbWUudmFsdWVNYXAgPSBudWxsO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICAgIG1lLmRvY3VtZW50Q2xpY2tIYW5kbGVyXG4gICAgICAgICk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAna2V5ZG93bicsXG4gICAgICAgICAgICBtZS5kb2N1bWVudEtleWRvd25IYW5kZXJcbiAgICAgICAgKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiYmVsbC1wYWdlXG57eyNpZiBzaXplfX0gYmVsbC1wYWdlLXt7c2l6ZX19e3svaWZ9fVxue3sjaWYgY2xhc3NOYW1lfX0ge3tjbGFzc05hbWV9fXt7L2lmfX1cblwiPlxue3sjcGFydGlhbCBwYWdlQ2VudGVyfX1cbiAgICB7eyNpZiBjdXJyZW50IC0gMyA+IDF9fVxuICAgICAgICA8bGkgY2xhc3M9XCJiZWxsLXBhZ2UtaXRlbSBiZWxsLXBhZ2UtaXRlbS1wcmV2XCIgb24tY2xpY2s9XCJmYXN0UHJldigpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJlbGwtaWNvbiBiZWxsLWljb24taW9zLWFycm93LWxlZnRcIj48L2k+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJlbGwtaWNvbiBiZWxsLWljb24taW9zLWFycm93LWxlZnRcIj48L2k+XG4gICAgICAgIDwvbGk+XG4gICAge3svaWZ9fVxuXG4gICAge3sjaWYgY3VycmVudCAtIDIgPiAxfX1cbiAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW1cIiBvbi1jbGljaz1cImNoYW5nZVBhZ2UoY3VycmVudCAtIDIpXCI+XG4gICAgICAgICAgICB7eyBjdXJyZW50IC0gMiB9fVxuICAgICAgICA8L2xpPlxuICAgIHt7L2lmfX1cblxuICAgIHt7I2lmIGN1cnJlbnQgLSAxID4gMX19XG4gICAgICAgIDxsaSBjbGFzcz1cImJlbGwtcGFnZS1pdGVtXCIgb24tY2xpY2s9XCJjaGFuZ2VQYWdlKGN1cnJlbnQgLSAxKVwiPlxuICAgICAgICAgICAge3sgY3VycmVudCAtIDEgfX1cbiAgICAgICAgPC9saT5cbiAgICB7ey9pZn19XG5cbiAgICB7eyNpZiBjdXJyZW50ICE9IDEgJiYgY3VycmVudCAhPSBjb3VudH19XG4gICAgICAgIDxsaSBjbGFzcz1cImJlbGwtcGFnZS1pdGVtIGJlbGwtYWN0aXZlXCI+XG4gICAgICAgICAgICB7eyBjdXJyZW50IH19XG4gICAgICAgIDwvbGk+XG4gICAge3svaWZ9fVxuXG4gICAge3sjaWYgY3VycmVudCArIDEgPCBjb3VudH19XG4gICAgICAgIDxsaSBjbGFzcz1cImJlbGwtcGFnZS1pdGVtXCIgb24tY2xpY2s9XCJjaGFuZ2VQYWdlKGN1cnJlbnQgKyAxKVwiPlxuICAgICAgICAgICAge3sgY3VycmVudCArIDEgfX1cbiAgICAgICAgPC9saT5cbiAgICB7ey9pZn19XG5cbiAgICB7eyNpZiBjdXJyZW50ICsgMiA8IGNvdW50fX1cbiAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW1cIiBvbi1jbGljaz1cImNoYW5nZVBhZ2UoY3VycmVudCArIDIpXCI+XG4gICAgICAgICAgICA8YT57eyBjdXJyZW50ICsgMiB9fTwvYT5cbiAgICAgICAgPC9saT5cbiAgICB7ey9pZn19XG5cbiAgICB7eyNpZiBjdXJyZW50ICsgMyA8IGNvdW50fX1cbiAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW0gYmVsbC1wYWdlLWl0ZW0tbmV4dFwiIG9uLWNsaWNrPVwiZmFzdE5leHQoKVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJiZWxsLWljb24gYmVsbC1pY29uLWlvcy1hcnJvdy1yaWdodFwiPjwvaT5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmVsbC1pY29uIGJlbGwtaWNvbi1pb3MtYXJyb3ctcmlnaHRcIj48L2k+XG4gICAgICAgIDwvbGk+XG4gICAge3svaWZ9fVxue3svcGFydGlhbH19XG5cbiAgICB7eyNpZiBzaG93VG90YWx9fVxuICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1wYWdlLXRvdGFsXCI+XG4gICAgICAgIOWFsSB7e3RvdGFsfX0g5p2hXG4gICAgPC9zcGFuPlxuICAgIHt7L2lmfX1cblxuICAgIHt7I2lmIHNob3dTaXplcn19XG4gICAgPGRpdiBjbGFzcz1cImJlbGwtcGFnZS1zZWxlY3RcIj5cbiAgICAgICAgPFNlbGVjdCBsaXN0PVwie3twYWdlTGlzdH19XCJcbiAgICAgICAgICAgIG1vZGVsPVwicGFnZVNpemVcIlxuICAgICAgICAgICAgc2l6ZT1cInt7c2l6ZX19XCJcbiAgICAgICAgICAgIHBsYWNlbWVudD1cInt7cGxhY2VtZW50fX1cIlxuICAgICAgICAvPlxuICAgIDwvZGl2PlxuICAgIHt7L2lmfX1cblxuICAgIHt7I2lmICFzaW1wbGV9fVxuICAgIDx1bCBjbGFzcz1cImJlbGwtcGFnZS1saXN0XCI+XG5cbiAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW0gYmVsbC1wYWdlLXByZXZ7eyNpZiBjdXJyZW50IDw9IDF9fSBiZWxsLWRpc2FibGVke3svaWZ9fVwiIG9uLWNsaWNrPVwicHJldigpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJlbGwtaWNvbiBiZWxsLWljb24taW9zLWFycm93LWxlZnRcIj48L2k+XG4gICAgICAgIDwvbGk+XG5cbiAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW17eyNpZiBjdXJyZW50ID09IDF9fSBiZWxsLWFjdGl2ZXt7L2lmfX1cIiBvbi1jbGljaz1cImNoYW5nZVBhZ2UoMSlcIj5cbiAgICAgICAgICAgIDFcbiAgICAgICAgPC9saT5cblxuICAgICAgICB7eyNpZiBjb3VudCA+IDF9fVxuICAgICAgICAgICAge3s+IHBhZ2VDZW50ZXJ9fVxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW17eyNpZiBjdXJyZW50ID09IGNvdW50fX0gYmVsbC1hY3RpdmV7ey9pZn19XCIgb24tY2xpY2s9XCJjaGFuZ2VQYWdlKGNvdW50KVwiPlxuICAgICAgICAgICAgICAgIHt7Y291bnR9fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAge3svaWZ9fVxuXG4gICAgICAgIDxsaSBjbGFzcz1cImJlbGwtcGFnZS1pdGVtIGJlbGwtcGFnZS1uZXh0IHt7Y291bnR9fXt7I2lmIGN1cnJlbnQgPj0gY291bnR9fSBiZWxsLWRpc2FibGVke3svaWZ9fVwiIG9uLWNsaWNrPVwibmV4dCgpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJlbGwtaWNvbiBiZWxsLWljb24taW9zLWFycm93LXJpZ2h0XCI+PC9pPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAge3tlbHNlfX1cbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtcGFnZS1zaW1wbGVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW0gYmVsbC1wYWdlLXByZXZ7eyNpZiBjdXJyZW50IDw9IDF9fSBiZWxsLWRpc2FibGVke3svaWZ9fVwiIG9uLWNsaWNrPVwicHJldigpXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiZWxsLWljb24gYmVsbC1pY29uLWlvcy1hcnJvdy1sZWZ0XCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1wYWdlLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgPElucHV0IG1vZGVsPVwiY3VycmVudFBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwie3tzaXplfX1cIlxuICAgICAgICAgICAgICAgID48L0lucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHt7Jy8nfX1cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLXBhZ2UtaXRlbXt7I2lmIGN1cnJlbnQgPT0gY291bnR9fSBiZWxsLWFjdGl2ZXt7L2lmfX1cIiBvbi1jbGljaz1cImNoYW5nZVBhZ2UoY291bnQpXCI+XG4gICAgICAgICAgICAgICAge3tjb3VudH19XG4gICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1wYWdlLWl0ZW0gYmVsbC1wYWdlLW5leHQge3tjb3VudH19e3sjaWYgY3VycmVudCA+PSBjb3VudH19IGJlbGwtZGlzYWJsZWR7ey9pZn19XCIgb24tY2xpY2s9XCJuZXh0KClcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJlbGwtaWNvbiBiZWxsLWljb24taW9zLWFycm93LXJpZ2h0XCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICB7ey9pZn19XG5cbiAgICB7eyNpZiBzaG93RWxldmF0b3J9fVxuICAgIDxkaXYgY2xhc3M9XCJiZWxsLXBhZ2UtZWxldmF0b3JcIj5cbiAgICAgICAg6Lez6IezXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLXBhZ2UtaW5wdXRcIj5cbiAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpS4uLlwiXG4gICAgICAgICAgICAgICAgbW9kZWw9XCJjdXJyZW50UGFnZVwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cInt7c2l6ZX19XCJcbiAgICAgICAgICAgID48L0lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAg6aG1XG4gICAgPC9kaXY+XG4gICAge3svaWZ9fVxuPC9kaXY+XG4gICAgYCxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBzaW1wbGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgICB0eXBlOiBbJ3N0cmluZycsICdudW1iZXInXVxuICAgICAgICB9LFxuICAgICAgICBjdXJyZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2VTaXplOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIHZhbHVlOiAxMFxuICAgICAgICB9LFxuICAgICAgICBzaG93U2l6ZXI6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2VTaXplT3B0czoge1xuICAgICAgICAgICAgdHlwZTogJ2FycmF5J1xuICAgICAgICB9LFxuICAgICAgICBzaG93RWxldmF0b3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dUb3RhbDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBwbGFjZW1lbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2hhbmdlOiB7XG4gICAgICAgICAgICB0eXBlOiAnZnVuY3Rpb24nXG4gICAgICAgIH0sXG4gICAgICAgIG9uUGFnZVNpemVDaGFuZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6ICdmdW5jdGlvbidcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIHZhciBnZXRQYWdlTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwYWdlTGlzdCA9IFtdO1xuICAgICAgICAgICAgaWYgKG1lLmdldCgnc2hvd1NpemVyJylcbiAgICAgICAgICAgICAgICAmJiBtZS5nZXQoJ3BhZ2VTaXplT3B0cycpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBZb3guYXJyYXkuZWFjaChcbiAgICAgICAgICAgICAgICAgICAgbWUuZ2V0KCdwYWdlU2l6ZU9wdHMnKSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB2YWx1ZSArICcg5p2hL+mhtScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhZ2VMaXN0O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZUxpc3Q6IGdldFBhZ2VMaXN0KCksXG4gICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2hlcnM6IHtcbiAgICAgICAgcGFnZVNpemU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIG1lLnVwZGF0ZUNvdW50KCk7XG4gICAgICAgICAgICBtZS5nZXQoJ29uUGFnZVNpemVDaGFuZ2UnKSAmJiBtZS5nZXQoJ29uUGFnZVNpemVDaGFuZ2UnKSh2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbnQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIG1lLmdldCgnb25DaGFuZ2UnKSAmJiBtZS5nZXQoJ29uQ2hhbmdlJykodmFsdWUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICBmYXN0UHJldjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIGlmIChtZS5nZXQoJ2N1cnJlbnQnKSA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZS5kZWNyZWFzZSgnY3VycmVudCcsIDUsIDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZhc3ROZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKG1lLmdldCgnY3VycmVudCcpID49IG1lLmdldCgnY291bnQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lLmluY3JlYXNlKCdjdXJyZW50JywgNSwgbWUuZ2V0KCdjb3VudCcpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBwcmV2OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKG1lLmdldCgnY3VycmVudCcpIDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lLmRlY3JlYXNlKCdjdXJyZW50JywgMSwgMSk7XG5cbiAgICAgICAgICAgIGlmIChtZS5nZXQoJ3NpbXBsZScpKSB7XG4gICAgICAgICAgICAgICAgbWUuZGVjcmVhc2UoJ2N1cnJlbnRQYWdlJywgMSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIGlmIChtZS5nZXQoJ2N1cnJlbnQnKSA+PSBtZS5nZXQoJ2NvdW50JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZS5pbmNyZWFzZSgnY3VycmVudCcsIDEsIG1lLmdldCgnY291bnQnKSk7XG4gICAgICAgICAgICBpZiAobWUuZ2V0KCdzaW1wbGUnKSkge1xuICAgICAgICAgICAgICAgIG1lLmluY3JlYXNlKCdjdXJyZW50UGFnZScsIDEsIG1lLmdldCgnY291bnQnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2hhbmdlUGFnZTogZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBwYWdlLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBwYWdlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIGlmIChtZS5nZXQoJ3RvdGFsJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgICAgIGlmIChtZS5nZXQoJ3RvdGFsJykgPiBtZS5nZXQoJ3BhZ2VTaXplJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSBNYXRoLmNlaWwobWUuZ2V0KCd0b3RhbCcpIC8gbWUuZ2V0KCdwYWdlU2l6ZScpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgICAgICAgICBjb3VudDogY291bnRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBzZXRDdXJyZW50OiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRQYWdlID0gK21lLmdldCgnY3VycmVudFBhZ2UnKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gbWUuZ2V0KCdjdXJyZW50Jyk7XG4gICAgICAgICAgICB2YXIgY291bnQgPSBtZS5nZXQoJ2NvdW50Jyk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb24gPT0gJ2VudGVyJykge1xuICAgICAgICAgICAgICAgIGlmIChZb3guaXMubnVtYmVyKGN1cnJlbnRQYWdlKVxuICAgICAgICAgICAgICAgICAgICAmJiBjdXJyZW50UGFnZSA+IDBcbiAgICAgICAgICAgICAgICAgICAgJiYgY3VycmVudFBhZ2UgPD0gY291bnRcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnRQYWdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbiA9PSAndXAnKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgPiAxID8gY3VycmVudCAtIDEgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9uID09ICdkb3duJykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50ICsgMSA+IGNvdW50ID8gY291bnQgOiBjdXJyZW50ICsgMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBjdXJyZW50LFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZnRlck1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIG1lLnVwZGF0ZUNvdW50KCk7XG5cbiAgICAgICAgbWUuZG9jdW1lbnRLZXlkb3duSGFuZGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBjb2RlID0gZS5rZXlDb2RlO1xuICAgICAgICAgICAgaWYgKGNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbWUuc2V0Q3VycmVudCgnZG93bicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29kZSA9PT0gMzgpIHtcbiAgICAgICAgICAgICAgICAvLyBkb3duXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIG1lLnNldEN1cnJlbnQoJ3VwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb2RlID09IDEzKSB7XG4gICAgICAgICAgICAgICAgLy8gZW50ZXJcbiAgICAgICAgICAgICAgICBtZS5zZXRDdXJyZW50KCdlbnRlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAna2V5ZG93bicsXG4gICAgICAgICAgICBtZS5kb2N1bWVudEtleWRvd25IYW5kZXJcbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgYmVmb3JlRGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2tleWRvd24nLFxuICAgICAgICAgICAgbWUuZG9jdW1lbnRLZXlkb3duSGFuZGVyXG4gICAgICAgICk7XG4gICAgfVxufTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJiZWxsLWFsZXJ0XG57eyNpZiB0eXBlfX0gYmVsbC1hbGVydC17e3R5cGV9fXt7L2lmfX1cbnt7I2lmIGhhc0Rlc2N9fSBiZWxsLWFsZXJ0LXdpdGgtZGVzY3t7L2lmfX1cbnt7I2lmIHNob3dJY29ufX0gYmVsbC1hbGVydC13aXRoLWljb257ey9pZn19XG57eyNpZiBjZW50ZXJ9fSBiZWxsLWFsZXJ0LWNlbnRlcnt7L2lmfX1cblwiPlxuICAgIHt7I2lmIHNob3dJY29ufX1cbiAgICA8c3BhbiBjbGFzcz1cImJlbGwtYWxlcnQtaWNvblwiPlxuICAgICAgICA8aSBjbGFzcz1cImJlbGwtaWNvblxuICAgICAgICB7eyNpZiB0eXBlID09ICdpbmZvJ319IGJlbGwtaWNvbi1pbmZvcm1hdGlvbi1jaXJjbGVkXG4gICAgICAgIHt7ZWxzZSBpZiB0eXBlID09ICdzdWNjZXNzJ319IGJlbGwtaWNvbi1jaGVja21hcmstY2lyY2xlZFxuICAgICAgICB7e2Vsc2UgaWYgdHlwZSA9PSAnd2FybmluZyd9fSBiZWxsLWljb24tYW5kcm9pZC1hbGVydFxuICAgICAgICB7e2Vsc2UgaWYgdHlwZSA9PSAnZXJyb3InfX0gYmVsbC1pY29uLWNsb3NlLWNpcmNsZWRcbiAgICAgICAge3svaWZ9fVxuICAgICAgICBcIj48L2k+XG4gICAgPC9zcGFuPlxuICAgIHt7L2lmfX1cblxuICAgIDxkaXYgY2xhc3M9XCJiZWxsLWFsZXJ0LWNvbnRlbnRcIj5cbiAgICAgICAge3skY2hpbGRyZW59fVxuICAgIDwvZGl2PlxuXG4gICAge3sjaWYgY2xvc2FibGV9fVxuICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1hbGVydC1jbG9zZVwiIG9uLWNsaWNrPVwiY2xvc2UoKVwiPlxuICAgICAgICB7eyNpZiBjbG9zZVRleHR9fVxuICAgICAgICAgICAge3tjbG9zZVRleHR9fVxuICAgICAgICB7e2Vsc2V9fVxuICAgICAgICAgICAgPGkgY2xhc3M9XCJiZWxsLWljb24gYmVsbC1pY29uLWlvcy1jbG9zZS1lbXB0eVwiPjwvaT5cbiAgICAgICAge3svaWZ9fVxuICAgIDwvc3Bhbj5cbiAgICB7ey9pZn19XG48L2Rpdj5cbiAgICBgLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgdmFsdWU6ICdpbmZvJ1xuICAgICAgICB9LFxuICAgICAgICBjbG9zYWJsZToge1xuICAgICAgICAgICAgdHlwZTogWydzdHJpbmcnLCAnYm9vbGVhbiddXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dJY29uOiB7XG4gICAgICAgICAgICB0eXBlOiBbJ3N0cmluZycsICdib29sZWFuJ11cbiAgICAgICAgfSxcbiAgICAgICAgY2VudGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBbJ3N0cmluZycsICdib29sZWFuJ11cbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VUZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZToge1xuICAgICAgICAgICAgdHlwZTogJ2Z1bmN0aW9uJ1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhc0Rlc2M6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2hlcnM6IHtcblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQobWUuJGVsKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcygnYmVsbC1oaWRlJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyWzBdLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICA1MDBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtZS5nZXQoJ2Nsb3NlJykgJiYgbWUuZ2V0KCdjbG9zZScpKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWZ0ZXJNb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBtZS4kb3B0aW9ucy5wcm9wcy4kY2hpbGRyZW47XG4gICAgICAgIGlmIChZb3guaXMuYXJyYXkoY2hpbGRyZW4pXG4gICAgICAgICAgICAmJiBtZS4kb3B0aW9ucy5wcm9wcy4kY2hpbGRyZW4ubGVuZ3RoXG4gICAgICAgICkge1xuICAgICAgICAgICAgbWUuJG9wdGlvbnMucHJvcHMuJGNoaWxkcmVuLnNvbWUoY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC50YWcgPT0gJ0Rlc2MnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNEZXNjOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGJlZm9yZURlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICB9XG59OyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1hbGVydC1kZXNjXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJiZWxsLXNwaW5uZXJcbnt7I2lmIHNpemV9fSBiZWxsLXNwaW5uZXIte3tzaXplfX17ey9pZn19XG57eyNpZiBmaXh9fSBiZWxsLXNwaW5uZXIte3tmaXh9fXt7L2lmfX1cblwiPlxuICAgIHt7I2lmIHRleHQgJiYgdHlwZSAhPSAnY2lyY2xlJ319XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1zcGlubmVyLXRleHRcIj5cbiAgICAgICAgICAgIHt7dGV4dH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICB7e2Vsc2V9fVxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1zcGlubmVyLWxpc3RcIj5cbiAgICAgICAgICAgIHt7I2lmIHR5cGUgPT0gJ2NpcmNsZSd9fVxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmVsbC1zcGlubmVyLWljb24gYmVsbC1pY29uIGJlbGwtaWNvbi1sb2FkLWNcIiBzdHlsZT1cImZvbnQtc2l6ZTogMThweDtcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLXNwaW5uZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICB7e3RleHR9fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIHt7ZWxzZX19XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLXNwaW5uZXItaXRlbVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtc3Bpbm5lci1pdGVtXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1zcGlubmVyLWl0ZW1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLXNwaW5uZXItaXRlbVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtc3Bpbm5lci1pdGVtXCI+PC9zcGFuPlxuICAgICAgICAgICAge3svaWZ9fVxuICAgICAgICA8L2Rpdj5cbiAgICB7ey9pZn19XG48L2Rpdj5cbiAgICBgLFxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBmaXg6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiYmVsbC1iYWNrdG9wXG57eyNpZiBjbGFzc05hbWV9fSB7e2NsYXNzTmFtZX19e3svaWZ9fVxue3sjaWYgIWlzU2hvd319IGJlbGwtaGlkZXt7L2lmfX1cbnt7I2lmICFmaXh9fSBiZWxsLWJhY2t0b3AtZml4e3svaWZ9fVxuXCJcbnN0eWxlPVwiYm90dG9tOiB7e2JvdHRvbX19cHg7IHJpZ2h0OiB7e3JpZ2h0fX1weDtcIiBvbi1jbGljaz1cImJhY2soKVwiXG4+XG4gICAgPGkgY2xhc3M9XCJiZWxsLWljb24gYmVsbC1pY29uLWNoZXZyb24tdXBcIj48L2k+XG48L2Rpdj5cbiAgICBgLFxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBib3R0b206IHtcbiAgICAgICAgICAgIHR5cGU6IFsnc3RyaW5nJywgJ251bWJlciddLFxuICAgICAgICAgICAgdmFsdWU6IDMwXG4gICAgICAgIH0sXG4gICAgICAgIHJpZ2h0OiB7XG4gICAgICAgICAgICB0eXBlOiBbJ3N0cmluZycsICdudW1iZXInXSxcbiAgICAgICAgICAgIHZhbHVlOiAzMFxuICAgICAgICB9LFxuICAgICAgICBoZWlnaHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFsnc3RyaW5nJywgJ251bWJlciddLFxuICAgICAgICAgICAgdmFsdWU6IDQwMFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICB0eXBlOiAnZnVuY3Rpb24nXG4gICAgICAgIH0sXG4gICAgICAgIGZpeDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1Nob3c6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHRvcCA9IG1lLmNvbnRhaW5lci5zY3JvbGxUb3A7XG4gICAgICAgICAgICBtZS5jb250YWluZXIuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIG1lLmdldCgnY2xpY2snKSAmJiBtZS5nZXQoJ2NsaWNrJykodG9wKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZnRlck1vdW50OiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IG1lLmNvbnRhaW5lciA9IG1lLiRwYXJlbnQuJGVsO1xuICAgICAgICBtZS5oYW5kbGVTY3JvbGwgPSAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICBpc1Nob3c6IGNvbnRhaW5lci5zY3JvbGxUb3AgPj0gbWUuZ2V0KCdoZWlnaHQnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG1lLmhhbmRsZVNjcm9sbCk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBtZS5oYW5kbGVTY3JvbGwpO1xuICAgIH0sXG5cbiAgICBiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIG1lLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBtZS5oYW5kbGVTY3JvbGwpO1xuICAgICAgICBtZS5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbWUuaGFuZGxlU2Nyb2xsKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiYmVsbC1hdmF0YXJcbnt7I2lmIGNsYXNzTmFtZX19IHt7Y2xhc3NOYW1lfX17ey9pZn19XG57eyNpZiBzaXplfX0gYmVsbC1hdmF0YXIte3tzaXplfX17ey9pZn19XG57eyNpZiBzaGFwZX19IGJlbGwtYXZhdGFyLXt7c2hhcGV9fXt7L2lmfX1cblwiIHN0eWxlPVwiZm9udC1zaXplOiB7e2ZvbnRTaXplfX1weDtcbmJhY2tncm91bmQtY29sb3I6IHt7YmFja2dyb3VuZENvbG9yfX07XG5jb2xvcjoge3tjb2xvcn19XCI+XG4gICAge3sjaWYgc3JjfX1cbiAgICAgICAgPGltZyBvbmRyYWdzdGFydD1cInJldHVybiBmYWxzZVwiIHNyYz1cInt7c3JjfX1cIiAvPlxuICAgIHt7ZWxzZX19XG4gICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICB7ey9pZn19XG48L2Rpdj5cbiAgICBgLFxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgc3JjOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGZvbnRTaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBbJ3N0cmluZycsICdudW1iZXInXVxuICAgICAgICB9LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1jYXJkXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJiZWxsLWNhcmQtaGVhZGVyXCI+XG5cbiAgICB7eyRjaGlsZHJlbn19XG5cbiAgICA8ZGl2IGNsYXNzPVwiYmVsbC1jYXJkLWhlYWRlci1kZXRhaWxcIj5cbiAgICAgICAge3sjaWYgdGl0bGV9fVxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1jYXJkLWhlYWRlci10aXRsZVxuICAgICAgICB7eyNpZiB0aXRsZUNsYXNzfX0ge3t0aXRsZUNsYXNzfX17ey9pZn19XG4gICAgICAgIFwiPlxuICAgICAgICAgICAge3t0aXRsZX19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ey9pZn19XG5cbiAgICAgICAge3sjaWYgc3ViVGl0bGV9fVxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1jYXJkLWhlYWRlci1zdWItdGl0bGVcbiAgICAgICAge3sjaWYgc3ViVGl0bGVDbGFzc319IHt7c3ViVGl0bGVDbGFzc319e3svaWZ9fVxuICAgICAgICBcIj5cbiAgICAgICAgICAgIHt7c3ViVGl0bGV9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3svaWZ9fVxuICAgIDwvZGl2PlxuPC9kaXY+XG4gICAgYCxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGVDbGFzczoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgc3ViVGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHN1YlRpdGxlQ2xhc3M6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiYmVsbC1jYXJkLW1lZGlhXCI+XG5cbiAgICB7eyRjaGlsZHJlbn19XG5cbiAgICA8ZGl2IGNsYXNzPVwiYmVsbC1jYXJkLW1lZGlhLWRldGFpbFwiPlxuICAgICAgICB7eyNpZiB0aXRsZX19XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLWNhcmQtbWVkaWEtdGl0bGVcbiAgICAgICAge3sjaWYgdGl0bGVDbGFzc319IHt7dGl0bGVDbGFzc319e3svaWZ9fVxuICAgICAgICBcIj5cbiAgICAgICAgICAgIHt7dGl0bGV9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3svaWZ9fVxuICAgICAgICB7eyNpZiBzdWJUaXRsZX19XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLWNhcmQtbWVkaWEtc3ViLXRpdGxlXG4gICAgICAgIHt7I2lmIHN1YlRpdGxlQ2xhc3N9fSB7e3N1YlRpdGxlQ2xhc3N9fXt7L2lmfX1cbiAgICAgICAgXCI+XG4gICAgICAgICAgICB7e3N1YlRpdGxlfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt7L2lmfX1cbiAgICA8L2Rpdj5cbjwvZGl2PlxuICAgIGAsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlQ2xhc3M6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHN1YlRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBzdWJUaXRsZUNsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImJlbGwtY2FyZC10aXRsZVwiPlxuXG4gICAge3skY2hpbGRyZW59fVxuXG4gICAge3sjaWYgdGl0bGV9fVxuICAgIDxkaXYgY2xhc3M9XCJiZWxsLWNhcmQtdGl0bGUtdGV4dFxuICAgIHt7I2lmIHRpdGxlQ2xhc3N9fSB7e3RpdGxlQ2xhc3N9fXt7L2lmfX1cbiAgICBcIj5cbiAgICAgICAge3t0aXRsZX19XG4gICAgPC9kaXY+XG4gICAge3svaWZ9fVxuXG4gICAge3sjaWYgc3ViVGl0bGV9fVxuICAgIDxkaXYgY2xhc3M9XCJiZWxsLWNhcmQtc3ViLXRpdGxlXG4gICAge3sjaWYgc3ViVGl0bGVDbGFzc319IHt7c3ViVGl0bGVDbGFzc319e3svaWZ9fVxuICAgIFwiPlxuICAgICAgICB7e3N1YlRpdGxlfX1cbiAgICA8L2Rpdj5cbiAgICB7ey9pZn19XG48L2Rpdj5cbiAgICBgLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICB0aXRsZUNsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBzdWJUaXRsZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgc3ViVGl0bGVDbGFzczoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCIvKlxuICogQGZpbGUg5Li75qih5Z2XXG4gKiBAYXV0aG9yIHdhbmd0aWFuaHVhXG4gKi9cblxuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXInXG5pbXBvcnQgU2lkZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9TaWRlcidcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvQ29udGVudCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9Gb290ZXInXG5pbXBvcnQgTWVudSBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L01lbnUnXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9NZW51SXRlbSdcbmltcG9ydCBTdWJtZW51IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvU3VibWVudSdcblxuXG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tICcuL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iJ1xuaW1wb3J0IEJyZWFkY3J1bWJJdGVtIGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1iL0JyZWFkY3J1bWJJdGVtJ1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9idXR0b24vQnV0dG9uJ1xuaW1wb3J0IElucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9JbnB1dCdcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC9TZWxlY3QnXG5pbXBvcnQgUGFnZSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZS9QYWdlJ1xuXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi9jb21wb25lbnRzL2FsZXJ0L0FsZXJ0J1xuaW1wb3J0IERlc2MgZnJvbSAnLi9jb21wb25lbnRzL2FsZXJ0L0Rlc2MnXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL2NvbXBvbmVudHMvc3Bpbm5lci9TcGlubmVyJ1xuaW1wb3J0IEJhY2tUb3AgZnJvbSAnLi9jb21wb25lbnRzL2JhY2t0b3AvQmFja1RvcCdcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi9jb21wb25lbnRzL2F2YXRhci9BdmF0YXInXG5cbmltcG9ydCBDYXJkIGZyb20gJy4vY29tcG9uZW50cy9jYXJkL0NhcmQnXG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9DYXJkSGVhZGVyJ1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9DYXJkTWVkaWEnXG5pbXBvcnQgQ2FyZFRpdGxlIGZyb20gJy4vY29tcG9uZW50cy9jYXJkL0NhcmRUaXRsZSdcbmltcG9ydCBDYXJkVGV4dCBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9DYXJkVGV4dCdcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9DYXJkQWN0aW9ucydcblxuWW94LmNvbXBvbmVudCh7XG4gICAgTGF5b3V0LFxuICAgIEhlYWRlcixcbiAgICBTaWRlcixcbiAgICBDb250ZW50LFxuICAgIEZvb3RlcixcbiAgICBNZW51LFxuICAgIE1lbnVJdGVtLFxuICAgIFN1Ym1lbnUsXG5cbiAgICBCcmVhZGNydW1iLFxuICAgIEJyZWFkY3J1bWJJdGVtLFxuXG4gICAgQnV0dG9uLFxuICAgIElucHV0LFxuICAgIFNlbGVjdCxcbiAgICBQYWdlLFxuXG4gICAgQWxlcnQsXG4gICAgRGVzYyxcbiAgICBTcGlubmVyLFxuICAgIEJhY2tUb3AsXG4gICAgQXZhdGFyLFxuXG4gICAgQ2FyZCxcbiAgICBDYXJkSGVhZGVyLFxuICAgIENhcmRNZWRpYSxcbiAgICBDYXJkVGl0bGUsXG4gICAgQ2FyZFRleHQsXG4gICAgQ2FyZEFjdGlvbnNcbn0pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGFBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7OztBQ0xMLFlBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7OztBQ0xMLGNBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7OztBQ0xMLGFBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7OztDQUNKLERDREQsYUFBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7O0lBSVgsQ0FBQzs7SUFFRCxJQUFJLEVBQUUsWUFBWTtRQUNkLE9BQU87WUFDSCxRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFDO0tBQ0w7O0lBRUQsVUFBVSxFQUFFLFVBQVUsUUFBUSxFQUFFO1FBQzVCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNw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
