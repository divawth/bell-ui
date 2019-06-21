import Yox from 'yox';
import template from './template/MenuItem.hbs';
import { findComponentUpward, } from '../util';
import { NULL, FALSE, RAW_STRING, RAW_BOOLEAN } from '../constant';
export default Yox.create({
    propTypes: {
        name: {
            type: RAW_STRING
        },
        hash: {
            type: RAW_STRING
        },
        disabled: {
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
            mode: NULL,
            isActive: FALSE,
            isCollapsed: FALSE
        };
    },
    events: {
        menuItemSelected: function (event, data) {
            if (event.phase === Yox.Event.PHASE_DOWNWARD) {
                this.set('isActive', data.name === this.get('name'));
            }
        },
        isCollapsedChanged: function (_, data) {
            this.set('isCollapsed', data.isCollapsed);
        },
        'click.menuItem': function () {
            var name = this.get('name');
            this.fire('menuItemSelected', { name: name });
        }
    },
    afterMount: function () {
        var element = findComponentUpward(this, '${prefix}menu');
        this.set({
            'mode': element.get('mode'),
            'isActive': element.get('activeName') === this.get('name')
        });
    }
});
//# sourceMappingURL=MenuItem.js.map