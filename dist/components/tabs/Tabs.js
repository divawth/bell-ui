import Yox from 'yox';
import template from './template/Tabs.hbs';
import { TRUE, FALSE, RAW_TINY, RAW_SMALL, RAW_LARGE, RAW_STRING, RAW_NUMERIC, RAW_BOOLEAN, } from '../constant';
import { oneOf, } from '../util';
export default Yox.create({
    name: '${prefix}tabs',
    propTypes: {
        type: {
            type: oneOf(['line', 'card']),
            value: 'line'
        },
        size: {
            type: oneOf([RAW_TINY, RAW_SMALL, RAW_LARGE, 'default'])
        },
        closable: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        animated: {
            type: RAW_BOOLEAN,
            value: TRUE
        },
        value: {
            type: RAW_NUMERIC,
            value: 0
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
            tabsList: []
        };
    },
    computed: {
        translateStyle: function () {
            var me = this;
            var index = 0;
            var tabs = me.get('tabsList');
            Yox.array.each(tabs, function (item, key) {
                if (item.id == me.get('value')) {
                    index = key;
                    return FALSE;
                }
            });
            return index * (-100) + '%';
        }
    },
    events: {
        tabPanelRemove: function (event, data) {
            if (event.phase === Yox.Event.PHASE_UPWARD) {
                var tabsList = this.copy(this.get('tabsList'));
                tabsList = tabsList.filter(function (item) {
                    return item.id !== data.id;
                });
                this.set({ tabsList: tabsList });
            }
        },
        tabsValueUpdate: function (event, data) {
            if (event.phase === Yox.Event.PHASE_UPWARD) {
                var me = this;
                var tabsList = me.copy(me.get('tabsList'));
                tabsList.forEach(function (item) {
                    if (item.id === data.id) {
                        item = data;
                    }
                });
                me.set({ tabsList: tabsList });
            }
        },
        tabPanelAdd: function (event, data) {
            if (event.phase === Yox.Event.PHASE_UPWARD) {
                this.append('tabsList', data);
            }
        }
    },
    watchers: {
        value: function (value) {
            this.fire('tabSelected', { value: value }, TRUE);
        }
    },
    methods: {
        close: function (data) {
            this.fire('tabRemove', data);
        },
        click: function (data) {
            if (data.disabled)
                return;
            this.set({
                value: data.id
            });
        }
    }
});
//# sourceMappingURL=Tabs.js.map