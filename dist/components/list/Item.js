import template from './template/Item.html';
import { FALSE, RAW_BOOLEAN, RAW_STRING } from '../constant';
export default {
    propTypes: {
        disableHover: {
            type: RAW_BOOLEAN
        },
        active: {
            type: RAW_BOOLEAN
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: template,
    data: function () {
        return {
            nestedIsShow: FALSE
        };
    },
    methods: {
        itemClick: function (hasNested) {
            this.fire('click.item');
            this.toggle('nestedIsShow');
        }
    }
};
//# sourceMappingURL=Item.js.map