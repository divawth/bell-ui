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

var Card = {
    template: `
        <div class="bell-card">
            {{$children}}
        </div>
    `
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
        model="text"
        ></input>

    {{else}}
        <textarea class="bell-textarea"
            style="height: {{#if rows}}{{rows * 25}}{{else}}50{{/if}}px"
            {{#if rows}} rows="{{rows}}"{{/if}}
            {{#if placeholder}} placeholder="{{placeholder}}" {{if}}
            {{#if disabled}}disabled="disabled"{{/if}}
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
        onValueChange: {
            type: 'function'
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
            type: 'boolean'
        }
    },
    data: function () {
        return {
            text: '',
            TEXT_TYPE_INPUT: 'input',
            TEXT_TYPE_TEXTAREA: 'textarea'
        }
    },
    watchers: {
        text: function (value) {
            var me = this;
            var onValueChange = me.get('onValueChange');
            if (onValueChange) {
                onValueChange(value);
            }
        }
    },
    afterMount: function () {
        var me = this;
        var value = me.get('value');

        me.set({
            text: value
        });
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
    Card: Card,

    Button: Button,
    Input: Input,
});

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvU2lkZXIuanMiLCJjb21wb25lbnRzL2xheW91dC9Db250ZW50LmpzIiwiY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwiY29tcG9uZW50cy9sYXlvdXQvTWVudS5qcyIsImNvbXBvbmVudHMvbGF5b3V0L01lbnVJdGVtLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvU3VibWVudS5qcyIsImNvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iLmpzIiwiY29tcG9uZW50cy9icmVhZGNydW1iL0JyZWFkY3J1bWJJdGVtLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvQ2FyZC5qcyIsImNvbXBvbmVudHMvYnV0dG9uL0J1dHRvbi5qcyIsImNvbXBvbmVudHMvaW5wdXQvSW5wdXQuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtaGVhZGVyXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtc2lkZXJcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1jb250ZW50XCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtZm9vdGVyXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IFNpZGVyIGZyb20gJy4vU2lkZXInXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtbGF5b3V0e3sjaWYgaGFzU2lkZXJ9fSBiZWxsLWhhcy1zaWRlcnt7L2lmfX1cIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcblxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhc1NpZGVyOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBhZnRlck1vdW50OiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgaWYgKG1lLiRvcHRpb25zLnByb3BzLiRjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1lLiRvcHRpb25zLnByb3BzLiRjaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQudGFnID09ICdTaWRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc1NpZGVyOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1tZW51XCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG5cbiAgICBldmVudHM6IHtcbiAgICAgICAgc2V0QWN0aXZlTWVudTogZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZnRlck1vdW50OiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcblxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtbWVudS1pdGVtXCIgb24tY2xpY2s9XCJoYW5kbGVDbGljayhuYW1lKVwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKG1lLmdldCgnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuZmlyZShcbiAgICAgICAgICAgICAgICAnc2V0QWN0aXZlTWVudScsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtc3ViLW1lbnVcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1icmVhZC1jcnVtYlwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1icmVhZC1jcnVtYi1pdGVtXCI+XG4gICAgICAgICAgICA8YSB7eyNpZiB0b319aHJlZj1cInt7dG99fVwie3svaWZ9fSBjbGFzcz1cImJlbGwtYnJlYWQtY3J1bWItbGlua1wiPlxuICAgICAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1icmVhZC1jcnVtYi1nYXBcIj5cbiAgICAgICAgICAgICAgICB7eyNpZiBzZXBhcmF0b3J9fVxuICAgICAgICAgICAgICAgICAgICB7e3NlcGFyYXRvcn19XG4gICAgICAgICAgICAgICAge3tlbHNlfX1cbiAgICAgICAgICAgICAgICAgICAgL1xuICAgICAgICAgICAgICAgIHt7L2lmfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgIGAsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgdG86IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHNlcGFyYXRvcjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtY2FyZFwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLWJ1dHRvblxuICAgICAgICAgICAge3sjaWYgdHlwZX19IGJlbGwte3t0eXBlfX17ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBzaGFwZX19IGJlbGwte3tzaGFwZX19e3svaWZ9fVxuICAgICAgICAgICAge3sjaWYgc2l6ZX19IGJlbGwte3tzaXplfX17ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBsb25nfX0gYmVsbC1sb25ne3svaWZ9fVxuICAgICAgICAgICAge3sjaWYgZGlzYWJsZWR9fSBiZWxsLWRpc2FibGVke3svaWZ9fVxuICAgICAgICBcIiBvbi1jbGljaz1cImNsaWNrXCI+XG5cbiAgICAgICAgICAgIHt7I2lmIGljb259fVxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmVsbC1pY29uIHt7aWNvbn19XCI+PC9pPlxuICAgICAgICAgICAge3svaWZ9fVxuXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7e2xhYmVsfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBsb25nOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJiZWxsLWlucHV0LXdyYXBwZXJcIlxuICAgIHt7I2lmIHN0eWxlfX0gc3R5bGU9XCJ7e3N0eWxlfX1cInt7L2lmfX1cbj5cblxuICAgIHt7I2lmIHR5cGUgIT0gVEVYVF9UWVBFX1RFWFRBUkVBfX1cbiAgICAgICAge3sjaWYgIWxhYmVsfX1cbiAgICAgICAgPGkgY2xhc3M9XCJiZWxsLWlucHV0LWljb257eyNpZiBpY29ufX0gaWNvbnt7L2lmfX1cIiBvbi1jbGljaz1cImNsaWNrXCI+PC9pPlxuICAgICAgICB7e2Vsc2V9fVxuICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtaW5wdXQtbGFiZWxcIiBvbi1jbGljaz1cImNsaWNrXCI+XG4gICAgICAgICAgICB7e2xhYmVsfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7ey9pZn19XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJiZWxsLWlucHV0e3sjaWYgc2l6ZX19IGJlbGwtaW5wdXQte3tzaXplfX17ey9pZn19XCJcbiAgICAgICAge3sjaWYgcGxhY2Vob2xkZXJ9fSBwbGFjZWhvbGRlcj1cInt7cGxhY2Vob2xkZXJ9fVwie3svaWZ9fVxuICAgICAgICB7eyNpZiBkaXNhYmxlZH19ZGlzYWJsZWQ9XCJkaXNhYmxlZFwie3svaWZ9fVxuICAgICAgICBtb2RlbD1cInRleHRcIlxuICAgICAgICA+PC9pbnB1dD5cblxuICAgIHt7ZWxzZX19XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImJlbGwtdGV4dGFyZWFcIlxuICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IHt7I2lmIHJvd3N9fXt7cm93cyAqIDI1fX17e2Vsc2V9fTUwe3svaWZ9fXB4XCJcbiAgICAgICAgICAgIHt7I2lmIHJvd3N9fSByb3dzPVwie3tyb3dzfX1cInt7L2lmfX1cbiAgICAgICAgICAgIHt7I2lmIHBsYWNlaG9sZGVyfX0gcGxhY2Vob2xkZXI9XCJ7e3BsYWNlaG9sZGVyfX1cIiB7e2lmfX1cbiAgICAgICAgICAgIHt7I2lmIGRpc2FibGVkfX1kaXNhYmxlZD1cImRpc2FibGVkXCJ7ey9pZn19XG4gICAgICAgID5cbiAgICAgICAgPC90ZXh0YXJlYT5cbiAgICB7ey9pZn19XG5cbjwvZGl2PlxuICAgIGAsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgb25WYWx1ZUNoYW5nZToge1xuICAgICAgICAgICAgdHlwZTogJ2Z1bmN0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgcm93czoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIFRFWFRfVFlQRV9JTlBVVDogJ2lucHV0JyxcbiAgICAgICAgICAgIFRFWFRfVFlQRV9URVhUQVJFQTogJ3RleHRhcmVhJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaGVyczoge1xuICAgICAgICB0ZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgb25WYWx1ZUNoYW5nZSA9IG1lLmdldCgnb25WYWx1ZUNoYW5nZScpO1xuICAgICAgICAgICAgaWYgKG9uVmFsdWVDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgYWZ0ZXJNb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICB2YXIgdmFsdWUgPSBtZS5nZXQoJ3ZhbHVlJyk7XG5cbiAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgIHRleHQ6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCIvKlxuICogQGZpbGUg5Li75qih5Z2XXG4gKiBAYXV0aG9yIHdhbmd0aWFuaHVhXG4gKi9cblxuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXInXG5pbXBvcnQgU2lkZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9TaWRlcidcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvQ29udGVudCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9Gb290ZXInXG5pbXBvcnQgTWVudSBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L01lbnUnXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9NZW51SXRlbSdcbmltcG9ydCBTdWJtZW51IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvU3VibWVudSdcbmltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1iL0JyZWFkY3J1bWInXG5pbXBvcnQgQnJlYWRjcnVtYkl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL2JyZWFkY3J1bWIvQnJlYWRjcnVtYkl0ZW0nXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0NhcmQnXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9CdXR0b24nXG5cbmltcG9ydCBJbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvSW5wdXQnXG5cbllveC5jb21wb25lbnQoe1xuICAgIExheW91dDogTGF5b3V0LFxuICAgIEhlYWRlcjogSGVhZGVyLFxuICAgIFNpZGVyOiBTaWRlcixcbiAgICBDb250ZW50OiBDb250ZW50LFxuICAgIEZvb3RlcjogRm9vdGVyLFxuICAgIE1lbnU6IE1lbnUsXG4gICAgTWVudUl0ZW06IE1lbnVJdGVtLFxuICAgIFN1Ym1lbnU6IFN1Ym1lbnUsXG4gICAgQnJlYWRjcnVtYjogQnJlYWRjcnVtYixcbiAgICBCcmVhZGNydW1iSXRlbTogQnJlYWRjcnVtYkl0ZW0sXG4gICAgQ2FyZDogQ2FyZCxcblxuICAgIEJ1dHRvbjogQnV0dG9uLFxuICAgIElucHV0OiBJbnB1dCxcbn0pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGFBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7OztBQ0xMLFlBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7OztBQ0xMLGNBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7OztBQ0xM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
