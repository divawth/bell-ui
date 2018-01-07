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
        var me = this;
        console.log(me, me.$options.props.$children);
    }
};

var MenuItem = {
    template: `
        <div class="bell-menu-item" on-click="click(name)">
            {{$children}}
        </div>
    `,

    propTypes: {
        name: {
            type: 'string'
        }
    },

    methods: {
        click: function (name) {
            var me = this;

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
            <span class="bell-bread-crumb-link">
                {{$children}}
            </span>
            <span class="bell-bread-crumb-gap">
                /
            </span>
        </span>
    `
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvU2lkZXIuanMiLCJjb21wb25lbnRzL2xheW91dC9Db250ZW50LmpzIiwiY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwiY29tcG9uZW50cy9sYXlvdXQvTWVudS5qcyIsImNvbXBvbmVudHMvbGF5b3V0L01lbnVJdGVtLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvU3VibWVudS5qcyIsImNvbXBvbmVudHMvbGF5b3V0L0JyZWFkY3J1bWIuanMiLCJjb21wb25lbnRzL2xheW91dC9CcmVhZGNydW1iSXRlbS5qcyIsImNvbXBvbmVudHMvbGF5b3V0L0NhcmQuanMiLCJjb21wb25lbnRzL2J1dHRvbi9CdXR0b24uanMiLCJjb21wb25lbnRzL2lucHV0L0lucHV0LmpzIiwiaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLWhlYWRlclwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLXNpZGVyXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtY29udGVudFwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLWZvb3RlclwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59IiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBTaWRlciBmcm9tICcuL1NpZGVyJ1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLWxheW91dHt7I2lmIGhhc1NpZGVyfX0gYmVsbC1oYXMtc2lkZXJ7ey9pZn19XCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG5cbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoYXNTaWRlcjogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgYWZ0ZXJNb3VudDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIGlmIChtZS4kb3B0aW9ucy5wcm9wcy4kY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICBtZS4kb3B0aW9ucy5wcm9wcy4kY2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnRhZyA9PSAnU2lkZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNTaWRlcjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtbWVudVwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuXG4gICAgZXZlbnRzOiB7XG4gICAgICAgIHNldEFjdGl2ZU1lbnU6IGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZnRlck1vdW50OiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgY29uc29sZS5sb2cobWUsbWUuJG9wdGlvbnMucHJvcHMuJGNoaWxkcmVuKVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtbWVudS1pdGVtXCIgb24tY2xpY2s9XCJjbGljayhuYW1lKVwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBjbGljazogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICAgICAgICAgIG1lLmZpcmUoXG4gICAgICAgICAgICAgICAgJ3NldEFjdGl2ZU1lbnUnLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLXN1Yi1tZW51XCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtYnJlYWQtY3J1bWJcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtYnJlYWQtY3J1bWItaXRlbVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLWJyZWFkLWNydW1iLWxpbmtcIj5cbiAgICAgICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJlbGwtYnJlYWQtY3J1bWItZ2FwXCI+XG4gICAgICAgICAgICAgICAgL1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1jYXJkXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJlbGwtYnV0dG9uXG4gICAgICAgICAgICB7eyNpZiB0eXBlfX0gYmVsbC17e3R5cGV9fXt7L2lmfX1cbiAgICAgICAgICAgIHt7I2lmIHNoYXBlfX0gYmVsbC17e3NoYXBlfX17ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBzaXplfX0gYmVsbC17e3NpemV9fXt7L2lmfX1cbiAgICAgICAgICAgIHt7I2lmIGxvbmd9fSBiZWxsLWxvbmd7ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBkaXNhYmxlZH19IGJlbGwtZGlzYWJsZWR7ey9pZn19XG4gICAgICAgIFwiIG9uLWNsaWNrPVwiY2xpY2tcIj5cblxuICAgICAgICAgICAge3sjaWYgaWNvbn19XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiZWxsLWljb24ge3tpY29ufX1cIj48L2k+XG4gICAgICAgICAgICB7ey9pZn19XG5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHt7bGFiZWx9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3BUeXBlczoge1xuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGxvbmc6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImJlbGwtaW5wdXQtd3JhcHBlclwiXG4gICAge3sjaWYgc3R5bGV9fSBzdHlsZT1cInt7c3R5bGV9fVwie3svaWZ9fVxuPlxuXG4gICAge3sjaWYgdHlwZSAhPSBURVhUX1RZUEVfVEVYVEFSRUF9fVxuICAgICAgICB7eyNpZiAhbGFiZWx9fVxuICAgICAgICA8aSBjbGFzcz1cImJlbGwtaW5wdXQtaWNvbnt7I2lmIGljb259fSBpY29ue3svaWZ9fVwiIG9uLWNsaWNrPVwiY2xpY2tcIj48L2k+XG4gICAgICAgIHt7ZWxzZX19XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1pbnB1dC1sYWJlbFwiIG9uLWNsaWNrPVwiY2xpY2tcIj5cbiAgICAgICAgICAgIHt7bGFiZWx9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHt7L2lmfX1cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImJlbGwtaW5wdXR7eyNpZiBzaXplfX0gYmVsbC1pbnB1dC17e3NpemV9fXt7L2lmfX1cIlxuICAgICAgICB7eyNpZiBwbGFjZWhvbGRlcn19IHBsYWNlaG9sZGVyPVwie3twbGFjZWhvbGRlcn19XCJ7ey9pZn19XG4gICAgICAgIHt7I2lmIGRpc2FibGVkfX1kaXNhYmxlZD1cImRpc2FibGVkXCJ7ey9pZn19XG4gICAgICAgIG1vZGVsPVwidGV4dFwiXG4gICAgICAgID48L2lucHV0PlxuXG4gICAge3tlbHNlfX1cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiYmVsbC10ZXh0YXJlYVwiXG4gICAgICAgICAgICBzdHlsZT1cImhlaWdodDoge3sjaWYgcm93c319e3tyb3dzICogMjV9fXt7ZWxzZX19NTB7ey9pZn19cHhcIlxuICAgICAgICAgICAge3sjaWYgcm93c319IHJvd3M9XCJ7e3Jvd3N9fVwie3svaWZ9fVxuICAgICAgICAgICAge3sjaWYgcGxhY2Vob2xkZXJ9fSBwbGFjZWhvbGRlcj1cInt7cGxhY2Vob2xkZXJ9fVwiIHt7aWZ9fVxuICAgICAgICAgICAge3sjaWYgZGlzYWJsZWR9fWRpc2FibGVkPVwiZGlzYWJsZWRcInt7L2lmfX1cbiAgICAgICAgPlxuICAgICAgICA8L3RleHRhcmVhPlxuICAgIHt7L2lmfX1cblxuPC9kaXY+XG4gICAgYCxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBvblZhbHVlQ2hhbmdlOiB7XG4gICAgICAgICAgICB0eXBlOiAnZnVuY3Rpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICByb3dzOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgVEVYVF9UWVBFX0lOUFVUOiAnaW5wdXQnLFxuICAgICAgICAgICAgVEVYVF9UWVBFX1RFWFRBUkVBOiAndGV4dGFyZWEnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoZXJzOiB7XG4gICAgICAgIHRleHQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIHZhciBvblZhbHVlQ2hhbmdlID0gbWUuZ2V0KCdvblZhbHVlQ2hhbmdlJyk7XG4gICAgICAgICAgICBpZiAob25WYWx1ZUNoYW5nZSkge1xuICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2UodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBhZnRlck1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIHZhciB2YWx1ZSA9IG1lLmdldCgndmFsdWUnKTtcblxuICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgdGV4dDogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8qXG4gKiBAZmlsZSDkuLvmqKHlnZdcbiAqIEBhdXRob3Igd2FuZ3RpYW5odWFcbiAqL1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlcidcbmltcG9ydCBTaWRlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L1NpZGVyJ1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9Db250ZW50J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3RlcidcbmltcG9ydCBNZW51IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvTWVudSdcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L01lbnVJdGVtJ1xuaW1wb3J0IFN1Ym1lbnUgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9TdWJtZW51J1xuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9CcmVhZGNydW1iJ1xuaW1wb3J0IEJyZWFkY3J1bWJJdGVtIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvQnJlYWRjcnVtYkl0ZW0nXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0NhcmQnXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9CdXR0b24nXG5cbmltcG9ydCBJbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvSW5wdXQnXG5cbllveC5jb21wb25lbnQoe1xuICAgIExheW91dDogTGF5b3V0LFxuICAgIEhlYWRlcjogSGVhZGVyLFxuICAgIFNpZGVyOiBTaWRlcixcbiAgICBDb250ZW50OiBDb250ZW50LFxuICAgIEZvb3RlcjogRm9vdGVyLFxuICAgIE1lbnU6IE1lbnUsXG4gICAgTWVudUl0ZW06IE1lbnVJdGVtLFxuICAgIFN1Ym1lbnU6IFN1Ym1lbnUsXG4gICAgQnJlYWRjcnVtYjogQnJlYWRjcnVtYixcbiAgICBCcmVhZGNydW1iSXRlbTogQnJlYWRjcnVtYkl0ZW0sXG4gICAgQ2FyZDogQ2FyZCxcblxuICAgIEJ1dHRvbjogQnV0dG9uLFxuICAgIElucHV0OiBJbnB1dCxcbn0pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGFBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7OztBQ0xMLFlBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7OztBQ0xMLGNBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7OztBQ0xMLGFBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7OztDQUNKLERDREQsYUFBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7O0lBSVgsQ0FBQzs7SUFFRCxJQUFJLEVBQUUsWUFBWTtRQUNkLE9BQU87WUFDSCxRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFDO0tBQ0w7O0lBRUQsVUFBVSxFQUFFLFVBQVUsUUFBUSxFQUFFO1FBQzVCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNwQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSTtnQkFDdEMsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sRUFBRTtvQkFDdEIsRUFBRSxDQUFDLEdBQUcsQ0FBQzt3QkFD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
