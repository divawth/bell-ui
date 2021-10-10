/**
 * yox.js v1.0.0-alpha.227
 * (c) 2017-2021 musicode
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Yox = factory());
}(this, (function () { 'use strict';

  var SYNTAX_IF = '#if';
  var SYNTAX_ELSE = 'else';
  var SYNTAX_ELSE_IF = 'else if';
  var SYNTAX_EACH = '#each';
  var SYNTAX_PARTIAL = '#partial';
  var SYNTAX_IMPORT = '>';
  var SYNTAX_SPREAD = '...';
  var SYNTAX_COMMENT = /^!(?:\s|--)/;
  var TAG_SLOT = 'slot';
  var TAG_PORTAL = 'portal';
  var TAG_FRAGMENT = 'fragment';
  var TAG_TEMPLATE = 'template';
  var ATTR_TO = 'to';
  var ATTR_KEY = 'key';
  var ATTR_REF = 'ref';
  var ATTR_SLOT = 'slot';
  var ATTR_NAME = 'name';
  var SLOT_DATA_PREFIX = '$slot_';
  var SLOT_NAME_DEFAULT = 'children';
  var HINT_STRING = 1;
  var HINT_NUMBER = 2;
  var HINT_BOOLEAN = 3;
  var VNODE_TYPE_TEXT = 1;
  var VNODE_TYPE_COMMENT = 2;
  var VNODE_TYPE_ELEMENT = 3;
  var VNODE_TYPE_COMPONENT = 4;
  var VNODE_TYPE_FRAGMENT = 5;
  var VNODE_TYPE_PORTAL = 6;
  var VNODE_TYPE_SLOT = 7;
  var DIRECTIVE_ON = 'on';
  var DIRECTIVE_LAZY = 'lazy';
  var DIRECTIVE_MODEL = 'model';
  var DIRECTIVE_EVENT = 'event';
  var DIRECTIVE_TRANSITION = 'transition';
  var DIRECTIVE_CUSTOM = 'o';
  var MODIFER_NATIVE = 'native';
  var MAGIC_VAR_SCOPE = '$scope';
  var MAGIC_VAR_KEYPATH = '$keypath';
  var MAGIC_VAR_LENGTH = '$length';
  var MAGIC_VAR_EVENT = '$event';
  var MAGIC_VAR_DATA = '$data';
  var MODEL_PROP_DEFAULT = 'value';
  var HOOK_BEFORE_CREATE = 'beforeCreate';
  var HOOK_AFTER_CREATE = 'afterCreate';
  var HOOK_BEFORE_MOUNT = 'beforeMount';
  var HOOK_AFTER_MOUNT = 'afterMount';
  var HOOK_BEFORE_UPDATE = 'beforeUpdate';
  var HOOK_AFTER_UPDATE = 'afterUpdate';
  var HOOK_BEFORE_DESTROY = 'beforeDestroy';
  var HOOK_AFTER_DESTROY = 'afterDestroy';
  var HOOK_BEFORE_PROPS_UPDATE = 'beforePropsUpdate';

  /**
   * 为了压缩，定义的常量
   */
  var TRUE$1 = true;
  var FALSE$1 = false;
  var NULL$1 = null;
  var UNDEFINED$1 = void 0;
  var RAW_TRUE = 'true';
  var RAW_FALSE = 'false';
  var RAW_NULL = 'null';
  var RAW_UNDEFINED = 'undefined';
  var RAW_FILTER = 'filter';
  var RAW_PARTIAL = 'partial';
  var RAW_COMPONENT = 'component';
  var RAW_DIRECTIVE = 'directive';
  var RAW_TRANSITION = 'transition';
  var RAW_THIS = 'this';
  var RAW_FUNCTION = 'function';
  var RAW_LENGTH = 'length';
  var RAW_WILDCARD = '*';
  var RAW_DOT = '.';
  var RAW_SLASH = '/';
  var RAW_DOLLAR = '$';
  var KEYPATH_ROOT = '~';
  var KEYPATH_PARENT = '..';
  var KEYPATH_CURRENT = RAW_THIS;
  /**
   * Single instance for window in browser
   */
  var WINDOW = typeof window !== RAW_UNDEFINED ? window : UNDEFINED$1;
  /**
   * Single instance for document in browser
   */
  var DOCUMENT = typeof document !== RAW_UNDEFINED ? document : UNDEFINED$1;
  /**
   * tap 事件
   *
   * 非常有用的抽象事件，比如 pc 端是 click 事件，移动端是 touchend 事件
   *
   * 这样只需 on-tap="handler" 就可以完美兼容各端
   *
   * 框架未实现此事件，通过 Yox.dom.addSpecialEvent 提供给外部扩展
   *
   */
  var EVENT_TAP = 'tap';
  /**
   * 点击事件
   */
  var EVENT_CLICK = 'click';
  /**
   * 输入事件
   */
  var EVENT_INPUT = 'input';
  /**
   * 变化事件
   */
  var EVENT_CHANGE = 'change';
  /**
   * 唯一内置的特殊事件：model
   */
  var EVENT_MODEL = 'model';
  /**
   * Single instance for noop function
   */
  var EMPTY_FUNCTION = function () {
      /** yox */
  };
  /**
   * 空对象，很多地方会用到，比如 `a || EMPTY_OBJECT` 确保是个对象
   */
  var EMPTY_OBJECT = Object.freeze({});
  /**
   * 空数组
   */
  var EMPTY_ARRAY = Object.freeze([]);
  /**
   * 空字符串
   */
  var EMPTY_STRING = '';
  /**
   * 日志等级
   */
  var LOG_LEVEL_DEBUG = 1;
  var LOG_LEVEL_INFO = 2;
  var LOG_LEVEL_WARN = 3;
  var LOG_LEVEL_ERROR = 4;
  var LOG_LEVEL_FATAL = 5;
  /**
   * 当前是否是源码调试，如果开启了代码压缩，empty function 里的注释会被干掉
   * 源码模式默认选 INFO，因为 DEBUG 输出的日志太多，会导致性能急剧下降
   */
  var LOG_LEVEL_DEFAULT = /yox/.test(EMPTY_FUNCTION.toString()) ? LOG_LEVEL_INFO : LOG_LEVEL_WARN;
  /**
   * 外部可配置的对象
   */
  var PUBLIC_CONFIG = {
      leftDelimiter: '{',
      rightDelimiter: '}',
      uglifyCompiled: FALSE$1,
      minifyCompiled: FALSE$1,
      logLevel: LOG_LEVEL_DEFAULT,
  };

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
  function array$1(value) {
      return Array.isArray(value);
  }
  /**
   * Check if value is an object.
   *
   * @param value
   * @return
   */
  function object$1(value) {
      // 低版本 IE 会把 null 当作 object
      return value !== NULL$1 && typeof value === 'object';
  }
  /**
   * Check if value is a string.
   *
   * @param value
   * @return
   */
  function string$1(value) {
      return typeof value === 'string';
  }
  /**
   * Check if value is a number.
   *
   * @param value
   * @return
   */
  function number(value) {
      return typeof value === 'number' && !isNaN(value);
  }
  /**
   * Check if value is boolean.
   *
   * @param value
   * @return
   */
  function boolean(value) {
      return value === TRUE$1 || value === FALSE$1;
  }
  /**
   * Check if value is numeric.
   *
   * @param value
   * @return
   */
  function numeric(value) {
      return !isNaN(value - parseFloat(value));
  }

  var is = /*#__PURE__*/Object.freeze({
    __proto__: null,
    func: func,
    array: array$1,
    object: object$1,
    string: string$1,
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
      return array$1(args)
          ? fn.apply(context, args)
          : context !== UNDEFINED$1
              ? fn.call(context, args)
              : args !== UNDEFINED$1
                  ? fn(args)
                  : fn();
  }

  var CustomEvent = function(type, originalEvent) {
      // 这里不设置命名空间
      // 因为有没有命名空间取决于 Emitter 的构造函数有没有传 true
      // CustomEvent 自己无法决定
      this.type = type;
      this.phase = CustomEvent.PHASE_CURRENT;
      if (originalEvent) {
          this.originalEvent = originalEvent;
      }
  };
  CustomEvent.is = function (event) {
      return event instanceof CustomEvent;
  };
  /**
   * 阻止事件的默认行为
   */
  CustomEvent.prototype.preventDefault = function () {
      var instance = this;
      if (!instance.isPrevented) {
          var originalEvent = instance.originalEvent;
          if (originalEvent) {
              originalEvent.preventDefault();
          }
          instance.isPrevented = TRUE$1;
      }
      return instance;
  };
  /**
   * 停止事件广播
   */
  CustomEvent.prototype.stopPropagation = function () {
      var instance = this;
      if (!instance.isStoped) {
          var originalEvent = instance.originalEvent;
          if (originalEvent) {
              originalEvent.stopPropagation();
          }
          instance.isStoped = TRUE$1;
      }
      return instance;
  };
  CustomEvent.prototype.prevent = function () {
      return this.preventDefault();
  };
  CustomEvent.prototype.stop = function () {
      return this.stopPropagation();
  };
  CustomEvent.PHASE_CURRENT = 0;
  CustomEvent.PHASE_UPWARD = 1;
  CustomEvent.PHASE_DOWNWARD = -1;

  /**
   * 遍历数组
   *
   * @param array
   * @param callback 返回 false 可停止遍历
   * @param reversed 是否逆序遍历
   */
  function each$2(array, callback, reversed) {
      var length = array.length;
      if (length) {
          if (reversed) {
              for (var i = length - 1; i >= 0; i--) {
                  if (callback(array[i], i) === FALSE$1) {
                      break;
                  }
              }
          }
          else {
              for (var i$1 = 0; i$1 < length; i$1++) {
                  if (callback(array[i$1], i$1) === FALSE$1) {
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
  function addItem(array, value, action) {
      if (array$1(value)) {
          each$2(value, function (item) {
              action(array, item);
          });
      }
      else {
          action(array, value);
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
  function indexOf$1(array, target, strict) {
      var result = -1;
      each$2(array, function (item, index) {
          if (strict === FALSE$1 ? item == target : item === target) {
              result = index;
              return FALSE$1;
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
      var length = array.length;
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
      var length = array.length;
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
  function remove$6(array, target, strict) {
      var result = 0;
      each$2(array, function (item, index) {
          if (strict === FALSE$1 ? item == target : item === target) {
              array.splice(index, 1);
              result++;
          }
      }, TRUE$1);
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
  function has$2(array, target, strict) {
      return indexOf$1(array, target, strict) >= 0;
  }
  /**
   * 把类数组转成数组
   *
   * @param array 类数组
   * @return
   */
  function toArray(array) {
      return array$1(array)
          ? array
          : execute(EMPTY_ARRAY.slice, array);
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
      var result = {};
      each$2(array, function (item) {
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
  function join$1(array, separator) {
      return array.join(separator);
  }
  /**
   * 用于判断长度大于 0 的数组
   *
   * @param array
   * @return
   */
  function falsy$2(array) {
      return !array$1(array) || !array.length;
  }

  var array = /*#__PURE__*/Object.freeze({
    __proto__: null,
    each: each$2,
    push: push,
    unshift: unshift,
    indexOf: indexOf$1,
    last: last,
    pop: pop,
    remove: remove$6,
    has: has$2,
    toArray: toArray,
    toObject: toObject,
    join: join$1,
    falsy: falsy$2
  });

  function toString$1 (target, defaultValue) {
      return target != NULL$1 && target.toString
          ? target.toString()
          : defaultValue !== UNDEFINED$1
              ? defaultValue
              : EMPTY_STRING;
  }

  function isNative (target) {
      return func(target)
          && toString$1(target).indexOf('[native code]') >= 0;
  }

  var createPureObject = function () {
      var obj = Object.create(NULL$1);
      return {
          get: function(key) {
              return obj[key];
          },
          set: function(key, value) {
              obj[key] = value;
          },
          has: function(key) {
              return key in obj;
          },
          keys: function() {
              return Object.keys(obj);
          }
      };
  };

  /**
   * 缓存一个参数的函数调用结果
   *
   * @param fn 需要缓存的函数
   * @return 带缓存功能的函数
   */
  function createOneKeyCache(fn) {
      var cache = createPureObject();
      return function (key) {
          var hit = cache.get(key);
          if (hit !== UNDEFINED$1) {
              return hit;
          }
          var value = fn(key);
          cache.set(key, value);
          return value;
      };
  }
  /**
   * 缓存两个参数的函数调用结果
   *
   * @param fn 需要缓存的函数
   * @return 带缓存功能的函数
   */
  function createTwoKeyCache(fn) {
      var cache = createPureObject();
      return function (key1, key2) {
          var hit1 = cache.get(key1);
          if (hit1) {
              var hit2 = hit1.get(key2);
              if (hit2) {
                  return hit2;
              }
          }
          else {
              hit1 = createPureObject();
              cache.set(key1, hit1);
          }
          var value = fn(key1, key2);
          hit1.set(key2, value);
          return value;
      };
  }

  var camelizePattern = /-([a-z])/gi, hyphenatePattern = /\B([A-Z])/g, capitalizePattern = /^[a-z]/;
  /**
   * 连字符转成驼峰
   *
   * @param str
   * @return 驼峰格式的字符串
   */
  var camelize = createOneKeyCache(function (str) {
      return str.replace(camelizePattern, function (_, $1) {
          return upper($1);
      });
  });
  /**
   * 驼峰转成连字符
   *
   * @param str
   * @return 连字符格式的字符串
   */
  var hyphenate = createOneKeyCache(function (str) {
      return str.replace(hyphenatePattern, function (_, $1) {
          return '-' + lower($1);
      });
  });
  /**
   * 首字母大写
   *
   * @param str
   * @return
   */
  var capitalize = createOneKeyCache(function (str) {
      return str.replace(capitalizePattern, upper);
  });
  /**
   * 重复字符串
   *
   * @param str
   * @param count 重复次数
   * @return
   */
  function repeat(str, count) {
      return join$1(new Array(count + 1), str);
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
  function indexOf(str, part, start) {
      return str.indexOf(part, start !== UNDEFINED$1 ? start : 0);
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
      return str.lastIndexOf(part, end !== UNDEFINED$1 ? end : str.length);
  }
  /**
   * str 是否以 part 开头
   *
   * @param str
   * @param part
   * @return
   */
  function startsWith(str, part) {
      return indexOf(str, part) === 0;
  }
  /**
   * str 是否以 part 结束
   *
   * @param str
   * @param part
   * @return
   */
  function endsWith(str, part) {
      var offset = str.length - part.length;
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
      return indexOf(str, part) >= 0;
  }
  /**
   * 判断长度大于 0 的字符串
   *
   * @param str
   * @return
   */
  function falsy$1(str) {
      return !string$1(str) || !str.length;
  }

  var string = /*#__PURE__*/Object.freeze({
    __proto__: null,
    camelize: camelize,
    hyphenate: hyphenate,
    capitalize: capitalize,
    repeat: repeat,
    trim: trim,
    slice: slice,
    indexOf: indexOf,
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

  var dotPattern = /\./g, asteriskPattern = /\*/g, doubleAsteriskPattern = /\*\*/g;
  /**
   * 判断 keypath 是否以 prefix 开头，如果是，返回匹配上的前缀长度，否则返回 -1
   *
   * @param keypath
   * @param prefix
   * @return
   */
  var match = createTwoKeyCache(function (keypath, prefix) {
      if (keypath === prefix) {
          return prefix.length;
      }
      prefix += RAW_DOT;
      return startsWith(keypath, prefix)
          ? prefix.length
          : -1;
  });
  var getKeypathTokens = createOneKeyCache(function (keypath) {
      return indexOf(keypath, RAW_DOT) < 0
          ? [keypath]
          : keypath.split(RAW_DOT);
  });
  /**
   * 遍历 keypath 的每个部分
   *
   * @param keypath
   * @param callback 返回 false 可中断遍历
   */
  function each$1(keypath, callback) {
      var tokens = getKeypathTokens(keypath);
      for (var i = 0, lastIndex = tokens.length - 1; i <= lastIndex; i++) {
          if (callback(tokens[i], i, lastIndex) === FALSE$1) {
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
  var join = createTwoKeyCache(function (keypath1, keypath2) {
      return keypath1 && keypath2
          ? keypath1 + RAW_DOT + keypath2
          : keypath1 || keypath2;
  });
  /**
   * 是否模糊匹配
   *
   * @param keypath
   */
  var isFuzzy = createOneKeyCache(function (keypath) {
      return has$1(keypath, RAW_WILDCARD);
  });
  var getFuzzyPattern = createOneKeyCache(function (pattern) {
      return new RegExp(("^" + (pattern
          .replace(dotPattern, '\\.')
          .replace(asteriskPattern, '(\\w+)')
          .replace(doubleAsteriskPattern, '([\.\\w]+?)')) + "$"));
  });
  /**
   * 模糊匹配 keypath
   *
   * @param keypath
   * @param pattern
   */
  var matchFuzzy = createTwoKeyCache(function (keypath, pattern) {
      var result = keypath.match(getFuzzyPattern(pattern));
      return result
          ? result[1]
          : UNDEFINED$1;
  });

  /**
   * 全局 value holder，避免频繁的创建临时对象
   */
  var holder = {
      value: UNDEFINED$1
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
  /**
   * 遍历对象
   *
   * @param object
   * @param callback 返回 false 可停止遍历
   */
  function each(object, callback) {
      for (var key in object) {
          if (callback(object[key], key) === FALSE$1) {
              break;
          }
      }
  }
  /**
   * 扩展对象
   *
   * @return
   */
  function extend(original, object) {
      each(object, function (value, key) {
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
  function copy(object, deep) {
      var result = object;
      if (array$1(object)) {
          if (deep) {
              result = [];
              each$2(object, function (item, index) {
                  result[index] = copy(item, deep);
              });
          }
          else {
              result = object.slice();
          }
      }
      else if (object$1(object)) {
          result = {};
          each(object, function (value, key) {
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
      var result = object;
      each$1(keypath, function (key, index, lastIndex) {
          if (result != NULL$1) {
              // 先直接取值
              var value = result[key], 
              // 紧接着判断值是否存在
              // 下面会处理计算属性的值，不能在它后面设置 hasValue
              hasValue = value !== UNDEFINED$1;
              // 如果是计算属性，取计算属性的值
              if (value && func(value.get)) {
                  value = value.get();
              }
              if (index === lastIndex) {
                  if (hasValue) {
                      holder.value = value;
                      result = holder;
                  }
                  else {
                      result = UNDEFINED$1;
                  }
              }
              else {
                  result = value;
              }
          }
          else {
              result = UNDEFINED$1;
              return FALSE$1;
          }
      });
      return result;
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
      var next = object;
      each$1(keypath, function (key, index, lastIndex) {
          if (index === lastIndex) {
              next[key] = value;
          }
          else if (next[key]) {
              next = next[key];
          }
          else if (autofill) {
              next = next[key] = {};
          }
          else {
              return FALSE$1;
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
  function has(object, key) {
      // 不用 hasOwnProperty，性能差
      return object[key] !== UNDEFINED$1;
  }
  /**
   * 是否是空对象
   *
   * @param object
   * @return
   */
  function falsy(object) {
      return !object$1(object)
          || array$1(object)
          || !keys(object).length;
  }

  var object = /*#__PURE__*/Object.freeze({
    __proto__: null,
    keys: keys,
    each: each,
    extend: extend,
    merge: merge,
    copy: copy,
    get: get,
    set: set,
    has: has,
    falsy: falsy
  });

  /**
   * 外部可用这些常量
   */
  var DEBUG = LOG_LEVEL_DEBUG;
  var INFO = LOG_LEVEL_INFO;
  var WARN = LOG_LEVEL_WARN;
  var ERROR = LOG_LEVEL_ERROR;
  var FATAL = LOG_LEVEL_FATAL;
  /**
   * 是否有原生的日志特性，没有必要单独实现
   */
  var nativeConsole = typeof console !== RAW_UNDEFINED ? console : NULL$1, 
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
      var ref = PUBLIC_CONFIG;
      var logLevel = ref.logLevel;
      if (logLevel >= DEBUG && logLevel <= FATAL) {
          return logLevel;
      }
      return LOG_LEVEL_DEFAULT;
  }
  function getStyle(backgroundColor) {
      return ("background-color:" + backgroundColor + ";border-radius:12px;color:#fff;font-size:10px;padding:3px 6px;");
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
          throw new Error(("[" + (tag || 'Yox fatal') + "]: " + msg));
      }
  }

  var logger = /*#__PURE__*/Object.freeze({
    __proto__: null,
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

  var Emitter = function(ns) {
      this.ns = ns || FALSE$1;
      this.listeners = {};
  };
  /**
   * 发射事件
   *
   * @param type 事件名称或命名空间
   * @param args 事件处理函数的参数列表
   * @param filter 自定义过滤器
   */
  Emitter.prototype.fire = function (type, args, filter) {
      var instance = this, event = string$1(type) ? instance.toEvent(type) : type, list = instance.listeners[event.type], isComplete = TRUE$1;
      if (list) {
          // 避免遍历过程中，数组发生变化，比如增删了
          list = list.slice();
          // 判断是否是发射事件
          // 如果 args 的第一个参数是 CustomEvent 类型，表示发射事件
          // 因为事件处理函数的参数列表是 (event, data)
          var customEvent = args && CustomEvent.is(args[0])
              ? args[0]
              : UNDEFINED$1;
          // 这里不用 array.each，减少函数调用
          for (var i = 0, length = list.length; i < length; i++) {
              var options = list[i];
              // 命名空间不匹配
              if (!matchNamespace(event.ns, options)
                  // 在 fire 过程中被移除了
                  || !has$2(list, options)
                  // 传了 filter，则用 filter 判断是否过滤此 options
                  || (filter && !filter(event, args, options))) {
                  continue;
              }
              var result = execute(options.listener, options.ctx, args);
              // 执行次数
              options.num = options.num ? (options.num + 1) : 1;
              // 注册的 listener 可以指定最大执行次数
              if (options.num === options.max) {
                  instance.off(event.type, {
                      ns: event.ns,
                      listener: options.listener,
                  });
              }
              // 如果没有返回 false，而是调用了 customEvent.stop 也算是返回 false
              if (customEvent) {
                  if (result === FALSE$1) {
                      customEvent.prevent().stop();
                  }
                  else if (customEvent.isStoped) {
                      result = FALSE$1;
                  }
              }
              if (result === FALSE$1) {
                  isComplete = FALSE$1;
                  break;
              }
          }
      }
      return isComplete;
  };
  /**
   * 注册监听
   *
   * @param type
   * @param listener
   */
  Emitter.prototype.on = function (type, listener) {
      var instance = this, listeners = instance.listeners, options = func(listener)
          ? { listener: listener }
          : listener;
      if (object$1(options) && func(options.listener)) {
          if (!string$1(options.ns)) {
              var event = instance.toEvent(type);
              options.ns = event.ns;
              type = event.type;
          }
          push(listeners[type] || (listeners[type] = []), options);
      }
      else {
          fatal("emitter.on(type, listener) invoke failed：\n\n\"listener\" is expected to be a Function or an EmitterOptions.\n");
      }
  };
  /**
   * 取消监听
   *
   * @param type
   * @param listener
   */
  Emitter.prototype.off = function (type, listener) {
      var instance = this, listeners = instance.listeners;
      if (type) {
          var filter = instance.toFilter(type, listener), each$1 = function (list, name) {
              each$2(list, function (item, index) {
                  if (matchListener(filter.listener, item) && matchNamespace(filter.ns, item)) {
                      list.splice(index, 1);
                  }
              }, TRUE$1);
              if (!list.length) {
                  delete listeners[name];
              }
          };
          if (filter.type) {
              if (listeners[filter.type]) {
                  each$1(listeners[filter.type], filter.type);
              }
          }
          // 按命名空间过滤，如 type 传入 .ns
          else if (filter.ns) {
              each(listeners, each$1);
          }
          {
              // 在开发阶段进行警告，比如传了 listener 进来，listener 是个空值
              // 但你不知道它是空值
              if (arguments.length > 1 && listener == NULL$1) {
                  warn(("emitter.off(type, listener) is invoked, but \"listener\" is " + listener + "."));
              }
          }
      }
      else {
          // 清空
          instance.listeners = {};
          {
              // 在开发阶段进行警告，比如传了 type 进来，type 是个空值
              // 但你不知道它是空值
              if (arguments.length > 0) {
                  warn(("emitter.off(type) is invoked, but \"type\" is " + type + "."));
              }
          }
      }
  };
  /**
   * 是否已监听某个事件
   *
   * @param type
   * @param listener
   */
  Emitter.prototype.has = function (type, listener) {
      var instance = this, listeners = instance.listeners, filter = instance.toFilter(type, listener), result = TRUE$1, each$1 = function (list) {
          each$2(list, function (item) {
              if (matchListener(filter.listener, item) && matchNamespace(filter.ns, item)) {
                  return result = FALSE$1;
              }
          });
          return result;
      };
      if (filter.type) {
          if (listeners[filter.type]) {
              each$1(listeners[filter.type]);
          }
      }
      else if (filter.ns) {
          each(listeners, each$1);
      }
      return !result;
  };
  /**
   * 把事件类型解析成命名空间格式
   *
   * @param type
   */
  Emitter.prototype.toEvent = function (type) {
      // 这里 ns 必须为字符串
      // 用于区分 event 对象是否已完成命名空间的解析
      var event = {
          type: type,
          ns: EMPTY_STRING,
      };
      // 是否开启命名空间
      if (this.ns) {
          var index = indexOf(type, RAW_DOT);
          if (index >= 0) {
              event.type = slice(type, 0, index);
              event.ns = slice(type, index + 1);
          }
      }
      return event;
  };
  Emitter.prototype.toFilter = function (type, listener) {
      var filter;
      if (listener) {
          filter = func(listener)
              ? { listener: listener }
              : listener;
      }
      else {
          filter = {};
      }
      if (string$1(filter.ns)) {
          filter.type = type;
      }
      else {
          var event = this.toEvent(type);
          filter.type = event.type;
          filter.ns = event.ns;
      }
      return filter;
  };
  /**
   * 判断 options 是否能匹配 listener
   *
   * @param listener
   * @param options
   */
  function matchListener(listener, options) {
      return listener
          ? listener === options.listener
          : TRUE$1;
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
      var ns = options.ns;
      return ns && namespace
          ? ns === namespace
          : TRUE$1;
  }

  var nextTick;
  // IE (10+) 和 node
  if (typeof setImmediate === RAW_FUNCTION && isNative(setImmediate)) {
      nextTick = setImmediate;
  }
  // 用 MessageChannel 去做 setImmediate 的 polyfill
  // 原理是将新的 message 事件加入到原有的 dom events 之后
  // 兼容性 IE10+ 和其他标准浏览器
  if (typeof MessageChannel === RAW_FUNCTION && isNative(MessageChannel)) {
      nextTick = function (fn) {
          var channel = new MessageChannel();
          channel.port1.onmessage = fn;
          channel.port2.postMessage(1);
      };
  }
  else {
      nextTick = setTimeout;
  }
  var nextTick$1 = nextTick;

  var shared;
  var NextTask = function(hooks) {
      var instance = this;
      instance.tasks = [];
      instance.hooks = hooks || EMPTY_OBJECT;
  };
  /**
   * 全局单例
   */
  NextTask.shared = function () {
      return shared || (shared = new NextTask());
  };
  /**
   * 在队尾添加异步任务
   */
  NextTask.prototype.append = function (func, context) {
      var instance = this;
          var tasks = instance.tasks;
      push(tasks, {
          fn: func,
          ctx: context
      });
      if (tasks.length === 1) {
          nextTick$1(function () {
              instance.run();
          });
      }
  };
  /**
   * 在队首添加异步任务
   */
  NextTask.prototype.prepend = function (func, context) {
      var instance = this;
          var tasks = instance.tasks;
      unshift(tasks, {
          fn: func,
          ctx: context
      });
      if (tasks.length === 1) {
          nextTick$1(function () {
              instance.run();
          });
      }
  };
  /**
   * 清空异步队列
   */
  NextTask.prototype.clear = function () {
      this.tasks.length = 0;
  };
  /**
   * 立即执行异步任务，并清空队列
   */
  NextTask.prototype.run = function () {
      var instance = this;
          var tasks = instance.tasks;
          var hooks = instance.hooks;
          var length = tasks.length;
      if (length) {
          instance.tasks = [];
          if (hooks.beforeTask) {
              hooks.beforeTask();
          }
          for (var i = 0; i < length; i++) {
              execute(tasks[i].fn, tasks[i].ctx);
          }
          if (hooks.afterTask) {
              hooks.afterTask();
          }
      }
  };

  // vnode.data 内部使用的几个字段
  var VNODE = '$vnode';
  var LOADING = '$loading';
  var LEAVING = '$leaving';
  var MODEL = '$model';
  var EVENT$1 = '$event';

  function update$7(api, vnode, oldVNode) {
      var node = vnode.node;
      var nativeAttrs = vnode.nativeAttrs;
      var oldNativeAttrs = oldVNode && oldVNode.nativeAttrs;
      if (nativeAttrs !== oldNativeAttrs) {
          if (nativeAttrs) {
              var oldValue = oldNativeAttrs || EMPTY_OBJECT;
              for (var name in nativeAttrs) {
                  if (oldValue[name] === UNDEFINED$1
                      || nativeAttrs[name] !== oldValue[name]) {
                      api.setAttr(node, name, nativeAttrs[name]);
                  }
              }
          }
          if (oldNativeAttrs) {
              var newValue = nativeAttrs || EMPTY_OBJECT;
              for (var name$1 in oldNativeAttrs) {
                  if (newValue[name$1] === UNDEFINED$1) {
                      api.removeAttr(node, name$1);
                  }
              }
          }
      }
  }

  function update$6(api, vnode, oldVNode) {
      var node = vnode.node;
      var nativeProps = vnode.nativeProps;
      var oldNativeProps = oldVNode && oldVNode.nativeProps;
      if (nativeProps !== oldNativeProps) {
          if (nativeProps) {
              var oldValue = oldNativeProps || EMPTY_OBJECT;
              for (var name in nativeProps) {
                  if (oldValue[name] === UNDEFINED$1
                      || nativeProps[name] !== oldValue[name]) {
                      api.setProp(node, name, nativeProps[name]);
                  }
              }
          }
          if (oldNativeProps) {
              var newValue = nativeProps || EMPTY_OBJECT;
              for (var name$1 in oldNativeProps) {
                  if (newValue[name$1] === UNDEFINED$1) {
                      api.removeProp(node, name$1);
                  }
              }
          }
      }
  }

  function update$5(api, vnode, oldVNode) {
      var node = vnode.node;
      var nativeStyles = vnode.nativeStyles;
      var oldNativeStyles = oldVNode && oldVNode.nativeStyles;
      if (nativeStyles !== oldNativeStyles) {
          var nodeStyle = node.style;
          if (nativeStyles) {
              var oldValue = oldNativeStyles || EMPTY_OBJECT;
              for (var name in nativeStyles) {
                  if (oldValue[name] === UNDEFINED$1
                      || nativeStyles[name] !== oldValue[name]) {
                      api.setStyle(nodeStyle, name, nativeStyles[name]);
                  }
              }
          }
          if (oldNativeStyles) {
              var newValue = nativeStyles || EMPTY_OBJECT;
              for (var name$1 in oldNativeStyles) {
                  if (newValue[name$1] === UNDEFINED$1) {
                      api.removeStyle(nodeStyle, name$1);
                  }
              }
          }
      }
  }

  // 删除 ref 的时候，要确保是相同的节点
  // 因为模板中可能出现同一个 ref 名字，出现在不同的地方，
  // 这样就可能出现一种特殊情况，即前面刚创建了 ref1，后面又把这个这个新创建的 ref1 删除了
  function update$4(api, vnode, oldVNode) {
      var context = vnode.context;
      var ref = vnode.ref;
      var oldRef = oldVNode && oldVNode.ref;
      if (ref || oldRef) {
          var refs = context.$refs, value = vnode.component || vnode.node;
          if (ref) {
              if (!oldRef) {
                  if (!refs) {
                      refs = context.$refs = {};
                  }
                  refs[ref] = value;
              }
              else if (ref !== oldRef) {
                  if (refs) {
                      if (refs[ref] === value) {
                          delete refs[ref];
                      }
                  }
                  else {
                      refs = context.$refs = {};
                  }
                  refs[ref] = value;
              }
          }
          else if (refs && oldRef && refs[oldRef] === value) {
              delete refs[oldRef];
          }
      }
  }
  function remove$5(api, vnode) {
      var ref = vnode.ref;
      if (ref) {
          var refs = vnode.context.$refs, value = vnode.component || vnode.node;
          if (refs && refs[ref] === value) {
              delete refs[ref];
          }
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
      var timer;
      return function () {
          if (!timer) {
              var args = toArray(arguments);
              if (immediate) {
                  execute(fn, UNDEFINED$1, args);
              }
              timer = setTimeout(function () {
                  timer = UNDEFINED$1;
                  if (!immediate) {
                      execute(fn, UNDEFINED$1, args);
                  }
              }, delay);
          }
      };
  }

  function addEvent$1(api, element, component, lazy, event) {
      var name = event.name;
      var listener = event.listener;
      if (lazy) {
          var value = lazy[name] || lazy[EMPTY_STRING];
          if (value === TRUE$1) {
              name = EVENT_CHANGE;
          }
          else if (value > 0) {
              listener = debounce(listener, value, 
              // 避免连续多次点击，主要用于提交表单场景
              // 移动端的 tap 事件可自行在业务层打补丁实现
              name === EVENT_CLICK || name === EVENT_TAP);
          }
      }
      if (component) {
          if (event.isNative) {
              var target = component.$el;
              api.on(target, name, listener);
              return function () {
                  api.off(target, name, listener);
              };
          }
          // event 有 ns 和 listener 两个字段，满足 ThisListenerOptions 的要求
          component.on(name, event);
          return function () {
              component.off(name, event);
          };
      }
      api.on(element, name, listener);
      return function () {
          api.off(element, name, listener);
      };
  }
  function update$3(api, vnode, oldVNode) {
      var data = vnode.data, lazy = vnode.lazy, events = vnode.events, oldEvents = oldVNode && oldVNode.events;
      if (events !== oldEvents) {
          var element = vnode.node, component = vnode.component, destroy = data[EVENT$1] || (data[EVENT$1] = {});
          if (events) {
              var oldValue = oldEvents || EMPTY_OBJECT;
              for (var key in events) {
                  var event = events[key], oldEvent = oldValue[key];
                  if (!oldEvent) {
                      destroy[key] = addEvent$1(api, element, component, lazy, event);
                  }
                  else if (event.value !== oldEvent.value) {
                      destroy[key]();
                      destroy[key] = addEvent$1(api, element, component, lazy, event);
                  }
                  else if (oldEvent.runtime && event.runtime) {
                      extend(oldEvent.runtime, event.runtime);
                      // 在当前节点传递 oldEvent.runtime 的引用
                      event.runtime = oldEvent.runtime;
                  }
              }
          }
          if (oldEvents) {
              var newValue = events || EMPTY_OBJECT;
              for (var key$1 in oldEvents) {
                  if (!newValue[key$1]) {
                      destroy[key$1]();
                      delete destroy[key$1];
                  }
              }
          }
      }
  }
  function remove$4(api, vnode) {
      var data = vnode.data, events = vnode.events, destroy = data[EVENT$1];
      if (events && destroy) {
          for (var key in events) {
              destroy[key]();
              delete destroy[key];
          }
      }
      data[EVENT$1] = UNDEFINED$1;
  }

  function debounceIfNeeded(fn, lazy) {
      // 应用 lazy
      return lazy && lazy !== TRUE$1
          ? debounce(fn, lazy)
          : fn;
  }
  var inputControl = {
      set: function(node, value) {
          node.value = toString$1(value);
      },
      sync: function(node, keypath, context) {
          context.set(keypath, node.value);
      },
      name: 'value'
  }, radioControl = {
      set: function(node, value) {
          node.checked = node.value === toString$1(value);
      },
      sync: function(node, keypath, context) {
          if (node.checked) {
              context.set(keypath, node.value);
          }
      },
      name: 'checked'
  }, checkboxControl = {
      set: function(node, value) {
          node.checked = array$1(value)
              ? has$2(value, node.value, FALSE$1)
              : !!value;
      },
      sync: function(node, keypath, context) {
          var value = context.get(keypath);
          if (array$1(value)) {
              if (node.checked) {
                  context.append(keypath, node.value);
              }
              else {
                  context.removeAt(keypath, indexOf$1(value, node.value, FALSE$1));
              }
          }
          else {
              context.set(keypath, node.checked);
          }
      },
      name: 'checked'
  }, selectControl = {
      set: function(node, value) {
          each$2(toArray(node.options), node.multiple
              ? function (option) {
                  option.selected = has$2(value, option.value, FALSE$1);
              }
              : function (option, index) {
                  if (option.value == value) {
                      node.selectedIndex = index;
                      return FALSE$1;
                  }
              });
      },
      sync: function(node, keypath, context) {
          var options = node.options;
          if (node.multiple) {
              var values = [];
              each$2(toArray(options), function (option) {
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
      name: 'value'
  };
  function addModel(api, element, component, vnode) {
      var context = vnode.context;
      var model = vnode.model;
      var lazy = vnode.lazy;
      var nativeProps = vnode.nativeProps;
      var keypath = model.keypath;
      var value = model.value;
      var lazyValue = lazy && (lazy[DIRECTIVE_MODEL] || lazy[EMPTY_STRING]), update, destroy;
      if (component) {
          var viewBinding = component.$model, viewSyncing = debounceIfNeeded(function (newValue) {
              context.set(keypath, newValue);
          }, lazyValue);
          update = function (newValue) {
              if (update) {
                  component.set(viewBinding, newValue);
              }
          };
          destroy = function () {
              component.unwatch(viewBinding, viewSyncing);
          };
          component.watch(viewBinding, viewSyncing);
      }
      else {
          var control = vnode.tag === 'select'
              ? selectControl
              : inputControl, 
          // checkbox,radio,select 监听的是 change 事件
          eventName = EVENT_CHANGE;
          if (control === inputControl) {
              var type = nativeProps && nativeProps.type;
              if (type === 'radio') {
                  control = radioControl;
              }
              else if (type === 'checkbox') {
                  control = checkboxControl;
              }
              // 如果是输入框，则切换成 model 事件
              // model 事件是个 yox-dom 实现的特殊事件
              // 不会在输入法组合文字过程中得到触发事件
              else if (lazyValue !== TRUE$1) {
                  eventName = EVENT_MODEL;
              }
          }
          update = function (newValue) {
              if (update) {
                  control.set(element, newValue);
              }
          };
          var sync = debounceIfNeeded(function () {
              control.sync(element, keypath, context);
          }, lazyValue);
          destroy = function () {
              api.off(element, eventName, sync);
          };
          api.on(element, eventName, sync);
          control.set(element, value);
      }
      // 监听数据，修改界面
      context.watch(keypath, update);
      return function () {
          context.unwatch(keypath, update);
          update = UNDEFINED$1;
          destroy();
      };
  }
  function update$2(api, vnode, oldVNode) {
      var data = vnode.data, node = vnode.node, component = vnode.component, model = vnode.model, oldModel = oldVNode && oldVNode.model;
      if (model) {
          if (!oldModel) {
              data[MODEL] = addModel(api, node, component, vnode);
          }
          else if (model.keypath !== oldModel.keypath) {
              data[MODEL]();
              data[MODEL] = addModel(api, node, component, vnode);
          }
      }
      else if (oldModel) {
          data[MODEL]();
          delete data[MODEL];
      }
  }
  function remove$3(api, vnode) {
      var data = vnode.data;
      if (data[MODEL]) {
          data[MODEL]();
          delete data[MODEL];
      }
  }

  function update$1(api, vnode, oldVNode) {
      var directives = vnode.directives;
      var oldDirectives = oldVNode && oldVNode.directives;
      if (directives !== oldDirectives) {
          var node = vnode.component || vnode.node;
          if (directives) {
              var oldValue = oldDirectives || EMPTY_OBJECT;
              for (var name in directives) {
                  var directive = directives[name], oldDirective = oldValue[name];
                  var ref = directive.hooks;
                  var bind = ref.bind;
                  var unbind = ref.unbind;
                  if (!oldDirective) {
                      bind(node, directive, vnode);
                  }
                  else if (directive.value !== oldDirective.value) {
                      if (unbind) {
                          unbind(node, oldDirective, oldVNode);
                      }
                      bind(node, directive, vnode);
                  }
                  else if (oldDirective.runtime && directive.runtime) {
                      extend(oldDirective.runtime, directive.runtime);
                      // 在当前节点传递 oldDirective.runtime 的引用
                      directive.runtime = oldDirective.runtime;
                  }
              }
          }
          if (oldDirectives) {
              var newValue = directives || EMPTY_OBJECT;
              for (var name$1 in oldDirectives) {
                  if (!newValue[name$1]) {
                      var ref$1 = oldDirectives[name$1].hooks;
                      var unbind$1 = ref$1.unbind;
                      if (unbind$1) {
                          unbind$1(node, oldDirectives[name$1], oldVNode);
                      }
                  }
              }
          }
      }
  }
  function remove$2(api, vnode) {
      var directives = vnode.directives;
      if (directives) {
          var node = vnode.component || vnode.node;
          for (var name in directives) {
              var ref = directives[name].hooks;
              var unbind = ref.unbind;
              if (unbind) {
                  unbind(node, directives[name], vnode);
              }
          }
      }
  }

  function update(api, vnode, oldVNode) {
      var component = vnode.component;
      var props = vnode.props;
      var slots = vnode.slots;
      // 更新时才要 set
      // 因为初始化时，所有这些都经过构造函数完成了
      if (component && oldVNode) {
          {
              if (props) {
                  for (var key in props) {
                      component.checkProp(key, props[key]);
                  }
              }
          }
          var result = merge(props, slots);
          if (result) {
              component.forceUpdate(result);
          }
      }
  }
  function remove$1(api, vnode) {
      var component = vnode.component;
      if (component) {
          component.destroy();
          // 移除时，组件可能已经发生过变化，即 shadow 不是创建时那个对象了
          vnode.shadow = component.$vnode;
          vnode.component = UNDEFINED$1;
      }
  }

  function getFragmentHostNode(api, vnode) {
      if (vnode.isFragment || vnode.isSlot) {
          var child = vnode.children[0];
          return child
              ? getFragmentHostNode(api, child)
              : api.createComment(EMPTY_STRING);
      }
      return vnode.node;
  }
  function insertNodeNatively(api, parentNode, node, referenceNode) {
      if (referenceNode) {
          api.before(parentNode, node, referenceNode);
      }
      else {
          api.append(parentNode, node);
      }
  }
  function textVNodeUpdateOperator(api, vnode, oldVNode) {
      var node = oldVNode.node;
      vnode.node = node;
      vnode.parentNode = oldVNode.parentNode;
      if (vnode.text !== oldVNode.text) {
          api.setText(node, vnode.text, vnode.isStyle, vnode.isOption);
      }
  }
  function elementVNodeEnterOperator(vnode) {
      if (vnode.data) {
          enterVNode(vnode, vnode.node);
      }
  }
  function elementVNodeLeaveOperator(vnode, done) {
      if (vnode.data
          && leaveVNode(vnode, vnode.node, done)) {
          return;
      }
      done();
  }
  function vnodeInsertOperator(api, parentNode, vnode, before) {
      // 这里不调用 insertNodeNatively，避免判断两次
      if (before) {
          api.before(parentNode, vnode.node, before.node);
      }
      else {
          api.append(parentNode, vnode.node);
      }
  }
  function vnodeRemoveOperator(api, vnode) {
      api.remove(vnode.parentNode, vnode.node);
  }
  function vnodeLeaveOperator(vnode, done) {
      done();
  }
  function vnodeCreateChildrenOperator(api, vnode) {
      each$2(vnode.children, function (child) {
          createVNode(api, child);
      });
  }
  function vnodeUpdateChildrenOperator(api, parentNode, vnode, oldVNode) {
      updateChildren(api, parentNode, vnode.children, oldVNode.children || EMPTY_ARRAY);
  }
  function vnodeDestroyChildrenOperator(api, vnode) {
      each$2(vnode.children, function (child) {
          destroyVNode(api, child);
      });
  }
  function vnodeInsertChildrenOperator(api, parentNode, vnode, before) {
      each$2(vnode.children, function (child) {
          insertVNode(api, parentNode, child, before);
      });
  }
  function vnodeRemoveChildrenOperator(api, vnode) {
      each$2(vnode.children, function (child) {
          removeVNode(api, child);
      });
  }
  var textVNodeOperator = {
      create: function(api, vnode) {
          vnode.node = api.createText(vnode.text);
      },
      update: textVNodeUpdateOperator,
      destroy: EMPTY_FUNCTION,
      insert: vnodeInsertOperator,
      remove: vnodeRemoveOperator,
      enter: EMPTY_FUNCTION,
      leave: vnodeLeaveOperator,
  };
  var commentVNodeOperator = {
      create: function(api, vnode) {
          vnode.node = api.createComment(vnode.text);
      },
      update: textVNodeUpdateOperator,
      destroy: EMPTY_FUNCTION,
      insert: vnodeInsertOperator,
      remove: vnodeRemoveOperator,
      enter: EMPTY_FUNCTION,
      leave: vnodeLeaveOperator,
  };
  var elementVNodeOperator = {
      create: function(api, vnode) {
          var node = vnode.node = api.createElement(vnode.tag, vnode.isSvg);
          if (vnode.children) {
              addVNodes(api, node, vnode.children);
          }
          else if (vnode.text) {
              api.setText(node, vnode.text, vnode.isStyle, vnode.isOption);
          }
          else if (vnode.html) {
              api.setHtml(node, vnode.html, vnode.isStyle, vnode.isOption);
          }
          update$7(api, vnode);
          update$6(api, vnode);
          update$5(api, vnode);
          if (!vnode.isPure) {
              vnode.data = {};
              update$4(api, vnode);
              update$3(api, vnode);
              update$2(api, vnode);
              update$1(api, vnode);
          }
      },
      update: function(api, vnode, oldVNode) {
          var node = oldVNode.node;
          vnode.node = node;
          vnode.parentNode = oldVNode.parentNode;
          vnode.data = oldVNode.data;
          update$7(api, vnode, oldVNode);
          update$6(api, vnode, oldVNode);
          update$5(api, vnode, oldVNode);
          if (!vnode.isPure) {
              update$4(api, vnode, oldVNode);
              update$3(api, vnode, oldVNode);
              update$2(api, vnode, oldVNode);
              update$1(api, vnode, oldVNode);
          }
          var text = vnode.text;
          var html = vnode.html;
          var children = vnode.children;
          var isStyle = vnode.isStyle;
          var isOption = vnode.isOption;
          var oldText = oldVNode.text, oldHtml = oldVNode.html, oldChildren = oldVNode.children;
          if (string$1(text)) {
              if (oldChildren) {
                  removeVNodes(api, oldChildren);
              }
              if (text !== oldText) {
                  api.setText(node, text, isStyle, isOption);
              }
          }
          else if (string$1(html)) {
              if (oldChildren) {
                  removeVNodes(api, oldChildren);
              }
              if (html !== oldHtml) {
                  api.setHtml(node, html, isStyle, isOption);
              }
          }
          else if (children) {
              // 两个都有需要 diff
              if (oldChildren) {
                  if (children !== oldChildren) {
                      updateChildren(api, node, children, oldChildren);
                  }
              }
              // 有新的没旧的 - 新增节点
              else {
                  if (oldText || oldHtml) {
                      api.setText(node, EMPTY_STRING, isStyle);
                  }
                  addVNodes(api, node, children);
              }
          }
          // 有旧的没新的 - 删除节点
          else if (oldChildren) {
              removeVNodes(api, oldChildren);
          }
          // 有旧的 text 没有新的 text
          else if (oldText || oldHtml) {
              api.setText(node, EMPTY_STRING, isStyle);
          }
      },
      destroy: function(api, vnode) {
          if (vnode.isPure) {
              return;
          }
          remove$5(api, vnode);
          remove$4(api, vnode);
          remove$3(api, vnode);
          remove$2(api, vnode);
          if (vnode.children) {
              each$2(vnode.children, function (child) {
                  destroyVNode(api, child);
              });
          }
      },
      insert: vnodeInsertOperator,
      remove: vnodeRemoveOperator,
      enter: elementVNodeEnterOperator,
      leave: elementVNodeLeaveOperator,
  };
  var componentVNodeOperator = {
      create: function(api, vnode) {
          var data = vnode.data = {};
          var componentOptions = UNDEFINED$1;
          // 动态组件，tag 可能为空
          if (vnode.tag) {
              vnode.context.loadComponent(vnode.tag, function (options) {
                  if (has(data, LOADING)) {
                      // 异步组件
                      if (data[LOADING]) {
                          // 尝试使用最新的 vnode
                          if (data[VNODE]) {
                              vnode = data[VNODE];
                              // 用完就删掉
                              delete data[VNODE];
                          }
                          createComponent(api, vnode, options);
                          vnode.operator.enter(vnode);
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
              createComponent(api, vnode, componentOptions);
          }
          else {
              data[LOADING] = TRUE$1;
          }
      },
      update: function(api, vnode, oldVNode) {
          var data = oldVNode.data;
          vnode.data = data;
          vnode.node = oldVNode.node;
          vnode.parentNode = oldVNode.parentNode;
          vnode.component = oldVNode.component;
          // 组件正在异步加载，更新为最新的 vnode
          // 当异步加载完成时才能用上最新的 vnode
          if (data[LOADING]) {
              data[VNODE] = vnode;
              return;
          }
          // 先处理 directive 再处理 component
          // 因为组件只是单纯的更新 props，而 directive 则有可能要销毁
          // 如果顺序反过来，会导致某些本该销毁的指令先被数据的变化触发执行了
          update$4(api, vnode, oldVNode);
          update$3(api, vnode, oldVNode);
          update$2(api, vnode, oldVNode);
          update$1(api, vnode, oldVNode);
          update(api, vnode, oldVNode);
      },
      destroy: function(api, vnode) {
          if (vnode.component) {
              remove$5(api, vnode);
              remove$4(api, vnode);
              remove$3(api, vnode);
              remove$2(api, vnode);
              remove$1(api, vnode);
          }
          else {
              vnode.data[LOADING] = FALSE$1;
          }
      },
      insert: function(api, parentNode, vnode, before) {
          var shadow = vnode.shadow;
          if (shadow) {
              shadow.operator.insert(api, parentNode, shadow, before);
              shadow.parentNode = parentNode;
          }
          else {
              vnodeInsertOperator(api, parentNode, vnode, before);
          }
      },
      remove: function(api, vnode) {
          var shadow = vnode.shadow;
          if (shadow) {
              shadow.operator.remove(api, shadow);
              shadow.parentNode = UNDEFINED$1;
          }
          else {
              vnodeRemoveOperator(api, vnode);
          }
      },
      enter: function(vnode) {
          var shadow = vnode.shadow;
          if (shadow) {
              if (vnode.transition) {
                  enterVNode(vnode, shadow.node);
              }
              else {
                  shadow.operator.enter(shadow);
              }
          }
      },
      leave: function(vnode, done) {
          var shadow = vnode.shadow;
          if (shadow) {
              if (vnode.transition) {
                  if (leaveVNode(vnode, shadow.node, done)) {
                      return;
                  }
              }
              else {
                  shadow.operator.leave(shadow, done);
                  return;
              }
          }
          done();
      },
  };
  var fragmentVNodeOperator = {
      create: function(api, vnode) {
          vnodeCreateChildrenOperator(api, vnode);
          vnode.node = getFragmentHostNode(api, vnode);
      },
      update: function(api, vnode, oldVNode) {
          var parentNode = oldVNode.parentNode;
          vnode.node = oldVNode.node;
          vnode.parentNode = parentNode;
          vnodeUpdateChildrenOperator(api, parentNode, vnode, oldVNode);
      },
      destroy: vnodeDestroyChildrenOperator,
      insert: vnodeInsertChildrenOperator,
      remove: vnodeRemoveChildrenOperator,
      enter: EMPTY_FUNCTION,
      leave: vnodeLeaveOperator,
  };
  var portalVNodeOperator = {
      create: function(api, vnode) {
          var target = UNDEFINED$1;
          if (vnode.to) {
              target = api.find(vnode.to);
              {
                  if (!target) {
                      fatal(("Failed to locate portal target with selector \"" + (vnode.to) + "\"."));
                  }
              }
          }
          // 用 body 元素兜底
          if (!target) {
              target = api.getBodyElement();
          }
          vnode.target = target;
          vnodeCreateChildrenOperator(api, vnode);
          // 用注释占用节点在模板里的位置
          // 这样删除或替换节点，才有找到它应该在的位置
          vnode.node = api.createComment(EMPTY_STRING);
      },
      update: function(api, vnode, oldVNode) {
          var target = oldVNode.target;
          vnode.node = oldVNode.node;
          vnode.parentNode = oldVNode.parentNode;
          vnode.target = target;
          vnodeUpdateChildrenOperator(api, target, vnode, oldVNode);
      },
      destroy: vnodeDestroyChildrenOperator,
      insert: function(api, parentNode, vnode) {
          vnodeInsertOperator(api, parentNode, vnode);
          vnodeInsertChildrenOperator(api, vnode.target, vnode);
      },
      remove: function(api, vnode) {
          vnodeRemoveOperator(api, vnode);
          vnodeRemoveChildrenOperator(api, vnode);
      },
      enter: EMPTY_FUNCTION,
      leave: vnodeLeaveOperator,
  };
  var slotVNodeOperator = {
      create: function(api, vnode) {
          vnodeCreateChildrenOperator(api, vnode);
          vnode.data = {};
          vnode.node = getFragmentHostNode(api, vnode);
          update$4(api, vnode);
          update$3(api, vnode);
      },
      update: function(api, vnode, oldVNode) {
          var parentNode = oldVNode.parentNode;
          vnode.node = oldVNode.node;
          vnode.parentNode = parentNode;
          vnode.data = oldVNode.data;
          update$4(api, vnode, oldVNode);
          update$3(api, vnode, oldVNode);
          vnodeUpdateChildrenOperator(api, parentNode, vnode, oldVNode);
      },
      destroy: function(api, vnode) {
          remove$5(api, vnode);
          remove$4(api, vnode);
          vnodeDestroyChildrenOperator(api, vnode);
      },
      insert: vnodeInsertChildrenOperator,
      remove: vnodeRemoveChildrenOperator,
      enter: elementVNodeEnterOperator,
      leave: elementVNodeLeaveOperator,
  };
  function isPatchable(vnode, oldVNode) {
      return vnode.type === oldVNode.type
          && vnode.tag === oldVNode.tag
          && vnode.key === oldVNode.key;
  }
  function createKeyToIndex(vnodes, startIndex, endIndex) {
      var result, vnode, key;
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
  function createComponent(api, vnode, options) {
      var data = vnode.data, child = (vnode.parent || vnode.context).createComponent(options, vnode);
      vnode.component = child;
      vnode.shadow = child.$vnode;
      data[LOADING] = FALSE$1;
      update$4(api, vnode);
      update$3(api, vnode);
      update$2(api, vnode);
      update$1(api, vnode);
      update(api, vnode);
      return child;
  }
  function createVNode(api, vnode) {
      if (!vnode.node) {
          vnode.operator.create(api, vnode);
      }
  }
  function addVNodes(api, parentNode, vnodes, startIndex, endIndex, before) {
      var vnode, start = startIndex || 0, end = endIndex !== UNDEFINED$1 ? endIndex : vnodes.length - 1;
      while (start <= end) {
          vnode = vnodes[start];
          createVNode(api, vnode);
          insertVNode(api, parentNode, vnode, before);
          start++;
      }
  }
  function insertVNode(api, parentNode, vnode, before) {
      var operator = vnode.operator;
      operator.insert(api, parentNode, vnode, before);
      vnode.parentNode = parentNode;
      // 普通元素和组件的占位节点都会走到这里
      // 但是占位节点不用 enter，而是等组件加载回来之后再调 enter
      if (operator.enter !== EMPTY_FUNCTION) {
          // 执行到这时，组件还没有挂载到 DOM 树
          // 如果此时直接触发 enter，外部还需要做多余的工作，比如 setTimeout
          // 索性这里直接等挂载到 DOM 数之后再触发
          // 注意：YoxInterface 没有声明 $nextTask，因为不想让外部访问，
          // 但是这里要用一次，所以加了 as any
          vnode.context.$nextTask.prepend(function () {
              operator.enter(vnode);
          });
      }
  }
  function removeVNodes(api, vnodes, startIndex, endIndex) {
      var vnode, start = startIndex || 0, end = endIndex !== UNDEFINED$1 ? endIndex : vnodes.length - 1;
      while (start <= end) {
          vnode = vnodes[start];
          if (vnode) {
              destroyVNode(api, vnode);
              removeVNode(api, vnode);
          }
          start++;
      }
  }
  function destroyVNode(api, vnode) {
      vnode.operator.destroy(api, vnode);
  }
  function removeVNode(api, vnode) {
      var operator = vnode.operator;
      operator.leave(vnode, function () {
          operator.remove(api, vnode);
          vnode.parentNode = UNDEFINED$1;
      });
  }
  function enterVNode(vnode, node) {
      var data = vnode.data, transition = vnode.transition, leaving = data[LEAVING];
      if (leaving) {
          leaving();
      }
      if (transition) {
          var enter = transition.enter;
          if (enter) {
              enter.call(vnode.context, node);
          }
      }
  }
  function leaveVNode(vnode, node, done) {
      var data = vnode.data, transition = vnode.transition, leaving = data[LEAVING];
      if (leaving) {
          leaving();
      }
      if (transition) {
          var leave = transition.leave;
          if (leave) {
              leave.call(vnode.context, node, data[LEAVING] = function () {
                  if (data[LEAVING]) {
                      done();
                      data[LEAVING] = UNDEFINED$1;
                  }
              });
              return TRUE$1;
          }
      }
  }
  function updateChildren(api, parentNode, children, oldChildren) {
      var startIndex = 0, endIndex = children.length - 1, startVNode = children[startIndex], endVNode = children[endIndex], oldStartIndex = 0, oldEndIndex = oldChildren.length - 1, oldStartVNode = oldChildren[oldStartIndex], oldEndVNode = oldChildren[oldEndIndex], oldKeyToIndex, oldIndex;
      while (oldStartIndex <= oldEndIndex && startIndex <= endIndex) {
          // 下面有设为 UNDEFINED 的逻辑
          if (!startVNode) {
              startVNode = children[++startIndex];
          }
          else if (!endVNode) {
              endVNode = children[--endIndex];
          }
          else if (!oldStartVNode) {
              oldStartVNode = oldChildren[++oldStartIndex];
          }
          else if (!oldEndVNode) {
              oldEndVNode = oldChildren[--oldEndIndex];
          }
          // 从头到尾比较，位置相同且值得 patch
          else if (isPatchable(startVNode, oldStartVNode)) {
              updateVNode(api, startVNode, oldStartVNode);
              startVNode = children[++startIndex];
              oldStartVNode = oldChildren[++oldStartIndex];
          }
          // 从尾到头比较，位置相同且值得 patch
          else if (isPatchable(endVNode, oldEndVNode)) {
              updateVNode(api, endVNode, oldEndVNode);
              endVNode = children[--endIndex];
              oldEndVNode = oldChildren[--oldEndIndex];
          }
          // 比较完两侧的节点，剩下就是 位置发生改变的节点 和 全新的节点
          // 当 endVNode 和 oldStartVNode 值得 patch
          // 说明元素被移到右边了
          else if (isPatchable(endVNode, oldStartVNode)) {
              updateVNode(api, endVNode, oldStartVNode);
              insertNodeNatively(api, parentNode, oldStartVNode.node, api.next(oldEndVNode.node));
              endVNode = children[--endIndex];
              oldStartVNode = oldChildren[++oldStartIndex];
          }
          // 当 oldEndVNode 和 startVNode 值得 patch
          // 说明元素被移到左边了
          else if (isPatchable(startVNode, oldEndVNode)) {
              updateVNode(api, startVNode, oldEndVNode);
              insertNodeNatively(api, parentNode, oldEndVNode.node, oldStartVNode.node);
              startVNode = children[++startIndex];
              oldEndVNode = oldChildren[--oldEndIndex];
          }
          // 尝试同级元素的 key
          else {
              if (!oldKeyToIndex) {
                  oldKeyToIndex = createKeyToIndex(oldChildren, oldStartIndex, oldEndIndex);
              }
              // 新节点之前的位置
              oldIndex = startVNode.key
                  ? oldKeyToIndex[startVNode.key]
                  : UNDEFINED$1;
              // 移动元素
              if (oldIndex !== UNDEFINED$1) {
                  patch(api, startVNode, oldChildren[oldIndex]);
                  oldChildren[oldIndex] = UNDEFINED$1;
              }
              // 新元素
              else {
                  createVNode(api, startVNode);
              }
              insertVNode(api, parentNode, startVNode, oldStartVNode);
              startVNode = children[++startIndex];
          }
      }
      if (oldStartIndex > oldEndIndex) {
          addVNodes(api, parentNode, children, startIndex, endIndex, children[endIndex + 1]);
      }
      else if (startIndex > endIndex) {
          removeVNodes(api, oldChildren, oldStartIndex, oldEndIndex);
      }
  }
  function updateVNode(api, vnode, oldVNode) {
      if (vnode !== oldVNode) {
          vnode.operator.update(api, vnode, oldVNode);
      }
  }
  function patch(api, vnode, oldVNode) {
      if (vnode === oldVNode) {
          return;
      }
      // 如果不能 patch，则删除重建
      if (!isPatchable(vnode, oldVNode)) {
          // 同步加载的组件，初始化时不会传入占位节点
          // 它内部会自动生成一个注释节点，当它的根 vnode 和注释节点对比时，必然无法 patch
          // 于是走进此分支，为新组件创建一个 DOM 节点，然后继续 createComponent 后面的流程
          var parentNode = oldVNode.parentNode;
          createVNode(api, vnode);
          if (parentNode) {
              insertVNode(api, parentNode, vnode, oldVNode);
              destroyVNode(api, oldVNode);
              removeVNode(api, oldVNode);
          }
          return;
      }
      updateVNode(api, vnode, oldVNode);
  }
  function create(api, node, context) {
      var vnode = {
          parentNode: api.parent(node),
          node: node,
          context: context,
      };
      switch (node.nodeType) {
          case 1:
              vnode.data = {};
              vnode.tag = api.tag(node);
              vnode.type = VNODE_TYPE_ELEMENT;
              vnode.operator = elementVNodeOperator;
              break;
          case 3:
              vnode.isPure = TRUE$1;
              vnode.text = node.nodeValue;
              vnode.type = VNODE_TYPE_TEXT;
              vnode.operator = textVNodeOperator;
              break;
          case 8:
              vnode.isPure = TRUE$1;
              vnode.text = node.nodeValue;
              vnode.type = VNODE_TYPE_COMMENT;
              vnode.operator = commentVNodeOperator;
              break;
      }
      return vnode;
  }
  function destroy(api, vnode, isRemove) {
      destroyVNode(api, vnode);
      if (isRemove) {
          removeVNode(api, vnode);
      }
  }
  function clone(vnode) {
      return {
          type: vnode.type,
          tag: vnode.tag,
          isComponent: vnode.isComponent,
          isFragment: vnode.isFragment,
          isSlot: vnode.isSlot,
          isSvg: vnode.isSvg,
          isStyle: vnode.isStyle,
          isOption: vnode.isOption,
          isStatic: vnode.isStatic,
          isPure: vnode.isPure,
          slots: vnode.slots,
          props: vnode.props,
          nativeProps: vnode.nativeProps,
          nativeAttrs: vnode.nativeAttrs,
          nativeStyles: vnode.nativeStyles,
          directives: vnode.directives,
          events: vnode.events,
          lazy: vnode.lazy,
          transition: vnode.transition,
          model: vnode.model,
          to: vnode.to,
          ref: vnode.ref,
          key: vnode.key,
          text: vnode.text,
          html: vnode.html,
          children: vnode.children,
          parent: vnode.parent,
          context: vnode.context,
          operator: vnode.operator,
      };
  }

  /**
   * 元素 节点
   */
  var ELEMENT = 1;
  /**
   * 属性 节点
   */
  var ATTRIBUTE = 2;
  /**
   * 指令 节点
   */
  var DIRECTIVE = 3;
  /**
   * 属性 节点
   */
  var PROPERTY = 4;
  /**
   * 样式 节点
   */
  var STYLE = 5;
  /**
   * 文本 节点
   */
  var TEXT = 6;
  /**
   * if 节点
   */
  var IF = 7;
  /**
   * else if 节点
   */
  var ELSE_IF = 8;
  /**
   * else 节点
   */
  var ELSE = 9;
  /**
   * each 节点
   */
  var EACH = 10;
  /**
   * partial 节点
   */
  var PARTIAL = 11;
  /**
   * import 节点
   */
  var IMPORT = 12;
  /**
   * 表达式 节点
   */
  var EXPRESSION = 13;
  /**
   * 延展操作 节点
   */
  var SPREAD = 14;

  // 特殊标签
  var specialTags = {};
  // 特殊属性
  var specialAttrs = {};
  // 名称 -> 类型的映射
  var name2Type = {};
  // 标签名 -> vnode 类型的映射
  var specialTag2VNodeType = {};
  specialTags[TAG_SLOT] =
      specialTags[TAG_TEMPLATE] =
          specialAttrs[ATTR_KEY] =
              specialAttrs[ATTR_REF] =
                  specialAttrs[TAG_SLOT] = TRUE$1;
  name2Type['if'] = IF;
  name2Type['each'] = EACH;
  name2Type['partial'] = PARTIAL;
  specialTag2VNodeType[TAG_FRAGMENT] = VNODE_TYPE_FRAGMENT;
  specialTag2VNodeType[TAG_PORTAL] = VNODE_TYPE_PORTAL;
  specialTag2VNodeType[TAG_SLOT] = VNODE_TYPE_SLOT;
  function parseStyleString(value, callback) {
      var parts = value.split(';');
      for (var i = 0, len = parts.length; i < len; i++) {
          var item = parts[i];
          var index = item.indexOf(':');
          if (index > 0) {
              var key = trim(item.substr(0, index));
              var value$1 = trim(item.substr(index + 1));
              if (key && value$1) {
                  callback(camelize(key), value$1);
              }
          }
      }
  }

  /**
   * 字面量
   */
  var LITERAL = 1;
  /**
   * 标识符
   */
  var IDENTIFIER = 2;
  /**
   * 对象属性或数组下标
   */
  var MEMBER = 3;
  /**
   * 一元表达式，如 - a
   */
  var UNARY = 4;
  /**
   * 二元表达式，如 a + b
   */
  var BINARY = 5;
  /**
   * 三元表达式，如 a ? b : c
   */
  var TERNARY = 6;
  /**
   * 数组表达式，如 [ 1, 2, 3 ]
   */
  var ARRAY = 7;
  /**
   * 对象表达式，如 { name: 'yox' }
   */
  var OBJECT = 8;
  /**
   * 函数调用表达式，如 a()
   */
  var CALL = 9;

  function createAttribute$1(name, ns) {
      return {
          type: ATTRIBUTE,
          isStatic: TRUE$1,
          name: name,
          ns: ns,
      };
  }
  function createDirective(name, ns, modifier) {
      return {
          type: DIRECTIVE,
          ns: ns,
          name: name,
          modifier: modifier,
      };
  }
  function createProperty(name, ns, hint, value, expr, children) {
      return {
          type: PROPERTY,
          isStatic: TRUE$1,
          name: name,
          ns: ns,
          hint: hint,
          value: value,
          expr: expr,
          children: children,
      };
  }
  function createStyle() {
      return {
          type: STYLE,
          isStatic: TRUE$1,
      };
  }
  function createEach(from, to, equal, index) {
      return {
          type: EACH,
          from: from,
          to: to,
          equal: equal || UNDEFINED$1,
          index: index,
          isVirtual: TRUE$1,
      };
  }
  function createElement$2(tag, dynamicTag, isSvg, isStyle, isComponent) {
      return {
          type: ELEMENT,
          tag: tag,
          dynamicTag: dynamicTag,
          isSvg: isSvg,
          isStyle: isStyle,
          isComponent: isComponent,
          // 只有 <option> 没有 value 属性时才为 true
          isOption: FALSE$1,
          isStatic: !isComponent && tag !== TAG_SLOT && tag !== TAG_PORTAL,
      };
  }
  function createElse() {
      return {
          type: ELSE,
          isVirtual: TRUE$1,
      };
  }
  function createElseIf(expr) {
      return {
          type: ELSE_IF,
          expr: expr,
          isVirtual: TRUE$1,
      };
  }
  function createExpression(expr, safe) {
      return {
          type: EXPRESSION,
          expr: expr,
          safe: safe,
          isLeaf: TRUE$1,
          isStatic: expr.type === LITERAL,
      };
  }
  function createIf(expr) {
      return {
          type: IF,
          expr: expr,
          isVirtual: TRUE$1,
      };
  }
  function createImport(name) {
      return {
          type: IMPORT,
          name: name,
          isLeaf: TRUE$1,
      };
  }
  function createPartial(name) {
      return {
          type: PARTIAL,
          name: name,
          isVirtual: TRUE$1,
      };
  }
  function createSpread(expr) {
      return {
          type: SPREAD,
          expr: expr,
          isLeaf: TRUE$1,
      };
  }
  function createText$1(text) {
      return {
          type: TEXT,
          text: text,
          isStatic: TRUE$1,
          isLeaf: TRUE$1,
      };
  }

  function split2Map(str) {
      var map = Object.create(NULL$1);
      each$2(str.split(','), function (item) {
          map[item] = TRUE$1;
      });
      return map;
  }
  var // 首字母大写，或中间包含 -
  componentNamePattern = /^[A-Z]|-/, 
  // HTML 实体（中间最多 6 位，没见过更长的）
  htmlEntityPattern = /&[#\w\d]{2,6};/, 
  // 常见的自闭合标签
  selfClosingTagNames = split2Map('area,base,embed,track,source,param,input,col,img,br,hr') , 
  // 常见的 svg 标签
  svgTagNames = split2Map('svg,g,defs,desc,metadata,symbol,use,image,path,rect,circle,line,ellipse,polyline,polygon,text,tspan,tref,textpath,marker,pattern,clippath,mask,filter,cursor,view,animate,font,font-face,glyph,missing-glyph,animateColor,animateMotion,animateTransform,textPath,foreignObject') , 
  // 常见的字符串类型的属性
  // 注意：autocomplete,autocapitalize 不是布尔类型
  stringPropertyNames = split2Map('id,class,name,value,for,accesskey,title,style,src,type,href,target,alt,placeholder,preload,poster,wrap,accept,pattern,dir,autocomplete,autocapitalize,valign') , 
  // 常见的数字类型的属性（width,height,cellpadding,cellspacing 支持百分比，因此不计入数字类型）
  numberPropertyNames = split2Map('min,minlength,max,maxlength,step,size,rows,cols,tabindex,colspan,rowspan,frameborder') , 
  // 常见的布尔类型的属性
  booleanPropertyNames = split2Map('disabled,checked,required,multiple,readonly,autofocus,autoplay,controls,loop,muted,novalidate,draggable,contenteditable,hidden,spellcheck') , 
  // 某些属性 attribute name 和 property name 不同
  attr2Prop = {};
  // 列举几个常见的
  attr2Prop['for'] = 'htmlFor';
  attr2Prop['class'] = 'className';
  attr2Prop['accesskey'] = 'accessKey';
  attr2Prop['novalidate'] = 'noValidate';
  attr2Prop['readonly'] = 'readOnly';
  attr2Prop['tabindex'] = 'tabIndex';
  attr2Prop['minlength'] = 'minLength';
  attr2Prop['maxlength'] = 'maxLength';
  attr2Prop['cellpadding'] = 'cellPadding';
  attr2Prop['cellspacing'] = 'cellSpacing';
  attr2Prop['colspan'] = 'colSpan';
  attr2Prop['rowspan'] = 'rowSpan';
  attr2Prop['valign'] = 'vAlign';
  attr2Prop['frameborder'] = 'frameBorder';
  function isSelfClosing(tagName) {
      return selfClosingTagNames[tagName] !== UNDEFINED$1;
  }
  function createAttribute(element, name, ns) {
      // 组件用驼峰格式
      if (element.isComponent) {
          return createAttribute$1(camelize(name), ns);
      }
      // 原生 dom 属性
      else {
          // 把 attr 优化成 prop
          var lowerName = lower(name);
          if (name === 'style') {
              return createStyle();
          }
          // <slot> 、<template> 或 svg 中的属性不用识别为 property
          else if (specialTags[element.tag] || element.isSvg) {
              return createAttribute$1(name, ns);
          }
          // 尝试识别成 property
          else if (stringPropertyNames[lowerName]) {
              return createProperty(attr2Prop[lowerName] || lowerName, ns, HINT_STRING);
          }
          else if (numberPropertyNames[lowerName]) {
              return createProperty(attr2Prop[lowerName] || lowerName, ns, HINT_NUMBER);
          }
          else if (booleanPropertyNames[lowerName]) {
              return createProperty(attr2Prop[lowerName] || lowerName, ns, HINT_BOOLEAN);
          }
          // 没辙，还是个 attribute
          return createAttribute$1(name, ns);
      }
  }
  function getAttributeDefaultValue(element, name) {
      // 比如 <Dog isLive>
      if (element.isComponent) {
          return TRUE$1;
      }
      // <div data-name checked>
      return startsWith(name, 'data-')
          ? EMPTY_STRING
          : name;
  }
  function isNativeElement(node) {
      if (node.type !== ELEMENT) {
          return FALSE$1;
      }
      var element = node;
      if (element.isComponent) {
          return FALSE$1;
      }
      return specialTags[element.tag] === UNDEFINED$1;
  }
  function createElement$1(staticTag, dynamicTag) {
      var isSvg = FALSE$1, isStyle = FALSE$1, isComponent = FALSE$1;
      if (dynamicTag) {
          isComponent = TRUE$1;
      }
      else {
          isSvg = svgTagNames[staticTag] !== UNDEFINED$1;
          // 是 svg 就不可能是组件
          // 加这个判断的原因是，svg 某些标签含有 连字符 和 大写字母，比较蛋疼
          if (!isSvg && componentNamePattern.test(staticTag)) {
              isComponent = TRUE$1;
          }
          else if (staticTag === 'style') {
              isStyle = TRUE$1;
          }
      }
      return createElement$2(staticTag, dynamicTag, isSvg, isStyle, isComponent);
  }
  function compatElement(element) {
      var tag = element.tag;
      var attrs = element.attrs;
      var hasType = FALSE$1, hasValue = FALSE$1;
      if (attrs) {
          each$2(attrs, function (attr) {
              var name = attr.type === PROPERTY
                  ? attr.name
                  : UNDEFINED$1;
              if (name === 'type') {
                  hasType = TRUE$1;
              }
              else if (name === 'value') {
                  hasValue = TRUE$1;
              }
          });
      }
      // 补全 style 标签的 type
      // style 如果没有 type 则加一个 type="text/css"
      // 因为低版本 IE 没这个属性，没法正常渲染样式
      if (element.isStyle && !hasType) {
          push(element.attrs || (element.attrs = []), createProperty('type', UNDEFINED$1, HINT_STRING, 'text/css'));
      }
      // 低版本 IE 需要给 option 标签强制加 value
      else if (tag === 'option' && !hasValue) {
          element.isOption = TRUE$1;
      }
  }
  function setElementText(element, text) {
      if (string$1(text)) {
          if (htmlEntityPattern.test(text)) {
              element.html = text;
          }
          else {
              element.text = text;
          }
      }
      else {
          element.text = text;
      }
      return TRUE$1;
  }
  function setElementHtml(element, expr) {
      element.html = expr;
      return TRUE$1;
  }

  function isDef (target) {
      return target !== UNDEFINED$1;
  }

  function toNumber (target, defaultValue) {
      return numeric(target)
          ? +target
          : defaultValue !== UNDEFINED$1
              ? defaultValue
              : 0;
  }

  function createArray(nodes, raw) {
      return {
          type: ARRAY,
          raw: raw,
          nodes: nodes,
      };
  }
  function createBinary(left, operator, right, raw) {
      return {
          type: BINARY,
          raw: raw,
          left: left,
          operator: operator,
          right: right,
      };
  }
  function createCall(name, args, raw) {
      return {
          type: CALL,
          raw: raw,
          name: name,
          args: args,
      };
  }
  function createIdentifier(raw, name, isProp) {
      var root = FALSE$1, lookup = TRUE$1, offset = 0;
      if (name === KEYPATH_CURRENT) {
          name = EMPTY_STRING;
          lookup = FALSE$1;
      }
      else if (name === KEYPATH_PARENT) {
          name = EMPTY_STRING;
          lookup = FALSE$1;
          offset = 1;
      }
      else if (name === KEYPATH_ROOT) {
          name = EMPTY_STRING;
          root = TRUE$1;
          lookup = FALSE$1;
      }
      // 对象属性需要区分 a.b 和 a[b]
      // 如果不借用 Literal 无法实现这个判断
      // 同理，如果用了这种方式，就无法区分 a.b 和 a['b']，但是无所谓，这两种表示法本就一个意思
      return isProp
          ? createLiteral(name, raw)
          : createIdentifierInner(raw, name, root, lookup, offset);
  }
  function createLiteral(value, raw) {
      return {
          type: LITERAL,
          raw: raw,
          value: value,
      };
  }
  function createObject(keys, values, raw) {
      return {
          type: OBJECT,
          raw: raw,
          keys: keys,
          values: values,
      };
  }
  function createTernary(test, yes, no, raw) {
      return {
          type: TERNARY,
          raw: raw,
          test: test,
          yes: yes,
          no: no,
      };
  }
  function createUnary(operator, node, raw) {
      return {
          type: UNARY,
          raw: raw,
          operator: operator,
          node: node,
      };
  }
  /**
   * 通过判断 nodes 来决定是否需要创建 Member
   *
   * 创建 Member 至少需要 nodes 有两个节点
   */
  function createMemberIfNeeded(raw, nodes) {
      // 第一个节点要特殊处理
      var firstNode = nodes.shift(), 
      // 是否直接从顶层查找
      root = FALSE$1, 
      // 是否向上查找
      lookup = TRUE$1, 
      // 偏移量，默认从当前 context 开始查找
      offset = 0;
      // 表示传入的 nodes 至少有两个节点（弹出了一个）
      if (nodes.length > 0) {
          // 处理剩下的 nodes
          // 这里要做两手准备：
          // 1. 如果全是 literal 节点，则编译时 join
          // 2. 如果不全是 literal 节点，则运行时 join
          // 是否全是 Literal 节点
          var isLiteral = TRUE$1, 
          // 静态节点
          staticNodes = [], 
          // 对于 this.a.b[c] 这样的
          // 要还原静态部分 this.a.b 的 raw
          // 虽然 raw 没什么大用吧，谁让我是洁癖呢
          staticRaw = EMPTY_STRING, 
          // 动态节点
          dynamicNodes = [];
          each$2(nodes, function (node) {
              if (isLiteral) {
                  if (node.type === LITERAL) {
                      var literalNode = node;
                      if (literalNode.raw === KEYPATH_PARENT) {
                          offset += 1;
                          staticRaw = staticRaw
                              ? staticRaw + RAW_SLASH + KEYPATH_PARENT
                              : KEYPATH_PARENT;
                          return;
                      }
                      if (literalNode.raw !== KEYPATH_CURRENT) {
                          var value = toString$1(literalNode.value);
                          push(staticNodes, value);
                          if (staticRaw) {
                              staticRaw += endsWith(staticRaw, KEYPATH_PARENT)
                                  ? RAW_SLASH
                                  : RAW_DOT;
                          }
                          staticRaw += value;
                      }
                  }
                  else {
                      isLiteral = FALSE$1;
                  }
              }
              if (!isLiteral) {
                  push(dynamicNodes, node);
              }
          });
          // lookup 要求第一位元素是 Identifier，且它的 lookup 是 true 才为 true
          // 其他情况都为 false，如 "11".length 第一位元素是 Literal，不存在向上寻找的需求
          // 优化 1：计算 keypath
          //
          // 计算 keypath 的唯一方式是，第一位元素是 Identifier，后面都是 Literal
          // 否则就表示中间包含动态元素，这会导致无法计算静态路径
          // 如 a.b.c 可以算出 static keypath，而 a[b].c 则不行，因为 b 是动态的
          // 优化 2：计算 offset 并智能转成 Identifier
          //
          // 比如 xx 这样的表达式，应优化成 offset = 2，并转成 Identifier
          // 处理第一个节点
          if (firstNode.type === IDENTIFIER) {
              var identifierNode = firstNode;
              root = identifierNode.root;
              lookup = identifierNode.lookup;
              offset += identifierNode.offset;
              var firstName = identifierNode.name;
              // 不是 KEYPATH_THIS 或 KEYPATH_PARENT 或 KEYPATH_ROOT
              if (firstName) {
                  unshift(staticNodes, firstName);
              }
              // 转成 Identifier
              firstName = join$1(staticNodes, RAW_DOT);
              // a.b.c
              if (isLiteral) {
                  firstNode = createIdentifierInner(raw, firstName, root, lookup, offset, staticNodes);
              }
              // a[b]
              // this.a[b]
              else {
                  // 当 isLiteral 为 false 时
                  // 需要为 lead 节点创建合适的 raw
                  var firstRaw = identifierNode.raw;
                  if (staticRaw) {
                      // 确定 firstNode 和后续静态节点的连接字符
                      var separator = RAW_DOT;
                      if (firstRaw === KEYPATH_ROOT
                          || firstRaw === KEYPATH_PARENT) {
                          separator = RAW_SLASH;
                      }
                      firstRaw += separator + staticRaw;
                  }
                  firstNode = createMemberInner(raw, createIdentifierInner(firstRaw, firstName, root, lookup, offset, staticNodes), UNDEFINED$1, dynamicNodes, root, lookup, offset);
              }
          }
          else {
              // 例子：
              // "xxx".length
              // format().a.b
              if (isLiteral) {
                  firstNode = createMemberInner(raw, firstNode, join$1(staticNodes, RAW_DOT), UNDEFINED$1, root, lookup, offset);
              }
              // 例子：
              // "xxx"[length]
              // format()[a]
              else {
                  firstNode = createMemberInner(raw, firstNode, UNDEFINED$1, dynamicNodes, root, lookup, offset);
              }
          }
      }
      return firstNode;
  }
  function createIdentifierInner(raw, name, root, lookup, offset, literals) {
      return {
          type: IDENTIFIER,
          raw: raw,
          name: name,
          root: root,
          lookup: lookup,
          offset: offset,
          literals: literals && literals.length > 1 ? literals : UNDEFINED$1,
      };
  }
  function createMemberInner(raw, lead, keypath, nodes, root, lookup, offset) {
      return {
          type: MEMBER,
          raw: raw,
          lead: lead,
          keypath: keypath,
          nodes: nodes,
          root: root,
          lookup: lookup,
          offset: offset,
      };
  }

  var unary = {
      '+': TRUE$1,
      '-': TRUE$1,
      '~': TRUE$1,
      '!': TRUE$1,
      '!!': TRUE$1,
  };
  // 参考 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
  var binary = {
      '*': 15,
      '/': 15,
      '%': 15,
      '+': 14,
      '-': 14,
      '<<': 13,
      '>>': 13,
      '>>>': 13,
      '<': 12,
      '<=': 12,
      '>': 12,
      '>=': 12,
      '==': 11,
      '!=': 11,
      '===': 11,
      '!==': 11,
      '&': 10,
      '^': 9,
      '|': 8,
      '&&': 7,
      '||': 6,
  };

  var Parser = function(content) {
      var instance = this;
      instance.index = -1;
      instance.end = content.length;
      instance.code = CODE_EOF;
      instance.content = content;
      instance.go();
  };
  /**
   * 移动一个字符
   */
  Parser.prototype.go = function (step) {
      var instance = this;
          var index = instance.index;
          var end = instance.end;
      index += step || 1;
      if (index >= 0 && index < end) {
          instance.code = instance.codeAt(index);
          instance.index = index;
      }
      else {
          instance.code = CODE_EOF;
          instance.index = index < 0 ? -1 : end;
      }
  };
  /**
   * 跳过空白符
   */
  Parser.prototype.skip = function (step) {
      var instance = this, reversed = step && step < 0;
      // 如果表达式是 "   xyz   "，到达结尾后，如果希望 skip(-1) 回到最后一个非空白符
      // 必须先判断最后一个字符是空白符，否则碰到 "xyz" 这样结尾不是空白符的，其实不应该回退
      if (instance.code === CODE_EOF) {
          var oldIndex = instance.index;
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
      while (TRUE$1) {
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
  };
  /**
   * 判断当前字符
   */
  Parser.prototype.is = function (code) {
      return this.code === code;
  };
  /**
   * 截取一段字符串
   */
  Parser.prototype.pick = function (startIndex, endIndex) {
      return slice(this.content, startIndex, isDef(endIndex) ? endIndex : this.index);
  };
  /**
   * 读取 index 位置的 char code
   *
   * @param index
   */
  Parser.prototype.codeAt = function (index) {
      return codeAt(this.content, index);
  };
  /**
   * 尝试解析下一个 token
   */
  Parser.prototype.scanToken = function () {
      var instance = this;
          var code = instance.code;
          var index = instance.index;
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
          // ~/a
          case CODE_WAVE:
              // 因为 ~ 可以是一元运算符，因此必须判断后面紧跟 / 才是路径
              if (instance.codeAt(index + 1) === CODE_SLASH) {
                  return instance.scanPath(index);
              }
              break;
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
      var operator = instance.scanOperator(index);
      if (operator && unary[operator]) {
          var node = instance.scanTernary();
          if (node) {
              if (node.type === LITERAL) {
                  var value = node.value;
                  if (number(value)) {
                      // 类似 ' -1 ' 这样的右侧有空格，需要撤回来
                      instance.skip(-1);
                      return createLiteral(-value, instance.pick(index));
                  }
              }
              // 类似 ' -a ' 这样的右侧有空格，需要撤回来
              instance.skip(-1);
              return createUnary(operator, node, instance.pick(index));
          }
          {
              // 一元运算只有操作符没有表达式？
              instance.fatal(index, "Expression expected.");
          }
      }
  };
  /**
   * 扫描数字
   *
   * 支持整数和小数
   *
   * @param startIndex
   * @return
   */
  Parser.prototype.scanNumber = function (startIndex) {
      var instance = this;
      while (isNumber(instance.code)) {
          instance.go();
      }
      var raw = instance.pick(startIndex);
      // 尝试转型，如果转型失败，则确定是个错误的数字
      if (numeric(raw)) {
          return createLiteral(+raw, raw);
      }
      {
          instance.fatal(startIndex, "Number expected.");
      }
  };
  /**
   * 扫描字符串
   *
   * 支持反斜线转义引号
   *
   * @param startIndex
   * @param endCode
   */
  Parser.prototype.scanString = function (startIndex, endCode) {
      var instance = this;
      loop: while (TRUE$1) {
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
                      // 到头了，字符串还没解析完呢？
                      instance.fatal(startIndex, 'Unexpected end of text.');
                  }
                  break loop;
          }
      }
      // new Function 处理字符转义
      var raw = instance.pick(startIndex);
      return createLiteral(new Function(("return " + raw))(), raw);
  };
  /**
   * 扫描对象字面量
   *
   * @param startIndex
   */
  Parser.prototype.scanObject = function (startIndex) {
      var instance = this, keys = [], values = [], isKey = TRUE$1, node;
      // 跳过 {
      instance.go();
      loop: while (TRUE$1) {
          switch (instance.code) {
              case CODE_CBRACE:
                  instance.go();
                  {
                      // 对象的 keys 和 values 的长度不一致
                      if (keys.length !== values.length) {
                          instance.fatal(startIndex, 'The length of keys and values must be equal.');
                      }
                  }
                  break loop;
              case CODE_EOF:
                  {
                      // 到头了，对象还没解析完呢？
                      instance.fatal(startIndex, 'Unexpected end of text.');
                  }
                  break loop;
              // :
              case CODE_COLON:
                  instance.go();
                  isKey = FALSE$1;
                  break;
              // ,
              case CODE_COMMA:
                  instance.go();
                  isKey = TRUE$1;
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
                                  // 对象的 key 必须是字面量或标识符
                                  instance.fatal(startIndex, 'The key of an object must be a literal or identifier.');
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
                  // 类似这样 { key: }
                  else {
                      {
                          // 对象的值没找到
                          instance.fatal(startIndex, "The value of the object was not found.");
                      }
                      break loop;
                  }
          }
      }
      return createObject(keys, values, instance.pick(startIndex));
  };
  /**
   * 扫描元组，即 `a, b, c` 这种格式，可以是参数列表，也可以是数组
   *
   * @param startIndex
   * @param endCode 元组的结束字符编码
   */
  Parser.prototype.scanTuple = function (startIndex, endCode) {
      var instance = this, nodes = [], node;
      // 跳过开始字符，如 [ 和 (
      instance.go();
      loop: while (TRUE$1) {
          switch (instance.code) {
              case endCode:
                  instance.go();
                  break loop;
              case CODE_EOF:
                  {
                      // 到头了，tuple 还没解析完呢？
                      instance.fatal(startIndex, 'Unexpected end of text.');
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
  };
  /**
   * 扫描路径，如 `./` 和 `../` 和 `/a`
   *
   * 路径必须位于开头，如 ./../ 或 ，不存在 a/../b/../c 这样的情况，因为路径是用来切换或指定 context 的
   *
   * @param startIndex
   * @param prevNode
   */
  Parser.prototype.scanPath = function (startIndex) {
      var instance = this, nodes = [], name;
      // 进入此函数时，已确定前一个 code 是 CODE_DOT
      // 此时只需判断接下来是 ./ 还是 / 就行了
      while (TRUE$1) {
          name = KEYPATH_CURRENT;
          // ../
          if (instance.is(CODE_DOT)) {
              instance.go();
              name = KEYPATH_PARENT;
          }
          // ~/a
          else if (instance.is(CODE_WAVE)) {
              instance.go();
              name = KEYPATH_ROOT;
          }
          push(nodes, createIdentifier(name, name, nodes.length > 0));
          // 如果以 / 结尾，则命中 ./ 或 ../
          if (instance.is(CODE_SLASH)) {
              instance.go();
              // 没写错，这里不必强调 isIdentifierStart，数字开头也可以吧
              if (isIdentifierPart(instance.code)) {
                  push(nodes, instance.scanIdentifier(instance.index, TRUE$1));
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
                      instance.fatal(startIndex, ((last(nodes).raw) + "/ must be followed by an identifier."));
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
  };
  /**
   * 扫描变量
   */
  Parser.prototype.scanTail = function (startIndex, nodes) {
      var instance = this, node;
      /**
       * 标识符后面紧着的字符，可以是 ( . [，此外还存在各种组合，感受一下：
       *
       * a.b.c().length
       * a[b].c()()
       * a[b][c]()[d](e, f, g).length
       * [].length
       */
      loop: while (TRUE$1) {
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
                      push(nodes, instance.scanIdentifier(instance.index, TRUE$1));
                      break;
                  }
                  else {
                      {
                          // . 后面跟的都是啥玩意啊
                          instance.fatal(startIndex, 'Identifier or number expected.');
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
                      // [] 内部不能为空
                      {
                          instance.fatal(startIndex, "[] is not allowed.");
                      }
                      break loop;
                  }
              default:
                  break loop;
          }
      }
      return createMemberIfNeeded(instance.pick(startIndex), nodes);
  };
  /**
   * 扫描标识符
   *
   * @param startIndex
   * @param isProp 是否是对象的属性
   * @return
   */
  Parser.prototype.scanIdentifier = function (startIndex, isProp) {
      var instance = this;
      while (isIdentifierPart(instance.code)) {
          instance.go();
      }
      var raw = instance.pick(startIndex);
      return !isProp && raw in keywordLiterals
          ? createLiteral(keywordLiterals[raw], raw)
          : createIdentifier(raw, raw, isProp);
  };
  /**
   * 扫描运算符
   *
   * @param startIndex
   */
  Parser.prototype.scanOperator = function (startIndex) {
      var instance = this;
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
                      instance.fatal(startIndex, 'The operator "++" is not supported.');
                  }
              }
              break;
          // -
          case CODE_MINUS:
              instance.go();
              {
                  // --
                  if (instance.is(CODE_MINUS)) {
                      instance.fatal(startIndex, 'The operator "--" is not supported.');
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
                  instance.fatal(startIndex, 'Assignment statements are not supported.');
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
  };
  /**
   * 扫描二元运算
   */
  Parser.prototype.scanBinary = function (startIndex) {
      // 二元运算，如 a + b * c / d，这里涉及运算符的优先级
      // 算法参考 https://en.wikipedia.org/wiki/Shunting-yard_algorithm
      var instance = this, 
      // 格式为 [ index1, node1, index2, node2, ... ]
      output = [], token, index, operator, operatorPrecedence, lastOperator, lastOperatorPrecedence;
      while (TRUE$1) {
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
                  operator = UNDEFINED$1;
              }
          }
          // 比如不支持的表达式，a++ 之类的
          else {
              if (operator) {
                  instance.fatal(startIndex, 'Invalid syntax.');
              }
          }
          // 没匹配到 token 或 operator 则跳出循环
          break;
      }
      // 类似 a + b * c 这种走到这会有 11 个
      // 此时需要从后往前遍历，因为确定后面的优先级肯定大于前面的
      while (TRUE$1) {
          // 最少的情况是 a + b，它有 7 个元素
          if (output.length >= 7) {
              index = output.length - 4;
              output.splice(index - 2, 5, createBinary(output[index - 2], output[index], output[index + 2], instance.pick(output[index - 3], output[index + 3])));
          }
          else {
              return output[1];
          }
      }
  };
  /**
   * 扫描三元运算
   *
   * @param endCode
   */
  Parser.prototype.scanTernary = function (endCode) {
      /**
       * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
       *
       * ?: 运算符的优先级几乎是最低的，比它低的只有四种： 赋值、yield、延展、逗号
       * 我们不支持这四种，因此可认为 ?: 优先级最低
       */
      var instance = this;
      instance.skip();
      var index = instance.index, test = instance.scanBinary(index), yes, no;
      if (instance.is(CODE_QUESTION)) {
          // 跳过 ?
          instance.go();
          yes = instance.scanTernary();
          if (instance.is(CODE_COLON)) {
              // 跳过 :
              instance.go();
              no = instance.scanTernary();
          }
          if (test && yes && no) {
              // 类似 ' a ? 1 : 0 ' 这样的右侧有空格，需要撤回来
              instance.skip(-1);
              test = createTernary(test, yes, no, instance.pick(index));
          }
          else {
              // 三元表达式语法错误
              instance.fatal(index, "Invalid ternary syntax.");
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
              instance.fatal(index, ("\"" + (String.fromCharCode(endCode)) + "\" expected, \"" + (String.fromCharCode(instance.code)) + "\" actually."));
          }
      }
      return test;
  };
  Parser.prototype.fatal = function (start, message) {
      {
          fatal(("Error compiling expression\n\n" + (this.content) + "\n\nmessage: " + message + "\n"));
      }
  };
  var CODE_EOF = 0, //
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
  keywordLiterals[RAW_TRUE] = TRUE$1;
  keywordLiterals[RAW_FALSE] = FALSE$1;
  keywordLiterals[RAW_NULL] = NULL$1;
  keywordLiterals[RAW_UNDEFINED] = UNDEFINED$1;
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
  var compile$1 = createOneKeyCache(function (content) {
      var parser = new Parser(content);
      return parser.scanTernary(CODE_EOF);
  });

  // 当前不位于 block 之间
  var BLOCK_MODE_NONE = 1, 
  // {{ x }}
  BLOCK_MODE_SAFE = 2, 
  // {{{ x }}}
  BLOCK_MODE_UNSAFE = 3, 
  // 缓存编译正则
  patternCache = {}, 
  // 指令分隔符，如 on-click 和 lazy-click
  directiveSeparator = '-', 
  // on-
  directiveOnSeparator = DIRECTIVE_ON + directiveSeparator, 
  // lazy-
  directiveLazySeparator = DIRECTIVE_LAZY + directiveSeparator, 
  // o-
  directiveCustomSeparator = DIRECTIVE_CUSTOM + directiveSeparator, 
  // 解析 each 的 index
  eachIndexPattern = /\s*:\s*([_$a-z]+)$/i, 
  // 调用的方法
  methodPattern = /^[_$a-z]([\w]+)?$/i, 
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
  attributePattern = /^\s*([-$.:\w]+)(?:=(['"]))?/, 
  // 未结束的属性
  // 比如 <div class="11 name="xxx"> 解析完 class 后，还剩一个 xxx"
  notEndAttributePattern = /^[!=]*['"]/, 
  // 自闭合标签
  selfClosingTagPattern = /^\s*(\/)?>/;
  /**
   * 截取前缀之后的字符串
   */
  function slicePrefix(str, prefix) {
      return trim(slice(str, prefix.length));
  }
  function toTextNode(node) {
      if (node.safe
          && node.expr.type === LITERAL) {
          return createText$1(toString$1(node.expr.value));
      }
  }
  function isDangerousInterpolation(node) {
      return node
          && node.type === EXPRESSION
          && !node.safe;
  }
  function isSpecialAttr(element, attr) {
      return specialAttrs[attr.name]
          || element.tag === TAG_SLOT && attr.name === ATTR_NAME
          || element.tag === TAG_PORTAL && attr.name === ATTR_TO;
  }
  function removeComment(children) {
      // 类似 <!-- xx {{name}} yy {{age}} zz --> 这样的注释里包含插值
      // 按照目前的解析逻辑，是根据定界符进行模板分拆
      // 一旦出现插值，children 长度必然大于 1
      var openIndex = -1, openText = EMPTY_STRING, closeIndex = -1, closeText = EMPTY_STRING;
      each$2(children, function (child, index) {
          if (child.type === TEXT) {
              // 有了结束 index，这里的任务是配对开始 index
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
                      var startIndex = openIndex, endIndex = closeIndex;
                      // 现在要确定开始和结束的文本节点，是否包含正常文本
                      if (openText) {
                          children[openIndex].text = openText;
                          startIndex++;
                      }
                      if (closeText) {
                          // 合并开始和结束文本，如 1<!-- {{x}}{{y}} -->2
                          // 这里要把 1 和 2 两个文本节点合并成一个
                          if (openText) {
                              children[openIndex].text += closeText;
                          }
                          else {
                              children[closeIndex].text = closeText;
                              endIndex--;
                          }
                      }
                      children.splice(startIndex, endIndex - startIndex + 1);
                      // 重置，再继续寻找结束 index
                      openIndex = closeIndex = -1;
                  }
              }
              else {
                  // 从后往前遍历
                  // 一旦发现能匹配 --> 就可以断定这是注释的结束 index
                  // 剩下的就是找开始 index
                  closeText = child.text;
                  // 处理 --> --> 这样有多个的情况
                  while (closeCommentPattern.test(closeText)) {
                      closeText = RegExp.$1;
                      closeIndex = index;
                  }
              }
          }
      }, TRUE$1);
  }
  function compile(content) {
      // 左安全定界符
      var leftSafeDelimiter = repeat(PUBLIC_CONFIG.leftDelimiter, 2), 
      // 右安全定界符
      rightSafeDelimiter = repeat(PUBLIC_CONFIG.rightDelimiter, 2), leftUnsafeFlag = PUBLIC_CONFIG.leftDelimiter, rightUnsafeFlag = PUBLIC_CONFIG.rightDelimiter, nodeList = [], nodeStack = [], 
      // 持有 if 节点，方便 if/elseif/else 出栈时，获取到 if 节点
      ifList = [], 
      // 持有 if/elseif/else 节点
      ifStack = [], 
      // 持有 each 节点，方便 each/else 出栈时，获取到 each 节点
      eachList = [], 
      // 持有 each/else 节点
      eachStack = [], currentElement, currentAttribute, length = content.length, 
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
      blockStack = [], indexList = [], code, attributeStartQuote, fatal$1 = function (msg) {
          {
              fatal(("Error compiling template\n\n" + content + "\n\nmessage: " + msg));
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
          var lastNode = last(nodeStack);
          if (lastNode && lastNode.type === ELEMENT) {
              var lastElement = lastNode;
              if (lastElement.tag !== popingTagName
                  && isSelfClosing(lastElement.tag)) {
                  popStack(lastElement.type, lastElement.tag);
              }
          }
      }, popStack = function (type, tagName) {
          var node = pop(nodeStack);
          // 出栈节点类型不匹配
          {
              if (!node || node.type !== type) {
                  fatal$1("The type of poping node is not expected.");
              }
          }
          var branchNode = node, isElement = type === ELEMENT, isAttribute = type === ATTRIBUTE, isProperty = type === PROPERTY, isStyle = type === STYLE, isDirective = type === DIRECTIVE, parentBranchNode = last(nodeStack);
          {
              if (isElement
                  && tagName
                  && branchNode.tag !== tagName) {
                  fatal$1(("End tag is \"" + tagName + "\"，but start tag is \"" + (branchNode.tag) + "\"."));
              }
          }
          var children = branchNode.children;
          // 先处理 children.length 大于 1 的情况，因为这里会有一些优化，导致最后的 children.length 不一定大于 0
          if (children && children.length > 1) {
              // 元素层级
              if (!currentElement) {
                  removeComment(children);
                  if (!children.length) {
                      children = branchNode.children = UNDEFINED$1;
                  }
              }
          }
          // 除了 helper.specialAttrs 里指定的特殊属性，attrs 里的任何节点都不能单独拎出来赋给 element
          // 因为 attrs 可能存在 if，所以每个 attr 最终都不一定会存在
          if (children) {
              // 优化单个子节点
              // 减少运行时的负担
              var onlyChild = children.length === 1 && children[0];
              if (onlyChild) {
                  switch (onlyChild.type) {
                      case TEXT:
                          if (isElement) {
                              processElementSingleText(branchNode, onlyChild);
                          }
                          else if (isAttribute) {
                              processAttributeSingleText(branchNode, onlyChild);
                          }
                          else if (isProperty) {
                              processPropertySingleText(branchNode, onlyChild);
                          }
                          else if (isStyle) {
                              processStyleSingleText(branchNode, onlyChild);
                          }
                          else if (isDirective) {
                              processDirectiveSingleText(branchNode, onlyChild);
                          }
                          break;
                      case EXPRESSION:
                          if (isElement) {
                              processElementSingleExpression(branchNode, onlyChild);
                          }
                          else if (isAttribute || isProperty || isStyle || isDirective) {
                              processAttributeSingleExpression(branchNode, onlyChild);
                          }
                          break;
                  }
              }
          }
          // 0 个子节点
          else if (currentElement) {
              if (isAttribute) {
                  processAttributeEmptyChildren(currentElement, branchNode);
              }
              else if (isProperty) {
                  processPropertyEmptyChildren(currentElement, branchNode);
              }
              else if (isStyle) {
                  processStyleEmptyChildren(currentElement, branchNode);
              }
              else if (isDirective) {
                  processDirectiveEmptyChildren(currentElement, branchNode);
              }
          }
          if (branchNode.isVirtual && !branchNode.children) {
              replaceChild(branchNode);
          }
          if (isElement) {
              checkElement(branchNode);
          }
          else if (currentElement) {
              if (isAttribute) {
                  checkAttribute(currentElement, branchNode);
              }
          }
          // 弹出过程可能会修改 branchNode.isStatic，因此这段放在最后执行
          // 当 branchNode 出栈时，它的 isStatic 就彻底固定下来，不会再变了
          // 这时如果它不是静态节点，则父节点也不是静态节点
          if (parentBranchNode
              && parentBranchNode.isStatic
              && !branchNode.isStatic) {
              parentBranchNode.isStatic = FALSE$1;
          }
          return branchNode;
      }, processElementSingleText = function (element, child) {
          // 需要在这特殊处理的是 html 实体
          // 但这只是 WEB 平台的特殊逻辑，所以丢给 platform 处理
          if (isNativeElement(element)
              && setElementText(element, child.text)) {
              element.children = UNDEFINED$1;
          }
      }, processElementSingleExpression = function (element, child) {
          if (isNativeElement(element)) {
              if (child.safe && setElementText(element, child.expr)
                  || !child.safe && setElementHtml(element, child.expr)) {
                  element.children = UNDEFINED$1;
              }
          }
      }, processPropertyEmptyChildren = function (element, prop) {
          if (prop.hint === HINT_BOOLEAN) {
              prop.value = TRUE$1;
          }
          else {
              // string 或 number 类型的属性，如果不写值，直接忽略
              replaceChild(prop);
          }
      }, processPropertySingleText = function (prop, child) {
          var text = child.text;
          // 数字类型需要严格校验格式，比如 width="100%" 要打印报错信息，提示用户类型错误
          if (prop.hint === HINT_NUMBER) {
              {
                  if (!numeric(text)) {
                      fatal$1(("The value of \"" + (prop.name) + "\" is not a number: " + text + "."));
                  }
              }
              prop.value = toNumber(text);
          }
          // 布尔类型的属性，只有值为 true 或 属性名 才表示 true
          else if (prop.hint === HINT_BOOLEAN) {
              prop.value = text === RAW_TRUE || text === prop.name;
          }
          // 字符串类型的属性，保持原样即可
          else {
              prop.value = text;
          }
          prop.children = UNDEFINED$1;
      }, processStyleEmptyChildren = function (element, style) {
          // 如果不写值，直接忽略
          replaceChild(style);
      }, processStyleSingleText = function (style, child) {
          if (child.text) {
              style.value = child.text;
              style.children = UNDEFINED$1;
          }
          else {
              // 如果是 style=""，直接忽略
              replaceChild(style);
          }
      }, processAttributeEmptyChildren = function (element, attr) {
          if (isSpecialAttr(element, attr)) {
              {
                  fatal$1(("The value of \"" + (attr.name) + "\" is empty."));
              }
          }
          else {
              attr.value = getAttributeDefaultValue(element, attr.name);
          }
      }, processAttributeSingleText = function (attr, child) {
          attr.value = child.text;
          attr.children = UNDEFINED$1;
      }, processAttributeSingleExpression = function (attr, child) {
          var expr = child.expr;
          if (expr.type === LITERAL) {
              attr.value = expr.value;
          }
          else {
              attr.expr = expr;
          }
          attr.children = UNDEFINED$1;
      }, processDirectiveEmptyChildren = function (element, directive) {
          directive.value = TRUE$1;
      }, processDirectiveSingleText = function (directive, child) {
          var ns = directive.ns;
          var text = child.text;
          var isModel = ns === DIRECTIVE_MODEL, 
          // lazy 的值必须是大于 0 的数字
          isLazy = ns === DIRECTIVE_LAZY, 
          // 校验事件名称
          // 且命名空间不能用 native
          isEvent = ns === DIRECTIVE_EVENT, 
          // 自定义指令运行不合法的表达式
          isCustom = ns === DIRECTIVE_CUSTOM, 
          // 指令的值是纯文本，可以预编译表达式，提升性能
          expr, error;
          try {
              expr = compile$1(text);
          }
          catch (e) {
              error = e;
          }
          if (expr) {
              {
                  var raw = expr.raw;
                  if (isLazy) {
                      if (expr.type !== LITERAL
                          || !number(expr.value)
                          || expr.value <= 0) {
                          fatal$1('The value of lazy must be a number greater than 0.');
                      }
                  }
                  // 如果指令表达式是函数调用，则只能调用方法（难道还有别的可以调用的吗？）
                  else if (expr.type === CALL) {
                      var methodName = expr.name;
                      if (methodName.type !== IDENTIFIER) {
                          fatal$1('Invalid method name.');
                      }
                      // 函数调用调用方法，因此不能是 a.b() 的形式
                      else if (!methodPattern.test(methodName.name)) {
                          fatal$1('Invalid method name.');
                      }
                  }
                  // 上面检测过方法调用，接下来事件指令只需要判断是否以下两种格式：
                  // on-click="name" 或 on-click="name.namespace"
                  else if (isEvent) {
                      if (eventPattern.test(raw) || eventNamespacePattern.test(raw)) {
                          // native 有特殊用处，不能给业务层用
                          if (eventNamespacePattern.test(raw)
                              && raw.split(RAW_DOT)[1] === MODIFER_NATIVE) {
                              fatal$1(("The event namespace \"" + MODIFER_NATIVE + "\" is not permitted."));
                          }
                          // <Button on-click="click"> 这种写法没有意义
                          if (currentElement
                              && currentElement.isComponent
                              && directive.name === raw) {
                              fatal$1("The event name listened and fired can't be the same.");
                          }
                      }
                      // 事件转换名称只能是 [name] 或 [name.namespace] 格式
                      else {
                          fatal$1('The event name and namespace must be an identifier.');
                      }
                  }
                  if (isModel && expr.type !== IDENTIFIER) {
                      fatal$1('The value of the model must be an identifier.');
                  }
              }
              directive.expr = expr;
              directive.value = expr.type === LITERAL
                  ? expr.value
                  : text;
          }
          else {
              // 自定义指令支持错误的表达式
              // 反正是自定义的规则，爱怎么写就怎么写
              if (!isCustom) {
                  throw error;
              }
              directive.value = text;
          }
          directive.children = UNDEFINED$1;
      }, checkCondition = function (condition) {
          // 这里会去掉没有子节点的空分支
          var currentNode = condition, nodeList = [], hasNext = FALSE$1, hasChildren = FALSE$1;
          // 转成数组，方便下一步从后往前遍历
          while (TRUE$1) {
              push(nodeList, currentNode);
              if (currentNode.next) {
                  currentNode = currentNode.next;
              }
              else {
                  break;
              }
          }
          each$2(nodeList, function (node) {
              // 当前分支有子节点
              if (node.children) {
                  // 从后往前遍历第一次发现非空分支
                  // 此时，可以删掉后面的空分支
                  if (!hasNext && node.next) {
                      delete node.next;
                  }
                  hasChildren = hasNext = TRUE$1;
              }
          }, TRUE$1);
          // 所有分支都没有子节点，删掉整个 if
          if (!hasChildren) {
              replaceChild(condition);
          }
      }, checkElement = function (element) {
          var tag = element.tag;
          var slot = element.slot;
          var isTemplate = tag === TAG_TEMPLATE, isFragment = tag === TAG_FRAGMENT, isPortal = tag === TAG_PORTAL;
          {
              if (isTemplate) {
                  if (element.key) {
                      fatal$1("The \"key\" is not supported in <template>.");
                  }
                  else if (element.ref) {
                      fatal$1("The \"ref\" is not supported in <template>.");
                  }
                  else if (element.attrs) {
                      fatal$1("The attributes and directives are not supported in <template>.");
                  }
                  else if (!slot) {
                      fatal$1("The \"slot\" is required in <template>.");
                  }
              }
          }
          // 没有子节点，则意味着这个元素没任何意义
          if ((isTemplate || isFragment || isPortal) && !element.children) {
              replaceChild(element);
          }
          // 处理浏览器兼容问题
          else if (tag !== TAG_SLOT) {
              compatElement(element);
          }
      }, checkAttribute = function (element, attr) {
          var name = attr.name;
          var value = attr.value;
          var isSlot = name === ATTR_SLOT;
          {
              if (isSlot) {
                  // 只能是 <template> 和 其他原生标签
                  if (specialTag2VNodeType[element.tag]) {
                      fatal$1(("The \"slot\" attribute can't be used in <" + (element.tag) + ">."));
                  }
              }
          }
          if (isSpecialAttr(element, attr)) {
              var isStringValueRequired = isSlot;
              {
                  // 因为要拎出来给 element，所以不能用 if
                  if (last(nodeStack) !== element) {
                      fatal$1(("The \"" + name + "\" can't be used in an if block."));
                  }
                  // 对于所有特殊属性来说，空字符串是肯定不行的，没有任何意义
                  if (value === EMPTY_STRING) {
                      fatal$1(("The value of \"" + name + "\" is empty."));
                  }
                  else if (isStringValueRequired && falsy$1(value)) {
                      fatal$1(("The value of \"" + name + "\" can only be a string literal."));
                  }
              }
              element[name] = isStringValueRequired ? value : attr;
              replaceChild(attr);
              if (attr.isStatic) {
                  attr.isStatic = FALSE$1;
              }
          }
      }, replaceChild = function (oldNode, newNode) {
          var currentBranch = last(nodeStack), isAttr, list, index;
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
              index = indexOf$1(list, oldNode);
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
                              currentBranch.children = UNDEFINED$1;
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
          var type = node.type, currentBranch = last(nodeStack), lastIfBranch = UNDEFINED$1, lastElseIfBranch = UNDEFINED$1, lastEachBranch = UNDEFINED$1;
          if (type === ELSE_IF) {
              var lastNode = last(ifStack);
              if (lastNode) {
                  // lastNode 只能是 if 或 else if 节点
                  if (lastNode.type === IF) {
                      lastIfBranch = lastNode;
                  }
                  else if (lastNode.type === ELSE_IF) {
                      lastElseIfBranch = lastNode;
                  }
                  // 上一个节点是 else，又加了一个 else if
                  else {
                      fatal$1('The "else" block must not be followed by an "else if" block.');
                  }
              }
              else {
                  fatal$1('The "if" block is required.');
              }
          }
          else if (type === ELSE) {
              var lastIfNode = last(ifStack), lastEachNode = last(eachStack);
              if (lastIfNode && currentBranch === lastIfNode) {
                  // lastIfNode 只能是 if 或 else if 节点
                  if (lastIfNode.type === IF) {
                      lastIfBranch = lastIfNode;
                  }
                  else if (lastIfNode.type === ELSE_IF) {
                      lastElseIfBranch = lastIfNode;
                  }
                  // 上一个节点是 else，又加了一个 else
                  else {
                      fatal$1("The \"else\" block can't appear more than once in a conditional statement.");
                  }
              }
              else if (lastEachNode && currentBranch === lastEachNode) {
                  // lastEachNode 只能是 each 节点
                  if (lastEachNode.type === EACH) {
                      lastEachBranch = lastEachNode;
                  }
                  // 上一个节点是 else，又加了一个 else
                  else {
                      fatal$1("The \"else\" block can't appear more than once in a conditional statement.");
                  }
              }
              else {
                  // 只有 else 没有对应的 if 或 each，则提示缺少 if，毕竟 if 用的更多
                  fatal$1('The "if" block is required.');
              }
          }
          else {
              if (currentBranch) {
                  // 这里不能写 currentElement && !currentAttribute，举个例子
                  //
                  // <div id="x" {{#if}} name="xx" alt="xx" {{/if}}
                  //
                  // 当 name 属性结束后，条件满足，但此时已不是元素属性层级了
                  if (currentElement && currentBranch.type === ELEMENT) {
                      // 属性层级不能使用危险插值
                      {
                          if (isDangerousInterpolation(node)) {
                              fatal$1('The dangerous interpolation must be the only child of a HTML element.');
                          }
                      }
                      // node 没法转型，一堆可能的类型怎么转啊...
                      push(currentElement.attrs || (currentElement.attrs = []), node);
                  }
                  else {
                      // 这个分支用于收集 children
                      {
                          // 指令的值只支持字面量，不支持插值
                          if (currentAttribute
                              && currentAttribute.type === DIRECTIVE
                              && type !== TEXT) {
                              // 不支持 on-click="1{{xx}}2" 或是 on-click="1{{#if x}}x{{else}}y{{/if}}2"
                              // 1. 很难做性能优化
                              // 2. 全局搜索不到事件名，不利于代码维护
                              // 3. 不利于编译成静态函数
                              fatal$1(("For performance, \"" + leftSafeDelimiter + "\" and \"" + rightSafeDelimiter + "\" are not allowed in directive value."));
                          }
                          // model 指令不能写在 if 里，影响节点的静态结构
                          else if (type === DIRECTIVE
                              && node.ns === DIRECTIVE_MODEL
                              && currentBranch !== currentElement) {
                              fatal$1("The \"model\" can't be used in an if block.");
                          }
                      }
                      var children = currentBranch.children || (currentBranch.children = []), lastChild = last(children);
                      // 如果表达式是安全插值的字面量，可以优化成字符串
                      if (type === EXPRESSION
                          // 在元素的子节点中，则直接转成字符串
                          && (!currentElement
                              // 在元素的属性中，如果同级节点大于 0 个（即至少存在一个），则可以转成字符串
                              || (currentAttribute && children.length > 0))) {
                          var textNode = toTextNode(node);
                          if (textNode) {
                              node = textNode;
                              type = textNode.type;
                          }
                      }
                      // 连续添加文本节点，则直接合并
                      if (lastChild
                          && type === TEXT) {
                          // 合并两个文本节点
                          if (lastChild.type === TEXT) {
                              lastChild.text += node.text;
                              return;
                          }
                          // 前一个是字面量的表达式，也可以合并节点
                          // 比如 attr="{{true}}1"，先插入了一个 true 字面量表达式，然后再插入一个文本时，可以合并
                          if (lastChild.type === EXPRESSION) {
                              var textNode$1 = toTextNode(lastChild);
                              if (textNode$1) {
                                  children[children.length - 1] = textNode$1;
                                  textNode$1.text += node.text;
                                  return;
                              }
                          }
                      }
                      // 危险插值，必须独占一个 html 元素
                      // <div>{{{html}}}</div>
                      {
                          if (isDangerousInterpolation(node)) {
                              // 前面不能有别的 child，危险插值必须独占父元素
                              if (lastChild) {
                                  fatal$1('The dangerous interpolation must be the only child of a HTML element.');
                              }
                              // 危险插值的父节点必须是 html element
                              else if (!isNativeElement(currentBranch)) {
                                  fatal$1('The dangerous interpolation must be the only child of a HTML element.');
                              }
                          }
                          // 后面不能有别的 child，危险插值必须独占父元素
                          else if (isDangerousInterpolation(lastChild)) {
                              fatal$1('The dangerous interpolation must be the only child of a HTML element.');
                          }
                      }
                      push(children, node);
                  }
              }
              else {
                  {
                      if (isDangerousInterpolation(node)) {
                          fatal$1('The dangerous interpolation must be under a HTML element.');
                      }
                  }
                  push(nodeList, node);
              }
          }
          if (type === IF) {
              push(ifList, node);
              push(ifStack, node);
          }
          else if (type === EACH) {
              push(eachList, node);
              push(eachStack, node);
          }
          else if (lastIfBranch) {
              lastIfBranch.next = node;
              ifStack[ifStack.length - 1] = node;
              popStack(lastIfBranch.type);
          }
          else if (lastElseIfBranch) {
              lastElseIfBranch.next = node;
              ifStack[ifStack.length - 1] = node;
              popStack(lastElseIfBranch.type);
          }
          else if (lastEachBranch) {
              lastEachBranch.next = node;
              eachStack[eachStack.length - 1] = node;
              popStack(lastEachBranch.type);
          }
          if (node.isLeaf) {
              // 当前树枝节点如果是静态的，一旦加入了一个非静态子节点，改变当前树枝节点的 isStatic
              // 这里不处理树枝节点的进栈，因为当树枝节点出栈时，还有一次处理机会，那时它的 isStatic 已确定下来，不会再变
              if (currentBranch) {
                  if (currentBranch.isStatic && !node.isStatic) {
                      currentBranch.isStatic = FALSE$1;
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
              addChild(createText$1(text));
          }
      }, htmlParsers = [
          function (content) {
              if (!currentElement) {
                  var match = content.match(tagPattern);
                  // 必须以 <tag 开头才能继续
                  // 如果 <tag 前面有别的字符，会走进第四个 parser
                  if (match && match.index === 0) {
                      var tag = match[2];
                      // 结束标签
                      if (match[1] === RAW_SLASH) {
                          /**
                           * 处理可能存在的自闭合元素，如下
                           *
                           * <div>
                           *    <input>
                           * </div>
                           */
                          popSelfClosingElementIfNeeded(tag);
                          // 等到 > 字符才算真正的结束
                          currentElement = popStack(ELEMENT, tag);
                      }
                      // 开始标签
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
                              if (tag === TAG_TEMPLATE) {
                                  var lastNode = last(nodeStack);
                                  if (!lastNode || !lastNode.isComponent) {
                                      fatal$1('<template> can only be used within an component children.');
                                  }
                              }
                          }
                          var dynamicTag;
                          // 如果以 $ 开头，表示动态组件
                          if (charAt(tag) === RAW_DOLLAR) {
                              // 编译成表达式
                              tag = slice(tag, 1);
                              dynamicTag = compile$1(tag);
                              // 表达式必须是标识符类型
                              {
                                  if (dynamicTag) {
                                      if (dynamicTag.type !== IDENTIFIER) {
                                          fatal$1(("The dynamic component \"" + tag + "\" is not a valid identifier."));
                                      }
                                  }
                                  else {
                                      fatal$1(("The dynamic component \"" + tag + "\" is not a valid expression."));
                                  }
                              }
                          }
                          var node = createElement$1(tag, dynamicTag);
                          addChild(node);
                          currentElement = node;
                      }
                      return match[0];
                  }
              }
          },
          // 处理标签的 > 或 />，不论开始还是结束标签
          function (content) {
              var match = content.match(selfClosingTagPattern);
              if (match) {
                  // 处理开始标签的 > 或 />
                  // 处理结束标签的 >
                  if (currentElement && !currentAttribute) {
                      // 自闭合标签
                      if (match[1] === RAW_SLASH) {
                          popStack(currentElement.type, currentElement.tag);
                      }
                      currentElement = UNDEFINED$1;
                      return match[0];
                  }
                  // 如果只是写了一个 > 字符
                  // 比如 <div>></div>
                  // 则交给其他 parser 处理
              }
          },
          // 处理 attribute directive 的 name 部分
          function (content) {
              // 当前在 element 层级
              if (currentElement && !currentAttribute) {
                  {
                      var match = content.match(notEndAttributePattern);
                      if (match) {
                          fatal$1("The previous attribute is not end.");
                      }
                  }
                  var match$1 = content.match(attributePattern);
                  if (match$1) {
                      var node, name = match$1[1];
                      if (name === DIRECTIVE_MODEL || name === DIRECTIVE_TRANSITION) {
                          node = createDirective(EMPTY_STRING, name);
                      }
                      // 这里要用 on- 判断前缀，否则 on 太容易重名了
                      else if (startsWith(name, directiveOnSeparator)) {
                          var event = slicePrefix(name, directiveOnSeparator);
                          {
                              if (!event) {
                                  fatal$1('The event name is required.');
                              }
                          }
                          var parts = camelize(event).split(RAW_DOT);
                          node = createDirective(parts[0], DIRECTIVE_EVENT, parts[1]);
                          // on-a.b.c
                          {
                              if (parts.length > 2) {
                                  fatal$1('Invalid event namespace.');
                              }
                          }
                      }
                      // 当一个元素绑定了多个事件时，可分别指定每个事件的 lazy
                      // 当只有一个事件时，可简写成 lazy
                      // <div on-click="xx" lazy-click
                      else if (name === DIRECTIVE_LAZY) {
                          node = createDirective(EMPTY_STRING, DIRECTIVE_LAZY);
                      }
                      else if (startsWith(name, directiveLazySeparator)) {
                          var lazy = slicePrefix(name, directiveLazySeparator);
                          {
                              if (!lazy) {
                                  fatal$1('The lazy name is required.');
                              }
                          }
                          node = createDirective(camelize(lazy), DIRECTIVE_LAZY);
                      }
                      // 自定义指令
                      else if (startsWith(name, directiveCustomSeparator)) {
                          var custom = slicePrefix(name, directiveCustomSeparator);
                          {
                              if (!custom) {
                                  fatal$1('The directive name is required.');
                              }
                          }
                          var parts$1 = camelize(custom).split(RAW_DOT);
                          node = createDirective(parts$1[0], DIRECTIVE_CUSTOM, parts$1[1]);
                          // o-a.b.c
                          {
                              if (parts$1.length > 2) {
                                  fatal$1('Invalid directive modifier.');
                              }
                          }
                      }
                      else {
                          // 处理类似 xml:name="value" 的命名空间
                          var parts$2 = name.split(':');
                          node = parts$2.length === 2
                              ? createAttribute(currentElement, parts$2[1], parts$2[0])
                              : createAttribute(currentElement, name);
                      }
                      addChild(node);
                      // 这里先记下，下一个 handler 要匹配结束引号
                      attributeStartQuote = match$1[2];
                      // 有属性值才需要设置 currentAttribute，便于后续收集属性值
                      if (attributeStartQuote) {
                          currentAttribute = node;
                      }
                      else {
                          popStack(node.type);
                      }
                      return match$1[0];
                  }
              }
          },
          function (content) {
              var text, match;
              // 处理 attribute directive 的 value 部分
              if (currentAttribute && attributeStartQuote) {
                  match = content.match(patternCache[attributeStartQuote] || (patternCache[attributeStartQuote] = new RegExp(attributeStartQuote)));
                  // 有结束引号
                  if (match) {
                      text = slice(content, 0, match.index);
                      addTextChild(text);
                      // 收集 value 到此结束
                      // 此时如果一个值都没收集到，需设置一个空字符串
                      // 否则无法区分 <div a b=""> 中的 a 和 b
                      if (!currentAttribute.children) {
                          addChild(createText$1(EMPTY_STRING));
                      }
                      text += attributeStartQuote;
                      popStack(currentAttribute.type);
                      currentAttribute = UNDEFINED$1;
                  }
                  // 没有结束引号，整段匹配
                  // 比如 <div name="1{{a}}2"> 中的 1
                  else {
                      text = content;
                      addTextChild(text);
                  }
              }
              // 如果不加判断，类似 <div {{...obj}}> 这样写，会把空格当做一个属性
              // 收集文本只有两处：属性值、元素内容
              // 属性值通过上面的 if 处理过了，这里只需要处理元素内容
              else if (!currentElement) {
                  // 获取 <tag 前面的字符
                  match = content.match(tagPattern);
                  text = match
                      ? slice(content, 0, match.index)
                      : content;
                  // 元素层级的 HTML 注释都要删掉
                  if (text) {
                      addTextChild(text.replace(commentPattern, EMPTY_STRING));
                  }
              }
              else {
                  {
                      if (trim(content)) {
                          fatal$1(("Invalid character is found in <" + (currentElement.tag) + "> attribute level."));
                      }
                  }
                  text = content;
              }
              return text;
          } ], blockParsers = [
          // {{#each xx:index}}
          function (source) {
              if (startsWith(source, SYNTAX_EACH)) {
                  {
                      if (currentElement) {
                          fatal$1(currentAttribute
                              ? "The \"each\" block can't be appear in an attribute value."
                              : "The \"each\" block can't be appear in attribute level.");
                      }
                  }
                  source = trim(slicePrefix(source, SYNTAX_EACH));
                  var literal = source, index = UNDEFINED$1, match = source.match(eachIndexPattern);
                  if (match) {
                      index = match[1];
                      literal = slice(source, 0, -1 * match[0].length);
                  }
                  {
                      if (!literal || index === EMPTY_STRING) {
                          fatal$1("Invalid each");
                      }
                      if (index === MAGIC_VAR_SCOPE
                          || index === MAGIC_VAR_KEYPATH
                          || index === MAGIC_VAR_LENGTH
                          || index === MAGIC_VAR_EVENT
                          || index === MAGIC_VAR_DATA) {
                          fatal$1(("The each index can't be \"" + index + "\"."));
                      }
                  }
                  match = literal.match(rangePattern);
                  if (match) {
                      var parts = literal.split(rangePattern), from = compile$1(parts[0]), to = compile$1(parts[2]);
                      if (from && to) {
                          return createEach(from, to, match[1] === '=>', index);
                      }
                  }
                  else {
                      var expr = compile$1(literal);
                      if (expr) {
                          return createEach(expr, UNDEFINED$1, FALSE$1, index);
                      }
                  }
                  {
                      fatal$1("Invalid each");
                  }
              }
          },
          // {{#import name}}
          function (source) {
              if (startsWith(source, SYNTAX_IMPORT)) {
                  source = slicePrefix(source, SYNTAX_IMPORT);
                  {
                      if (!source) {
                          fatal$1("Invalid import");
                      }
                  }
                  {
                      if (currentElement) {
                          fatal$1(currentAttribute
                              ? "The \"import\" block can't be appear in an attribute value."
                              : "The \"import\" block can't be appear in attribute level.");
                      }
                  }
                  return createImport(source);
              }
          },
          // {{#partial name}}
          function (source) {
              if (startsWith(source, SYNTAX_PARTIAL)) {
                  source = slicePrefix(source, SYNTAX_PARTIAL);
                  {
                      if (!source) {
                          fatal$1("Invalid partial");
                      }
                  }
                  {
                      if (currentElement) {
                          fatal$1(currentAttribute
                              ? "The \"partial\" block can't be appear in an attribute value."
                              : "The \"partial\" block can't be appear in attribute level.");
                      }
                  }
                  return createPartial(source);
              }
          },
          // {{#if expr}}
          function (source) {
              if (startsWith(source, SYNTAX_IF)) {
                  source = slicePrefix(source, SYNTAX_IF);
                  var expr = compile$1(source);
                  {
                      if (!expr) {
                          fatal$1("Invalid if");
                      }
                  }
                  return createIf(expr);
              }
          },
          // {{else if expr}}
          function (source) {
              if (startsWith(source, SYNTAX_ELSE_IF)) {
                  source = slicePrefix(source, SYNTAX_ELSE_IF);
                  var expr = compile$1(source);
                  {
                      if (!expr) {
                          fatal$1("Invalid else if");
                      }
                  }
                  return createElseIf(expr);
              }
          },
          // {{else}}
          function (source) {
              if (startsWith(source, SYNTAX_ELSE)) {
                  source = slicePrefix(source, SYNTAX_ELSE);
                  {
                      if (trim(source)) {
                          fatal$1("The \"else\" must not be followed by anything.");
                      }
                  }
                  return createElse();
              }
          },
          // {{...obj}}
          function (source) {
              if (startsWith(source, SYNTAX_SPREAD)) {
                  source = slicePrefix(source, SYNTAX_SPREAD);
                  var expr = compile$1(source);
                  {
                      if (!expr) {
                          fatal$1("Invalid spread");
                      }
                  }
                  if (currentElement && currentElement.isComponent) {
                      return createSpread(expr);
                  }
                  else {
                      fatal$1("The spread can only be used by a component.");
                  }
              }
          },
          // {{expr}}
          function (source) {
              if (!SYNTAX_COMMENT.test(source)) {
                  source = trim(source);
                  var expr = compile$1(source);
                  {
                      if (!expr) {
                          fatal$1("Invalid expression");
                      }
                  }
                  return createExpression(expr, blockMode === BLOCK_MODE_SAFE);
              }
          } ], parseHtml = function (code) {
          while (code) {
              each$2(htmlParsers, function (parse) {
                  var match = parse(code);
                  if (match) {
                      code = slice(code, match.length);
                      return FALSE$1;
                  }
              });
          }
      }, parseBlock = function (code) {
          if (charAt(code) === RAW_SLASH) {
              /**
               * 处理可能存在的自闭合元素，如下
               *
               * {{#if xx}}
               *    <input>
               * {{/if}}
               */
              popSelfClosingElementIfNeeded();
              var name = slice(code, 1);
              var type = name2Type[name], ifNode = UNDEFINED$1, eachNode = UNDEFINED$1;
              if (type === IF) {
                  var node = pop(ifStack);
                  if (node) {
                      type = node.type;
                      ifNode = pop(ifList);
                  }
                  else {
                      fatal$1("The \"if\" block is closing, but it's not open yet.");
                  }
              }
              else if (type === EACH) {
                  var node$1 = pop(eachStack);
                  if (node$1) {
                      type = node$1.type;
                      eachNode = pop(eachList);
                  }
                  else {
                      fatal$1("The \"each\" block is closing, but it's not open yet.");
                  }
              }
              popStack(type);
              if (ifNode) {
                  checkCondition(ifNode);
              }
              else if (eachNode) {
                  checkCondition(eachNode);
              }
          }
          else {
              // 开始下一个 block 或表达式
              each$2(blockParsers, function (parse) {
                  var node = parse(code);
                  if (node) {
                      addChild(node);
                      return FALSE$1;
                  }
              });
          }
      }, closeBlock = function () {
          // 确定开始和结束定界符能否配对成功，即 {{ 对 }}，{{{ 对 }}}
          // 这里不能动 openBlockIndex 和 closeBlockIndex，因为等下要用他俩 slice
          index = closeBlockIndex + rightSafeDelimiter.length;
          // 这里要用 <=，因为很可能到头了
          if (index <= length) {
              if (index < length && charAt(content, index) === rightUnsafeFlag) {
                  if (blockMode === BLOCK_MODE_UNSAFE) {
                      nextIndex = index + 1;
                  }
                  else {
                      fatal$1((leftSafeDelimiter + " and " + rightUnsafeFlag + rightSafeDelimiter + " is not a pair."));
                  }
              }
              else {
                  if (blockMode === BLOCK_MODE_SAFE) {
                      nextIndex = index;
                  }
                  else {
                      fatal$1(("" + leftSafeDelimiter + leftUnsafeFlag + " and " + rightSafeDelimiter + " is not a pair."));
                  }
              }
              pop(blockStack);
              // 结束定界符左侧的位置
              addIndex(closeBlockIndex);
              // 此时 nextIndex 位于结束定界符的右侧
          }
          else {
              // 到头了
              return TRUE$1;
          }
      }, addIndex = function (index) {
          if (!blockStack.length) {
              push(indexList, index);
          }
      };
      // 因为存在 mustache 注释内包含插值的情况
      // 这里把流程设计为先标记切片的位置，标记过程中丢弃无效的 block
      // 最后处理有效的 block
      while (TRUE$1) {
          // 当前内容位置
          addIndex(nextIndex);
          // 寻找下一个开始定界符和结束定界符
          openBlockIndex = indexOf(content, leftSafeDelimiter, nextIndex);
          closeBlockIndex = indexOf(content, rightSafeDelimiter, nextIndex);
          // 如果是连续的结束定界符，比如 {{！{{xx}} }}
          // 需要调用 closeBlock
          if (closeBlockIndex >= nextIndex
              && (openBlockIndex < 0 || closeBlockIndex < openBlockIndex)) {
              if (closeBlock()) {
                  break;
              }
          }
          // 解析下一个 block
          else if (openBlockIndex >= nextIndex) {
              // 当前为安全插值模式
              blockMode = BLOCK_MODE_SAFE;
              // 开始定界符左侧的位置
              addIndex(openBlockIndex);
              // 跳过开始定界符
              openBlockIndex += leftSafeDelimiter.length;
              // 开始定界符后面总得有内容吧
              if (openBlockIndex < length) {
                  // 判断是否为危险插值模式
                  if (charAt(content, openBlockIndex) === leftUnsafeFlag) {
                      blockMode = BLOCK_MODE_UNSAFE;
                      openBlockIndex++;
                  }
                  // 开始定界符右侧的位置
                  addIndex(openBlockIndex);
                  // block 模式
                  addIndex(blockMode);
                  // 打开一个 block 就入栈一个
                  push(blockStack, TRUE$1);
                  if (openBlockIndex < length) {
                      // 结束定界符左侧的位置
                      closeBlockIndex = indexOf(content, rightSafeDelimiter, openBlockIndex);
                      if (closeBlockIndex >= openBlockIndex) {
                          nextIndex = indexOf(content, leftSafeDelimiter, openBlockIndex);
                          // 判断结束定界符是否能匹配开始定界符
                          // 因为支持 mustache 注释，而注释又能嵌套，如 {{！  {{xx}} {{! {{xx}} }}  }}
                          // 当 {{ 和 }} 中间还有 {{ 时，则表示无法匹配，需要靠下一次循环再次解析
                          if (nextIndex < 0 || closeBlockIndex < nextIndex) {
                              if (closeBlock()) {
                                  break;
                              }
                          }
                      }
                      else {
                          fatal$1('The end delimiter is not found.');
                      }
                  }
                  else {
                      // {{{ 后面没字符串了？
                      fatal$1('Unterminated template literal.');
                  }
              }
              else {
                  // {{ 后面没字符串了？
                  fatal$1('Unterminated template literal.');
              }
          }
          else {
              break;
          }
      }
      // 开始处理有效 block 之前，重置 blockMode
      blockMode = BLOCK_MODE_NONE;
      for (var i = 0, length$1 = indexList.length; i < length$1; i += 5) {
          // 每个单元有 5 个 index
          // [当前内容位置，下一个开始定界符的左侧, 下一个开始定界符的右侧, block 模式, 下一个结束定界符的左侧]
          index = indexList[i];
          // 开始定界符左侧的位置
          openBlockIndex = indexList[i + 1];
          // 如果 openBlockIndex 存在，则后续 3 个 index 都存在
          if (isDef(openBlockIndex)) {
              parseHtml(slice(content, index, openBlockIndex));
              // 开始定界符右侧的位置
              openBlockIndex = indexList[i + 2];
              blockMode = indexList[i + 3];
              // 结束定界符左侧的位置
              closeBlockIndex = indexList[i + 4];
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
                  fatal$1('Some nodes is still in the stack.');
              }
          }
      }
      if (nodeList.length > 0) {
          removeComment(nodeList);
      }
      return nodeList;
  }

  var QUOTE_DOUBLE = '"', QUOTE_SINGLE = "'";
  // 下面这些值需要根据外部配置才能确定
  var isUglify$1 = UNDEFINED$1, isMinify = UNDEFINED$1, varId = 0, varMap = {}, varCache = {}, VAR_PREFIX = EMPTY_STRING, UNDEFINED = EMPTY_STRING, NULL = EMPTY_STRING, TRUE = EMPTY_STRING, FALSE = EMPTY_STRING, SPACE = EMPTY_STRING, INDENT = EMPTY_STRING, BREAK_LINE = EMPTY_STRING;
  var Primitive = function(value) {
      this.value = value;
  };
  Primitive.prototype.toString = function () {
      var ref = this;
          var value = ref.value;
      return value === TRUE$1
          ? TRUE
          : value === FALSE$1
              ? FALSE
              : value === NULL$1
                  ? NULL
                  : value === UNDEFINED$1
                      ? UNDEFINED
                      : string$1(value)
                          ? toStringLiteral(value)
                          : ("" + value);
  };
  var Tuple = function(left, right, separator, breakLine, offset, items) {
      this.left = left;
      this.right = right;
      this.separator = separator;
      this.breakLine = breakLine;
      this.offset = offset;
      this.items = items || [];
  };
  Tuple.prototype.unshift = function (value) {
      unshift(this.items, value);
  };
  Tuple.prototype.push = function (value) {
      push(this.items, value);
  };
  Tuple.prototype.toString = function (tabSize) {
      var ref = this;
          var left = ref.left;
          var right = ref.right;
          var separator = ref.separator;
          var breakLine = ref.breakLine;
          var offset = ref.offset;
          var items = ref.items;
          var length = items.length;
      if (!length) {
          return ("" + left + right);
      }
      var currentTabSize = tabSize || 0, nextTabSize = currentTabSize + offset, currentIndentSize = repeat(INDENT, currentTabSize), nextIndentSize = repeat(INDENT, nextTabSize), result = items.map(function (item) {
          return item.toString(nextTabSize);
      });
      if (left && breakLine) {
          left += BREAK_LINE + nextIndentSize;
      }
      if (right && breakLine) {
          right = BREAK_LINE + currentIndentSize + right;
      }
      return ("" + left + (join$1(result, breakLine
          ? separator + BREAK_LINE + nextIndentSize
          : separator + SPACE)) + right);
  };
  var Map = function(fields) {
      this.fields = {};
      if (fields) {
          var instance = this;
          each(fields, function (value, key) {
              instance.set(key, value);
          });
      }
  };
  Map.prototype.set = function (name, value) {
      if (value instanceof Primitive
          && value.value === UNDEFINED$1) {
          return;
      }
      this.fields[name] = value;
  };
  Map.prototype.isNotEmpty = function () {
      return keys(this.fields).length > 0;
  };
  Map.prototype.toString = function (tabSize) {
      var ref = this;
          var fields = ref.fields;
          var items = keys(fields).sort().map(function (key) {
          return {
              toString: function(tabSize) {
                  return toObjectPair(key, fields[key].toString(tabSize));
              }
          };
      });
      return toTuple('{', '}', ',', TRUE$1, 1, items).toString(tabSize);
  };
  var Call = function(name, args) {
      this.name = name;
      this.args = args;
  };
  Call.prototype.toString = function (tabSize) {
      var ref = this;
          var name = ref.name;
          var args = ref.args;
          var newArgs = args ? trimArgs(args) : [];
      return newArgs.length
          ? ("" + (name.toString(tabSize)) + (toTuple('(', ')', ',', TRUE$1, 1, newArgs).toString(tabSize)))
          : ((name.toString(tabSize)) + "()");
  };
  var Precedence = function(value) {
      this.value = value;
  };
  Precedence.prototype.toString = function (tabSize) {
      return ("(" + (this.value.toString(tabSize)) + ")");
  };
  var StringBuffer = function () {};

  StringBuffer.prototype.append = function (text) {
      var ref = this;
          var buffer = ref.buffer;
      if (buffer) {
          this.buffer = toBinary(buffer instanceof Ternary
              ? toPrecedence(buffer)
              : buffer, '+', text instanceof Ternary
              ? toPrecedence(text)
              : text);
      }
      else {
          this.buffer = text;
      }
  };
  StringBuffer.prototype.toString = function (tabSize) {
      return this.buffer.toString(tabSize);
  };
  var Unary = function(operator, value) {
      this.operator = operator;
      this.value = value;
  };
  Unary.prototype.toString = function (tabSize) {
      return ("" + (this.operator) + (this.value.toString(tabSize)));
  };
  var Binary = function(left, operator, right) {
      this.left = left;
      this.operator = operator;
      this.right = right;
  };
  Binary.prototype.toString = function (tabSize) {
      return ("" + (this.left.toString(tabSize)) + SPACE + (this.operator) + SPACE + (this.right.toString(tabSize)));
  };
  var Ternary = function(test, yes, no) {
      this.test = test;
      this.yes = yes;
      this.no = no;
  };
  Ternary.prototype.toString = function (tabSize) {
      return ("" + (this.test.toString(tabSize)) + SPACE + "?" + SPACE + (this.yes.toString(tabSize)) + SPACE + ":" + SPACE + (this.no.toString(tabSize)));
  };
  var AnonymousFunction = function(args, body, returnValue) {
      this.args = args;
      this.body = body;
      this.returnValue = returnValue;
  };
  AnonymousFunction.prototype.toString = function (tabSize) {
      var ref = this;
          var args = ref.args;
          var body = ref.body;
          var returnValue = ref.returnValue;
          var currentTabSize = tabSize || 0, nextTabSize = currentTabSize + 1, currentIndentSize = repeat(INDENT, currentTabSize), nextIndentSize = repeat(INDENT, nextTabSize), tuple = args ? toTuple(EMPTY_STRING, EMPTY_STRING, ',', FALSE$1, 1, args).toString(currentTabSize) : EMPTY_STRING, code = [];
      if (body) {
          push(code, body.toString(nextTabSize) + (returnValue ? ';' : EMPTY_STRING));
      }
      if (returnValue) {
          push(code, ("return " + (returnValue.toString(nextTabSize))));
      }
      return ("" + (RAW_FUNCTION) + SPACE + "(" + tuple + ")" + SPACE + "{" + BREAK_LINE + nextIndentSize + (join$1(code, BREAK_LINE + nextIndentSize)) + BREAK_LINE + currentIndentSize + "}");
  };
  var Member = function(base, props) {
      this.base = base;
      this.props = props;
  };
  Member.prototype.toString = function (tabSize) {
      var ref = this;
          var base = ref.base;
          var props = ref.props;
      var result = base.toString(tabSize);
      each$2(props, function (prop) {
          if (prop instanceof Primitive) {
              if (numeric(prop.value)) {
                  result += "[" + SPACE + (prop.value) + SPACE + "]";
              }
              else {
                  result += '.' + prop.value;
              }
          }
          else {
              result += "[" + SPACE + (prop.toString(tabSize)) + SPACE + "]";
          }
      });
      return result;
  };
  var Assign = function(name, value) {
      this.name = name;
      this.value = value;
  };
  Assign.prototype.toString = function (tabSize) {
      var ref = this;
          var name = ref.name;
          var value = ref.value;
      return ("" + (name.toString(tabSize)) + SPACE + "=" + SPACE + (value.toString(tabSize)));
  };
  var Push = function(array, item) {
      this.array = array;
      this.item = item;
  };
  Push.prototype.toString = function (tabSize) {
      var ref = this;
          var array = ref.array;
          var item = ref.item;
      return toAssign(toMember(array, [
          toMember(array, [
              toPrimitive(RAW_LENGTH)
          ])
      ]), item).toString(tabSize);
  };
  function toPrimitive(value) {
      return new Primitive(value);
  }
  function toTuple(left, right, separator, breakLine, offset, items) {
      return new Tuple(left, right, separator, breakLine, offset, items);
  }
  function toStatement(items, precedence) {
      if (precedence) {
          return toTuple('(', ')', ',', TRUE$1, 1, items);
      }
      return toTuple(EMPTY_STRING, EMPTY_STRING, ',', TRUE$1, 0, items);
  }
  function toList(items, join) {
      var result = toTuple('[', ']', ',', TRUE$1, 1, items);
      if (string$1(join)) {
          return {
              toString: function(tabSize) {
                  return ((result.toString(tabSize)) + ".join(" + (toPrimitive(join).toString()) + ")");
              }
          };
      }
      return result;
  }
  function toMap(fields) {
      return new Map(fields);
  }
  function toCall(name, args) {
      return new Call(name, args);
  }
  function toPrecedence(value) {
      return new Precedence(value);
  }
  function toStringBuffer() {
      return new StringBuffer();
  }
  function toUnary(operator, value) {
      return new Unary(operator, value);
  }
  function toBinary(left, operator, right) {
      return new Binary(left, operator, right);
  }
  function toTernary(test, yes, no) {
      return new Ternary(test, yes, no);
  }
  function toAnonymousFunction(args, body, returnValue) {
      return new AnonymousFunction(args, body, returnValue);
  }
  function toMember(base, props) {
      return new Member(base, props);
  }
  function toAssign(name, value) {
      return new Assign(name, value);
  }
  function toPush(array, item) {
      return new Push(array, item);
  }
  /**
   * 目的是 保证调用参数顺序稳定，减少运行时判断
   *
   * [a, undefined, undefined] => [a]
   * [a, undefined, b, undefined] => [a, undefined, b]
   */
  function trimArgs(list) {
      var args = [], removable = TRUE$1;
      each$2(list, function (arg) {
          var isDef = arg instanceof Primitive
              ? arg.value !== UNDEFINED$1
              : TRUE$1;
          if (isDef) {
              removable = FALSE$1;
              unshift(args, arg);
          }
          else if (!removable) {
              unshift(args, toPrimitive(UNDEFINED$1));
          }
      }, TRUE$1);
      return args;
  }
  function toStringLiteral(value) {
      // 优先用单引号
      var quote = has$1(value, QUOTE_SINGLE)
          ? QUOTE_DOUBLE
          : QUOTE_SINGLE;
      // 换行符会导致字符串语法错误
      return ("" + quote + (value.replace(/\n\s*/g, '\\n')) + quote);
  }
  function toObjectPair(key, value) {
      if (!/^[\w$]+$/.test(key)) {
          key = toStringLiteral(key);
      }
      return (key + ":" + SPACE + value);
  }
  function toVarPair(key, value) {
      return ("" + key + SPACE + "=" + SPACE + value);
  }
  function init$1() {
      if (isUglify$1 !== PUBLIC_CONFIG.uglifyCompiled) {
          isUglify$1 = PUBLIC_CONFIG.uglifyCompiled;
          VAR_PREFIX = isUglify$1 ? '$' : 'var';
      }
      if (isMinify !== PUBLIC_CONFIG.minifyCompiled) {
          isMinify = PUBLIC_CONFIG.minifyCompiled;
          if (isMinify) {
              SPACE = INDENT = BREAK_LINE = EMPTY_STRING;
          }
          else {
              SPACE = ' ';
              INDENT = '  ';
              BREAK_LINE = '\n';
          }
      }
      varId = 0;
      varMap = {};
      varCache = {};
      UNDEFINED = addVar('void 0');
      NULL = addVar('null');
      TRUE = addVar('!0');
      FALSE = addVar('!1');
  }
  function addVar(value, cache) {
      var hash = value.toString();
      if (cache && varCache[hash]) {
          return varCache[hash];
      }
      var key = VAR_PREFIX + (varId++);
      varMap[key] = value;
      if (cache) {
          varCache[hash] = key;
      }
      return key;
  }
  function parse(keypath) {
      return keypath.split(RAW_DOT)
          .filter(function (item) {
          return item.length > 0;
      })
          .map(toPrimitive);
  }
  function generate$2(args, code) {
      var varList = [];
      each(varMap, function (value, key) {
          push(varList, {
              toString: function(tabSize) {
                  return toVarPair(key, value.toString(tabSize));
              }
          });
      });
      var result = toAnonymousFunction(UNDEFINED$1, toTuple('var ', ';', ',', FALSE$1, 0, varList), toAnonymousFunction(args, code));
      return ("(" + (result.toString()) + ")()");
  }

  /**
   * 比较操作符优先级
   *
   * @param node
   * @param operator
   */
  function compareOperatorPrecedence(node, operator) {
      // 三元表达式优先级最低
      if (node.type === TERNARY) {
          return -1;
      }
      // 二元运算要比较优先级
      if (node.type === BINARY) {
          return binary[node.operator] - binary[operator];
      }
      return 0;
  }
  function generate$1(node, transformIdentifier, generateIdentifier, generateValue, generateCall, holder, stack, parentNode) {
      var value, hasHolder = FALSE$1, generateNode = function (node, parentNode) {
          return generate$1(node, transformIdentifier, generateIdentifier, generateValue, generateCall, FALSE$1, // 如果是内部临时值，不需要 holder
          stack, parentNode);
      }, generateNodes = function (nodes, parentNode) {
          return nodes.map(function (node) {
              return generateNode(node, parentNode);
          });
      };
      switch (node.type) {
          case LITERAL:
              var literalNode = node;
              value = toPrimitive(literalNode.value);
              break;
          case UNARY:
              var unaryNode = node;
              value = toUnary(unaryNode.operator, generateNode(unaryNode.node));
              break;
          case BINARY:
              var binaryNode = node, left = generateNode(binaryNode.left), right = generateNode(binaryNode.right);
              if (compareOperatorPrecedence(binaryNode.left, binaryNode.operator) < 0) {
                  left = toPrecedence(left);
              }
              if (compareOperatorPrecedence(binaryNode.right, binaryNode.operator) < 0) {
                  right = toPrecedence(right);
              }
              value = toBinary(left, binaryNode.operator, right);
              break;
          case TERNARY:
              var ternaryNode = node, test = generateNode(ternaryNode.test), yes = generateNode(ternaryNode.yes), no = generateNode(ternaryNode.no);
              value = toTernary(test, yes, no);
              break;
          case ARRAY:
              var arrayNode = node;
              value = toList(generateNodes(arrayNode.nodes, parentNode));
              break;
          case OBJECT:
              var objectNode = node, newObject = toMap();
              each$2(objectNode.keys, function (key, index) {
                  var value = objectNode.values[index];
                  newObject.set(key, generateNode(value));
              });
              value = newObject;
              break;
          case IDENTIFIER:
              hasHolder = TRUE$1;
              var identifierNode = node;
              value = transformIdentifier(identifierNode)
                  || generateIdentifier(identifierNode, identifierNode.name ? parse(identifierNode.name) : [], identifierNode.name, holder, stack, parentNode);
              break;
          case MEMBER:
              hasHolder = TRUE$1;
              var memberNode = node;
              if (memberNode.lead.type === IDENTIFIER) {
                  // 只能是 a[b] 的形式，因为 a.b 已经在解析时转换成 Identifier 了
                  var leadNode = memberNode.lead, leadValue = transformIdentifier(leadNode), memberNodes = generateNodes(memberNode.nodes || []);
                  if (leadValue) {
                      value = generateValue(leadValue, memberNodes, UNDEFINED$1, holder);
                  }
                  else {
                      if (leadNode.name) {
                          // a.b.c[d] 这里要把 a.b.c 拆开
                          each$2(parse(leadNode.name), function (node) {
                              memberNodes.unshift(node);
                          }, TRUE$1);
                      }
                      value = generateIdentifier(memberNode, memberNodes, UNDEFINED$1, holder, stack, parentNode);
                  }
              }
              else if (memberNode.nodes) {
                  // "xx"[length]
                  // format()[a][b]
                  value = generateValue(generateNode(memberNode.lead), generateNodes(memberNode.nodes || []), UNDEFINED$1, holder);
              }
              else {
                  // "xx".length
                  // format().a.b
                  value = generateValue(generateNode(memberNode.lead), parse(memberNode.keypath), memberNode.keypath, holder);
              }
              break;
          default:
              hasHolder = TRUE$1;
              var callNode = node;
              value = generateCall(generateNode(callNode.name, callNode), callNode.args.length
                  ? generateNodes(callNode.args)
                  : UNDEFINED$1, holder);
              break;
      }
      if (!holder || hasHolder) {
          return value;
      }
      return toMap({
          value: value,
      });
  }

  // 是否正在收集虚拟节点
  var vnodeStack = [TRUE$1], 
  // 是否正在处理组件节点
  componentStack = [], 
  // 是否正在处理 attribute
  attributeStack = [], 
  // 是否正在处理特殊 each，包括 遍历 range 和 遍历数组字面量和对象字面量
  eachStack = [], 
  // 是否正在收集动态 child
  dynamicChildrenStack = [TRUE$1], 
  // 收集属性值
  attributeValueStack = [], magicVariables = [MAGIC_VAR_KEYPATH, MAGIC_VAR_LENGTH, MAGIC_VAR_EVENT, MAGIC_VAR_DATA], nodeGenerator = {}, FIELD_NATIVE_ATTRIBUTES = 'nativeAttrs', FIELD_NATIVE_PROPERTIES = 'nativeProps', FIELD_NATIVE_STYLES = 'nativeStyles', FIELD_PROPERTIES = 'props', FIELD_DIRECTIVES = 'directives', FIELD_EVENTS = 'events', FIELD_MODEL = 'model', FIELD_LAZY = 'lazy', FIELD_TRANSITION = 'transition', FIELD_CHILDREN = 'children', FIELD_SLOTS = 'slots';
  // 下面这些值需要根据外部配置才能确定
  var isUglify = UNDEFINED$1, currentTextVNode = UNDEFINED$1, RENDER_COMPOSE_VNODE = EMPTY_STRING, APPEND_ATTRIBUTE = EMPTY_STRING, RENDER_STYLE_STRING = EMPTY_STRING, RENDER_STYLE_EXPR = EMPTY_STRING, RENDER_TRANSITION = EMPTY_STRING, RENDER_MODEL = EMPTY_STRING, RENDER_EVENT_METHOD = EMPTY_STRING, RENDER_EVENT_NAME = EMPTY_STRING, RENDER_DIRECTIVE = EMPTY_STRING, RENDER_SPREAD = EMPTY_STRING, RENDER_SLOTS = EMPTY_STRING, RENDER_SLOT_CHILDREN = EMPTY_STRING, RENDER_PARTIAL = EMPTY_STRING, RENDER_EACH = EMPTY_STRING, RENDER_RANGE = EMPTY_STRING, LOOKUP_KEYPATH = EMPTY_STRING, LOOKUP_PROP = EMPTY_STRING, GET_THIS = EMPTY_STRING, GET_THIS_BY_INDEX = EMPTY_STRING, GET_PROP = EMPTY_STRING, GET_PROP_BY_INDEX = EMPTY_STRING, READ_KEYPATH = EMPTY_STRING, EXECUTE_FUNCTION = EMPTY_STRING, SET_HOLDER = EMPTY_STRING, TO_STRING = EMPTY_STRING, OPERATOR_TEXT_VNODE = EMPTY_STRING, OPERATOR_COMMENT_VNODE = EMPTY_STRING, OPERATOR_ELEMENT_VNODE = EMPTY_STRING, OPERATOR_COMPONENT_VNODE = EMPTY_STRING, OPERATOR_FRAGMENT_VNODE = EMPTY_STRING, OPERATOR_PORTAL_VNODE = EMPTY_STRING, OPERATOR_SLOT_VNODE = EMPTY_STRING, ARG_INSTANCE = EMPTY_STRING, ARG_FILTERS = EMPTY_STRING, ARG_GLOBAL_FILTERS = EMPTY_STRING, ARG_LOCAL_PARTIALS = EMPTY_STRING, ARG_PARTIALS = EMPTY_STRING, ARG_GLOBAL_PARTIALS = EMPTY_STRING, ARG_DIRECTIVES = EMPTY_STRING, ARG_GLOBAL_DIRECTIVES = EMPTY_STRING, ARG_TRANSITIONS = EMPTY_STRING, ARG_GLOBAL_TRANSITIONS = EMPTY_STRING, ARG_STACK = EMPTY_STRING, ARG_VNODE = EMPTY_STRING, ARG_CHILDREN = EMPTY_STRING, ARG_COMPONENTS = EMPTY_STRING, ARG_SCOPE = EMPTY_STRING, ARG_KEYPATH = EMPTY_STRING, ARG_LENGTH = EMPTY_STRING, ARG_EVENT = EMPTY_STRING, ARG_DATA = EMPTY_STRING;
  function init() {
      if (isUglify === PUBLIC_CONFIG.uglifyCompiled) {
          return;
      }
      if (PUBLIC_CONFIG.uglifyCompiled) {
          RENDER_COMPOSE_VNODE = '_a';
          APPEND_ATTRIBUTE = '_b';
          RENDER_STYLE_STRING = '_c';
          RENDER_STYLE_EXPR = '_d';
          RENDER_TRANSITION = '_e';
          RENDER_MODEL = '_f';
          RENDER_EVENT_METHOD = '_g';
          RENDER_EVENT_NAME = '_h';
          RENDER_DIRECTIVE = '_i';
          RENDER_SPREAD = '_j';
          RENDER_SLOTS = '_l';
          RENDER_SLOT_CHILDREN = '_m';
          RENDER_PARTIAL = '_n';
          RENDER_EACH = '_o';
          RENDER_RANGE = '_p';
          LOOKUP_KEYPATH = '_q';
          LOOKUP_PROP = '_r';
          GET_THIS = '_s';
          GET_THIS_BY_INDEX = '_t';
          GET_PROP = '_u';
          GET_PROP_BY_INDEX = '_v';
          READ_KEYPATH = '_w';
          EXECUTE_FUNCTION = '_x';
          SET_HOLDER = '_y';
          TO_STRING = '_z';
          OPERATOR_TEXT_VNODE = '_A';
          OPERATOR_COMMENT_VNODE = '_B';
          OPERATOR_ELEMENT_VNODE = '_C';
          OPERATOR_COMPONENT_VNODE = '_D';
          OPERATOR_FRAGMENT_VNODE = '_E';
          OPERATOR_PORTAL_VNODE = '_F';
          OPERATOR_SLOT_VNODE = '_G';
          ARG_INSTANCE = '_H';
          ARG_FILTERS = '_I';
          ARG_GLOBAL_FILTERS = '_J';
          ARG_LOCAL_PARTIALS = '_K';
          ARG_PARTIALS = '_L';
          ARG_GLOBAL_PARTIALS = '_M';
          ARG_DIRECTIVES = '_N';
          ARG_GLOBAL_DIRECTIVES = '_O';
          ARG_TRANSITIONS = '_P';
          ARG_GLOBAL_TRANSITIONS = '_Q';
          ARG_STACK = '_R';
          ARG_VNODE = '_S';
          ARG_CHILDREN = '_T';
          ARG_COMPONENTS = '_U';
          ARG_SCOPE = '_V';
          ARG_KEYPATH = '_W';
          ARG_LENGTH = '_X';
          ARG_EVENT = '_Y';
          ARG_DATA = '_Z';
      }
      else {
          RENDER_COMPOSE_VNODE = 'renderComposeVNode';
          APPEND_ATTRIBUTE = 'appendAttribute';
          RENDER_STYLE_STRING = 'renderStyleStyle';
          RENDER_STYLE_EXPR = 'renderStyleExpr';
          RENDER_TRANSITION = 'renderTransition';
          RENDER_MODEL = 'renderModel';
          RENDER_EVENT_METHOD = 'renderEventMethod';
          RENDER_EVENT_NAME = 'renderEventName';
          RENDER_DIRECTIVE = 'renderDirective';
          RENDER_SPREAD = 'renderSpread';
          RENDER_SLOTS = 'renderSlots';
          RENDER_SLOT_CHILDREN = 'renderSlotChildren';
          RENDER_PARTIAL = 'renderPartial';
          RENDER_EACH = 'renderEach';
          RENDER_RANGE = 'renderRange';
          LOOKUP_KEYPATH = 'lookupKeypath';
          LOOKUP_PROP = 'lookupProp';
          GET_THIS = 'getThis';
          GET_THIS_BY_INDEX = 'getThisByIndex';
          GET_PROP = 'getProp';
          GET_PROP_BY_INDEX = 'getPropByIndex';
          READ_KEYPATH = 'readKeypath';
          EXECUTE_FUNCTION = 'executeFunction';
          SET_HOLDER = 'setHolder';
          TO_STRING = 'toString';
          OPERATOR_TEXT_VNODE = 'textVNodeOperator';
          OPERATOR_COMMENT_VNODE = 'commentVNodeOperator';
          OPERATOR_ELEMENT_VNODE = 'elementVNodeOperator';
          OPERATOR_COMPONENT_VNODE = 'componentVNodeOperator';
          OPERATOR_FRAGMENT_VNODE = 'fragmentVNodeOperator';
          OPERATOR_PORTAL_VNODE = 'portalVNodeOperator';
          OPERATOR_SLOT_VNODE = 'slotVNodeOperator';
          ARG_INSTANCE = 'instance';
          ARG_FILTERS = 'filters';
          ARG_GLOBAL_FILTERS = 'globalFilters';
          ARG_LOCAL_PARTIALS = 'localPartials';
          ARG_PARTIALS = 'partials';
          ARG_GLOBAL_PARTIALS = 'globalPartials';
          ARG_DIRECTIVES = 'directives';
          ARG_GLOBAL_DIRECTIVES = 'globalDirectives';
          ARG_TRANSITIONS = 'transition';
          ARG_GLOBAL_TRANSITIONS = 'globalTransitions';
          ARG_STACK = 'stack';
          ARG_VNODE = 'vnode';
          ARG_CHILDREN = 'children';
          ARG_COMPONENTS = 'components';
          ARG_SCOPE = MAGIC_VAR_SCOPE;
          ARG_KEYPATH = MAGIC_VAR_KEYPATH;
          ARG_LENGTH = MAGIC_VAR_LENGTH;
          ARG_EVENT = MAGIC_VAR_EVENT;
          ARG_DATA = MAGIC_VAR_DATA;
      }
      isUglify = PUBLIC_CONFIG.uglifyCompiled;
  }
  var CommentVNode = function(text) {
      this.text = text;
  };
  CommentVNode.prototype.toString = function (tabSize) {
      return toMap({
          type: toPrimitive(VNODE_TYPE_COMMENT),
          isPure: toPrimitive(TRUE$1),
          operator: OPERATOR_COMMENT_VNODE,
          text: this.text,
      }).toString(tabSize);
  };
  var TextVNode = function(text) {
      this.buffer = toStringBuffer();
      this.append(text);
  };
  TextVNode.prototype.append = function (text) {
      this.buffer.append(text);
  };
  TextVNode.prototype.toString = function (tabSize) {
      return toMap({
          type: toPrimitive(VNODE_TYPE_TEXT),
          isPure: toPrimitive(TRUE$1),
          operator: OPERATOR_TEXT_VNODE,
          text: this.buffer,
      }).toString(tabSize);
  };
  function replaceMagicVariable(name) {
      if (has$2(magicVariables, name)) {
          switch (name) {
              case MAGIC_VAR_KEYPATH:
                  return ARG_KEYPATH;
              case MAGIC_VAR_LENGTH:
                  return ARG_LENGTH;
              case MAGIC_VAR_EVENT:
                  return ARG_EVENT;
              case MAGIC_VAR_DATA:
                  return ARG_DATA;
              default:
                  return name;
          }
      }
  }
  function transformExpressionIdentifier(node) {
      var name = node.name;
      var root = node.root;
      var lookup = node.lookup;
      var offset = node.offset;
      var literals = node.literals;
      if (literals) {
          var variable = replaceMagicVariable(literals[0]);
          if (isDef(variable)) {
              var result = copy(literals);
              result[0] = variable;
              return join$1(result, RAW_DOT);
          }
      }
      else {
          var variable$1 = replaceMagicVariable(name);
          if (isDef(variable$1)) {
              return variable$1;
          }
      }
      // this 仅在 each 中有意义
      // 这里把 this 转成 $scope，方便直接读取
      // 避免不必要的查找，提升性能
      if (last(eachStack)
          && root === FALSE$1
          && lookup === FALSE$1
          && offset === 0) {
          if (name === EMPTY_STRING) {
              return ARG_SCOPE;
          }
          return toMember(ARG_SCOPE, parse(name));
      }
  }
  function generateHolderIfNeeded(node, holder) {
      return holder
          ? node
          : toMember(node, [
              toPrimitive('value')
          ]);
  }
  function generateExpressionIdentifier(node, nodes, keypath, holder, stack, parentNode) {
      var root = node.root;
      var lookup = node.lookup;
      var offset = node.offset;
      var length = nodes.length;
      var getIndex;
      if (root) {
          getIndex = addVar(toAnonymousFunction(UNDEFINED$1, UNDEFINED$1, toPrimitive(0)), TRUE$1);
      }
      else if (offset) {
          getIndex = addVar(toAnonymousFunction([
              ARG_STACK
          ], UNDEFINED$1, toBinary(toMember(ARG_STACK, [
              toPrimitive(RAW_LENGTH)
          ]), '-', toPrimitive(1 + offset))), TRUE$1);
      }
      else {
          getIndex = addVar(toAnonymousFunction([
              ARG_STACK
          ], UNDEFINED$1, toBinary(toMember(ARG_STACK, [
              toPrimitive(RAW_LENGTH)
          ]), '-', toPrimitive(1))), TRUE$1);
      }
      var filter = toPrimitive(UNDEFINED$1);
      // 函数调用
      if (parentNode
          && parentNode.type === CALL
          // 调用过滤器肯定无需指定路径
          && lookup
          // 过滤器名称是简单的标识符，可支持多级属性，如 lodash.toUpper
          && keypath
          && length > 0) {
          if (length > 1) {
              filter = toMember(ARG_GLOBAL_FILTERS, nodes);
          }
          else {
              filter = generateSelfAndGlobalReader(ARG_FILTERS, ARG_GLOBAL_FILTERS, keypath);
          }
      }
      var result = toCall(LOOKUP_KEYPATH, [
          getIndex,
          string$1(keypath)
              ? toPrimitive(keypath)
              : length === 1
                  ? nodes[0]
                  : toList(nodes, RAW_DOT),
          lookup
              ? toPrimitive(TRUE$1)
              : toPrimitive(UNDEFINED$1),
          stack
              ? ARG_STACK
              : toPrimitive(UNDEFINED$1),
          filter
      ]);
      // 如果是读取一级属性的场景，比如 this.x，这里可以优化成 scope.x
      // 如果是读取多级属性的场景，比如 this.x.y，这里不做优化，因为 x 可能为空，导致整个表达式报错
      // 处理一级属性
      if (keypath && length === 1) {
          // this.name
          if (!root && !offset && !lookup) {
              result = toCall(GET_PROP, [
                  toPrimitive(keypath),
                  toMember(ARG_SCOPE, nodes),
                  stack
                      ? ARG_STACK
                      : toPrimitive(UNDEFINED$1)
              ]);
          }
          // 未指定路径，如 name
          else if (!root && !offset) {
              result = toCall(LOOKUP_PROP, [
                  toPrimitive(keypath),
                  toMember(ARG_SCOPE, nodes),
                  stack
                      ? ARG_STACK
                      : toPrimitive(UNDEFINED$1),
                  filter
              ]);
          }
          // 指定了路径，如 ~/name 或 ../name
          else {
              result = toCall(GET_PROP_BY_INDEX, [
                  getIndex,
                  toPrimitive(keypath),
                  stack
                      ? ARG_STACK
                      : toPrimitive(UNDEFINED$1)
              ]);
          }
      }
      // 处理属性为空串，如 this、../this、~/this 之类的
      else if (!keypath && !length) {
          // this
          if (!root && !offset && !lookup) {
              result = toCall(GET_THIS, [
                  ARG_SCOPE,
                  stack
                      ? ARG_STACK
                      : toPrimitive(UNDEFINED$1)
              ]);
          }
          // 指定了路径，如 ~/name 或 ../name
          else if (root || offset) {
              result = toCall(GET_THIS_BY_INDEX, [
                  getIndex,
                  stack
                      ? ARG_STACK
                      : toPrimitive(UNDEFINED$1)
              ]);
          }
      }
      return generateHolderIfNeeded(result, holder);
  }
  function generateExpressionValue(value, keys, keypath, holder) {
      var result;
      switch (keys.length) {
          case 0:
              result = toCall(SET_HOLDER, [
                  value ]);
              break;
          case 1:
              result = toCall(SET_HOLDER, [
                  toMember(value, keys)
              ]);
              break;
          default:
              result = toCall(READ_KEYPATH, [
                  value,
                  keypath
                      ? toPrimitive(keypath)
                      : toList(keys, RAW_DOT)
              ]);
              break;
      }
      return generateHolderIfNeeded(result, holder);
  }
  function generateExpressionCall(fn, args, holder) {
      return generateHolderIfNeeded(toCall(SET_HOLDER, [
          toCall(EXECUTE_FUNCTION, [
              fn,
              ARG_INSTANCE,
              args
                  ? toList(args)
                  : toPrimitive(UNDEFINED$1)
          ])
      ]), holder);
  }
  function generateExpression(expr) {
      return generate$1(expr, transformExpressionIdentifier, generateExpressionIdentifier, generateExpressionValue, generateExpressionCall);
  }
  function generateExpressionHolder(expr) {
      return generate$1(expr, transformExpressionIdentifier, generateExpressionIdentifier, generateExpressionValue, generateExpressionCall, TRUE$1);
  }
  function generateExpressionArg(expr) {
      return generate$1(expr, transformExpressionIdentifier, generateExpressionIdentifier, generateExpressionValue, generateExpressionCall, FALSE$1, TRUE$1);
  }
  function createAttributeValue(nodes) {
      var attributeValue = toStringBuffer();
      push(attributeValueStack, attributeValue);
      each$2(nodes, function (node) {
          nodeGenerator[node.type](node);
      });
      pop(attributeValueStack);
      return attributeValue;
  }
  function generateAttributeValue(attr) {
      if (isDef(attr.value)) {
          return toPrimitive(attr.value);
      }
      // 只有一个表达式时，保持原始类型
      if (attr.expr) {
          return generateExpression(attr.expr);
      }
      // 多个值拼接时，要求是字符串
      if (attr.children) {
          // 常见的应用场景是序列化 HTML 元素属性值，处理值时要求字符串，在处理属性名这个级别，不要求字符串
          // compiler 会把原始字符串编译成 value
          // compiler 会把单个插值编译成 expr
          // 因此走到这里，一定是多个插值或是单个特殊插值（比如 If)
          return createAttributeValue(attr.children);
      }
      return toPrimitive(UNDEFINED$1);
  }
  function mapNodes(nodes) {
      currentTextVNode = UNDEFINED$1;
      var result = [];
      each$2(nodes, function (node) {
          var item = nodeGenerator[node.type](node);
          if (item instanceof Primitive
              && item.value === UNDEFINED$1) {
              return;
          }
          push(result, item);
      });
      currentTextVNode = UNDEFINED$1;
      return result;
  }
  function generateNodesToTuple(nodes) {
      return toTuple(EMPTY_STRING, EMPTY_STRING, ';', TRUE$1, 0, mapNodes(nodes));
  }
  function generateNodesToList(nodes) {
      return toList(mapNodes(nodes));
  }
  function generateStatementIfNeeded(nodes) {
      return nodes.length === 1
          ? nodes[0]
          : toStatement(nodes, TRUE$1);
  }
  function appendDynamicChildVNode(vnode) {
      currentTextVNode = vnode instanceof TextVNode
          ? vnode
          : UNDEFINED$1;
      return toPush(ARG_CHILDREN, vnode);
  }
  function appendComponentVNode(vnode) {
      return toPush(ARG_COMPONENTS, vnode);
  }
  function generateSelfAndGlobalReader(self, global, name) {
      return toBinary(toBinary(self, '&&', toMember(self, [
          toPrimitive(name)
      ])), '||', toMember(global, [
          toPrimitive(name)
      ]));
  }
  function generateVNode(vnode) {
      return last(dynamicChildrenStack)
          ? appendDynamicChildVNode(vnode)
          : vnode;
  }
  function generateCommentVNode() {
      return generateVNode(new CommentVNode(toPrimitive(EMPTY_STRING)));
  }
  function generateTextVNode(text) {
      if (currentTextVNode) {
          currentTextVNode.append(text);
          return toPrimitive(UNDEFINED$1);
      }
      return generateVNode(new TextVNode(text));
  }
  function generateComponentSlots(children) {
      var result = toMap(), slots = {}, addSlot = function (name, nodes) {
          if (!falsy$2(nodes)) {
              name = SLOT_DATA_PREFIX + name;
              push(slots[name] || (slots[name] = []), nodes);
          }
      };
      each$2(children, function (child) {
          // 找到具名 slot
          if (child.type === ELEMENT) {
              var element = child;
              if (element.slot) {
                  addSlot(element.slot, element.tag === TAG_TEMPLATE
                      ? element.children
                      : [element]);
                  return;
              }
          }
          // 匿名 slot，名称统一为 children
          // 这个步骤不能放在 compiler，因为除了 element，还会有其他节点，比如文本节点
          addSlot(SLOT_NAME_DEFAULT, [child]);
      });
      each(slots, function (children, name) {
          result.set(name, toAnonymousFunction([
              ARG_CHILDREN,
              ARG_COMPONENTS
          ], generateNodesToTuple(children)));
      });
      if (result.isNotEmpty()) {
          return result;
      }
  }
  function parseAttrs(attrs, isComponent) {
      var nativeAttributeList = [], nativePropertyList = [], propertyList = [], style = UNDEFINED$1, lazyList = [], transition = UNDEFINED$1, model = UNDEFINED$1, 
      // 最后收集事件指令、自定义指令、动态属性
      eventList = [], customDirectiveList = [], otherList = [];
      for (var i = 0, len = attrs.length; i < len; i++) {
          var attr = attrs[i];
          if (attr.type === ATTRIBUTE) {
              var attributeNode = attr;
              if (isComponent) {
                  push(propertyList, attributeNode);
              }
              else {
                  push(nativeAttributeList, attributeNode);
              }
          }
          else if (attr.type === PROPERTY) {
              push(nativePropertyList, attr);
          }
          else if (attr.type === STYLE) {
              style = attr;
          }
          else if (attr.type === DIRECTIVE) {
              var directiveNode = attr;
              switch (directiveNode.ns) {
                  case DIRECTIVE_LAZY:
                      push(lazyList, directiveNode);
                      break;
                  case DIRECTIVE_TRANSITION:
                      transition = directiveNode;
                      break;
                  case DIRECTIVE_MODEL:
                      model = directiveNode;
                      break;
                  case DIRECTIVE_EVENT:
                      push(eventList, directiveNode);
                      break;
                  default:
                      push(customDirectiveList, directiveNode);
              }
          }
          else {
              push(otherList, attr);
          }
      }
      return {
          nativeAttributeList: nativeAttributeList,
          nativePropertyList: nativePropertyList,
          propertyList: propertyList,
          style: style,
          lazyList: lazyList,
          transition: transition,
          model: model,
          eventList: eventList,
          customDirectiveList: customDirectiveList,
          otherList: otherList,
      };
  }
  function sortAttrs(attrs, isComponent) {
      var ref = parseAttrs(attrs, isComponent);
      var nativeAttributeList = ref.nativeAttributeList;
      var nativePropertyList = ref.nativePropertyList;
      var propertyList = ref.propertyList;
      var style = ref.style;
      var lazyList = ref.lazyList;
      var transition = ref.transition;
      var model = ref.model;
      var eventList = ref.eventList;
      var customDirectiveList = ref.customDirectiveList;
      var otherList = ref.otherList;
      var result = [];
      push(result, nativeAttributeList);
      push(result, nativePropertyList);
      push(result, propertyList);
      if (style) {
          push(result, style);
      }
      push(result, lazyList);
      if (transition) {
          push(result, transition);
      }
      if (model) {
          push(result, model);
      }
      push(result, eventList);
      push(result, customDirectiveList);
      push(result, otherList);
      return result;
  }
  function parseChildren(children, forceDynamic) {
      var dynamicChildren = UNDEFINED$1, staticChildren = UNDEFINED$1, isDynamic = forceDynamic || FALSE$1;
      if (!isDynamic) {
          each$2(children, function (node) {
              if (!node.isStatic) {
                  isDynamic = TRUE$1;
                  return FALSE$1;
              }
          });
      }
      push(dynamicChildrenStack, isDynamic);
      if (isDynamic) {
          dynamicChildren = toAnonymousFunction([
              ARG_CHILDREN
          ], generateNodesToTuple(children), ARG_CHILDREN);
      }
      else {
          staticChildren = generateNodesToList(children);
      }
      pop(dynamicChildrenStack);
      return {
          dynamicChildren: dynamicChildren,
          staticChildren: staticChildren,
      };
  }
  nodeGenerator[ELEMENT] = function (node) {
      var tag = node.tag;
      var dynamicTag = node.dynamicTag;
      var isComponent = node.isComponent;
      var to = node.to;
      var ref = node.ref;
      var key = node.key;
      var html = node.html;
      var text = node.text;
      var attrs = node.attrs;
      var children = node.children;
      var vnodeType = isComponent
          ? VNODE_TYPE_COMPONENT
          : (specialTag2VNodeType[tag] || VNODE_TYPE_ELEMENT), vnode = toMap({
          context: ARG_INSTANCE,
          type: toPrimitive(vnodeType),
          tag: dynamicTag
              ? generateExpression(dynamicTag)
              : toPrimitive(tag)
      }), isFragment = vnodeType === VNODE_TYPE_FRAGMENT, isPortal = vnodeType === VNODE_TYPE_PORTAL, isSlot = vnodeType === VNODE_TYPE_SLOT, outputAttrs = UNDEFINED$1, outputChildren = UNDEFINED$1, outputSlots = UNDEFINED$1;
      // 先序列化 children，再序列化 attrs，原因需要举两个例子：
      // 例子1：
      // <div on-click="output(this)"></div> 如果 this 序列化成 $scope，如果外部修改了 this，因为模板没有计入此依赖，不会刷新，因此 item 是旧的
      // 这个例子要求即使是动态执行的代码，也不能简单的直接序列化成 $scope
      // 例子2：
      // <div on-click="output(this)">{{this}}</div>，如果第一个 this 转成 $scope，第二个正常读取数据，这样肯定没问题
      // 但问题是，你不知道有没有第二个 this，因此这里反过来，先序列化非动态部分，即 children，再序列化可能动态的部分，即 attrs
      // 这样序列化动态部分的时候，就知道是否可以转成 $scope
      // 后来发现，即使这样实现也不行，因为模板里存在各种可能的 if 或三元运算，导致依赖的捕捉充满不确定，因此这里我们不再考虑把 this 转成 $scope
      push(vnodeStack, TRUE$1);
      push(attributeStack, FALSE$1);
      push(componentStack, isComponent);
      if (children) {
          if (isSlot) {
              outputChildren = toStatement(mapNodes(children), TRUE$1);
          }
          else if (isComponent) {
              outputSlots = generateComponentSlots(children);
          }
          else {
              var ref$1 = parseChildren(children);
              var dynamicChildren = ref$1.dynamicChildren;
              var staticChildren = ref$1.staticChildren;
              if (dynamicChildren) {
                  outputChildren = dynamicChildren;
              }
              else if (staticChildren) {
                  vnode.set(FIELD_CHILDREN, staticChildren);
              }
          }
      }
      // 开始序列化 attrs，原则也是先序列化非动态部分，再序列化动态部分，即指令留在最后序列化
      vnodeStack[vnodeStack.length - 1] = FALSE$1;
      attributeStack[attributeStack.length - 1] = TRUE$1;
      // 在 vnodeStack 为 false 时取值
      if (to) {
          vnode.set('to', generateAttributeValue(to));
      }
      if (ref) {
          vnode.set('ref', generateAttributeValue(ref));
      }
      if (key) {
          vnode.set('key', generateAttributeValue(key));
      }
      if (html) {
          vnode.set('html', string$1(html)
              ? toPrimitive(html)
              : toCall(TO_STRING, [
                  generateExpression(html)
              ]));
      }
      if (text) {
          vnode.set('text', string$1(text)
              ? toPrimitive(text)
              : toCall(TO_STRING, [
                  generateExpression(text)
              ]));
      }
      if (attrs) {
          var ref$2 = parseAttrs(attrs, isComponent);
          var nativeAttributeList = ref$2.nativeAttributeList;
          var nativePropertyList = ref$2.nativePropertyList;
          var propertyList = ref$2.propertyList;
          var style = ref$2.style;
          var lazyList = ref$2.lazyList;
          var transition = ref$2.transition;
          var model = ref$2.model;
          var eventList = ref$2.eventList;
          var customDirectiveList = ref$2.customDirectiveList;
          var otherList = ref$2.otherList;
          var hasDynamicAttrs = otherList.length > 0;
          if (nativeAttributeList.length) {
              var nativeAttributes = toMap(), isDynamic = hasDynamicAttrs;
              each$2(nativeAttributeList, function (node) {
                  if (!node.isStatic) {
                      isDynamic = TRUE$1;
                  }
                  nativeAttributes.set(node.name, generateAttributeValue(node));
              });
              vnode.set(FIELD_NATIVE_ATTRIBUTES, isDynamic
                  ? nativeAttributes
                  : addVar(nativeAttributes, TRUE$1));
          }
          if (nativePropertyList.length) {
              var nativeProperties = toMap(), isDynamic$1 = hasDynamicAttrs;
              each$2(nativePropertyList, function (node) {
                  if (!node.isStatic) {
                      isDynamic$1 = TRUE$1;
                  }
                  nativeProperties.set(node.name, generateAttributeValue(node));
              });
              vnode.set(FIELD_NATIVE_PROPERTIES, isDynamic$1
                  ? nativeProperties
                  : addVar(nativeProperties, TRUE$1));
          }
          if (propertyList.length) {
              var properties = toMap();
              each$2(propertyList, function (node) {
                  properties.set(node.name, generateAttributeValue(node));
              });
              vnode.set(FIELD_PROPERTIES, properties);
          }
          if (style) {
              vnode.set(FIELD_NATIVE_STYLES, getStyleValue(style));
          }
          if (lazyList.length) {
              var lazy = toMap();
              each$2(lazyList, function (node) {
                  lazy.set(node.name, getLazyValue(node));
              });
              vnode.set(FIELD_LAZY, lazy);
          }
          if (transition) {
              vnode.set(FIELD_TRANSITION, getTransitionValue(transition));
          }
          if (model) {
              vnode.set(FIELD_MODEL, getModelValue(model));
          }
          if (eventList.length) {
              var events = toMap();
              each$2(eventList, function (node) {
                  var info = getEventInfo(node);
                  events.set(getDirectiveKey(node), toCall(info.name, info.args));
              });
              vnode.set(FIELD_EVENTS, events);
          }
          if (customDirectiveList.length) {
              var directives = toMap();
              each$2(customDirectiveList, function (node) {
                  directives.set(getDirectiveKey(node), toCall(RENDER_DIRECTIVE, getDirectiveArgs(node)));
              });
              vnode.set(FIELD_DIRECTIVES, directives);
          }
          if (otherList.length) {
              outputAttrs = toAnonymousFunction([
                  ARG_VNODE
              ], generateNodesToTuple(otherList), ARG_VNODE);
          }
      }
      pop(vnodeStack);
      pop(attributeStack);
      pop(componentStack);
      if (vnodeType === VNODE_TYPE_ELEMENT) {
          vnode.set('operator', OPERATOR_ELEMENT_VNODE);
      }
      else if (isFragment) {
          vnode.set('isFragment', toPrimitive(TRUE$1));
          vnode.set('operator', OPERATOR_FRAGMENT_VNODE);
      }
      else if (isPortal) {
          vnode.set('operator', OPERATOR_PORTAL_VNODE);
      }
      else if (isComponent) {
          vnode.set('isComponent', toPrimitive(TRUE$1));
          vnode.set('operator', OPERATOR_COMPONENT_VNODE);
      }
      else if (isSlot) {
          vnode.set('isSlot', toPrimitive(TRUE$1));
          vnode.set('operator', OPERATOR_SLOT_VNODE);
          var nameAttr = node.name, argName = toPrimitive(SLOT_DATA_PREFIX + SLOT_NAME_DEFAULT);
          if (nameAttr) {
              // 如果 name 是字面量，直接拼出结果
              argName = isDef(nameAttr.value)
                  ? toPrimitive(SLOT_DATA_PREFIX + nameAttr.value)
                  : toBinary(toPrimitive(SLOT_DATA_PREFIX), '+', generateAttributeValue(nameAttr));
          }
          var renderSlot = toCall(RENDER_SLOT_CHILDREN, [
              argName,
              ARG_CHILDREN
          ]);
          outputChildren = toAnonymousFunction([
              ARG_CHILDREN
          ], outputChildren
              ? toBinary(renderSlot, '||', outputChildren)
              : renderSlot, ARG_CHILDREN);
      }
      if (node.isOption) {
          vnode.set('isOption', toPrimitive(TRUE$1));
      }
      if (node.isStyle) {
          vnode.set('isStyle', toPrimitive(TRUE$1));
      }
      if (node.isSvg) {
          vnode.set('isSvg', toPrimitive(TRUE$1));
      }
      if (node.isStatic) {
          vnode.set('isStatic', toPrimitive(TRUE$1));
          vnode.set('isPure', toPrimitive(TRUE$1));
      }
      if (outputChildren) {
          vnode.set(FIELD_CHILDREN, toCall(outputChildren, [
              toList()
          ]));
      }
      if (outputSlots) {
          vnode.set(FIELD_SLOTS, toCall(RENDER_SLOTS, [
              outputSlots
          ]));
      }
      var list = [], result = outputAttrs
          ? toCall(outputAttrs, [
              vnode ])
          : vnode;
      if (isFragment || isPortal || isSlot) {
          push(list, toCall(RENDER_COMPOSE_VNODE, [
              result,
              ARG_CHILDREN ]));
          return generateStatementIfNeeded(list);
      }
      push(list, result);
      return generateVNode(isComponent
          ? appendComponentVNode(generateStatementIfNeeded(list))
          : generateStatementIfNeeded(list));
  };
  nodeGenerator[ATTRIBUTE] = function (node) {
      return toCall(APPEND_ATTRIBUTE, [
          ARG_VNODE,
          toPrimitive(last(componentStack)
              ? FIELD_PROPERTIES
              : FIELD_NATIVE_ATTRIBUTES),
          generateAttributeValue(node),
          toPrimitive(node.name) ]);
  };
  nodeGenerator[PROPERTY] = function (node) {
      return toCall(APPEND_ATTRIBUTE, [
          ARG_VNODE,
          toPrimitive(FIELD_NATIVE_PROPERTIES),
          generateAttributeValue(node),
          toPrimitive(node.name) ]);
  };
  nodeGenerator[STYLE] = function (node) {
      return toAssign(toMember(ARG_VNODE, [
          toPrimitive(FIELD_NATIVE_STYLES)
      ]), getStyleValue(node));
  };
  function getStyleValue(node) {
      if (isDef(node.value)) {
          var styles = toMap();
          parseStyleString(node.value, function (key, value) {
              styles.set(key, toPrimitive(value));
          });
          return styles;
      }
      if (node.expr) {
          if (node.expr.type === OBJECT) {
              return generateExpression(node.expr);
          }
          return toCall(RENDER_STYLE_EXPR, [
              generateExpression(node.expr)
          ]);
      }
      // 多值拼接，compiler 保证了 children 必然有值
      return toCall(RENDER_STYLE_STRING, [
          createAttributeValue(node.children)
      ]);
  }
  function getLazyValue(node) {
      return toPrimitive(node.value);
  }
  function getTransitionValue(node) {
      return toCall(RENDER_TRANSITION, [
          toPrimitive(node.value),
          generateSelfAndGlobalReader(ARG_TRANSITIONS, ARG_GLOBAL_TRANSITIONS, node.value)
      ]);
  }
  function getModelValue(node) {
      return toCall(RENDER_MODEL, [
          generateExpressionHolder(node.expr)
      ]);
  }
  function addEventBooleanInfo(args, node) {
      // isComponent
      push(args, toPrimitive(UNDEFINED$1));
      // isNative
      push(args, toPrimitive(UNDEFINED$1));
      if (last(componentStack)) {
          if (node.modifier === MODIFER_NATIVE) {
              // isNative
              args[args.length - 1] = toPrimitive(TRUE$1);
          }
          else {
              // isComponent
              args[args.length - 2] = toPrimitive(TRUE$1);
          }
      }
  }
  function getEventInfo(node) {
      var args = [];
      // key
      push(args, toPrimitive(getDirectiveKey(node)));
      // value
      push(args, toPrimitive(node.value));
      // from
      push(args, toPrimitive(node.name));
      // fromNs
      push(args, 
      // 组件事件要用 component.on(type, options) 进行监听
      // 为了保证 options.ns 是字符串类型，这里需确保 fromNs 是字符串
      toPrimitive(node.modifier || EMPTY_STRING));
      // 事件的 expr 必须是表达式
      var expr = node.expr;
      var raw = expr.raw;
      if (expr.type === CALL) {
          var callNode = expr;
          // compiler 保证了函数调用的 name 是标识符
          // method
          push(args, toMember(ARG_INSTANCE, [
              toPrimitive(callNode.name.name)
          ]));
          // 为了实现运行时动态收集参数，这里序列化成函数
          if (!falsy$2(callNode.args)) {
              // runtime
              push(args, toMap({
                  args: toAnonymousFunction([
                      ARG_STACK,
                      ARG_EVENT,
                      ARG_DATA ], UNDEFINED$1, toList(callNode.args.map(generateExpressionArg)))
              }));
          }
          else {
              // runtime
              push(args, toPrimitive(UNDEFINED$1));
          }
          addEventBooleanInfo(args, node);
          return {
              name: RENDER_EVENT_METHOD,
              args: args,
          };
      }
      var parts = raw.split(RAW_DOT);
      // to
      push(args, toPrimitive(parts[0]));
      // toNs
      push(args, toPrimitive(parts[1]));
      addEventBooleanInfo(args, node);
      return {
          name: RENDER_EVENT_NAME,
          args: args,
      };
  }
  function getDirectiveKey(node) {
      return join(node.name, node.modifier || EMPTY_STRING);
  }
  function getDirectiveArgs(node) {
      var args = [];
      // key
      push(args, toPrimitive(getDirectiveKey(node)));
      // name
      push(args, toPrimitive(node.name));
      // modifier
      push(args, toPrimitive(node.modifier));
      // value
      push(args, toPrimitive(node.value));
      // hooks
      push(args, generateSelfAndGlobalReader(ARG_DIRECTIVES, ARG_GLOBAL_DIRECTIVES, node.name));
      // 尽可能把表达式编译成函数，这样对外界最友好
      //
      // 众所周知，事件指令会编译成函数，对于自定义指令来说，也要尽可能编译成函数
      //
      // 比如 o-tap="method()" 或 o-log="{'id': '11'}"
      // 前者会编译成 handler（调用方法），后者会编译成 getter（取值）
      var expr = node.expr;
      if (expr) {
          // 如果表达式明确是在调用方法，则序列化成 method + args 的形式
          if (expr.type === CALL) {
              var callNode = expr;
              // 为了实现运行时动态收集参数，这里序列化成函数
              if (!falsy$2(callNode.args)) {
                  // runtime
                  push(args, toMap({
                      args: toAnonymousFunction([
                          ARG_STACK ], UNDEFINED$1, toList(callNode.args.map(generateExpressionArg)))
                  }));
              }
              else {
                  // runtime
                  push(args, toPrimitive(UNDEFINED$1));
              }
              // compiler 保证了函数调用的 name 是标识符
              // method
              push(args, toMember(ARG_INSTANCE, [
                  toPrimitive(callNode.name.name)
              ]));
          }
          else {
              // 取值函数
              // getter 函数在触发事件时调用，调用时会传入它的作用域，因此这里要加一个参数
              if (expr.type !== LITERAL) {
                  // runtime
                  push(args, toMap({
                      expr: toAnonymousFunction([
                          ARG_STACK
                      ], UNDEFINED$1, generateExpressionArg(expr))
                  }));
              }
          }
      }
      return args;
  }
  nodeGenerator[DIRECTIVE] = function (node) {
      switch (node.ns) {
          case DIRECTIVE_LAZY:
              return toCall(APPEND_ATTRIBUTE, [
                  ARG_VNODE,
                  toPrimitive(FIELD_LAZY),
                  getLazyValue(node),
                  toPrimitive(node.name) ]);
          // <div transition="name">
          case DIRECTIVE_TRANSITION:
              return toCall(APPEND_ATTRIBUTE, [
                  ARG_VNODE,
                  toPrimitive(FIELD_TRANSITION),
                  getTransitionValue(node) ]);
          // <input model="id">
          case DIRECTIVE_MODEL:
              return toCall(APPEND_ATTRIBUTE, [
                  ARG_VNODE,
                  toPrimitive(FIELD_MODEL),
                  getModelValue(node) ]);
          // <div on-click="name">
          case DIRECTIVE_EVENT:
              var info = getEventInfo(node);
              return toCall(APPEND_ATTRIBUTE, [
                  ARG_VNODE,
                  toPrimitive(FIELD_EVENTS),
                  toCall(info.name, info.args),
                  toPrimitive(getDirectiveKey(node)) ]);
          default:
              return toCall(APPEND_ATTRIBUTE, [
                  ARG_VNODE,
                  toPrimitive(FIELD_DIRECTIVES),
                  toCall(RENDER_DIRECTIVE, getDirectiveArgs(node)),
                  toPrimitive(getDirectiveKey(node)) ]);
      }
  };
  nodeGenerator[SPREAD] = function (node) {
      return toCall(RENDER_SPREAD, [
          ARG_VNODE,
          toPrimitive(FIELD_PROPERTIES),
          generateExpression(node.expr)
      ]);
  };
  nodeGenerator[TEXT] = function (node) {
      var text = toPrimitive(node.text);
      if (last(vnodeStack)) {
          return generateTextVNode(text);
      }
      var attributeValue = last(attributeValueStack);
      if (attributeValue) {
          attributeValue.append(text);
          return toPrimitive(UNDEFINED$1);
      }
      return text;
  };
  nodeGenerator[EXPRESSION] = function (node) {
      var value = generateExpression(node.expr);
      if (last(vnodeStack)) {
          return generateTextVNode(toCall(TO_STRING, [
              value
          ]));
      }
      var attributeValue = last(attributeValueStack);
      if (attributeValue) {
          attributeValue.append(toCall(TO_STRING, [
              value
          ]));
          return toPrimitive(UNDEFINED$1);
      }
      return value;
  };
  function getBranchDefaultValue() {
      return last(vnodeStack)
          ? generateCommentVNode()
          : last(attributeValueStack)
              ? toPrimitive(EMPTY_STRING)
              : toPrimitive(UNDEFINED$1);
  }
  function getBranchValue(children) {
      if (children) {
          if (last(attributeStack)) {
              children = sortAttrs(children, last(componentStack));
          }
          if (last(attributeValueStack)) {
              return createAttributeValue(children);
          }
          return generateStatementIfNeeded(mapNodes(children));
      }
  }
  nodeGenerator[IF] = function (node) {
      var next = node.next;
      var attributeValue = last(attributeValueStack), defaultValue = getBranchDefaultValue(), result = toTernary(generateExpression(node.expr), getBranchValue(node.children) || defaultValue, next
          ? nodeGenerator[next.type](next)
          : defaultValue);
      if (attributeValue) {
          attributeValue.append(result);
          return toPrimitive(UNDEFINED$1);
      }
      return result;
  };
  nodeGenerator[ELSE_IF] = function (node) {
      var next = node.next;
      var defaultValue = getBranchDefaultValue();
      return toTernary(generateExpression(node.expr), getBranchValue(node.children) || defaultValue, next
          ? nodeGenerator[next.type](next)
          : defaultValue);
  };
  nodeGenerator[ELSE] = function (node) {
      return getBranchValue(node.children) || getBranchDefaultValue();
  };
  nodeGenerator[EACH] = function (node) {
      var index = node.index;
      var from = node.from;
      var to = node.to;
      var equal = node.equal;
      var next = node.next;
      var isSpecial = to || from.type === ARRAY || from.type === OBJECT;
      var args = [
          ARG_SCOPE,
          ARG_KEYPATH,
          ARG_LENGTH ];
      if (index) {
          push(args, index);
          push(magicVariables, index);
      }
      // 如果是特殊的 each，包括 遍历 range 和 遍历数组字面量和对象字面量
      // 在这种 each 中引用 this 无需追踪依赖，因此可直接认为 this 已用过，这样生成代码时，会直接引用局部变量，提高执行效率
      push(eachStack, isSpecial);
      // compiler 保证了 children 一定有值
      var renderChildren = toAnonymousFunction(args, generateNodesToTuple(node.children));
      if (index) {
          pop(magicVariables);
      }
      pop(eachStack);
      // compiler 保证了 children 一定有值
      var renderElse = next
          ? toAnonymousFunction(UNDEFINED$1, generateNodesToTuple(next.children))
          : toPrimitive(UNDEFINED$1);
      // 遍历区间
      if (to) {
          return toCall(RENDER_RANGE, [
              generateExpression(from),
              generateExpression(to),
              toPrimitive(equal),
              renderChildren,
              renderElse ]);
      }
      // 遍历数组和对象
      return toCall(RENDER_EACH, [
          generateExpressionHolder(from),
          renderChildren,
          renderElse ]);
  };
  nodeGenerator[PARTIAL] = function (node) {
      return toAssign(toMember(ARG_LOCAL_PARTIALS, [
          toPrimitive(node.name)
      ]), toAnonymousFunction([
          ARG_SCOPE,
          ARG_KEYPATH,
          ARG_CHILDREN,
          ARG_COMPONENTS ], generateNodesToTuple(node.children)));
  };
  nodeGenerator[IMPORT] = function (node) {
      var name = node.name;
      return toCall(RENDER_PARTIAL, [
          toPrimitive(name),
          ARG_SCOPE,
          ARG_KEYPATH,
          ARG_CHILDREN,
          ARG_COMPONENTS,
          toMember(ARG_LOCAL_PARTIALS, [
              toPrimitive(name)
          ]),
          generateSelfAndGlobalReader(ARG_PARTIALS, ARG_GLOBAL_PARTIALS, name)
      ]);
  };
  function generate(node) {
      init();
      init$1();
      return generate$2([
          RENDER_COMPOSE_VNODE,
          APPEND_ATTRIBUTE,
          RENDER_STYLE_STRING,
          RENDER_STYLE_EXPR,
          RENDER_TRANSITION,
          RENDER_MODEL,
          RENDER_EVENT_METHOD,
          RENDER_EVENT_NAME,
          RENDER_DIRECTIVE,
          RENDER_SPREAD,
          RENDER_SLOTS,
          RENDER_SLOT_CHILDREN,
          RENDER_PARTIAL,
          RENDER_EACH,
          RENDER_RANGE,
          LOOKUP_KEYPATH,
          LOOKUP_PROP,
          GET_THIS,
          GET_THIS_BY_INDEX,
          GET_PROP,
          GET_PROP_BY_INDEX,
          READ_KEYPATH,
          EXECUTE_FUNCTION,
          SET_HOLDER,
          TO_STRING,
          OPERATOR_TEXT_VNODE,
          OPERATOR_COMMENT_VNODE,
          OPERATOR_ELEMENT_VNODE,
          OPERATOR_COMPONENT_VNODE,
          OPERATOR_FRAGMENT_VNODE,
          OPERATOR_PORTAL_VNODE,
          OPERATOR_SLOT_VNODE,
          ARG_INSTANCE,
          ARG_FILTERS,
          ARG_GLOBAL_FILTERS,
          ARG_LOCAL_PARTIALS,
          ARG_PARTIALS,
          ARG_GLOBAL_PARTIALS,
          ARG_DIRECTIVES,
          ARG_GLOBAL_DIRECTIVES,
          ARG_TRANSITIONS,
          ARG_GLOBAL_TRANSITIONS,
          ARG_SCOPE,
          ARG_KEYPATH,
          ARG_CHILDREN,
          ARG_COMPONENTS ], nodeGenerator[node.type](node));
  }

  function render(instance, template, dependencies, data, computed, filters, globalFilters, partials, globalPartials, directives, globalDirectives, transitions, globalTransitions) {
      var rootScope = merge(data, computed), rootKeypath = EMPTY_STRING, contextStack = [
          { scope: rootScope, keypath: rootKeypath }
      ], localPartials = {}, 
      // 模板渲染过程收集的 vnode
      children = [], 
      // 模板渲染过程收集的组件
      components = [], renderComposeVNode = function (vnode, children) {
          if (vnode.children.length) {
              children[children.length] = vnode;
          }
      }, appendAttribute = function (vnode, key, value, name) {
          if (name) {
              if (vnode[key]) {
                  vnode[key][name] = value;
              }
              else {
                  var map = {};
                  map[name] = value;
                  vnode[key] = map;
              }
          }
          else {
              vnode[key] = value;
          }
      }, renderStyleString = function (value) {
          var styles = {};
          parseStyleString(value, function (key, value) {
              styles[key] = value;
          });
          return styles;
      }, renderStyleExpr = function (value) {
          if (array$1(value)) {
              var styles = {};
              for (var i = 0, len = value.length; i < len; i++) {
                  var item = renderStyleExpr(value[i]);
                  if (item) {
                      for (var key in item) {
                          styles[key] = item[key];
                      }
                  }
              }
              return styles;
          }
          if (object$1(value)) {
              return value;
          }
          if (string$1(value)) {
              return renderStyleString(value);
          }
      }, renderTransition = function (name, transition) {
          {
              if (!transition) {
                  fatal(("The transition \"" + name + "\" can't be found."));
              }
          }
          return transition;
      }, 
      // holder 是全局共用的，这里要浅拷贝一次
      renderModel = function (holder) {
          return {
              keypath: holder.keypath,
              value: holder.value,
          };
      }, createEventNameListener = function (type, ns, isComponent) {
          return function (event, data, isNative) {
              // 监听组件事件不用处理父组件传下来的事件
              if (isComponent && event.phase === CustomEvent.PHASE_DOWNWARD) {
                  return;
              }
              if (type !== event.type || ns !== event.ns) {
                  event = new CustomEvent(type, isNative
                      ? event.originalEvent
                      : event);
                  event.ns = ns;
              }
              instance.fire(event, data);
          };
      }, createEventMethodListener = function (method, runtime, isComponent) {
          return function (event, data) {
              // 监听组件事件不用处理父组件传下来的事件
              if (isComponent && event.phase === CustomEvent.PHASE_DOWNWARD) {
                  return;
              }
              var result = execute(method, instance, runtime
                  ? runtime.args(runtime.stack, event, data)
                  : (data ? [event, data] : event));
              if (result === FALSE$1) {
                  event.prevent().stop();
              }
          };
      }, renderEventMethod = function (key, value, name, ns, method, runtime, isComponent, isNative) {
          if (runtime) {
              runtime.stack = contextStack;
          }
          return {
              key: key,
              value: value,
              name: name,
              ns: ns,
              isNative: isNative,
              listener: createEventMethodListener(method, runtime, isComponent),
              runtime: runtime,
          };
      }, renderEventName = function (key, value, name, ns, to, toNs, isComponent, isNative) {
          return {
              key: key,
              value: value,
              name: name,
              ns: ns,
              isNative: isNative,
              listener: createEventNameListener(to, toNs, isComponent),
          };
      }, createDirectiveGetter = function (runtime) {
          return function () {
              return runtime.expr(runtime.stack);
          };
      }, createDirectiveHandler = function (method, runtime) {
          return function () {
              execute(method, instance, runtime
                  ? runtime.args(runtime.stack)
                  : UNDEFINED$1);
          };
      }, renderDirective = function (key, name, modifier, value, hooks, runtime, method) {
          {
              if (!hooks) {
                  fatal(("The directive \"" + name + "\" can't be found."));
              }
          }
          if (runtime) {
              runtime.stack = contextStack;
          }
          return {
              ns: DIRECTIVE_CUSTOM,
              key: key,
              name: name,
              value: value,
              modifier: modifier,
              getter: runtime && runtime.expr ? createDirectiveGetter(runtime) : UNDEFINED$1,
              handler: method ? createDirectiveHandler(method, runtime) : UNDEFINED$1,
              hooks: hooks,
              runtime: runtime,
          };
      }, renderSpread = function (vnode, key, value) {
          if (object$1(value)) {
              // 数组也算一种对象
              // 延展操作符不支持数组
              {
                  if (array$1(value)) {
                      fatal("The spread operator can't be used by an array.");
                  }
              }
              for (var name in value) {
                  appendAttribute(vnode, key, value[name], name);
              }
          }
      }, renderSlots = function (render) {
          var result = {};
          for (var name in render) {
              var children = [], components = [];
              render[name](children, components);
              // 就算是 undefined 也必须有值，用于覆盖旧值
              result[name] = children.length
                  ? {
                      vnodes: children,
                      components: components.length
                          ? components
                          : UNDEFINED$1
                  }
                  : UNDEFINED$1;
          }
          return result;
      }, 
      // <slot name="xx"/>
      renderSlotChildren = function (name, children) {
          dependencies[name] = children;
          var result = rootScope[name];
          if (result) {
              var vnodes = result.vnodes;
              var components = result.components;
              if (components) {
                  for (var i = 0, length = components.length; i < length; i++) {
                      components[i].parent = instance;
                  }
              }
              for (var i$1 = 0, length$1 = vnodes.length; i$1 < length$1; i$1++) {
                  children[children.length] = clone(vnodes[i$1]);
              }
              return TRUE$1;
          }
      }, 
      // {{> name}}
      renderPartial = function (name, scope, keypath, children, components, renderLocal, render) {
          {
              warn('Partial is not recommended for use, it may be removed in the future.');
          }
          if (renderLocal) {
              renderLocal(scope, keypath, children, components);
              return;
          }
          {
              if (!render) {
                  fatal(("The partial \"" + name + "\" can't be found."));
              }
          }
          renderTemplate(render, scope, keypath, children, components);
      }, renderEach = function (holder, renderChildren, renderElse) {
          var keypath = holder.keypath;
          var value = holder.value;
          var length = 0, needKeypath = !!keypath, oldScopeStack = contextStack, currentKeypath = last(contextStack).keypath;
          if (array$1(value)) {
              length = value.length;
              for (var i = 0; i < length; i++) {
                  if (needKeypath) {
                      currentKeypath = keypath + RAW_DOT + i;
                      // slice + push 比直接 concat 快多了
                      contextStack = oldScopeStack.slice();
                      contextStack.push({
                          scope: value[i],
                          keypath: currentKeypath,
                      });
                  }
                  renderChildren(value[i], currentKeypath, length, i);
              }
          }
          else if (object$1(value)) {
              var keys$1 = keys(value);
              length = keys$1.length;
              for (var i$1 = 0; i$1 < length; i$1++) {
                  var key = keys$1[i$1];
                  if (needKeypath) {
                      // 这里 key 虽然可能为空，但也必须直接拼接
                      // 因为不拼接就变成了原来的 keypath，这样更是错的，
                      // 只能在使用上尽量避免 key 为空的用法
                      currentKeypath = keypath + RAW_DOT + key;
                      // slice + push 比直接 concat 快多了
                      contextStack = oldScopeStack.slice();
                      contextStack.push({
                          scope: value[key],
                          keypath: currentKeypath,
                      });
                  }
                  renderChildren(value[key], currentKeypath, length, key);
              }
          }
          if (contextStack !== oldScopeStack) {
              contextStack = oldScopeStack;
          }
          if (renderElse && length === 0) {
              renderElse();
          }
      }, renderRange = function (from, to, equal, renderChildren, renderElse) {
          var count = 0, length = 0, currentKeypath = last(contextStack).keypath;
          if (from < to) {
              length = to - from;
              if (equal) {
                  for (var i = from; i <= to; i++) {
                      renderChildren(i, currentKeypath, length, count++);
                  }
              }
              else {
                  for (var i$1 = from; i$1 < to; i$1++) {
                      renderChildren(i$1, currentKeypath, length, count++);
                  }
              }
          }
          else {
              length = from - to;
              if (equal) {
                  for (var i$2 = from; i$2 >= to; i$2--) {
                      renderChildren(i$2, currentKeypath, length, count++);
                  }
              }
              else {
                  for (var i$3 = from; i$3 > to; i$3--) {
                      renderChildren(i$3, currentKeypath, length, count++);
                  }
              }
          }
          if (renderElse && length === 0) {
              renderElse();
          }
      }, findKeypath = function (stack, index, name, lookup, isFirstCall) {
          var ref = stack[index];
          var scope = ref.scope;
          var keypath = ref.keypath;
          var currentKeypath = join(keypath, name), result = get(scope, name);
          if (result) {
              return setHolder(result.value, currentKeypath);
          }
          if (isFirstCall) {
              setHolder(UNDEFINED$1, currentKeypath);
          }
          if (lookup && index > 0) {
              {
                  debug(("The data \"" + currentKeypath + "\" can't be found in the current context, start looking up."));
              }
              return findKeypath(stack, index - 1, name, lookup);
          }
      }, lookupKeypath = function (getIndex, keypath, lookup, stack, filter) {
          var currentStack = stack || contextStack;
          return findKeypath(currentStack, getIndex(currentStack), keypath, lookup, TRUE$1) || (filter
              ? setHolder(filter)
              : holder);
      }, findProp = function (stack, index, name) {
          var ref = stack[index];
          var scope = ref.scope;
          var keypath = ref.keypath;
          var currentKeypath = keypath ? keypath + RAW_DOT + name : name;
          if (name in scope) {
              return setHolder(scope[name], currentKeypath);
          }
          if (index > 0) {
              {
                  debug(("The data \"" + currentKeypath + "\" can't be found in the current context, start looking up."));
              }
              return findProp(stack, index - 1, name);
          }
      }, lookupProp = function (name, value, stack, filter) {
          var currentStack = stack || contextStack, index = currentStack.length - 1;
          var ref = currentStack[index];
          var keypath = ref.keypath;
          var currentKeypath = keypath ? keypath + RAW_DOT + name : name;
          if (value !== UNDEFINED$1) {
              return setHolder(value, currentKeypath);
          }
          return index > 0 && findProp(currentStack, index - 1, name) || (filter
              ? setHolder(filter)
              : setHolder(UNDEFINED$1, currentKeypath));
      }, getThis = function (value, stack) {
          var currentStack = stack || contextStack;
          var ref = currentStack[currentStack.length - 1];
          var keypath = ref.keypath;
          return setHolder(value, keypath);
      }, getThisByIndex = function (getIndex, stack) {
          var currentStack = stack || contextStack;
          var ref = currentStack[getIndex(currentStack)];
          var scope = ref.scope;
          var keypath = ref.keypath;
          return setHolder(scope, keypath);
      }, getProp = function (name, value, stack) {
          var currentStack = stack || contextStack;
          var ref = currentStack[currentStack.length - 1];
          var keypath = ref.keypath;
          return setHolder(value, keypath ? keypath + RAW_DOT + name : name);
      }, getPropByIndex = function (getIndex, name, stack) {
          var currentStack = stack || contextStack;
          var ref = currentStack[getIndex(currentStack)];
          var scope = ref.scope;
          var keypath = ref.keypath;
          return setHolder(scope[name], keypath ? keypath + RAW_DOT + name : name);
      }, readKeypath = function (value, keypath) {
          var result = get(value, keypath);
          return setHolder(result ? result.value : UNDEFINED$1);
      }, setHolder = function (value, keypath) {
          if (value && func(value.get)) {
              value = value.get();
          }
          holder.keypath = keypath;
          holder.value = value;
          if (keypath !== UNDEFINED$1) {
              dependencies[keypath] = value;
          }
          return holder;
      }, renderTemplate = function (render, scope, keypath, children, components) {
          render(renderComposeVNode, appendAttribute, renderStyleString, renderStyleExpr, renderTransition, renderModel, renderEventMethod, renderEventName, renderDirective, renderSpread, renderSlots, renderSlotChildren, renderPartial, renderEach, renderRange, lookupKeypath, lookupProp, getThis, getThisByIndex, getProp, getPropByIndex, readKeypath, execute, setHolder, toString$1, textVNodeOperator, commentVNodeOperator, elementVNodeOperator, componentVNodeOperator, fragmentVNodeOperator, portalVNodeOperator, slotVNodeOperator, instance, filters, globalFilters, localPartials, partials, globalPartials, directives, globalDirectives, transitions, globalTransitions, scope, keypath, children, components);
      };
      renderTemplate(template, rootScope, rootKeypath, children, components);
      {
          if (children.length > 1) {
              fatal("The template should have just one root element.");
          }
      }
      return children[0];
  }

  var guid = 0, 
  // 这里先写 IE9 支持的接口
  textContent = 'textContent', innerHTML = 'innerHTML', cssFloat = 'cssFloat', createEvent = function (event, node) {
      return event;
  }, findElement = function (selector) {
      var node = DOCUMENT.querySelector(selector);
      if (node) {
          return node;
      }
  }, addEventListener = function (node, type, listener) {
      node.addEventListener(type, listener, FALSE$1);
  }, removeEventListener = function (node, type, listener) {
      node.removeEventListener(type, listener, FALSE$1);
  }, 
  // IE9 不支持 classList
  addElementClass = function (node, className) {
      node.classList.add(className);
  }, removeElementClass = function (node, className) {
      node.classList.remove(className);
  };
  {
      if (DOCUMENT) {
          // 此时 document.body 不一定有值，比如 script 放在 head 里
          var testElement = DOCUMENT.documentElement;
          if (!(cssFloat in testElement.style)) {
              cssFloat = 'styleFloat';
          }
          if (!testElement.classList) {
              addElementClass = function (node, className) {
                  var classes = node.className.split(CHAR_WHITESPACE);
                  if (!has$2(classes, className)) {
                      push(classes, className);
                      node.className = join$1(classes, CHAR_WHITESPACE);
                  }
              };
              removeElementClass = function (node, className) {
                  var classes = node.className.split(CHAR_WHITESPACE);
                  if (remove$6(classes, className)) {
                      node.className = join$1(classes, CHAR_WHITESPACE);
                  }
              };
          }
          testElement = UNDEFINED$1;
      }
  }
  var CHAR_WHITESPACE = ' ', 
  /**
   * 绑定在 HTML 元素上的事件发射器
   */
  EVENT = '$event', 
  /**
   * 跟输入事件配套使用的事件
   */
  COMPOSITION_START = 'compositionstart', 
  /**
   * 跟输入事件配套使用的事件
   */
  COMPOSITION_END = 'compositionend', domain = 'http://www.w3.org/', namespaces = {
      svg: domain + '2000/svg',
      // xml: domain + 'XML/1998/namespace',
      // xlink: domain + '1999/xlink',
  }, nativeListenerCount = {}, nativeListeners = {}, customListeners = {}, specialEvents = {};
  specialEvents[EVENT_MODEL] = {
      on: function(node, listener) {
          var locked = FALSE$1;
          on(node, COMPOSITION_START, listener[COMPOSITION_START] = function () {
              locked = TRUE$1;
          });
          on(node, COMPOSITION_END, listener[COMPOSITION_END] = function (event) {
              locked = FALSE$1;
              listener(event);
          });
          addEventListener(node, EVENT_INPUT, listener[EVENT_INPUT] = function (event) {
              if (!locked) {
                  listener(event);
              }
          });
      },
      off: function(node, listener) {
          off(node, COMPOSITION_START, listener[COMPOSITION_START]);
          off(node, COMPOSITION_END, listener[COMPOSITION_END]);
          removeEventListener(node, EVENT_INPUT, listener[EVENT_INPUT]);
          listener[COMPOSITION_START] =
              listener[COMPOSITION_END] =
                  listener[EVENT_INPUT] = UNDEFINED$1;
      }
  };
  function getBodyElement() {
      return DOCUMENT.body;
  }
  function createElement(tag, isSvg) {
      return isSvg
          ? DOCUMENT.createElementNS(namespaces.svg, tag)
          : DOCUMENT.createElement(tag);
  }
  function createText(text) {
      return DOCUMENT.createTextNode(text);
  }
  function createComment(text) {
      return DOCUMENT.createComment(text);
  }
  function getProp(node, name) {
      return node[name];
  }
  function setProp(node, name, value) {
      node[name] = value;
  }
  function removeProp(node, name) {
      node[name] = UNDEFINED$1;
  }
  function getAttr(node, name) {
      var value = node.getAttribute(name);
      if (value != NULL$1) {
          return value;
      }
  }
  function setAttr(node, name, value) {
      node.setAttribute(name, value);
  }
  function removeAttr(node, name) {
      node.removeAttribute(name);
  }
  // 这里不传 HTMLElement 是因为外面会在循环里调用，频繁读取 node.style 挺浪费性能的
  function setStyle(style, name, value) {
      if (value == NULL$1) {
          style[name] = EMPTY_STRING;
          return;
      }
      style[name === 'float' ? cssFloat : name] = value;
  }
  // 这里不传 HTMLElement 是因为外面会在循环里调用，频繁读取 node.style 挺浪费性能的
  function removeStyle(style, name) {
      style[name] = EMPTY_STRING;
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
  function remove(parentNode, node) {
      parentNode.removeChild(node);
  }
  function parent(node) {
      var parentNode = node.parentNode;
      if (parentNode) {
          return parentNode;
      }
  }
  function next(node) {
      var nextSibling = node.nextSibling;
      if (nextSibling) {
          return nextSibling;
      }
  }
  var find = findElement;
  function tag(node) {
      if (node.nodeType === 1) {
          return lower(node.tagName);
      }
  }
  function getText(node) {
      return node[textContent];
  }
  function setText(node, text, isStyle, isOption) {
      {
          node[textContent] = text;
      }
  }
  function getHtml(node) {
      return node[innerHTML];
  }
  function setHtml(node, html, isStyle, isOption) {
      {
          node[innerHTML] = html;
      }
  }
  var addClass = addElementClass;
  var removeClass = removeElementClass;
  function on(node, type, listener) {
      var nativeKey = node[EVENT] || (node[EVENT] = ++guid), nativeListenerMap = nativeListeners[nativeKey] || (nativeListeners[nativeKey] = {}), customListenerMap = customListeners[nativeKey] || (customListeners[nativeKey] = {}), customListenerList = customListenerMap[type] || (customListenerMap[type] = []);
      // 一个元素，相同的事件，只注册一个 native listener
      if (!nativeListenerMap[type]) {
          // 特殊事件
          var special = specialEvents[type], 
          // 唯一的原生监听器
          nativeListener = function (event) {
              var customEvent;
              if (CustomEvent.is(event)) {
                  customEvent = event;
                  if (customEvent.type !== type) {
                      customEvent.type = type;
                  }
              }
              else {
                  customEvent = new CustomEvent(type, createEvent(event));
              }
              // 避免遍历过程中，数组发生变化，比如增删了
              var listenerList = customListenerList.slice();
              for (var i = 0, length = listenerList.length; i < length; i++) {
                  listenerList[i](customEvent, UNDEFINED$1, TRUE$1);
              }
          };
          nativeListenerMap[type] = nativeListener;
          if (nativeListenerCount[nativeKey]) {
              nativeListenerCount[nativeKey]++;
          }
          else {
              nativeListenerCount[nativeKey] = 1;
          }
          if (special) {
              special.on(node, nativeListener);
          }
          else {
              addEventListener(node, type, nativeListener);
          }
      }
      customListenerList.push(listener);
  }
  function off(node, type, listener) {
      var nativeKey = node[EVENT], nativeListenerMap = nativeListeners[nativeKey], customListenerMap = customListeners[nativeKey], customListenerList = customListenerMap && customListenerMap[type];
      if (customListenerList) {
          remove$6(customListenerList, listener);
          if (!customListenerList.length) {
              customListenerList = UNDEFINED$1;
              delete customListenerMap[type];
          }
      }
      // 如果注册的 type 事件都解绑了，则去掉原生监听器
      if (nativeListenerMap && nativeListenerMap[type] && !customListenerList) {
          var special = specialEvents[type], nativeListener = nativeListenerMap[type];
          if (special) {
              special.off(node, nativeListener);
          }
          else {
              removeEventListener(node, type, nativeListener);
          }
          delete nativeListenerMap[type];
          if (nativeListenerCount[nativeKey]) {
              nativeListenerCount[nativeKey]--;
          }
      }
      if (!nativeListenerCount[nativeKey]) {
          node[EVENT] = UNDEFINED$1;
          delete nativeListeners[nativeKey];
          delete customListeners[nativeKey];
      }
  }
  function addSpecialEvent(type, hooks) {
      {
          if (specialEvents[type]) {
              fatal(("The special event \"" + type + "\" already exists."));
          }
          info(("The special event \"" + type + "\" is added successfully."));
      }
      specialEvents[type] = hooks;
  }

  var domApi = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getBodyElement: getBodyElement,
    createElement: createElement,
    createText: createText,
    createComment: createComment,
    getProp: getProp,
    setProp: setProp,
    removeProp: removeProp,
    getAttr: getAttr,
    setAttr: setAttr,
    removeAttr: removeAttr,
    setStyle: setStyle,
    removeStyle: removeStyle,
    before: before,
    append: append,
    replace: replace,
    remove: remove,
    parent: parent,
    next: next,
    find: find,
    tag: tag,
    getText: getText,
    setText: setText,
    getHtml: getHtml,
    setHtml: setHtml,
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
  var Computed = function(keypath, sync, cache, deps, observer, getter, setter) {
      var instance = this;
      instance.keypath = keypath;
      instance.cache = cache;
      instance.deps = deps;
      instance.observer = observer;
      instance.getter = getter;
      instance.setter = setter;
      instance.watcherOptions = {
          sync: sync,
          watcher: instance.watcher = function ($0, $1, $2) {
              // 计算属性的依赖变了会走进这里
              var oldValue = instance.value, newValue = instance.get(TRUE$1);
              if (newValue !== oldValue) {
                  observer.diff(keypath, newValue, oldValue);
              }
          }
      };
      // 如果 deps 是空数组，Observer 会传入 undefined
      // 因此这里直接判断即可
      if (deps) {
          instance.fixed = TRUE$1;
          for (var i = 0, length = deps.length; i < length; i++) {
              observer.watch(deps[i], instance.watcherOptions);
          }
      }
  };
  /**
   * 读取计算属性的值
   *
   * @param force 是否强制刷新缓存
   */
  Computed.prototype.get = function (force) {
      var instance = this;
          var getter = instance.getter;
          var deps = instance.deps;
          var observer = instance.observer;
          var watcher = instance.watcher;
          var watcherOptions = instance.watcherOptions;
      // 禁用缓存
      if (!instance.cache) {
          instance.value = getter();
      }
      // 减少取值频率，尤其是处理复杂的计算规则
      else if (force || !has(instance, 'value')) {
          // 如果写死了依赖，则不需要收集依赖
          if (instance.fixed) {
              instance.value = getter();
          }
          // 自动收集依赖
          else {
              // 清空上次收集的依赖
              if (deps) {
                  for (var i = deps.length - 1; i >= 0; i--) {
                      observer.unwatch(deps[i], watcher);
                  }
              }
              // 惰性初始化
              instance.unique = createPureObject();
              // 开始收集新的依赖
              var lastComputed = Computed.current;
              Computed.current = instance;
              instance.value = getter();
              // 绑定新的依赖
              var newDeps = instance.unique.keys();
              for (var i$1 = 0, length = newDeps.length; i$1 < length; i$1++) {
                  observer.watch(newDeps[i$1], watcherOptions);
              }
              instance.deps = newDeps;
              // 取值完成，恢复原值
              Computed.current = lastComputed;
          }
      }
      return instance.value;
  };
  Computed.prototype.set = function (value) {
      var ref = this;
          var setter = ref.setter;
      if (setter) {
          setter(value);
      }
  };
  /**
   * 添加依赖
   *
   * 这里只是为了保证依赖唯一
   *
   * @param dep
   */
  Computed.prototype.add = function (dep) {
      this.unique.set(dep, TRUE$1);
  };

  function readValue (source, keypath) {
      if (source == NULL$1 || keypath === EMPTY_STRING) {
          return source;
      }
      var result = get(source, keypath);
      if (result) {
          return result.value;
      }
  }

  /**
   * 对比新旧字符串
   *
   * @param newValue
   * @param oldValue
   * @param callback
   */
  function diffString (newValue, oldValue, callback) {
      var newIsString = string$1(newValue), oldIsString = string$1(oldValue);
      if (newIsString || oldIsString) {
          callback(RAW_LENGTH, newIsString ? newValue.length : UNDEFINED$1, oldIsString ? oldValue.length : UNDEFINED$1);
          return TRUE$1;
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
      var newIsArray = array$1(newValue), oldIsArray = array$1(oldValue);
      if (newIsArray || oldIsArray) {
          var newLength = newIsArray ? newValue.length : UNDEFINED$1, oldLength = oldIsArray ? oldValue.length : UNDEFINED$1;
          callback(RAW_LENGTH, newLength, oldLength);
          for (var i = 0, length = Math.max(newLength || 0, oldLength || 0); i < length; i++) {
              callback(
              // 把 number 转成 string
              EMPTY_STRING + i, newIsArray ? newValue[i] : UNDEFINED$1, oldIsArray ? oldValue[i] : UNDEFINED$1);
          }
          return TRUE$1;
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
      var newIsObject = object$1(newValue), oldIsObject = object$1(oldValue);
      if (newIsObject || oldIsObject) {
          var diffed = createPureObject(), newObject = newIsObject ? newValue : EMPTY_OBJECT, oldObject = oldIsObject ? oldValue : EMPTY_OBJECT;
          if (newIsObject) {
              for (var key in newObject) {
                  var value = newObject[key];
                  if (value !== oldObject[key]) {
                      // 保证遍历 oldObject 时不会再次触发
                      diffed.set(key, TRUE$1);
                      callback(key, value, oldObject[key]);
                  }
              }
          }
          if (oldIsObject) {
              for (var key$1 in oldObject) {
                  var value$1 = oldObject[key$1];
                  if (diffed.get(key$1) === UNDEFINED$1 && value$1 !== newObject[key$1]) {
                      callback(key$1, newObject[key$1], value$1);
                  }
              }
          }
      }
  }

  /**
   * 递归对比
   */
  function diffRecursion(keypath, newValue, oldValue, fuzzyKeypaths, fuzzyKeypathLength, callback) {
      var diff = function (subKey, subNewValue, subOldValue) {
          if (subNewValue !== subOldValue) {
              var newKeypath = join(keypath, subKey);
              for (var i = 0; i < fuzzyKeypathLength; i++) {
                  var fuzzyKeypath = fuzzyKeypaths[i];
                  if (matchFuzzy(newKeypath, fuzzyKeypath) !== UNDEFINED$1) {
                      callback(fuzzyKeypath, newKeypath, subNewValue, subOldValue);
                  }
              }
              diffRecursion(newKeypath, subNewValue, subOldValue, fuzzyKeypaths, fuzzyKeypathLength, callback);
          }
      };
      diffString(newValue, oldValue, diff)
          || diffArray(newValue, oldValue, diff)
          || diffObject(newValue, oldValue, diff);
  }

  function diffWatcher (keypath, newValue, oldValue, watcher, isRecursive, callback) {
      var fuzzyKeypaths;
      // 遍历监听的 keypath，如果未被监听，则无需触发任何事件
      for (var watchKeypath in watcher) {
          // 模糊监听，如 users.*.name
          if (isFuzzy(watchKeypath)) {
              // 如果当前修改的是 users.0 整个对象
              // users.0 和 users.*.name 无法匹配
              // 此时要知道设置 users.0 到底会不会改变 users.*.name 需要靠递归了
              // 如果匹配，则无需递归
              if (matchFuzzy(keypath, watchKeypath) !== UNDEFINED$1) {
                  callback(watchKeypath, keypath, newValue, oldValue);
              }
              else if (isRecursive) {
                  if (fuzzyKeypaths) {
                      fuzzyKeypaths.push(watchKeypath);
                  }
                  else {
                      fuzzyKeypaths = [watchKeypath];
                  }
              }
          }
          // 不是模糊匹配，直接通过前缀匹配
          else {
              // 比如监听的是 users.0.name，此时修改 users.0，则直接读出子属性值，判断是否相等
              var length = match(watchKeypath, keypath);
              if (length >= 0) {
                  var subKeypath = slice(watchKeypath, length), subNewValue = readValue(newValue, subKeypath), subOldValue = readValue(oldValue, subKeypath);
                  if (subNewValue !== subOldValue) {
                      callback(watchKeypath, watchKeypath, subNewValue, subOldValue);
                  }
              }
          }
      }
      // 存在模糊匹配的需求
      // 必须对数据进行递归
      // 性能确实会慢一些，但是很好用啊，几乎可以监听所有的数据
      if (fuzzyKeypaths) {
          diffRecursion(keypath, newValue, oldValue, fuzzyKeypaths, fuzzyKeypaths.length, callback);
      }
  }

  // 避免频繁创建对象
  var optionsHolder = {
      watcher: EMPTY_FUNCTION,
  };
  /**
   * 格式化 watch options
   *
   * @param options
   */
  function formatWatcherOptions (options, immediate) {
      var isWatcher = func(options);
      {
          if (!options
              || (!isWatcher && !options.watcher)) {
              fatal("watcher should be a Function or WatcherOptions.");
          }
      }
      if (isWatcher) {
          optionsHolder.watcher = options;
          optionsHolder.immediate = immediate === TRUE$1;
          return optionsHolder;
      }
      return options;
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
  var Observer = function(data, context, nextTask) {
      var instance = this;
      instance.data = data || {};
      instance.context = context || instance;
      instance.nextTask = nextTask || new NextTask();
      instance.syncEmitter = new Emitter();
      instance.asyncEmitter = new Emitter();
      instance.asyncOldValues = {};
      instance.asyncKeypaths = {};
  };
  /**
   * 获取数据
   *
   * @param keypath
   * @param defaultValue
   * @param depIgnore
   * @return
   */
  Observer.prototype.get = function (keypath, defaultValue, depIgnore) {
      var instance = this, currentComputed = Computed.current;
          var data = instance.data;
          var computed = instance.computed;
      // 传入 '' 获取整个 data
      if (keypath === EMPTY_STRING) {
          return data;
      }
      // 调用 get 时，外面想要获取依赖必须设置是谁在收集依赖
      // 如果没设置，则跳过依赖收集
      if (currentComputed && !depIgnore) {
          currentComputed.add(keypath);
      }
      var result;
      if (computed) {
          result = get(computed, keypath);
      }
      if (!result) {
          result = get(data, keypath);
      }
      return result ? result.value : defaultValue;
  };
  /**
   * 更新数据
   *
   * @param keypath
   * @param value
   */
  Observer.prototype.set = function (keypath, value) {
      var instance = this;
          var data = instance.data;
          var computed = instance.computed;
          var setValue = function (keypath, newValue) {
          var oldValue = instance.get(keypath);
          if (newValue === oldValue) {
              return;
          }
          var next;
          each$1(keypath, function (key, index, lastIndex) {
              if (index === 0) {
                  if (computed && computed[key]) {
                      if (lastIndex === 0) {
                          computed[key].set(newValue);
                      }
                      else {
                          // 这里 next 可能为空
                          next = computed[key].get();
                      }
                  }
                  else {
                      if (lastIndex === 0) {
                          data[key] = newValue;
                      }
                      else {
                          next = data[key] || (data[key] = {});
                      }
                  }
                  return;
              }
              if (next) {
                  if (index === lastIndex) {
                      next[key] = newValue;
                  }
                  else {
                      next = next[key] || (next[key] = {});
                  }
              }
          });
          instance.diff(keypath, newValue, oldValue);
      };
      if (string$1(keypath)) {
          setValue(keypath, value);
      }
      else if (object$1(keypath)) {
          for (var key in keypath) {
              setValue(key, keypath[key]);
          }
      }
  };
  /**
   * 同步调用的 diff，用于触发 syncEmitter，以及唤醒 asyncEmitter
   *
   * @param keypath
   * @param newValue
   * @param oldValue
   */
  Observer.prototype.diff = function (keypath, newValue, oldValue) {
      var instance = this;
          var syncEmitter = instance.syncEmitter;
          var asyncEmitter = instance.asyncEmitter;
          var asyncOldValues = instance.asyncOldValues;
          var asyncKeypaths = instance.asyncKeypaths;
          var isRecursive = codeAt(keypath) !== 36;
      diffWatcher(keypath, newValue, oldValue, syncEmitter.listeners, isRecursive, function (watchKeypath, keypath, newValue, oldValue) {
          syncEmitter.fire({
              type: watchKeypath,
              ns: EMPTY_STRING,
          }, [
              newValue,
              oldValue,
              keypath ]);
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
          // 这里是为了解决上面说的坑
          var options = asyncEmitter.listeners[watchKeypath];
          for (var i = 0, length = options.length; i < length; i++) {
              options[i].count++;
          }
          if (!asyncKeypaths[keypath]) {
              asyncOldValues[keypath] = oldValue;
              asyncKeypaths[keypath] = {};
          }
          asyncKeypaths[keypath][watchKeypath] = TRUE$1;
          if (!instance.pending) {
              instance.pending = TRUE$1;
              instance.nextTask.append(function () {
                  if (instance.pending) {
                      instance.diffAsync();
                  }
              });
          }
      });
  };
  /**
   * 异步触发的 diff
   */
  Observer.prototype.diffAsync = function () {
      var instance = this;
          var asyncEmitter = instance.asyncEmitter;
          var asyncOldValues = instance.asyncOldValues;
          var asyncKeypaths = instance.asyncKeypaths;
      instance.pending = UNDEFINED$1;
      instance.asyncOldValues = {};
      instance.asyncKeypaths = {};
      var loop = function ( keypath ) {
          var args = [
              instance.get(keypath),
              asyncOldValues[keypath],
              keypath ], keypaths = asyncKeypaths[keypath], hasChange = args[0] !== args[1], filterWatcher = function (event, args, options) {
              // 前面递增了 count
              // 这里要递减 count
              // count > 0 表示前面标记了该监听器需要响应此次变化
              if (options.count) {
                  // 采用计数器的原因是，同一个 options 可能执行多次
                  // 比如监听 user.*，如果同批次修改了 user.name 和 user.age
                  // 这个监听器会调用多次，如果第一次执行就把 count 干掉了，第二次就无法执行了
                  options.count--;
                  // 新旧值不相等才能触发监听器
                  return hasChange;
              }
          };
          for (var watchKeypath in keypaths) {
              asyncEmitter.fire({
                  type: watchKeypath,
                  ns: EMPTY_STRING,
              }, args, filterWatcher);
          }
      };

          for (var keypath in asyncOldValues) loop( keypath );
  };
  /**
   * 添加计算属性
   *
   * @param keypath
   * @param computed
   */
  Observer.prototype.addComputed = function (keypath, options) {
      var instance = this, context = instance.context, cache = TRUE$1, sync = TRUE$1, deps, getter, setter;
      // 这里用 bind 方法转换一下调用的 this
      // 还有一个好处，它比 call(context) 速度稍快一些
      if (func(options)) {
          getter = options.bind(context);
      }
      else if (object$1(options)) {
          var computedOptions = options;
          if (boolean(computedOptions.cache)) {
              cache = computedOptions.cache;
          }
          if (boolean(computedOptions.sync)) {
              sync = computedOptions.sync;
          }
          // 传入空数组等同于没传
          if (!falsy$2(computedOptions.deps)) {
              deps = computedOptions.deps;
          }
          if (func(computedOptions.get)) {
              getter = computedOptions.get.bind(context);
          }
          if (func(computedOptions.set)) {
              setter = computedOptions.set.bind(context);
          }
      }
      if (getter) {
          var computed = new Computed(keypath, sync, cache, deps, instance, getter, setter);
          if (!instance.computed) {
              instance.computed = {};
          }
          instance.computed[keypath] = computed;
          return computed;
      }
  };
  /**
   * 移除计算属性
   *
   * @param keypath
   */
  Observer.prototype.removeComputed = function (keypath) {
      var instance = this;
          var computed = instance.computed;
      if (computed && has(computed, keypath)) {
          delete computed[keypath];
      }
  };
  /**
   * 监听数据变化
   *
   * @param keypath
   * @param watcher
   * @param immediate
   */
  Observer.prototype.watch = function (keypath, watcher, immediate) {
      var instance = this;
          var context = instance.context;
          var syncEmitter = instance.syncEmitter;
          var asyncEmitter = instance.asyncEmitter;
          var addWatcher = function (keypath, options) {
          var emitter = options.sync ? syncEmitter : asyncEmitter, 
          // formatWatcherOptions 保证了 options.watcher 一定存在
          listener = {
              ns: EMPTY_STRING,
              listener: options.watcher,
              ctx: context,
              count: 0,
          };
          if (options.once) {
              listener.max = 1;
          }
          emitter.on(keypath, listener);
          if (options.immediate) {
              options.watcher.call(context, instance.get(keypath), UNDEFINED$1, keypath);
          }
      };
      if (string$1(keypath)) {
          addWatcher(keypath, formatWatcherOptions(watcher, immediate));
      }
      else {
          for (var key in keypath) {
              addWatcher(key, formatWatcherOptions(keypath[key]));
          }
      }
  };
  /**
   * 取消监听数据变化
   *
   * @param keypath
   * @param watcher
   */
  Observer.prototype.unwatch = function (keypath, watcher) {
      var filter = {
          ns: EMPTY_STRING,
          listener: watcher,
      };
      this.syncEmitter.off(keypath, filter);
      this.asyncEmitter.off(keypath, filter);
  };
  /**
   * 取反 keypath 对应的数据
   *
   * 不管 keypath 对应的数据是什么类型，操作后都是布尔型
   *
   * @param keypath
   * @return 取反后的布尔值
   */
  Observer.prototype.toggle = function (keypath) {
      var value = !this.get(keypath);
      this.set(keypath, value);
      return value;
  };
  /**
   * 递增 keypath 对应的数据
   *
   * 注意，最好是整型的加法，如果涉及浮点型，不保证计算正确
   *
   * @param keypath 值必须能转型成数字，如果不能，则默认从 0 开始递增
   * @param step 步进值，默认是 1
   * @param max 可以递增到的最大值，默认不限制
   */
  Observer.prototype.increase = function (keypath, step, max) {
      var value = toNumber(this.get(keypath), 0) + (step || 1);
      if (!number(max) || value <= max) {
          this.set(keypath, value);
          return value;
      }
  };
  /**
   * 递减 keypath 对应的数据
   *
   * 注意，最好是整型的减法，如果涉及浮点型，不保证计算正确
   *
   * @param keypath 值必须能转型成数字，如果不能，则默认从 0 开始递减
   * @param step 步进值，默认是 1
   * @param min 可以递减到的最小值，默认不限制
   */
  Observer.prototype.decrease = function (keypath, step, min) {
      var value = toNumber(this.get(keypath), 0) - (step || 1);
      if (!number(min) || value >= min) {
          this.set(keypath, value);
          return value;
      }
  };
  /**
   * 在数组指定位置插入元素
   *
   * @param keypath
   * @param item
   * @param index
   */
  Observer.prototype.insert = function (keypath, item, index) {
      var list = this.get(keypath);
      list = array$1(list) ? list.slice() : [];
      var length = list.length;
      if (index === TRUE$1 || index === length) {
          list.push(item);
      }
      else if (index === FALSE$1 || index === 0) {
          list.unshift(item);
      }
      else if (index > 0 && index < length) {
          list.splice(index, 0, item);
      }
      else {
          return;
      }
      this.set(keypath, list);
      return TRUE$1;
  };
  /**
   * 在数组尾部添加元素
   *
   * @param keypath
   * @param item
   */
  Observer.prototype.append = function (keypath, item) {
      return this.insert(keypath, item, TRUE$1);
  };
  /**
   * 在数组首部添加元素
   *
   * @param keypath
   * @param item
   */
  Observer.prototype.prepend = function (keypath, item) {
      return this.insert(keypath, item, FALSE$1);
  };
  /**
   * 通过索引移除数组中的元素
   *
   * @param keypath
   * @param index
   */
  Observer.prototype.removeAt = function (keypath, index) {
      var list = this.get(keypath);
      if (array$1(list)
          && index >= 0
          && index < list.length) {
          list = list.slice();
          list.splice(index, 1);
          this.set(keypath, list);
          return TRUE$1;
      }
  };
  /**
   * 直接移除数组中的元素
   *
   * @param keypath
   * @param item
   */
  Observer.prototype.remove = function (keypath, item) {
      var list = this.get(keypath);
      if (array$1(list)) {
          list = list.slice();
          if (remove$6(list, item)) {
              this.set(keypath, list);
              return TRUE$1;
          }
      }
  };
  /**
   * 拷贝任意数据，支持深拷贝
   *
   * @param data
   * @param deep
   */
  Observer.prototype.copy = function (data, deep) {
      return copy(data, deep);
  };
  /**
   * 销毁
   */
  Observer.prototype.destroy = function () {
      var instance = this;
      instance.syncEmitter.off();
      instance.asyncEmitter.off();
      instance.nextTask.clear();
      instance.data = {};
  };

  var LifeCycle = function() {
      this.$emitter = new Emitter();
  };
  LifeCycle.prototype.fire = function (component, type, data) {
      this.$emitter.fire(type, [
          component,
          data ]);
  };
  LifeCycle.prototype.on = function (type, listener) {
      this.$emitter.on(type, listener);
      return this;
  };
  LifeCycle.prototype.off = function (type, listener) {
      this.$emitter.off(type, listener);
      return this;
  };
  var globalDirectives = {}, globalTransitions = {}, globalComponents = {}, globalPartials = {}, globalFilters = {}, selectorPattern = /^[#.][-\w+]+$/, lifeCycle = new LifeCycle(), compileTemplate = createOneKeyCache(function (template) {
      var nodes = compile(template);
      {
          if (nodes.length !== 1) {
              fatal("The \"template\" option should have just one root element.");
          }
      }
      return generate(nodes[0]);
  }), markDirty = function () {
      this.$isDirty = TRUE$1;
  };
  var Yox = function(options) {
      var instance = this, $options = options || EMPTY_OBJECT;
      // 为了冒泡 HOOK_BEFORE_CREATE 事件，必须第一时间创建 emitter
      // 监听各种事件
      // 支持命名空间
      instance.$emitter = new Emitter(TRUE$1);
      if ($options.events) {
          instance.on($options.events);
      }
      {
          // 当前组件的直接父组件
          if ($options.parent) {
              instance.$parent = $options.parent;
          }
          // 建立好父子连接后，立即触发钩子
          var beforeCreateHook = $options[HOOK_BEFORE_CREATE];
          if (beforeCreateHook) {
              beforeCreateHook.call(instance, $options);
          }
          lifeCycle.fire(instance, HOOK_BEFORE_CREATE, {
              options: $options,
          });
      }
      var data = $options.data;
      var props = $options.props;
      var vnode = $options.vnode;
      var propTypes = $options.propTypes;
      var computed = $options.computed;
      var methods = $options.methods;
      var watchers = $options.watchers;
      var extensions = $options.extensions;
      instance.$options = $options;
      if (extensions) {
          extend(instance, extensions);
      }
      // 数据源，默认值仅在创建组件时启用
      var source = props ? copy(props) : {};
      {
          if (propTypes) {
              each(propTypes, function (rule, key) {
                  var value = source[key];
                  {
                      checkProp($options.name, key, value, rule);
                  }
                  if (value === UNDEFINED$1) {
                      value = rule.value;
                      if (value !== UNDEFINED$1) {
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
      var observer = instance.$observer = new Observer(source, instance, instance.$nextTask = new NextTask({
          afterTask: function() {
              if (instance.$isDirty) {
                  instance.$isDirty = UNDEFINED$1;
                  instance.update(instance.render(), instance.$vnode);
              }
          }
      }));
      if (computed) {
          each(computed, function (options, keypath) {
              observer.addComputed(keypath, options);
          });
      }
      // 后放 data
      {
          if (vnode && object$1(data)) {
              warn("The \"data\" option of child component should be a function which return an object.");
          }
      }
      var extend$1 = func(data) ? data.call(instance, options) : data;
      if (object$1(extend$1)) {
          each(extend$1, function (value, key) {
              {
                  if (has(source, key)) {
                      warn(("The data \"" + key + "\" is already used as a prop."));
                  }
              }
              source[key] = value;
          });
      }
      if (methods) {
          each(methods, function (method, name) {
              {
                  if (instance[name]) {
                      fatal(("The method \"" + name + "\" is conflicted with built-in methods."));
                  }
              }
              instance[name] = method;
          });
      }
      {
          var placeholder = UNDEFINED$1;
          var el = $options.el;
          var root = $options.root;
          var model = $options.model;
          var context = $options.context;
          var replace = $options.replace;
          var template = $options.template;
          var transitions = $options.transitions;
          var components = $options.components;
          var directives = $options.directives;
          var partials = $options.partials;
          var filters = $options.filters;
          var slots = $options.slots;
          if (model) {
              instance.$model = model;
          }
          // 把 slots 放进数据里，方便 get
          if (slots) {
              extend(source, slots);
          }
          // 检查 template
          if (string$1(template)) {
              // 传了选择器，则取对应元素的 html
              if (selectorPattern.test(template)) {
                  placeholder = find(template);
                  if (placeholder) {
                      template = getHtml(placeholder);
                      placeholder = UNDEFINED$1;
                  }
                  else {
                      fatal(("The selector \"" + template + "\" can't match an element."));
                  }
              }
          }
          // 检查 el
          if (el) {
              if (string$1(el)) {
                  var selector = el;
                  if (selectorPattern.test(selector)) {
                      placeholder = find(selector);
                      {
                          if (!placeholder) {
                              fatal(("The selector \"" + selector + "\" can't match an element."));
                          }
                      }
                  }
                  else {
                      fatal("The \"el\" option should be a selector.");
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
          if (template) {
              if (watchers) {
                  observer.watch(watchers);
              }
              {
                  var afterCreateHook = $options[HOOK_AFTER_CREATE];
                  if (afterCreateHook) {
                      afterCreateHook.call(instance);
                  }
                  lifeCycle.fire(instance, HOOK_AFTER_CREATE);
              }
              // 编译模板
              // 在开发阶段，template 是原始的 html 模板
              // 在产品阶段，template 是编译后的渲染函数
              // 当然，具体是什么需要外部自己控制
              instance.$template = string$1(template)
                  ? Yox.compile(template)
                  : template;
              if (!vnode) {
                  {
                      if (!placeholder) {
                          fatal('The "el" option is required for root component.');
                      }
                  }
                  vnode = create(domApi, placeholder, instance);
              }
              instance.update(instance.render(), vnode);
              return;
          }
          else {
              if (placeholder || vnode) {
                  fatal('The "template" option is required.');
              }
          }
      }
      if (watchers) {
          observer.watch(watchers);
      }
      {
          var afterCreateHook$1 = $options[HOOK_AFTER_CREATE];
          if (afterCreateHook$1) {
              afterCreateHook$1.call(instance);
          }
          lifeCycle.fire(instance, HOOK_AFTER_CREATE);
      }
  };
  /**
   * 定义组件对象
   */
  Yox.define = function (options) {
      return options;
  };
  /**
   * 安装插件
   *
   * 插件必须暴露 install 方法
   */
  Yox.use = function (plugin) {
      plugin.install(Yox);
  };
  /**
   * 因为组件采用的是异步更新机制，为了在更新之后进行一些操作，可使用 nextTick
   */
  Yox.nextTick = function (task, context) {
      NextTask.shared().append(task, context);
  };
  /**
   * 编译模板，暴露出来是为了打包阶段的模板预编译
   */
  Yox.compile = function (template, stringify) {
      {
          // 需要编译的都是模板源文件，一旦经过预编译，就成了 render 函数
          if (func(template)) {
              return template;
          }
          template = compileTemplate(template);
          return stringify
              ? template
              : new Function(("return " + template))();
      }
  };
  /**
   * 注册全局指令
   */
  Yox.directive = function (name, directive$1) {
      {
          if (string$1(name) && !directive$1) {
              return getResource(globalDirectives, name);
          }
          setResource(globalDirectives, name, directive$1);
      }
  };
  /**
   * 注册全局过渡动画
   */
  Yox.transition = function (name, transition$1) {
      {
          if (string$1(name) && !transition$1) {
              return getResource(globalTransitions, name);
          }
          setResource(globalTransitions, name, transition$1);
      }
  };
  /**
   * 注册全局组件
   */
  Yox.component = function (name, component$1) {
      {
          if (string$1(name) && !component$1) {
              return getResource(globalComponents, name);
          }
          setResource(globalComponents, name, component$1);
      }
  };
  /**
   * 注册全局子模板
   */
  Yox.partial = function (name, partial$1) {
      {
          if (string$1(name) && !partial$1) {
              return getResource(globalPartials, name);
          }
          setResource(globalPartials, name, partial$1, Yox.compile);
      }
  };
  /**
   * 注册全局过滤器
   */
  Yox.filter = function (name, filter$1) {
      {
          if (string$1(name) && !filter$1) {
              return getResource(globalFilters, name);
          }
          setResource(globalFilters, name, filter$1);
      }
  };
  /**
   * 取值
   */
  Yox.prototype.get = function (keypath, defaultValue) {
      return this.$observer.get(keypath, defaultValue);
  };
  /**
   * 设值
   */
  Yox.prototype.set = function (keypath, value) {
      // 组件经常有各种异步改值，为了避免组件销毁后依然调用 set
      // 这里判断一下，至于其他方法的异步调用就算了，业务自己控制吧
      var ref = this;
          var $observer = ref.$observer;
      if ($observer) {
          $observer.set(keypath, value);
      }
  };
  /**
   * 监听事件，支持链式调用
   */
  Yox.prototype.on = function (type, listener) {
      addEvents(this, type, listener);
      return this;
  };
  /**
   * 监听一次事件，支持链式调用
   */
  Yox.prototype.once = function (type, listener) {
      addEvents(this, type, listener, TRUE$1);
      return this;
  };
  /**
   * 取消监听事件，支持链式调用
   */
  Yox.prototype.off = function (type, listener) {
      this.$emitter.off(type, listener);
      return this;
  };
  /**
   * 发射事件
   */
  Yox.prototype.fire = function (type, data, downward) {
      // 外部为了使用方便，fire(type) 或 fire(type, data) 就行了
      // 内部为了保持格式统一
      // 需要转成 Event，这样还能知道 target 是哪个组件
      var instance = this;
          var $emitter = instance.$emitter;
          var $parent = instance.$parent;
          var $children = instance.$children;
      // 生成事件对象
      var event;
      if (CustomEvent.is(type)) {
          event = type;
      }
      else if (string$1(type)) {
          event = new CustomEvent(type);
      }
      else {
          var emitterEvent = type;
          event = new CustomEvent(emitterEvent.type);
          event.ns = emitterEvent.ns;
      }
      // 先解析出命名空间，避免每次 fire 都要解析
      if (event.ns === UNDEFINED$1) {
          var emitterEvent$1 = $emitter.toEvent(event.type);
          event.type = emitterEvent$1.type;
          event.ns = emitterEvent$1.ns;
      }
      // 如果手动 fire 带上了事件命名空间
      // 则命名空间不能是 native，因为 native 有特殊用处
      {
          if (event.ns === MODIFER_NATIVE) {
              error(("The namespace \"" + MODIFER_NATIVE + "\" is not permitted."));
          }
      }
      // 告诉外部是谁发出的事件
      if (!event.target) {
          event.target = instance;
      }
      // 事件参数列表
      var args = [event], 
      // 事件是否正常结束（未被停止冒泡）
      isComplete;
      // 比如 fire('name', true) 直接向下发事件
      if (object$1(data)) {
          push(args, data);
      }
      else if (data === TRUE$1) {
          downward = TRUE$1;
      }
      // 向上发事件会经过自己
      // 如果向下发事件再经过自己，就产生了一次重叠
      // 这是没有必要的，而且会导致向下发事件时，外部能接收到该事件，但我们的本意只是想让子组件接收到事件
      isComplete = downward && event.target === instance
          ? TRUE$1
          : $emitter.fire(event, args);
      if (isComplete) {
          if (downward) {
              if ($children) {
                  event.phase = CustomEvent.PHASE_DOWNWARD;
                  each$2($children, function (child) {
                      return isComplete = child.fire(event, data, TRUE$1);
                  });
              }
          }
          else if ($parent) {
              event.phase = CustomEvent.PHASE_UPWARD;
              isComplete = $parent.fire(event, data);
          }
      }
      return isComplete;
  };
  /**
   * 监听数据变化，支持链式调用
   */
  Yox.prototype.watch = function (keypath, watcher, immediate) {
      this.$observer.watch(keypath, watcher, immediate);
      return this;
  };
  /**
   * 取消监听数据变化，支持链式调用
   */
  Yox.prototype.unwatch = function (keypath, watcher) {
      this.$observer.unwatch(keypath, watcher);
      return this;
  };
  /**
   * 加载组件，组件可以是同步或异步，最后会调用 callback
   *
   * @param name 组件名称
   * @param callback 组件加载成功后的回调
   */
  Yox.prototype.loadComponent = function (name, callback) {
      {
          if (!loadComponent(this.$components, name, callback)) {
              {
                  if (!loadComponent(globalComponents, name, callback)) {
                      error(("The component \"" + name + "\" is not found."));
                  }
              }
          }
      }
  };
  /**
   * 创建子组件
   *
   * @param options 组件配置
   * @param vnode 虚拟节点
   */
  Yox.prototype.createComponent = function (options, vnode) {
      {
          var instance = this;
          options = copy(options);
          options.root = instance.$root || instance;
          options.parent = instance;
          options.context = vnode.context;
          options.vnode = vnode;
          options.replace = TRUE$1;
          var props = vnode.props;
              var slots = vnode.slots;
              var model = vnode.model;
          if (model) {
              if (!props) {
                  props = {};
              }
              var key = options.model || MODEL_PROP_DEFAULT;
              props[key] = model.value;
              options.model = key;
          }
          if (props) {
              options.props = props;
          }
          if (slots) {
              options.slots = slots;
          }
          var child = new Yox(options);
          push(instance.$children || (instance.$children = []), child);
          var node = child.$el;
          if (node) {
              vnode.node = node;
          }
          else {
              fatal(("The root element of component \"" + (vnode.tag) + "\" is not found."));
          }
          return child;
      }
  };
  /**
   * 注册当前组件级别的指令
   */
  Yox.prototype.directive = function (name, directive$1) {
      {
          var instance = this;
              var $directives = instance.$directives;
          if (string$1(name) && !directive$1) {
              return getResource($directives, name, Yox.directive);
          }
          setResource($directives || (instance.$directives = {}), name, directive$1);
      }
  };
  /**
   * 注册当前组件级别的过渡动画
   */
  Yox.prototype.transition = function (name, transition$1) {
      {
          var instance = this;
              var $transitions = instance.$transitions;
          if (string$1(name) && !transition$1) {
              return getResource($transitions, name, Yox.transition);
          }
          setResource($transitions || (instance.$transitions = {}), name, transition$1);
      }
  };
  /**
   * 注册当前组件级别的组件
   */
  Yox.prototype.component = function (name, component$1) {
      {
          var instance = this;
              var $components = instance.$components;
          if (string$1(name) && !component$1) {
              return getResource($components, name, Yox.component);
          }
          setResource($components || (instance.$components = {}), name, component$1);
      }
  };
  /**
   * 注册当前组件级别的子模板
   */
  Yox.prototype.partial = function (name, partial$1) {
      {
          var instance = this;
              var $partials = instance.$partials;
          if (string$1(name) && !partial$1) {
              return getResource($partials, name, Yox.partial);
          }
          setResource($partials || (instance.$partials = {}), name, partial$1, Yox.compile);
      }
  };
  /**
   * 注册当前组件级别的过滤器
   */
  Yox.prototype.filter = function (name, filter$1) {
      {
          var instance = this;
              var $filters = instance.$filters;
          if (string$1(name) && !filter$1) {
              return getResource($filters, name, Yox.filter);
          }
          setResource($filters || (instance.$filters = {}), name, filter$1);
      }
  };
  /**
   * 对于某些特殊场景，修改了数据，但是模板的依赖中并没有这一项
   * 而你非常确定需要更新模板，强制刷新正是你需要的
   */
  Yox.prototype.forceUpdate = function (props) {
      {
          var instance = this;
              var $options = instance.$options;
              var $vnode = instance.$vnode;
              var $nextTask = instance.$nextTask;
          if ($vnode) {
              if (props) {
                  var beforePropsUpdateHook = $options[HOOK_BEFORE_PROPS_UPDATE];
                  if (beforePropsUpdateHook) {
                      beforePropsUpdateHook.call(instance, props);
                  }
                  instance.set(props);
              }
              // 当前可能正在进行下一轮更新
              $nextTask.run();
              // 没有更新模板，强制刷新
              if (!props && $vnode === instance.$vnode) {
                  instance.update(instance.render(), $vnode);
              }
          }
      }
  };
  /**
   * 把模板抽象语法树渲染成 virtual dom
   */
  Yox.prototype.render = function () {
      {
          var instance = this;
              var $observer = instance.$observer;
              var $dependencies = instance.$dependencies;
              var oldDependencies = $dependencies || EMPTY_OBJECT, dependencies = {}, vnode = render(instance, instance.$template, dependencies, $observer.data, $observer.computed, instance.$filters, globalFilters, instance.$partials, globalPartials, instance.$directives, globalDirectives, instance.$transitions, globalTransitions);
          for (var key in dependencies) {
              if (!(key in oldDependencies)) {
                  $observer.watch(key, markDirty);
              }
          }
          if ($dependencies) {
              for (var key$1 in $dependencies) {
                  if (!(key$1 in dependencies)) {
                      $observer.unwatch(key$1, markDirty);
                  }
              }
          }
          instance.$dependencies = dependencies;
          return vnode;
      }
  };
  /**
   * 更新 virtual dom
   *
   * @param vnode
   * @param oldVNode
   */
  Yox.prototype.update = function (vnode, oldVNode) {
      {
          var instance = this;
              var $vnode = instance.$vnode;
              var $options = instance.$options;
              var afterHookName;
          if ($vnode) {
              var beforeUpdateHook = $options[HOOK_BEFORE_UPDATE];
              if (beforeUpdateHook) {
                  beforeUpdateHook.call(instance);
              }
              lifeCycle.fire(instance, HOOK_BEFORE_UPDATE);
              patch(domApi, vnode, oldVNode);
              afterHookName = HOOK_AFTER_UPDATE;
          }
          else {
              var beforeMountHook = $options[HOOK_BEFORE_MOUNT];
              if (beforeMountHook) {
                  beforeMountHook.call(instance);
              }
              lifeCycle.fire(instance, HOOK_BEFORE_MOUNT);
              patch(domApi, vnode, oldVNode);
              instance.$el = vnode.node;
              afterHookName = HOOK_AFTER_MOUNT;
          }
          instance.$vnode = vnode;
          // 跟 nextTask 保持一个节奏
          // 这样可以预留一些优化的余地
          Yox.nextTick(function () {
              if (instance.$vnode) {
                  var afterHook = $options[afterHookName];
                  if (afterHook) {
                      afterHook.call(instance);
                  }
                  lifeCycle.fire(instance, afterHookName);
              }
          });
      }
  };
  /**
   * 校验组件参数
   *
   * @param props
   */
  Yox.prototype.checkProp = function (key, value) {
      {
          var ref = this.$options;
              var name = ref.name;
              var propTypes = ref.propTypes;
          if (propTypes) {
              var rule = propTypes[key];
              if (rule) {
                  checkProp(name, key, value, rule);
              }
          }
      }
  };
  /**
   * 销毁组件
   */
  Yox.prototype.destroy = function () {
      var instance = this;
          var $parent = instance.$parent;
          var $options = instance.$options;
          var $emitter = instance.$emitter;
          var $observer = instance.$observer;
      {
          var beforeDestroyHook = $options[HOOK_BEFORE_DESTROY];
          if (beforeDestroyHook) {
              beforeDestroyHook.call(instance);
          }
          lifeCycle.fire(instance, HOOK_BEFORE_DESTROY);
          var $vnode = instance.$vnode;
          if ($parent && $parent.$children) {
              remove$6($parent.$children, instance);
          }
          if ($vnode) {
              destroy(domApi, $vnode, !$parent);
          }
      }
      $observer.destroy();
      {
          var afterDestroyHook = $options[HOOK_AFTER_DESTROY];
          if (afterDestroyHook) {
              afterDestroyHook.call(instance);
          }
          lifeCycle.fire(instance, HOOK_AFTER_DESTROY);
      }
      // 发完 after destroy 事件再解绑所有事件
      $emitter.off();
      instance.$el = UNDEFINED$1;
  };
  /**
   * 因为组件采用的是异步更新机制，为了在更新之后进行一些操作，可使用 nextTick
   */
  Yox.prototype.nextTick = function (task) {
      this.$nextTask.append(task, this);
  };
  /**
   * 取反 keypath 对应的数据
   *
   * 不管 keypath 对应的数据是什么类型，操作后都是布尔型
   */
  Yox.prototype.toggle = function (keypath) {
      return this.$observer.toggle(keypath);
  };
  /**
   * 递增 keypath 对应的数据
   *
   * 注意，最好是整型的加法，如果涉及浮点型，不保证计算正确
   *
   * @param keypath 值必须能转型成数字，如果不能，则默认从 0 开始递增
   * @param step 步进值，默认是 1
   * @param max 可以递增到的最大值，默认不限制
   */
  Yox.prototype.increase = function (keypath, step, max) {
      return this.$observer.increase(keypath, step, max);
  };
  /**
   * 递减 keypath 对应的数据
   *
   * 注意，最好是整型的减法，如果涉及浮点型，不保证计算正确
   *
   * @param keypath 值必须能转型成数字，如果不能，则默认从 0 开始递减
   * @param step 步进值，默认是 1
   * @param min 可以递减到的最小值，默认不限制
   */
  Yox.prototype.decrease = function (keypath, step, min) {
      return this.$observer.decrease(keypath, step, min);
  };
  /**
   * 在数组指定位置插入元素
   *
   * @param keypath
   * @param item
   * @param index
   */
  Yox.prototype.insert = function (keypath, item, index) {
      return this.$observer.insert(keypath, item, index);
  };
  /**
   * 在数组尾部添加元素
   *
   * @param keypath
   * @param item
   */
  Yox.prototype.append = function (keypath, item) {
      return this.$observer.append(keypath, item);
  };
  /**
   * 在数组首部添加元素
   *
   * @param keypath
   * @param item
   */
  Yox.prototype.prepend = function (keypath, item) {
      return this.$observer.prepend(keypath, item);
  };
  /**
   * 通过索引移除数组中的元素
   *
   * @param keypath
   * @param index
   */
  Yox.prototype.removeAt = function (keypath, index) {
      return this.$observer.removeAt(keypath, index);
  };
  /**
   * 直接移除数组中的元素
   *
   * @param keypath
   * @param item
   */
  Yox.prototype.remove = function (keypath, item) {
      return this.$observer.remove(keypath, item);
  };
  /**
   * 拷贝任意数据，支持深拷贝
   *
   * @param data
   * @param deep
   */
  Yox.prototype.copy = function (data, deep) {
      return this.$observer.copy(data, deep);
  };
  /**
   * core 版本
   */
  Yox.version = "1.0.0-alpha.227";
  /**
   * 方便外部共用的通用逻辑，特别是写插件，减少重复代码
   */
  Yox.is = is;
  Yox.dom = domApi;
  Yox.array = array;
  Yox.object = object;
  Yox.string = string;
  Yox.logger = logger;
  Yox.Event = CustomEvent;
  Yox.Emitter = Emitter;
  Yox.lifeCycle = lifeCycle;
  /**
   * 外部可配置的对象
   */
  Yox.config = PUBLIC_CONFIG;
  var toString = Object.prototype.toString;
  function matchType(value, type) {
      return type === 'numeric'
          ? numeric(value)
          : lower(toString.call(value)) === ("[object " + type + "]");
  }
  function checkProp(componentName, key, value, rule) {
      // 传了数据
      if (value !== UNDEFINED$1) {
          var type = rule.type;
          // 如果不写 type 或 type 不是 字符串 或 数组
          // 就当做此规则无效，和没写一样
          if (type) {
              // 自定义函数判断是否匹配类型
              // 自己打印警告信息吧
              if (func(type)) {
                  type(key, value, componentName);
              }
              else {
                  var matched = FALSE$1;
                  // type: 'string'
                  if (!falsy$1(type)) {
                      matched = matchType(value, type);
                  }
                  // type: ['string', 'number']
                  else if (!falsy$2(type)) {
                      each$2(type, function (item) {
                          if (matchType(value, item)) {
                              matched = TRUE$1;
                              return FALSE$1;
                          }
                      });
                  }
                  if (!matched) {
                      warn(("The type of prop \"" + key + "\" expected to be \"" + type + "\", but is \"" + value + "\"."), componentName);
                  }
              }
          }
          else {
              warn(("The prop \"" + key + "\" in propTypes has no type."), componentName);
          }
      }
      // 没传值但此项是必传项
      else if (rule.required) {
          warn(("The prop \"" + key + "\" is marked as required, but its value is undefined."), componentName);
      }
  }
  function setFlexibleOptions(instance, key, value) {
      if (func(value)) {
          instance[key](value.call(instance));
      }
      else if (object$1(value)) {
          instance[key](value);
      }
  }
  function addEvent(instance, type, listener, once) {
      var $emitter = instance.$emitter;
      var filter = $emitter.toFilter(type, listener);
      var options = {
          listener: filter.listener,
          ns: filter.ns,
          ctx: instance,
      };
      if (once) {
          options.max = 1;
      }
      $emitter.on(filter.type, options);
  }
  function addEvents(instance, type, listener, once) {
      if (string$1(type)) {
          addEvent(instance, type, listener, once);
      }
      else {
          each(type, function (value, key) {
              addEvent(instance, key, value, once);
          });
      }
  }
  function loadComponent(registry, name, callback) {
      if (registry && registry[name]) {
          var component = registry[name];
          // 注册的是异步加载函数
          if (func(component)) {
              registry[name] = [callback];
              var componentCallback = function (result) {
                  var queue = registry[name], options = result['default'] || result;
                  registry[name] = options;
                  each$2(queue, function (callback) {
                      callback(options);
                  });
              }, promise = component(componentCallback);
              if (promise) {
                  promise.then(componentCallback);
              }
          }
          // 正在加载中
          else if (array$1(component)) {
              push(component, callback);
          }
          // 不是异步加载函数，直接同步返回
          else {
              callback(component);
          }
          return TRUE$1;
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
      if (string$1(name)) {
          registry[name] = formatValue ? formatValue(value) : value;
      }
      else {
          each(name, function (value, key) {
              registry[key] = formatValue ? formatValue(value) : value;
          });
      }
  }
  {
      // 全局注册内置过滤器
      Yox.filter({
          hasSlot: function(name) {
              // 不鼓励在过滤器使用 this
              // 因此过滤器没有 this 的类型声明
              // 这个内置过滤器是不得不用 this
              return this.get(SLOT_DATA_PREFIX + name) !== UNDEFINED$1;
          }
      });
  }

  return Yox;

})));
//# sourceMappingURL=yox.js.map
