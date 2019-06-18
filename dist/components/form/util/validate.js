import { RAW_STRING, RAW_ARRAY, RAW_OBJECT } from "../../constant";
import { getType } from "../../util";
function checkInteger(rule, value) {
    if (getType(value) !== 'number' || value % 1 !== 0) {
        return 'type';
    }
    if (rule.hasOwnProperty('min') && value < rule.min) {
        return 'min';
    }
    if (rule.hasOwnProperty('max') && value > rule.max) {
        return 'max';
    }
}
function checkNumber(rule, value) {
    if (getType(value) !== 'number' || isNaN(value)) {
        return 'type';
    }
    if (rule.hasOwnProperty('min') && value < rule.min) {
        return 'min';
    }
    if (rule.hasOwnProperty('max') && value > rule.max) {
        return 'max';
    }
}
function checkString(rule, value) {
    if (value == '') {
        if (rule.empty === true) {
            return;
        }
        else {
            return 'empty';
        }
    }
    if (getType(value) !== RAW_STRING) {
        return 'type';
    }
    if (rule.hasOwnProperty('min') && value.length < rule.min) {
        return 'min';
    }
    if (rule.hasOwnProperty('max') && value.length > rule.max) {
        return 'max';
    }
    if (rule.hasOwnProperty('pattern')
        && !rule.pattern.test(value)) {
        return 'pattern';
    }
}
function checkBoolean(rule, value) {
    if (getType(value) !== 'boolean') {
        return 'type';
    }
}
function checkEnum(rule, value) {
    if (rule.values.indexOf(value) < 0) {
        return 'type';
    }
}
function checkArray(rule, value) {
    if (!value || getType(value) !== RAW_ARRAY) {
        return 'type';
    }
    var length = value.length;
    if (rule.hasOwnProperty('min') && length < rule.min) {
        return 'min';
    }
    if (rule.hasOwnProperty('max') && length < rule.max) {
        return 'max';
    }
    var itemType = rule.itemType;
    if (!itemType) {
        return;
    }
    for (var i = 0; i < length; i++) {
        if (getType(value[i]) !== itemType) {
            return 'itemType';
        }
    }
}
function checkObject(rule, value) {
    if (!value || getType(value) !== RAW_OBJECT) {
        return 'type';
    }
}
var Validator = /** @class */ (function () {
    function Validator(translate) {
        this.rules = {
            int: checkInteger,
            integer: checkInteger,
            number: checkNumber,
            string: checkString,
            bool: checkBoolean,
            boolean: checkBoolean,
            enum: checkEnum,
            array: checkArray,
            object: checkObject
        };
        this.messages = {};
        this.translate = translate;
    }
    Validator.prototype.validate = function (data, rules, messages) {
        var errors = {};
        for (var key in rules) {
            var value = data[key];
            var rule = rules[key];
            switch (getType(rule)) {
                case RAW_STRING:
                    rule = {
                        type: rule
                    };
                    break;
                case RAW_ARRAY:
                    rule = {
                        type: 'enum',
                        value: rule
                    };
                    break;
                case 'regexp':
                    rule = {
                        type: RAW_STRING,
                        pattern: rule
                    };
                    break;
            }
            if (getType(rule) != RAW_OBJECT
                || !rule.type) {
                throw new TypeError(key + "'s rule is not found.");
            }
            var errorType;
            if (data.hasOwnProperty(key)) {
                errorType = this.rules[rule.type](rule, value, data);
            }
            else {
                if (rule.required !== false) {
                    errorType = 'required';
                }
                else {
                    continue;
                }
            }
            if (errorType) {
                var message = messages && messages[key] && messages[key][errorType];
                if (getType(message) !== RAW_STRING) {
                    message = this.messages[rule.type] && this.messages[rule.type][errorType];
                }
                if (getType(message) === RAW_STRING) {
                    errors[key] = message;
                }
                else if (this.translate) {
                    errors[key] = this.translate(key, value, errorType, rule);
                }
                else {
                    errors[key] = errorType;
                }
            }
        }
        if (Object.keys(errors).length > 0) {
            return errors;
        }
    };
    return Validator;
}());
export { Validator, checkInteger, checkNumber, checkString, checkBoolean, checkEnum, checkObject, checkArray };
//# sourceMappingURL=validate.js.map