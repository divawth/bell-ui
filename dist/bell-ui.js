(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("bell", [], factory);
	else if(typeof exports === 'object')
		exports["bell"] = factory();
	else
		root["bell"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/**
 * yox.js v1.0.0-alpha.83
 * (c) 2017-2019 musicode
 * Released under the MIT License.
 */

/**
 * 为了压缩，定义的常量
 */
const TRUE = true;
const FALSE = false;
const NULL = null;
const UNDEFINED = void 0;
const RAW_TRUE = 'true';
const RAW_FALSE = 'false';
const RAW_NULL = 'null';
const RAW_UNDEFINED = 'undefined';
const RAW_KEY = 'key';
const RAW_REF = 'ref';
const RAW_SLOT = 'slot';
const RAW_NAME = 'name';
const RAW_FILTER = 'filter';
const RAW_PARTIAL = 'partial';
const RAW_COMPONENT = 'component';
const RAW_DIRECTIVE = 'directive';
const RAW_TRANSITION = 'transition';
const RAW_THIS = 'this';
const RAW_VALUE = 'value';
const RAW_LENGTH = 'length';
const RAW_FUNCTION = 'function';
const RAW_TEMPLATE = 'template';
const RAW_WILDCARD = '*';
const KEYPATH_PARENT = '..';
const KEYPATH_CURRENT = RAW_THIS;
const RAW_MINUS_ONE = -1;
/**
 * Single instance for window in browser
 */
const WINDOW = typeof window !== RAW_UNDEFINED ? window : UNDEFINED;
/**
 * Single instance for document in browser
 */
const DOCUMENT = typeof document !== RAW_UNDEFINED ? document : UNDEFINED;
/**
 * Single instance for global in nodejs or browser
 */
const GLOBAL = typeof global !== RAW_UNDEFINED ? global : WINDOW;
/**
 * tap 事件
 *
 * 非常有用的抽象事件，比如 pc 端是 click 事件，移动端是 touchend 事件
 *
 * 这样只需 on-tap="handler" 就可以完美兼容各端
 *
 * 框架未实现此事件，通过 Yox.dom.specialEvents 提供给外部扩展
 *
 */
const EVENT_TAP = 'tap';
/**
 * 点击事件
 */
const EVENT_CLICK = 'click';
/**
 * 输入事件
 */
const EVENT_INPUT = 'input';
/**
 * 变化事件
 */
const EVENT_CHANGE = 'change';
/**
 * 唯一内置的特殊事件：model
 */
const EVENT_MODEL = 'model';
/**
 * Single instance for noop function
 */
const EMPTY_FUNCTION = function () {
    /** yox */
};
/**
 * 空对象，很多地方会用到，比如 `a || EMPTY_OBJECT` 确保是个对象
 */
const EMPTY_OBJECT = Object.freeze({});
/**
 * 空数组
 */
const EMPTY_ARRAY = Object.freeze([]);
/**
 * 空字符串
 */
const EMPTY_STRING = '';

function isDef (target) {
    return target !== UNDEFINED;
}

function isUndef (target) {
    return target === UNDEFINED;
}

/**
 * Check if value is a function.
 *
 * @param value
 * @return
 */
function func(value) {
    return typeof value === RAW_FUNCTION;
}
/**
 * Check if value is an array.
 *
 * @param value
 * @return
 */
function array(value) {
    return Array.isArray(value);
}
/**
 * Check if value is an object.
 *
 * @param value
 * @return
 */
function object(value) {
    // 低版本 IE 会把 null 和 undefined 当作 object
    return value !== NULL && typeof value === 'object';
}
/**
 * Check if value is a string.
 *
 * @param value
 * @return
 */
function string(value) {
    return typeof value === 'string';
}
/**
 * Check if value is a number.
 *
 * @param value
 * @return
 */
function number(value) {
    return typeof value === 'number';
}
/**
 * Check if value is boolean.
 *
 * @param value
 * @return
 */
function boolean(value) {
    return typeof value === 'boolean';
}
/**
 * Check if value is numeric.
 *
 * @param value
 * @return
 */
function numeric(value) {
    return number(value)
        || (string(value) && !isNaN(parseFloat(value)) && isFinite(value));
}

var is = /*#__PURE__*/Object.freeze({
  func: func,
  array: array,
  object: object,
  string: string,
  number: number,
  boolean: boolean,
  numeric: numeric
});

/**
 * 任性地执行一个函数，不管它有没有、是不是
 *
 * @param fn 调用的函数
 * @param context 执行函数时的 this 指向
 * @param args 调用函数的参数，多参数时传入数组
 * @return 调用函数的返回值
 */
function execute (fn, context, args) {
    if (func(fn)) {
        return array(args)
            ? fn.apply(context, args)
            : isDef(context)
                ? fn.call(context, args)
                : isDef(args)
                    ? fn(args)
                    : fn();
    }
}

class CustomEvent {
    /**
     * 构造函数
     *
     * 可以传事件名称，也可以传原生事件对象
     */
    constructor(type, originalEvent) {
        this.type = type;
        this.phase = CustomEvent.PHASE_CURRENT;
        if (originalEvent) {
            this.originalEvent = originalEvent;
        }
    }
    /**
     * 阻止事件的默认行为
     */
    preventDefault() {
        const instance = this;
        if (!instance.isPrevented) {
            const { originalEvent } = instance;
            if (originalEvent) {
                originalEvent.preventDefault();
            }
            instance.isPrevented = TRUE;
        }
        return instance;
    }
    /**
     * 停止事件广播
     */
    stopPropagation() {
        const instance = this;
        if (!instance.isStoped) {
            const { originalEvent } = instance;
            if (originalEvent) {
                originalEvent.stopPropagation();
            }
            instance.isStoped = TRUE;
        }
        return instance;
    }
    prevent() {
        return this.preventDefault();
    }
    stop() {
        return this.stopPropagation();
    }
}
CustomEvent.PHASE_CURRENT = 0;
CustomEvent.PHASE_UPWARD = 1;
CustomEvent.PHASE_DOWNWARD = RAW_MINUS_ONE;

/**
 * 遍历数组
 *
 * @param array
 * @param callback 返回 false 可停止遍历
 * @param reversed 是否逆序遍历
 */
function each(array, callback, reversed) {
    const { length } = array;
    if (length) {
        if (reversed) {
            for (let i = length - 1; i >= 0; i--) {
                if (callback(array[i], i, length) === FALSE) {
                    break;
                }
            }
        }
        else {
            for (let i = 0; i < length; i++) {
                if (callback(array[i], i, length) === FALSE) {
                    break;
                }
            }
        }
    }
}
function nativePush(array, item) {
    array[array.length] = item;
}
function nativeUnshift(array, item) {
    array.unshift(item);
}
/**
 * 添加
 *
 * @param array
 * @param value
 * @param action
 */
function addItem(array$1, value, action) {
    if (array(value)) {
        each(value, function (item) {
            action(array$1, item);
        });
    }
    else {
        action(array$1, value);
    }
}
/**
 * 往后加
 *
 * @param array
 * @param target
 */
function push(array, target) {
    addItem(array, target, nativePush);
}
/**
 * 往前加
 *
 * @param array
 * @param target
 */
function unshift(array, target) {
    addItem(array, target, nativeUnshift);
}
/**
 * 数组项在数组中的位置
 *
 * @param array 数组
 * @param target 数组项
 * @param strict 是否全等判断，默认是全等
 * @return 如果未找到，返回 -1
 */
function indexOf(array, target, strict) {
    let result = RAW_MINUS_ONE;
    each(array, function (item, index) {
        if (strict === FALSE ? item == target : item === target) {
            result = index;
            return FALSE;
        }
    });
    return result;
}
/**
 * 获取数组最后一项
 *
 * @param array 数组
 * @return
 */
function last(array) {
    const { length } = array;
    if (length > 0) {
        return array[length - 1];
    }
}
/**
 * 弹出数组最后一项
 *
 * 项目里用的太多，仅用于节省字符...
 *
 * @param array 数组
 * @return 弹出的数组项
 */
function pop(array) {
    const { length } = array;
    if (length > 0) {
        return array.pop();
    }
}
/**
 * 删除数组项
 *
 * @param array 数组
 * @param item 待删除项
 * @param strict 是否全等判断，默认是全等
 * @return 删除的数量
 */
function remove(array, target, strict) {
    let result = 0;
    each(array, function (item, index) {
        if (strict === FALSE ? item == target : item === target) {
            array.splice(index, 1);
            result++;
        }
    }, TRUE);
    return result;
}
/**
 * 数组是否包含 item
 *
 * @param array 数组
 * @param target 可能包含的数组项
 * @param strict 是否全等判断，默认是全等
 * @return
 */
function has(array, target, strict) {
    return indexOf(array, target, strict) >= 0;
}
/**
 * 把类数组转成数组
 *
 * @param array 类数组
 * @return
 */
function toArray(array$1) {
    return array(array$1)
        ? array$1
        : execute(EMPTY_ARRAY.slice, array$1);
}
/**
 * 把数组转成对象
 *
 * @param array 数组
 * @param key 数组项包含的字段名称，如果数组项是基本类型，可不传
 * @param value
 * @return
 */
function toObject(array, key, value) {
    let result = {};
    each(array, function (item) {
        result[key ? item[key] : item] = value || item;
    });
    return result;
}
/**
 * 把数组合并成字符串
 *
 * @param array
 * @param separator
 * @return
 */
function join(array, separator) {
    return array.join(separator);
}
/**
 * 用于判断长度大于 0 的数组
 *
 * @param array
 * @return
 */
function falsy(array$1) {
    return !array(array$1) || !array$1.length;
}

var array$1 = /*#__PURE__*/Object.freeze({
  each: each,
  push: push,
  unshift: unshift,
  indexOf: indexOf,
  last: last,
  pop: pop,
  remove: remove,
  has: has,
  toArray: toArray,
  toObject: toObject,
  join: join,
  falsy: falsy
});

const camelizePattern = /-([a-z])/gi, hyphenatePattern = /\B([A-Z])/g, capitalizePattern = /^[a-z]/, camelizeCache = {}, hyphenateCache = {}, capitalizeCache = {};
/**
 * 连字符转成驼峰
 *
 * @param str
 * @return 驼峰格式的字符串
 */
function camelize(str) {
    if (!camelizeCache[str]) {
        camelizeCache[str] = str.replace(camelizePattern, function ($0, $1) {
            return upper($1);
        });
    }
    return camelizeCache[str];
}
/**
 * 驼峰转成连字符
 *
 * @param str
 * @return 连字符格式的字符串
 */
function hyphenate(str) {
    if (!hyphenateCache[str]) {
        hyphenateCache[str] = str.replace(hyphenatePattern, function ($0, $1) {
            return '-' + lower($1);
        });
    }
    return hyphenateCache[str];
}
/**
 * 首字母大写
 *
 * @param str
 * @return
 */
function capitalize(str) {
    if (!capitalizeCache[str]) {
        capitalizeCache[str] = str.replace(capitalizePattern, upper);
    }
    return capitalizeCache[str];
}
/**
 * 清除两侧空白符
 *
 * @param str
 * @return 清除两侧空白符的字符串
 */
function trim(str) {
    return falsy$1(str)
        ? EMPTY_STRING
        : str.trim();
}
/**
 * 截取字符串
 *
 * @param str
 * @param start
 * @param end
 * @return
 */
function slice(str, start, end) {
    return number(end)
        ? start === end
            ? EMPTY_STRING
            : str.slice(start, end)
        : str.slice(start);
}
/**
 * 获取子串的起始位置
 *
 * @param str
 * @param part
 * @param start
 * @return
 */
function indexOf$1(str, part, start) {
    return str.indexOf(part, isDef(start) ? start : 0);
}
/**
 * 获取子串的起始位置
 *
 * @param str
 * @param part
 * @param end
 * @return
 */
function lastIndexOf(str, part, end) {
    return str.lastIndexOf(part, isDef(end) ? end : str.length);
}
/**
 * str 是否以 part 开头
 *
 * @param str
 * @param part
 * @return
 */
function startsWith(str, part) {
    return indexOf$1(str, part) === 0;
}
/**
 * str 是否以 part 结束
 *
 * @param str
 * @param part
 * @return
 */
function endsWith(str, part) {
    const offset = str.length - part.length;
    return offset >= 0 && lastIndexOf(str, part) === offset;
}
/**
 * 获取某个位置的字符
 */
function charAt(str, index) {
    return str.charAt(index || 0);
}
/**
 * 获取某个位置的字符编码
 */
function codeAt(str, index) {
    return str.charCodeAt(index || 0);
}
/**
 * 大写格式
 */
function upper(str) {
    return str.toUpperCase();
}
/**
 * 小写格式
 */
function lower(str) {
    return str.toLowerCase();
}
/**
 * str 是否包含 part
 *
 * @param str
 * @param part
 * @return 是否包含
 */
function has$1(str, part) {
    return indexOf$1(str, part) >= 0;
}
/**
 * 判断长度大于 0 的字符串
 *
 * @param str
 * @return
 */
function falsy$1(str) {
    return !string(str) || !str.length;
}

var string$1 = /*#__PURE__*/Object.freeze({
  camelize: camelize,
  hyphenate: hyphenate,
  capitalize: capitalize,
  trim: trim,
  slice: slice,
  indexOf: indexOf$1,
  lastIndexOf: lastIndexOf,
  startsWith: startsWith,
  endsWith: endsWith,
  charAt: charAt,
  codeAt: codeAt,
  upper: upper,
  lower: lower,
  has: has$1,
  falsy: falsy$1
});

const dotPattern = /\./g, asteriskPattern = /\*/g, doubleAsteriskPattern = /\*\*/g, splitCache = {}, patternCache = {};
const separator = '.';
/**
 * 判断 keypath 是否以 prefix 开头，如果是，返回匹配上的前缀长度，否则返回 -1
 *
 * @param keypath
 * @param prefix
 * @return
 */
function match(keypath, prefix) {
    if (keypath === prefix) {
        return prefix.length;
    }
    prefix += separator;
    return startsWith(keypath, prefix)
        ? prefix.length
        : RAW_MINUS_ONE;
}
/**
 * 遍历 keypath 的每个部分
 *
 * @param keypath
 * @param callback 返回 false 可中断遍历
 */
function each$1(keypath, callback) {
    // 判断字符串是因为 keypath 有可能是 toString
    // 而 splitCache.toString 是个函数
    const list = isDef(splitCache[keypath])
        ? splitCache[keypath]
        : (splitCache[keypath] = keypath.split(separator));
    for (let i = 0, lastIndex = list.length - 1; i <= lastIndex; i++) {
        if (callback(list[i], i === lastIndex) === FALSE) {
            break;
        }
    }
}
/**
 * 遍历 keypath 的每个部分
 *
 * @param keypath1
 * @param keypath2
 */
function join$1(keypath1, keypath2) {
    return keypath1 && keypath2
        ? keypath1 + separator + keypath2
        : keypath1 || keypath2;
}
/**
 * 是否模糊匹配
 *
 * @param keypath
 */
function isFuzzy(keypath) {
    return has$1(keypath, RAW_WILDCARD);
}
/**
 * 模糊匹配 keypath
 *
 * @param keypath
 * @param pattern
 */
function matchFuzzy(keypath, pattern) {
    let cache = patternCache[pattern];
    if (!cache) {
        const str = pattern
            .replace(dotPattern, '\\.')
            .replace(asteriskPattern, '(\\w+)')
            .replace(doubleAsteriskPattern, '([\.\\w]+?)');
        cache = patternCache[pattern] = new RegExp(`^${str}$`);
    }
    const result = keypath.match(cache);
    if (result) {
        return result[1];
    }
}

/**
 * 全局 value holder，避免频繁的创建临时对象
 */
const holder = {
    value: UNDEFINED
};

/**
 * 获取对象的 key 的数组
 *
 * @param object
 * @return
 */
function keys(object) {
    return Object.keys(object);
}
function sortKeyByAsc(a, b) {
    return a.length - b.length;
}
function sortKeyByDesc(a, b) {
    return b.length - a.length;
}
/**
 * 排序对象的 key
 *
 * @param object
 * @param desc 是否逆序，默认从小到大排序
 * @return
 */
function sort(object, desc) {
    return keys(object).sort(desc ? sortKeyByDesc : sortKeyByAsc);
}
/**
 * 遍历对象
 *
 * @param object
 * @param callback 返回 false 可停止遍历
 */
function each$2(object, callback) {
    for (let key in object) {
        if (callback(object[key], key) === FALSE) {
            break;
        }
    }
}
/**
 * 清空对象所有的键值对
 *
 * @param object
 */
function clear(object) {
    each$2(object, function (_, key) {
        delete object[key];
    });
}
/**
 * 扩展对象
 *
 * @return
 */
function extend(original, object) {
    each$2(object, function (value, key) {
        original[key] = value;
    });
    return original;
}
/**
 * 合并对象
 *
 * @return
 */
function merge(object1, object2) {
    return object1 && object2
        ? extend(extend({}, object1), object2)
        : object1 || object2;
}
/**
 * 拷贝对象
 *
 * @param object
 * @param deep 是否需要深拷贝
 * @return
 */
function copy(object$1, deep) {
    let result = object$1;
    if (array(object$1)) {
        if (deep) {
            result = [];
            each(object$1, function (item, index) {
                result[index] = copy(item, deep);
            });
        }
        else {
            result = object$1.slice();
        }
    }
    else if (object(object$1)) {
        result = {};
        each$2(object$1, function (value, key) {
            result[key] = deep ? copy(value, deep) : value;
        });
    }
    return result;
}
/**
 * 从对象中查找一个 keypath
 *
 * 返回值是空时，表示没找到值
 *
 * @param object
 * @param keypath
 * @return
 */
function get(object, keypath) {
    each$1(keypath, function (key, isLast) {
        if (object != NULL) {
            // 先直接取值
            let value = object[key], 
            // 紧接着判断值是否存在
            // 下面会处理计算属性的值，不能在它后面设置 hasValue
            hasValue = isDef(value);
            // 如果是计算属性，取计算属性的值
            if (value && func(value.get)) {
                value = value.get();
            }
            if (isLast) {
                if (hasValue) {
                    holder.value = value;
                    object = holder;
                }
                else {
                    object = UNDEFINED;
                }
            }
            else {
                object = value;
            }
        }
        else {
            object = UNDEFINED;
            return FALSE;
        }
    });
    return object;
}
/**
 * 为对象设置一个键值对
 *
 * @param object
 * @param keypath
 * @param value
 * @param autofill 是否自动填充不存在的对象，默认自动填充
 */
function set(object, keypath, value, autofill) {
    each$1(keypath, function (key, isLast) {
        if (isLast) {
            object[key] = value;
        }
        else if (object[key]) {
            object = object[key];
        }
        else if (autofill) {
            object = object[key] = {};
        }
        else {
            return FALSE;
        }
    });
}
/**
 * 对象是否包含某个 key
 *
 * @param object
 * @param key
 * @return
 */
function has$2(object, key) {
    // 不用 hasOwnProperty，性能差
    return isDef(object[key]);
}
/**
 * 是否是空对象
 *
 * @param object
 * @return
 */
function falsy$2(object$1) {
    return !object(object$1)
        || array(object$1)
        || !keys(object$1).length;
}

var object$1 = /*#__PURE__*/Object.freeze({
  keys: keys,
  sort: sort,
  each: each$2,
  clear: clear,
  extend: extend,
  merge: merge,
  copy: copy,
  get: get,
  set: set,
  has: has$2,
  falsy: falsy$2
});

function toString (target, defaultValue) {
    return target != NULL && target.toString
        ? target.toString()
        : isDef(defaultValue)
            ? defaultValue
            : EMPTY_STRING;
}

const DEBUG = 1;
const INFO = 2;
const WARN = 3;
const ERROR = 4;
const FATAL = 5;
/**
 * 是否有原生的日志特性，没有必要单独实现
 */
const nativeConsole = typeof console !== RAW_UNDEFINED ? console : NULL, 
/**
 * 当前是否是源码调试，如果开启了代码压缩，empty function 里的注释会被干掉
 */
defaultLogLevel = /yox/.test(toString(EMPTY_FUNCTION)) ? DEBUG : WARN, 
/**
 * console 样式前缀
 * ie 和 edge 不支持 console.log 样式
 */
stylePrefix = WINDOW && /edge|msie|trident/i.test(WINDOW.navigator.userAgent)
    ? EMPTY_STRING
    : '%c', 
/**
 * 日志打印函数
 */
printLog = nativeConsole
    ? stylePrefix
        ? function (tag, msg, style) {
            nativeConsole.log(stylePrefix + tag, style, msg);
        }
        : function (tag, msg) {
            nativeConsole.log(tag, msg);
        }
    : EMPTY_FUNCTION;
/**
 * 全局调试开关
 */
function getLogLevel() {
    if (GLOBAL) {
        const logLevel = GLOBAL['YOX_LOG_LEVEL'];
        if (logLevel >= DEBUG && logLevel <= FATAL) {
            return logLevel;
        }
    }
    return defaultLogLevel;
}
function getStyle(backgroundColor) {
    return `background-color:${backgroundColor};border-radius:12px;color:#fff;font-size:10px;padding:3px 6px;`;
}
/**
 * 打印 debug 日志
 *
 * @param msg
 */
function debug(msg, tag) {
    if (getLogLevel() <= DEBUG) {
        printLog(tag || 'Yox debug', msg, getStyle('#999'));
    }
}
/**
 * 打印 info 日志
 *
 * @param msg
 */
function info(msg, tag) {
    if (getLogLevel() <= INFO) {
        printLog(tag || 'Yox info', msg, getStyle('#2db7f5'));
    }
}
/**
 * 打印 warn 日志
 *
 * @param msg
 */
function warn(msg, tag) {
    if (getLogLevel() <= WARN) {
        printLog(tag || 'Yox warn', msg, getStyle('#f90'));
    }
}
/**
 * 打印 error 日志
 *
 * @param msg
 */
function error(msg, tag) {
    if (getLogLevel() <= ERROR) {
        printLog(tag || 'Yox error', msg, getStyle('#ed4014'));
    }
}
/**
 * 致命错误，中断程序
 *
 * @param msg
 */
function fatal(msg, tag) {
    if (getLogLevel() <= FATAL) {
        throw new Error(`[${tag || 'Yox fatal'}]: ${msg}`);
    }
}

var logger = /*#__PURE__*/Object.freeze({
  DEBUG: DEBUG,
  INFO: INFO,
  WARN: WARN,
  ERROR: ERROR,
  FATAL: FATAL,
  debug: debug,
  info: info,
  warn: warn,
  error: error,
  fatal: fatal
});

class Emitter {
    constructor(ns) {
        this.ns = ns || FALSE;
        this.listeners = {};
    }
    /**
     * 发射事件
     *
     * @param bullet 事件或事件名称
     * @param data 事件数据
     */
    fire(type, args, filter) {
        let instance = this, { name, ns } = parseNamespace(instance.ns, type), list = instance.listeners[name], isComplete = TRUE;
        if (list) {
            // 避免遍历过程中，数组发生变化，比如增删了
            list = copy(list);
            // 判断是否是发射事件
            // 如果 args 的第一个参数是 CustomEvent 类型，表示发射事件
            // 因为事件处理函数的参数列表是 (event, data)
            const event = args && args[0] instanceof CustomEvent
                ? args[0]
                : UNDEFINED;
            each(list, function (options, _) {
                // 命名空间不匹配
                if (!matchNamespace(ns, options)
                    // 在 fire 过程中被移除了
                    || !has(list, options)
                    // 传了 filter，则用 filter 判断是否过滤此 options
                    || (filter && !filter(type, args, options))) {
                    return;
                }
                // 为 event 对象加上当前正在处理的 listener
                // 这样方便业务层移除事件绑定
                // 比如 on('xx', function) 这样定义了匿名 listener
                // 在这个 listener 里面获取不到当前 listener 的引用
                // 为了能引用到，有时候会先定义 var listener = function,
                // 然后再 on('xx', listener) 这样其实是没有必要的
                if (event) {
                    event.listener = options.fn;
                }
                let result = execute(options.fn, options.ctx, args);
                if (event) {
                    event.listener = UNDEFINED;
                }
                // 执行次数
                options.num = options.num ? (options.num + 1) : 1;
                // 注册的 listener 可以指定最大执行次数
                if (options.num === options.max) {
                    instance.off(type, options.fn);
                }
                // 如果没有返回 false，而是调用了 event.stop 也算是返回 false
                if (event) {
                    if (result === FALSE) {
                        event.prevent().stop();
                    }
                    else if (event.isStoped) {
                        result = FALSE;
                    }
                }
                if (result === FALSE) {
                    return isComplete = FALSE;
                }
            });
        }
        return isComplete;
    }
    /**
     * 注册监听
     *
     * @param type
     * @param listener
     */
    on(type, listener) {
        const instance = this, { listeners } = instance, options = func(listener)
            ? { fn: listener }
            : listener;
        if (object(options) && func(options.fn)) {
            const { name, ns } = parseNamespace(instance.ns, type);
            options.ns = ns;
            push(listeners[name] || (listeners[name] = []), options);
        }
        else {
            fatal(`Invoke emitter.on(type, listener) failed.`);
        }
    }
    /**
     * 取消监听
     *
     * @param type
     * @param listener
     */
    off(type, listener) {
        const instance = this, { listeners } = instance;
        if (type) {
            const { name, ns } = parseNamespace(instance.ns, type), matchListener = createMatchListener(listener), each$1 = function (list, name) {
                each(list, function (options, index) {
                    if (matchListener(options) && matchNamespace(ns, options)) {
                        list.splice(index, 1);
                    }
                }, TRUE);
                if (!list.length) {
                    delete listeners[name];
                }
            };
            if (name) {
                if (listeners[name]) {
                    each$1(listeners[name], name);
                }
            }
            else if (ns) {
                each$2(listeners, each$1);
            }
        }
        else {
            // 清空
            instance.listeners = {};
            // 在开发阶段进行警告，比如传了 type 进来，type 是个空值
            // 但你不知道它是空值
            {
                if (arguments.length > 0) {
                    warn(`emitter.off(type) is invoked, but the "type" argument is undefined or null.`);
                }
            }
        }
    }
    /**
     * 是否已监听某个事件
     *
     * @param type
     * @param listener
     */
    has(type, listener) {
        let instance = this, { listeners } = instance, { name, ns } = parseNamespace(instance.ns, type), result = TRUE, matchListener = createMatchListener(listener), each$1 = function (list) {
            each(list, function (options) {
                if (matchListener(options) && matchNamespace(ns, options)) {
                    return result = FALSE;
                }
            });
            return result;
        };
        if (name) {
            if (listeners[name]) {
                each$1(listeners[name]);
            }
        }
        else if (ns) {
            each$2(listeners, each$1);
        }
        return !result;
    }
}
/**
 * 把事件类型解析成命名空间格式
 *
 * @param ns
 * @param type
 */
function parseNamespace(ns, type) {
    const result = {
        name: type,
        ns: EMPTY_STRING,
    };
    if (ns) {
        const index = indexOf$1(type, '.');
        if (index >= 0) {
            result.name = slice(type, 0, index);
            result.ns = slice(type, index + 1);
        }
    }
    return result;
}
function matchTrue(options) {
    return TRUE;
}
/**
 * 外部会传入 Function 或 EmitterOptions 或 空
 *
 * 这里根据传入值的不同类型，创建不同的判断函数
 *
 * 如果传入的是 EmitterOptions，则全等判断
 *
 * 如果传入的是 Function，则判断函数是否全等
 *
 * 如果传入的是空，则直接返回 true
 *
 * @param listener
 */
function createMatchListener(listener) {
    return func(listener)
        ? function (options) {
            return listener === options.fn;
        }
        : matchTrue;
}
/**
 * 判断 options 是否能匹配命名空间
 *
 * 如果 namespace 和 options.ns 都不为空，则需完全匹配
 *
 * 如果他们两个其中任何一个为空，则不判断命名空间
 *
 * @param namespace
 * @param options
 */
function matchNamespace(namespace, options) {
    const { ns } = options;
    return ns && namespace
        ? ns === namespace
        : TRUE;
}

function isNative (target) {
    return func(target) && /native code/.test(toString(target));
}

let nextTick;
// IE (10+) 和 node
if (typeof setImmediate === RAW_FUNCTION && isNative(setImmediate)) {
    nextTick = setImmediate;
}
// 用 MessageChannel 去做 setImmediate 的 polyfill
// 原理是将新的 message 事件加入到原有的 dom events 之后
// 兼容性 IE10+ 和其他标准浏览器
if (typeof MessageChannel === RAW_FUNCTION && isNative(MessageChannel)) {
    nextTick = function (fn) {
        const channel = new MessageChannel();
        channel.port1.onmessage = fn;
        channel.port2.postMessage(1);
    };
}
else {
    nextTick = setTimeout;
}
var nextTick$1 = nextTick;

let shared;
class NextTask {
    /**
     * 全局单例
     */
    static shared() {
        return shared || (shared = new NextTask());
    }
    constructor() {
        this.tasks = [];
    }
    /**
     * 在队尾添加异步任务
     */
    append(func, context) {
        const instance = this, { tasks } = instance;
        push(tasks, {
            fn: func,
            ctx: context
        });
        if (tasks.length === 1) {
            nextTick$1(function () {
                instance.run();
            });
        }
    }
    /**
     * 在队首添加异步任务
     */
    prepend(func, context) {
        const instance = this, { tasks } = instance;
        unshift(tasks, {
            fn: func,
            ctx: context
        });
        if (tasks.length === 1) {
            nextTick$1(function () {
                instance.run();
            });
        }
    }
    /**
     * 清空异步队列
     */
    clear() {
        this.tasks.length = 0;
    }
    /**
     * 立即执行异步任务，并清空队列
     */
    run() {
        const { tasks } = this;
        if (tasks.length) {
            this.tasks = [];
            each(tasks, function (task) {
                execute(task.fn, task.ctx);
            });
        }
    }
}

const SYNTAX_IF = '#if';
const SYNTAX_ELSE = 'else';
const SYNTAX_ELSE_IF = 'else if';
const SYNTAX_EACH = '#each';
const SYNTAX_PARTIAL = '#partial';
const SYNTAX_IMPORT = '>';
const SYNTAX_SPREAD = '...';
const SYNTAX_COMMENT = /^!\s/;
const SLOT_DATA_PREFIX = '$slot_';
const SLOT_NAME_DEFAULT = 'children';
const HINT_STRING = 1;
const HINT_NUMBER = 2;
const HINT_BOOLEAN = 3;
const DIRECTIVE_ON = 'on';
const DIRECTIVE_LAZY = 'lazy';
const DIRECTIVE_MODEL = 'model';
const DIRECTIVE_EVENT = 'event';
const DIRECTIVE_BINDING = 'binding';
const DIRECTIVE_CUSTOM = 'o';
const MODEL_PROP_DEFAULT = 'value';
const NAMESPACE_HOOK = '.hook';
const HOOK_BEFORE_CREATE = 'beforeCreate';
const HOOK_AFTER_CREATE = 'afterCreate';
const HOOK_BEFORE_MOUNT = 'beforeMount';
const HOOK_AFTER_MOUNT = 'afterMount';
const HOOK_BEFORE_UPDATE = 'beforeUpdate';
const HOOK_AFTER_UPDATE = 'afterUpdate';
const HOOK_BEFORE_DESTROY = 'beforeDestroy';
const HOOK_AFTER_DESTROY = 'afterDestroy';

let guid = 0;
function guid$1 () {
    return ++guid;
}

// vnode.data 内部使用的几个字段
const ID = '$id';
const VNODE = '$vnode';
const LOADING = '$loading';
const COMPONENT = '$component';
const LEAVING = '$leaving';

function update(api, vnode, oldVnode) {
    const { node, nativeAttrs } = vnode, oldNativeAttrs = oldVnode && oldVnode.nativeAttrs;
    if (nativeAttrs || oldNativeAttrs) {
        const newValue = nativeAttrs || EMPTY_OBJECT, oldValue = oldNativeAttrs || EMPTY_OBJECT;
        each$2(newValue, function (attr, name) {
            if (!oldValue[name]
                || attr.value !== oldValue[name].value) {
                api.attr(node, name, attr.value);
            }
        });
        each$2(oldValue, function (_, name) {
            if (!newValue[name]) {
                api.removeAttr(node, name);
            }
        });
    }
}

function update$1(api, vnode, oldVnode) {
    const { node, nativeProps } = vnode, oldNativeProps = oldVnode && oldVnode.nativeProps;
    if (nativeProps || oldNativeProps) {
        const newValue = nativeProps || EMPTY_OBJECT, oldValue = oldNativeProps || EMPTY_OBJECT;
        each$2(newValue, function (prop, name) {
            if (!oldValue[name]
                || prop.value !== oldValue[name].value) {
                api.prop(node, name, prop.value);
            }
        });
        each$2(oldValue, function (prop, name) {
            if (!newValue[name]) {
                api.removeProp(node, name, prop.hint);
            }
        });
    }
}

function update$2(vnode, oldVnode) {
    const { data, directives } = vnode, oldDirectives = oldVnode && oldVnode.directives;
    if (directives || oldDirectives) {
        const node = data[COMPONENT] || vnode.node, isKeypathChange = oldVnode && vnode.keypath !== oldVnode.keypath, newValue = directives || EMPTY_OBJECT, oldValue = oldDirectives || EMPTY_OBJECT;
        each$2(newValue, function (directive, name) {
            const { once, bind, unbind } = directive.hooks;
            if (!oldValue[name]) {
                bind(node, directive, vnode);
            }
            else if (once
                || directive.value !== oldValue[name].value
                || isKeypathChange) {
                if (unbind) {
                    unbind(node, oldValue[name], oldVnode);
                }
                bind(node, directive, vnode);
            }
        });
        each$2(oldValue, function (directive, name) {
            if (!newValue[name]) {
                const { unbind } = directive.hooks;
                if (unbind) {
                    unbind(node, directive, oldVnode);
                }
            }
        });
    }
}
function remove$1(vnode) {
    const { directives } = vnode;
    if (directives) {
        const node = vnode.data[COMPONENT] || vnode.node;
        each$2(directives, function (directive) {
            const { unbind } = directive.hooks;
            if (unbind) {
                unbind(node, directive, vnode);
            }
        });
    }
}

function update$3(vnode, oldVnode) {
    let { data, ref, props, slots, directives, context } = vnode, node;
    if (vnode.isComponent) {
        node = data[COMPONENT];
        // 更新时才要 set
        // 因为初始化时，所有这些都经过构造函数完成了
        if (oldVnode) {
            const model = directives && directives[DIRECTIVE_MODEL];
            if (model) {
                if (!props) {
                    props = {};
                }
                props[node.$model] = model.value;
            }
            if (props) {
                node.checkProps(props);
            }
            const result = merge(props, slots);
            if (result) {
                node.forceUpdate(result);
            }
        }
    }
    else {
        node = vnode.node;
    }
    if (ref) {
        const refs = context.$refs;
        if (refs) {
            refs[ref] = node;
        }
    }
}

function isPatchable(vnode, oldVnode) {
    return vnode.tag === oldVnode.tag
        && vnode.key === oldVnode.key;
}
function createKeyToIndex(vnodes, startIndex, endIndex) {
    let result, vnode, key;
    while (startIndex <= endIndex) {
        vnode = vnodes[startIndex];
        if (vnode && (key = vnode.key)) {
            if (!result) {
                result = {};
            }
            result[key] = startIndex;
        }
        startIndex++;
    }
    return result || EMPTY_OBJECT;
}
function insertBefore(api, parentNode, node, referenceNode) {
    if (referenceNode) {
        api.before(parentNode, node, referenceNode);
    }
    else {
        api.append(parentNode, node);
    }
}
function createComponent(vnode, options) {
    const child = (vnode.parent || vnode.context).createComponent(options, vnode);
    vnode.data[COMPONENT] = child;
    vnode.data[LOADING] = FALSE;
    update$3(vnode);
    update$2(vnode);
    return child;
}
function createData() {
    const data = {};
    data[ID] = guid$1();
    return data;
}
function createVnode(api, vnode) {
    let { tag, node, data, isComponent, isComment, isText, isStyle, isOption, children, text, html, context } = vnode;
    if (node && data) {
        return;
    }
    data = createData();
    vnode.data = data;
    if (isText) {
        vnode.node = api.createText(text);
        return;
    }
    if (isComment) {
        vnode.node = api.createComment(text);
        return;
    }
    if (isComponent) {
        let componentOptions = UNDEFINED;
        // 动态组件，tag 可能为空
        if (tag) {
            context.loadComponent(tag, function (options) {
                if (has$2(data, LOADING)) {
                    // 异步组件
                    if (data[LOADING]) {
                        // 尝试使用最新的 vnode
                        if (data[VNODE]) {
                            vnode = data[VNODE];
                            // 用完就删掉
                            delete data[VNODE];
                        }
                        enterVnode(vnode, createComponent(vnode, options));
                    }
                }
                // 同步组件
                else {
                    componentOptions = options;
                }
            });
        }
        // 不论是同步还是异步组件，都需要一个占位元素
        vnode.node = api.createComment(RAW_COMPONENT);
        if (componentOptions) {
            createComponent(vnode, componentOptions);
        }
        else {
            data[LOADING] = TRUE;
        }
    }
    else {
        node = vnode.node = api.createElement(vnode.tag, vnode.isSvg);
        if (children) {
            addVnodes(api, node, children);
        }
        else if (text) {
            api.text(node, text, isStyle, isOption);
        }
        else if (html) {
            api.html(node, html, isStyle, isOption);
        }
        update(api, vnode);
        update$1(api, vnode);
        update$3(vnode);
        update$2(vnode);
    }
}
function addVnodes(api, parentNode, vnodes, startIndex, endIndex, before) {
    let vnode, start = startIndex || 0, end = isDef(endIndex) ? endIndex : vnodes.length - 1;
    while (start <= end) {
        vnode = vnodes[start];
        createVnode(api, vnode);
        insertVnode(api, parentNode, vnode, before);
        start++;
    }
}
function insertVnode(api, parentNode, vnode, before) {
    const { node, data, context } = vnode, hasParent = api.parent(node);
    // 这里不调用 insertBefore，避免判断两次
    if (before) {
        api.before(parentNode, node, before.node);
    }
    else {
        api.append(parentNode, node);
    }
    // 普通元素和组件的占位节点都会走到这里
    // 但是占位节点不用 enter，而是等组件加载回来之后再调 enter
    if (!hasParent) {
        let enter = UNDEFINED;
        if (vnode.isComponent) {
            const component = data[COMPONENT];
            if (component) {
                enter = function () {
                    enterVnode(vnode, component);
                };
            }
        }
        else if (!vnode.isStatic && !vnode.isText && !vnode.isComment) {
            enter = function () {
                enterVnode(vnode);
            };
        }
        if (enter) {
            // 执行到这时，组件还没有挂载到 DOM 树
            // 如果此时直接触发 enter，外部还需要做多余的工作，比如 setTimeout
            // 索性这里直接等挂载到 DOM 数之后再触发
            // 注意：YoxInterface 没有声明 $observer，因为不想让外部访问，
            // 但是这里要用一次，所以加了 as any
            context.$observer.nextTask.prepend(enter);
        }
    }
}
function removeVnodes(api, parentNode, vnodes, startIndex, endIndex) {
    let vnode, start = startIndex || 0, end = isDef(endIndex) ? endIndex : vnodes.length - 1;
    while (start <= end) {
        vnode = vnodes[start];
        if (vnode) {
            removeVnode(api, parentNode, vnode);
        }
        start++;
    }
}
function removeVnode(api, parentNode, vnode) {
    const { node } = vnode;
    if (vnode.isStatic || vnode.isText || vnode.isComment) {
        api.remove(parentNode, node);
    }
    else {
        let done = function () {
            destroyVnode(api, vnode);
            api.remove(parentNode, node);
        }, component;
        if (vnode.isComponent) {
            component = vnode.data[COMPONENT];
            // 异步组件，还没加载成功就被删除了
            if (!component) {
                done();
                return;
            }
        }
        leaveVnode(vnode, component, done);
    }
}
function destroyVnode(api, vnode) {
    /**
     * 如果一个子组件的模板是这样写的：
     *
     * <div>
     *   {{#if visible}}
     *      <slot name="children"/>
     *   {{/if}}
     * </div>
     *
     * 当 visible 从 true 变为 false 时，不能销毁 slot 导入的任何 vnode
     * 不论是组件或是元素，都不能销毁，只能简单的 remove，
     * 否则子组件下一次展现它们时，会出问题
     */
    const { data, children, parent, slot } = vnode;
    // 销毁插槽组件
    // 如果宿主组件正在销毁，$vnode 属性会在调 destroy() 之前被删除
    // 这里表示的是宿主组件还没被销毁
    // 如果宿主组件被销毁了，则它的一切都要进行销毁
    if (slot && parent && parent.$vnode) {
        // 如果更新时，父组件没有传入该 slot，则子组件需要销毁该 slot
        const slots = parent.get(slot);
        // slots 要么没有，要么是数组，不可能是别的
        if (slots && has(slots, vnode)) {
            return;
        }
    }
    if (vnode.isComponent) {
        const component = data[COMPONENT];
        if (component) {
            remove$1(vnode);
            component.destroy();
        }
        else
            [
                data[LOADING] = FALSE
            ];
    }
    else {
        remove$1(vnode);
        if (children) {
            each(children, function (child) {
                destroyVnode(api, child);
            });
        }
    }
}
/**
 * vnode 触发 enter hook 时，外部一般会做一些淡入动画
 */
function enterVnode(vnode, component) {
    // 如果组件根元素和组件本身都写了 transition
    // 优先用外面定义的
    // 因为这明确是在覆盖配置
    let { data, transition } = vnode;
    if (component && !transition) {
        // 再看组件根元素是否有 transition
        transition = component.$vnode.transition;
    }
    execute(data[LEAVING]);
    if (transition) {
        const { enter } = transition;
        if (enter) {
            enter(vnode.node);
            return;
        }
    }
}
/**
 * vnode 触发 leave hook 时，外部一般会做一些淡出动画
 * 动画结束后才能移除节点，否则无法产生动画
 * 这里由外部调用 done 来通知内部动画结束
 */
function leaveVnode(vnode, component, done) {
    // 如果组件根元素和组件本身都写了 transition
    // 优先用外面定义的
    // 因为这明确是在覆盖配置
    let { data, transition } = vnode;
    if (component && !transition) {
        // 再看组件根元素是否有 transition
        transition = component.$vnode.transition;
    }
    if (transition) {
        const { leave } = transition;
        if (leave) {
            leave(vnode.node, data[LEAVING] = function () {
                if (data[LEAVING]) {
                    done();
                    data[LEAVING] = UNDEFINED;
                }
            });
            return;
        }
    }
    // 如果没有淡出动画，直接结束
    done();
}
function updateChildren(api, parentNode, children, oldChildren) {
    let startIndex = 0, endIndex = children.length - 1, startVnode = children[startIndex], endVnode = children[endIndex], oldStartIndex = 0, oldEndIndex = oldChildren.length - 1, oldStartVnode = oldChildren[oldStartIndex], oldEndVnode = oldChildren[oldEndIndex], oldKeyToIndex, oldIndex;
    while (oldStartIndex <= oldEndIndex && startIndex <= endIndex) {
        // 下面有设为 UNDEFINED 的逻辑
        if (!startVnode) {
            startVnode = children[++startIndex];
        }
        else if (!endVnode) {
            endVnode = children[--endIndex];
        }
        else if (!oldStartVnode) {
            oldStartVnode = oldChildren[++oldStartIndex];
        }
        else if (!oldEndVnode) {
            oldEndVnode = oldChildren[--oldEndIndex];
        }
        // 从头到尾比较，位置相同且值得 patch
        else if (isPatchable(startVnode, oldStartVnode)) {
            patch(api, startVnode, oldStartVnode);
            startVnode = children[++startIndex];
            oldStartVnode = oldChildren[++oldStartIndex];
        }
        // 从尾到头比较，位置相同且值得 patch
        else if (isPatchable(endVnode, oldEndVnode)) {
            patch(api, endVnode, oldEndVnode);
            endVnode = children[--endIndex];
            oldEndVnode = oldChildren[--oldEndIndex];
        }
        // 比较完两侧的节点，剩下就是 位置发生改变的节点 和 全新的节点
        // 当 endVnode 和 oldStartVnode 值得 patch
        // 说明元素被移到右边了
        else if (isPatchable(endVnode, oldStartVnode)) {
            patch(api, endVnode, oldStartVnode);
            insertBefore(api, parentNode, oldStartVnode.node, api.next(oldEndVnode.node));
            endVnode = children[--endIndex];
            oldStartVnode = oldChildren[++oldStartIndex];
        }
        // 当 oldEndVnode 和 startVnode 值得 patch
        // 说明元素被移到左边了
        else if (isPatchable(startVnode, oldEndVnode)) {
            patch(api, startVnode, oldEndVnode);
            insertBefore(api, parentNode, oldEndVnode.node, oldStartVnode.node);
            startVnode = children[++startIndex];
            oldEndVnode = oldChildren[--oldEndIndex];
        }
        // 尝试同级元素的 key
        else {
            if (!oldKeyToIndex) {
                oldKeyToIndex = createKeyToIndex(oldChildren, oldStartIndex, oldEndIndex);
            }
            // 新节点之前的位置
            oldIndex = startVnode.key
                ? oldKeyToIndex[startVnode.key]
                : UNDEFINED;
            // 移动元素
            if (isDef(oldIndex)) {
                patch(api, startVnode, oldChildren[oldIndex]);
                oldChildren[oldIndex] = UNDEFINED;
            }
            // 新元素
            else {
                createVnode(api, startVnode);
            }
            insertVnode(api, parentNode, startVnode, oldStartVnode);
            startVnode = children[++startIndex];
        }
    }
    if (oldStartIndex > oldEndIndex) {
        addVnodes(api, parentNode, children, startIndex, endIndex, children[endIndex + 1]);
    }
    else if (startIndex > endIndex) {
        removeVnodes(api, parentNode, oldChildren, oldStartIndex, oldEndIndex);
    }
}
function patch(api, vnode, oldVnode) {
    if (vnode === oldVnode) {
        return;
    }
    const { node, data } = oldVnode;
    // 如果不能 patch，则删除重建
    if (!isPatchable(vnode, oldVnode)) {
        // 同步加载的组件，初始化时不会传入占位节点
        // 它内部会自动生成一个注释节点，当它的根 vnode 和注释节点对比时，必然无法 patch
        // 于是走进此分支，为新组件创建一个 DOM 节点，然后继续 createComponent 后面的流程
        const parentNode = api.parent(node);
        createVnode(api, vnode);
        if (parentNode) {
            insertVnode(api, parentNode, vnode, oldVnode);
            removeVnode(api, parentNode, oldVnode);
        }
        return;
    }
    vnode.node = node;
    vnode.data = data;
    // 组件正在异步加载，更新为最新的 vnode
    // 当异步加载完成时才能用上最新的 vnode
    if (oldVnode.isComponent && data[LOADING]) {
        data[VNODE] = vnode;
        return;
    }
    // 两棵静态子树就别折腾了
    if (vnode.isStatic && oldVnode.isStatic) {
        return;
    }
    update(api, vnode, oldVnode);
    update$1(api, vnode, oldVnode);
    update$3(vnode, oldVnode);
    update$2(vnode, oldVnode);
    const { text, html, children, isStyle, isOption } = vnode, oldText = oldVnode.text, oldHtml = oldVnode.html, oldChildren = oldVnode.children;
    if (string(text)) {
        if (text !== oldText) {
            api.text(node, text, isStyle, isOption);
        }
    }
    else if (string(html)) {
        if (html !== oldHtml) {
            api.html(node, html, isStyle, isOption);
        }
    }
    // 两个都有需要 diff
    else if (children && oldChildren) {
        if (children !== oldChildren) {
            updateChildren(api, node, children, oldChildren);
        }
    }
    // 有新的没旧的 - 新增节点
    else if (children) {
        if (string(oldText) || string(oldHtml)) {
            api.text(node, EMPTY_STRING, isStyle);
        }
        addVnodes(api, node, children);
    }
    // 有旧的没新的 - 删除节点
    else if (oldChildren) {
        removeVnodes(api, node, oldChildren);
    }
    // 有旧的 text 没有新的 text
    else if (string(oldText) || string(oldHtml)) {
        api.text(node, EMPTY_STRING, isStyle);
    }
}
function create(api, node, context, keypath) {
    return {
        tag: api.tag(node),
        data: createData(),
        node,
        context,
        keypath,
    };
}
function destroy(api, vnode, isRemove) {
    if (isRemove) {
        const parentNode = api.parent(vnode.node);
        if (parentNode) {
            removeVnode(api, parentNode, vnode);
        }
        else {
            fatal(`Can't destroy vnode without parent node.`);
        }
    }
    else {
        destroyVnode(api, vnode);
    }
}

/**
 * 元素 节点
 */
const ELEMENT = 1;
/**
 * 属性 节点
 */
const ATTRIBUTE = 2;
/**
 * 指令 节点
 */
const DIRECTIVE = 3;
/**
 * 属性 节点
 */
const PROPERTY = 4;
/**
 * 文本 节点
 */
const TEXT = 5;
/**
 * if 节点
 */
const IF = 6;
/**
 * else if 节点
 */
const ELSE_IF = 7;
/**
 * else 节点
 */
const ELSE = 8;
/**
 * each 节点
 */
const EACH = 9;
/**
 * partial 节点
 */
const PARTIAL = 10;
/**
 * import 节点
 */
const IMPORT = 11;
/**
 * 表达式 节点
 */
const EXPRESSION = 12;
/**
 * 延展操作 节点
 */
const SPREAD = 13;

// 特殊标签
const specialTags = {};
// 特殊属性
const specialAttrs = {};
// 名称 -> 类型的映射
const name2Type = {};
specialTags[RAW_SLOT] =
    specialTags[RAW_TEMPLATE] =
        specialAttrs[RAW_KEY] =
            specialAttrs[RAW_REF] =
                specialAttrs[RAW_SLOT] = TRUE;
name2Type['if'] = IF;
name2Type['each'] = EACH;
name2Type['partial'] = PARTIAL;

var helper = /*#__PURE__*/Object.freeze({
  specialTags: specialTags,
  specialAttrs: specialAttrs,
  name2Type: name2Type
});

function createAttribute(name) {
    return {
        type: ATTRIBUTE,
        isStatic: TRUE,
        name,
    };
}
function createDirective(ns, name, value, expr, children) {
    return {
        type: DIRECTIVE,
        ns,
        name,
        key: join$1(ns, name),
        value,
        expr,
        children,
    };
}
function createProperty(name, hint, value, expr, children) {
    return {
        type: PROPERTY,
        isStatic: TRUE,
        name,
        hint,
        value,
        expr,
        children,
    };
}
function createEach(from, to, equal, index) {
    return {
        type: EACH,
        from,
        to,
        equal,
        index,
        isComplex: TRUE,
    };
}
function createElement(tag, isSvg, isStyle, isComponent) {
    return {
        type: ELEMENT,
        tag,
        isSvg,
        isStyle,
        // 只有 <option> 没有 value 属性时才为 true
        isOption: FALSE,
        isComponent,
        isStatic: !isComponent && tag !== RAW_SLOT,
    };
}
function createElse() {
    return {
        type: ELSE,
    };
}
function createElseIf(expr) {
    return {
        type: ELSE_IF,
        expr,
    };
}
function createExpression(expr, safe) {
    return {
        type: EXPRESSION,
        expr,
        safe,
        isLeaf: TRUE,
    };
}
function createIf(expr) {
    return {
        type: IF,
        expr,
    };
}
function createImport(name) {
    return {
        type: IMPORT,
        name,
        isComplex: TRUE,
        isLeaf: TRUE,
    };
}
function createPartial(name) {
    return {
        type: PARTIAL,
        name,
        isComplex: TRUE,
    };
}
function createSpread(expr, binding) {
    return {
        type: SPREAD,
        expr,
        binding,
        isLeaf: TRUE,
    };
}
function createText(text) {
    return {
        type: TEXT,
        text,
        isStatic: TRUE,
        isLeaf: TRUE,
    };
}

// 首字母大写，或中间包含 -
const componentNamePattern = /^[$A-Z]|-/, 
// 常见的自闭合标签
selfClosingTagNames = 'area,base,embed,track,source,param,input,col,img,br,hr'.split(','), 
// 常见的 svg 标签
svgTagNames = 'svg,g,defs,desc,metadata,symbol,use,image,path,rect,circle,line,ellipse,polyline,polygon,text,tspan,tref,textpath,marker,pattern,clippath,mask,filter,cursor,view,animate,font,font-face,glyph,missing-glyph,foreignObject'.split(','), 
// 常见的字符串类型的属性
// 注意：autocomplete,autocapitalize 不是布尔类型
stringProperyNames = 'id,class,name,value,for,accesskey,title,style,src,type,href,target,alt,placeholder,preload,poster,wrap,accept,pattern,dir,autocomplete,autocapitalize'.split(','), 
// 常见的数字类型的属性
numberProperyNames = 'min,minlength,max,maxlength,step,width,height,size,rows,cols,tabindex'.split(','), 
// 常见的布尔类型的属性
booleanProperyNames = 'disabled,checked,required,multiple,readonly,autofocus,autoplay,controls,loop,muted,novalidate,draggable,hidden,spellcheck'.split(','), 
// 某些属性 attribute name 和 property name 不同
attr2Prop = {};
// 列举几个常见的
attr2Prop['for'] = 'htmlFor';
attr2Prop['class'] = 'className';
attr2Prop['accesskey'] = 'accessKey';
attr2Prop['style'] = 'style.cssText';
attr2Prop['novalidate'] = 'noValidate';
attr2Prop['readonly'] = 'readOnly';
attr2Prop['tabindex'] = 'tabIndex';
attr2Prop['minlength'] = 'minLength';
attr2Prop['maxlength'] = 'maxLength';
function isSelfClosing(tagName) {
    return has(selfClosingTagNames, tagName);
}
function createAttribute$1(element, name) {
    // 组件用驼峰格式
    if (element.isComponent) {
        return createAttribute(camelize(name));
    }
    // 原生 dom 属性
    else {
        // 把 attr 优化成 prop
        const lowerName = lower(name);
        // <slot> 、<template> 或 svg 中的属性不用识别为 property
        if (specialTags[element.tag] || element.isSvg) {
            return createAttribute(name);
        }
        // 尝试识别成 property
        else if (has(stringProperyNames, lowerName)) {
            return createProperty(attr2Prop[lowerName] || lowerName, HINT_STRING);
        }
        else if (has(numberProperyNames, lowerName)) {
            return createProperty(attr2Prop[lowerName] || lowerName, HINT_NUMBER);
        }
        else if (has(booleanProperyNames, lowerName)) {
            return createProperty(attr2Prop[lowerName] || lowerName, HINT_BOOLEAN);
        }
        // 没辙，还是个 attribute
        return createAttribute(name);
    }
}
function getAttributeDefaultValue(element, name) {
    // 比如 <Dog isLive>
    if (element.isComponent) {
        return TRUE;
    }
    // <div data-name checked>
    else {
        return startsWith(name, 'data-')
            ? EMPTY_STRING
            : name;
    }
}
function createElement$1(tagName) {
    let isSvg = has(svgTagNames, tagName), isComponent = FALSE;
    // 是 svg 就不可能是组件
    // 加这个判断的原因是，svg 某些标签含有 连字符 和 大写字母，比较蛋疼
    if (!isSvg && componentNamePattern.test(tagName)) {
        isComponent = TRUE;
    }
    return createElement(tagName, isSvg, tagName === 'style', isComponent);
}
function compatElement(element) {
    let { tag, attrs } = element, hasType = FALSE, hasValue = FALSE;
    if (attrs) {
        each(attrs, function (attr) {
            const name = attr.type === PROPERTY
                ? attr.name
                : UNDEFINED;
            if (name === 'type') {
                hasType = TRUE;
            }
            else if (name === RAW_VALUE) {
                hasValue = TRUE;
            }
        });
    }
    // 补全 style 标签的 type
    // style 如果没有 type 则加一个 type="text/css"
    // 因为低版本 IE 没这个属性，没法正常渲染样式
    if (element.isStyle && !hasType) {
        push(element.attrs || (element.attrs = []), createProperty('type', HINT_STRING, 'text/css'));
    }
    // 低版本 IE 需要给 option 标签强制加 value
    else if (tag === 'option' && !hasValue) {
        element.isOption = TRUE;
    }
}

function toNumber (target, defaultValue) {
    return numeric(target)
        ? +target
        : isDef(defaultValue)
            ? defaultValue
            : 0;
}

/**
 * 字面量
 */
const LITERAL = 1;
/**
 * 标识符
 */
const IDENTIFIER = 2;
/**
 * 对象属性或数组下标
 */
const MEMBER = 3;
/**
 * 一元表达式，如 - a
 */
const UNARY = 4;
/**
 * 二元表达式，如 a + b
 */
const BINARY = 5;
/**
 * 三元表达式，如 a ? b : c
 */
const TERNARY = 6;
/**
 * 数组表达式，如 [ 1, 2, 3 ]
 */
const ARRAY = 7;
/**
 * 对象表达式，如 { name: 'yox' }
 */
const OBJECT = 8;
/**
 * 函数调用表达式，如 a()
 */
const CALL = 9;

function createArray(nodes, raw) {
    return {
        type: ARRAY,
        raw,
        nodes,
    };
}
function createBinary(left, operator, right, raw) {
    return {
        type: BINARY,
        raw,
        left,
        operator,
        right,
    };
}
function createCall(name, args, raw) {
    return {
        type: CALL,
        raw,
        name,
        args,
    };
}
function createIdentifierInner(raw, name, lookup, offset) {
    return {
        type: IDENTIFIER,
        raw,
        name,
        lookup,
        offset,
    };
}
function createMemberInner(raw, lead, keypath, nodes, lookup, offset) {
    return {
        type: MEMBER,
        raw,
        lead,
        keypath,
        nodes,
        lookup,
        offset,
    };
}
function createIdentifier(raw, name, isProp) {
    let lookup = TRUE, offset = 0;
    if (name === KEYPATH_CURRENT
        || name === KEYPATH_PARENT) {
        lookup = FALSE;
        if (name === KEYPATH_PARENT) {
            offset = 1;
        }
        name = EMPTY_STRING;
    }
    // 对象属性需要区分 a.b 和 a[b]
    // 如果不借用 Literal 无法实现这个判断
    // 同理，如果用了这种方式，就无法区分 a.b 和 a['b']，但是无所谓，这两种表示法本就一个意思
    return isProp
        ? createLiteral(name, raw)
        : createIdentifierInner(raw, name, lookup, offset);
}
function createLiteral(value, raw) {
    return {
        type: LITERAL,
        raw,
        value,
    };
}
function createObject(keys, values, raw) {
    return {
        type: OBJECT,
        raw,
        keys,
        values,
    };
}
function createTernary(test, yes, no, raw) {
    return {
        type: TERNARY,
        raw,
        test,
        yes,
        no,
    };
}
function createUnary(operator, node, raw) {
    return {
        type: UNARY,
        raw,
        operator,
        node,
    };
}
/**
 * 通过判断 nodes 来决定是否需要创建 Member
 *
 * 创建 Member 至少需要 nodes 有两个元素
 *
 * nodes 元素类型没有限制，可以是 Identifier、Literal、Call，或是别的完整表达式
 *
 * @param raw
 * @param nodes
 */
function createMemberIfNeeded(raw, nodes) {
    let firstNode = nodes.shift(), { length } = nodes, lookup = TRUE, offset = 0;
    // member 要求至少两个节点
    if (length > 0) {
        // 处理剩下的 nodes
        // 这里要做两手准备：
        // 1. 如果全是 literal 节点，则编译时 join
        // 2. 如果不全是 literal 节点，则运行时 join
        let isLiteral = TRUE, staticNodes = [], runtimeNodes = [];
        each(nodes, function (node) {
            if (node.type === LITERAL) {
                const literal = node;
                if (literal.raw === KEYPATH_PARENT) {
                    offset += 1;
                    return;
                }
                if (literal.raw !== KEYPATH_CURRENT) {
                    push(staticNodes, toString(literal.value));
                }
            }
            else {
                isLiteral = FALSE;
            }
            push(runtimeNodes, node);
        });
        // lookup 要求第一位元素是 Identifier，且它的 lookup 是 true 才为 true
        // 其他情况都为 false，如 "11".length 第一位元素是 Literal，不存在向上寻找的需求
        // 优化 1：计算 keypath
        //
        // 计算 keypath 的唯一方式是，第一位元素是 Identifier，后面都是 Literal
        // 否则就表示中间包含动态元素，这会导致无法计算静态路径
        // 如 a.b.c 可以算出 staticKeypath，而 a[b].c 则不行，因为 b 是动态的
        // 优化 2：计算 offset 并智能转成 Identifier
        //
        // 比如 xx 这样的表达式，应优化成 offset = 2，并转成 Identifier
        // 处理第一个节点
        if (firstNode.type === IDENTIFIER) {
            const identifier = firstNode;
            lookup = identifier.lookup;
            offset += identifier.offset;
            let name = identifier.name;
            // 不是 KEYPATH_THIS 或 KEYPATH_PARENT
            if (name) {
                unshift(staticNodes, name);
            }
            // a.b.c
            if (isLiteral) {
                // 转成 Identifier
                name = join(staticNodes, separator);
                firstNode = createIdentifierInner(name, name, lookup, offset);
            }
            // a[b]
            else {
                firstNode = createMemberInner(raw, firstNode, UNDEFINED, runtimeNodes, lookup, offset);
            }
        }
        else {
            // "xxx".length
            // format().a.b
            if (isLiteral) {
                firstNode = createMemberInner(raw, firstNode, join(staticNodes, separator), UNDEFINED, lookup, offset);
            }
            // "xxx"[length]
            // format()[a]
            else {
                firstNode = createMemberInner(raw, firstNode, UNDEFINED, runtimeNodes, lookup, offset);
            }
        }
    }
    return firstNode;
}

const unary = {
    '+': TRUE,
    '-': TRUE,
    '~': TRUE,
    '!': TRUE,
    '!!': TRUE,
};
// 参考 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
const binary = {
    '*': 14,
    '/': 14,
    '%': 14,
    '+': 13,
    '-': 13,
    '<<': 12,
    '>>': 12,
    '>>>': 12,
    '<': 11,
    '<=': 11,
    '>': 11,
    '>=': 11,
    '==': 10,
    '!=': 10,
    '===': 10,
    '!==': 10,
    '&': 9,
    '^': 8,
    '|': 7,
    '&&': 6,
    '||': 5,
};

function compile(content) {
    if (!cache[content]) {
        const parser = new Parser(content);
        cache[content] = parser.scanTernary(CODE_EOF);
    }
    return cache[content];
}
class Parser {
    constructor(content) {
        const instance = this, { length } = content;
        instance.index = RAW_MINUS_ONE;
        instance.end = length;
        instance.code = CODE_EOF;
        instance.content = content;
        instance.go();
    }
    /**
     * 移动一个字符
     */
    go(step) {
        let instance = this, { index, end } = instance;
        index += step || 1;
        if (index >= 0 && index < end) {
            instance.code = codeAt(instance.content, index);
            instance.index = index;
        }
        else {
            instance.code = CODE_EOF;
            instance.index = index < 0 ? RAW_MINUS_ONE : end;
        }
    }
    /**
     * 跳过空白符
     */
    skip(step) {
        const instance = this, reversed = step && step < 0;
        // 如果表达式是 "   xyz   "，到达结尾后，如果希望 skip(-1) 回到最后一个非空白符
        // 必须先判断最后一个字符是空白符，否则碰到 "xyz" 这样结尾不是空白符的，其实不应该回退
        if (instance.code === CODE_EOF) {
            const oldIndex = instance.index;
            instance.go(step);
            // 如果跳一位之后不是空白符，还原，然后返回
            if (!isWhitespace(instance.code)) {
                instance.go(oldIndex - instance.index);
                return;
            }
        }
        // 逆向时，只有位置真的发生过变化才需要在停止时正向移动一位
        // 比如 (a) 如果调用 skip 前位于 )，调用 skip(-1) ，结果应该是原地不动
        // 为了解决这个问题，应该首先判断当前是不是空白符，如果不是，直接返回
        else if (!isWhitespace(instance.code)) {
            return;
        }
        // 如果是正向的，停在第一个非空白符左侧
        // 如果是逆向的，停在第一个非空白符右侧
        while (TRUE) {
            if (isWhitespace(instance.code)) {
                instance.go(step);
            }
            else {
                if (reversed) {
                    instance.go();
                }
                break;
            }
        }
    }
    /**
     * 判断当前字符
     */
    is(code) {
        return this.code === code;
    }
    /**
     * 截取一段字符串
     *
     * @param startIndex
     */
    pick(startIndex, endIndex) {
        return slice(this.content, startIndex, isDef(endIndex) ? endIndex : this.index);
    }
    /**
     * 尝试解析下一个 token
     */
    scanToken() {
        const instance = this, { code, index } = instance;
        if (isIdentifierStart(code)) {
            return instance.scanTail(index, [
                instance.scanIdentifier(index)
            ]);
        }
        if (isDigit(code)) {
            return instance.scanNumber(index);
        }
        switch (code) {
            case CODE_EOF:
                return;
            // 'x' "x"
            case CODE_SQUOTE:
            case CODE_DQUOTE:
                return instance.scanTail(index, [
                    instance.scanString(index, code)
                ]);
            // .1  ./  ../
            case CODE_DOT:
                instance.go();
                return isDigit(instance.code)
                    ? instance.scanNumber(index)
                    : instance.scanPath(index);
            // (xx)
            case CODE_OPAREN:
                instance.go();
                return instance.scanTernary(CODE_CPAREN);
            // [xx, xx]
            case CODE_OBRACK:
                return instance.scanTail(index, [
                    createArray(instance.scanTuple(index, CODE_CBRACK), instance.pick(index))
                ]);
            // { a: 'x', b: 'x' }
            case CODE_OBRACE:
                return instance.scanObject(index);
        }
        // 因为 scanOperator 会导致 index 发生变化，只能放在最后尝试
        const operator = instance.scanOperator(index);
        if (operator && unary[operator]) {
            const node = instance.scanTernary();
            if (node) {
                if (node.type === LITERAL) {
                    const value = node.value;
                    if (number(value)) {
                        // 类似 ' -1 ' 这样的右侧有空格，需要撤回来
                        instance.skip(RAW_MINUS_ONE);
                        return createLiteral(-value, instance.pick(index));
                    }
                }
                // 类似 ' -a ' 这样的右侧有空格，需要撤回来
                instance.skip(RAW_MINUS_ONE);
                return createUnary(operator, node, instance.pick(index));
            }
            {
                instance.fatal(index, `一元运算只有操作符没有表达式？`);
            }
        }
    }
    /**
     * 扫描数字
     *
     * 支持整数和小数
     *
     * @param startIndex
     * @return
     */
    scanNumber(startIndex) {
        const instance = this;
        while (isNumber(instance.code)) {
            instance.go();
        }
        const raw = instance.pick(startIndex);
        // 尝试转型，如果转型失败，则确定是个错误的数字
        if (numeric(raw)) {
            return createLiteral(+raw, raw);
        }
        {
            instance.fatal(startIndex, `数字写错了知道吗？`);
        }
    }
    /**
     * 扫描字符串
     *
     * 支持反斜线转义引号
     *
     * @param startIndex
     * @param endCode
     */
    scanString(startIndex, endCode) {
        const instance = this;
        loop: while (TRUE) {
            // 这句有两个作用：
            // 1. 跳过开始的引号
            // 2. 驱动 index 前进
            instance.go();
            switch (instance.code) {
                // \" \'
                case CODE_BACKSLASH:
                    instance.go();
                    break;
                case endCode:
                    instance.go();
                    break loop;
                case CODE_EOF:
                    {
                        instance.fatal(startIndex, `到头了，字符串还没解析完呢？`);
                    }
                    break loop;
            }
        }
        // new Function 处理字符转义
        const raw = instance.pick(startIndex);
        return createLiteral(new Function(`return ${raw}`)(), raw);
    }
    /**
     * 扫描对象字面量
     *
     * @param startIndex
     */
    scanObject(startIndex) {
        let instance = this, keys = [], values = [], isKey = TRUE, node;
        // 跳过 {
        instance.go();
        loop: while (TRUE) {
            switch (instance.code) {
                case CODE_CBRACE:
                    instance.go();
                    {
                        if (keys.length !== values.length) {
                            instance.fatal(startIndex, `对象的 keys 和 values 的长度不一致`);
                        }
                    }
                    break loop;
                case CODE_EOF:
                    {
                        instance.fatal(startIndex, `到头了，对象还没解析完呢？`);
                    }
                    break loop;
                // :
                case CODE_COLON:
                    instance.go();
                    isKey = FALSE;
                    break;
                // ,
                case CODE_COMMA:
                    instance.go();
                    isKey = TRUE;
                    break;
                default:
                    // 解析 key 的时候，node 可以为空，如 { } 或 { name: 'xx', }
                    // 解析 value 的时候，node 不能为空
                    node = instance.scanTernary();
                    if (isKey) {
                        if (node) {
                            // 处理 { key : value } key 后面的空格
                            instance.skip();
                            if (node.type === IDENTIFIER) {
                                push(keys, node.name);
                            }
                            else if (node.type === LITERAL) {
                                push(keys, node.value);
                            }
                            else {
                                {
                                    instance.fatal(startIndex, `对象的 key 必须是字面量或标识符`);
                                }
                                break loop;
                            }
                        }
                    }
                    else if (node) {
                        // 处理 { key : value } value 后面的空格
                        instance.skip();
                        push(values, node);
                    }
                    else {
                        {
                            instance.fatal(startIndex, `对象的值没找到`);
                        }
                        break loop;
                    }
            }
        }
        return createObject(keys, values, instance.pick(startIndex));
    }
    /**
     * 扫描元组，即 `a, b, c` 这种格式，可以是参数列表，也可以是数组
     *
     * @param startIndex
     * @param endCode 元组的结束字符编码
     */
    scanTuple(startIndex, endCode) {
        let instance = this, nodes = [], node;
        // 跳过开始字符，如 [ 和 (
        instance.go();
        loop: while (TRUE) {
            switch (instance.code) {
                case endCode:
                    instance.go();
                    break loop;
                case CODE_EOF:
                    {
                        instance.fatal(startIndex, `到头了，tuple 还没解析完呢？`);
                    }
                    break loop;
                case CODE_COMMA:
                    instance.go();
                    break;
                default:
                    // 1. ( )
                    // 2. (1, 2, )
                    // 这三个例子都会出现 scanTernary 为空的情况
                    // 但是不用报错
                    node = instance.scanTernary();
                    if (node) {
                        // 为了解决 1 , 2 , 3 这样的写法
                        // 当解析出值后，先跳过后面的空格
                        instance.skip();
                        push(nodes, node);
                    }
            }
        }
        return nodes;
    }
    /**
     * 扫描路径，如 `./` 和 `../`
     *
     * 路径必须位于开头，如 ./../ 或 ，不存在 a/../b/../c 这样的情况，因为路径是用来切换或指定 context 的
     *
     * @param startIndex
     * @param prevNode
     */
    scanPath(startIndex) {
        let instance = this, nodes = [], name;
        // 进入此函数时，已确定前一个 code 是 CODE_DOT
        // 此时只需判断接下来是 ./ 还是 / 就行了
        while (TRUE) {
            // 要么是 current 要么是 parent
            name = KEYPATH_CURRENT;
            // ../
            if (instance.is(CODE_DOT)) {
                instance.go();
                name = KEYPATH_PARENT;
            }
            push(nodes, createIdentifier(name, name, nodes.length > 0));
            // 如果以 / 结尾，则命中 ./ 或 ../
            if (instance.is(CODE_SLASH)) {
                instance.go();
                // 没写错，这里不必强调 isIdentifierStart，数字开头也可以吧
                if (isIdentifierPart(instance.code)) {
                    push(nodes, instance.scanIdentifier(instance.index, TRUE));
                    return instance.scanTail(startIndex, nodes);
                }
                else if (instance.is(CODE_DOT)) {
                    // 先跳过第一个 .
                    instance.go();
                    // 继续循环
                }
                else {
                    // 类似 ./ 或 ../ 这样后面不跟标识符是想干嘛？报错可好？
                    {
                        instance.fatal(startIndex, `path 写法错误`);
                    }
                    break;
                }
            }
            // 类似 . 或 ..，可能就是想读取层级对象
            // 此处不用关心后面跟的具体是什么字符，那是其他函数的事情，就算报错也让别的函数去报
            // 此处也不用关心延展操作符，即 ...object，因为表达式引擎管不了这事，它没法把对象变成 attr1=value1 attr2=value2 的格式
            // 这应该是模板引擎该做的事
            else {
                break;
            }
        }
    }
    /**
     * 扫描变量
     */
    scanTail(startIndex, nodes) {
        let instance = this, node;
        /**
         * 标识符后面紧着的字符，可以是 ( . [，此外还存在各种组合，感受一下：
         *
         * a.b.c().length
         * a[b].c()()
         * a[b][c]()[d](e, f, g).length
         * [].length
         */
        loop: while (TRUE) {
            switch (instance.code) {
                // a(x)
                case CODE_OPAREN:
                    nodes = [
                        createCall(createMemberIfNeeded(instance.pick(startIndex), nodes), instance.scanTuple(instance.index, CODE_CPAREN), instance.pick(startIndex))
                    ];
                    break;
                // a.x
                case CODE_DOT:
                    instance.go();
                    // 接下来的字符，可能是数字，也可能是标识符，如果不是就报错
                    if (isIdentifierPart(instance.code)) {
                        // 无需识别关键字
                        push(nodes, instance.scanIdentifier(instance.index, TRUE));
                        break;
                    }
                    else {
                        {
                            instance.fatal(startIndex, `. 后面跟的都是啥玩意啊`);
                        }
                        break loop;
                    }
                // a[]
                case CODE_OBRACK:
                    // 过掉 [
                    instance.go();
                    node = instance.scanTernary(CODE_CBRACK);
                    if (node) {
                        push(nodes, node);
                        break;
                    }
                    else {
                        {
                            instance.fatal(startIndex, `[] 内部不能为空`);
                        }
                        break loop;
                    }
                default:
                    break loop;
            }
        }
        return createMemberIfNeeded(instance.pick(startIndex), nodes);
    }
    /**
     * 扫描标识符
     *
     * @param startIndex
     * @param isProp 是否是对象的属性
     * @return
     */
    scanIdentifier(startIndex, isProp) {
        const instance = this;
        while (isIdentifierPart(instance.code)) {
            instance.go();
        }
        const raw = instance.pick(startIndex);
        return !isProp && raw in keywordLiterals
            ? createLiteral(keywordLiterals[raw], raw)
            : createIdentifier(raw, raw, isProp);
    }
    /**
     * 扫描运算符
     *
     * @param startIndex
     */
    scanOperator(startIndex) {
        const instance = this;
        switch (instance.code) {
            // /、%、~、^
            case CODE_DIVIDE:
            case CODE_MODULO:
            case CODE_WAVE:
            case CODE_XOR:
                instance.go();
                break;
            // *
            case CODE_MULTIPLY:
                instance.go();
                break;
            // +
            case CODE_PLUS:
                instance.go();
                {
                    // ++
                    if (instance.is(CODE_PLUS)) {
                        instance.fatal(startIndex, `不支持该语法`);
                    }
                }
                break;
            // -
            case CODE_MINUS:
                instance.go();
                {
                    // --
                    if (instance.is(CODE_MINUS)) {
                        instance.fatal(startIndex, `不支持该语法`);
                    }
                }
                break;
            // !、!!、!=、!==
            case CODE_NOT:
                instance.go();
                if (instance.is(CODE_NOT)) {
                    instance.go();
                }
                else if (instance.is(CODE_EQUAL)) {
                    instance.go();
                    if (instance.is(CODE_EQUAL)) {
                        instance.go();
                    }
                }
                break;
            // &、&&
            case CODE_AND:
                instance.go();
                if (instance.is(CODE_AND)) {
                    instance.go();
                }
                break;
            // |、||
            case CODE_OR:
                instance.go();
                if (instance.is(CODE_OR)) {
                    instance.go();
                }
                break;
            // ==、===
            case CODE_EQUAL:
                instance.go();
                if (instance.is(CODE_EQUAL)) {
                    instance.go();
                    if (instance.is(CODE_EQUAL)) {
                        instance.go();
                    }
                }
                // 一个等号要报错
                else {
                    instance.fatal(startIndex, `不支持一个等号这种赋值写法`);
                }
                break;
            // <、<=、<<
            case CODE_LESS:
                instance.go();
                if (instance.is(CODE_EQUAL)
                    || instance.is(CODE_LESS)) {
                    instance.go();
                }
                break;
            // >、>=、>>、>>>
            case CODE_GREAT:
                instance.go();
                if (instance.is(CODE_EQUAL)) {
                    instance.go();
                }
                else if (instance.is(CODE_GREAT)) {
                    instance.go();
                    if (instance.is(CODE_GREAT)) {
                        instance.go();
                    }
                }
                break;
        }
        if (instance.index > startIndex) {
            return instance.pick(startIndex);
        }
    }
    /**
     * 扫描二元运算
     */
    scanBinary(startIndex) {
        // 二元运算，如 a + b * c / d，这里涉及运算符的优先级
        // 算法参考 https://en.wikipedia.org/wiki/Shunting-yard_algorithm
        let instance = this, 
        // 格式为 [ index1, node1, index2, node2, ... ]
        output = [], token, index, operator, operatorPrecedence, lastOperator, lastOperatorPrecedence;
        while (TRUE) {
            instance.skip();
            push(output, instance.index);
            token = instance.scanToken();
            if (token) {
                push(output, token);
                push(output, instance.index);
                instance.skip();
                operator = instance.scanOperator(instance.index);
                // 必须是二元运算符，一元不行
                if (operator && (operatorPrecedence = binary[operator])) {
                    // 比较前一个运算符
                    index = output.length - 4;
                    // 如果前一个运算符的优先级 >= 现在这个，则新建 Binary
                    // 如 a + b * c / d，当从左到右读取到 / 时，发现和前一个 * 优先级相同，则把 b * c 取出用于创建 Binary
                    if ((lastOperator = output[index])
                        && (lastOperatorPrecedence = binary[lastOperator])
                        && lastOperatorPrecedence >= operatorPrecedence) {
                        output.splice(index - 2, 5, createBinary(output[index - 2], lastOperator, output[index + 2], instance.pick(output[index - 3], output[index + 3])));
                    }
                    push(output, operator);
                    continue;
                }
                else {
                    operator = UNDEFINED;
                }
            }
            // 比如不支持的表达式，a++ 之类的
            else {
                if (operator) {
                    instance.fatal(startIndex, '表达式错误');
                }
            }
            // 没匹配到 token 或 operator 则跳出循环
            break;
        }
        // 类似 a + b * c 这种走到这会有 11 个
        // 此时需要从后往前遍历，因为确定后面的优先级肯定大于前面的
        while (TRUE) {
            // 最少的情况是 a + b，它有 7 个元素
            if (output.length >= 7) {
                index = output.length - 4;
                output.splice(index - 2, 5, createBinary(output[index - 2], output[index], output[index + 2], instance.pick(output[index - 3], output[index + 3])));
            }
            else {
                return output[1];
            }
        }
    }
    /**
     * 扫描三元运算
     *
     * @param endCode
     */
    scanTernary(endCode) {
        /**
         * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
         *
         * ?: 运算符的优先级几乎是最低的，比它低的只有四种： 赋值、yield、延展、逗号
         * 我们不支持这四种，因此可认为 ?: 优先级最低
         */
        const instance = this;
        instance.skip();
        let index = instance.index, test = instance.scanBinary(index), yes, no;
        if (instance.is(CODE_QUESTION)) {
            // 跳过 ?
            instance.go();
            yes = instance.scanBinary(index);
            if (instance.is(CODE_COLON)) {
                // 跳过 :
                instance.go();
                no = instance.scanBinary(index);
            }
            if (test && yes && no) {
                // 类似 ' a ? 1 : 0 ' 这样的右侧有空格，需要撤回来
                instance.skip(RAW_MINUS_ONE);
                test = createTernary(test, yes, no, instance.pick(index));
            }
            else {
                instance.fatal(index, `三元表达式写法错误`);
            }
        }
        // 过掉结束字符
        if (isDef(endCode)) {
            instance.skip();
            if (instance.is(endCode)) {
                instance.go();
            }
            // 没匹配到结束字符要报错
            else {
                instance.fatal(index, `结束字符匹配错误，期待[${String.fromCharCode(endCode)}]，却发现[${String.fromCharCode(instance.code)}]`);
            }
        }
        return test;
    }
    fatal(start, message) {
        {
            fatal(`Error compiling expression:\n${this.content}\n- ${message}`);
        }
    }
}
const cache = {}, CODE_EOF = 0, //
CODE_DOT = 46, // .
CODE_COMMA = 44, // ,
CODE_SLASH = 47, // /
CODE_BACKSLASH = 92, // \
CODE_SQUOTE = 39, // '
CODE_DQUOTE = 34, // "
CODE_OPAREN = 40, // (
CODE_CPAREN = 41, // )
CODE_OBRACK = 91, // [
CODE_CBRACK = 93, // ]
CODE_OBRACE = 123, // {
CODE_CBRACE = 125, // }
CODE_QUESTION = 63, // ?
CODE_COLON = 58, // :
CODE_PLUS = 43, // +
CODE_MINUS = 45, // -
CODE_MULTIPLY = 42, // *
CODE_DIVIDE = 47, // /
CODE_MODULO = 37, // %
CODE_WAVE = 126, // ~
CODE_AND = 38, // &
CODE_OR = 124, // |
CODE_XOR = 94, // ^
CODE_NOT = 33, // !
CODE_LESS = 60, // <
CODE_EQUAL = 61, // =
CODE_GREAT = 62, // >
/**
 * 区分关键字和普通变量
 * 举个例子：a === true
 * 从解析器的角度来说，a 和 true 是一样的 token
 */
keywordLiterals = {};
keywordLiterals[RAW_TRUE] = TRUE;
keywordLiterals[RAW_FALSE] = FALSE;
keywordLiterals[RAW_NULL] = NULL;
keywordLiterals[RAW_UNDEFINED] = UNDEFINED;
/**
 * 是否是空白符，用下面的代码在浏览器测试一下
 *
 * ```
 * for (var i = 0; i < 200; i++) {
 *   console.log(i, String.fromCharCode(i))
 * }
 * ```
 *
 * 从 0 到 32 全是空白符，100 往上分布比较散且较少用，唯一需要注意的是 160
 *
 * 160 表示 non-breaking space
 * http://www.adamkoch.com/2009/07/25/white-space-and-character-160/
 */
function isWhitespace(code) {
    return (code > 0 && code < 33) || code === 160;
}
/**
 * 是否是数字
 */
function isDigit(code) {
    return code > 47 && code < 58; // 0...9
}
/**
 * 是否是数字
 */
function isNumber(code) {
    return isDigit(code) || code === CODE_DOT;
}
/**
 * 变量开始字符必须是 字母、下划线、$
 */
function isIdentifierStart(code) {
    return code === 36 // $
        || code === 95 // _
        || (code > 96 && code < 123) // a...z
        || (code > 64 && code < 91); // A...Z
}
/**
 * 变量剩余的字符必须是 字母、下划线、$、数字
 */
function isIdentifierPart(code) {
    return isIdentifierStart(code) || isDigit(code);
}

// 当前不位于 block 之间
const BLOCK_MODE_NONE = 1, 
// {{ x }}
BLOCK_MODE_SAFE = 2, 
// {{{ x }}}
BLOCK_MODE_UNSAFE = 3, 
// 缓存编译正则
patternCache$1 = {}, 
// 指令分隔符，如 on-click 和 lazy-click
directiveSeparator = '-', 
// 没有命名空间的事件
eventPattern = /^[_$a-z]([\w]+)?$/i, 
// 有命名空间的事件
eventNamespacePattern = /^[_$a-z]([\w]+)?\.[_$a-z]([\w]+)?$/i, 
// 换行符
// 比较神奇是，有时候你明明看不到换行符，却真的存在一个，那就是 \r
breaklinePattern = /^\s*[\n\r]\s*|\s*[\n\r]\s*$/g, 
// 区间遍历
rangePattern = /\s*(=>|->)\s*/, 
// 标签
tagPattern = /<(\/)?([$a-z][-a-z0-9]*)/i, 
// 注释
commentPattern = /<!--[\s\S]*?-->/g, 
// 开始注释
openCommentPattern = /^([\s\S]*?)<!--/, 
// 结束注释
closeCommentPattern = /-->([\s\S]*?)$/, 
// 属性的 name
// 支持 on-click.namespace="" 或 on-get-out="" 或 xml:xx=""
attributePattern = /^\s*([-.:\w]+)(['"])?(?:=(['"]))?/, 
// 自闭合标签
selfClosingTagPattern = /^\s*(\/)?>/;
/**
 * 截取前缀之后的字符串
 */
function slicePrefix(str, prefix) {
    return trim(slice(str, prefix.length));
}
function compile$1(content) {
    let nodeList = [], nodeStack = [], 
    // 持有 if/elseif/else 节点
    ifStack = [], currentElement, currentAttribute, length = content.length, 
    // 当前处理的位置
    index = 0, 
    // 下一段开始的位置
    nextIndex = 0, 
    // 开始定界符的位置，表示的是 {{ 的右侧位置
    openBlockIndex = 0, 
    // 结束定界符的位置，表示的是 }} 的左侧位置
    closeBlockIndex = 0, 
    // 当前正在处理或即将处理的 block 类型
    blockMode = BLOCK_MODE_NONE, 
    // mustache 注释可能出现嵌套插值的情况
    blockStack = [], indexList = [], code, startQuote, fatal$1 = function (msg) {
        {
            fatal(`Error compiling ${RAW_TEMPLATE}:\n${content}\n- ${msg}`);
        }
    }, 
    /**
     * 常见的两种情况：
     *
     * <div>
     *    <input>1
     * </div>
     *
     * <div>
     *    <input>
     * </div>
     */
    popSelfClosingElementIfNeeded = function (popingTagName) {
        const lastNode = last(nodeStack);
        if (lastNode && lastNode.type === ELEMENT) {
            const element = lastNode;
            if (element.tag !== popingTagName
                && isSelfClosing(element.tag)) {
                popStack(element.type, element.tag);
            }
        }
    }, popStack = function (type, tagName) {
        const node = pop(nodeStack);
        if (node && node.type === type) {
            const { children } = node, 
            // 优化单个子节点
            child = children && children.length === 1 && children[0], isElement = type === ELEMENT, isAttribute = type === ATTRIBUTE, isProperty = type === PROPERTY, isDirective = type === DIRECTIVE;
            const currentBranch = last(nodeStack);
            if (currentBranch) {
                if (currentBranch.isStatic && !node.isStatic) {
                    currentBranch.isStatic = FALSE;
                }
                if (!currentBranch.isComplex) {
                    if (node.isComplex || isElement) {
                        currentBranch.isComplex = TRUE;
                    }
                    // <div {{#if xx}} xx{{/if}}>
                    else if (currentElement
                        && currentElement !== currentBranch
                        && (isAttribute || isProperty || isDirective)) {
                        currentBranch.isComplex = TRUE;
                    }
                }
            }
            {
                if (isElement) {
                    const element = node;
                    if (tagName && element.tag !== tagName) {
                        fatal$1(`结束标签是${tagName}，开始标签却是${element.tag}`);
                    }
                }
            }
            // 除了 helper.specialAttrs 里指定的特殊属性，attrs 里的任何节点都不能单独拎出来赋给 element
            // 因为 attrs 可能存在 if，所以每个 attr 最终都不一定会存在
            if (child) {
                switch (child.type) {
                    case TEXT:
                        // 属性的值如果是纯文本，直接获取文本值
                        // 减少渲染时的遍历
                        if (isElement) ;
                        else if (isAttribute) {
                            processAttributeSingleText(node, child);
                        }
                        else if (isProperty) {
                            processPropertySingleText(node, child);
                        }
                        else if (isDirective) {
                            processDirectiveSingleText(node, child);
                        }
                        break;
                    case EXPRESSION:
                        if (isElement) {
                            processElementSingleExpression(node, child);
                        }
                        else if (isAttribute) {
                            processAttributeSingleExpression(node, child);
                        }
                        else if (isProperty) {
                            processPropertySingleExpression(node, child);
                        }
                        else if (isDirective) {
                            processDirectiveSingleExpression(node, child);
                        }
                        break;
                }
            }
            // 大于 1 个子节点，即有插值或 if 写法
            else if (children) {
                if (isDirective) {
                    processDirectiveMultiChildren();
                }
                // 元素层级
                else if (!currentElement) {
                    removeComment(children);
                    if (!children.length) {
                        node.children = UNDEFINED;
                    }
                }
            }
            // 0 个子节点
            else if (currentElement) {
                if (isAttribute) {
                    processAttributeEmptyChildren(currentElement, node);
                }
                else if (isProperty) {
                    processPropertyEmptyChildren(currentElement, node);
                }
                else if (isDirective) {
                    processDirectiveEmptyChildren(currentElement, node);
                }
            }
            if (type === EACH) {
                checkEach(node);
            }
            else if (type === PARTIAL) {
                checkPartial(node);
            }
            else if (isElement) {
                checkElement(node);
            }
            else if (currentElement) {
                if (isAttribute) {
                    if (isSpecialAttr(currentElement, node)) {
                        bindSpecialAttr(currentElement, node);
                    }
                }
                else if (isDirective) {
                    checkDirective(currentElement, node);
                }
            }
            return node;
        }
        {
            fatal$1(`出栈节点类型不匹配`);
        }
    }, removeComment = function (children) {
        // 类似 <!-- xx {{name}} yy {{age}} zz --> 这样的注释里包含插值
        // 按照目前的解析逻辑，是根据定界符进行模板分拆
        // 一旦出现插值，children 长度必然大于 1
        let openIndex = RAW_MINUS_ONE, openText = EMPTY_STRING, closeIndex = RAW_MINUS_ONE, closeText = EMPTY_STRING;
        each(children, function (child, index) {
            if (child.type === TEXT) {
                if (closeIndex >= 0) {
                    openText = child.text;
                    // 处理 <!-- <!-- 这样有多个的情况
                    while (openCommentPattern.test(openText)) {
                        openText = RegExp.$1;
                        openIndex = index;
                    }
                    if (openIndex >= 0) {
                        // openIndex 肯定小于 closeIndex，因为完整的注释在解析过程中会被干掉
                        // 只有包含插值的注释才会走进这里
                        // 现在要确定开始和结束的文本节点，是否包含正常文本
                        if (openText) {
                            children[openIndex].text = openText;
                            openIndex++;
                        }
                        if (closeText) {
                            children[closeIndex].text = closeText;
                            closeIndex--;
                        }
                        children.splice(openIndex, closeIndex - openIndex + 1);
                        openIndex = closeIndex = RAW_MINUS_ONE;
                    }
                }
                else {
                    closeText = child.text;
                    // 处理 --> --> 这样有多个的情况
                    while (closeCommentPattern.test(closeText)) {
                        closeText = RegExp.$1;
                        closeIndex = index;
                    }
                }
            }
        }, TRUE);
    }, processDirectiveMultiChildren = function () {
        // 不支持 on-click="1{{xx}}2" 或是 on-click="1{{#if x}}x{{else}}y{{/if}}2"
        // 1. 很难做性能优化
        // 2. 全局搜索不到事件名，不利于代码维护
        // 3. 不利于编译成静态函数
        {
            fatal$1(`指令的值不能用插值或 if 语法`);
        }
    }, processElementSingleExpression = function (element, child) {
        if (!element.isComponent && !element.slot && !child.safe) {
            element.html = child.expr;
            element.children = UNDEFINED;
        }
    }, processPropertyEmptyChildren = function (element, prop) {
        if (prop.hint === HINT_BOOLEAN) {
            prop.value = TRUE;
        }
        else {
            // string 或 number 类型的属性，如果不写值，直接忽略
            replaceChild(prop);
        }
    }, processPropertySingleText = function (prop, child) {
        const { text } = child;
        if (prop.hint === HINT_NUMBER) {
            prop.value = toNumber(text);
        }
        else if (prop.hint === HINT_BOOLEAN) {
            prop.value = text === RAW_TRUE || text === prop.name;
        }
        else {
            prop.value = text;
        }
        prop.children = UNDEFINED;
    }, processPropertySingleExpression = function (prop, child) {
        const { expr } = child;
        prop.expr = expr;
        prop.children = UNDEFINED;
        // 对于有静态路径的表达式，可转为单向绑定指令，可实现精确更新视图，如下
        // <div class="{{className}}">
        if (expr.type === IDENTIFIER) {
            prop.binding = TRUE;
        }
    }, processAttributeEmptyChildren = function (element, attr) {
        if (isSpecialAttr(element, attr)) {
            {
                fatal$1(`${attr.name} 忘了写值吧？`);
            }
        }
        else {
            attr.value = getAttributeDefaultValue(element, attr.name);
        }
    }, processAttributeSingleText = function (attr, child) {
        attr.value = child.text;
        attr.children = UNDEFINED;
    }, processAttributeSingleExpression = function (attr, child) {
        const { expr } = child;
        attr.expr = expr;
        attr.children = UNDEFINED;
        // 对于有静态路径的表达式，可转为单向绑定指令，可实现精确更新视图，如下
        // <div class="{{className}}">
        if (expr.type === IDENTIFIER) {
            attr.binding = TRUE;
        }
    }, processDirectiveEmptyChildren = function (element, directive) {
        directive.value = TRUE;
    }, processDirectiveSingleText = function (directive, child) {
        let { text } = child, 
        // model="xx" model="this.x" 值只能是标识符或 Member
        isModel = directive.ns === DIRECTIVE_MODEL, 
        // lazy 的值必须是大于 0 的数字
        isLazy = directive.ns === DIRECTIVE_LAZY, 
        // 校验事件名称
        isEvent = directive.ns === DIRECTIVE_EVENT, 
        // 自定义指令运行不合法的表达式
        isCustom = directive.ns === DIRECTIVE_CUSTOM, 
        // 指令的值是纯文本，可以预编译表达式，提升性能
        expr;
        try {
            expr = compile(text);
        }
        catch (e) { }
        if (expr) {
            {
                const { raw } = expr;
                if (isLazy) {
                    if (expr.type !== LITERAL
                        || !number(expr.value)
                        || expr.value <= 0) {
                        fatal$1(`lazy 指令的值 [${raw}] 必须是大于 0 的数字`);
                    }
                }
                // 如果指令表达式是函数调用，则只能调用方法（难道还有别的可以调用的吗？）
                else if (expr.type === CALL) {
                    if (expr.name.type !== IDENTIFIER) {
                        fatal$1('指令表达式的类型如果是函数调用，则只能调用方法');
                    }
                }
                // 上面检测过方法调用，接下来事件指令只需要判断是否以下两种格式：
                // on-click="name" 或 on-click="name.namespace"
                else if (isEvent) {
                    if (!eventPattern.test(raw) && !eventNamespacePattern.test(raw)) {
                        fatal$1('事件转换名称只能是 [name] 或 [name.namespace] 格式');
                    }
                    else if (currentElement
                        && currentElement.isComponent
                        && directive.name === raw) {
                        fatal$1('转换组件事件的名称不能相同');
                    }
                }
                if (isModel && expr.type !== IDENTIFIER) {
                    fatal$1(`model 指令的值格式错误: [${raw}]`);
                }
            }
            directive.expr = expr;
            directive.value = expr.type === LITERAL
                ? expr.value
                : text;
        }
        else {
            {
                if (!isCustom) {
                    fatal$1(`${directive.ns} 指令的表达式错误: [${text}]`);
                }
            }
            directive.value = text;
        }
        directive.children = UNDEFINED;
    }, processDirectiveSingleExpression = function (directive, child) {
        {
            fatal$1(`指令的表达式不能用插值语法`);
        }
    }, checkCondition = function (condition) {
        let currentNode = condition, prevNode, hasChildren, hasNext;
        while (TRUE) {
            if (currentNode.children) {
                if (!hasNext) {
                    if (currentNode.next) {
                        delete currentNode.next;
                    }
                }
                hasChildren = hasNext = TRUE;
            }
            prevNode = currentNode.prev;
            if (prevNode) {
                // prev 仅仅用在 checkCondition 函数中
                // 用完就可以删掉了
                delete currentNode.prev;
                currentNode = prevNode;
            }
            else {
                break;
            }
        }
        // 每个条件都是空内容，则删掉整个 if
        if (!hasChildren) {
            replaceChild(currentNode);
        }
    }, checkEach = function (each) {
        // 没内容就干掉
        if (!each.children) {
            replaceChild(each);
        }
    }, checkPartial = function (partial) {
        // 没内容就干掉
        if (!partial.children) {
            replaceChild(partial);
        }
    }, checkElement = function (element) {
        const { tag, slot } = element, isTemplate = tag === RAW_TEMPLATE;
        {
            if (isTemplate) {
                if (element.key) {
                    fatal$1(`<template> 不支持 key`);
                }
                else if (element.ref) {
                    fatal$1(`<template> 不支持 ref`);
                }
                else if (element.attrs) {
                    fatal$1(`<template> 不支持属性或指令`);
                }
                else if (!slot) {
                    fatal$1(`<template> 不写 slot 属性是几个意思？`);
                }
            }
        }
        // 没有子节点，则意味着这个插槽没任何意义
        if (isTemplate && slot && !element.children) {
            replaceChild(element);
        }
        // <slot /> 如果没写 name，自动加上默认名称
        else if (tag === RAW_SLOT && !element.name) {
            element.name = SLOT_NAME_DEFAULT;
        }
        else {
            compatElement(element);
        }
    }, checkDirective = function (element, directive) {
        {
            // model 不能写在 if 里，影响节点的静态结构
            if (directive.ns === DIRECTIVE_MODEL) {
                if (last(nodeStack) !== element) {
                    fatal$1(`model 不能写在 if 内`);
                }
            }
        }
    }, bindSpecialAttr = function (element, attr) {
        const { name, value } = attr, 
        // 这三个属性值要求是字符串
        isStringValueRequired = name === RAW_NAME || name === RAW_SLOT;
        {
            // 因为要拎出来给 element，所以不能用 if
            if (last(nodeStack) !== element) {
                fatal$1(`${name} 不能写在 if 内`);
            }
            // 对于所有特殊属性来说，空字符串是肯定不行的，没有任何意义
            if (value === EMPTY_STRING) {
                fatal$1(`${name} 的值不能是空字符串`);
            }
            else if (isStringValueRequired && falsy$1(value)) {
                fatal$1(`${name} 的值只能是字符串字面量`);
            }
        }
        element[name] = isStringValueRequired ? value : attr;
        replaceChild(attr);
    }, isSpecialAttr = function (element, attr) {
        return specialAttrs[attr.name]
            || element.tag === RAW_SLOT && attr.name === RAW_NAME;
    }, replaceChild = function (oldNode, newNode) {
        let currentBranch = last(nodeStack), isAttr, list, index;
        if (currentBranch) {
            isAttr = currentElement && currentElement === currentBranch;
            list = isAttr
                ? currentBranch.attrs
                : currentBranch.children;
        }
        else {
            list = nodeList;
        }
        if (list) {
            index = indexOf(list, oldNode);
            if (index >= 0) {
                if (newNode) {
                    list[index] = newNode;
                }
                else {
                    list.splice(index, 1);
                    if (currentBranch && !list.length) {
                        if (isAttr) {
                            delete currentBranch.attrs;
                        }
                        else {
                            currentBranch.children = UNDEFINED;
                        }
                    }
                }
            }
        }
    }, addChild = function (node) {
        /**
         * <div>
         *    <input>
         *    <div></div>
         * </div>
         *
         * <div>
         *    <input>xxx
         * </div>
         */
        if (!currentElement) {
            popSelfClosingElementIfNeeded();
        }
        const type = node.type, currentBranch = last(nodeStack);
        // else 系列只是 if 的递进节点，不需要加入 nodeList
        if (type === ELSE || type === ELSE_IF) {
            const lastNode = pop(ifStack);
            if (lastNode) {
                // 方便 checkCondition 逆向遍历
                node.prev = lastNode;
                // lastNode 只能是 if 或 else if 节点
                if (lastNode.type === ELSE_IF || lastNode.type === IF) {
                    lastNode.next = node;
                    popStack(lastNode.type);
                    push(ifStack, node);
                }
                else if (type === ELSE_IF) {
                    {
                        fatal$1('else 后面不能跟 else if 啊');
                    }
                }
                else {
                    fatal$1('只能写一个 else 啊');
                }
            }
            else {
                fatal$1('不写 if 是几个意思');
            }
        }
        else {
            if (currentBranch) {
                push(
                // 这里不能写 currentElement && !currentAttribute，举个例子
                //
                // <div id="x" {{#if}} name="xx" alt="xx" {{/if}}
                //
                // 当 name 属性结束后，条件满足，但此时已不是元素属性层级了
                currentElement && currentBranch.type === ELEMENT
                    ? currentElement.attrs || (currentElement.attrs = [])
                    : currentBranch.children || (currentBranch.children = []), node);
            }
            else {
                push(nodeList, node);
            }
            if (type === IF) {
                // 只要是 if 节点，并且和 element 同级，就加上 stub
                // 方便 virtual dom 进行对比
                // 这个跟 virtual dom 的实现原理密切相关，不加 stub 会有问题
                if (!currentElement) {
                    node.stub = TRUE;
                }
                push(ifStack, node);
            }
        }
        if (node.isLeaf) {
            // 当前树枝节点如果是静态的，一旦加入了一个非静态子节点，改变当前树枝节点的 isStatic
            // 这里不处理树枝节点的进栈，因为当树枝节点出栈时，还有一次处理机会，那时它的 isStatic 已确定下来，不会再变
            if (currentBranch) {
                if (currentBranch.isStatic && !node.isStatic) {
                    currentBranch.isStatic = FALSE;
                }
                // 当前树枝节点是简单节点，一旦加入了一个复杂子节点，当前树枝节点变为复杂节点
                if (!currentBranch.isComplex && node.isComplex) {
                    currentBranch.isComplex = TRUE;
                }
            }
        }
        else {
            push(nodeStack, node);
        }
    }, addTextChild = function (text) {
        // [注意]
        // 这里不能随便删掉
        // 因为收集组件的子节点会受影响，举个例子：
        // <Component>
        //
        // </Component>
        // 按现在的逻辑，这样的组件是没有子节点的，因为在这里过滤掉了，因此该组件没有 slot
        // 如果这里放开了，组件就会有一个 slot
        // trim 文本开始和结束位置的换行符
        text = text.replace(breaklinePattern, EMPTY_STRING);
        if (text) {
            addChild(createText(text));
        }
    }, htmlParsers = [
        function (content) {
            if (!currentElement) {
                const match = content.match(tagPattern);
                // 必须以 <tag 开头才能继续
                // 如果 <tag 前面有别的字符，会走进第四个 parser
                if (match && match.index === 0) {
                    const tag = match[2];
                    if (match[1] === '/') {
                        /**
                         * 处理可能存在的自闭合元素，如下
                         *
                         * <div>
                         *    <input>
                         * </div>
                         */
                        popSelfClosingElementIfNeeded(tag);
                        popStack(ELEMENT, tag);
                    }
                    else {
                        /**
                         * template 只能写在组件的第一级，如下：
                         *
                         * <Component>
                         *   <template slot="xx">
                         *     111
                         *   </template>
                         * </Component>
                         */
                        {
                            if (tag === RAW_TEMPLATE) {
                                const lastNode = last(nodeStack);
                                if (!lastNode || !lastNode.isComponent) {
                                    fatal$1('<template> 只能写在组件标签内');
                                }
                            }
                        }
                        const node = createElement$1(tag);
                        addChild(node);
                        currentElement = node;
                    }
                    return match[0];
                }
            }
        },
        // 处理标签的 > 或 />，不论开始还是结束标签
        function (content) {
            const match = content.match(selfClosingTagPattern);
            if (match) {
                // 处理开始标签的 > 或 />
                if (currentElement && !currentAttribute) {
                    // 自闭合标签
                    if (match[1] === '/') {
                        popStack(currentElement.type, currentElement.tag);
                    }
                    currentElement = UNDEFINED;
                }
                // 处理结束标签的 >
                return match[0];
            }
        },
        // 处理 attribute directive 的 name 部分
        function (content) {
            // 当前在 element 层级
            if (currentElement && !currentAttribute) {
                const match = content.match(attributePattern);
                if (match) {
                    // <div class="11 name="xxx"></div>
                    // 这里会匹配上 xxx"，match[2] 就是那个引号
                    {
                        if (match[2]) {
                            fatal$1(`上一个属性似乎没有正常结束`);
                        }
                    }
                    let node, name = match[1];
                    if (name === DIRECTIVE_MODEL || name === RAW_TRANSITION) {
                        node = createDirective(camelize(name), EMPTY_STRING);
                    }
                    // 这里要用 on- 判断前缀，否则 on 太容易重名了
                    else if (startsWith(name, DIRECTIVE_ON + directiveSeparator)) {
                        const event = slicePrefix(name, DIRECTIVE_ON + directiveSeparator);
                        {
                            if (!event) {
                                fatal$1('缺少事件名称');
                            }
                        }
                        node = createDirective(DIRECTIVE_EVENT, camelize(event));
                    }
                    // 当一个元素绑定了多个事件时，可分别指定每个事件的 lazy
                    // 当只有一个事件时，可简写成 lazy
                    // <div on-click="xx" lazy-click
                    else if (startsWith(name, DIRECTIVE_LAZY)) {
                        let lazy = slicePrefix(name, DIRECTIVE_LAZY);
                        if (startsWith(lazy, directiveSeparator)) {
                            lazy = slicePrefix(lazy, directiveSeparator);
                        }
                        node = createDirective(DIRECTIVE_LAZY, lazy ? camelize(lazy) : EMPTY_STRING);
                    }
                    // 这里要用 o- 判断前缀，否则 o 太容易重名了
                    else if (startsWith(name, DIRECTIVE_CUSTOM + directiveSeparator)) {
                        const custom = slicePrefix(name, DIRECTIVE_CUSTOM + directiveSeparator);
                        {
                            if (!custom) {
                                fatal$1('缺少自定义指令名称');
                            }
                        }
                        node = createDirective(DIRECTIVE_CUSTOM, camelize(custom));
                    }
                    else {
                        node = createAttribute$1(currentElement, name);
                    }
                    addChild(node);
                    // 这里先记下，下一个 handler 要匹配结束引号
                    startQuote = match[3];
                    // 有属性值才需要设置 currentAttribute，便于后续收集属性值
                    if (startQuote) {
                        currentAttribute = node;
                    }
                    else {
                        popStack(node.type);
                    }
                    return match[0];
                }
            }
        },
        function (content) {
            let text, match;
            // 处理 attribute directive 的 value 部分
            if (currentAttribute && startQuote) {
                match = content.match(patternCache$1[startQuote] || (patternCache$1[startQuote] = new RegExp(startQuote)));
                // 有结束引号
                if (match) {
                    text = slice(content, 0, match.index);
                    addTextChild(text);
                    text += startQuote;
                    // attribute directive 结束了
                    // 此时如果一个值都没收集到，需设置一个空字符串
                    // 否则无法区分 <div a b=""> 中的 a 和 b
                    if (!currentAttribute.children) {
                        addChild(createText(EMPTY_STRING));
                    }
                    popStack(currentAttribute.type);
                    currentAttribute = UNDEFINED;
                }
                // 没有结束引号，整段匹配
                // 如 id="1{{x}}2" 中的 1
                else if (blockMode !== BLOCK_MODE_NONE) {
                    text = content;
                    addTextChild(text);
                }
                else {
                    fatal$1(`${currentAttribute.name} 没有找到结束引号`);
                }
            }
            // 如果不加判断，类似 <div {{...obj}}> 这样写，会把空格当做一个属性
            // 收集文本只有两处：属性值、元素内容
            // 属性值通过上面的 if 处理过了，这里只需要处理元素内容
            else if (!currentElement) {
                // 获取 <tag 前面的字符
                match = content.match(tagPattern);
                // 元素层级的注释都要删掉
                if (match) {
                    text = slice(content, 0, match.index);
                    if (text) {
                        addTextChild(text.replace(commentPattern, EMPTY_STRING));
                    }
                }
                else {
                    text = content;
                    addTextChild(text.replace(commentPattern, EMPTY_STRING));
                }
            }
            else {
                {
                    if (trim(content)) {
                        fatal$1(`<${currentElement.tag}> 属性里不要写乱七八糟的字符`);
                    }
                }
                text = content;
            }
            return text;
        },
    ], blockParsers = [
        // {{#each xx:index}}
        function (source) {
            if (startsWith(source, SYNTAX_EACH)) {
                {
                    if (currentElement) {
                        fatal$1(currentAttribute
                            ? `each 不能写在属性的值里`
                            : `each 不能写在属性层级`);
                    }
                }
                source = slicePrefix(source, SYNTAX_EACH);
                const terms = source.replace(/\s+/g, EMPTY_STRING).split(':');
                if (terms[0]) {
                    const literal = trim(terms[0]), index = trim(terms[1]), match = literal.match(rangePattern);
                    if (match) {
                        const parts = literal.split(rangePattern), from = compile(parts[0]), to = compile(parts[2]);
                        if (from && to) {
                            return createEach(from, to, trim(match[1]) === '=>', index);
                        }
                    }
                    else {
                        const expr = compile(literal);
                        if (expr) {
                            return createEach(expr, UNDEFINED, FALSE, index);
                        }
                    }
                }
                {
                    fatal$1(`无效的 each`);
                }
            }
        },
        // {{#import name}}
        function (source) {
            if (startsWith(source, SYNTAX_IMPORT)) {
                source = slicePrefix(source, SYNTAX_IMPORT);
                if (source) {
                    if (!currentElement) {
                        return createImport(source);
                    }
                    else {
                        fatal$1(currentAttribute
                            ? `import 不能写在属性的值里`
                            : `import 不能写在属性层级`);
                    }
                }
                {
                    fatal$1(`无效的 import`);
                }
            }
        },
        // {{#partial name}}
        function (source) {
            if (startsWith(source, SYNTAX_PARTIAL)) {
                source = slicePrefix(source, SYNTAX_PARTIAL);
                if (source) {
                    if (!currentElement) {
                        return createPartial(source);
                    }
                    else {
                        fatal$1(currentAttribute
                            ? `partial 不能写在属性的值里`
                            : `partial 不能写在属性层级`);
                    }
                }
                {
                    fatal$1(`无效的 partial`);
                }
            }
        },
        // {{#if expr}}
        function (source) {
            if (startsWith(source, SYNTAX_IF)) {
                source = slicePrefix(source, SYNTAX_IF);
                const expr = compile(source);
                if (expr) {
                    return createIf(expr);
                }
                {
                    fatal$1(`无效的 if`);
                }
            }
        },
        // {{else if expr}}
        function (source) {
            if (startsWith(source, SYNTAX_ELSE_IF)) {
                source = slicePrefix(source, SYNTAX_ELSE_IF);
                const expr = compile(source);
                if (expr) {
                    return createElseIf(expr);
                }
                {
                    fatal$1(`无效的 else if`);
                }
            }
        },
        // {{else}}
        function (source) {
            if (startsWith(source, SYNTAX_ELSE)) {
                source = slicePrefix(source, SYNTAX_ELSE);
                if (!trim(source)) {
                    return createElse();
                }
                {
                    fatal$1(`else 后面不要写乱七八糟的东西`);
                }
            }
        },
        // {{...obj}}
        function (source) {
            if (startsWith(source, SYNTAX_SPREAD)) {
                source = slicePrefix(source, SYNTAX_SPREAD);
                const expr = compile(source);
                if (expr) {
                    if (currentElement && currentElement.isComponent) {
                        return createSpread(expr, expr.type === IDENTIFIER);
                    }
                    else {
                        fatal$1(`延展属性只能用于组件属性`);
                    }
                }
                {
                    fatal$1(`无效的 spread`);
                }
            }
        },
        // {{expr}}
        function (source) {
            if (!SYNTAX_COMMENT.test(source)) {
                source = trim(source);
                const expr = compile(source);
                if (expr) {
                    return createExpression(expr, blockMode === BLOCK_MODE_SAFE);
                }
                {
                    fatal$1(`无效的 expression`);
                }
            }
        },
    ], parseHtml = function (code) {
        while (code) {
            each(htmlParsers, function (parse) {
                const match = parse(code);
                if (match) {
                    code = slice(code, match.length);
                    return FALSE;
                }
            });
        }
    }, parseBlock = function (code) {
        if (charAt(code) === '/') {
            /**
             * 处理可能存在的自闭合元素，如下
             *
             * {{#if xx}}
             *    <input>
             * {{/if}}
             */
            popSelfClosingElementIfNeeded();
            const name = slice(code, 1);
            let type = name2Type[name], isCondition = FALSE;
            if (type === IF) {
                const node = pop(ifStack);
                if (node) {
                    type = node.type;
                    isCondition = TRUE;
                }
                else {
                    fatal$1(`if 还没开始就结束了？`);
                }
            }
            const node = popStack(type);
            if (node && isCondition) {
                checkCondition(node);
            }
        }
        else {
            // 开始下一个 block 或表达式
            each(blockParsers, function (parse) {
                const node = parse(code);
                if (node) {
                    addChild(node);
                    return FALSE;
                }
            });
        }
    }, closeBlock = function () {
        // 确定开始和结束定界符能否配对成功，即 {{ 对 }}，{{{ 对 }}}
        // 这里不能动 openBlockIndex 和 closeBlockIndex，因为等下要用他俩 slice
        index = closeBlockIndex + 2;
        // 这里要用 <=，因为很可能到头了
        if (index <= length) {
            if (index < length && charAt(content, index) === '}') {
                if (blockMode === BLOCK_MODE_UNSAFE) {
                    nextIndex = index + 1;
                }
                else {
                    fatal$1(`{{ 和 }}} 无法配对`);
                }
            }
            else {
                if (blockMode === BLOCK_MODE_SAFE) {
                    nextIndex = index;
                }
                else {
                    fatal$1(`{{{ 和 }} 无法配对`);
                }
            }
            pop(blockStack);
            // }} 左侧的位置
            addIndex(closeBlockIndex);
            openBlockIndex = indexOf$1(content, '{{', nextIndex);
            closeBlockIndex = indexOf$1(content, '}}', nextIndex);
            // 如果碰到连续的结束定界符，继续 close
            if (closeBlockIndex >= nextIndex
                && (openBlockIndex < 0 || closeBlockIndex < openBlockIndex)) {
                return closeBlock();
            }
        }
        else {
            // 到头了
            return TRUE;
        }
    }, addIndex = function (index) {
        if (!blockStack.length) {
            push(indexList, index);
        }
    };
    // 因为存在 mustache 注释内包含插值的情况
    // 这里把流程设计为先标记切片的位置，标记过程中丢弃无效的 block
    // 最后处理有效的 block
    while (TRUE) {
        addIndex(nextIndex);
        openBlockIndex = indexOf$1(content, '{{', nextIndex);
        if (openBlockIndex >= nextIndex) {
            blockMode = BLOCK_MODE_SAFE;
            // {{ 左侧的位置
            addIndex(openBlockIndex);
            // 跳过 {{
            openBlockIndex += 2;
            // {{ 后面总得有内容吧
            if (openBlockIndex < length) {
                if (charAt(content, openBlockIndex) === '{') {
                    blockMode = BLOCK_MODE_UNSAFE;
                    openBlockIndex++;
                }
                // {{ 右侧的位置
                addIndex(openBlockIndex);
                // block 是否安全
                addIndex(blockMode);
                // 打开一个 block 就入栈一个
                push(blockStack, TRUE);
                if (openBlockIndex < length) {
                    closeBlockIndex = indexOf$1(content, '}}', openBlockIndex);
                    if (closeBlockIndex >= openBlockIndex) {
                        // 注释可以嵌套，如 {{！  {{xx}} {{! {{xx}} }}  }}
                        nextIndex = indexOf$1(content, '{{', openBlockIndex);
                        if (nextIndex < 0 || closeBlockIndex < nextIndex) {
                            if (closeBlock()) {
                                break;
                            }
                        }
                    }
                    else {
                        fatal$1('找不到结束定界符');
                    }
                }
                else {
                    fatal$1('{{{ 后面没字符串了？');
                }
            }
            else {
                fatal$1('{{ 后面没字符串了？');
            }
        }
        else {
            break;
        }
    }
    for (let i = 0, length = indexList.length; i < length; i += 5) {
        index = indexList[i];
        // {{ 左侧的位置
        openBlockIndex = indexList[i + 1];
        if (openBlockIndex) {
            parseHtml(slice(content, index, openBlockIndex));
        }
        // {{ 右侧的位置
        openBlockIndex = indexList[i + 2];
        blockMode = indexList[i + 3];
        closeBlockIndex = indexList[i + 4];
        if (closeBlockIndex) {
            code = trim(slice(content, openBlockIndex, closeBlockIndex));
            // 不用处理 {{ }} 和 {{{ }}} 这种空 block
            if (code) {
                parseBlock(code);
            }
        }
        else {
            blockMode = BLOCK_MODE_NONE;
            parseHtml(slice(content, index));
        }
    }
    if (nodeStack.length) {
        /**
         * 处理可能存在的自闭合元素，如下
         *
         * <input>
         */
        popSelfClosingElementIfNeeded();
        {
            if (nodeStack.length) {
                fatal$1('还有节点未出栈');
            }
        }
    }
    if (nodeList.length > 0) {
        removeComment(nodeList);
    }
    return nodeList;
}

const TRUE$1 = '!0';
const FALSE$1 = '!1';
const COMMA = ',';
const COLON = ':';
const PLUS = '+';
const AND = '&&';
const QUESTION = '?';
const NOT = '!';
const EMPTY = '""';
/**
 * 目的是 保证调用参数顺序稳定，减少运行时判断
 */
function trimArgs(list) {
    let args = [], removable = TRUE;
    each(list, function (arg) {
        if (isDef(arg)) {
            removable = FALSE;
            unshift(args, arg);
        }
        else if (!removable) {
            unshift(args, FALSE$1);
        }
    }, TRUE);
    return args;
}
function toObject$1(fields) {
    return `{${join(fields, COMMA)}}`;
}
function toArray$1(items) {
    return `[${join(items, COMMA)}]`;
}
function toCall(name, args) {
    return `${name}(${join(trimArgs(args), COMMA)})`;
}
function toString$1(value) {
    return JSON.stringify(value);
}

var generator = /*#__PURE__*/Object.freeze({
  TRUE: TRUE$1,
  FALSE: FALSE$1,
  COMMA: COMMA,
  COLON: COLON,
  PLUS: PLUS,
  AND: AND,
  QUESTION: QUESTION,
  NOT: NOT,
  EMPTY: EMPTY,
  toObject: toObject$1,
  toArray: toArray$1,
  toCall: toCall,
  toString: toString$1
});

function generate(node, renderIdentifier, renderMemberKeypath, renderMemberLiteral, renderCall, holder, depIgnore, stack, inner) {
    let value, isSpecialNode = FALSE, generateChildNode = function (node) {
        return generate(node, renderIdentifier, renderMemberKeypath, renderMemberLiteral, renderCall, holder, depIgnore, stack, TRUE);
    };
    switch (node.type) {
        case LITERAL:
            value = toString$1(node.value);
            break;
        case UNARY:
            value = node.operator + generateChildNode(node.node);
            break;
        case BINARY:
            value = generateChildNode(node.left)
                + node.operator
                + generateChildNode(node.right);
            break;
        case TERNARY:
            value = generateChildNode(node.test)
                + QUESTION
                + generateChildNode(node.yes)
                + COLON
                + generateChildNode(node.no);
            break;
        case ARRAY:
            const items = node.nodes.map(generateChildNode);
            value = toArray$1(items);
            break;
        case OBJECT:
            const fields = [];
            each(node.keys, function (key, index) {
                push(fields, toString$1(key)
                    + COLON
                    + generateChildNode(node.values[index]));
            });
            value = toObject$1(fields);
            break;
        case IDENTIFIER:
            isSpecialNode = TRUE;
            const identifier = node;
            value = toCall(renderIdentifier, [
                toString$1(identifier.name),
                identifier.lookup ? TRUE$1 : UNDEFINED,
                identifier.offset > 0 ? toString$1(identifier.offset) : UNDEFINED,
                holder ? TRUE$1 : UNDEFINED,
                depIgnore ? TRUE$1 : UNDEFINED,
                stack ? stack : UNDEFINED
            ]);
            break;
        case MEMBER:
            isSpecialNode = TRUE;
            const { lead, keypath, nodes, lookup, offset } = node, stringifyNodes = nodes ? nodes.map(generateChildNode) : [];
            if (lead.type === IDENTIFIER) {
                // 只能是 a[b] 的形式，因为 a.b 已经在解析时转换成 Identifier 了
                value = toCall(renderIdentifier, [
                    toCall(renderMemberKeypath, [
                        toString$1(lead.name),
                        toArray$1(stringifyNodes)
                    ]),
                    lookup ? TRUE$1 : UNDEFINED,
                    offset > 0 ? toString$1(offset) : UNDEFINED,
                    holder ? TRUE$1 : UNDEFINED,
                    depIgnore ? TRUE$1 : UNDEFINED,
                    stack ? stack : UNDEFINED
                ]);
            }
            else if (nodes) {
                // "xx"[length]
                // format()[a][b]
                value = toCall(renderMemberLiteral, [
                    generateChildNode(lead),
                    UNDEFINED,
                    toArray$1(stringifyNodes),
                    holder ? TRUE$1 : UNDEFINED
                ]);
            }
            else {
                // "xx".length
                // format().a.b
                value = toCall(renderMemberLiteral, [
                    generateChildNode(lead),
                    toString$1(keypath),
                    UNDEFINED,
                    holder ? TRUE$1 : UNDEFINED,
                ]);
            }
            break;
        default:
            isSpecialNode = TRUE;
            const { args } = node;
            value = toCall(renderCall, [
                generateChildNode(node.name),
                args.length
                    ? toArray$1(args.map(generateChildNode))
                    : UNDEFINED,
                holder ? TRUE$1 : UNDEFINED
            ]);
            break;
    }
    // 不需要 value holder
    if (!holder) {
        return value;
    }
    // 内部的临时值，且 holder 为 true
    if (inner) {
        return isSpecialNode
            ? value + '.' + RAW_VALUE
            : value;
    }
    // 最外层的值，且 holder 为 true
    return isSpecialNode
        ? value
        : toObject$1([RAW_VALUE + COLON + value]);
}

/**
 * 这里的难点在于处理 Element 的 children，举个例子：
 *
 * ['1', _x(expr), _l(expr, index, generate), _x(expr) ? ['1', _x(expr), _l(expr, index, generate)] : y]
 *
 * children 用数组表示，其中表达式求出的值可能是任意类型，比如数组或对象，我们无法控制表达式的值最终会是什么类型
 *
 * 像 each 或 import 这样的语法，内部其实会产生一个 vnode 数组，这里就出现了两个难点：
 *
 * 1. 如何区分 each 或其他语法产生的数组和表达式求值的数组
 * 2. 如何避免频繁的创建数组
 *
 * 我能想到的解决方案是，根据当前节点类型，如果是元素，则确保 children 的每一项的值序列化后都是函数调用的形式
 *
 * 这样能确保是从左到右依次执行，也就便于在内部创建一个公共数组，执行一个函数就收集一个值，而不管那个值到底是什么类型
 *
 */
// 是否要执行 join 操作
const joinStack = [], 
// 是否正在收集子节点
collectStack = [], nodeGenerator = {}, RENDER_EXPRESSION_IDENTIFIER = 'a', RENDER_EXPRESSION_MEMBER_KEYPATH = 'b', RENDER_EXPRESSION_MEMBER_LITERAL = 'c', RENDER_EXPRESSION_CALL = 'd', RENDER_TEXT_VNODE = 'e', RENDER_ATTRIBUTE_VNODE = 'f', RENDER_PROPERTY_VNODE = 'g', RENDER_LAZY_VNODE = 'h', RENDER_TRANSITION_VNODE = 'i', RENDER_BINDING_VNODE = 'j', RENDER_MODEL_VNODE = 'k', RENDER_EVENT_METHOD_VNODE = 'l', RENDER_EVENT_NAME_VNODE = 'm', RENDER_DIRECTIVE_VNODE = 'n', RENDER_SPREAD_VNODE = 'o', RENDER_ELEMENT_VNODE = 'p', RENDER_SLOT = 'q', RENDER_PARTIAL = 'r', RENDER_IMPORT = 's', RENDER_EACH = 't', TO_STRING = 'u', ARG_STACK = 'v', CODE_RETURN = 'return ';
// 序列化代码的前缀
let codePrefix, 
// 表达式求值是否要求返回字符串类型
isStringRequired;
function renderExpression(expr, holder, depIgnore, stack) {
    return generate(expr, RENDER_EXPRESSION_IDENTIFIER, RENDER_EXPRESSION_MEMBER_KEYPATH, RENDER_EXPRESSION_MEMBER_LITERAL, RENDER_EXPRESSION_CALL, holder, depIgnore, stack);
}
function stringifyObject(obj) {
    const fields = [];
    each$2(obj, function (value, key) {
        if (isDef(value)) {
            push(fields, toString$1(key) + COLON + value);
        }
    });
    return toObject$1(fields);
}
function stringifyFunction(result, arg) {
    return `${RAW_FUNCTION}(${arg || EMPTY_STRING}){${result || EMPTY_STRING}}`;
}
function stringifyGroup(code) {
    return `(${code})`;
}
function stringifyExpression(expr, toString) {
    const value = renderExpression(expr);
    return toString
        ? toCall(TO_STRING, [
            value
        ])
        : value;
}
function stringifyExpressionVnode(expr, toString) {
    return toCall(RENDER_TEXT_VNODE, [
        stringifyExpression(expr, toString)
    ]);
}
function stringifyExpressionArg(expr) {
    return renderExpression(expr, FALSE, FALSE, ARG_STACK);
}
function stringifyValue(value, expr, children) {
    if (isDef(value)) {
        return toString$1(value);
    }
    // 只有一个表达式时，保持原始类型
    if (expr) {
        return stringifyExpression(expr);
    }
    // 多个值拼接时，要求是字符串
    if (children) {
        isStringRequired = children.length > 1;
        return stringifyChildren(children);
    }
}
function stringifyChildren(children, isComplex) {
    // 如果是复杂节点的 children，则每个 child 的序列化都是函数调用的形式
    // 因此最后可以拼接为 fn1(), fn2(), fn3() 这样依次调用，而不用再多此一举的使用数组，因为在 renderer 里也用不上这个数组
    // children 大于一个时，才有 join 的可能，单个值 jion 啥啊...
    const isJoin = children.length > 1 && !isComplex;
    push(joinStack, isJoin);
    const value = join(children.map(function (child) {
        return nodeGenerator[child.type](child);
    }), isJoin ? PLUS : COMMA);
    pop(joinStack);
    return value;
}
function stringifyConditionChildren(children, isComplex) {
    if (children) {
        const result = stringifyChildren(children, isComplex);
        return children.length > 1 && isComplex
            ? stringifyGroup(result)
            : result;
    }
}
function stringifyIf(node, stub) {
    let { children, isComplex, next } = node, test = stringifyExpression(node.expr), yes = stringifyConditionChildren(children, isComplex), no, result;
    if (next) {
        no = next.type === ELSE
            ? stringifyConditionChildren(next.children, next.isComplex)
            : stringifyIf(next, stub);
    }
    // 到达最后一个条件，发现第一个 if 语句带有 stub，需创建一个注释标签占位
    else if (stub) {
        no = renderElement(stringifyObject({
            isComment: TRUE$1,
            text: EMPTY,
        }));
    }
    if (isDef(yes) || isDef(no)) {
        const isJoin = last(joinStack);
        if (isJoin) {
            if (isUndef(yes)) {
                yes = EMPTY;
            }
            if (isUndef(no)) {
                no = EMPTY;
            }
        }
        if (isUndef(no)) {
            result = test + AND + yes;
        }
        else if (isUndef(yes)) {
            result = NOT + test + AND + no;
        }
        else {
            result = test + QUESTION + yes + COLON + no;
        }
        // 如果是连接操作，因为 ?: 优先级最低，因此要加 ()
        return isJoin
            ? stringifyGroup(result)
            : result;
    }
    return EMPTY;
}
function renderElement(data, tag, attrs, childs, slots) {
    return toCall(RENDER_ELEMENT_VNODE, [data, tag, attrs, childs, slots]);
}
function getComponentSlots(children) {
    const result = {}, slots = {}, addSlot = function (name, nodes) {
        if (!falsy(nodes)) {
            name = SLOT_DATA_PREFIX + name;
            push(slots[name] || (slots[name] = []), nodes);
        }
    };
    each(children, function (child) {
        // 找到具名 slot
        if (child.type === ELEMENT) {
            const element = child;
            if (element.slot) {
                addSlot(element.slot, element.tag === RAW_TEMPLATE
                    ? element.children
                    : [element]);
                return;
            }
        }
        // 匿名 slot，名称统一为 children
        addSlot(SLOT_NAME_DEFAULT, [child]);
    });
    each$2(slots, function (children, name) {
        // 强制为复杂节点，因为 slot 的子节点不能用字符串拼接的方式来渲染
        result[name] = stringifyFunction(stringifyChildren(children, TRUE));
    });
    if (!falsy$2(result)) {
        return stringifyObject(result);
    }
}
nodeGenerator[ELEMENT] = function (node) {
    let { tag, isComponent, isSvg, isStyle, isOption, isStatic, isComplex, name, ref, key, html, attrs, children } = node, data = {}, outputTag, outputAttrs = [], outputChilds, outputSlots;
    if (tag === RAW_SLOT) {
        const args = [toString$1(SLOT_DATA_PREFIX + name)];
        if (children) {
            push(args, stringifyFunction(stringifyChildren(children, TRUE)));
        }
        return toCall(RENDER_SLOT, args);
    }
    push(collectStack, FALSE);
    if (attrs) {
        each(attrs, function (attr) {
            push(outputAttrs, nodeGenerator[attr.type](attr));
        });
    }
    // 如果以 $ 开头，表示动态组件
    if (codeAt(tag) === 36) {
        outputTag = toString$1(slice(tag, 1));
    }
    else {
        data.tag = toString$1(tag);
    }
    if (isSvg) {
        data.isSvg = TRUE$1;
    }
    if (isStyle) {
        data.isStyle = TRUE$1;
    }
    if (isOption) {
        data.isOption = TRUE$1;
    }
    if (isStatic) {
        data.isStatic = TRUE$1;
    }
    if (ref) {
        data.ref = stringifyValue(ref.value, ref.expr, ref.children);
    }
    if (key) {
        data.key = stringifyValue(key.value, key.expr, key.children);
    }
    if (html) {
        data.html = stringifyExpression(html, TRUE);
    }
    if (isComponent) {
        data.isComponent = TRUE$1;
        if (children) {
            collectStack[collectStack.length - 1] = TRUE;
            outputSlots = getComponentSlots(children);
        }
    }
    else if (children) {
        isStringRequired = TRUE;
        collectStack[collectStack.length - 1] = isComplex;
        outputChilds = stringifyChildren(children, isComplex);
        if (isComplex) {
            outputChilds = stringifyFunction(outputChilds);
        }
        else {
            data.text = outputChilds;
            outputChilds = UNDEFINED;
        }
    }
    pop(collectStack);
    return renderElement(stringifyObject(data), outputTag, falsy(outputAttrs)
        ? UNDEFINED
        : stringifyFunction(join(outputAttrs, COMMA)), outputChilds, outputSlots);
};
nodeGenerator[ATTRIBUTE] = function (node) {
    const value = node.binding
        ? toCall(RENDER_BINDING_VNODE, [
            toString$1(node.name),
            renderExpression(node.expr, TRUE, TRUE)
        ])
        : stringifyValue(node.value, node.expr, node.children);
    return toCall(RENDER_ATTRIBUTE_VNODE, [
        toString$1(node.name),
        value
    ]);
};
nodeGenerator[PROPERTY] = function (node) {
    const value = node.binding
        ? toCall(RENDER_BINDING_VNODE, [
            toString$1(node.name),
            renderExpression(node.expr, TRUE, TRUE),
            toString$1(node.hint)
        ])
        : stringifyValue(node.value, node.expr, node.children);
    return toCall(RENDER_PROPERTY_VNODE, [
        toString$1(node.name),
        toString$1(node.hint),
        value
    ]);
};
nodeGenerator[DIRECTIVE] = function (node) {
    const { ns, name, key, value, expr } = node;
    if (ns === DIRECTIVE_LAZY) {
        return toCall(RENDER_LAZY_VNODE, [
            toString$1(name),
            toString$1(value)
        ]);
    }
    // <div transition="name">
    if (ns === RAW_TRANSITION) {
        return toCall(RENDER_TRANSITION_VNODE, [
            toString$1(value)
        ]);
    }
    // <input model="id">
    if (ns === DIRECTIVE_MODEL) {
        return toCall(RENDER_MODEL_VNODE, [
            renderExpression(expr, TRUE, TRUE)
        ]);
    }
    let renderName = RENDER_DIRECTIVE_VNODE, args = [
        toString$1(name),
        toString$1(key),
        toString$1(value),
    ];
    // 尽可能把表达式编译成函数，这样对外界最友好
    //
    // 众所周知，事件指令会编译成函数，对于自定义指令来说，也要尽可能编译成函数
    //
    // 比如 o-tap="method()" 或 o-log="{'id': '11'}"
    // 前者会编译成 handler（调用方法），后者会编译成 getter（取值）
    if (expr) {
        // 如果表达式明确是在调用方法，则序列化成 method + args 的形式
        if (expr.type === CALL) {
            if (ns === DIRECTIVE_EVENT) {
                renderName = RENDER_EVENT_METHOD_VNODE;
            }
            // compiler 保证了函数调用的 name 是标识符
            push(args, toString$1(expr.name.name));
            // 为了实现运行时动态收集参数，这里序列化成函数
            if (!falsy(expr.args)) {
                // args 函数在触发事件时调用，调用时会传入它的作用域，因此这里要加一个参数
                push(args, stringifyFunction(CODE_RETURN + toArray$1(expr.args.map(stringifyExpressionArg)), ARG_STACK));
            }
        }
        // 不是调用方法，就是事件转换
        else if (ns === DIRECTIVE_EVENT) {
            renderName = RENDER_EVENT_NAME_VNODE;
            push(args, toString$1(expr.raw));
        }
        else if (ns === DIRECTIVE_CUSTOM) {
            // 取值函数
            // getter 函数在触发事件时调用，调用时会传入它的作用域，因此这里要加一个参数
            if (expr.type !== LITERAL) {
                push(args, UNDEFINED); // method
                push(args, UNDEFINED); // args
                push(args, stringifyFunction(CODE_RETURN + stringifyExpressionArg(expr), ARG_STACK));
            }
        }
    }
    return toCall(renderName, args);
};
nodeGenerator[SPREAD] = function (node) {
    return toCall(RENDER_SPREAD_VNODE, [
        renderExpression(node.expr, TRUE, node.binding)
    ]);
};
nodeGenerator[TEXT] = function (node) {
    const result = toString$1(node.text);
    if (last(collectStack) && !last(joinStack)) {
        return toCall(RENDER_TEXT_VNODE, [
            result
        ]);
    }
    return result;
};
nodeGenerator[EXPRESSION] = function (node) {
    // 强制保留 isStringRequired 参数，减少运行时判断参数是否存在
    // 因为还有 stack 参数呢，各种判断真的很累
    if (last(collectStack) && !last(joinStack)) {
        return stringifyExpressionVnode(node.expr, isStringRequired);
    }
    return stringifyExpression(node.expr, isStringRequired);
};
nodeGenerator[IF] = function (node) {
    return stringifyIf(node, node.stub);
};
nodeGenerator[EACH] = function (node) {
    return toCall(RENDER_EACH, [
        // compiler 保证了 children 一定有值
        stringifyFunction(stringifyChildren(node.children, node.isComplex)),
        renderExpression(node.from, TRUE),
        node.to ? renderExpression(node.to, TRUE) : UNDEFINED,
        node.equal ? TRUE$1 : UNDEFINED,
        node.index ? toString$1(node.index) : UNDEFINED
    ]);
};
nodeGenerator[PARTIAL] = function (node) {
    return toCall(RENDER_PARTIAL, [
        toString$1(node.name),
        // compiler 保证了 children 一定有值
        stringifyFunction(stringifyChildren(node.children, node.isComplex))
    ]);
};
nodeGenerator[IMPORT] = function (node) {
    return toCall(RENDER_IMPORT, [
        toString$1(node.name)
    ]);
};
function generate$1(node) {
    if (!codePrefix) {
        codePrefix = `function(${join([
            RENDER_EXPRESSION_IDENTIFIER,
            RENDER_EXPRESSION_MEMBER_KEYPATH,
            RENDER_EXPRESSION_MEMBER_LITERAL,
            RENDER_EXPRESSION_CALL,
            RENDER_TEXT_VNODE,
            RENDER_ATTRIBUTE_VNODE,
            RENDER_PROPERTY_VNODE,
            RENDER_LAZY_VNODE,
            RENDER_TRANSITION_VNODE,
            RENDER_BINDING_VNODE,
            RENDER_MODEL_VNODE,
            RENDER_EVENT_METHOD_VNODE,
            RENDER_EVENT_NAME_VNODE,
            RENDER_DIRECTIVE_VNODE,
            RENDER_SPREAD_VNODE,
            RENDER_ELEMENT_VNODE,
            RENDER_SLOT,
            RENDER_PARTIAL,
            RENDER_IMPORT,
            RENDER_EACH,
            TO_STRING,
        ], COMMA)}){${CODE_RETURN}`;
    }
    return codePrefix + nodeGenerator[node.type](node) + '}';
}

function setPair(target, name, key, value) {
    const data = target[name] || (target[name] = {});
    data[key] = value;
}
const KEY_DIRECTIVES = 'directives';
function render(context, template, filters, partials, directives, transitions) {
    let $scope = { $keypath: EMPTY_STRING }, $stack = [$scope], $vnode, vnodeStack = [], localPartials = {}, findValue = function (stack, index, key, lookup, depIgnore, defaultKeypath) {
        let scope = stack[index], keypath = join$1(scope.$keypath, key), value = stack, holder$1 = holder;
        // 如果最后还是取不到值，用回最初的 keypath
        if (isUndef(defaultKeypath)) {
            defaultKeypath = keypath;
        }
        // 如果取的是 scope 上直接有的数据，如 $keypath
        if (isDef(scope[key])) {
            value = scope[key];
        }
        // 如果取的是数组项，则要更进一步
        else if (isDef(scope.$item)) {
            scope = scope.$item;
            // 到这里 scope 可能为空
            // 比如 new Array(10) 然后遍历这个数组，每一项肯定是空
            // 取 this
            if (key === EMPTY_STRING) {
                value = scope;
            }
            // 取 this.xx
            else if (scope != NULL && isDef(scope[key])) {
                value = scope[key];
            }
        }
        if (value === stack) {
            // 正常取数据
            value = context.get(keypath, stack, depIgnore);
            if (value === stack) {
                if (lookup && index > 0) {
                    {
                        debug(`"${keypath}" can't be found in the current context, start looking up.`);
                    }
                    return findValue(stack, index - 1, key, lookup, depIgnore, defaultKeypath);
                }
                // 到头了，最后尝试过滤器
                const result = get(filters, key);
                if (result) {
                    holder$1 = result;
                    holder$1.keypath = key;
                }
                else {
                    holder$1.value = UNDEFINED;
                    holder$1.keypath = defaultKeypath;
                }
                return holder$1;
            }
        }
        holder$1.value = value;
        holder$1.keypath = keypath;
        return holder$1;
    }, createEventListener = function (type) {
        return function (event, data) {
            // 事件名称相同的情况，只可能是监听 DOM 事件，比如写一个 Button 组件
            // <button on-click="click"> 纯粹的封装了一个原生 click 事件
            if (type !== event.type) {
                event = new CustomEvent(type, event);
            }
            context.fire(event, data);
        };
    }, createMethodListener = function (name, args, stack) {
        return function (event, data) {
            const method = context[name];
            if (event instanceof CustomEvent) {
                let result = UNDEFINED;
                if (args) {
                    const scope = last(stack);
                    if (scope) {
                        scope.$event = event;
                        scope.$data = data;
                        result = execute(method, context, args(stack));
                        scope.$event =
                            scope.$data = UNDEFINED;
                    }
                }
                else {
                    result = execute(method, context, data ? [event, data] : event);
                }
                return result;
            }
            else {
                execute(method, context, args ? args(stack) : UNDEFINED);
            }
        };
    }, createGetter = function (getter, stack) {
        return function () {
            return getter(stack);
        };
    }, renderTextVnode = function (text) {
        const vnodeList = last(vnodeStack);
        if (vnodeList) {
            const lastVnode = last(vnodeList);
            if (lastVnode && lastVnode.isText) {
                lastVnode.text += text;
            }
            else {
                const textVnode = {
                    isText: TRUE,
                    text,
                    context,
                    keypath: $scope.$keypath,
                };
                push(vnodeList, textVnode);
            }
        }
    }, renderAttributeVnode = function (name, value) {
        if ($vnode.isComponent) {
            setPair($vnode, 'props', name, value);
        }
        else {
            setPair($vnode, 'nativeAttrs', name, { name, value });
        }
    }, renderPropertyVnode = function (name, hint, value) {
        setPair($vnode, 'nativeProps', name, { name, value, hint });
    }, renderLazyVnode = function (name, value) {
        setPair($vnode, 'lazy', name, value);
    }, renderTransitionVnode = function (name) {
        $vnode.transition = transitions[name];
        {
            if (!$vnode.transition) {
                fatal(`Transition "${name}" can't be found.`);
            }
        }
    }, renderBindingVnode = function (name, holder, hint) {
        const key = join$1(DIRECTIVE_BINDING, name);
        setPair($vnode, KEY_DIRECTIVES, key, {
            ns: DIRECTIVE_BINDING,
            name,
            key,
            hooks: directives[DIRECTIVE_BINDING],
            binding: holder.keypath,
            hint,
        });
        return holder.value;
    }, renderModelVnode = function (holder) {
        setPair($vnode, KEY_DIRECTIVES, DIRECTIVE_MODEL, {
            ns: DIRECTIVE_MODEL,
            name: EMPTY_STRING,
            key: DIRECTIVE_MODEL,
            value: holder.value,
            binding: holder.keypath,
            hooks: directives[DIRECTIVE_MODEL]
        });
    }, renderEventMethodVnode = function (name, key, value, method, args) {
        setPair($vnode, KEY_DIRECTIVES, key, {
            ns: DIRECTIVE_EVENT,
            name,
            key,
            value,
            hooks: directives[DIRECTIVE_EVENT],
            handler: createMethodListener(method, args, $stack)
        });
    }, renderEventNameVnode = function (name, key, value, event) {
        setPair($vnode, KEY_DIRECTIVES, key, {
            ns: DIRECTIVE_EVENT,
            name,
            key,
            value,
            hooks: directives[DIRECTIVE_EVENT],
            handler: createEventListener(event)
        });
    }, renderDirectiveVnode = function (name, key, value, method, args, getter) {
        const hooks = directives[name];
        {
            if (!hooks) {
                fatal(`Directive ${name} can't be found.`);
            }
        }
        setPair($vnode, KEY_DIRECTIVES, key, {
            ns: DIRECTIVE_CUSTOM,
            name,
            key,
            value,
            hooks,
            getter: getter ? createGetter(getter, $stack) : UNDEFINED,
            handler: method ? createMethodListener(method, args, $stack) : UNDEFINED,
        });
    }, renderSpreadVnode = function (holder) {
        const { value, keypath } = holder;
        // 如果为 null 或 undefined，则不需要 warn
        if (value != NULL) {
            // 数组也算一种对象，要排除掉
            if (object(value) && !array(value)) {
                each$2(value, function (value, key) {
                    setPair($vnode, 'props', key, value);
                });
                if (keypath) {
                    const key = join$1(DIRECTIVE_BINDING, keypath);
                    setPair($vnode, KEY_DIRECTIVES, key, {
                        ns: DIRECTIVE_BINDING,
                        name: EMPTY_STRING,
                        key,
                        hooks: directives[DIRECTIVE_BINDING],
                        binding: join$1(keypath, RAW_WILDCARD),
                    });
                }
            }
        }
    }, renderElementVnode = function (vnode, tag, attrs, childs, slots) {
        if (tag) {
            const componentName = context.get(tag);
            {
                if (!componentName) {
                    warn(`Dynamic component "${tag}" can't be found.`);
                }
            }
            vnode.tag = componentName;
        }
        if (attrs) {
            $vnode = vnode;
            attrs();
            $vnode = UNDEFINED;
        }
        // childs 和 slots 不可能同时存在
        if (childs) {
            vnodeStack.push(vnode.children = []);
            childs();
            pop(vnodeStack);
        }
        else if (slots) {
            const renderSlots = {};
            each$2(slots, function (slot, name) {
                vnodeStack.push([]);
                slot();
                const vnodes = pop(vnodeStack);
                renderSlots[name] = vnodes.length ? vnodes : UNDEFINED;
            });
            vnode.slots = renderSlots;
        }
        vnode.context = context;
        vnode.keypath = $scope.$keypath;
        const vnodeList = last(vnodeStack);
        if (vnodeList) {
            push(vnodeList, vnode);
        }
        return vnode;
    }, renderExpressionIdentifier = function (name, lookup, offset, holder, depIgnore, stack) {
        const myStack = stack || $stack, result = findValue(myStack, myStack.length - ((offset || 0) + 1), name, lookup, depIgnore);
        return holder ? result : result.value;
    }, renderExpressionMemberKeypath = function (identifier, runtimeKeypath) {
        unshift(runtimeKeypath, identifier);
        return join(runtimeKeypath, separator);
    }, renderExpressionMemberLiteral = function (value, staticKeypath, runtimeKeypath, holder$1) {
        if (isDef(runtimeKeypath)) {
            staticKeypath = join(runtimeKeypath, separator);
        }
        const match = get(value, staticKeypath);
        holder.keypath = UNDEFINED;
        holder.value = match ? match.value : UNDEFINED;
        return holder$1 ? holder : holder.value;
    }, renderExpressionCall = function (fn, args, holder$1) {
        holder.keypath = UNDEFINED;
        // 当 holder 为 true, args 为空时，args 会传入 false
        holder.value = execute(fn, context, args || UNDEFINED);
        return holder$1 ? holder : holder.value;
    }, 
    // <slot name="xx"/>
    renderSlot = function (name, defaultRender) {
        const vnodeList = last(vnodeStack), vnodes = context.get(name);
        if (vnodeList) {
            if (vnodes) {
                each(vnodes, function (vnode) {
                    push(vnodeList, vnode);
                    vnode.slot = name;
                    vnode.parent = context;
                });
            }
            else if (defaultRender) {
                defaultRender();
            }
        }
    }, 
    // {{#partial name}}
    //   xx
    // {{/partial}}
    renderPartial = function (name, render) {
        localPartials[name] = render;
    }, 
    // {{> name}}
    renderImport = function (name) {
        if (localPartials[name]) {
            localPartials[name]();
        }
        else {
            const partial = partials[name];
            if (partial) {
                partial(renderExpressionIdentifier, renderExpressionMemberKeypath, renderExpressionMemberLiteral, renderExpressionCall, renderTextVnode, renderAttributeVnode, renderPropertyVnode, renderLazyVnode, renderTransitionVnode, renderBindingVnode, renderModelVnode, renderEventMethodVnode, renderEventNameVnode, renderDirectiveVnode, renderSpreadVnode, renderElementVnode, renderSlot, renderPartial, renderImport, renderEach, toString);
            }
            else {
                fatal(`Partial "${name}" can't be found.`);
            }
        }
    }, eachHandler = function (generate, item, key, keypath, index, length) {
        const lastScope = $scope, lastStack = $stack;
        // each 会改变 keypath
        $scope = { $keypath: keypath };
        $stack = lastStack.concat($scope);
        // 避免模板里频繁读取 list.length
        if (isDef(length)) {
            $scope.$length = length;
        }
        // 业务层是否写了 expr:index
        if (index) {
            $scope[index] = key;
        }
        // 无法通过 context.get($keypath + key) 读取到数据的场景
        // 必须把 item 写到 scope
        if (!keypath) {
            $scope.$item = item;
        }
        generate();
        $scope = lastScope;
        $stack = lastStack;
    }, renderEach = function (generate, from, to, equal, index) {
        const fromValue = from.value, fromKeypath = from.keypath;
        if (to) {
            let toValue = to.value, count = 0;
            if (fromValue < toValue) {
                if (equal) {
                    for (let i = fromValue; i <= toValue; i++) {
                        eachHandler(generate, i, count++, EMPTY_STRING, index);
                    }
                }
                else {
                    for (let i = fromValue; i < toValue; i++) {
                        eachHandler(generate, i, count++, EMPTY_STRING, index);
                    }
                }
            }
            else {
                if (equal) {
                    for (let i = fromValue; i >= toValue; i--) {
                        eachHandler(generate, i, count++, EMPTY_STRING, index);
                    }
                }
                else {
                    for (let i = fromValue; i > toValue; i--) {
                        eachHandler(generate, i, count++, EMPTY_STRING, index);
                    }
                }
            }
        }
        else {
            if (array(fromValue)) {
                for (let i = 0, length = fromValue.length; i < length; i++) {
                    eachHandler(generate, fromValue[i], i, fromKeypath
                        ? join$1(fromKeypath, EMPTY_STRING + i)
                        : EMPTY_STRING, index, length);
                }
            }
            else if (object(fromValue)) {
                for (let key in fromValue) {
                    eachHandler(generate, fromValue[key], key, fromKeypath
                        ? join$1(fromKeypath, key)
                        : EMPTY_STRING, index);
                }
            }
        }
    };
    return template(renderExpressionIdentifier, renderExpressionMemberKeypath, renderExpressionMemberLiteral, renderExpressionCall, renderTextVnode, renderAttributeVnode, renderPropertyVnode, renderLazyVnode, renderTransitionVnode, renderBindingVnode, renderModelVnode, renderEventMethodVnode, renderEventNameVnode, renderDirectiveVnode, renderSpreadVnode, renderElementVnode, renderSlot, renderPartial, renderImport, renderEach, toString);
}

// 这里先写 IE9 支持的接口
let innerText = 'textContent', innerHTML = 'innerHTML', findElement = function (selector) {
    const node = DOCUMENT.querySelector(selector);
    if (node) {
        return node;
    }
}, addEventListener = function (node, type, listener) {
    node.addEventListener(type, listener, FALSE);
}, removeEventListener = function (node, type, listener) {
    node.removeEventListener(type, listener, FALSE);
}, 
// IE9 不支持 classList
addElementClass = function (node, className) {
    node.classList.add(className);
}, removeElementClass = function (node, className) {
    node.classList.remove(className);
}, createEvent = function (event, node) {
    return event;
};
{
    if (DOCUMENT) {
        // 此时 document.body 不一定有值，比如 script 放在 head 里
        if (!DOCUMENT.documentElement.classList) {
            addElementClass = function (node, className) {
                const classes = node.className.split(CHAR_WHITESPACE);
                if (!has(classes, className)) {
                    push(classes, className);
                    node.className = join(classes, CHAR_WHITESPACE);
                }
            };
            removeElementClass = function (node, className) {
                const classes = node.className.split(CHAR_WHITESPACE);
                if (remove(classes, className)) {
                    node.className = join(classes, CHAR_WHITESPACE);
                }
            };
        }
    }
}
const CHAR_WHITESPACE = ' ', 
/**
 * 绑定在 HTML 元素上的事件发射器
 */
EMITTER = '$emitter', 
/**
 * 跟输入事件配套使用的事件
 */
COMPOSITION_START = 'compositionstart', 
/**
 * 跟输入事件配套使用的事件
 */
COMPOSITION_END = 'compositionend', domain = 'http://www.w3.org/', namespaces = {
    svg: domain + '2000/svg',
}, specialEvents = {};
specialEvents[EVENT_MODEL] = {
    on(node, listener) {
        let locked = FALSE;
        on(node, COMPOSITION_START, listener[COMPOSITION_START] = function () {
            locked = TRUE;
        });
        on(node, COMPOSITION_END, listener[COMPOSITION_END] = function (event) {
            locked = FALSE;
            listener(event);
        });
        addEventListener(node, EVENT_INPUT, listener[EVENT_INPUT] = function (event) {
            if (!locked) {
                listener(event);
            }
        });
    },
    off(node, listener) {
        off(node, COMPOSITION_START, listener[COMPOSITION_START]);
        off(node, COMPOSITION_END, listener[COMPOSITION_END]);
        removeEventListener(node, EVENT_INPUT, listener[EVENT_INPUT]);
        listener[COMPOSITION_START] =
            listener[COMPOSITION_END] =
                listener[EVENT_INPUT] = UNDEFINED;
    }
};
function createElement$2(tag, isSvg) {
    return isSvg
        ? DOCUMENT.createElementNS(namespaces.svg, tag)
        : DOCUMENT.createElement(tag);
}
function createText$1(text) {
    return DOCUMENT.createTextNode(text);
}
function createComment(text) {
    return DOCUMENT.createComment(text);
}
function prop(node, name, value) {
    if (isDef(value)) {
        set(node, name, value, FALSE);
    }
    else {
        const holder = get(node, name);
        if (holder) {
            return holder.value;
        }
    }
}
function removeProp(node, name, hint) {
    set(node, name, hint === HINT_BOOLEAN
        ? FALSE
        : EMPTY_STRING, FALSE);
}
function attr(node, name, value) {
    if (isDef(value)) {
        node.setAttribute(name, value);
    }
    else {
        // value 还可能是 null
        const value = node.getAttribute(name);
        if (value != NULL) {
            return value;
        }
    }
}
function removeAttr(node, name) {
    node.removeAttribute(name);
}
function before(parentNode, node, beforeNode) {
    parentNode.insertBefore(node, beforeNode);
}
function append(parentNode, node) {
    parentNode.appendChild(node);
}
function replace(parentNode, node, oldNode) {
    parentNode.replaceChild(node, oldNode);
}
function remove$2(parentNode, node) {
    parentNode.removeChild(node);
}
function parent(node) {
    const { parentNode } = node;
    if (parentNode) {
        return parentNode;
    }
}
function next(node) {
    const { nextSibling } = node;
    if (nextSibling) {
        return nextSibling;
    }
}
const find = findElement;
function tag(node) {
    if (node.nodeType === 1) {
        return lower(node.tagName);
    }
}
function text(node, text, isStyle, isOption) {
    if (isDef(text)) {
        {
            node[innerText] = text;
        }
    }
    else {
        return node[innerText];
    }
}
function html(node, html, isStyle, isOption) {
    if (isDef(html)) {
        {
            node[innerHTML] = html;
        }
    }
    else {
        return node[innerHTML];
    }
}
const addClass = addElementClass;
const removeClass = removeElementClass;
function on(node, type, listener, context) {
    const emitter = node[EMITTER] || (node[EMITTER] = new Emitter()), nativeListeners = emitter.nativeListeners || (emitter.nativeListeners = {});
    // 一个元素，相同的事件，只注册一个 native listener
    if (!nativeListeners[type]) {
        // 特殊事件
        const special = specialEvents[type], 
        // 唯一的原生监听器
        nativeListener = function (event) {
            const customEvent = event instanceof CustomEvent
                ? event
                : new CustomEvent(event.type, createEvent(event, node));
            if (customEvent.type !== type) {
                customEvent.type = type;
            }
            emitter.fire(type, [customEvent]);
        };
        nativeListeners[type] = nativeListener;
        if (special) {
            special.on(node, nativeListener);
        }
        else {
            addEventListener(node, type, nativeListener);
        }
    }
    emitter.on(type, {
        fn: listener,
        ctx: context,
    });
}
function off(node, type, listener) {
    const emitter = node[EMITTER], { listeners, nativeListeners } = emitter;
    // emitter 会根据 type 和 listener 参数进行适当的删除
    emitter.off(type, listener);
    // 如果注册的 type 事件都解绑了，则去掉原生监听器
    if (nativeListeners && !emitter.has(type)) {
        const special = specialEvents[type], nativeListener = nativeListeners[type];
        if (special) {
            special.off(node, nativeListener);
        }
        else {
            removeEventListener(node, type, nativeListener);
        }
        delete nativeListeners[type];
    }
    if (falsy$2(listeners)) {
        node[EMITTER] = UNDEFINED;
    }
}
function addSpecialEvent(type, hooks) {
    {
        if (specialEvents[type]) {
            error(`Special event "${type}" is existed.`);
        }
        info(`Special event "${type}" add success.`);
    }
    specialEvents[type] = hooks;
}

var domApi = /*#__PURE__*/Object.freeze({
  createElement: createElement$2,
  createText: createText$1,
  createComment: createComment,
  prop: prop,
  removeProp: removeProp,
  attr: attr,
  removeAttr: removeAttr,
  before: before,
  append: append,
  replace: replace,
  remove: remove$2,
  parent: parent,
  next: next,
  find: find,
  tag: tag,
  text: text,
  html: html,
  addClass: addClass,
  removeClass: removeClass,
  on: on,
  off: off,
  addSpecialEvent: addSpecialEvent
});

/**
 * 计算属性
 *
 * 可配置 cache、deps、get、set 等
 */
class Computed {
    constructor(keypath, sync, cache, deps, observer, getter, setter) {
        const instance = this;
        instance.keypath = keypath;
        instance.cache = cache;
        instance.deps = deps;
        instance.context = observer.context;
        instance.observer = observer;
        instance.getter = getter;
        instance.setter = setter;
        instance.unique = {};
        instance.watcher = function ($0, $1, $2) {
            // 计算属性的依赖变了会走进这里
            const oldValue = instance.value, newValue = instance.get(TRUE);
            if (newValue !== oldValue) {
                observer.diff(keypath, newValue, oldValue);
            }
        };
        instance.watcherOptions = {
            sync,
            watcher: instance.watcher
        };
        if (instance.fixed = !falsy(deps)) {
            each(deps, function (dep) {
                observer.watch(dep, instance.watcherOptions);
            });
        }
    }
    /**
     * 读取计算属性的值
     *
     * @param force 是否强制刷新缓存
     */
    get(force) {
        const instance = this, { getter, context } = instance;
        // 禁用缓存
        if (!instance.cache) {
            instance.value = execute(getter, context);
        }
        // 减少取值频率，尤其是处理复杂的计算规则
        else if (force || !has$2(instance, RAW_VALUE)) {
            // 如果写死了依赖，则不需要收集依赖
            if (instance.fixed) {
                instance.value = execute(getter, context);
            }
            else {
                // 清空上次收集的依赖
                instance.unbind();
                // 开始收集新的依赖
                const lastComputed = Computed.current;
                Computed.current = instance;
                instance.value = execute(getter, context);
                // 绑定新的依赖
                instance.bind();
                Computed.current = lastComputed;
            }
        }
        return instance.value;
    }
    set(value) {
        const { setter, context } = this;
        if (setter) {
            setter.call(context, value);
        }
    }
    /**
     * 添加依赖
     *
     * 这里只是为了保证依赖唯一，最后由 bind() 实现绑定
     *
     * @param dep
     */
    add(dep) {
        this.unique[dep] = TRUE;
    }
    /**
     * 绑定依赖
     */
    bind() {
        const { unique, deps, observer, watcherOptions } = this;
        each$2(unique, function (_, dep) {
            push(deps, dep);
            observer.watch(dep, watcherOptions);
        });
        // 用完重置
        // 方便下次收集依赖
        this.unique = {};
    }
    /**
     * 解绑依赖
     */
    unbind() {
        const { deps, observer, watcher } = this;
        each(deps, function (dep) {
            observer.unwatch(dep, watcher);
        }, TRUE);
        deps.length = 0;
    }
}

/**
 * 从 keypath 数组中选择和 keypath 最匹配的那一个
 *
 * @param sorted 经过排序的 keypath 数组
 * @param keypath
 */
function matchBest (sorted, keypath) {
    let result;
    each(sorted, function (prefix) {
        const length = match(keypath, prefix);
        if (length >= 0) {
            result = {
                name: prefix,
                prop: slice(keypath, length)
            };
            return FALSE;
        }
    });
    return result;
}

function readValue (source, keypath) {
    if (source == NULL || keypath === EMPTY_STRING) {
        return source;
    }
    const result = get(source, keypath);
    if (result) {
        return result.value;
    }
}

/**
 * 对比新旧数组
 *
 * @param newValue
 * @param oldValue
 * @param callback
 */
function diffString (newValue, oldValue, callback) {
    const newIsString = string(newValue), oldIsString = string(oldValue);
    if (newIsString || oldIsString) {
        callback(RAW_LENGTH, newIsString ? newValue.length : UNDEFINED, oldIsString ? oldValue.length : UNDEFINED);
        return TRUE;
    }
}

/**
 * 对比新旧数组
 *
 * @param newValue
 * @param oldValue
 * @param callback
 */
function diffArray (newValue, oldValue, callback) {
    const newIsArray = array(newValue), oldIsArray = array(oldValue);
    if (newIsArray || oldIsArray) {
        const newLength = newIsArray ? newValue.length : UNDEFINED, oldLength = oldIsArray ? oldValue.length : UNDEFINED;
        callback(RAW_LENGTH, newLength, oldLength);
        for (let i = 0, length = Math.max(newLength || 0, oldLength || 0); i < length; i++) {
            callback('' + i, newValue ? newValue[i] : UNDEFINED, oldValue ? oldValue[i] : UNDEFINED);
        }
        return TRUE;
    }
}

/**
 * 对比新旧对象
 *
 * @param newValue
 * @param oldValue
 * @param callback
 */
function diffObject (newValue, oldValue, callback) {
    const newIsObject = object(newValue), oldIsObject = object(oldValue);
    if (newIsObject || oldIsObject) {
        newValue = newIsObject ? newValue : EMPTY_OBJECT;
        oldValue = oldIsObject ? oldValue : EMPTY_OBJECT;
        if (newIsObject) {
            each$2(newValue, function (value, key) {
                if (value !== oldValue[key]) {
                    callback(key, value, oldValue[key]);
                }
            });
        }
        if (oldIsObject) {
            each$2(oldValue, function (value, key) {
                if (value !== newValue[key]) {
                    callback(key, newValue[key], value);
                }
            });
        }
    }
}

function diffRecursion(keypath, newValue, oldValue, watchFuzzyKeypaths, callback) {
    const diff = function (subKeypath, subNewValue, subOldValue) {
        if (subNewValue !== subOldValue) {
            const newKeypath = join$1(keypath, subKeypath);
            each(watchFuzzyKeypaths, function (fuzzyKeypath) {
                if (isDef(matchFuzzy(newKeypath, fuzzyKeypath))) {
                    callback(fuzzyKeypath, newKeypath, subNewValue, subOldValue);
                }
            });
            diffRecursion(newKeypath, subNewValue, subOldValue, watchFuzzyKeypaths, callback);
        }
    };
    diffString(newValue, oldValue, diff)
        || diffArray(newValue, oldValue, diff)
        || diffObject(newValue, oldValue, diff);
}

function diffWatcher (keypath, newValue, oldValue, watcher, isRecursive, callback) {
    let fuzzyKeypaths;
    // 遍历监听的 keypath，如果未被监听，则无需触发任何事件
    each$2(watcher, function (_, watchKeypath) {
        // 模糊监听，如 users.*.name
        if (isFuzzy(watchKeypath)) {
            // 如果当前修改的是 users.0 整个对象
            // users.0 和 users.*.name 无法匹配
            // 此时要知道设置 users.0 到底会不会改变 users.*.name 需要靠递归了
            // 如果匹配，则无需递归
            if (isDef(matchFuzzy(keypath, watchKeypath))) {
                callback(watchKeypath, keypath, newValue, oldValue);
            }
            else if (isRecursive) {
                if (fuzzyKeypaths) {
                    push(fuzzyKeypaths, watchKeypath);
                }
                else {
                    fuzzyKeypaths = [watchKeypath];
                }
            }
            return;
        }
        // 不是模糊匹配，直接靠前缀匹配
        // 比如监听的是 users.0.name，此时修改 users.0，则直接读出子属性值，判断是否相等
        const length = match(watchKeypath, keypath);
        if (length >= 0) {
            const subKeypath = slice(watchKeypath, length), subNewValue = readValue(newValue, subKeypath), subOldValue = readValue(oldValue, subKeypath);
            if (subNewValue !== subOldValue) {
                callback(watchKeypath, watchKeypath, subNewValue, subOldValue);
            }
        }
    });
    // 存在模糊匹配的需求
    // 必须对数据进行递归
    // 性能确实会慢一些，但是很好用啊，几乎可以监听所有的数据
    if (fuzzyKeypaths) {
        diffRecursion(keypath, newValue, oldValue, fuzzyKeypaths, callback);
    }
}

/**
 * 触发异步变化时，用此函数过滤下，哪些 listener 应该执行
 *
 * @param item
 * @param data
 */
function filterWatcher (_, args, options) {
    if (options.count && args) {
        // 采用计数器的原因是，同一个 options 可能执行多次
        // 比如监听 user.*，如果同批次修改了 user.name 和 user.age
        // 这个监听器会调用多次，如果第一次执行就把 count 干掉了，第二次就无法执行了
        options.count--;
        // 新旧值不相等
        return args[0] !== args[1];
    }
}

// 避免频繁创建对象
const optionsHolder = {
    watcher: EMPTY_FUNCTION
};
/**
 * 格式化 watch options
 *
 * @param options
 */
function formatWatcherOptions (options, immediate) {
    if (func(options)) {
        optionsHolder.watcher = options;
        optionsHolder.immediate = immediate === TRUE;
        return optionsHolder;
    }
    if (options && options.watcher) {
        return options;
    }
    {
        fatal(`watcher should be a function or object.`);
    }
}

/**
 * 观察者有两种观察模式：
 *
 * 1. 同步监听
 * 2. 异步监听
 *
 * 对于`计算属性`这种需要实时变化的对象，即它的依赖变了，它需要立即跟着变，否则会出现不一致的问题
 * 这种属于同步监听
 *
 * 对于外部调用 observer.watch('keypath', listener)，属于异步监听，它只关心是否变了，而不关心是否是立即触发的
 */
class Observer {
    constructor(data, context) {
        const instance = this;
        instance.data = data || {};
        instance.context = context || instance;
        instance.nextTask = new NextTask();
        instance.syncEmitter = new Emitter();
        instance.asyncEmitter = new Emitter();
        instance.asyncChanges = {};
    }
    /**
     * 获取数据
     *
     * @param keypath
     * @param defaultValue
     * @param depIgnore
     * @return
     */
    get(keypath, defaultValue, depIgnore) {
        const instance = this, currentComputed = Computed.current, { data, computed, reversedComputedKeys } = instance;
        // 传入 '' 获取整个 data
        if (keypath === EMPTY_STRING) {
            return data;
        }
        // 调用 get 时，外面想要获取依赖必须设置是谁在收集依赖
        // 如果没设置，则跳过依赖收集
        if (currentComputed && !depIgnore) {
            currentComputed.add(keypath);
        }
        let result, target;
        if (computed) {
            target = computed[keypath];
            if (target) {
                return target.get();
            }
            if (reversedComputedKeys) {
                const match = matchBest(reversedComputedKeys, keypath);
                if (match && match.prop) {
                    result = get(computed[match.name].get(), match.prop);
                }
            }
        }
        if (!result) {
            result = get(data, keypath);
        }
        return result ? result.value : defaultValue;
    }
    /**
     * 更新数据
     *
     * @param keypath
     * @param value
     */
    set(keypath, value) {
        const instance = this, { data, computed, reversedComputedKeys } = instance, setValue = function (newValue, keypath) {
            const oldValue = instance.get(keypath);
            if (newValue === oldValue) {
                return;
            }
            let target;
            if (computed) {
                target = computed[keypath];
                if (target) {
                    target.set(newValue);
                }
                if (reversedComputedKeys) {
                    const match = matchBest(reversedComputedKeys, keypath);
                    if (match && match.prop) {
                        target = computed[match.name];
                        if (target) {
                            const targetValue = target.get();
                            if (object(targetValue)) {
                                set(targetValue, match.prop, newValue);
                            }
                        }
                    }
                }
            }
            if (!target) {
                set(data, keypath, newValue);
            }
            instance.diff(keypath, newValue, oldValue);
        };
        if (string(keypath)) {
            setValue(value, keypath);
        }
        else if (object(keypath)) {
            each$2(keypath, setValue);
        }
    }
    /**
     * 同步调用的 diff，用于触发 syncEmitter，以及唤醒 asyncEmitter
     *
     * @param keypath
     * @param newValue
     * @param oldValue
     */
    diff(keypath, newValue, oldValue) {
        const instance = this, { syncEmitter, asyncEmitter, asyncChanges } = instance, 
        /**
         * 我们认为 $ 开头的变量是不可递归的
         * 比如浏览器中常见的 $0 表示当前选中元素
         * DOM 元素是不能递归的
         */
        isRecursive = codeAt(keypath) !== 36;
        diffWatcher(keypath, newValue, oldValue, syncEmitter.listeners, isRecursive, function (watchKeypath, keypath, newValue, oldValue) {
            syncEmitter.fire(watchKeypath, [newValue, oldValue, keypath]);
        });
        /**
         * 此处有坑，举个例子
         *
         * observer.watch('a', function () {})
         *
         * observer.set('a', 1)
         *
         * observer.watch('a', function () {})
         *
         * 这里，第一个 watcher 应该触发，但第二个不应该，因为它绑定监听时，值已经是最新的了
         */
        diffWatcher(keypath, newValue, oldValue, asyncEmitter.listeners, isRecursive, function (watchKeypath, keypath, newValue, oldValue) {
            each(asyncEmitter.listeners[watchKeypath], function (item) {
                item.count++;
            });
            const { keypaths } = asyncChanges[keypath] || (asyncChanges[keypath] = { value: oldValue, keypaths: [] });
            if (!has(keypaths, watchKeypath)) {
                push(keypaths, watchKeypath);
            }
            if (!instance.pending) {
                instance.pending = TRUE;
                instance.nextTask.append(function () {
                    if (instance.pending) {
                        instance.pending = UNDEFINED;
                        instance.diffAsync();
                    }
                });
            }
        });
    }
    /**
     * 异步触发的 diff
     */
    diffAsync() {
        const instance = this, { asyncEmitter, asyncChanges } = instance;
        instance.asyncChanges = {};
        each$2(asyncChanges, function (change, keypath) {
            const args = [instance.get(keypath), change.value, keypath];
            // 不能在这判断新旧值是否相同，相同就不 fire
            // 因为前面标记了 count，在这中断会导致 count 无法清除
            each(change.keypaths, function (watchKeypath) {
                asyncEmitter.fire(watchKeypath, args, filterWatcher);
            });
        });
    }
    /**
     * 添加计算属性
     *
     * @param keypath
     * @param computed
     */
    addComputed(keypath, options) {
        let cache = TRUE, sync = TRUE, deps = [], getter, setter;
        if (func(options)) {
            getter = options;
        }
        else if (object(options)) {
            const computedOptions = options;
            if (boolean(computedOptions.cache)) {
                cache = computedOptions.cache;
            }
            if (boolean(computedOptions.sync)) {
                sync = computedOptions.sync;
            }
            // 因为可能会修改 deps，所以这里创建一个新的 deps，避免影响外部传入的 deps
            if (array(computedOptions.deps)) {
                deps = copy(computedOptions.deps);
            }
            if (func(computedOptions.get)) {
                getter = computedOptions.get;
            }
            if (func(computedOptions.set)) {
                setter = computedOptions.set;
            }
        }
        if (getter) {
            const instance = this, computed = new Computed(keypath, sync, cache, deps, instance, getter, setter);
            if (!instance.computed) {
                instance.computed = {};
            }
            instance.computed[keypath] = computed;
            instance.reversedComputedKeys = sort(instance.computed, TRUE);
            return computed;
        }
    }
    /**
     * 移除计算属性
     *
     * @param keypath
     */
    removeComputed(keypath) {
        const instance = this, { computed } = instance;
        if (computed && has$2(computed, keypath)) {
            delete computed[keypath];
            instance.reversedComputedKeys = sort(computed, TRUE);
        }
    }
    /**
     * 监听数据变化
     *
     * @param keypath
     * @param watcher
     * @param immediate
     */
    watch(keypath, watcher, immediate) {
        const instance = this, { context, syncEmitter, asyncEmitter } = instance, bind = function (keypath, options) {
            const emitter = options.sync ? syncEmitter : asyncEmitter, 
            // formatWatcherOptions 保证了 options.watcher 一定存在
            listener = {
                fn: options.watcher,
                ctx: context,
                count: 0,
            };
            if (options.once) {
                listener.max = 1;
            }
            emitter.on(keypath, listener);
            if (options.immediate) {
                execute(options.watcher, context, [
                    instance.get(keypath),
                    UNDEFINED,
                    keypath
                ]);
            }
        };
        if (string(keypath)) {
            bind(keypath, formatWatcherOptions(watcher, immediate));
            return;
        }
        each$2(keypath, function (options, keypath) {
            bind(keypath, formatWatcherOptions(options));
        });
    }
    /**
     * 取消监听数据变化
     *
     * @param keypath
     * @param watcher
     */
    unwatch(keypath, watcher) {
        this.syncEmitter.off(keypath, watcher);
        this.asyncEmitter.off(keypath, watcher);
    }
    /**
     * 取反 keypath 对应的数据
     *
     * 不管 keypath 对应的数据是什么类型，操作后都是布尔型
     *
     * @param keypath
     * @return 取反后的布尔值
     */
    toggle(keypath) {
        const value = !this.get(keypath);
        this.set(keypath, value);
        return value;
    }
    /**
     * 递增 keypath 对应的数据
     *
     * 注意，最好是整型的加法，如果涉及浮点型，不保证计算正确
     *
     * @param keypath 值必须能转型成数字，如果不能，则默认从 0 开始递增
     * @param step 步进值，默认是 1
     * @param max 可以递增到的最大值，默认不限制
     */
    increase(keypath, step, max) {
        const value = toNumber(this.get(keypath), 0) + (step || 1);
        if (!number(max) || value <= max) {
            this.set(keypath, value);
            return value;
        }
    }
    /**
     * 递减 keypath 对应的数据
     *
     * 注意，最好是整型的减法，如果涉及浮点型，不保证计算正确
     *
     * @param keypath 值必须能转型成数字，如果不能，则默认从 0 开始递减
     * @param step 步进值，默认是 1
     * @param min 可以递减到的最小值，默认不限制
     */
    decrease(keypath, step, min) {
        const value = toNumber(this.get(keypath), 0) - (step || 1);
        if (!number(min) || value >= min) {
            this.set(keypath, value);
            return value;
        }
    }
    /**
     * 在数组指定位置插入元素
     *
     * @param keypath
     * @param item
     * @param index
     */
    insert(keypath, item, index) {
        let list = this.get(keypath);
        list = !array(list) ? [] : copy(list);
        const { length } = list;
        if (index === TRUE || index === length) {
            list.push(item);
        }
        else if (index === FALSE || index === 0) {
            list.unshift(item);
        }
        else if (index > 0 && index < length) {
            list.splice(index, 0, item);
        }
        else {
            return;
        }
        this.set(keypath, list);
        return TRUE;
    }
    /**
     * 在数组尾部添加元素
     *
     * @param keypath
     * @param item
     */
    append(keypath, item) {
        return this.insert(keypath, item, TRUE);
    }
    /**
     * 在数组首部添加元素
     *
     * @param keypath
     * @param item
     */
    prepend(keypath, item) {
        return this.insert(keypath, item, FALSE);
    }
    /**
     * 通过索引移除数组中的元素
     *
     * @param keypath
     * @param index
     */
    removeAt(keypath, index) {
        let list = this.get(keypath);
        if (array(list)
            && index >= 0
            && index < list.length) {
            list = copy(list);
            list.splice(index, 1);
            this.set(keypath, list);
            return TRUE;
        }
    }
    /**
     * 直接移除数组中的元素
     *
     * @param keypath
     * @param item
     */
    remove(keypath, item) {
        let list = this.get(keypath);
        if (array(list)) {
            list = copy(list);
            if (remove(list, item)) {
                this.set(keypath, list);
                return TRUE;
            }
        }
    }
    /**
     * 拷贝任意数据，支持深拷贝
     *
     * @param data
     * @param deep
     */
    copy(data, deep) {
        return copy(data, deep);
    }
    /**
     * 销毁
     */
    destroy() {
        const instance = this;
        instance.syncEmitter.off();
        instance.asyncEmitter.off();
        instance.nextTask.clear();
        clear(instance);
    }
}

/**
 * 节流调用
 *
 * @param fn 需要节制调用的函数
 * @param delay 调用的时间间隔，单位毫秒
 * @param immediate 是否立即触发
 * @return 节流函数
 */
function debounce (fn, delay, immediate) {
    let timer;
    return function () {
        if (!timer) {
            const args = toArray(arguments);
            if (immediate) {
                execute(fn, UNDEFINED, args);
            }
            timer = setTimeout(function () {
                timer = UNDEFINED;
                if (!immediate) {
                    execute(fn, UNDEFINED, args);
                }
            }, delay);
        }
    };
}

function bind(node, directive, vnode) {
    let { name, handler } = directive, { lazy } = vnode;
    if (!handler) {
        return;
    }
    if (lazy) {
        const value = lazy[name] || lazy[EMPTY_STRING];
        if (value === TRUE) {
            name = EVENT_CHANGE;
        }
        else if (value > 0) {
            handler = debounce(handler, value, 
            // 避免连续多次点击，主要用于提交表单场景
            // 移动端的 tap 事件可自行在业务层打补丁实现
            name === EVENT_CLICK || name === EVENT_TAP);
        }
    }
    if (vnode.isComponent) {
        node.on(name, handler);
        vnode.data[directive.key] = function () {
            node.off(name, handler);
        };
    }
    else {
        on(node, name, handler);
        vnode.data[directive.key] = function () {
            off(node, name, handler);
        };
    }
}
function unbind(node, directive, vnode) {
    execute(vnode.data[directive.key]);
}

var event = /*#__PURE__*/Object.freeze({
  bind: bind,
  unbind: unbind
});

function debounceIfNeeded(fn, lazy) {
    // 应用 lazy
    return lazy && lazy !== TRUE
        ? debounce(fn, lazy)
        : fn;
}
const inputControl = {
    set(node, value) {
        node.value = toString(value);
    },
    sync(node, keypath, context) {
        context.set(keypath, node.value);
    },
    name: RAW_VALUE
}, radioControl = {
    set(node, value) {
        node.checked = node.value === toString(value);
    },
    sync(node, keypath, context) {
        if (node.checked) {
            context.set(keypath, node.value);
        }
    },
    name: 'checked'
}, checkboxControl = {
    set(node, value) {
        node.checked = array(value)
            ? has(value, node.value, FALSE)
            : !!value;
    },
    sync(node, keypath, context) {
        const value = context.get(keypath);
        if (array(value)) {
            if (node.checked) {
                context.append(keypath, node.value);
            }
            else {
                context.removeAt(keypath, indexOf(value, node.value, FALSE));
            }
        }
        else {
            context.set(keypath, node.checked);
        }
    },
    name: 'checked'
}, selectControl = {
    set(node, value) {
        each(toArray(node.options), node.multiple
            ? function (option) {
                option.selected = has(value, option.value, FALSE);
            }
            : function (option, index) {
                if (option.value == value) {
                    node.selectedIndex = index;
                    return FALSE;
                }
            });
    },
    sync(node, keypath, context) {
        const { options } = node;
        if (node.multiple) {
            const values = [];
            each(toArray(options), function (option) {
                if (option.selected) {
                    push(values, option.value);
                }
            });
            context.set(keypath, values);
        }
        else {
            context.set(keypath, options[node.selectedIndex].value);
        }
    },
    name: RAW_VALUE
}, inputTypes = {
    radio: radioControl,
    checkbox: checkboxControl,
};
const once = TRUE;
function bind$1(node, directive, vnode) {
    let { context, lazy, isComponent } = vnode, dataBinding = directive.binding, lazyValue = lazy && (lazy[DIRECTIVE_MODEL] || lazy[EMPTY_STRING]), set, unbind;
    if (isComponent) {
        let component = node, viewBinding = component.$model, viewSyncing = debounceIfNeeded(function (newValue) {
            context.set(dataBinding, newValue);
        }, lazyValue);
        set = function (newValue) {
            if (set) {
                component.set(viewBinding, newValue);
            }
        };
        unbind = function () {
            component.unwatch(viewBinding, viewSyncing);
        };
        component.watch(viewBinding, viewSyncing);
    }
    else {
        let element = node, control = vnode.tag === 'select'
            ? selectControl
            : inputControl, 
        // checkbox,radio,select 监听的是 change 事件
        eventName = EVENT_CHANGE;
        if (control === inputControl) {
            const type = node.type;
            if (inputTypes[type]) {
                control = inputTypes[type];
            }
            // 如果是输入框，则切换成 model 事件
            // model 事件是个 yox-dom 实现的特殊事件
            // 不会在输入法组合文字过程中得到触发事件
            else if (lazyValue !== TRUE) {
                eventName = EVENT_MODEL;
            }
        }
        set = function (newValue) {
            if (set) {
                control.set(element, newValue);
            }
        };
        const sync = debounceIfNeeded(function () {
            control.sync(element, dataBinding, context);
        }, lazyValue);
        unbind = function () {
            off(element, eventName, sync);
        };
        on(element, eventName, sync);
        control.set(element, directive.value);
    }
    // 监听数据，修改界面
    context.watch(dataBinding, set);
    vnode.data[directive.key] = function () {
        context.unwatch(dataBinding, set);
        set = UNDEFINED;
        unbind();
    };
}
function unbind$1(node, directive, vnode) {
    execute(vnode.data[directive.key]);
}

var model = /*#__PURE__*/Object.freeze({
  once: once,
  bind: bind$1,
  unbind: unbind$1
});

const once$1 = TRUE;
function bind$2(node, directive, vnode) {
    // binding 可能是模糊匹配
    // 比如延展属性 {{...obj}}，这里 binding 会是 `obj.*`
    let binding = directive.binding, 
    // 提前判断好是否是模糊匹配，避免 watcher 频繁执行判断逻辑
    isFuzzy$1 = isFuzzy(binding), watcher = function (newValue, _, keypath) {
        if (watcher) {
            const name = isFuzzy$1
                ? matchFuzzy(keypath, binding)
                : directive.name;
            if (vnode.isComponent) {
                const component = node;
                component.checkProp(name, newValue);
                component.set(name, newValue);
            }
            else {
                const element = node;
                if (isDef(directive.hint)) {
                    prop(element, name, newValue);
                }
                else {
                    attr(element, name, newValue);
                }
            }
        }
    };
    vnode.context.watch(binding, watcher);
    vnode.data[directive.key] = function () {
        vnode.context.unwatch(binding, watcher);
        watcher = UNDEFINED;
    };
}
function unbind$2(node, directive, vnode) {
    execute(vnode.data[directive.key]);
}

var binding = /*#__PURE__*/Object.freeze({
  once: once$1,
  bind: bind$2,
  unbind: unbind$2
});

const globalDirectives = {}, globalTransitions = {}, globalComponents = {}, globalPartials = {}, globalFilters = {}, compileCache = {}, TEMPLATE_COMPUTED = '$$', selectorPattern = /^[#.][-\w+]+$/;
class Yox {
    constructor(options) {
        const instance = this, $options = options || EMPTY_OBJECT;
        // 为了冒泡 HOOK_BEFORE_CREATE 事件，必须第一时间创建 emitter
        // 监听各种事件
        // 支持命名空间
        instance.$emitter = new Emitter(TRUE);
        if ($options.events) {
            instance.on($options.events);
        }
        {
            // 当前组件的直接父组件
            if ($options.parent) {
                instance.$parent = $options.parent;
            }
            // 建立好父子连接后，立即触发钩子
            execute($options[HOOK_BEFORE_CREATE], instance, $options);
            // 冒泡 before create 事件
            instance.fire(HOOK_BEFORE_CREATE + NAMESPACE_HOOK, $options);
        }
        let { data, props, vnode, propTypes, computed, methods, watchers, extensions, } = $options;
        instance.$options = $options;
        if (extensions) {
            extend(instance, extensions);
        }
        // 数据源，默认值仅在创建组件时启用
        const source = props ? copy(props) : {};
        {
            if (propTypes) {
                each$2(propTypes, function (rule, key) {
                    let value = source[key];
                    {
                        checkProp(key, value, rule);
                    }
                    if (isUndef(value)) {
                        value = rule.value;
                        if (isDef(value)) {
                            source[key] = rule.type === RAW_FUNCTION
                                ? value
                                : func(value)
                                    ? value()
                                    : value;
                        }
                    }
                });
            }
        }
        // 先放 props
        // 当 data 是函数时，可以通过 this.get() 获取到外部数据
        const observer = instance.$observer = new Observer(source, instance);
        if (computed) {
            each$2(computed, function (options, keypath) {
                observer.addComputed(keypath, options);
            });
        }
        // 后放 data
        {
            if (vnode && object(data)) {
                warn(`child component's data should be a function which return an object.`);
            }
        }
        const extend$1 = func(data) ? execute(data, instance, options) : data;
        if (object(extend$1)) {
            each$2(extend$1, function (value, key) {
                {
                    if (has$2(source, key)) {
                        warn(`"${key}" is already defined as a prop. Use prop default value instead.`);
                    }
                }
                source[key] = value;
            });
        }
        if (methods) {
            each$2(methods, function (method, name) {
                {
                    if (instance[name]) {
                        fatal(`method "${name}" is conflicted with built-in methods.`);
                    }
                }
                instance[name] = method;
            });
        }
        {
            let placeholder = UNDEFINED, { el, root, model, context, replace, template, transitions, components, directives, partials, filters, slots, } = $options;
            if (model) {
                instance.$model = model;
            }
            // 把 slots 放进数据里，方便 get
            if (slots) {
                extend(source, slots);
            }
            // 检查 template
            if (string(template)) {
                // 传了选择器，则取对应元素的 html
                if (selectorPattern.test(template)) {
                    placeholder = find(template);
                    if (placeholder) {
                        template = html(placeholder);
                        placeholder = UNDEFINED;
                    }
                    else {
                        fatal(`selector "${template}" can't match an element.`);
                    }
                }
            }
            // 检查 el
            if (el) {
                if (string(el)) {
                    const selector = el;
                    if (selectorPattern.test(selector)) {
                        placeholder = find(selector);
                        {
                            if (!placeholder) {
                                fatal(`selector "${selector}" can't match an element.`);
                            }
                        }
                    }
                    else {
                        fatal(`"el" option should be a selector.`);
                    }
                }
                else {
                    placeholder = el;
                }
                if (!replace) {
                    append(placeholder, placeholder = createComment(EMPTY_STRING));
                }
            }
            // 根组件
            if (root) {
                instance.$root = root;
            }
            // 当前组件是被哪个组件渲染出来的
            // 因为有 slot 机制，$context 不一定等于 $parent
            if (context) {
                instance.$context = context;
            }
            setFlexibleOptions(instance, RAW_TRANSITION, transitions);
            setFlexibleOptions(instance, RAW_COMPONENT, components);
            setFlexibleOptions(instance, RAW_DIRECTIVE, directives);
            setFlexibleOptions(instance, RAW_PARTIAL, partials);
            setFlexibleOptions(instance, RAW_FILTER, filters);
            // 当存在模板和计算属性时
            // 因为这里把模板当做一种特殊的计算属性
            // 因此模板这个计算属性的优先级应该最高
            if (template) {
                // 拷贝一份，避免影响外部定义的 watchers
                const newWatchers = watchers
                    ? copy(watchers)
                    : {};
                newWatchers[TEMPLATE_COMPUTED] = {
                    // 模板一旦变化，立即刷新
                    sync: TRUE,
                    watcher: function (vnode) {
                        instance.update(vnode, instance.$vnode);
                    }
                };
                // 当模板的依赖变了，则重新创建 virtual dom
                observer.addComputed(TEMPLATE_COMPUTED, {
                    // 当模板依赖变化时，异步通知模板更新
                    sync: FALSE,
                    get: function () {
                        return instance.render();
                    }
                });
                afterCreateHook(instance, newWatchers);
                // 编译模板
                // 在开发阶段，template 是原始的 html 模板
                // 在产品阶段，template 是编译后且经过 stringify 的字符串
                // 当然，这个需要外部自己控制传入的 template 是什么
                // Yox.compile 会自动判断 template 是否经过编译
                instance.$template = string(template)
                    ? Yox.compile(template)
                    : template;
                if (!vnode) {
                    {
                        if (!placeholder) {
                            fatal('"el" option is required for root component.');
                        }
                    }
                    vnode = create(domApi, placeholder, instance, EMPTY_STRING);
                }
                instance.update(instance.get(TEMPLATE_COMPUTED), vnode);
                return;
            }
            else {
                if (placeholder || vnode) {
                    fatal('"template" option is required.');
                }
            }
        }
        afterCreateHook(instance, watchers);
    }
    /**
     * 安装插件
     *
     * 插件必须暴露 install 方法
     */
    static use(plugin) {
        plugin.install(Yox);
    }
    /**
     * 定义组件对象
     */
    static define(options) {
        return options;
    }
    /**
     * 因为组件采用的是异步更新机制，为了在更新之后进行一些操作，可使用 nextTick
     */
    static nextTick(task, context) {
        NextTask.shared().append(task, context);
    }
    /**
     * 编译模板，暴露出来是为了打包阶段的模板预编译
     */
    static compile(template, stringify) {
        {
            // 需要编译的都是模板源文件，一旦经过预编译，就成了 render 函数，不会再走进 Yox.compile
            if (!compileCache[template]) {
                const nodes = compile$1(template);
                {
                    if (nodes.length !== 1) {
                        fatal(`"template" should have just one root element.`);
                    }
                }
                compileCache[template] = generate$1(nodes[0]);
            }
            template = compileCache[template];
            return stringify
                ? template
                : new Function(`return ${template}`)();
        }
    }
    /**
     * 注册全局指令
     */
    static directive(name, directive) {
        {
            if (string(name) && !directive) {
                return getResource(globalDirectives, name);
            }
            setResource(globalDirectives, name, directive);
        }
    }
    /**
     * 注册全局过渡动画
     */
    static transition(name, transition) {
        {
            if (string(name) && !transition) {
                return getResource(globalTransitions, name);
            }
            setResource(globalTransitions, name, transition);
        }
    }
    /**
     * 注册全局组件
     */
    static component(name, component) {
        {
            if (string(name) && !component) {
                return getResource(globalComponents, name);
            }
            setResource(globalComponents, name, component);
        }
    }
    /**
     * 注册全局子模板
     */
    static partial(name, partial) {
        {
            if (string(name) && !partial) {
                return getResource(globalPartials, name);
            }
            setResource(globalPartials, name, partial, Yox.compile);
        }
    }
    /**
     * 注册全局过滤器
     */
    static filter(name, filter) {
        {
            if (string(name) && !filter) {
                return getResource(globalFilters, name);
            }
            setResource(globalFilters, name, filter);
        }
    }
    /**
     * 取值
     */
    get(keypath, defaultValue, depIgnore) {
        return this.$observer.get(keypath, defaultValue, depIgnore);
    }
    /**
     * 设值
     */
    set(keypath, value) {
        // 组件经常有各种异步改值，为了避免组件销毁后依然调用 set
        // 这里判断一下，至于其他方法的异步调用就算了，业务自己控制吧
        const { $observer } = this;
        if ($observer) {
            $observer.set(keypath, value);
        }
    }
    /**
     * 监听事件，支持链式调用
     */
    on(type, listener) {
        return addEvents(this, type, listener);
    }
    /**
     * 监听一次事件，支持链式调用
     */
    once(type, listener) {
        return addEvents(this, type, listener, TRUE);
    }
    /**
     * 取消监听事件，支持链式调用
     */
    off(type, listener) {
        this.$emitter.off(type, listener);
        return this;
    }
    /**
     * 发射事件
     */
    fire(type, data, downward) {
        // 外部为了使用方便，fire(type) 或 fire(type, data) 就行了
        // 内部为了保持格式统一
        // 需要转成 Event，这样还能知道 target 是哪个组件
        let instance = this, event = type instanceof CustomEvent ? type : new CustomEvent(type), args = [event], isComplete;
        // 告诉外部是谁发出的事件
        if (!event.target) {
            event.target = instance;
        }
        // 比如 fire('name', true) 直接向下发事件
        if (object(data)) {
            push(args, data);
        }
        else if (data === TRUE) {
            downward = TRUE;
        }
        isComplete = instance.$emitter.fire(event.type, args);
        if (isComplete) {
            const { $parent, $children } = instance;
            if (downward) {
                if ($children) {
                    event.phase = CustomEvent.PHASE_DOWNWARD;
                    each($children, function (child) {
                        return isComplete = child.fire(event, data, TRUE);
                    });
                }
            }
            else if ($parent) {
                event.phase = CustomEvent.PHASE_UPWARD;
                isComplete = $parent.fire(event, data);
            }
        }
        return isComplete;
    }
    /**
     * 监听数据变化，支持链式调用
     */
    watch(keypath, watcher, immediate) {
        this.$observer.watch(keypath, watcher, immediate);
        return this;
    }
    /**
     * 取消监听数据变化，支持链式调用
     */
    unwatch(keypath, watcher) {
        this.$observer.unwatch(keypath, watcher);
        return this;
    }
    /**
     * 加载组件，组件可以是同步或异步，最后会调用 callback
     *
     * @param name 组件名称
     * @param callback 组件加载成功后的回调
     */
    loadComponent(name, callback) {
        {
            if (!loadComponent(this.$components, name, callback)) {
                {
                    if (!loadComponent(globalComponents, name, callback)) {
                        error(`Component "${name}" is not found.`);
                    }
                }
            }
        }
    }
    /**
     * 创建子组件
     *
     * @param options 组件配置
     * @param vnode 虚拟节点
     */
    createComponent(options, vnode) {
        {
            const instance = this;
            options = copy(options);
            options.root = instance.$root || instance;
            options.parent = instance;
            options.context = vnode.context;
            options.vnode = vnode;
            options.replace = TRUE;
            let { props, slots, directives } = vnode, model = directives && directives[DIRECTIVE_MODEL];
            if (model) {
                if (!props) {
                    props = {};
                }
                const key = options.model || MODEL_PROP_DEFAULT;
                props[key] = model.value;
                options.model = key;
            }
            if (props) {
                options.props = props;
            }
            if (slots) {
                options.slots = slots;
            }
            const child = new Yox(options);
            push(instance.$children || (instance.$children = []), child);
            const node = child.$el;
            if (node) {
                vnode.node = node;
            }
            else {
                fatal(`The root element of [Component ${vnode.tag}] is not found.`);
            }
            return child;
        }
    }
    /**
     * 注册当前组件级别的指令
     */
    directive(name, directive) {
        {
            const instance = this, { $directives } = instance;
            if (string(name) && !directive) {
                return getResource($directives, name, Yox.directive);
            }
            setResource($directives || (instance.$directives = {}), name, directive);
        }
    }
    /**
     * 注册当前组件级别的过渡动画
     */
    transition(name, transition) {
        {
            const instance = this, { $transitions } = instance;
            if (string(name) && !transition) {
                return getResource($transitions, name, Yox.transition);
            }
            setResource($transitions || (instance.$transitions = {}), name, transition);
        }
    }
    /**
     * 注册当前组件级别的组件
     */
    component(name, component) {
        {
            const instance = this, { $components } = instance;
            if (string(name) && !component) {
                return getResource($components, name, Yox.component);
            }
            setResource($components || (instance.$components = {}), name, component);
        }
    }
    /**
     * 注册当前组件级别的子模板
     */
    partial(name, partial) {
        {
            const instance = this, { $partials } = instance;
            if (string(name) && !partial) {
                return getResource($partials, name, Yox.partial);
            }
            setResource($partials || (instance.$partials = {}), name, partial, Yox.compile);
        }
    }
    /**
     * 注册当前组件级别的过滤器
     */
    filter(name, filter) {
        {
            const instance = this, { $filters } = instance;
            if (string(name) && !filter) {
                return getResource($filters, name, Yox.filter);
            }
            setResource($filters || (instance.$filters = {}), name, filter);
        }
    }
    /**
     * 对于某些特殊场景，修改了数据，但是模板的依赖中并没有这一项
     * 而你非常确定需要更新模板，强制刷新正是你需要的
     */
    forceUpdate(data) {
        {
            const instance = this, { $vnode, $observer } = instance, { computed } = $observer;
            if ($vnode && computed) {
                const template = computed[TEMPLATE_COMPUTED], oldValue = template.get();
                if (data) {
                    instance.set(data);
                }
                // 当前可能正在进行下一轮更新
                $observer.nextTask.run();
                // 没有更新模板，强制刷新
                if (!data && oldValue === template.get()) {
                    instance.update(template.get(TRUE), $vnode);
                }
            }
        }
    }
    /**
     * 把模板抽象语法树渲染成 virtual dom
     */
    render() {
        {
            const instance = this;
            return render(instance, instance.$template, merge(instance.$filters, globalFilters), merge(instance.$partials, globalPartials), merge(instance.$directives, globalDirectives), merge(instance.$transitions, globalTransitions));
        }
    }
    /**
     * 更新 virtual dom
     *
     * @param vnode
     * @param oldVnode
     */
    update(vnode, oldVnode) {
        {
            let instance = this, { $vnode, $options } = instance, afterHook;
            // 每次渲染重置 refs
            // 在渲染过程中收集最新的 ref
            // 这样可避免更新时，新的 ref，在前面创建，老的 ref 却在后面删除的情况
            instance.$refs = {};
            if ($vnode) {
                execute($options[HOOK_BEFORE_UPDATE], instance);
                instance.fire(HOOK_BEFORE_UPDATE + NAMESPACE_HOOK);
                patch(domApi, vnode, oldVnode);
                afterHook = HOOK_AFTER_UPDATE;
            }
            else {
                execute($options[HOOK_BEFORE_MOUNT], instance);
                instance.fire(HOOK_BEFORE_MOUNT + NAMESPACE_HOOK);
                patch(domApi, vnode, oldVnode);
                instance.$el = vnode.node;
                afterHook = HOOK_AFTER_MOUNT;
            }
            instance.$vnode = vnode;
            // 跟 nextTask 保持一个节奏
            // 这样可以预留一些优化的余地
            Yox.nextTick(function () {
                if (instance.$vnode) {
                    execute($options[afterHook], instance);
                    instance.fire(afterHook + NAMESPACE_HOOK);
                }
            });
        }
    }
    /**
     * 校验组件参数
     *
     * @param props
     */
    checkProps(props) {
        {
            const instance = this;
            each$2(props, function (value, key) {
                instance.checkProp(key, value);
            });
        }
    }
    checkProp(key, value) {
        {
            const { propTypes } = this.$options;
            if (propTypes) {
                const rule = propTypes[key];
                if (rule) {
                    checkProp(key, value, rule);
                }
            }
        }
    }
    /**
     * 销毁组件
     */
    destroy() {
        const instance = this, { $parent, $options, $emitter, $observer } = instance;
        {
            execute($options[HOOK_BEFORE_DESTROY], instance);
            instance.fire(HOOK_BEFORE_DESTROY + NAMESPACE_HOOK);
            const { $vnode } = instance;
            if ($parent && $parent.$children) {
                remove($parent.$children, instance);
            }
            if ($vnode) {
                // virtual dom 通过判断 parent.$vnode 知道宿主组件是否正在销毁
                instance.$vnode = UNDEFINED;
                destroy(domApi, $vnode, !$parent);
            }
        }
        $observer.destroy();
        {
            execute($options[HOOK_AFTER_DESTROY], instance);
            instance.fire(HOOK_AFTER_DESTROY + NAMESPACE_HOOK);
        }
        // 发完 after destroy 事件再解绑所有事件
        $emitter.off();
        clear(instance);
    }
    /**
     * 因为组件采用的是异步更新机制，为了在更新之后进行一些操作，可使用 nextTick
     */
    nextTick(task) {
        this.$observer.nextTask.append(task, this);
    }
    /**
     * 取反 keypath 对应的数据
     *
     * 不管 keypath 对应的数据是什么类型，操作后都是布尔型
     */
    toggle(keypath) {
        return this.$observer.toggle(keypath);
    }
    /**
     * 递增 keypath 对应的数据
     *
     * 注意，最好是整型的加法，如果涉及浮点型，不保证计算正确
     *
     * @param keypath 值必须能转型成数字，如果不能，则默认从 0 开始递增
     * @param step 步进值，默认是 1
     * @param max 可以递增到的最大值，默认不限制
     */
    increase(keypath, step, max) {
        return this.$observer.increase(keypath, step, max);
    }
    /**
     * 递减 keypath 对应的数据
     *
     * 注意，最好是整型的减法，如果涉及浮点型，不保证计算正确
     *
     * @param keypath 值必须能转型成数字，如果不能，则默认从 0 开始递减
     * @param step 步进值，默认是 1
     * @param min 可以递减到的最小值，默认不限制
     */
    decrease(keypath, step, min) {
        return this.$observer.decrease(keypath, step, min);
    }
    /**
     * 在数组指定位置插入元素
     *
     * @param keypath
     * @param item
     * @param index
     */
    insert(keypath, item, index) {
        return this.$observer.insert(keypath, item, index);
    }
    /**
     * 在数组尾部添加元素
     *
     * @param keypath
     * @param item
     */
    append(keypath, item) {
        return this.$observer.append(keypath, item);
    }
    /**
     * 在数组首部添加元素
     *
     * @param keypath
     * @param item
     */
    prepend(keypath, item) {
        return this.$observer.prepend(keypath, item);
    }
    /**
     * 通过索引移除数组中的元素
     *
     * @param keypath
     * @param index
     */
    removeAt(keypath, index) {
        return this.$observer.removeAt(keypath, index);
    }
    /**
     * 直接移除数组中的元素
     *
     * @param keypath
     * @param item
     */
    remove(keypath, item) {
        return this.$observer.remove(keypath, item);
    }
    /**
     * 拷贝任意数据，支持深拷贝
     *
     * @param data
     * @param deep
     */
    copy(data, deep) {
        return this.$observer.copy(data, deep);
    }
}
/**
 * core 版本
 */
Yox.version = "1.0.0-alpha.83";
/**
 * 方便外部共用的通用逻辑，特别是写插件，减少重复代码
 */
Yox.is = is;
Yox.dom = domApi;
Yox.array = array$1;
Yox.object = object$1;
Yox.string = string$1;
Yox.logger = logger;
Yox.Event = CustomEvent;
Yox.Emitter = Emitter;
const toString$2 = Object.prototype.toString;
function matchType(value, type) {
    return type === 'numeric'
        ? numeric(value)
        : lower(toString$2.call(value)) === `[object ${type}]`;
}
function checkProp(key, value, rule) {
    // 传了数据
    if (isDef(value)) {
        const type = rule.type;
        // 如果不写 type 或 type 不是 字符串 或 数组
        // 就当做此规则无效，和没写一样
        if (type) {
            // 自定义函数判断是否匹配类型
            // 自己打印警告信息吧
            if (func(type)) {
                type(key, value);
            }
            else {
                let matched = FALSE;
                // type: 'string'
                if (!falsy$1(type)) {
                    matched = matchType(value, type);
                }
                // type: ['string', 'number']
                else if (!falsy(type)) {
                    each(type, function (item) {
                        if (matchType(value, item)) {
                            matched = TRUE;
                            return FALSE;
                        }
                    });
                }
                if (!matched) {
                    warn(`The type of prop "${key}" expected to be "${type}", but is "${value}".`);
                }
            }
        }
        else {
            warn(`The prop "${key}" in propTypes has no type.`);
        }
    }
    // 没传值但此项是必传项
    else if (rule.required) {
        warn(`The prop "${key}" is marked as required, but its value is not found.`);
    }
}
function afterCreateHook(instance, watchers) {
    if (watchers) {
        instance.watch(watchers);
    }
    {
        execute(instance.$options[HOOK_AFTER_CREATE], instance);
        instance.fire(HOOK_AFTER_CREATE + NAMESPACE_HOOK);
    }
}
function setFlexibleOptions(instance, key, value) {
    if (func(value)) {
        instance[key](execute(value, instance));
    }
    else if (object(value)) {
        instance[key](value);
    }
}
function addEvent(instance, type, listener, once) {
    const options = {
        fn: listener,
        ctx: instance
    };
    if (once) {
        options.max = 1;
    }
    // YoxInterface 没有声明 $emitter，因为不想让外部访问，
    // 但是这里要用一次，所以加了 as any
    instance.$emitter.on(type, options);
}
function addEvents(instance, type, listener, once) {
    if (string(type)) {
        addEvent(instance, type, listener, once);
    }
    else {
        each$2(type, function (value, key) {
            addEvent(instance, key, value, once);
        });
    }
    return instance;
}
function loadComponent(registry, name, callback) {
    if (registry && registry[name]) {
        const component = registry[name];
        // 注册的是异步加载函数
        if (func(component)) {
            registry[name] = [callback];
            const componentCallback = function (result) {
                const queue = registry[name], options = result['default'] || result;
                registry[name] = options;
                each(queue, function (callback) {
                    callback(options);
                });
            }, promise = component(componentCallback);
            if (promise) {
                promise.then(componentCallback);
            }
        }
        // 正在加载中
        else if (array(component)) {
            push(component, callback);
        }
        // 不是异步加载函数，直接同步返回
        else {
            callback(component);
        }
        return TRUE;
    }
}
function getResource(registry, name, lookup) {
    if (registry && registry[name]) {
        return registry[name];
    }
    else if (lookup) {
        return lookup(name);
    }
}
function setResource(registry, name, value, formatValue) {
    if (string(name)) {
        registry[name] = formatValue ? formatValue(value) : value;
    }
    else {
        each$2(name, function (value, key) {
            registry[key] = formatValue ? formatValue(value) : value;
        });
    }
}
{
    // 全局注册内置指令
    Yox.directive({ event, model, binding });
    // 全局注册内置过滤器
    Yox.filter({
        hasSlot(name) {
            // 不鼓励在过滤器使用 this
            // 因此过滤器没有 this 的类型声明
            // 这个内置过滤器是不得不用 this
            return isDef(this.get(SLOT_DATA_PREFIX + name));
        }
    });
}

/* harmony default export */ __webpack_exports__["a"] = (Yox);
//# sourceMappingURL=yox.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(79).setImmediate))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-layout bell-row"+(a("hasSider",!0)?" bell-col-24":" column")+(a("fixed",!0)?" bell-layout-fixed":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){q("$slot_children")})};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-layout-header"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){d(a("hasSlot",!0),["left"])?p({"tag":"div"},!1,function(){g("className",1,"bell-layout-header-left")},function(){q("$slot_left")}):p({"isComment":!0,"text":""}),d(a("hasSlot",!0),["center"])?p({"tag":"div"},!1,function(){g("className",1,"bell-layout-header-center")},function(){q("$slot_center")}):p({"isComment":!0,"text":""}),q("$slot_children"),d(a("hasSlot",!0),["right"])?p({"tag":"div"},!1,function(){g("className",1,"bell-layout-header-right")},function(){q("$slot_right")}):p({"isComment":!0,"text":""})})};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-layout-sider bell-col-6"+(a("className",!0)?" "+u(a("className",!0)):"")+(a("isCollapsed",!0)?" bell-layout-sider-collapsed":"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-layout-sider-children")},function(){q("$slot_children")}),a("isCollapsed",!0)!=null?p({"tag":"div"},!1,function(){g("className",1,"bell-layout-sider-trigger"),l("click","event.click","toggle('isCollapsed')","toggle",function(v){return ["isCollapsed"]})},function(){q("$slot_trigger",function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back"),f("className","bell-layout-sider-trigger-icon")})})}):p({"isComment":!0,"text":""})})};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-layout-content"+(a("hasSider",!0)?" bell-col-18":" bell-col-24")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){q("$slot_children")})};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-layout-footer"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){q("$slot_children")})};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"ul"},!1,function(){g("className",1,"bell-menu bell-menu-"+u(a("mode",!0))+" bell-menu-"+u(a("theme",!0))+(a("isCollapsed",!0)?" bell-menu-collapsed":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){q("$slot_children")})};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"li"},!1,function(){g("className",1,"bell-menu-item"+(a("className",!0)?" "+u(a("className",!0)):"")+(a("isActive",!0)?" bell-menu-active":"")+(a("disabled",!0)?" bell-menu-item-disabled":"")),g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1)),m("click","event.click","click.menuItem","click.menuItem")},function(){q("$slot_children")})};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"ul"},!1,function(){g("className",1,"bell-menu-group"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){p({"tag":"li","text":u(a("title",!0))},!1,function(){g("className",1,"bell-menu-group-title")}),d(a("hasSlot",!0),["children"])?p({"tag":"Menu","isComponent":!0},!1,function(){f("theme",j("theme",a("theme",!0,!1,!0,!0))),f("mode",a("mode",!0)==="inline"?"inline":"vertical")},!1,{"$slot_children":function(){q("$slot_children")}}):p({"isComment":!0,"text":""})})};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"li"},!1,function(){g("className",1,"bell-submenu"+(a("className",!0)?" "+u(a("className",!0)):"")+(a("isOpen",!0)?" bell-menu-open":"")+(a("isActive",!0)?" bell-menu-active":"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1)),a("isCollapsed",!0)&&(l("mouseenter","event.mouseenter","set('isOpen', true)","set",function(v){return ["isOpen",true]}),l("mouseleave","event.mouseleave","set('isOpen', false)","set",function(v){return ["isOpen",false]}),h("mouseleave",300))},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-submenu-title"),l("click","event.click","click()","click")},function(){q("$slot_title"),p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-down"),f("className","bell-submenu-title-icon")})}),a("mode",!0)!="inline"?p({"tag":"div","ref":"menu"},!1,function(){g("className",1,"bell-menu-dropdown")},function(){q("$slot_children")}):p({"tag":"Menu","ref":"menu","isComponent":!0},!1,function(){f("mode",j("mode",a("mode",!0,!1,!0,!0))),f("theme",j("theme",a("theme",!0,!1,!0,!0)))},!1,{"$slot_children":function(){q("$slot_children")}})})};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-row"+(a("gutter",!0)?" bell-row-gutter":"")+(a("type",!0)?" bell-row-"+u(a("type",!0)):"")+(a("justify",!0)?" bell-row-justify-"+u(a("justify",!0)):"")+(a("align",!0)?" bell-row-align-"+u(a("align",!0)):"")+(a("className",!0)?" "+u(a("className",!0)):"")),g("style.cssText",1,j("style.cssText",a("inlineStyle",!0,!1,!0,!0),1))},function(){q("$slot_children")})};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-col"+(a("span",!0)?" bell-col-"+u(a("span",!0)):"")+(a("order",!0)?" bell-col-order-"+u(a("order",!0)):"")+(a("push",!0)?" bell-col-push-"+u(a("push",!0)):"")+(a("pull",!0)?" bell-col-pull-"+u(a("pull",!0)):"")+(a("offset",!0)?" bell-col-offset-"+u(a("offset",!0)):"")+(a("xsClass",!0)?" "+u(a("xsClass",!0)):"")+(a("mdClass",!0)?" "+u(a("mdClass",!0)):"")+(a("smClass",!0)?" "+u(a("smClass",!0)):"")+(a("lgClass",!0)?" "+u(a("lgClass",!0)):"")+(a("className",!0)?" "+u(a("className",!0)):"")),g("style.cssText",1,j("style.cssText",a("inlineStyle",!0,!1,!0,!0),1))},function(){q("$slot_children")})};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"i"},!1,function(){g("className",1,"bell-icon"+(a("name",!0)?" bell-icon-"+u(a("type",!0))+"-"+u(a("name",!0)):"")+(a("spin",!0)?" bell-icon-spin":"")+(a("className",!0)?" "+u(a("className",!0)):"")),g("style.cssText",1,"font-size: "+u(a("size",!0))+"px;"+(a("color",!0)?" color: "+u(a("color",!0))+";":"")+(a("style",!0)?" "+u(a("style",!0)):"")),m("click","event.click","click.icon","click.icon"),m("mousemove","event.mousemove","mousemove.icon","mousemove.icon")},function(){q("$slot_children")})};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-drawer"+(a("className",!0)?" "+u(a("className",!0)):"")),f("data-placement",j("data-placement",a("placement",!0,!1,!0,!0))),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){a("mask",!0)?p({"tag":"div"},!1,function(){g("className",1,"bell-drawer-mask"),a("maskClosable",!0)&&l("click","event.click","close()","close")}):p({"isComment":!0,"text":""}),p({"tag":"div"},!1,function(){g("className",1,"bell-drawer-content"),g("style.cssText",1,j("style.cssText",a("contentStyle",!0,!1,!0,!0),1))},function(){a("title",!0)||d(a("hasSlot",!0),["title"])?p({"tag":"div"},!1,function(){g("className",1,"bell-drawer-header")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-drawer-title")},function(){q("$slot_title",function(){e(u(a("title",!0)))})})}):p({"isComment":!0,"text":""}),p({"tag":"div"},!1,function(){g("className",1,"bell-drawer-body")},function(){q("$slot_children")}),a("closable",!0)?p({"tag":"Button","isComponent":!0},!1,function(){f("className","bell-drawer-close"),f("size","small"),f("borderType","none"),l("click","event.click","close()","close")},!1,{"$slot_icon":function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("size","28"),f("name","close")})}}):p({"isComment":!0,"text":""})})})};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-breadcrumb bell-texts"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){q("$slot_children")})};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"span"},!1,function(){g("className",1,"bell-breadcrumb-item bell-text"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){a("to",!0)?p({"tag":"a"},!1,function(){g("className",1,"bell-breadcrumb-link"),g("href",1,j("href",a("to",!0,!1,!0,!0),1))},function(){q("$slot_children")}):p({"tag":"span"},!1,function(){g("className",1,"bell-breadcrumb-link"),m("click","event.click","click.breadcrumbItem","click.breadcrumbItem")},function(){q("$slot_children")}),p({"tag":"span","text":u(a("separator",!0))},!1,function(){g("className",1,"bell-breadcrumb-gap")})})};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"button"},!1,function(){m("click","event.click","click.button","click.button"),g("className",1,"bell-button bell-button-"+u(a("borderType",!0))+(a("ghost",!0)?" bell-button-"+u(a("type",!0))+"-ghost":" bell-button-"+u(a("type",!0))+"-normal")+(a("shape",!0)?" bell-button-"+u(a("shape",!0)):"")+(a("size",!0)?" bell-button-"+u(a("size",!0)):"")+(a("fluid",!0)?" bell-button-fluid":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("disabled",!0)&&g("disabled",3,true),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){q("$slot_icon"),q("$slot_children")})};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-button-group"+(a("shape",!0)?" bell-button-group-"+u(a("shape",!0)):"")+(a("size",!0)?" bell-button-group-"+u(a("size",!0)):"")+(a("vertical",!0)?" bell-button-group-vertical":" bell-button-group-horizontal")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){q("$slot_children")})};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-input-wrapper"+(d(a("hasSlot",!0),["prepend"])?" bell-input-has-prepend":"")+(d(a("hasSlot",!0),["append"])||a("search",!0)&&a("enterButton",!0)?" bell-input-has-append":"")+(a("size",!0)?" bell-input-wrapper-"+u(a("size",!0)):"")+(a("status",!0)?" bell-input-wrapper-"+u(a("status",!0)):"")+(a("isFocus",!0)?" bell-focus":"")+(a("autoSize",!0)?" bell-input-autosize":"")+(a("clearable",!0)?" bell-input-wrapper-clearable":"")+(a("disabled",!0)?" bell-input-wrapper-disabled":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){d(a("hasSlot",!0),["prepend"])?p({"tag":"div"},!1,function(){g("className",1,"bell-input-prepend")},function(){q("$slot_prepend")}):p({"isComment":!0,"text":""}),p({"tag":"div"},!1,function(){g("className",1,"bell-input"+(a("type",!0)===a("TEXT_TYPE_TEXTAREA",!0)?" bell-textarea":""))},function(){a("type",!0)===a("TEXT_TYPE_TEXTAREA",!0)?p({"tag":"textarea"},!1,function(){g("className",1,"bell-input-el"),k(a("value",!0,!1,!0,!0)),a("rows",!0)&&g("rows",2,j("rows",a("rows",!0,!1,!0,!0),2)),a("placeholder",!0)&&g("placeholder",1,j("placeholder",a("placeholder",!0,!1,!0,!0),1)),a("disabled",!0)&&g("disabled",3,true),a("autocomplete",!0)&&g("autocomplete",1,j("autocomplete",a("autocomplete",!0,!1,!0,!0),1)),a("wrap",!0)&&g("wrap",1,j("wrap",a("wrap",!0,!1,!0,!0),1)),a("spellcheck",!0)&&g("spellcheck",3,true),a("readonly",!0)&&g("readOnly",3,true),g("style.cssText",1,j("style.cssText",a("textComputedStyle",!0,!1,!0,!0),1))}):(p({"tag":"input","ref":"input"},!1,function(){g("type",1,j("type",a("currentType",!0,!1,!0,!0),1)),g("className",1,"bell-input-el"+(a("size",!0)?" bell-input-"+u(a("size",!0)):"")+(d(a("hasSlot",!0),["prefix"])||a("prefix",!0)?" bell-input-with-prefix":"")+(d(a("hasSlot",!0),["suffix"])||a("suffix",!0)?" bell-input-with-suffix":"")),a("readonly",!0)&&g("readOnly",3,true),a("maxLength",!0)&&g("maxLength",2,j("maxLength",a("maxLength",!0,!1,!0,!0),2)),a("autocomplete",!0)&&g("autocomplete",1,j("autocomplete",a("autocomplete",!0,!1,!0,!0),1)),a("wrap",!0)&&g("wrap",1,j("wrap",a("wrap",!0,!1,!0,!0),1)),a("spellcheck",!0)&&g("spellcheck",3,true),a("placeholder",!0)&&g("placeholder",1,j("placeholder",a("placeholder",!0,!1,!0,!0),1)),a("disabled",!0)&&g("disabled",3,true),k(a("value",!0,!1,!0,!0)),l("blur","event.blur","blur()","blur"),l("focus","event.focus","focus()","focus")}),a("clearable",!0)?p({"tag":"Icon","isComponent":!0},!1,function(){f("name","close-circle"),f("size","16"),f("className","bell-input-clear-icon"),l("click","event.click","clear()","clear")}):p({"isComment":!0,"text":""}),d(a("hasSlot",!0),["prefix"])||a("prefix",!0)?p({"tag":"span"},!1,function(){g("className",1,"bell-input-prefix")},function(){q("$slot_prefix",function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name",j("name",a("prefix",!0,!1,!0,!0))),f("className","bell-input-prefix-icon")})})}):p({"isComment":!0,"text":""}),d(a("hasSlot",!0),["suffix"])||a("suffix",!0)?p({"tag":"span"},!1,function(){g("className",1,"bell-input-suffix")},function(){q("$slot_suffix",function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name",j("name",a("suffix",!0,!1,!0,!0))),f("className","bell-input-suffix-icon")})})}):p({"isComment":!0,"text":""}),a("search",!0)&&!a("enterButton",!0)?p({"tag":"span"},!1,function(){g("className",1,"bell-input-suffix"),l("click","event.click","search()","search")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","search"),f("className","bell-input-suffix-icon")})}):p({"isComment":!0,"text":""}),a("secure",!0)?a("isSecure",!0)?p({"tag":"span"},!1,function(){g("className",1,"bell-input-suffix"),l("click","event.click","toggle('isSecure')","toggle",function(v){return ["isSecure"]})},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","eye"),f("className","bell-input-suffix-icon")})}):p({"tag":"span"},!1,function(){g("className",1,"bell-input-suffix"),l("click","event.click","toggle('isSecure')","toggle",function(v){return ["isSecure"]})},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","eye-off"),f("className","bell-input-suffix-icon")})}):p({"isComment":!0,"text":""}))}),d(a("hasSlot",!0),["append"])?p({"tag":"div"},!1,function(){g("className",1,"bell-input-append")},function(){q("$slot_append")}):p({"isComment":!0,"text":""}),a("search",!0)&&a("enterButton",!0)?p({"tag":"div"},!1,function(){g("className",1,"bell-input-append"),l("click","event.click","search()","search")},function(){p({"tag":"Button","isComponent":!0},!1,function(){f("type","primary")},!1,{"$slot_children":function(){d(a("isBoolean",!0),[a("enterButton",!0)])?p({"tag":"Icon","isComponent":!0},!1,function(){f("name","search")}):e(u(a("enterButton",!0)))}})}):p({"isComment":!0,"text":""})})};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-input-number"+(a("size",!0)?" bell-input-number-"+u(a("size",!0)):"")+(a("status",!0)?" bell-input-number-"+u(a("status",!0)):"")+(a("disabled",!0)?" bell-input-number-disabled":"")+(a("readonly",!0)?" bell-input-number-readonly":"")+(a("isFocus",!0)?" bell-focus":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){p({"tag":"input"},!1,function(){g("type",1,"text"),g("className",1,"bell-input"),k(a("computedValue",!0,!1,!0,!0)),a("placeholder",!0)&&g("placeholder",1,j("placeholder",a("placeholder",!0,!1,!0,!0),1)),a("disabled",!0)&&g("disabled",3,true),a("readonly",!0)||!a("editable",!0)&&g("readOnly",3,a("readonly",!0)||!a("editable",!0)),l("blur","event.blur","blur()","blur"),l("focus","event.focus","focus()","focus")}),p({"tag":"span"},!1,function(){g("className",1,"bell-input-number-actions")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-up"),f("className","bell-input-number-icon"+(a("max",!0)!=null&&a("max",!0)-a("value",!0)<+a("step",!0)?" disabled":"")),l("click","event.click","up()","up")}),p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-down"),f("className","bell-input-number-icon"+(a("min",!0)!=null&&a("value",!0)-a("min",!0)<+a("step",!0)?" disabled":"")),l("click","event.click","down()","down")})})})};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"label"},!1,function(){g("className",1,"bell-radio"+(a("isChecked",!0)?" bell-active":"")+(a("isDisabled",!0)?" bell-radio-disabled":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){p({"tag":"span"},!1,function(){g("className",1,"bell-radio-wrapper"),l("click","event.click","click()","click")},function(){p({"tag":"span","isStatic":!0},!1,function(){g("className",1,"bell-radio-inner")}),p({"tag":"input"},!1,function(){g("className",1,"bell-radio-input"),g("type",1,"radio"),g("value",1,j("value",a("value",!0,!1,!0,!0),1))})}),p({"tag":"span"},!1,function(){g("className",1,"bell-radio-label")},function(){q("$slot_children",function(){e(u(a("label",!0)))})})})};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,(a("button",!0)?"bell-radio-button":"bell-radio-group")+(a("type",!0)&&a("button",!0)?" bell-radio-button-"+u(a("type",!0)):(a("type",!0)?" bell-radio-group-"+u(a("type",!0)):""))+(a("size",!0)&&a("button",!0)?" bell-radio-button-"+u(a("size",!0)):"")+(a("disabled",!0)&&a("button",!0)?" bell-radio-button-disabled":(a("disabled",!0)?" bell-radio-group-disabled":""))+(a("vertical",!0)?" bell-radio-vertical":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){q("$slot_children")})};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"label"},!1,function(){g("className",1,"bell-checkbox"+(a("disabled",!0)?" bell-checkbox-disabled":"")+(a("type",!0)?" bell-checkbox-"+u(a("type",!0)):"")+(a("size",!0)?" bell-checkbox-"+u(a("size",!0)):"")+(a("checked",!0)?" bell-checkbox-active":"")+(a("indeterminate",!0)?" bell-checkbox-indeterminate":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){p({"tag":"label"},!1,function(){g("className",1,"bell-checkbox-wrapper")},function(){p({"tag":"span","isStatic":!0},!1,function(){g("className",1,"bell-checkbox-inner")}),p({"tag":"input"},!1,function(){g("className",1,"bell-checkbox-input"),g("type",1,"checkbox"),k(a("checked",!0,!1,!0,!0)),g("name",1,j("name",a("name",!0,!1,!0,!0),1)),g("disabled",3,j("disabled",a("disabled",!0,!1,!0,!0),3))})}),p({"tag":"span"},!1,function(){g("className",1,"bell-checkbox-label")},function(){q("$slot_children",function(){e(u(a("label",!0)||a("value",!0)))})})})};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-checkbox-group"+(a("type",!0)?" bell-checkbox-group-"+u(a("type",!0)):"")+(a("size",!0)?" bell-checkbox-group-"+u(a("size",!0)):"")+(a("vertical",!0)?" bell-checkbox-vertical":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){q("$slot_children")})};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-switch"+(a("type",!0)?" bell-switch-"+u(a("type",!0)):"")+(a("size",!0)?" bell-switch-"+u(a("size",!0)):"")+(a("disabled",!0)?" bell-switch-disabled":"")+(a("checked",!0)?" bell-active":"")+(a("loading",!0)?" bell-switch-loading":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1)),l("click","event.click","click()","click")},function(){p({"tag":"span"},!1,function(){g("className",1,"bell-switch-button")},function(){p({"tag":"span"},!1,function(){g("className",1,"bell-switch-inner")},function(){a("checked",!0)?q("$slot_checkedText"):q("$slot_unCheckedText")})}),p({"tag":"input"},!1,function(){g("className",1,"bell-switch-input"),g("type",1,"hidden"),g("value",1,j("value",a("value",!0,!1,!0,!0),1))})})};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-select"+(a("size",!0)?" bell-select-"+u(a("size",!0)):"")+(a("type",!0)?" bell-select-"+u(a("type",!0)):"")+(a("visible",!0)?" bell-active":"")+(a("disabled",!0)?" bell-select-disabled":"")+(a("placement",!0)?" bell-select-"+u(a("placement",!0)):"")+(a("multiple",!0)?" bell-select-multiple":"")+(a("clearable",!0)?" bell-select-clearable":"")+(a("prefix",!0)||d(a("hasSlot",!0),["prefix"])?" bell-select-with-prefix":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-select-button")},function(){a("prefix",!0)||d(a("hasSlot",!0),["prefix"])?p({"tag":"div"},!1,function(){g("className",1,"bell-select-prefix")},function(){q("$slot_prefix",function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name",j("name",a("prefix",!0,!1,!0,!0)))})})}):p({"isComment":!0,"text":""}),p({"tag":"input"},!1,function(){g("type",1,"hidden"),k(a("value",!0,!1,!0,!0))}),p({"tag":"div"},!1,function(){g("className",1,"bell-select-value"+(a("value",!0)==null?" bell-hide":"")),l("click","event.click","toggleMenu()","toggleMenu")},function(){a("selectedText",!0)&&!a("multiple",!0)?e(u(a("selectedText",!0))):a("selectedText",!0)?t(function(){p({"tag":"Tag","isComponent":!0},!1,function(){f("size","tiny"),f("closable",true),l("close","event.close","tagClose($event, this, index)","tagClose",function(v){return [a("$event",!0,!1,!1,!1,v),a("",!1,!1,!1,!1,v),a("index",!0,!1,!1,!1,v)]})},!1,{"$slot_children":function(){e(u(a("")))}})},a("selectedText",!0,!1,!0),!1,!1,"index"):a("defaultText",!0)?e(u(a("defaultText",!0))):e("请选择...")}),p({"tag":"div","text":a("defaultText",!0)?u(a("defaultText",!0)):"请选择..."},!1,function(){g("className",1,"bell-select-placeholder"+(a("value",!0)!=null?" bell-hide":"")),l("click","event.click","toggleMenu()","toggleMenu")}),p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-down"),f("className","bell-select-arrow")}),a("clearable",!0)?p({"tag":"Icon","isComponent":!0},!1,function(){f("name","close-circle"),f("size","16"),f("className","bell-select-clear-icon"),l("click","event.click","clear()","clear")}):p({"isComment":!0,"text":""})}),p({"tag":"div"},!1,function(){g("className",1,"bell-dropdown-list")},function(){p({"tag":"ul"},!1,function(){g("className",1,"bell-dropdown-menu")},function(){q("$slot_children")})})})};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"li"},!1,function(){g("className",1,"bell-select-option"+(a("isHover",!0)?" bell-hover":"")+(a("isSelected",!0)?" bell-active":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1)),l("click","event.click","click(index)","click",function(v){return [a("index",!0,!1,!1,!1,v)]})},function(){q("$slot_children",function(){e(u(a("text",!0)))})})};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"li"},!1,function(){g("className",1,"bell-select-option-group"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){p({"tag":"div","text":u(a("label",!0))},!1,function(){g("className",1,"bell-select-option-title")}),q("$slot_children")})};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-page"+(a("size",!0)?" bell-page-"+u(a("size",!0)):"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){r("pageCenter",function(){a("current",!0)-5>=1?p({"tag":"li"},!1,function(){g("className",1,"bell-page-item bell-page-item-prev"),l("click","event.click","fastPrev()","fastPrev")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")}),p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")})}):(a("current",!0)-3>1?p({"tag":"li","text":u(a("current",!0)-3)},!1,function(){g("className",1,"bell-page-item"),l("click","event.click","changePage(current - 3)","changePage",function(v){return [a("current",!0,!1,!1,!1,v)-3]})}):p({"isComment":!0,"text":""}),a("current",!0)-4>1?p({"tag":"li","text":u(a("current",!0)-4)},!1,function(){g("className",1,"bell-page-item"),l("click","event.click","changePage(current - 4)","changePage",function(v){return [a("current",!0,!1,!1,!1,v)-4]})}):p({"isComment":!0,"text":""})),a("current",!0)-2>1?p({"tag":"li","text":u(a("current",!0)-2)},!1,function(){g("className",1,"bell-page-item"),l("click","event.click","changePage(current - 2)","changePage",function(v){return [a("current",!0,!1,!1,!1,v)-2]})}):p({"isComment":!0,"text":""}),a("current",!0)-1>1?p({"tag":"li","text":u(a("current",!0)-1)},!1,function(){g("className",1,"bell-page-item"),l("click","event.click","changePage(current - 1)","changePage",function(v){return [a("current",!0,!1,!1,!1,v)-1]})}):p({"isComment":!0,"text":""}),a("current",!0)!=1&&a("current",!0)!=a("count",!0)?p({"tag":"li","text":u(a("current",!0))},!1,function(){g("className",1,"bell-page-item bell-active")}):p({"isComment":!0,"text":""}),a("current",!0)+1<a("count",!0)?p({"tag":"li","text":u(a("current",!0)+1)},!1,function(){g("className",1,"bell-page-item"),l("click","event.click","changePage(current + 1)","changePage",function(v){return [a("current",!0,!1,!1,!1,v)+1]})}):p({"isComment":!0,"text":""}),a("current",!0)+2<a("count",!0)?p({"tag":"li","text":u(a("current",!0)+2)},!1,function(){g("className",1,"bell-page-item"),l("click","event.click","changePage(current + 2)","changePage",function(v){return [a("current",!0,!1,!1,!1,v)+2]})}):p({"isComment":!0,"text":""}),a("current",!0)+5<=a("count",!0)?p({"tag":"li"},!1,function(){g("className",1,"bell-page-item bell-page-item-next"),l("click","event.click","fastNext()","fastNext")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")}),p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")})}):(a("current",!0)+3<a("count",!0)?p({"tag":"li","text":u(a("current",!0)+3)},!1,function(){g("className",1,"bell-page-item"),l("click","event.click","changePage(current + 3)","changePage",function(v){return [a("current",!0,!1,!1,!1,v)+3]})}):p({"isComment":!0,"text":""}),a("current",!0)+4<a("count",!0)?p({"tag":"li","text":u(a("current",!0)+4)},!1,function(){g("className",1,"bell-page-item"),l("click","event.click","changePage(current + 4)","changePage",function(v){return [a("current",!0,!1,!1,!1,v)+4]})}):p({"isComment":!0,"text":""}))}),a("showTotal",!0)?p({"tag":"span","text":"共 "+u(a("total",!0))+" 条"},!1,function(){g("className",1,"bell-page-total")}):p({"isComment":!0,"text":""}),a("showSizer",!0)?p({"tag":"div"},!1,function(){g("className",1,"bell-page-select")},function(){p({"tag":"Select","isComponent":!0},!1,function(){k(a("pageSize",!0,!1,!0,!0)),f("size",j("size",a("size",!0,!1,!0,!0))),f("placement",j("placement",a("placement",!0,!1,!0,!0))),l("change","event.change","pageSizeChange()","pageSizeChange")},!1,{"$slot_children":function(){t(function(){p({"tag":"Option","isComponent":!0},!1,function(){f("index",j("index",a("index",!0,!1,!0,!0))),f("value",j("value",a("value",!0,!1,!0,!0))),f("text",j("text",a("text",!0,!1,!0,!0)))},!1,{"$slot_children":function(){e(u(a("text",!0)))}})},a("pageList",!0,!1,!0),!1,!1,"index")}})}):p({"isComment":!0,"text":""}),!a("simple",!0)?p({"tag":"ul"},!1,function(){g("className",1,"bell-page-list")},function(){p({"tag":"li"},!1,function(){g("className",1,"bell-page-item bell-page-prev"+(a("current",!0)<=1?" bell-disabled":"")),l("click","event.click","prev()","prev")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")})}),p({"tag":"li","text":"1"},!1,function(){g("className",1,"bell-page-item"+(a("current",!0)==1?" bell-active":"")),l("click","event.click","changePage(1)","changePage",function(v){return [1]})}),a("count",!0)>1?(s("pageCenter"),p({"tag":"li","text":u(a("count",!0))},!1,function(){g("className",1,"bell-page-item"+(a("current",!0)==a("count",!0)?" bell-active":"")),l("click","event.click","changePage(count)","changePage",function(v){return [a("count",!0,!1,!1,!1,v)]})})):p({"isComment":!0,"text":""}),p({"tag":"li"},!1,function(){g("className",1,"bell-page-item bell-page-next"+(a("current",!0)>=a("count",!0)?" bell-disabled":"")),l("click","event.click","next()","next")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")})})}):p({"tag":"div"},!1,function(){g("className",1,"bell-page-simple")},function(){p({"tag":"span"},!1,function(){g("className",1,"bell-page-item bell-page-prev"+(a("current",!0)<=1?" bell-disabled":"")),l("click","event.click","prev()","prev")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")})}),p({"tag":"div"},!1,function(){g("className",1,"bell-page-input")},function(){p({"tag":"Input","isComponent":!0},!1,function(){f("type","input"),f("size","small"),k(a("currentPage",!0,!1,!0,!0))})}),p({"tag":"span","text":u("/"+a("count",!0))},!1,function(){g("className",1,"bell-page-item"+(a("current",!0)==a("count",!0)?" bell-active":"")),l("click","event.click","changePage(count)","changePage",function(v){return [a("count",!0,!1,!1,!1,v)]})}),p({"tag":"span"},!1,function(){g("className",1,"bell-page-item bell-page-next"+(a("current",!0)>=a("count",!0)?" bell-disabled":"")),l("click","event.click","next()","next")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")})})}),a("showElevator",!0)?p({"tag":"div"},!1,function(){g("className",1,"bell-page-elevator")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-page-input")},function(){p({"tag":"Input","isComponent":!0},!1,function(){f("type","input"),f("placeholder","请输入页码"),k(a("elevatorPage",!0,!1,!0,!0)),f("size",j("size",a("size",!0,!1,!0,!0)))})}),p({"tag":"Button","isComponent":!0},!1,function(){f("type","primary"),l("click","event.click","elevator()","elevator")},!1,{"$slot_children":function(){e("跳转")}})}):p({"isComment":!0,"text":""})})};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-upload"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1)),l("click","event.click","click()","click")},function(){q("$slot_children")})};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-alert"+(a("type",!0)?" bell-alert-"+u(a("type",!0)):"")+(d(a("hasSlot",!0),["content"])?" bell-alert-with-content":"")+(a("showIcon",!0)||d(a("hasSlot",!0),["icon"])?" bell-alert-with-icon":"")+(a("center",!0)?" bell-alert-center":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){a("showIcon",!0)||d(a("hasSlot",!0),["icon"])?p({"tag":"span"},!1,function(){g("className",1,"bell-alert-icon")},function(){q("$slot_icon",function(){a("type",!0)==="primary"?p({"tag":"Icon","isComponent":!0},!1,function(){f("name","information-circle")}):a("type",!0)==="success"?p({"tag":"Icon","isComponent":!0},!1,function(){f("name","checkmark-circle")}):a("type",!0)==="warning"?p({"tag":"Icon","isComponent":!0},!1,function(){f("name","alert")}):a("type",!0)==="error"?p({"tag":"Icon","isComponent":!0},!1,function(){f("name","close-circle")}):p({"isComment":!0,"text":""})})}):p({"isComment":!0,"text":""}),p({"tag":"div"},!1,function(){g("className",1,"bell-alert-wrapper")},function(){d(a("hasSlot",!0),["children"])?p({"tag":"div"},!1,function(){g("className",1,"bell-alert-title")},function(){q("$slot_children")}):p({"isComment":!0,"text":""}),d(a("hasSlot",!0),["content"])?p({"tag":"div"},!1,function(){g("className",1,"bell-alert-content")},function(){q("$slot_content")}):p({"isComment":!0,"text":""})}),a("closable",!0)||d(a("hasSlot",!0),["close"])?p({"tag":"span","ref":"close"},!1,function(){g("className",1,"bell-alert-close"),l("click","event.click","close()","close")},function(){q("$slot_close",function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","close"),f("size","24")})})}):p({"isComment":!0,"text":""})})};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-spinner"+(a("size",!0)?" bell-spinner-"+u(a("size",!0)):"")+(a("type",!0)?" bell-spinner-"+u(a("type",!0)):"")+(a("fix",!0)?" bell-spinner-fix":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){q("$slot_children",function(){p({"tag":"div"},!1,function(){g("className",1,"bell-spinner-main")},function(){p({"tag":"span","isStatic":!0},!1,function(){g("className",1,"bell-spinner-dot")}),a("text",!0)?p({"tag":"span","text":u(a("text",!0))},!1,function(){g("className",1,"bell-spinner-text")}):p({"isComment":!0,"text":""})})})})};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-backtop"+(a("hidden",!0)?" bell-backtop-hide":"")+(a("className",!0)?" "+u(a("className",!0)):"")),g("style.cssText",1,"bottom: "+u(a("bottom",!0))+"px;\nright: "+u(a("right",!0))+"px;"+(a("style",!0)?" "+u(a("style",!0)):"")),m("click","event.click","click.backTop","click.backTop")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-backtop-inner")},function(){q("$slot_children",function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-up")})})})})};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-avatar bell-avatar-"+u(a("size",!0))+" bell-avatar-"+u(a("shape",!0))+(a("className",!0)?" "+u(a("className",!0)):"")),g("style.cssText",1,(a("text",!0)?"color: "+u(a("color",!0))+";":"")+(a("fontSize",!0)?"font-size: "+u(a("fontSize",!0))+"px;":"")+(a("bgColor",!0)?"background-color: "+u(a("bgColor",!0))+";":"")+(a("style",!0)?u(a("style",!0)):""))},function(){a("src",!0)?p({"tag":"img"},!1,function(){g("className",1,"bell-avatar-image"),g("src",1,j("src",a("src",!0,!1,!0,!0),1)),a("srcset",!0)&&f("srcset",j("srcset",a("srcset",!0,!1,!0,!0))),f("ondragstart","return false")}):d(a("hasSlot",!0),["icon"])?p({"tag":"span"},!1,function(){g("className",1,"bell-avatar-icon")},function(){q("$slot_icon")}):a("text",!0)?p({"tag":"span","ref":"textSpan"},!1,function(){g("className",1,"bell-avatar-text"),a("supportTransform",!0)&&a("transform",!0)&&g("style.cssText",1,"transform: "+u(a("transform",!0)))},function(){e(u(a("text",!0)))}):p({"isComment":!0,"text":""})})};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-badge"+(a("status",!0)?"-status":"")+(a("status",!0)||a("type",!0)?" bell-badge-"+u(a("status",!0)||a("type",!0)):"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){q("$slot_children"),!a("hidden",!0)?(a("dot",!0)?p({"tag":"span","isStatic":!0},!1,function(){g("className",1,"bell-badge-dot")}):p({"isComment":!0,"text":""}),a("text",!0)||d(a("isNumber",!0),[a("count",!0)])?p({"tag":"span","text":u(a("text",!0)?a("text",!0):d(a("formatText",!0),[a("count",!0),a("maxCount",!0)]))},!1,function(){g("className",1,"bell-badge-count"+(!d(a("hasSlot",!0),["children"])?" bell-badge-count-alone":""))}):p({"isComment":!0,"text":""})):p({"isComment":!0,"text":""})})};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-date"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&u(a("style",!0))},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-header")},function(){p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","this.changeDateList(-12)","changeDateList",function(v){return [-12]})},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")}),p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")})}),p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","this.changeDateList(-1)","changeDateList",function(v){return [-1]})},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")})}),p({"tag":"span","text":u(a("modeDate.year",!0))+" 年 "+u(a("modeDate.month",!0))+" 月"},!1,function(){g("className",1,"bell-text-medium")}),p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","this.changeDateList(1)","changeDateList",function(v){return [1]})},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")})}),p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","this.changeDateList(12)","changeDateList",function(v){return [12]})},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")}),p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")})})}),p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-body")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-weeks")},function(){t(function(){p({"tag":"span","text":u(a(""))},!1,function(){g("className",1,"bell-datepicker-col")})},a("weeks",!0,!1,!0))}),p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-days")},function(){t(function(){p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-row")},function(){t(function(){p({"tag":"div"},!1,function(){g("className",1,(a("isCurrentMonth",!0)&&!a("disabled",!0)?"bell-datepicker-col-current-month":(a("disabled",!0)?"bell-datepicker-col-disabled":""))+" bell-datepicker-col"+(a("isPrevMonth",!0)?" bell-datepicker-col-prev-month":"")+(a("isLastMonth",!0)?" bell-datepicker-col-last-month":"")+(a("isCurrentDate",!0)?" bell-datepicker-col-checked":"")),a("isCurrentMonth",!0)&&!a("disabled",!0)&&l("click","event.click","click(this)","click",function(v){return [a("",!1,!1,!1,!1,v)]})},function(){e(u(a("date",!0)))})},a("",!1,!1,!0),!1,!1,"index")})},a("dateList",!0,!1,!0),!1,!1,"index")})})})};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-daterange"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&u(a("style",!0))},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-header")},function(){p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","startPrevYear()","startPrevYear")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")}),p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")})}),p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","startPrevMonth()","startPrevMonth")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")})}),p({"tag":"span","text":u(a("startModeDateYear",!0))+" 年 "+u(a("startModeDateMonth",!0))+" 月"},!1,function(){g("className",1,"bell-text-medium"+(!a("splitPanel",!0)?" bell-datepicker-header-month":""))}),a("splitPanel",!0)?(p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","startNextMonth()","startNextMonth")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")})}),p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","startNextYear()","startNextYear")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")}),p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")})}),p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","endPrevYear()","endPrevYear")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")}),p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")})}),p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","endPrevMonth()","endPrevMonth")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")})})):p({"isComment":!0,"text":""}),p({"tag":"span","text":u(a("endModeDateYear",!0))+" 年 "+u(a("endModeDateMonth",!0))+" 月"},!1,function(){g("className",1,"bell-text-medium")}),p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","endNextMonth()","endNextMonth")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")})}),p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","endNextYear()","endNextYear")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")}),p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")})})}),p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-daterange-wrapper")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-body")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-weeks")},function(){t(function(){p({"tag":"span","text":u(a(""))},!1,function(){g("className",1,"bell-datepicker-col bell-text-sub")})},a("weeks",!0,!1,!0))}),p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-days")},function(){t(function(){p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-row")},function(){t(function(){p({"tag":"span"},!1,function(){g("className",1,(a("isCurrentMonth",!0)&&!a("disabled",!0)?"bell-datepicker-col-current-month":(a("disabled",!0)?"bell-datepicker-col-disabled":""))+" bell-datepicker-col"+(a("isCurrentMonth",!0)?" bell-datepicker-col-current-month":"")+(a("isPrevMonth",!0)?" bell-datepicker-col-prev-month":"")+(a("isLastMonth",!0)?" bell-datepicker-col-last-month":"")+(a("isCurrentMonth",!0)&&a("isCheckedDate",!0)?" bell-datepicker-col-checked":"")+(a("isCurrentMonth",!0)&&a("isRangeDate",!0)?" bell-datepicker-col-range":"")),a("isCurrentMonth",!0)&&!a("disabled",!0)&&l("click","event.click","click(this)","click",function(v){return [a("",!1,!1,!1,!1,v)]}),l("mouseover","event.mouseover","hover(this)","hover",function(v){return [a("",!1,!1,!1,!1,v)]})},function(){e(u(a("date",!0)))})},a("",!1,!1,!0),!1,!1,"index")})},a("startModeList",!0,!1,!0),!1,!1,"key")})}),p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-body")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-weeks")},function(){t(function(){p({"tag":"span","text":u(a(""))},!1,function(){g("className",1,"bell-datepicker-col bell-text-sub")})},a("weeks",!0,!1,!0))}),p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-days")},function(){t(function(){p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-row")},function(){t(function(){p({"tag":"span"},!1,function(){g("className",1,(a("isCurrentMonth",!0)&&!a("disabled",!0)?"bell-datepicker-col-current-month":(a("disabled",!0)?"bell-datepicker-col-disabled":""))+" bell-datepicker-col"+(a("isCurrentMonth",!0)?" bell-datepicker-col-current-month":"")+(a("isPrevMonth",!0)?" bell-datepicker-col-prev-month":"")+(a("isLastMonth",!0)?" bell-datepicker-col-last-month":"")+(a("isCurrentMonth",!0)&&a("isCheckedDate",!0)?" bell-datepicker-col-checked":"")+(a("isCurrentMonth",!0)&&a("isRangeDate",!0)?" bell-datepicker-col-range":"")),a("isCurrentMonth",!0)&&!a("disabled",!0)&&l("click","event.click","click(this)","click",function(v){return [a("",!1,!1,!1,!1,v)]}),l("mouseover","event.mouseover","hover(this)","hover",function(v){return [a("",!1,!1,!1,!1,v)]})},function(){e(u(a("date",!0)))})},a("",!1,!1,!0),!1,!1,"index")})},a("endModeList",!0,!1,!0),!1,!1,"key")})})})})};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-week"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&u(a("style",!0))},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-header")},function(){p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","prevYear()","prevYear")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")}),p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")})}),p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","prevMonth()","prevMonth")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")})}),p({"tag":"span","text":u(a("currentYear",!0))+" 年 "+u(a("currentMonth",!0))+" 月"},!1,function(){g("className",1,"bell-text-medium")}),p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","nextMonth()","nextMonth")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")})}),p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","nextYear()","nextYear")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")}),p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")})})}),p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-body")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-weeks")},function(){t(function(){p({"tag":"span","text":u(a(""))},!1,function(){g("className",1,"bell-datepicker-col bell-text-sub")})},a("weeks",!0,!1,!0))}),p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-days")},function(){t(function(){p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-row"+(a("checkedIndex",!0)==a("index",!0)?" bell-datepicker-row-checked":"")),l("click","event.click","click(this)","click",function(v){return [a("",!1,!1,!1,!1,v)]})},function(){t(function(){p({"tag":"span","text":u(a("date",!0))},!1,function(){g("className",1,"bell-datepicker-col"+(a("isCurrentMonth",!0)?" bell-datepicker-col-current-month":"")+(a("isPrevMonth",!0)?" bell-datepicker-col-prev-month":"")+(a("isLastMonth",!0)?" bell-datepicker-col-last-month":"")+(a("isCurrentDate",!0)?" bell-datepicker-col-checked":""))})},a("",!1,!1,!0),!1,!1,"key")})},a("dateList",!0,!1,!0),!1,!1,"index")})})})};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-month"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&u(a("style",!0))},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-header")},function(){p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","this.decrease('modeYear', 10)","decrease",function(v){return ["modeYear",10]})},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")}),p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")})}),p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","this.decrease('modeYear', 1)","decrease",function(v){return ["modeYear",1]})},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")})}),p({"tag":"span","text":u(a("modeYear",!0))+" 年"},!1,function(){g("className",1,"bell-text-medium")}),p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","this.increase('modeYear', 1)","increase",function(v){return ["modeYear",1]})},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")})}),p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","this.increase('modeYear', 10)","increase",function(v){return ["modeYear",10]})},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")}),p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")})})}),p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-body")},function(){t(function(){p({"tag":"span","text":u(a(""))},!1,function(){g("className",1,"bell-datepicker-col"+(a("checkedMonth",!0)==a("index",!0)&&a("checkedYear",!0)==a("modeYear",!0)?" bell-datepicker-col-checked":"")),l("click","event.click","click(index)","click",function(v){return [a("index",!0,!1,!1,!1,v)]})})},a("months",!0,!1,!0),!1,!1,"index")})})};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-year"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&u(a("style",!0))},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-header")},function(){p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","prev()","prev")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-back")})}),p({"tag":"span","text":u(a("modeYear",!0))+" 年 ~ "+u(a("modeYear",!0)+12)+" 年"},!1,function(){g("className",1,"bell-text-medium")}),p({"tag":"span"},!1,function(){g("className",1,"bell-datepicker-header-button"),l("click","event.click","next()","next")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-forward")})})}),p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-body")},function(){t(function(){p({"tag":"span","text":u(a(""))},!1,function(){g("className",1,"bell-datepicker-col"+(a("checkedYear",!0)==a("")?" bell-datepicker-col-checked":"")),l("click","event.click","click(this)","click",function(v){return [a("",!1,!1,!1,!1,v)]})})},a("years",!0,!1,!0),!1,!1,"index")})})};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){p({"tag":"Dropdown","isComponent":!0},!1,function(){f("height",a("autoClose",!0)?230:320),f("className","bell-datepicker-dropdown"),f("placement",j("placement",a("placement",!0,!1,!0,!0))),f("trigger","custom"),f("visible",j("visible",a("isOpen",!0,!1,!0,!0)))},!1,{"$slot_children":function(){p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-el")},function(){q("$slot_children",function(){p({"tag":"Input","isComponent":!0},!1,function(){f("placeholder","请选择日期..."),k(a("formatDate",!0,!1,!0,!0)),f("type","input"),f("size",j("size",a("size",!0,!1,!0,!0))),l("focus","event.focus","focus()","focus"),f("suffix","calendar"),f("clearable",j("clearable",a("clearable",!0,!1,!0,!0)))})})})},"$slot_list":function(){a("shortcuts",!0)?p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-sidebar")},function(){t(function(){p({"tag":"div","text":u(a("text",!0))},!1,function(){g("className",1,"bell-datepicker-shortcut"),l("click","event.click","shortcutClick(this)","shortcutClick",function(v){return [a("",!1,!1,!1,!1,v)]})})},a("shortcuts",!0,!1,!0))}):p({"isComment":!0,"text":""}),p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-poper"+(a("shortcuts",!0)?" bell-datepicker-poper-with-sidebar":""))},function(){a("type",!0)=="date"?p({"tag":"Date","isComponent":!0},!1,function(){f("multiple",j("multiple",a("multiple",!0,!1,!0,!0))),f("startDate",j("startDate",a("startDate",!0,!1,!0,!0))),a("multiple",!0)?f("selected",j("selected",a("value",!0,!1,!0,!0))):f("value",j("value",a("value",!0,!1,!0,!0))),f("disabledDate",j("disabledDate",a("disabledDate",!0,!1,!0,!0)))}):a("type",!0)=="dateRange"?p({"tag":"DateRange","isComponent":!0},!1,function(){f("splitPanel",j("splitPanel",a("splitPanel",!0,!1,!0,!0))),f("startDate",j("startDate",a("startDate",!0,!1,!0,!0))),f("value",j("value",a("value",!0,!1,!0,!0))),f("disabledDate",j("disabledDate",a("disabledDate",!0,!1,!0,!0)))}):a("type",!0)=="week"?p({"tag":"DateWeek","isComponent":!0},!1,function(){f("startDate",j("startDate",a("startDate",!0,!1,!0,!0))),f("value",j("value",a("value",!0,!1,!0,!0)))}):a("type",!0)=="year"?p({"tag":"DateYear","isComponent":!0},!1,function(){f("startDate",j("startDate",a("startDate",!0,!1,!0,!0))),f("value",j("value",a("value",!0,!1,!0,!0)))}):a("type",!0)=="month"?p({"tag":"DateMonth","isComponent":!0},!1,function(){f("startDate",j("startDate",a("startDate",!0,!1,!0,!0))),f("value",j("value",a("value",!0,!1,!0,!0)))}):p({"isComment":!0,"text":""})}),a("autoClose",!0)?p({"tag":"div"},!1,function(){g("className",1,"bell-datepicker-confirm")},function(){p({"tag":"Button","isComponent":!0},!1,function(){f("size","small"),f("type","primary"),l("click","event.click","ok()","ok")},!1,{"$slot_children":function(){e("确认")}}),p({"tag":"Button","isComponent":!0},!1,function(){f("size","small"),l("click","event.click","clear()","clear")},!1,{"$slot_children":function(){e("清空")}})}):p({"isComment":!0,"text":""})}})})};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-tooltip"+(a("isShow",!0)?" bell-show":"")+(a("isHover",!0)?" bell-hover":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){p({"tag":"div","ref":"contents"},!1,function(){g("className",1,"bell-tooltip-el"),l("mouseover","event.mouseover","hover()","hover"),l("mouseleave","event.mouseleave","leave()","leave"),l("click","event.click","click()","click")},function(){q("$slot_children")}),p({"tag":"div","ref":"poperElement"},!1,function(){g("className",1,"bell-tooltip-popper"+(a("disabled",!0)?" bell-tooltip-disabled":"")),f("data-placement",a("placement",!0)?a("placement",!0):"bottom")},function(){p({"tag":"div","isStatic":!0},!1,function(){g("className",1,"bell-tooltip-arrow")}),p({"tag":"div","ref":"innerElement"},!1,function(){g("className",1,"bell-tooltip-inner"),g("style.cssText",1,(a("maxWidth",!0)?"max-width: "+u(a("maxWidth",!0))+"px":"")+";"+(a("maxHeight",!0)?" max-height: "+u(a("maxHeight",!0))+"px":"")+";")},function(){q("$slot_content",function(){e(u(a("content",!0)))})})})})};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-tooltip-inner-content"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){q("$slot_children")})};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-collapse"+(a("bordered",!0)?" bell-collapse-bordered":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&u(a("style",!0))},function(){q("$slot_children")})};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-collapse-item"+(a("opened",!0)?" bell-collapse-item-open":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&u(a("style",!0))},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-collapse-header"),l("click","event.click","click()","click")},function(){q("$slot_icon",function(){a("showIcon",!0)?p({"tag":"Icon","isComponent":!0},!1,function(){f("name","arrow-down"),f("className","bell-collapse-header-icon")}):p({"isComment":!0,"text":""})}),e(u(a("title",!0))),d(a("hasSlot",!0),["extra"])?p({"tag":"div"},!1,function(){g("className",1,"bell-collapse-header-extra")},function(){q("$slot_extra")}):p({"isComment":!0,"text":""})}),p({"tag":"div","ref":"content"},!1,function(){g("className",1,"bell-collapse-content")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-collapse-content-box")},function(){q("$slot_children")})})})};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-card"+(a("bordered",!0)?" bell-card-bordered":"")+(a("hoverDisabled",!0)?" bell-card-hover-disabled":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){q("$slot_children")})};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-card-header"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){q("$slot_avatar"),p({"tag":"div"},!1,function(){g("className",1,"bell-card-header-detail")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-card-header-title")},function(){q("$slot_title"),q("$slot_children")}),d(a("hasSlot",!0),["subTitle"])?p({"tag":"div"},!1,function(){g("className",1,"bell-card-header-sub-title")},function(){q("$slot_subTitle")}):p({"isComment":!0,"text":""})}),d(a("hasSlot",!0),["extra"])?p({"tag":"span"},!1,function(){g("className",1,"bell-card-header-extra")},function(){q("$slot_extra")}):p({"isComment":!0,"text":""}),q("$slot_children")})};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-card-media"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){d(a("hasSlot",!0),["children"])?q("$slot_children"):p({"isComment":!0,"text":""}),p({"tag":"div"},!1,function(){g("className",1,"bell-card-media-detail")},function(){a("title",!0)?p({"tag":"div","text":u(a("title",!0))},!1,function(){g("className",1,"bell-card-media-title")}):p({"isComment":!0,"text":""}),a("subTitle",!0)?p({"tag":"div","text":u(a("subTitle",!0))},!1,function(){g("className",1,"bell-card-media-sub-title")}):p({"isComment":!0,"text":""})})})};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-card-body"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){q("$slot_children")})};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-card-actions"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){q("$slot_children")})};

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"ul"},!1,function(){g("className",1,"bell-list"+(a("border",!0)?" bell-list-border":"")+(a("size",!0)?" bell-list-"+u(a("size",!0)):"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){d(a("hasSlot",!0),["subHeader"])?p({"tag":"div"},!1,function(){g("className",1,"bell-list-header")},function(){q("$slot_subHeader")}):p({"isComment":!0,"text":""}),a("loading",!0)?p({"tag":"Spinner","isComponent":!0},!1,function(){f("size","large"),f("fix",true)}):p({"isComment":!0,"text":""}),q("$slot_children",function(){p({"tag":"div"},!1,function(){g("className",1,"bell-list-empty")},function(){q("$slot_empty",function(){p({"tag":"p","isStatic":!0,"text":"暂无数据"},!1,function(){g("className",1,"bell-list-empty-description")})})})})})};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"li"},!1,function(){g("className",1,"bell-list-item"+(a("className",!0)?" "+u(a("className",!0)):"")+(d(a("hasSlot",!0),["header"])?" bell-list-item-has-header":"")+(d(a("hasSlot",!0),["footer"])?" bell-list-item-has-footer":"")),d(a("hasSlot",!0),["nested"])&&m("click","event.click","click.item","click.item"),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-list-item-content"+(!a("disableHover",!0)?" bell-list-item-content-hover":"")+(a("active",!0)?" bell-active":""))},function(){d(a("hasSlot",!0),["header"])?p({"tag":"div"},!1,function(){g("className",1,"bell-list-item-header")},function(){q("$slot_header")}):p({"isComment":!0,"text":""}),d(a("hasSlot",!0),["footer"])?p({"tag":"div"},!1,function(){g("className",1,"bell-list-item-footer")},function(){q("$slot_footer")}):p({"isComment":!0,"text":""}),d(a("hasSlot",!0),["children"])?p({"tag":"div"},!1,function(){g("className",1,"bell-list-item-text")},function(){q("$slot_children")}):p({"isComment":!0,"text":""})}),d(a("hasSlot",!0),["nested"])?p({"tag":"div"},!1,function(){g("className",1,"bell-list-item-nested"+(a("nestedIsShow",!0)?" bell-show":""))},function(){q("$slot_nested")}):p({"isComment":!0,"text":""})})};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-divider bell-divider-"+u(a("type",!0))+(d(a("hasSlot",!0),["children"])?" bell-divider-with-text-"+u(a("align",!0)):"")+(a("dashed",!0)?" bell-divider-dashed":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){d(a("hasSlot",!0),["children"])?p({"tag":"div"},!1,function(){g("className",1,"bell-divider-text")},function(){q("$slot_children")}):p({"isComment":!0,"text":""})})};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-circle"+(a("dashboard",!0)?" bell-circle-dashboard":"")+(a("className",!0)?" "+u(a("className",!0)):"")),g("style.cssText",1,"width: "+u(a("size",!0))+"px;\nheight: "+u(a("size",!0))+"px;"+(a("style",!0)?u(a("style",!0)):""))},function(){p({"tag":"svg","isSvg":!0},!1,function(){f("viewBox","0 0 100 100")},function(){p({"tag":"path","isSvg":!0},!1,function(){f("d",j("d",a("path",!0,!1,!0,!0))),f("stroke",j("stroke",a("trailColor",!0,!1,!0,!0))),f("stroke-width",j("stroke-width",a("trailWidth",!0,!1,!0,!0))),f("fill-opacity","0"),f("style",j("style",a("trailStyle",!0,!1,!0,!0)))}),p({"tag":"path","isSvg":!0},!1,function(){f("d",j("d",a("path",!0,!1,!0,!0))),f("stroke-linecap",j("stroke-linecap",a("strokeLinecap",!0,!1,!0,!0))),f("stroke",j("stroke",a("strokeColor",!0,!1,!0,!0))),f("stroke-width",j("stroke-width",a("strokeWidth",!0,!1,!0,!0))),f("fill-opacity","0"),f("style",j("style",a("pathStyle",!0,!1,!0,!0)))})}),p({"tag":"div"},!1,function(){g("className",1,"bell-circle-inner")},function(){q("$slot_children")})})};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-progress"+(a("type",!0)?" "+u(a("type",!0)):"")+(a("active",!0)?" active":"")+(a("vertical",!0)?" bell-progress-vertical":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-progress-outer")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-progress-inner"),g("style.cssText",1,a("vertical",!0)&&" width: "+a("strokeWidth",!0)+"px;")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-progress-bg"),g("style.cssText",1,!a("vertical",!0)?"width: "+a("percent",!0)+"%;\n          height: "+a("strokeWidth",!0)+"px;":"height: "+a("percent",!0)+"%;\n          width: "+a("strokeWidth",!0)+"px;")})})}),!a("hideInfo",!0)?p({"tag":"span"},!1,function(){g("className",1,"bell-progress-inner-text")},function(){q("$slot_children",function(){e(u(a("percent",!0))),e("%")})}):p({"isComment":!0,"text":""})})};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-slider"+(a("disabled",!0)?" bell-slider-disabled":"")+(a("type",!0)?" bell-slider-"+u(a("type",!0)):"")+(a("dragging",!0)?" dragging":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1)),l("blur","event.blur","handleBlur()","handleBlur"),l("focus","event.focus","handleFocus()","handleFocus"),l("touchstart","event.touchstart","handleTouchStart()","handleTouchStart"),l("touchend","event.touchend","handleTouchEnd()","handleTouchEnd"),l("touchcancel","event.touchcancel","handleTouchEnd()","handleTouchEnd"),l("mousedown","event.mousedown","handleMouseDown()","handleMouseDown"),l("mouseup","event.mouseup","handleMouseUp()","handleMouseUp"),l("mouseenter","event.mouseenter","handleMouseEnter()","handleMouseEnter"),l("mouseleave","event.mouseleave","handleMouseLeave()","handleMouseLeave")},function(){p({"tag":"input"},!1,function(){g("type",1,"hidden"),g("disabled",3,a("disabled",!0)?" disabled":""),k(a("value",!0,!1,!0,!0))}),p({"tag":"div"},!1,function(){g("className",1,"bell-slider-bg")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-slider-fill"),g("style.cssText",1,"width: "+u(a("percent",!0))+"%;")}),p({"tag":"div"},!1,function(){g("className",1,"bell-slider-thumb"),g("style.cssText",1,"left: "+u(a("percent",!0))+"%"),g("title",1,"值："+u(a("value",!0))+"；占比："+u(a("percent",!0)+"%"))})}),p({"tag":"div"},!1,function(){g("className",1,"bell-tooltip"+(a("dragging",!0)?" bell-show":"")),g("style.cssText",1,"left:"+u(a("percent",!0))+"%;margin-left: -29px;top: -68px;")},function(){p({"tag":"div","ref":"tooltip"},!1,function(){g("className",1,"bell-tooltip-popper"),f("data-placement","top")},function(){p({"tag":"div","isStatic":!0},!1,function(){g("className",1,"bell-tooltip-arrow")}),p({"tag":"div","text":u(a("percent",!0))+"%"},!1,function(){g("className",1,"bell-tooltip-inner")})})})})};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-tag"+(a("border",!0)?" bell-tag-border":"")+(a("dot",!0)?" bell-tag-dot":"")+(a("size",!0)?" bell-tag-"+u(a("size",!0)):"")+(a("type",!0)?" bell-tag-"+u(a("type",!0)):"")+(a("checked",!0)?" bell-tag-checked":"")+(a("closable",!0)?" bell-tag-closable":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1)),l("click","event.click","click()","click")},function(){a("dot",!0)?p({"tag":"span","isStatic":!0},!1,function(){g("className",1,"bell-tag-dot-inner")}):p({"isComment":!0,"text":""}),p({"tag":"span"},!1,function(){g("className",1,"bell-tag-text")},function(){q("$slot_children")}),a("closable",!0)?p({"tag":"Icon","isComponent":!0},!1,function(){f("name","close"),f("className","bell-tag-close-icon"),l("click","event.click","close()","close")}):p({"isComment":!0,"text":""})})};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-rate"+(a("readOnly",!0)?" bell-rate-readonly":"")+(a("type",!0)?" bell-rate-"+u(a("type",!0)):"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1)),l("mouseleave","event.mouseleave","handleLeave()","handleLeave")},function(){p({"tag":"input"},!1,function(){g("type",1,"hidden"),k(a("value",!0,!1,!0,!0))}),t(function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name",j("name",a("icon",!0,!1,!0,!0))),f("className","bell-rate-star-full "+(a("activeValue",!0)-a("")>=0?" active":"")),l("mousemove","event.mousemove","handleMove($event, this)","handleMove",function(v){return [a("$event",!0,!1,!1,!1,v),a("",!1,!1,!1,!1,v)]}),l("click","event.click","handleClick($event, this)","handleClick",function(v){return [a("$event",!0,!1,!1,!1,v),a("",!1,!1,!1,!1,v)]})},!1,{"$slot_children":function(){a("half",!0)?p({"tag":"span"},!1,function(){f("data-type","half"),g("className",1,"bell-icon bell-rate-star-content bell-icon-ios-star-half"+(a("activeValue",!0)-a("")>=-0.5?" active":""))}):p({"isComment":!0,"text":""})}})},{value:1},a("count",!0,!1,!0),!0),a("showTexts",!0)?p({"tag":"span"},!1,function(){g("className",1,"bell-rate-text")},function(){q("$slot_children",function(){!a("texts",!0)?u(a("value",!0))+" 星":e(u(d(a("getValue",!0),[a("activeValue",!0)])))})}):p({"isComment":!0,"text":""})})};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-tabs bell-tabs-"+u(a("type",!0))+(a("size",!0)?" bell-tabs-"+u(a("size",!0)):"")+(a("animated",!0)?" bell-tabs-animated":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-tabs-bar")},function(){d(a("hasSlot",!0),["extra"])?p({"tag":"div"},!1,function(){g("className",1,"bell-tabs-extra-container")},function(){q("$slot_extra")}):p({"isComment":!0,"text":""}),p({"tag":"div"},!1,function(){g("className",1,"bell-tabs-nav-container")},function(){p({"tag":"span","isStatic":!0},!1,function(){g("className",1,"bell-tabs-tab-prev")}),p({"tag":"span","isStatic":!0},!1,function(){g("className",1,"bell-tabs-tab-next")}),p({"tag":"div"},!1,function(){g("className",1,"bell-tabs-tab-wrap")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-tabs-tab-scroll")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-tabs-nav"+(a("closable",!0)?" bell-tabs-nav-closable":""))},function(){t(function(){p({"tag":"div"},!1,function(){g("className",1,"bell-tabs-tab"+(a("disabled",!0)?" bell-tabs-tab-disabled":"")+(a("value",!0)===a("id",!0)?" bell-tabs-tab-active":"")),l("click","event.click","click(this)","click",function(v){return [a("",!1,!1,!1,!1,v)]})},function(){a("icon")?p({"tag":"Icon","isComponent":!0},!1,function(){f("className","bell-tabs-tab-icon"),f("name",j("name",a("icon",!1,!1,!0,!0)))}):p({"isComment":!0,"text":""}),e(u(a("label",!0))),a("closable",!0)?p({"tag":"Icon","isComponent":!0},!1,function(){f("className","bell-tabs-tab-icon-close"),f("name","close"),f("size","22"),l("click","event.click","close(this)","close",function(v){return [a("",!1,!1,!1,!1,v)]})}):p({"isComment":!0,"text":""})})},a("tabsList",!0,!1,!0))})})})})}),p({"tag":"div"},!1,function(){g("className",1,"bell-tabs-content"),g("style.cssText",1,"transform: translateX("+u(a("translateStyle",!0))+");")},function(){q("$slot_children")})})};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-tabs-panel"+(a("disabled",!0)?" bell-tabs-panel-disabled":"")+(a("isActive",!0)?" bell-active":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){q("$slot_children")})};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-dropdown"+(a("isOpen",!0)?" bell-dropdown-open":"")+(a("disabled",!0)?" bell-dropdown-disabled":"")+(a("className",!0)?" "+u(a("className",!0)):"")),f("data-placement",j("data-placement",a("placement",!0,!1,!0,!0))),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1)),a("trigger",!0)===a("RAW_HOVER",!0)&&(l("mouseenter","event.mouseenter","set('isOpen', TRUE)","set",function(v){return ["isOpen",a("TRUE",!0,!1,!1,!1,v)]}),l("mouseleave","event.mouseleave","set('isOpen', FALSE)","set",function(v){return ["isOpen",a("FALSE",!0,!1,!1,!1,v)]}),h("mouseleave",300))},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-dropdown-trigger"),a("trigger",!0)===a("RAW_CLICK",!0)&&l("click","event.click","toggle('isOpen')","toggle",function(v){return ["isOpen"]})},function(){q("$slot_children")}),p({"tag":"div"},!1,function(){g("className",1,"bell-dropdown-list"),a("isOpen",!0)&&a("height",!0)>0&&g("style.cssText",1,"max-height: "+u(a("height",!0))+"px;")},function(){q("$slot_list")})})};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"li"},!1,function(){g("className",1,"bell-dropdown-item"+(a("selected",!0)?" bell-dropdown-selected":"")+(a("disabled",!0)?" bell-dropdown-disabled":"")+(a("divided",!0)?" bell-dropdown-divided":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1)),!a("disabled",!0)&&m("click","event.click","click.dropdownItem","click.dropdownItem")},function(){q("$slot_children")})};

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"ul"},!1,function(){g("className",1,"bell-dropdown-menu"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){q("$slot_children")})};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-transfer")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-transfer-list")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-transfer-list-header")},function(){p({"tag":"span"},!1,function(){g("className",1,"bell-transfer-list-header-checkbox")},function(){p({"tag":"Checkbox","isComponent":!0},!1,function(){k(a("checkLeftAll",!0,!1,!0,!0)),f("onChange",j("onChange",a("onCheckLeftAllChange",!0,!1,!0,!0)))})}),p({"tag":"span","text":u(a("leftLabel",!0))},!1,function(){g("className",1,"bell-transfer-list-header-title")}),p({"tag":"span","text":u(a("left.length",!0))+" / "+u(a("leftList.length",!0))},!1,function(){g("className",1,"bell-transfer-list-header-count")})}),p({"tag":"div"},!1,function(){g("className",1,"bell-transfer-list-body")},function(){p({"tag":"CheckboxGroup","isComponent":!0},!1,function(){f("vertical",true),k(a("left",!0,!1,!0,!0)),f("onChange",j("onChange",a("onLeftChange",!0,!1,!0,!0)))},!1,{"$slot_children":function(){t(function(){p({"tag":"Checkbox","isComponent":!0},!1,function(){f("value",j("value",a("key",!1,!1,!0,!0)))},!1,{"$slot_children":function(){p({"tag":"span","text":u(a("text",!0))})}})},a("leftList",!0,!1,!0))}})})}),p({"tag":"div"},!1,function(){g("className",1,"bell-transfer-actions")},function(){p({"tag":"Button","isComponent":!0},!1,function(){f("shape","circle"),l("click","event.click","addToLeft()","addToLeft")},!1,{"$slot_children":function(){p({"tag":"i","isStatic":!0},!1,function(){g("className",1,"bell-icon bell-icon-ios-arrow-left")})}}),p({"tag":"Button","isComponent":!0},!1,function(){f("shape","circle"),l("click","event.click","addToRight()","addToRight")},!1,{"$slot_children":function(){p({"tag":"i","isStatic":!0},!1,function(){g("className",1,"bell-icon bell-icon-ios-arrow-right")})}})}),p({"tag":"div"},!1,function(){g("className",1,"bell-transfer-list")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-transfer-list-header")},function(){p({"tag":"span"},!1,function(){g("className",1,"bell-transfer-list-header-checkbox")},function(){p({"tag":"Checkbox","isComponent":!0},!1,function(){k(a("checkRightAll",!0,!1,!0,!0)),f("onChange",j("onChange",a("onCheckRightAllChange",!0,!1,!0,!0)))})}),p({"tag":"span","text":u(a("rightLabel",!0))},!1,function(){g("className",1,"bell-transfer-list-header-title")}),p({"tag":"span","text":u(a("right.length",!0))+" / "+u(a("rightList.length",!0))},!1,function(){g("className",1,"bell-transfer-list-header-count")})}),p({"tag":"div"},!1,function(){g("className",1,"bell-transfer-list-body")},function(){p({"tag":"CheckboxGroup","isComponent":!0},!1,function(){f("vertical",true),k(a("right",!0,!1,!0,!0)),f("onChange",j("onChange",a("onRightChange",!0,!1,!0,!0)))},!1,{"$slot_children":function(){t(function(){p({"tag":"Checkbox","isComponent":!0},!1,function(){f("value",j("value",a("key",!1,!1,!0,!0)))},!1,{"$slot_children":function(){p({"tag":"span","text":u(a("text",!0))})}})},a("rightList",!0,!1,!0))}})})})})};

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-time-inputs")},function(){p({"tag":"div"},!1,function(){g("className",1,"wrapper")},function(){p({"tag":"span"},!1,function(){g("className",1,"icon icon-caret-up bell-button"),l("click","event.click","downTens()","downTens")}),p({"tag":"input"},!1,function(){g("className",1,"bell-time-input"),g("type",1,"text"),k(a("tens",!0,!1,!0,!0))}),p({"tag":"span"},!1,function(){g("className",1,"icon icon-caret-down bell-button"),l("click","event.click","upTens()","upTens")})}),p({"tag":"div"},!1,function(){g("className",1,"wrapper")},function(){p({"tag":"span"},!1,function(){g("className",1,"icon icon-caret-up bell-button"),l("click","event.click","downOnes()","downOnes")}),p({"tag":"input"},!1,function(){g("className",1,"bell-time-input"),g("type",1,"text"),k(a("ones",!0,!1,!0,!0))}),p({"tag":"span"},!1,function(){g("className",1,"icon icon-caret-down bell-button"),l("click","event.click","upOnes()","upOnes")})}),p({"tag":"span","text":u(a("unit",!0))},!1,function(){g("className",1,"bell-time-unit")})})};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"ul"},!1,function(){g("className",1,"bell-timeline"+(a("pending",!0)?" bell-timeline-pending":""))},function(){q("$slot_children")})};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"li"},!1,function(){g("className",1,"bell-timeline-item")},function(){p({"tag":"div","isStatic":!0},!1,function(){g("className",1,"bell-timeline-tail")}),d(a("hasSlot",!0),["dot"])?p({"tag":"div"},!1,function(){g("className",1,"bell-timeline-custom")},function(){q("$slot_dot")}):p({"isComment":!0,"text":""}),!d(a("hasSlot",!0),["dot"])?p({"tag":"div"},!1,function(){g("className",1,"bell-timeline-dot"),g("style.cssText",1,"color: "+u(a("color",!0)))}):p({"isComment":!0,"text":""}),p({"tag":"div"},!1,function(){g("className",1,"bell-timeline-content")},function(){q("$slot_children")})})};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-form"+(a("inline",!0)?" bell-form-inline":"")+(a("className",!0)?" "+u(a("className",!0)):"")),f("data-position",j("data-position",a("labelPosition",!0,!1,!0,!0))),a("style",!0)&&u(a("style",!0))},function(){q("$slot_children")})};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-form-item"+(a("required",!0)?" bell-form-item-required":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){a("label",!0)||d(a("hasSlot",!0),["lable"])?p({"tag":"label"},!1,function(){g("className",1,"bell-form-item-label"),a("width",!0)&&g("style.cssText",1,"width: "+u(a("width",!0))+"px;"),a("labelFor",!0)&&g("htmlFor",1,j("htmlFor",a("labelFor",!0,!1,!0,!0),1))},function(){q("$slot_label",function(){e(u(a("label",!0)))})}):p({"isComment":!0,"text":""}),p({"tag":"div"},!1,function(){g("className",1,"bell-form-item-content"),a("label",!0)||d(a("hasSlot",!0),["lable"])&&a("width",!0)&&g("style.cssText",1,"margin-left: "+u(a("width",!0))+"px;")},function(){q("$slot_children"),a("isShowError",!0)&&a("error",!0)||a("errorMsg",!0)?p({"tag":"div","text":u(a("error",!0)||a("errorMsg",!0))},!1,function(){g("className",1,"bell-form-item-error-tip")}):p({"isComment":!0,"text":""})})})};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-dialog"+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-dialog-mask"),l("click","event.click","close()","close")}),p({"tag":"div"},!1,function(){g("className",1,"bell-dialog-content")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-dialog-title")},function(){q("$slot_title",function(){e(u(a("title",!0)))}),a("closable",!0)?p({"tag":"Button","isComponent":!0},!1,function(){f("className","bell-dialog-close"),f("size","small"),f("borderType","none"),l("click","event.click","close()","close")},!1,{"$slot_icon":function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("size","28"),f("name","close")})}}):p({"isComment":!0,"text":""})}),d(a("hasSlot",!0),["children"])?p({"tag":"div"},!1,function(){g("className",1,"bell-dialog-body")},function(){q("$slot_children")}):p({"isComment":!0,"text":""}),d(a("hasSlot",!0),["actions"])?p({"tag":"div"},!1,function(){g("className",1,"bell-dialog-actions")},function(){q("$slot_actions")}):p({"isComment":!0,"text":""})})})};

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"table"},!1,function(){g("className",1,"bell-table"+(a("stripe",!0)?" bell-table-stripe":"")+(a("border",!0)?" bell-table-border":"")+(a("className",!0)?" "+u(a("className",!0)):"")),a("style",!0)&&g("style.cssText",1,j("style.cssText",a("style",!0,!1,!0,!0),1))},function(){p({"tag":"colgroup"},!1,!1,function(){t(function(){p({"tag":"col"},!1,function(){f("align","left"),g("width",2,j("width",a("",!1,!1,!0,!0),2))})},a("colWidths",!0,!1,!0))}),p({"tag":"thead"},!1,function(){g("className",1,"bell-table-header")},function(){t(function(){p({"tag":"th"},!1,function(){g("className",1,(a("className",!0)?u(a("className",!0)):"")+(a("fixed",!0)||a("height",!0)&&!a("header",!0)?" bell-table-hidden":""))},function(){a("key",!0)!=="checked"?e(u(a("title",!0))):p({"tag":"Checkbox","isComponent":!0},!1,function(){f("checked",j("checked",a("checkAll",!0,!1,!0,!0))),l("change","event.change","checkedAllChange()","checkedAllChange")},!1,{"$slot_children":function(){e(u(a("title",!0)))}})})},a("columns",!0,!1,!0))}),p({"tag":"tbody"},!1,function(){g("className",1,"bell-table-body")},function(){a("fixed",!0)?t(function(){p({"tag":"tr"},!1,function(){g("className",1,j("className",a("list.length",!0,!1,!0,!0),1))},function(){t(function(){a("actions",!0)&&a("actions.length",!0)?p({"tag":"td"},!1,!1,function(){t(function(){p({"tag":"Button","isComponent":!0},!1,function(){l("click","event.click","click(this, list[ index ], index)","click",function(v){return [a("",!1,!1,!1,!1,v),a(b("list",[a("index",!0,!1,!1,!1,v)]),!0,!1,!1,!1,v),a("index",!0,!1,!1,!1,v)]}),f("className",j("className",a("className",!0,!1,!0,!0))),f("disabled",j("disabled",a("disabled",!0,!1,!0,!0))),f("fluid",j("fluid",a("fluid",!0,!1,!0,!0))),f("shape",j("shape",a("shape",!0,!1,!0,!0))),f("size",j("size",a("size",!0,!1,!0,!0))),f("type",j("type",a("type",!0,!1,!0,!0)))},!1,{"$slot_children":function(){e(u(a("text",!0)))}})},a("actions",!0,!1,!0))}):a(b("list",[a("index",!0),a("key",!0)]),!0)?p({"tag":"td"},!1,function(){g("className",1,(a("className",!0)?u(a("className",!0)):"")+(a(b("list",[a("index",!0),"cellClassName"]),!0)&&a(b("list",[a("index",!0),"cellClassName",a("key")]),!0)?" "+u(a(b("list",[a("index",!0),"cellClassName",a("key")]),!0)):"")),d(a("isObject",!0),[a(b("list",[a("index",!0),a("key",!0)]),!0)])&&a(b("list",[a("index",!0),a("key",!0),"rowSpan"]),!0)&&f("rowspan",a(b("list",[a("index",!0),a("key",!0),"rowSpan"]),!0)),d(a("isObject",!0),[a(b("list",[a("index",!0),a("key",!0)]),!0)])&&a(b("list",[a("index",!0),a("key",!0),"colSpan"]),!0)&&f("colspan",a(b("list",[a("index",!0),a("key",!0),"colSpan"]),!0))},function(){a("key",!0)=="index"?a("setIndex",!0)?e(u(d(a("setIndex",!0),[a(""),a("index",!0)]))):e(u(a("index",!0)+1)):a("key",!0)=="checked"?p({"tag":"Checkbox","isComponent":!0},!1,function(){f("checked",a(b("list",[a("index",!0),a("key",!0)]),!0)),l("change","event.change","checkedChange($data, index)","checkedChange",function(v){return [a("$data",!0,!1,!1,!1,v),a("index",!0,!1,!1,!1,v)]})}):a("key",!0)!="action"?e(u(d(a("isObject",!0),[a(b("list",[a("index",!0),a("key",!0)]),!0)])?a(b("list",[a("index",!0),a("key",!0),"value"]),!0):a(b("list",[a("index",!0),a("key",!0)]),!0))):p({"isComment":!0,"text":""})}):p({"isComment":!0,"text":""})},a("columns",!0,!1,!0))})},a("list",!0,!1,!0),!1,!1,"index"):!a("header",!0)?t(function(){p({"tag":"tr"},!1,function(){g("className",1,(a("setRowClassName",!0)?u(d(a("setRowClassName",!0),[a(""),a("index",!0)])):"")+(a("currentItem",!0)&&a("currentIndex",!0)==a("index",!0)?" bell-table-active":"")+u(a("list.length",!0))),l("click","event.click","rowClick(this, index)","rowClick",function(v){return [a("",!1,!1,!1,!1,v),a("index",!0,!1,!1,!1,v)]})},function(){t(function(){a(b("list",[a("index",!0),a("key",!0)]),!0)?p({"tag":"td"},!1,function(){g("className",1,(a("className",!0)?u(a("className",!0)):"")+(a(b("list",[a("index",!0),"cellClassName"]),!0)&&a(b("list",[a("index",!0),"cellClassName",a("key")]),!0)?" "+u(a(b("list",[a("index",!0),"cellClassName",a("key")]),!0)):"")+u(a(b("list",[a("index",!0),a("key",!0)]),!0))+"-"+u(a("index",!0))),d(a("isObject",!0),[a(b("list",[a("index",!0),a("key",!0)]),!0)])&&a(b("list",[a("index",!0),a("key",!0),"rowSpan"]),!0)&&f("rowspan",a(b("list",[a("index",!0),a("key",!0),"rowSpan"]),!0)),d(a("isObject",!0),[a(b("list",[a("index",!0),a("key",!0)]),!0)])&&a(b("list",[a("index",!0),a("key",!0),"colSpan"]),!0)&&f("colspan",a(b("list",[a("index",!0),a("key",!0),"colSpan"]),!0))},function(){a("key",!0)=="index"?a("setIndex",!0)?e(u(d(a("setIndex",!0),[a(""),a("index",!0)]))):e(u(a("index",!0)+1)):a("key",!0)=="checked"?p({"tag":"Checkbox","isComponent":!0},!1,function(){f("checked",a(b("list",[a("index",!0),a("key",!0)]),!0)),l("change","event.change","checkedChange($data, index)","checkedChange",function(v){return [a("$data",!0,!1,!1,!1,v),a("index",!0,!1,!1,!1,v)]})}):a("key",!0)!="action"?e(u(d(a("isObject",!0),[a(b("list",[a("index",!0),a("key",!0)]),!0)])?a(b("list",[a("index",!0),a("key",!0),"value"]),!0):a(b("list",[a("index",!0),a("key",!0)]),!0))):p({"isComment":!0,"text":""})}):p({"isComment":!0,"text":""})},a("columns",!0,!1,!0))})},a("list",!0,!1,!0),!1,!1,"index"):p({"isComment":!0,"text":""})})})};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,a("fixedLeftList.length",!0)||a("fixedRightList.length",!0)||a("height",!0)&&"bell-table-fixed"),g("style.cssText",1,a("width",!0)&&" width: "+a("width",!0)+"px; overflow-x: auto;")},function(){a("height",!0)?p({"tag":"div"},!1,function(){g("className",1,"bell-table-fixed-header")},function(){p({"tag":"SmallTable","isComponent":!0},!1,function(){o(a("",!1,!1,!0,!0)),f("header",true)})}):p({"isComment":!0,"text":""}),a("fixedLeftList.length",!0)?p({"tag":"div"},!1,function(){g("className",1,"bell-table-fixed-left")},function(){p({"tag":"SmallTable","isComponent":!0},!1,function(){o(a("",!1,!1,!0,!0)),f("fixed",true),f("columns",j("columns",a("fixedLeftList",!0,!1,!0,!0))),f("list",j("list",a("list",!0,!1,!0,!0)))})}):p({"isComment":!0,"text":""}),p({"tag":"div"},!1,function(){g("className",1,"bell-table-insert"+(a("height",!0)?" bell-table-insert":"")),a("height",!0)&&g("style.cssText",1,"height: "+u(a("height",!0))+"px; overflow-y: auto;")},function(){p({"tag":"SmallTable","isComponent":!0},!1,function(){o(a("",!1,!1,!0,!0))})}),a("fixedRightList.length",!0)?p({"tag":"div"},!1,function(){g("className",1,"bell-table-fixed-right")},function(){p({"tag":"SmallTable","isComponent":!0},!1,function(){o(a("",!1,!1,!0,!0)),f("fixed",true),f("columns",j("columns",a("fixedRightList",!0,!1,!0,!0))),f("list",j("list",a("list",!0,!1,!0,!0)))})}):p({"isComment":!0,"text":""})})};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-message bell-message-"+u(a("type",!0))+(a("isShow",!0)?" bell-show":"")),g("style.cssText",1,"margin-left: -"+u(a("marginLeft",!0)/2)+"px;"+(a("top",!0)?" top: "+u(a("top",!0))+"px;":""))},function(){p({"tag":"Alert","isComponent":!0},!1,function(){f("type",j("type",a("type",!0,!1,!0,!0))),f("closeText",j("closeText",a("closeText",!0,!1,!0,!0))),f("center",j("center",a("center",!0,!1,!0,!0))),f("showIcon",j("showIcon",a("showIcon",!0,!1,!0,!0))),f("closable",j("closable",a("closable",!0,!1,!0,!0))),f("close",j("close",a("close",!0,!1,!0,!0)))},!1,{"$slot_children":function(){e(u(a("content",!0)))}})})};

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-notice bell-notice-"+u(a("type",!0))+(a("visible",!0)?" bell-show":"")),g("style.cssText",1,"width: "+u(a("width",!0))+"px;"+(a("rightSize",!0)?"right: "+u(a("rightSize",!0))+"px;":""))},function(){p({"tag":"div","text":u(a("title",!0))},!1,function(){g("className",1,"bell-notice-title")}),p({"tag":"div","text":u(a("content",!0))},!1,function(){g("className",1,"bell-notice-desc")}),a("duration",!0)==0?p({"tag":"Icon","isComponent":!0},!1,function(){f("name","close"),f("className","bell-notice-close"),l("click","event.click","close()","close")}):p({"isComment":!0,"text":""})})};

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-msg-alert-wrapper"+(a("isHidden",!0)?" bell-msg-alert-hidden":""))},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-msg-alert"),a("width",!0)&&g("style.cssText",1,"width: "+u(a("width",!0))+"px;")},function(){a("closable",!0)?p({"tag":"div"},!1,function(){g("className",1,"bell-msg-alert-close"),l("click","event.click","hide()","hide")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","close")})}):p({"isComment":!0,"text":""}),a("title",!0)?p({"tag":"div","html":u(a("title",!0))},!1,function(){g("className",1,"bell-msg-alert-title")}):p({"isComment":!0,"text":""}),p({"tag":"div","html":u(a("content",!0))},!1,function(){g("className",1,"bell-msg-alert-desc")}),p({"tag":"div"},!1,function(){g("className",1,"bell-msg-alert-footer")},function(){p({"tag":"Button","isComponent":!0},!1,function(){f("type",j("type",a("button.type",!0,!1,!0,!0))),l("click","event.click","hide()","hide")},!1,{"$slot_children":function(){e(u(a("button.text",!0)))}})})}),a("mask",!0)?p({"tag":"div"},!1,function(){g("className",1,"bell-msg-mask"),l("click","event.click","maskClick()","maskClick")}):p({"isComment":!0,"text":""})})};

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-msg-confirm-wrapper"+(a("isHidden",!0)?" bell-msg-confirm-hidden":""))},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-msg-confirm"),a("width",!0)&&g("style.cssText",1,"width: "+u(a("width",!0))+"px;")},function(){a("closable",!0)?p({"tag":"div"},!1,function(){g("className",1,"bell-msg-confirm-close"),l("click","event.click","hide()","hide")},function(){p({"tag":"Icon","isComponent":!0},!1,function(){f("name","close")})}):p({"isComment":!0,"text":""}),a("title",!0)?p({"tag":"div","html":u(a("title",!0))},!1,function(){g("className",1,"bell-msg-confirm-title")}):p({"isComment":!0,"text":""}),p({"tag":"div","html":u(a("content",!0))},!1,function(){g("className",1,"bell-msg-confirm-desc")}),a("buttons",!0)?p({"tag":"div"},!1,function(){g("className",1,"bell-msg-confirm-footer")},function(){t(function(){p({"tag":"Button","isComponent":!0},!1,function(){f("type",j("type",a("type",!0,!1,!0,!0))),l("click","event.click","buttonClick(index)","buttonClick",function(v){return [a("index",!0,!1,!1,!1,v)]})},!1,{"$slot_children":function(){e(u(a("text",!0)))}})},a("buttons",!0,!1,!0),!1,!1,"index")}):p({"isComment":!0,"text":""})}),a("mask",!0)?p({"tag":"div"},!1,function(){g("className",1,"bell-msg-mask"),l("click","event.click","maskClick()","maskClick")}):p({"isComment":!0,"text":""})})};

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return p({"tag":"div"},!1,function(){g("className",1,"bell-loadingbar"+(a("type",!0)?" bell-loadingbar-"+u(a("type",!0)):""))},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-loadingbar-inner")},function(){p({"tag":"div"},!1,function(){g("className",1,"bell-loadingbar-bg"),g("style.cssText",1,"width: "+u(a("percent",!0))+"%;\n        height: "+u(a("height",!0))+"px;"+(a("color",!0)?" color: "+u(a("color",!0))+";":""))})})})};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(80);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(81)))

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/css/index.styl
var css = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/yox/dist/standard/dev/yox.esm.js
var yox_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./src/components/layout/template/Layout.hbs
var Layout = __webpack_require__(2);
var Layout_default = /*#__PURE__*/__webpack_require__.n(Layout);

// CONCATENATED MODULE: ./src/components/constant.js
var TRUE = true;
var FALSE = false;
var NULL = null;
var UNDEFINED = void 0;
var RAW_ARRAY = 'array';
var RAW_STRING = 'string';
var RAW_BOOLEAN = 'boolean';
var RAW_NUMERIC = 'numeric';
var RAW_NUMBER = 'number';
var RAW_OBJECT = 'object';
var RAW_FUNCTION = 'function';
var RAW_HORIZONTAL = 'horizontal';
var RAW_VERTICAL = 'vertical';
var RAW_TINY = 'tiny';
var RAW_SMALL = 'small';
var RAW_DEFAULT = 'default';
var RAW_LARGE = 'large';
var RAW_HUGE = 'huge';
var RAW_HOVER = 'hover';
var RAW_CLICK = 'click';
var RAW_CUSTOM = 'custom';
var RAW_CENTER = 'center';
var RAW_TOP = 'top';
var RAW_TOP_START = 'top-start';
var RAW_TOP_END = 'top-end';
var RAW_BOTTOM = 'bottom';
var RAW_BOTTOM_START = 'bottom-start';
var RAW_BOTTOM_END = 'bottom-end';
var RAW_LEFT = 'left';
var RAW_LEFT_START = 'left-start';
var RAW_LEFT_END = 'left-end';
var RAW_RIGHT = 'right';
var RAW_RIGHT_START = 'right-start';
var RAW_RIGHT_END = 'right-end';
var RAW_TYPE_PRIMARY = 'primary';
var RAW_TYPE_INFO = 'info';
var RAW_TYPE_SUCCESS = 'success';
var RAW_TYPE_WARNING = 'warning';
var RAW_TYPE_ERROR = 'error';
var RAW_TYPE_SECONDARY = 'secondary';
var RAW_SHAPE_CIRCLE = 'circle';
var RAW_SHAPE_ROUND = 'round';
var RAW_ICON_IOS = 'ios';
var RAW_ICON_MD = 'md';
var RAW_TYPE_ARRAY = [
    RAW_TYPE_PRIMARY,
    RAW_TYPE_INFO,
    RAW_TYPE_SUCCESS,
    RAW_TYPE_WARNING,
    RAW_TYPE_ERROR,
    RAW_TYPE_SECONDARY
];
var RAW_SIZE_ARRAY = [
    RAW_TINY,
    RAW_SMALL,
    RAW_DEFAULT,
    RAW_LARGE,
    RAW_HUGE
];
var RAW_ICON_TYPE_ARRAY = [
    RAW_ICON_IOS,
    RAW_ICON_MD
];
var RAW_PLACEMENT_ARRAY = [
    RAW_TOP,
    RAW_TOP_START,
    RAW_TOP_END,
    RAW_BOTTOM,
    RAW_BOTTOM_START,
    RAW_BOTTOM_END,
    RAW_LEFT,
    RAW_LEFT_START,
    RAW_LEFT_END,
    RAW_RIGHT,
    RAW_RIGHT_START,
    RAW_RIGHT_END
];

// CONCATENATED MODULE: ./src/components/layout/Layout.ts



/* harmony default export */ var layout_Layout = (yox_esm["a" /* default */].define({
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
    template: Layout_default.a,
    data: function () {
        return {
            hasSider: FALSE
        };
    },
    events: {
        hasSider: function (event) {
            var me = this;
            if (event.phase === yox_esm["a" /* default */].Event.PHASE_CURRENT) {
                return;
            }
            if (event.phase === yox_esm["a" /* default */].Event.PHASE_UPWARD) {
                me.set({
                    hasSider: TRUE
                });
                me.fire('hasSider', TRUE);
            }
            // 阻止嵌套模式下 上层 layout 发下来的 hasSider 事件
            event.stop();
        }
    }
}));

// EXTERNAL MODULE: ./src/components/layout/template/Header.hbs
var Header = __webpack_require__(3);
var Header_default = /*#__PURE__*/__webpack_require__.n(Header);

// CONCATENATED MODULE: ./src/components/layout/Header.ts



/* harmony default export */ var layout_Header = (yox_esm["a" /* default */].define({
    propTypes: {
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Header_default.a
}));

// EXTERNAL MODULE: ./src/components/layout/template/Sider.hbs
var Sider = __webpack_require__(4);
var Sider_default = /*#__PURE__*/__webpack_require__.n(Sider);

// CONCATENATED MODULE: ./src/components/layout/Sider.ts



/* harmony default export */ var layout_Sider = (yox_esm["a" /* default */].define({
    propTypes: {
        isCollapsed: {
            type: RAW_BOOLEAN
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    model: 'isCollapsed',
    template: Sider_default.a,
    afterMount: function () {
        this.fire('hasSider');
    }
}));

// EXTERNAL MODULE: ./src/components/layout/template/Content.hbs
var Content = __webpack_require__(5);
var Content_default = /*#__PURE__*/__webpack_require__.n(Content);

// CONCATENATED MODULE: ./src/components/layout/Content.ts



/* harmony default export */ var layout_Content = (yox_esm["a" /* default */].define({
    propTypes: {
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Content_default.a,
    events: {
        hasSider: function () {
            this.set({
                hasSider: TRUE
            });
        }
    },
    data: function () {
        return {
            hasSider: FALSE
        };
    }
}));

// EXTERNAL MODULE: ./src/components/layout/template/Footer.hbs
var Footer = __webpack_require__(6);
var Footer_default = /*#__PURE__*/__webpack_require__.n(Footer);

// CONCATENATED MODULE: ./src/components/layout/Footer.ts



/* harmony default export */ var layout_Footer = (yox_esm["a" /* default */].define({
    propTypes: {
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Footer_default.a
}));

// EXTERNAL MODULE: ./src/components/menu/template/Menu.hbs
var Menu = __webpack_require__(7);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu);

// CONCATENATED MODULE: ./src/components/util.js

var util_element = document.createElement('div');
var prefixs = ['Webkit', 'Moz', 'O', 'ms'];
function testCSS(property) {
    var upperCase = property.charAt(0).toUpperCase()
        + property.slice(1);
    var list = (property
        + ' '
        + prefixs.join(upperCase + ' ')
        + upperCase).split(' ');
    for (var i = 0, len = list.length; i < len; i++) {
        if (list[i] in util_element.style) {
            return list[i];
        }
    }
}
var transitionEnd = testCSS('transition') ? 'transitionend' : '';
var supportTransform = testCSS('transform') ? true : false;
function onTransitionEnd(el, callback) {
    if (transitionEnd) {
        Yox.dom.on(el, transitionEnd, function (event) {
            Yox.dom.off(el, transitionEnd, event.listener);
            callback();
        });
    }
    else {
        Yox.nextTick(callback);
    }
}
var requestAnimationFrame = (window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        return window.setTimeout(callback, 1000 / 60);
    });
function contains(element, target) {
    if (element.contains && element.contains(target)) {
        return true;
    }
    else if (element.compareDocumentPosition && element.compareDocumentPosition(target) > 16) {
        return true;
    }
    return false;
}
function isDef(value) {
    return value !== UNDEFINED;
}
function findComponentUpward(parent, componentName) {
    if (Yox.is.string(componentName)) {
        componentName = [componentName];
    }
    else {
        componentName = componentName;
    }
    while (parent) {
        var name_1 = parent.$options.name;
        if (name_1 && Yox.array.has(componentName, name_1)) {
            break;
        }
        else {
            parent = parent.$parent;
        }
    }
    return parent;
}
function oneOf(values) {
    return function (key, value) {
        if (!Yox.array.has(values, value)) {
            Yox.logger.warn(key + " \u671F\u671B\u662F " + values.join(',') + " \u4E2D\u7684\u503C\uFF0C\u5B9E\u9645\u4F20\u503C " + value + "\u3002");
        }
        return true;
    };
}
function isDate() {
    return function (key, value) {
        if (value instanceof Date) {
            return true;
        }
        Yox.logger.warn(key + " \u671F\u671B\u662F Date \u7C7B\u578B\uFF0C\u5B9E\u9645\u4F20\u503C " + value + "\u3002");
    };
}
function scrollTop(element, from, to, duration, endCallback) {
    if (from === void 0) { from = 0; }
    if (duration === void 0) { duration = 500; }
    var difference = Math.abs(from - to);
    var step = Math.ceil(difference / duration * 50);
    function scroll(start, end, step) {
        if (start === end) {
            endCallback && endCallback();
            return;
        }
        var duration = (start + step > end) ? end : start + step;
        if (start > end) {
            duration = (start - step < end) ? end : start - step;
        }
        if (element === window) {
            window.scrollTo(duration, duration);
        }
        else {
            element.scrollTop = duration;
        }
        requestAnimationFrame(function () {
            scroll(duration, end, step);
        });
    }
    scroll(from, to, step);
}
function getType(value) {
    return Object.prototype.toString.call(value).toLowerCase().slice(8, -1);
}

// CONCATENATED MODULE: ./src/components/menu/Menu.ts




/* harmony default export */ var menu_Menu = (yox_esm["a" /* default */].define({
    name: 'bell-menu',
    propTypes: {
        mode: {
            type: oneOf([RAW_HORIZONTAL, RAW_VERTICAL]),
            value: RAW_HORIZONTAL
        },
        theme: {
            type: oneOf(['dark', 'light']),
            value: 'dark'
        },
        isCollapsed: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        activeName: {
            type: RAW_STRING
        },
        openNames: {
            type: RAW_ARRAY,
            value: []
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Menu_default.a,
    watchers: {
        theme: function (theme) {
            this.fire('themeChanged', { theme: theme }, TRUE);
        },
        isCollapsed: function (isCollapsed) {
            this.fire('isCollapsedChanged', { isCollapsed: isCollapsed }, TRUE);
        }
    },
    events: {
        menuItemSelected: function (event, data) {
            if (event.phase === yox_esm["a" /* default */].Event.PHASE_UPWARD) {
                this.fire('menuItemSelected', data, TRUE);
            }
        }
    }
}));

// EXTERNAL MODULE: ./src/components/menu/template/MenuItem.hbs
var MenuItem = __webpack_require__(8);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem);

// CONCATENATED MODULE: ./src/components/menu/MenuItem.ts




/* harmony default export */ var menu_MenuItem = (yox_esm["a" /* default */].define({
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
    template: MenuItem_default.a,
    data: function () {
        return {
            mode: NULL,
            isActive: FALSE,
            isCollapsed: FALSE
        };
    },
    events: {
        menuItemSelected: function (event, data) {
            if (event.phase === yox_esm["a" /* default */].Event.PHASE_DOWNWARD) {
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
        var element = findComponentUpward(this.$parent, 'bell-menu');
        this.set({
            'mode': element.get('mode'),
            'isActive': element.get('activeName') === this.get('name')
        });
    }
}));

// EXTERNAL MODULE: ./src/components/menu/template/MenuGroup.hbs
var MenuGroup = __webpack_require__(9);
var MenuGroup_default = /*#__PURE__*/__webpack_require__.n(MenuGroup);

// CONCATENATED MODULE: ./src/components/menu/MenuGroup.ts




/* harmony default export */ var menu_MenuGroup = (yox_esm["a" /* default */].define({
    propTypes: {
        title: {
            type: RAW_STRING
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: MenuGroup_default.a,
    data: function () {
        return {
            mode: NULL,
            theme: NULL
        };
    },
    events: {
        themeChanged: function (_, data) {
            this.set('theme', data.theme);
        }
    },
    afterMount: function () {
        var element = findComponentUpward(this.$parent, 'bell-menu');
        this.set({
            'mode': element.get('mode'),
            'theme': element.get('theme'),
        });
    }
}));

// EXTERNAL MODULE: ./src/components/menu/template/Submenu.hbs
var Submenu = __webpack_require__(10);
var Submenu_default = /*#__PURE__*/__webpack_require__.n(Submenu);

// CONCATENATED MODULE: ./src/components/menu/Submenu.ts




/* harmony default export */ var menu_Submenu = (yox_esm["a" /* default */].define({
    propTypes: {
        name: {
            type: RAW_STRING
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Submenu_default.a,
    data: function () {
        return {
            isOpen: FALSE,
            isActive: FALSE,
            activeName: NULL,
            mode: NULL,
            theme: NULL,
            isCollapsed: FALSE,
            isAnimation: FALSE
        };
    },
    methods: {
        click: function () {
            if (this.get('isAnimation')) {
                return;
            }
            if (this.get('isOpen')) {
                this.close();
            }
            else {
                this.open();
            }
        },
        close: function () {
            var me = this;
            me.set({
                isAnimation: TRUE
            });
            var element = me.$refs.menu;
            if (me.get('mode') === 'inline') {
                element = me.$refs.menu.$el;
            }
            element.style.height = element.clientHeight + "px";
            element.style.overflow = 'hidden';
            setTimeout(function () {
                if (!element) {
                    return;
                }
                element.style.height = '0px';
                onTransitionEnd(element, function () {
                    me.set({
                        isAnimation: FALSE,
                        isOpen: FALSE
                    });
                    me.nextTick(function () {
                        element.style.height = '';
                    });
                });
            });
        },
        open: function () {
            var me = this;
            me.set({
                isAnimation: TRUE,
                isOpen: TRUE
            });
            me.nextTick(function () {
                var element = me.$refs.menu;
                if (me.get('mode') === 'inline') {
                    element = me.$refs.menu.$el;
                }
                var height = element.clientHeight;
                element.style.height = "0px";
                element.style.overflow = 'hidden';
                setTimeout(function () {
                    if (!me.$el) {
                        return;
                    }
                    element.style.height = height + "px";
                    onTransitionEnd(element, function () {
                        me.set({
                            isAnimation: FALSE
                        });
                        element.style.overflow = '';
                    });
                });
            });
        }
    },
    events: {
        themeChanged: function (_, data) {
            this.set('theme', data.theme);
        },
        isCollapsedChanged: function (_, data) {
            this.set('isCollapsed', data.isCollapsed);
        },
        menuItemSelected: function (event, data) {
            if (event.phase === yox_esm["a" /* default */].Event.PHASE_DOWNWARD) {
                this.set('isActive', data.name === this.get('activeName'));
            }
            else if (event.phase === yox_esm["a" /* default */].Event.PHASE_UPWARD) {
                this.set('activeName', data.name);
                if (this.get('mode') !== 'inline' || this.get('isCollapsed')) {
                    this.click();
                }
            }
        }
    },
    afterMount: function () {
        var element = findComponentUpward(this.$parent, 'bell-menu');
        this.set({
            'mode': element.get('mode'),
            'theme': element.get('theme'),
            'isActive': element.get('activeName') === this.get('name'),
            'isOpen': element.get('openNames').indexOf(this.get('name')) >= 0
        });
    }
}));

// EXTERNAL MODULE: ./src/components/grid/template/Row.hbs
var Row = __webpack_require__(11);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row);

// CONCATENATED MODULE: ./src/components/grid/Row.ts



/* harmony default export */ var grid_Row = (yox_esm["a" /* default */].define({
    propTypes: {
        gutter: {
            type: RAW_NUMERIC,
            value: 0
        },
        type: {
            type: RAW_STRING
        },
        justify: {
            type: RAW_STRING
        },
        align: {
            type: RAW_STRING
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    name: 'bell-raw',
    template: Row_default.a,
    watchers: {
        gutter: {
            watcher: function (value) {
                this.fire('gutterChanged.row', {
                    gutter: value
                }, TRUE);
            },
            immediate: TRUE
        }
    },
    computed: {
        inlineStyle: function () {
            var gap = 0;
            var style = '';
            if (this.get('style')
                && yox_esm["a" /* default */].string.trim(this.get('style'))
                && !yox_esm["a" /* default */].string.endsWith(style, ';')) {
                style += ';';
            }
            if (this.get('gutter')) {
                gap = +this.get('gutter') / 2;
            }
            return style + "margin-left: -" + gap + "px; margin-right: -" + gap + "px;";
        }
    }
}));

// EXTERNAL MODULE: ./src/components/grid/template/Col.hbs
var Col = __webpack_require__(12);
var Col_default = /*#__PURE__*/__webpack_require__.n(Col);

// CONCATENATED MODULE: ./src/components/grid/Col.ts




/* harmony default export */ var grid_Col = (yox_esm["a" /* default */].define({
    propTypes: {
        span: {
            type: RAW_NUMERIC
        },
        order: {
            type: RAW_NUMERIC
        },
        offset: {
            type: RAW_NUMERIC
        },
        push: {
            type: RAW_NUMERIC
        },
        pull: {
            type: RAW_NUMERIC
        },
        xs: {
            type: [RAW_NUMERIC, RAW_OBJECT]
        },
        sm: {
            type: [RAW_NUMERIC, RAW_OBJECT]
        },
        md: {
            type: [RAW_NUMERIC, RAW_OBJECT]
        },
        lg: {
            type: [RAW_NUMERIC, RAW_OBJECT]
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Col_default.a,
    data: function () {
        return {
            style: '',
            gutter: ''
        };
    },
    computed: {
        xsClass: function () {
            var data = this.get('xs');
            if (!data) {
                return;
            }
            return this.getClass('xs', data);
        },
        smClass: function () {
            var data = this.get('sm');
            if (!data) {
                return;
            }
            return this.getClass('sm', data);
        },
        mdClass: function () {
            var data = this.get('md');
            if (!data) {
                return;
            }
            return this.getClass('md', data);
        },
        lgClass: function () {
            var data = this.get('lg');
            if (!data) {
                return;
            }
            return this.getClass('lg', data);
        },
        inlineStyle: function () {
            var gap = 0;
            var style = '';
            if (this.get('style')
                && yox_esm["a" /* default */].string.trim(this.get('style'))
                && !yox_esm["a" /* default */].string.endsWith(style, ';')) {
                style += ';';
            }
            if (this.get('gutter')) {
                gap = +this.get('gutter') / 2;
            }
            return style + "padding-left: " + gap + "px; padding-right: " + gap + "px";
        }
    },
    methods: {
        getClass: function (name, data) {
            var classArr = [];
            if (yox_esm["a" /* default */].is.object(data)) {
                if (data.span) {
                    classArr.push('bell-col-' + name + '-' + data.span);
                }
                if (data.order) {
                    classArr.push('bell-col-' + name + '-order-' + data.order);
                }
                if (data.offset) {
                    classArr.push('bell-col-' + name + '-offset-' + data.offset);
                }
                if (data.push) {
                    classArr.push('bell-col-' + name + '-push-' + data.push);
                }
                if (data.pull) {
                    classArr.push('bell-col-' + name + '-pull-' + data.pull);
                }
            }
            else {
                classArr.push('bell-col-' + name + '-' + data);
            }
            return classArr.join(' ');
        }
    },
    events: {
        'gutterChanged.row': function (event, data) {
            this.set({
                gutter: data.gutter
            });
            event.stop();
        }
    },
    afterMount: function () {
        var row = findComponentUpward(this.$parent, 'bell-raw');
        this.set('gutter', row.get('gutter'));
    }
}));

// EXTERNAL MODULE: ./src/components/icon/template/Icon.hbs
var Icon = __webpack_require__(13);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon);

// CONCATENATED MODULE: ./src/components/icon/Icon.ts




/* harmony default export */ var icon_Icon = (yox_esm["a" /* default */].define({
    propTypes: {
        type: {
            type: oneOf(RAW_ICON_TYPE_ARRAY),
            value: RAW_ICON_IOS
        },
        name: {
            type: RAW_STRING
        },
        size: {
            type: RAW_NUMERIC,
            value: 14
        },
        color: {
            type: RAW_STRING
        },
        spin: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Icon_default.a
}));

// EXTERNAL MODULE: ./src/components/drawer/template/Drawer.hbs
var Drawer = __webpack_require__(14);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer);

// CONCATENATED MODULE: ./src/components/drawer/Drawer.ts




var CLASS_OPEN = 'bell-drawer-open';
var CLASS_LEAVE = 'bell-drawer-leave';
/* harmony default export */ var drawer_Drawer = (yox_esm["a" /* default */].define({
    propTypes: {
        title: {
            type: RAW_STRING
        },
        width: {
            type: RAW_STRING,
            value: 256
        },
        height: {
            type: RAW_STRING,
            value: 256
        },
        maskClosable: {
            type: RAW_BOOLEAN,
            value: TRUE
        },
        closable: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        placement: {
            type: RAW_STRING,
            value: 'left'
        },
        mask: {
            type: RAW_BOOLEAN,
            value: TRUE
        },
        open: {
            type: RAW_BOOLEAN
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    model: 'open',
    template: Drawer_default.a,
    watchers: {
        open: function (isOpen) {
            var me = this, element = this.$el;
            if (isOpen) {
                yox_esm["a" /* default */].dom.addClass(element, CLASS_OPEN);
                onTransitionEnd(element, function () {
                    me.fire('open.drawer');
                });
            }
            else {
                yox_esm["a" /* default */].dom.addClass(element, CLASS_LEAVE);
                onTransitionEnd(element, function () {
                    yox_esm["a" /* default */].dom.removeClass(element, CLASS_OPEN);
                    yox_esm["a" /* default */].dom.removeClass(element, CLASS_LEAVE);
                    me.fire('close.drawer');
                });
            }
        }
    },
    computed: {
        contentStyle: function () {
            var style = '';
            if (this.get('placement') === 'left'
                || this.get('placement') === 'right') {
                var width = +this.get('width');
                if (width < 100) {
                    style = "width: " + width + "%;";
                }
                else {
                    style = "width: " + width + "px;";
                }
            }
            else {
                var height = +this.get('height');
                if (height < 100) {
                    style = "height: " + height + "%;";
                }
                else {
                    style = "height: " + height + "px;";
                }
            }
            return style;
        }
    },
    methods: {
        close: function () {
            this.set('open', FALSE);
        }
    },
    afterMount: function () {
        yox_esm["a" /* default */].dom.append(document.body, this.$el);
    },
    beforeDestroy: function () {
        yox_esm["a" /* default */].dom.remove(document.body, this.$el);
    }
}));

// EXTERNAL MODULE: ./src/components/breadcrumb/template/Breadcrumb.hbs
var Breadcrumb = __webpack_require__(15);
var Breadcrumb_default = /*#__PURE__*/__webpack_require__.n(Breadcrumb);

// CONCATENATED MODULE: ./src/components/breadcrumb/Breadcrumb.ts



/* harmony default export */ var breadcrumb_Breadcrumb = (yox_esm["a" /* default */].define({
    propTypes: {
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Breadcrumb_default.a
}));

// EXTERNAL MODULE: ./src/components/breadcrumb/template/BreadcrumbItem.hbs
var BreadcrumbItem = __webpack_require__(16);
var BreadcrumbItem_default = /*#__PURE__*/__webpack_require__.n(BreadcrumbItem);

// CONCATENATED MODULE: ./src/components/breadcrumb/BreadcrumbItem.ts



/* harmony default export */ var breadcrumb_BreadcrumbItem = (yox_esm["a" /* default */].define({
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
    template: BreadcrumbItem_default.a,
}));

// EXTERNAL MODULE: ./src/components/button/template/Button.hbs
var Button = __webpack_require__(17);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);

// CONCATENATED MODULE: ./src/components/button/Button.ts




/* harmony default export */ var button_Button = (yox_esm["a" /* default */].define({
    propTypes: {
        type: {
            type: oneOf(RAW_TYPE_ARRAY),
            value: RAW_DEFAULT
        },
        size: {
            type: oneOf([RAW_TINY, RAW_SMALL, RAW_LARGE])
        },
        borderType: {
            type: oneOf(['solid', 'none', 'dashed']),
            value: 'solid'
        },
        shape: {
            type: RAW_STRING
        },
        fluid: {
            type: RAW_BOOLEAN
        },
        disabled: {
            type: RAW_BOOLEAN
        },
        ghost: {
            type: RAW_BOOLEAN
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Button_default.a,
}));

// EXTERNAL MODULE: ./src/components/button/template/ButtonGroup.hbs
var ButtonGroup = __webpack_require__(18);
var ButtonGroup_default = /*#__PURE__*/__webpack_require__.n(ButtonGroup);

// CONCATENATED MODULE: ./src/components/button/ButtonGroup.ts




/* harmony default export */ var button_ButtonGroup = (yox_esm["a" /* default */].define({
    propTypes: {
        size: {
            type: oneOf(['large', 'small', 'tiny'])
        },
        shape: {
            type: oneOf(['round', 'circle'])
        },
        vertical: {
            type: RAW_BOOLEAN
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: ButtonGroup_default.a,
}));

// EXTERNAL MODULE: ./src/components/input/template/Input.hbs
var Input = __webpack_require__(19);
var Input_default = /*#__PURE__*/__webpack_require__.n(Input);

// CONCATENATED MODULE: ./src/components/input/Input.ts




var TEXT_TYPE_PASSWORD = 'password';
var TEXT_TYPE_TEXTAREA = 'textarea';
var TEXT_TYPE_TEXT = 'text';
var ROWS_HEIGHT = 22;
/* harmony default export */ var input_Input = (yox_esm["a" /* default */].define({
    propTypes: {
        value: {
            type: RAW_STRING
        },
        size: {
            type: RAW_STRING
        },
        search: {
            type: RAW_BOOLEAN
        },
        enterButton: {
            type: [RAW_BOOLEAN, RAW_STRING]
        },
        autoSize: {
            type: [RAW_BOOLEAN, RAW_OBJECT]
        },
        type: {
            type: RAW_STRING
        },
        status: {
            type: RAW_STRING
        },
        placeholder: {
            type: RAW_STRING
        },
        rows: {
            type: RAW_NUMERIC,
            value: 2
        },
        disabled: {
            type: RAW_BOOLEAN
        },
        clearable: {
            type: RAW_BOOLEAN
        },
        secure: {
            type: RAW_BOOLEAN
        },
        prefix: {
            type: RAW_STRING
        },
        suffix: {
            type: RAW_STRING
        },
        autocomplete: {
            type: oneOf(['on', 'off'])
        },
        wrap: {
            type: oneOf(['hard', 'soft'])
        },
        spellcheck: {
            type: RAW_BOOLEAN
        },
        readonly: {
            type: RAW_BOOLEAN
        },
        maxLength: {
            type: RAW_NUMERIC
        },
        style: {
            type: RAW_STRING
        },
        className: {
            type: RAW_STRING
        }
    },
    template: Input_default.a,
    data: function () {
        return {
            isSecure: TRUE,
            isFocus: FALSE,
            currentType: this.get('type'),
            TEXT_TYPE_TEXT: TEXT_TYPE_TEXT,
            TEXT_TYPE_TEXTAREA: TEXT_TYPE_TEXTAREA,
            TEXT_TYPE_PASSWORD: TEXT_TYPE_PASSWORD,
        };
    },
    filters: {
        isBoolean: yox_esm["a" /* default */].is.boolean
    },
    watchers: {
        value: function (value) {
            this.fire('change.input', { value: value });
        },
        isSecure: function (isSecure) {
            this.set({
                currentType: isSecure
                    ? TEXT_TYPE_PASSWORD
                    : TEXT_TYPE_TEXT
            });
        }
    },
    methods: {
        blur: function () {
            this.set('isFocus', FALSE);
            this.fire('blur.input');
        },
        focus: function () {
            this.set('isFocus', TRUE);
            this.fire('focus.input');
        },
        clear: function () {
            this.set('value', '');
            this.fire('clear.input');
        },
        search: function () {
            this.fire('search.input', {
                value: this.get('value')
            });
        }
    },
    computed: {
        textComputedStyle: function () {
            var size = this.get('autoSize');
            if (size) {
                var minRows = 2;
                var maxRows = 2;
                var height = 2;
                if (yox_esm["a" /* default */].is.object(size)) {
                    minRows = size.minRows;
                    maxRows = size.maxRows;
                    height = this.get('value') ? this.get('value').split('\n').length : minRows;
                    return "min-height: " + minRows * ROWS_HEIGHT + "px;max-height: " + maxRows * ROWS_HEIGHT + "px;height: " + height * ROWS_HEIGHT + "px;";
                }
                else {
                    height = this.get('value') ? this.get('value').split('\n').length : minRows;
                    return "min-height: " + minRows * ROWS_HEIGHT + "px;height: " + height * ROWS_HEIGHT + "px;";
                }
            }
            else {
                return "height: " + this.get('rows') * ROWS_HEIGHT + "px";
            }
        }
    },
    afterMount: function () {
        var me = this, doc = document;
        var onKeydown = function (event) {
            var originalEvent = event.originalEvent;
            if (me.$refs && originalEvent.target == me.$refs.input) {
                me.fire('keydown.input');
                if (originalEvent.keyCode === 13) {
                    me.fire('enter.input');
                }
            }
        };
        var onKeyup = function (event) {
            var originalEvent = event.originalEvent;
            if (me.$refs && originalEvent.target == me.$refs.input) {
                me.fire('keyup.input');
            }
        };
        var onKeypress = function (event) {
            var originalEvent = event.originalEvent;
            if (me.$refs && originalEvent.target == me.$refs.input) {
                me.fire('keypress.input');
            }
        };
        yox_esm["a" /* default */].dom.on(doc, 'keydown', onKeydown);
        yox_esm["a" /* default */].dom.on(doc, 'keyup', onKeyup);
        yox_esm["a" /* default */].dom.on(doc, 'keypress', onKeypress);
        me.on('beforeDestroy.hook', function () {
            yox_esm["a" /* default */].dom.off(doc, 'keydown', onKeydown);
            yox_esm["a" /* default */].dom.off(doc, 'keyup', onKeyup);
            yox_esm["a" /* default */].dom.off(doc, 'keypress', onKeypress);
        });
    }
}));

// EXTERNAL MODULE: ./src/components/input/template/InputNumber.hbs
var InputNumber = __webpack_require__(20);
var InputNumber_default = /*#__PURE__*/__webpack_require__.n(InputNumber);

// CONCATENATED MODULE: ./src/components/input/InputNumber.ts




/* harmony default export */ var input_InputNumber = (yox_esm["a" /* default */].define({
    propTypes: {
        formatter: {
            type: RAW_FUNCTION
        },
        status: {
            type: oneOf(RAW_TYPE_ARRAY)
        },
        max: {
            type: RAW_NUMERIC,
            value: 100
        },
        min: {
            type: RAW_NUMERIC,
            value: 0
        },
        value: {
            type: RAW_NUMERIC
        },
        step: {
            type: RAW_NUMERIC,
            value: 1
        },
        size: {
            type: RAW_STRING
        },
        editable: {
            type: RAW_BOOLEAN,
            value: TRUE
        },
        readonly: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        disabled: {
            type: RAW_BOOLEAN
        },
        placeholder: {
            type: RAW_STRING
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: InputNumber_default.a,
    data: function () {
        return {
            isFocus: FALSE
        };
    },
    watchers: {
        value: function (value) {
            this.fire('change.inputNumber', { value: value });
        }
    },
    computed: {
        computedValue: function () {
            if (this.get('formatter')) {
                return this.get('formatter')(this.get('value'));
            }
            else {
                return this.get('value');
            }
        }
    },
    methods: {
        up: function () {
            this.increase('value', +this.get('step'), +this.get('max'));
        },
        down: function () {
            this.decrease('value', +this.get('step'), +this.get('min'));
        },
        blur: function () {
            this.set('isFocus', FALSE);
            this.fire('blur.inputNumber');
        },
        focus: function () {
            this.set('isFocus', TRUE);
            this.fire('focus.inputNumber');
        }
    },
    afterMount: function () {
        var me = this, doc = document;
        var onKeydown = function (event) {
            switch (event.originalEvent.keyCode) {
                case 38:
                    me.up();
                    break;
                case 40:
                    me.down();
                    break;
            }
        };
        yox_esm["a" /* default */].dom.on(doc, 'keydown', onKeydown);
        me.on('beforeDestroy.hook', function () {
            yox_esm["a" /* default */].dom.off(doc, 'keydown', onKeydown);
        });
    }
}));

// EXTERNAL MODULE: ./src/components/radio/template/Radio.hbs
var Radio = __webpack_require__(21);
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio);

// CONCATENATED MODULE: ./src/components/radio/Radio.ts




/* harmony default export */ var radio_Radio = (yox_esm["a" /* default */].define({
    propTypes: {
        label: {
            type: RAW_STRING
        },
        value: {
            type: [RAW_NUMERIC, RAW_BOOLEAN, RAW_STRING]
        },
        disabled: {
            type: RAW_BOOLEAN
        },
        checked: {
            type: RAW_BOOLEAN
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Radio_default.a,
    data: function () {
        return {
            isChecked: FALSE,
            name: '',
            isDisabled: this.get('disabled')
        };
    },
    events: {
        updateRadioValue: function (_, data) {
            this.set({
                isChecked: data.value == this.get('value')
            });
        }
    },
    methods: {
        click: function () {
            var me = this;
            if (me.get('isDisabled')) {
                return;
            }
            me.fire('radioValueChange', {
                value: me.get('value')
            });
            return;
        }
    },
    afterMount: function () {
        var radiogroup = findComponentUpward(this.$parent, 'bell-radiogroup');
        if (radiogroup) {
            this.set({
                name: radiogroup.get('name'),
                isDisabled: this.get('disabled') || radiogroup.get('disabled'),
                isChecked: this.get('checked') || radiogroup.get('value') == this.get('value')
            });
        }
    }
}));

// EXTERNAL MODULE: ./src/components/radio/template/RadioGroup.hbs
var RadioGroup = __webpack_require__(22);
var RadioGroup_default = /*#__PURE__*/__webpack_require__.n(RadioGroup);

// CONCATENATED MODULE: ./src/components/radio/RadioGroup.ts



/* harmony default export */ var radio_RadioGroup = (yox_esm["a" /* default */].define({
    name: 'bell-radiogroup',
    propTypes: {
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        },
        name: {
            type: RAW_STRING
        },
        value: {
            type: RAW_STRING
        },
        size: {
            type: RAW_STRING
        },
        type: {
            type: RAW_STRING
        },
        disabled: {
            type: RAW_BOOLEAN
        },
        vertical: {
            type: RAW_BOOLEAN
        },
        button: {
            type: RAW_BOOLEAN
        }
    },
    template: RadioGroup_default.a,
    events: {
        radioValueChange: function (_, data) {
            this.set({
                value: data.value
            });
            this.fire('updateRadioValue', {
                value: data.value
            }, TRUE);
            this.fire('change.radiogroup', {
                value: data.value
            });
        }
    }
}));

// EXTERNAL MODULE: ./src/components/checkbox/template/Checkbox.hbs
var Checkbox = __webpack_require__(23);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox);

// CONCATENATED MODULE: ./src/components/checkbox/Checkbox.ts




/* harmony default export */ var checkbox_Checkbox = (yox_esm["a" /* default */].define({
    model: 'checked',
    propTypes: {
        label: {
            type: RAW_STRING
        },
        value: {
            type: [RAW_STRING, RAW_BOOLEAN],
            required: TRUE
        },
        indeterminate: {
            type: RAW_BOOLEAN
        },
        disabled: {
            type: RAW_BOOLEAN
        },
        checked: {
            type: RAW_BOOLEAN
        },
        type: {
            type: RAW_STRING
        },
        size: {
            type: RAW_STRING
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Checkbox_default.a,
    events: {
        'change.checkboxGroup': function (event, data) {
            if (event.phase === yox_esm["a" /* default */].Event.PHASE_DOWNWARD) {
                this.set({
                    checked: yox_esm["a" /* default */].array.has(data.selected, this.get('value'))
                });
            }
        }
    },
    watchers: {
        checked: function (checked) {
            this.fire('change.checkbox', {
                checked: checked,
                value: this.get('value')
            });
        }
    },
    beforeCreate: function (options) {
        var checkboxGroup = findComponentUpward(options.parent, 'bell-checkboxGroup');
        if (checkboxGroup) {
            var props = options.props || (options.props = {});
            yox_esm["a" /* default */].object.extend(props, {
                type: isDef(props.type) ? props.type : checkboxGroup.get('type'),
                disabled: isDef(props.disabled) ? props.disabled : checkboxGroup.get('disabled'),
                checked: yox_esm["a" /* default */].array.has(checkboxGroup.get('selected'), props.value),
                name: isDef(props.name) ? props.name : checkboxGroup.get('name'),
                size: isDef(props.size) ? props.size : checkboxGroup.get('size')
            });
        }
    }
}));

// EXTERNAL MODULE: ./src/components/checkbox/template/CheckboxGroup.hbs
var CheckboxGroup = __webpack_require__(24);
var CheckboxGroup_default = /*#__PURE__*/__webpack_require__.n(CheckboxGroup);

// CONCATENATED MODULE: ./src/components/checkbox/CheckboxGroup.ts




/* harmony default export */ var checkbox_CheckboxGroup = (yox_esm["a" /* default */].define({
    model: 'selected',
    name: 'bell-checkboxGroup',
    propTypes: {
        name: {
            type: RAW_STRING
        },
        selected: {
            type: RAW_ARRAY,
            value: function () {
                return [];
            }
        },
        type: {
            type: oneOf(RAW_TYPE_ARRAY)
        },
        size: {
            type: oneOf(RAW_SIZE_ARRAY),
            value: RAW_DEFAULT
        },
        disabled: {
            type: RAW_BOOLEAN
        },
        vertical: {
            type: RAW_BOOLEAN
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: CheckboxGroup_default.a,
    events: {
        'change.checkboxGroup': function (event) {
            if (event.phase === yox_esm["a" /* default */].Event.PHASE_DOWNWARD) {
                event.stop();
            }
        },
        'change.checkbox': function (event, data) {
            if (event.phase === yox_esm["a" /* default */].Event.PHASE_UPWARD) {
                var me = this;
                var selected = me.copy(me.get('selected'));
                if (data.checked) {
                    if (!yox_esm["a" /* default */].array.has(selected, data.value)) {
                        selected.push(data.value);
                    }
                }
                else {
                    yox_esm["a" /* default */].array.remove(selected, data.value);
                }
                me.set({ selected: selected });
                event.stop();
            }
        }
    },
    watchers: {
        selected: function (selected) {
            this.fire('change.checkboxGroup', { selected: selected }, TRUE);
        }
    }
}));

// EXTERNAL MODULE: ./src/components/switch/template/Switch.hbs
var Switch = __webpack_require__(25);
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch);

// CONCATENATED MODULE: ./src/components/switch/Switch.ts



/* harmony default export */ var switch_Switch = (yox_esm["a" /* default */].define({
    propTypes: {
        type: {
            type: RAW_STRING
        },
        size: {
            type: RAW_STRING
        },
        disabled: {
            type: RAW_BOOLEAN
        },
        checked: {
            type: RAW_BOOLEAN
        },
        loading: {
            type: RAW_BOOLEAN
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Switch_default.a,
    model: 'checked',
    methods: {
        click: function () {
            if (this.get('disabled')
                || this.get('loading')) {
                return;
            }
            this.toggle('checked');
            this.fire('change.switch', {
                checked: this.get('checked')
            });
        }
    }
}));

// EXTERNAL MODULE: ./src/components/select/template/Select.hbs
var Select = __webpack_require__(26);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select);

// CONCATENATED MODULE: ./src/components/select/Select.ts




/* harmony default export */ var select_Select = (yox_esm["a" /* default */].define({
    propTypes: {
        clearable: {
            type: RAW_BOOLEAN
        },
        defaultText: {
            type: RAW_STRING
        },
        value: {
            type: [RAW_NUMERIC, RAW_STRING]
        },
        size: {
            type: RAW_STRING
        },
        type: {
            type: RAW_STRING
        },
        disabled: {
            type: RAW_BOOLEAN
        },
        placement: {
            type: RAW_STRING
        },
        multiple: {
            type: RAW_BOOLEAN
        },
        prefix: {
            type: RAW_STRING
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Select_default.a,
    data: function () {
        return {
            count: 0,
            visible: FALSE,
            hoverIndex: 0,
            selectedIndex: NULL,
            selectedText: NULL,
        };
    },
    watchers: {
        value: function (value) {
            this.fire('optionSelectedChange.select', { value: value }, TRUE);
            this.fire('change.select', {
                value: value,
                text: this.get('selectedText'),
                index: this.get('selectedIndex')
            });
        }
    },
    events: {
        selectedOptionChange: function (event) {
            var option = event.target;
            if (!this.get('multiple')) {
                this.set({
                    selectedIndex: option.get('index'),
                    selectedText: option.get('text')
                });
            }
        },
        optionAdd: function () {
            this.increase('count');
        },
        optionRemove: function () {
            this.decrease('count');
        },
        optionSelect: function (event) {
            var me = this;
            var option = event.target;
            var value = option.get('value');
            var text = option.get('text');
            var index = option.get('index');
            if (me.get('multiple')) {
                me.set({
                    value: me.setArrayValue(value, me.get('value')),
                    selectedText: me.setArrayValue(text, me.get('selectedText')),
                    selectedIndex: index,
                    visible: TRUE
                });
            }
            else {
                me.set({
                    value: value,
                    selectedText: text,
                    selectedIndex: index,
                    visible: FALSE
                });
            }
        }
    },
    methods: {
        clear: function () {
            this.set({
                value: NULL,
                selectedText: NULL,
                selectedIndex: NULL
            });
            this.fire('clear.select');
        },
        setArrayValue: function (text, values) {
            values = this.copy(values);
            if (yox_esm["a" /* default */].is.array(values)) {
                var index = values.indexOf(text);
                if (index >= 0) {
                    values.splice(index, 1);
                }
                else {
                    values.push(text);
                }
            }
            else {
                values = [text];
            }
            return values.length ? values : NULL;
        },
        tagClose: function (event, text, index) {
            var me = this;
            this.set({
                value: me.setArrayValue(me.get('value')[index], me.get('value')),
                selectedText: me.setArrayValue(text, me.get('selectedText'))
            });
            event.stop();
        },
        toggleMenu: function () {
            if (this.get('disabled')) {
                return;
            }
            this.toggle('visible');
        },
        decreaseHoverIndex: function () {
            var hoverIndex = this.get('hoverIndex');
            hoverIndex = hoverIndex <= 0 ? (this.get('count') - 1) : hoverIndex - 1;
            this.set({
                hoverIndex: hoverIndex
            });
            this.fire('optionHoveredChange', {
                index: hoverIndex
            }, TRUE);
        },
        increaseHoverIndex: function () {
            var hoverIndex = this.get('hoverIndex');
            hoverIndex = hoverIndex >= (this.get('count') - 1) ? 0 : hoverIndex + 1;
            this.set({
                hoverIndex: hoverIndex
            });
            this.fire('optionHoveredChange', {
                index: hoverIndex
            }, TRUE);
        },
        selectOption: function () {
            this.fire('optionHoveredChange', {
                index: this.get('hoverIndex'),
                selected: TRUE
            }, TRUE);
        }
    },
    afterMount: function () {
        var me = this;
        if (me.get('value') != NULL
            && me.get('selectedText') == NULL
            && me.get('selectedIndex') == NULL) {
            me.fire('optionSelectedChange', {
                value: me.get('value')
            }, TRUE);
        }
        var documentClickHandler = function (e) {
            if (!me.get('visible')) {
                return;
            }
            var element = me.$el;
            var target = e.originalEvent.target;
            if (contains(element, target)) {
                return;
            }
            me.set({
                visible: FALSE
            });
        };
        var documentKeydownHander = function (e) {
            if (!me.get('visible')) {
                return;
            }
            switch (e.originalEvent.keyCode) {
                case 40:
                    e.prevent();
                    me.increaseHoverIndex();
                    break;
                case 38:
                    e.prevent();
                    me.decreaseHoverIndex();
                    break;
                case 13:
                    me.selectOption();
                    break;
            }
        };
        yox_esm["a" /* default */].dom.on(document, 'click', documentClickHandler);
        yox_esm["a" /* default */].dom.on(document, 'keydown', documentKeydownHander);
        me.once('beforeDestroy.hook', function () {
            yox_esm["a" /* default */].dom.off(document, 'click', documentClickHandler);
            yox_esm["a" /* default */].dom.off(document, 'keydown', documentKeydownHander);
        });
    }
}));

// EXTERNAL MODULE: ./src/components/select/template/Option.hbs
var Option = __webpack_require__(27);
var Option_default = /*#__PURE__*/__webpack_require__.n(Option);

// CONCATENATED MODULE: ./src/components/select/Option.ts



/* harmony default export */ var select_Option = (yox_esm["a" /* default */].define({
    propTypes: {
        value: {
            type: [RAW_STRING, RAW_NUMERIC]
        },
        text: {
            type: [RAW_STRING, RAW_NUMERIC]
        },
        index: {
            type: [RAW_STRING, RAW_NUMERIC],
            required: TRUE
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Option_default.a,
    events: {
        optionHoveredChange: function (_, data) {
            var isHover = data.index == this.get('index');
            this.set({
                isHover: isHover
            });
            if (isHover && !this.get('isSelected')) {
                this.set({
                    isSelected: data.selected
                });
            }
        },
        'optionSelectedChange.select': function (_, data) {
            var value = this.get('value');
            var values = data.value;
            var isSelected = yox_esm["a" /* default */].is.array(values) ? values.indexOf(value) >= 0 : values == value;
            this.set({
                isSelected: isSelected
            });
            if (isSelected) {
                this.fire('selectedOptionChange');
            }
        }
    },
    data: function () {
        return {
            isSelected: FALSE,
            isHover: FALSE
        };
    },
    methods: {
        click: function () {
            this.fire('optionSelect');
        }
    },
    afterMount: function () {
        this.fire('optionAdd', {
            value: this.get('value'),
            text: this.get('text'),
            index: this.get('index')
        });
    },
    beforeDestroy: function () {
        this.fire('optionRemove');
    }
}));

// EXTERNAL MODULE: ./src/components/select/template/OptionGroup.hbs
var OptionGroup = __webpack_require__(28);
var OptionGroup_default = /*#__PURE__*/__webpack_require__.n(OptionGroup);

// CONCATENATED MODULE: ./src/components/select/OptionGroup.ts



/* harmony default export */ var select_OptionGroup = (yox_esm["a" /* default */].define({
    propTypes: {
        label: {
            type: RAW_STRING
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: OptionGroup_default.a
}));

// EXTERNAL MODULE: ./src/components/page/template/Page.hbs
var Page = __webpack_require__(29);
var Page_default = /*#__PURE__*/__webpack_require__.n(Page);

// CONCATENATED MODULE: ./src/components/page/Page.ts



/* harmony default export */ var page_Page = (yox_esm["a" /* default */].define({
    propTypes: {
        size: {
            type: RAW_STRING
        },
        simple: {
            type: RAW_STRING
        },
        total: {
            type: RAW_NUMERIC
        },
        current: {
            type: RAW_NUMERIC,
            value: 1
        },
        pageSize: {
            type: RAW_NUMERIC,
            value: 10
        },
        showSizer: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        pageSizeOpts: {
            type: 'array'
        },
        showElevator: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        showTotal: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        placement: {
            type: RAW_STRING
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Page_default.a,
    data: function () {
        var me = this;
        var getPageList = function () {
            var pageList = [];
            if (me.get('showSizer')
                && me.get('pageSizeOpts')) {
                yox_esm["a" /* default */].array.each(me.get('pageSizeOpts'), function (value) {
                    pageList.push({
                        text: value + ' 条/页',
                        value: value
                    });
                });
            }
            return pageList;
        };
        return {
            pageList: getPageList(),
            count: 0,
            currentPage: 1,
            elevatorPage: ''
        };
    },
    events: {
        change: function (event) {
            if (event.target != this) {
                event.stop();
            }
        }
    },
    watchers: {
        current: function (value) {
            this.fire('change.page', {
                value: value
            });
        }
    },
    methods: {
        elevator: function () {
            var page = this.get('elevatorPage');
            if (yox_esm["a" /* default */].is.numeric(page)) {
                this.changePage(+page);
                return;
            }
        },
        pageSizeChange: function (event, data) {
            this.updateCount();
            this.fire('pageSizeChange.page', {
                value: data.value
            });
            event.stop();
        },
        fastPrev: function () {
            var me = this;
            if (me.get('current') < 1) {
                return;
            }
            me.decrease('current', 5, 1);
        },
        fastNext: function () {
            var me = this;
            if (me.get('current') >= me.get('count')) {
                return;
            }
            me.increase('current', 5, me.get('count'));
        },
        prev: function () {
            var me = this;
            if (me.get('current') < 1) {
                return;
            }
            me.decrease('current', 1, 1);
            if (me.get('simple')) {
                me.decrease('currentPage', 1, 1);
            }
        },
        next: function () {
            var me = this;
            if (me.get('current') >= me.get('count')) {
                return;
            }
            me.increase('current', 1, me.get('count'));
            if (me.get('simple')) {
                me.increase('currentPage', 1, me.get('count'));
            }
        },
        changePage: function (page) {
            this.set({
                current: page,
                currentPage: page
            });
        },
        updateCount: function () {
            var me = this;
            if (me.get('total')) {
                var count = 1;
                if (me.get('total') > me.get('pageSize')) {
                    count = Math.ceil(me.get('total') / me.get('pageSize'));
                }
                me.set({
                    count: count
                });
            }
        }
    },
    afterMount: function () {
        var me = this, doc = document;
        me.updateCount();
        var onKeydown = function (event) {
            var currentPage = +me.get('currentPage');
            var current = me.get('current');
            var count = me.get('count');
            switch (event.originalEvent.keyCode) {
                case 40:
                    current = current + 1 > count ? count : current + 1;
                    break;
                case 38:
                    current = current > 1 ? current - 1 : 1;
                    break;
                case 13:
                    if (yox_esm["a" /* default */].is.number(currentPage)
                        && currentPage > 0
                        && currentPage <= count) {
                        current = currentPage;
                    }
                    break;
            }
            me.set({
                current: current,
                currentPage: current
            });
        };
        yox_esm["a" /* default */].dom.on(doc, 'keydown', onKeydown);
        me.on('beforeDestroy.hook', function () {
            yox_esm["a" /* default */].dom.off(doc, 'keydown', onKeydown);
        });
    }
}));

// EXTERNAL MODULE: ./src/components/upload/template/Upload.hbs
var Upload = __webpack_require__(30);
var Upload_default = /*#__PURE__*/__webpack_require__.n(Upload);

// CONCATENATED MODULE: ./src/components/upload/Upload.js


/* harmony default export */ var upload_Upload = ({
    propTypes: {
        action: {
            type: RAW_STRING
        },
        data: {
            type: RAW_OBJECT
        },
        multiple: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        accept: {
            type: RAW_ARRAY
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Upload_default.a,
    watchers: {},
    methods: {
        createInputElement: function () {
            var me = this;
            me.inputElement = document.createElement('input');
            me.inputElement.type = 'file';
            me.inputElement.multiple = me.get('multiple');
            var accept = me.get('accept');
            if (accept) {
                me.inputElement.accept = me.get('accept').join(',');
            }
            me.inputElement.style.display = 'none';
            me.$el.appendChild(me.inputElement);
            me.fileChange = function (event) {
                var files = event.target.files;
                me.fire('uploadstart', {
                    file: files[0],
                });
                me.upload(files[0]);
            };
            me.inputElement.onchange = me.fileChange;
        },
        upload: function (file) {
            var me = this;
            var xhr = new XMLHttpRequest();
            me.xhr = xhr;
            xhr.open('post', me.get('action'), true);
            var formData = new FormData();
            var data = me.get('data');
            if (data) {
                for (var key in data) {
                    formData.append(key, data[key]);
                }
            }
            formData.append('file', file);
            xhr.send(formData);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) { // 4 为完成
                    if (xhr.status == 200) { // 200 为成功
                        me.fire('uploadsuccess', JSON.parse(xhr.responseText));
                    }
                    else {
                        me.fire('uploadsuccess', JSON.parse(xhr.responseText));
                    }
                }
            };
        },
        click: function () {
            this.inputElement.click();
        }
    },
    afterMount: function () {
        var me = this;
        me.createInputElement();
    }
});

// EXTERNAL MODULE: ./src/components/alert/template/Alert.hbs
var Alert = __webpack_require__(31);
var Alert_default = /*#__PURE__*/__webpack_require__.n(Alert);

// CONCATENATED MODULE: ./src/components/alert/Alert.ts




/* harmony default export */ var alert_Alert = (yox_esm["a" /* default */].define({
    propTypes: {
        type: {
            type: oneOf(RAW_TYPE_ARRAY),
            value: RAW_TYPE_PRIMARY
        },
        closable: {
            type: RAW_BOOLEAN
        },
        showIcon: {
            type: RAW_BOOLEAN
        },
        center: {
            type: RAW_BOOLEAN
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Alert_default.a,
    methods: {
        close: function () {
            var me = this;
            yox_esm["a" /* default */].dom.addClass(me.$el, 'bell-hide');
            onTransitionEnd(me.$el, function () {
                me.$el && me.$el.remove();
                me.fire('close.alert');
            });
        }
    }
}));

// EXTERNAL MODULE: ./src/components/spinner/template/Spinner.hbs
var Spinner = __webpack_require__(32);
var Spinner_default = /*#__PURE__*/__webpack_require__.n(Spinner);

// CONCATENATED MODULE: ./src/components/spinner/Spinner.ts



/* harmony default export */ var spinner_Spinner = (yox_esm["a" /* default */].define({
    propTypes: {
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        },
        size: {
            type: RAW_STRING
        },
        text: {
            type: RAW_STRING
        },
        fix: {
            type: RAW_BOOLEAN
        },
        type: {
            type: RAW_STRING
        }
    },
    template: Spinner_default.a
}));

// EXTERNAL MODULE: ./src/components/backtop/template/BackTop.hbs
var BackTop = __webpack_require__(33);
var BackTop_default = /*#__PURE__*/__webpack_require__.n(BackTop);

// CONCATENATED MODULE: ./src/components/backtop/BackTop.ts




/* harmony default export */ var backtop_BackTop = (yox_esm["a" /* default */].define({
    propTypes: {
        bottom: {
            type: RAW_NUMERIC,
            value: 30
        },
        right: {
            type: RAW_NUMERIC,
            value: 30
        },
        height: {
            type: RAW_NUMERIC
        },
        duration: {
            type: RAW_NUMERIC,
            value: 1000
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: BackTop_default.a,
    data: function () {
        return {
            hidden: FALSE
        };
    },
    events: {
        click: function () {
            var me = this, parentElement = me.$parent.$el;
            scrollTop(parentElement, parentElement.scrollTop, 0, me.get('duration'));
        }
    },
    afterMount: function () {
        var me = this, parentElement = me.$parent.$el, onRefresh = function () {
            me.set({
                hidden: parentElement.scrollTop < (me.get('height') || parentElement.clientHeight)
            });
        };
        yox_esm["a" /* default */].dom.on(parentElement, 'scroll', onRefresh);
        yox_esm["a" /* default */].dom.on(document, 'resize', onRefresh);
        me.once('beforeDestroy.hook', function () {
            yox_esm["a" /* default */].dom.off(parentElement, 'scroll', onRefresh);
            yox_esm["a" /* default */].dom.off(document, 'resize', onRefresh);
        });
    }
}));

// EXTERNAL MODULE: ./src/components/avatar/template/Avatar.hbs
var Avatar = __webpack_require__(34);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);

// CONCATENATED MODULE: ./src/components/avatar/Avatar.ts




var SPACE_HORIZONTAL = 8;
/* harmony default export */ var avatar_Avatar = (yox_esm["a" /* default */].define({
    propTypes: {
        shape: {
            type: oneOf([RAW_SHAPE_CIRCLE, RAW_SHAPE_ROUND]),
            value: RAW_SHAPE_ROUND
        },
        size: {
            type: oneOf(RAW_SIZE_ARRAY),
            value: RAW_DEFAULT
        },
        text: {
            type: RAW_STRING
        },
        src: {
            type: RAW_STRING
        },
        srcset: {
            type: RAW_STRING
        },
        fontSize: {
            type: RAW_NUMERIC
        },
        bgColor: {
            type: RAW_STRING
        },
        color: {
            type: RAW_STRING,
            value: '#FFF'
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Avatar_default.a,
    data: function () {
        return {
            supportTransform: supportTransform,
        };
    },
    afterMount: function () {
        if (supportTransform) {
            var me_1 = this;
            me_1.watch('text', {
                watcher: function () {
                    me_1.nextTick(function () {
                        var $el = me_1.$el, $refs = me_1.$refs;
                        if (!$el || !$refs) {
                            return;
                        }
                        var textSpan = $refs.textSpan;
                        var scale = textSpan && textSpan.offsetWidth
                            ? ($el.offsetWidth - SPACE_HORIZONTAL) / textSpan.offsetWidth
                            : 1;
                        me_1.set('transform', "scale(" + Math.min(scale, 1) + ") translateX(-50%)");
                    });
                },
                immediate: TRUE
            });
        }
    }
}));

// EXTERNAL MODULE: ./src/components/badge/template/Badge.hbs
var Badge = __webpack_require__(35);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge);

// CONCATENATED MODULE: ./src/components/badge/Badge.ts




/* harmony default export */ var badge_Badge = (yox_esm["a" /* default */].define({
    propTypes: {
        text: {
            type: RAW_STRING
        },
        count: {
            type: RAW_NUMERIC
        },
        maxCount: {
            type: RAW_NUMERIC,
            value: 999
        },
        dot: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        hidden: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        type: {
            type: oneOf(RAW_TYPE_ARRAY),
            value: RAW_TYPE_ERROR
        },
        status: {
            type: oneOf(RAW_TYPE_ARRAY)
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Badge_default.a,
    filters: {
        isNumber: yox_esm["a" /* default */].is.numeric,
        formatText: function (count, maxCount) {
            count = yox_esm["a" /* default */].is.numeric(count) ? +count : 0;
            maxCount = yox_esm["a" /* default */].is.numeric(maxCount) ? +maxCount : 1;
            return maxCount < count
                ? maxCount + '+'
                : count;
        }
    }
}));

// CONCATENATED MODULE: ./src/components/datepicker/function/util.js
var normalizeDate = function (date) {
    return date.setHours(0, 0, 0, 0);
};
var offsetSecond = function (date, offset) {
    if (!Yox.is.numeric(date)) {
        date = date.getTime();
    }
    return new Date(date + offset * 1000);
};
var offsetMinute = function (date, offset) {
    return offsetSecond(date, offset * 60);
};
var offsetHour = function (date, offset) {
    return offsetMinute(date, offset * 60);
};
var offsetDate = function (date, offset) {
    return offsetHour(date, offset * 24);
};
var offsetMonth = function (date, offset) {
    if (!Yox.is.numeric(date)) {
        date = date.getTime();
    }
    date = new Date(date);
    date.setDate(1);
    date.setMonth(date.getMonth() + offset);
    return date;
};
var firstDateInWeek = function (date, firstDay) {
    if (Yox.is.numeric(date)) {
        date = new Date(date);
    }
    var day = date.getDay();
    day = day >= firstDay ? day : (day + 7);
    return offsetDate(date, -1 * (day - firstDay));
};
var lastDateInWeek = function (date, firstDay) {
    return offsetDate(firstDateInWeek(date, firstDay), 6);
};
var firstDateInMonth = function (date) {
    if (Yox.is.numeric(date)) {
        date = new Date(date);
    }
    return offsetDate(date, 1 - date.getDate());
};
var lastDateInMonth = function (date) {
    return offsetDate(firstDateInMonth(offsetMonth(date, 1)), -1);
};
var isValidDate = function (date) {
    var time = date.getTime && date.getTime();
    if (!time) {
        time = date;
    }
    if (Yox.is.number(time)) {
        return ('' + time).length > 8;
    }
    return false;
};
var parseDate = function (year, month, date) {
    var valid = false;
    if (Yox.is.numeric(year)
        && Yox.is.numeric(month)
        && Yox.is.numeric(date)) {
        valid = true;
    }
    else if (Yox.is.object(year)) {
        valid = true;
        date = year.date;
        month = year.month;
        year = year.year;
    }
    else if (Yox.is.string(year)) {
        valid = true;
        var parts = year.split(month || '-');
        year = parts[0];
        month = parts[1];
        date = parts[2];
    }
    if (valid) {
        year = '' + year;
        if (year.length === 4
            && month >= 1 && month <= 12
            && date >= 1 && date <= 31) {
            return new Date(year, month - 1, date);
        }
    }
};
var simplifyDate = function (date) {
    if (!date || !isValidDate(date)) {
        return date;
    }
    date = new Date(date);
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        day: date.getDay()
    };
};
var getOffsetTime = function (date) {
    if (!date) {
        return 0;
    }
    return date.getTime();
};
var lpad = function (num, length) {
    if (num == undefined) {
        return '';
    }
    if (length == null) {
        length = 2;
    }
    var arr = new Array(length - ('' + num).length + 1);
    return arr.join('0') + num;
};
var formatList = function (list) {
    var result = [];
    var arr = [];
    for (var i = 0; i < list.length; i++) {
        arr.push(list[i]);
        if (i % 7 == 6) {
            result.push(arr);
            arr = [];
        }
    }
    return result;
};

// CONCATENATED MODULE: ./src/components/datepicker/function/constant.js
var WEEKS = ['日', '一', '二', '三', '四', '五', '六'];
var DAY = 24 * 60 * 60 * 1000;
var STABLE_DURATION = 41 * DAY;
var MONTHS = [
    '一月', '二月', '三月', '四月', '五月',
    '六月', '七月', '八月', '九月', '十月',
    '十一月', '十二月'
];

// EXTERNAL MODULE: ./src/components/datepicker/template/Date.hbs
var template_Date = __webpack_require__(36);
var Date_default = /*#__PURE__*/__webpack_require__.n(template_Date);

// CONCATENATED MODULE: ./src/components/datepicker/components/Date.ts






/* harmony default export */ var components_Date = (yox_esm["a" /* default */].define({
    propTypes: {
        multiple: {
            type: RAW_BOOLEAN
        },
        startDate: {
            type: isDate()
        },
        value: {
            type: isDate()
        },
        selected: {
            type: RAW_ARRAY
        },
        disabledDate: {
            type: RAW_FUNCTION
        },
        firstDay: {
            type: RAW_NUMERIC
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Date_default.a,
    data: function () {
        var modeDate = this.get('startDate') ? this.get('startDate') : new Date();
        var selectedDates = [];
        if (this.get('selected') && this.get('selected').length) {
            selectedDates = this.get('selected').map(function (item) {
                var date = simplifyDate(item);
                return date.year + "/" + date.month + "/" + date.date + "/" + date.day;
            });
        }
        return {
            weeks: WEEKS,
            currentDate: null,
            modeDate: simplifyDate(modeDate),
            dateList: [],
            selectedDates: selectedDates
        };
    },
    events: {
        'clear.datepicker': function (event) {
            this.set({
                currentDate: null,
                selectedDates: [],
                dateList: this.createRenderData(this.get('modeDate'), null, [])
            });
            event.stop();
        }
    },
    watchers: {
        value: function (date) {
            var value = date ? simplifyDate(date) : null;
            this.set({
                currentDate: value,
                dateList: this.createRenderData(this.get('modeDate'), value, this.get('selectedDates'))
            });
        },
        currentDate: {
            watcher: function (date) {
                this.fire('change.date', {
                    date: date,
                    selectedDates: this.get('selectedDates')
                });
            },
            sync: true
        }
    },
    methods: {
        changeDateList: function (offset) {
            var me = this;
            var modeDate = simplifyDate(offsetMonth(parseDate(me.get('modeDate')), offset));
            var dateList = me.createRenderData(modeDate, me.get('currentDate'), me.get('selectedDates'));
            me.set({
                modeDate: modeDate,
                dateList: dateList
            });
        },
        addDates: function (date) {
            var selectedDates = this.copy(this.get('selectedDates'));
            var index = this.getDateIndex(date, selectedDates);
            if (index < 0) {
                selectedDates.push(this.getDateString(date));
            }
            else {
                selectedDates.splice(index, 1);
            }
            this.set({ selectedDates: selectedDates });
        },
        click: function (date) {
            var me = this;
            me.get('multiple') && me.addDates(date);
            me.set({
                currentDate: date,
                dateList: me.createRenderData(me.get('modeDate'), date, me.get('selectedDates'))
            });
        },
        getDateString: function (date) {
            return date.year + "/" + date.month + "/" + date.date + "/" + date.day;
        },
        getDateIndex: function (item, list) {
            return list.indexOf(this.getDateString(item));
        },
        getDataSource: function (start, end, modeDate, currentDate, selectedDates) {
            var data = [];
            for (var time = start, item = void 0; time <= end; time += DAY) {
                item = simplifyDate(time);
                if (this.get('multiple')) {
                    if (this.getDateIndex(item, selectedDates) >= 0) {
                        item.isCurrentDate = true;
                    }
                }
                else if (currentDate
                    && currentDate.year === item.year
                    && currentDate.month === item.month
                    && currentDate.date === item.date) {
                    item.isCurrentDate = true;
                }
                if (this.get('disabledDate')) {
                    item.disabled = this.get('disabledDate')(parseDate(item));
                }
                item.isPrevMonth = item.month < modeDate.month;
                item.isCurrentMonth = item.month == modeDate.month;
                item.isLastMonth = item.month > modeDate.month;
                data.push(item);
            }
            return data;
        },
        createRenderData: function (modeDate, currentDate, selectedDates) {
            var firstDay = this.get('firstDay') || 0;
            var modeDateString = parseDate(modeDate);
            var startDate;
            var endDate;
            startDate = firstDateInWeek(firstDateInMonth(modeDateString), firstDay);
            endDate = lastDateInWeek(lastDateInMonth(modeDateString), firstDay);
            startDate = normalizeDate(startDate);
            endDate = normalizeDate(endDate);
            var duration = endDate - startDate;
            var offset = STABLE_DURATION - duration;
            if (offset > 0) {
                endDate += offset;
            }
            var list = this.getDataSource(startDate, endDate, modeDate, currentDate, selectedDates);
            return formatList(list);
        }
    },
    afterMount: function () {
        var me = this;
        var value = me.get('value') ? simplifyDate(me.get('value')) : null;
        me.set({
            currentDate: value,
            dateList: me.createRenderData(me.get('modeDate'), value, me.get('selectedDates'))
        });
        if (me.get('selected')) {
            me.fire('change.date', {
                date: value,
                selectedDates: me.get('selectedDates')
            });
        }
    }
}));

// EXTERNAL MODULE: ./src/components/datepicker/template/DateRange.hbs
var DateRange = __webpack_require__(37);
var DateRange_default = /*#__PURE__*/__webpack_require__.n(DateRange);

// CONCATENATED MODULE: ./src/components/datepicker/components/DateRange.ts






/* harmony default export */ var components_DateRange = (yox_esm["a" /* default */].define({
    propTypes: {
        splitPanel: {
            type: RAW_BOOLEAN
        },
        startDate: {
            type: isDate()
        },
        value: {
            type: RAW_ARRAY
        },
        disabledDate: {
            type: RAW_FUNCTION
        },
        firstDay: {
            type: RAW_NUMERIC
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: DateRange_default.a,
    data: function () {
        return {
            weeks: WEEKS,
            startModeDate: '',
            endModeDate: '',
            checkedStartDate: '',
            checkedEndDate: '',
            startModeList: [],
            endModeList: []
        };
    },
    computed: {
        startModeDateYear: function () {
            return simplifyDate(this.get('startModeDate')).year;
        },
        startModeDateMonth: function () {
            return simplifyDate(this.get('startModeDate')).month;
        },
        endModeDateYear: function () {
            return simplifyDate(this.get('endModeDate')).year;
        },
        endModeDateMonth: function () {
            return simplifyDate(this.get('endModeDate')).month;
        }
    },
    events: {
        'clear.datepicker': function (event) {
            this.set({
                checkedStartDate: '',
                checkedEndDate: '',
                endModeList: this.createRenderData(this.get('endModeDate'), '', ''),
                startModeList: this.createRenderData(this.get('startModeDate'), '', '')
            });
            event.stop();
        }
    },
    methods: {
        changeStartModeDate: function (offset) {
            var me = this;
            var startModeDate = me.get('startModeDate');
            startModeDate = offsetMonth(startModeDate, offset);
            var startModeList = me.createRenderData(startModeDate, me.get('checkedStartDate'), me.get('checkedEndDate'));
            me.set({
                startModeDate: startModeDate,
                startModeList: startModeList
            });
            if (me.get('endModeDate').getTime() <= startModeDate.getTime()) {
                me.changeEndModeDate(offset);
            }
        },
        changeEndModeDate: function (offset) {
            var me = this;
            var endModeDate = me.get('endModeDate');
            endModeDate = offsetMonth(endModeDate, offset);
            var endModeList = me.createRenderData(endModeDate, me.get('checkedStartDate'), me.get('checkedEndDate'));
            me.set({
                endModeDate: endModeDate,
                endModeList: endModeList
            });
            if (me.get('endModeDate').getTime() <= me.get('startModeDate').getTime()) {
                me.changeStartModeDate(offset);
            }
        },
        startPrevYear: function () {
            this.changeStartModeDate(-12);
            if (!this.get('splitPanel')) {
                this.changeEndModeDate(-12);
            }
        },
        startPrevMonth: function () {
            this.changeStartModeDate(-1);
            if (!this.get('splitPanel')) {
                this.changeEndModeDate(-1);
            }
        },
        startNextYear: function () {
            this.changeStartModeDate(12);
        },
        startNextMonth: function () {
            this.changeStartModeDate(1);
        },
        endPrevYear: function () {
            this.changeEndModeDate(-12);
        },
        endPrevMonth: function () {
            this.changeEndModeDate(-1);
        },
        endNextYear: function () {
            this.changeEndModeDate(12);
            if (!this.get('splitPanel')) {
                this.changeStartModeDate(12);
            }
        },
        endNextMonth: function () {
            this.changeEndModeDate(1);
            if (!this.get('splitPanel')) {
                this.changeStartModeDate(1);
            }
        },
        hover: function (date) {
            var me = this;
            var startDate = me.get('checkedStartDate');
            var endDate = me.get('checkedEndDate');
            if (!startDate || endDate) {
                return;
            }
            var rangDate = '';
            if (!startDate
                || me.get('checkedEndDate')
                || getOffsetTime(parseDate(date)) < getOffsetTime(parseDate(startDate))) {
                rangDate = '';
            }
            else {
                rangDate = date;
            }
            me.refresh(getOffsetTime(parseDate(startDate)), getOffsetTime(parseDate(rangDate)));
        },
        click: function (date) {
            var me = this;
            var checkedStartDate = me.get('checkedStartDate');
            var checkedEndDate = me.get('checkedEndDate');
            if (!checkedStartDate || me.get('checkedEndDate')
                || getOffsetTime(parseDate(date)) < getOffsetTime(parseDate(checkedStartDate))) {
                checkedStartDate = date;
                checkedEndDate = '';
            }
            else {
                checkedEndDate = date;
            }
            me.set({
                checkedStartDate: checkedStartDate,
                checkedEndDate: checkedEndDate
            });
            me.refresh(getOffsetTime(parseDate(checkedStartDate)), getOffsetTime(parseDate(checkedEndDate)));
            if (checkedStartDate && checkedEndDate) {
                me.fire('change.daterange', {
                    start: checkedStartDate,
                    end: checkedEndDate
                });
            }
        },
        refresh: function (start, end) {
            var me = this;
            var startModeList = me.copy(me.get('startModeList'));
            var endModeList = me.copy(me.get('endModeList'));
            if (end) {
                yox_esm["a" /* default */].array.each(startModeList, function (arr) {
                    yox_esm["a" /* default */].array.each(arr, function (item) {
                        var itemTime = getOffsetTime(parseDate(item));
                        item.isRangeDate
                            = itemTime < end
                                && itemTime > start;
                        item.isCheckedDate
                            = itemTime == end || itemTime == start;
                    });
                });
                yox_esm["a" /* default */].array.each(endModeList, function (arr) {
                    yox_esm["a" /* default */].array.each(arr, function (item) {
                        var itemTime = getOffsetTime(parseDate(item));
                        item.isRangeDate
                            = itemTime < end
                                && itemTime > start;
                        item.isCheckedDate
                            = itemTime == end || itemTime == start;
                    });
                });
            }
            else if (start) {
                yox_esm["a" /* default */].array.each(startModeList, function (arr) {
                    yox_esm["a" /* default */].array.each(arr, function (item) {
                        item.isCheckedDate
                            = getOffsetTime(parseDate(item)) == start;
                        item.isRangeDate = false;
                    });
                });
                yox_esm["a" /* default */].array.each(endModeList, function (arr) {
                    yox_esm["a" /* default */].array.each(arr, function (item) {
                        item.isCheckedDate
                            = getOffsetTime(parseDate(item)) == start;
                        item.isRangeDate = false;
                    });
                });
            }
            me.set({
                startModeList: startModeList,
                endModeList: endModeList
            });
        },
        getDataSource: function (start, end, date, checkedStartDate, checkedEndDate) {
            var data = [];
            date = simplifyDate(date);
            var checkedStart = getOffsetTime(parseDate(checkedStartDate));
            var checkedEnd = getOffsetTime(parseDate(checkedEndDate));
            for (var time = start, item = void 0; time <= end; time += DAY) {
                item = simplifyDate(time);
                var itemTime = getOffsetTime(parseDate(item));
                item.isPrevMonth = item.month < date.month;
                item.isCurrentMonth = item.month == date.month;
                item.isLastMonth = item.month > date.month;
                item.isCheckedDate = itemTime === checkedStart || itemTime === checkedEnd;
                item.isRangeDate = itemTime > checkedStart && itemTime < checkedEnd;
                if (this.get('disabledDate')) {
                    item.disabled = this.get('disabledDate')(parseDate(item));
                }
                data.push(item);
            }
            return data;
        },
        createRenderData: function (date, checkedStartDate, checkedEndDate) {
            var me = this;
            var firstDay = me.get('firstDay') || 0;
            date = normalizeDate(date);
            var startDate;
            var endDate;
            startDate = firstDateInWeek(firstDateInMonth(date), firstDay);
            endDate = lastDateInWeek(lastDateInMonth(date), firstDay);
            startDate = normalizeDate(startDate);
            endDate = normalizeDate(endDate);
            var duration = endDate - startDate;
            var offset = STABLE_DURATION - duration;
            if (offset > 0) {
                endDate += offset;
            }
            var list = me.getDataSource(startDate, endDate, date, checkedStartDate, checkedEndDate);
            return formatList(list);
        }
    },
    watchers: {
        value: function (value) {
            var checkedStartDate = simplifyDate(value[0]);
            var checkedEndDate = simplifyDate(value[1]);
            var startModeList = this.createRenderData(this.get('startModeDate'), checkedStartDate, checkedEndDate);
            var endModeList = this.createRenderData(this.get('endModeDate'), checkedStartDate, checkedEndDate);
            this.set({
                checkedStartDate: checkedStartDate,
                checkedEndDate: checkedEndDate,
                startModeList: startModeList,
                endModeList: endModeList
            });
        }
    },
    afterMount: function () {
        var me = this;
        var startModeDate = me.get('startDate') ? me.get('startDate') : new Date();
        var endModeDate = offsetMonth(startModeDate, 1);
        var startModeList = me.createRenderData(startModeDate, me.get('checkedStartDate'), me.get('checkedEndDate'));
        var endModeList = me.createRenderData(endModeDate, me.get('checkedStartDate'), me.get('checkedEndDate'));
        var value = me.get('value');
        if (value) {
            var checkedStartDate = simplifyDate(value[0]);
            var checkedEndDate = simplifyDate(value[1]);
            me.set({
                checkedStartDate: checkedStartDate,
                checkedEndDate: checkedEndDate
            });
            me.fire('change.daterange', {
                start: checkedStartDate,
                end: checkedEndDate
            });
        }
        me.set({
            startModeDate: startModeDate,
            endModeDate: endModeDate,
            startModeList: startModeList,
            endModeList: endModeList
        });
    }
}));

// EXTERNAL MODULE: ./src/components/datepicker/template/DateWeek.hbs
var DateWeek = __webpack_require__(38);
var DateWeek_default = /*#__PURE__*/__webpack_require__.n(DateWeek);

// CONCATENATED MODULE: ./src/components/datepicker/components/DateWeek.ts






/* harmony default export */ var components_DateWeek = (yox_esm["a" /* default */].define({
    propTypes: {
        startDate: {
            type: isDate()
        },
        date: {
            type: RAW_NUMERIC
        },
        firstDay: {
            type: RAW_NUMERIC
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: DateWeek_default.a,
    data: function () {
        return {
            weeks: WEEKS,
            dateList: [],
            modeDate: this.get('startDate') ? this.get('startDate') : new Date(),
            checkedIndex: 0,
            checkedDateTime: -1
        };
    },
    computed: {
        currentYear: function () {
            return simplifyDate(this.get('modeDate')).year;
        },
        currentMonth: function () {
            return simplifyDate(this.get('modeDate')).month;
        }
    },
    methods: {
        changeDate: function (offset) {
            var me = this;
            var date = me.get('modeDate');
            date = offsetMonth(date, offset);
            me.set({
                checkedIndex: -1,
                modeDate: date,
                dateList: me.createRenderData(date, me.get('checkedDateTime'))
            });
        },
        prevYear: function () {
            this.changeDate(-12);
        },
        prevMonth: function () {
            this.changeDate(-1);
        },
        nextYear: function () {
            this.changeDate(12);
        },
        nextMonth: function () {
            this.changeDate(1);
        },
        click: function (date) {
            this.fire('change.week', {
                start: date[0],
                end: date[date.length - 1]
            });
            this.refresh(getOffsetTime(parseDate(date[0])));
        },
        refresh: function (start) {
            var me = this;
            var dateList = me.get('dateList');
            var checkedIndex = undefined;
            var checkedDateTime = '';
            for (var i = 0; i < dateList.length; i++) {
                var item = dateList[i][0];
                var itemTime = getOffsetTime(parseDate(item));
                if (itemTime == start) {
                    checkedDateTime = itemTime;
                    checkedIndex = i;
                }
            }
            me.set({
                checkedDateTime: checkedDateTime,
                checkedIndex: checkedIndex
            });
        },
        // 获取渲染模板的数据
        getDatasource: function (start, end, date, checkedDateTime) {
            var data = [];
            date = simplifyDate(date);
            for (var time = start, item = void 0; time <= end; time += DAY) {
                item = simplifyDate(time);
                item.isCurrentDate = checkedDateTime && checkedDateTime === getOffsetTime(parseDate(item));
                item.isPrevMonth = item.month < date.month;
                item.isCurrentMonth = item.month == date.month;
                item.isLastMonth = item.month > date.month;
                data.push(item);
            }
            return data;
        },
        createRenderData: function (modeDate, checkedDateTime) {
            var me = this;
            var firstDay = me.get('firstDay') || 0;
            modeDate = normalizeDate(modeDate);
            var startDate;
            var endDate;
            startDate = firstDateInWeek(firstDateInMonth(modeDate), firstDay);
            endDate = lastDateInWeek(lastDateInMonth(modeDate), firstDay);
            startDate = normalizeDate(startDate);
            endDate = normalizeDate(endDate);
            var duration = endDate - startDate;
            var offset = STABLE_DURATION - duration;
            if (offset > 0) {
                endDate += offset;
            }
            var list = me.getDatasource(startDate, endDate, modeDate, checkedDateTime);
            return me.format(list);
        },
        format: function (list) {
            var me = this;
            var result = [];
            var arr = [];
            var checkedIndex = -1;
            for (var i = 0; i < list.length; i++) {
                arr.push(list[i]);
                if (i % 7 == 6) {
                    if (getOffsetTime(parseDate(arr[0])) === me.get('checkedDateTime')) {
                        checkedIndex = result.length;
                    }
                    result.push(arr);
                    arr = [];
                }
            }
            me.set({
                checkedIndex: checkedIndex
            });
            return result;
        }
    },
    afterMount: function () {
        var me = this;
        var today = new Date();
        var date = me.get('modeDate');
        date = date ? date : today;
        me.set({
            modeDate: date,
            dateList: me.createRenderData(date, me.get('checkedDateTime'))
        });
        var start = me.get('value') ? me.get('value')[0] : UNDEFINED;
        if (start) {
            me.refresh(getOffsetTime(start));
            this.fire('change.week', {
                start: simplifyDate(start),
                end: simplifyDate(me.get('value')[1])
            });
        }
    }
}));

// EXTERNAL MODULE: ./src/components/datepicker/template/DateMonth.hbs
var DateMonth = __webpack_require__(39);
var DateMonth_default = /*#__PURE__*/__webpack_require__.n(DateMonth);

// CONCATENATED MODULE: ./src/components/datepicker/components/DateMonth.ts





/* harmony default export */ var components_DateMonth = (yox_esm["a" /* default */].define({
    propTypes: {
        startDate: {
            type: isDate()
        },
        value: {
            type: isDate()
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: DateMonth_default.a,
    data: function () {
        var year = new Date().getFullYear();
        if (this.get('startDate')) {
            year = this.get('startDate').getFullYear();
        }
        var checkedMonth = '';
        var checkedYear = '';
        if (this.get('value')) {
            checkedYear = this.get('value').getFullYear();
            checkedMonth = this.get('value').getMonth();
        }
        return {
            checkedMonth: checkedMonth,
            checkedYear: checkedYear,
            modeYear: year,
            months: MONTHS
        };
    },
    watchers: {
        value: function (value) {
            var checkedMonth = '';
            var checkedYear = '';
            if (value) {
                checkedYear = value.getFullYear();
                checkedMonth = value.getMonth();
            }
            this.set({
                checkedYear: checkedYear,
                checkedMonth: checkedMonth
            });
        }
    },
    methods: {
        click: function (month) {
            var year = this.get('modeYear');
            this.set({
                checkedYear: year,
                checkedMonth: month
            });
            this.fire('change.month', {
                year: year,
                month: month + 1
            });
        }
    },
    afterMount: function () {
        if (this.get('value')) {
            this.fire('change.month', {
                year: this.get('checkedYear'),
                month: this.get('checkedMonth') + 1
            });
        }
    }
}));

// EXTERNAL MODULE: ./src/components/datepicker/template/DateYear.hbs
var DateYear = __webpack_require__(40);
var DateYear_default = /*#__PURE__*/__webpack_require__.n(DateYear);

// CONCATENATED MODULE: ./src/components/datepicker/components/DateYear.ts




/* harmony default export */ var components_DateYear = (yox_esm["a" /* default */].define({
    propTypes: {
        startDate: {
            type: isDate()
        },
        value: {
            type: isDate()
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: DateYear_default.a,
    data: function () {
        var year = new Date().getFullYear();
        if (this.get('startDate')) {
            year = this.get('startDate').getFullYear();
        }
        var checkedYear = '';
        if (this.get('value')) {
            checkedYear = this.get('value').getFullYear();
        }
        return {
            modeYear: year,
            checkedYear: checkedYear,
            years: []
        };
    },
    watchers: {
        value: function (value) {
            var checkedYear = '';
            if (value) {
                checkedYear = value.getFullYear();
            }
            this.set({ checkedYear: checkedYear });
        }
    },
    methods: {
        prev: function () {
            this.decrease('modeYear', 12);
            this.getYearList(this.get('modeYear'));
        },
        next: function () {
            this.increase('modeYear', 12);
            this.getYearList(this.get('modeYear'));
        },
        click: function (year) {
            this.set({
                checkedYear: year
            });
            this.fire('change.year', {
                year: year
            });
        },
        getYearList: function (startYear) {
            var years = [];
            for (var item = startYear; item < startYear + 12; item++) {
                years.push(item);
            }
            this.set({
                modeYear: startYear,
                years: years
            });
        }
    },
    afterMount: function () {
        this.getYearList(this.get('modeYear'));
        if (this.get('value')) {
            this.fire('change.year', {
                year: this.get('checkedYear')
            });
        }
    }
}));

// EXTERNAL MODULE: ./src/components/datepicker/template/DatePicker.hbs
var DatePicker = __webpack_require__(41);
var DatePicker_default = /*#__PURE__*/__webpack_require__.n(DatePicker);

// CONCATENATED MODULE: ./src/components/datepicker/DatePicker.ts










var DAY_MAP = ['日', '一', '二', '三', '四', '五', '六'];
/* harmony default export */ var datepicker_DatePicker = (yox_esm["a" /* default */].define({
    propTypes: {
        type: {
            type: oneOf(['date', 'dateRange', 'week', 'year', 'month']),
            value: 'date'
        },
        size: {
            type: oneOf(RAW_SIZE_ARRAY)
        },
        value: {
            type: isDate()
        },
        shortcuts: {
            type: RAW_ARRAY
        },
        splitPanel: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        multiple: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        placement: {
            type: oneOf(RAW_PLACEMENT_ARRAY),
            value: RAW_BOTTOM_START
        },
        startDate: {
            type: isDate()
        },
        formatText: {
            type: RAW_STRING
        },
        disabledDate: {
            type: RAW_FUNCTION
        },
        confirm: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        clearable: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        open: {
            type: RAW_BOOLEAN
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    model: 'value',
    template: DatePicker_default.a,
    data: function () {
        return {
            date: NULL,
            start: NULL,
            end: NULL,
            visible: FALSE
        };
    },
    computed: {
        autoClose: function () {
            return this.get('multiple') || this.get('confirm');
        },
        isOpen: function () {
            return this.get('visible') || this.get('open');
        }
    },
    components: {
        Date: components_Date,
        DateRange: components_DateRange,
        DateWeek: components_DateWeek,
        DateMonth: components_DateMonth,
        DateYear: components_DateYear
    },
    events: {
        'clear.input': function (event) {
            this.fire('clear.datepicker', true);
            event.stop();
        },
        'change.date': function (event, data) {
            if (data.selectedDates) {
                this.set({
                    selectedDates: data.selectedDates
                });
            }
            this.dateChange(data.date);
            event.stop();
        },
        change: function (_, data) {
            if (!data.value) {
                this.fire('clear.datePicker');
            }
        },
        'change.year': function (event, date) {
            this.dateChange(date);
            event.stop();
        },
        'change.month': function (event, date) {
            this.dateChange(date);
            event.stop();
        },
        'change.week': function (event, date) {
            this.dateRangeChange(date);
            event.stop();
        },
        'change.daterange': function (event, date) {
            this.dateRangeChange(date);
            event.stop();
        }
    },
    methods: {
        shortcutClick: function (data) {
            var date = data.value && data.value();
            if (!date) {
                yox_esm["a" /* default */].logger.warn("shortcuts value \u4F20\u503C\u9519\u8BEF");
                return;
            }
            if (!yox_esm["a" /* default */].is.array(date)) {
                date = simplifyDate(date);
                this.dateChange(date);
            }
            else {
                this.dateRangeChange({
                    start: simplifyDate(date[0]),
                    end: simplifyDate(date[1])
                });
            }
            this.set({
                value: date
            });
            data.onClick && data.onClick();
        },
        focus: function () {
            this.set('visible', true);
        },
        close: function () {
            this.set('visible', false);
        },
        formatDate: function (start, end) {
            if (!start) {
                return '';
            }
            var result = '';
            var me = this;
            var startFormat = me.get('formatText').split('$')[0];
            var endFormat = me.get('formatText').split('$')[1];
            if (end) {
                var formatStart = startFormat
                    .replace(/yyyy/i, start.year)
                    .replace(/yy/i, +('' + start.year).substr(2))
                    .replace(/MM/, lpad(start.month))
                    .replace(/M/, start.month)
                    .replace(/dd/i, lpad(start.date))
                    .replace(/d/i, start.date)
                    .replace(/w/, DAY_MAP[start.day]);
                var formatEnd = endFormat
                    .replace(/yyyy/i, end.year)
                    .replace(/yy/i, +('' + end.year).substr(2))
                    .replace(/MM/, lpad(end.month))
                    .replace(/M/, end.month)
                    .replace(/dd/i, lpad(end.date))
                    .replace(/d/i, end.date)
                    .replace(/w/, DAY_MAP[end.day]);
                result = formatStart + formatEnd;
            }
            else {
                result = startFormat
                    .replace(/yyyy/i, start.year)
                    .replace(/yy/i, +('' + start.year).substr(2))
                    .replace(/MM/, lpad(start.month))
                    .replace(/M/, start.month)
                    .replace(/dd/i, lpad(start.date))
                    .replace(/d/i, start.date)
                    .replace(/w/, DAY_MAP[start.day]);
            }
            return result.trim();
        },
        dateChange: function (date) {
            var me = this;
            var multiple = me.get('multiple');
            if (!multiple) {
                var formatDate = me.get('formatDate');
                var newFormateDate = me.formatDate(date);
                if (newFormateDate !== formatDate) {
                    me.fire('change.datepicker', {
                        value: {
                            formatDate: newFormateDate,
                            date: date,
                        },
                        oldValue: {
                            formatDate: formatDate,
                            date: me.get('date')
                        }
                    });
                }
                me.set({
                    date: date,
                    formatDate: newFormateDate
                });
            }
            else {
                var formatDateArray_1 = [];
                var selectedDates = me.get('selectedDates');
                selectedDates.forEach(function (item) {
                    var dateArray = item.split('/');
                    var date = {
                        year: dateArray[0],
                        month: dateArray[1],
                        date: dateArray[2],
                        day: dateArray[3],
                    };
                    formatDateArray_1.push(me.formatDate(date));
                });
                me.set({
                    formatDate: formatDateArray_1.join(', ')
                });
            }
            !me.get('autoClose') && me.close();
        },
        dateRangeChange: function (data) {
            var end = data.end;
            if (!end) {
                return;
            }
            var me = this;
            var start = data.start;
            me.fire('change.datepicker', {
                value: {
                    start: start,
                    end: end,
                    startDate: me.formatDate(start),
                    endDate: me.formatDate(end),
                    formatDate: me.formatDate(start, end)
                },
                oldValue: {
                    start: me.get('start'),
                    end: me.get('end'),
                    startDate: me.formatDate(me.get('start')),
                    endDate: me.formatDate(me.get('end')),
                    formatDate: me.formatDate(me.get('start'), me.get('end'))
                }
            });
            me.set({
                start: start,
                end: end,
                formatDate: me.formatDate(start, end)
            });
            !me.get('autoClose') && me.close();
        },
        clear: function () {
            this.set('formatDate', '');
            this.fire('clear.datepicker', true);
            this.fire('clear.datepicker');
            this.close();
        },
        ok: function () {
            this.close();
            this.fire('ok.datepicker');
        }
    },
    afterMount: function () {
        var me = this, doc = document;
        if (!me.get('formatText')) {
            var formatText = '';
            switch (me.get('type')) {
                case 'date':
                    formatText = 'YYYY/MM/DD';
                    break;
                case 'dateRange':
                    formatText = 'YYYY/MM/DD $- YYYY/MM/DD';
                    break;
                case 'week':
                    formatText = 'YYYY/MM/DD $- YYYY/MM/DD';
                    break;
                case 'year':
                    formatText = 'YYYY';
                    break;
                case 'month':
                    formatText = 'YYYY/MM';
                    break;
            }
            me.set({ formatText: formatText });
        }
        var onClick = function (event) {
            var element = me.$el;
            var target = event.originalEvent.target;
            if (contains(element, target)) {
                return;
            }
            me.close();
        };
        yox_esm["a" /* default */].dom.on(doc, 'click', onClick);
        me.on('beforeDestroy.hook', function () {
            yox_esm["a" /* default */].dom.off(doc, 'click', onClick);
        });
    }
}));

// EXTERNAL MODULE: ./src/components/tooltip/template/Tooltip.hbs
var Tooltip = __webpack_require__(42);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);

// CONCATENATED MODULE: ./src/components/tooltip/Tooltip.ts



var timer;
/* harmony default export */ var tooltip_Tooltip = (yox_esm["a" /* default */].define({
    propTypes: {
        content: {
            type: RAW_STRING
        },
        placement: {
            type: RAW_STRING
        },
        disabled: {
            type: RAW_BOOLEAN
        },
        delay: {
            type: RAW_NUMERIC
        },
        mode: {
            type: RAW_STRING
        },
        maxWidth: {
            type: RAW_NUMERIC
        },
        maxHeight: {
            type: RAW_NUMERIC
        },
        offsetX: {
            type: RAW_NUMERIC
        },
        offsetY: {
            type: RAW_NUMERIC
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Tooltip_default.a,
    events: {
        'hasItem.tootipItem': function () {
            var content = this.$refs.contents.getElementsByClassName('bell-tooltip-inner-content');
            if (content.length) {
                var innerElement = this.$refs.innerElement;
                for (var i = 0; i < content.length; i++) {
                    yox_esm["a" /* default */].dom.append(innerElement, content[i]);
                }
            }
        }
    },
    data: function () {
        return {
            isShow: FALSE,
            isHover: FALSE
        };
    },
    watchers: {
        disabled: function () {
            this.setPosition();
        }
    },
    methods: {
        setPosition: function () {
            var me = this;
            var offsetX = me.get('offsetX') ? +me.get('offsetX') : 0;
            var offsetY = me.get('offsetY') ? +me.get('offsetY') : 0;
            var poperElement = this.$refs.poperElement;
            var placement = me.get('placement') || 'bottom';
            var poperElementWidth = poperElement.clientWidth;
            var poperElementHeight = poperElement.clientHeight;
            var marginLeft = 0;
            var marginTop = 0;
            if (placement == 'bottom') {
                marginLeft = -(poperElementWidth / 2);
            }
            else if (placement == 'bottom-start') {
                marginLeft = 0;
            }
            else if (placement == 'bottom-end') {
                marginLeft = 0;
            }
            else if (placement == 'top') {
                marginLeft = -(poperElementWidth / 2);
                marginTop = -poperElementHeight;
            }
            else if (placement == 'top-start') {
                marginTop = -poperElementHeight;
            }
            else if (placement == 'top-end') {
                marginTop = -poperElementHeight;
            }
            else if (placement == 'left') {
                marginLeft = -poperElementWidth;
                marginTop = -(poperElementHeight / 2);
            }
            else if (placement == 'left-start') {
                marginLeft = -poperElementWidth;
            }
            else if (placement == 'left-end') {
                marginLeft = -poperElementWidth;
            }
            else if (placement == 'right') {
                marginTop = -(poperElementHeight / 2);
            }
            if (yox_esm["a" /* default */].is.number(offsetX)) {
                marginLeft += offsetX;
            }
            if (yox_esm["a" /* default */].is.number(offsetY)) {
                marginTop += offsetY;
            }
            poperElement.style.marginLeft = marginLeft + 'px';
            poperElement.style.marginTop = marginTop + 'px';
        },
        leave: function () {
            if (this.get('mode') && this.get('mode') == 'click') {
                return;
            }
            this.set({
                isShow: false,
                isHover: false
            });
        },
        hover: function () {
            var me = this;
            if (me.get('mode') && me.get('mode') == 'click') {
                return;
            }
            var delay = me.get('delay') ? +me.get('delay') : 0;
            me.set({
                isHover: true
            });
            yox_esm["a" /* default */].nextTick(function () {
                me.setPosition();
                timer = setTimeout(function () {
                    if (me.get('isHover')) {
                        me.set({
                            isShow: true
                        });
                    }
                }, delay);
            });
        },
        click: function () {
            var me = this;
            if (!me.get('mode') || me.get('mode') == 'hover') {
                return;
            }
            me.set({
                isShow: !me.get('isShow')
            });
            yox_esm["a" /* default */].nextTick(function () {
                me.setPosition();
            });
        }
    },
    beforeDestroy: function () {
        if (timer) {
            clearTimeout(timer);
            timer = NULL;
        }
    }
}));

// EXTERNAL MODULE: ./src/components/tooltip/template/TooltipItem.hbs
var TooltipItem = __webpack_require__(43);
var TooltipItem_default = /*#__PURE__*/__webpack_require__.n(TooltipItem);

// CONCATENATED MODULE: ./src/components/tooltip/TooltipItem.ts



/* harmony default export */ var tooltip_TooltipItem = (yox_esm["a" /* default */].define({
    propTypes: {
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        },
    },
    template: TooltipItem_default.a,
    afterMount: function () {
        this.fire('hasItem.tootipItem');
    }
}));

// EXTERNAL MODULE: ./src/components/collapse/template/Collapse.hbs
var Collapse = __webpack_require__(44);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse);

// CONCATENATED MODULE: ./src/components/collapse/Collapse.ts



/* harmony default export */ var collapse_Collapse = (yox_esm["a" /* default */].define({
    name: 'bell-collapse',
    propTypes: {
        activeName: {
            type: RAW_NUMERIC
        },
        accordion: {
            type: RAW_BOOLEAN
        },
        bordered: {
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
    template: Collapse_default.a,
    watchers: {
        accordion: function (accordion) {
            this.fire('change.accordion', { accordion: accordion }, TRUE);
        }
    },
    events: {
        'change.opened': function (event, data) {
            if (event.phase === yox_esm["a" /* default */].Event.PHASE_UPWARD) {
                this.fire('change.opened', data, TRUE);
            }
        }
    }
}));

// EXTERNAL MODULE: ./src/components/collapse/template/Panel.hbs
var Panel = __webpack_require__(45);
var Panel_default = /*#__PURE__*/__webpack_require__.n(Panel);

// CONCATENATED MODULE: ./src/components/collapse/Panel.ts




/* harmony default export */ var collapse_Panel = (yox_esm["a" /* default */].define({
    propTypes: {
        title: {
            type: RAW_STRING
        },
        name: {
            type: RAW_NUMERIC
        },
        isActive: {
            type: RAW_BOOLEAN
        },
        showIcon: {
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
    template: Panel_default.a,
    data: function (options) {
        var collapse = findComponentUpward(options.parent, 'bell-collapse');
        return {
            opened: FALSE,
            accordion: collapse
                ? collapse.get('accordion')
                : FALSE
        };
    },
    events: {
        'change.accordion': function (_, data) {
            this.set({
                accordion: data.accordion
            });
        },
        'change.opened': function (event, data) {
            if (event.phase === yox_esm["a" /* default */].Event.PHASE_DOWNWARD) {
                var me = this;
                if (data.name === me.get('name')) {
                    data.opened ? me.open() : me.close();
                }
                else if (me.get('accordion')) {
                    me.close();
                }
            }
        }
    },
    methods: {
        click: function () {
            this.fire('change.opened', {
                name: this.get('name'),
                opened: !this.get('opened'),
            });
        },
        close: function () {
            var me = this, opened = me.get('opened');
            if (!opened) {
                return;
            }
            var content = me.$refs.content;
            content.style.height = content.clientHeight + 'px';
            setTimeout(function () {
                if (!content) {
                    return;
                }
                content.style.height = '0px';
                onTransitionEnd(content, function () {
                    me.set('opened', FALSE);
                    me.nextTick(function () {
                        content.style.height = '';
                    });
                });
            });
        },
        open: function () {
            var me = this, opened = me.get('opened');
            if (opened) {
                return;
            }
            me.set('opened', TRUE);
            me.nextTick(function () {
                var content = me.$refs.content;
                var height = content.clientHeight;
                content.style.height = '0px';
                setTimeout(function () {
                    if (!content) {
                        return;
                    }
                    content.style.height = height + 'px';
                    onTransitionEnd(content, function () {
                        content.style.height = '';
                    });
                });
            });
        }
    },
    afterMount: function () {
        this.watch('isActive', {
            watcher: function (isActive) {
                if (isActive == NULL) {
                    return;
                }
                this.fire('change.opened', {
                    name: this.get('name'),
                    opened: isActive
                });
            },
            immediate: TRUE
        });
    }
}));

// EXTERNAL MODULE: ./src/components/card/template/Card.hbs
var Card = __webpack_require__(46);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);

// CONCATENATED MODULE: ./src/components/card/Card.ts



/* harmony default export */ var card_Card = (yox_esm["a" /* default */].define({
    propTypes: {
        bordered: {
            type: RAW_BOOLEAN,
            value: TRUE
        },
        hoverDisabled: {
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
    template: Card_default.a
}));

// EXTERNAL MODULE: ./src/components/card/template/CardHeader.hbs
var CardHeader = __webpack_require__(47);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader);

// CONCATENATED MODULE: ./src/components/card/CardHeader.ts



/* harmony default export */ var card_CardHeader = (yox_esm["a" /* default */].define({
    propTypes: {
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        },
    },
    template: CardHeader_default.a
}));

// EXTERNAL MODULE: ./src/components/card/template/CardMedia.hbs
var CardMedia = __webpack_require__(48);
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia);

// CONCATENATED MODULE: ./src/components/card/CardMedia.ts



/* harmony default export */ var card_CardMedia = (yox_esm["a" /* default */].define({
    propTypes: {
        title: {
            type: RAW_STRING
        },
        subTitle: {
            type: RAW_STRING
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: CardMedia_default.a
}));

// EXTERNAL MODULE: ./src/components/card/template/CardBody.hbs
var CardBody = __webpack_require__(49);
var CardBody_default = /*#__PURE__*/__webpack_require__.n(CardBody);

// CONCATENATED MODULE: ./src/components/card/CardBody.ts



/* harmony default export */ var card_CardBody = (yox_esm["a" /* default */].define({
    propTypes: {
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: CardBody_default.a
}));

// EXTERNAL MODULE: ./src/components/card/template/CardActions.hbs
var CardActions = __webpack_require__(50);
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions);

// CONCATENATED MODULE: ./src/components/card/CardActions.ts



/* harmony default export */ var card_CardActions = (yox_esm["a" /* default */].define({
    propTypes: {
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: CardActions_default.a
}));

// EXTERNAL MODULE: ./src/components/list/template/List.hbs
var List = __webpack_require__(51);
var List_default = /*#__PURE__*/__webpack_require__.n(List);

// CONCATENATED MODULE: ./src/components/list/List.ts



/* harmony default export */ var list_List = (yox_esm["a" /* default */].define({
    propTypes: {
        border: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        loading: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        size: {
            type: RAW_STRING
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: List_default.a
}));

// EXTERNAL MODULE: ./src/components/list/template/Item.hbs
var Item = __webpack_require__(52);
var Item_default = /*#__PURE__*/__webpack_require__.n(Item);

// CONCATENATED MODULE: ./src/components/list/Item.ts



/* harmony default export */ var list_Item = (yox_esm["a" /* default */].define({
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
    template: Item_default.a,
    data: function () {
        return {
            nestedIsShow: FALSE
        };
    },
    events: {
        click: function () {
            this.toggle('nestedIsShow');
        }
    },
}));

// EXTERNAL MODULE: ./src/components/divider/template/Divider.hbs
var Divider = __webpack_require__(53);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);

// CONCATENATED MODULE: ./src/components/divider/Divider.ts




/* harmony default export */ var divider_Divider = (yox_esm["a" /* default */].define({
    propTypes: {
        type: {
            type: oneOf([RAW_HORIZONTAL, RAW_VERTICAL]),
            value: RAW_HORIZONTAL
        },
        dashed: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        align: {
            type: oneOf([RAW_CENTER, RAW_LEFT, RAW_RIGHT]),
            value: RAW_CENTER
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Divider_default.a
}));

// EXTERNAL MODULE: ./src/components/circle/template/Circle.hbs
var Circle = __webpack_require__(54);
var Circle_default = /*#__PURE__*/__webpack_require__.n(Circle);

// CONCATENATED MODULE: ./src/components/circle/Circle.ts




/* harmony default export */ var circle_Circle = (yox_esm["a" /* default */].define({
    propTypes: {
        dashboard: {
            type: RAW_BOOLEAN
        },
        percent: {
            type: RAW_NUMERIC,
            value: 0
        },
        size: {
            type: RAW_NUMERIC,
            value: 120
        },
        strokeWidth: {
            type: RAW_NUMERIC,
            value: 6
        },
        strokeColor: {
            type: RAW_STRING,
            value: '#2db7f5'
        },
        strokeLinecap: {
            type: oneOf(['square', 'round']),
            value: 'round'
        },
        trailWidth: {
            type: RAW_NUMERIC,
            value: 5
        },
        trailColor: {
            type: RAW_STRING,
            value: '#eaeef2'
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Circle_default.a,
    computed: {
        computedStrokeWidth: function () {
            return this.get('percent') === 0 && this.get('dashboard')
                ? 0
                : this.get('strokeWidth');
        },
        trailStyle: function () {
            var style = [];
            var len = this.get('len');
            if (this.get('dashboard')) {
                style = [
                    "stroke-dasharray: " + (len - 75) + "px " + len + "px",
                    "stroke-dashoffset: -" + 75 / 2 + "px",
                    'transition: stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
                ];
            }
            return style.join(';');
        },
        pathStyle: function () {
            var style = [];
            var percent = this.get('percent');
            var len = this.get('len');
            if (this.get('dashboard')) {
                style = [
                    "stroke-dasharray: " + (percent / 100) * (len - 75) + "px " + len + "px",
                    "stroke-dashoffset: -" + 75 / 2 + "px",
                    'transition: stroke-dashoffset .3s ease 0s, stroke-dasharray .6s ease 0s, stroke .6s, stroke-width .06s ease .6s'
                ];
            }
            else {
                style = [
                    "stroke-dasharray: " + len + "px " + len + "px",
                    "stroke-dashoffset: " + ((100 - percent) / 100 * len) + "px",
                    'transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
                ];
            }
            return style.join(';');
        },
        radius: function () {
            return 50 - this.get('strokeWidth') / 2;
        },
        len: function () {
            return Math.PI * 2 * this.get('radius');
        },
        path: function () {
            var radius = this.get('radius');
            if (this.get('dashboard')) {
                return "M 50,50 m 0," + radius + "\n        a " + radius + "," + radius + " 0 1 1 0,-" + 2 * radius + "\n        a " + radius + "," + radius + " 0 1 1 0," + 2 * radius;
            }
            else {
                return "M 50,50 m 0,-" + radius + "\n        a " + radius + "," + radius + " 0 1 1 0," + 2 * radius + "\n        a " + radius + "," + radius + " 0 1 1 0,-" + 2 * radius;
            }
        }
    }
}));

// EXTERNAL MODULE: ./src/components/progress/template/Progress.hbs
var Progress = __webpack_require__(55);
var Progress_default = /*#__PURE__*/__webpack_require__.n(Progress);

// CONCATENATED MODULE: ./src/components/progress/Progress.ts



/* harmony default export */ var progress_Progress = (yox_esm["a" /* default */].define({
    propTypes: {
        percent: {
            type: RAW_NUMERIC,
            value: 0
        },
        type: {
            type: RAW_STRING
        },
        strokeWidth: {
            type: RAW_STRING,
            value: 10
        },
        hideInfo: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        vertical: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        active: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Progress_default.a
}));

// EXTERNAL MODULE: ./src/components/slider/template/Slider.hbs
var Slider = __webpack_require__(56);
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider);

// CONCATENATED MODULE: ./src/components/slider/Slider.ts




/* harmony default export */ var slider_Slider = (yox_esm["a" /* default */].define({
    propTypes: {
        type: {
            type: RAW_STRING
        },
        value: {
            type: [RAW_NUMBER, RAW_ARRAY],
            value: 40
        },
        max: {
            type: RAW_NUMBER,
            value: 100
        },
        min: {
            type: RAW_NUMBER,
            value: 0
        },
        step: {
            type: RAW_NUMBER,
            value: 1
        },
        disabled: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Slider_default.a,
    data: function () {
        return {
            dragging: FALSE
        };
    },
    computed: {
        percent: function () {
            var range = this.get('max') - this.get('min');
            var percentNum = range > 0
                ? (this.get('value') - this.get('min')) / range * 100
                : 0;
            return percentNum > 100
                ? 100
                : (percentNum < 0 ? 0 : percentNum.toFixed(2));
        }
    },
    methods: {
        handleTouchStart: function (event) {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            me.setValue(event.originalEvent);
            yox_esm["a" /* default */].dom.on(document, 'touchmove', me.handleTouchMove);
            yox_esm["a" /* default */].dom.on(document, 'touchup', me.handleTouchEnd);
            yox_esm["a" /* default */].dom.on(document, 'touchend', me.handleTouchEnd);
            yox_esm["a" /* default */].dom.on(document, 'touchcancel', me.handleTouchEnd);
            event.prevent();
            me.onDragStart();
        },
        handleTouchEnd: function (event) {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            yox_esm["a" /* default */].dom.off(document, 'touchmove', me.handleTouchMove);
            yox_esm["a" /* default */].dom.off(document, 'touchup', me.handleTouchEnd);
            yox_esm["a" /* default */].dom.off(document, 'touchend', me.handleTouchEnd);
            yox_esm["a" /* default */].dom.off(document, 'touchcancel', me.handleTouchEnd);
            event.prevent();
            me.onDragStop();
        },
        handleTouchMove: function (event) {
            this.onDragUpdate(event.originalEvent);
        },
        handleDragMouseMove: function (event) {
            this.onDragUpdate(event.originalEvent);
        },
        handleMouseDown: function (event) {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            me.setValue(event.originalEvent);
            yox_esm["a" /* default */].dom.on(document, 'mousemove', me.handleDragMouseMove);
            yox_esm["a" /* default */].dom.on(document, 'mouseup', me.handleDragMouseEnd);
            event.prevent();
            me.onDragStart();
        },
        handleDragMouseEnd: function () {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            yox_esm["a" /* default */].dom.off(document, 'mousemove', me.handleDragMouseMove);
            yox_esm["a" /* default */].dom.off(document, 'mouseup', me.handleDragMouseEnd);
            me.onDragStop();
        },
        onDragStart: function () {
            this.set({
                dragging: TRUE
            });
            this.fire('dragStart');
        },
        onDragStop: function () {
            this.set({
                dragging: FALSE
            });
            this.fire('dragStop');
        },
        onDragUpdate: function (event) {
            var me = this;
            if (me.get('draging')) {
                return;
            }
            me.set('draging', TRUE);
            requestAnimationFrame(function () {
                me.set('draging', FALSE);
                if (!me.get('disabled')) {
                    me.setValue(event);
                }
            });
        },
        setValue: function (event) {
            var clientX = event.touches
                ? event.touches[0].clientX
                : event.clientX;
            var me = this;
            var element = me.$el;
            var oldValue = me.get('value');
            var elementLeft = element.getBoundingClientRect().left;
            var elementWidth = element.offsetWidth;
            var min = me.get('min');
            var max = me.get('max');
            var range = max - min;
            var value = 0;
            value = elementWidth && ((clientX - elementLeft) / elementWidth * range);
            value = Math.round(value / me.get('step')) * me.get('step') + min;
            value = parseFloat(value.toFixed(5));
            value = value > max
                ? max
                : (value < min ? min : value);
            if (value !== oldValue) {
                me.set({
                    value: value
                });
                me.fire('change.slider', {
                    value: value,
                    oldValue: oldValue
                });
            }
        }
    }
}));

// EXTERNAL MODULE: ./src/components/tag/template/Tag.hbs
var Tag = __webpack_require__(57);
var Tag_default = /*#__PURE__*/__webpack_require__.n(Tag);

// CONCATENATED MODULE: ./src/components/tag/Tag.ts



/* harmony default export */ var tag_Tag = (yox_esm["a" /* default */].define({
    propTypes: {
        size: {
            type: RAW_STRING,
            value: 'small'
        },
        closable: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        border: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        dot: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        type: {
            type: RAW_STRING
        },
        checkable: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        checked: {
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
    template: Tag_default.a,
    watchers: {
        checked: function (value) {
            this.fire('change.tag', {
                value: value
            });
        }
    },
    methods: {
        click: function () {
            if (!this.get('checkable')) {
                return;
            }
            this.toggle('checked');
        },
        close: function () {
            this.fire('close.tag');
        }
    }
}));

// EXTERNAL MODULE: ./src/components/rate/template/Rate.hbs
var Rate = __webpack_require__(58);
var Rate_default = /*#__PURE__*/__webpack_require__.n(Rate);

// CONCATENATED MODULE: ./src/components/rate/Rate.ts



/* harmony default export */ var rate_Rate = (yox_esm["a" /* default */].define({
    propTypes: {
        count: {
            type: RAW_NUMERIC,
            value: 5
        },
        value: {
            type: RAW_NUMERIC
        },
        half: {
            type: RAW_BOOLEAN
        },
        readOnly: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        showTexts: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        texts: {
            type: RAW_ARRAY
        },
        type: {
            type: RAW_STRING,
            value: 'warning'
        },
        icon: {
            type: RAW_STRING,
            value: 'star'
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Rate_default.a,
    data: function () {
        return {
            hoverValue: -1
        };
    },
    computed: {
        activeValue: function () {
            return this.get('hoverValue') < 0 ? this.get('value') : this.get('hoverValue');
        }
    },
    filters: {
        getValue: function (index) {
            var texts = this.get('texts');
            return texts && texts[index - 1];
        }
    },
    methods: {
        handleMove: function (event, index) {
            if (this.get('readOnly')) {
                return;
            }
            event = event.originalEvent.originalEvent;
            var isHalf = event && event.target.getAttribute('data-type') == 'half';
            if (isHalf) {
                index -= 0.5;
            }
            this.set({
                hoverValue: index
            });
        },
        handleLeave: function () {
            if (this.get('readOnly')) {
                return;
            }
            this.set({
                hoverValue: this.get('value') >= 0 ? this.get('value') : -1
            });
        },
        handleClick: function (event, index) {
            if (this.get('readOnly')) {
                return;
            }
            event = event.originalEvent.originalEvent;
            var isHalf = event && event.target.getAttribute('data-type') == 'half';
            if (isHalf) {
                index -= 0.5;
            }
            this.set({
                value: index
            });
            this.fire('change', {
                value: index
            });
        }
    }
}));

// EXTERNAL MODULE: ./src/components/tabs/template/Tabs.hbs
var Tabs = __webpack_require__(59);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs);

// CONCATENATED MODULE: ./src/components/tabs/Tabs.ts




/* harmony default export */ var tabs_Tabs = (yox_esm["a" /* default */].define({
    name: 'bell-tabs',
    propTypes: {
        type: {
            type: oneOf(['line', 'card']),
            value: 'line'
        },
        size: {
            type: oneOf([RAW_TINY, RAW_SMALL, RAW_LARGE, 'default'])
        },
        closable: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        animated: {
            type: RAW_BOOLEAN,
            value: TRUE
        },
        value: {
            type: RAW_NUMERIC,
            value: 0
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Tabs_default.a,
    data: function () {
        return {
            tabsList: []
        };
    },
    computed: {
        translateStyle: function () {
            var me = this;
            var index = 0;
            var tabs = me.get('tabsList');
            yox_esm["a" /* default */].array.each(tabs, function (item, key) {
                if (item.id == me.get('value')) {
                    index = key;
                    return FALSE;
                }
            });
            return index * (-100) + '%';
        }
    },
    events: {
        tabPanelRemove: function (event, data) {
            if (event.phase === yox_esm["a" /* default */].Event.PHASE_UPWARD) {
                var tabsList = this.copy(this.get('tabsList'));
                tabsList = tabsList.filter(function (item) {
                    return item.id !== data.id;
                });
                this.set({ tabsList: tabsList });
            }
        },
        tabsValueUpdate: function (event, data) {
            if (event.phase === yox_esm["a" /* default */].Event.PHASE_UPWARD) {
                var me = this;
                var tabsList = me.copy(me.get('tabsList'));
                tabsList.forEach(function (item) {
                    if (item.id === data.id) {
                        item = data;
                    }
                });
                me.set({ tabsList: tabsList });
            }
        },
        tabPanelAdd: function (event, data) {
            if (event.phase === yox_esm["a" /* default */].Event.PHASE_UPWARD) {
                this.append('tabsList', data);
            }
        }
    },
    watchers: {
        value: function (value) {
            this.fire('tabSelected', { value: value }, TRUE);
        }
    },
    methods: {
        close: function (data) {
            this.fire('tabRemove', data);
        },
        click: function (data) {
            if (data.disabled)
                return;
            this.set({
                value: data.id
            });
        }
    }
}));

// EXTERNAL MODULE: ./src/components/tabs/template/TabPanel.hbs
var TabPanel = __webpack_require__(60);
var TabPanel_default = /*#__PURE__*/__webpack_require__.n(TabPanel);

// CONCATENATED MODULE: ./src/components/tabs/TabPanel.ts




/* harmony default export */ var tabs_TabPanel = (yox_esm["a" /* default */].define({
    propTypes: {
        name: {
            type: RAW_STRING
        },
        icon: {
            type: RAW_STRING
        },
        label: {
            type: RAW_STRING
        },
        disabled: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: TabPanel_default.a,
    data: function () {
        return {
            id: 0,
            isActive: FALSE
        };
    },
    watchers: {
        '*': function (newValue, oldValue, keypath) {
            var pathArray = ['name', 'icon', 'label', 'disabled'];
            if (pathArray.indexOf(keypath) >= 0) {
                this.upsert('tabPanelUpdate');
            }
        }
    },
    events: {
        tabSelected: function (_, data) {
            this.set({
                isActive: this.get('id') == data.value
            });
        }
    },
    methods: {
        upsert: function (name) {
            var me = this;
            me.fire(name, {
                label: me.get('label'),
                icon: me.get('icon'),
                disabled: me.get('disabled'),
                id: me.get('id')
            });
        }
    },
    afterMount: function () {
        var me = this;
        var name = me.get('name');
        if (name == null) {
            var element = findComponentUpward(me.$parent, 'bell-tabs');
            name = yox_esm["a" /* default */].array.indexOf(element.$children, me);
        }
        me.set('id', name);
        me.upsert('tabPanelAdd');
    },
    beforeDestroy: function () {
        this.upsert('tabPanelRemove');
    }
}));

// EXTERNAL MODULE: ./src/components/dropdown/template/Dropdown.hbs
var Dropdown = __webpack_require__(61);
var Dropdown_default = /*#__PURE__*/__webpack_require__.n(Dropdown);

// CONCATENATED MODULE: ./src/components/dropdown/Dropdown.ts




/* harmony default export */ var dropdown_Dropdown = (yox_esm["a" /* default */].define({
    propTypes: {
        placement: {
            type: oneOf(RAW_PLACEMENT_ARRAY),
            value: RAW_BOTTOM
        },
        trigger: {
            type: oneOf([RAW_HOVER, RAW_CLICK, RAW_CUSTOM]),
            value: RAW_HOVER
        },
        visible: {
            type: function (props, key) {
                if (props['trigger'] !== RAW_CUSTOM) {
                    yox_esm["a" /* default */].logger.warn(key + " \u671F\u671B\u5728 trigger \u53D6\u503C\u4E3A custom \u65F6\u4F20\u503C");
                }
                return true;
            }
        },
        height: {
            type: RAW_NUMERIC,
            value: 280
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Dropdown_default.a,
    watchers: {
        visible: function (isOpen) {
            this.set({ isOpen: isOpen });
        }
    },
    data: function () {
        return {
            isOpen: FALSE,
            FALSE: FALSE,
            TRUE: TRUE,
            RAW_HOVER: RAW_HOVER,
            RAW_CLICK: RAW_CLICK,
            RAW_CUSTOM: RAW_CUSTOM
        };
    },
    events: {
        'click.dropdownItem': function () {
            this.set({
                isOpen: FALSE
            });
        }
    }
}));

// EXTERNAL MODULE: ./src/components/dropdown/template/DropdownItem.hbs
var DropdownItem = __webpack_require__(62);
var DropdownItem_default = /*#__PURE__*/__webpack_require__.n(DropdownItem);

// CONCATENATED MODULE: ./src/components/dropdown/DropdownItem.ts



/* harmony default export */ var dropdown_DropdownItem = (yox_esm["a" /* default */].define({
    propTypes: {
        divided: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        disabled: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        selected: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        name: {
            type: RAW_STRING
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: DropdownItem_default.a
}));

// EXTERNAL MODULE: ./src/components/dropdown/template/DropdownMenu.hbs
var DropdownMenu = __webpack_require__(63);
var DropdownMenu_default = /*#__PURE__*/__webpack_require__.n(DropdownMenu);

// CONCATENATED MODULE: ./src/components/dropdown/DropdownMenu.ts



/* harmony default export */ var dropdown_DropdownMenu = (yox_esm["a" /* default */].define({
    propTypes: {
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: DropdownMenu_default.a
}));

// EXTERNAL MODULE: ./src/components/transfer/template/Transfer.html
var Transfer = __webpack_require__(64);
var Transfer_default = /*#__PURE__*/__webpack_require__.n(Transfer);

// CONCATENATED MODULE: ./src/components/transfer/Transfer.js

/* harmony default export */ var transfer_Transfer = ({
    propTypes: {
        data: {
            type: 'array',
            value: function () {
                return [];
            }
        },
        targetKeys: {
            type: 'array',
            value: function () {
                return [];
            }
        },
        onChange: {
            type: 'function'
        },
        leftLabel: {
            type: 'string'
        },
        rightLabel: {
            type: 'string'
        }
    },
    template: Transfer_default.a,
    data: function () {
        var me = this;
        return {
            leftKeys: [],
            rightKeys: [],
            checkLeftAll: false,
            checkRightAll: false,
            left: [],
            right: [],
            onLeftChange: function (left) {
                me.set({
                    left: left,
                    checkLeftAll: left && left.length == me.get('leftList.length')
                });
            },
            onRightChange: function (right) {
                me.set({
                    right: right,
                    checkRightAll: right && right.length == me.get('rightList.length')
                });
            },
            onCheckLeftAllChange: function (isCheckAll) {
                me.set({
                    left: isCheckAll ? me.getListKeys(me.get('leftList')) : []
                });
            },
            onCheckRightAllChange: function (isCheckAll) {
                me.set({
                    right: isCheckAll ? me.getListKeys(me.get('rightList')) : []
                });
            }
        };
    },
    computed: {
        rightList: {
            deps: ['targetKeys', 'targetKeys.length', 'data.*'],
            get: function () {
                var me = this;
                var data = me.get('data');
                var targetKeys = me.get('targetKeys');
                if (!data
                    || !targetKeys) {
                    return [];
                }
                return data.filter(function (item) { return targetKeys.indexOf(item['key']) !== -1; });
            }
        },
        leftList: {
            deps: ['targetKeys', 'targetKeys.length', 'data.*', 'data'],
            get: function () {
                var me = this;
                var data = me.get('data');
                var targetKeys = me.get('targetKeys');
                if (!data
                    || !targetKeys) {
                    return [];
                }
                return data.filter(function (item) { return targetKeys.indexOf(item['key']) === -1; });
                ;
            }
        }
    },
    methods: {
        addToLeft: function () {
            var me = this;
            me.get('right').map(function (item) {
                Yox.array.remove('targetKeys', item.key);
            });
        },
        addToRight: function () {
            var me = this;
            me.set({
                targetKeys: Yox.array.merge(me.get('targetKeys'), me.get('left'))
            });
        },
        getListCheckedkeys: function (list) {
            var keys = [];
            if (list.length) {
                keys = list.map(function (item) {
                    if (item.checked) {
                        return item.keys;
                    }
                });
            }
            return keys;
        },
        getListKeys: function (list) {
            var keys = [];
            if (list.length) {
                keys = list.map(function (item) { return item.key; });
            }
            return keys;
        }
    }
});

// EXTERNAL MODULE: ./src/components/timePicker/template/TimePicker.hbs
var TimePicker = __webpack_require__(65);
var TimePicker_default = /*#__PURE__*/__webpack_require__.n(TimePicker);

// CONCATENATED MODULE: ./src/components/timePicker/TimePicker.ts



/* harmony default export */ var timePicker_TimePicker = (yox_esm["a" /* default */].define({
    propTypes: {
        unit: {
            type: RAW_STRING,
            value: '分'
        },
        onChange: {
            type: RAW_FUNCTION
        },
        tens: {
            type: RAW_NUMBER,
            value: 0
        },
        ones: {
            type: RAW_NUMBER,
            value: 0
        }
    },
    template: TimePicker_default.a,
    watchers: {
        tens: function (val) {
            var ones = this.get('ones');
            var result = val * 10 + ones;
            this.get('onChange') && this.get('onChange')(result);
        },
        ones: function (val) {
            var tens = this.get('tens');
            var result = tens * 10 + val;
            this.get('onChange') && this.get('onChange')(result);
        }
    },
    methods: {
        upTens: function () {
            this.decrease('tens', 1, 0);
        },
        downTens: function () {
            this.increase('tens', 1, 5);
        },
        upOnes: function () {
            this.decrease('ones', 1, 0);
        },
        downOnes: function () {
            this.increase('ones', 1, 9);
        }
    },
    afterMount: function () {
    },
    beforeDestroy: function () {
    }
}));

// EXTERNAL MODULE: ./src/components/timeline/template/TimeLine.hbs
var TimeLine = __webpack_require__(66);
var TimeLine_default = /*#__PURE__*/__webpack_require__.n(TimeLine);

// CONCATENATED MODULE: ./src/components/timeline/TimeLine.ts



/* harmony default export */ var timeline_TimeLine = (yox_esm["a" /* default */].define({
    propTypes: {
        pending: {
            type: RAW_BOOLEAN
        }
    },
    template: TimeLine_default.a
}));

// EXTERNAL MODULE: ./src/components/timeline/template/TimeLineItem.hbs
var TimeLineItem = __webpack_require__(67);
var TimeLineItem_default = /*#__PURE__*/__webpack_require__.n(TimeLineItem);

// CONCATENATED MODULE: ./src/components/timeline/TimeLineItem.ts



/* harmony default export */ var timeline_TimeLineItem = (yox_esm["a" /* default */].define({
    propTypes: {
        color: {
            type: RAW_STRING,
            value: '#348EED'
        }
    },
    template: TimeLineItem_default.a
}));

// CONCATENATED MODULE: ./src/components/form/util/validate.js


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
var validate_Validator = /** @class */ (function () {
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


// EXTERNAL MODULE: ./src/components/form/template/Form.hbs
var Form = __webpack_require__(68);
var Form_default = /*#__PURE__*/__webpack_require__.n(Form);

// CONCATENATED MODULE: ./src/components/form/Form.ts





/* harmony default export */ var form_Form = (yox_esm["a" /* default */].define({
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
    name: 'bell-form',
    template: Form_default.a,
    methods: {
        validate: function (callback) {
            var me = this;
            var validator = new validate_Validator();
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
}));

// EXTERNAL MODULE: ./src/components/form/template/FormItem.hbs
var FormItem = __webpack_require__(69);
var FormItem_default = /*#__PURE__*/__webpack_require__.n(FormItem);

// CONCATENATED MODULE: ./src/components/form/FormItem.ts




/* harmony default export */ var form_FormItem = (yox_esm["a" /* default */].define({
    propTypes: {
        prop: {
            type: RAW_STRING
        },
        label: {
            type: RAW_STRING
        },
        labelWidth: {
            type: RAW_NUMERIC
        },
        labelFor: {
            type: RAW_STRING
        },
        required: {
            type: RAW_BOOLEAN
        },
        showMessage: {
            type: RAW_BOOLEAN
        },
        error: {
            type: RAW_STRING
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: FormItem_default.a,
    data: function () {
        return {
            rules: [],
            messages: [],
            defaultValue: '',
            errorMsg: '',
            isShowError: this.get('showMessage'),
            width: this.get('labelWidth')
        };
    },
    events: {
        'validateError.form': function (_, data) {
            var error = data.errors[this.get('prop')];
            this.set('errorMsg', error);
        }
    },
    afterMount: function () {
        var form = findComponentUpward(this.$parent, 'bell-form');
        var prop = this.get('prop');
        var rules = form.get('rules');
        if (rules && prop) {
            rules = form.get('rules')[prop];
        }
        var messages = form.get('messages');
        if (messages && prop) {
            messages = form.get('messages')[prop];
        }
        this.set({
            'rules': rules,
            'messages': messages,
            'defaultValue': form.get('value')
        });
        if (!this.get('width')) {
            this.set({
                'width': form.get('labelWidth')
            });
        }
        if (!this.get('isShowError')) {
            this.set({
                'isShowError': form.get('showMessage')
            });
        }
        if (!this.get('required') && rules) {
            this.set({
                'required': rules['required']
            });
        }
    }
}));

// EXTERNAL MODULE: ./src/components/dialog/template/Dialog.hbs
var Dialog = __webpack_require__(70);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog);

// CONCATENATED MODULE: ./src/components/dialog/Dialog.ts




var Dialog_CLASS_OPEN = 'bell-dialog-open';
var Dialog_CLASS_LEAVE = 'bell-dialog-leave';
/* harmony default export */ var dialog_Dialog = (yox_esm["a" /* default */].define({
    propTypes: {
        title: {
            type: RAW_STRING,
            value: '温馨提示'
        },
        open: {
            type: RAW_BOOLEAN
        },
        closable: {
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
    template: Dialog_default.a,
    model: 'open',
    watchers: {
        open: function (isOpen) {
            var element = this.$el;
            if (isOpen) {
                yox_esm["a" /* default */].dom.addClass(element, Dialog_CLASS_OPEN);
            }
            else {
                yox_esm["a" /* default */].dom.addClass(element, Dialog_CLASS_LEAVE);
                onTransitionEnd(element, function () {
                    yox_esm["a" /* default */].dom.removeClass(element, Dialog_CLASS_OPEN);
                    yox_esm["a" /* default */].dom.removeClass(element, Dialog_CLASS_LEAVE);
                });
            }
        }
    },
    methods: {
        close: function () {
            this.set('open', FALSE);
        }
    },
    afterMount: function () {
        yox_esm["a" /* default */].dom.append(document.body, this.$el);
    },
    beforeDestroy: function () {
        yox_esm["a" /* default */].dom.remove(document.body, this.$el);
    }
}));

// EXTERNAL MODULE: ./src/components/table/template/SmallTable.hbs
var SmallTable = __webpack_require__(71);
var SmallTable_default = /*#__PURE__*/__webpack_require__.n(SmallTable);

// CONCATENATED MODULE: ./src/components/table/SmallTable.ts



/* harmony default export */ var table_SmallTable = (yox_esm["a" /* default */].define({
    propTypes: {
        list: {
            type: RAW_ARRAY
        },
        columns: {
            type: RAW_ARRAY,
            required: TRUE
        },
        stripe: {
            type: RAW_BOOLEAN
        },
        border: {
            type: RAW_BOOLEAN
        },
        setRowClassName: {
            type: RAW_FUNCTION
        },
        height: {
            type: RAW_STRING
        },
        width: {
            type: RAW_STRING
        },
        header: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        fixed: {
            type: RAW_BOOLEAN
        },
        highlightRow: {
            type: RAW_BOOLEAN
        },
        setIndex: {
            type: RAW_FUNCTION
        },
        selection: {
            type: RAW_BOOLEAN
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: SmallTable_default.a,
    data: function () {
        return {
            colWidths: [],
            currentItem: NULL,
        };
    },
    filters: {
        isObject: function (value) {
            return yox_esm["a" /* default */].is.object(value);
        }
    },
    computed: {
        checkAll: function () {
            return this.get('list').filter(function (item) {
                return item.checked;
            }).length === this.get('list.length');
        }
    },
    events: {
        'clearCurrentRow.table': function () {
            this.clearCurrentRow();
        },
        'selectAll.table': function () {
            this.selectAll();
        }
    },
    methods: {
        checkedChange: function (data, index) {
            this.setChecked(data.isChecked, TRUE, index);
            data.index = index;
            this.fire('select', data);
        },
        checkedAllChange: function (_, data) {
            this.setChecked(data.isChecked, TRUE);
            this.fire('selectAll', data);
        },
        selectAll: function () {
            this.checkedAllChange(NULL, {
                isChecked: TRUE
            });
        },
        clearCurrentRow: function () {
            this.set({
                currentItem: NULL
            });
        },
        click: function (row, item, index) {
            row.action(item, index);
        },
        rowClick: function (item, index) {
            if (!this.get('highlightRow') || this.get('header')) {
                return;
            }
            this.fire('rowChange.table', {
                index: index,
                current: item,
                oldCurrent: this.get('currentItem')
            });
            this.set({
                currentIndex: index,
                currentItem: item
            });
        },
        setChecked: function (value, force, index) {
            var list = this.copy(this.get('list'));
            list = list.map(function (item, key) {
                if (force && index == NULL) {
                    item.checked = value;
                }
                else if (index != NULL) {
                    if (key === index) {
                        item.checked = value;
                    }
                }
                else {
                    item.checked = item.checked != NULL ? item.checked : value;
                }
                return item;
            });
            this.fire('selectChange.table', list);
            this.set({ list: list });
        }
    },
    afterMount: function () {
        var me = this;
        if (!me.get('columns').length) {
            return;
        }
        if (me.get('selection')) {
            me.setChecked(FALSE, TRUE);
        }
        var colWidths = [];
        me.get('columns').forEach(function (item) {
            var colWidth = me.$el.clientWidth / 3;
            if (item.width) {
                colWidth = item.width;
            }
            colWidths.push(colWidth);
        });
        me.set({ colWidths: colWidths });
    }
}));

// EXTERNAL MODULE: ./src/components/table/template/Table.hbs
var Table = __webpack_require__(72);
var Table_default = /*#__PURE__*/__webpack_require__.n(Table);

// CONCATENATED MODULE: ./src/components/table/Table.ts



/* harmony default export */ var table_Table = (yox_esm["a" /* default */].define({
    propTypes: {
        list: {
            type: RAW_ARRAY
        },
        columns: {
            type: RAW_ARRAY,
            value: function () {
                return [];
            }
        },
        stripe: {
            type: RAW_BOOLEAN
        },
        border: {
            type: RAW_BOOLEAN
        },
        setRowClassName: {
            type: RAW_FUNCTION
        },
        height: {
            type: RAW_STRING
        },
        width: {
            type: RAW_STRING
        },
        highlightRow: {
            type: RAW_BOOLEAN
        },
        setIndex: {
            type: RAW_FUNCTION
        },
        selection: {
            type: RAW_BOOLEAN
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: Table_default.a,
    data: function () {
        return {
            fixedLeftList: [],
            fixedRightList: []
        };
    },
    methods: {
        click: function (item, data, index) {
            item.action(data, index);
        },
        clearCurrentRow: function () {
            this.fire('clearCurrentRow.table', TRUE);
        },
        selectAll: function () {
            this.fire('selectAll.table', TRUE);
        }
    },
    afterMount: function () {
        if (!this.get('columns').length) {
            return;
        }
        var fixedLeftList = [];
        var fixedRightList = [];
        var columns = this.copy(this.get('columns'));
        columns.forEach(function (item) {
            var fixed = item.fixed;
            switch (fixed) {
                case 'left':
                    item.fixed = null;
                    fixedLeftList.push(item);
                    break;
                case 'right':
                    item.fixed = null;
                    fixedRightList.push(item);
                    break;
            }
        });
        this.set({
            fixedLeftList: fixedLeftList,
            fixedRightList: fixedRightList
        });
    }
}));

// EXTERNAL MODULE: ./src/components/message/template/Message.hbs
var Message = __webpack_require__(73);
var Message_default = /*#__PURE__*/__webpack_require__.n(Message);

// CONCATENATED MODULE: ./src/components/message/base.ts




var id = 0;
var createMessage = function (data) {
    var namespace = 'bell-message-' + id++;
    var element = yox_esm["a" /* default */].dom.createElement('div');
    yox_esm["a" /* default */].dom.prop(element, 'id', namespace);
    yox_esm["a" /* default */].dom.append(document.body, element);
    var instance = new yox_esm["a" /* default */]({
        el: '#' + namespace,
        replace: TRUE,
        template: Message_default.a,
        props: {
            content: data.content,
            type: data.type,
            showIcon: data.showIcon,
            closable: data.closable,
            closeText: data.closeText,
            center: data.center
        },
        propTypes: {
            content: {
                type: RAW_STRING
            },
            type: {
                type: RAW_STRING
            },
            showIcon: {
                type: RAW_BOOLEAN,
                value: TRUE
            },
            closable: {
                type: RAW_BOOLEAN
            },
            closeText: {
                type: RAW_STRING
            },
            center: {
                type: RAW_BOOLEAN
            }
        },
        data: function () {
            return {
                marginLeft: 0,
                top: data.top || 15,
                showTime: data.duration || 1500,
                isShow: FALSE,
                close: function () {
                    if (instance) {
                        instance.destroy();
                    }
                    if (yox_esm["a" /* default */].is.func(data.onClose)) {
                        data.onClose();
                    }
                }
            };
        },
        methods: {
            fadeIn: function () {
                var me = this;
                setTimeout(function () {
                    if (!me.$el) {
                        return;
                    }
                    me.set({
                        isShow: true,
                        top: me.get('top')
                    });
                    me.fadeOut();
                }, 300);
            },
            fadeOut: function () {
                var me = this;
                setTimeout(function () {
                    if (!me.$el) {
                        return;
                    }
                    me.set({
                        isShow: false,
                        top: 0
                    });
                    onTransitionEnd(me.$el, function () {
                        if (yox_esm["a" /* default */].is.func(data.onClose)) {
                            data.onClose();
                        }
                    });
                }, me.get('showTime'));
            }
        },
        afterMount: function () {
            var me = this;
            me.set({
                marginLeft: me.$el.clientWidth
            });
            me.fadeIn();
        }
    });
};
var add = function (data) {
    createMessage(data);
};

// CONCATENATED MODULE: ./src/components/message/Message.ts


var config = {};
var addMessage = function (type, arg) {
    var data = {};
    data.type = type;
    if (yox_esm["a" /* default */].is.string(arg)) {
        data.content = arg;
    }
    else {
        yox_esm["a" /* default */].object.extend(data, arg);
        yox_esm["a" /* default */].object.extend(data, config);
    }
    add(data);
};
var updateConfig = function (data) {
    if (data.duration) {
        config.duration = data.duration;
    }
    if (data.top) {
        config.top = data.top;
    }
};
/* harmony default export */ var message_Message = ({
    success: function (arg) {
        addMessage('success', arg);
    },
    info: function (arg) {
        addMessage('info', arg);
    },
    warning: function (arg) {
        addMessage('warning', arg);
    },
    error: function (arg) {
        addMessage('error', arg);
    },
    loading: function (arg) {
        addMessage('loading', arg);
    },
    config: function (arg) {
        updateConfig(arg);
    },
    destroy: function () {
        console.log('destroy');
    }
});

// EXTERNAL MODULE: ./src/components/notice/template/Notice.hbs
var Notice = __webpack_require__(74);
var Notice_default = /*#__PURE__*/__webpack_require__.n(Notice);

// CONCATENATED MODULE: ./src/components/notice/base.ts




var base_id = 0;
var createNotice = function (data) {
    var namespace = 'bell-notice-' + base_id++;
    var body = yox_esm["a" /* default */].dom.find('#bell-notice-wrapper');
    var element = yox_esm["a" /* default */].dom.createElement('div');
    yox_esm["a" /* default */].dom.prop(element, 'id', namespace);
    yox_esm["a" /* default */].dom.append(body, element);
    var instance = new yox_esm["a" /* default */]({
        el: '#' + namespace,
        replace: TRUE,
        template: Notice_default.a,
        props: {
            title: data.title,
            content: data.content,
            type: data.type,
            duration: data.duration,
            width: data.width,
            right: data.right,
            onClose: data.onClose
        },
        propTypes: {
            title: {
                type: RAW_STRING,
                value: '温馨提示'
            },
            content: {
                type: RAW_STRING
            },
            type: {
                type: RAW_STRING
            },
            duration: {
                type: RAW_NUMERIC,
                value: 4500
            },
            width: {
                type: RAW_NUMERIC,
                value: 320
            },
            right: {
                type: RAW_NUMERIC,
                value: 15
            },
            onClose: {
                type: RAW_FUNCTION
            }
        },
        data: function () {
            return {
                visible: false,
                rightSize: 15
            };
        },
        methods: {
            close: function () {
                this.hide();
            },
            fadeIn: function () {
                var me = this;
                setTimeout(function () {
                    if (!me.$el) {
                        return;
                    }
                    me.set({
                        visible: true,
                        rightSize: me.get('right')
                    });
                    if (me.get('duration') == 0) {
                        return;
                    }
                    me.fadeOut();
                }, 300);
            },
            fadeOut: function () {
                var me = this;
                setTimeout(function () {
                    if (me.$el) {
                        me.hide();
                    }
                }, me.get('duration'));
            },
            hide: function () {
                var me = this;
                me.set({
                    visible: false,
                    rightSize: "-" + me.$el.clientWidth
                });
                me.nextTick(function () {
                    onTransitionEnd(me.$el, function () {
                        me.get('onClose') && me.get('onClose')();
                        if (me.$el) {
                            me.destroy();
                        }
                    });
                });
            }
        },
        afterMount: function () {
            this.set({
                rightSize: "-" + this.$el.clientWidth
            });
            this.fadeIn();
        }
    });
};
var base_add = function (data) {
    createNotice(data);
};

// CONCATENATED MODULE: ./src/components/notice/Notice.ts


var Notice_config = {};
var addNotice = function (type, arg) {
    var data = {};
    data.type = type;
    if (yox_esm["a" /* default */].is.string(arg)) {
        data.content = arg;
    }
    else {
        yox_esm["a" /* default */].object.extend(data, arg);
        yox_esm["a" /* default */].object.extend(data, Notice_config);
    }
    base_add(data);
};
var Notice_updateConfig = function (data) {
    if (data.duration) {
        Notice_config.duration = data.duration;
    }
    if (data.top) {
        Notice_config.top = data.top;
    }
};
/* harmony default export */ var notice_Notice = ({
    success: function (arg) {
        addNotice('success', arg);
    },
    info: function (arg) {
        addNotice('info', arg);
    },
    warning: function (arg) {
        addNotice('warning', arg);
    },
    error: function (arg) {
        addNotice('error', arg);
    },
    loading: function (arg) {
        addNotice('loading', arg);
    },
    config: function (options) {
        Notice_updateConfig(options);
    },
    destroy: function () {
        Notice_config = {};
    }
});

// EXTERNAL MODULE: ./src/components/msgbox/template/Msgbox.hbs
var Msgbox = __webpack_require__(75);
var Msgbox_default = /*#__PURE__*/__webpack_require__.n(Msgbox);

// EXTERNAL MODULE: ./src/components/msgbox/template/Confirm.hbs
var Confirm = __webpack_require__(76);
var Confirm_default = /*#__PURE__*/__webpack_require__.n(Confirm);

// CONCATENATED MODULE: ./src/components/msgbox/base.ts





var msgbox_base_id = 0;
var createAlert = function (data) {
    var namespace = 'bell-msg-alert-' + msgbox_base_id++;
    var body = yox_esm["a" /* default */].dom.find('#bell-msgbox-wrapper');
    var element = yox_esm["a" /* default */].dom.createElement('div');
    yox_esm["a" /* default */].dom.prop(element, 'id', namespace);
    yox_esm["a" /* default */].dom.append(body, element);
    var instance = new yox_esm["a" /* default */]({
        el: '#' + namespace,
        replace: true,
        template: Msgbox_default.a,
        props: {
            title: data.title,
            closable: data.closable,
            content: data.content || data,
            button: data.button,
            maskClosable: data.maskClosable,
            onClose: data.onClose,
            width: data.width,
            mask: data.mask
        },
        propTypes: {
            title: {
                type: RAW_STRING,
                value: '温馨提示'
            },
            closable: {
                type: RAW_BOOLEAN,
                value: TRUE
            },
            mask: {
                type: RAW_BOOLEAN,
                value: TRUE
            },
            content: {
                type: RAW_STRING
            },
            button: {
                type: RAW_OBJECT,
                value: {
                    text: '我知道了',
                    type: 'primary'
                }
            },
            maskClosable: {
                type: RAW_BOOLEAN,
                value: TRUE
            },
            onClose: {
                type: RAW_FUNCTION
            },
            width: {
                type: RAW_NUMERIC
            }
        },
        data: function () {
            return {
                isHidden: true
            };
        },
        methods: {
            maskClick: function () {
                if (!this.get('maskClosable')) {
                    return;
                }
                this.hide();
            },
            hide: function () {
                var me = this;
                me.set({
                    isHidden: true
                });
                me.nextTick(function () {
                    onTransitionEnd(me.$el, function () {
                        me.get('onClose') && me.get('onClose')();
                        if (me.$el) {
                            me.destroy();
                        }
                    });
                });
            }
        },
        afterMount: function () {
            var me = this;
            setTimeout(function () {
                if (me.$el) {
                    me.set({
                        isHidden: false
                    });
                }
            }, 300);
        }
    });
};
var createConfirm = function (data) {
    var namespace = 'bell-msg-confirm-' + msgbox_base_id++;
    var body = yox_esm["a" /* default */].dom.find('#bell-msgbox-wrapper');
    var element = yox_esm["a" /* default */].dom.createElement('div');
    yox_esm["a" /* default */].dom.prop(element, 'id', namespace);
    yox_esm["a" /* default */].dom.append(body, element);
    var instance = new yox_esm["a" /* default */]({
        el: '#' + namespace,
        replace: TRUE,
        template: Confirm_default.a,
        props: {
            title: data.title || data,
            closable: data.closable,
            content: data.content || data,
            buttons: data.buttons,
            maskClosable: data.maskClosable,
            onClose: data.onClose,
            mask: data.mask,
            width: data.width
        },
        propTypes: {
            title: {
                type: RAW_STRING,
                value: '温馨提示'
            },
            closable: {
                type: RAW_BOOLEAN,
                value: TRUE
            },
            mask: {
                type: RAW_BOOLEAN,
                value: TRUE
            },
            content: {
                type: RAW_STRING
            },
            buttons: {
                type: RAW_OBJECT
            },
            maskClosable: {
                type: RAW_BOOLEAN,
                value: TRUE
            },
            onClose: {
                type: RAW_FUNCTION
            },
            width: {
                type: RAW_NUMERIC
            }
        },
        data: function () {
            return {
                isHidden: TRUE
            };
        },
        methods: {
            buttonClick: function (index) {
                this.get('buttons.' + index + '.action').call(instance);
            },
            maskClick: function () {
                if (!this.get('maskClosable')) {
                    return;
                }
                this.hide();
            },
            hide: function () {
                var me = this;
                me.set({
                    isHidden: true
                });
                me.nextTick(function () {
                    onTransitionEnd(me.$el, function () {
                        me.get('onClose') && me.get('onClose')();
                        if (me.$el) {
                            me.destroy();
                        }
                    });
                });
            }
        },
        afterMount: function () {
            var me = this;
            setTimeout(function () {
                me.set({
                    isHidden: false
                });
            }, 300);
        }
    });
};
var addAlert = function (data) {
    createAlert(data);
};
var addConfirm = function (data) {
    createConfirm(data);
};

// CONCATENATED MODULE: ./src/components/msgbox/Msgbox.ts

var Msgbox_Alert = function (data) {
    addAlert(data);
};
var Msgbox_Confirm = function (data) {
    addConfirm(data);
};
/* harmony default export */ var msgbox_Msgbox = ({
    Alert: Msgbox_Alert,
    Confirm: Msgbox_Confirm
});

// EXTERNAL MODULE: ./src/components/loadingBar/template/LoadingBar.html
var LoadingBar = __webpack_require__(77);
var LoadingBar_default = /*#__PURE__*/__webpack_require__.n(LoadingBar);

// CONCATENATED MODULE: ./src/components/loadingBar/base.js


var base_namespace = 'bell-loadingbar';
var base_instance = NULL;
var base_timer = NULL;
var loadingBar_base_add = function (data) {
    if (base_instance) {
        remove();
    }
    var body = Yox.dom.find('#bell-loadingbar-wrapper');
    var element = Yox.dom.createElement('div');
    Yox.dom.prop(element, 'id', base_namespace);
    Yox.dom.append(body, element);
    base_instance = new Yox({
        el: '#' + base_namespace,
        replace: true,
        props: {
            percent: data.percent,
            height: data.height,
            type: data.type,
            color: data.color
        },
        template: LoadingBar_default.a,
        propTypes: {
            type: {
                type: RAW_STRING
            },
            height: {
                type: RAW_NUMERIC,
                value: 2
            },
            percent: {
                type: RAW_NUMERIC,
                value: 0
            },
            color: {
                type: RAW_STRING
            }
        },
        afterMount: function () {
            var me = this;
            var timerStart = function () {
                base_timer = setTimeout(function () {
                    if (!base_timer || !me) {
                        return;
                    }
                    me.increase('percent', Math.floor(Math.random() * 10), 98);
                    if (me.get('percent') <= 98) {
                        timerStart();
                    }
                }, 200);
            };
            timerStart();
        },
        beforeDestroy: function () {
            if (base_timer) {
                clearTimeout(base_timer);
            }
        }
    });
    return base_instance;
};
var remove = function () {
    if (base_instance) {
        base_instance.destroy();
        base_instance = NULL;
    }
    var body = Yox.dom.find('#bell-loadingbar-wrapper');
    var element = Yox.dom.find("#" + base_namespace);
    if (element) {
        Yox.dom.remove(body, element);
    }
};
var update = function (config) {
    if (base_instance) {
        base_instance.set(config);
    }
};

// CONCATENATED MODULE: ./src/components/loadingBar/LoadingBar.js

var LoadingBar_config = {};
var LoadingBar_updateConfig = function (data) {
    LoadingBar_config.type = data.type ? data.type : LoadingBar_config.type;
    LoadingBar_config.color = data.color ? data.color : LoadingBar_config.color;
    LoadingBar_config.height = data.height ? data.height : LoadingBar_config.height;
};
/* harmony default export */ var loadingBar_LoadingBar = ({
    // 开始从 0 显示进度条，并自动加载进度
    start: function (options) {
        return loadingBar_base_add(Yox.object.extend({}, options, LoadingBar_config));
    },
    // 结束进度条，自动补全剩余进度
    finish: function () {
        update({
            percent: 100
        });
        setTimeout(function () {
            return remove();
        }, 1000);
    },
    // 精确加载到指定的进度
    update: function (data) {
        return update(data);
    },
    config: function (data) {
        LoadingBar_updateConfig(data);
    },
    destroy: function () {
        LoadingBar_config = {};
        element.remove();
    }
});

// CONCATENATED MODULE: ./src/index.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/*
 * @file 主模块
 * @author wangtianhua
 */







































































var components = {
    Layout: layout_Layout,
    Header: layout_Header,
    Sider: layout_Sider,
    Content: layout_Content,
    Footer: layout_Footer,
    Menu: menu_Menu,
    MenuItem: menu_MenuItem,
    MenuGroup: menu_MenuGroup,
    Submenu: menu_Submenu,
    Row: grid_Row,
    Col: grid_Col,
    Icon: icon_Icon,
    Drawer: drawer_Drawer,
    Breadcrumb: breadcrumb_Breadcrumb,
    BreadcrumbItem: breadcrumb_BreadcrumbItem,
    Button: button_Button,
    ButtonGroup: button_ButtonGroup,
    Input: input_Input,
    InputNumber: input_InputNumber,
    Radio: radio_Radio,
    RadioGroup: radio_RadioGroup,
    Checkbox: checkbox_Checkbox,
    CheckboxGroup: checkbox_CheckboxGroup,
    Switch: switch_Switch,
    Select: select_Select,
    Option: select_Option,
    OptionGroup: select_OptionGroup,
    Page: page_Page,
    DatePicker: datepicker_DatePicker,
    Upload: upload_Upload,
    Tooltip: tooltip_Tooltip,
    TooltipItem: tooltip_TooltipItem,
    Alert: alert_Alert,
    Spinner: spinner_Spinner,
    BackTop: backtop_BackTop,
    Avatar: avatar_Avatar,
    Badge: badge_Badge,
    Card: card_Card,
    CardHeader: card_CardHeader,
    CardMedia: card_CardMedia,
    CardBody: card_CardBody,
    CardActions: card_CardActions,
    Collapse: collapse_Collapse,
    Panel: collapse_Panel,
    List: list_List,
    Item: list_Item,
    Divider: divider_Divider,
    Circle: circle_Circle,
    Progress: progress_Progress,
    Slider: slider_Slider,
    Tag: tag_Tag,
    Rate: rate_Rate,
    Tabs: tabs_Tabs,
    TabPanel: tabs_TabPanel,
    Dropdown: dropdown_Dropdown,
    DropdownItem: dropdown_DropdownItem,
    DropdownMenu: dropdown_DropdownMenu,
    Transfer: transfer_Transfer,
    TimePicker: timePicker_TimePicker,
    TimeLine: timeline_TimeLine,
    TimeLineItem: timeline_TimeLineItem,
    Form: form_Form,
    FormItem: form_FormItem,
    Dialog: dialog_Dialog,
    SmallTable: table_SmallTable,
    Table: table_Table
};
var install = function (Yox) {
    var loadingbarElement = Yox.dom.createElement('div');
    Yox.dom.prop(loadingbarElement, 'id', 'bell-loadingbar-wrapper');
    Yox.dom.append(document.body, loadingbarElement);
    var msgboxElement = Yox.dom.createElement('div');
    Yox.dom.prop(msgboxElement, 'id', 'bell-msgbox-wrapper');
    Yox.dom.append(document.body, msgboxElement);
    var noticeElement = Yox.dom.createElement('div');
    Yox.dom.prop(noticeElement, 'id', 'bell-notice-wrapper');
    Yox.dom.append(document.body, noticeElement);
    Yox.component(components);
    Yox.prototype.$Message = message_Message;
    Yox.prototype.$Confirm = msgbox_Msgbox.Confirm;
    Yox.prototype.$Alert = msgbox_Msgbox.Alert;
    Yox.prototype.$Notice = notice_Notice;
    Yox.prototype.$LoadingBar = loadingBar_LoadingBar;
};
if (typeof window !== 'undefined' && window['Yox']) {
    install(window['Yox']);
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=bell-ui.js.map