import Yox from 'yox';
import template from './template/Dropdown.hbs';
import { TRUE, FALSE, RAW_STRING, RAW_HOVER, RAW_CLICK, RAW_CUSTOM, RAW_PLACEMENT_ARRAY, RAW_BOTTOM, RAW_NUMERIC } from '../constant';
import { oneOf, } from '../util';
export default Yox.create({
    propTypes: {
        placement: {
            type: oneOf(RAW_PLACEMENT_ARRAY),
            value: RAW_BOTTOM
        },
        trigger: {
            type: oneOf([RAW_HOVER, RAW_CLICK, RAW_CUSTOM]),
            value: RAW_HOVER
        },
        visible: {
            type: function (props, key) {
                if (props['trigger'] !== RAW_CUSTOM) {
                    Yox.logger.warn(key + " \u671F\u671B\u5728 trigger \u53D6\u503C\u4E3A custom \u65F6\u4F20\u503C");
                }
                return true;
            }
        },
        height: {
            type: RAW_NUMERIC,
            value: 200
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: template,
    watchers: {
        visible: function (isOpen) {
            this.set({ isOpen: isOpen });
        }
    },
    data: function () {
        return {
            isOpen: FALSE,
            FALSE: FALSE,
            TRUE: TRUE,
            RAW_HOVER: RAW_HOVER,
            RAW_CLICK: RAW_CLICK,
            RAW_CUSTOM: RAW_CUSTOM
        };
    },
    events: {
        'click.dropdownItem': function () {
            this.set({
                isOpen: FALSE
            });
        }
    }
});
//# sourceMappingURL=Dropdown.js.map