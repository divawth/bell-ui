/**
 * bell-ui.js v0.26.5
 * (c) 2018-2022 
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('yox')) :
  typeof define === 'function' && define.amd ? define(['exports', 'yox'], factory) :
  (global = global || self, factory(global.Bell = {}, global.Yox));
}(this, function (exports, Yox) { 'use strict';

  Yox = Yox && Yox.hasOwnProperty('default') ? Yox['default'] : Yox;

  var template = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-row'+(_r(_Q,'autoWrap',_U.autoWrap).value?' bell-row-auto-wrap':'')+(_r(_Q,'breakpoint',_U.breakpoint).value?' bell-row-'+_y(_r(_Q,'breakpoint',_U.breakpoint).value):'')+(_r(_Q,'justify',_U.justify).value?' bell-row-justify-'+_y(_r(_Q,'justify',_U.justify).value):'')+(_r(_Q,'align',_U.align).value?' bell-row-align-'+_y(_r(_Q,'align',_U.align).value):'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var TRUE = true;
  var FALSE = false;
  var NULL = null;
  var UNDEFINED = void 0;
  var RAW_DATE = 'date';
  var RAW_ARRAY = 'array';
  var RAW_STRING = 'string';
  var RAW_BOOLEAN = 'boolean';
  var RAW_NUMERIC = 'numeric';
  var RAW_NUMBER = 'number';
  var RAW_OBJECT = 'object';
  var RAW_FUNCTION = 'function';
  var RAW_HORIZONTAL = 'horizontal';
  var RAW_VERTICAL = 'vertical';
  var RAW_INLINE = 'inline';
  var RAW_SMALL = 'small';
  var RAW_DEFAULT = 'default';
  var RAW_LARGE = 'large';
  var RAW_ALWAYS = 'always';
  var RAW_NEVER = 'never';
  var RAW_HOVER = 'hover';
  var RAW_CLICK = 'click';
  var RAW_CUSTOM = 'custom';
  var RAW_CENTER = 'center';
  var RAW_MIDDLE = 'middle';
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
  var RAW_TYPE_SUCCESS = 'success';
  var RAW_TYPE_WARNING = 'warning';
  var RAW_TYPE_ERROR = 'error';
  var RAW_TYPE_INFO = 'info';
  var RAW_TYPE_DASHED = 'dashed';
  var RAW_TYPE_LINK = 'link';
  var RAW_TYPE_TEXT = 'text';
  var RAW_TYPE_TITLE = 'title';
  var RAW_TYPE_CONTENT = 'content';
  var RAW_TYPE_MUTED = 'muted';
  var RAW_TYPE_PURE = 'pure';
  var RAW_SHAPE_CIRCLE = 'circle';
  var RAW_SHAPE_ROUND = 'round';
  var RAW_EVENT_KEYPRESS = 'keypress';
  var RAW_EVENT_KEYDOWN = 'keydown';
  var RAW_EVENT_KEYUP = 'keyup';
  var RAW_EVENT_MOUSEMOVE = 'mousemove';
  var RAW_EVENT_MOUSEUP = 'mouseup';
  var RAW_EVENT_SCROLL = 'scroll';
  var RAW_EVENT_RESIZE = 'resize';
  var RAW_EVENT_BEFORE_DESTROY = 'beforeDestroy';
  var RAW_SLOT_PREFIX = '$slot_';
  var RAW_SLOT_CHILDREN = RAW_SLOT_PREFIX + 'children';
  var RAW_DARK = 'dark';
  var RAW_LIGHT = 'light';
  var RAW_IMAGE_ACCEPT = 'image/png,image/jpeg,image/jpg,image/gif';
  var RAW_THEME_ARRAY = [
      RAW_DARK,
      RAW_LIGHT ];
  var RAW_STATUS_ARRAY = [
      RAW_TYPE_INFO,
      RAW_TYPE_SUCCESS,
      RAW_TYPE_WARNING,
      RAW_TYPE_ERROR ];
  var RAW_TYPE_ARRAY = [
      RAW_TYPE_PRIMARY,
      RAW_TYPE_INFO,
      RAW_TYPE_SUCCESS,
      RAW_TYPE_WARNING,
      RAW_TYPE_ERROR ];
  var RAW_SIZE_ARRAY = [
      RAW_SMALL,
      RAW_DEFAULT,
      RAW_LARGE ];
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
  var RAW_STYLE_TYPE = [
      RAW_STRING,
      RAW_OBJECT,
      RAW_ARRAY ];
  var WINDOW = window;
  var DOCUMENT = document;
  var BODY = DOCUMENT.body;
  var HOVER_DELAY = 100;

  var element = DOCUMENT.createElement('div');
  var prefixs = ['Webkit', 'Moz', 'O', 'ms'];
  function testCSS(property) {
      var upperCase = property.charAt(0).toUpperCase()
          + property.slice(1);
      var list = (property
          + ' '
          + prefixs.join(upperCase + ' ')
          + upperCase).split(' ');
      for (var i = 0, len = list.length; i < len; i++) {
          if (list[i] in element.style) {
              return list[i];
          }
      }
  }
  var screenWidth = WINDOW.screen.availWidth;
  var transitionEnd = testCSS('transition') ? 'transitionend' : '';
  var supportTransform = testCSS('transform') ? TRUE : FALSE;
  var supportFlexGap = testCSS('gap') ? TRUE : FALSE;
  function onTransitionEnd(el, callback) {
      // 如果 el 已经被隐藏，则直接调用 callback
      if (transitionEnd && (el.offsetWidth || el.offsetHeight)) {
          var listener_1 = function () {
              Yox.dom.off(el, transitionEnd, listener_1);
              callback();
          };
          Yox.dom.on(el, transitionEnd, listener_1);
      }
      else {
          Yox.nextTick(callback);
      }
  }
  var supportPageOffset = WINDOW.pageXOffset !== UNDEFINED;
  var isCSS1Compat = DOCUMENT.compatMode === 'CSS1Compat';
  function getPageX() {
      return supportPageOffset
          ? WINDOW.pageXOffset
          : isCSS1Compat
              ? DOCUMENT.documentElement.scrollLeft
              : BODY.scrollLeft;
  }
  function getPageY() {
      return supportPageOffset
          ? WINDOW.pageYOffset
          : isCSS1Compat
              ? DOCUMENT.documentElement.scrollTop
              : BODY.scrollTop;
  }
  var requestAnimationFrame = (WINDOW.requestAnimationFrame ||
      WINDOW['webkitRequestAnimationFrame'] ||
      WINDOW['mozRequestAnimationFrame'] ||
      WINDOW['msRequestAnimationFrame'] ||
      function (callback) {
          return WINDOW.setTimeout(callback, 1000 / 60);
      });
  function contains(element, target) {
      if (element.contains && element.contains(target)) {
          return TRUE;
      }
      else if (element.compareDocumentPosition && element.compareDocumentPosition(target) > 16) {
          return TRUE;
      }
      return FALSE;
  }
  function toNumber(value, defaultValue) {
      return Yox.is.numeric(value)
          ? +value
          : defaultValue !== UNDEFINED
              ? defaultValue
              : 0;
  }
  function toString(value, defaultValue) {
      if (value == NULL) {
          return defaultValue !== UNDEFINED
              ? defaultValue
              : '';
      }
      return '' + value;
  }
  function toPixel(value) {
      return value + 'px';
  }
  function toPercent(value) {
      return value + '%';
  }
  function findComponentUpward(parent, componentName) {
      if (typeof componentName === 'string') {
          componentName = [componentName];
      }
      else {
          componentName = componentName;
      }
      while (parent) {
          var name = parent.$options.name;
          if (name && Yox.array.has(componentName, name)) {
              break;
          }
          else {
              parent = parent.$parent;
          }
      }
      return parent;
  }
  function oneOf(values) {
      return function (key, value, componentName) {
          // 只需要检测有值的情况
          if (value === UNDEFINED) {
              return;
          }
          // 传值在枚举值中
          if (Yox.array.has(values, value, FALSE)) {
              return;
          }
          Yox.logger.warn(key + " \u671F\u671B\u662F " + values.join(',') + " \u4E2D\u7684\u503C\uFF0C\u5B9E\u9645\u4F20\u503C [" + value + "]\u3002", componentName);
      };
  }
  function getNowTime() {
      return Date.now();
  }
  var SECOND = 1000;
  var MINUTE = 60 * SECOND;
  var HOUR = 60 * MINUTE;
  var DAY = 24 * HOUR;
  function formatMillisecond(value, options) {
      var format = options.format, trimDay = options.trimDay, trimHour = options.trimHour;
      var showDay = format.indexOf('d') >= 0;
      var showHour = format.indexOf('H') >= 0;
      var showMinute = format.indexOf('m') >= 0;
      var showSecond = format.indexOf('s') >= 0;
      var day = 0;
      if (showDay) {
          day = Math.floor(value / DAY);
          value %= DAY;
      }
      var hour = 0;
      if (showHour) {
          hour = Math.floor(value / HOUR);
          value %= HOUR;
      }
      var minute = 0;
      if (showMinute) {
          minute = Math.floor(value / MINUTE);
          value %= MINUTE;
      }
      var second = 0;
      if (showSecond) {
          second = Math.floor(value / SECOND);
          value %= SECOND;
      }
      if (!day && trimDay) {
          format = format.replace(/dd:/, '').replace(/d:/, '');
          if (!hour && trimHour) {
              format = format.replace(/HH:/, '').replace(/H:/, '');
          }
      }
      return format
          .replace(/dd/, padStart(day))
          .replace(/d/, toString(day))
          .replace(/HH/, padStart(hour))
          .replace(/H/, toString(hour))
          .replace(/mm/, padStart(minute))
          .replace(/m/, toString(minute))
          .replace(/SSS/, padStart(value, 3))
          .replace(/ss/, padStart(second))
          .replace(/s/, toString(second));
  }
  function padStart(value, length) {
      if (length === void 0) { length = 2; }
      var text = toString(value);
      var arrayLength = length - text.length + 1;
      if (arrayLength > 0) {
          return new Array(arrayLength).join('0') + value;
      }
      return text;
  }
  function scrollTo(element, from, to, duration, callback) {
      if (from === void 0) { from = 0; }
      if (duration === void 0) { duration = 500; }
      var difference = Math.abs(from - to);
      var step = duration > 0 ? Math.ceil(difference / duration * 50) : difference;
      function scroll(start, end, step) {
          if (start === end) {
              if (callback) {
                  callback();
              }
              return;
          }
          var duration = (start + step > end) ? end : start + step;
          if (start > end) {
              duration = (start - step < end) ? end : start - step;
          }
          if (element === WINDOW) {
              WINDOW.scrollTo(duration, duration);
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

  var responsiveMap = {
      xs: '(max-width: 575px)',
      sm: '(min-width: 576px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 992px)',
      xl: '(min-width: 1200px)',
      xxl: '(min-width: 1600px)',
  };
  var responsiveArray = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
  function eachBreakpoints(callback) {
      Yox.array.each(responsiveArray, function (key) {
          callback(key, window.matchMedia(responsiveMap[key]));
      });
  }
  function getCurrentBreakpoint() {
      var result;
      eachBreakpoints(function (breakpoint, mql) {
          if (mql.matches) {
              result = breakpoint;
          }
      });
      return result;
  }
  var store = new Yox({
      data: {
          breakpoint: getCurrentBreakpoint(),
      }
  });
  eachBreakpoints(function (breakpoint, mql) {
      var listener = function (event) {
          if (event.matches) {
              store.set('breakpoint', breakpoint);
          }
          else if (store.get('breakpoint') === breakpoint) {
              store.set('breakpoint', getCurrentBreakpoint());
          }
      };
      mql.addListener(listener);
  });
  function getBreakpoint() {
      return store.get('breakpoint');
  }
  function watchBreakpoint(watcher) {
      store.watch('breakpoint', watcher);
  }
  function unwatchBreakpoint(watcher) {
      store.unwatch('breakpoint', watcher);
  }
  function parseGutter(breakpoint, gutter) {
      if (gutter > 0) {
          return gutter;
      }
      else if (breakpoint && Yox.is.object(gutter)) {
          // 找最接近的
          var startIndex = responsiveArray.indexOf(breakpoint);
          if (startIndex >= 0) {
              for (var i = startIndex; i >= 0; i--) {
                  var value = gutter[responsiveArray[i]];
                  if (value > 0) {
                      return value;
                  }
              }
          }
      }
  }

  var Row = Yox.define({
      template: template,
      name: 'bell-Row',
      propTypes: {
          gutter: {
              type: [RAW_NUMERIC, RAW_OBJECT, RAW_ARRAY],
          },
          justify: {
              type: oneOf(['start', 'end', 'center', 'space-around', 'space-between']),
              value: 'start',
          },
          align: {
              type: oneOf([RAW_TOP, RAW_MIDDLE, RAW_BOTTOM]),
              value: RAW_TOP,
          },
          autoWrap: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          return {
              breakpoint: getBreakpoint(),
          };
      },
      computed: {
          responsiveGutter: function () {
              var gutter = this.get('gutter');
              if (gutter) {
                  if (!Yox.is.array(gutter)) {
                      gutter = [gutter];
                  }
                  var breakpoint = this.get('breakpoint');
                  return [
                      parseGutter(breakpoint, gutter[0]),
                      parseGutter(breakpoint, gutter[1]) ];
              }
          },
          inlineStyle: function () {
              var result = [];
              var customStyle = {};
              var responsiveGutter = this.get('responsiveGutter');
              if (responsiveGutter) {
                  if (responsiveGutter[0] > 0) {
                      var horizontalGutter = toPixel(responsiveGutter[0] / -2);
                      customStyle.marginLeft = horizontalGutter;
                      customStyle.marginRight = horizontalGutter;
                  }
                  if (responsiveGutter[1] > 0) {
                      if (supportFlexGap) {
                          customStyle.rowGap = toPixel(responsiveGutter[1]);
                      }
                      else {
                          var verticalGutter = toPixel(responsiveGutter[1] / -2);
                          customStyle.marginTop = verticalGutter;
                          customStyle.marginBottom = verticalGutter;
                      }
                  }
              }
              if (Yox.object.keys(customStyle).length > 0) {
                  result.push(customStyle);
              }
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          }
      },
      watchers: {
          autoWrap: function (autoWrap) {
              this.fire({
                  type: 'change',
                  ns: 'row',
              }, {
                  autoWrap: autoWrap,
              }, TRUE);
          },
          breakpoint: function (breakpoint) {
              this.fire({
                  type: 'change',
                  ns: 'row',
              }, {
                  breakpoint: breakpoint,
              }, TRUE);
          },
          responsiveGutter: function (responsiveGutter) {
              this.fire({
                  type: 'change',
                  ns: 'row',
              }, {
                  responsiveGutter: responsiveGutter,
              }, TRUE);
          }
      },
      afterMount: function () {
          var me = this;
          var watcher = function (value) {
              me.set('breakpoint', value);
          };
          watchBreakpoint(watcher);
          var destroy = function (component) {
              if (component === me) {
                  unwatchBreakpoint(watcher);
                  Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy);
              }
          };
          Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy);
      }
  });

  var template$1 = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-col'+(_r(_Q,'span',_U.span).value?' bell-col-'+_y(_r(_Q,'span',_U.span).value):'')+(_r(_Q,'order',_U.order).value?' bell-col-order-'+_y(_r(_Q,'order',_U.order).value):'')+(_r(_Q,'offset',_U.offset).value?' bell-col-offset-'+_y(_r(_Q,'offset',_U.offset).value):'')+(_r(_Q,'pull',_U.pull).value?' bell-col-pull-'+_y(_r(_Q,'pull',_U.pull).value):'')+(_r(_Q,'push',_U.push).value?' bell-col-push-'+_y(_r(_Q,'push',_U.push).value):'')+(_r(_Q,'responsiveClass',_U.responsiveClass).value?' '+_y(_r(_Q,'responsiveClass',_U.responsiveClass).value):'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Col = Yox.define({
      template: template$1,
      name: 'bell-Col',
      propTypes: {
          flex: {
              type: [RAW_NUMBER, RAW_STRING],
          },
          span: {
              type: RAW_NUMERIC,
          },
          order: {
              type: RAW_NUMERIC,
          },
          offset: {
              type: RAW_NUMERIC,
          },
          pull: {
              type: RAW_NUMERIC,
          },
          push: {
              type: RAW_NUMERIC,
          },
          xs: {
              type: [RAW_NUMERIC, RAW_OBJECT],
          },
          sm: {
              type: [RAW_NUMERIC, RAW_OBJECT],
          },
          md: {
              type: [RAW_NUMERIC, RAW_OBJECT],
          },
          lg: {
              type: [RAW_NUMERIC, RAW_OBJECT],
          },
          xl: {
              type: [RAW_NUMERIC, RAW_OBJECT],
          },
          xxl: {
              type: [RAW_NUMERIC, RAW_OBJECT],
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function (options) {
          var row = findComponentUpward(options.parent, 'bell-Row');
          return {
              autoWrap: row.get('autoWrap'),
              breakpoint: row.get('breakpoint'),
              responsiveGutter: row.get('responsiveGutter'),
          };
      },
      events: {
          change: {
              listener: function (_, data) {
                  this.set(data);
              },
              ns: 'row',
          }
      },
      computed: {
          responsiveClass: function () {
              var me = this;
              var breakpoint = me.get('breakpoint');
              var breakpointList = responsiveArray.map(function (breakpoint) {
                  return me.get(breakpoint);
              });
              var breakpointName;
              var breakpointConfig;
              var startIndex = responsiveArray.indexOf(breakpoint);
              if (startIndex >= 0) {
                  for (var i = startIndex; i >= 0; i--) {
                      var value = breakpointList[i];
                      if (value) {
                          breakpointName = responsiveArray[i];
                          breakpointConfig = value;
                          break;
                      }
                  }
              }
              if (breakpointConfig) {
                  var result = [];
                  if (Yox.is.object(breakpointConfig)) {
                      var span = breakpointConfig.span, order = breakpointConfig.order, offset = breakpointConfig.offset, pull = breakpointConfig.pull, push = breakpointConfig.push;
                      if (span) {
                          result.push('bell-col-' + breakpointName + '-' + span);
                      }
                      if (order) {
                          result.push('bell-col-' + breakpointName + '-order-' + order);
                      }
                      if (offset) {
                          result.push('bell-col-' + breakpointName + '-offset-' + offset);
                      }
                      if (pull) {
                          result.push('bell-col-' + breakpointName + '-pull-' + pull);
                      }
                      if (push) {
                          result.push('bell-col-' + breakpointName + '-push-' + push);
                      }
                  }
                  else if (Yox.is.numeric(breakpointConfig)) {
                      result.push('bell-col-' + breakpointName + '-' + breakpointConfig);
                  }
                  if (result.length) {
                      return result.join(' ');
                  }
              }
          },
          inlineStyle: function () {
              var result = [];
              var customStyle = {};
              var flex = this.get('flex');
              if (Yox.is.numeric(flex)) {
                  customStyle.flex = flex + " " + flex + " auto";
              }
              else if (flex && Yox.is.string(flex)) {
                  customStyle.flex = /^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)
                      ? "0 0 " + flex
                      : flex;
              }
              var autoWrap = this.get('autoWrap');
              // Hack for Firefox to avoid size issue
              // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
              if (!autoWrap && customStyle.flex) {
                  customStyle.minWidth = 0;
              }
              var responsiveGutter = this.get('responsiveGutter');
              if (responsiveGutter) {
                  if (responsiveGutter[0] > 0) {
                      var horizontalGutter = toPixel(responsiveGutter[0] / 2);
                      customStyle.paddingLeft = horizontalGutter;
                      customStyle.paddingRight = horizontalGutter;
                  }
                  if (responsiveGutter[1] > 0 && !supportFlexGap) {
                      var verticalGutter = toPixel(responsiveGutter[1] / 2);
                      customStyle.paddingTop = verticalGutter;
                      customStyle.paddingBottom = verticalGutter;
                  }
              }
              if (Yox.object.keys(customStyle).length > 0) {
                  result.push(customStyle);
              }
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          }
      },
  });

  var template$2 = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-add-icon'},$6={class:'bell-add-title'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;return _S}({children:function(){var _T=[];_T.push({children:function(){var _T=[];($0={children:_l('$slot_icon')||function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{name:'add-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3});_r(_Q,'title',_U.title).value?_T.push({context:_G,nativeAttrs:$6,operator:_B,tag:'div',text:_y(_r(_Q,'title',_U.title).value),type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,events:{click:_f('click','click.add','click','','click','add')},nativeAttrs:{class:'bell-add'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var template$3 = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-icon'+(_r(_Q,'name',_U.name).value?' bell-icon-'+_y(_r(_Q,'name',_U.name).value):'')+(_r(_Q,'spin',_U.spin).value?' bell-icon-spin':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'i',type:3}));}})();

  var Icon = Yox.define({
      template: template$3,
      name: 'bell-Icon',
      propTypes: {
          name: {
              type: RAW_STRING,
              required: TRUE,
          },
          size: {
              type: RAW_NUMERIC,
          },
          color: {
              type: RAW_STRING,
          },
          spin: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      computed: {
          inlineStyle: function () {
              var result = [];
              var customStyle = {};
              var color = this.get('color');
              var size = this.get('size');
              if (color) {
                  customStyle.color = color;
              }
              if (size > 0) {
                  customStyle.fontSize = toPixel(size);
              }
              if (Yox.object.keys(customStyle).length > 0) {
                  result.push(customStyle);
              }
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          },
      }
  });

  var Add = Yox.define({
      template: template$2,
      name: 'bell-Add',
      propTypes: {
          title: {
              type: RAW_STRING,
          },
          width: {
              type: RAW_NUMERIC,
              value: 100,
          },
          height: {
              type: RAW_NUMERIC,
              value: 100,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      computed: {
          inlineStyle: function () {
              var result = [];
              var width = this.get('width');
              var height = this.get('height');
              result.push({
                  width: toPixel(width),
                  height: toPixel(height),
              });
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          },
      },
      components: {
          Icon: Icon,
      }
  });

  var template$4 = (function(){var $1=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({context:_G,nativeAttrs:{class:'bell-countdown'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',text:_y(_r(_Q,'formatedValue',_U.formatedValue).value),type:3}));}})();

  var SECOND$1 = 1000;
  var Countdown = Yox.define({
      template: template$4,
      name: 'bell-Countdown',
      propTypes: {
          value: {
              type: RAW_NUMERIC,
          },
          step: {
              type: RAW_NUMERIC,
          },
          format: {
              type: RAW_STRING,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      computed: {
          formatedValue: function () {
              var value = toNumber(this.get('value'));
              var format = this.get('format') || 'HH:mm:ss';
              return formatMillisecond(value, { format: format });
          }
      },
      afterMount: function () {
          var me = this;
          var timer;
          var step;
          var clearTimer = function () {
              if (timer) {
                  clearInterval(timer);
                  timer = UNDEFINED;
              }
          };
          var next = function () {
              var value = toNumber(me.get('value'));
              var isFinish;
              if (value > 0) {
                  var newValue = Math.max(value - step, 0);
                  me.set('value', newValue);
                  isFinish = newValue == 0;
                  me.fire({
                      type: 'change',
                      ns: 'countdown'
                  }, {
                      value: newValue,
                  });
              }
              else {
                  isFinish = TRUE;
              }
              if (isFinish) {
                  clearTimer();
                  me.fire({
                      type: 'finish',
                      ns: 'countdown'
                  });
              }
          };
          me.watch('step', function (newValue) {
              step = toNumber(newValue, SECOND$1);
              clearTimer();
              if (step > 0) {
                  timer = window.setInterval(next, step);
              }
          }, TRUE);
          var destroy = function (component) {
              if (component === me) {
                  clearTimer();
                  Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy);
              }
          };
          Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy);
      }
  });

  var template$5 = (function(){var $0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));}})();

  var ResizeObserver$1 = Yox.define({
      template: template$5,
      name: 'bell-ResizeObserver',
      propTypes: {
          delay: {
              type: RAW_NUMERIC,
          }
      },
      afterMount: function () {
          var me = this;
          var element = me.$el;
          var delay = toNumber(me.get('delay'), 0);
          var timerRef;
          var timerTimestamp;
          var actualWidth;
          var actualHeight;
          var handleResize = function (width, height) {
              if (width > 0 && height > 0) {
                  actualWidth = width;
                  actualHeight = height;
                  // 需要延时的情况下，
                  if (delay > 0) {
                      var now = getNowTime();
                      var rest = timerTimestamp > 0 ? now - timerTimestamp : delay;
                      if (!timerRef) {
                          timerTimestamp = now;
                          timerRef = setTimeout(fireResize, rest);
                          return;
                      }
                      if (rest > 0) {
                          clearTimeout(timerRef);
                          timerRef = setTimeout(fireResize, delay);
                          return;
                      }
                  }
                  fireResize();
              }
          };
          var fireResize = function () {
              if (timerRef) {
                  timerTimestamp = 0;
                  clearTimeout(timerRef);
              }
              me.fire({
                  type: 'resize',
                  ns: 'resizeObserver',
              }, {
                  width: actualWidth,
                  height: actualHeight,
              });
          };
          handleResize(element.clientWidth, element.clientHeight);
          // @ts-ignore
          if (ResizeObserver) {
              // @ts-ignore
              var resizeObserver_1 = new ResizeObserver(function (entries) {
                  var _a = entries[0].contentRect, width = _a.width, height = _a.height;
                  handleResize(width, height);
              });
              resizeObserver_1.observe(element);
              var destroy_1 = function (component) {
                  if (component === me) {
                      resizeObserver_1.disconnect();
                      Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy_1);
                  }
              };
              Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy_1);
          }
      }
  });

  var template$6 = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-menu'+(_r(_Q,'mode',_U.mode).value?' bell-menu-'+_y(_r(_Q,'mode',_U.mode).value):'')+(!_r(_Q,'inner',_U.inner).value&&_r(_Q,'theme',_U.theme).value?' bell-menu-'+_y(_r(_Q,'theme',_U.theme).value):'')+(_r(_Q,'collapsed',_U.collapsed).value?' bell-menu-collapsed':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Menu = Yox.define({
      template: template$6,
      name: 'bell-Menu',
      propTypes: {
          mode: {
              type: oneOf([RAW_HORIZONTAL, RAW_VERTICAL, RAW_INLINE]),
              value: RAW_HORIZONTAL,
          },
          theme: {
              type: oneOf(RAW_THEME_ARRAY),
              value: RAW_LIGHT,
          },
          collapsed: {
              type: RAW_BOOLEAN,
          },
          activeName: {
              type: RAW_STRING,
          },
          openNames: {
              type: RAW_ARRAY,
              value: function () {
                  return [];
              }
          },
          inner: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      watchers: {
          activeName: function (activeName) {
              this.fire({
                  type: 'activeName',
                  ns: 'menu',
              }, { activeName: activeName }, TRUE);
          },
          openNames: function (openNames) {
              this.fire({
                  type: 'openNames',
                  ns: 'menu',
              }, { openNames: openNames }, TRUE);
          },
          collapsed: function (collapsed) {
              this.fire({
                  type: 'change',
                  ns: 'menu',
              }, { collapsed: collapsed }, TRUE);
          },
          theme: function (theme) {
              this.fire({
                  type: 'change',
                  ns: 'menu',
              }, { theme: theme }, TRUE);
          },
          mode: function (mode) {
              this.fire({
                  type: 'change',
                  ns: 'menu',
              }, { mode: mode }, TRUE);
          },
      },
      events: {
          click: {
              listener: function (event, data) {
                  if (event.phase === Yox.Event.PHASE_UPWARD
                      && !this.get('inner')) {
                      this.fire({
                          type: 'change',
                          ns: 'menu',
                      }, {
                          activeName: data.name
                      });
                  }
              },
              ns: 'menuItem',
          },
          isOpen: {
              listener: function (event, data) {
                  if (event.phase === Yox.Event.PHASE_UPWARD
                      && !this.get('inner')) {
                      var isOpen = data.isOpen, name = data.name;
                      var openNames = this.get('openNames');
                      if (openNames) {
                          openNames = this.copy(openNames);
                      }
                      else {
                          openNames = [];
                      }
                      if (isOpen) {
                          openNames.push(name);
                      }
                      else {
                          Yox.array.remove(openNames, name);
                      }
                      this.fire({
                          type: 'change',
                          ns: 'menu',
                      }, {
                          openNames: openNames,
                      });
                  }
              },
              ns: 'subMenu',
          }
      }
  });

  var template$7 = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;!_r(_Q,'disabled',_U.disabled).value?_n(_S,'events','click',_e('click','click()','click','','click')):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-menu-item'+(_r(_Q,'isActive',_U.isActive).value?' bell-menu-item-active':'')+(_r(_Q,'disabled',_U.disabled).value?' bell-menu-item-disabled':' bell-menu-item-enabled')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var MenuItem = Yox.define({
      template: template$7,
      name: 'bell-MenuItem',
      propTypes: {
          name: {
              type: RAW_STRING,
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function (options) {
          var menu = findComponentUpward(options.parent, 'bell-Menu');
          return {
              isActive: menu.get('activeName') === this.get('name'),
          };
      },
      events: {
          activeName: {
              listener: function (_, data) {
                  this.set('isActive', data.activeName === this.get('name'));
              },
              ns: 'menu',
          },
      },
      methods: {
          click: function () {
              this.fire({
                  type: 'click',
                  ns: 'menuItem',
              }, {
                  name: this.get('name')
              });
          }
      }
  });

  var template$8 = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-menu-group-title'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$5,operator:_B,tag:'div',text:_y(_r(_Q,'title',_U.title).value),type:3});_r(_Q,'$slot_children',_U.$slot_children).value?_T.push({context:_G,isComponent:$3,operator:_C,props:{inner:$3,mode:_r(_Q,'mode',_U.mode).value==='inline'?'inline':'vertical'},slots:{$slot_children:function(_R){var _T=[];($0={children:_m('$slot_children',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}},tag:'Menu',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-menu-group'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var MenuGroup = Yox.define({
      template: template$8,
      name: 'bell-MenuGroup',
      propTypes: {
          title: {
              type: RAW_STRING,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function (options) {
          var menu = findComponentUpward(options.parent, 'bell-Menu');
          return {
              mode: menu.get('mode'),
          };
      },
  });

  var template$9 = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){($0={children:function(){var _T=[];($0=function(_S){!_r(_Q,'disabled',_U.disabled).value?_r(_Q,'trigger',_U.trigger).value===_r(_Q,'RAW_CLICK',_U.RAW_CLICK).value?_n(_S,'events','click',_e('click','toggleVisible()','click','','toggleVisible')):_r(_Q,'trigger',_U.trigger).value===_r(_Q,'RAW_HOVER',_U.RAW_HOVER).value?(_n(_S,'events','mouseenter',_e('mouseenter','enter()','mouseenter','','enter')),_n(_S,'events','mouseleave',_e('mouseleave','leave()','mouseleave','','leave'))):$1:$1;return _S}({children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,ref:'trigger',tag:'slot',type:7}),$0.children&&$0.children.length&&_T.push($0));_r(_Q,'visible',_U.visible).value?($0={children:function(){var _T=[];($0=function(_S){!_r(_Q,'disabled',_U.disabled).value?_r(_Q,'trigger',_U.trigger).value===_r(_Q,'RAW_HOVER',_U.RAW_HOVER).value?(_n(_S,'events','mouseenter',_e('mouseenter','enter()','mouseenter','','enter')),_n(_S,'events','mouseleave',_e('mouseleave','leave()','mouseleave','','leave'))):$1:$1;return _S}({children:_l('$slot_overlay'),context:_G,events:{click:_e('click','click()','click','','click')},isSlot:$3,operator:_F,ref:'overlay',tag:'slot',transition:_c('overlay',_O&&_O.overlay||_P.overlay),type:7}),$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,isPortal:$3,operator:_E,tag:'portal',type:6},$0.children&&$0.children.length&&_T.push($0)):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,isFragment:$3,operator:_D,tag:'fragment',type:5},$0.children&&$0.children.length&&_T.push($0));}})();

  var emitter = new Yox();
  /**
   * 有些组件会调用 `event.stop()` 阻止事件冒泡
   *
   * 但是，有些地方需要监听全局点击事件，这些组件的点击事件不能被忽略
   *
   * 因此，我们加一个全局方法，让组件再调用 `event.stop()` 之后再调用 `fireClickEvent()`
   *
   * @param event
   */
  function fireClickEvent(event, isFromPopover) {
      // event 一般会被调用 `event.stop()`
      // 如果直接 fire 原事件，相当于 fire 了一个 stoped 事件，这是不对的
      emitter.fire(new Yox.Event('click', event.originalEvent), { isFromPopover: isFromPopover });
  }
  function onClickEvent(listener) {
      emitter.on('click', listener);
  }
  function offClickEvent(listener) {
      emitter.off('click', listener);
  }

  var CLASS_POPOVER = 'bell-popover';
  var CLASS_POPOVER_TRANSITION = 'bell-popover-transition';
  var CLASS_POPOVER_FADE = 'bell-popover-fade';
  var Popover = Yox.define({
      template: template$9,
      name: 'bell-Popover',
      propTypes: {
          placement: {
              type: oneOf(RAW_PLACEMENT_ARRAY),
              value: RAW_BOTTOM,
          },
          trigger: {
              type: oneOf([RAW_HOVER, RAW_CLICK, RAW_CUSTOM]),
              value: RAW_HOVER,
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          visible: {
              type: RAW_BOOLEAN,
          },
          widthAlign: {
              type: RAW_BOOLEAN,
          },
          showArrow: {
              type: RAW_BOOLEAN,
          },
          showDelay: {
              type: RAW_NUMERIC,
              value: HOVER_DELAY,
          },
          hideDelay: {
              type: RAW_NUMERIC,
              value: 300,
          },
          offsetX: {
              type: RAW_NUMERIC,
          },
          offsetY: {
              type: RAW_NUMERIC,
          },
          gap: {
              type: RAW_NUMERIC,
          },
      },
      data: function () {
          return {
              isHover: FALSE,
              RAW_HOVER: RAW_HOVER,
              RAW_CLICK: RAW_CLICK,
              RAW_CUSTOM: RAW_CUSTOM,
          };
      },
      watchers: {
          disabled: function (value) {
              if (value && this.get('visible')) {
                  this.fireClose();
              }
          }
      },
      methods: {
          click: function (event) {
              event.stop();
              fireClickEvent(event, TRUE);
          },
          enter: function () {
              var me = this;
              me.set('isHover', TRUE);
              if (me.leaveTimer) {
                  clearTimeout(me.leaveTimer);
                  me.leaveTimer = UNDEFINED;
                  return;
              }
              var showDelay = toNumber(me.get('showDelay'));
              if (showDelay > 0) {
                  me.enterTimer = setTimeout(function () {
                      me.enterTimer = UNDEFINED;
                      if (me.get('isHover')) {
                          me.fireOpen();
                      }
                  }, showDelay);
              }
              else {
                  me.fireOpen();
              }
          },
          leave: function () {
              var me = this;
              me.set('isHover', FALSE);
              var hideDelay = toNumber(me.get('hideDelay'));
              if (hideDelay > 0) {
                  me.leaveTimer = setTimeout(function () {
                      me.leaveTimer = UNDEFINED;
                      me.fireClose();
                  }, hideDelay);
              }
              else {
                  me.fireClose();
              }
          },
          fireOpen: function () {
              var me = this;
              if (me.enterTimer) {
                  clearTimeout(me.enterTimer);
                  me.enterTimer = UNDEFINED;
              }
              me.fire({
                  type: 'open',
                  ns: 'popover',
              });
          },
          fireClose: function () {
              var me = this;
              if (me.leaveTimer) {
                  clearTimeout(me.leaveTimer);
                  me.leaveTimer = UNDEFINED;
              }
              me.fire({
                  type: 'close',
                  ns: 'popover',
              });
          },
          toggleVisible: function () {
              if (this.get('visible')) {
                  this.fireClose();
              }
              else {
                  this.fireOpen();
              }
          },
          getOverlayRect: function () {
              var me = this;
              var widthAlign = me.get('widthAlign');
              var placement = me.get('placement') || RAW_BOTTOM;
              var offsetX = toNumber(me.get('offsetX'), 0);
              var offsetY = toNumber(me.get('offsetY'), 0);
              var gap = toNumber(me.get('gap'), 0);
              var triggerElement = me.$refs.trigger;
              var triggerRect = triggerElement.getBoundingClientRect();
              var triggerLeft = getPageX() + triggerRect.left;
              var triggerTop = getPageY() + triggerRect.top;
              var x = 0, y = 0, isVertical = FALSE;
              if (placement === RAW_TOP
                  || placement === RAW_TOP_START
                  || placement === RAW_TOP_END) {
                  y = triggerTop - gap;
                  isVertical = TRUE;
              }
              else if (placement === RAW_BOTTOM
                  || placement === RAW_BOTTOM_START
                  || placement === RAW_BOTTOM_END) {
                  y = triggerTop + triggerRect.height + gap;
                  isVertical = TRUE;
              }
              else if (placement === RAW_LEFT
                  || placement === RAW_LEFT_START
                  || placement === RAW_LEFT_END) {
                  x = triggerLeft - gap;
              }
              else if (placement === RAW_RIGHT
                  || placement === RAW_RIGHT_START
                  || placement === RAW_RIGHT_END) {
                  x = triggerLeft + triggerRect.width + gap;
              }
              if (placement === RAW_TOP
                  || placement === RAW_BOTTOM) {
                  x = triggerLeft + 0.5 * triggerRect.width;
              }
              else if (placement === RAW_TOP_START
                  || placement === RAW_BOTTOM_START) {
                  x = triggerLeft;
              }
              else if (placement === RAW_TOP_END
                  || placement === RAW_BOTTOM_END) {
                  x = triggerLeft + triggerRect.width;
              }
              else if (placement === RAW_LEFT
                  || placement === RAW_RIGHT) {
                  y = triggerTop + 0.5 * triggerRect.height;
              }
              else if (placement === RAW_LEFT_START
                  || placement === RAW_RIGHT_START) {
                  y = triggerTop;
              }
              else if (placement === RAW_LEFT_END
                  || placement === RAW_RIGHT_END) {
                  y = triggerTop + triggerRect.height;
              }
              return {
                  x: x + offsetX,
                  y: y + offsetY,
                  width: isVertical && widthAlign ? triggerRect.width : UNDEFINED,
              };
          },
          refreshOverlayRect: function () {
              var overlayElement = this.$refs.overlay;
              if (!overlayElement) {
                  return;
              }
              var overlayRect = this.getOverlayRect();
              this.setOverlayRect(overlayElement, overlayRect.x, overlayRect.y, overlayRect.width);
          },
          setOverlayRect: function (el, x, y, width) {
              var target = el.style;
              target.left = x != NULL ? toPixel(x) : '';
              target.top = y != NULL ? toPixel(y) : '';
              target.width = width != NULL ? toPixel(width) : '';
          },
      },
      transitions: {
          overlay: {
              enter: function (node) {
                  var me = this;
                  var placement = me.get('placement') || RAW_BOTTOM;
                  Yox.dom.addClass(node, CLASS_POPOVER);
                  Yox.dom.addClass(node, 'bell-popover-' + placement);
                  if (me.get('showArrow')) {
                      Yox.dom.addClass(node, 'bell-popover-with-arrow');
                  }
                  var overlayRect = me.getOverlayRect();
                  me.setOverlayRect(node, overlayRect.x, overlayRect.y, overlayRect.width);
                  me.animateTimer = setTimeout(function () {
                      Yox.dom.addClass(node, CLASS_POPOVER_TRANSITION);
                      me.animateTimer = setTimeout(function () {
                          Yox.dom.addClass(node, CLASS_POPOVER_FADE);
                      }, 20);
                  }, 30);
              },
              leave: function (node, done) {
                  var me = this;
                  Yox.dom.removeClass(node, CLASS_POPOVER_FADE);
                  onTransitionEnd(node, function () {
                      me.setOverlayRect(node, UNDEFINED, UNDEFINED, UNDEFINED);
                      Yox.dom.removeClass(node, CLASS_POPOVER_TRANSITION);
                      Yox.dom.removeClass(node, CLASS_POPOVER);
                      done();
                  });
              }
          }
      },
      afterMount: function () {
          var me = this;
          var onNativeClick = function (event) {
              if (!me.get('visible')) {
                  return;
              }
              var trigger = me.$refs.trigger;
              var overlay = me.$refs.overlay;
              var target = event.originalEvent.target;
              if (contains(trigger, target) || contains(overlay, target)) {
                  return;
              }
              if (me.get('trigger') === RAW_CUSTOM) {
                  me.fire({
                      type: 'outside',
                      ns: 'popover',
                  });
              }
              else {
                  me.fireClose();
              }
          };
          var onGlobalClick = function (event, data) {
              if (!data.isFromPopover) {
                  onNativeClick(event);
              }
          };
          Yox.dom.on(DOCUMENT, RAW_CLICK, onNativeClick);
          onClickEvent(onGlobalClick);
          var destroy = function (component) {
              if (component === me) {
                  if (me.enterTimer) {
                      clearTimeout(me.enterTimer);
                  }
                  if (me.leaveTimer) {
                      clearTimeout(me.leaveTimer);
                  }
                  if (me.animateTimer) {
                      clearTimeout(me.animateTimer);
                  }
                  offClickEvent(onGlobalClick);
                  Yox.dom.off(DOCUMENT, RAW_CLICK, onNativeClick);
                  Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy);
              }
          };
          Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy);
      }
  });

  var template$a = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_r(_Q,'mode',_U.mode).value==='inline'?_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push(function(_S){!_r(_Q,'collapsed',_U.collapsed).value?(_n(_S,'lazy','click',300),_n(_S,'events','click',_e('click',"toggle('isOpen')",'click','','toggle',{execute:function(_X,_Y){return ['isOpen']}}))):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_title'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));!_r(_Q,'collapsed',_U.collapsed).value?_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-sub-menu-arrow-icon',name:'arrow-down-s-line'},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-sub-menu-title'},operator:_B,tag:'div',type:3}));_T.push({context:_G,isComponent:$3,operator:_C,props:{inner:$3,mode:_r(_Q,'mode',_U.mode).value},ref:'menu',slots:{$slot_children:function(_R){var _T=[];($0={children:_m('$slot_children',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}},tag:'Menu',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-sub-menu'+(_r(_Q,'isOpen',_U.isOpen).value?' bell-menu-open':'')+(_r(_Q,'isActive',_U.isActive).value?' bell-menu-active':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3})):_T.push({context:_G,isComponent:$3,operator:_C,props:{gap:'5',placement:_r(_Q,'mode',_U.mode).value===_r(_Q,'RAW_HORIZONTAL',_U.RAW_HORIZONTAL).value?_r(_Q,'RAW_BOTTOM',_U.RAW_BOTTOM).value:_r(_Q,'RAW_RIGHT_START',_U.RAW_RIGHT_START).value,trigger:_r(_Q,'RAW_CUSTOM',_U.RAW_CUSTOM).value,visible:_r(_Q,'isOpen',_U.isOpen).value},slots:{$slot_children:function(_R){var _T=[];_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push(function(_S){!_r(_Q,'collapsed',_U.collapsed).value?(_n(_S,'lazy','click',300),_n(_S,'events','click',_e('click',"toggle('isOpen')",'click','','toggle',{execute:function(_X,_Y){return ['isOpen']}}))):$1;return _S}({children:function(){var _T=[];($0={children:_m('$slot_title',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));!_r(_Q,'collapsed',_U.collapsed).value?_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{className:'bell-sub-menu-arrow-icon',name:'arrow-down-s-line'},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-sub-menu-title'},operator:_B,tag:'div',type:3}));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-sub-menu'+(_r(_Q,'isActive',_U.isActive).value?' bell-menu-active':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));return _T.length?_T:$1},$slot_overlay:function(_R){var _T=[];_T.push({children:function(){var _T=[];($0={children:_m('$slot_children',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-menu-overlay'+(_r(_Q,'theme',_U.theme).value?' bell-menu-'+_y(_r(_Q,'theme',_U.theme).value):'')},operator:_B,tag:'div',type:3});return _T.length?_T:$1}},tag:'Popover',type:4});}})();

  var SubMenu = Yox.define({
      template: template$a,
      name: 'bell-SubMenu',
      propTypes: {
          name: {
              type: RAW_STRING,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function (options) {
          var menu = findComponentUpward(options.parent, 'bell-Menu');
          var name = this.get('name');
          var openNames = menu.get('openNames');
          return {
              RAW_CUSTOM: RAW_CUSTOM,
              RAW_HORIZONTAL: RAW_HORIZONTAL,
              RAW_BOTTOM: RAW_BOTTOM,
              RAW_RIGHT_START: RAW_RIGHT_START,
              isOpen: openNames && Yox.array.has(openNames, name),
              isActive: menu.get('activeName') === name,
              mode: menu.get('mode'),
              theme: menu.get('theme'),
              collapsed: menu.get('collapsed'),
          };
      },
      watchers: {
          isOpen: function (isOpen) {
              var name = this.get('name');
              if (name) {
                  this.fire({
                      type: 'isOpen',
                      ns: 'subMenu',
                  }, {
                      isOpen: isOpen,
                      name: name,
                  });
              }
          }
      },
      events: {
          activeName: {
              listener: function (_, data) {
                  this.set('isActive', data.activeName === this.get('name'));
              },
              ns: 'menu',
          },
          openNames: {
              listener: function (_, data) {
                  this.set('isOpen', data.openNames && Yox.array.has(data.openNames, this.get('name')));
              },
              ns: 'menu',
          },
          change: {
              listener: function (_, data) {
                  this.set(data);
              },
              ns: 'menu',
          },
          click: {
              listener: function () {
                  if (this.get('mode') !== RAW_INLINE) {
                      this.set('isOpen', FALSE);
                  }
              },
              ns: 'menuItem',
          },
          outside: {
              listener: function (event) {
                  event.stop();
                  this.set('isOpen', FALSE);
              },
              ns: 'popover',
          }
      },
      components: {
          Icon: Icon,
          Popover: Popover,
      }
  });

  var template$b = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-text'+(_r(_Q,'type',_U.type).value?' bell-text-'+_y(_r(_Q,'type',_U.type).value):'')+(_r(_Q,'size',_U.size).value?' bell-text-'+_y(_r(_Q,'size',_U.size).value):'')+(_r(_Q,'bold',_U.bold).value?' bell-text-bold':'')+(_r(_Q,'block',_U.block).value?' bell-text-block':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'span',type:3}));}})();

  var Text = Yox.define({
      template: template$b,
      name: 'bell-Text',
      propTypes: {
          type: {
              type: oneOf([
                  RAW_TYPE_PRIMARY,
                  RAW_TYPE_INFO,
                  RAW_TYPE_SUCCESS,
                  RAW_TYPE_WARNING,
                  RAW_TYPE_ERROR,
                  RAW_TYPE_TITLE,
                  RAW_TYPE_CONTENT,
                  RAW_TYPE_MUTED ]),
          },
          size: {
              type: oneOf(RAW_SIZE_ARRAY),
              value: RAW_DEFAULT,
          },
          bold: {
              type: RAW_BOOLEAN,
          },
          block: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      }
  });

  var template$c = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-drawer-header'},$6={class:'bell-drawer-body'},$7={class:'bell-drawer-wrapper'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_r(_Q,'visible',_U.visible).value?($0={children:function(){var _T=[];_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'showMask',_U.showMask).value?_T.push(function(_S){_r(_Q,'maskClosable',_U.maskClosable).value?_n(_S,'events','click',_e('click','close()','click','','close')):$1;return _S}({context:_G,nativeAttrs:{class:'bell-drawer-mask'},operator:_B,tag:'div',type:3})):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_T.push({children:function(){var _T=[];_r(_Q,'$slot_title',_U.$slot_title).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_title'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_T.push({children:function(){var _T=[];($0={children:_l('$slot_content'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3});_r(_Q,'closable',_U.closable).value?_T.push({context:_G,events:{'click.native':_e('click.native','close()','click','native','close',$1,$1,$3)},isComponent:$3,operator:_C,props:{className:'bell-drawer-close',name:'close-line'},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:$7,nativeStyles:_b(_r(_Q,'wrapperStyle',_U.wrapperStyle).value),operator:_B,ref:'wrapper',tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-drawer'+(_r(_Q,'placement',_U.placement).value?' bell-drawer-'+_y(_r(_Q,'placement',_U.placement).value):'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',transition:_c('drawer',_O&&_O.drawer||_P.drawer),type:3}));return _T.length?_T:$1}(),context:_G,isPortal:$3,operator:_E,tag:'portal',type:6},$0.children&&$0.children.length&&_T.push($0)):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});}})();

  var CLASS_VISIBLE = 'bell-drawer-visible';
  var CLASS_FADE = 'bell-drawer-fade';
  var Drawer = Yox.define({
      template: template$c,
      model: 'visible',
      name: 'bell-Drawer',
      propTypes: {
          width: {
              type: RAW_STRING,
              value: 256,
          },
          height: {
              type: RAW_STRING,
              value: 256,
          },
          placement: {
              type: oneOf([RAW_LEFT, RAW_RIGHT, RAW_TOP, RAW_BOTTOM]),
              value: RAW_LEFT,
          },
          closable: {
              type: RAW_BOOLEAN,
              value: TRUE,
          },
          showMask: {
              type: RAW_BOOLEAN,
              value: TRUE,
          },
          maskClosable: {
              type: RAW_BOOLEAN,
              value: TRUE,
          },
          visible: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      computed: {
          wrapperStyle: function () {
              var placement = this.get('placement');
              if (placement === RAW_LEFT
                  || placement === RAW_RIGHT) {
                  var width = toNumber(this.get('width'));
                  return {
                      width: toPixel(width)
                  };
              }
              var height = toNumber(this.get('height'));
              return {
                  height: toPixel(height)
              };
          }
      },
      methods: {
          open: function () {
              this.set('visible', TRUE);
          },
          close: function () {
              this.set('visible', FALSE);
          }
      },
      transitions: {
          drawer: {
              enter: function (node) {
                  var me = this;
                  var drawer = node;
                  var wrapper = me.$refs.wrapper;
                  me.wrapperElement = wrapper;
                  // 设置为 display block
                  Yox.dom.addClass(drawer, CLASS_VISIBLE);
                  me.fire({
                      type: 'open',
                      ns: 'drawer',
                  });
                  setTimeout(function () {
                      if (!me.get('visible')) {
                          return;
                      }
                      Yox.dom.addClass(drawer, CLASS_FADE);
                      onTransitionEnd(wrapper, function () {
                          if (!me.get('visible')) {
                              return;
                          }
                          me.fire({
                              type: 'opened',
                              ns: 'drawer',
                          });
                      });
                  }, 50);
              },
              leave: function (node, done) {
                  var me = this;
                  var drawer = node;
                  var wrapper = me.wrapperElement;
                  me.wrapperElement = UNDEFINED;
                  Yox.dom.removeClass(drawer, CLASS_FADE);
                  me.fire({
                      type: 'close',
                      ns: 'drawer',
                  });
                  onTransitionEnd(wrapper, function () {
                      if (me.get('visible')) {
                          return;
                      }
                      Yox.dom.removeClass(drawer, CLASS_VISIBLE);
                      me.fire({
                          type: 'closed',
                          ns: 'drawer',
                      });
                      done();
                  });
              }
          },
      },
      components: {
          Icon: Icon,
      }
  });

  var template$d = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-breadcrumb'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Breadcrumb = Yox.define({
      template: template$d,
      name: 'bell-Breadcrumb',
      propTypes: {
          separator: {
              type: RAW_STRING,
              value: '/',
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
  });

  var template$e = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-breadcrumb-separator'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push(function(_S){_r(_Q,'last',_U.last).value?_n(_S,'nativeAttrs','class','bell-breadcrumb-text'):(_n(_S,'nativeAttrs','class','bell-breadcrumb-link'),_n(_S,'events','click',_f('click','click.breadcrumbItem','click','','click','breadcrumbItem')));return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,operator:_B,tag:'span',type:3}));!_r(_Q,'last',_U.last).value?_T.push({context:_G,nativeAttrs:$5,operator:_B,tag:'span',text:_y(_r(_Q,'separator',_U.separator).value),type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-breadcrumb-item'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'span',type:3}));}})();

  var BreadcrumbItem = Yox.define({
      template: template$e,
      name: 'bell-BreadcrumbItem',
      propTypes: {
          last: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function (options) {
          var breadcrumb = findComponentUpward(options.parent, 'bell-Breadcrumb');
          return {
              separator: breadcrumb.get('separator')
          };
      }
  });

  var template$f = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'disabled',_U.disabled).value?_n(_S,'nativeAttrs','disabled','true'):!_r(_Q,'loading',_U.loading).value?_n(_S,'events','click',_f('click','click.button','click','','click','button')):$1;_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_prefix')||function(){var _T=[];_r(_Q,'loading',_U.loading).value?_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-button-loading-icon',name:'loader-5-line',spin:$3},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));_r(_Q,'$slot_children',_U.$slot_children).value?_r(_Q,'loading',_U.loading).value||_r(_Q,'$slot_prefix',_U.$slot_prefix).value||_r(_Q,'$slot_suffix',_U.$slot_suffix).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,operator:_B,tag:'span',type:3}):($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0)):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});($0={children:_l('$slot_suffix'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-button'+(_r(_Q,'type',_U.type).value?' bell-button-'+_y(_r(_Q,'type',_U.type).value):'')+(_r(_Q,'size',_U.size).value?' bell-button-'+_y(_r(_Q,'size',_U.size).value):'')+(_r(_Q,'shape',_U.shape).value?' bell-button-'+_y(_r(_Q,'shape',_U.shape).value):'')+(_r(_Q,'ghost',_U.ghost).value?' bell-button-ghost':'')+(_r(_Q,'loading',_U.loading).value?' bell-button-loading':'')+(_r(_Q,'disabled',_U.disabled).value?' bell-button-disabled':' bell-button-enabled')+(_r(_Q,'block',_U.block).value?' bell-button-block':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'button',type:3}));}})();

  var Button = Yox.define({
      template: template$f,
      name: 'bell-Button',
      propTypes: {
          type: {
              type: oneOf([
                  RAW_TYPE_PRIMARY,
                  RAW_TYPE_INFO,
                  RAW_TYPE_SUCCESS,
                  RAW_TYPE_WARNING,
                  RAW_TYPE_ERROR,
                  RAW_TYPE_DASHED,
                  RAW_TYPE_LINK,
                  RAW_TYPE_TEXT,
                  RAW_TYPE_PURE ]),
              value: RAW_TYPE_PURE,
          },
          size: {
              type: oneOf([RAW_DEFAULT, RAW_LARGE, RAW_SMALL]),
              value: RAW_DEFAULT,
          },
          shape: {
              type: oneOf([RAW_SHAPE_ROUND, RAW_SHAPE_CIRCLE]),
          },
          ghost: {
              type: RAW_BOOLEAN,
          },
          block: {
              type: RAW_BOOLEAN,
          },
          loading: {
              type: RAW_BOOLEAN,
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      components: {
          Icon: Icon,
      },
      beforeCreate: function (options) {
          var props = options.props || (options.props = {});
          var buttonGroup = findComponentUpward(options.parent, 'bell-ButtonGroup');
          if (buttonGroup) {
              // 有 group，则 size、shape 全听 group 的
              if (props.size !== UNDEFINED) {
                  delete props.size;
              }
              if (props.shape !== UNDEFINED) {
                  delete props.shape;
              }
              if (props.disabled === UNDEFINED) {
                  props.disabled = buttonGroup.get('disabled');
              }
          }
          else {
              // 没有 group，则要给 type 和 size 默认值
              if (props.size === UNDEFINED) {
                  props.size = RAW_DEFAULT;
              }
          }
      }
  });

  var template$g = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-button-group'+(_r(_Q,'shape',_U.shape).value?' bell-button-group-'+_y(_r(_Q,'shape',_U.shape).value):'')+(_r(_Q,'size',_U.size).value?' bell-button-group-'+_y(_r(_Q,'size',_U.size).value):'')+(_r(_Q,'vertical',_U.vertical).value?' bell-button-group-vertical':' bell-button-group-horizontal')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var ButtonGroup = Yox.define({
      template: template$g,
      name: 'bell-ButtonGroup',
      propTypes: {
          size: {
              type: oneOf([RAW_DEFAULT, RAW_LARGE, RAW_SMALL]),
              value: RAW_DEFAULT,
          },
          shape: {
              type: oneOf([RAW_SHAPE_ROUND, RAW_SHAPE_CIRCLE]),
          },
          vertical: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
  });

  var template$h = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-input-prepend'},$6={class:'bell-input-prefix bell-input-prefix-icon-wrapper'},$7={class:'bell-input-suffix bell-input-suffix-text-wrapper'},$8={class:'bell-input-suffix bell-input-suffix-icon-wrapper'},$9={class:'bell-input-suffix bell-input-suffix-icon-wrapper bell-input-secure'},$10={class:'bell-input-suffix bell-input-suffix-icon-wrapper bell-input-clear'},$11={class:'bell-input-append'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'$slot_prepend',_U.$slot_prepend).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_prepend'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_T.push({children:function(){var _T=[];_r(_Q,'prefix',_U.prefix).value?_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-input-content-icon',name:_r(_Q,'prefix',_U.prefix).value},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_T.push(function(_S){_r(_Q,'maxLength',_U.maxLength).value?_n(_S,'nativeAttrs','maxlength',_o('maxlength',_r(_Q,'maxLength',_U.maxLength).value)):$1;_r(_Q,'placeholder',_U.placeholder).value?_n(_S,'nativeAttrs','placeholder',_r(_Q,'placeholder',_U.placeholder).value):$1;_r(_Q,'autoFocus',_U.autoFocus).value?_n(_S,'nativeAttrs','autofocus','true'):$1;_r(_Q,'readOnly',_U.readOnly).value?_n(_S,'nativeAttrs','readonly','true'):$1;_r(_Q,'spellCheck',_U.spellCheck).value?_n(_S,'nativeAttrs','spellcheck','true'):$1;_r(_Q,'disabled',_U.disabled).value?_n(_S,'nativeAttrs','disabled','true'):(_n(_S,'events','focus',_e('focus','handleFocus()','focus','','handleFocus')),_n(_S,'events','blur',_e('blur','handleBlur()','blur','','handleBlur')),_n(_S,'events','input',_f('input','input.input','input','','input','input')),_n(_S,'events','compositionstart',_f('compositionstart','compositionstart.input','compositionstart','','compositionstart','input')),_n(_S,'events','compositionend',_f('compositionend','compositionend.input','compositionend','','compositionend','input')));return _S}({context:_G,model:_d(_r(_Q,'value',_U.value)),nativeAttrs:{class:'bell-input-el',type:_r(_Q,'currentType',_U.currentType).value},operator:_B,ref:'input',tag:'input',type:3}));_r(_Q,'hasCount',_U.hasCount).value?_T.push({children:function(){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_x(_w(_r(_Q,'formatValueLength',_U.formatValueLength,_H&&_H.formatValueLength||_I.formatValueLength).value,_G,[_r(_Q,'value',_U.value).value])).value)+' / '+_y(_r(_Q,'maxLength',_U.maxLength).value),type:1});return _T.length?_T:$1}(),context:_G,nativeAttrs:$7,operator:_B,tag:'div',type:3}):_r(_Q,'suffix',_U.suffix).value?_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-input-content-icon',name:_r(_Q,'suffix',_U.suffix).value},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:$8,operator:_B,tag:'div',type:3}):_r(_Q,'secure',_U.secure).value?_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-input-content-icon',name:_r(_Q,'isSecure',_U.isSecure).value?'eye-close-line':'eye-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click',"toggle('isSecure')",'click','','toggle',{execute:function(_X,_Y){return ['isSecure']}})},nativeAttrs:$9,operator:_B,tag:'div',type:3}):_r(_Q,'clearable',_U.clearable).value&&!_r(_Q,'disabled',_U.disabled).value?_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-input-content-icon',name:'close-circle-fill'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','handleClearClick()','click','','handleClearClick')},nativeAttrs:$10,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-input-content'+(_r(_Q,'prefix',_U.prefix).value?' bell-input-content-with-prefix':'')+(_r(_Q,'hasCount',_U.hasCount).value||_r(_Q,'suffix',_U.suffix).value||_r(_Q,'secure',_U.secure).value||_r(_Q,'clearable',_U.clearable).value&&!_r(_Q,'disabled',_U.disabled).value?' bell-input-content-with-suffix':'')},operator:_B,tag:'div',type:3});_r(_Q,'$slot_append',_U.$slot_append).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_append'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$11,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-input'+(_r(_Q,'size',_U.size).value?' bell-input-'+_y(_r(_Q,'size',_U.size).value):'')+(_r(_Q,'status',_U.status).value?' bell-input-'+_y(_r(_Q,'status',_U.status).value):'')+(_r(_Q,'block',_U.block).value?' bell-input-block':'')+(_r(_Q,'isFocus',_U.isFocus).value?' bell-input-focused':'')+(_r(_Q,'disabled',_U.disabled).value?' bell-input-disabled':' bell-input-enabled')+(!_r(_Q,'value',_U.value).value?' bell-input-no-value':' bell-input-has-value')+(_r(_Q,'$slot_prepend',_U.$slot_prepend).value?' bell-input-with-prepend':'')+(_r(_Q,'$slot_append',_U.$slot_append).value?' bell-input-with-append':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var TEXT_TYPE_PASSWORD = 'password';
  var TEXT_TYPE_TEXT = 'text';
  var Input = Yox.define({
      template: template$h,
      name: 'bell-Input',
      propTypes: {
          value: {
              type: [RAW_STRING, RAW_NUMBER],
          },
          size: {
              type: oneOf(RAW_SIZE_ARRAY),
              value: RAW_DEFAULT,
          },
          type: {
              type: oneOf([TEXT_TYPE_TEXT, TEXT_TYPE_PASSWORD]),
              value: TEXT_TYPE_TEXT,
          },
          status: {
              type: oneOf([RAW_TYPE_INFO, RAW_TYPE_SUCCESS, RAW_TYPE_ERROR, RAW_TYPE_WARNING]),
          },
          placeholder: {
              type: RAW_STRING,
          },
          block: {
              type: RAW_BOOLEAN,
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          clearable: {
              type: RAW_BOOLEAN,
          },
          secure: {
              type: RAW_BOOLEAN,
          },
          prefix: {
              type: RAW_STRING,
          },
          suffix: {
              type: RAW_STRING,
          },
          autoFocus: {
              type: RAW_BOOLEAN,
          },
          spellCheck: {
              type: RAW_BOOLEAN,
          },
          readOnly: {
              type: RAW_BOOLEAN,
          },
          showCount: {
              type: RAW_BOOLEAN,
          },
          maxLength: {
              type: RAW_NUMERIC,
          },
          width: {
              type: RAW_NUMERIC,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          },
      },
      data: function () {
          return {
              isSecure: TRUE,
              isFocus: FALSE,
              currentType: this.get('type'),
              TEXT_TYPE_TEXT: TEXT_TYPE_TEXT,
              TEXT_TYPE_PASSWORD: TEXT_TYPE_PASSWORD,
          };
      },
      computed: {
          hasCount: function () {
              return this.get('showCount') && this.get('maxLength') > 0;
          },
          inlineStyle: function () {
              var result = [];
              var width = this.get('width');
              if (width) {
                  result.push({
                      width: toPixel(width)
                  });
              }
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          }
      },
      filters: {
          formatValueLength: function (value) {
              return value
                  ? value.length
                  : 0;
          }
      },
      watchers: {
          value: function (value) {
              this.fire({
                  type: 'change',
                  ns: 'input',
              }, { value: value });
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
          handleFocus: function () {
              this.set('isFocus', TRUE);
              this.fire({
                  type: 'focus',
                  ns: 'input',
              });
          },
          handleBlur: function () {
              this.set('isFocus', FALSE);
              this.fire({
                  type: 'blur',
                  ns: 'input',
              });
          },
          handleClearClick: function () {
              this.set('value', '');
              this.fire({
                  type: 'clear',
                  ns: 'input',
              });
          },
      },
      components: {
          Icon: Icon,
      },
      afterMount: function () {
          var me = this;
          var onKeydown = function (event) {
              if (!me.get('isFocus')) {
                  return;
              }
              var originalEvent = event.originalEvent;
              me.fire(new Yox.Event('keydown.input', originalEvent));
              switch (originalEvent.keyCode) {
                  case 13:
                      me.fire({
                          type: 'enter',
                          ns: 'input',
                      });
                      break;
                  case 38:
                      // 避免光标跑到最前面
                      event.prevent();
                      me.fire({
                          type: 'up',
                          ns: 'input',
                      });
                      break;
                  case 40:
                      // 避免光标跑到最后面
                      event.prevent();
                      me.fire({
                          type: 'down',
                          ns: 'input',
                      });
                      break;
              }
          };
          var onKeyup = function (event) {
              if (!me.get('isFocus')) {
                  return;
              }
              var originalEvent = event.originalEvent;
              me.fire(new Yox.Event('keyup.input', originalEvent));
          };
          var onKeypress = function (event) {
              if (!me.get('isFocus')) {
                  return;
              }
              var originalEvent = event.originalEvent;
              me.fire(new Yox.Event('keypress.input', originalEvent));
          };
          Yox.dom.on(DOCUMENT, RAW_EVENT_KEYDOWN, onKeydown);
          Yox.dom.on(DOCUMENT, RAW_EVENT_KEYUP, onKeyup);
          Yox.dom.on(DOCUMENT, RAW_EVENT_KEYPRESS, onKeypress);
          var destroy = function (component) {
              if (component === me) {
                  Yox.dom.off(DOCUMENT, RAW_EVENT_KEYDOWN, onKeydown);
                  Yox.dom.off(DOCUMENT, RAW_EVENT_KEYUP, onKeyup);
                  Yox.dom.off(DOCUMENT, RAW_EVENT_KEYPRESS, onKeypress);
                  Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy);
              }
          };
          Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy);
      }
  });

  var template$i = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-input-number-actions'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push({context:_G,events:{blur:_e('blur','handleBlur()','blur','','handleBlur',$1,$3),compositionend:_e('compositionend','handleCompositionEnd()','compositionend','','handleCompositionEnd',$1,$3),compositionstart:_e('compositionstart','handleCompositionStart()','compositionstart','','handleCompositionStart',$1,$3),down:_e('down','handleDown()','down','','handleDown',$1,$3),enter:_e('enter','handleEnter()','enter','','handleEnter',$1,$3),focus:_e('focus','handleFocus()','focus','','handleFocus',$1,$3),input:_e('input','handleInput()','input','','handleInput',$1,$3),keydown:_e('keydown','handleKeydown()','keydown','','handleKeydown',$1,$3),keyup:_e('keyup','handleKeyup()','keyup','','handleKeyup',$1,$3),up:_e('up','handleUp()','up','','handleUp',$1,$3)},isComponent:$3,operator:_C,props:{autoFocus:_r(_Q,'autoFocus',_U.autoFocus).value,block:_r(_Q,'block',_U.block).value,className:_r(_Q,'customClassName',_U.customClassName).value,disabled:_r(_Q,'disabled',_U.disabled).value,placeholder:_r(_Q,'placeholder',_U.placeholder).value,readOnly:_r(_Q,'readOnly',_U.readOnly).value,size:_r(_Q,'size',_U.size).value,status:_r(_Q,'status',_U.status).value,style:_r(_Q,'style',_U.style).value,value:_r(_Q,'value',_U.value).value,width:_r(_Q,'width',_U.width).value},ref:'input',slots:{$slot_append:function(_R){var _T=[];($0={children:_m('$slot_append',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1},$slot_children:function(_R){var _T=[];_T.push({context:_G,nativeAttrs:{class:'bell-input-number-el',max:_o('max',_r(_Q,'max',_U.max).value),min:_o('min',_r(_Q,'min',_U.min).value),step:_o('step',_r(_Q,'step',_U.step).value),type:'number',value:_r(_Q,'value',_U.value).value},operator:_B,ref:'numberInput',tag:'input',type:3});_r(_Q,'showStep',_U.showStep).value?_T.push({children:function(){var _T=[];_T.push(function(_S){_r(_Q,'upDisabled',_U.upDisabled).value?_n(_S,'nativeAttrs','class','bell-input-number-up bell-input-number-up-disabled'):(_n(_S,'nativeAttrs','class','bell-input-number-up bell-input-number-up-enabled'),_n(_S,'events','click',_e('click','handleUp()','click','','handleUp')));return _S}({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{className:'bell-input-number-up-icon',name:'arrow-up-s-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,operator:_B,tag:'div',type:3}));_T.push(function(_S){_r(_Q,'downDisabled',_U.downDisabled).value?_n(_S,'nativeAttrs','class','bell-input-number-down bell-input-number-down-disabled'):(_n(_S,'nativeAttrs','class','bell-input-number-down bell-input-number-down-enabled'),_n(_S,'events','click',_e('click','handleDown()','click','','handleDown')));return _S}({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{className:'bell-input-number-down-icon',name:'arrow-down-s-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,operator:_B,tag:'div',type:3}));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1},$slot_prepend:function(_R){var _T=[];($0={children:_m('$slot_prepend',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}},tag:'Input',type:4});}})();

  // 数字键 48-57
  // 大键盘 .(190) -(189)
  // 小键盘 .(110) -(109)
  // 删除键 8
  // shift 16
  // ctrl 17
  // alt 18
  // tab 9
  // capslock 20
  // cmd 91、93
  // 方向键 37-40
  function isHelper(keyCode) {
      return keyCode >= 37 && keyCode <= 40
          || keyCode >= 16 && keyCode <= 18
          || keyCode === 8
          || keyCode === 9
          || keyCode === 20
          || keyCode === 91
          || keyCode === 93;
  }
  function isDot(keyCode) {
      return keyCode === 110 || keyCode === 190;
  }
  function isMinus(keyCode) {
      return keyCode === 109 || keyCode === 189;
  }
  function isNumber(keyCode) {
      return keyCode >= 48 && keyCode <= 57;
  }

  var InputNumber = Yox.define({
      template: template$i,
      name: 'bell-InputNumber',
      propTypes: {
          status: {
              type: oneOf([RAW_TYPE_INFO, RAW_TYPE_SUCCESS, RAW_TYPE_ERROR, RAW_TYPE_WARNING]),
          },
          size: {
              type: oneOf(RAW_SIZE_ARRAY),
              value: RAW_DEFAULT,
          },
          max: {
              type: RAW_NUMERIC,
          },
          min: {
              type: RAW_NUMERIC,
          },
          value: {
              type: RAW_NUMERIC,
          },
          step: {
              type: RAW_NUMERIC,
              value: 1,
          },
          precision: {
              type: RAW_NUMERIC,
          },
          showStep: {
              type: RAW_BOOLEAN,
          },
          autoFocus: {
              type: RAW_BOOLEAN,
          },
          readOnly: {
              type: RAW_BOOLEAN,
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          block: {
              type: RAW_BOOLEAN,
          },
          placeholder: {
              type: RAW_STRING,
          },
          width: {
              type: RAW_NUMERIC,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function (options) {
          var props = options.props || {};
          return {
              isComposition: FALSE,
              inputStringValue: toString(props.value),
          };
      },
      computed: {
          customClassName: function () {
              var classNames = ['bell-input-number'];
              var className = this.get('className');
              if (className) {
                  classNames.push(className);
              }
              return classNames.join(' ');
          },
          customPrecision: function () {
              return toNumber(this.get('precision'), -1);
          },
          customMin: function () {
              return toNumber(this.get('min'), Number.NEGATIVE_INFINITY);
          },
          customMax: function () {
              return toNumber(this.get('max'), Number.POSITIVE_INFINITY);
          },
          upDisabled: function () {
              if (this.get('disabled') || this.get('readOnly')) {
                  return TRUE;
              }
              return this.get('customMax') - this.get('value') < this.get('step');
          },
          downDisabled: function () {
              if (this.get('disabled') || this.get('readOnly')) {
                  return TRUE;
              }
              return this.get('value') - this.get('customMin') < this.get('step');
          }
      },
      watchers: {
          value: function (value) {
              this.updateInputValue(value);
          },
      },
      methods: {
          handleFocus: function (event) {
              event.stop();
              this.fire({
                  type: 'focus',
                  ns: 'inputNumber',
              });
          },
          handleBlur: function (event) {
              event.stop();
              this.correctValue();
              this.fire({
                  type: 'blur',
                  ns: 'inputNumber',
              });
          },
          handleInput: function (event) {
              event.stop();
              if (this.get('isComposition')) {
                  return;
              }
              this.changeValue();
          },
          handleKeydown: function (event) {
              event.stop();
              if (this.get('isComposition')) {
                  return;
              }
              var _a = event.originalEvent, metaKey = _a.metaKey, ctrlKey = _a.ctrlKey, shiftKey = _a.shiftKey, keyCode = _a.keyCode;
              // 组合键可放行
              if (metaKey || ctrlKey || shiftKey || isHelper(keyCode)) {
                  return;
              }
              // 在这控制一些非法字符，可以避免光标因为重置 value 而跳到最后的问题
              var textInputElement = this.getTextInput();
              var isFirstChar = textInputElement.selectionStart === textInputElement.selectionEnd
                  && textInputElement.selectionStart === 0;
              var inputStringValue = this.get('inputStringValue');
              if (isFirstChar) {
                  if (inputStringValue.indexOf('-') < 0) {
                      // 第一个字符，只能输入 - 和 数字
                      if (isNumber(keyCode) || isMinus(keyCode)) {
                          return;
                      }
                  }
                  event.prevent();
              }
              else {
                  var dotIndex = inputStringValue.indexOf('.');
                  // 不在首位时，只能输入 . 和数字
                  if (isNumber(keyCode)) {
                      var customPrecision = this.get('customPrecision');
                      var precisionLength = dotIndex > 0 ? inputStringValue.substr(dotIndex + 1).length : 0;
                      if (customPrecision >= 0 && precisionLength >= customPrecision) {
                          event.prevent();
                      }
                  }
                  else if (isDot(keyCode)) {
                      if (dotIndex > 0) {
                          event.prevent();
                      }
                  }
                  else {
                      event.prevent();
                  }
              }
          },
          handleKeyup: function (event) {
              event.stop();
          },
          handleEnter: function (event) {
              event.stop();
              this.correctValue();
              this.fire({
                  type: 'enter',
                  ns: 'inputNumber',
              });
          },
          handleUp: function (event) {
              event.stop();
              if (this.get('isComposition')) {
                  return;
              }
              var numberInputElement = this.getNumberInput();
              numberInputElement.stepUp();
              this.getTextInput().value = numberInputElement.value;
              this.changeValue();
          },
          handleDown: function (event) {
              event.stop();
              if (this.get('isComposition')) {
                  return;
              }
              var numberInputElement = this.getNumberInput();
              numberInputElement.stepDown();
              this.getTextInput().value = numberInputElement.value;
              this.changeValue();
          },
          handleCompositionStart: function (event) {
              event.stop();
              this.set('isComposition', TRUE);
          },
          handleCompositionEnd: function (event) {
              event.stop();
              this.set('isComposition', FALSE);
              this.getTextInput().value = this.get('inputStringValue');
          },
          updateInputValue: function (value) {
              this.set({
                  inputStringValue: toString(value),
                  value: toNumber(value, value),
              });
          },
          changeValue: function () {
              var textInputElement = this.getTextInput();
              var oldStringValue = this.get('inputStringValue');
              var newStringValue = textInputElement.value;
              if (newStringValue !== oldStringValue
                  && newStringValue
                  && newStringValue !== '-'
                  && toNumber(newStringValue, FALSE) === FALSE) {
                  // 输入了错误字符
                  textInputElement.value = oldStringValue;
                  return;
              }
              var oldValue = this.get('value');
              this.updateInputValue(newStringValue);
              var newValue = this.get('value');
              if (newValue !== oldValue) {
                  this.fireChange(newValue);
              }
          },
          correctValue: function () {
              var value = this.get('value');
              var newValue = '';
              if (Yox.is.number(value)) {
                  var min = this.get('customMin');
                  var max = this.get('customMax');
                  if (value < min) {
                      newValue = min;
                  }
                  else if (value > max) {
                      newValue = max;
                  }
                  else {
                      return;
                  }
              }
              this.updateInputValue(newValue);
              if (newValue !== value) {
                  this.fireChange(newValue);
              }
          },
          fireChange: function (value) {
              this.fire({
                  type: 'change',
                  ns: 'inputNumber',
              }, {
                  value: value,
              });
          },
          getTextInput: function () {
              return this.$refs.input.$refs.input;
          },
          getNumberInput: function () {
              return this.$refs.numberInput;
          }
      },
      components: {
          Icon: Icon,
          Input: Input,
      },
      afterMount: function () {
          this.watch('inputStringValue', function (value) {
              this.getTextInput().value = value;
              this.getNumberInput().value = value;
          }, TRUE);
      }
  });

  var template$j = (function(){var $1=void 0,$3=!0,$5={class:'bell-textarea-word-count'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;return _S}({children:function(){var _T=[];_T.push(function(_S){_r(_Q,'wrap',_U.wrap).value?_n(_S,'nativeAttrs','wrap',_r(_Q,'wrap',_U.wrap).value):$1;_r(_Q,'placeholder',_U.placeholder).value?_n(_S,'nativeAttrs','placeholder',_r(_Q,'placeholder',_U.placeholder).value):$1;_r(_Q,'maxLength',_U.maxLength).value?_n(_S,'nativeAttrs','maxlength',_o('maxlength',_r(_Q,'maxLength',_U.maxLength).value)):$1;_r(_Q,'autoFocus',_U.autoFocus).value?_n(_S,'nativeAttrs','autofocus','true'):$1;_r(_Q,'readOnly',_U.readOnly).value?_n(_S,'nativeAttrs','readonly','true'):$1;_r(_Q,'spellCheck',_U.spellCheck).value?_n(_S,'nativeAttrs','spellcheck','true'):$1;_r(_Q,'disabled',_U.disabled).value?_n(_S,'nativeAttrs','disabled','true'):(_n(_S,'events','blur',_e('blur','handleBlur()','blur','','handleBlur')),_n(_S,'events','focus',_e('focus','handleFocus()','focus','','handleFocus')));return _S}({context:_G,model:_d(_r(_Q,'value',_U.value)),nativeAttrs:{class:'bell-textarea-el'+(_r(_Q,'hasCount',_U.hasCount).value?' bell-textarea-el-with-word-count':'')},nativeStyles:_b(_r(_Q,'textareaStyle',_U.textareaStyle).value),operator:_B,tag:'textarea',type:3}));_r(_Q,'hasCount',_U.hasCount).value?_T.push({children:function(){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_x(_w(_r(_Q,'formatValueLength',_U.formatValueLength,_H&&_H.formatValueLength||_I.formatValueLength).value,_G,[_r(_Q,'value',_U.value).value])).value)+' / '+_y(_r(_Q,'maxLength',_U.maxLength).value),type:1});return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-textarea'+(_r(_Q,'size',_U.size).value?' bell-textarea-'+_y(_r(_Q,'size',_U.size).value):'')+(_r(_Q,'status',_U.status).value?' bell-textarea-'+_y(_r(_Q,'status',_U.status).value):'')+(_r(_Q,'block',_U.block).value?' bell-textarea-block':'')+(_r(_Q,'resize',_U.resize).value===_r(_Q,'RAW_HORIZONTAL',_U.RAW_HORIZONTAL).value?' bell-textarea-resize-horizontal':_r(_Q,'resize',_U.resize).value===_r(_Q,'RAW_VERTICAL',_U.RAW_VERTICAL).value?' bell-textarea-resize-vertical':'')+(_r(_Q,'disabled',_U.disabled).value?' bell-textarea-disabled':' bell-textarea-enabled')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var sizes = {};
  var fontSizes = {};
  sizes[RAW_DEFAULT] = 5;
  sizes[RAW_SMALL] = 3;
  sizes[RAW_LARGE] = 8;
  fontSizes[RAW_DEFAULT] = 14;
  fontSizes[RAW_SMALL] = 12;
  fontSizes[RAW_LARGE] = 16;
  var Textarea = Yox.define({
      template: template$j,
      name: 'bell-Textarea',
      propTypes: {
          value: {
              type: RAW_STRING,
          },
          size: {
              type: oneOf(RAW_SIZE_ARRAY),
              value: RAW_DEFAULT,
          },
          autoSize: {
              type: [RAW_BOOLEAN, RAW_OBJECT],
          },
          status: {
              type: oneOf([RAW_TYPE_INFO, RAW_TYPE_SUCCESS, RAW_TYPE_ERROR, RAW_TYPE_WARNING]),
          },
          placeholder: {
              type: RAW_STRING,
          },
          rows: {
              type: RAW_NUMERIC,
              value: 3
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          resize: {
              type: oneOf([RAW_HORIZONTAL, RAW_VERTICAL]),
          },
          wrap: {
              type: oneOf(['hard', 'soft']),
          },
          autoFocus: {
              type: RAW_BOOLEAN,
          },
          spellCheck: {
              type: RAW_BOOLEAN,
          },
          readOnly: {
              type: RAW_BOOLEAN,
          },
          block: {
              type: RAW_BOOLEAN,
          },
          showCount: {
              type: RAW_BOOLEAN,
          },
          maxLength: {
              type: RAW_NUMERIC,
          },
          width: {
              type: RAW_NUMERIC,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          },
      },
      data: function () {
          return {
              RAW_HORIZONTAL: RAW_HORIZONTAL,
              RAW_VERTICAL: RAW_VERTICAL,
              isFocus: FALSE,
          };
      },
      computed: {
          hasCount: function () {
              return this.get('showCount') && this.get('maxLength') > 0;
          },
          inlineStyle: function () {
              var result = [];
              var width = this.get('width');
              if (width) {
                  result.push({
                      width: toPixel(width)
                  });
              }
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          },
          textareaStyle: function () {
              var rows = this.get('rows');
              var size = this.get('size');
              var autoSize = this.get('autoSize');
              // 单行的高度
              var ROW_HEIGHT = fontSizes[size] * 1.5;
              // 上下 padding + border
              var PADDING_VERTICAL = 2 * (1 + sizes[size]);
              if (autoSize) {
                  var value = this.get('value');
                  if (Yox.is.object(autoSize)) {
                      rows = value ? value.split('\n').length : autoSize.minRows;
                      return {
                          minHeight: toPixel(autoSize.minRows * ROW_HEIGHT + PADDING_VERTICAL),
                          maxHeight: toPixel(autoSize.maxRows * ROW_HEIGHT + PADDING_VERTICAL),
                          height: toPixel(rows * ROW_HEIGHT + PADDING_VERTICAL),
                      };
                  }
                  rows = value ? value.split('\n').length : 1;
                  return {
                      minHeight: toPixel(ROW_HEIGHT + PADDING_VERTICAL),
                      height: toPixel(rows * ROW_HEIGHT + PADDING_VERTICAL),
                  };
              }
              return {
                  height: toPixel(rows * ROW_HEIGHT + PADDING_VERTICAL),
              };
          }
      },
      watchers: {
          value: function (value) {
              this.fire({
                  type: 'change',
                  ns: 'textarea',
              }, { value: value });
          },
      },
      filters: {
          formatValueLength: function (value) {
              return value
                  ? value.length
                  : 0;
          }
      },
      methods: {
          handleFocus: function () {
              this.set('isFocus', TRUE);
              this.fire({
                  type: 'focus',
                  ns: 'textarea',
              });
          },
          handleBlur: function () {
              this.set('isFocus', FALSE);
              this.fire({
                  type: 'blur',
                  ns: 'textarea',
              });
          },
      },
      afterMount: function () {
          var me = this;
          var onKeydown = function (event) {
              if (!me.get('isFocus')) {
                  return;
              }
              var originalEvent = event.originalEvent;
              me.fire(new Yox.Event('keydown.input', originalEvent));
              if (originalEvent.keyCode === 13) {
                  me.fire({
                      type: 'enter',
                      ns: 'textarea',
                  });
              }
          };
          var onKeyup = function (event) {
              if (!me.get('isFocus')) {
                  return;
              }
              var originalEvent = event.originalEvent;
              me.fire(new Yox.Event('keyup.input', originalEvent));
          };
          var onKeypress = function (event) {
              if (!me.get('isFocus')) {
                  return;
              }
              var originalEvent = event.originalEvent;
              me.fire(new Yox.Event('keypress.input', originalEvent));
          };
          Yox.dom.on(DOCUMENT, RAW_EVENT_KEYDOWN, onKeydown);
          Yox.dom.on(DOCUMENT, RAW_EVENT_KEYUP, onKeyup);
          Yox.dom.on(DOCUMENT, RAW_EVENT_KEYPRESS, onKeypress);
          var destroy = function (component) {
              if (component === me) {
                  Yox.dom.off(DOCUMENT, RAW_EVENT_KEYDOWN, onKeydown);
                  Yox.dom.off(DOCUMENT, RAW_EVENT_KEYUP, onKeyup);
                  Yox.dom.off(DOCUMENT, RAW_EVENT_KEYPRESS, onKeypress);
                  Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy);
              }
          };
          Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy);
      }
  });

  var template$k = (function(){var $0,$1=void 0,$3=!0,$4=!1,$5={class:'bell-radio-icon'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;!_r(_Q,'disabled',_U.disabled).value?_n(_S,'events','click',_e('click','handleClick()','click','','handleClick')):$1;return _S}({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push(function(_S){_r(_Q,'name',_U.name).value?_n(_S,'nativeAttrs','name',_r(_Q,'name',_U.name).value):$1;return _S}({context:_G,events:{blur:_e('blur',"set('isFocus', false)",'blur','','set',{execute:function(_X,_Y){return ['isFocus',$4]}}),focus:_e('focus',"set('isFocus', true)",'focus','','set',{execute:function(_X,_Y){return ['isFocus',$3]}})},nativeAttrs:{class:'bell-radio-input',disabled:_p('disabled',_r(_Q,'disabled',_U.disabled).value),type:'radio',value:_r(_Q,'value',_U.value).value},operator:_B,tag:'input',type:3}));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3});($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-radio'+(_r(_Q,'disabled',_U.disabled).value?' bell-radio-disabled':' bell-radio-enabled')+(_r(_Q,'checked',_U.checked).value?' bell-radio-active':'')+(_r(_Q,'isFocus',_U.isFocus).value?' bell-radio-focus':'')+(_r(_Q,'$slot_children',_U.$slot_children).value?' bell-radio-with-label':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'label',type:3}));}})();

  var Radio = Yox.define({
      template: template$k,
      model: 'checked',
      name: 'bell-Radio',
      propTypes: {
          name: {
              type: RAW_STRING,
          },
          value: {
              type: [RAW_NUMBER, RAW_BOOLEAN, RAW_STRING],
              required: TRUE,
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          checked: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          return {
              isFocus: FALSE,
          };
      },
      events: {
          change: {
              listener: function (_, data) {
                  if (data.value !== UNDEFINED) {
                      var value = this.get('value');
                      var checked = data.value == value;
                      this.set({
                          checked: checked,
                      });
                      this.fireChange(checked, value);
                  }
                  if (data.disabled !== UNDEFINED) {
                      this.set('disabled', data.disabled);
                  }
              },
              ns: 'radioGroup',
          }
      },
      methods: {
          handleClick: function () {
              var checked = TRUE;
              this.set({
                  checked: checked,
              });
              this.fireChange(checked, this.get('value'));
          },
          fireChange: function (checked, value) {
              this.fire({
                  type: 'change',
                  ns: 'radio',
              }, {
                  checked: checked,
                  value: value,
              });
          }
      },
      beforeCreate: function (options) {
          var props = options.props || (options.props = {});
          var radioGroup = findComponentUpward(options.parent, 'bell-RadioGroup');
          if (radioGroup) {
              if (props.name === UNDEFINED) {
                  props.name = radioGroup.get('name');
              }
              if (props.disabled === UNDEFINED) {
                  props.disabled = radioGroup.get('disabled');
              }
              if (props.checked === UNDEFINED) {
                  props.checked = radioGroup.get('value') == props.value;
              }
          }
      }
  });

  var template$l = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:(_r(_Q,'button',_U.button).value?'bell-radio-button'+(_r(_Q,'size',_U.size).value?' bell-radio-button-'+_y(_r(_Q,'size',_U.size).value):'')+(_r(_Q,'disabled',_U.disabled).value?' bell-radio-button-disabled':' bell-radio-button-enable'):'bell-radio-group'+(_r(_Q,'disabled',_U.disabled).value?' bell-radio-group-disabled':' bell-radio-group-enabled'))+(_r(_Q,'vertical',_U.vertical).value?' bell-radio-vertical':' bell-radio-horizontal')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var RadioGroup = Yox.define({
      template: template$l,
      name: 'bell-RadioGroup',
      propTypes: {
          size: {
              type: oneOf(RAW_SIZE_ARRAY),
              value: RAW_DEFAULT,
          },
          name: {
              type: RAW_STRING,
          },
          value: {
              type: [RAW_NUMBER, RAW_BOOLEAN, RAW_STRING],
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          vertical: {
              type: RAW_BOOLEAN,
          },
          button: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          },
      },
      watchers: {
          disabled: function (disabled) {
              this.fire({
                  type: 'change',
                  ns: 'radioGroup',
              }, {
                  disabled: disabled,
              }, TRUE);
          },
          value: function (value) {
              this.fire({
                  type: 'change',
                  ns: 'radioGroup',
              }, {
                  value: value,
              }, TRUE);
          }
      },
      events: {
          change: {
              listener: function (event, data) {
                  event.stop();
                  // 只关心选中的
                  if (!data.checked) {
                      return;
                  }
                  var oldValue = this.get('value');
                  var newValue = data.value;
                  if (oldValue !== newValue) {
                      this.set('value', newValue);
                      this.fire({
                          type: 'change',
                          ns: 'radioGroup',
                      }, {
                          value: newValue,
                      });
                  }
              },
              ns: 'radio',
          }
      }
  });

  var template$m = (function(){var $0,$1=void 0,$3=!0,$4=!1,$5={class:'bell-checkbox-icon'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push(function(_S){_r(_Q,'name',_U.name).value?_n(_S,'nativeAttrs','name',_r(_Q,'name',_U.name).value):$1;return _S}({context:_G,events:{blur:_e('blur',"set('isFocus', false)",'blur','','set',{execute:function(_X,_Y){return ['isFocus',$4]}}),change:_e('change','onChange()','change','','onChange'),focus:_e('focus',"set('isFocus', true)",'focus','','set',{execute:function(_X,_Y){return ['isFocus',$3]}})},nativeAttrs:{checked:_p('checked',_r(_Q,'checked',_U.checked).value),class:'bell-checkbox-input',disabled:_p('disabled',_r(_Q,'disabled',_U.disabled).value),type:'checkbox'},operator:_B,tag:'input',type:3}));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3});($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-checkbox'+(_r(_Q,'disabled',_U.disabled).value?' bell-checkbox-disabled':' bell-checkbox-enabled')+(_r(_Q,'checked',_U.checked).value?' bell-checkbox-active':'')+(_r(_Q,'isFocus',_U.isFocus).value?' bell-checkbox-focus':'')+(_r(_Q,'$slot_children',_U.$slot_children).value?' bell-checkbox-with-label':'')+(_r(_Q,'indeterminate',_U.indeterminate).value?' bell-checkbox-indeterminate':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'label',type:3}));}})();

  var Checkbox = Yox.define({
      template: template$m,
      model: 'checked',
      name: 'bell-Checkbox',
      propTypes: {
          name: {
              type: RAW_STRING,
          },
          value: {
              type: [RAW_STRING, RAW_NUMBER, RAW_BOOLEAN],
              required: TRUE,
          },
          indeterminate: {
              type: RAW_BOOLEAN,
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          checked: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          return {
              isFocus: FALSE,
          };
      },
      events: {
          change: {
              listener: function (_, data) {
                  var value = this.get('value');
                  var oldChecked = this.get('checked');
                  var newChecked = Yox.array.has(data.value, value);
                  if (oldChecked !== newChecked) {
                      this.set({
                          checked: newChecked
                      });
                      this.fireChange(newChecked, value);
                  }
              },
              ns: 'checkboxGroup',
          }
      },
      methods: {
          onChange: function () {
              var checked = this.toggle('checked');
              this.fireChange(checked, this.get('value'));
          },
          fireChange: function (checked, value) {
              this.fire({
                  type: 'change',
                  ns: 'checkbox',
              }, {
                  checked: checked,
                  value: value,
              });
          }
      },
      beforeCreate: function (options) {
          var props = options.props || (options.props = {});
          var checkboxGroup = findComponentUpward(options.parent, 'bell-CheckboxGroup');
          if (checkboxGroup) {
              if (props.name === UNDEFINED) {
                  props.name = checkboxGroup.get('name');
              }
              if (props.disabled === UNDEFINED) {
                  props.disabled = checkboxGroup.get('disabled');
              }
              if (props.checked === UNDEFINED) {
                  props.checked = Yox.array.has(checkboxGroup.get('value'), props.value);
              }
          }
      }
  });

  var template$n = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-checkbox-group'+(_r(_Q,'vertical',_U.vertical).value?' bell-checkbox-vertical':' bell-checkbox-horizontal')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var CheckboxGroup = Yox.define({
      template: template$n,
      name: 'bell-CheckboxGroup',
      propTypes: {
          name: {
              type: RAW_STRING,
          },
          value: {
              type: RAW_ARRAY,
              value: function () {
                  return [];
              }
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          vertical: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      watchers: {
          value: function (value) {
              this.fire({
                  type: 'change',
                  ns: 'checkboxGroup',
              }, {
                  value: value
              }, TRUE);
          }
      },
      events: {
          change: {
              listener: function (event, data) {
                  event.stop();
                  var value = this.copy(this.get('value'));
                  var length = value.length;
                  if (data.checked) {
                      if (!Yox.array.has(value, data.value)) {
                          value.push(data.value);
                      }
                  }
                  else {
                      Yox.array.remove(value, data.value);
                  }
                  if (value.length !== length) {
                      this.set({ value: value });
                      this.fire({
                          type: 'change',
                          ns: 'checkboxGroup',
                      }, {
                          value: value
                      });
                  }
              },
              ns: 'checkbox',
          }
      },
  });

  var template$o = (function(){var $1=void 0,$3=!0,$5={class:'bell-slider-bar'},$6={class:'bell-slider-stop'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;return _S}({children:function(){var _T=[];_T.push(function(_S){!_r(_Q,'disabled',_U.disabled).value?_n(_S,'events','mousedown',_e('mousedown','trackMouseDown()','mousedown','','trackMouseDown')):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$5,nativeStyles:_b(_r(_Q,'vertical',_U.vertical).value?_x(_w(_r(_Q,'formatBarStyle',_U.formatBarStyle,_H&&_H.formatBarStyle||_I.formatBarStyle).value,_G,[_r(_Q,'valuePercentArray',_U.valuePercentArray).value,_r(_Q,'reverse',_U.reverse).value,'bottom','top'])).value:_x(_w(_r(_Q,'formatBarStyle',_U.formatBarStyle,_H&&_H.formatBarStyle||_I.formatBarStyle).value,_G,[_r(_Q,'valuePercentArray',_U.valuePercentArray).value,_r(_Q,'reverse',_U.reverse).value,'left','right'])).value),operator:_B,tag:'div',type:3});_r(_Q,'showStops',_U.showStops).value?_j(_r(_Q,'stops',_U.stops),function(_Q,_U,_V,_W){_T.push({context:_G,key:_t(_Q,'value',_U.value).value,nativeAttrs:$6,nativeStyles:_b(_t(_Q,'style',_U.style).value),operator:_B,tag:'div',type:3});}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_j(_r(_Q,'valuePercentArray',_U.valuePercentArray),function(_Q,_U,_V,_W,index){_T.push({context:_G,isComponent:$3,operator:_C,props:{content:_u(_Q,0,'formatTooltip').value?_x(_w(_u(_Q,0,'formatTooltip').value,_G,[_t(_Q,'value',_U.value).value])).value:_t(_Q,'value',_U.value).value,mode:_u(_Q,0,'RAW_CUSTOM').value,placement:_u(_Q,0,'vertical').value?_u(_Q,0,'RAW_RIGHT').value:_u(_Q,0,'RAW_TOP').value},ref:'tooltip'+index,slots:{$slot_children:function(_R){var _T=[];_T.push(function(_S){!_u(_Q,0,'disabled').value?(_n(_S,'nativeAttrs','tabindex','0'),_n(_S,'lazy','mouseenter',200),_n(_S,'lazy','mouseleave',200),_n(_S,'events','mouseenter',_e('mouseenter','thumbMouseEnter($event, index)','mouseenter','','thumbMouseEnter',{execute:function(_X,_Y){return [_X,index]}})),_n(_S,'events','mouseleave',_e('mouseleave','thumbMouseLeave($event, index)','mouseleave','','thumbMouseLeave',{execute:function(_X,_Y){return [_X,index]}})),_n(_S,'events','mousedown',_e('mousedown','thumbMouseDown($event, index)','mousedown','','thumbMouseDown',{execute:function(_X,_Y){return [_X,index]}}))):$1;return _S}({context:_G,nativeAttrs:{class:'bell-slider-thumb'+(_u(_Q,0,'hoverThumbIndex').value===index?' bell-slider-thumb-hover':'')+(_u(_Q,0,'dragThumbIndex').value===index?' bell-slider-thumb-dragging':'')},nativeStyles:_b(_u(_Q,0,'vertical').value?_x(_w(_r(_Q,'formatThumbStyle',_U.formatThumbStyle,_H&&_H.formatThumbStyle||_I.formatThumbStyle).value,_G,[_t(_Q,'percent',_U.percent).value,_u(_Q,0,'reverse').value?'top':'bottom'])).value:_x(_w(_r(_Q,'formatThumbStyle',_U.formatThumbStyle,_H&&_H.formatThumbStyle||_I.formatThumbStyle).value,_G,[_t(_Q,'percent',_U.percent).value,_u(_Q,0,'reverse').value?'right':'left'])).value),operator:_B,tag:'div',type:3}));return _T.length?_T:$1}},tag:'Tooltip',type:4});});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-slider-track'},operator:_B,tag:'div',type:3}));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-slider'+(_r(_Q,'vertical',_U.vertical).value?' bell-slider-vertical':' bell-slider-horizontal')+(_r(_Q,'disabled',_U.disabled).value?' bell-slider-disabled':' bell-slider-enabled')+(_r(_Q,'block',_U.block).value?' bell-slider-block':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var template$p = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-popover-arrow'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push({context:_G,isComponent:$3,operator:_C,props:{disabled:_r(_Q,'disabled',_U.disabled).value,offsetX:_r(_Q,'offsetX',_U.offsetX).value,offsetY:_r(_Q,'offsetY',_U.offsetY).value,placement:_r(_Q,'placement',_U.placement).value,showArrow:$3,showDelay:_r(_Q,'delay',_U.delay).value,trigger:_r(_Q,'mode',_U.mode).value,visible:_r(_Q,'isVisible',_U.isVisible).value},ref:'popover',slots:{$slot_children:function(_R){var _T=[];($0={children:_m('$slot_children',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1},$slot_overlay:function(_R){var _T=[];_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push(function(_S){_r(_Q,'contentStyle',_U.contentStyle).value?_S.nativeStyles=_b(_r(_Q,'contentStyle',_U.contentStyle).value):$1;return _S}({children:function(){var _T=[];($0={children:_m('$slot_content',_R)||function(){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_r(_Q,'content',_U.content).value),type:1});return _T.length?_T:$1}(),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-popover-content'},operator:_B,tag:'div',type:3}));_T.push({context:_G,isPure:$3,isStatic:$3,nativeAttrs:$5,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-tooltip'+(_r(_Q,'theme',_U.theme).value?' bell-tooltip-'+_y(_r(_Q,'theme',_U.theme).value):'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));return _T.length?_T:$1}},tag:'Popover',type:4});}})();

  var Tooltip = Yox.define({
      template: template$p,
      name: 'bell-Tooltip',
      propTypes: {
          content: {
              type: [RAW_STRING, RAW_NUMBER],
          },
          theme: {
              type: oneOf(RAW_THEME_ARRAY),
              value: RAW_DARK,
          },
          placement: {
              type: oneOf(RAW_PLACEMENT_ARRAY),
              value: RAW_BOTTOM,
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          delay: {
              type: RAW_NUMERIC,
              value: HOVER_DELAY,
          },
          mode: {
              type: oneOf([RAW_HOVER, RAW_CLICK, RAW_CUSTOM]),
              value: RAW_HOVER,
          },
          maxWidth: {
              type: RAW_NUMERIC,
          },
          maxHeight: {
              type: RAW_NUMERIC,
          },
          offsetX: {
              type: RAW_NUMERIC,
          },
          offsetY: {
              type: RAW_NUMERIC,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          return {
              isVisible: FALSE,
          };
      },
      computed: {
          contentStyle: function () {
              var customStyle = {};
              var maxWidth = this.get('maxWidth');
              var maxHeight = this.get('maxHeight');
              if (maxWidth) {
                  customStyle.maxWidth = toPixel(maxWidth);
              }
              if (maxHeight) {
                  customStyle.maxHeight = toPixel(maxHeight);
              }
              if (Yox.object.keys(customStyle).length > 0) {
                  return customStyle;
              }
          },
      },
      events: {
          open: {
              listener: function (event) {
                  event.stop();
                  this.open();
              },
              ns: 'popover',
          },
          close: {
              listener: function (event) {
                  event.stop();
                  this.close();
              },
              ns: 'popover',
          },
          outside: {
              listener: function (event) {
                  event.stop();
                  this.fire({
                      type: 'outside',
                      ns: 'tooltip',
                  });
              },
              ns: 'popover',
          }
      },
      methods: {
          open: function () {
              this.set('isVisible', TRUE);
          },
          close: function () {
              this.set('isVisible', FALSE);
          },
          refresh: function () {
              var popover = this.$refs.popover;
              popover.refreshOverlayRect();
          },
      },
      components: {
          Popover: Popover,
      },
  });

  function getPercentByValue(min, max, rawValue) {
      var range = max - min;
      var value = toNumber(rawValue);
      if (value > max) {
          value = max;
      }
      else if (value < min) {
          value = min;
      }
      return range > 0
          ? (value - min) / range * 100
          : 0;
  }
  var Slider = Yox.define({
      template: template$o,
      name: 'bell-Slider',
      propTypes: {
          value: {
              type: [RAW_NUMERIC, RAW_ARRAY],
              value: 0,
          },
          max: {
              type: RAW_NUMERIC,
              value: 100,
          },
          min: {
              type: RAW_NUMERIC,
              value: 0,
          },
          step: {
              type: RAW_NUMERIC,
              value: 1,
          },
          block: {
              type: RAW_BOOLEAN,
          },
          vertical: {
              type: RAW_BOOLEAN,
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          reverse: {
              type: RAW_BOOLEAN,
          },
          showStops: {
              type: RAW_BOOLEAN,
          },
          showTooltip: {
              type: RAW_BOOLEAN,
          },
          formatTooltip: {
              type: RAW_FUNCTION,
          },
          width: {
              type: RAW_NUMERIC,
          },
          height: {
              type: RAW_NUMERIC,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          return {
              RAW_TOP: RAW_TOP,
              RAW_RIGHT: RAW_RIGHT,
              RAW_CUSTOM: RAW_CUSTOM,
              innerValue: this.get('value'),
              hoverThumbIndex: -1,
              dragThumbIndex: -1,
              showTooltipIndex: -1,
          };
      },
      computed: {
          isRange: function () {
              var value = this.get('value');
              return Yox.is.array(value);
          },
          minNumber: function () {
              return toNumber(this.get('min'));
          },
          maxNumber: function () {
              return toNumber(this.get('max'));
          },
          stepNumber: function () {
              return toNumber(this.get('step'));
          },
          valuePercentArray: {
              deps: ['innerValue', 'innerValue.*'],
              get: function () {
                  var min = this.get('minNumber');
                  var max = this.get('maxNumber');
                  var innerValue = this.get('innerValue');
                  if (Yox.is.array(innerValue)) {
                      return [
                          {
                              value: innerValue[0],
                              percent: getPercentByValue(min, max, innerValue[0])
                          },
                          {
                              value: innerValue[1],
                              percent: getPercentByValue(min, max, innerValue[1])
                          } ];
                  }
                  return [
                      {
                          value: innerValue,
                          percent: getPercentByValue(min, max, innerValue),
                      }
                  ];
              }
          },
          stops: function () {
              var vertical = this.get('vertical');
              var reverse = this.get('reverse');
              var min = this.get('minNumber');
              var max = this.get('maxNumber');
              var step = this.get('stepNumber');
              var range = max - min;
              var result = [];
              if (max - min > step) {
                  var count = Math.floor(range / step);
                  var interval = 100 / count;
                  for (var i = 1; i < count; i++) {
                      var value = i * interval;
                      var percent = value + '%';
                      result.push({
                          value: value,
                          style: vertical
                              ? (reverse ? { top: percent } : { bottom: percent })
                              : (reverse ? { right: percent } : { left: percent })
                      });
                  }
              }
              return result;
          },
          inlineStyle: function () {
              var result = [];
              var customStyle = {};
              var width = this.get('width');
              var height = this.get('height');
              if (width) {
                  customStyle.width = toPixel(width);
              }
              if (height) {
                  customStyle.height = toPixel(height);
              }
              if (Yox.object.keys(customStyle).length > 0) {
                  result.push(customStyle);
              }
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          },
      },
      filters: {
          formatBarStyle: function (valuePercentArray, reverse, fromName, toName) {
              var _a;
              var fromPercnet = valuePercentArray[0].percent;
              var toPercent;
              if (valuePercentArray[1]) {
                  toPercent = valuePercentArray[1].percent;
                  if (fromPercnet > toPercent) {
                      fromPercnet = valuePercentArray[1].percent;
                      toPercent = valuePercentArray[0].percent;
                  }
              }
              else {
                  toPercent = fromPercnet;
                  fromPercnet = 0;
              }
              if (reverse) {
                  var temp = fromName;
                  fromName = toName;
                  toName = temp;
              }
              return _a = {},
                  _a[fromName] = fromPercnet + '%',
                  _a[toName] = (100 - toPercent) + '%',
                  _a;
          },
          formatThumbStyle: function (percent, name) {
              var _a;
              return _a = {},
                  _a[name] = percent + '%',
                  _a;
          }
      },
      events: {
          outside: {
              listener: function (event) {
                  if (event.phase !== Yox.Event.PHASE_UPWARD) {
                      return;
                  }
                  event.stop();
                  this.set('showTooltipIndex', -1);
              },
              ns: 'tooltip'
          }
      },
      watchers: {
          'valuePercentArray.*.value': function () {
              // @ts-ignore
              this.refreshTooltip();
          },
          value: function (value) {
              if (this.get('hoverThumbIndex') < 0
                  && this.get('dragThumbIndex') < 0) {
                  this.set('innerValue', value);
              }
          },
          hoverThumbIndex: function (index) {
              if (index >= 0) {
                  this.set('showTooltipIndex', this.get('showTooltip') ? index : -1);
              }
              else if (this.get('dragThumbIndex') < 0) {
                  this.set('showTooltipIndex', -1);
              }
          },
          dragThumbIndex: function (index) {
              if (index < 0 && this.get('hoverThumbIndex') < 0) {
                  this.set('showTooltipIndex', -1);
              }
          },
          showTooltipIndex: function (index, oldIndex) {
              if (oldIndex >= 0) {
                  var tooltip = this.$refs['tooltip' + oldIndex];
                  tooltip.close();
              }
              if (index >= 0) {
                  var tooltip = this.$refs['tooltip' + index];
                  tooltip.open();
              }
          }
      },
      methods: {
          refreshTooltip: function () {
              var index = this.get('showTooltipIndex');
              if (index < 0) {
                  return;
              }
              this.nextTick(function () {
                  var tooltip = this.$refs['tooltip' + index];
                  tooltip.refresh();
              });
          },
          trackMouseDown: function (event) {
              event.stop();
              fireClickEvent(event);
              // @ts-ignore
              this.onTrackMouseDown(event);
          },
          thumbMouseEnter: function (event, index) {
              event.stop();
              var dragThumbIndex = this.get('dragThumbIndex');
              if (dragThumbIndex >= 0) {
                  if (dragThumbIndex === index) {
                      this.set('hoverThumbIndex', index);
                  }
              }
              else {
                  this.set('hoverThumbIndex', index);
              }
          },
          thumbMouseLeave: function (event) {
              event.stop();
              this.set('hoverThumbIndex', -1);
          },
          thumbMouseDown: function (event, index) {
              event.stop();
              this.set('dragThumbIndex', index);
              // @ts-ignore
              this.onThumbMouseDown();
          }
      },
      afterMount: function () {
          var me = this;
          var isRange = FALSE;
          var dragThumbIndex = -1;
          var isVertical = FALSE;
          var isReverse = FALSE;
          var min = 0;
          var max = 0;
          var step = 0;
          var trackLeft = 0;
          var trackTop = 0;
          var trackRight = 0;
          var trackBottom = 0;
          var onTrackMouseDown = function (event) {
              updateVariable();
              var _a = event.originalEvent, pageX = _a.pageX, pageY = _a.pageY;
              var ratio = getRatio(pageX, pageY);
              if (isRange) {
                  // 当前坐标距离哪个 thumb 近就移动哪个
                  var percent = ratio * 100;
                  var valuePercentArray = me.get('valuePercentArray');
                  updatePosition(ratio, Math.abs(valuePercentArray[0].percent - percent) > Math.abs(valuePercentArray[1].percent - percent)
                      ? 1
                      : 0);
              }
              else {
                  updatePosition(ratio);
              }
          };
          var onThumbMouseDown = function () {
              updateVariable();
              Yox.dom.on(DOCUMENT, RAW_EVENT_MOUSEMOVE, onThumbMouseMove);
              Yox.dom.on(DOCUMENT, RAW_EVENT_MOUSEUP, onThumbMouseUp);
          };
          var onThumbMouseMove = function (event) {
              var _a = event.originalEvent, pageX = _a.pageX, pageY = _a.pageY;
              updatePosition(getRatio(pageX, pageY), dragThumbIndex);
          };
          var onThumbMouseUp = function () {
              Yox.dom.off(DOCUMENT, RAW_EVENT_MOUSEMOVE, onThumbMouseMove);
              Yox.dom.off(DOCUMENT, RAW_EVENT_MOUSEUP, onThumbMouseUp);
              me.set('dragThumbIndex', -1);
          };
          var getRatio = function (x, y) {
              var ratio = 0;
              if (isVertical) {
                  if (y < trackTop) {
                      y = trackTop;
                  }
                  else if (y > trackBottom) {
                      y = trackBottom;
                  }
                  ratio = (trackBottom - y) / (trackBottom - trackTop);
              }
              else {
                  if (x < trackLeft) {
                      x = trackLeft;
                  }
                  else if (x > trackRight) {
                      x = trackRight;
                  }
                  ratio = (x - trackLeft) / (trackRight - trackLeft);
              }
              return isReverse ? (1 - ratio) : ratio;
          };
          var updatePosition = function (ratio, index) {
              var newValue = (max - min) * ratio + min;
              if (step > 0) {
                  var count = Math.round(newValue / step);
                  newValue = step * count;
              }
              if (isRange) {
                  me.set('innerValue.' + index, newValue);
                  var value = me.copy(me.get('innerValue'));
                  // 交换值
                  if (value[0] > value[1]) {
                      var temp = value[0];
                      value[0] = value[1];
                      value[1] = temp;
                  }
                  me.set('value', value);
              }
              else {
                  me.set({
                      innerValue: newValue,
                      value: newValue,
                  });
              }
          };
          var updateVariable = function () {
              isRange = me.get('isRange');
              dragThumbIndex = me.get('dragThumbIndex');
              isVertical = me.get('vertical');
              isReverse = me.get('reverse');
              max = me.get('maxNumber');
              min = me.get('minNumber');
              step = me.get('stepNumber');
              var _a = me.$el.getBoundingClientRect(), top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
              if (isVertical) {
                  var pageY = getPageY();
                  trackTop = pageY + top;
                  trackBottom = pageY + bottom;
              }
              else {
                  var pageX = getPageX();
                  trackLeft = pageX + left;
                  trackRight = pageX + right;
              }
          };
          // @ts-ignore
          this.onTrackMouseDown = onTrackMouseDown;
          // @ts-ignore
          this.onThumbMouseDown = onThumbMouseDown;
      },
      components: {
          Tooltip: Tooltip,
      },
  });

  var template$q = (function(){var $1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;return _S}({children:function(){var _T=[];_j(_r(_Q,'$slot_children',_U.$slot_children),function(_Q,_U,_V,_W){!_t(_Q,'isComment',_U.isComment).value?_T.push(function(_S){_r(_Q,'itemStyle',_U.itemStyle).value?_S.nativeStyles=_b(_r(_Q,'itemStyle',_U.itemStyle).value):$1;return _S}({children:function(){var _T=[];_T.push(_s(_Q,_Q.length-1).value);return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-space-item'},operator:_B,tag:'div',type:3})):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-space'+(_r(_Q,'vertical',_U.vertical).value?' bell-space-vertical':' bell-space-horizontal')+(_r(_Q,'align',_U.align).value?' bell-space-align-'+_y(_r(_Q,'align',_U.align).value):'')+(_r(_Q,'autoWrap',_U.autoWrap).value?' bell-space-auto-wrap':'')+(_r(_Q,'block',_U.block).value?' bell-space-block':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Space = Yox.define({
      template: template$q,
      name: 'bell-Space',
      propTypes: {
          size: {
              type: [RAW_NUMERIC, RAW_ARRAY],
              value: [8, 10],
          },
          align: {
              type: oneOf(['start', 'end', 'center', 'baseline']),
              value: 'center',
          },
          block: {
              type: RAW_BOOLEAN,
          },
          vertical: {
              type: RAW_BOOLEAN,
          },
          autoWrap: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          return {
              supportFlexGap: supportFlexGap,
          };
      },
      computed: {
          sizeArray: function () {
              var size = this.get('size');
              if (size == NULL) {
                  return;
              }
              // 配置两个方向的间距
              if (Yox.is.array(size) && (size[0] > 0 || size[1] > 0)) {
                  return size;
              }
              // 配置一个方向的间距
              var value = toNumber(size);
              if (value > 0) {
                  return [value];
              }
          },
          inlineStyle: function () {
              var result = [];
              var sizeArray = this.get('sizeArray');
              if (sizeArray) {
                  var gapStyle = {};
                  var horizontalGap = sizeArray[0];
                  var verticalGap = sizeArray[1];
                  if (supportFlexGap) {
                      if (horizontalGap > 0) {
                          gapStyle.columnGap = toPixel(horizontalGap);
                      }
                      if (verticalGap > 0) {
                          gapStyle.rowGap = toPixel(verticalGap);
                      }
                  }
                  else if (this.get('vertical')
                      || (verticalGap > 0 && this.get('autoWrap'))) {
                      gapStyle.marginBottom = toPixel(-verticalGap);
                  }
                  if (Yox.object.keys(gapStyle).length > 0) {
                      result.push(gapStyle);
                  }
              }
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          },
          itemStyle: function () {
              if (supportFlexGap) {
                  return;
              }
              var sizeArray = this.get('sizeArray');
              if (sizeArray) {
                  var result = {};
                  var horizontalGap = sizeArray[0];
                  var verticalGap = sizeArray[1];
                  if (this.get('vertical')) {
                      if (verticalGap > 0) {
                          result.marginBottom = toPixel(verticalGap);
                      }
                  }
                  else {
                      if (horizontalGap > 0) {
                          result.marginRight = toPixel(horizontalGap);
                      }
                      if (verticalGap > 0 && this.get('autoWrap')) {
                          result.marginBottom = toPixel(verticalGap);
                      }
                  }
                  if (Yox.object.keys(result).length > 0) {
                      return result;
                  }
              }
          },
      }
  });

  var template$r = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-statistic-title'},$6={class:'bell-statistic-header'},$7={class:'bell-statistic-content-prefix'},$8={class:'bell-statistic-content-value'},$9={class:'bell-statistic-content-suffix'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$5,operator:_B,tag:'div',text:_y(_r(_Q,'title',_U.title).value),type:3});($0={children:_l('$slot_extra'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3});_T.push({context:_G,isComponent:$3,operator:_C,props:{loading:_r(_Q,'loading',_U.loading).value,text:{rows:1}},slots:{$slot_children:function(_R){var _T=[];_T.push(function(_S){_r(_Q,'color',_U.color).value?_S.nativeStyles={color:_r(_Q,'color',_U.color).value}:$1;return _S}({children:function(){var _T=[];_r(_Q,'prefix',_U.prefix).value||_r(_Q,'$slot_prefix',_U.$slot_prefix).value?_T.push({children:function(){var _T=[];($0={children:_m('$slot_prefix',_R)||function(){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_r(_Q,'prefix',_U.prefix).value),type:1});return _T.length?_T:$1}(),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$7,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_T.push({context:_G,nativeAttrs:$8,operator:_B,tag:'div',text:_y(_r(_Q,'value',_U.value).value),type:3});_r(_Q,'suffix',_U.suffix).value||_r(_Q,'$slot_suffix',_U.$slot_suffix).value?_T.push({children:function(){var _T=[];($0={children:_m('$slot_suffix',_R)||function(){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_r(_Q,'suffix',_U.suffix).value),type:1});return _T.length?_T:$1}(),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$9,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-statistic-content'},operator:_B,tag:'div',type:3}));return _T.length?_T:$1}},tag:'Skeleton',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-statistic'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var template$s = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-skeleton-header'},$6={class:'bell-skeleton-text-row'},$7={class:'bell-skeleton-text'},$8={class:'bell-skeleton-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_r(_Q,'loading',_U.loading).value?_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'imageSize',_U.imageSize).value?_T.push({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:{class:'bell-skeleton-image bell-skeleton-image-'+_y(_r(_Q,'imageShape',_U.imageShape).value)},nativeStyles:{height:_r(_Q,'imageSize',_U.imageSize).value,width:_r(_Q,'imageSize',_U.imageSize).value},operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_T.push({children:function(){var _T=[];_r(_Q,'computedText',_U.computedText).value?_T.push({children:function(){var _T=[];_j(_r(_Q,'computedText',_U.computedText),function(_Q,_U,_V,_W,index){_T.push({context:_G,nativeAttrs:$6,nativeStyles:{width:_t(_Q,'width',_U.width).value},operator:_B,tag:'li',type:3});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$7,operator:_B,tag:'ul',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:$8,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-skeleton'+(_r(_Q,'active',_U.active).value?' bell-skeleton-active':'')+(_r(_Q,'imageSize',_U.imageSize).value?' bell-skeleton-with-image':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3})):($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));}})();

  var Skeleton = Yox.define({
      template: template$s,
      name: 'bell-Skeleton',
      propTypes: {
          text: {
              type: [RAW_BOOLEAN, RAW_OBJECT],
              value: TRUE,
          },
          image: {
              type: [RAW_BOOLEAN, RAW_OBJECT],
          },
          loading: {
              type: RAW_BOOLEAN,
          },
          active: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      computed: {
          computedText: function () {
              var text = this.get('text');
              if (text) {
                  var rows = 3;
                  if (Yox.is.object(text) && text.rows) {
                      rows = text.rows;
                  }
                  var allWidth = Yox.is.array(text.width) ? text.width : [];
                  var lastWidth = Yox.is.number(text.width) ? text.width : (rows > 1 ? '60%' : '100%');
                  var result = [];
                  for (var i = 0; i < rows; i++) {
                      var width = allWidth[i] || (i === rows - 1 ? lastWidth : '100%');
                      result.push({
                          width: Yox.is.number(width) ? toPixel(width) : width
                      });
                  }
                  return result;
              }
          },
          imageSize: function () {
              var image = this.get('image');
              if (image) {
                  var size = 48;
                  if (Yox.is.object(image)) {
                      if (Yox.is.number(image.size)) {
                          size = image.size;
                      }
                      if (image.size === RAW_SMALL) {
                          size = 36;
                      }
                      if (image.size === RAW_LARGE) {
                          size = 60;
                      }
                  }
                  return toPixel(size);
              }
          },
          imageShape: function () {
              var image = this.get('image');
              if (image) {
                  var defaultShape = RAW_SHAPE_CIRCLE;
                  if (Yox.is.boolean(image)) {
                      return defaultShape;
                  }
                  if (image.shape === RAW_SHAPE_ROUND) {
                      return RAW_SHAPE_ROUND;
                  }
                  return defaultShape;
              }
          }
      }
  });

  var Statistic = Yox.define({
      template: template$r,
      name: 'bell-Statistic',
      propTypes: {
          title: {
              type: RAW_STRING,
              required: TRUE,
          },
          value: {
              type: [RAW_STRING, RAW_NUMBER],
          },
          loading: {
              type: RAW_BOOLEAN,
          },
          prefix: {
              type: RAW_STRING,
          },
          suffix: {
              type: RAW_STRING,
          },
          color: {
              type: RAW_STRING,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      components: {
          Skeleton: Skeleton,
      }
  });

  var template$t = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-switch-label'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;!_r(_Q,'disabled',_U.disabled).value&&!_r(_Q,'loading',_U.loading).value?_n(_S,'events','click',_e('click','handleClick()','click','','handleClick')):$1;return _S}({children:function(){var _T=[];_r(_Q,'$slot_on',_U.$slot_on).value||_r(_Q,'$slot_off',_U.$slot_off).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_'+(_r(_Q,'checked',_U.checked).value?'on':'off')),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-switch'+(_r(_Q,'size',_U.size).value?' bell-switch-'+_y(_r(_Q,'size',_U.size).value):'')+(_r(_Q,'disabled',_U.disabled).value?' bell-switch-disabled':' bell-switch-enabled')+(_r(_Q,'checked',_U.checked).value?' bell-switch-active':'')+(_r(_Q,'loading',_U.loading).value?' bell-switch-loading':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Switch = Yox.define({
      template: template$t,
      model: 'checked',
      name: 'bell-Switch',
      propTypes: {
          size: {
              type: oneOf([RAW_DEFAULT, RAW_SMALL]),
              value: RAW_DEFAULT,
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          checked: {
              type: RAW_BOOLEAN,
          },
          loading: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      methods: {
          handleClick: function () {
              this.fire({
                  type: 'change',
                  ns: 'switch',
              }, {
                  checked: this.toggle('checked')
              });
          }
      }
  });

  var template$u = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-select-prefix'},$6={class:'bell-select-placeholder'},$7={class:'bell-select-values'},$8={class:'bell-select-value'},$9={class:'bell-select-overlay'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push({context:_G,isComponent:$3,operator:_C,props:{gap:'5',placement:_r(_Q,'placement',_U.placement).value,trigger:_r(_Q,'RAW_CUSTOM',_U.RAW_CUSTOM).value,visible:_r(_Q,'visible',_U.visible).value,widthAlign:$3},ref:'popover',slots:{$slot_children:function(_R){var _T=[];_T.push(function(_S){!_r(_Q,'disabled',_U.disabled).value?_n(_S,'events','click',_e('click',"toggle('visible')",'click','','toggle',{execute:function(_X,_Y){return ['visible']}})):$1;_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'prefix',_U.prefix).value||_r(_Q,'$slot_prefix',_U.$slot_prefix).value?_T.push({children:function(){var _T=[];($0={children:_m('$slot_prefix',_R)||function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{className:'bell-select-prefix-icon',name:_r(_Q,'prefix',_U.prefix).value},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_q(_Q,_Q.length-1,'selectedOptions.length',$3).value===0?_T.push({context:_G,nativeAttrs:$6,operator:_B,tag:'div',text:_y(_r(_Q,'placeholder',_U.placeholder).value),type:3}):_r(_Q,'multiple',_U.multiple).value?_T.push({children:function(){var _T=[];_j(_r(_Q,'selectedOptions',_U.selectedOptions),function(_Q,_U,_V,_W,index){_T.push({context:_G,events:{close:_e('close','handleRemoveOption($event, index)','close','','handleRemoveOption',{execute:function(_X,_Y){return [_X,index]}},$3)},isComponent:$3,operator:_C,parent:_R,props:{closable:$3,simple:$3},slots:{$slot_children:function(_R){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_t(_Q,'text',_U.text).value),type:1});return _T.length?_T:$1}},tag:'Tag',type:4});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$7,operator:_B,tag:'div',type:3}):_T.push({context:_G,nativeAttrs:$8,operator:_B,tag:'div',text:_y(_q(_Q,_Q.length-1,'selectedOptions.0.text',$3).value),type:3});_r(_Q,'clearable',_U.clearable).value&&_q(_Q,_Q.length-1,'selectedOptions.length',$3).value?_T.push({context:_G,events:{'click.native':_e('click.native','handleClearClick()','click','native','handleClearClick',$1,$1,$3)},isComponent:$3,operator:_C,parent:_R,props:{className:'bell-select-clear-icon',name:'close-circle-fill'},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{className:'bell-select-arrow-icon',name:'arrow-down-s-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-select'+(_r(_Q,'status',_U.status).value?' bell-select-'+_y(_r(_Q,'status',_U.status).value):'')+(_r(_Q,'size',_U.size).value?' bell-select-'+_y(_r(_Q,'size',_U.size).value):'')+(_r(_Q,'block',_U.block).value?' bell-select-block':'')+(_r(_Q,'visible',_U.visible).value?' bell-select-opened':'')+(_r(_Q,'clearable',_U.clearable).value?' bell-select-clearable':'')+(_r(_Q,'placement',_U.placement).value===_r(_Q,'RAW_TOP',_U.RAW_TOP).value?' bell-select-reversed':'')+(_r(_Q,'disabled',_U.disabled).value?' bell-select-disabled':' bell-select-enabled')+(_r(_Q,'prefix',_U.prefix).value||_r(_Q,'$slot_prefix',_U.$slot_prefix).value?' bell-select-with-prefix':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));return _T.length?_T:$1},$slot_overlay:function(_R){var _T=[];_T.push({children:function(){var _T=[];($0={children:_m('$slot_children',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$9,operator:_B,tag:'div',type:3});return _T.length?_T:$1}},tag:'Popover',type:4});}})();

  var template$v = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-tag-icon'},$6={class:'bell-tag-close-button'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'color',_U.color).value||_r(_Q,'style',_U.style).value?_S.nativeStyles=_b([_r(_Q,'color',_U.color).value?{backgroundColor:!_r(_Q,'checkable',_U.checkable).value||_r(_Q,'checked',_U.checked).value?_r(_Q,'color',_U.color).value:$1,color:_r(_Q,'checkable',_U.checkable).value&&!_r(_Q,'checked',_U.checked).value?_r(_Q,'color',_U.color).value:$1}:$1,_r(_Q,'style',_U.style).value]):$1;_r(_Q,'checkable',_U.checkable).value?_n(_S,'events','click',_e('click','toggleChecked()','click','','toggleChecked')):$1;return _S}({children:function(){var _T=[];_r(_Q,'$slot_icon',_U.$slot_icon).value||_r(_Q,'icon',_U.icon).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_icon')||function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{name:_r(_Q,'icon',_U.icon).value},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));_r(_Q,'closable',_U.closable).value?_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{name:'close-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_f('click','close.tag','click','','close','tag')},nativeAttrs:$6,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-tag'+(_r(_Q,'type',_U.type).value?' bell-tag-'+_y(_r(_Q,'type',_U.type).value):'')+(_r(_Q,'size',_U.size).value?' bell-tag-'+_y(_r(_Q,'size',_U.size).value):'')+(_r(_Q,'checkable',_U.checkable).value?' bell-tag-checkable':'')+(_r(_Q,'closable',_U.closable).value?' bell-tag-closable':'')+(_r(_Q,'color',_U.color).value?' bell-tag-pure':'')+(_r(_Q,'checked',_U.checked).value?' bell-tag-checked':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Tag = Yox.define({
      template: template$v,
      name: 'bell-Tag',
      propTypes: {
          type: {
              type: oneOf(RAW_TYPE_ARRAY),
          },
          size: {
              type: oneOf(RAW_SIZE_ARRAY),
              value: RAW_DEFAULT,
          },
          checkable: {
              type: RAW_BOOLEAN,
          },
          closable: {
              type: RAW_BOOLEAN,
          },
          checked: {
              type: RAW_BOOLEAN,
          },
          color: {
              type: RAW_STRING,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      methods: {
          toggleChecked: function () {
              this.fire({
                  type: 'change',
                  ns: 'tag',
              }, {
                  checked: !this.get('checked'),
              });
          }
      },
      components: {
          Icon: Icon,
      }
  });

  function isOptionSelected(values, value) {
      return Yox.is.array(values)
          ? Yox.array.has(values, value, FALSE)
          : values == value;
  }

  var Select = Yox.define({
      template: template$u,
      name: 'bell-Select',
      propTypes: {
          placeholder: {
              type: RAW_STRING,
              value: '请选择...'
          },
          value: {
              type: [RAW_ARRAY, RAW_STRING, RAW_NUMBER],
          },
          status: {
              type: oneOf([RAW_TYPE_INFO, RAW_TYPE_SUCCESS, RAW_TYPE_ERROR, RAW_TYPE_WARNING]),
          },
          size: {
              type: oneOf(RAW_SIZE_ARRAY),
              value: RAW_DEFAULT,
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          placement: {
              type: oneOf([RAW_TOP, RAW_BOTTOM]),
              value: RAW_BOTTOM,
          },
          multiple: {
              type: RAW_BOOLEAN,
          },
          clearable: {
              type: RAW_BOOLEAN,
          },
          block: {
              type: RAW_BOOLEAN,
          },
          prefix: {
              type: RAW_STRING,
          },
          width: {
              type: RAW_NUMERIC,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          return {
              RAW_TOP: RAW_TOP,
              RAW_CUSTOM: RAW_CUSTOM,
              visible: FALSE,
              selectedOptions: [],
          };
      },
      computed: {
          inlineStyle: function () {
              var result = [];
              var width = this.get('width');
              if (width) {
                  result.push({
                      width: toPixel(width)
                  });
              }
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          },
      },
      events: {
          update: {
              listener: function (event, data) {
                  event.stop();
                  var me = this;
                  if (data.isSelected) {
                      me.selectOption(data.value);
                  }
                  else {
                      me.deselectOption(data.value);
                  }
                  if (!me.get('multiple')) {
                      me.set('visible', FALSE);
                  }
              },
              ns: 'selectOption',
          },
          outside: {
              listener: function (event) {
                  event.stop();
                  this.set('visible', FALSE);
              },
              ns: 'popover',
          }
      },
      methods: {
          handleClearClick: function (event) {
              // 停止冒泡，否则会展开下拉框
              event.stop();
              fireClickEvent(event);
              this.set('value', UNDEFINED);
              this.fireChange(UNDEFINED);
          },
          handleRemoveOption: function (event, index) {
              event.stop();
              this.removeAt('value', index);
              this.fireChange(this.get('value'));
          },
          selectOption: function (value) {
              var me = this;
              var values = me.get('value');
              if (me.get('multiple')) {
                  if (Yox.is.array(values)
                      && Yox.array.has(values, value)) {
                      return;
                  }
                  me.append('value', value);
                  me.fireChange(me.get('value'));
              }
              else {
                  if (values !== value) {
                      me.set('value', value);
                      me.fireChange(value);
                  }
                  // 更新 UI，因为 watcher 不会被触发
                  else {
                      this.updateSelectedOptions(value, this.get(RAW_SLOT_CHILDREN));
                  }
              }
          },
          deselectOption: function (value) {
              var me = this;
              var values = me.get('value');
              if (me.get('multiple')) {
                  var selectedIndex = Yox.is.array(values)
                      ? Yox.array.indexOf(values, value)
                      : -1;
                  if (selectedIndex < 0) {
                      return;
                  }
                  me.removeAt('value', selectedIndex);
                  me.fireChange(me.get('value'));
              }
              else {
                  if (values !== value) {
                      return;
                  }
                  me.set('value', UNDEFINED);
                  me.fireChange(UNDEFINED);
              }
          },
          updateSelectedOptions: function (selectedValue, children) {
              var me = this;
              var selectedOptions = [];
              if (!children) {
                  me.set('selectedOptions', selectedOptions);
                  return;
              }
              var findOptions = function (children) {
                  children.forEach(function (vnode) {
                      var tag = vnode.tag, props = vnode.props, slots = vnode.slots;
                      if (tag === 'Option' && props) {
                          var text = props.text, value = props.value;
                          if (isOptionSelected(selectedValue, value)) {
                              selectedOptions.push({
                                  text: text,
                                  value: value,
                              });
                          }
                      }
                      else if (tag === 'OptionGroup' && slots && slots[RAW_SLOT_CHILDREN]) {
                          var children_1 = slots[RAW_SLOT_CHILDREN](me);
                          if (children_1) {
                              findOptions(children_1);
                          }
                      }
                  });
              };
              findOptions(children);
              me.set('selectedOptions', selectedOptions);
          },
          fireChange: function (value) {
              this.fire({
                  type: 'change',
                  ns: 'select',
              }, {
                  value: value,
              });
          }
      },
      components: {
          Tag: Tag,
          Icon: Icon,
          Popover: Popover,
      },
      afterMount: function () {
          this.watch('value', function (value) {
              // 在这同步 selectedOptions，可兼顾内外的改动
              this.updateSelectedOptions(value, this.get(RAW_SLOT_CHILDREN));
          }, TRUE);
      },
      afterUpdate: function () {
          if (this.get('visible') && this.get('multiple')) {
              var popover = this.$refs.popover;
              popover.refreshOverlayRect();
          }
      },
      beforePropsUpdate: function (props) {
          this.updateSelectedOptions(this.get('value'), props && props[RAW_SLOT_CHILDREN]);
      }
  });

  var template$w = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;!_r(_Q,'disabled',_U.disabled).value?_n(_S,'events','click',_e('click','handleClick()','click','','handleClick')):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children')||function(){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_r(_Q,'text',_U.text).value),type:1});return _T.length?_T:$1}(),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-select-option'+(_r(_Q,'disabled',_U.disabled).value?' bell-select-option-disabled':' bell-select-option-enabled')+(_r(_Q,'isSelected',_U.isSelected).value?' bell-select-option-active':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Option = Yox.define({
      template: template$w,
      name: 'bell-Option',
      propTypes: {
          value: {
              type: [RAW_STRING, RAW_NUMBER],
              required: TRUE,
          },
          text: {
              type: RAW_STRING,
              required: TRUE,
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function (options) {
          var select = findComponentUpward(options.parent, 'bell-Select');
          var props = options.props || {};
          return {
              isSelected: select
                  ? isOptionSelected(select.get('value'), props.value)
                  : FALSE
          };
      },
      watchers: {
          isSelected: function (isSelected) {
              this.fireEvent(isSelected);
          }
      },
      methods: {
          handleClick: function () {
              this.fireEvent(TRUE);
          },
          getText: function () {
              return this.get('text') || Yox.dom.getText(this.$el);
          },
          fireEvent: function (isSelected) {
              this.fire({
                  type: 'update',
                  ns: 'selectOption',
              }, {
                  isSelected: isSelected,
                  value: this.get('value'),
              });
          }
      }
  });

  var template$x = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-select-group-title'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$5,operator:_B,tag:'div',text:_y(_r(_Q,'label',_U.label).value),type:3});($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-select-option-group'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var OptionGroup = Yox.define({
      template: template$x,
      name: 'bell-OptionGroup',
      propTypes: {
          label: {
              type: RAW_STRING,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
  });

  var template$y = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-pagination-total'},$6={class:'bell-pagination-separator'},$7={class:'bell-pagination-count'},$8={class:'bell-pagination-simple'},$9={class:'bell-pagination-ellipsis'},$10={class:'bell-pagination-list'},$11={class:'bell-pagination-jumper'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'showTotal',_U.showTotal).value?_T.push({children:function(){var _T=[];_T.push({isPure:$3,operator:_z,text:'共 '+_y(_r(_Q,'total',_U.total).value)+' 条',type:1});return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'span',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_q(_Q,_Q.length-1,'pageSizeList.length',$3).value>0?_T.push({context:_G,isComponent:$3,model:_d(_r(_Q,'pageSize',_U.pageSize)),operator:_C,props:{placement:_r(_Q,'placement',_U.placement).value,size:_r(_Q,'size',_U.size).value},slots:{$slot_children:function(_R){var _T=[];_j(_r(_Q,'pageSizeList',_U.pageSizeList),function(_Q,_U,_V,_W){_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{text:_t(_Q,'text',_U.text).value,value:_t(_Q,'value',_U.value).value},tag:'Option',type:4});});return _T.length?_T:$1}},tag:'Select',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'simple',_U.simple).value?_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,key:'prev',operator:_C,props:{disabled:_r(_Q,'current',_U.current).value===1,key:'prev'},slots:{$slot_children:function(_R){var _T=[];($0={children:_m('$slot_prev',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}},tag:'PrevPage',type:4});_T.push({context:_G,isComponent:$3,model:_d(_r(_Q,'page',_U.page)),operator:_C,props:{className:'bell-pagination-simple-input',size:_r(_Q,'size',_U.size).value},ref:'simpleInput',tag:'Input',type:4});_T.push({context:_G,isPure:$3,isStatic:$3,nativeAttrs:$6,operator:_B,tag:'span',text:'/',type:3});_T.push({context:_G,nativeAttrs:$7,operator:_B,tag:'span',text:_y(_r(_Q,'count',_U.count).value),type:3});_T.push({context:_G,isComponent:$3,key:'next',operator:_C,props:{disabled:_r(_Q,'current',_U.current).value===_r(_Q,'count',_U.count).value,key:'next'},slots:{$slot_children:function(_R){var _T=[];($0={children:_m('$slot_next',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}},tag:'NextPage',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:$8,operator:_B,tag:'div',type:3}):_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,key:'prev',operator:_C,props:{disabled:_r(_Q,'current',_U.current).value===1,key:'prev'},slots:{$slot_children:function(_R){var _T=[];($0={children:_m('$slot_prev',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}},tag:'PrevPage',type:4});_j(_r(_Q,'pageList',_U.pageList),function(_Q,_U,_V,_W){_t(_Q,'prev',_U.prev).value?_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-pagination-icon',name:'arrow-left-s-fill'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','decreaseCurrent(5)','click','','decreaseCurrent',{execute:function(_X,_Y){return [5]}})},key:'prev-ellipsis',nativeAttrs:$9,operator:_B,tag:'div',type:3}):_t(_Q,'next',_U.next).value?_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-pagination-icon',name:'arrow-right-s-fill'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','increaseCurrent(5)','click','','increaseCurrent',{execute:function(_X,_Y){return [5]}})},key:'next-ellipsis',nativeAttrs:$9,operator:_B,tag:'div',type:3}):_T.push(function(_S){!_t(_Q,'active',_U.active).value?_n(_S,'events','click',_e('click','setCurrent(this.value)','click','','setCurrent',{execute:function(_X,_Y){return [_t(_Q,'value',_U.value).value]}})):$1;return _S}({context:_G,key:'page'+_y(_t(_Q,'value',_U.value).value),nativeAttrs:{class:'bell-pagination-item'+(_t(_Q,'active',_U.active).value?' bell-pagination-item-active':'')},operator:_B,tag:'div',text:_y(_t(_Q,'value',_U.value).value),type:3}));});_T.push({context:_G,isComponent:$3,key:'next',operator:_C,props:{disabled:_r(_Q,'current',_U.current).value===_r(_Q,'count',_U.count).value,key:'next'},slots:{$slot_children:function(_R){var _T=[];($0={children:_m('$slot_next',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}},tag:'NextPage',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:$10,operator:_B,tag:'div',type:3});_r(_Q,'showJumper',_U.showJumper).value?_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,model:_d(_r(_Q,'page',_U.page)),operator:_C,props:{className:'bell-pagination-jumper-input',placeholder:'请输入页码',size:_r(_Q,'size',_U.size).value},ref:'jumperInput',tag:'Input',type:4});_T.push({context:_G,events:{click:_e('click','jump()','click','','jump',$1,$3)},isComponent:$3,operator:_C,props:{size:_r(_Q,'size',_U.size).value,type:'primary'},slots:{$slot_children:function(_R){var _T=[];_T.push({isPure:$3,operator:_z,text:'跳转',type:1});return _T.length?_T:$1}},tag:'Button',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:$11,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-pagination'+(_r(_Q,'size',_U.size).value?' bell-pagination-'+_y(_r(_Q,'size',_U.size).value):'')+(_r(_Q,'hideOnSinglePage',_U.hideOnSinglePage).value&&_r(_Q,'count',_U.count).value<=1?' bell-pagination-hidden':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var template$z = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_r(_Q,'$slot_children',_U.$slot_children).value?_T.push(function(_S){!_r(_Q,'disabled',_U.disabled).value?_n(_S,'events','click',_f('click','click.prevPage','click','','click','prevPage')):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-pagination-custom-prev'+(_r(_Q,'disabled',_U.disabled).value?' bell-pagination-custom-disabled':'')},operator:_B,tag:'div',type:3})):_T.push(function(_S){!_r(_Q,'disabled',_U.disabled).value?_n(_S,'events','click',_f('click','click.prevPage','click','','click','prevPage')):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-pagination-icon',name:'arrow-left-s-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-pagination-item bell-pagination-prev'+(_r(_Q,'disabled',_U.disabled).value?' bell-pagination-item-disabled':'')},operator:_B,tag:'div',type:3}));}})();

  var PrevPage = Yox.define({
      template: template$z,
      propTypes: {
          disabled: {
              type: RAW_BOOLEAN,
          },
      }
  });

  var template$A = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_r(_Q,'$slot_children',_U.$slot_children).value?_T.push(function(_S){!_r(_Q,'disabled',_U.disabled).value?_n(_S,'events','click',_f('click','click.nextPage','click','','click','nextPage')):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-pagination-custom-next'+(_r(_Q,'disabled',_U.disabled).value?' bell-pagination-custom-disabled':'')},operator:_B,tag:'div',type:3})):_T.push(function(_S){!_r(_Q,'disabled',_U.disabled).value?_n(_S,'events','click',_f('click','click.nextPage','click','','click','nextPage')):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-pagination-icon',name:'arrow-right-s-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-pagination-item bell-pagination-next'+(_r(_Q,'disabled',_U.disabled).value?' bell-pagination-item-disabled':'')},operator:_B,tag:'div',type:3}));}})();

  var NextPage = Yox.define({
      template: template$A,
      propTypes: {
          disabled: {
              type: RAW_BOOLEAN,
          },
      }
  });

  var Pagination = Yox.define({
      template: template$y,
      model: 'current',
      name: 'bell-Pagination',
      propTypes: {
          size: {
              type: oneOf([RAW_DEFAULT, RAW_SMALL]),
              value: RAW_DEFAULT,
          },
          simple: {
              type: RAW_BOOLEAN,
          },
          total: {
              type: RAW_NUMERIC,
              required: TRUE,
          },
          current: {
              type: RAW_NUMERIC,
              value: 1,
          },
          pageSize: {
              type: RAW_NUMERIC,
              value: 10,
          },
          pageSizeOptions: {
              type: RAW_ARRAY,
          },
          showJumper: {
              type: RAW_BOOLEAN,
          },
          showTotal: {
              type: RAW_BOOLEAN,
          },
          hideOnSinglePage: {
              type: RAW_BOOLEAN,
          },
          placement: {
              type: oneOf([RAW_TOP, RAW_BOTTOM]),
              value: RAW_BOTTOM,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          return {
              page: '',
          };
      },
      computed: {
          pageList: function () {
              var result = [];
              var current = toNumber(this.get('current'));
              var count = toNumber(this.get('count'));
              if (count === 0) {
                  return result;
              }
              // 先用 current 拆出中间的 5 个页码
              var start = current - 2;
              var end = current + 2;
              if (start < 1) {
                  start = 1;
                  end = Math.min(count, start + 4);
              }
              if (end > count) {
                  end = count;
                  start = Math.max(1, end - 4);
              }
              for (var i = start; i <= end; i++) {
                  result.push({
                      value: i,
                      active: i === current,
                  });
              }
              if (start > 1) {
                  // 和第一页至少隔了一个页码
                  if (start - 1 > 1) {
                      result.unshift({
                          prev: TRUE,
                      });
                  }
                  result.unshift({
                      value: 1,
                      active: 1 === current,
                  });
              }
              if (end < count) {
                  // 和最后一页至少隔了一个页码
                  if (count - end > 1) {
                      result.push({
                          next: TRUE,
                      });
                  }
                  result.push({
                      value: count,
                      active: count === current,
                  });
              }
              return result;
          },
          pageSizeList: function () {
              var result = [];
              var pageSizeOptions = this.get('pageSizeOptions');
              if (pageSizeOptions) {
                  Yox.array.each(pageSizeOptions, function (value) {
                      result.push({
                          text: value + ' 条/页',
                          value: value,
                      });
                  });
              }
              return result;
          },
          count: function () {
              var total = this.get('total');
              var pageSize = this.get('pageSize');
              return Math.ceil(total / pageSize);
          }
      },
      events: [
          {
              type: 'change',
              ns: 'select',
              listener: function (event, data) {
                  if (event.phase !== Yox.Event.PHASE_UPWARD) {
                      return;
                  }
                  event.stop();
                  // @ts-ignore
                  this.fire({
                      type: 'change',
                      ns: 'pagination',
                  }, {
                      pageSize: data.value
                  });
              }
          },
          {
              type: 'click',
              ns: 'prevPage',
              listener: function (event) {
                  if (event.phase !== Yox.Event.PHASE_UPWARD) {
                      return;
                  }
                  event.stop();
                  // @ts-ignore
                  this.decreaseCurrent(1);
              }
          },
          {
              type: 'click',
              ns: 'nextPage',
              listener: function (event) {
                  if (event.phase !== Yox.Event.PHASE_UPWARD) {
                      return;
                  }
                  event.stop();
                  // @ts-ignore
                  this.increaseCurrent(1);
              }
          },
          {
              type: 'change',
              ns: 'input',
              listener: function (event) {
                  if (event.phase !== Yox.Event.PHASE_UPWARD) {
                      return;
                  }
                  // @ts-ignore
                  event.stop();
              }
          },
          {
              type: 'enter',
              ns: 'input',
              listener: function (event) {
                  if (event.phase !== Yox.Event.PHASE_UPWARD) {
                      return;
                  }
                  event.stop();
                  // @ts-ignore
                  this.jump();
              }
          }
      ],
      watchers: {
          current: function (current) {
              this.set('page', current);
          }
      },
      methods: {
          showError: function (error) {
              this.fire({
                  type: 'error',
                  ns: 'pagination',
              }, {
                  error: error,
              });
          },
          jump: function () {
              var page = this.get('page');
              if (page) {
                  if (Yox.is.numeric(page)) {
                      page = +page;
                      if (page > this.get('count')) {
                          this.showError('max');
                      }
                      else if (page <= 0) {
                          this.showError('min');
                      }
                      else {
                          this.setCurrent(page);
                      }
                  }
                  else {
                      this.showError('pattern');
                  }
              }
              else {
                  this.showError('empty');
              }
          },
          setCurrent: function (current) {
              if (this.get('current') === current) {
                  return;
              }
              this.set('current', current);
              this.fire({
                  type: 'change',
                  ns: 'pagination',
              }, {
                  current: current,
              });
          },
          decreaseCurrent: function (step) {
              var value = toNumber(this.get('current'), 1) - step;
              this.setCurrent(value < 1 ? 1 : value);
          },
          increaseCurrent: function (step) {
              var value = toNumber(this.get('current'), 1) + step;
              var count = this.get('count');
              this.setCurrent(value > count ? count : value);
          }
      },
      components: {
          Icon: Icon,
          Input: Input,
          Button: Button,
          Select: Select,
          PrevPage: PrevPage,
          NextPage: NextPage,
      }
  });

  var template$B = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'draggable',_U.draggable).value?(_n(_S,'events','dragenter',_e('dragenter','handleDragenter()','dragenter','','handleDragenter')),_n(_S,'events','dragleave',_e('dragleave','handleDragleave()','dragleave','','handleDragleave')),_n(_S,'events','dragover',_e('dragover','handleDragover()','dragover','','handleDragover')),_n(_S,'events','drop',_e('drop','handleDrop()','drop','','handleDrop'))):$1;_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));_T.push({children:function(){var _T=[];_T.push({context:_G,events:{change:_e('change','handleChange()','change','','handleChange')},nativeAttrs:{accept:_r(_Q,'accept',_U.accept).value,multiple:_p('multiple',_r(_Q,'multiple',_U.multiple).value),type:'file'},operator:_B,ref:'input',tag:'input',type:3});return _T.length?_T:$1}(),context:_G,operator:_B,ref:'form',tag:'form',type:3});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','handleClick()','click','','handleClick')},nativeAttrs:{class:'bell-upload'+(_r(_Q,'isFileHover',_U.isFileHover).value?' bell-upload-file-hover':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  // 本地文件用负数，避免和数据库自增 id 冲突
  var guid = -1;
  var Upload = Yox.define({
      template: template$B,
      name: 'bell-Upload',
      propTypes: {
          index: {
              type: RAW_NUMERIC,
          },
          draggable: {
              type: RAW_BOOLEAN,
          },
          multiple: {
              type: RAW_BOOLEAN,
          },
          accept: {
              type: RAW_STRING,
          },
          beforeUpload: {
              type: RAW_FUNCTION,
          },
          upload: {
              type: RAW_FUNCTION,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          return {
              isFileHover: FALSE,
          };
      },
      computed: {
          acceptPattern: function () {
              var accept = this.get('accept');
              return accept
                  ? new RegExp('(' + accept.replace(/\*/g, '.').replace(/\s*,\s*/g, '|') + ')')
                  : UNDEFINED;
          }
      },
      methods: {
          beforeUpload: function (fileList) {
              var me = this;
              var acceptPattern = me.get('acceptPattern');
              var formatedFileList = Yox.array.toArray(fileList)
                  .filter(function (file) {
                  return acceptPattern
                      ? acceptPattern.test(file.type)
                      : TRUE;
              })
                  .map(function (file) {
                  return {
                      // 用字符串类型表示本地文件
                      id: toString(guid--),
                      file: file,
                      name: file.name,
                      size: file.size,
                  };
              });
              if (formatedFileList.length > 1
                  && !me.get('multiple')) {
                  formatedFileList.length = 1;
              }
              var beforeUpload = me.get('beforeUpload');
              if (beforeUpload) {
                  var index = me.get('index');
                  beforeUpload({
                      index: index,
                      fileList: formatedFileList,
                      callback: function (result) {
                          if (Yox.is.array(result)) {
                              Yox.array.each(result, function (item) {
                                  me.upload(item);
                              });
                          }
                          else if (result) {
                              me.upload(result);
                          }
                      }
                  });
                  return;
              }
              Yox.array.each(formatedFileList, function (item) {
                  me.upload(item);
              });
          },
          upload: function (file) {
              var me = this;
              var index = me.get('index');
              var upload = me.get('upload');
              upload({
                  index: index,
                  id: file.id,
                  file: file.file,
                  onStart: function () {
                      me.fire({
                          type: 'start',
                          ns: 'upload',
                      }, file);
                  },
                  onEnd: function () {
                      me.fire({
                          type: 'end',
                          ns: 'upload',
                      }, file);
                      me.reset();
                  },
                  onAbort: function () {
                      me.fire({
                          type: 'abort',
                          ns: 'upload',
                      }, file);
                  },
                  onError: function () {
                      me.fire({
                          type: 'error',
                          ns: 'upload',
                      }, file);
                  },
                  onProgress: function (progress) {
                      me.fire({
                          type: 'progress',
                          ns: 'upload',
                      }, {
                          id: file.id,
                          file: file.file,
                          progress: progress,
                      });
                  },
                  onSuccess: function (response) {
                      me.fire({
                          type: 'success',
                          ns: 'upload',
                      }, {
                          id: file.id,
                          file: file.file,
                          response: response,
                      });
                  }
              });
          },
          reset: function () {
              // 重置一下，这样再次选择相同文件才能生效
              this.$refs.form.reset();
          },
          handleClick: function () {
              this.$refs.input.click();
          },
          handleDragenter: function () {
              this.set('isFileHover', TRUE);
          },
          handleDragleave: function () {
              this.set('isFileHover', FALSE);
          },
          handleDragover: function (event) {
              // 默认情况下，元素是不允许放置的
              event.prevent();
          },
          handleDrop: function (event) {
              event.prevent();
              this.set('isFileHover', FALSE);
              this.beforeUpload(event.originalEvent.dataTransfer.files);
          },
          handleChange: function (event) {
              this.beforeUpload(event.originalEvent.target.files);
          }
      }
  });

  var template$C = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-alert-title'},$6={class:'bell-alert-content'},$7={class:'bell-alert-close'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'showIcon',_U.showIcon).value?_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-alert-status-icon',name:_r(_Q,'status',_U.status).value===_r(_Q,'RAW_TYPE_SUCCESS',_U.RAW_TYPE_SUCCESS).value?'checkbox-circle-fill':_r(_Q,'status',_U.status).value===_r(_Q,'RAW_TYPE_WARNING',_U.RAW_TYPE_WARNING).value?'error-warning-fill':_r(_Q,'status',_U.status).value===_r(_Q,'RAW_TYPE_ERROR',_U.RAW_TYPE_ERROR).value?'close-circle-fill':'information-fill'},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'$slot_title',_U.$slot_title).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_title'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'$slot_children',_U.$slot_children).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'closable',_U.closable).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_close')||function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-alert-close-icon',name:'close-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,events:{click:_f('click','close.alert','click','','close','alert')},nativeAttrs:$7,operator:_B,ref:'close',tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-alert'+(_r(_Q,'status',_U.status).value?' bell-alert-'+_y(_r(_Q,'status',_U.status).value):'')+(_r(_Q,'banner',_U.banner).value?' bell-alert-banner':'')+(_r(_Q,'center',_U.center).value?' bell-alert-center':'')+(_r(_Q,'showIcon',_U.showIcon).value?' bell-alert-with-icon':'')+(_r(_Q,'$slot_title',_U.$slot_title).value?' bell-alert-with-title':'')+(_r(_Q,'closable',_U.closable).value||_r(_Q,'$slot_close',_U.$slot_close).value?' bell-alert-with-close':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Alert = Yox.define({
      template: template$C,
      name: 'bell-Alert',
      propTypes: {
          status: {
              type: oneOf(RAW_STATUS_ARRAY),
              value: RAW_TYPE_WARNING,
          },
          showIcon: {
              type: RAW_BOOLEAN,
          },
          banner: {
              type: RAW_BOOLEAN,
          },
          closable: {
              type: RAW_BOOLEAN,
          },
          center: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          return {
              RAW_TYPE_INFO: RAW_TYPE_INFO,
              RAW_TYPE_SUCCESS: RAW_TYPE_SUCCESS,
              RAW_TYPE_WARNING: RAW_TYPE_WARNING,
              RAW_TYPE_ERROR: RAW_TYPE_ERROR,
          };
      },
      components: {
          Icon: Icon,
      }
  });

  var template$D = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-article-title'},$6={class:'bell-article-sub-title'},$7={class:'bell-article-cover'},$8={class:'bell-article-content'},$9={class:'bell-article-signature'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'title',_U.title).value?_T.push({children:function(){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_r(_Q,'title',_U.title).value),type:1});_r(_Q,'showLink',_U.showLink).value?_T.push({context:_G,events:{'click.native':_f('click.native','link.article','click','native','link','article',$1,$3)},isComponent:$3,operator:_C,props:{className:'bell-article-link',name:'links-line'},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'subTitle',_U.subTitle).value?_T.push({context:_G,nativeAttrs:$6,operator:_B,tag:'div',text:_y(_r(_Q,'subTitle',_U.subTitle).value),type:3}):_r(_Q,'$slot_subTitle',_U.$slot_subTitle).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_subTitle'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'$slot_cover',_U.$slot_cover).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_cover'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$7,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_T.push({children:function(){var _T=[];($0={children:_l('$slot_content'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$8,operator:_B,tag:'div',type:3});_r(_Q,'signature',_U.signature).value?_T.push({context:_G,nativeAttrs:$9,operator:_B,tag:'div',text:_y(_r(_Q,'signature',_U.signature).value),type:3}):_r(_Q,'$slot_signature',_U.$slot_signature).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_signature'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$9,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-article'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Article = Yox.define({
      template: template$D,
      name: 'bell-Article',
      propTypes: {
          title: {
              type: RAW_STRING,
          },
          showLink: {
              type: RAW_BOOLEAN,
          },
          subTitle: {
              type: RAW_STRING,
          },
          signature: {
              type: RAW_STRING,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      components: {
          Icon: Icon,
      }
  });

  var template$E = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-analysis-title'},$6={class:'bell-analysis-header'},$7={class:'bell-analysis-value'},$8={class:'bell-analysis-content-wrapper'},$9={class:'bell-analysis-content'},$10={class:'bell-analysis-footer'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$5,operator:_B,tag:'div',text:_y(_r(_Q,'title',_U.title).value),type:3});_r(_Q,'tooltip',_U.tooltip).value?_T.push({context:_G,isComponent:$3,operator:_C,props:{content:_r(_Q,'tooltip',_U.tooltip).value,placement:_r(_Q,'RAW_TOP',_U.RAW_TOP).value},slots:{$slot_children:function(_R){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{className:'bell-analysis-icon-question',name:'question-line'},tag:'Icon',type:4});return _T.length?_T:$1}},tag:'Tooltip',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3});_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-analysis-skeleton',loading:_r(_Q,'loading',_U.loading).value,text:{rows:3}},slots:{$slot_children:function(_R){var _T=[];_T.push({context:_G,nativeAttrs:$7,operator:_B,tag:'div',text:_y(_r(_Q,'value',_U.value).value),type:3});_r(_Q,'$slot_content',_U.$slot_content).value?_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];($0={children:_m('$slot_content',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$8,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$9,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_T.push({children:function(){var _T=[];($0={children:_m('$slot_footer',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$10,operator:_B,tag:'div',type:3});return _T.length?_T:$1}},tag:'Skeleton',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-analysis'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Analysis = Yox.define({
      template: template$E,
      name: 'bell-Analysis',
      propTypes: {
          title: {
              type: RAW_STRING,
              required: TRUE,
          },
          value: {
              type: [RAW_STRING, RAW_NUMBER],
          },
          tooltip: {
              type: RAW_STRING,
          },
          loading: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          return {
              RAW_TOP: RAW_TOP,
          };
      },
      components: {
          Icon: Icon,
          Tooltip: Tooltip,
          Skeleton: Skeleton,
      },
  });

  var template$F = (function(){var $1=void 0,$3=!0,$5={class:'bell-analysis-field-label'},$6={class:'bell-analysis-field-value'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$5,operator:_B,tag:'span',text:_y(_r(_Q,'label',_U.label).value),type:3});_T.push({context:_G,nativeAttrs:$6,operator:_B,tag:'span',text:_y(_r(_Q,'value',_U.value).value),type:3});_r(_Q,'up',_U.up).value?_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-analysis-field-icon-up',name:'arrow-up-s-fill'},tag:'Icon',type:4}):_r(_Q,'down',_U.down).value?_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-analysis-field-icon-down',name:'arrow-down-s-fill'},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-analysis-field'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var AnalysisField = Yox.define({
      template: template$F,
      name: 'bell-AnalysisField',
      propTypes: {
          label: {
              type: RAW_STRING,
              required: TRUE,
          },
          value: {
              type: [RAW_STRING, RAW_NUMBER],
          },
          up: {
              type: RAW_BOOLEAN,
          },
          down: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      components: {
          Icon: Icon,
      }
  });

  var template$G = (function(){var $1=void 0,$3=!0,$5={class:'bell-spin-dot-item'},$6={class:'bell-spin-dot-list'},$7={class:'bell-spin-text'},$8={class:'bell-spin-wrapper'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({children:[{context:_G,isPure:$3,isStatic:$3,nativeAttrs:$5,operator:_B,tag:'i',type:3},{context:_G,isPure:$3,isStatic:$3,nativeAttrs:$5,operator:_B,tag:'i',type:3},{context:_G,isPure:$3,isStatic:$3,nativeAttrs:$5,operator:_B,tag:'i',type:3},{context:_G,isPure:$3,isStatic:$3,nativeAttrs:$5,operator:_B,tag:'i',type:3}],context:_G,isPure:$3,isStatic:$3,nativeAttrs:$6,operator:_B,tag:'div',type:3});_r(_Q,'text',_U.text).value?_T.push({context:_G,nativeAttrs:$7,operator:_B,tag:'div',text:_y(_r(_Q,'text',_U.text).value),type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:$8,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-spin'+(_r(_Q,'size',_U.size).value?' bell-spin-'+_y(_r(_Q,'size',_U.size).value):'')+(_r(_Q,'fixed',_U.fixed).value?' bell-spin-fixed':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Spin = Yox.define({
      template: template$G,
      name: 'bell-Spin',
      propTypes: {
          size: {
              type: oneOf(RAW_SIZE_ARRAY),
              value: RAW_DEFAULT,
          },
          fixed: {
              type: RAW_BOOLEAN,
          },
          text: {
              type: RAW_STRING,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          },
      },
  });

  var template$H = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-split-button-menu'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-split-button'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):''),size:_r(_Q,'size',_U.size).value,style:_r(_Q,'style',_U.style).value},slots:{$slot_children:function(_R){var _T=[];_T.push({context:_G,events:{click:_e('click','handleButtonClick()','click','','handleButtonClick',$1,$3)},isComponent:$3,operator:_C,parent:_R,props:{disabled:_r(_Q,'disabled',_U.disabled).value,loading:_r(_Q,'loading',_U.loading).value,type:_r(_Q,'type',_U.type).value},slots:{$slot_children:function(_R){var _T=[];($0={children:_m('$slot_children',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}},tag:'Button',type:4});_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{disabled:_r(_Q,'disabled',_U.disabled).value||_r(_Q,'loading',_U.loading).value,gap:'5',placement:_r(_Q,'placement',_U.placement).value,trigger:_r(_Q,'RAW_CLICK',_U.RAW_CLICK).value,visible:_r(_Q,'menuVisible',_U.menuVisible).value},slots:{$slot_children:function(_R){var _T=[];_T.push(function(_S){_r(_Q,'loading',_U.loading).value?_n(_S,'props','className','bell-button-loading'):$1;return _S}({context:_G,isComponent:$3,operator:_C,parent:_R,props:{disabled:_r(_Q,'disabled',_U.disabled).value,type:_r(_Q,'type',_U.type).value},slots:{$slot_children:function(_R){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{name:'arrow-down-s-line'},tag:'Icon',type:4});return _T.length?_T:$1}},tag:'Button',type:4}));return _T.length?_T:$1},$slot_overlay:function(_R){var _T=[];_T.push({children:function(){var _T=[];_j(_r(_Q,'menu',_U.menu),function(_Q,_U,_V,_W,index){_T.push(function(_S){!_t(_Q,'disabled',_U.disabled).value?_n(_S,'events','click',_e('click','handleItemClick(this, index)','click','','handleItemClick',{execute:function(_X,_Y){return [_s(_Q,_Q.length-1).value,index]}})):$1;return _S}({context:_G,nativeAttrs:{class:'bell-split-button-menu-item'+(_t(_Q,'disabled',_U.disabled).value?' bell-split-button-menu-item-disabled':' bell-split-button-menu-item-enabled')},operator:_B,tag:'div',text:_y(_t(_Q,'text',_U.text).value),type:3}));});return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3});return _T.length?_T:$1}},tag:'Popover',type:4});return _T.length?_T:$1}},tag:'ButtonGroup',type:4});}})();

  var SplitButton = Yox.define({
      template: template$H,
      name: 'bell-SplitButton',
      propTypes: {
          type: {
              type: oneOf([
                  RAW_TYPE_PRIMARY,
                  RAW_TYPE_INFO,
                  RAW_TYPE_SUCCESS,
                  RAW_TYPE_WARNING,
                  RAW_TYPE_ERROR ]),
          },
          size: {
              type: oneOf([RAW_DEFAULT, RAW_LARGE, RAW_SMALL]),
              value: RAW_DEFAULT,
          },
          placement: {
              type: oneOf(RAW_PLACEMENT_ARRAY),
              value: RAW_BOTTOM_END,
          },
          menu: {
              type: RAW_ARRAY,
              required: TRUE,
          },
          loading: {
              type: RAW_BOOLEAN,
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          return {
              RAW_CLICK: RAW_CLICK,
              menuVisible: FALSE,
          };
      },
      events: {
          click: function (event) {
              if (event.phase === Yox.Event.PHASE_UPWARD) {
                  event.stop();
                  fireClickEvent(event);
              }
          },
          open: function (event) {
              event.stop();
              this.set('menuVisible', TRUE);
          },
          close: function (event) {
              event.stop();
              this.set('menuVisible', FALSE);
          }
      },
      methods: {
          handleButtonClick: function (event) {
              event.stop();
              fireClickEvent(event);
              this.fire({
                  type: 'click',
                  ns: 'splitButton',
              });
          },
          handleItemClick: function (item, index) {
              this.set('menuVisible', FALSE);
              this.fire({
                  type: 'select',
                  ns: 'splitButton',
              }, {
                  item: item,
                  index: index,
              });
          }
      },
      components: {
          Icon: Icon,
          Button: Button,
          ButtonGroup: ButtonGroup,
          Popover: Popover,
      },
  });

  var template$I = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_r(_Q,'visible',_U.visible).value?($0={children:function(){var _T=[];_T.push(function(_S){_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{name:'arrow-up-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_f('click','click.backTop','click','','click','backTop')},nativeAttrs:{class:'bell-backtop'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',transition:_c('backTop',_O&&_O.backTop||_P.backTop),type:3}));return _T.length?_T:$1}(),context:_G,isPortal:$3,operator:_E,tag:'portal',type:6},$0.children&&$0.children.length&&_T.push($0)):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});}})();

  var CLASS_VISIBLE$1 = 'bell-backtop-visible';
  var CLASS_FADE$1 = 'bell-backtop-fade';
  var BackTop = Yox.define({
      template: template$I,
      name: 'bell-BackTop',
      propTypes: {
          target: {
              type: RAW_STRING,
          },
          bottom: {
              type: RAW_NUMERIC,
          },
          right: {
              type: RAW_NUMERIC,
          },
          height: {
              type: RAW_NUMERIC,
              value: 0,
          },
          duration: {
              type: RAW_NUMERIC,
              value: 500,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          return {
              visible: FALSE,
          };
      },
      computed: {
          inlineStyle: function () {
              var result = [];
              var customStyle = {};
              var bottom = this.get('bottom');
              var right = this.get('right');
              if (bottom) {
                  customStyle.bottom = toPixel(bottom);
              }
              if (right) {
                  customStyle.right = toPixel(right);
              }
              if (Yox.object.keys(customStyle).length > 0) {
                  result.push(customStyle);
              }
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          },
      },
      transitions: {
          backTop: {
              enter: function (node) {
                  var me = this;
                  // 设置为 display block
                  Yox.dom.addClass(node, CLASS_VISIBLE$1);
                  setTimeout(function () {
                      if (!me.get('visible')) {
                          return;
                      }
                      Yox.dom.addClass(node, CLASS_FADE$1);
                  }, 50);
              },
              leave: function (node, done) {
                  var me = this;
                  Yox.dom.removeClass(node, CLASS_FADE$1);
                  onTransitionEnd(node, function () {
                      if (me.get('visible')) {
                          return;
                      }
                      Yox.dom.removeClass(node, CLASS_VISIBLE$1);
                      done();
                  });
              }
          },
      },
      components: {
          Icon: Icon,
      },
      afterMount: function () {
          var me = this;
          var container = DOCUMENT;
          var containerElement = DOCUMENT.documentElement;
          var target = me.get('target');
          if (target) {
              containerElement = Yox.dom.find(target);
              if (!containerElement) {
                  Yox.logger.fatal("target is not existed: " + target);
                  return;
              }
              container = containerElement;
          }
          var height = toNumber(me.get('height'));
          var onRefresh = function () {
              me.set({
                  visible: containerElement.scrollTop >= height
              });
          };
          var duration = toNumber(this.get('duration'));
          me.on('click', function () {
              scrollTo(containerElement, containerElement.scrollTop, 0, duration);
          });
          Yox.dom.on(container, RAW_EVENT_SCROLL, onRefresh);
          Yox.dom.on(WINDOW, RAW_EVENT_RESIZE, onRefresh);
          var destroy = function (component) {
              if (component === me) {
                  Yox.dom.off(container, RAW_EVENT_SCROLL, onRefresh);
                  Yox.dom.off(WINDOW, RAW_EVENT_RESIZE, onRefresh);
                  Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy);
              }
          };
          Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy);
      }
  });

  var template$J = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;_r(_Q,'clickable',_U.clickable).value?_n(_S,'events','click',_f('click','click','click','','click')):$1;return _S}({children:function(){var _T=[];_r(_Q,'url',_U.url).value||_r(_Q,'src',_U.src).value?_T.push(function(_S){_r(_Q,'url',_U.url).value?_n(_S,'nativeAttrs','src',_r(_Q,'formatUrl',_U.formatUrl).value?_x(_w(_r(_Q,'formatUrl',_U.formatUrl,_H&&_H.formatUrl||_I.formatUrl).value,_G,[{height:_r(_Q,'sizeValue',_U.sizeValue).value,responsive:$3,url:_r(_Q,'url',_U.url).value,width:_r(_Q,'sizeValue',_U.sizeValue).value}])).value:_r(_Q,'url',_U.url).value):_n(_S,'nativeAttrs','src',_r(_Q,'src',_U.src).value);_r(_Q,'srcSet',_U.srcSet).value?_n(_S,'nativeAttrs','srcset',_r(_Q,'srcSet',_U.srcSet).value):$1;_r(_Q,'alt',_U.alt).value?_n(_S,'nativeAttrs','alt',_r(_Q,'alt',_U.alt).value):$1;return _S}({context:_G,events:{error:_f('error','error.avatar','error','','error','avatar')},nativeAttrs:{draggable:'false'},operator:_B,tag:'img',type:3})):_r(_Q,'$slot_icon',_U.$slot_icon).value?($0={children:_l('$slot_icon'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0)):_r(_Q,'text',_U.text).value?_T.push(function(_S){_r(_Q,'textStyle',_U.textStyle).value?_S.nativeStyles=_b(_r(_Q,'textStyle',_U.textStyle).value):$1;return _S}({context:_G,nativeAttrs:{class:'bell-avatar-text'},operator:_B,ref:'text',tag:'span',text:_y(_r(_Q,'text',_U.text).value),type:3})):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-avatar'+(_r(_Q,'shape',_U.shape).value?' bell-avatar-'+_y(_r(_Q,'shape',_U.shape).value):'')+(_r(_Q,'src',_U.src).value?' bell-avatar-image':'')+(_r(_Q,'clickable',_U.clickable).value?' bell-avatar-clickable':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var SPACE_HORIZONTAL = 8;
  var SIZE_DEFAULT = 32;
  var SIZE_SMALL = 24;
  var SIZE_LARGE = 40;
  var Avatar = Yox.define({
      template: template$J,
      name: 'bell-Avatar',
      propTypes: {
          size: {
              type: [RAW_STRING, RAW_NUMERIC],
              value: RAW_DEFAULT,
          },
          shape: {
              type: oneOf([RAW_SHAPE_CIRCLE]),
          },
          text: {
              type: RAW_STRING,
          },
          url: {
              type: RAW_STRING,
          },
          formatUrl: {
              type: RAW_FUNCTION,
          },
          src: {
              type: RAW_STRING,
          },
          srcSet: {
              type: RAW_STRING,
          },
          alt: {
              type: RAW_STRING,
          },
          color: {
              type: RAW_STRING,
          },
          fontSize: {
              type: RAW_NUMERIC,
          },
          backgroundColor: {
              type: RAW_STRING,
          },
          clickable: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      computed: {
          sizeValue: function () {
              var size = this.get('size');
              var value = toNumber(size);
              if (value > 0) {
                  return value;
              }
              if (size === RAW_SMALL) {
                  return SIZE_SMALL;
              }
              if (size === RAW_LARGE) {
                  return SIZE_LARGE;
              }
              return SIZE_DEFAULT;
          },
          inlineStyle: function () {
              var result = [];
              var customStyle = {};
              var sizeValue = this.get('sizeValue');
              customStyle.width = toPixel(sizeValue);
              customStyle.height = toPixel(sizeValue);
              var backgroundColor = this.get('backgroundColor');
              if (backgroundColor) {
                  customStyle.backgroundColor = backgroundColor;
              }
              if (Yox.object.keys(customStyle).length > 0) {
                  result.push(customStyle);
              }
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          },
          textStyle: function () {
              var customStyle = {};
              var color = this.get('color');
              var fontSize = this.get('fontSize');
              if (color) {
                  customStyle.color = color;
              }
              if (fontSize) {
                  customStyle.fontSize = toPixel(fontSize);
              }
              if (Yox.object.keys(customStyle).length > 0) {
                  return customStyle;
              }
          }
      },
      afterMount: function () {
          var me = this;
          me.watch('text', function () {
              me.nextTick(function () {
                  var element = me.$refs && me.$refs.text;
                  if (!element) {
                      return;
                  }
                  var scale = element.offsetWidth
                      ? (me.$el.offsetWidth - SPACE_HORIZONTAL) / element.offsetWidth
                      : 1;
                  element.style.transform = "scale(" + Math.min(scale, 1) + ") translateX(-50%)";
              });
          }, TRUE);
      }
  });

  var template$K = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-badge-dot'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));!_r(_Q,'hidden',_U.hidden).value?(_r(_Q,'dot',_U.dot).value?_T.push({context:_G,isPure:$3,isStatic:$3,nativeAttrs:$5,operator:_B,tag:'span',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2}),_r(_Q,'text',_U.text).value||_x(_w(_r(_Q,'isNumeric',_U.isNumeric,_H&&_H.isNumeric||_I.isNumeric).value,_G,[_r(_Q,'count',_U.count).value])).value?_T.push({context:_G,nativeAttrs:{class:'bell-badge-text'+(_r(_Q,'$slot_children',_U.$slot_children).value?' bell-badge-text-append':'')},operator:_B,tag:'span',text:_y(_r(_Q,'text',_U.text).value||_x(_w(_r(_Q,'formatText',_U.formatText,_H&&_H.formatText||_I.formatText).value,_G,[_r(_Q,'count',_U.count).value,_r(_Q,'max',_U.max).value])).value),type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2})):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-badge'+(_r(_Q,'status',_U.status).value?'-status':'')+(_r(_Q,'status',_U.status).value?' bell-badge-status-'+_y(_r(_Q,'status',_U.status).value):_r(_Q,'type',_U.type).value?' bell-badge-'+_y(_r(_Q,'type',_U.type).value):'')+(_r(_Q,'dot',_U.dot).value&&_r(_Q,'text',_U.text).value?' bell-badge-with-dot-text':'')+(_r(_Q,'ripple',_U.ripple).value?' bell-badge-ripple':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Badge = Yox.define({
      template: template$K,
      name: 'bell-Badge',
      propTypes: {
          type: {
              type: oneOf(RAW_TYPE_ARRAY),
              value: RAW_TYPE_ERROR,
          },
          status: {
              type: oneOf([
                  RAW_TYPE_INFO,
                  RAW_TYPE_SUCCESS,
                  RAW_TYPE_ERROR,
                  RAW_TYPE_WARNING,
                  RAW_DEFAULT,
                  'processing' ]),
          },
          text: {
              type: [RAW_STRING, RAW_NUMBER],
          },
          count: {
              type: RAW_NUMERIC,
          },
          max: {
              type: RAW_NUMERIC,
              value: 99,
          },
          dot: {
              type: RAW_BOOLEAN,
          },
          hidden: {
              type: RAW_BOOLEAN,
          },
          ripple: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      filters: {
          isNumeric: Yox.is.numeric,
          formatText: function (count, max) {
              count = Yox.is.numeric(count) ? +count : 0;
              max = Yox.is.numeric(max) ? +max : 1;
              return max < count
                  ? max + '+'
                  : count;
          }
      }
  });

  var template$L = (function(){var $1=void 0,$3=!0,$5={class:'bell-date-picker-header-button'},$6={class:'bell-date-picker-prev'},$7={class:'bell-date-picker-header-year'},$8={class:'bell-date-picker-header-month'},$9={class:'bell-date-picker-next'},$10={class:'bell-date-picker-header'},$11={class:'bell-date-picker-col'},$12={class:'bell-date-picker-weeks'},$13={class:'bell-date-picker-text'},$14={class:'bell-date-picker-row'},$15={class:'bell-date-picker-days'},$16={class:'bell-date-picker-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_r(_Q,'type',_U.type).value===_r(_Q,'RAW_TYPE_DATE',_U.RAW_TYPE_DATE).value?_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','offset(-12)','click','','offset',{execute:function(_X,_Y){return [-12]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','offset(-1)','click','','offset',{execute:function(_X,_Y){return [-1]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3});_T.push(function(_S){_r(_Q,'canPickYear',_U.canPickYear).value?(_n(_S,'nativeAttrs','class','bell-date-picker-header-link'),_n(_S,'events','click',_e('click',"set('type', RAW_TYPE_YEAR)",'click','','set',{execute:function(_X,_Y){return ['type',_r(_Q,'RAW_TYPE_YEAR',_U.RAW_TYPE_YEAR).value]}}))):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$7,operator:_B,tag:'span',text:_y(_q(_Q,_Q.length-1,'date.year',$3).value),type:3});_T.push({isPure:$3,operator:_z,text:'年',type:1});return _T.length?_T:$1}(),context:_G,operator:_B,tag:'span',type:3}));_T.push(function(_S){_r(_Q,'canPickMonth',_U.canPickMonth).value?(_n(_S,'nativeAttrs','class','bell-date-picker-header-link'),_n(_S,'events','click',_e('click',"set('type', RAW_TYPE_MONTH)",'click','','set',{execute:function(_X,_Y){return ['type',_r(_Q,'RAW_TYPE_MONTH',_U.RAW_TYPE_MONTH).value]}}))):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$8,operator:_B,tag:'span',text:_y(_q(_Q,_Q.length-1,'date.month',$3).value),type:3});_T.push({isPure:$3,operator:_z,text:'月',type:1});return _T.length?_T:$1}(),context:_G,operator:_B,tag:'span',type:3}));_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','offset(1)','click','','offset',{execute:function(_X,_Y){return [1]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','offset(12)','click','','offset',{execute:function(_X,_Y){return [12]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$9,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$10,operator:_B,tag:'div',type:3});_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_j(_r(_Q,'weeks',_U.weeks),function(_Q,_U,_V,_W){_T.push({context:_G,nativeAttrs:$11,operator:_B,tag:'div',text:_y(_s(_Q,_Q.length-1).value),type:3});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$12,operator:_B,tag:'div',type:3});_T.push({children:function(){var _T=[];_j(_r(_Q,'datasource',_U.datasource),function(_Q,_U,_V,_W){_T.push({children:function(){var _T=[];_j(_t(_Q,'list',_U.list),function(_Q,_U,_V,_W){_T.push(function(_S){_x(_w(_r(_Q,'isEnabled',_U.isEnabled,_H&&_H.isEnabled||_I.isEnabled).value,_G,[_s(_Q,_Q.length-1).value,_u(_Q,0,'disabledDate').value])).value?_n(_S,'events','click',_e('click','click(this)','click','','click',{execute:function(_X,_Y){return [_s(_Q,_Q.length-1).value]}})):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$13,operator:_B,tag:'div',text:_y(_t(_Q,'date',_U.date).value),type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-date-picker-col'+(_x(_w(_r(_Q,'isEnabled',_U.isEnabled,_H&&_H.isEnabled||_I.isEnabled).value,_G,[_s(_Q,_Q.length-1).value,_u(_Q,0,'disabledDate').value])).value?' bell-date-picker-col-enabled'+(_x(_w(_r(_Q,'isCurrentMonth',_U.isCurrentMonth,_H&&_H.isCurrentMonth||_I.isCurrentMonth).value,_G,[_s(_Q,_Q.length-1).value,_u(_Q,0,'date').value])).value?' bell-date-picker-col-current-month'+(_x(_w(_r(_Q,'isChecked',_U.isChecked,_H&&_H.isChecked||_I.isChecked).value,_G,[_s(_Q,_Q.length-1).value,_u(_Q,0,'checkedTimestamps').value])).value?' bell-date-picker-col-checked':''):' bell-date-picker-col-adjacent-month'):' bell-date-picker-col-disabled')},operator:_B,tag:'div',type:3}));});return _T.length?_T:$1}(),context:_G,nativeAttrs:$14,operator:_B,tag:'div',type:3});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$15,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$16,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-date-picker-date bell-date-picker-panel'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3})):_r(_Q,'type',_U.type).value===_r(_Q,'RAW_TYPE_YEAR',_U.RAW_TYPE_YEAR).value?_T.push({context:_G,isComponent:$3,operator:_C,props:{checkedYear:_q(_Q,_Q.length-1,'date.year',$3).value},tag:'DateYear',type:4}):_r(_Q,'type',_U.type).value===_r(_Q,'RAW_TYPE_MONTH',_U.RAW_TYPE_MONTH).value?_T.push({context:_G,isComponent:$3,operator:_C,props:{checkedMonth:_q(_Q,_Q.length-1,'date.month',$3).value,checkedYear:_q(_Q,_Q.length-1,'date.year',$3).value},tag:'DateMonth',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});}})();

  var template$M = (function(){var $1=void 0,$3=!0,$5={class:'bell-date-picker-header-button'},$6={class:'bell-date-picker-prev'},$7={class:'bell-date-picker-header-year'},$8={class:'bell-date-picker-next'},$9={class:'bell-date-picker-header'},$10={class:'bell-date-picker-text'},$11={class:'bell-date-picker-row'},$12={class:'bell-date-picker-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_r(_Q,'type',_U.type).value===_r(_Q,'RAW_TYPE_MONTH',_U.RAW_TYPE_MONTH).value?_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click',"decrease('year', 10)",'click','','decrease',{execute:function(_X,_Y){return ['year',10]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click',"decrease('year', 1)",'click','','decrease',{execute:function(_X,_Y){return ['year',1]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3});_T.push(function(_S){_r(_Q,'canPickYear',_U.canPickYear).value?(_n(_S,'nativeAttrs','class','bell-date-picker-header-link'),_n(_S,'events','click',_e('click',"set('type', RAW_TYPE_YEAR)",'click','','set',{execute:function(_X,_Y){return ['type',_r(_Q,'RAW_TYPE_YEAR',_U.RAW_TYPE_YEAR).value]}}))):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$7,operator:_B,tag:'span',text:_y(_r(_Q,'year',_U.year).value),type:3});_T.push({isPure:$3,operator:_z,text:'年',type:1});return _T.length?_T:$1}(),context:_G,operator:_B,tag:'span',type:3}));_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click',"increase('year', 1)",'click','','increase',{execute:function(_X,_Y){return ['year',1]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click',"increase('year', 10)",'click','','increase',{execute:function(_X,_Y){return ['year',10]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$8,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$9,operator:_B,tag:'div',type:3});_T.push({children:function(){var _T=[];_j(_r(_Q,'datasource',_U.datasource),function(_Q,_U,_V,_W){_T.push({children:function(){var _T=[];_j(_s(_Q,_Q.length-1),function(_Q,_U,_V,_W){_T.push({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$10,operator:_B,tag:'div',text:_y(_t(_Q,'text',_U.text).value),type:3});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','click(this)','click','','click',{execute:function(_X,_Y){return [_s(_Q,_Q.length-1).value]}})},nativeAttrs:{class:'bell-date-picker-col bell-date-picker-col-enabled'+(_x(_w(_r(_Q,'isChecked',_U.isChecked,_H&&_H.isChecked||_I.isChecked).value,_G,[_s(_Q,_Q.length-1).value,_u(_Q,0,'checkedTimestamps').value])).value?' bell-date-picker-col-checked':'')},operator:_B,tag:'div',type:3});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$11,operator:_B,tag:'div',type:3});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$12,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-date-picker-month bell-date-picker-panel'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3})):_r(_Q,'type',_U.type).value===_r(_Q,'RAW_TYPE_YEAR',_U.RAW_TYPE_YEAR).value?_T.push({context:_G,isComponent:$3,operator:_C,props:{checkedYear:_r(_Q,'year',_U.year).value},tag:'DateYear',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});}})();

  var template$N = (function(){var $1=void 0,$3=!0,$5={class:'bell-date-picker-header-button bell-date-picker-prev'},$6={class:'bell-date-picker-header-year'},$7={class:'bell-date-picker-header-separator'},$8={class:'bell-date-picker-header-button bell-date-picker-next'},$9={class:'bell-date-picker-header'},$10={class:'bell-date-picker-text'},$11={class:'bell-date-picker-row'},$12={class:'bell-date-picker-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click',"decrease('year', count)",'click','','decrease',{execute:function(_X,_Y){return ['year',_r(_Q,'count',_U.count).value]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});_T.push({context:_G,nativeAttrs:$6,operator:_B,tag:'span',text:_y(_r(_Q,'year',_U.year).value),type:3});_T.push({isPure:$3,operator:_z,text:'年',type:1});_T.push({context:_G,isPure:$3,isStatic:$3,nativeAttrs:$7,operator:_B,tag:'span',text:'-',type:3});_T.push({context:_G,nativeAttrs:$6,operator:_B,tag:'span',text:_y(_r(_Q,'year',_U.year).value+_r(_Q,'count',_U.count).value-1),type:3});_T.push({isPure:$3,operator:_z,text:'年',type:1});_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click',"increase('year', count)",'click','','increase',{execute:function(_X,_Y){return ['year',_r(_Q,'count',_U.count).value]}})},nativeAttrs:$8,operator:_B,tag:'span',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$9,operator:_B,tag:'div',type:3});_T.push({children:function(){var _T=[];_j(_r(_Q,'datasource',_U.datasource),function(_Q,_U,_V,_W){_T.push({children:function(){var _T=[];_j(_s(_Q,_Q.length-1),function(_Q,_U,_V,_W){_T.push({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$10,operator:_B,tag:'div',text:_y(_s(_Q,_Q.length-1).value),type:3});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','click(this)','click','','click',{execute:function(_X,_Y){return [_s(_Q,_Q.length-1).value]}})},nativeAttrs:{class:'bell-date-picker-col bell-date-picker-col-enabled'+(_x(_w(_r(_Q,'isChecked',_U.isChecked,_H&&_H.isChecked||_I.isChecked).value,_G,[_s(_Q,_Q.length-1).value,_u(_Q,0,'checkedYears').value])).value?' bell-date-picker-col-checked':'')},operator:_B,tag:'div',type:3});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$11,operator:_B,tag:'div',type:3});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$12,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-date-picker-year bell-date-picker-panel'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var WEEKS = ['日', '一', '二', '三', '四', '五', '六'];
  var SECOND$2 = 1000;
  var MINUTE$1 = 60 * SECOND$2;
  var HOUR$1 = 60 * MINUTE$1;
  var DAY$1 = 24 * HOUR$1;
  var STABLE_DURATION = 41 * DAY$1;
  var MONTHS = [
      '一月', '二月', '三月', '四月', '五月',
      '六月', '七月', '八月', '九月', '十月',
      '十一月', '十二月'
  ];
  var RAW_TYPE_DATE = 'date';
  var RAW_TYPE_DATE_RANGE = 'dateRange';
  var RAW_TYPE_WEEK = 'week';
  var RAW_TYPE_YEAR = 'year';
  var RAW_TYPE_MONTH = 'month';
  function toSimpleDate(date) {
      var result = toDate(date);
      return {
          year: result.getFullYear(),
          month: result.getMonth() + 1,
          date: result.getDate(),
          timestamp: result.getTime(),
      };
  }
  function toDate(date) {
      var result;
      if (date instanceof Date) {
          result = date;
      }
      else {
          result = new Date(date);
      }
      // 碰到过夏令时问题，问题描述如下：
      // time 每次递增 DAY，期望下次的时分秒是相同的，即 00:00:00
      // 但是碰到夏令时问题后，小时会有不同，非常坑爹
      // 因此这里要检查小时是否为 0
      result.setHours(0, 0, 0, 0);
      return result;
  }
  function toTimestamp(date) {
      return toDate(date || new Date()).getTime();
  }
  function offsetMonth(timestamp, offset) {
      var date = new Date(timestamp);
      date.setDate(1);
      date.setMonth(date.getMonth() + offset);
      return date.getTime();
  }
  function firstDateInWeek(date) {
      var day = date.getDay();
      return new Date(date.getTime() - day * DAY$1);
  }
  function lastDateInWeek(date) {
      var day = date.getDay();
      return new Date(date.getTime() - (6 - day) * DAY$1);
  }
  function firstDateInMonth(date) {
      date.setDate(1);
      return date;
  }
  function lastDateInMonth(date) {
      date.setDate(1);
      date.setMonth(date.getMonth() + 1);
      return new Date(date.getTime() - DAY$1);
  }
  function createYearViewDatasource(startYear, count) {
      var result = [], list = [];
      for (var i = 0; i < count; i++) {
          list.push(i + startYear);
          if (i % 4 === 3) {
              result.push(list);
              list = [];
          }
      }
      return result;
  }
  function createMonthViewDatasource(year) {
      var result = [], list = [], date = new Date();
      date.setFullYear(year);
      date.setDate(1);
      date.setHours(0, 0, 0, 0);
      for (var i = 0, len = MONTHS.length; i < len; i++) {
          date.setMonth(i);
          list.push({
              timestamp: date.getTime(),
              year: year,
              month: i + 1,
              text: MONTHS[i],
          });
          if (i % 4 === 3) {
              result.push(list);
              list = [];
          }
      }
      return result;
  }
  function createDateViewDatasource(timestamp) {
      var startDate = firstDateInWeek(firstDateInMonth(new Date(timestamp))).getTime();
      var endDate = lastDateInWeek(lastDateInMonth(new Date(timestamp))).getTime();
      var duration = endDate - startDate;
      var offset = STABLE_DURATION - duration;
      if (offset > 0) {
          endDate += offset;
      }
      var result = [], list = [];
      for (var i = 0, time = startDate; time <= endDate; i++, time += DAY$1) {
          list.push(toSimpleDate(time));
          if (i % 7 === 6) {
              result.push({
                  start: list[0],
                  end: list[list.length - 1],
                  list: list,
              });
              list = [];
          }
      }
      return result;
  }
  /**
   * yyyy -> 2019
   * M    -> 1
   * MM   -> 01
   * d    -> 1
   * dd   -> 01
   */
  function formatDate(date, format) {
      return format
          .replace(/yyyy/i, toString(date.getFullYear()))
          .replace(/MM/i, padStart(date.getMonth() + 1))
          .replace(/M/i, toString(date.getMonth() + 1))
          .replace(/dd/i, padStart(date.getDate()))
          .replace(/d/i, toString(date.getDate()));
  }

  var DateYear = Yox.define({
      template: template$N,
      propTypes: {
          defaultDate: {
              type: [RAW_DATE, RAW_NUMBER],
          },
          checkedDate: {
              type: [RAW_DATE, RAW_NUMBER, RAW_ARRAY],
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function (options) {
          var props = options.props || {};
          var date = props.defaultDate;
          if (!date) {
              if (Yox.is.array(props.checkedDate)) {
                  date = props.checkedDate[0];
              }
              else {
                  date = props.checkedDate;
              }
          }
          return {
              year: (date ? toDate(date) : new Date()).getFullYear(),
              count: 12,
          };
      },
      computed: {
          datasource: function () {
              return createYearViewDatasource(this.get('year'), this.get('count'));
          },
          checkedYears: function () {
              var checkedDate = this.get('checkedDate');
              if (Yox.is.array(checkedDate)) {
                  return checkedDate.map(function (date) {
                      return date ? toDate(date).getFullYear() : 0;
                  });
              }
              return [checkedDate ? toDate(checkedDate).getFullYear() : 0];
          }
      },
      filters: {
          isChecked: function (year, checkedYears) {
              return Yox.array.has(checkedYears, year);
          }
      },
      methods: {
          click: function (item) {
              this.fire({
                  type: 'change',
                  ns: 'year',
              }, {
                  year: item,
              });
          }
      },
      components: {
          Icon: Icon,
      }
  });

  function toMonthTimestamp(date) {
      if (date) {
          date = toDate(date);
          date.setDate(1);
          return date.getTime();
      }
      return 0;
  }
  var DateMonth = Yox.define({
      template: template$M,
      propTypes: {
          defaultDate: {
              type: RAW_NUMBER,
          },
          checkedDate: {
              type: [RAW_DATE, RAW_NUMBER, RAW_ARRAY],
          },
          canPickYear: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function (options) {
          var props = options.props || {};
          var date = props.defaultDate;
          if (!date) {
              if (Yox.is.array(props.checkedDate)) {
                  date = props.checkedDate[0];
              }
              else {
                  date = props.checkedDate;
              }
          }
          return {
              type: RAW_TYPE_MONTH,
              RAW_TYPE_YEAR: RAW_TYPE_YEAR,
              RAW_TYPE_MONTH: RAW_TYPE_MONTH,
              year: (date ? toDate(date) : new Date()).getFullYear(),
          };
      },
      components: {
          Icon: Icon,
          DateYear: DateYear,
      },
      computed: {
          datasource: function () {
              return createMonthViewDatasource(this.get('year'));
          },
          checkedTimestamps: function () {
              var checkedDate = this.get('checkedDate');
              if (Yox.is.array(checkedDate)) {
                  return checkedDate.map(toMonthTimestamp);
              }
              return [toMonthTimestamp(checkedDate)];
          }
      },
      filters: {
          isChecked: function (item, checkedTimestamps) {
              return Yox.array.has(checkedTimestamps, item.timestamp);
          }
      },
      events: {
          change: {
              listener: function (event, data) {
                  event.stop();
                  this.set({
                      type: RAW_TYPE_MONTH,
                      year: data.year,
                  });
              },
              ns: 'year',
          },
      },
      methods: {
          click: function (item) {
              this.fire({
                  type: 'change',
                  ns: 'month',
              }, item);
          }
      }
  });

  var DateView = Yox.define({
      template: template$L,
      propTypes: {
          defaultDate: {
              type: [RAW_DATE, RAW_NUMBER],
          },
          checkedDate: {
              type: [RAW_DATE, RAW_NUMBER, RAW_ARRAY],
          },
          disabledDate: {
              type: RAW_FUNCTION,
          },
          canPickYear: {
              type: RAW_BOOLEAN,
          },
          canPickMonth: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function (options) {
          var props = options.props || {};
          var date = props.defaultDate;
          if (!date) {
              if (Yox.is.array(props.checkedDate)) {
                  date = props.checkedDate[0];
              }
              else {
                  date = props.checkedDate;
              }
          }
          return {
              type: RAW_TYPE_DATE,
              RAW_TYPE_DATE: RAW_TYPE_DATE,
              RAW_TYPE_YEAR: RAW_TYPE_YEAR,
              RAW_TYPE_MONTH: RAW_TYPE_MONTH,
              weeks: WEEKS,
              timestamp: toTimestamp(date),
          };
      },
      computed: {
          date: function () {
              return toSimpleDate(this.get('timestamp'));
          },
          datasource: function () {
              return createDateViewDatasource(this.get('timestamp'));
          },
          checkedTimestamps: function () {
              var checkedDate = this.get('checkedDate');
              if (Yox.is.array(checkedDate)) {
                  return checkedDate.map(function (date) {
                      return date ? toTimestamp(date) : 0;
                  });
              }
              return [checkedDate ? toTimestamp(checkedDate) : 0];
          }
      },
      components: {
          Icon: Icon,
          DateYear: DateYear,
          DateMonth: DateMonth,
      },
      filters: {
          isCurrentMonth: function (item, date) {
              return date.year === item.year && date.month === item.month;
          },
          isEnabled: function (item, disabledDate) {
              return disabledDate
                  ? disabledDate(item)
                  : TRUE;
          },
          isChecked: function (item, checkedTimestamps) {
              return Yox.array.has(checkedTimestamps, item.timestamp);
          }
      },
      events: [
          {
              type: 'change',
              ns: 'year',
              listener: function (event, data) {
                  event.stop();
                  // @ts-ignore
                  var date = new Date(this.get('timestamp'));
                  date.setFullYear(data.year);
                  // @ts-ignore
                  this.set({
                      type: RAW_TYPE_DATE,
                      timestamp: date.getTime()
                  });
              }
          },
          {
              type: 'change',
              ns: 'month',
              listener: function (event, data) {
                  event.stop();
                  // @ts-ignore
                  var date = new Date(this.get('timestamp'));
                  date.setMonth(data.month - 1);
                  // @ts-ignore
                  this.set({
                      type: RAW_TYPE_DATE,
                      timestamp: date.getTime()
                  });
              }
          }
      ],
      methods: {
          offset: function (offset) {
              this.set('timestamp', offsetMonth(this.get('timestamp'), offset));
          },
          click: function (item) {
              this.fire({
                  type: 'change',
                  ns: 'date',
              }, item);
          }
      }
  });

  var template$O = (function(){var $1=void 0,$3=!0,$5={class:'bell-date-picker-header-button'},$6={class:'bell-date-picker-prev'},$7={class:'bell-date-picker-header-year'},$8={class:'bell-date-picker-header-month'},$9={class:'bell-date-picker-next'},$10={class:'bell-date-picker-header'},$11={class:'bell-date-picker-col'},$12={class:'bell-date-picker-weeks'},$13={class:'bell-date-picker-text'},$14={class:'bell-date-picker-row'},$15={class:'bell-date-picker-days'},$16={class:'bell-date-picker-body'},$17={class:'bell-date-picker-panel'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','offsetStart(-12)','click','','offsetStart',{execute:function(_X,_Y){return [-12]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','offsetStart(-1)','click','','offsetStart',{execute:function(_X,_Y){return [-1]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3});_T.push({context:_G,nativeAttrs:$7,operator:_B,tag:'span',text:_y(_q(_Q,_Q.length-1,'startDate.year',$3).value),type:3});_T.push({isPure:$3,operator:_z,text:'年',type:1});_T.push({context:_G,nativeAttrs:$8,operator:_B,tag:'span',text:_y(_q(_Q,_Q.length-1,'startDate.month',$3).value),type:3});_T.push({isPure:$3,operator:_z,text:'月',type:1});_r(_Q,'splitPanel',_U.splitPanel).value?_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','offsetStart(1)','click','','offsetStart',{execute:function(_X,_Y){return [1]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','offsetStart(12)','click','','offsetStart',{execute:function(_X,_Y){return [12]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$9,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:$10,operator:_B,tag:'div',type:3});_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_j(_r(_Q,'weeks',_U.weeks),function(_Q,_U,_V,_W){_T.push({context:_G,nativeAttrs:$11,operator:_B,tag:'div',text:_y(_s(_Q,_Q.length-1).value),type:3});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$12,operator:_B,tag:'div',type:3});_T.push({children:function(){var _T=[];_j(_r(_Q,'startDatasource',_U.startDatasource),function(_Q,_U,_V,_W){_T.push({children:function(){var _T=[];_j(_t(_Q,'list',_U.list),function(_Q,_U,_V,_W){_T.push(function(_S){_u(_Q,0,'pinDate').value?_n(_S,'events','mouseenter',_e('mouseenter','hover(this)','mouseenter','','hover',{execute:function(_X,_Y){return [_s(_Q,_Q.length-1).value]}})):$1;_x(_w(_r(_Q,'isEnabled',_U.isEnabled,_H&&_H.isEnabled||_I.isEnabled).value,_G,[_s(_Q,_Q.length-1).value,_u(_Q,0,'disabledDate').value])).value?_n(_S,'events','click',_e('click','click(this)','click','','click',{execute:function(_X,_Y){return [_s(_Q,_Q.length-1).value]}})):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$13,operator:_B,tag:'div',text:_y(_t(_Q,'date',_U.date).value),type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-date-picker-col'+(_x(_w(_r(_Q,'isEnabled',_U.isEnabled,_H&&_H.isEnabled||_I.isEnabled).value,_G,[_s(_Q,_Q.length-1).value,_u(_Q,0,'disabledDate').value])).value?' bell-date-picker-col-enabled'+(_x(_w(_r(_Q,'isCurrentMonth',_U.isCurrentMonth,_H&&_H.isCurrentMonth||_I.isCurrentMonth).value,_G,[_s(_Q,_Q.length-1).value,_u(_Q,0,'startDate').value])).value?' bell-date-picker-col-current-month'+(_t(_Q,'timestamp',_U.timestamp).value===_u(_Q,0,'computedCheckedStartTimestamp').value?' bell-date-picker-col-checked'+(_u(_Q,0,'computedCheckedEndTimestamp').value?' bell-date-picker-col-start':' bell-date-picker-col-range'):'')+(_t(_Q,'timestamp',_U.timestamp).value===_u(_Q,0,'computedCheckedEndTimestamp').value?' bell-date-picker-col-checked bell-date-picker-col-end':'')+(_u(_Q,0,'computedCheckedStartTimestamp').value<_t(_Q,'timestamp',_U.timestamp).value&&_u(_Q,0,'computedCheckedEndTimestamp').value>_t(_Q,'timestamp',_U.timestamp).value?' bell-date-picker-col-range':''):' bell-date-picker-col-adjacent-month'):' bell-date-picker-col-disabled')},operator:_B,tag:'div',type:3}));});return _T.length?_T:$1}(),context:_G,nativeAttrs:$14,operator:_B,tag:'div',type:3});});return _T.length?_T:$1}(),context:_G,events:{mouseleave:_e('mouseleave','leave()','mouseleave','','leave')},nativeAttrs:$15,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$16,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$17,operator:_B,tag:'div',type:3});_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_r(_Q,'splitPanel',_U.splitPanel).value?_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','offsetEnd(-12)','click','','offsetEnd',{execute:function(_X,_Y){return [-12]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','offsetEnd(-1)','click','','offsetEnd',{execute:function(_X,_Y){return [-1]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_T.push({context:_G,nativeAttrs:$7,operator:_B,tag:'span',text:_y(_q(_Q,_Q.length-1,'endDate.year',$3).value),type:3});_T.push({isPure:$3,operator:_z,text:'年',type:1});_T.push({context:_G,nativeAttrs:$8,operator:_B,tag:'span',text:_y(_q(_Q,_Q.length-1,'endDate.month',$3).value),type:3});_T.push({isPure:$3,operator:_z,text:'月',type:1});_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','offsetEnd(1)','click','','offsetEnd',{execute:function(_X,_Y){return [1]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','offsetEnd(12)','click','','offsetEnd',{execute:function(_X,_Y){return [12]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$9,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$10,operator:_B,tag:'div',type:3});_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_j(_r(_Q,'weeks',_U.weeks),function(_Q,_U,_V,_W){_T.push({context:_G,nativeAttrs:$11,operator:_B,tag:'div',text:_y(_s(_Q,_Q.length-1).value),type:3});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$12,operator:_B,tag:'div',type:3});_T.push({children:function(){var _T=[];_j(_r(_Q,'endDatasource',_U.endDatasource),function(_Q,_U,_V,_W){_T.push({children:function(){var _T=[];_j(_t(_Q,'list',_U.list),function(_Q,_U,_V,_W){_T.push(function(_S){_u(_Q,0,'pinDate').value?_n(_S,'events','mouseenter',_e('mouseenter','hover(this)','mouseenter','','hover',{execute:function(_X,_Y){return [_s(_Q,_Q.length-1).value]}})):$1;_x(_w(_r(_Q,'isEnabled',_U.isEnabled,_H&&_H.isEnabled||_I.isEnabled).value,_G,[_s(_Q,_Q.length-1).value,_u(_Q,0,'disabledDate').value])).value?_n(_S,'events','click',_e('click','click(this)','click','','click',{execute:function(_X,_Y){return [_s(_Q,_Q.length-1).value]}})):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$13,operator:_B,tag:'div',text:_y(_t(_Q,'date',_U.date).value),type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-date-picker-col'+(_x(_w(_r(_Q,'isEnabled',_U.isEnabled,_H&&_H.isEnabled||_I.isEnabled).value,_G,[_s(_Q,_Q.length-1).value,_u(_Q,0,'disabledDate').value])).value?' bell-date-picker-col-enabled'+(_x(_w(_r(_Q,'isCurrentMonth',_U.isCurrentMonth,_H&&_H.isCurrentMonth||_I.isCurrentMonth).value,_G,[_s(_Q,_Q.length-1).value,_u(_Q,0,'endDate').value])).value?' bell-date-picker-col-current-month'+(_t(_Q,'timestamp',_U.timestamp).value===_u(_Q,0,'computedCheckedStartTimestamp').value?' bell-date-picker-col-checked'+(_u(_Q,0,'computedCheckedEndTimestamp').value?' bell-date-picker-col-start':' bell-date-picker-col-range'):'')+(_t(_Q,'timestamp',_U.timestamp).value===_u(_Q,0,'computedCheckedEndTimestamp').value?' bell-date-picker-col-checked bell-date-picker-col-end':'')+(_u(_Q,0,'computedCheckedStartTimestamp').value<_t(_Q,'timestamp',_U.timestamp).value&&_u(_Q,0,'computedCheckedEndTimestamp').value>_t(_Q,'timestamp',_U.timestamp).value?' bell-date-picker-col-range':''):' bell-date-picker-col-adjacent-month'):' bell-date-picker-col-disabled')},operator:_B,tag:'div',type:3}));});return _T.length?_T:$1}(),context:_G,nativeAttrs:$14,operator:_B,tag:'div',type:3});});return _T.length?_T:$1}(),context:_G,events:{mouseleave:_e('mouseleave','leave()','mouseleave','','leave')},nativeAttrs:$15,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$16,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$17,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-date-picker-daterange'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  function getEndTimestamp(startTimestamp, endTimestamp) {
      var startDate = new Date(startTimestamp);
      var endDate = new Date(endTimestamp);
      startDate.setDate(1);
      endDate.setDate(1);
      if (endDate.getTime() > startDate.getTime()) {
          return endDate.getTime();
      }
      return offsetMonth(endTimestamp, 1);
  }
  var DateRange = Yox.define({
      template: template$O,
      propTypes: {
          splitPanel: {
              type: RAW_BOOLEAN,
          },
          defaultStartDate: {
              type: [RAW_DATE, RAW_NUMBER],
          },
          checkedStartDate: {
              type: [RAW_DATE, RAW_NUMBER],
          },
          defaultEndDate: {
              type: [RAW_DATE, RAW_NUMBER],
          },
          checkedEndDate: {
              type: [RAW_DATE, RAW_NUMBER],
          },
          disabledDate: {
              type: RAW_FUNCTION,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function (options) {
          var props = options.props || {};
          var startTimestamp = toTimestamp(props.defaultStartDate || props.checkedStartDate);
          var endTimestamp = toTimestamp(props.defaultEndDate || props.checkedEndDate || startTimestamp);
          return {
              weeks: WEEKS,
              startTimestamp: startTimestamp,
              endTimestamp: getEndTimestamp(startTimestamp, endTimestamp),
              // 点击后钉住的日期
              pinDate: UNDEFINED,
              // 当 pinDate 存在时，tempDate 是 hover 时临时选中的开始或结束日期
              tempDate: UNDEFINED,
          };
      },
      computed: {
          startDate: function () {
              return toSimpleDate(this.get('startTimestamp'));
          },
          endDate: function () {
              return toSimpleDate(this.get('endTimestamp'));
          },
          startDatasource: function () {
              return createDateViewDatasource(this.get('startTimestamp'));
          },
          endDatasource: function () {
              return createDateViewDatasource(this.get('endTimestamp'));
          },
          checkedStartTimestamp: function () {
              var checkedStartDate = this.get('checkedStartDate');
              return checkedStartDate
                  ? toTimestamp(checkedStartDate)
                  : 0;
          },
          checkedEndTimestamp: function () {
              var checkedEndDate = this.get('checkedEndDate');
              return checkedEndDate
                  ? toTimestamp(checkedEndDate)
                  : 0;
          },
          computedCheckedStartTimestamp: function () {
              var pinDate = this.get('pinDate');
              if (!pinDate) {
                  return this.get('checkedStartTimestamp');
              }
              var tempDate = this.get('tempDate');
              return tempDate
                  ? Math.min(pinDate.timestamp, tempDate.timestamp)
                  : pinDate.timestamp;
          },
          computedCheckedEndTimestamp: function () {
              var pinDate = this.get('pinDate');
              if (!pinDate) {
                  return this.get('checkedEndTimestamp');
              }
              var tempDate = this.get('tempDate');
              return tempDate
                  ? Math.max(pinDate.timestamp, tempDate.timestamp)
                  : 0;
          },
      },
      watchers: {
          checkedStartDate: function (value) {
              if (value) {
                  this.set('startTimestamp', toTimestamp(value));
              }
          },
          checkedEndDate: function (value) {
              var startTimestamp = this.get('startTimestamp');
              if (startTimestamp && value) {
                  this.set('endTimestamp', getEndTimestamp(startTimestamp, toTimestamp(value)));
              }
          }
      },
      filters: {
          isCurrentMonth: function (item, base) {
              return base.year === item.year && base.month === item.month;
          },
          isEnabled: function (item, disabledDate) {
              return disabledDate
                  ? disabledDate(item)
                  : TRUE;
          },
      },
      methods: {
          offsetStart: function (offset) {
              this.set('startTimestamp', offsetMonth(this.get('startTimestamp'), offset));
              if (!this.get('splitPanel')) {
                  this.set('endTimestamp', offsetMonth(this.get('endTimestamp'), offset));
              }
          },
          offsetEnd: function (offset) {
              this.set('endTimestamp', offsetMonth(this.get('endTimestamp'), offset));
              if (!this.get('splitPanel')) {
                  this.set('startTimestamp', offsetMonth(this.get('startTimestamp'), offset));
              }
          },
          hover: function (item) {
              var pinDate = this.get('pinDate');
              if (pinDate) {
                  this.set('tempDate', pinDate.timestamp !== item.timestamp ? item : UNDEFINED);
              }
          },
          leave: function () {
              this.set('tempDate', UNDEFINED);
          },
          click: function (item) {
              var me = this;
              var pinDate = me.get('pinDate');
              if (!pinDate) {
                  me.set('pinDate', item);
                  return;
              }
              if (pinDate.timestamp === item.timestamp) {
                  return;
              }
              if (item.timestamp > pinDate.timestamp) {
                  me.fire({
                      type: 'change',
                      ns: 'range',
                  }, {
                      start: pinDate,
                      end: item,
                  });
              }
              else {
                  me.fire({
                      type: 'change',
                      ns: 'range',
                  }, {
                      start: item,
                      end: pinDate,
                  });
              }
              // 等外部更新完 start 和 end 再重置，避免闪烁
              me.nextTick(function () {
                  me.set({
                      pinDate: UNDEFINED,
                      tempDate: UNDEFINED,
                  });
              });
          },
      },
      components: {
          Icon: Icon,
      }
  });

  var template$P = (function(){var $1=void 0,$3=!0,$5={class:'bell-date-picker-header-button'},$6={class:'bell-date-picker-prev'},$7={class:'bell-date-picker-header-year'},$8={class:'bell-date-picker-header-month'},$9={class:'bell-date-picker-next'},$10={class:'bell-date-picker-header'},$11={class:'bell-date-picker-col'},$12={class:'bell-date-picker-weeks'},$13={class:'bell-date-picker-text'},$14={class:'bell-date-picker-row'},$15={class:'bell-date-picker-days'},$16={class:'bell-date-picker-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_r(_Q,'type',_U.type).value===_r(_Q,'RAW_TYPE_WEEK',_U.RAW_TYPE_WEEK).value?_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','offset(-12)','click','','offset',{execute:function(_X,_Y){return [-12]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','offset(-1)','click','','offset',{execute:function(_X,_Y){return [-1]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3});_T.push(function(_S){_r(_Q,'canPickYear',_U.canPickYear).value?(_n(_S,'nativeAttrs','class','bell-date-picker-header-link'),_n(_S,'events','click',_e('click',"set('type', RAW_TYPE_YEAR)",'click','','set',{execute:function(_X,_Y){return ['type',_r(_Q,'RAW_TYPE_YEAR',_U.RAW_TYPE_YEAR).value]}}))):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$7,operator:_B,tag:'span',text:_y(_q(_Q,_Q.length-1,'date.year',$3).value),type:3});_T.push({isPure:$3,operator:_z,text:'年',type:1});return _T.length?_T:$1}(),context:_G,operator:_B,tag:'span',type:3}));_T.push(function(_S){_r(_Q,'canPickMonth',_U.canPickMonth).value?(_n(_S,'nativeAttrs','class','bell-date-picker-header-link'),_n(_S,'events','click',_e('click',"set('type', RAW_TYPE_MONTH)",'click','','set',{execute:function(_X,_Y){return ['type',_r(_Q,'RAW_TYPE_MONTH',_U.RAW_TYPE_MONTH).value]}}))):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$8,operator:_B,tag:'span',text:_y(_q(_Q,_Q.length-1,'date.month',$3).value),type:3});_T.push({isPure:$3,operator:_z,text:'月',type:1});return _T.length?_T:$1}(),context:_G,operator:_B,tag:'span',type:3}));_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','offset(12)','click','','offset',{execute:function(_X,_Y){return [12]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','offset(1)','click','','offset',{execute:function(_X,_Y){return [1]}})},nativeAttrs:$5,operator:_B,tag:'span',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$9,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$10,operator:_B,tag:'div',type:3});_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_j(_r(_Q,'weeks',_U.weeks),function(_Q,_U,_V,_W){_T.push({context:_G,nativeAttrs:$11,operator:_B,tag:'div',text:_y(_s(_Q,_Q.length-1).value),type:3});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$12,operator:_B,tag:'div',type:3});_T.push({children:function(){var _T=[];_j(_r(_Q,'datasource',_U.datasource),function(_Q,_U,_V,_W,rowIndex){_T.push({children:function(){var _T=[];_j(_t(_Q,'list',_U.list),function(_Q,_U,_V,_W,colIndex){_T.push(function(_S){_x(_w(_r(_Q,'isEnabled',_U.isEnabled,_H&&_H.isEnabled||_I.isEnabled).value,_G,[_s(_Q,_Q.length-1).value,_u(_Q,0,'disabledDate').value])).value?_n(_S,'events','click',_e('click','click(../rowIndex)','click','','click',{execute:function(_X,_Y){return [rowIndex]}})):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$13,operator:_B,tag:'div',text:_y(_t(_Q,'date',_U.date).value),type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-date-picker-col'+(_x(_w(_r(_Q,'isEnabled',_U.isEnabled,_H&&_H.isEnabled||_I.isEnabled).value,_G,[_s(_Q,_Q.length-1).value,_u(_Q,0,'disabledDate').value])).value?' bell-date-picker-col-enabled'+(_x(_w(_r(_Q,'isCurrentMonth',_U.isCurrentMonth,_H&&_H.isCurrentMonth||_I.isCurrentMonth).value,_G,[_s(_Q,_Q.length-1).value,_u(_Q,0,'date').value])).value?' bell-date-picker-col-current-month':' bell-date-picker-col-adjacent-month'):' bell-date-picker-col-disabled')+(_u(_Q,0,'checkedTimestamp').value>=_q(_Q,_Q.length-2,'start.timestamp').value&&_u(_Q,0,'checkedTimestamp').value<_q(_Q,_Q.length-2,'end.timestamp').value?colIndex===0?' bell-date-picker-col-checked bell-date-picker-col-start':colIndex===_W-1?' bell-date-picker-col-checked bell-date-picker-col-end':' bell-date-picker-col-range':'')},operator:_B,tag:'div',type:3}));});return _T.length?_T:$1}(),context:_G,nativeAttrs:$14,operator:_B,tag:'div',type:3});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$15,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$16,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-date-picker-week bell-date-picker-panel'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3})):_r(_Q,'type',_U.type).value===_r(_Q,'RAW_TYPE_YEAR',_U.RAW_TYPE_YEAR).value?_T.push({context:_G,isComponent:$3,operator:_C,props:{checkedYear:_q(_Q,_Q.length-1,'date.year',$3).value},tag:'DateYear',type:4}):_r(_Q,'type',_U.type).value===_r(_Q,'RAW_TYPE_MONTH',_U.RAW_TYPE_MONTH).value?_T.push({context:_G,isComponent:$3,operator:_C,props:{checkedMonth:_q(_Q,_Q.length-1,'date.month',$3).value,checkedYear:_q(_Q,_Q.length-1,'date.year',$3).value},tag:'DateMonth',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});}})();

  var DateWeek = Yox.define({
      template: template$P,
      propTypes: {
          defaultDate: {
              type: [RAW_DATE, RAW_NUMBER],
          },
          checkedDate: {
              type: [RAW_DATE, RAW_NUMBER],
          },
          disabledDate: {
              type: RAW_FUNCTION,
          },
          canPickYear: {
              type: RAW_BOOLEAN,
          },
          canPickMonth: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function (options) {
          var props = options.props || {};
          return {
              type: RAW_TYPE_WEEK,
              RAW_TYPE_WEEK: RAW_TYPE_WEEK,
              RAW_TYPE_YEAR: RAW_TYPE_YEAR,
              RAW_TYPE_MONTH: RAW_TYPE_MONTH,
              weeks: WEEKS,
              timestamp: toTimestamp(props.defaultDate || props.checkedDate),
          };
      },
      computed: {
          date: function () {
              var checkedDate = this.get('checkedDate');
              return toSimpleDate(checkedDate
                  ? toTimestamp(checkedDate)
                  : this.get('timestamp'));
          },
          datasource: function () {
              var date = this.get('date');
              return createDateViewDatasource(date.timestamp);
          },
          checkedTimestamp: function () {
              var checkedDate = this.get('checkedDate');
              return checkedDate ? toTimestamp(checkedDate) : 0;
          },
      },
      components: {
          Icon: Icon,
          DateYear: DateYear,
          DateMonth: DateMonth,
      },
      filters: {
          isCurrentMonth: function (item, date) {
              return date.year === item.year && date.month === item.month;
          },
          isEnabled: function (item, disabledDate) {
              return disabledDate
                  ? disabledDate(item)
                  : TRUE;
          },
      },
      events: [
          {
              type: 'change',
              ns: 'year',
              listener: function (event, data) {
                  event.stop();
                  // @ts-ignore
                  var date = new Date(this.get('timestamp'));
                  date.setFullYear(data.year);
                  // @ts-ignore
                  this.set({
                      type: RAW_TYPE_WEEK,
                      timestamp: date.getTime()
                  });
              }
          },
          {
              type: 'change',
              ns: 'month',
              listener: function (event, data) {
                  event.stop();
                  // @ts-ignore
                  var date = new Date(this.get('timestamp'));
                  date.setMonth(data.month - 1);
                  // @ts-ignore
                  this.set({
                      type: RAW_TYPE_WEEK,
                      timestamp: date.getTime()
                  });
              }
          } ],
      methods: {
          offset: function (offset) {
              this.set('timestamp', offsetMonth(this.get('timestamp'), offset));
          },
          click: function (colIndex) {
              var _a = this.get("datasource." + colIndex), start = _a.start, end = _a.end;
              this.fire({
                  type: 'change',
                  ns: 'week',
              }, {
                  start: start,
                  end: end,
              });
          },
      }
  });

  var template$Q = (function(){var $1=void 0,$3=!0,$5={class:'bell-date-picker-values'},$6={class:'bell-date-picker-separator'},$7={class:'bell-date-picker-value'},$8={class:'bell-date-picker-placeholder'},$9={class:'bell-date-picker-shortcut-item'},$10={class:'bell-date-picker-shortcut'},$11={class:'bell-date-picker-overlay'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push({context:_G,isComponent:$3,operator:_C,props:{gap:'5',placement:_r(_Q,'placement',_U.placement).value,trigger:_r(_Q,'RAW_CUSTOM',_U.RAW_CUSTOM).value,visible:_r(_Q,'visible',_U.visible).value},ref:'overlay',slots:{$slot_children:function(_R){var _T=[];_T.push(function(_S){!_r(_Q,'disabled',_U.disabled).value?_n(_S,'events','click',_e('click',"toggle('visible')",'click','','toggle',{execute:function(_X,_Y){return ['visible']}})):$1;_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;return _S}({children:function(){var _T=[];_q(_Q,_Q.length-1,'formatedValues.length',$3).value>0?_r(_Q,'multiple',_U.multiple).value&&_r(_Q,'type',_U.type).value!==_r(_Q,'RAW_TYPE_DATE_RANGE',_U.RAW_TYPE_DATE_RANGE).value&&_r(_Q,'type',_U.type).value!==_r(_Q,'RAW_TYPE_WEEK',_U.RAW_TYPE_WEEK).value?_T.push({children:function(){var _T=[];_j(_r(_Q,'formatedValues',_U.formatedValues),function(_Q,_U,_V,_W,index){_T.push({context:_G,events:{close:_e('close','handleRemoveItem($event, index)','close','','handleRemoveItem',{execute:function(_X,_Y){return [_X,index]}},$3)},isComponent:$3,operator:_C,parent:_R,props:{closable:$3,simple:$3},slots:{$slot_children:function(_R){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_s(_Q,_Q.length-1).value),type:1});return _T.length?_T:$1}},tag:'Tag',type:4});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({children:function(){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_q(_Q,_Q.length-1,'formatedValues.0',$3).value),type:1});_q(_Q,_Q.length-1,'formatedValues.1',$3).value?(_T.push({context:_G,isPure:$3,isStatic:$3,nativeAttrs:$6,operator:_B,tag:'span',text:'~',type:3}),_T.push({isPure:$3,operator:_z,text:_y(_q(_Q,_Q.length-1,'formatedValues.1',$3).value),type:1})):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:$7,operator:_B,tag:'div',type:3}):_T.push({context:_G,nativeAttrs:$8,operator:_B,tag:'div',text:_y(_r(_Q,'placeholder',_U.placeholder).value),type:3});_r(_Q,'clearable',_U.clearable).value&&_q(_Q,_Q.length-1,'formatedValues.length',$3).value?_T.push({context:_G,events:{'click.native':_e('click.native','handleClearClick()','click','native','handleClearClick',$1,$1,$3)},isComponent:$3,operator:_C,parent:_R,props:{className:'bell-date-picker-clear-icon',name:'close-circle-fill'},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{className:'bell-date-picker-calendar-icon',name:'calendar-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-date-picker'+(_r(_Q,'status',_U.status).value?' bell-date-picker-'+_y(_r(_Q,'status',_U.status).value):'')+(_r(_Q,'size',_U.size).value?' bell-date-picker-'+_y(_r(_Q,'size',_U.size).value):'')+(_r(_Q,'block',_U.block).value?' bell-date-picker-block':'')+(_r(_Q,'visible',_U.visible).value?' bell-date-picker-opened':'')+(_r(_Q,'clearable',_U.clearable).value?' bell-date-picker-clearable':'')+(_r(_Q,'disabled',_U.disabled).value?' bell-date-picker-disabled':' bell-date-picker-enabled')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));return _T.length?_T:$1},$slot_overlay:function(_R){var _T=[];_T.push({children:function(){var _T=[];_r(_Q,'shortcuts',_U.shortcuts).value&&_q(_Q,_Q.length-1,'shortcuts.length',$3).value>0?_T.push({children:function(){var _T=[];_j(_r(_Q,'shortcuts',_U.shortcuts),function(_Q,_U,_V,_W){_T.push({context:_G,events:{click:_e('click','handleShortcutClick(this)','click','','handleShortcutClick',{execute:function(_X,_Y){return [_s(_Q,_Q.length-1).value]}})},nativeAttrs:$9,operator:_B,tag:'div',text:_y(_t(_Q,'text',_U.text).value),type:3});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$10,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'type',_U.type).value===_r(_Q,'RAW_TYPE_DATE',_U.RAW_TYPE_DATE).value?_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{canPickMonth:$3,canPickYear:$3,checkedDate:_r(_Q,'value',_U.value).value,defaultDate:_q(_Q,_Q.length-1,'defaultSimpleDate.timestamp',$3).value,disabledDate:_r(_Q,'disabledDate',_U.disabledDate).value},tag:'DateView',type:4}):_r(_Q,'type',_U.type).value===_r(_Q,'RAW_TYPE_DATE_RANGE',_U.RAW_TYPE_DATE_RANGE).value?_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{checkedEndDate:_q(_Q,_Q.length-1,'value.1',$3).value,checkedStartDate:_q(_Q,_Q.length-1,'value.0',$3).value,defaultEndDate:_q(_Q,_Q.length-1,'defaultSimpleDate.timestamp',$3).value,defaultStartDate:_q(_Q,_Q.length-1,'defaultSimpleDate.timestamp',$3).value,disabledDate:_r(_Q,'disabledDate',_U.disabledDate).value,splitPanel:_r(_Q,'splitPanel',_U.splitPanel).value},tag:'DateRange',type:4}):_r(_Q,'type',_U.type).value===_r(_Q,'RAW_TYPE_WEEK',_U.RAW_TYPE_WEEK).value?_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{canPickMonth:$3,canPickYear:$3,checkedDate:_q(_Q,_Q.length-1,'value.0',$3).value,defaultDate:_q(_Q,_Q.length-1,'defaultSimpleDate.timestamp',$3).value},tag:'DateWeek',type:4}):_r(_Q,'type',_U.type).value===_r(_Q,'RAW_TYPE_YEAR',_U.RAW_TYPE_YEAR).value?_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{checkedDate:_r(_Q,'value',_U.value).value,defaultDate:_q(_Q,_Q.length-1,'defaultSimpleDate.timestamp',$3).value},tag:'DateYear',type:4}):_r(_Q,'type',_U.type).value===_r(_Q,'RAW_TYPE_MONTH',_U.RAW_TYPE_MONTH).value?_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{canPickYear:$3,checkedDate:_r(_Q,'value',_U.value).value,defaultDate:_q(_Q,_Q.length-1,'defaultSimpleDate.timestamp',$3).value},tag:'DateMonth',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:$11,operator:_B,tag:'div',type:3});return _T.length?_T:$1}},tag:'Popover',type:4});}})();

  var YEAR_FORMAT = 'yyyy';
  var MONTH_FORMAT = 'yyyy-MM';
  var DATE_FORMAT = 'yyyy-MM-dd';
  var defaultFormat = {};
  defaultFormat[RAW_TYPE_DATE] = DATE_FORMAT;
  defaultFormat[RAW_TYPE_DATE_RANGE] = DATE_FORMAT;
  defaultFormat[RAW_TYPE_WEEK] = DATE_FORMAT;
  defaultFormat[RAW_TYPE_MONTH] = MONTH_FORMAT;
  defaultFormat[RAW_TYPE_YEAR] = YEAR_FORMAT;
  var DatePicker = Yox.define({
      template: template$Q,
      name: 'bell-DatePicker',
      propTypes: {
          type: {
              type: oneOf([RAW_TYPE_DATE, RAW_TYPE_DATE_RANGE, RAW_TYPE_WEEK, RAW_TYPE_YEAR, RAW_TYPE_MONTH]),
              value: RAW_TYPE_DATE,
          },
          status: {
              type: oneOf([RAW_TYPE_INFO, RAW_TYPE_SUCCESS, RAW_TYPE_ERROR, RAW_TYPE_WARNING]),
          },
          size: {
              type: oneOf(RAW_SIZE_ARRAY),
              value: RAW_DEFAULT,
          },
          splitPanel: {
              type: RAW_BOOLEAN,
          },
          defaultDate: {
              type: RAW_DATE,
          },
          value: {
              type: function (key, value) {
              }
          },
          shortcuts: {
              type: RAW_ARRAY,
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          multiple: {
              type: RAW_BOOLEAN,
          },
          block: {
              type: RAW_BOOLEAN,
          },
          placement: {
              type: oneOf(RAW_PLACEMENT_ARRAY),
              value: RAW_BOTTOM_START,
          },
          placeholder: {
              type: RAW_STRING,
              value: '请选择日期...'
          },
          format: {
              type: RAW_STRING,
          },
          disabledDate: {
              type: RAW_FUNCTION,
          },
          clearable: {
              type: RAW_BOOLEAN,
          },
          width: {
              type: RAW_NUMERIC,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function (options) {
          var props = options.props || {};
          return {
              RAW_TYPE_DATE: RAW_TYPE_DATE,
              RAW_TYPE_DATE_RANGE: RAW_TYPE_DATE_RANGE,
              RAW_TYPE_WEEK: RAW_TYPE_WEEK,
              RAW_TYPE_YEAR: RAW_TYPE_YEAR,
              RAW_TYPE_MONTH: RAW_TYPE_MONTH,
              RAW_CUSTOM: RAW_CUSTOM,
              visible: FALSE,
              formatText: props.format || defaultFormat[props.type || RAW_TYPE_DATE]
          };
      },
      components: {
          Tag: Tag,
          Popover: Popover,
          DateView: DateView,
          DateRange: DateRange,
          DateWeek: DateWeek,
          DateMonth: DateMonth,
          DateYear: DateYear,
      },
      computed: {
          inlineStyle: function () {
              var result = [];
              var width = this.get('width');
              if (width) {
                  result.push({
                      width: toPixel(width)
                  });
              }
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          },
          defaultSimpleDate: function () {
              var defaultDate = this.get('defaultDate');
              return toSimpleDate(toTimestamp(defaultDate));
          },
          formatedValues: function () {
              var value = this.get('value');
              var formatText = this.get('formatText');
              if (Yox.is.array(value)) {
                  return value.map(function (date) {
                      return formatDate(date, formatText);
                  });
              }
              else if (value) {
                  return [formatDate(value, formatText)];
              }
              return [];
          },
      },
      events: [
          {
              type: 'change',
              ns: 'date',
              listener: function (event, data) {
                  event.stop();
                  // @ts-ignore
                  this.dateChange(data.timestamp);
              }
          },
          {
              type: 'change',
              ns: 'year',
              listener: function (event, data) {
                  event.stop();
                  var date = new Date();
                  date.setFullYear(data.year);
                  // @ts-ignore
                  this.dateChange(toTimestamp(date), YEAR_FORMAT);
              }
          },
          {
              type: 'change',
              ns: 'month',
              listener: function (event, data) {
                  event.stop();
                  var date = new Date();
                  date.setFullYear(data.year);
                  date.setMonth(data.month - 1);
                  // @ts-ignore
                  this.dateChange(toTimestamp(date), MONTH_FORMAT);
              }
          },
          {
              type: 'change',
              ns: 'week',
              listener: function (event, data) {
                  event.stop();
                  // @ts-ignore
                  this.dateRangeChange(data.start.timestamp, data.end.timestamp);
              }
          },
          {
              type: 'change',
              ns: 'range',
              listener: function (event, data) {
                  event.stop();
                  // @ts-ignore
                  this.dateRangeChange(data.start.timestamp, data.end.timestamp);
              }
          },
          {
              listener: function (event) {
                  event.stop();
                  // @ts-ignore
                  this.set('visible', FALSE);
              },
              type: 'outside',
              ns: 'popover',
          }
      ],
      methods: {
          handleClearClick: function (event) {
              // 停止冒泡，否则会展开下拉框
              event.stop();
              fireClickEvent(event);
              var value = this.get('multiple') ? [] : UNDEFINED;
              this.set('value', value);
              this.fire({
                  type: 'clear',
                  ns: 'datePicker',
              }, TRUE);
              this.fireChange(value);
          },
          handleRemoveItem: function (event, index) {
              event.stop();
              this.removeAt('value', index);
              this.fireChange(this.get('value'));
          },
          handleShortcutClick: function (data) {
              var value = data.onClick.call(this);
              if (Yox.is.array(value)) {
                  if (!value[0] || !value[1]) {
                      Yox.logger.warn("shortcuts value \u4F20\u503C\u9519\u8BEF");
                      return;
                  }
                  this.dateRangeChange(toTimestamp(value[0]), toTimestamp(value[1]));
              }
              else {
                  if (!value) {
                      Yox.logger.warn("shortcuts value \u4F20\u503C\u9519\u8BEF");
                      return;
                  }
                  var type = this.get('type');
                  if (type === RAW_TYPE_DATE_RANGE || type === RAW_TYPE_WEEK) {
                      Yox.logger.warn("shortcuts value \u9700\u8FD4\u56DE\u6570\u7EC4\u7C7B\u578B");
                      return;
                  }
                  this.dateChange(toTimestamp(value));
              }
          },
          dateChange: function (timestamp, dateFormat) {
              if (dateFormat === void 0) { dateFormat = DATE_FORMAT; }
              var me = this;
              var value = me.get('value');
              var date = new Date(timestamp);
              if (me.get('multiple')) {
                  if (Yox.is.array(value)) {
                      // 判断年月日是否存在
                      var format_1 = formatDate(date, dateFormat);
                      var existed_1 = FALSE;
                      Yox.array.each(value, function (item) {
                          if (format_1 === formatDate(item, dateFormat)) {
                              existed_1 = TRUE;
                              return FALSE;
                          }
                      });
                      if (!existed_1) {
                          me.append('value', date);
                          me.fireChange(me.get('value'));
                      }
                  }
                  else {
                      me.append('value', date);
                      me.fireChange(me.get('value'));
                  }
              }
              else {
                  me.set('value', date);
                  me.fireChange(date);
              }
              if (!me.get('multiple')) {
                  me.nextTick(function () {
                      me.set('visible', FALSE);
                  });
              }
          },
          dateRangeChange: function (start, end) {
              var value = [new Date(start), new Date(end)];
              this.set('value', value);
              this.fireChange(value);
              if (!this.get('multiple')) {
                  this.nextTick(function () {
                      this.set('visible', FALSE);
                  });
              }
          },
          fireChange: function (value) {
              this.fire({
                  type: 'change',
                  ns: 'datePicker',
              }, {
                  value: value,
              });
          }
      },
      afterUpdate: function () {
          if (this.get('visible') && this.get('multiple')) {
              var overlay = this.$refs.overlay;
              overlay.refreshOverlayRect();
          }
      }
  });

  var template$R = (function(){var $1=void 0,$3=!0,$5={class:'bell-time-picker-panel-column'},$6={class:'bell-time-picker-panel-columns'},$7={class:'bell-time-picker-panel-footer'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_n(_S,'props','style',_r(_Q,'style',_U.style).value):$1;return _S}({context:_G,isComponent:$3,operator:_C,props:{className:'bell-time-picker-panel'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},slots:{$slot_children:function(_R){var _T=[];_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_j(_r(_Q,'hourList',_U.hourList),function(_Q,_U,_V,_W,index){_T.push({context:_G,events:{click:_e('click','handleHourClick(index)','click','','handleHourClick',{execute:function(_X,_Y){return [index]}})},key:_s(_Q,_Q.length-1).value,nativeAttrs:{class:'bell-time-picker-panel-row'+(index===_u(_Q,0,'hourIndex').value?' bell-time-picker-panel-row-active':'')},operator:_B,tag:'li',text:_y(_x(_w(_r(_Q,'padStart',_U.padStart,_H&&_H.padStart||_I.padStart).value,_G,[_s(_Q,_Q.length-1).value])).value),type:3});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,ref:'hourList',tag:'ul',type:3});_T.push({children:function(){var _T=[];_j(_r(_Q,'minuteList',_U.minuteList),function(_Q,_U,_V,_W,index){_T.push({context:_G,events:{click:_e('click','handleMinuteClick(index)','click','','handleMinuteClick',{execute:function(_X,_Y){return [index]}})},key:_s(_Q,_Q.length-1).value,nativeAttrs:{class:'bell-time-picker-panel-row'+(index===_u(_Q,0,'minuteIndex').value?' bell-time-picker-panel-row-active':'')},operator:_B,tag:'li',text:_y(_x(_w(_r(_Q,'padStart',_U.padStart,_H&&_H.padStart||_I.padStart).value,_G,[_s(_Q,_Q.length-1).value])).value),type:3});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,ref:'minuteList',tag:'ul',type:3});_q(_Q,_Q.length-1,'secondList.length',$3).value>0?_T.push({children:function(){var _T=[];_j(_r(_Q,'secondList',_U.secondList),function(_Q,_U,_V,_W,index){_T.push({context:_G,events:{click:_e('click','handleSecondClick(index)','click','','handleSecondClick',{execute:function(_X,_Y){return [index]}})},key:_s(_Q,_Q.length-1).value,nativeAttrs:{class:'bell-time-picker-panel-row'+(index===_u(_Q,0,'secondIndex').value?' bell-time-picker-panel-row-active':'')},operator:_B,tag:'li',text:_y(_x(_w(_r(_Q,'padStart',_U.padStart,_H&&_H.padStart||_I.padStart).value,_G,[_s(_Q,_Q.length-1).value])).value),type:3});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,ref:'secondList',tag:'ul',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3});_T.push({children:function(){var _T=[];_T.push({context:_G,events:{click:_e('click','handleNowClick()','click','','handleNowClick',$1,$3)},isComponent:$3,operator:_C,parent:_R,props:{size:'small'},slots:{$slot_children:function(_R){var _T=[];_T.push({isPure:$3,operator:_z,text:'此刻',type:1});return _T.length?_T:$1}},tag:'Button',type:4});_T.push({context:_G,events:{click:_e('click','handleSubmitClick()','click','','handleSubmitClick',$1,$3)},isComponent:$3,operator:_C,parent:_R,props:{disabled:!_r(_Q,'hasValue',_U.hasValue).value,size:'small',type:'primary'},slots:{$slot_children:function(_R){var _T=[];_T.push({isPure:$3,operator:_z,text:'确定',type:1});return _T.length?_T:$1}},tag:'Button',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:$7,operator:_B,tag:'div',type:3});return _T.length?_T:$1}},tag:'ResizeObserver',type:4}));}})();

  function toTimeProps(value, hourList, minuteList, secondList) {
      var result = {
          hour: -1,
          minute: -1,
          second: -1,
          hourIndex: -1,
          minuteIndex: -1,
          secondIndex: -1,
          text: '',
      };
      var date;
      if (value instanceof Date) {
          date = value;
      }
      else if (typeof value === 'number' && value > 0) {
          date = new Date(value);
      }
      if (date) {
          var hour = date.getHours();
          var minute = date.getMinutes();
          var second = date.getSeconds();
          var hourIndex = hourList.indexOf(hour);
          var minuteIndex = minuteList.indexOf(minute);
          var secondIndex = secondList.indexOf(second);
          if (hourIndex >= 0) {
              result.hour = hour;
              result.hourIndex = hourIndex;
          }
          if (minuteIndex >= 0) {
              result.minute = minute;
              result.minuteIndex = minuteIndex;
          }
          if (secondIndex >= 0) {
              result.second = second;
              result.secondIndex = secondIndex;
          }
          result.text = formatTime(result.hour, result.minute, secondList.length > 0 ? result.second : -1);
      }
      return result;
  }
  function formatTime(hour, minute, second) {
      var list = [];
      if (hour >= 0) {
          list.push(padStart(hour));
      }
      if (minute >= 0) {
          list.push(padStart(minute));
      }
      if (second >= 0) {
          list.push(padStart(second));
      }
      return list.join(':');
  }
  function createRangeList(start, end, step) {
      var list = [];
      for (var i = start; i <= end; i += step) {
          list.push(i);
      }
      return list;
  }
  function getValidTimeItemIndex(listLength, index) {
      return index >= 0 && index < listLength
          ? index
          : -1;
  }
  function scrollTimeItemInToView(listElement, index, animated) {
      var itemElement = listElement.children[index];
      if (!itemElement) {
          return;
      }
      scrollTo(listElement, listElement.scrollTop, itemElement.offsetHeight * index, animated ? 600 : 0);
  }

  var TimePanel = Yox.define({
      template: template$R,
      propTypes: {
          hourList: {
              type: RAW_ARRAY,
              required: TRUE,
          },
          hourIndex: {
              type: RAW_NUMBER,
          },
          minuteList: {
              type: RAW_ARRAY,
              required: TRUE,
          },
          minuteIndex: {
              type: RAW_NUMBER,
          },
          secondList: {
              type: RAW_ARRAY,
          },
          secondIndex: {
              type: RAW_NUMBER,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      computed: {
          showSecond: function () {
              return this.get('secondList.length') > 0;
          },
          validHourIndex: function () {
              return getValidTimeItemIndex(this.get('hourList.length'), this.get('hourIndex'));
          },
          validMinuteIndex: function () {
              return getValidTimeItemIndex(this.get('minuteList.length'), this.get('minuteIndex'));
          },
          validSecondIndex: function () {
              return getValidTimeItemIndex(this.get('secondList.length'), this.get('secondIndex'));
          },
          hasValue: function () {
              return this.get('validHourIndex') >= 0
                  && this.get('validMinuteIndex') >= 0
                  && (!this.get('showSecond') || this.get('validSecondIndex') >= 0);
          },
      },
      watchers: {
          hourIndex: function () {
              this.scrollHourIntoView(TRUE);
          },
          minuteIndex: function () {
              this.scrollMinuteIntoView(TRUE);
          },
          secondIndex: function () {
              this.scrollSecondIntoView(TRUE);
          },
      },
      events: {
          resize: {
              listener: function (event, data) {
                  if (event.phase !== Yox.Event.PHASE_UPWARD) {
                      return;
                  }
                  event.stop();
                  if (data.height > 0) {
                      this.scrollHourIntoView();
                      this.scrollMinuteIntoView();
                      this.scrollSecondIntoView();
                  }
              },
              ns: 'resizeObserver'
          }
      },
      filters: {
          padStart: padStart,
      },
      methods: {
          scrollHourIntoView: function (animated) {
              var hourIndex = this.get('hourIndex');
              if (hourIndex >= 0) {
                  scrollTimeItemInToView(this.$refs.hourList, hourIndex, animated);
              }
          },
          scrollMinuteIntoView: function (animated) {
              var minuteIndex = this.get('minuteIndex');
              if (minuteIndex >= 0) {
                  scrollTimeItemInToView(this.$refs.minuteList, minuteIndex, animated);
              }
          },
          scrollSecondIntoView: function (animated) {
              var secondIndex = this.get('secondIndex');
              if (secondIndex >= 0) {
                  scrollTimeItemInToView(this.$refs.secondList, secondIndex, animated);
              }
          },
          handleHourClick: function (hourIndex) {
              var minuteIndex = this.get('validMinuteIndex');
              if (minuteIndex < 0) {
                  minuteIndex = 0;
              }
              var secondIndex = this.get('validSecondIndex');
              if (this.get('showSecond') && secondIndex < 0) {
                  secondIndex = 0;
              }
              this.fireChange(hourIndex, minuteIndex, secondIndex);
          },
          handleMinuteClick: function (minuteIndex) {
              var hourIndex = this.get('validHourIndex');
              if (hourIndex < 0) {
                  hourIndex = 0;
              }
              var secondIndex = this.get('validSecondIndex');
              if (this.get('showSecond') && secondIndex < 0) {
                  secondIndex = 0;
              }
              this.fireChange(hourIndex, minuteIndex, secondIndex);
          },
          handleSecondClick: function (secondIndex) {
              var hourIndex = this.get('validHourIndex');
              if (hourIndex < 0) {
                  hourIndex = 0;
              }
              var minuteIndex = this.get('validMinuteIndex');
              if (minuteIndex < 0) {
                  minuteIndex = 0;
              }
              this.fireChange(hourIndex, minuteIndex, secondIndex);
          },
          handleNowClick: function () {
              var date = new Date(getNowTime());
              var hour = date.getHours();
              var hourIndex = -1;
              var hourList = this.get('hourList');
              if (hourList) {
                  hourIndex = hourList.indexOf(hour);
              }
              var minute = date.getMinutes();
              var minuteIndex = -1;
              var minuteList = this.get('minuteList');
              if (minuteList) {
                  minuteIndex = minuteList.indexOf(minute);
              }
              var second = date.getMinutes();
              var secondIndex = -1;
              var secondList = this.get('secondList');
              if (this.get('showSecond') && secondList) {
                  secondIndex = secondList.indexOf(second);
              }
              this.fireChange(hourIndex, minuteIndex, secondIndex);
              this.fire({
                  type: 'submit',
                  ns: 'timePanel',
              }, {
                  hour: hour,
                  minute: minute,
                  second: second,
              });
          },
          handleSubmitClick: function () {
              var hour = -1;
              var minute = -1;
              var second = -1;
              var hourIndex = this.get('validHourIndex');
              if (hourIndex >= 0) {
                  hour = this.get('hourList')[hourIndex];
              }
              var minuteIndex = this.get('validMinuteIndex');
              if (minuteIndex >= 0) {
                  minute = this.get('minuteList')[minuteIndex];
              }
              var secondIndex = this.get('validSecondIndex');
              if (this.get('showSecond') && secondIndex >= 0) {
                  second = this.get('secondList')[secondIndex];
              }
              this.fire({
                  type: 'submit',
                  ns: 'timePanel',
              }, {
                  hour: hour,
                  minute: minute,
                  second: second,
              });
          },
          fireChange: function (hourIndex, minuteIndex, secondIndex) {
              this.fire({
                  type: 'change',
                  ns: 'timePanel',
              }, {
                  hourIndex: hourIndex,
                  minuteIndex: minuteIndex,
                  secondIndex: secondIndex,
              });
          },
      },
      components: {
          Button: Button,
          ResizeObserver: ResizeObserver$1,
      },
  });

  var template$S = (function(){var $1=void 0,$3=!0,$5={class:'bell-time-picker-value'},$6={class:'bell-time-picker-placeholder'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push({context:_G,isComponent:$3,operator:_C,props:{gap:'5',placement:_r(_Q,'placement',_U.placement).value,trigger:_r(_Q,'RAW_CUSTOM',_U.RAW_CUSTOM).value,visible:_r(_Q,'visible',_U.visible).value},slots:{$slot_children:function(_R){var _T=[];_T.push(function(_S){!_r(_Q,'disabled',_U.disabled).value?_n(_S,'events','click',_e('click',"toggle('visible')",'click','','toggle',{execute:function(_X,_Y){return ['visible']}})):$1;_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'text',_U.text).value?_T.push({context:_G,nativeAttrs:$5,operator:_B,tag:'div',text:_y(_r(_Q,'text',_U.text).value),type:3}):_T.push({context:_G,nativeAttrs:$6,operator:_B,tag:'div',text:_y(_r(_Q,'placeholder',_U.placeholder).value),type:3});_r(_Q,'clearable',_U.clearable).value&&_r(_Q,'hasValue',_U.hasValue).value?_T.push({context:_G,events:{'click.native':_e('click.native','handleClearClick()','click','native','handleClearClick',$1,$1,$3)},isComponent:$3,operator:_C,parent:_R,props:{className:'bell-time-picker-clear-icon',name:'close-circle-fill'},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{className:'bell-time-picker-time-icon',name:'time-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-time-picker'+(_r(_Q,'status',_U.status).value?' bell-time-picker-'+_y(_r(_Q,'status',_U.status).value):'')+(_r(_Q,'size',_U.size).value?' bell-time-picker-'+_y(_r(_Q,'size',_U.size).value):'')+(_r(_Q,'block',_U.block).value?' bell-time-picker-block':'')+(_r(_Q,'visible',_U.visible).value?' bell-time-picker-opened':'')+(_r(_Q,'clearable',_U.clearable).value?' bell-time-picker-clearable':'')+(_r(_Q,'disabled',_U.disabled).value?' bell-time-picker-disabled':' bell-time-picker-enabled')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));return _T.length?_T:$1},$slot_overlay:function(_R){var _T=[];_T.push(function(_S){_r(_Q,'overlayStyle',_U.overlayStyle).value?_S.nativeStyles=_b(_r(_Q,'overlayStyle',_U.overlayStyle).value):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{hourIndex:_r(_Q,'visible',_U.visible).value?_r(_Q,'hourIndex',_U.hourIndex).value:-1,hourList:_r(_Q,'hourList',_U.hourList).value,minuteIndex:_r(_Q,'visible',_U.visible).value?_r(_Q,'minuteIndex',_U.minuteIndex).value:-1,minuteList:_r(_Q,'minuteList',_U.minuteList).value,secondIndex:_r(_Q,'visible',_U.visible).value?_r(_Q,'secondIndex',_U.secondIndex).value:-1,secondList:_r(_Q,'secondList',_U.secondList).value},tag:'TimePanel',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-time-picker-overlay'},operator:_B,tag:'div',type:3}));return _T.length?_T:$1}},tag:'Popover',type:4});}})();

  var DEFAULT_HOUR_STEP = 1;
  var DEFAULT_MINUTE_STEP = 1;
  var DEFAULT_SECOND_STEP = 1;
  var TimePicker = Yox.define({
      template: template$S,
      name: 'bell-TimePicker',
      propTypes: {
          status: {
              type: oneOf([RAW_TYPE_INFO, RAW_TYPE_SUCCESS, RAW_TYPE_ERROR, RAW_TYPE_WARNING]),
          },
          size: {
              type: oneOf(RAW_SIZE_ARRAY),
              value: RAW_DEFAULT,
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          block: {
              type: RAW_BOOLEAN,
          },
          placement: {
              type: oneOf(RAW_PLACEMENT_ARRAY),
              value: RAW_BOTTOM_START,
          },
          defaultValue: {
              type: function (key, value) {
              }
          },
          placeholder: {
              type: RAW_STRING,
              value: '请选择时间...'
          },
          clearable: {
              type: RAW_BOOLEAN,
          },
          format: {
              type: RAW_STRING,
          },
          hourStep: {
              type: RAW_NUMERIC,
          },
          minuteStep: {
              type: RAW_NUMERIC,
          },
          secondStep: {
              type: RAW_NUMERIC,
          },
          width: {
              type: RAW_NUMERIC,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function (options) {
          var props = toTimeProps(options.props && options.props.defaultValue, this.get('hourList'), this.get('minuteList'), this.get('secondList'));
          props.visible = FALSE;
          props.RAW_CUSTOM = RAW_CUSTOM;
          return props;
      },
      components: {
          Popover: Popover,
          TimePanel: TimePanel,
      },
      computed: {
          componentWidth: function () {
              if (this.get('block')) {
                  return;
              }
              var width = this.get('width');
              if (width > 0) {
                  return width;
              }
              return this.get('needSecond') ? 168 : 120;
          },
          inlineStyle: function () {
              var result = [];
              var width = this.get('componentWidth');
              if (width) {
                  result.push({
                      width: toPixel(width)
                  });
              }
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          },
          overlayStyle: function () {
              var width = this.get('componentWidth');
              if (width) {
                  return {
                      width: toPixel(width)
                  };
              }
          },
          needSecond: function () {
              return this.get('format') !== 'HH:mm';
          },
          hourList: function () {
              var hourStep = toNumber(this.get('hourStep'), DEFAULT_HOUR_STEP);
              return createRangeList(0, 23, hourStep);
          },
          minuteList: function () {
              var minuteStep = toNumber(this.get('minuteStep'), DEFAULT_MINUTE_STEP);
              return createRangeList(0, 59, minuteStep);
          },
          secondList: function () {
              if (this.get('needSecond')) {
                  var secondStep = toNumber(this.get('secondStep'), DEFAULT_SECOND_STEP);
                  return createRangeList(0, 59, secondStep);
              }
              return [];
          },
          hasValue: function () {
              return this.get('hour') >= 0
                  && this.get('minute') >= 0
                  && (!this.get('needSecond') || this.get('second') >= 0);
          }
      },
      events: {
          change: {
              listener: function (event, data) {
                  event.stop();
                  var hourIndex = data.hourIndex, minuteIndex = data.minuteIndex, secondIndex = data.secondIndex;
                  this.set({
                      hourIndex: hourIndex,
                      minuteIndex: minuteIndex,
                      secondIndex: secondIndex,
                      text: formatTime(this.get('hourList')[hourIndex], this.get('minuteList')[minuteIndex], this.get('secondList')[secondIndex])
                  });
              },
              ns: 'timePanel',
          },
          submit: {
              listener: function (event, data) {
                  event.stop();
                  var hour = data.hour, minute = data.minute, second = data.second;
                  this.set({
                      hour: hour,
                      minute: minute,
                      second: second,
                      visible: FALSE,
                      text: formatTime(hour, minute, second),
                  });
                  this.fireChange(hour, minute, second);
              },
              ns: 'timePanel',
          },
          outside: {
              listener: function (event) {
                  event.stop();
                  this.set({
                      visible: FALSE,
                      text: formatTime(this.get('hour'), this.get('minute'), this.get('second'))
                  });
              },
              ns: 'popover',
          }
      },
      methods: {
          handleClearClick: function (event) {
              // 停止冒泡，否则会展开下拉框
              event.stop();
              fireClickEvent(event);
              var props = toTimeProps(UNDEFINED, this.get('hourList'), this.get('minuteList'), this.get('secondList'));
              this.set(props);
              this.fireChange(props.hour, props.minute, props.second);
          },
          fireChange: function (hour, minute, second) {
              var data = {
                  hour: hour,
                  minute: minute,
              };
              if (this.get('needSecond')) {
                  data.second = second;
              }
              this.fire({
                  type: 'change',
                  ns: 'timePicker',
              }, data);
          }
      },
  });

  var template$T = (function(){var $1=void 0,$3=!0,$5={class:'bell-image-picker-image-name'},$6={class:'bell-image-picker-mask'},$7={class:'bell-image-picker-message'},$8={class:'bell-image-picker-action'},$9={class:'bell-image-picker-image-size'},$10={class:'bell-image-picker-items-wrapper'},$11={class:'bell-image-picker-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push({children:function(){var _T=[];_j(_r(_Q,'imageList',_U.imageList),function(_Q,_U,_V,_W,index){_T.push(function(_S){_u(_Q,0,'canDraggable').value?(_n(_S,'events','dragstart',_e('dragstart','handleDragStart(index)','dragstart','','handleDragStart',{execute:function(_X,_Y){return [index]}})),_n(_S,'events','dragend',_e('dragend','handleDragEnd()','dragend','','handleDragEnd')),_n(_S,'events','dragover',_e('dragover','handleDragOver(index)','dragover','','handleDragOver',{execute:function(_X,_Y){return [index]}})),_n(_S,'events','dragenter',_e('dragenter','handleDragEnter(index)','dragenter','','handleDragEnter',{execute:function(_X,_Y){return [index]}})),_n(_S,'events','dragleave',_e('dragleave','handleDragLeave(index)','dragleave','','handleDragLeave',{execute:function(_X,_Y){return [index]}})),_n(_S,'events','drop',_e('drop','handleDragDrop(index)','drop','','handleDragDrop',{execute:function(_X,_Y){return [index]}}))):$1;return _S}({children:function(){var _T=[];_t(_Q,'url',_U.url).value||_t(_Q,'base64',_U.base64).value?_T.push(function(_S){_t(_Q,'url',_U.url).value?_n(_S,'nativeAttrs','src',_u(_Q,0,'formatImageUrl').value?_x(_w(_u(_Q,0,'formatImageUrl').value,_G,[{height:_u(_Q,0,'customImageHeight').value,responsive:$3,url:_t(_Q,'url',_U.url).value,width:_u(_Q,0,'customImageWidth').value}])).value:_t(_Q,'url',_U.url).value):_t(_Q,'base64',_U.base64).value?_n(_S,'nativeAttrs','src',_t(_Q,'base64',_U.base64).value):$1;_t(_Q,'name',_U.name).value?_n(_S,'nativeAttrs','alt',_t(_Q,'name',_U.name).value):$1;_u(_Q,0,'draggingIndex').value<0?_n(_S,'events','click',_e('click','handleImageClick(this, index)','click','','handleImageClick',{execute:function(_X,_Y){return [_s(_Q,_Q.length-1).value,index]}})):$1;return _S}({context:_G,nativeAttrs:{class:'bell-image-picker-image',draggable:'false'},operator:_B,tag:'img',type:3})):_t(_Q,'name',_U.name).value?_T.push({context:_G,nativeAttrs:$5,operator:_B,tag:'div',text:_y(_t(_Q,'name',_U.name).value),type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_t(_Q,'status',_U.status).value===_u(_Q,0,'STATUS_UPLOADING').value?_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{percent:_t(_Q,'progress',_U.progress).value>0?_t(_Q,'progress',_U.progress).value*100:0,size:'60'},slots:{$slot_children:function(_R){var _T=[];_T.push({isPure:$3,operator:_z,text:'上传中',type:1});return _T.length?_T:$1}},tag:'Circle',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3}):(_t(_Q,'status',_U.status).value===_u(_Q,0,'STATUS_ERROR').value||_t(_Q,'status',_U.status).value==_u(_Q,0,'STATUS_FAILURE').value?_T.push({context:_G,isComponent:$3,operator:_C,props:{accept:_r(_Q,'accept',_U.accept).value,beforeUpload:_r(_Q,'beforeReuploadImage',_U.beforeReuploadImage).value,className:'bell-image-picker-mask',draggable:$3,index:index},ref:'reupload',slots:{$slot_children:function(_R){var _T=[];_T.push({context:_G,html:_y(_t(_Q,'message',_U.message).value),nativeAttrs:$7,operator:_B,tag:'div',type:3});_T.push({context:_G,isPure:$3,isStatic:$3,nativeAttrs:$8,operator:_B,tag:'div',text:'重新上传',type:3});return _T.length?_T:$1}},tag:'Upload',type:4}):_t(_Q,'size',_U.size).value>0?_T.push({context:_G,nativeAttrs:$9,operator:_B,tag:'div',text:_y(_x(_w(_r(_Q,'formatFileSize',_U.formatFileSize,_H&&_H.formatFileSize||_I.formatFileSize).value,_G,[_t(_Q,'size',_U.size).value])).value),type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2}),!_u(_Q,0,'readOnly').value&&_u(_Q,0,'draggingIndex').value<0?_T.push({context:_G,events:{'click.native':_e('click.native','removeItem(index)','click','native','removeItem',{execute:function(_X,_Y){return [index]}},$1,$3)},isComponent:$3,operator:_C,props:{className:'bell-image-picker-remove-icon',name:'close-circle-fill'},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2}));return _T.length?_T:$1}(),context:_G,events:{mouseenter:_e('mouseenter','handleMouseEnter(index)','mouseenter','','handleMouseEnter',{execute:function(_X,_Y){return [index]}}),mouseleave:_e('mouseleave','handleMouseLeave(index)','mouseleave','','handleMouseLeave',{execute:function(_X,_Y){return [index]}})},key:_t(_Q,'id',_U.id).value,nativeAttrs:{class:'bell-image-picker-item bell-image-picker-card',draggable:_p('draggable',_u(_Q,0,'canDraggable').value)},nativeStyles:_b(_u(_Q,0,'imageStyle').value),operator:_B,tag:'div',type:3}));});!_r(_Q,'readOnly',_U.readOnly).value&&_r(_Q,'restCount',_U.restCount).value>0?_T.push({context:_G,isComponent:$3,operator:_C,props:{accept:_r(_Q,'accept',_U.accept).value,beforeUpload:_r(_Q,'beforeUploadImage',_U.beforeUploadImage).value,className:'bell-image-picker-item',draggable:$3,multiple:_r(_Q,'restCount',_U.restCount).value>1,style:_r(_Q,'imageStyle',_U.imageStyle).value},ref:'upload',slots:{$slot_children:function(_R){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{height:_r(_Q,'imageHeight',_U.imageHeight).value,title:_r(_Q,'isVideoPicker',_U.isVideoPicker).value?'上传视频':'上传图片',width:_r(_Q,'imageWidth',_U.imageWidth).value},tag:'Add',type:4});return _T.length?_T:$1}},tag:'Upload',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:$10,operator:_B,ref:'imagePickerList',tag:'div',type:3});_r(_Q,'extra',_U.extra).value?_T.push({context:_G,nativeAttrs:$11,operator:_B,tag:'div',text:_y(_r(_Q,'extra',_U.extra).value),type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-image-picker'+(!_r(_Q,'supportFlexGap',_U.supportFlexGap).value?' bell-image-picker-legacy':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var STATUS_UPLOADING = 'uploading';
  var STATUS_ERROR = 'error';
  var STATUS_FAILURE = 'failure';
  var KB = 1024;
  var MB = 1024 * KB;
  var GB = 1024 * MB;
  function readLocalFile(item) {
      return new Promise(function (resolve) {
          var file = item.file;
          if (file.type.indexOf('image') >= 0) {
              var reader = new FileReader();
              reader.onload = function (event) {
                  var base64 = event.target.result;
                  item.base64 = base64;
                  var image = new Image();
                  image.src = base64;
                  image.onload = function () {
                      item.width = image.naturalWidth;
                      item.height = image.naturalHeight;
                      image.onload = image.onerror = NULL;
                      resolve(item);
                  };
                  image.onerror = function () {
                      item.status = STATUS_ERROR;
                      item.message = 'error';
                      image.onload = image.onerror = NULL;
                      resolve(item);
                  };
              };
              reader.onerror = function () {
                  item.status = STATUS_ERROR;
                  item.message = 'error';
                  resolve(item);
              };
              reader.readAsDataURL(file);
          }
          else {
              var video_1 = DOCUMENT.createElement('video');
              video_1.preload = 'metadata';
              video_1.src = URL.createObjectURL(file);
              video_1.onloadedmetadata = function () {
                  URL.revokeObjectURL(video_1.src);
                  item.width = video_1.videoWidth;
                  item.height = video_1.videoHeight;
                  item.duration = video_1.duration;
                  video_1.onloadedmetadata = video_1.onerror = NULL;
                  resolve(item);
              };
              video_1.onerror = function () {
                  item.status = STATUS_ERROR;
                  item.message = 'error';
                  video_1.onloadedmetadata = video_1.onerror = NULL;
                  resolve(item);
              };
          }
      });
  }
  function formatFileSize(size) {
      if (size >= GB) {
          return (size / GB).toFixed(1) + ' G';
      }
      if (size >= MB) {
          return (size / MB).toFixed(1) + ' MB';
      }
      return (size / KB).toFixed(1) + ' KB';
  }

  var CLASS_CARD_MOUSE_ENTER = 'bell-image-picker-card-mouse-enter';
  var CLASS_CARD_DRAG_ENTER = 'bell-image-picker-card-drag-enter';
  var formatDurationOptinos = {
      format: 'd:HH:mm:ss',
      trimDay: TRUE,
      trimHour: TRUE
  };
  var ImagePicker = Yox.define({
      template: template$T,
      name: 'bell-ImagePicker',
      propTypes: {
          imageList: {
              type: RAW_ARRAY,
              required: TRUE,
          },
          imageWidth: {
              type: RAW_NUMERIC,
              value: 80,
          },
          imageHeight: {
              type: RAW_NUMERIC,
              value: 80,
          },
          extra: {
              type: RAW_STRING,
          },
          minSize: {
              type: RAW_NUMERIC,
          },
          maxSize: {
              type: RAW_NUMERIC,
          },
          maxCount: {
              type: RAW_NUMERIC,
          },
          minRatio: {
              type: RAW_NUMERIC,
          },
          maxRatio: {
              type: RAW_NUMERIC,
          },
          minWidth: {
              type: RAW_NUMERIC,
          },
          minHeight: {
              type: RAW_NUMERIC,
          },
          minDuration: {
              type: RAW_NUMERIC,
          },
          maxWidth: {
              type: RAW_NUMERIC,
          },
          maxHeight: {
              type: RAW_NUMERIC,
          },
          maxDuration: {
              type: RAW_NUMERIC,
          },
          accept: {
              type: RAW_STRING,
              value: RAW_IMAGE_ACCEPT,
          },
          formatImageUrl: {
              type: RAW_FUNCTION,
          },
          cropImage: {
              type: RAW_FUNCTION,
          },
          uploadImage: {
              type: RAW_FUNCTION,
          },
          readOnly: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          var me = this;
          return {
              STATUS_UPLOADING: STATUS_UPLOADING,
              STATUS_ERROR: STATUS_ERROR,
              STATUS_FAILURE: STATUS_FAILURE,
              supportFlexGap: supportFlexGap,
              draggingIndex: -1,
              uploadingCount: 0,
              beforeReuploadImage: function (data) {
                  var index = data.index, fileList = data.fileList;
                  readLocalFile(fileList[0]).then(function (item) {
                      me.validateImageList([item]);
                      var reupload = me.$refs.reupload;
                      reupload.reset();
                      me.replaceItem(item, index);
                  });
              },
              beforeUploadImage: function (data) {
                  var restCount = me.get('restCount');
                  var fileList = data.fileList;
                  // 校验可选数量
                  if (fileList.length > restCount) {
                      if (me.get('isVideoPicker')) {
                          me.fireError("\u4EC5\u53EF\u4EE5\u9009\u62E9 " + restCount + " \u4E2A\u89C6\u9891");
                      }
                      else {
                          me.fireError("\u4EC5\u53EF\u4EE5\u9009\u62E9 " + restCount + " \u5F20\u56FE\u7247");
                      }
                      return;
                  }
                  Promise.all(fileList.map(readLocalFile))
                      .then(function (newList) {
                      me.validateImageList(newList);
                      var upload = me.$refs.upload;
                      upload.reset();
                      me.appendItems(newList);
                  });
              }
          };
      },
      computed: {
          isVideoPicker: function () {
              return this.get('accept').indexOf('video') >= 0;
          },
          restCount: function () {
              var imageCount = this.get('imageList.length');
              var maxCount = this.get('maxCount');
              return maxCount - imageCount;
          },
          canDraggable: function () {
              var uploadingCount = this.get('uploadingCount');
              var readOnly = this.get('readOnly');
              var imageList = this.get('imageList');
              return !uploadingCount && !readOnly && imageList.length > 1;
          },
          imageStyle: function () {
              var customStyle = {};
              var imageWidth = this.get('imageWidth');
              var imageHeight = this.get('imageHeight');
              customStyle.width = toPixel(imageWidth);
              customStyle.height = toPixel(imageHeight);
              return customStyle;
          },
      },
      filters: {
          formatFileSize: formatFileSize,
      },
      components: {
          Add: Add,
          Icon: Icon,
          Button: Button,
          Upload: Upload,
          Space: Space,
      },
      methods: {
          handleImageClick: function (image, index) {
              this.fire({
                  type: 'preview',
                  ns: 'imagePicker'
              }, {
                  image: image,
                  index: index,
              });
          },
          getImageIndexById: function (id) {
              var imageList = this.get('imageList');
              for (var i = 0, len = imageList.length; i < len; i++) {
                  if (id === imageList[i].id) {
                      return i;
                  }
              }
              return -1;
          },
          validateImageList: function (imageList) {
              var me = this;
              var target = me.get('isVideoPicker') ? '视频' : '图片';
              var minSize = toNumber(me.get('minSize'));
              var maxSize = toNumber(me.get('maxSize'));
              var minRatio = toNumber(me.get('minRatio'));
              var maxRatio = toNumber(me.get('maxRatio'));
              var minWidth = toNumber(me.get('minWidth'));
              var minHeight = toNumber(me.get('minHeight'));
              var maxWidth = toNumber(me.get('maxWidth'));
              var maxHeight = toNumber(me.get('maxHeight'));
              var minDuration = toNumber(me.get('minDuration'));
              var maxDuration = toNumber(me.get('maxDuration'));
              for (var i = 0, len = imageList.length; i < len; i++) {
                  var item = imageList[i];
                  var errors = [];
                  if (minSize > 0) {
                      if (item.size < minSize) {
                          errors.push(target + "\u5C3A\u5BF8\u4E0D\u80FD\u5C0F\u4E8E " + formatFileSize(minSize));
                      }
                  }
                  if (maxSize > 0) {
                      if (item.size > maxSize) {
                          errors.push(target + "\u5C3A\u5BF8\u4E0D\u80FD\u8D85\u8FC7 " + formatFileSize(maxSize));
                      }
                  }
                  if (item.height > 0) {
                      var ratio = item.width / item.height;
                      if (minRatio > 0) {
                          if (ratio < minRatio) {
                              errors.push(target + "\u5BBD\u9AD8\u6BD4\u4E0D\u80FD\u5C0F\u4E8E " + minRatio);
                          }
                      }
                      if (maxRatio > 0) {
                          if (ratio > maxRatio) {
                              errors.push(target + "\u5BBD\u9AD8\u6BD4\u4E0D\u80FD\u5927\u4E8E " + maxRatio);
                          }
                      }
                  }
                  if (minWidth > 0) {
                      if (item.width < minWidth) {
                          errors.push(target + "\u5BBD\u5EA6\u4E0D\u80FD\u5C0F\u4E8E " + minWidth + "px");
                      }
                  }
                  if (minHeight > 0) {
                      if (item.height < minHeight) {
                          errors.push(target + "\u9AD8\u5EA6\u4E0D\u80FD\u5C0F\u4E8E " + minHeight + "px");
                      }
                  }
                  if (maxWidth > 0) {
                      if (item.width > maxWidth) {
                          errors.push(target + "\u5BBD\u5EA6\u4E0D\u80FD\u5927\u4E8E " + maxWidth + "px");
                      }
                  }
                  if (maxHeight > 0) {
                      if (item.height > maxHeight) {
                          errors.push(target + "\u9AD8\u5EA6\u4E0D\u80FD\u5927\u4E8E " + maxHeight + "px");
                      }
                  }
                  if (minDuration > 0) {
                      if (item.duration < minDuration) {
                          errors.push(target + "\u65F6\u957F\u4E0D\u80FD\u5C0F\u4E8E " + formatMillisecond(minDuration * 1000, formatDurationOptinos));
                      }
                  }
                  if (maxDuration > 0) {
                      if (item.duration > maxDuration) {
                          errors.push(target + "\u65F6\u957F\u4E0D\u80FD\u8D85\u8FC7 " + formatMillisecond(maxDuration * 1000, formatDurationOptinos));
                      }
                  }
                  if (errors.length) {
                      item.status = STATUS_ERROR;
                      item.message = errors.join('<br>');
                  }
              }
          },
          checkReady: function () {
              var result = {
                  hasLocal: FALSE,
                  hasUploading: FALSE,
                  hasError: FALSE,
              };
              var imageList = this.get('imageList');
              for (var i = 0, len = imageList.length; i < len; i++) {
                  if (imageList[i].status === STATUS_UPLOADING) {
                      result.hasUploading = TRUE;
                  }
                  else if (imageList[i].status === STATUS_ERROR || imageList[i].status === STATUS_FAILURE) {
                      result.hasError = TRUE;
                  }
                  if (!imageList[i].url) {
                      result.hasLocal = TRUE;
                  }
              }
              return result;
          },
          appendItems: function (items) {
              var me = this;
              var imageList = me.copy(me.get('imageList'));
              var length = imageList.length;
              items.forEach(function (item) {
                  imageList.push(item);
              });
              me.set('imageList', imageList);
              me.fireChange();
              items.forEach(function (item, index) {
                  me.uploadItem(item.id, length + index);
              });
          },
          replaceItem: function (item, index) {
              var me = this;
              var imageList = me.copy(me.get('imageList'));
              imageList.splice(index, 1, item);
              me.set('imageList', imageList);
              me.fireChange();
              me.uploadItem(item.id, index);
          },
          removeItem: function (index) {
              this.removeAt('imageList', index);
              this.fireChange();
          },
          upload: function () {
              var me = this;
              var imageList = me.get('imageList');
              Yox.array.each(imageList, function (item, index) {
                  me.uploadItem(item.id, index);
              });
          },
          uploadItem: function (id, index) {
              var me = this;
              var item = me.get("imageList." + index);
              // 如果校验未通过，或者已上传成功，则直接返回
              if (item.status === STATUS_ERROR || item.url) {
                  return;
              }
              var uploadHandler = function (item) {
                  var uploadImage = me.get('uploadImage');
                  me.increase('uploadingCount');
                  uploadImage({
                      id: item.id,
                      file: item.file,
                      onStart: function () {
                          var index = me.getImageIndexById(id);
                          if (index >= 0) {
                              me.set("imageList." + index + ".status", STATUS_UPLOADING);
                              me.fireChange();
                          }
                      },
                      onError: function (error) {
                          var index = me.getImageIndexById(id);
                          if (index >= 0) {
                              me.set("imageList." + index + ".status", STATUS_FAILURE);
                              me.set("imageList." + index + ".message", error || '上传失败');
                              me.decrease('uploadingCount');
                              me.fireChange();
                          }
                      },
                      onProgress: function (progress) {
                          var index = me.getImageIndexById(id);
                          if (index >= 0) {
                              me.set("imageList." + index + ".progress", progress);
                              me.fireChange();
                          }
                      },
                      onSuccess: function (data) {
                          var index = me.getImageIndexById(id);
                          if (index >= 0) {
                              me.set("imageList." + index, data);
                              me.decrease('uploadingCount');
                              me.fireChange();
                          }
                      }
                  });
              };
              var cropImage = me.get('cropImage');
              if (item.base64 && cropImage) {
                  cropImage({
                      index: index,
                      base64: item.base64,
                      callback: function (result) {
                          Yox.object.extend(item, result);
                          uploadHandler(item);
                      }
                  });
              }
              else {
                  uploadHandler(item);
              }
          },
          fireError: function (error) {
              this.fire({
                  type: 'error',
                  ns: 'imagePicker'
              }, {
                  error: error
              });
          },
          fireChange: function () {
              this.fire({
                  type: 'change',
                  ns: 'imagePicker'
              }, {
                  imageList: this.get('imageList')
              });
          },
          addImgWrapperItemClass: function (index, className) {
              var imagePickerListRef = this.$refs.imagePickerList;
              var targetChild = imagePickerListRef.children[index];
              if (targetChild) {
                  Yox.dom.addClass(targetChild, className);
              }
          },
          removeImgWrapperItemClass: function (index, className) {
              var imagePickerListRef = this.$refs.imagePickerList;
              var targetChild = imagePickerListRef.children[index];
              if (targetChild) {
                  Yox.dom.removeClass(targetChild, className);
              }
          },
          handleMouseEnter: function (index) {
              // https://stackoverflow.com/questions/11989289/css-html5-hover-state-remains-after-drag-and-drop
              // drag 拖拽的时候，hover 状态仍然会保留，改用监听 mouseenter 和 mouseleave 来添加删除 class
              // 并在 dragstart 的时候删除添加的 class，使 active 状态失效
              this.addImgWrapperItemClass(index, CLASS_CARD_MOUSE_ENTER);
          },
          handleMouseLeave: function (index) {
              this.removeImgWrapperItemClass(index, CLASS_CARD_MOUSE_ENTER);
          },
          handleDragStart: function (index) {
              this.set('draggingIndex', index);
              this.removeImgWrapperItemClass(index, CLASS_CARD_MOUSE_ENTER);
          },
          handleDragEnd: function () {
              // https://stackoverflow.com/questions/38111946/is-there-a-defined-ordering-between-dragend-and-drop-events
              // dragend 事件会在 drop 事件之后触发，做一些清理工作
              this.set('draggingIndex', -1);
          },
          handleDragOver: function (index) {
              var draggingIndex = this.get('draggingIndex');
              if (draggingIndex < 0) {
                  return FALSE;
              }
              if (draggingIndex !== index) {
                  this.addImgWrapperItemClass(index, CLASS_CARD_DRAG_ENTER);
              }
              // https://hijiangtao.github.io/2020/05/04/Drag-and-Drop-note/
              // 返回 false, 阻止浏览器这种默认行为
              return FALSE;
          },
          handleDragEnter: function (index) {
              var draggingIndex = this.get('draggingIndex');
              if (draggingIndex < 0) {
                  return FALSE;
              }
              if (draggingIndex !== index) {
                  this.addImgWrapperItemClass(index, CLASS_CARD_DRAG_ENTER);
              }
              return FALSE;
          },
          handleDragLeave: function (index) {
              var draggingIndex = this.get('draggingIndex');
              if (draggingIndex < 0) {
                  return;
              }
              this.removeImgWrapperItemClass(index, CLASS_CARD_DRAG_ENTER);
          },
          handleDragDrop: function (index) {
              var draggingIndex = this.get('draggingIndex');
              if (draggingIndex < 0) {
                  return FALSE;
              }
              var imageList = this.get('imageList');
              if (draggingIndex >= 0
                  && draggingIndex < imageList.length
                  && draggingIndex !== index) {
                  this.removeImgWrapperItemClass(index, CLASS_CARD_DRAG_ENTER);
                  var startImageItem = imageList[draggingIndex];
                  var newImageList = this.copy(imageList);
                  if (draggingIndex < index) {
                      newImageList.splice(index + 1, 0, startImageItem);
                      newImageList.splice(draggingIndex, 1);
                  }
                  else {
                      newImageList.splice(index, 0, startImageItem);
                      newImageList.splice(draggingIndex + 1, 1);
                  }
                  this.set('imageList', newImageList);
                  this.fireChange();
              }
              this.set('draggingIndex', -1);
              return FALSE;
          },
      }
  });

  var template$U = (function(){var $1=void 0,$3=!0,$5={class:'bell-carousel-item'},$6={class:'bell-carousel-list'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;return _S}({children:function(){var _T=[];_T.push({children:function(){var _T=[];_j(_r(_Q,'$slot_children',_U.$slot_children),function(_Q,_U,_V,_W){!_t(_Q,'isComment',_U.isComment).value?_T.push({context:_G,isComponent:$3,operator:_C,props:{delay:'1000'},slots:{$slot_children:function(_R){var _T=[];_T.push({children:function(){var _T=[];_T.push(_s(_Q,_Q.length-1).value);return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3});return _T.length?_T:$1}},tag:'ResizeObserver',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,ref:'list',tag:'div',type:3});_r(_Q,'count',_U.count).value>1?_T.push({children:function(){var _T=[];_k(0,_r(_Q,'count',_U.count).value,$1,function(_Q,_U,_V,_W,i){_T.push(function(_S){_u(_Q,0,'trigger').value===_u(_Q,0,'RAW_CLICK').value?_n(_S,'events','click',_e('click','go(i)','click','','go',{execute:function(_X,_Y){return [i]}})):_n(_S,'events','mouseenter',_e('mouseenter','go(i)','mouseenter','','go',{execute:function(_X,_Y){return [i]}}));return _S}({context:_G,nativeAttrs:{class:'bell-carousel-indicator-item'+(_u(_Q,0,'index').value===i?' bell-carousel-indicator-item-active':'')},operator:_B,tag:'div',type:3}));});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-carousel-indicator'+(_r(_Q,'indicatorType',_U.indicatorType).value?' bell-carousel-indicator-'+_y(_r(_Q,'indicatorType',_U.indicatorType).value):'')+(_r(_Q,'indicatorPosition',_U.indicatorPosition).value?' bell-carousel-indicator-'+_y(_r(_Q,'indicatorPosition',_U.indicatorPosition).value):'')},operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-carousel'+(_r(_Q,'direction',_U.direction).value?' bell-carousel-'+_y(_r(_Q,'direction',_U.direction).value):'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Carousel = Yox.define({
      template: template$U,
      name: 'bell-Carousel',
      propTypes: {
          autoPlay: {
              type: RAW_BOOLEAN,
          },
          interval: {
              type: RAW_NUMERIC,
              value: 3000,
          },
          trigger: {
              type: oneOf([RAW_CLICK, RAW_HOVER]),
              value: RAW_CLICK
          },
          indicatorType: {
              type: oneOf(['dot', 'line']),
              value: 'dot'
          },
          indicatorPosition: {
              type: oneOf([
                  RAW_TOP,
                  RAW_RIGHT,
                  RAW_BOTTOM,
                  RAW_LEFT ]),
              value: RAW_BOTTOM,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          var children = this.get(RAW_SLOT_CHILDREN);
          return {
              RAW_CLICK: RAW_CLICK,
              RAW_HOVER: RAW_HOVER,
              RAW_TOP: RAW_TOP,
              RAW_RIGHT: RAW_RIGHT,
              RAW_BOTTOM: RAW_BOTTOM,
              RAW_LEFT: RAW_LEFT,
              index: 0,
              count: children
                  ? children.length
                  : 0,
              size: UNDEFINED,
          };
      },
      computed: {
          direction: function () {
              var indicatorPosition = this.get('indicatorPosition');
              return indicatorPosition === 'left' || indicatorPosition === 'right'
                  ? RAW_VERTICAL
                  : RAW_HORIZONTAL;
          },
          inlineStyle: function () {
              var result = [];
              var size = this.get('size');
              if (size) {
                  result.push({
                      width: toPixel(size.width),
                      height: toPixel(size.height),
                  });
              }
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          },
      },
      events: {
          resize: {
              listener: function (event, data) {
                  if (event.phase !== Yox.Event.PHASE_UPWARD) {
                      return;
                  }
                  event.stop();
                  this.set('size', data);
              },
              ns: 'resizeObserver'
          }
      },
      watchers: {
          index: function (value) {
              // @ts-ignore
              this.move(value, TRUE);
          },
          direction: function () {
              // @ts-ignore
              this.move(this.get('index'));
          }
      },
      methods: {
          go: function (index) {
              this.set('index', index);
          },
          prev: function () {
              var index = this.get('index') - 1;
              var count = this.get('count');
              // @ts-ignore
              this.go(index < 0 ? (count - 1) : index);
          },
          next: function () {
              var index = this.get('index') + 1;
              var count = this.get('count');
              // @ts-ignore
              this.go(index === count ? 0 : index);
          },
          move: function (index, animated) {
              var size = this.get('size');
              if (!size) {
                  return;
              }
              var element = this.$refs.list;
              element.style.transitionDuration = animated ? '0.2s' : '';
              element.style.transform = this.get('direction') === RAW_HORIZONTAL
                  ? ('translateX(-' + toPixel(index * size.width) + ')')
                  : ('translateY(-' + toPixel(index * size.height) + ')');
          }
      },
      components: {
          ResizeObserver: ResizeObserver$1
      },
      afterMount: function () {
          var me = this;
          // 自动播放
          var autoPlayTimer;
          var autoPlayHandler = function () {
              // @ts-ignore
              me.next();
              autoPlayTimer = window.setTimeout(autoPlayHandler, me.get('interval'));
          };
          me.watch('autoPlay', function (newValue) {
              if (newValue) {
                  autoPlayTimer = window.setTimeout(autoPlayHandler, me.get('interval'));
              }
              else if (autoPlayTimer) {
                  clearTimeout(autoPlayTimer);
                  autoPlayTimer = 0;
              }
          }, TRUE);
          var destroy = function (component) {
              if (component === me) {
                  if (autoPlayTimer) {
                      clearTimeout(autoPlayTimer);
                  }
                  Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy);
              }
          };
          Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy);
      },
      beforePropsUpdate: function (props) {
          var children = props[RAW_SLOT_CHILDREN];
          this.set('count', children ? children.length : 0);
      }
  });

  var template$V = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-collapse'+(_r(_Q,'simple',_U.simple).value?' bell-collapse-simple':' bell-collapse-bordered')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Collapse = Yox.define({
      template: template$V,
      name: 'bell-Collapse',
      propTypes: {
          value: {
              type: [RAW_STRING, RAW_NUMBER, RAW_ARRAY],
          },
          accordion: {
              type: RAW_BOOLEAN,
          },
          simple: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      watchers: {
          value: function (value) {
              this.fire({
                  type: 'change',
                  ns: 'collapse',
              }, {
                  value: value,
              }, TRUE);
          }
      },
      events: {
          open: {
              listener: function (event, data) {
                  if (event.phase === Yox.Event.PHASE_UPWARD) {
                      event.stop();
                      var name = data.name, opened = data.opened;
                      var value = this.get('value');
                      if (this.get('accordion')) {
                          value = opened ? name : UNDEFINED;
                      }
                      else {
                          value = Yox.is.array(value) ? this.copy(value) : [];
                          if (opened) {
                              if (!Yox.array.has(value, name, FALSE)) {
                                  value.push(name);
                              }
                          }
                          else {
                              Yox.array.remove(value, name, FALSE);
                          }
                      }
                      this.set('value', value);
                  }
              },
              ns: 'collapseItem'
          }
      }
  });

  var template$W = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-collapse-extra'},$6={class:'bell-collapse-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push(function(_S){!_r(_Q,'disabled',_U.disabled).value?_n(_S,'events','click',_e('click','click()','click','','click')):$1;return _S}({children:function(){var _T=[];_r(_Q,'$slot_extra',_U.$slot_extra).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_extra'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-collapse-arrow-icon',name:'arrow-right-s-line'},tag:'Icon',type:4});_T.push({isPure:$3,operator:_z,text:_y(_r(_Q,'title',_U.title).value),type:1});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-collapse-header'},operator:_B,tag:'div',type:3}));_T.push({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-collapse-item'+(_r(_Q,'opened',_U.opened).value?' bell-collapse-opened':'')+(_r(_Q,'disabled',_U.disabled).value?' bell-collapse-disabled':' bell-collapse-enabled')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var CollapseItem = Yox.define({
      template: template$W,
      name: 'bell-CollapseItem',
      propTypes: {
          title: {
              type: RAW_STRING,
              required: TRUE,
          },
          name: {
              type: [RAW_STRING, RAW_NUMBER],
              required: TRUE,
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function (options) {
          var collapse = findComponentUpward(options.parent, 'bell-Collapse');
          var opened = FALSE;
          if (collapse) {
              var name = this.get('name');
              var value = collapse.get('value');
              opened = Yox.is.array(value)
                  ? Yox.array.has(value, name, FALSE)
                  : value == name;
          }
          return {
              opened: opened,
          };
      },
      events: {
          change: {
              listener: function (event, data) {
                  // 只接收父级事件，再上一级的就不管了
                  // 避免嵌套面板的问题
                  if (event.target !== this.$parent) {
                      return;
                  }
                  var name = this.get('name');
                  this.set('opened', Yox.is.array(data.value)
                      ? Yox.array.has(data.value, name, FALSE)
                      : data.value == name);
              },
              ns: 'collapse',
          }
      },
      methods: {
          click: function () {
              this.fire({
                  type: 'open',
                  ns: 'collapseItem',
              }, {
                  name: this.get('name'),
                  opened: !this.get('opened'),
              });
          },
      },
      components: {
          Icon: Icon,
      }
  });

  var template$X = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-card bell-card-shadow-'+_y(_r(_Q,'shadow',_U.shadow).value)+(_r(_Q,'simple',_U.simple).value?' bell-card-simple':' bell-card-bordered')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Card = Yox.define({
      template: template$X,
      name: 'bell-Card',
      propTypes: {
          simple: {
              type: RAW_BOOLEAN,
          },
          shadow: {
              type: oneOf([RAW_ALWAYS, RAW_HOVER, RAW_NEVER]),
              value: RAW_ALWAYS,
          },
          width: {
              type: RAW_NUMERIC,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      computed: {
          inlineStyle: function () {
              var result = [];
              var width = this.get('width');
              if (width) {
                  result.push({
                      width: toPixel(width)
                  });
              }
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          },
      }
  });

  var template$Y = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-card-header-title'},$6={class:'bell-card-header-sub-title'},$7={class:'bell-card-header-info'},$8={class:'bell-card-header-wrapper'},$9={class:'bell-card-header-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push({children:function(){var _T=[];($0={children:_l('$slot_avatar'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];($0={children:_l('$slot_title'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3});_r(_Q,'$slot_subTitle',_U.$slot_subTitle).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_subTitle'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:$7,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$8,operator:_B,tag:'div',type:3});_r(_Q,'$slot_extra',_U.$slot_extra).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_extra'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$9,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-card-header'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var CardHeader = Yox.define({
      template: template$Y,
      name: 'bell-CardHeader',
      propTypes: {
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          },
      },
  });

  var template$Z = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-card-media-title'},$6={class:'bell-card-media-sub-title'},$7={class:'bell-card-media-info'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));_r(_Q,'$slot_title',_U.$slot_title).value||_r(_Q,'$slot_subTitle',_U.$slot_subTitle).value?_T.push({children:function(){var _T=[];_r(_Q,'$slot_title',_U.$slot_title).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_title'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'$slot_subTitle',_U.$slot_subTitle).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_subTitle'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:$7,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-card-media'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var CardMedia = Yox.define({
      template: template$Z,
      name: 'bell-CardMedia',
      propTypes: {
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
  });

  var template$_ = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-card-body'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var CardBody = Yox.define({
      template: template$_,
      name: 'bell-CardBody',
      propTypes: {
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
  });

  var template$$ = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-card-footer'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var CardFooter = Yox.define({
      template: template$$,
      name: 'bell-CardFooter',
      propTypes: {
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
  });

  var template$10 = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-page-header-title'},$6={class:'bell-page-header-tags'},$7={class:'bell-page-header-extra'},$8={class:'bell-page-header-header'},$9={class:'bell-page-header-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_breadcrumb'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));_T.push({children:function(){var _T=[];_r(_Q,'showBack',_U.showBack).value?_T.push({context:_G,events:{'click.native':_f('click.native','back.pageHeader','click','native','back','pageHeader',$1,$3)},isComponent:$3,operator:_C,props:{className:'bell-page-header-back',name:'arrow-left-line'},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_T.push({context:_G,nativeAttrs:$5,operator:_B,tag:'div',text:_y(_r(_Q,'title',_U.title).value),type:3});_r(_Q,'$slot_tags',_U.$slot_tags).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_tags'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'$slot_extra',_U.$slot_extra).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_extra'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$7,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:$8,operator:_B,tag:'div',type:3});_r(_Q,'$slot_content',_U.$slot_content).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_content'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$9,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-page-header'+(_r(_Q,'showBack',_U.showBack).value?' bell-page-header-with-back':'')+(_r(_Q,'$slot_tags',_U.$slot_tags).value?' bell-page-header-with-tags':'')+(_r(_Q,'$slot_extra',_U.$slot_extra).value?' bell-page-header-with-extra':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var PageHeader = Yox.define({
      template: template$10,
      name: 'bell-PageHeader',
      propTypes: {
          title: {
              type: RAW_STRING,
              required: TRUE,
          },
          showBack: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      components: {
          Icon: Icon,
      }
  });

  var template$11 = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-layout'+(_r(_Q,'vertical',_U.vertical).value?' bell-layout-vertical':' bell-layout-horizontal')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Layout = Yox.define({
      template: template$11,
      name: 'bell-Layout',
      propTypes: {
          vertical: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      }
  });

  var template$12 = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-layout-header-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'$slot_extra',_U.$slot_extra).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_extra'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-layout-header'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var LayoutHeader = Yox.define({
      template: template$12,
      name: 'bell-LayoutHeader',
      propTypes: {
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
  });

  var template$13 = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-layout-content'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var LayoutContent = Yox.define({
      template: template$13,
      name: 'bell-LayoutContent',
      propTypes: {
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
  });

  var template$14 = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-layout-footer'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var LayoutFooter = Yox.define({
      template: template$14,
      name: 'bell-LayoutFooter',
      propTypes: {
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
  });

  var template$15 = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-layout-sider-logo'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'$slot_logo',_U.$slot_logo).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_logo'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));_r(_Q,'showTrigger',_U.showTrigger).value?_T.push(function(_S){_r(_Q,'triggerStyle',_U.triggerStyle).value?_S.nativeStyles=_b(_r(_Q,'triggerStyle',_U.triggerStyle).value):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-layout-sider-trigger-icon',name:'arrow-left-s-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click',"toggle('collapsed')",'click','','toggle',{execute:function(_X,_Y){return ['collapsed']}})},nativeAttrs:{class:'bell-layout-sider-trigger'},operator:_B,tag:'div',type:3})):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-layout-sider'+(_r(_Q,'collapsed',_U.collapsed).value?' bell-layout-sider-collapsed':'')+(_r(_Q,'showTrigger',_U.showTrigger).value?' bell-layout-sider-with-trigger':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var LayoutSider = Yox.define({
      template: template$15,
      model: 'collapsed',
      name: 'bell-LayoutSider',
      propTypes: {
          showTrigger: {
              type: RAW_BOOLEAN,
          },
          collapsed: {
              type: RAW_BOOLEAN,
          },
          width: {
              type: RAW_NUMERIC,
              value: 200
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      computed: {
          customWidth: function () {
              if (this.get('collapsed')) {
                  return 80;
              }
              return toNumber(this.get('width'));
          },
          inlineStyle: function () {
              var result = [];
              var customWidth = this.get('customWidth');
              if (customWidth) {
                  result.push({
                      flex: '0 0 ' + toPixel(customWidth),
                      width: toPixel(customWidth),
                      minWidth: toPixel(customWidth),
                      maxWidth: toPixel(customWidth),
                  });
              }
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          },
          triggerStyle: function () {
              var customWidth = this.get('customWidth');
              if (customWidth) {
                  return {
                      width: toPixel(customWidth)
                  };
              }
          },
      },
      components: {
          Icon: Icon,
      }
  });

  var template$16 = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'target',_U.target).value?_n(_S,'nativeAttrs','target',_r(_Q,'target',_U.target).value):$1;_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;!_r(_Q,'href',_U.href).value&&!_r(_Q,'disabled',_U.disabled).value?_n(_S,'events','click',_f('click','click.link','click','','click','link')):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-link'+(_r(_Q,'type',_U.type).value?' bell-link-'+_y(_r(_Q,'type',_U.type).value):'')+(_r(_Q,'size',_U.size).value?' bell-link-'+_y(_r(_Q,'size',_U.size).value):'')+(_r(_Q,'underline',_U.underline).value?' bell-link-underline':'')+(_r(_Q,'disabled',_U.disabled).value?' bell-link-disabled':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):''),draggable:'false',href:_r(_Q,'href',_U.href).value||'javascript:void(0)'},operator:_B,tag:'a',type:3}));}})();

  var Link = Yox.define({
      template: template$16,
      name: 'bell-Link',
      propTypes: {
          type: {
              type: oneOf([
                  RAW_TYPE_PRIMARY,
                  RAW_TYPE_INFO,
                  RAW_TYPE_SUCCESS,
                  RAW_TYPE_WARNING,
                  RAW_TYPE_ERROR,
                  RAW_TYPE_TITLE,
                  RAW_TYPE_CONTENT,
                  RAW_TYPE_MUTED ]),
              value: RAW_TYPE_PRIMARY,
          },
          size: {
              type: oneOf(RAW_SIZE_ARRAY),
              value: RAW_DEFAULT,
          },
          underline: {
              type: RAW_BOOLEAN,
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          href: {
              type: RAW_STRING,
          },
          target: {
              type: RAW_STRING,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      }
  });

  var template$17 = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-list-header'},$6={class:'bell-list-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'$slot_header',_U.$slot_header).value?(_T.push({children:function(){var _T=[];($0={children:_l('$slot_header'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}),_T.push({children:function(){var _T=[];($0={children:_l('$slot_children')||function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,slots:{$slot_children:function(_R){var _T=[];($0={children:_m('$slot_empty',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}},tag:'ListEmpty',type:4});return _T.length?_T:$1}(),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3})):($0={children:_l('$slot_children')||function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,slots:{$slot_children:function(_R){var _T=[];($0={children:_m('$slot_empty',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}},tag:'ListEmpty',type:4});return _T.length?_T:$1}(),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));_r(_Q,'loading',_U.loading).value?_T.push({context:_G,isComponent:$3,operator:_C,props:{fixed:$3,size:'large'},tag:'Spin',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-list'+(_r(_Q,'size',_U.size).value?' bell-list-'+_y(_r(_Q,'size',_U.size).value):'')+(_r(_Q,'simple',_U.simple).value?' bell-list-simple':' bell-list-bordered')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var template$18 = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-list-empty'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push({children:function(){var _T=[];($0={children:_l('$slot_children')||function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,slots:{$slot_children:function(_R){var _T=[];_T.push({isPure:$3,operator:_z,text:'暂无数据',type:1});return _T.length?_T:$1}},tag:'Empty',type:4});return _T.length?_T:$1}(),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3});}})();

  var template$19 = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-empty'+(_r(_Q,'simple',_U.simple).value?' bell-empty-simple':'')+(_r(_Q,'$slot_children',_U.$slot_children).value?' bell-empty-with-content':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Empty = Yox.define({
      template: template$19,
      name: 'bell-Empty',
      propTypes: {
          simple: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      }
  });

  var ListEmpty = Yox.define({
      template: template$18,
      components: {
          Empty: Empty,
      }
  });

  var List = Yox.define({
      template: template$17,
      name: 'bell-List',
      propTypes: {
          simple: {
              type: RAW_BOOLEAN,
          },
          loading: {
              type: RAW_BOOLEAN,
          },
          clickable: {
              type: RAW_BOOLEAN,
          },
          size: {
              type: oneOf(RAW_SIZE_ARRAY),
              value: RAW_DEFAULT,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      components: {
          Spin: Spin,
          ListEmpty: ListEmpty,
      }
  });

  var template$1a = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;_r(_Q,'clickable',_U.clickable).value?_n(_S,'events','click',_f('click','click.listItem','click','','click','listItem')):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-list-item'+(_r(_Q,'clickable',_U.clickable).value?' bell-list-item-clickable':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var ListItem = Yox.define({
      template: template$1a,
      name: 'bell-ListItem',
      propTypes: {
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function (options) {
          var list = findComponentUpward(options.parent, 'bell-List');
          return {
              clickable: list
                  ? list.get('clickable')
                  : FALSE
          };
      }
  });

  var template$1b = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-result-icon'},$6={class:'bell-result-title'},$7={class:'bell-result-sub-title'},$8={class:'bell-result-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push({children:function(){var _T=[];($0={children:_l('$slot_icon')||function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-result-status-icon',name:_r(_Q,'status',_U.status).value===_r(_Q,'RAW_TYPE_SUCCESS',_U.RAW_TYPE_SUCCESS).value?'checkbox-circle-fill':_r(_Q,'status',_U.status).value===_r(_Q,'RAW_TYPE_WARNING',_U.RAW_TYPE_WARNING).value?'error-warning-fill':_r(_Q,'status',_U.status).value===_r(_Q,'RAW_TYPE_ERROR',_U.RAW_TYPE_ERROR).value?'close-circle-fill':'information-fill'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3});_r(_Q,'title',_U.title).value?_T.push({context:_G,nativeAttrs:$6,operator:_B,tag:'div',text:_y(_r(_Q,'title',_U.title).value),type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'subTitle',_U.subTitle).value?_T.push({context:_G,nativeAttrs:$7,operator:_B,tag:'div',text:_y(_r(_Q,'subTitle',_U.subTitle).value),type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'$slot_extra',_U.$slot_extra).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_extra'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$8,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-result'+(_r(_Q,'status',_U.status).value?' bell-result-'+_y(_r(_Q,'status',_U.status).value):'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Result = Yox.define({
      template: template$1b,
      name: 'bell-Result',
      propTypes: {
          title: {
              type: RAW_STRING,
          },
          subTitle: {
              type: RAW_STRING,
          },
          status: {
              type: oneOf(RAW_STATUS_ARRAY),
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          return {
              RAW_TYPE_INFO: RAW_TYPE_INFO,
              RAW_TYPE_SUCCESS: RAW_TYPE_SUCCESS,
              RAW_TYPE_WARNING: RAW_TYPE_WARNING,
              RAW_TYPE_ERROR: RAW_TYPE_ERROR,
          };
      },
      components: {
          Icon: Icon,
      }
  });

  var template$1c = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-exception-title'},$6={class:'bell-exception-sub-title'},$7={class:'bell-exception-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'title',_U.title).value?_T.push({context:_G,nativeAttrs:$5,operator:_B,tag:'div',text:_y(_r(_Q,'title',_U.title).value),type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'subTitle',_U.subTitle).value?_T.push({context:_G,nativeAttrs:$6,operator:_B,tag:'div',text:_y(_r(_Q,'subTitle',_U.subTitle).value),type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'$slot_extra',_U.$slot_extra).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_extra'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$7,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-exception'+(_r(_Q,'status',_U.status).value?' bell-exception-'+_y(_r(_Q,'status',_U.status).value):'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Exception = Yox.define({
      template: template$1c,
      name: 'bell-Exception',
      propTypes: {
          title: {
              type: RAW_STRING,
          },
          subTitle: {
              type: RAW_STRING,
          },
          status: {
              type: oneOf([403, 404, 500]),
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
  });

  var template$1d = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-divider-text'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'$slot_children',_U.$slot_children).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-divider'+(_r(_Q,'vertical',_U.vertical).value?' bell-divider-vertical':' bell-divider-horizontal')+(_r(_Q,'dashed',_U.dashed).value?' bell-divider-dashed':'')+(_r(_Q,'align',_U.align).value?' bell-divider-'+_y(_r(_Q,'align',_U.align).value):'')+(_r(_Q,'$slot_children',_U.$slot_children).value?' bell-divider-with-text':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Divider = Yox.define({
      template: template$1d,
      name: 'bell-Divider',
      propTypes: {
          vertical: {
              type: RAW_BOOLEAN,
          },
          dashed: {
              type: RAW_BOOLEAN,
          },
          align: {
              type: oneOf([RAW_CENTER, RAW_LEFT, RAW_RIGHT]),
              value: RAW_CENTER,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
  });

  var template$1e = (function(){var $0,$1=void 0,$3=!0,$5={viewBox:'0 0 100 100'},$6={class:'bell-circle-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;return _S}({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({context:_G,isSvg:$3,nativeAttrs:{d:_r(_Q,'path',_U.path).value,'fill-opacity':'0',stroke:_r(_Q,'trailColor',_U.trailColor).value,'stroke-width':_r(_Q,'trailWidth',_U.trailWidth).value},nativeStyles:_b(_r(_Q,'trailStyle',_U.trailStyle).value),operator:_B,tag:'path',type:3});_T.push({context:_G,isSvg:$3,nativeAttrs:{d:_r(_Q,'path',_U.path).value,'fill-opacity':'0',stroke:_r(_Q,'strokeColor',_U.strokeColor).value,'stroke-linecap':_r(_Q,'strokeLinecap',_U.strokeLinecap).value,'stroke-width':_r(_Q,'strokeWidth',_U.strokeWidth).value},nativeStyles:_b(_r(_Q,'pathStyle',_U.pathStyle).value),operator:_B,tag:'path',type:3});return _T.length?_T:$1}(),context:_G,isSvg:$3,nativeAttrs:$5,operator:_B,tag:'svg',type:3});_r(_Q,'$slot_children',_U.$slot_children).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-circle'+(_r(_Q,'dashboard',_U.dashboard).value?' bell-circle-dashboard':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Circle = Yox.define({
      template: template$1e,
      name: 'bell-Circle',
      propTypes: {
          dashboard: {
              type: RAW_BOOLEAN,
          },
          percent: {
              type: RAW_NUMERIC,
              value: 0,
          },
          size: {
              type: RAW_NUMERIC,
              value: 120,
          },
          strokeWidth: {
              type: RAW_NUMERIC,
              value: 6,
          },
          strokeColor: {
              type: RAW_STRING,
              value: '#2db7f5',
          },
          strokeLinecap: {
              type: oneOf(['square', 'round']),
              value: 'round',
          },
          trailWidth: {
              type: RAW_NUMERIC,
              value: 5,
          },
          trailColor: {
              type: RAW_STRING,
              value: '#eaeef2',
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      computed: {
          computedStrokeWidth: function () {
              return this.get('percent') === 0 && this.get('dashboard')
                  ? 0
                  : this.get('strokeWidth');
          },
          inlineStyle: function () {
              var result = [];
              var size = this.get('size');
              if (size) {
                  result.push({
                      width: toPixel(size),
                      height: toPixel(size),
                  });
              }
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          },
          trailStyle: function () {
              if (this.get('dashboard')) {
                  var len = this.get('len');
                  return {
                      strokeDasharray: len - 75 + "px " + len + "px",
                      strokeDashoffset: "-" + 75 / 2 + "px",
                      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
                  };
              }
          },
          pathStyle: function () {
              var percent = this.get('percent');
              var len = this.get('len');
              if (this.get('dashboard')) {
                  return {
                      strokeDasharray: (percent / 100) * (len - 75) + "px " + len + "px",
                      strokeDashoffset: "-" + 75 / 2 + "px",
                      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .6s ease 0s, stroke .6s, stroke-width .06s ease .6s'
                  };
              }
              return {
                  strokeDasharray: len + "px " + len + "px",
                  strokeDashoffset: ((100 - percent) / 100 * len) + "px",
                  transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
              };
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
  });

  var template$1f = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-popconfirm-title'},$6={class:'bell-popconfirm-footer'},$7={class:'bell-popover-arrow'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push({context:_G,isComponent:$3,operator:_C,props:{placement:_r(_Q,'placement',_U.placement).value,showArrow:$3,trigger:_r(_Q,'RAW_CLICK',_U.RAW_CLICK).value,visible:_r(_Q,'isVisible',_U.isVisible).value},ref:'popover',slots:{$slot_children:function(_R){var _T=[];($0={children:_m('$slot_children',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1},$slot_overlay:function(_R){var _T=[];_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push(function(_S){_r(_Q,'contentStyle',_U.contentStyle).value?_S.nativeStyles=_b(_r(_Q,'contentStyle',_U.contentStyle).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'showIcon',_U.showIcon).value?_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{className:'bell-popconfirm-status-icon',name:_r(_Q,'status',_U.status).value===_r(_Q,'RAW_TYPE_SUCCESS',_U.RAW_TYPE_SUCCESS).value?'checkbox-circle-fill':_r(_Q,'status',_U.status).value===_r(_Q,'RAW_TYPE_WARNING',_U.RAW_TYPE_WARNING).value?'error-warning-fill':_r(_Q,'status',_U.status).value===_r(_Q,'RAW_TYPE_ERROR',_U.RAW_TYPE_ERROR).value?'close-circle-fill':'information-fill'},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_T.push({context:_G,nativeAttrs:$5,operator:_B,tag:'div',text:_y(_r(_Q,'title',_U.title).value),type:3});_T.push({children:function(){var _T=[];_T.push({context:_G,events:{click:_e('click','handleCancelClick()','click','','handleCancelClick',$1,$3)},isComponent:$3,operator:_C,parent:_R,props:{size:'small'},slots:{$slot_children:function(_R){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_r(_Q,'cancelText',_U.cancelText).value),type:1});return _T.length?_T:$1}},tag:'Button',type:4});_T.push({context:_G,events:{click:_e('click','handleOkClick()','click','','handleOkClick',$1,$3)},isComponent:$3,operator:_C,parent:_R,props:{size:'small',type:_r(_Q,'okType',_U.okType).value||_r(_Q,'status',_U.status).value},slots:{$slot_children:function(_R){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_r(_Q,'okText',_U.okText).value),type:1});return _T.length?_T:$1}},tag:'Button',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-popover-content'},operator:_B,tag:'div',type:3}));_T.push({context:_G,isPure:$3,isStatic:$3,nativeAttrs:$7,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-popconfirm'+(_r(_Q,'status',_U.status).value?' bell-popconfirm-'+_y(_r(_Q,'status',_U.status).value):'')+(_r(_Q,'showIcon',_U.showIcon).value?' bell-popconfirm-with-icon':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));return _T.length?_T:$1}},tag:'Popover',type:4});}})();

  var Popconfirm = Yox.define({
      template: template$1f,
      name: 'bell-Popconfirm',
      propTypes: {
          status: {
              type: oneOf(RAW_STATUS_ARRAY),
              value: RAW_TYPE_WARNING,
          },
          showIcon: {
              type: RAW_BOOLEAN,
          },
          title: {
              type: RAW_STRING,
          },
          okText: {
              type: RAW_STRING,
              value: '确定',
          },
          okType: {
              type: RAW_STRING,
          },
          cancelText: {
              type: RAW_STRING,
              value: '取消',
          },
          maxWidth: {
              type: RAW_NUMERIC,
          },
          maxHeight: {
              type: RAW_NUMERIC,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          return {
              RAW_CLICK: RAW_CLICK,
              RAW_TYPE_INFO: RAW_TYPE_INFO,
              RAW_TYPE_SUCCESS: RAW_TYPE_SUCCESS,
              RAW_TYPE_WARNING: RAW_TYPE_WARNING,
              RAW_TYPE_ERROR: RAW_TYPE_ERROR,
              isVisible: FALSE,
          };
      },
      computed: {
          contentStyle: function () {
              var customStyle = {};
              var maxWidth = this.get('maxWidth');
              var maxHeight = this.get('maxHeight');
              if (maxWidth) {
                  customStyle.maxWidth = toPixel(maxWidth);
              }
              if (maxHeight) {
                  customStyle.maxHeight = toPixel(maxHeight);
              }
              if (Yox.object.keys(customStyle).length > 0) {
                  return customStyle;
              }
          }
      },
      events: {
          open: {
              listener: function (event) {
                  event.stop();
                  this.set('isVisible', TRUE);
              },
              ns: 'popover',
          },
          close: {
              listener: function (event) {
                  event.stop();
                  this.set('isVisible', FALSE);
              },
              ns: 'popover',
          }
      },
      methods: {
          handleCancelClick: function (event) {
              event.stop();
              fireClickEvent(event, TRUE);
              this.set('isVisible', FALSE);
              this.fire({
                  type: 'cancel',
                  ns: 'popconfirm',
              });
          },
          handleOkClick: function (event) {
              event.stop();
              fireClickEvent(event, TRUE);
              this.set('isVisible', FALSE);
              this.fire({
                  type: 'ok',
                  ns: 'popconfirm',
              });
          }
      },
      components: {
          Button: Button,
          Popover: Popover,
      },
  });

  var template$1g = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-progress-text'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'inside',_U.inside).value?_T.push({context:_G,isComponent:$3,operator:_C,props:{inside:_r(_Q,'inside',_U.inside).value,percent:_r(_Q,'percent',_U.percent).value,thickness:_r(_Q,'thickness',_U.thickness).value,vertical:_r(_Q,'vertical',_U.vertical).value},slots:{$slot_children:function(_R){var _T=[];($0={children:_m('$slot_children',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}},tag:'ProgressTrack',type:4}):(_T.push({context:_G,isComponent:$3,operator:_C,props:{inside:_r(_Q,'inside',_U.inside).value,percent:_r(_Q,'percent',_U.percent).value,thickness:_r(_Q,'thickness',_U.thickness).value,vertical:_r(_Q,'vertical',_U.vertical).value},tag:'ProgressTrack',type:4}),_r(_Q,'$slot_children',_U.$slot_children).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2}));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-progress'+(_r(_Q,'status',_U.status).value?' bell-progress-'+_y(_r(_Q,'status',_U.status).value):'')+(_r(_Q,'active',_U.active).value?' bell-progress-active':'')+(_r(_Q,'inside',_U.inside).value?' bell-progress-inside':' bell-progress-outside')+(_r(_Q,'vertical',_U.vertical).value?' bell-progress-vertical':' bell-progress-horizontal')+(!_r(_Q,'inside',_U.inside).value&&!_r(_Q,'vertical',_U.vertical).value&&_r(_Q,'$slot_children',_U.$slot_children).value?' bell-progress-with-text':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var template$1h = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-progress-text'},$6={class:'bell-progress-bar'},$7={class:'bell-progress-track'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_r(_Q,'inside',_U.inside).value?_r(_Q,'$slot_children',_U.$slot_children).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,nativeStyles:_b(_r(_Q,'barStyle',_U.barStyle).value),operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$7,nativeStyles:_b(_r(_Q,'inlineStyle',_U.inlineStyle).value),operator:_B,tag:'div',type:3});}})();

  var ProgressTrack = Yox.define({
      template: template$1h,
      propTypes: {
          vertical: {
              type: RAW_BOOLEAN,
          },
          inside: {
              type: RAW_BOOLEAN,
          },
          thickness: {
              type: RAW_NUMERIC,
          },
          percent: {
              type: RAW_NUMERIC,
          },
      },
      computed: {
          inlineStyle: function () {
              var vertical = this.get('vertical');
              var thickness = this.get('thickness');
              if (vertical) {
                  return {
                      width: toPixel(thickness)
                  };
              }
              return {
                  height: toPixel(thickness)
              };
          },
          barStyle: function () {
              var vertical = this.get('vertical');
              var thickness = this.get('thickness');
              var percent = this.get('percent');
              if (vertical) {
                  return {
                      width: toPixel(thickness),
                      height: toPercent(percent),
                  };
              }
              return {
                  width: toPercent(percent),
                  height: toPixel(thickness),
                  lineHeight: toPixel(thickness),
              };
          },
      }
  });

  var Progress = Yox.define({
      template: template$1g,
      name: 'bell-Progress',
      propTypes: {
          percent: {
              type: RAW_NUMERIC,
              value: 0,
          },
          status: {
              type: oneOf(RAW_STATUS_ARRAY),
          },
          thickness: {
              type: RAW_STRING,
              value: 8,
          },
          inside: {
              type: RAW_BOOLEAN,
          },
          vertical: {
              type: RAW_BOOLEAN,
          },
          active: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      components: {
          ProgressTrack: ProgressTrack,
      }
  });

  var template$1i = (function(){var $0,$1=void 0,$3=!0,$5={type:'hidden'},$6={class:'bell-rate-text'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;!_r(_Q,'readOnly',_U.readOnly).value?_n(_S,'events','mouseleave',_e('mouseleave','handleLeave()','mouseleave','','handleLeave')):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,model:_d(_r(_Q,'value',_U.value)),nativeAttrs:$5,operator:_B,tag:'input',type:3});_k(1,_r(_Q,'count',_U.count).value,$3,function(_Q,_U,_V,_W){_T.push(function(_S){!_u(_Q,0,'readOnly').value?(_n(_S,'events','mousemove.native',_e('mousemove.native','handleMove($event, this)','mousemove','native','handleMove',{execute:function(_X,_Y){return [_X,_U]}},$1,$3)),_n(_S,'events','click.native',_e('click.native','handleClick($event, this)','click','native','handleClick',{execute:function(_X,_Y){return [_X,_U]}},$1,$3))):$1;return _S}({context:_G,isComponent:$3,operator:_C,props:{className:'bell-rate-icon-full'+(_u(_Q,0,'activeValue').value-_U>=0?' bell-rate-icon-active':''),name:_u(_Q,0,'iconName').value,size:_u(_Q,0,'iconSize').value},slots:{$slot_children:function(_R){var _T=[];_u(_Q,0,'half').value?_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{className:'bell-rate-icon-half'+(_u(_Q,0,'activeValue').value-_U>=-0.5?' bell-rate-icon-active':''),name:_u(_Q,0,'iconName').value,size:_u(_Q,0,'iconSize').value},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}},tag:'Icon',type:4}));});_r(_Q,'$slot_children',_U.$slot_children).value||_r(_Q,'texts',_U.texts).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_children')||function(){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_q(_Q,_Q.length-1,['texts',_r(_Q,'activeValue',_U.activeValue).value-1].join('.'),$3).value),type:1});return _T.length?_T:$1}(),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-rate'+(_r(_Q,'type',_U.type).value?' bell-rate-'+_y(_r(_Q,'type',_U.type).value):'')+(_r(_Q,'readOnly',_U.readOnly).value?' bell-rate-dead':' bell-rate-live')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Rate = Yox.define({
      template: template$1i,
      name: 'bell-Rate',
      propTypes: {
          count: {
              type: RAW_NUMERIC,
              value: 5,
          },
          value: {
              type: RAW_NUMERIC,
              value: 0,
          },
          half: {
              type: RAW_BOOLEAN,
          },
          readOnly: {
              type: RAW_BOOLEAN,
          },
          texts: {
              type: RAW_ARRAY,
          },
          type: {
              type: oneOf(RAW_TYPE_ARRAY),
              value: RAW_TYPE_WARNING,
          },
          iconName: {
              type: RAW_STRING,
              value: 'star-fill',
          },
          iconSize: {
              type: RAW_NUMERIC,
              value: 18,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          return {
              hoverValue: -1,
          };
      },
      computed: {
          activeValue: function () {
              var hoverValue = this.get('hoverValue');
              return hoverValue < 0
                  ? this.get('value')
                  : hoverValue;
          }
      },
      methods: {
          handleMove: function (event, value) {
              var mouseEvent = event.originalEvent;
              if (this.hoverOnHalfIcon(mouseEvent.target)) {
                  value -= 0.5;
              }
              this.set({
                  hoverValue: value
              });
          },
          handleLeave: function () {
              var value = this.get('value');
              this.set({
                  hoverValue: value >= 0 ? value : -1
              });
          },
          handleClick: function (event, value) {
              var clickEvent = event.originalEvent;
              if (this.hoverOnHalfIcon(clickEvent.target)) {
                  value -= 0.5;
              }
              this.set('value', value);
              this.fire({
                  type: 'change',
                  ns: 'rate',
              }, {
                  value: value
              });
          },
          hoverOnHalfIcon: function (element) {
              return Yox.string.has(element.className, 'half');
          }
      },
      components: {
          Icon: Icon,
      }
  });

  var template$1j = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-tabs-bar'},$6={class:'bell-tabs-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_j(_r(_Q,'tabs',_U.tabs),function(_Q,_U,_V,_W){_T.push(function(_S){!_t(_Q,'disabled',_U.disabled).value?_n(_S,'events','click',_e('click','handleClickTab(this)','click','','handleClickTab',{execute:function(_X,_Y){return [_s(_Q,_Q.length-1).value]}})):$1;return _S}({children:function(){var _T=[];_t(_Q,'icon',_U.icon).value?_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-tabs-tab-icon',name:_t(_Q,'icon',_U.icon).value},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_T.push({isPure:$3,operator:_z,text:_y(_t(_Q,'label',_U.label).value),type:1});_u(_Q,_Q.length-2,'closable').value?_T.push({context:_G,events:{'click.native':_e('click.native','handleCloseTab(this)','click','native','handleCloseTab',{execute:function(_X,_Y){return [_s(_Q,_Q.length-1).value]}},$1,$3)},isComponent:$3,operator:_C,props:{className:'bell-tabs-tab-close-icon',name:'close-line'},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-tabs-tab'+(_t(_Q,'disabled',_U.disabled).value?' bell-tabs-tab-disabled':' bell-tabs-tab-enabled')+(_t(_Q,'name',_U.name).value===_u(_Q,_Q.length-2,'value').value?' bell-tabs-tab-active':'')},operator:_B,tag:'div',type:3}));});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-tabs-nav'+(_r(_Q,'closable',_U.closable).value?' bell-tabs-nav-closable':'')},operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3});_T.push({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-tabs'+(_r(_Q,'type',_U.type).value?' bell-tabs-'+_y(_r(_Q,'type',_U.type).value):'')+(_r(_Q,'size',_U.size).value?' bell-tabs-'+_y(_r(_Q,'size',_U.size).value):'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Tabs = Yox.define({
      template: template$1j,
      name: 'bell-Tabs',
      propTypes: {
          type: {
              type: oneOf(['card']),
          },
          size: {
              type: oneOf([RAW_DEFAULT, RAW_SMALL, RAW_LARGE]),
              value: RAW_DEFAULT,
          },
          closable: {
              type: RAW_BOOLEAN,
          },
          value: {
              type: RAW_STRING,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          return {
              tabs: [],
          };
      },
      events: {
          add: {
              listener: function (event, data) {
                  if (event.phase !== Yox.Event.PHASE_UPWARD) {
                      return;
                  }
                  var target = event.target;
                  var tabName = target.get('name');
                  this.append('tabs', {
                      name: tabName,
                      icon: target.get('icon'),
                      label: target.get('label'),
                      disabled: target.get('disabled'),
                  });
                  if (data.isActive) {
                      this.set({
                          value: tabName,
                      });
                  }
              },
              ns: 'tabPanel',
          },
          remove: {
              listener: function (event) {
                  if (event.phase !== Yox.Event.PHASE_UPWARD) {
                      return;
                  }
                  var target = event.target;
                  var tabName = target.get('name');
                  var tabs = this.get('tabs');
                  var newTabs = tabs.filter(function (item) {
                      return item.name !== tabName;
                  });
                  this.set({
                      tabs: newTabs
                  });
                  if (this.get('value') === tabName) {
                      this.set('value', newTabs[0] ? newTabs[0].name : UNDEFINED);
                  }
              },
              ns: 'tabPanel',
          },
          update: {
              listener: function (event) {
                  if (event.phase !== Yox.Event.PHASE_UPWARD) {
                      return;
                  }
                  var me = this;
                  var target = event.target;
                  var tabName = target.get('name');
                  var tabs = me.get('tabs');
                  Yox.array.each(tabs, function (item, index) {
                      if (item.name === tabName) {
                          me.set("tabs." + index, {
                              name: tabName,
                              icon: target.get('icon'),
                              label: target.get('label'),
                              disabled: target.get('disabled'),
                          });
                          return FALSE;
                      }
                  });
              },
              ns: 'tabPanel',
          }
      },
      watchers: {
          value: function (value) {
              this.fire({
                  type: 'change',
                  ns: 'tabs',
              }, { value: value }, TRUE);
          },
      },
      methods: {
          handleCloseTab: function (tab) {
              this.fire({
                  type: 'tabRemove',
                  ns: 'tabs',
              }, {
                  name: tab.name
              });
          },
          handleClickTab: function (tab) {
              this.set({
                  value: tab.name,
              });
          }
      },
      components: {
          Icon: Icon,
      }
  });

  var template$1k = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-tabs-panel'+(_r(_Q,'isActive',_U.isActive).value?' bell-tabs-panel-active':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var TabPanel = Yox.define({
      template: template$1k,
      name: 'bell-TabPanel',
      propTypes: {
          name: {
              type: RAW_STRING,
          },
          icon: {
              type: RAW_STRING,
          },
          label: {
              type: RAW_STRING,
              required: TRUE,
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          return {
              isActive: FALSE,
          };
      },
      watchers: {
          name: function () {
              this.updatePanel();
          },
          icon: function () {
              this.updatePanel();
          },
          label: function () {
              this.updatePanel();
          },
          disabled: function () {
              this.updatePanel();
          },
      },
      events: {
          change: {
              listener: function (_, data) {
                  this.set({
                      isActive: this.get('name') == data.value
                  });
              },
              ns: 'tabs',
          }
      },
      methods: {
          updatePanel: function () {
              this.fire({
                  type: 'update',
                  ns: 'tabPanel',
              });
          }
      },
      afterMount: function () {
          var tabs = findComponentUpward(this.$parent, 'bell-Tabs');
          var index = Yox.array.indexOf(tabs.$children, this);
          var name = this.get('name');
          if (name == NULL) {
              name = '' + index;
              this.set('name', name);
          }
          var value = tabs.get('value');
          if (value == NULL && index === 0) {
              value = name;
          }
          var isActive = value === name;
          this.set('isActive', isActive);
          this.fire({
              type: 'add',
              ns: 'tabPanel',
          }, {
              isActive: isActive,
          });
      },
      beforeDestroy: function () {
          this.fire({
              type: 'remove',
              ns: 'tabPanel',
          });
      }
  });

  var template$1l = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push({context:_G,isComponent:$3,operator:_C,props:{gap:'5',placement:_r(_Q,'placement',_U.placement).value,trigger:_r(_Q,'trigger',_U.trigger).value,visible:_r(_Q,'visible',_U.visible).value},ref:'popover',slots:{$slot_children:function(_R){var _T=[];($0={children:_m('$slot_children',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1},$slot_overlay:function(_R){var _T=[];_T.push(function(_S){_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;return _S}({children:function(){var _T=[];($0={children:_m('$slot_overlay',_R),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-dropdown-overlay'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));return _T.length?_T:$1}},tag:'Popover',type:4});}})();

  var Dropdown = Yox.define({
      template: template$1l,
      name: 'bell-Dropdown',
      propTypes: {
          placement: {
              type: oneOf(RAW_PLACEMENT_ARRAY),
              value: RAW_BOTTOM,
          },
          trigger: {
              type: oneOf([RAW_HOVER, RAW_CLICK, RAW_CUSTOM]),
              value: RAW_HOVER,
          },
          visible: {
              type: RAW_BOOLEAN,
          },
          maxHeight: {
              type: RAW_NUMERIC,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      computed: {
          inlineStyle: function () {
              var result = [];
              var maxHeight = this.get('maxHeight');
              if (maxHeight) {
                  result.push({
                      maxHeight: toPixel(maxHeight)
                  });
              }
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          },
      },
      events: {
          click: {
              listener: function (event) {
                  event.stop();
                  fireClickEvent(event, TRUE);
                  this.fire({
                      type: 'close',
                      ns: 'dropdown',
                  });
              },
              ns: 'dropdownItem',
          },
          open: {
              listener: function (event) {
                  event.stop();
                  this.fire({
                      type: 'open',
                      ns: 'dropdown',
                  });
              },
              ns: 'popover',
          },
          close: {
              listener: function (event) {
                  event.stop();
                  this.fire({
                      type: 'close',
                      ns: 'dropdown',
                  });
              },
              ns: 'popover',
          },
          outside: {
              listener: function (event) {
                  event.stop();
                  this.fire({
                      type: 'outside',
                      ns: 'dropdown',
                  });
              },
              ns: 'popover',
          }
      },
      methods: {
          refresh: function () {
              var popover = this.$refs.popover;
              popover.refreshOverlayRect();
          },
      },
      components: {
          Popover: Popover,
      }
  });

  var template$1m = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;!_r(_Q,'disabled',_U.disabled).value?_n(_S,'events','click',_f('click','click.dropdownItem','click','','click','dropdownItem')):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-dropdown-item'+(_r(_Q,'divided',_U.divided).value?' bell-dropdown-item-divided':'')+(_r(_Q,'active',_U.active).value?' bell-dropdown-item-active':'')+(_r(_Q,'disabled',_U.disabled).value?' bell-dropdown-item-disabled':' bell-dropdown-item-enabled')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var DropdownItem = Yox.define({
      template: template$1m,
      name: 'bell-DropdownItem',
      propTypes: {
          name: {
              type: RAW_STRING,
          },
          divided: {
              type: RAW_BOOLEAN,
          },
          disabled: {
              type: RAW_BOOLEAN,
          },
          active: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
  });

  var template$1n = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-dropdown-menu'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var DropdownMenu = Yox.define({
      template: template$1n,
      name: 'bell-DropdownMenu',
      propTypes: {
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
  });

  var template$1o = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-description-title'},$6={class:'bell-description-extra'},$7={class:'bell-description-header'},$8={class:'bell-description-item-label'},$9={class:'bell-description-item-content'},$10={class:'bell-description-item-wrapper'},$11={class:'bell-description-row'},$12={class:'bell-description-table'},$13={class:'bell-description-cell bell-description-item-label'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'title',_U.title).value?_T.push({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$5,operator:_B,tag:'div',text:_y(_r(_Q,'title',_U.title).value),type:3});_r(_Q,'$slot_extra',_U.$slot_extra).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_extra'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:$7,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'simple',_U.simple).value?_T.push({children:function(){var _T=[];_j(_r(_Q,'cells',_U.cells),function(_Q,_U,_V,_W,rowIndex){_T.push({children:function(){var _T=[];_j(_s(_Q,_Q.length-1),function(_Q,_U,_V,_W,colIndex){_T.push(function(_S){_t(_Q,'span',_U.span).value>1?_n(_S,'nativeAttrs','colspan',_o('colspan',_t(_Q,'span',_U.span).value*2-1)):$1;return _S}({children:function(){var _T=[];_T.push({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$8,operator:_B,tag:'div',text:_y(_t(_Q,'label',_U.label).value),type:3});_T.push({children:function(){var _T=[];($0={children:_l('$slot_'+(_t(_Q,'name',_U.name).value)),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$9,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$10,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-description-cell'},operator:_B,tag:'td',type:3}));});return _T.length?_T:$1}(),context:_G,nativeAttrs:$11,operator:_B,tag:'tr',type:3});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$12,operator:_B,tag:'table',type:3}):_T.push({children:function(){var _T=[];_j(_r(_Q,'cells',_U.cells),function(_Q,_U,_V,_W,rowIndex){_T.push({children:function(){var _T=[];_j(_s(_Q,_Q.length-1),function(_Q,_U,_V,_W,colIndex){_T.push({context:_G,nativeAttrs:$13,operator:_B,tag:'td',text:_y(_t(_Q,'label',_U.label).value),type:3});_T.push(function(_S){_t(_Q,'span',_U.span).value>1?_n(_S,'nativeAttrs','colspan',_o('colspan',_t(_Q,'span',_U.span).value*2-1)):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_'+(_t(_Q,'name',_U.name).value)),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-description-cell bell-description-item-content'},operator:_B,tag:'td',type:3}));});return _T.length?_T:$1}(),context:_G,nativeAttrs:$11,operator:_B,tag:'tr',type:3});});return _T.length?_T:$1}(),context:_G,nativeAttrs:$12,operator:_B,tag:'table',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-description'+(_r(_Q,'simple',_U.simple).value?' bell-description-simple':' bell-description-bordered'+(_r(_Q,'size',_U.size).value?' bell-description-'+_y(_r(_Q,'size',_U.size).value):''))+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  function addSlots2Props(instance, children, props, column) {
      var cells = [];
      var columnArray;
      var columnItem;
      var columnSpanSum = 0;
      var index = 0;
      children.forEach(function (vnode) {
          if (vnode.tag === 'DescriptionItem') {
              var _a = vnode.props, label = _a.label, span = _a.span;
              var name = 'cell' + index++;
              if (!columnArray) {
                  columnArray = [];
                  cells.push(columnArray);
              }
              var spanCount = toNumber(span, 1);
              if (spanCount > column - columnSpanSum) {
                  spanCount = column - columnSpanSum;
              }
              columnItem = {
                  label: label,
                  name: name,
                  span: spanCount,
              };
              columnArray.push(columnItem);
              props[RAW_SLOT_PREFIX + name] = vnode.slots[RAW_SLOT_CHILDREN](instance);
              columnSpanSum += columnItem.span;
              if (columnSpanSum >= column) {
                  columnArray = columnItem = UNDEFINED;
                  columnSpanSum = 0;
              }
          }
      });
      if (columnItem && columnArray) {
          columnItem.span = column - columnArray.length + 1;
      }
      props.cells = cells;
  }

  var COLUMN_DEFAULT = 3;
  var Description = Yox.define({
      template: template$1o,
      name: 'bell-Description',
      propTypes: {
          title: {
              type: RAW_STRING,
          },
          simple: {
              type: RAW_BOOLEAN,
          },
          size: {
              type: oneOf(RAW_SIZE_ARRAY),
              value: RAW_DEFAULT,
          },
          column: {
              type: RAW_NUMERIC,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          var data = {};
          var children = this.get(RAW_SLOT_CHILDREN);
          if (children) {
              addSlots2Props(this, children, data, this.get('column') || COLUMN_DEFAULT);
          }
          return data;
      },
      beforePropsUpdate: function (props) {
          var children = props[RAW_SLOT_CHILDREN];
          if (!children) {
              return;
          }
          addSlots2Props(this, children, props, props.column || COLUMN_DEFAULT);
      }
  });

  var DescriptionItem = Yox.define({
      name: 'bell-DescriptionItem',
      propTypes: {
          label: {
              type: RAW_STRING,
          },
          span: {
              type: RAW_NUMERIC,
          }
      },
  });

  var template$1p = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-thumbnail-placeholder'},$6={class:'bell-thumbnail-action'},$7={class:'bell-thumbnail-mask'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'url',_U.url).value||_r(_Q,'src',_U.src).value?_T.push(function(_S){_r(_Q,'url',_U.url).value?_n(_S,'nativeAttrs','src',_r(_Q,'formatUrl',_U.formatUrl).value?_x(_w(_r(_Q,'formatUrl',_U.formatUrl,_H&&_H.formatUrl||_I.formatUrl).value,_G,[{height:_r(_Q,'customHeight',_U.customHeight).value,responsive:$3,url:_r(_Q,'url',_U.url).value,width:_r(_Q,'customWidth',_U.customWidth).value}])).value:_r(_Q,'url',_U.url).value):_n(_S,'nativeAttrs','src',_r(_Q,'src',_U.src).value);_r(_Q,'srcSet',_U.srcSet).value?_n(_S,'nativeAttrs','srcset',_r(_Q,'srcSet',_U.srcSet).value):$1;_r(_Q,'alt',_U.alt).value?_n(_S,'nativeAttrs','alt',_r(_Q,'alt',_U.alt).value):$1;return _S}({context:_G,events:{error:_f('error','error.thumbnail','error','','error','thumbnail')},nativeAttrs:{class:'bell-thumbnail-image',draggable:'false'},operator:_B,tag:'img',type:3})):_T.push({children:function(){var _T=[];($0={children:_l('$slot_placeholder'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3});_r(_Q,'showZoom',_U.showZoom).value||_r(_Q,'showUpload',_U.showUpload).value||_r(_Q,'showDownload',_U.showDownload).value||_r(_Q,'showDelete',_U.showDelete).value?_T.push({children:function(){var _T=[];_r(_Q,'showZoom',_U.showZoom).value?_T.push({children:function(){var _T=[];_T.push({context:_G,events:{'click.native':_f('click.native','zoom.thumbnail','click','native','zoom','thumbnail',$1,$3)},isComponent:$3,operator:_C,props:{name:'zoom-in-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'showUpload',_U.showUpload).value?_T.push({context:_G,isComponent:$3,operator:_C,props:{accept:_r(_Q,'accept',_U.accept).value,beforeUpload:_r(_Q,'beforeUpload',_U.beforeUpload).value,className:'bell-thumbnail-action',upload:_r(_Q,'uploadImage',_U.uploadImage).value},slots:{$slot_children:function(_R){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,parent:_R,props:{name:'upload-2-line'},tag:'Icon',type:4});return _T.length?_T:$1}},tag:'Upload',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'showDownload',_U.showDownload).value?_T.push({children:function(){var _T=[];_T.push({context:_G,events:{'click.native':_f('click.native','download.thumbnail','click','native','download','thumbnail',$1,$3)},isComponent:$3,operator:_C,props:{name:'download-2-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'showDelete',_U.showDelete).value?_T.push({children:function(){var _T=[];_T.push({context:_G,events:{'click.native':_f('click.native','delete.thumbnail','click','native','delete','thumbnail',$1,$3)},isComponent:$3,operator:_C,props:{name:'delete-bin-line'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:$7,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'loading',_U.loading).value?_T.push({context:_G,isComponent:$3,operator:_C,props:{fixed:$3,size:'large'},tag:'Spin',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-thumbnail'+(_r(_Q,'simple',_U.simple).value?' bell-thumbnail-simple':' bell-thumbnail-bordered')+(_r(_Q,'loading',_U.loading).value?' bell-thumbnail-loading':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Thumbnail = Yox.define({
      template: template$1p,
      name: 'bell-Thumbnail',
      propTypes: {
          width: {
              type: RAW_NUMERIC,
              required: TRUE,
          },
          height: {
              type: RAW_NUMERIC,
              required: TRUE,
          },
          simple: {
              type: RAW_BOOLEAN,
          },
          loading: {
              type: RAW_BOOLEAN,
          },
          showZoom: {
              type: RAW_BOOLEAN,
          },
          showUpload: {
              type: RAW_BOOLEAN,
          },
          showDownload: {
              type: RAW_BOOLEAN,
          },
          showDelete: {
              type: RAW_BOOLEAN,
          },
          url: {
              type: RAW_STRING,
          },
          formatUrl: {
              type: RAW_FUNCTION,
          },
          src: {
              type: RAW_STRING,
          },
          srcSet: {
              type: RAW_STRING,
          },
          alt: {
              type: RAW_STRING,
          },
          accept: {
              type: RAW_STRING,
              value: RAW_IMAGE_ACCEPT,
          },
          beforeUpload: {
              type: RAW_FUNCTION,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          var me = this;
          return {
              uploadImage: function (data) {
                  var onStart = data.onStart, onEnd = data.onEnd;
                  data.onStart = function () {
                      me.set('loading', TRUE);
                      onStart();
                  };
                  data.onEnd = function () {
                      me.set('loading', FALSE);
                      onEnd();
                  };
                  me.fire({
                      type: 'upload',
                      ns: 'thumbnail',
                  }, data);
              },
          };
      },
      computed: {
          customWidth: function () {
              return toNumber(this.get('width'));
          },
          customHeight: function () {
              return toNumber(this.get('height'));
          },
          inlineStyle: function () {
              var result = [];
              var customWidth = this.get('customWidth');
              var customHeight = this.get('customHeight');
              result.push({
                  width: toPixel(customWidth),
                  height: toPixel(customHeight),
                  lineHeight: toPixel(customHeight),
              });
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          },
      },
      components: {
          Icon: Icon,
          Spin: Spin,
          Upload: Upload,
      }
  });

  var template$1q = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-timeline'+(_r(_Q,'pending',_U.pending).value?' bell-timeline-pending':'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Timeline = Yox.define({
      template: template$1q,
      name: 'bell-Timeline',
      propTypes: {
          pending: {
              type: RAW_BOOLEAN,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
  });

  var template$1r = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-timeline-custom'},$6={class:'bell-timeline-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'$slot_dot',_U.$slot_dot).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_dot'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push(function(_S){_r(_Q,'color',_U.color).value?_S.nativeStyles={borderColor:_r(_Q,'color',_U.color).value}:$1;return _S}({context:_G,nativeAttrs:{class:'bell-timeline-dot'},operator:_B,tag:'div',type:3}));_T.push({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-timeline-item'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var TimelineItem = Yox.define({
      template: template$1r,
      name: 'bell-TimelineItem',
      propTypes: {
          color: {
              type: RAW_STRING,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
  });

  var template$1s = (function(){var $0,$1=void 0,$3=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-form'+(_r(_Q,'inline',_U.inline).value?' bell-form-inline':' bell-form-block')+(_r(_Q,'showColon',_U.showColon).value?' bell-form-colon':'')+(_r(_Q,'labelAlign',_U.labelAlign).value?' bell-form-label-'+_y(_r(_Q,'labelAlign',_U.labelAlign).value):'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var Form = Yox.define({
      template: template$1s,
      name: 'bell-Form',
      propTypes: {
          inline: {
              type: RAW_BOOLEAN,
          },
          showColon: {
              type: RAW_BOOLEAN,
          },
          labelAlign: {
              type: oneOf([RAW_LEFT, RAW_RIGHT, RAW_TOP]),
              value: RAW_RIGHT,
          },
          labelWidth: {
              type: RAW_NUMERIC,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      methods: {
          validate: function (errors) {
              this.fire({
                  type: 'validate',
                  ns: 'form',
              }, { errors: errors }, TRUE);
          },
      }
  });

  var template$1t = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-form-item-controls'},$6={class:'bell-form-item-extra'},$7={class:'bell-form-item-message'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'label',_U.label).value||_r(_Q,'$slot_label',_U.$slot_label).value?_T.push(function(_S){_r(_Q,'itemLabelWidth',_U.itemLabelWidth).value&&_r(_Q,'formLabelAlign',_U.formLabelAlign).value!==_r(_Q,'RAW_TOP',_U.RAW_TOP).value?_S.nativeStyles={flex:'0 0 '+_r(_Q,'itemLabelWidth',_U.itemLabelWidth).value+'px'}:$1;return _S}({children:function(){var _T=[];($0={children:_l('$slot_label')||function(){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_r(_Q,'label',_U.label).value),type:1});return _T.length?_T:$1}(),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-form-item-label'+(_r(_Q,'showRequiredMark',_U.showRequiredMark).value?' bell-form-item-label-required':'')},operator:_B,tag:'label',type:3})):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_T.push(function(_S){_r(_Q,'itemLabelWidth',_U.itemLabelWidth).value?_S.nativeStyles={marginLeft:_r(_Q,'itemLabelWidth',_U.itemLabelWidth).value+'px'}:$1;return _S}({children:function(){var _T=[];_T.push({children:function(){var _T=[];($0={children:_l('$slot_children'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3});_r(_Q,'extra',_U.extra).value?_T.push({context:_G,html:_y(_x(_w(_r(_Q,'formatMessage',_U.formatMessage,_H&&_H.formatMessage||_I.formatMessage).value,_G,[_r(_Q,'extra',_U.extra).value])).value),nativeAttrs:$6,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'showItemMessage',_U.showItemMessage).value?_T.push({context:_G,html:_y(_x(_w(_r(_Q,'formatMessage',_U.formatMessage,_H&&_H.formatMessage||_I.formatMessage).value,_G,[_r(_Q,'itemMessage',_U.itemMessage).value])).value),nativeAttrs:$7,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-form-item-wrapper'},operator:_B,tag:'div',type:3}));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-form-item'+(_r(_Q,'extra',_U.extra).value?' bell-form-item-with-extra':'')+(_r(_Q,'showItemMessage',_U.showItemMessage).value?' bell-form-item-with-message':'')+(_r(_Q,'adaptive',_U.adaptive).value?' bell-form-item-adaptive':'')+(_r(_Q,'labelAlign',_U.labelAlign).value?' bell-form-item-align-'+_y(_r(_Q,'labelAlign',_U.labelAlign).value):'')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var FormItem = Yox.define({
      template: template$1t,
      name: 'bell-FormItem',
      propTypes: {
          prop: {
              type: RAW_STRING,
          },
          label: {
              type: RAW_STRING,
          },
          showRequiredMark: {
              type: RAW_BOOLEAN,
          },
          labelAlign: {
              type: oneOf([RAW_TOP, RAW_BOTTOM, RAW_MIDDLE]),
          },
          showMessage: {
              type: RAW_BOOLEAN,
              value: TRUE,
          },
          adaptive: {
              type: RAW_BOOLEAN,
          },
          message: {
              type: RAW_STRING,
          },
          extra: {
              type: RAW_STRING,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function (options) {
          var form = findComponentUpward(options.parent, 'bell-Form');
          return {
              RAW_TOP: RAW_TOP,
              error: UNDEFINED,
              itemLabelWidth: form.get('labelWidth'),
              formLabelAlign: form.get('labelAlign'),
          };
      },
      computed: {
          itemMessage: function () {
              return this.get('error') || this.get('message');
          },
          showItemMessage: function () {
              return this.get('showMessage') && this.get('itemMessage');
          }
      },
      filters: {
          formatMessage: function (msg) {
              return msg.replace(/\n/g, '<br>');
          }
      },
      events: {
          validate: {
              listener: function (_, data) {
                  var errors = data.errors;
                  this.set('error', errors
                      ? errors[this.get('prop')]
                      : UNDEFINED);
              },
              ns: 'form',
          }
      }
  });

  var template$1u = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-dialog-header'},$6={class:'bell-dialog-body'},$7={class:'bell-dialog-footer'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_r(_Q,'visible',_U.visible).value?($0={children:function(){var _T=[];_T.push(function(_S){_r(_Q,'style',_U.style).value?_S.nativeStyles=_b(_r(_Q,'style',_U.style).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'showMask',_U.showMask).value?_T.push(function(_S){_r(_Q,'maskClosable',_U.maskClosable).value?_n(_S,'events','click',_e('click','close()','click','','close')):$1;return _S}({context:_G,nativeAttrs:{class:'bell-dialog-mask'},operator:_B,tag:'div',type:3})):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_T.push(function(_S){_r(_Q,'wrapperStyle',_U.wrapperStyle).value?_S.nativeStyles=_b(_r(_Q,'wrapperStyle',_U.wrapperStyle).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'title',_U.title).value||_r(_Q,'$slot_title',_U.$slot_title).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_title')||function(){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_r(_Q,'title',_U.title).value),type:1});return _T.length?_T:$1}(),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'$slot_content',_U.$slot_content).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_content'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'$slot_footer',_U.$slot_footer).value?_T.push({children:function(){var _T=[];($0={children:_l('$slot_footer'),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$7,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'closable',_U.closable).value?_T.push({context:_G,events:{'click.native':_e('click.native','close()','click','native','close',$1,$1,$3)},isComponent:$3,operator:_C,props:{className:'bell-dialog-close',name:'close-line'},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-dialog-wrapper'},operator:_B,ref:'wrapper',tag:'div',type:3}));return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-dialog'+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',transition:_c('dialog',_O&&_O.dialog||_P.dialog),type:3}));return _T.length?_T:$1}(),context:_G,isPortal:$3,operator:_E,tag:'portal',type:6},$0.children&&$0.children.length&&_T.push($0)):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});}})();

  var CLASS_VISIBLE$2 = 'bell-dialog-visible';
  var CLASS_FADE$2 = 'bell-dialog-fade';
  var Dialog = Yox.define({
      template: template$1u,
      model: 'visible',
      name: 'bell-Dialog',
      propTypes: {
          title: {
              type: RAW_STRING,
          },
          visible: {
              type: RAW_BOOLEAN,
          },
          showMask: {
              type: RAW_BOOLEAN,
              value: TRUE,
          },
          closable: {
              type: RAW_BOOLEAN,
              value: TRUE,
          },
          maskClosable: {
              type: RAW_BOOLEAN,
              value: TRUE,
          },
          width: {
              type: RAW_NUMERIC,
              value: screenWidth > 1024 ? 500 : 300,
          },
          height: {
              type: RAW_NUMERIC,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      computed: {
          wrapperStyle: function () {
              var customStyle = {};
              var width = this.get('width');
              var height = this.get('height');
              if (width) {
                  customStyle.width = toPixel(width);
              }
              if (height) {
                  customStyle.fontSize = toPixel(height);
              }
              if (Yox.object.keys(customStyle).length > 0) {
                  return customStyle;
              }
          },
      },
      methods: {
          open: function () {
              this.set('visible', TRUE);
          },
          close: function () {
              this.set('visible', FALSE);
          }
      },
      transitions: {
          dialog: {
              enter: function (node) {
                  var me = this;
                  var dialog = node;
                  var wrapper = me.$refs.wrapper;
                  me.wrapperElement = wrapper;
                  // 设置为 display block
                  Yox.dom.addClass(dialog, CLASS_VISIBLE$2);
                  me.fire({
                      type: 'open',
                      ns: 'dialog',
                  });
                  setTimeout(function () {
                      if (!me.get('visible')) {
                          return;
                      }
                      Yox.dom.addClass(dialog, CLASS_FADE$2);
                      onTransitionEnd(wrapper, function () {
                          if (!me.get('visible')) {
                              return;
                          }
                          me.fire({
                              type: 'opened',
                              ns: 'dialog',
                          });
                      });
                  }, 50);
              },
              leave: function (node, done) {
                  var me = this;
                  var dialog = node;
                  var wrapper = me.wrapperElement;
                  me.wrapperElement = UNDEFINED;
                  Yox.dom.removeClass(dialog, CLASS_FADE$2);
                  me.fire({
                      type: 'close',
                      ns: 'dialog',
                  });
                  onTransitionEnd(wrapper, function () {
                      if (me.get('visible')) {
                          return;
                      }
                      Yox.dom.removeClass(dialog, CLASS_VISIBLE$2);
                      me.fire({
                          type: 'closed',
                          ns: 'dialog',
                      });
                      done();
                  });
              }
          },
      },
      components: {
          Icon: Icon,
      }
  });

  var template$1v = (function(){var $0,$1=void 0,$3=!0,$5={class:'bell-table-sorter'},$6={class:'bell-table-header'},$7={class:'bell-table-body'},$8={class:'bell-table-empty'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push(function(_S){_r(_Q,'inlineStyle',_U.inlineStyle).value?_S.nativeStyles=_b(_r(_Q,'inlineStyle',_U.inlineStyle).value):$1;return _S}({children:function(){var _T=[];_r(_Q,'colWidths',_U.colWidths).value?(_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_j(_r(_Q,'columns',_U.columns),function(_Q,_U,_V,_W,index){_T.push({context:_G,nativeAttrs:{width:_q(_Q,0,['colWidths',index].join('.')).value},operator:_B,tag:'col',type:3});});return _T.length?_T:$1}(),context:_G,operator:_B,tag:'colgroup',type:3});_T.push({children:function(){var _T=[];_T.push({children:function(){var _T=[];_j(_r(_Q,'columns',_U.columns),function(_Q,_U,_V,_W){_T.push(function(_S){_t(_Q,'align',_U.align).value?_n(_S,'nativeAttrs','class','bell-table-'+_y(_t(_Q,'align',_U.align).value)):$1;return _S}({children:function(){var _T=[];_t(_Q,'key',_U.key).value==='selection'?_q(_Q,_Q.length-1,'list.length',$3).value>0?_T.push({context:_G,events:{change:_e('change','allCheckedChange()','change','','allCheckedChange',$1,$3)},isComponent:$3,operator:_C,props:{checked:_u(_Q,0,'allChecked').value},tag:'Checkbox',type:4}):_T.push({context:_G,isComponent:$3,operator:_C,props:{disabled:$3},tag:'Checkbox',type:4}):(_T.push({isPure:$3,operator:_z,text:_y(_t(_Q,'title',_U.title).value),type:1}),_t(_Q,'sortable',_U.sortable).value?_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-table-sort-asc'+(_u(_Q,0,'sortKey').value===_t(_Q,'key',_U.key).value&&_u(_Q,0,'sortOrder').value===_u(_Q,0,'SORT_ORDER_ASC').value?' bell-table-sort-active':''),name:'arrow-up-s-fill'},tag:'Icon',type:4});_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-table-sort-desc'+(_u(_Q,0,'sortKey').value===_t(_Q,'key',_U.key).value&&_u(_Q,0,'sortOrder').value===_u(_Q,0,'SORT_ORDER_DESC').value?' bell-table-sort-active':''),name:'arrow-down-s-fill'},tag:'Icon',type:4});return _T.length?_T:$1}(),context:_G,events:{click:_e('click','sortColumn(this.key, ~/sortKey === this.key && ~/sortOrder === ~/SORT_ORDER_ASC ? ~/SORT_ORDER_DESC : ~/SORT_ORDER_ASC)','click','','sortColumn',{execute:function(_X,_Y){return [_t(_Q,'key',_U.key).value,_u(_Q,0,'sortKey').value===_t(_Q,'key',_U.key).value&&_u(_Q,0,'sortOrder').value===_u(_Q,0,'SORT_ORDER_ASC').value?_u(_Q,0,'SORT_ORDER_DESC').value:_u(_Q,0,'SORT_ORDER_ASC').value]}})},nativeAttrs:$5,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2}));return _T.length?_T:$1}(),context:_G,operator:_B,tag:'td',type:3}));});return _T.length?_T:$1}(),context:_G,operator:_B,tag:'tr',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:$6,operator:_B,tag:'thead',type:3});_q(_Q,_Q.length-1,'list.length',$3).value>0?_T.push({children:function(){var _T=[];($0={children:_l('$slot_children')||function(){var _T=[];_j(_r(_Q,'list',_U.list),function(_Q,_U,_V,_W,index){_T.push({children:function(){var _T=[];_j(_u(_Q,0,'columns'),function(_Q,_U,_V,_W){_t(_Q,'actions',_U.actions).value&&_q(_Q,_Q.length-1,'actions.length').value?_T.push(function(_S){_t(_Q,'align',_U.align).value?_n(_S,'nativeAttrs','class','bell-table-'+_y(_t(_Q,'align',_U.align).value)):$1;return _S}({children:function(){var _T=[];_j(_t(_Q,'actions',_U.actions),function(_Q,_U,_V,_W){_T.push({context:_G,events:{click:_e('click','clickButton(this, list[index], index)','click','','clickButton',{execute:function(_X,_Y){return [_s(_Q,_Q.length-1).value,_q(_Q,_Q.length-1,['list',index].join('.'),$3).value,index]}},$3)},isComponent:$3,operator:_C,props:{block:_t(_Q,'block',_U.block).value,className:_t(_Q,'className',_U.className).value,disabled:_t(_Q,'disabled',_U.disabled).value,shape:_t(_Q,'shape',_U.shape).value,size:_t(_Q,'size',_U.size).value,type:_t(_Q,'type',_U.type).value},slots:{$slot_children:function(_R){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_t(_Q,'text',_U.text).value),type:1});return _T.length?_T:$1}},tag:'Button',type:4});});return _T.length?_T:$1}(),context:_G,operator:_B,tag:'td',type:3})):_q(_Q,_Q.length-1,['list',index,_t(_Q,'key',_U.key).value].join('.'),$3).value!==$1?_T.push(function(_S){_t(_Q,'align',_U.align).value?_n(_S,'nativeAttrs','class','bell-table-'+_y(_t(_Q,'align',_U.align).value)):$1;return _S}({children:function(){var _T=[];_t(_Q,'dangerous',_U.dangerous).value?_T.push({context:_G,html:_y(_q(_Q,_Q.length-1,['list',index,_t(_Q,'key',_U.key).value].join('.'),$3).value),operator:_B,tag:'div',type:3}):_T.push({isPure:$3,operator:_z,text:_y(_q(_Q,_Q.length-1,['list',index,_t(_Q,'key',_U.key).value].join('.'),$3).value),type:1});return _T.length?_T:$1}(),context:_G,operator:_B,tag:'td',type:3})):_t(_Q,'key',_U.key).value==='selection'?_T.push(function(_S){_t(_Q,'align',_U.align).value?_n(_S,'nativeAttrs','class','bell-table-'+_y(_t(_Q,'align',_U.align).value)):$1;return _S}({children:function(){var _T=[];_T.push({context:_G,events:{change:_e('change','rowCheckedChange($event, $data, index)','change','','rowCheckedChange',{execute:function(_X,_Y){return [_X,_Y,index]}},$3)},isComponent:$3,operator:_C,props:{checked:_x(_w(_r(_Q,'inArray',_U.inArray,_H&&_H.inArray||_I.inArray).value,_G,[_r(_Q,'selection',_U.selection).value,_q(_Q,_Q.length-1,['list',index,'key'].join('.'),$3).value])).value},tag:'Checkbox',type:4});return _T.length?_T:$1}(),context:_G,operator:_B,tag:'td',type:3})):_T.push(function(_S){_t(_Q,'align',_U.align).value?_n(_S,'nativeAttrs','class','bell-table-'+_y(_t(_Q,'align',_U.align).value)):$1;return _S}({children:function(){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_t(_Q,'key',_U.key).value)+' is not found.',type:1});return _T.length?_T:$1}(),context:_G,operator:_B,tag:'td',type:3}));});return _T.length?_T:$1}(),context:_G,operator:_B,tag:'tr',type:3});});return _T.length?_T:$1}(),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$7,operator:_B,tag:'tbody',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,operator:_B,tag:'table',type:3}),_q(_Q,_Q.length-1,'list.length',$3).value===0?_T.push({children:function(){var _T=[];($0={children:_l('$slot_empty')||function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,slots:{$slot_children:function(_R){var _T=[];_T.push({isPure:$3,operator:_z,text:'暂无数据',type:1});return _T.length?_T:$1}},tag:'Empty',type:4});return _T.length?_T:$1}(),context:_G,isSlot:$3,operator:_F,tag:'slot',type:7},$0.children&&$0.children.length&&_T.push($0));return _T.length?_T:$1}(),context:_G,nativeAttrs:$8,operator:_B,tag:'div',type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2})):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-table'+(_r(_Q,'stripe',_U.stripe).value?' bell-table-stripe':'')+(_r(_Q,'simple',_U.simple).value?' bell-table-simple':' bell-table-bordered')+(_r(_Q,'className',_U.className).value?' '+_y(_r(_Q,'className',_U.className).value):'')},operator:_B,tag:'div',type:3}));}})();

  var SORT_ORDER_ASC = 'asc';
  var SORT_ORDER_DESC = 'desc';
  var Table = Yox.define({
      template: template$1v,
      name: 'bell-Table',
      propTypes: {
          list: {
              type: RAW_ARRAY,
              required: TRUE,
          },
          columns: {
              type: RAW_ARRAY,
              required: TRUE,
          },
          selection: {
              type: RAW_ARRAY,
          },
          stripe: {
              type: RAW_BOOLEAN,
          },
          simple: {
              type: RAW_BOOLEAN,
          },
          height: {
              type: RAW_NUMERIC,
          },
          width: {
              type: RAW_NUMERIC,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      data: function () {
          var sortKey = UNDEFINED;
          var sortOrder = UNDEFINED;
          Yox.array.each(this.get('columns'), function (item) {
              if (item.defaultSortOrder) {
                  sortKey = item.key;
                  sortOrder = item.defaultSortOrder;
              }
          });
          return {
              SORT_ORDER_ASC: SORT_ORDER_ASC,
              SORT_ORDER_DESC: SORT_ORDER_DESC,
              colWidths: UNDEFINED,
              sortKey: sortKey,
              sortOrder: sortOrder,
          };
      },
      computed: {
          allChecked: {
              deps: ['selection', 'selection.length'],
              get: function () {
                  var selection = this.get('selection');
                  var list = this.get('list');
                  return selection && list
                      && selection.length > 0
                      && selection.length === list.length;
              },
              set: function (checked) {
                  var selection = this.get('selection');
                  if (checked) {
                      selection = this.get('list').map(function (item) {
                          return item.key;
                      });
                  }
                  else {
                      selection = [];
                  }
                  this.set('selection', selection);
              }
          },
          inlineStyle: function () {
              var result = [];
              var customStyle = {};
              var width = this.get('width');
              var height = this.get('height');
              if (width) {
                  customStyle.width = toPixel(width);
                  customStyle.overflowX = 'auto';
              }
              if (height) {
                  customStyle.height = toPixel(height);
                  customStyle.overflowY = 'auto';
              }
              if (Yox.object.keys(customStyle).length > 0) {
                  result.push(customStyle);
              }
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          },
      },
      watchers: {
          selection: function (selection) {
              this.fire('change.table', {
                  selection: selection,
              });
          }
      },
      filters: {
          inArray: Yox.array.has,
      },
      methods: {
          allCheckedChange: function (event, data) {
              event.stop();
              this.set('allChecked', data.checked);
          },
          rowCheckedChange: function (event, data, index) {
              event.stop();
              var selection = this.get('selection');
              var key = this.get("list." + index + ".key");
              if (data.checked) {
                  if (!Yox.is.array(selection) || !Yox.array.has(selection, key)) {
                      this.append('selection', key);
                  }
              }
              else {
                  this.remove('selection', key);
              }
          },
          clickButton: function (button, item, index) {
              button.onClick(item, index);
          },
          sortColumn: function (key, order) {
              this.set({
                  sortKey: key,
                  sortOrder: order,
              });
              this.fire('sort', {
                  key: key,
                  order: order,
              });
          },
          updateColumnWidths: function () {
              var el = this.$el;
              if (!el) {
                  return;
              }
              var totalWidth = el.clientWidth;
              if (!totalWidth) {
                  return;
              }
              var columns = this.get('columns');
              if (!columns || !columns.length) {
                  return;
              }
              var colWidths = [], noWidths = [], widthSum = 0;
              Yox.array.each(columns, function (col, index) {
                  if (col.width > 0) {
                      colWidths[index] = col.width;
                      widthSum += col.width;
                  }
                  else if (col.key === 'selection') {
                      colWidths[index] = 50;
                      widthSum += 50;
                  }
                  else {
                      noWidths.push(index);
                  }
              });
              totalWidth -= widthSum;
              var noCount = noWidths.length;
              if (totalWidth > 0 && noCount) {
                  Yox.array.each(noWidths, function (index) {
                      var colWidth = Math.floor(totalWidth / noCount);
                      colWidths[index] = colWidth;
                      totalWidth -= colWidth;
                      noCount--;
                  });
              }
              this.set('colWidths', colWidths);
          }
      },
      components: {
          Icon: Icon,
          Empty: Empty,
          Button: Button,
          Checkbox: Checkbox,
      },
      afterMount: function () {
          this.updateColumnWidths();
          // 再来一次，确保拿到了最新宽度
          this.nextTick(function () {
              this.updateColumnWidths();
          });
      }
  });

  var template$1w = (function(){var $1=void 0,$5={class:'bell-loadingbar-indicator'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push({children:function(){var _T=[];_T.push({context:_G,nativeAttrs:$5,nativeStyles:_b(_r(_Q,'indicatorStyle',_U.indicatorStyle).value),operator:_B,tag:'div',type:3});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-loadingbar'+(_r(_Q,'type',_U.type).value?' bell-loadingbar-'+_y(_r(_Q,'type',_U.type).value):'')},operator:_B,tag:'div',type:3});}})();

  var LoadingBar = Yox.define({
      template: template$1w,
      name: 'bell-LoadingBar',
      propTypes: {
          type: {
              type: oneOf(RAW_TYPE_ARRAY),
              value: RAW_TYPE_PRIMARY,
          },
          height: {
              type: RAW_NUMBER,
              value: 2,
          },
          percent: {
              type: RAW_NUMBER,
              value: 0,
          },
          color: {
              type: RAW_STRING,
          }
      },
      computed: {
          indicatorStyle: function () {
              var result = [];
              var customStyle = {};
              var percent = this.get('percent');
              var height = this.get('height');
              var color = this.get('color');
              customStyle.width = toPercent(percent);
              customStyle.height = toPixel(height);
              if (color) {
                  customStyle.color = color;
              }
              result.push(customStyle);
              var style = this.get('style');
              if (style) {
                  result.push(style);
              }
              if (result.length > 0) {
                  return result;
              }
          }
      },
      afterMount: function () {
          var me = this;
          var next = function () {
              me.timer = setTimeout(function () {
                  if (!me.timer) {
                      return;
                  }
                  var value = me.increase('percent', Math.floor(Math.random() * 10), 98);
                  if (value < 98) {
                      next();
                  }
              }, 300);
          };
          next();
      },
      beforeDestroy: function () {
          var me = this;
          if (me.timer) {
              clearTimeout(me.timer);
              me.timer = UNDEFINED;
          }
      }
  });

  var instance = UNDEFINED;
  function add(props) {
      var wrapper = Yox.dom.find('#bell-loadingbar-wrapper');
      if (!wrapper) {
          wrapper = Yox.dom.createElement('div');
          Yox.dom.setAttr(wrapper, 'id', 'bell-loadingbar-wrapper');
          Yox.dom.append(BODY, wrapper);
      }
      instance = new Yox(Yox.object.extend({
          el: wrapper,
          props: props,
      }, LoadingBar));
      return instance;
  }
  function remove() {
      if (instance) {
          instance.destroy();
          instance = UNDEFINED;
      }
  }
  Yox.prototype.$loadingBar = {
      // 开始从 0 显示进度条，并自动加载进度
      start: function (options) {
          if (instance) {
              remove();
          }
          return add(options);
      },
      // 结束进度条，自动补全剩余进度
      finish: function () {
          if (instance) {
              instance.set('percent', 100);
              setTimeout(remove, 300);
          }
      },
      // 精确加载到指定的进度
      update: function (data) {
          if (instance) {
              instance.set(data);
          }
      }
  };

  var template$1x = (function(){var $1=void 0,$3=!0,$5={class:'bell-message-text'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push({children:function(){var _T=[];_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-message-icon',name:_r(_Q,'status',_U.status).value===_r(_Q,'RAW_TYPE_SUCCESS',_U.RAW_TYPE_SUCCESS).value?'checkbox-circle-fill':_r(_Q,'status',_U.status).value===_r(_Q,'RAW_TYPE_WARNING',_U.RAW_TYPE_WARNING).value?'error-warning-fill':_r(_Q,'status',_U.status).value===_r(_Q,'RAW_TYPE_ERROR',_U.RAW_TYPE_ERROR).value?'close-circle-fill':'information-fill'},tag:'Icon',type:4});_T.push({context:_G,nativeAttrs:$5,operator:_B,tag:'span',text:_y(_r(_Q,'content',_U.content).value),type:3});_r(_Q,'closable',_U.closable).value?_T.push({context:_G,events:{'click.native':_e('click.native','hide()','click','native','hide',$1,$1,$3)},isComponent:$3,operator:_C,props:{className:'bell-message-close',name:'close-line'},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-message'+(_r(_Q,'status',_U.status).value?' bell-message-'+_y(_r(_Q,'status',_U.status).value):'')+(_r(_Q,'center',_U.center).value?' bell-message-center':'')+(_r(_Q,'closable',_U.closable).value?' bell-message-with-close':'')},operator:_B,tag:'div',type:3});}})();

  var CLASS_VISIBLE$3 = 'bell-message-visible';
  var Message = Yox.define({
      template: template$1x,
      name: 'bell-Message',
      propTypes: {
          status: {
              type: oneOf(RAW_STATUS_ARRAY),
              value: RAW_TYPE_INFO,
          },
          content: {
              type: RAW_STRING,
              required: TRUE,
          },
          closable: {
              type: RAW_BOOLEAN,
          },
          center: {
              type: RAW_BOOLEAN,
          }
      },
      data: function () {
          return {
              RAW_TYPE_INFO: RAW_TYPE_INFO,
              RAW_TYPE_SUCCESS: RAW_TYPE_SUCCESS,
              RAW_TYPE_WARNING: RAW_TYPE_WARNING,
              RAW_TYPE_ERROR: RAW_TYPE_ERROR,
          };
      },
      methods: {
          show: function (top, duration) {
              var me = this;
              var element = me.$el;
              Yox.dom.addClass(element, CLASS_VISIBLE$3);
              element.style.top = toPixel(top);
              if (duration > 0) {
                  setTimeout(function () {
                      if (me.$el) {
                          me.hide();
                      }
                  }, duration);
              }
          },
          hide: function () {
              var me = this;
              var element = me.$el;
              Yox.dom.removeClass(element, CLASS_VISIBLE$3);
              element.style.top = '0px';
              onTransitionEnd(element, function () {
                  if (me.$el) {
                      me.fire({
                          type: 'hide',
                          ns: 'message',
                      });
                  }
              });
          }
      },
      components: {
          Icon: Icon,
      },
  });

  var config = {};
  function addMessage(status, arg, onClose) {
      var props = { status: status };
      Yox.object.extend(props, config);
      if (Yox.is.string(arg)) {
          props.content = arg;
      }
      else {
          Yox.object.extend(props, arg);
      }
      var instance = new Yox(Yox.object.extend({
          el: BODY,
          props: props,
      }, Message));
      instance.on('hide.message', function () {
          if (onClose) {
              onClose();
          }
          instance.destroy();
      });
      setTimeout(function () {
          if (instance.$el) {
              instance.show(props.top || 15, props.duration || 2000);
          }
      }, 300);
  }
  Yox.prototype.$message = {
      success: function (arg, onClose) {
          addMessage('success', arg, onClose);
      },
      info: function (arg, onClose) {
          addMessage('info', arg, onClose);
      },
      warning: function (arg, onClose) {
          addMessage('warning', arg, onClose);
      },
      error: function (arg, onClose) {
          addMessage('error', arg, onClose);
      },
      config: function (arg) {
          Yox.object.extend(config, arg);
      }
  };

  var template$1y = (function(){var $1=void 0,$3=!0,$4=!1;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-modal',closable:_r(_Q,'closable',_U.closable).value,maskClosable:$4,showMask:$3,title:_r(_Q,'title',_U.title).value,width:_r(_Q,'width',_U.width).value},ref:'dialog',slots:{$slot_content:function(_R){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_r(_Q,'content',_U.content).value),type:1});return _T.length?_T:$1},$slot_footer:function(_R){var _T=[];_T.push({context:_G,events:{click:_e('click','ok()','click','','ok',$1,$3)},isComponent:$3,operator:_C,parent:_R,props:{type:_r(_Q,'okType',_U.okType).value},slots:{$slot_children:function(_R){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_r(_Q,'okText',_U.okText).value),type:1});return _T.length?_T:$1}},tag:'Button',type:4});return _T.length?_T:$1}},tag:'Dialog',type:4});}})();

  var Alert$1 = Yox.define({
      template: template$1y,
      name: 'bell-Alert',
      propTypes: {
          title: {
              type: RAW_STRING,
          },
          content: {
              type: RAW_STRING,
              required: TRUE,
          },
          closable: {
              type: RAW_BOOLEAN,
          },
          width: {
              type: RAW_NUMERIC,
              value: screenWidth > 1024 ? 400 : 300,
          },
          okText: {
              type: RAW_STRING,
              value: '我知道了'
          },
          okType: {
              type: oneOf(RAW_TYPE_ARRAY),
              value: RAW_TYPE_PRIMARY,
          },
          onOk: {
              type: RAW_FUNCTION,
          }
      },
      events: {
          closed: {
              listener: function (event) {
                  event.stop();
                  this.destroy();
              },
              ns: 'dialog',
          }
      },
      methods: {
          ok: function () {
              this.$refs.dialog.close();
              var onOk = this.get('onOk');
              if (onOk) {
                  onOk();
              }
          }
      },
      components: {
          Button: Button,
          Dialog: Dialog,
      },
      afterMount: function () {
          var me = this;
          setTimeout(function () {
              if (me.$refs) {
                  me.$refs.dialog.open();
              }
          }, 30);
      }
  });

  var template$1z = (function(){var $1=void 0,$3=!0,$4=!1;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-modal',closable:_r(_Q,'closable',_U.closable).value,maskClosable:$4,showMask:$3,title:_r(_Q,'title',_U.title).value,width:_r(_Q,'width',_U.width).value},ref:'dialog',slots:{$slot_content:function(_R){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_r(_Q,'content',_U.content).value),type:1});return _T.length?_T:$1},$slot_footer:function(_R){var _T=[];_T.push({context:_G,events:{click:_e('click','cancel()','click','','cancel',$1,$3)},isComponent:$3,operator:_C,parent:_R,props:{type:_r(_Q,'cancelType',_U.cancelType).value},slots:{$slot_children:function(_R){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_r(_Q,'cancelText',_U.cancelText).value),type:1});return _T.length?_T:$1}},tag:'Button',type:4});_T.push({context:_G,events:{click:_e('click','ok()','click','','ok',$1,$3)},isComponent:$3,operator:_C,parent:_R,props:{type:_r(_Q,'okType',_U.okType).value},slots:{$slot_children:function(_R){var _T=[];_T.push({isPure:$3,operator:_z,text:_y(_r(_Q,'okText',_U.okText).value),type:1});return _T.length?_T:$1}},tag:'Button',type:4});return _T.length?_T:$1}},tag:'Dialog',type:4});}})();

  var Confirm = Yox.define({
      template: template$1z,
      name: 'bell-Confirm',
      propTypes: {
          title: {
              type: RAW_STRING,
          },
          content: {
              type: RAW_STRING,
              required: TRUE,
          },
          closable: {
              type: RAW_BOOLEAN,
          },
          width: {
              type: RAW_NUMERIC,
              value: screenWidth > 1024 ? 400 : 300,
          },
          okText: {
              type: RAW_STRING,
              value: '确定',
          },
          okType: {
              type: oneOf(RAW_TYPE_ARRAY),
              value: RAW_TYPE_PRIMARY,
          },
          onOk: {
              type: RAW_FUNCTION,
          },
          cancelText: {
              type: RAW_STRING,
              value: '取消',
          },
          cancelType: {
              type: oneOf(RAW_TYPE_ARRAY),
          },
          onCancel: {
              type: RAW_FUNCTION,
          }
      },
      events: {
          closed: {
              listener: function (event) {
                  event.stop();
                  this.destroy();
              },
              ns: 'dialog',
          }
      },
      methods: {
          ok: function () {
              this.$refs.dialog.close();
              var onOk = this.get('onOk');
              if (onOk) {
                  onOk();
              }
          },
          cancel: function () {
              this.$refs.dialog.close();
              var onCancel = this.get('onCancel');
              if (onCancel) {
                  onCancel();
              }
          },
      },
      components: {
          Button: Button,
          Dialog: Dialog,
      },
      afterMount: function () {
          var me = this;
          setTimeout(function () {
              if (me.$refs) {
                  me.$refs.dialog.open();
              }
          }, 30);
      }
  });

  var prototype = Yox.prototype;
  prototype.$alert = function (data) {
      var props = {};
      if (Yox.is.object(data)) {
          var obj = data;
          props.closable = obj.closable;
          props.title = obj.title;
          props.content = obj.content;
          props.width = obj.width;
          props.okText = obj.okText;
          props.okType = obj.okType;
          props.onOk = obj.onOk;
      }
      else {
          props.content = data;
      }
      new Yox(Yox.object.extend({
          el: BODY,
          props: props,
      }, Alert$1));
  };
  prototype.$confirm = function (data) {
      var props = {};
      if (Yox.is.object(data)) {
          var obj = data;
          props.closable = obj.closable;
          props.title = obj.title;
          props.content = obj.content;
          props.width = obj.width;
          props.okText = obj.okText;
          props.okType = obj.okType;
          props.onOk = obj.onOk;
          props.cancelText = obj.cancelText;
          props.cancelType = obj.cancelType;
          props.onCancel = obj.onCancel;
      }
      else {
          props.content = data;
      }
      new Yox(Yox.object.extend({
          el: BODY,
          props: props,
      }, Confirm));
  };

  var template$1A = (function(){var $1=void 0,$3=!0,$5={class:'bell-notification-title'},$6={class:'bell-notification-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_U,_V,_T){_T.push({children:function(){var _T=[];_r(_Q,'status',_U.status).value?_T.push({context:_G,isComponent:$3,operator:_C,props:{className:'bell-notification-icon',name:_r(_Q,'status',_U.status).value===_r(_Q,'RAW_TYPE_SUCCESS',_U.RAW_TYPE_SUCCESS).value?'checkbox-circle-fill':_r(_Q,'status',_U.status).value===_r(_Q,'RAW_TYPE_WARNING',_U.RAW_TYPE_WARNING).value?'error-warning-fill':_r(_Q,'status',_U.status).value===_r(_Q,'RAW_TYPE_ERROR',_U.RAW_TYPE_ERROR).value?'close-circle-fill':'information-fill'},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'title',_U.title).value?_T.push({context:_G,nativeAttrs:$5,operator:_B,tag:'div',text:_y(_r(_Q,'title',_U.title).value),type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'content',_U.content).value?_T.push({context:_G,nativeAttrs:$6,operator:_B,tag:'div',text:_y(_r(_Q,'content',_U.content).value),type:3}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});_r(_Q,'duration',_U.duration).value==0?_T.push({context:_G,events:{'click.native':_e('click.native','hide()','click','native','hide',$1,$1,$3)},isComponent:$3,operator:_C,props:{className:'bell-notification-close',name:'close-line'},tag:'Icon',type:4}):_T.push({isComment:$3,isPure:$3,operator:_A,text:'',type:2});return _T.length?_T:$1}(),context:_G,nativeAttrs:{class:'bell-notification'+(_r(_Q,'status',_U.status).value?' bell-notification-'+_y(_r(_Q,'status',_U.status).value)+' bell-notification-with-icon':'')+(_r(_Q,'title',_U.title).value?' bell-notification-with-title':'')+(_r(_Q,'duration',_U.duration).value==0?' bell-notification-with-close':'')},nativeStyles:_b(_r(_Q,'inlineStyle',_U.inlineStyle).value),operator:_B,tag:'div',type:3});}})();

  var CLASS_VISIBLE$4 = 'bell-notification-visible';
  var Notification = Yox.define({
      template: template$1A,
      name: 'bell-Notification',
      propTypes: {
          title: {
              type: RAW_STRING,
          },
          content: {
              type: RAW_STRING,
          },
          status: {
              type: oneOf(RAW_STATUS_ARRAY),
          },
          duration: {
              type: RAW_NUMERIC,
              value: 4500,
          },
          width: {
              type: RAW_NUMERIC,
              value: 320,
          },
          right: {
              type: RAW_NUMERIC,
              value: 15,
          },
      },
      data: function () {
          return {
              RAW_TYPE_INFO: RAW_TYPE_INFO,
              RAW_TYPE_SUCCESS: RAW_TYPE_SUCCESS,
              RAW_TYPE_WARNING: RAW_TYPE_WARNING,
              RAW_TYPE_ERROR: RAW_TYPE_ERROR,
          };
      },
      computed: {
          inlineStyle: function () {
              var customStyle = {};
              var width = this.get('width');
              var right = this.get('right');
              customStyle.width = toPixel(width);
              customStyle.right = toPixel(right);
              return customStyle;
          },
      },
      methods: {
          show: function () {
              var me = this;
              Yox.dom.addClass(me.$el, CLASS_VISIBLE$4);
              var duration = toNumber(me.get('duration'));
              if (duration > 0) {
                  setTimeout(function () {
                      if (me.$el) {
                          me.hide();
                      }
                  }, duration);
              }
          },
          hide: function () {
              var me = this;
              Yox.dom.removeClass(me.$el, CLASS_VISIBLE$4);
              me.nextTick(function () {
                  if (!me.$el) {
                      return;
                  }
                  onTransitionEnd(me.$el, function () {
                      if (me.$el) {
                          me.fire({
                              type: 'hide',
                              ns: 'notification',
                          });
                      }
                  });
              });
          }
      },
      components: {
          Icon: Icon,
      }
  });

  var config$1 = {};
  function addNotification(status, data, onClose) {
      var props = { status: status };
      // 先写 config，可支持 data 覆盖全局配置
      Yox.object.extend(props, config$1);
      if (Yox.is.string(data)) {
          props.content = data;
      }
      else {
          Yox.object.extend(props, data);
      }
      var wrapper = Yox.dom.find('#bell-notification-wrapper');
      if (!wrapper) {
          wrapper = Yox.dom.createElement('div');
          Yox.dom.setAttr(wrapper, 'id', 'bell-notification-wrapper');
          Yox.dom.append(BODY, wrapper);
      }
      var instance = new Yox(Yox.object.extend({
          el: wrapper,
          props: props,
      }, Notification));
      instance.on('hide.notification', function () {
          if (onClose) {
              onClose();
          }
          instance.destroy();
      });
      setTimeout(function () {
          if (instance.$el) {
              instance.show();
          }
      }, 300);
  }
  Yox.prototype.$notification = {
      success: function (props, onClose) {
          addNotification('success', props, onClose);
      },
      info: function (props, onClose) {
          addNotification('info', props, onClose);
      },
      warning: function (props, onClose) {
          addNotification('warning', props, onClose);
      },
      error: function (props, onClose) {
          addNotification('error', props, onClose);
      },
      config: function (options) {
          Yox.object.extend(config$1, options);
      }
  };

  /**
   * 版本
   */
  var version = "0.26.5";
  /**
   * 安装插件
   */
  function install(Yox) {
      Yox.component({
          Row: Row,
          Col: Col,
          Add: Add,
          Countdown: Countdown,
          ResizeObserver: ResizeObserver$1,
          Menu: Menu,
          MenuItem: MenuItem,
          MenuGroup: MenuGroup,
          SubMenu: SubMenu,
          Icon: Icon,
          Text: Text,
          Drawer: Drawer,
          Breadcrumb: Breadcrumb,
          BreadcrumbItem: BreadcrumbItem,
          Button: Button,
          ButtonGroup: ButtonGroup,
          Input: Input,
          InputNumber: InputNumber,
          Textarea: Textarea,
          Radio: Radio,
          RadioGroup: RadioGroup,
          Checkbox: Checkbox,
          CheckboxGroup: CheckboxGroup,
          Slider: Slider,
          Space: Space,
          Statistic: Statistic,
          Switch: Switch,
          Skeleton: Skeleton,
          Select: Select,
          Option: Option,
          OptionGroup: OptionGroup,
          Pagination: Pagination,
          DatePicker: DatePicker,
          TimePicker: TimePicker,
          ImagePicker: ImagePicker,
          Upload: Upload,
          Tooltip: Tooltip,
          Alert: Alert,
          Article: Article,
          Analysis: Analysis,
          AnalysisField: AnalysisField,
          Spin: Spin,
          SplitButton: SplitButton,
          BackTop: BackTop,
          Avatar: Avatar,
          Badge: Badge,
          Card: Card,
          CardHeader: CardHeader,
          CardMedia: CardMedia,
          CardBody: CardBody,
          CardFooter: CardFooter,
          PageHeader: PageHeader,
          Layout: Layout,
          LayoutHeader: LayoutHeader,
          LayoutContent: LayoutContent,
          LayoutFooter: LayoutFooter,
          LayoutSider: LayoutSider,
          Carousel: Carousel,
          Collapse: Collapse,
          CollapseItem: CollapseItem,
          Link: Link,
          List: List,
          ListItem: ListItem,
          Empty: Empty,
          Result: Result,
          Exception: Exception,
          Divider: Divider,
          Circle: Circle,
          Progress: Progress,
          Popover: Popover,
          Popconfirm: Popconfirm,
          Tag: Tag,
          Rate: Rate,
          Tabs: Tabs,
          TabPanel: TabPanel,
          Dropdown: Dropdown,
          DropdownItem: DropdownItem,
          DropdownMenu: DropdownMenu,
          Description: Description,
          DescriptionItem: DescriptionItem,
          Thumbnail: Thumbnail,
          Timeline: Timeline,
          TimelineItem: TimelineItem,
          Form: Form,
          FormItem: FormItem,
          Dialog: Dialog,
          Table: Table,
      });
  }

  exports.install = install;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=bell-ui-rollup.js.map
