import template from './template/Spinner.html';
import { RAW_STRING, RAW_BOOLEAN } from '../constant';
export default {
    propTypes: {
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        },
        size: {
            type: RAW_STRING
        },
        text: {
            type: RAW_STRING
        },
        fix: {
            type: RAW_BOOLEAN
        },
        type: {
            type: RAW_STRING
        }
    },
    template: template
};
//# sourceMappingURL=Spinner.js.map