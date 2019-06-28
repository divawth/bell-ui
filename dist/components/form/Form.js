import Yox from 'yox';
import { Validator } from './util/validate.js';
import template from './template/Form.hbs';
import { TRUE, RAW_STRING, RAW_OBJECT, RAW_BOOLEAN, RAW_NUMERIC, } from '../constant.js';
import { oneOf } from '../util.js';
export default Yox.define({
    propTypes: {
        value: {
            type: RAW_OBJECT
        },
        rules: {
            type: RAW_OBJECT
        },
        messages: {
            type: RAW_OBJECT
        },
        inline: {
            type: RAW_BOOLEAN
        },
        labelPosition: {
            type: oneOf(['left', 'right', 'top']),
            value: 'left'
        },
        labelWidth: {
            type: RAW_NUMERIC,
            value: 80
        },
        showMessage: {
            type: RAW_BOOLEAN,
            value: TRUE
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    name: '${prefix}form',
    template: template,
    methods: {
        validate: function (callback) {
            var me = this;
            var validator = new Validator();
            var errors = validator.validate(me.get('value'), me.get('rules'), me.get('messages'));
            var isValid = !errors;
            if (isValid) {
                callback(true);
            }
            else {
                me.fire('validateError.form', { errors: errors }, TRUE);
                callback(false, errors);
            }
        }
    }
});
//# sourceMappingURL=Form.js.map