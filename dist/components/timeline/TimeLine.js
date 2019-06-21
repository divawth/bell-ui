import Yox from 'yox';
import template from './template/TimeLine.hbs';
import { RAW_BOOLEAN } from '../constant';
export default Yox.create({
    propTypes: {
        pending: {
            type: RAW_BOOLEAN
        }
    },
    template: template
});
//# sourceMappingURL=TimeLine.js.map