import Yox from 'yox';
import template from './template/CheckboxGroup.html';
import { RAW_ARRAY, RAW_STRING, RAW_BOOLEAN, RAW_DEFAULT, RAW_TYPE_ARRAY, RAW_SIZE_ARRAY, } from '../constant';
import { oneOf, } from '../util';
export default {
    model: 'selected',
    name: '${prefix}checkboxGroup',
    propTypes: {
        name: {
            type: RAW_STRING
        },
        selected: {
            type: RAW_ARRAY,
            value: function () {
                return [];
            }
        },
        type: {
            type: oneOf(RAW_TYPE_ARRAY)
        },
        size: {
            type: oneOf(RAW_SIZE_ARRAY),
            value: RAW_DEFAULT
        },
        disabled: {
            type: RAW_BOOLEAN
        },
        vertical: {
            type: RAW_BOOLEAN
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: template,
    events: {
        'groupChange.checkboxgroup': function (event) {
            if (event.phase === Yox.Event.PHASE_DOWNWARD) {
                event.stop();
            }
        },
        'change.checkbox': function (event, data) {
            if (event.phase === Yox.Event.PHASE_UPWARD) {
                var me = this;
                var selected = me.copy(me.get('selected'));
                if (data.checked) {
                    if (!Yox.array.has(selected, data.value)) {
                        selected.push(data.value);
                    }
                }
                else {
                    Yox.array.remove(selected, data.value);
                }
                me.set({ selected: selected });
                event.stop();
            }
        }
    },
    watchers: {
        selected: function (selected) {
            this.fire('groupChange.checkboxgroup', { selected: selected }, true);
        }
    }
};
//# sourceMappingURL=CheckboxGroup.js.map