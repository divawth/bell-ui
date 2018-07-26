'use strict';

function type(value) {
  return Object.prototype.toString.call(value).toLowerCase().slice(8, -1);
}

function checkInteger(rule, value) {
  if (type(value) !== 'number' || value % 1 !== 0) {
    return 'type'
  }

  if (rule.hasOwnProperty('min') && value < rule.min) {
    return 'min'
  }

  if (rule.hasOwnProperty('max') && value > rule.max) {
    return 'max'
  }
}

function checkNumber(rule, value) {
  if (type(value) !== 'number' || isNaN(value)) {
    return 'type'
  }

  if (rule.hasOwnProperty('min') && value < rule.min) {
    return 'min'
  }

  if (rule.hasOwnProperty('max') && value > rule.max) {
    return 'max'
  }
}

function checkString(rule, value) {
  if (value == '') {
    if (rule.empty === true) {
      return
    }
    else {
      return 'empty'
    }
  }
  if (type(value) !== 'string') {
    return 'type'
  }

  if (rule.hasOwnProperty('min') && value.length < rule.min) {
    return 'min'
  }
  if (rule.hasOwnProperty('max') && value.length > rule.max) {
    return 'max'
  }

  if (rule.hasOwnProperty('pattern')
    && !rule.pattern.test(value)
  ) {
    return 'pattern'
  }
}

function checkBoolean(rule, value) {
  if (type(value) !== 'boolean') {
    return 'type'
  }
}

function checkEnum(rule, value) {
  if (rule.values.indexOf(value) < 0) {
    return 'type'
  }
}

function checkArray(rule, value) {
  if (!value || type(value) !== 'array') {
    return 'type'
  }

  const { length } = value

  if (rule.hasOwnProperty('min') && length < rule.min) {
    return 'min'
  }

  if (rule.hasOwnProperty('max') && length < rule.max) {
    return 'max'
  }
  const { itemType } = rule

  if (!itemType) {
    return
  }
  for(let i = 0; i < length; i++) {
    if (type(value[ i ]) !== itemType) {
      return 'itemType';
    }
  }
}

function checkObject(rule, value) {
  if (!value || type(value) !== 'object') {
    return 'type'
  }
}

class Validator {

  constructor(translate) {

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
    }

    this.messages = {}
    this.translate = translate

  }

  validate(data, rules, messages) {

    var errors = { };

    for (var key in rules) {

      var value = data[key];
      var rule = rules[key];

      switch (type(rule)) {

        case 'string':

          rule = {
            type: rule
          }

          break;

        case 'array':
          rule = {
            type: 'enum',
            value: rule
          }

          break;

        case 'regexp':

          rule = {
            type: 'string',
            pattern: rule
          }

          break;

      }

      if (type(rule) != 'object'
        || !rule.type
      ) {
        throw new TypeError(`${key}'s rule is not found.`)
      }

      var errorType;
      if (data.hasOwnProperty(key)) {
        errorType = this.rules[ rule.type ](rule, value, data)
      }
      else {
        if (rule.required !== false) {
          errorType = 'required'
        }
        else {
          continue
        }
      }

      if (errorType) {
        var message = messages && messages[ key ] && messages[ key ][ errorType ]
        if (type(message) !== 'string') {
          message = this.messages[ rule.type ] && this.messages[ rule.type ][ errorType ]
        }

        if (type(message) === 'string') {
          errors[ key ] = message
        }
        else if (this.translate) {
          errors[ key ] = this.translate(key, value, errorType, rule)
        }
        else {
          errors[ key ] = errorType
        }
      }

    }

    if (Object.keys(errors).length > 0) {
      return errors;
    }

  }
}

module.exports = {
  Validator,
  checkInteger,
  checkNumber,
  checkString,
  checkBoolean,
  checkEnum,
  checkObject,
  checkArray
}