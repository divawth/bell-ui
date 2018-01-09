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
            <i class="bell-input-icon{{#if icon}} icon{{/if}}" on-click="click"></i>
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
            {{{defaultText}}}
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
    Select: Select
});

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvU2lkZXIuanMiLCJjb21wb25lbnRzL2xheW91dC9Db250ZW50LmpzIiwiY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwiY29tcG9uZW50cy9sYXlvdXQvTWVudS5qcyIsImNvbXBvbmVudHMvbGF5b3V0L01lbnVJdGVtLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvU3VibWVudS5qcyIsImNvbXBvbmVudHMvbGF5b3V0L0NhcmQuanMiLCJjb21wb25lbnRzL2JyZWFkY3J1bWIvQnJlYWRjcnVtYi5qcyIsImNvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iSXRlbS5qcyIsImNvbXBvbmVudHMvYnV0dG9uL0J1dHRvbi5qcyIsImNvbXBvbmVudHMvaW5wdXQvSW5wdXQuanMiLCJjb21wb25lbnRzL3NlbGVjdC9TZWxlY3QuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtaGVhZGVyXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtc2lkZXJcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1jb250ZW50XCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtZm9vdGVyXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IFNpZGVyIGZyb20gJy4vU2lkZXInXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtbGF5b3V0e3sjaWYgaGFzU2lkZXJ9fSBiZWxsLWhhcy1zaWRlcnt7L2lmfX1cIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcblxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhc1NpZGVyOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBhZnRlck1vdW50OiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgaWYgKG1lLiRvcHRpb25zLnByb3BzLiRjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1lLiRvcHRpb25zLnByb3BzLiRjaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQudGFnID09ICdTaWRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc1NpZGVyOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1tZW51XCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG5cbiAgICBldmVudHM6IHtcbiAgICAgICAgc2V0QWN0aXZlTWVudTogZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZnRlck1vdW50OiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcblxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtbWVudS1pdGVtXCIgb24tY2xpY2s9XCJoYW5kbGVDbGljayhuYW1lKVwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKG1lLmdldCgnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuZmlyZShcbiAgICAgICAgICAgICAgICAnc2V0QWN0aXZlTWVudScsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtc3ViLW1lbnVcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1jYXJkXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtYnJlYWQtY3J1bWJcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtYnJlYWQtY3J1bWItaXRlbVwiPlxuICAgICAgICAgICAgPGEge3sjaWYgdG99fWhyZWY9XCJ7e3RvfX1cInt7L2lmfX0gY2xhc3M9XCJiZWxsLWJyZWFkLWNydW1iLWxpbmtcIj5cbiAgICAgICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtYnJlYWQtY3J1bWItZ2FwXCI+XG4gICAgICAgICAgICAgICAge3sjaWYgc2VwYXJhdG9yfX1cbiAgICAgICAgICAgICAgICAgICAge3tzZXBhcmF0b3J9fVxuICAgICAgICAgICAgICAgIHt7ZWxzZX19XG4gICAgICAgICAgICAgICAgICAgIC9cbiAgICAgICAgICAgICAgICB7ey9pZn19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICBgLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHRvOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBzZXBhcmF0b3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLWJ1dHRvblxuICAgICAgICAgICAge3sjaWYgdHlwZX19IGJlbGwte3t0eXBlfX17ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBzaGFwZX19IGJlbGwte3tzaGFwZX19e3svaWZ9fVxuICAgICAgICAgICAge3sjaWYgc2l6ZX19IGJlbGwte3tzaXplfX17ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBsb25nfX0gYmVsbC1sb25ne3svaWZ9fVxuICAgICAgICAgICAge3sjaWYgZGlzYWJsZWR9fSBiZWxsLWRpc2FibGVke3svaWZ9fVxuICAgICAgICBcIiBvbi1jbGljaz1cImNsaWNrXCI+XG5cbiAgICAgICAgICAgIHt7I2lmIGljb259fVxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmVsbC1pY29uIHt7aWNvbn19XCI+PC9pPlxuICAgICAgICAgICAge3svaWZ9fVxuXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7e2xhYmVsfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBsb25nOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImJlbGwtaW5wdXQtd3JhcHBlclwiXG4gICAge3sjaWYgc3R5bGV9fSBzdHlsZT1cInt7c3R5bGV9fVwie3svaWZ9fVxuPlxuICAgIHt7I2lmIHR5cGUgIT0gVEVYVF9UWVBFX1RFWFRBUkVBfX1cbiAgICAgICAge3sjaWYgIWxhYmVsfX1cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmVsbC1pbnB1dC1pY29ue3sjaWYgaWNvbn19IGljb257ey9pZn19XCIgb24tY2xpY2s9XCJjbGlja1wiPjwvaT5cbiAgICAgICAge3tlbHNlfX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1pbnB1dC1sYWJlbFwiIG9uLWNsaWNrPVwiY2xpY2tcIj5cbiAgICAgICAgICAgICAgICB7e2xhYmVsfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAge3svaWZ9fVxuXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYmVsbC1pbnB1dHt7I2lmIHNpemV9fSBiZWxsLWlucHV0LXt7c2l6ZX19e3svaWZ9fVwiXG4gICAgICAgIHt7I2lmIHBsYWNlaG9sZGVyfX0gcGxhY2Vob2xkZXI9XCJ7e3BsYWNlaG9sZGVyfX1cInt7L2lmfX1cbiAgICAgICAge3sjaWYgZGlzYWJsZWR9fWRpc2FibGVkPVwiZGlzYWJsZWRcInt7L2lmfX1cbiAgICAgICAgbW9kZWw9XCJ2YWx1ZVwiXG4gICAgICAgID48L2lucHV0PlxuXG4gICAge3tlbHNlfX1cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiYmVsbC10ZXh0YXJlYVwiXG4gICAgICAgICAgICBzdHlsZT1cImhlaWdodDoge3sjaWYgcm93c319e3tyb3dzICogMjV9fXt7ZWxzZX19NTB7ey9pZn19cHhcIlxuICAgICAgICAgICAge3sjaWYgcm93c319IHJvd3M9XCJ7e3Jvd3N9fVwie3svaWZ9fVxuICAgICAgICAgICAge3sjaWYgcGxhY2Vob2xkZXJ9fSBwbGFjZWhvbGRlcj1cInt7cGxhY2Vob2xkZXJ9fVwiIHt7aWZ9fVxuICAgICAgICAgICAge3sjaWYgZGlzYWJsZWR9fWRpc2FibGVkPVwiZGlzYWJsZWRcInt7L2lmfX1cbiAgICAgICAgICAgIG1vZGVsPVwidmFsdWVcIlxuICAgICAgICA+XG4gICAgICAgIDwvdGV4dGFyZWE+XG4gICAge3svaWZ9fVxuXG48L2Rpdj5cbiAgICBgLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICByb3dzOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgVEVYVF9UWVBFX0lOUFVUOiAnaW5wdXQnLFxuICAgICAgICAgICAgVEVYVF9UWVBFX1RFWFRBUkVBOiAndGV4dGFyZWEnXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2hlcnM6IHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWZ0ZXJNb3VudDogZnVuY3Rpb24gKCkge1xuXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImJlbGwtc2VsZWN0XG57eyNpZiBzaXplfX0gYmVsbC1zZWxlY3Qte3tzaXplfX17ey9pZn19XG57eyNpZiBkaXNhYmxlZH19IGJlbGwtc2VsZWN0LWRpc2FibGVke3svaWZ9fVxuXCJcbiAgICB7eyNpZiBzdHlsZX19IHN0eWxlPVwie3tzdHlsZX19XCJ7ey9pZn19XG4+XG4gICAgPGRpdiBjbGFzcz1cImJlbGwtc2VsZWN0LWJ1dHRvbnt7I2lmIHZpc2libGV9fSBiZWxsLWFjdGl2ZXt7L2lmfX1cIiBvbi1jbGljaz1cInRvZ2dsZU1lbnUoKVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG1vZGVsPVwidmFsdWVcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtc2VsZWN0LXZhbHVle3sjaWYgdmFsdWVUb1RleHQodmFsdWUpID09IG51bGx9fSBiZWxsLWhpZGV7ey9pZn19XCI+XG4gICAgICAgICAgICB7e3t2YWx1ZVRvVGV4dCh2YWx1ZSl9fX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtc2VsZWN0LXBsYWNlaG9sZGVye3sjaWYgdmFsdWVUb1RleHQodmFsdWUpICE9IG51bGx9fSBiZWxsLWhpZGV7ey9pZn19XCI+XG4gICAgICAgICAgICB7e3tkZWZhdWx0VGV4dH19fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1zZWxlY3QtYXJyb3dcIj48L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiYmVsbC1zZWxlY3QtZHJvcGRvd257eyNpZiAhdmlzaWJsZX19IGJlbGwtaGlkZXt7L2lmfX1cIlxuICAgIHt7I2lmIHN0eWxlfX0gc3R5bGU9XCJ7e3N0eWxlfX1cInt7L2lmfX1cbiAgICA+XG4gICAgICAgIDx1bCBjbGFzcz1cImJlbGwtc2VsZWN0LWRyb3Bkb3duLWxpc3RcIj5cbiAgICAgICAgICAgIHt7I2VhY2ggbGlzdDppbmRleH19XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJiZWxsLXNlbGVjdC1kcm9wZG93bi1pdGVte3sjaWYgZm9jdXNJbmRleCA9PSBpbmRleH19IGJlbGwtZm9jdXN7ey9pZn19e3sjaWYgdmFsdWUgPT0gdmFsfX0gYmVsbC1hY3RpdmV7ey9pZn19XCIgb24tY2xpY2s9XCJpdGVtQ2xpY2soaW5kZXgpXCI+XG4gICAgICAgICAgICAgICAge3t0ZXh0fX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB7ey9lYWNofX1cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuICAgIGAsXG5cbiAgICBwcm9wVHlwZXM6IHtcblxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcblxuICAgICAgICBkZWZhdWx0VGV4dDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcblxuICAgICAgICBsaXN0OiB7XG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgcmVxdWlyZTogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgYXV0b0NvbXBsZXRlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgZm9jdXNJbmRleDogbnVsbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGZpbHRlcnM6IHtcbiAgICAgICAgdmFsdWVUb1RleHQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU1hcFt2YWx1ZV07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICB0b2dnbGVNZW51OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKG1lLmdldCgnZGlzYWJsZWQnKSB8fCBtZS5nZXQoJ2F1dG9Db21wbGV0ZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiAhbWUuZ2V0KCd2aXNpYmxlJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGl0ZW1DbGljazogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSBtZS5nZXQoJ2xpc3QnKVxuICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbGlzdFtpbmRleF0udmFsLFxuICAgICAgICAgICAgICAgIGZvY3VzSW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRGb2N1c0luZGV4OiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGZvY3VzSW5kZXggPSBtZS5nZXQoJ2ZvY3VzSW5kZXgnKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IG1lLmdldCgndmFsdWUnKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gbWUuZ2V0KCdsaXN0Jyk7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gbGlzdC5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICBpZiAoZm9jdXNJbmRleCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9jdXNJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcHRpb24gPT0gJ3VwJykge1xuICAgICAgICAgICAgICAgIGZvY3VzSW5kZXggPSBmb2N1c0luZGV4ICsgMSA+IGxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZm9jdXNJbmRleCArIDE7XG4gICAgICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNJbmRleDogZm9jdXNJbmRleFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9uID09ICdkb3duJykge1xuICAgICAgICAgICAgICAgIGZvY3VzSW5kZXggPSBmb2N1c0luZGV4IC0gMSA8IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZm9jdXNJbmRleCAtIDE7XG4gICAgICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNJbmRleDogZm9jdXNJbmRleFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9uID09ICdlbnRlcicpIHtcbiAgICAgICAgICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbGlzdFtmb2N1c0luZGV4XS52YWwsXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzSW5kZXg6IGZvY3VzSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWZ0ZXJNb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBtZS52YWx1ZU1hcCA9IHt9O1xuICAgICAgICBZb3guYXJyYXkuZWFjaChcbiAgICAgICAgICAgIG1lLmdldCgnbGlzdCcpLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgbWUudmFsdWVNYXBbaXRlbS52YWxdID0gaXRlbS50ZXh0O1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnZhbCA9PSBtZS5nZXQoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzSW5kZXg6IGluZGV4XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBtZS5kb2N1bWVudENsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAobWUuJGVsLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIG1lLmRvY3VtZW50S2V5ZG93bkhhbmRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgY29kZSA9IGUua2V5Q29kZTtcbiAgICAgICAgICAgIGlmICghbWUuZ2V0KCd2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29kZSA9PT0gNDApIHtcbiAgICAgICAgICAgICAgICAvLyB1cFxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBtZS5zZXRGb2N1c0luZGV4KCd1cCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29kZSA9PT0gMzgpIHtcbiAgICAgICAgICAgICAgICAvLyBkb3duXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIG1lLnNldEZvY3VzSW5kZXgoJ2Rvd24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvZGUgPT0gMTMpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnRlclxuICAgICAgICAgICAgICAgIG1lLnNldEZvY3VzSW5kZXgoJ2VudGVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICBtZS5kb2N1bWVudENsaWNrSGFuZGxlclxuICAgICAgICApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2tleWRvd24nLFxuICAgICAgICAgICAgbWUuZG9jdW1lbnRLZXlkb3duSGFuZGVyXG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIGJlZm9yZURlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgbWUudmFsdWVNYXAgPSBudWxsO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICAgIG1lLmRvY3VtZW50Q2xpY2tIYW5kbGVyXG4gICAgICAgICk7XG4gICAgfVxufSIsIi8qXG4gKiBAZmlsZSDkuLvmqKHlnZdcbiAqIEBhdXRob3Igd2FuZ3RpYW5odWFcbiAqL1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlcidcbmltcG9ydCBTaWRlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L1NpZGVyJ1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9Db250ZW50J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3RlcidcbmltcG9ydCBNZW51IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvTWVudSdcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L01lbnVJdGVtJ1xuaW1wb3J0IFN1Ym1lbnUgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9TdWJtZW51J1xuaW1wb3J0IENhcmQgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9DYXJkJ1xuXG5cbmltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1iL0JyZWFkY3J1bWInXG5pbXBvcnQgQnJlYWRjcnVtYkl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL2JyZWFkY3J1bWIvQnJlYWRjcnVtYkl0ZW0nXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9CdXR0b24nXG5cbmltcG9ydCBJbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvSW5wdXQnXG5cbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC9TZWxlY3QnXG5cbllveC5jb21wb25lbnQoe1xuICAgIExheW91dDogTGF5b3V0LFxuICAgIEhlYWRlcjogSGVhZGVyLFxuICAgIFNpZGVyOiBTaWRlcixcbiAgICBDb250ZW50OiBDb250ZW50LFxuICAgIEZvb3RlcjogRm9vdGVyLFxuICAgIE1lbnU6IE1lbnUsXG4gICAgTWVudUl0ZW06IE1lbnVJdGVtLFxuICAgIFN1Ym1lbnU6IFN1Ym1lbnUsXG4gICAgQ2FyZDogQ2FyZCxcblxuICAgIEJyZWFkY3J1bWI6IEJyZWFkY3J1bWIsXG4gICAgQnJlYWRjcnVtYkl0ZW06IEJyZWFkY3J1bWJJdGVtLFxuXG4gICAgQnV0dG9uOiBCdXR0b24sXG4gICAgSW5wdXQ6IElucHV0LFxuICAgIFNlbGVjdDogU2VsZWN0XG59KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxhQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7SUFJWCxDQUFDOzs7QUNMTCxZQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7SUFJWCxDQUFDOzs7QUNMTCxjQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7SUFJWCxDQUFDOzs7QUNMTCxhQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7SUFJWCxDQUFDOzs7Q0FDSixEQ0RELGFBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7O0lBRUQsSUFBSSxFQUFFLFlBQVk7UUFDZCxPQUFPO1lBQ0gsUUFBUSxFQUFFLEtBQUs7U0FDbEIsQ0FBQztLQUNMOztJQUVELFVBQVUsRUFBRSxVQUFVLFFBQVEs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
