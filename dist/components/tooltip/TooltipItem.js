import template from './template/TooltipItem.html';
import { RAW_STRING } from '../constant';
export default {
    propTypes: {
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        },
    },
    template: template,
    afterMount: function () {
        this.fire('hasItem.tootipItem');
    }
};
//# sourceMappingURL=TooltipItem.js.map