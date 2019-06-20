import template from './template/BreadcrumbItem.html';
import { RAW_STRING } from '../constant';
export default {
    propTypes: {
        to: {
            type: RAW_STRING
        },
        separator: {
            type: RAW_STRING,
            value: '/'
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: template,
};
//# sourceMappingURL=BreadcrumbItem.js.map