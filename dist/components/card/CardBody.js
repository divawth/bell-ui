import Yox from 'yox';
import template from './template/CardBody.hbs';
import { RAW_STRING } from '../constant';
export default Yox.create({
    propTypes: {
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: template
});
//# sourceMappingURL=CardBody.js.map