import Yox from 'yox';
import template from './template/Icon.hbs';
import { FALSE, RAW_STRING, RAW_BOOLEAN, RAW_NUMERIC, RAW_ICON_TYPE_ARRAY, RAW_ICON_IOS, } from '../constant';
import { oneOf, } from '../util';
export default Yox.define({
    propTypes: {
        type: {
            type: oneOf(RAW_ICON_TYPE_ARRAY),
            value: RAW_ICON_IOS
        },
        name: {
            type: RAW_STRING
        },
        size: {
            type: RAW_NUMERIC
        },
        color: {
            type: RAW_STRING
        },
        spin: {
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
//# sourceMappingURL=Icon.js.map