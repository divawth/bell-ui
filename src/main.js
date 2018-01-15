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
                } else {
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

            me.fire('setActiveMenu', {
                name: name
            });
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
        };
    },

    watchers: {
        value: function (value) {
            console.log(value);
        }
    },

    afterMount: function () {}
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
        };
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

    afterMount: function () {
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

    beforeDestroy: function () {
        var me = this;
        me.valueMap = null;
        document.removeEventListener('click', me.documentClickHandler);
        document.removeEventListener('keydown', me.documentKeydownHander);
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

    data: function () {
        var me = this;
        var getPageList = function () {
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

    afterMount: function () {
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

    beforeDestroy: function () {
        var me = this;
        document.removeEventListener('keydown', me.documentKeydownHander);
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
        };
    },

    watchers: {},

    methods: {
        close: function () {
            var me = this;
            var container = $(me.$el);
            container.addClass('bell-hide');
            setTimeout(function () {
                container[0].remove();
            }, 500);
            me.get('close') && me.get('close')();
        }
    },

    afterMount: function () {
        var me = this;
        var children = me.$options.props.$children;
        if (Yox.is.array(children) && me.$options.props.$children.length) {
            me.$options.props.$children.some(child => {
                if (child.tag == 'Desc') {
                    me.set({
                        hasDesc: true
                    });
                }
            });
        }
    },

    beforeDestroy: function () {}
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
        };
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
        me.handleScroll = function () {
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
