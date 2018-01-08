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
<div class="bell-select"
    {{#if style}} style="{{style}}"{{/if}}
>
    <div class="bell-select-button" on-click="toggleMenu()">
        <input type="hidden" />
        <span class="bell-select-placeholder">
            {{{defaultText}}}
        </span>

        <span class="bell-select-arrow"></span>
    </div>

    <div class="bell-select-dropdown{{#if !visible}} bell-hide{{/if}}">
        <ul class="bell-select-dropdown-list">
            <li class="bell-select-dropdown-item">
                dasdsad
            </li>
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

        disabled: {
            type: 'string'
        },

        autoComplete: {
            type: 'string'
        }
    },

    data: function () {
        return {
            visible: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvU2lkZXIuanMiLCJjb21wb25lbnRzL2xheW91dC9Db250ZW50LmpzIiwiY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwiY29tcG9uZW50cy9sYXlvdXQvTWVudS5qcyIsImNvbXBvbmVudHMvbGF5b3V0L01lbnVJdGVtLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvU3VibWVudS5qcyIsImNvbXBvbmVudHMvbGF5b3V0L0NhcmQuanMiLCJjb21wb25lbnRzL2JyZWFkY3J1bWIvQnJlYWRjcnVtYi5qcyIsImNvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iSXRlbS5qcyIsImNvbXBvbmVudHMvYnV0dG9uL0J1dHRvbi5qcyIsImNvbXBvbmVudHMvaW5wdXQvSW5wdXQuanMiLCJjb21wb25lbnRzL3NlbGVjdC9TZWxlY3QuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtaGVhZGVyXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtc2lkZXJcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1jb250ZW50XCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtZm9vdGVyXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IFNpZGVyIGZyb20gJy4vU2lkZXInXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtbGF5b3V0e3sjaWYgaGFzU2lkZXJ9fSBiZWxsLWhhcy1zaWRlcnt7L2lmfX1cIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcblxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhc1NpZGVyOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBhZnRlck1vdW50OiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgaWYgKG1lLiRvcHRpb25zLnByb3BzLiRjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1lLiRvcHRpb25zLnByb3BzLiRjaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQudGFnID09ICdTaWRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc1NpZGVyOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1tZW51XCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG5cbiAgICBldmVudHM6IHtcbiAgICAgICAgc2V0QWN0aXZlTWVudTogZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZnRlck1vdW50OiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcblxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtbWVudS1pdGVtXCIgb24tY2xpY2s9XCJoYW5kbGVDbGljayhuYW1lKVwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKG1lLmdldCgnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuZmlyZShcbiAgICAgICAgICAgICAgICAnc2V0QWN0aXZlTWVudScsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtc3ViLW1lbnVcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1jYXJkXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtYnJlYWQtY3J1bWJcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtYnJlYWQtY3J1bWItaXRlbVwiPlxuICAgICAgICAgICAgPGEge3sjaWYgdG99fWhyZWY9XCJ7e3RvfX1cInt7L2lmfX0gY2xhc3M9XCJiZWxsLWJyZWFkLWNydW1iLWxpbmtcIj5cbiAgICAgICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtYnJlYWQtY3J1bWItZ2FwXCI+XG4gICAgICAgICAgICAgICAge3sjaWYgc2VwYXJhdG9yfX1cbiAgICAgICAgICAgICAgICAgICAge3tzZXBhcmF0b3J9fVxuICAgICAgICAgICAgICAgIHt7ZWxzZX19XG4gICAgICAgICAgICAgICAgICAgIC9cbiAgICAgICAgICAgICAgICB7ey9pZn19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICBgLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHRvOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBzZXBhcmF0b3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLWJ1dHRvblxuICAgICAgICAgICAge3sjaWYgdHlwZX19IGJlbGwte3t0eXBlfX17ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBzaGFwZX19IGJlbGwte3tzaGFwZX19e3svaWZ9fVxuICAgICAgICAgICAge3sjaWYgc2l6ZX19IGJlbGwte3tzaXplfX17ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBsb25nfX0gYmVsbC1sb25ne3svaWZ9fVxuICAgICAgICAgICAge3sjaWYgZGlzYWJsZWR9fSBiZWxsLWRpc2FibGVke3svaWZ9fVxuICAgICAgICBcIiBvbi1jbGljaz1cImNsaWNrXCI+XG5cbiAgICAgICAgICAgIHt7I2lmIGljb259fVxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmVsbC1pY29uIHt7aWNvbn19XCI+PC9pPlxuICAgICAgICAgICAge3svaWZ9fVxuXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7e2xhYmVsfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBsb25nOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImJlbGwtaW5wdXQtd3JhcHBlclwiXG4gICAge3sjaWYgc3R5bGV9fSBzdHlsZT1cInt7c3R5bGV9fVwie3svaWZ9fVxuPlxuXG4gICAge3sjaWYgdHlwZSAhPSBURVhUX1RZUEVfVEVYVEFSRUF9fVxuICAgICAgICB7eyNpZiAhbGFiZWx9fVxuICAgICAgICAgICAgPGkgY2xhc3M9XCJiZWxsLWlucHV0LWljb257eyNpZiBpY29ufX0gaWNvbnt7L2lmfX1cIiBvbi1jbGljaz1cImNsaWNrXCI+PC9pPlxuICAgICAgICB7e2Vsc2V9fVxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLWlucHV0LWxhYmVsXCIgb24tY2xpY2s9XCJjbGlja1wiPlxuICAgICAgICAgICAgICAgIHt7bGFiZWx9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICB7ey9pZn19XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJiZWxsLWlucHV0e3sjaWYgc2l6ZX19IGJlbGwtaW5wdXQte3tzaXplfX17ey9pZn19XCJcbiAgICAgICAge3sjaWYgcGxhY2Vob2xkZXJ9fSBwbGFjZWhvbGRlcj1cInt7cGxhY2Vob2xkZXJ9fVwie3svaWZ9fVxuICAgICAgICB7eyNpZiBkaXNhYmxlZH19ZGlzYWJsZWQ9XCJkaXNhYmxlZFwie3svaWZ9fVxuICAgICAgICBtb2RlbD1cInZhbHVlXCJcbiAgICAgICAgPjwvaW5wdXQ+XG5cbiAgICB7e2Vsc2V9fVxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJiZWxsLXRleHRhcmVhXCJcbiAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiB7eyNpZiByb3dzfX17e3Jvd3MgKiAyNX19e3tlbHNlfX01MHt7L2lmfX1weFwiXG4gICAgICAgICAgICB7eyNpZiByb3dzfX0gcm93cz1cInt7cm93c319XCJ7ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBwbGFjZWhvbGRlcn19IHBsYWNlaG9sZGVyPVwie3twbGFjZWhvbGRlcn19XCIge3tpZn19XG4gICAgICAgICAgICB7eyNpZiBkaXNhYmxlZH19ZGlzYWJsZWQ9XCJkaXNhYmxlZFwie3svaWZ9fVxuICAgICAgICAgICAgbW9kZWw9XCJ2YWx1ZVwiXG4gICAgICAgID5cbiAgICAgICAgPC90ZXh0YXJlYT5cbiAgICB7ey9pZn19XG5cbjwvZGl2PlxuICAgIGAsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHJvd3M6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBURVhUX1RZUEVfSU5QVVQ6ICdpbnB1dCcsXG4gICAgICAgICAgICBURVhUX1RZUEVfVEVYVEFSRUE6ICd0ZXh0YXJlYSdcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaGVyczoge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZnRlck1vdW50OiBmdW5jdGlvbiAoKSB7XG5cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiYmVsbC1zZWxlY3RcIlxuICAgIHt7I2lmIHN0eWxlfX0gc3R5bGU9XCJ7e3N0eWxlfX1cInt7L2lmfX1cbj5cbiAgICA8ZGl2IGNsYXNzPVwiYmVsbC1zZWxlY3QtYnV0dG9uXCIgb24tY2xpY2s9XCJ0b2dnbGVNZW51KClcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtc2VsZWN0LXBsYWNlaG9sZGVyXCI+XG4gICAgICAgICAgICB7e3tkZWZhdWx0VGV4dH19fVxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLXNlbGVjdC1hcnJvd1wiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJiZWxsLXNlbGVjdC1kcm9wZG93bnt7I2lmICF2aXNpYmxlfX0gYmVsbC1oaWRle3svaWZ9fVwiPlxuICAgICAgICA8dWwgY2xhc3M9XCJiZWxsLXNlbGVjdC1kcm9wZG93bi1saXN0XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJiZWxsLXNlbGVjdC1kcm9wZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgZGFzZHNhZFxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuICAgIGAsXG5cbiAgICBwcm9wVHlwZXM6IHtcblxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcblxuICAgICAgICBkZWZhdWx0VGV4dDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcblxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcblxuICAgICAgICBhdXRvQ29tcGxldGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHRvZ2dsZU1lbnU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAobWUuZ2V0KCdkaXNhYmxlZCcpIHx8IG1lLmdldCgnYXV0b0NvbXBsZXRlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgICAgIHZpc2libGU6ICFtZS5nZXQoJ3Zpc2libGUnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2hlcnM6IHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWZ0ZXJNb3VudDogZnVuY3Rpb24gKCkge1xuXG4gICAgfVxufSIsIi8qXG4gKiBAZmlsZSDkuLvmqKHlnZdcbiAqIEBhdXRob3Igd2FuZ3RpYW5odWFcbiAqL1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlcidcbmltcG9ydCBTaWRlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L1NpZGVyJ1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9Db250ZW50J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3RlcidcbmltcG9ydCBNZW51IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvTWVudSdcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L01lbnVJdGVtJ1xuaW1wb3J0IFN1Ym1lbnUgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9TdWJtZW51J1xuaW1wb3J0IENhcmQgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9DYXJkJ1xuXG5cbmltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1iL0JyZWFkY3J1bWInXG5pbXBvcnQgQnJlYWRjcnVtYkl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL2JyZWFkY3J1bWIvQnJlYWRjcnVtYkl0ZW0nXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9CdXR0b24nXG5cbmltcG9ydCBJbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvSW5wdXQnXG5cbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC9TZWxlY3QnXG5cbllveC5jb21wb25lbnQoe1xuICAgIExheW91dDogTGF5b3V0LFxuICAgIEhlYWRlcjogSGVhZGVyLFxuICAgIFNpZGVyOiBTaWRlcixcbiAgICBDb250ZW50OiBDb250ZW50LFxuICAgIEZvb3RlcjogRm9vdGVyLFxuICAgIE1lbnU6IE1lbnUsXG4gICAgTWVudUl0ZW06IE1lbnVJdGVtLFxuICAgIFN1Ym1lbnU6IFN1Ym1lbnUsXG4gICAgQ2FyZDogQ2FyZCxcblxuICAgIEJyZWFkY3J1bWI6IEJyZWFkY3J1bWIsXG4gICAgQnJlYWRjcnVtYkl0ZW06IEJyZWFkY3J1bWJJdGVtLFxuXG4gICAgQnV0dG9uOiBCdXR0b24sXG4gICAgSW5wdXQ6IElucHV0LFxuICAgIFNlbGVjdDogU2VsZWN0XG59KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxhQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7SUFJWCxDQUFDOzs7QUNMTCxZQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7SUFJWCxDQUFDOzs7QUNMTCxjQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7SUFJWCxDQUFDOzs7QUNMTCxhQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7SUFJWCxDQUFDOzs7Q0FDSixEQ0RELGFBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7O0lBRUQsSUFBSSxFQUFFLFlBQVk7UUFDZCxPQUFPO1lBQ0gsUUFBUSxFQUFFLEtBQUs7U0FDbEIsQ0FBQztLQUNMOztJQUVELFVBQVUsRUFBRSxVQUFVLFFBQVEsRUFBRTtRQUM1QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZCxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDcEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUk7Z0JBQ3RDLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUU7b0JBQ3RCLEVBQUUsQ0FBQyxHQUFHLENBQUM7d0JBQ0gsUUFBUSxFQUFFLElBQUk7cUJBQ2pCLENBQUMsQ0FBQztpQkFDTjthQUNKLENBQUMsQ0FBQztTQUNOO0tBQ0o7OztBQzdCTCxXQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7SUFJWCxDQUFDOztJQUVE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
