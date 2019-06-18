import template from './template/Content.html';
import { FALSE, TRUE, RAW_STRING } from '../constant';
export default {
    propTypes: {
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: template,
    events: {
        hasSider: function (_) {
            this.set({
                hasSider: TRUE
            });
        }
    },
    data: function () {
        return {
            hasSider: FALSE
        };
    }
};
//# sourceMappingURL=Content.js.map