(function (global, factory) {
    (global.protoType = factory());
}(this, (function () { 'use strict';

const isNil = val => val === undefined || val === null;
const isFunction = val => typeof val === 'function';
const isBoolean = val => typeof val === 'boolean';
const isNumber = val => typeof val === 'number';
const isObject = obj => obj === Object(obj);
const isString = val => typeof val === 'string';
const isSymbol = val => typeof val === 'symbol';
const isLikeArray = val => {
  try {
    return [...val], true;
  } catch (e) {
    return false;
  }
};

Yox.validate = function (props, propTypes) {
  let result = {};
  Yox.object.each(propTypes, function (rules, key) {
    let { type, value, required } = rules;
    let target = props[key];
    if (!isNil(target) && type) {
      switch (type) {
        case PropTypes.array:
          if (isLikeArray(target)) {
            result[key] = target;
          }
          break;
        case PropTypes.boolean:
          if (isBoolean(target)) {
            result[key] = target;
          }
          break;
        case PropTypes.function:
          if (isFunction(target)) {
            result[key] = target;
          }
          break;
        case PropTypes.number:
          if (isNumber(target)) {
            result[key] = target;
          }
          break;
        case PropTypes.object:
          if (isObject(target)) {
            result[key] = target;
          }
          break;
        case PropTypes.string:
          if (isString(target)) {
            result[key] = target;
          }
          break;
        case PropTypes.symbol:
          if (isSymbol(target)) {
            result[key] = target;
          }
          break;
        case PropTypes.oneOf:
          if (Yox.array.has(value, target)) {
            result[key] = target;
          }
          break;
      }
    } else if (required) {
      logger.warn(`"${key}" prop is not found.`);
    } else if (value) {
      if (isFunction(type)) {
        result[key] = value;
      } else {
        result[key] = isFunction(value) ? value(props) : value;
      }
    }
  });
  return result;
};

let PropTypes = {
  array: 'array',
  boolean: 'boolean',
  function: 'function',
  number: 'number',
  object: 'object',
  string: 'string',
  symbol: 'symbol',

  oneOf: 'oneOf'
};

window.PropTypes = PropTypes;

return PropTypes;

})));
