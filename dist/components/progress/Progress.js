import Yox from 'yox';
import template from './template/Progress.hbs';
import { FALSE, RAW_STRING, RAW_NUMERIC, RAW_BOOLEAN, } from '../constant';
export default Yox.define({
    propTypes: {
        percent: {
            type: RAW_NUMERIC,
            value: 0
        },
        type: {
            type: RAW_STRING
        },
        strokeWidth: {
            type: RAW_STRING,
            value: 10
        },
        hideInfo: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        vertical: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        active: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: template
});
//# sourceMappingURL=Progress.js.map