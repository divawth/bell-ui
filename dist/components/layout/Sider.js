import template from './template/Sider.html';
import { RAW_STRING, RAW_BOOLEAN } from '../constant';
export default {
    propTypes: {
        isCollapsed: {
            type: RAW_BOOLEAN
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    model: 'isCollapsed',
    template: template,
    afterMount: function () {
        this.fire('hasSider');
    }
};
//# sourceMappingURL=Sider.js.map