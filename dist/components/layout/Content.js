import Yox from 'yox';
import template from './template/Content.hbs';
import { FALSE, TRUE, RAW_STRING } from '../constant';
export default Yox.define({
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
        hasSider: function () {
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
});
//# sourceMappingURL=Content.js.map