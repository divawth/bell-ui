import template from './template/List.html';
import { RAW_STRING, RAW_BOOLEAN, FALSE } from '../constant';
export default {
    propTypes: {
        border: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        loading: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        size: {
            type: RAW_STRING
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: template
};
//# sourceMappingURL=List.js.map