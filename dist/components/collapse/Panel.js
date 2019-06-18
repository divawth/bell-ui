import template from './template/Panel.html';
import { findComponentUpward } from '../util';
import { NULL, TRUE, FALSE, RAW_STRING, RAW_BOOLEAN, RAW_NUMERIC } from '../constant';
export default {
    propTypes: {
        title: {
            type: RAW_STRING
        },
        name: {
            type: RAW_NUMERIC
        },
        isActive: {
            type: RAW_BOOLEAN
        },
        showIcon: {
            type: RAW_BOOLEAN,
            value: TRUE
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
            accordion: FALSE,
        };
    },
    events: {
        accordionChanged: function (_, data) {
            this.set('accordion', data.accordion);
        },
        panelOpen: function (event, data) {
            if (event.phase === Yox.Event.PHASE_DOWNWARD) {
                var me = this;
                if (data.name === me.get('name')) {
                    data.isOpen ? me.open() : me.close();
                }
                else if (me.get('accordion')) {
                    me.close();
                }
            }
        }
    },
    methods: {
        click: function () {
            this.fire('panelOpen', {
                name: this.get('name'),
                isOpen: !this.get('isOpen')
            });
        },
        close: function () {
            var me = this;
            var element = me.$refs.panelContent;
            element.style.height = element.clientHeight + 'px';
            me.closeTimer = setTimeout(function () {
                element.style.height = 0;
                me.initTimer = setTimeout(function () {
                    element.style.height = '';
                    me.set('isOpen', FALSE);
                }, 100);
            });
        },
        open: function () {
            var me = this;
            me.set('isOpen', TRUE);
            me.nextTick(function () {
                var element = me.$refs.panelContent;
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
    afterMount: function () {
        var collapse = findComponentUpward(this, '${prefix}collapse');
        this.set('accordion', collapse.get('accordion'));
        this.watch('isActive', {
            watcher: function (isActive) {
                if (isActive == NULL) {
                    return;
                }
                this.fire('panelOpen', {
                    name: this.get('name'),
                    isOpen: isActive
                });
            },
            immediate: TRUE
        });
    },
    beforeDestroy: function () {
        var me = this;
        clearTimeout(me.closeTimer);
        clearTimeout(me.initTimer);
        clearTimeout(me.openTimer);
    }
};
//# sourceMappingURL=Panel.js.map