import Yox from 'yox';
import template from './template/BreadcrumbItem.hbs';
import { RAW_STRING } from '../constant';
export default Yox.define({
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
});
//# sourceMappingURL=BreadcrumbItem.js.map