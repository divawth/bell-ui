import template from './template/Menu.html';
import { TRUE, FALSE, RAW_ARRAY, RAW_STRING, RAW_BOOLEAN, RAW_HORIZONTAL, RAW_VERTICAL } from '../constant';
import { oneOf } from '../util';
export default {
    name: '${prefix}menu',
    propTypes: {
        mode: {
            type: oneOf([RAW_HORIZONTAL, RAW_VERTICAL]),
            value: RAW_HORIZONTAL
        },
        theme: {
            type: oneOf(['dark', 'light']),
            value: 'dark'
        },
        isCollapsed: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        activeName: {
            type: RAW_STRING
        },
        openNames: {
            type: RAW_ARRAY,
            value: []
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
        theme: function (theme) {
            this.fire('themeChanged', { theme: theme }, TRUE);
        },
        isCollapsed: function (isCollapsed) {
            this.fire('isCollapsedChanged', { isCollapsed: isCollapsed }, TRUE);
        }
    },
    events: {
        menuItemSelected: function (event, data) {
            if (event.phase === Yox.Event.PHASE_UPWARD) {
                this.fire('menuItemSelected', data, TRUE);
            }
        }
    }
};
//# sourceMappingURL=Menu.js.map