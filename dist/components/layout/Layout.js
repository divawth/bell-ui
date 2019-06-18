import template from './template/Layout.html';
import { FALSE, TRUE, RAW_STRING, RAW_BOOLEAN } from '../constant';
export default {
    propTypes: {
        fixed: {
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
            hasSider: FALSE
        };
    },
    events: {
        hasSider: function (event) {
            if (event.phase === Yox.Event.PHASE_CURRENT) {
                return;
            }
            if (event.phase === Yox.Event.PHASE_UPWARD) {
                this.set({
                    hasSider: TRUE
                });
                this.fire('hasSider', TRUE);
            }
            // 阻止嵌套模式下 上层 layout 发下来的 hasSider 事件
            event.stop();
        }
    }
};
//# sourceMappingURL=Layout.js.map