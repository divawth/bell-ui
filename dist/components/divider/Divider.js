import template from './template/Divider.html';
import { oneOf } from '../util';
import { FALSE, RAW_STRING, RAW_BOOLEAN, RAW_LEFT, RAW_RIGHT, RAW_CENTER, RAW_VERTICAL, RAW_HORIZONTAL, } from '../constant';
export default {
    propTypes: {
        type: {
            type: oneOf([RAW_HORIZONTAL, RAW_VERTICAL]),
            value: RAW_HORIZONTAL
        },
        dashed: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        align: {
            type: oneOf([RAW_CENTER, RAW_LEFT, RAW_RIGHT]),
            value: RAW_CENTER
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
//# sourceMappingURL=Divider.js.map