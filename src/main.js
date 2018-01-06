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
    `
};

var MenuItem = {
    template: `
        <div class="bell-menu-item">
            {{$children}}
        </div>
    `
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
            {{$children}}
            <span class="bell-bread-crumb-gap">
                /
            </span>
        </span>
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
});

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvU2lkZXIuanMiLCJjb21wb25lbnRzL2xheW91dC9Db250ZW50LmpzIiwiY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwiY29tcG9uZW50cy9sYXlvdXQvTWVudS5qcyIsImNvbXBvbmVudHMvbGF5b3V0L01lbnVJdGVtLmpzIiwiY29tcG9uZW50cy9sYXlvdXQvU3VibWVudS5qcyIsImNvbXBvbmVudHMvbGF5b3V0L0JyZWFkY3J1bWIuanMiLCJjb21wb25lbnRzL2xheW91dC9CcmVhZGNydW1iSXRlbS5qcyIsImNvbXBvbmVudHMvYnV0dG9uL0J1dHRvbi5qcyIsImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1zaWRlclwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1mb290ZXJcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgU2lkZXIgZnJvbSAnLi9TaWRlcidcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1sYXlvdXR7eyNpZiBoYXNTaWRlcn19IGJlbGwtaGFzLXNpZGVye3svaWZ9fVwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGFzU2lkZXI6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGFmdGVyTW91bnQ6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBpZiAobWUuJG9wdGlvbnMucHJvcHMuJGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgbWUuJG9wdGlvbnMucHJvcHMuJGNoaWxkcmVuLnNvbWUoY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC50YWcgPT0gJ1NpZGVyJykge1xuICAgICAgICAgICAgICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzU2lkZXI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLW1lbnVcIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1tZW51LWl0ZW1cIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmVsbC1zdWItbWVudVwiPlxuICAgICAgICAgICAge3skY2hpbGRyZW59fVxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLWJyZWFkLWNydW1iXCI+XG4gICAgICAgICAgICB7eyRjaGlsZHJlbn19XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiZWxsLWJyZWFkLWNydW1iLWl0ZW1cIj5cbiAgICAgICAgICAgIHt7JGNoaWxkcmVufX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmVsbC1icmVhZC1jcnVtYi1nYXBcIj5cbiAgICAgICAgICAgICAgICAvXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICBgXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZWxsLWJ1dHRvblxuICAgICAgICAgICAge3sjaWYgdHlwZX19IGJlbGwte3t0eXBlfX17ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBzaGFwZX19IGJlbGwte3tzaGFwZX19e3svaWZ9fVxuICAgICAgICAgICAge3sjaWYgc2l6ZX19IGJlbGwte3tzaXplfX17ey9pZn19XG4gICAgICAgICAgICB7eyNpZiBsb25nfX0gYmVsbC1sb25ne3svaWZ9fVxuICAgICAgICAgICAge3sjaWYgZGlzYWJsZWR9fSBiZWxsLWRpc2FibGVke3svaWZ9fVxuICAgICAgICBcIiBvbi1jbGljaz1cImNsaWNrXCI+XG5cbiAgICAgICAgICAgIHt7I2lmIGljb259fVxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmVsbC1pY29uIHt7aWNvbn19XCI+PC9pPlxuICAgICAgICAgICAge3svaWZ9fVxuXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7e2xhYmVsfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBsb25nOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICB9XG4gICAgfVxufSIsIi8qXG4gKiBAZmlsZSDkuLvmqKHlnZdcbiAqIEBhdXRob3Igd2FuZ3RpYW5odWFcbiAqL1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlcidcbmltcG9ydCBTaWRlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L1NpZGVyJ1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9Db250ZW50J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3RlcidcbmltcG9ydCBNZW51IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvTWVudSdcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L01lbnVJdGVtJ1xuaW1wb3J0IFN1Ym1lbnUgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9TdWJtZW51J1xuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9CcmVhZGNydW1iJ1xuaW1wb3J0IEJyZWFkY3J1bWJJdGVtIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvQnJlYWRjcnVtYkl0ZW0nXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9CdXR0b24nXG5cbllveC5jb21wb25lbnQoe1xuICAgIExheW91dDogTGF5b3V0LFxuICAgIEhlYWRlcjogSGVhZGVyLFxuICAgIFNpZGVyOiBTaWRlcixcbiAgICBDb250ZW50OiBDb250ZW50LFxuICAgIEZvb3RlcjogRm9vdGVyLFxuICAgIE1lbnU6IE1lbnUsXG4gICAgTWVudUl0ZW06IE1lbnVJdGVtLFxuICAgIFN1Ym1lbnU6IFN1Ym1lbnUsXG4gICAgQnJlYWRjcnVtYjogQnJlYWRjcnVtYixcbiAgICBCcmVhZGNydW1iSXRlbTogQnJlYWRjcnVtYkl0ZW0sXG5cbiAgICBCdXR0b246IEJ1dHRvbixcbn0pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGFBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7OztBQ0xMLFlBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7OztBQ0xMLGNBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7OztBQ0xMLGFBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7OztDQUNKLERDREQsYUFBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7O0lBSVgsQ0FBQzs7SUFFRCxJQUFJLEVBQUUsWUFBWTtRQUNkLE9BQU87WUFDSCxRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFDO0tBQ0w7O0lBRUQsVUFBVSxFQUFFLFVBQVUsUUFBUSxFQUFFO1FBQzVCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNwQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSTtnQkFDdEMsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sRUFBRTtvQkFDdEIsRUFBRSxDQUFDLEdBQUcsQ0FBQzt3QkFDSCxRQUFRLEVBQUUsSUFBSTtxQkFDakIsQ0FBQyxDQUFDO2lCQUNOO2FBQ0osQ0FBQyxDQUFDO1NBQ047S0FDSjs7O0FDN0JMLFdBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7OztBQ0xMLGVBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7OztBQ0xMLGNBQWU7SUFDWCxRQUFRLEVBQUUsQ0FBQzs7OztJQUlYLENBQUM7OztBQ0xMLGlCQUFlO0lBQ1gsUUFBUSxFQUFFLENBQUM7Ozs7SUFJWCxDQUFDOzs7QUNMTCxxQkFBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7Ozs7O0lBT1gsQ0FBQzs7O0FDUkwsYUFBZTtJQUNYLFFBQVEsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztJQWlCWCxDQUFDO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLFFBQVE7U0FDakI7UUFDRCxLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsUUFBUTtTQUNqQjtRQUNELEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLFFBQVE7U0FDakI7UUFDRCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsUUFBUTtTQUNqQjtRQUNELElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxTQUFTO1NBQ2xCO1FBQ0QsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFLFNBQVM7U0FDbEI7S0FDSjs7O0FDekNMOzs7OztBQUtBLEFBYUEsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUNWLE1BQU0sRUFBRSxNQUFNO0lBQ2QsTUFBTSxFQUFFLE1BQU07SUFDZCxLQUFLLEVBQUUsS0FBSztJQUNaLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLE1BQU0sRUFBRSxNQUFNO0lBQ2QsSUFBSSxFQUFFLElBQUk7SUFDVixRQUFRLEVBQUUsUUFBUTtJQUNsQixPQUFPLEVBQUUsT0FBTztJQUNoQixVQUFVLEVBQUUsVUFBVTtJQUN0QixjQUFjLEVBQUUsY0FBYzs7SUFFOUIsTUFBTSxFQUFFLE1BQU07Q0FDakIsQ0FBQyxDQUFDOzs7OyJ9
