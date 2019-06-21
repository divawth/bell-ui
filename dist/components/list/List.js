import Yox from 'yox';
import template from './template/List.hbs';
import { FALSE, RAW_STRING, RAW_BOOLEAN, } from '../constant';
export default Yox.create({
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
});
//# sourceMappingURL=List.js.map