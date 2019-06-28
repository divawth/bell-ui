import Yox from 'yox';
import template from './template/TabPanel.hbs';
import { findComponentUpward, } from '../util';
import { FALSE, RAW_STRING, RAW_BOOLEAN, } from '../constant';
export default Yox.define({
    propTypes: {
        name: {
            type: RAW_STRING
        },
        icon: {
            type: RAW_STRING
        },
        label: {
            type: RAW_STRING
        },
        disabled: {
            type: RAW_BOOLEAN,
            value: FALSE
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
            id: 0,
            isActive: FALSE
        };
    },
    watchers: {
        '*': function (newValue, oldValue, keypath) {
            var pathArray = ['name', 'icon', 'label', 'disabled'];
            if (pathArray.indexOf(keypath) >= 0) {
                this.upsert('tabPanelUpdate');
            }
        }
    },
    events: {
        tabSelected: function (_, data) {
            this.set({
                isActive: this.get('id') == data.value
            });
        }
    },
    methods: {
        upsert: function (name) {
            var me = this;
            me.fire(name, {
                label: me.get('label'),
                icon: me.get('icon'),
                disabled: me.get('disabled'),
                id: me.get('id')
            });
        }
    },
    afterMount: function () {
        var me = this;
        var name = me.get('name');
        if (name == null) {
            var element = findComponentUpward(me.$parent, '${prefix}tabs');
            name = Yox.array.indexOf(element.$children, me);
        }
        me.set('id', name);
        me.upsert('tabPanelAdd');
    },
    beforeDestroy: function () {
        this.upsert('tabPanelRemove');
    }
});
//# sourceMappingURL=TabPanel.js.map