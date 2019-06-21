import Yox from 'yox';
import template from './template/Submenu.hbs';
import { findComponentUpward, } from '../util';
import { NULL, FALSE, TRUE, RAW_STRING } from '../constant';
export default Yox.create({
    propTypes: {
        name: {
            type: RAW_STRING
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: template,
    data: function () {
        return {
            isOpen: FALSE,
            isActive: FALSE,
            activeName: NULL,
            mode: NULL,
            theme: NULL,
            isCollapsed: FALSE
        };
    },
    methods: {
        click: function () {
            this.get('isOpen') ? this.close() : this.open();
        },
        close: function () {
            var me = this;
            var element = me.$refs.menu.$el;
            element.style.height = element.clientHeight + 'px';
            me.closeTimer = setTimeout(function () {
                element.style.height = 0;
                element.style.overflow = 'hidden';
                me.initTimer = setTimeout(function () {
                    element.style.height = '';
                    element.style.overflow = '';
                    me.set('isOpen', FALSE);
                }, 100);
            });
        },
        open: function () {
            var me = this;
            me.set('isOpen', TRUE);
            me.nextTick(function () {
                var element = me.$refs.menu.$el;
                var height = element.clientHeight;
                element.style.height = 0;
                me.openTimer = setTimeout(function () {
                    element.style.height = height + 'px';
                    me.initTimer = setTimeout(function () {
                        element.style.height = '';
                    }, 100);
                });
            });
        }
    },
    events: {
        themeChanged: function (_, data) {
            this.set('theme', data.theme);
        },
        isCollapsedChanged: function (_, data) {
            this.set('isCollapsed', data.isCollapsed);
        },
        menuItemSelected: function (event, data) {
            if (event.phase === Yox.Event.PHASE_DOWNWARD) {
                this.set('isActive', data.name === this.get('activeName'));
            }
            else if (event.phase === Yox.Event.PHASE_UPWARD) {
                this.set('activeName', data.name);
                if (this.get('mode') !== 'inline' || this.get('isCollapsed')) {
                    this.toggle('isOpen');
                }
            }
        }
    },
    afterMount: function () {
        var element = findComponentUpward(this, '${prefix}menu');
        this.set({
            'mode': element.get('mode'),
            'theme': element.get('theme'),
            'isActive': element.get('activeName') === this.get('name'),
            'isOpen': element.get('openNames').indexOf(this.get('name')) >= 0
        });
    }
});
//# sourceMappingURL=Submenu.js.map