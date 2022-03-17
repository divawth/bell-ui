/**
 * bell-ui.js v0.25.3
 * (c) 2018-2022 
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('yox')) :
  typeof define === 'function' && define.amd ? define(['exports', 'yox'], factory) :
  (global = global || self, factory(global.Bell = {}, global.Yox));
}(this, function (exports, Yox) { 'use strict';

  Yox = Yox && Yox.hasOwnProperty('default') ? Yox['default'] : Yox;

  var template = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-menu'+(_s('mode',_W.mode).value?' bell-menu-'+_A(_s('mode',_W.mode).value):'')+(!_s('inner',_W.inner).value&&_s('theme',_W.theme).value?' bell-menu-'+_A(_s('theme',_W.theme).value):'')+(_s('collapsed',_W.collapsed).value?' bell-menu-collapsed':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

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
  function formatSecond(value, format, SECOND) {
      if (format === void 0) { format = 'd:hh:mm:ss'; }
      if (SECOND === void 0) { SECOND = 1; }
      var MINUTE = 60 * SECOND;
      var HOUR = 60 * MINUTE;
      var DAY = 24 * MINUTE;
      var day = Math.floor(value / DAY);
      value %= DAY;
      var hour = Math.floor(value / HOUR);
      value %= HOUR;
      var minute = Math.floor(value / MINUTE);
      value %= MINUTE;
      var second = Math.floor(value / SECOND);
      if (!day) {
          format = format.replace(/dd:/, '').replace(/d:/, '');
          if (!hour) {
              format = format.replace(/hh:/, '').replace(/h:/, '');
          }
      }
      return format
          .replace(/dd/i, padStart(day))
          .replace(/d/i, toString(day))
          .replace(/hh/i, padStart(hour))
          .replace(/h/i, toString(hour))
          .replace(/mm/i, padStart(minute))
          .replace(/m/i, toString(minute))
          .replace(/ss/i, padStart(second))
          .replace(/s/i, toString(second));
  }
  function padStart(value) {
      return value < 10
          ? '0' + value
          : '' + value;
  }
  function scrollTo(element, from, to, duration, callback) {
      if (from === void 0) { from = 0; }
      if (duration === void 0) { duration = 500; }
      var difference = Math.abs(from - to);
      var step = Math.ceil(difference / duration * 50);
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

  var Menu = Yox.define({
      template: template,
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

  var template$1 = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;!_s('disabled',_W.disabled).value?_o(_T,'events','click',_f('click','click()','click','','click')):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-menu-item'+(_s('isActive',_W.isActive).value?' bell-menu-item-active':'')+(_s('disabled',_W.disabled).value?' bell-menu-item-disabled':' bell-menu-item-enabled')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var MenuItem = Yox.define({
      template: template$1,
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

  var template$2 = (function(){var $0=void 0,$2=!0,$5={class:'bell-menu-group-title'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$5,operator:_D,tag:'div',text:_A(_s('title',_W.title).value),type:3};_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['children'])).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{inner:$2,mode:_s('mode',_W.mode).value==='inline'?'inline':'vertical'},slots:_j({$slot_children:function(_U,_V){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);}}),tag:'Menu',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-menu-group'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var MenuGroup = Yox.define({
      template: template$2,
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

  var template$3 = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('color',_W.color).value||_s('size',_W.size).value>0||_s('style',_W.style).value?_T.nativeStyles=_c([{color:_s('color',_W.color).value||$0,fontSize:_s('size',_W.size).value>0?_s('size',_W.size).value+'px':$0},_s('style',_W.style).value]):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-icon'+(_s('name',_W.name).value?' bell-icon-'+_A(_s('name',_W.name).value):'')+(_s('spin',_W.spin).value?' bell-icon-spin':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'i',type:3});}})();

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
  });

  var template$4 = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_a({children:function(_U){_a(function(_T){!_s('disabled',_W.disabled).value?_s('trigger',_W.trigger).value===_s('RAW_CLICK',_W.RAW_CLICK).value?_o(_T,'events','click',_f('click','toggleVisible()','click','','toggleVisible')):_s('trigger',_W.trigger).value===_s('RAW_HOVER',_W.RAW_HOVER).value?(_o(_T,'events','mouseenter',_f('mouseenter','enter()','mouseenter','','enter')),_o(_T,'events','mouseleave',_f('mouseleave','leave()','mouseleave','','leave'))):$0:$0;return _T}({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,ref:'trigger',tag:'slot',type:7}),_U);_s('visible',_W.visible).value?_a({children:function(_U){_a(function(_T){!_s('disabled',_W.disabled).value?_s('trigger',_W.trigger).value===_s('RAW_HOVER',_W.RAW_HOVER).value?(_o(_T,'events','mouseenter',_f('mouseenter','enter()','mouseenter','','enter')),_o(_T,'events','mouseleave',_f('mouseleave','leave()','mouseleave','','leave'))):$0:$0;return _T}({children:function(_U){_k('$slot_overlay',_U);return _U}([]),context:_I,events:{click:_f('click','click()','click','','click')},isSlot:$2,operator:_H,ref:'overlay',tag:'slot',transition:_d('overlay',_Q&&_Q.overlay||_R.overlay),type:7}),_U);return _U}([]),context:_I,operator:_G,tag:'portal',type:6},_U):_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,isFragment:$2,operator:_F,tag:'fragment',type:5},_U);}})();

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
      template: template$4,
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
              target.left = x != NULL ? x + 'px' : '';
              target.top = y != NULL ? y + 'px' : '';
              target.width = width != NULL ? width + 'px' : '';
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

  var template$5 = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_s('mode',_W.mode).value==='inline'?_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]=function(_T){!_s('collapsed',_W.collapsed).value?(_o(_T,'lazy','click',300),_o(_T,'events','click',_f('click',"toggle('isOpen')",'click','','toggle',{args:function(_S,_Z,_1){return ['isOpen']}}))):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_title',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);!_s('collapsed',_W.collapsed).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-sub-menu-arrow-icon',name:'arrow-down-s-line'},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-sub-menu-title'},operator:_D,tag:'div',type:3});_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{inner:$2,mode:_s('mode',_W.mode).value},ref:'menu',slots:_j({$slot_children:function(_U,_V){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);}}),tag:'Menu',type:4};return _U}([]),context:_I,nativeAttrs:{class:'bell-sub-menu'+(_s('isOpen',_W.isOpen).value?' bell-menu-open':'')+(_s('isActive',_W.isActive).value?' bell-menu-active':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3}):_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{gap:'5',placement:_s('mode',_W.mode).value===_s('RAW_HORIZONTAL',_W.RAW_HORIZONTAL).value?_s('RAW_BOTTOM',_W.RAW_BOTTOM).value:_s('RAW_RIGHT_START',_W.RAW_RIGHT_START).value,trigger:_s('RAW_CUSTOM',_W.RAW_CUSTOM).value,visible:_s('isOpen',_W.isOpen).value},slots:_j({$slot_children:function(_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]=function(_T){!_s('collapsed',_W.collapsed).value?(_o(_T,'lazy','click',300),_o(_T,'events','click',_f('click',"toggle('isOpen')",'click','','toggle',{args:function(_S,_Z,_1){return ['isOpen']}}))):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_title',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);!_s('collapsed',_W.collapsed).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-sub-menu-arrow-icon',name:'arrow-down-s-line'},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-sub-menu-title'},operator:_D,tag:'div',type:3});return _U}([]),context:_I,nativeAttrs:{class:'bell-sub-menu'+(_s('isActive',_W.isActive).value?' bell-menu-active':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});},$slot_overlay:function(_U,_V){_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-menu-overlay'+(_s('theme',_W.theme).value?' bell-menu-'+_A(_s('theme',_W.theme).value):'')},operator:_D,tag:'div',type:3};}}),tag:'Popover',type:4};}})();

  var SubMenu = Yox.define({
      template: template$5,
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

  var template$6 = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-text'+(_s('type',_W.type).value?' bell-text-'+_A(_s('type',_W.type).value):'')+(_s('size',_W.size).value?' bell-text-'+_A(_s('size',_W.size).value):'')+(_s('bold',_W.bold).value?' bell-text-bold':'')+(_s('block',_W.block).value?' bell-text-block':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'span',type:3});}})();

  var Text = Yox.define({
      template: template$6,
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

  var template$7 = (function(){var $0=void 0,$2=!0,$5={class:'bell-drawer-header'},$6={class:'bell-drawer-body'},$7={class:'bell-drawer-wrapper'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_s('visible',_W.visible).value?_a({children:function(_U){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_s('showMask',_W.showMask).value?_U[_U.length]=function(_T){_s('maskClosable',_W.maskClosable).value?_o(_T,'events','click',_f('click','close()','click','','close')):$0;return _T}({context:_I,nativeAttrs:{class:'bell-drawer-mask'},operator:_D,tag:'div',type:3}):_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_U[_U.length]={children:function(_U){_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['title'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_title',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_content',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3};_s('closable',_W.closable).value?_U[_U.length]=_V[_V.length]={context:_I,events:{'click.native':_f('click.native','close()','click','native','close',$0,$0,$2)},isComponent:$2,operator:_E,props:{className:'bell-drawer-close',name:'close-line'},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:$7,nativeStyles:_c(_s('wrapperStyle',_W.wrapperStyle).value),operator:_D,ref:'wrapper',tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-drawer'+(_s('placement',_W.placement).value?' bell-drawer-'+_A(_s('placement',_W.placement).value):'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',transition:_d('drawer',_Q&&_Q.drawer||_R.drawer),type:3});return _U}([]),context:_I,operator:_G,tag:'portal',type:6},_U):_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};}})();

  var CLASS_VISIBLE = 'bell-drawer-visible';
  var CLASS_FADE = 'bell-drawer-fade';
  var Drawer = Yox.define({
      template: template$7,
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
                      width: width + 'px'
                  };
              }
              var height = toNumber(this.get('height'));
              return {
                  height: height + 'px'
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

  var template$8 = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-breadcrumb'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Breadcrumb = Yox.define({
      template: template$8,
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

  var template$9 = (function(){var $0=void 0,$2=!0,$5={class:'bell-breadcrumb-separator'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]=function(_T){_s('last',_W.last).value?_o(_T,'nativeAttrs','class','bell-breadcrumb-text'):(_o(_T,'nativeAttrs','class','bell-breadcrumb-link'),_o(_T,'events','click',_g('click','click.breadcrumbItem','click','','click','breadcrumbItem')));return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,operator:_D,tag:'span',type:3});!_s('last',_W.last).value?_U[_U.length]={context:_I,nativeAttrs:$5,operator:_D,tag:'span',text:_A(_s('separator',_W.separator).value),type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-breadcrumb-item'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'span',type:3});}})();

  var BreadcrumbItem = Yox.define({
      template: template$9,
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

  var template$a = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('disabled',_W.disabled).value?_o(_T,'nativeAttrs','disabled',''):!_s('loading',_W.loading).value?_o(_T,'events','click',_g('click','click.button','click','','click','button')):$0;_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_prefix',_U)||(_s('loading',_W.loading).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-button-loading-icon',name:'loader-5-line',spin:$2},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2});return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['children'])).value?_s('loading',_W.loading).value||_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['prefix'])).value||_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['suffix'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,operator:_D,tag:'span',type:3}:_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U):_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_a({children:function(_U){_k('$slot_suffix',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-button'+(_s('type',_W.type).value?' bell-button-'+_A(_s('type',_W.type).value):'')+(_s('size',_W.size).value?' bell-button-'+_A(_s('size',_W.size).value):'')+(_s('shape',_W.shape).value?' bell-button-'+_A(_s('shape',_W.shape).value):'')+(_s('ghost',_W.ghost).value?' bell-button-ghost':'')+(_s('loading',_W.loading).value?' bell-button-loading':'')+(_s('disabled',_W.disabled).value?' bell-button-disabled':' bell-button-enabled')+(_s('block',_W.block).value?' bell-button-block':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'button',type:3});}})();

  var Button = Yox.define({
      template: template$a,
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

  var template$b = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-button-group'+(_s('shape',_W.shape).value?' bell-button-group-'+_A(_s('shape',_W.shape).value):'')+(_s('size',_W.size).value?' bell-button-group-'+_A(_s('size',_W.size).value):'')+(_s('vertical',_W.vertical).value?' bell-button-group-vertical':' bell-button-group-horizontal')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var ButtonGroup = Yox.define({
      template: template$b,
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

  var template$c = (function(){var $0=void 0,$2=!0,$5={class:'bell-input-prepend'},$6={class:'bell-input-prefix bell-input-prefix-icon-wrapper'},$7={class:'bell-input-suffix bell-input-suffix-text-wrapper'},$8={class:'bell-input-suffix bell-input-suffix-icon-wrapper'},$9={class:'bell-input-suffix bell-input-suffix-icon-wrapper bell-input-secure'},$10={class:'bell-input-suffix bell-input-suffix-icon-wrapper bell-input-clear'},$11={class:'bell-input-append'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('width',_W.width).value||_s('style',_W.style).value?_T.nativeStyles=_c([_s('width',_W.width).value?{width:_s('width',_W.width).value+'px'}:$0,_s('style',_W.style).value]):$0;return _T}({children:function(_U){_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['prepend'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_prepend',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_U[_U.length]={children:function(_U){_s('prefix',_W.prefix).value?_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-input-content-icon',name:_s('prefix',_W.prefix).value},tag:'Icon',type:4};return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_U[_U.length]=function(_T){_s('maxLength',_W.maxLength).value?_o(_T,'nativeAttrs','maxlength',_p('maxlength',_s('maxLength',_W.maxLength).value)):$0;_s('placeholder',_W.placeholder).value?_o(_T,'nativeAttrs','placeholder',_s('placeholder',_W.placeholder).value):$0;_s('autoFocus',_W.autoFocus).value?_o(_T,'nativeAttrs','autofocus',''):$0;_s('readOnly',_W.readOnly).value?_o(_T,'nativeAttrs','readonly',''):$0;_s('spellCheck',_W.spellCheck).value?_o(_T,'nativeAttrs','spellcheck',''):$0;_s('disabled',_W.disabled).value?_o(_T,'nativeAttrs','disabled',''):(_o(_T,'events','focus',_f('focus','handleFocus()','focus','','handleFocus')),_o(_T,'events','blur',_f('blur','handleBlur()','blur','','handleBlur')),_o(_T,'events','input',_g('input','input.input','input','','input','input')),_o(_T,'events','compositionstart',_g('compositionstart','compositionstart.input','compositionstart','','compositionstart','input')),_o(_T,'events','compositionend',_g('compositionend','compositionend.input','compositionend','','compositionend','input')));return _T}({context:_I,model:_e(_s('value',_W.value)),nativeAttrs:{class:'bell-input-el',type:_s('currentType',_W.currentType).value},operator:_D,ref:'input',tag:'input',type:3});_s('hasCount',_W.hasCount).value?_U[_U.length]={children:function(_U){_U[_U.length]={isPure:$2,operator:_B,text:_A(_z(_y(_s('formatValueLength',_W.formatValueLength,$0,_J&&_J.formatValueLength||_K.formatValueLength).value,_I,[_s('value',_W.value).value])).value)+' / '+_A(_s('maxLength',_W.maxLength).value),type:1};return _U}([]),context:_I,nativeAttrs:$7,operator:_D,tag:'div',type:3}:_s('suffix',_W.suffix).value?_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-input-content-icon',name:_s('suffix',_W.suffix).value},tag:'Icon',type:4};return _U}([]),context:_I,nativeAttrs:$8,operator:_D,tag:'div',type:3}:_s('secure',_W.secure).value?_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-input-content-icon',name:_s('isSecure',_W.isSecure).value?'eye-close-line':'eye-line'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click',"toggle('isSecure')",'click','','toggle',{args:function(_S,_Z,_1){return ['isSecure']}})},nativeAttrs:$9,operator:_D,tag:'div',type:3}:_s('clearable',_W.clearable).value&&!_s('disabled',_W.disabled).value?_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-input-content-icon',name:'close-circle-fill'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','handleClearClick()','click','','handleClearClick')},nativeAttrs:$10,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-input-content'+(_s('prefix',_W.prefix).value?' bell-input-content-with-prefix':'')+(_s('hasCount',_W.hasCount).value||_s('suffix',_W.suffix).value||_s('secure',_W.secure).value||_s('clearable',_W.clearable).value&&!_s('disabled',_W.disabled).value?' bell-input-content-with-suffix':'')},operator:_D,tag:'div',type:3};_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['append'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_append',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$11,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-input'+(_s('size',_W.size).value?' bell-input-'+_A(_s('size',_W.size).value):'')+(_s('status',_W.status).value?' bell-input-'+_A(_s('status',_W.status).value):'')+(_s('block',_W.block).value?' bell-input-block':'')+(_s('isFocus',_W.isFocus).value?' bell-input-focused':'')+(_s('disabled',_W.disabled).value?' bell-input-disabled':' bell-input-enabled')+(!_s('value',_W.value).value?' bell-input-no-value':' bell-input-has-value')+(_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['prepend'])).value?' bell-input-with-prepend':'')+(_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['append'])).value?' bell-input-with-append':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var TEXT_TYPE_PASSWORD = 'password';
  var TEXT_TYPE_TEXT = 'text';
  var Input = Yox.define({
      template: template$c,
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

  var template$d = (function(){var $0=void 0,$2=!0,$5={class:'bell-input-number-actions'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=_V[_V.length]={context:_I,events:{blur:_f('blur','handleBlur()','blur','','handleBlur',$0,$2),compositionend:_f('compositionend','handleCompositionEnd()','compositionend','','handleCompositionEnd',$0,$2),compositionstart:_f('compositionstart','handleCompositionStart()','compositionstart','','handleCompositionStart',$0,$2),down:_f('down','handleDown()','down','','handleDown',$0,$2),enter:_f('enter','handleEnter()','enter','','handleEnter',$0,$2),focus:_f('focus','handleFocus()','focus','','handleFocus',$0,$2),input:_f('input','handleInput()','input','','handleInput',$0,$2),keydown:_f('keydown','handleKeydown()','keydown','','handleKeydown',$0,$2),keyup:_f('keyup','handleKeyup()','keyup','','handleKeyup',$0,$2),up:_f('up','handleUp()','up','','handleUp',$0,$2)},isComponent:$2,operator:_E,props:{autoFocus:_s('autoFocus',_W.autoFocus).value,block:_s('block',_W.block).value,className:_s('customClassName',_W.customClassName).value,disabled:_s('disabled',_W.disabled).value,placeholder:_s('placeholder',_W.placeholder).value,readOnly:_s('readOnly',_W.readOnly).value,size:_s('size',_W.size).value,status:_s('status',_W.status).value,style:_s('style',_W.style).value,value:_s('value',_W.value).value,width:_s('width',_W.width).value},ref:'input',slots:_j({$slot_append:function(_U,_V){_a({children:function(_U){_k('$slot_append',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);},$slot_children:function(_U,_V){_U[_U.length]={context:_I,nativeAttrs:{class:'bell-input-number-el',max:_p('max',_s('max',_W.max).value),min:_p('min',_s('min',_W.min).value),step:_p('step',_s('step',_W.step).value),type:'number',value:_s('value',_W.value).value},operator:_D,ref:'numberInput',tag:'input',type:3};_s('showStep',_W.showStep).value?_U[_U.length]={children:function(_U){_U[_U.length]=function(_T){_s('upDisabled',_W.upDisabled).value?_o(_T,'nativeAttrs','class','bell-input-number-up bell-input-number-up-disabled'):(_o(_T,'nativeAttrs','class','bell-input-number-up bell-input-number-up-enabled'),_o(_T,'events','click',_f('click','handleUp()','click','','handleUp')));return _T}({children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-input-number-up-icon',name:'arrow-up-s-line'},tag:'Icon',type:4};return _U}([]),context:_I,operator:_D,tag:'div',type:3});_U[_U.length]=function(_T){_s('downDisabled',_W.downDisabled).value?_o(_T,'nativeAttrs','class','bell-input-number-down bell-input-number-down-disabled'):(_o(_T,'nativeAttrs','class','bell-input-number-down bell-input-number-down-enabled'),_o(_T,'events','click',_f('click','handleDown()','click','','handleDown')));return _T}({children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-input-number-down-icon',name:'arrow-down-s-line'},tag:'Icon',type:4};return _U}([]),context:_I,operator:_D,tag:'div',type:3});return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};},$slot_prepend:function(_U,_V){_a({children:function(_U){_k('$slot_prepend',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);}}),tag:'Input',type:4};}})();

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
      template: template$d,
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

  var template$e = (function(){var $0=void 0,$2=!0,$5={class:'bell-textarea-word-count'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('width',_W.width).value||_s('style',_W.style).value?_T.nativeStyles=_c([_s('width',_W.width).value?{width:_s('width',_W.width).value+'px'}:$0,_s('style',_W.style).value]):$0;return _T}({children:function(_U){_U[_U.length]=function(_T){_s('wrap',_W.wrap).value?_o(_T,'nativeAttrs','wrap',_s('wrap',_W.wrap).value):$0;_s('placeholder',_W.placeholder).value?_o(_T,'nativeAttrs','placeholder',_s('placeholder',_W.placeholder).value):$0;_s('maxLength',_W.maxLength).value?_o(_T,'nativeAttrs','maxlength',_p('maxlength',_s('maxLength',_W.maxLength).value)):$0;_s('autoFocus',_W.autoFocus).value?_o(_T,'nativeAttrs','autofocus',''):$0;_s('readOnly',_W.readOnly).value?_o(_T,'nativeAttrs','readonly',''):$0;_s('spellCheck',_W.spellCheck).value?_o(_T,'nativeAttrs','spellcheck',''):$0;_s('disabled',_W.disabled).value?_o(_T,'nativeAttrs','disabled',''):(_o(_T,'events','blur',_f('blur','handleBlur()','blur','','handleBlur')),_o(_T,'events','focus',_f('focus','handleFocus()','focus','','handleFocus')));return _T}({context:_I,model:_e(_s('value',_W.value)),nativeAttrs:{class:'bell-textarea-el'+(_s('hasCount',_W.hasCount).value?' bell-textarea-el-with-word-count':'')},nativeStyles:_c(_s('textareaStyle',_W.textareaStyle).value),operator:_D,tag:'textarea',type:3});_s('hasCount',_W.hasCount).value?_U[_U.length]={children:function(_U){_U[_U.length]={isPure:$2,operator:_B,text:_A(_z(_y(_s('formatValueLength',_W.formatValueLength,$0,_J&&_J.formatValueLength||_K.formatValueLength).value,_I,[_s('value',_W.value).value])).value)+' / '+_A(_s('maxLength',_W.maxLength).value),type:1};return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-textarea'+(_s('size',_W.size).value?' bell-textarea-'+_A(_s('size',_W.size).value):'')+(_s('status',_W.status).value?' bell-textarea-'+_A(_s('status',_W.status).value):'')+(_s('block',_W.block).value?' bell-textarea-block':'')+(_s('resize',_W.resize).value===_s('RAW_HORIZONTAL',_W.RAW_HORIZONTAL).value?' bell-textarea-resize-horizontal':_s('resize',_W.resize).value===_s('RAW_VERTICAL',_W.RAW_VERTICAL).value?' bell-textarea-resize-vertical':'')+(_s('disabled',_W.disabled).value?' bell-textarea-disabled':' bell-textarea-enabled')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var sizes = {};
  var fontSizes = {};
  sizes[RAW_DEFAULT] = 5;
  sizes[RAW_SMALL] = 3;
  sizes[RAW_LARGE] = 8;
  fontSizes[RAW_DEFAULT] = 14;
  fontSizes[RAW_SMALL] = 12;
  fontSizes[RAW_LARGE] = 16;
  var Textarea = Yox.define({
      template: template$e,
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
                          minHeight: autoSize.minRows * ROW_HEIGHT + PADDING_VERTICAL + 'px',
                          maxHeight: autoSize.maxRows * ROW_HEIGHT + PADDING_VERTICAL + 'px',
                          height: rows * ROW_HEIGHT + PADDING_VERTICAL + 'px',
                      };
                  }
                  rows = value ? value.split('\n').length : 1;
                  return {
                      minHeight: ROW_HEIGHT + PADDING_VERTICAL + 'px',
                      height: rows * ROW_HEIGHT + PADDING_VERTICAL + 'px',
                  };
              }
              return {
                  height: rows * ROW_HEIGHT + PADDING_VERTICAL + 'px',
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

  var template$f = (function(){var $0=void 0,$2=!0,$3=!1,$5={class:'bell-radio-icon'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;!_s('disabled',_W.disabled).value?_o(_T,'events','click',_f('click','handleClick()','click','','handleClick')):$0;return _T}({children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]=function(_T){_s('name',_W.name).value?_o(_T,'nativeAttrs','name',_s('name',_W.name).value):$0;return _T}({context:_I,events:{blur:_f('blur',"set('isFocus', false)",'blur','','set',{args:function(_S,_Z,_1){return ['isFocus',$3]}}),focus:_f('focus',"set('isFocus', true)",'focus','','set',{args:function(_S,_Z,_1){return ['isFocus',$2]}})},nativeAttrs:{class:'bell-radio-input',disabled:_q('disabled',_s('disabled',_W.disabled).value),type:'radio',value:_s('value',_W.value).value},operator:_D,tag:'input',type:3});return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3};_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-radio'+(_s('disabled',_W.disabled).value?' bell-radio-disabled':' bell-radio-enabled')+(_s('checked',_W.checked).value?' bell-radio-active':'')+(_s('isFocus',_W.isFocus).value?' bell-radio-focus':'')+(_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['children'])).value?' bell-radio-with-label':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'label',type:3});}})();

  var Radio = Yox.define({
      template: template$f,
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

  var template$g = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:(_s('button',_W.button).value?'bell-radio-button'+(_s('size',_W.size).value?' bell-radio-button-'+_A(_s('size',_W.size).value):'')+(_s('disabled',_W.disabled).value?' bell-radio-button-disabled':' bell-radio-button-enable'):'bell-radio-group'+(_s('disabled',_W.disabled).value?' bell-radio-group-disabled':' bell-radio-group-enabled'))+(_s('vertical',_W.vertical).value?' bell-radio-vertical':' bell-radio-horizontal')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var RadioGroup = Yox.define({
      template: template$g,
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

  var template$h = (function(){var $0=void 0,$2=!0,$3=!1,$5={class:'bell-checkbox-icon'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]=function(_T){_s('name',_W.name).value?_o(_T,'nativeAttrs','name',_s('name',_W.name).value):$0;return _T}({context:_I,events:{blur:_f('blur',"set('isFocus', false)",'blur','','set',{args:function(_S,_Z,_1){return ['isFocus',$3]}}),change:_f('change','onChange()','change','','onChange'),focus:_f('focus',"set('isFocus', true)",'focus','','set',{args:function(_S,_Z,_1){return ['isFocus',$2]}})},nativeAttrs:{checked:_q('checked',_s('checked',_W.checked).value),class:'bell-checkbox-input',disabled:_q('disabled',_s('disabled',_W.disabled).value),type:'checkbox'},operator:_D,tag:'input',type:3});return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3};_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-checkbox'+(_s('disabled',_W.disabled).value?' bell-checkbox-disabled':' bell-checkbox-enabled')+(_s('checked',_W.checked).value?' bell-checkbox-active':'')+(_s('isFocus',_W.isFocus).value?' bell-checkbox-focus':'')+(_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['children'])).value?' bell-checkbox-with-label':'')+(_s('indeterminate',_W.indeterminate).value?' bell-checkbox-indeterminate':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'label',type:3});}})();

  var Checkbox = Yox.define({
      template: template$h,
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
          onChange: function (event) {
              var checked = event.originalEvent.target.checked;
              this.set({
                  checked: checked,
              });
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

  var template$i = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-checkbox-group'+(_s('vertical',_W.vertical).value?' bell-checkbox-vertical':' bell-checkbox-horizontal')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var CheckboxGroup = Yox.define({
      template: template$i,
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

  var template$j = (function(){var $0=void 0,$2=!0,$4={class:'bell-slider-bar'},$6={class:'bell-slider-stop'},$7=function(){return 0};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('width',_W.width).value||_s('height',_W.height).value||_s('style',_W.style).value?_T.nativeStyles=_c([{height:_s('height',_W.height).value?_s('height',_W.height).value+'px':$0,width:_s('width',_W.width).value?_s('width',_W.width).value+'px':$0},_s('style',_W.style).value]):$0;return _T}({children:function(_U){_U[_U.length]=function(_T){!_s('disabled',_W.disabled).value?_o(_T,'events','mousedown',_f('mousedown','trackMouseDown()','mousedown','','trackMouseDown')):$0;return _T}({children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$4,nativeStyles:_c(_s('vertical',_W.vertical).value?_z(_y(_s('formatBarStyle',_W.formatBarStyle,$0,_J&&_J.formatBarStyle||_K.formatBarStyle).value,_I,[_s('valuePercentArray',_W.valuePercentArray).value,_s('reverse',_W.reverse).value,'bottom','top'])).value:_z(_y(_s('formatBarStyle',_W.formatBarStyle,$0,_J&&_J.formatBarStyle||_K.formatBarStyle).value,_I,[_s('valuePercentArray',_W.valuePercentArray).value,_s('reverse',_W.reverse).value,'left','right'])).value),operator:_D,tag:'div',type:3};_s('showStops',_W.showStops).value?_m(_s('stops',_W.stops),function(_W,_X,_Y){_U[_U.length]={context:_I,key:_v('value',_W.value).value,nativeAttrs:$6,nativeStyles:_c(_v('style',_W.style).value),operator:_D,tag:'div',type:3};}):_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_m(_s('valuePercentArray',_W.valuePercentArray),function(_W,_X,_Y,index){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{content:_w($7,'formatTooltip').value?_z(_y(_w($7,'formatTooltip').value,_I,[_v('value',_W.value).value])).value:_v('value',_W.value).value,mode:_w($7,'RAW_CUSTOM').value,placement:_w($7,'vertical').value?_w($7,'RAW_RIGHT').value:_w($7,'RAW_TOP').value},ref:'tooltip'+index,slots:_j({$slot_children:function(_U,_V){_U[_U.length]=function(_T){!_w($7,'disabled').value?(_o(_T,'nativeAttrs','tabindex','0'),_o(_T,'lazy','mouseenter',200),_o(_T,'lazy','mouseleave',200),_o(_T,'events','mouseenter',_f('mouseenter','thumbMouseEnter($event, index)','mouseenter','','thumbMouseEnter',{args:function(_S,_Z,_1){return [_Z,index]}})),_o(_T,'events','mouseleave',_f('mouseleave','thumbMouseLeave($event, index)','mouseleave','','thumbMouseLeave',{args:function(_S,_Z,_1){return [_Z,index]}})),_o(_T,'events','mousedown',_f('mousedown','thumbMouseDown($event, index)','mousedown','','thumbMouseDown',{args:function(_S,_Z,_1){return [_Z,index]}}))):$0;return _T}({context:_I,nativeAttrs:{class:'bell-slider-thumb'+(_w($7,'hoverThumbIndex').value===index?' bell-slider-thumb-hover':'')+(_w($7,'dragThumbIndex').value===index?' bell-slider-thumb-dragging':'')},nativeStyles:_c(_w($7,'vertical').value?_z(_y(_s('formatThumbStyle',_W.formatThumbStyle,$0,_J&&_J.formatThumbStyle||_K.formatThumbStyle).value,_I,[_v('percent',_W.percent).value,_w($7,'reverse').value?'top':'bottom'])).value:_z(_y(_s('formatThumbStyle',_W.formatThumbStyle,$0,_J&&_J.formatThumbStyle||_K.formatThumbStyle).value,_I,[_v('percent',_W.percent).value,_w($7,'reverse').value?'right':'left'])).value),operator:_D,tag:'div',type:3});}}),tag:'Tooltip',type:4};});return _U}([]),context:_I,nativeAttrs:{class:'bell-slider-track'},operator:_D,tag:'div',type:3});return _U}([]),context:_I,nativeAttrs:{class:'bell-slider'+(_s('vertical',_W.vertical).value?' bell-slider-vertical':' bell-slider-horizontal')+(_s('disabled',_W.disabled).value?' bell-slider-disabled':' bell-slider-enabled')+(_s('block',_W.block).value?' bell-slider-block':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var template$k = (function(){var $0=void 0,$2=!0,$5={class:'bell-popover-arrow'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{disabled:_s('disabled',_W.disabled).value,offsetX:_s('offsetX',_W.offsetX).value,offsetY:_s('offsetY',_W.offsetY).value,placement:_s('placement',_W.placement).value,showArrow:$2,showDelay:_s('delay',_W.delay).value,trigger:_s('mode',_W.mode).value,visible:_s('isVisible',_W.isVisible).value},ref:'popover',slots:_j({$slot_children:function(_U,_V){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);},$slot_overlay:function(_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]=function(_T){_s('maxWidth',_W.maxWidth).value||_s('maxHeight',_W.maxHeight).value?_T.nativeStyles={maxHeight:_s('maxHeight',_W.maxHeight).value?_s('maxHeight',_W.maxHeight).value+'px':$0,maxWidth:_s('maxWidth',_W.maxWidth).value?_s('maxWidth',_W.maxWidth).value+'px':$0}:$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_content',_U)||(_U[_U.length]={isPure:$2,operator:_B,text:_A(_s('content',_W.content).value),type:1});return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-popover-content'},operator:_D,tag:'div',type:3});_U[_U.length]={context:_I,isPure:$2,isStatic:$2,nativeAttrs:$5,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-tooltip'+(_s('theme',_W.theme).value?' bell-tooltip-'+_A(_s('theme',_W.theme).value):'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}}),tag:'Popover',type:4};}})();

  var Tooltip = Yox.define({
      template: template$k,
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
      template: template$j,
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
          }
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

  var template$l = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('sizeValue',_W.sizeValue).value||_s('style',_W.style).value?_T.nativeStyles=_c([_s('sizeValue',_W.sizeValue).value?{gap:_s('sizeValue',_W.sizeValue).value}:$0,_s('style',_W.style).value]):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-space'+(_s('vertical',_W.vertical).value?' bell-space-vertical':' bell-space-horizontal')+(_s('align',_W.align).value?' bell-space-align-'+_A(_s('align',_W.align).value):'')+(_s('autoWrap',_W.autoWrap).value?' bell-space-auto-wrap':'')+(_s('block',_W.block).value?' bell-space-block':'')+(!_s('supportFlexGap',_W.supportFlexGap).value?' bell-space-legacy':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Space = Yox.define({
      template: template$l,
      name: 'bell-Space',
      propTypes: {
          size: {
              type: [RAW_NUMERIC, RAW_ARRAY],
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
          sizeValue: function () {
              var size = this.get('size');
              if (size == NULL) {
                  return;
              }
              // 配置两个方向的间距
              if (Yox.is.array(size)) {
                  return size[1] + "px " + size[0] + "px";
              }
              // 配置一个方向的间距
              var value = toNumber(size);
              if (value > 0) {
                  return value + 'px';
              }
          }
      }
  });

  var template$m = (function(){var $0=void 0,$2=!0,$5={class:'bell-statistic-title'},$6={class:'bell-statistic-header'},$7={class:'bell-statistic-content-prefix'},$8={class:'bell-statistic-content-value'},$9={class:'bell-statistic-content-suffix'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$5,operator:_D,tag:'div',text:_A(_s('title',_W.title).value),type:3};_a({children:function(_U){_k('$slot_extra',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3};_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{loading:_s('loading',_W.loading).value,text:{rows:1}},slots:_j({$slot_children:function(_U,_V){_U[_U.length]=function(_T){_s('color',_W.color).value?_T.nativeStyles={color:_s('color',_W.color).value}:$0;return _T}({children:function(_U){_s('prefix',_W.prefix).value||_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['prefix'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_prefix',_U)||(_U[_U.length]={isPure:$2,operator:_B,text:_A(_s('prefix',_W.prefix).value),type:1});return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$7,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_U[_U.length]={context:_I,nativeAttrs:$8,operator:_D,tag:'div',text:_A(_s('value',_W.value).value),type:3};_s('suffix',_W.suffix).value||_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['suffix'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_suffix',_U)||(_U[_U.length]={isPure:$2,operator:_B,text:_A(_s('suffix',_W.suffix).value),type:1});return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$9,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-statistic-content'},operator:_D,tag:'div',type:3});}}),tag:'Skeleton',type:4};return _U}([]),context:_I,nativeAttrs:{class:'bell-statistic'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var template$n = (function(){var $0=void 0,$2=!0,$5={class:'bell-skeleton-header'},$6={class:'bell-skeleton-text-row'},$7={class:'bell-skeleton-text'},$8={class:'bell-skeleton-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_s('loading',_W.loading).value?_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_s('imageSize',_W.imageSize).value?_U[_U.length]={children:function(_U){_U[_U.length]={context:_I,nativeAttrs:{class:'bell-skeleton-image bell-skeleton-image-'+_A(_s('imageShape',_W.imageShape).value)},nativeStyles:{height:_s('imageSize',_W.imageSize).value,width:_s('imageSize',_W.imageSize).value},operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_U[_U.length]={children:function(_U){_s('computedText',_W.computedText).value?_U[_U.length]={children:function(_U){_m(_s('computedText',_W.computedText),function(_W,_X,_Y,index){_U[_U.length]={context:_I,nativeAttrs:$6,nativeStyles:{width:_v('width',_W.width).value},operator:_D,tag:'li',type:3};});return _U}([]),context:_I,nativeAttrs:$7,operator:_D,tag:'ul',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:$8,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-skeleton'+(_s('active',_W.active).value?' bell-skeleton-active':'')+(_s('imageSize',_W.imageSize).value?' bell-skeleton-with-image':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3}):_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);}})();

  var Skeleton = Yox.define({
      template: template$n,
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
                          width: Yox.is.number(width) ? width + 'px' : width
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
                  return size + 'px';
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
      template: template$m,
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

  var template$o = (function(){var $0=void 0,$2=!0,$5={class:'bell-switch-label'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;!_s('disabled',_W.disabled).value&&!_s('loading',_W.loading).value?_o(_T,'events','click',_f('click','handleClick()','click','','handleClick')):$0;return _T}({children:function(_U){_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['on'])).value||_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['off'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_'+(_s('checked',_W.checked).value?'on':'off'),_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-switch'+(_s('size',_W.size).value?' bell-switch-'+_A(_s('size',_W.size).value):'')+(_s('disabled',_W.disabled).value?' bell-switch-disabled':' bell-switch-enabled')+(_s('checked',_W.checked).value?' bell-switch-active':'')+(_s('loading',_W.loading).value?' bell-switch-loading':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Switch = Yox.define({
      template: template$o,
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

  var template$p = (function(){var $0=void 0,$2=!0,$4=function(_S){return _S.length-1},$5={class:'bell-select-prefix'},$6={class:'bell-select-placeholder'},$7={class:'bell-select-values'},$8={class:'bell-select-value'},$9={class:'bell-select-overlay'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{gap:'5',placement:_s('placement',_W.placement).value,trigger:_s('RAW_CUSTOM',_W.RAW_CUSTOM).value,visible:_s('visible',_W.visible).value,widthAlign:$2},ref:'popover',slots:_j({$slot_children:function(_U,_V){_U[_U.length]=function(_T){!_s('disabled',_W.disabled).value?_o(_T,'events','click',_f('click',"toggle('visible')",'click','','toggle',{args:function(_S,_Z,_1){return ['visible']}})):$0;_s('width',_W.width).value||_s('style',_W.style).value?_T.nativeStyles=_c([_s('width',_W.width).value?{width:_s('width',_W.width).value+'px'}:$0,_s('style',_W.style).value]):$0;return _T}({children:function(_U){_s('prefix',_W.prefix).value||_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['prefix'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_prefix',_U)||(_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-select-prefix-icon',name:_s('prefix',_W.prefix).value},tag:'Icon',type:4});return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_r($4,'selectedOptions.length',$2).value===0?_U[_U.length]={context:_I,nativeAttrs:$6,operator:_D,tag:'div',text:_A(_s('placeholder',_W.placeholder).value),type:3}:_s('multiple',_W.multiple).value?_U[_U.length]={children:function(_U){_m(_s('selectedOptions',_W.selectedOptions),function(_W,_X,_Y,index){_U[_U.length]=_V[_V.length]={context:_I,events:{close:_f('close','handleRemoveOption($event, index)','close','','handleRemoveOption',{args:function(_S,_Z,_1){return [_Z,index]}},$2)},isComponent:$2,operator:_E,props:{closable:$2,simple:$2},slots:_j({$slot_children:function(_U,_V){_U[_U.length]={isPure:$2,operator:_B,text:_A(_v('text',_W.text).value),type:1};}}),tag:'Tag',type:4};});return _U}([]),context:_I,nativeAttrs:$7,operator:_D,tag:'div',type:3}:_U[_U.length]={context:_I,nativeAttrs:$8,operator:_D,tag:'div',text:_A(_r($4,'selectedOptions.0.text',$2).value),type:3};_s('clearable',_W.clearable).value&&_r($4,'selectedOptions.length',$2).value?_U[_U.length]=_V[_V.length]={context:_I,events:{'click.native':_f('click.native','handleClearClick()','click','native','handleClearClick',$0,$0,$2)},isComponent:$2,operator:_E,props:{className:'bell-select-clear-icon',name:'close-circle-fill'},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-select-arrow-icon',name:'arrow-down-s-line'},tag:'Icon',type:4};return _U}([]),context:_I,nativeAttrs:{class:'bell-select'+(_s('status',_W.status).value?' bell-select-'+_A(_s('status',_W.status).value):'')+(_s('size',_W.size).value?' bell-select-'+_A(_s('size',_W.size).value):'')+(_s('block',_W.block).value?' bell-select-block':'')+(_s('visible',_W.visible).value?' bell-select-opened':'')+(_s('clearable',_W.clearable).value?' bell-select-clearable':'')+(_s('placement',_W.placement).value===_s('RAW_TOP',_W.RAW_TOP).value?' bell-select-reversed':'')+(_s('disabled',_W.disabled).value?' bell-select-disabled':' bell-select-enabled')+(_s('prefix',_W.prefix).value||_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['prefix'])).value?' bell-select-with-prefix':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});},$slot_overlay:function(_U,_V){_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$9,operator:_D,tag:'div',type:3};}}),tag:'Popover',type:4};}})();

  var template$q = (function(){var $0=void 0,$2=!0,$5={class:'bell-tag-icon'},$6={class:'bell-tag-close-button'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('color',_W.color).value||_s('style',_W.style).value?_T.nativeStyles=_c([_s('color',_W.color).value?{backgroundColor:!_s('checkable',_W.checkable).value||_s('checked',_W.checked).value?_s('color',_W.color).value:$0,color:_s('checkable',_W.checkable).value&&!_s('checked',_W.checked).value?_s('color',_W.color).value:$0}:$0,_s('style',_W.style).value]):$0;_s('checkable',_W.checkable).value?_o(_T,'events','click',_f('click','toggleChecked()','click','','toggleChecked')):$0;return _T}({children:function(_U){_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['icon'])).value||_s('icon',_W.icon).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_icon',_U)||(_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{name:_s('icon',_W.icon).value},tag:'Icon',type:4});return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);_s('closable',_W.closable).value?_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{name:'close-line'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_g('click','close.tag','click','','close','tag')},nativeAttrs:$6,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-tag'+(_s('type',_W.type).value?' bell-tag-'+_A(_s('type',_W.type).value):'')+(_s('size',_W.size).value?' bell-tag-'+_A(_s('size',_W.size).value):'')+(_s('checkable',_W.checkable).value?' bell-tag-checkable':'')+(_s('closable',_W.closable).value?' bell-tag-closable':'')+(_s('color',_W.color).value?' bell-tag-pure':'')+(_s('checked',_W.checked).value?' bell-tag-checked':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Tag = Yox.define({
      template: template$q,
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
      template: template$p,
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
              var selectedOptions = [];
              if (!children) {
                  this.set('selectedOptions', selectedOptions);
                  return;
              }
              var findOptions = function (children) {
                  children.vnodes.forEach(function (vnode) {
                      if (vnode.tag === 'Option' && vnode.props) {
                          var _a = vnode.props, text = _a.text, value = _a.value;
                          if (isOptionSelected(selectedValue, value)) {
                              selectedOptions.push({
                                  text: text,
                                  value: value,
                              });
                          }
                      }
                      else if (vnode.tag === 'OptionGroup' && vnode.slots) {
                          var children_1 = vnode.slots[RAW_SLOT_CHILDREN];
                          if (children_1) {
                              findOptions(children_1);
                          }
                      }
                  });
              };
              findOptions(children);
              this.set('selectedOptions', selectedOptions);
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

  var template$r = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;!_s('disabled',_W.disabled).value?_o(_T,'events','click',_f('click','handleClick()','click','','handleClick')):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U)||(_U[_U.length]={isPure:$2,operator:_B,text:_A(_s('text',_W.text).value),type:1});return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-select-option'+(_s('disabled',_W.disabled).value?' bell-select-option-disabled':' bell-select-option-enabled')+(_s('isSelected',_W.isSelected).value?' bell-select-option-active':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Option = Yox.define({
      template: template$r,
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

  var template$s = (function(){var $0=void 0,$2=!0,$5={class:'bell-select-group-title'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$5,operator:_D,tag:'div',text:_A(_s('label',_W.label).value),type:3};_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-select-option-group'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var OptionGroup = Yox.define({
      template: template$s,
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

  var template$t = (function(){var $0=void 0,$2=!0,$4=function(_S){return _S.length-1},$5={class:'bell-pagination-total'},$6={class:'bell-pagination-separator'},$7={class:'bell-pagination-count'},$8={class:'bell-pagination-simple'},$9={class:'bell-pagination-ellipsis'},$10={class:'bell-pagination-list'},$11={class:'bell-pagination-jumper'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_s('showTotal',_W.showTotal).value?_U[_U.length]={children:function(_U){_U[_U.length]={isPure:$2,operator:_B,text:'共 '+_A(_s('total',_W.total).value)+' 条',type:1};return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'span',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_r($4,'pageSizeList.length',$2).value>0?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,model:_e(_s('pageSize',_W.pageSize)),operator:_E,props:{placement:_s('placement',_W.placement).value,size:_s('size',_W.size).value},slots:_j({$slot_children:function(_U,_V){_m(_s('pageSizeList',_W.pageSizeList),function(_W,_X,_Y){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{text:_v('text',_W.text).value,value:_v('value',_W.value).value},tag:'Option',type:4};});}}),tag:'Select',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_s('simple',_W.simple).value?_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,key:'prev',operator:_E,props:{disabled:_s('current',_W.current).value===1},slots:_j({$slot_children:function(_U,_V){_a({children:function(_U){_k('$slot_prev',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);}}),tag:'PrevPage',type:4};_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,model:_e(_s('page',_W.page)),operator:_E,props:{className:'bell-pagination-simple-input',size:_s('size',_W.size).value},ref:'simpleInput',tag:'Input',type:4};_U[_U.length]={context:_I,isPure:$2,isStatic:$2,nativeAttrs:$6,operator:_D,tag:'span',text:'/',type:3};_U[_U.length]={context:_I,nativeAttrs:$7,operator:_D,tag:'span',text:_A(_s('count',_W.count).value),type:3};_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,key:'next',operator:_E,props:{disabled:_s('current',_W.current).value===_s('count',_W.count).value},slots:_j({$slot_children:function(_U,_V){_a({children:function(_U){_k('$slot_next',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);}}),tag:'NextPage',type:4};return _U}([]),context:_I,nativeAttrs:$8,operator:_D,tag:'div',type:3}:_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,key:'prev',operator:_E,props:{disabled:_s('current',_W.current).value===1},slots:_j({$slot_children:function(_U,_V){_a({children:function(_U){_k('$slot_prev',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);}}),tag:'PrevPage',type:4};_m(_s('pageList',_W.pageList),function(_W,_X,_Y){_v('prev',_W.prev).value?_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-pagination-icon',name:'arrow-left-s-fill'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','decreaseCurrent(5)','click','','decreaseCurrent',{args:function(_S,_Z,_1){return [5]}})},key:'prev-ellipsis',nativeAttrs:$9,operator:_D,tag:'div',type:3}:_v('next',_W.next).value?_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-pagination-icon',name:'arrow-right-s-fill'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','increaseCurrent(5)','click','','increaseCurrent',{args:function(_S,_Z,_1){return [5]}})},key:'next-ellipsis',nativeAttrs:$9,operator:_D,tag:'div',type:3}:_U[_U.length]=function(_T){!_v('active',_W.active).value?_o(_T,'events','click',_f('click','setCurrent(this.value)','click','','setCurrent',{args:function(_S,_Z,_1){return [_v('value',_W.value,_S).value]}})):$0;return _T}({context:_I,key:'page'+_A(_v('value',_W.value).value),nativeAttrs:{class:'bell-pagination-item'+(_v('active',_W.active).value?' bell-pagination-item-active':'')},operator:_D,tag:'div',text:_A(_v('value',_W.value).value),type:3});});_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,key:'next',operator:_E,props:{disabled:_s('current',_W.current).value===_s('count',_W.count).value},slots:_j({$slot_children:function(_U,_V){_a({children:function(_U){_k('$slot_next',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);}}),tag:'NextPage',type:4};return _U}([]),context:_I,nativeAttrs:$10,operator:_D,tag:'div',type:3};_s('showJumper',_W.showJumper).value?_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,model:_e(_s('page',_W.page)),operator:_E,props:{className:'bell-pagination-jumper-input',placeholder:'请输入页码',size:_s('size',_W.size).value},ref:'jumperInput',tag:'Input',type:4};_U[_U.length]=_V[_V.length]={context:_I,events:{click:_f('click','jump()','click','','jump',$0,$2)},isComponent:$2,operator:_E,props:{size:_s('size',_W.size).value,type:'primary'},slots:_j({$slot_children:function(_U,_V){_U[_U.length]={isPure:$2,operator:_B,text:'跳转',type:1};}}),tag:'Button',type:4};return _U}([]),context:_I,nativeAttrs:$11,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-pagination'+(_s('size',_W.size).value?' bell-pagination-'+_A(_s('size',_W.size).value):'')+(_s('hideOnSinglePage',_W.hideOnSinglePage).value&&_s('count',_W.count).value<=1?' bell-pagination-hidden':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var template$u = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['children'])).value?_U[_U.length]=function(_T){!_s('disabled',_W.disabled).value?_o(_T,'events','click',_g('click','click.prevPage','click','','click','prevPage')):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-pagination-custom-prev'+(_s('disabled',_W.disabled).value?' bell-pagination-custom-disabled':'')},operator:_D,tag:'div',type:3}):_U[_U.length]=function(_T){!_s('disabled',_W.disabled).value?_o(_T,'events','click',_g('click','click.prevPage','click','','click','prevPage')):$0;return _T}({children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-pagination-icon',name:'arrow-left-s-line'},tag:'Icon',type:4};return _U}([]),context:_I,nativeAttrs:{class:'bell-pagination-item bell-pagination-prev'+(_s('disabled',_W.disabled).value?' bell-pagination-item-disabled':'')},operator:_D,tag:'div',type:3});}})();

  var PrevPage = Yox.define({
      template: template$u,
      propTypes: {
          disabled: {
              type: RAW_BOOLEAN,
          },
      }
  });

  var template$v = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['children'])).value?_U[_U.length]=function(_T){!_s('disabled',_W.disabled).value?_o(_T,'events','click',_g('click','click.nextPage','click','','click','nextPage')):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-pagination-custom-next'+(_s('disabled',_W.disabled).value?' bell-pagination-custom-disabled':'')},operator:_D,tag:'div',type:3}):_U[_U.length]=function(_T){!_s('disabled',_W.disabled).value?_o(_T,'events','click',_g('click','click.nextPage','click','','click','nextPage')):$0;return _T}({children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-pagination-icon',name:'arrow-right-s-line'},tag:'Icon',type:4};return _U}([]),context:_I,nativeAttrs:{class:'bell-pagination-item bell-pagination-next'+(_s('disabled',_W.disabled).value?' bell-pagination-item-disabled':'')},operator:_D,tag:'div',type:3});}})();

  var NextPage = Yox.define({
      template: template$v,
      propTypes: {
          disabled: {
              type: RAW_BOOLEAN,
          },
      }
  });

  var Pagination = Yox.define({
      template: template$t,
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

  var template$w = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('draggable',_W.draggable).value?(_o(_T,'events','dragenter',_f('dragenter','handleDragenter()','dragenter','','handleDragenter')),_o(_T,'events','dragleave',_f('dragleave','handleDragleave()','dragleave','','handleDragleave')),_o(_T,'events','dragover',_f('dragover','handleDragover()','dragover','','handleDragover')),_o(_T,'events','drop',_f('drop','handleDrop()','drop','','handleDrop'))):$0;_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);_U[_U.length]={children:function(_U){_U[_U.length]={context:_I,events:{change:_f('change','handleChange()','change','','handleChange')},nativeAttrs:{accept:_s('accept',_W.accept).value,multiple:_q('multiple',_s('multiple',_W.multiple).value),type:'file'},operator:_D,ref:'input',tag:'input',type:3};return _U}([]),context:_I,operator:_D,ref:'form',tag:'form',type:3};return _U}([]),context:_I,events:{click:_f('click','handleClick()','click','','handleClick')},nativeAttrs:{class:'bell-upload'+(_s('isFileHover',_W.isFileHover).value?' bell-upload-file-hover':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  // 本地文件用负数，避免和数据库自增 id 冲突
  var guid = -1;
  var Upload = Yox.define({
      template: template$w,
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

  var template$x = (function(){var $0=void 0,$2=!0,$5={class:'bell-alert-title'},$6={class:'bell-alert-content'},$7={class:'bell-alert-close'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_s('showIcon',_W.showIcon).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-alert-status-icon',name:_s('status',_W.status).value===_s('RAW_TYPE_SUCCESS',_W.RAW_TYPE_SUCCESS).value?'checkbox-circle-fill':_s('status',_W.status).value===_s('RAW_TYPE_WARNING',_W.RAW_TYPE_WARNING).value?'error-warning-fill':_s('status',_W.status).value===_s('RAW_TYPE_ERROR',_W.RAW_TYPE_ERROR).value?'close-circle-fill':'information-fill'},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['title'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_title',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['children'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_s('closable',_W.closable).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_close',_U)||(_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-alert-close-icon',name:'close-line'},tag:'Icon',type:4});return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,events:{click:_g('click','close.alert','click','','close','alert')},nativeAttrs:$7,operator:_D,ref:'close',tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-alert'+(_s('status',_W.status).value?' bell-alert-'+_A(_s('status',_W.status).value):'')+(_s('banner',_W.banner).value?' bell-alert-banner':'')+(_s('center',_W.center).value?' bell-alert-center':'')+(_s('showIcon',_W.showIcon).value?' bell-alert-with-icon':'')+(_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['title'])).value?' bell-alert-with-title':'')+(_s('closable',_W.closable).value||_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['close'])).value?' bell-alert-with-close':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Alert = Yox.define({
      template: template$x,
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

  var template$y = (function(){var $0=void 0,$2=!0,$5={class:'bell-article-title'},$6={class:'bell-article-sub-title'},$7={class:'bell-article-cover'},$8={class:'bell-article-content'},$9={class:'bell-article-signature'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_s('title',_W.title).value?_U[_U.length]={children:function(_U){_U[_U.length]={isPure:$2,operator:_B,text:_A(_s('title',_W.title).value),type:1};_s('showLink',_W.showLink).value?_U[_U.length]=_V[_V.length]={context:_I,events:{'click.native':_g('click.native','link.article','click','native','link','article',$0,$2)},isComponent:$2,operator:_E,props:{className:'bell-article-link',name:'links-line'},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_s('subTitle',_W.subTitle).value?_U[_U.length]={context:_I,nativeAttrs:$6,operator:_D,tag:'div',text:_A(_s('subTitle',_W.subTitle).value),type:3}:_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['subTitle'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_subTitle',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['cover'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_cover',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$7,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_content',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$8,operator:_D,tag:'div',type:3};_s('signature',_W.signature).value?_U[_U.length]={context:_I,nativeAttrs:$9,operator:_D,tag:'div',text:_A(_s('signature',_W.signature).value),type:3}:_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['signature'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_signature',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$9,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-article'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Article = Yox.define({
      template: template$y,
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

  var template$z = (function(){var $0=void 0,$2=!0,$5={class:'bell-analysis-title'},$6={class:'bell-analysis-header'},$7={class:'bell-analysis-value'},$8={class:'bell-analysis-content-wrapper'},$9={class:'bell-analysis-content'},$10={class:'bell-analysis-footer'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$5,operator:_D,tag:'div',text:_A(_s('title',_W.title).value),type:3};_s('tooltip',_W.tooltip).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{content:_s('tooltip',_W.tooltip).value,placement:_s('RAW_TOP',_W.RAW_TOP).value},slots:_j({$slot_children:function(_U,_V){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-analysis-icon-question',name:'question-line'},tag:'Icon',type:4};}}),tag:'Tooltip',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3};_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-analysis-skeleton',loading:_s('loading',_W.loading).value,text:{rows:3}},slots:_j({$slot_children:function(_U,_V){_U[_U.length]={context:_I,nativeAttrs:$7,operator:_D,tag:'div',text:_A(_s('value',_W.value).value),type:3};_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['content'])).value?_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_content',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$8,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:$9,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_footer',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$10,operator:_D,tag:'div',type:3};}}),tag:'Skeleton',type:4};return _U}([]),context:_I,nativeAttrs:{class:'bell-analysis'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Analysis = Yox.define({
      template: template$z,
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

  var template$A = (function(){var $0=void 0,$2=!0,$5={class:'bell-analysis-field-label'},$6={class:'bell-analysis-field-value'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$5,operator:_D,tag:'span',text:_A(_s('label',_W.label).value),type:3};_U[_U.length]={context:_I,nativeAttrs:$6,operator:_D,tag:'span',text:_A(_s('value',_W.value).value),type:3};_s('up',_W.up).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-analysis-field-icon-up',name:'arrow-up-s-fill'},tag:'Icon',type:4}:_s('down',_W.down).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-analysis-field-icon-down',name:'arrow-down-s-fill'},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-analysis-field'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var AnalysisField = Yox.define({
      template: template$A,
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

  var template$B = (function(){var $0=void 0,$2=!0,$4={class:'bell-spin-dot-item'},$5={class:'bell-spin-dot-list'},$7={class:'bell-spin-text'},$8={class:'bell-spin-wrapper'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]={children:[{context:_I,isPure:$2,isStatic:$2,nativeAttrs:$4,operator:_D,tag:'i',type:3},{context:_I,isPure:$2,isStatic:$2,nativeAttrs:$4,operator:_D,tag:'i',type:3},{context:_I,isPure:$2,isStatic:$2,nativeAttrs:$4,operator:_D,tag:'i',type:3},{context:_I,isPure:$2,isStatic:$2,nativeAttrs:$4,operator:_D,tag:'i',type:3}],context:_I,isPure:$2,isStatic:$2,nativeAttrs:$5,operator:_D,tag:'div',type:3};_s('text',_W.text).value?_U[_U.length]={context:_I,nativeAttrs:$7,operator:_D,tag:'div',text:_A(_s('text',_W.text).value),type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:$8,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-spin'+(_s('size',_W.size).value?' bell-spin-'+_A(_s('size',_W.size).value):'')+(_s('fixed',_W.fixed).value?' bell-spin-fixed':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Spin = Yox.define({
      template: template$B,
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

  var template$C = (function(){var $0=void 0,$2=!0,$5={class:'bell-split-button-menu'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-split-button'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):''),size:_s('size',_W.size).value,style:_s('style',_W.style).value},slots:_j({$slot_children:function(_U,_V){_U[_U.length]=_V[_V.length]={context:_I,events:{click:_f('click','handleButtonClick()','click','','handleButtonClick',$0,$2)},isComponent:$2,operator:_E,props:{disabled:_s('disabled',_W.disabled).value,loading:_s('loading',_W.loading).value,type:_s('type',_W.type).value},slots:_j({$slot_children:function(_U,_V){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);}}),tag:'Button',type:4};_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{disabled:_s('disabled',_W.disabled).value||_s('loading',_W.loading).value,gap:'5',placement:_s('placement',_W.placement).value,trigger:_s('RAW_CLICK',_W.RAW_CLICK).value,visible:_s('menuVisible',_W.menuVisible).value},slots:_j({$slot_children:function(_U,_V){_U[_U.length]=_V[_V.length]=function(_T){_s('loading',_W.loading).value?_o(_T,'props','className','bell-button-loading'):$0;return _T}({context:_I,isComponent:$2,operator:_E,props:{disabled:_s('disabled',_W.disabled).value,type:_s('type',_W.type).value},slots:_j({$slot_children:function(_U,_V){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{name:'arrow-down-s-line'},tag:'Icon',type:4};}}),tag:'Button',type:4});},$slot_overlay:function(_U,_V){_U[_U.length]={children:function(_U){_m(_s('menu',_W.menu),function(_W,_X,_Y,index){_U[_U.length]=function(_T){!_v('disabled',_W.disabled).value?_o(_T,'events','click',_f('click','handleItemClick(this, index)','click','','handleItemClick',{args:function(_S,_Z,_1){return [_t(_W,_S).value,index]}})):$0;return _T}({context:_I,nativeAttrs:{class:'bell-split-button-menu-item'+(_v('disabled',_W.disabled).value?' bell-split-button-menu-item-disabled':' bell-split-button-menu-item-enabled')},operator:_D,tag:'div',text:_A(_v('text',_W.text).value),type:3});});return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3};}}),tag:'Popover',type:4};}}),tag:'ButtonGroup',type:4};}})();

  var SplitButton = Yox.define({
      template: template$C,
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

  var template$D = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_s('visible',_W.visible).value?_a({children:function(_U){_U[_U.length]=function(_T){_s('bottom',_W.bottom).value||_s('right',_W.right).value||_s('style',_W.style).value?_T.nativeStyles=_c([{bottom:_s('bottom',_W.bottom).value?_s('bottom',_W.bottom).value+'px':$0,right:_s('right',_W.right).value?_s('right',_W.right).value+'px':$0},_s('style',_W.style).value]):$0;return _T}({children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{name:'arrow-up-line'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_g('click','click.backTop','click','','click','backTop')},nativeAttrs:{class:'bell-backtop'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',transition:_d('backTop',_Q&&_Q.backTop||_R.backTop),type:3});return _U}([]),context:_I,operator:_G,tag:'portal',type:6},_U):_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};}})();

  var CLASS_VISIBLE$1 = 'bell-backtop-visible';
  var CLASS_FADE$1 = 'bell-backtop-fade';
  var BackTop = Yox.define({
      template: template$D,
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

  var template$E = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('clickable',_W.clickable).value?_o(_T,'events','click',_g('click','click','click','','click')):$0;return _T}({children:function(_U){_s('url',_W.url).value||_s('src',_W.src).value?_U[_U.length]=function(_T){_s('url',_W.url).value?_o(_T,'nativeAttrs','src',_s('formatUrl',_W.formatUrl).value?_z(_y(_s('formatUrl',_W.formatUrl,$0,_J&&_J.formatUrl||_K.formatUrl).value,_I,[{height:_s('sizeValue',_W.sizeValue).value,responsive:$2,url:_s('url',_W.url).value,width:_s('sizeValue',_W.sizeValue).value}])).value:_s('url',_W.url).value):_o(_T,'nativeAttrs','src',_s('src',_W.src).value);_s('srcSet',_W.srcSet).value?_o(_T,'nativeAttrs','srcset',_s('srcSet',_W.srcSet).value):$0;_s('alt',_W.alt).value?_o(_T,'nativeAttrs','alt',_s('alt',_W.alt).value):$0;return _T}({context:_I,events:{error:_g('error','error.avatar','error','','error','avatar')},nativeAttrs:{ondragstart:'return false'},operator:_D,tag:'img',type:3}):_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['icon'])).value?_a({children:function(_U){_k('$slot_icon',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U):_s('text',_W.text).value?_U[_U.length]=function(_T){_s('color',_W.color).value||_s('fontSize',_W.fontSize).value?_T.nativeStyles={color:_s('color',_W.color).value||$0,fontSize:_s('fontSize',_W.fontSize).value?_s('fontSize',_W.fontSize).value+'px':$0}:$0;return _T}({context:_I,nativeAttrs:{class:'bell-avatar-text'},operator:_D,ref:'text',tag:'span',text:_A(_s('text',_W.text).value),type:3}):_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-avatar'+(_s('shape',_W.shape).value?' bell-avatar-'+_A(_s('shape',_W.shape).value):'')+(_s('src',_W.src).value?' bell-avatar-image':'')+(_s('clickable',_W.clickable).value?' bell-avatar-clickable':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},nativeStyles:_c([{backgroundColor:_s('backgroundColor',_W.backgroundColor).value||$0,height:_s('sizeValue',_W.sizeValue).value+'px',width:_s('sizeValue',_W.sizeValue).value+'px'},_s('style',_W.style).value]),operator:_D,tag:'div',type:3});}})();

  var SPACE_HORIZONTAL = 8;
  var SIZE_DEFAULT = 32;
  var SIZE_SMALL = 24;
  var SIZE_LARGE = 40;
  var Avatar = Yox.define({
      template: template$E,
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

  var template$F = (function(){var $0=void 0,$2=!0,$5={class:'bell-badge-dot'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);!_s('hidden',_W.hidden).value?(_s('dot',_W.dot).value?_U[_U.length]={context:_I,isPure:$2,isStatic:$2,nativeAttrs:$5,operator:_D,tag:'span',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2},_s('text',_W.text).value||_z(_y(_s('isNumeric',_W.isNumeric,$0,_J&&_J.isNumeric||_K.isNumeric).value,_I,[_s('count',_W.count).value])).value?_U[_U.length]={context:_I,nativeAttrs:{class:'bell-badge-text'+(_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['children'])).value?' bell-badge-text-append':'')},operator:_D,tag:'span',text:_A(_s('text',_W.text).value||_z(_y(_s('formatText',_W.formatText,$0,_J&&_J.formatText||_K.formatText).value,_I,[_s('count',_W.count).value,_s('max',_W.max).value])).value),type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2}):_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-badge'+(_s('status',_W.status).value?'-status':'')+(_s('status',_W.status).value?' bell-badge-status-'+_A(_s('status',_W.status).value):_s('type',_W.type).value?' bell-badge-'+_A(_s('type',_W.type).value):'')+(_s('dot',_W.dot).value&&_s('text',_W.text).value?' bell-badge-with-dot-text':'')+(_s('ripple',_W.ripple).value?' bell-badge-ripple':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Badge = Yox.define({
      template: template$F,
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

  var template$G = (function(){var $0=void 0,$2=!0,$4=function(_S){return _S.length-1},$5={class:'bell-date-picker-header-button'},$6={class:'bell-date-picker-prev'},$7={class:'bell-date-picker-header-year'},$8={class:'bell-date-picker-header-month'},$9={class:'bell-date-picker-next'},$10={class:'bell-date-picker-header'},$11={class:'bell-date-picker-col'},$12={class:'bell-date-picker-weeks'},$13={class:'bell-date-picker-text'},$14={class:'bell-date-picker-row'},$15={class:'bell-date-picker-days'},$16={class:'bell-date-picker-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_s('type',_W.type).value===_s('RAW_TYPE_DATE',_W.RAW_TYPE_DATE).value?_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','offset(-12)','click','','offset',{args:function(_S,_Z,_1){return [-12]}})},nativeAttrs:$5,operator:_D,tag:'span',type:3};_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','offset(-1)','click','','offset',{args:function(_S,_Z,_1){return [-1]}})},nativeAttrs:$5,operator:_D,tag:'span',type:3};return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3};_U[_U.length]=function(_T){_s('canPickYear',_W.canPickYear).value?(_o(_T,'nativeAttrs','class','bell-date-picker-header-link'),_o(_T,'events','click',_f('click',"set('type', RAW_TYPE_YEAR)",'click','','set',{args:function(_S,_Z,_1){return ['type',_s('RAW_TYPE_YEAR',_W.RAW_TYPE_YEAR,_S).value]}}))):$0;return _T}({children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$7,operator:_D,tag:'span',text:_A(_r($4,'date.year',$2).value),type:3};_U[_U.length]={isPure:$2,operator:_B,text:'年',type:1};return _U}([]),context:_I,operator:_D,tag:'span',type:3});_U[_U.length]=function(_T){_s('canPickMonth',_W.canPickMonth).value?(_o(_T,'nativeAttrs','class','bell-date-picker-header-link'),_o(_T,'events','click',_f('click',"set('type', RAW_TYPE_MONTH)",'click','','set',{args:function(_S,_Z,_1){return ['type',_s('RAW_TYPE_MONTH',_W.RAW_TYPE_MONTH,_S).value]}}))):$0;return _T}({children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$8,operator:_D,tag:'span',text:_A(_r($4,'date.month',$2).value),type:3};_U[_U.length]={isPure:$2,operator:_B,text:'月',type:1};return _U}([]),context:_I,operator:_D,tag:'span',type:3});_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','offset(1)','click','','offset',{args:function(_S,_Z,_1){return [1]}})},nativeAttrs:$5,operator:_D,tag:'span',type:3};_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','offset(12)','click','','offset',{args:function(_S,_Z,_1){return [12]}})},nativeAttrs:$5,operator:_D,tag:'span',type:3};return _U}([]),context:_I,nativeAttrs:$9,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:$10,operator:_D,tag:'div',type:3};_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_m(_s('weeks',_W.weeks),function(_W,_X,_Y){_U[_U.length]={context:_I,nativeAttrs:$11,operator:_D,tag:'div',text:_A(_t(_W).value),type:3};});return _U}([]),context:_I,nativeAttrs:$12,operator:_D,tag:'div',type:3};_U[_U.length]={children:function(_U){_m(_s('datasource',_W.datasource),function(_W,_X,_Y){_U[_U.length]={children:function(_U){_m(_v('list',_W.list),function(_W,_X,_Y){_U[_U.length]=function(_T){_z(_y(_s('isEnabled',_W.isEnabled,$0,_J&&_J.isEnabled||_K.isEnabled).value,_I,[_t(_W).value])).value?_o(_T,'events','click',_f('click','click(this)','click','','click',{args:function(_S,_Z,_1){return [_t(_W,_S).value]}})):$0;return _T}({children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$13,operator:_D,tag:'div',text:_A(_v('date',_W.date).value),type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-date-picker-col'+(_z(_y(_s('isEnabled',_W.isEnabled,$0,_J&&_J.isEnabled||_K.isEnabled).value,_I,[_t(_W).value])).value?' bell-date-picker-col-enabled'+(_z(_y(_s('isCurrentMonth',_W.isCurrentMonth,$0,_J&&_J.isCurrentMonth||_K.isCurrentMonth).value,_I,[_t(_W).value])).value?' bell-date-picker-col-current-month'+(_z(_y(_s('isChecked',_W.isChecked,$0,_J&&_J.isChecked||_K.isChecked).value,_I,[_t(_W).value])).value?' bell-date-picker-col-checked':''):' bell-date-picker-col-adjacent-month'):' bell-date-picker-col-disabled')},operator:_D,tag:'div',type:3});});return _U}([]),context:_I,nativeAttrs:$14,operator:_D,tag:'div',type:3};});return _U}([]),context:_I,nativeAttrs:$15,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:$16,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-date-picker-date bell-date-picker-panel'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3}):_s('type',_W.type).value===_s('RAW_TYPE_YEAR',_W.RAW_TYPE_YEAR).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{checkedYear:_r($4,'date.year',$2).value},tag:'DateYear',type:4}:_s('type',_W.type).value===_s('RAW_TYPE_MONTH',_W.RAW_TYPE_MONTH).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{checkedMonth:_r($4,'date.month',$2).value,checkedYear:_r($4,'date.year',$2).value},tag:'DateMonth',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};}})();

  var template$H = (function(){var $0=void 0,$2=!0,$5={class:'bell-date-picker-header-button'},$6={class:'bell-date-picker-prev'},$7={class:'bell-date-picker-header-year'},$8={class:'bell-date-picker-next'},$9={class:'bell-date-picker-header'},$10={class:'bell-date-picker-text'},$11={class:'bell-date-picker-row'},$12={class:'bell-date-picker-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_s('type',_W.type).value===_s('RAW_TYPE_MONTH',_W.RAW_TYPE_MONTH).value?_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click',"decrease('year', 10)",'click','','decrease',{args:function(_S,_Z,_1){return ['year',10]}})},nativeAttrs:$5,operator:_D,tag:'span',type:3};_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click',"decrease('year', 1)",'click','','decrease',{args:function(_S,_Z,_1){return ['year',1]}})},nativeAttrs:$5,operator:_D,tag:'span',type:3};return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3};_U[_U.length]=function(_T){_s('canPickYear',_W.canPickYear).value?(_o(_T,'nativeAttrs','class','bell-date-picker-header-link'),_o(_T,'events','click',_f('click',"set('type', RAW_TYPE_YEAR)",'click','','set',{args:function(_S,_Z,_1){return ['type',_s('RAW_TYPE_YEAR',_W.RAW_TYPE_YEAR,_S).value]}}))):$0;return _T}({children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$7,operator:_D,tag:'span',text:_A(_s('year',_W.year).value),type:3};_U[_U.length]={isPure:$2,operator:_B,text:'年',type:1};return _U}([]),context:_I,operator:_D,tag:'span',type:3});_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click',"increase('year', 1)",'click','','increase',{args:function(_S,_Z,_1){return ['year',1]}})},nativeAttrs:$5,operator:_D,tag:'span',type:3};_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click',"increase('year', 10)",'click','','increase',{args:function(_S,_Z,_1){return ['year',10]}})},nativeAttrs:$5,operator:_D,tag:'span',type:3};return _U}([]),context:_I,nativeAttrs:$8,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:$9,operator:_D,tag:'div',type:3};_U[_U.length]={children:function(_U){_m(_s('datasource',_W.datasource),function(_W,_X,_Y){_U[_U.length]={children:function(_U){_m(_t(_W),function(_W,_X,_Y){_U[_U.length]={children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$10,operator:_D,tag:'div',text:_A(_v('text',_W.text).value),type:3};return _U}([]),context:_I,events:{click:_f('click','click(this)','click','','click',{args:function(_S,_Z,_1){return [_t(_W,_S).value]}})},nativeAttrs:{class:'bell-date-picker-col bell-date-picker-col-enabled'+(_z(_y(_s('isChecked',_W.isChecked,$0,_J&&_J.isChecked||_K.isChecked).value,_I,[_t(_W).value])).value?' bell-date-picker-col-checked':'')},operator:_D,tag:'div',type:3};});return _U}([]),context:_I,nativeAttrs:$11,operator:_D,tag:'div',type:3};});return _U}([]),context:_I,nativeAttrs:$12,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-date-picker-month bell-date-picker-panel'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3}):_s('type',_W.type).value===_s('RAW_TYPE_YEAR',_W.RAW_TYPE_YEAR).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{checkedYear:_s('year',_W.year).value},tag:'DateYear',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};}})();

  var template$I = (function(){var $0=void 0,$2=!0,$4={class:'bell-date-picker-header-button bell-date-picker-prev'},$6={class:'bell-date-picker-header-year'},$7={class:'bell-date-picker-header-separator'},$8={class:'bell-date-picker-header-button bell-date-picker-next'},$9={class:'bell-date-picker-header'},$10={class:'bell-date-picker-text'},$11={class:'bell-date-picker-row'},$12={class:'bell-date-picker-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click',"decrease('year', count)",'click','','decrease',{args:function(_S,_Z,_1){return ['year',_s('count',_W.count,_S).value]}})},nativeAttrs:$4,operator:_D,tag:'span',type:3};_U[_U.length]={context:_I,nativeAttrs:$6,operator:_D,tag:'span',text:_A(_s('year',_W.year).value),type:3};_U[_U.length]={isPure:$2,operator:_B,text:'年',type:1};_U[_U.length]={context:_I,isPure:$2,isStatic:$2,nativeAttrs:$7,operator:_D,tag:'span',text:'-',type:3};_U[_U.length]={context:_I,nativeAttrs:$6,operator:_D,tag:'span',text:_A(_s('year',_W.year).value+_s('count',_W.count).value-1),type:3};_U[_U.length]={isPure:$2,operator:_B,text:'年',type:1};_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click',"increase('year', count)",'click','','increase',{args:function(_S,_Z,_1){return ['year',_s('count',_W.count,_S).value]}})},nativeAttrs:$8,operator:_D,tag:'span',type:3};return _U}([]),context:_I,nativeAttrs:$9,operator:_D,tag:'div',type:3};_U[_U.length]={children:function(_U){_m(_s('datasource',_W.datasource),function(_W,_X,_Y){_U[_U.length]={children:function(_U){_m(_t(_W),function(_W,_X,_Y){_U[_U.length]={children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$10,operator:_D,tag:'div',text:_A(_t(_W).value),type:3};return _U}([]),context:_I,events:{click:_f('click','click(this)','click','','click',{args:function(_S,_Z,_1){return [_t(_W,_S).value]}})},nativeAttrs:{class:'bell-date-picker-col bell-date-picker-col-enabled'+(_z(_y(_s('isChecked',_W.isChecked,$0,_J&&_J.isChecked||_K.isChecked).value,_I,[_t(_W).value])).value?' bell-date-picker-col-checked':'')},operator:_D,tag:'div',type:3};});return _U}([]),context:_I,nativeAttrs:$11,operator:_D,tag:'div',type:3};});return _U}([]),context:_I,nativeAttrs:$12,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-date-picker-year bell-date-picker-panel'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var WEEKS = ['日', '一', '二', '三', '四', '五', '六'];
  var SECOND = 1000;
  var MINUTE = 60 * SECOND;
  var HOUR = 60 * MINUTE;
  var DAY = 24 * HOUR;
  var STABLE_DURATION = 41 * DAY;
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
      return new Date(date.getTime() - day * DAY);
  }
  function lastDateInWeek(date) {
      var day = date.getDay();
      return new Date(date.getTime() - (6 - day) * DAY);
  }
  function firstDateInMonth(date) {
      date.setDate(1);
      return date;
  }
  function lastDateInMonth(date) {
      date.setDate(1);
      date.setMonth(date.getMonth() + 1);
      return new Date(date.getTime() - DAY);
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
      for (var i = 0, time = startDate; time <= endDate; i++, time += DAY) {
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
      template: template$I,
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
          isChecked: function (year) {
              var checkedYears = this.get('checkedYears');
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
      template: template$H,
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
          isChecked: function (item) {
              var checkedTimestamps = this.get('checkedTimestamps');
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
      template: template$G,
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
          isCurrentMonth: function (item) {
              var date = this.get('date');
              return date.year === item.year && date.month === item.month;
          },
          isEnabled: function (item) {
              var disabledDate = this.get('disabledDate');
              return disabledDate
                  ? disabledDate(item)
                  : TRUE;
          },
          isChecked: function (item) {
              var checkedTimestamps = this.get('checkedTimestamps');
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

  var template$J = (function(){var $0=void 0,$2=!0,$4={class:'bell-date-picker-header-button'},$5={class:'bell-date-picker-prev'},$6=function(_S){return _S.length-1},$7={class:'bell-date-picker-header-year'},$8={class:'bell-date-picker-header-month'},$9={class:'bell-date-picker-next'},$10={class:'bell-date-picker-header'},$11={class:'bell-date-picker-col'},$12={class:'bell-date-picker-weeks'},$13={class:'bell-date-picker-text'},$14=function(){return 0},$15={class:'bell-date-picker-row'},$16={class:'bell-date-picker-days'},$17={class:'bell-date-picker-body'},$18={class:'bell-date-picker-panel'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','offsetStart(-12)','click','','offsetStart',{args:function(_S,_Z,_1){return [-12]}})},nativeAttrs:$4,operator:_D,tag:'span',type:3};_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','offsetStart(-1)','click','','offsetStart',{args:function(_S,_Z,_1){return [-1]}})},nativeAttrs:$4,operator:_D,tag:'span',type:3};return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3};_U[_U.length]={context:_I,nativeAttrs:$7,operator:_D,tag:'span',text:_A(_r($6,'startDate.year',$2).value),type:3};_U[_U.length]={isPure:$2,operator:_B,text:'年',type:1};_U[_U.length]={context:_I,nativeAttrs:$8,operator:_D,tag:'span',text:_A(_r($6,'startDate.month',$2).value),type:3};_U[_U.length]={isPure:$2,operator:_B,text:'月',type:1};_s('splitPanel',_W.splitPanel).value?_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','offsetStart(1)','click','','offsetStart',{args:function(_S,_Z,_1){return [1]}})},nativeAttrs:$4,operator:_D,tag:'span',type:3};_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','offsetStart(12)','click','','offsetStart',{args:function(_S,_Z,_1){return [12]}})},nativeAttrs:$4,operator:_D,tag:'span',type:3};return _U}([]),context:_I,nativeAttrs:$9,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:$10,operator:_D,tag:'div',type:3};_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_m(_s('weeks',_W.weeks),function(_W,_X,_Y){_U[_U.length]={context:_I,nativeAttrs:$11,operator:_D,tag:'div',text:_A(_t(_W).value),type:3};});return _U}([]),context:_I,nativeAttrs:$12,operator:_D,tag:'div',type:3};_U[_U.length]={children:function(_U){_m(_s('startDatasource',_W.startDatasource),function(_W,_X,_Y){_U[_U.length]={children:function(_U){_m(_v('list',_W.list),function(_W,_X,_Y){_U[_U.length]=function(_T){_w($14,'pinDate').value?_o(_T,'events','mouseenter',_f('mouseenter','hover(this)','mouseenter','','hover',{args:function(_S,_Z,_1){return [_t(_W,_S).value]}})):$0;_z(_y(_s('isEnabled',_W.isEnabled,$0,_J&&_J.isEnabled||_K.isEnabled).value,_I,[_t(_W).value])).value?_o(_T,'events','click',_f('click','click(this)','click','','click',{args:function(_S,_Z,_1){return [_t(_W,_S).value]}})):$0;return _T}({children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$13,operator:_D,tag:'div',text:_A(_v('date',_W.date).value),type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-date-picker-col'+(_z(_y(_s('isEnabled',_W.isEnabled,$0,_J&&_J.isEnabled||_K.isEnabled).value,_I,[_t(_W).value])).value?' bell-date-picker-col-enabled'+(_z(_y(_s('isCurrentMonth',_W.isCurrentMonth,$0,_J&&_J.isCurrentMonth||_K.isCurrentMonth).value,_I,[_t(_W).value,_w($14,'startDate').value])).value?' bell-date-picker-col-current-month'+(_v('timestamp',_W.timestamp).value===_w($14,'computedCheckedStartTimestamp').value?' bell-date-picker-col-checked'+(_w($14,'computedCheckedEndTimestamp').value?' bell-date-picker-col-start':' bell-date-picker-col-range'):'')+(_v('timestamp',_W.timestamp).value===_w($14,'computedCheckedEndTimestamp').value?' bell-date-picker-col-checked bell-date-picker-col-end':'')+(_w($14,'computedCheckedStartTimestamp').value<_v('timestamp',_W.timestamp).value&&_w($14,'computedCheckedEndTimestamp').value>_v('timestamp',_W.timestamp).value?' bell-date-picker-col-range':''):' bell-date-picker-col-adjacent-month'):' bell-date-picker-col-disabled')},operator:_D,tag:'div',type:3});});return _U}([]),context:_I,nativeAttrs:$15,operator:_D,tag:'div',type:3};});return _U}([]),context:_I,events:{mouseleave:_f('mouseleave','leave()','mouseleave','','leave')},nativeAttrs:$16,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:$17,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:$18,operator:_D,tag:'div',type:3};_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_s('splitPanel',_W.splitPanel).value?_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','offsetEnd(-12)','click','','offsetEnd',{args:function(_S,_Z,_1){return [-12]}})},nativeAttrs:$4,operator:_D,tag:'span',type:3};_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','offsetEnd(-1)','click','','offsetEnd',{args:function(_S,_Z,_1){return [-1]}})},nativeAttrs:$4,operator:_D,tag:'span',type:3};return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_U[_U.length]={context:_I,nativeAttrs:$7,operator:_D,tag:'span',text:_A(_r($6,'endDate.year',$2).value),type:3};_U[_U.length]={isPure:$2,operator:_B,text:'年',type:1};_U[_U.length]={context:_I,nativeAttrs:$8,operator:_D,tag:'span',text:_A(_r($6,'endDate.month',$2).value),type:3};_U[_U.length]={isPure:$2,operator:_B,text:'月',type:1};_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','offsetEnd(1)','click','','offsetEnd',{args:function(_S,_Z,_1){return [1]}})},nativeAttrs:$4,operator:_D,tag:'span',type:3};_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','offsetEnd(12)','click','','offsetEnd',{args:function(_S,_Z,_1){return [12]}})},nativeAttrs:$4,operator:_D,tag:'span',type:3};return _U}([]),context:_I,nativeAttrs:$9,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:$10,operator:_D,tag:'div',type:3};_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_m(_s('weeks',_W.weeks),function(_W,_X,_Y){_U[_U.length]={context:_I,nativeAttrs:$11,operator:_D,tag:'div',text:_A(_t(_W).value),type:3};});return _U}([]),context:_I,nativeAttrs:$12,operator:_D,tag:'div',type:3};_U[_U.length]={children:function(_U){_m(_s('endDatasource',_W.endDatasource),function(_W,_X,_Y){_U[_U.length]={children:function(_U){_m(_v('list',_W.list),function(_W,_X,_Y){_U[_U.length]=function(_T){_w($14,'pinDate').value?_o(_T,'events','mouseenter',_f('mouseenter','hover(this)','mouseenter','','hover',{args:function(_S,_Z,_1){return [_t(_W,_S).value]}})):$0;_z(_y(_s('isEnabled',_W.isEnabled,$0,_J&&_J.isEnabled||_K.isEnabled).value,_I,[_t(_W).value])).value?_o(_T,'events','click',_f('click','click(this)','click','','click',{args:function(_S,_Z,_1){return [_t(_W,_S).value]}})):$0;return _T}({children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$13,operator:_D,tag:'div',text:_A(_v('date',_W.date).value),type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-date-picker-col'+(_z(_y(_s('isEnabled',_W.isEnabled,$0,_J&&_J.isEnabled||_K.isEnabled).value,_I,[_t(_W).value])).value?' bell-date-picker-col-enabled'+(_z(_y(_s('isCurrentMonth',_W.isCurrentMonth,$0,_J&&_J.isCurrentMonth||_K.isCurrentMonth).value,_I,[_t(_W).value,_w($14,'endDate').value])).value?' bell-date-picker-col-current-month'+(_v('timestamp',_W.timestamp).value===_w($14,'computedCheckedStartTimestamp').value?' bell-date-picker-col-checked'+(_w($14,'computedCheckedEndTimestamp').value?' bell-date-picker-col-start':' bell-date-picker-col-range'):'')+(_v('timestamp',_W.timestamp).value===_w($14,'computedCheckedEndTimestamp').value?' bell-date-picker-col-checked bell-date-picker-col-end':'')+(_w($14,'computedCheckedStartTimestamp').value<_v('timestamp',_W.timestamp).value&&_w($14,'computedCheckedEndTimestamp').value>_v('timestamp',_W.timestamp).value?' bell-date-picker-col-range':''):' bell-date-picker-col-adjacent-month'):' bell-date-picker-col-disabled')},operator:_D,tag:'div',type:3});});return _U}([]),context:_I,nativeAttrs:$15,operator:_D,tag:'div',type:3};});return _U}([]),context:_I,events:{mouseleave:_f('mouseleave','leave()','mouseleave','','leave')},nativeAttrs:$16,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:$17,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:$18,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-date-picker-daterange'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

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
      template: template$J,
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
          isEnabled: function (item) {
              var disabledDate = this.get('disabledDate');
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

  var template$K = (function(){var $0=void 0,$2=!0,$4=function(_S){return _S.length-1},$5={class:'bell-date-picker-header-button'},$6={class:'bell-date-picker-prev'},$7={class:'bell-date-picker-header-year'},$8={class:'bell-date-picker-header-month'},$9={class:'bell-date-picker-next'},$10={class:'bell-date-picker-header'},$11={class:'bell-date-picker-col'},$12={class:'bell-date-picker-weeks'},$13={class:'bell-date-picker-text'},$14=function(){return 0},$15=function(_S){return _S.length-2},$16={class:'bell-date-picker-row'},$17={class:'bell-date-picker-days'},$18={class:'bell-date-picker-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_s('type',_W.type).value===_s('RAW_TYPE_WEEK',_W.RAW_TYPE_WEEK).value?_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','offset(-12)','click','','offset',{args:function(_S,_Z,_1){return [-12]}})},nativeAttrs:$5,operator:_D,tag:'span',type:3};_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','offset(-1)','click','','offset',{args:function(_S,_Z,_1){return [-1]}})},nativeAttrs:$5,operator:_D,tag:'span',type:3};return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3};_U[_U.length]=function(_T){_s('canPickYear',_W.canPickYear).value?(_o(_T,'nativeAttrs','class','bell-date-picker-header-link'),_o(_T,'events','click',_f('click',"set('type', RAW_TYPE_YEAR)",'click','','set',{args:function(_S,_Z,_1){return ['type',_s('RAW_TYPE_YEAR',_W.RAW_TYPE_YEAR,_S).value]}}))):$0;return _T}({children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$7,operator:_D,tag:'span',text:_A(_r($4,'date.year',$2).value),type:3};_U[_U.length]={isPure:$2,operator:_B,text:'年',type:1};return _U}([]),context:_I,operator:_D,tag:'span',type:3});_U[_U.length]=function(_T){_s('canPickMonth',_W.canPickMonth).value?(_o(_T,'nativeAttrs','class','bell-date-picker-header-link'),_o(_T,'events','click',_f('click',"set('type', RAW_TYPE_MONTH)",'click','','set',{args:function(_S,_Z,_1){return ['type',_s('RAW_TYPE_MONTH',_W.RAW_TYPE_MONTH,_S).value]}}))):$0;return _T}({children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$8,operator:_D,tag:'span',text:_A(_r($4,'date.month',$2).value),type:3};_U[_U.length]={isPure:$2,operator:_B,text:'月',type:1};return _U}([]),context:_I,operator:_D,tag:'span',type:3});_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','offset(12)','click','','offset',{args:function(_S,_Z,_1){return [12]}})},nativeAttrs:$5,operator:_D,tag:'span',type:3};_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','offset(1)','click','','offset',{args:function(_S,_Z,_1){return [1]}})},nativeAttrs:$5,operator:_D,tag:'span',type:3};return _U}([]),context:_I,nativeAttrs:$9,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:$10,operator:_D,tag:'div',type:3};_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_m(_s('weeks',_W.weeks),function(_W,_X,_Y){_U[_U.length]={context:_I,nativeAttrs:$11,operator:_D,tag:'div',text:_A(_t(_W).value),type:3};});return _U}([]),context:_I,nativeAttrs:$12,operator:_D,tag:'div',type:3};_U[_U.length]={children:function(_U){_m(_s('datasource',_W.datasource),function(_W,_X,_Y,rowIndex){_U[_U.length]={children:function(_U){_m(_v('list',_W.list),function(_W,_X,_Y,colIndex){_U[_U.length]=function(_T){_z(_y(_s('isEnabled',_W.isEnabled,$0,_J&&_J.isEnabled||_K.isEnabled).value,_I,[_t(_W).value])).value?_o(_T,'events','click',_f('click','click(../rowIndex)','click','','click',{args:function(_S,_Z,_1){return [rowIndex]}})):$0;return _T}({children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$13,operator:_D,tag:'div',text:_A(_v('date',_W.date).value),type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-date-picker-col'+(_z(_y(_s('isEnabled',_W.isEnabled,$0,_J&&_J.isEnabled||_K.isEnabled).value,_I,[_t(_W).value])).value?' bell-date-picker-col-enabled'+(_z(_y(_s('isCurrentMonth',_W.isCurrentMonth,$0,_J&&_J.isCurrentMonth||_K.isCurrentMonth).value,_I,[_t(_W).value])).value?' bell-date-picker-col-current-month':' bell-date-picker-col-adjacent-month'):' bell-date-picker-col-disabled')+(_w($14,'checkedTimestamp').value>=_r($15,'start.timestamp').value&&_w($14,'checkedTimestamp').value<_r($15,'end.timestamp').value?colIndex===0?' bell-date-picker-col-checked bell-date-picker-col-start':colIndex===_Y-1?' bell-date-picker-col-checked bell-date-picker-col-end':' bell-date-picker-col-range':'')},operator:_D,tag:'div',type:3});});return _U}([]),context:_I,nativeAttrs:$16,operator:_D,tag:'div',type:3};});return _U}([]),context:_I,nativeAttrs:$17,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:$18,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-date-picker-week bell-date-picker-panel'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3}):_s('type',_W.type).value===_s('RAW_TYPE_YEAR',_W.RAW_TYPE_YEAR).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{checkedYear:_r($4,'date.year',$2).value},tag:'DateYear',type:4}:_s('type',_W.type).value===_s('RAW_TYPE_MONTH',_W.RAW_TYPE_MONTH).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{checkedMonth:_r($4,'date.month',$2).value,checkedYear:_r($4,'date.year',$2).value},tag:'DateMonth',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};}})();

  var DateWeek = Yox.define({
      template: template$K,
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
          isCurrentMonth: function (item) {
              var date = this.get('date');
              return date.year === item.year && date.month === item.month;
          },
          isEnabled: function (item) {
              var disabledDate = this.get('disabledDate');
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

  var template$L = (function(){var $0=void 0,$2=!0,$4=function(_S){return _S.length-1},$5={class:'bell-date-picker-values'},$6={class:'bell-date-picker-separator'},$7={class:'bell-date-picker-value'},$8={class:'bell-date-picker-placeholder'},$9={class:'bell-date-picker-shortcut-item'},$10={class:'bell-date-picker-shortcut'},$11={class:'bell-date-picker-overlay'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{gap:'5',placement:_s('placement',_W.placement).value,trigger:_s('RAW_CUSTOM',_W.RAW_CUSTOM).value,visible:_s('visible',_W.visible).value},ref:'overlay',slots:_j({$slot_children:function(_U,_V){_U[_U.length]=function(_T){!_s('disabled',_W.disabled).value?_o(_T,'events','click',_f('click',"toggle('visible')",'click','','toggle',{args:function(_S,_Z,_1){return ['visible']}})):$0;_s('width',_W.width).value||_s('style',_W.style).value?_T.nativeStyles=_c([_s('width',_W.width).value?{width:_s('width',_W.width).value+'px'}:$0,_s('style',_W.style).value]):$0;return _T}({children:function(_U){_r($4,'formatedValues.length',$2).value>0?_s('multiple',_W.multiple).value&&_s('type',_W.type).value!==_s('RAW_TYPE_DATE_RANGE',_W.RAW_TYPE_DATE_RANGE).value&&_s('type',_W.type).value!==_s('RAW_TYPE_WEEK',_W.RAW_TYPE_WEEK).value?_U[_U.length]={children:function(_U){_m(_s('formatedValues',_W.formatedValues),function(_W,_X,_Y,index){_U[_U.length]=_V[_V.length]={context:_I,events:{close:_f('close','handleRemoveItem($event, index)','close','','handleRemoveItem',{args:function(_S,_Z,_1){return [_Z,index]}},$2)},isComponent:$2,operator:_E,props:{closable:$2,simple:$2},slots:_j({$slot_children:function(_U,_V){_U[_U.length]={isPure:$2,operator:_B,text:_A(_t(_W).value),type:1};}}),tag:'Tag',type:4};});return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={children:function(_U){_U[_U.length]={isPure:$2,operator:_B,text:_A(_r($4,'formatedValues.0',$2).value),type:1};_r($4,'formatedValues.1',$2).value?(_U[_U.length]={context:_I,isPure:$2,isStatic:$2,nativeAttrs:$6,operator:_D,tag:'span',text:'~',type:3},_U[_U.length]={isPure:$2,operator:_B,text:_A(_r($4,'formatedValues.1',$2).value),type:1}):_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:$7,operator:_D,tag:'div',type:3}:_U[_U.length]={context:_I,nativeAttrs:$8,operator:_D,tag:'div',text:_A(_s('placeholder',_W.placeholder).value),type:3};_s('clearable',_W.clearable).value&&_r($4,'formatedValues.length',$2).value?_U[_U.length]=_V[_V.length]={context:_I,events:{'click.native':_f('click.native','handleClearClick()','click','native','handleClearClick',$0,$0,$2)},isComponent:$2,operator:_E,props:{className:'bell-date-picker-clear-icon',name:'close-circle-fill'},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-date-picker-calendar-icon',name:'calendar-line'},tag:'Icon',type:4};return _U}([]),context:_I,nativeAttrs:{class:'bell-date-picker'+(_s('status',_W.status).value?' bell-date-picker-'+_A(_s('status',_W.status).value):'')+(_s('size',_W.size).value?' bell-date-picker-'+_A(_s('size',_W.size).value):'')+(_s('block',_W.block).value?' bell-date-picker-block':'')+(_s('visible',_W.visible).value?' bell-date-picker-opened':'')+(_s('clearable',_W.clearable).value?' bell-date-picker-clearable':'')+(_s('disabled',_W.disabled).value?' bell-date-picker-disabled':' bell-date-picker-enabled')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});},$slot_overlay:function(_U,_V){_U[_U.length]={children:function(_U){_s('shortcuts',_W.shortcuts).value&&_r($4,'shortcuts.length',$2).value>0?_U[_U.length]={children:function(_U){_m(_s('shortcuts',_W.shortcuts),function(_W,_X,_Y){_U[_U.length]={context:_I,events:{click:_f('click','handleShortcutClick(this)','click','','handleShortcutClick',{args:function(_S,_Z,_1){return [_t(_W,_S).value]}})},nativeAttrs:$9,operator:_D,tag:'div',text:_A(_v('text',_W.text).value),type:3};});return _U}([]),context:_I,nativeAttrs:$10,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_s('type',_W.type).value===_s('RAW_TYPE_DATE',_W.RAW_TYPE_DATE).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{canPickMonth:$2,canPickYear:$2,checkedDate:_s('value',_W.value).value,defaultDate:_r($4,'defaultSimpleDate.timestamp',$2).value,disabledDate:_s('disabledDate',_W.disabledDate).value},tag:'DateView',type:4}:_s('type',_W.type).value===_s('RAW_TYPE_DATE_RANGE',_W.RAW_TYPE_DATE_RANGE).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{checkedEndDate:_r($4,'value.1',$2).value,checkedStartDate:_r($4,'value.0',$2).value,defaultEndDate:_r($4,'defaultSimpleDate.timestamp',$2).value,defaultStartDate:_r($4,'defaultSimpleDate.timestamp',$2).value,disabledDate:_s('disabledDate',_W.disabledDate).value,splitPanel:_s('splitPanel',_W.splitPanel).value},tag:'DateRange',type:4}:_s('type',_W.type).value===_s('RAW_TYPE_WEEK',_W.RAW_TYPE_WEEK).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{canPickMonth:$2,canPickYear:$2,checkedDate:_r($4,'value.0',$2).value,defaultDate:_r($4,'defaultSimpleDate.timestamp',$2).value},tag:'DateWeek',type:4}:_s('type',_W.type).value===_s('RAW_TYPE_YEAR',_W.RAW_TYPE_YEAR).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{checkedDate:_s('value',_W.value).value,defaultDate:_r($4,'defaultSimpleDate.timestamp',$2).value},tag:'DateYear',type:4}:_s('type',_W.type).value===_s('RAW_TYPE_MONTH',_W.RAW_TYPE_MONTH).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{canPickYear:$2,checkedDate:_s('value',_W.value).value,defaultDate:_r($4,'defaultSimpleDate.timestamp',$2).value},tag:'DateMonth',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:$11,operator:_D,tag:'div',type:3};}}),tag:'Popover',type:4};}})();

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
      template: template$L,
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

  var template$M = (function(){var $0=void 0,$2=!0,$4=function(_S){return _S.length-1},$5=function(){return 0},$6={class:'bell-time-picker-panel-column'},$7={class:'bell-time-picker-panel-columns'},$8={class:'bell-time-picker-panel-footer'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_m(_s('hourList',_W.hourList),function(_W,_X,_Y,index){_U[_U.length]={context:_I,events:{click:_f('click','handleHourClick(index)','click','','handleHourClick',{args:function(_S,_Z,_1){return [index]}})},key:_t(_W).value,nativeAttrs:{class:'bell-time-picker-panel-row'+(index===_w($5,'hourIndex').value?' bell-time-picker-panel-row-active':'')},operator:_D,tag:'li',text:_A(_z(_y(_s('padStart',_W.padStart,$0,_J&&_J.padStart||_K.padStart).value,_I,[_t(_W).value])).value),type:3};});return _U}([]),context:_I,nativeAttrs:$6,operator:_D,ref:'hourList',tag:'ul',type:3};_U[_U.length]={children:function(_U){_m(_s('minuteList',_W.minuteList),function(_W,_X,_Y,index){_U[_U.length]={context:_I,events:{click:_f('click','handleMinuteClick(index)','click','','handleMinuteClick',{args:function(_S,_Z,_1){return [index]}})},key:_t(_W).value,nativeAttrs:{class:'bell-time-picker-panel-row'+(index===_w($5,'minuteIndex').value?' bell-time-picker-panel-row-active':'')},operator:_D,tag:'li',text:_A(_z(_y(_s('padStart',_W.padStart,$0,_J&&_J.padStart||_K.padStart).value,_I,[_t(_W).value])).value),type:3};});return _U}([]),context:_I,nativeAttrs:$6,operator:_D,ref:'minuteList',tag:'ul',type:3};_r($4,'secondList.length',$2).value>0?_U[_U.length]={children:function(_U){_m(_s('secondList',_W.secondList),function(_W,_X,_Y,index){_U[_U.length]={context:_I,events:{click:_f('click','handleSecondClick(index)','click','','handleSecondClick',{args:function(_S,_Z,_1){return [index]}})},key:_t(_W).value,nativeAttrs:{class:'bell-time-picker-panel-row'+(index===_w($5,'secondIndex').value?' bell-time-picker-panel-row-active':'')},operator:_D,tag:'li',text:_A(_z(_y(_s('padStart',_W.padStart,$0,_J&&_J.padStart||_K.padStart).value,_I,[_t(_W).value])).value),type:3};});return _U}([]),context:_I,nativeAttrs:$6,operator:_D,ref:'secondList',tag:'ul',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:$7,operator:_D,tag:'div',type:3};_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,events:{click:_f('click','handleSubmitClick()','click','','handleSubmitClick',$0,$2)},isComponent:$2,operator:_E,props:{disabled:!_s('hasValue',_W.hasValue).value,size:'small',type:'primary'},slots:_j({$slot_children:function(_U,_V){_U[_U.length]={isPure:$2,operator:_B,text:'确定',type:1};}}),tag:'Button',type:4};return _U}([]),context:_I,nativeAttrs:$8,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-time-picker-panel'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

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
  function scrollTimeItemInToView(listElement, index) {
      var itemElement = listElement.children[index];
      if (!itemElement) {
          return;
      }
      scrollTo(listElement, listElement.scrollTop, itemElement.offsetHeight * index, 600);
  }

  var TimePanel = Yox.define({
      template: template$M,
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
          hourIndex: function (newValue) {
              scrollTimeItemInToView(this.$refs.hourList, newValue);
          },
          minuteIndex: function (newValue) {
              scrollTimeItemInToView(this.$refs.minuteList, newValue);
          },
          secondIndex: function (newValue) {
              scrollTimeItemInToView(this.$refs.secondList, newValue);
          },
      },
      filters: {
          padStart: padStart,
      },
      methods: {
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
          }
      },
      components: {
          Button: Button,
      },
  });

  var template$N = (function(){var $0=void 0,$2=!0,$5={class:'bell-time-picker-value'},$6={class:'bell-time-picker-placeholder'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{gap:'5',placement:_s('placement',_W.placement).value,trigger:_s('RAW_CUSTOM',_W.RAW_CUSTOM).value,visible:_s('visible',_W.visible).value},slots:_j({$slot_children:function(_U,_V){_U[_U.length]=function(_T){!_s('disabled',_W.disabled).value?_o(_T,'events','click',_f('click',"toggle('visible')",'click','','toggle',{args:function(_S,_Z,_1){return ['visible']}})):$0;return _T}({children:function(_U){_s('text',_W.text).value?_U[_U.length]={context:_I,nativeAttrs:$5,operator:_D,tag:'div',text:_A(_s('text',_W.text).value),type:3}:_U[_U.length]={context:_I,nativeAttrs:$6,operator:_D,tag:'div',text:_A(_s('placeholder',_W.placeholder).value),type:3};_s('clearable',_W.clearable).value&&_s('hasValue',_W.hasValue).value?_U[_U.length]=_V[_V.length]={context:_I,events:{'click.native':_f('click.native','handleClearClick()','click','native','handleClearClick',$0,$0,$2)},isComponent:$2,operator:_E,props:{className:'bell-time-picker-clear-icon',name:'close-circle-fill'},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-time-picker-time-icon',name:'time-line'},tag:'Icon',type:4};return _U}([]),context:_I,nativeAttrs:{class:'bell-time-picker'+(_s('status',_W.status).value?' bell-time-picker-'+_A(_s('status',_W.status).value):'')+(_s('size',_W.size).value?' bell-time-picker-'+_A(_s('size',_W.size).value):'')+(_s('block',_W.block).value?' bell-time-picker-block':'')+(_s('visible',_W.visible).value?' bell-time-picker-opened':'')+(_s('clearable',_W.clearable).value?' bell-time-picker-clearable':'')+(_s('disabled',_W.disabled).value?' bell-time-picker-disabled':' bell-time-picker-enabled')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},nativeStyles:_c([_s('componentWidth',_W.componentWidth).value?{width:_s('componentWidth',_W.componentWidth).value+'px'}:$0,_s('style',_W.style).value]),operator:_D,tag:'div',type:3});},$slot_overlay:function(_U,_V){_U[_U.length]=function(_T){_s('componentWidth',_W.componentWidth).value?_T.nativeStyles={width:_s('componentWidth',_W.componentWidth).value+'px'}:$0;return _T}({children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{hourIndex:_s('visible',_W.visible).value?_s('hourIndex',_W.hourIndex).value:-1,hourList:_s('hourList',_W.hourList).value,minuteIndex:_s('visible',_W.visible).value?_s('minuteIndex',_W.minuteIndex).value:-1,minuteList:_s('minuteList',_W.minuteList).value,secondIndex:_s('visible',_W.visible).value?_s('secondIndex',_W.secondIndex).value:-1,secondList:_s('secondList',_W.secondList).value},tag:'TimePanel',type:4};return _U}([]),context:_I,nativeAttrs:{class:'bell-time-picker-overlay'},operator:_D,tag:'div',type:3});}}),tag:'Popover',type:4};}})();

  var DEFAULT_HOUR_STEP = 1;
  var DEFAULT_MINUTE_STEP = 1;
  var DEFAULT_SECOND_STEP = 1;
  var TimePicker = Yox.define({
      template: template$N,
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

  var template$O = (function(){var $0=void 0,$2=!0,$5=function(){return 0},$6={class:'bell-image-picker-image-name'},$7={class:'bell-image-picker-mask'},$8={class:'bell-image-picker-message'},$9={class:'bell-image-picker-action'},$10={class:'bell-image-picker-image-size'},$11={class:'bell-image-picker-append-text'},$12={class:'bell-image-picker-items-wrapper'},$13={class:'bell-image-picker-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]={children:function(_U){_m(_s('imageList',_W.imageList),function(_W,_X,_Y,index){_U[_U.length]=function(_T){_w($5,'canDraggable').value?(_o(_T,'events','dragstart',_f('dragstart','handleDragStart(index)','dragstart','','handleDragStart',{args:function(_S,_Z,_1){return [index]}})),_o(_T,'events','dragend',_f('dragend','handleDragEnd()','dragend','','handleDragEnd')),_o(_T,'events','dragover',_f('dragover','handleDragOver(index)','dragover','','handleDragOver',{args:function(_S,_Z,_1){return [index]}})),_o(_T,'events','dragenter',_f('dragenter','handleDragEnter(index)','dragenter','','handleDragEnter',{args:function(_S,_Z,_1){return [index]}})),_o(_T,'events','dragleave',_f('dragleave','handleDragLeave(index)','dragleave','','handleDragLeave',{args:function(_S,_Z,_1){return [index]}})),_o(_T,'events','drop',_f('drop','handleDragDrop(index)','drop','','handleDragDrop',{args:function(_S,_Z,_1){return [index]}}))):_o(_T,'nativeAttrs','ondragstart','return false');return _T}({children:function(_U){_v('url',_W.url).value||_v('base64',_W.base64).value?_U[_U.length]=function(_T){_v('url',_W.url).value?_o(_T,'nativeAttrs','src',_w($5,'formatImageUrl').value?_z(_y(_w($5,'formatImageUrl').value,_I,[{height:_w($5,'customImageHeight').value,responsive:$2,url:_v('url',_W.url).value,width:_w($5,'customImageWidth').value}])).value:_v('url',_W.url).value):_v('base64',_W.base64).value?_o(_T,'nativeAttrs','src',_v('base64',_W.base64).value):$0;_v('name',_W.name).value?_o(_T,'nativeAttrs','alt',_v('name',_W.name).value):$0;_w($5,'draggingIndex').value<0?_o(_T,'events','click',_f('click','handleImageClick(this, index)','click','','handleImageClick',{args:function(_S,_Z,_1){return [_t(_W,_S).value,index]}})):$0;return _T}({context:_I,nativeAttrs:{class:'bell-image-picker-image',draggable:_q('draggable',_w($5,'canDraggable').value)},operator:_D,tag:'img',type:3}):_v('name',_W.name).value?_U[_U.length]={context:_I,nativeAttrs:$6,operator:_D,tag:'div',text:_A(_v('name',_W.name).value),type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_v('status',_W.status).value===_w($5,'STATUS_UPLOADING').value?_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{percent:_v('progress',_W.progress).value>0?_v('progress',_W.progress).value*100:0,size:'60'},slots:_j({$slot_children:function(_U,_V){_U[_U.length]={isPure:$2,operator:_B,text:'上传中',type:1};}}),tag:'Circle',type:4};return _U}([]),context:_I,nativeAttrs:$7,operator:_D,tag:'div',type:3}:(_v('status',_W.status).value===_w($5,'STATUS_ERROR').value||_v('status',_W.status).value==_w($5,'STATUS_FAILURE').value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{accept:_s('accept',_W.accept).value,beforeUpload:_s('beforeReuploadImage',_W.beforeReuploadImage).value,className:'bell-image-picker-mask',draggable:$2,index:index},ref:'reupload',slots:_j({$slot_children:function(_U,_V){_U[_U.length]={context:_I,html:_A(_v('message',_W.message).value),nativeAttrs:$8,operator:_D,tag:'div',type:3};_U[_U.length]={context:_I,isPure:$2,isStatic:$2,nativeAttrs:$9,operator:_D,tag:'div',text:'重新上传',type:3};}}),tag:'Upload',type:4}:_v('size',_W.size).value>0?_U[_U.length]={context:_I,nativeAttrs:$10,operator:_D,tag:'div',text:_A(_z(_y(_s('formatFileSize',_W.formatFileSize,$0,_J&&_J.formatFileSize||_K.formatFileSize).value,_I,[_v('size',_W.size).value])).value),type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2},!_w($5,'readOnly').value&&_w($5,'draggingIndex').value<0?_U[_U.length]=_V[_V.length]={context:_I,events:{'click.native':_f('click.native','removeItem(index)','click','native','removeItem',{args:function(_S,_Z,_1){return [index]}},$0,$2)},isComponent:$2,operator:_E,props:{className:'bell-image-picker-remove-icon',name:'close-circle-fill'},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2});return _U}([]),context:_I,events:{mouseenter:_f('mouseenter','handleMouseEnter(index)','mouseenter','','handleMouseEnter',{args:function(_S,_Z,_1){return [index]}}),mouseleave:_f('mouseleave','handleMouseLeave(index)','mouseleave','','handleMouseLeave',{args:function(_S,_Z,_1){return [index]}})},nativeAttrs:{class:'bell-image-picker-item bell-image-picker-card',draggable:_q('draggable',_w($5,'canDraggable').value)},nativeStyles:{height:_w($5,'customImageHeight').value+'px',width:_w($5,'customImageWidth').value+'px'},operator:_D,tag:'div',type:3});});!_s('readOnly',_W.readOnly).value&&_s('restCount',_W.restCount).value>0?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{accept:_s('accept',_W.accept).value,beforeUpload:_s('beforeUploadImage',_W.beforeUploadImage).value,className:'bell-image-picker-item bell-image-picker-append',draggable:$2,multiple:_s('restCount',_W.restCount).value>1,style:{height:_s('customImageHeight',_W.customImageHeight).value+'px',width:_s('customImageWidth',_W.customImageWidth).value+'px'}},ref:'upload',slots:_j({$slot_children:function(_U,_V){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-image-picker-append-icon',name:'add-line'},tag:'Icon',type:4};_U[_U.length]={children:function(_U){_s('isVideoPicker',_W.isVideoPicker).value?_U[_U.length]={isPure:$2,operator:_B,text:'上传视频',type:1}:_U[_U.length]={isPure:$2,operator:_B,text:'上传图片',type:1};return _U}([]),context:_I,nativeAttrs:$11,operator:_D,tag:'div',type:3};}}),tag:'Upload',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:$12,operator:_D,ref:'imagePickerList',tag:'div',type:3};_s('extra',_W.extra).value?_U[_U.length]={context:_I,nativeAttrs:$13,operator:_D,tag:'div',text:_A(_s('extra',_W.extra).value),type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-image-picker'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

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
  var ImagePicker = Yox.define({
      template: template$O,
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
          customImageWidth: function () {
              return toNumber(this.get('imageWidth'));
          },
          customImageHeight: function () {
              return toNumber(this.get('imageHeight'));
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
          }
      },
      filters: {
          formatFileSize: formatFileSize,
      },
      components: {
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
                          errors.push(target + "\u65F6\u957F\u4E0D\u80FD\u5C0F\u4E8E " + formatSecond(minDuration));
                      }
                  }
                  if (maxDuration > 0) {
                      if (item.duration > maxDuration) {
                          errors.push(target + "\u65F6\u957F\u4E0D\u80FD\u8D85\u8FC7 " + formatSecond(maxDuration));
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

  var template$P = (function(){var $0=void 0,$2=!0,$4={class:'bell-carousel-list'},$5=function(_S){return _S.length-1},$6=function(){return 0};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$4,operator:_D,ref:'list',tag:'div',type:3};_s('count',_W.count).value>1?_U[_U.length]={children:function(_U){_n(0,_s('count',_W.count).value,$0,function(_W,_X,_Y,i){_U[_U.length]=function(_T){_w($6,'trigger').value===_w($6,'RAW_CLICK').value?_o(_T,'events','click',_f('click','go(i)','click','','go',{args:function(_S,_Z,_1){return [i]}})):_o(_T,'events','mouseenter',_f('mouseenter','go(i)','mouseenter','','go',{args:function(_S,_Z,_1){return [i]}}));return _T}({context:_I,nativeAttrs:{class:'bell-carousel-indicator-item'+(_w($6,'index').value===i?' bell-carousel-indicator-item-active':'')},operator:_D,tag:'div',type:3});});return _U}([]),context:_I,nativeAttrs:{class:'bell-carousel-indicator'+(_s('indicatorType',_W.indicatorType).value?' bell-carousel-indicator-'+_A(_s('indicatorType',_W.indicatorType).value):'')+(_s('indicatorPosition',_W.indicatorPosition).value?' bell-carousel-indicator-'+_A(_s('indicatorPosition',_W.indicatorPosition).value):'')},operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-carousel'+(_s('direction',_W.direction).value?' bell-carousel-'+_A(_s('direction',_W.direction).value):'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},nativeStyles:_c([_s('size',_W.size).value?{height:_r($5,'size.height',$2).value+'px',width:_r($5,'size.width',$2).value+'px'}:$0,_s('style',_W.style).value]),operator:_D,tag:'div',type:3};}})();

  var Carousel = Yox.define({
      template: template$P,
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
      data: function (options) {
          var children = options.slots[RAW_SLOT_CHILDREN];
          return {
              RAW_CLICK: RAW_CLICK,
              RAW_HOVER: RAW_HOVER,
              RAW_TOP: RAW_TOP,
              RAW_RIGHT: RAW_RIGHT,
              RAW_BOTTOM: RAW_BOTTOM,
              RAW_LEFT: RAW_LEFT,
              index: 0,
              count: children.vnodes.length,
              size: UNDEFINED,
          };
      },
      computed: {
          direction: function () {
              var indicatorPosition = this.get('indicatorPosition');
              return indicatorPosition === 'left' || indicatorPosition === 'right'
                  ? 'vertical'
                  : 'horizontal';
          }
      },
      events: {
          sizeChange: {
              listener: function (event, data) {
                  if (event.phase !== Yox.Event.PHASE_UPWARD) {
                      return;
                  }
                  event.stop();
                  this.set('size', data);
              },
              ns: 'carouselItem'
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
              element.style.transform = this.get('direction') === 'horizontal'
                  ? ('translateX(-' + (index * size.width) + 'px)')
                  : ('translateY(-' + (index * size.height) + 'px)');
          }
      },
      afterMount: function () {
          var me = this;
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
          this.set('count', children.vnodes.length);
      }
  });

  var template$Q = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-carousel-item'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var CarouselItem = Yox.define({
      template: template$Q,
      name: 'bell-CarouselItem',
      propTypes: {
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STYLE_TYPE,
          }
      },
      afterMount: function () {
          var me = this;
          var element = me.$el;
          var updateSize = function (width, height) {
              me.fire({
                  type: 'sizeChange',
                  ns: 'carouselItem',
              }, {
                  width: width,
                  height: height,
              });
          };
          updateSize(element.clientWidth, element.clientHeight);
          // @ts-ignore
          if (ResizeObserver) {
              // @ts-ignore
              var resizeObserver_1 = new ResizeObserver(function (entries) {
                  var _a = entries[0].contentRect, width = _a.width, height = _a.height;
                  updateSize(width, height);
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

  var template$R = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-collapse'+(_s('simple',_W.simple).value?' bell-collapse-simple':' bell-collapse-bordered')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Collapse = Yox.define({
      template: template$R,
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

  var template$S = (function(){var $0=void 0,$2=!0,$5={class:'bell-collapse-extra'},$6={class:'bell-collapse-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]=function(_T){!_s('disabled',_W.disabled).value?_o(_T,'events','click',_f('click','click()','click','','click')):$0;return _T}({children:function(_U){_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['extra'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_extra',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-collapse-arrow-icon',name:'arrow-right-s-line'},tag:'Icon',type:4};_U[_U.length]={isPure:$2,operator:_B,text:_A(_s('title',_W.title).value),type:1};return _U}([]),context:_I,nativeAttrs:{class:'bell-collapse-header'},operator:_D,tag:'div',type:3});_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-collapse-item'+(_s('opened',_W.opened).value?' bell-collapse-opened':'')+(_s('disabled',_W.disabled).value?' bell-collapse-disabled':' bell-collapse-enabled')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var CollapseItem = Yox.define({
      template: template$S,
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

  var template$T = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('width',_W.width).value||_s('style',_W.style).value?_T.nativeStyles=_c([_s('width',_W.width).value?{width:_s('width',_W.width).value+'px'}:$0,_s('style',_W.style).value]):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-card bell-card-shadow-'+_A(_s('shadow',_W.shadow).value)+(_s('simple',_W.simple).value?' bell-card-simple':' bell-card-bordered')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Card = Yox.define({
      template: template$T,
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
  });

  var template$U = (function(){var $0=void 0,$2=!0,$4={class:'bell-card-header-title'},$6={class:'bell-card-header-sub-title'},$7={class:'bell-card-header-info'},$8={class:'bell-card-header-wrapper'},$9={class:'bell-card-header-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_avatar',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_title',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$4,operator:_D,tag:'div',type:3};_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['subTitle'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_subTitle',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:$7,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:$8,operator:_D,tag:'div',type:3};_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['extra'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_extra',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$9,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-card-header'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var CardHeader = Yox.define({
      template: template$U,
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

  var template$V = (function(){var $0=void 0,$2=!0,$5={class:'bell-card-media-title'},$6={class:'bell-card-media-sub-title'},$7={class:'bell-card-media-info'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['title'])).value||_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['subTitle'])).value?_U[_U.length]={children:function(_U){_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['title'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_title',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['subTitle'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_subTitle',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:$7,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-card-media'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var CardMedia = Yox.define({
      template: template$V,
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

  var template$W = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-card-body'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var CardBody = Yox.define({
      template: template$W,
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

  var template$X = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-card-footer'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var CardFooter = Yox.define({
      template: template$X,
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

  var template$Y = (function(){var $0=void 0,$2=!0,$5={class:'bell-page-header-title'},$6={class:'bell-page-header-tags'},$7={class:'bell-page-header-extra'},$8={class:'bell-page-header-header'},$9={class:'bell-page-header-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_breadcrumb',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);_U[_U.length]={children:function(_U){_s('showBack',_W.showBack).value?_U[_U.length]=_V[_V.length]={context:_I,events:{'click.native':_g('click.native','back.pageHeader','click','native','back','pageHeader',$0,$2)},isComponent:$2,operator:_E,props:{className:'bell-page-header-back',name:'arrow-left-line'},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_U[_U.length]={context:_I,nativeAttrs:$5,operator:_D,tag:'div',text:_A(_s('title',_W.title).value),type:3};_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['tags'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_tags',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['extra'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_extra',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$7,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:$8,operator:_D,tag:'div',type:3};_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['content'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_content',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$9,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-page-header'+(_s('showBack',_W.showBack).value?' bell-page-header-with-back':'')+(_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['tags'])).value?' bell-page-header-with-tags':'')+(_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['extra'])).value?' bell-page-header-with-extra':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var PageHeader = Yox.define({
      template: template$Y,
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

  var template$Z = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-layout'+(_s('vertical',_W.vertical).value?' bell-layout-vertical':' bell-layout-horizontal')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Layout = Yox.define({
      template: template$Z,
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

  var template$_ = (function(){var $0=void 0,$2=!0,$5={class:'bell-layout-header-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['extra'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_extra',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-layout-header'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var LayoutHeader = Yox.define({
      template: template$_,
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

  var template$$ = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-layout-content'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var LayoutContent = Yox.define({
      template: template$$,
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

  var template$10 = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-layout-footer'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var LayoutFooter = Yox.define({
      template: template$10,
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

  var template$11 = (function(){var $0=void 0,$2=!0,$5={class:'bell-layout-sider-logo'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('customWidth',_W.customWidth).value||_s('style',_W.style).value?_T.nativeStyles=_c([_s('customWidth',_W.customWidth).value?{flex:'0 0 '+_s('customWidth',_W.customWidth).value+'px',maxWidth:_s('customWidth',_W.customWidth).value+'px',minWidth:_s('customWidth',_W.customWidth).value+'px',width:_s('customWidth',_W.customWidth).value+'px'}:$0,_s('style',_W.style).value]):$0;return _T}({children:function(_U){_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['logo'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_logo',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);_s('showTrigger',_W.showTrigger).value?_U[_U.length]=function(_T){_s('customWidth',_W.customWidth).value?_T.nativeStyles={width:_s('customWidth',_W.customWidth).value+'px'}:$0;return _T}({children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-layout-sider-trigger-icon',name:'arrow-left-s-line'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click',"toggle('collapsed')",'click','','toggle',{args:function(_S,_Z,_1){return ['collapsed']}})},nativeAttrs:{class:'bell-layout-sider-trigger'},operator:_D,tag:'div',type:3}):_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-layout-sider'+(_s('collapsed',_W.collapsed).value?' bell-layout-sider-collapsed':'')+(_s('showTrigger',_W.showTrigger).value?' bell-layout-sider-with-trigger':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var LayoutSider = Yox.define({
      template: template$11,
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
          }
      },
      components: {
          Icon: Icon,
      }
  });

  var template$12 = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('target',_W.target).value?_o(_T,'nativeAttrs','target',_s('target',_W.target).value):$0;_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;!_s('href',_W.href).value&&!_s('disabled',_W.disabled).value?_o(_T,'events','click',_g('click','click.link','click','','click','link')):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-link'+(_s('type',_W.type).value?' bell-link-'+_A(_s('type',_W.type).value):'')+(_s('size',_W.size).value?' bell-link-'+_A(_s('size',_W.size).value):'')+(_s('underline',_W.underline).value?' bell-link-underline':'')+(_s('disabled',_W.disabled).value?' bell-link-disabled':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):''),href:_s('href',_W.href).value||'javascript:void(0)',ondragstart:'return false'},operator:_D,tag:'a',type:3});}})();

  var Link = Yox.define({
      template: template$12,
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

  var template$13 = (function(){var $0=void 0,$2=!0,$5={class:'bell-list-header'},$6={class:'bell-list-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['header'])).value?(_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_header',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3},_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_children',_U)||(_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,slots:_j({$slot_children:function(_U,_V){_a({children:function(_U){_k('$slot_empty',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);}}),tag:'ListEmpty',type:4});return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3}):_a({children:function(_U){_k('$slot_children',_U)||(_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,slots:_j({$slot_children:function(_U,_V){_a({children:function(_U){_k('$slot_empty',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);}}),tag:'ListEmpty',type:4});return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);_s('loading',_W.loading).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{fixed:$2,size:'large'},tag:'Spin',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-list'+(_s('size',_W.size).value?' bell-list-'+_A(_s('size',_W.size).value):'')+(_s('simple',_W.simple).value?' bell-list-simple':' bell-list-bordered')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var template$14 = (function(){var $2=!0,$4={class:'bell-list-empty'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_children',_U)||(_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,slots:_j({$slot_children:function(_U,_V){_U[_U.length]={isPure:$2,operator:_B,text:'暂无数据',type:1};}}),tag:'Empty',type:4});return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$4,operator:_D,tag:'div',type:3};}})();

  var template$15 = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-empty'+(_s('simple',_W.simple).value?' bell-empty-simple':'')+(_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['children'])).value?' bell-empty-with-content':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Empty = Yox.define({
      template: template$15,
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
      template: template$14,
      components: {
          Empty: Empty,
      }
  });

  var List = Yox.define({
      template: template$13,
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

  var template$16 = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;_s('clickable',_W.clickable).value?_o(_T,'events','click',_g('click','click.listItem','click','','click','listItem')):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-list-item'+(_s('clickable',_W.clickable).value?' bell-list-item-clickable':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var ListItem = Yox.define({
      template: template$16,
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

  var template$17 = (function(){var $0=void 0,$2=!0,$5={class:'bell-result-icon'},$6={class:'bell-result-title'},$7={class:'bell-result-sub-title'},$8={class:'bell-result-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_icon',_U)||(_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-result-status-icon',name:_s('status',_W.status).value===_s('RAW_TYPE_SUCCESS',_W.RAW_TYPE_SUCCESS).value?'checkbox-circle-fill':_s('status',_W.status).value===_s('RAW_TYPE_WARNING',_W.RAW_TYPE_WARNING).value?'error-warning-fill':_s('status',_W.status).value===_s('RAW_TYPE_ERROR',_W.RAW_TYPE_ERROR).value?'close-circle-fill':'information-fill'},tag:'Icon',type:4});return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3};_s('title',_W.title).value?_U[_U.length]={context:_I,nativeAttrs:$6,operator:_D,tag:'div',text:_A(_s('title',_W.title).value),type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_s('subTitle',_W.subTitle).value?_U[_U.length]={context:_I,nativeAttrs:$7,operator:_D,tag:'div',text:_A(_s('subTitle',_W.subTitle).value),type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['extra'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_extra',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$8,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-result'+(_s('status',_W.status).value?' bell-result-'+_A(_s('status',_W.status).value):'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Result = Yox.define({
      template: template$17,
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

  var template$18 = (function(){var $0=void 0,$2=!0,$5={class:'bell-exception-title'},$6={class:'bell-exception-sub-title'},$7={class:'bell-exception-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_s('title',_W.title).value?_U[_U.length]={context:_I,nativeAttrs:$5,operator:_D,tag:'div',text:_A(_s('title',_W.title).value),type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_s('subTitle',_W.subTitle).value?_U[_U.length]={context:_I,nativeAttrs:$6,operator:_D,tag:'div',text:_A(_s('subTitle',_W.subTitle).value),type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['extra'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_extra',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$7,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-exception'+(_s('status',_W.status).value?' bell-exception-'+_A(_s('status',_W.status).value):'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Exception = Yox.define({
      template: template$18,
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

  var template$19 = (function(){var $0=void 0,$2=!0,$5={class:'bell-divider-text'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['children'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-divider'+(_s('vertical',_W.vertical).value?' bell-divider-vertical':' bell-divider-horizontal')+(_s('dashed',_W.dashed).value?' bell-divider-dashed':'')+(_s('align',_W.align).value?' bell-divider-'+_A(_s('align',_W.align).value):'')+(_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['children'])).value?' bell-divider-with-text':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Divider = Yox.define({
      template: template$19,
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

  var template$1a = (function(){var $0=void 0,$2=!0,$5={viewBox:'0 0 100 100'},$6={class:'bell-circle-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]={context:_I,isSvg:$2,nativeAttrs:{d:_s('path',_W.path).value,'fill-opacity':'0',stroke:_s('trailColor',_W.trailColor).value,'stroke-width':_s('trailWidth',_W.trailWidth).value},nativeStyles:_c(_s('trailStyle',_W.trailStyle).value),operator:_D,tag:'path',type:3};_U[_U.length]={context:_I,isSvg:$2,nativeAttrs:{d:_s('path',_W.path).value,'fill-opacity':'0',stroke:_s('strokeColor',_W.strokeColor).value,'stroke-linecap':_s('strokeLinecap',_W.strokeLinecap).value,'stroke-width':_s('strokeWidth',_W.strokeWidth).value},nativeStyles:_c(_s('pathStyle',_W.pathStyle).value),operator:_D,tag:'path',type:3};return _U}([]),context:_I,isSvg:$2,nativeAttrs:$5,operator:_D,tag:'svg',type:3};_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['children'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-circle'+(_s('dashboard',_W.dashboard).value?' bell-circle-dashboard':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},nativeStyles:_c([{height:_s('size',_W.size).value+'px',width:_s('size',_W.size).value+'px'},_s('style',_W.style).value]),operator:_D,tag:'div',type:3};}})();

  var Circle = Yox.define({
      template: template$1a,
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

  var template$1b = (function(){var $0=void 0,$2=!0,$5={class:'bell-popconfirm-title'},$6={class:'bell-popconfirm-footer'},$7={class:'bell-popover-arrow'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{placement:_s('placement',_W.placement).value,showArrow:$2,trigger:_s('RAW_CLICK',_W.RAW_CLICK).value,visible:_s('isVisible',_W.isVisible).value},ref:'popover',slots:_j({$slot_children:function(_U,_V){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);},$slot_overlay:function(_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]=function(_T){_s('maxWidth',_W.maxWidth).value||_s('maxHeight',_W.maxHeight).value?_T.nativeStyles={maxHeight:_s('maxHeight',_W.maxHeight).value?_s('maxHeight',_W.maxHeight).value+'px':$0,maxWidth:_s('maxWidth',_W.maxWidth).value?_s('maxWidth',_W.maxWidth).value+'px':$0}:$0;return _T}({children:function(_U){_s('showIcon',_W.showIcon).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-popconfirm-status-icon',name:_s('status',_W.status).value===_s('RAW_TYPE_SUCCESS',_W.RAW_TYPE_SUCCESS).value?'checkbox-circle-fill':_s('status',_W.status).value===_s('RAW_TYPE_WARNING',_W.RAW_TYPE_WARNING).value?'error-warning-fill':_s('status',_W.status).value===_s('RAW_TYPE_ERROR',_W.RAW_TYPE_ERROR).value?'close-circle-fill':'information-fill'},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_U[_U.length]={context:_I,nativeAttrs:$5,operator:_D,tag:'div',text:_A(_s('title',_W.title).value),type:3};_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,events:{click:_f('click','handleCancelClick()','click','','handleCancelClick',$0,$2)},isComponent:$2,operator:_E,props:{size:'small'},slots:_j({$slot_children:function(_U,_V){_U[_U.length]={isPure:$2,operator:_B,text:_A(_s('cancelText',_W.cancelText).value),type:1};}}),tag:'Button',type:4};_U[_U.length]=_V[_V.length]={context:_I,events:{click:_f('click','handleOkClick()','click','','handleOkClick',$0,$2)},isComponent:$2,operator:_E,props:{size:'small',type:_s('okType',_W.okType).value||_s('status',_W.status).value},slots:_j({$slot_children:function(_U,_V){_U[_U.length]={isPure:$2,operator:_B,text:_A(_s('okText',_W.okText).value),type:1};}}),tag:'Button',type:4};return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-popover-content'},operator:_D,tag:'div',type:3});_U[_U.length]={context:_I,isPure:$2,isStatic:$2,nativeAttrs:$7,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-popconfirm'+(_s('status',_W.status).value?' bell-popconfirm-'+_A(_s('status',_W.status).value):'')+(_s('showIcon',_W.showIcon).value?' bell-popconfirm-with-icon':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}}),tag:'Popover',type:4};}})();

  var Popconfirm = Yox.define({
      template: template$1b,
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

  var template$1c = (function(){var $0=void 0,$2=!0,$5={class:'bell-progress-text'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_s('inside',_W.inside).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{inside:_s('inside',_W.inside).value,percent:_s('percent',_W.percent).value,thickness:_s('thickness',_W.thickness).value,vertical:_s('vertical',_W.vertical).value},slots:_j({$slot_children:function(_U,_V){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);}}),tag:'ProgressTrack',type:4}:(_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{inside:_s('inside',_W.inside).value,percent:_s('percent',_W.percent).value,thickness:_s('thickness',_W.thickness).value,vertical:_s('vertical',_W.vertical).value},tag:'ProgressTrack',type:4},_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['children'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2});return _U}([]),context:_I,nativeAttrs:{class:'bell-progress'+(_s('status',_W.status).value?' bell-progress-'+_A(_s('status',_W.status).value):'')+(_s('active',_W.active).value?' bell-progress-active':'')+(_s('inside',_W.inside).value?' bell-progress-inside':' bell-progress-outside')+(_s('vertical',_W.vertical).value?' bell-progress-vertical':' bell-progress-horizontal')+(!_s('inside',_W.inside).value&&!_s('vertical',_W.vertical).value&&_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['children'])).value?' bell-progress-with-text':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var template$1d = (function(){var $0=void 0,$2=!0,$5={class:'bell-progress-text'},$6={class:'bell-progress-bar'},$7={class:'bell-progress-track'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_s('inside',_W.inside).value?_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['children'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:$6,nativeStyles:{height:_s('vertical',_W.vertical).value?_s('percent',_W.percent).value+'%':_s('thickness',_W.thickness).value+'px',lineHeight:_s('vertical',_W.vertical).value?$0:_s('thickness',_W.thickness).value+'px',width:_s('vertical',_W.vertical).value?_s('thickness',_W.thickness).value+'px':_s('percent',_W.percent).value+'%'},operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:$7,nativeStyles:{height:_s('vertical',_W.vertical).value?$0:_s('thickness',_W.thickness).value+'px',width:_s('vertical',_W.vertical).value?_s('thickness',_W.thickness).value+'px':$0},operator:_D,tag:'div',type:3};}})();

  var ProgressTrack = Yox.define({
      template: template$1d,
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
      }
  });

  var Progress = Yox.define({
      template: template$1c,
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

  var template$1e = (function(){var $0=void 0,$2=!0,$4={type:'hidden'},$5=function(_S){return _S.length-1},$6=function(){return 0},$7={class:'bell-rate-text'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;!_s('readOnly',_W.readOnly).value?_o(_T,'events','mouseleave',_f('mouseleave','handleLeave()','mouseleave','','handleLeave')):$0;return _T}({children:function(_U){_U[_U.length]={context:_I,model:_e(_s('value',_W.value)),nativeAttrs:$4,operator:_D,tag:'input',type:3};_n(1,_s('count',_W.count).value,$2,function(_W,_X,_Y){_U[_U.length]=_V[_V.length]=function(_T){!_w($6,'readOnly').value?(_o(_T,'events','mousemove.native',_f('mousemove.native','handleMove($event, this)','mousemove','native','handleMove',{args:function(_S,_Z,_1){return [_Z,_W]}},$0,$2)),_o(_T,'events','click.native',_f('click.native','handleClick($event, this)','click','native','handleClick',{args:function(_S,_Z,_1){return [_Z,_W]}},$0,$2))):$0;return _T}({context:_I,isComponent:$2,operator:_E,props:{className:'bell-rate-icon-full'+(_w($6,'activeValue').value-_W>=0?' bell-rate-icon-active':''),name:_w($6,'iconName').value,size:_w($6,'iconSize').value},slots:_j({$slot_children:function(_U,_V){_w($6,'half').value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-rate-icon-half'+(_w($6,'activeValue').value-_W>=-0.5?' bell-rate-icon-active':''),name:_w($6,'iconName').value,size:_w($6,'iconSize').value},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};}}),tag:'Icon',type:4});});_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['children'])).value||_s('texts',_W.texts).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_children',_U)||(_U[_U.length]={isPure:$2,operator:_B,text:_A(_r($5,['texts',_s('activeValue',_W.activeValue).value-1].join('.'),$2).value),type:1});return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$7,nativeStyles:{lineHeight:_s('iconSize',_W.iconSize).value+'px'},operator:_D,tag:'span',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-rate'+(_s('type',_W.type).value?' bell-rate-'+_A(_s('type',_W.type).value):'')+(_s('readOnly',_W.readOnly).value?' bell-rate-dead':' bell-rate-live')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Rate = Yox.define({
      template: template$1e,
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

  var template$1f = (function(){var $0=void 0,$2=!0,$5=function(_S){return _S.length-2},$6={class:'bell-tabs-bar'},$7={class:'bell-tabs-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_m(_s('tabs',_W.tabs),function(_W,_X,_Y){_U[_U.length]=function(_T){!_v('disabled',_W.disabled).value?_o(_T,'events','click',_f('click','handleClickTab(this)','click','','handleClickTab',{args:function(_S,_Z,_1){return [_t(_W,_S).value]}})):$0;return _T}({children:function(_U){_v('icon',_W.icon).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-tabs-tab-icon',name:_v('icon',_W.icon).value},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_U[_U.length]={isPure:$2,operator:_B,text:_A(_v('label',_W.label).value),type:1};_w($5,'closable').value?_U[_U.length]=_V[_V.length]={context:_I,events:{'click.native':_f('click.native','handleCloseTab(this)','click','native','handleCloseTab',{args:function(_S,_Z,_1){return [_t(_W,_S).value]}},$0,$2)},isComponent:$2,operator:_E,props:{className:'bell-tabs-tab-close-icon',name:'close-line'},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-tabs-tab'+(_v('disabled',_W.disabled).value?' bell-tabs-tab-disabled':' bell-tabs-tab-enabled')+(_v('name',_W.name).value===_w($5,'value').value?' bell-tabs-tab-active':'')},operator:_D,tag:'div',type:3});});return _U}([]),context:_I,nativeAttrs:{class:'bell-tabs-nav'+(_s('closable',_W.closable).value?' bell-tabs-nav-closable':'')},operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3};_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$7,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-tabs'+(_s('type',_W.type).value?' bell-tabs-'+_A(_s('type',_W.type).value):'')+(_s('size',_W.size).value?' bell-tabs-'+_A(_s('size',_W.size).value):'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Tabs = Yox.define({
      template: template$1f,
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

  var template$1g = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-tabs-panel'+(_s('isActive',_W.isActive).value?' bell-tabs-panel-active':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var TabPanel = Yox.define({
      template: template$1g,
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

  var template$1h = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{gap:'5',placement:_s('placement',_W.placement).value,trigger:_s('trigger',_W.trigger).value,visible:_s('visible',_W.visible).value},ref:'popover',slots:_j({$slot_children:function(_U,_V){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);},$slot_overlay:function(_U,_V){_U[_U.length]=function(_T){_s('maxHeight',_W.maxHeight).value||_s('style',_W.style).value?_T.nativeStyles=_c([_s('maxHeight',_W.maxHeight).value?{maxHeight:_s('maxHeight',_W.maxHeight).value+'px'}:$0,_s('style',_W.style).value]):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_overlay',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-dropdown-overlay'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}}),tag:'Popover',type:4};}})();

  var Dropdown = Yox.define({
      template: template$1h,
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

  var template$1i = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;!_s('disabled',_W.disabled).value?_o(_T,'events','click',_g('click','click.dropdownItem','click','','click','dropdownItem')):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-dropdown-item'+(_s('divided',_W.divided).value?' bell-dropdown-item-divided':'')+(_s('active',_W.active).value?' bell-dropdown-item-active':'')+(_s('disabled',_W.disabled).value?' bell-dropdown-item-disabled':' bell-dropdown-item-enabled')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var DropdownItem = Yox.define({
      template: template$1i,
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

  var template$1j = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-dropdown-menu'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var DropdownMenu = Yox.define({
      template: template$1j,
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

  var template$1k = (function(){var $0=void 0,$2=!0,$5={class:'bell-description-title'},$6={class:'bell-description-extra'},$7={class:'bell-description-header'},$8={class:'bell-description-item-label'},$9={class:'bell-description-item-content'},$10={class:'bell-description-item-wrapper'},$11={class:'bell-description-row'},$12={class:'bell-description-table'},$13={class:'bell-description-cell bell-description-item-label'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_s('title',_W.title).value?_U[_U.length]={children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$5,operator:_D,tag:'div',text:_A(_s('title',_W.title).value),type:3};_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['extra'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_extra',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:$7,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_s('simple',_W.simple).value?_U[_U.length]={children:function(_U){_m(_s('cells',_W.cells),function(_W,_X,_Y,rowIndex){_U[_U.length]={children:function(_U){_m(_t(_W),function(_W,_X,_Y,colIndex){_U[_U.length]=function(_T){_v('span',_W.span).value>1?_o(_T,'nativeAttrs','colspan',_p('colspan',_v('span',_W.span).value*2-1)):$0;return _T}({children:function(_U){_U[_U.length]={children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$8,operator:_D,tag:'div',text:_A(_v('label',_W.label).value),type:3};_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_'+(_v('name',_W.name).value),_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$9,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:$10,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-description-cell'},operator:_D,tag:'td',type:3});});return _U}([]),context:_I,nativeAttrs:$11,operator:_D,tag:'tr',type:3};});return _U}([]),context:_I,nativeAttrs:$12,operator:_D,tag:'table',type:3}:_U[_U.length]={children:function(_U){_m(_s('cells',_W.cells),function(_W,_X,_Y,rowIndex){_U[_U.length]={children:function(_U){_m(_t(_W),function(_W,_X,_Y,colIndex){_U[_U.length]={context:_I,nativeAttrs:$13,operator:_D,tag:'td',text:_A(_v('label',_W.label).value),type:3};_U[_U.length]=function(_T){_v('span',_W.span).value>1?_o(_T,'nativeAttrs','colspan',_p('colspan',_v('span',_W.span).value*2-1)):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_'+(_v('name',_W.name).value),_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-description-cell bell-description-item-content'},operator:_D,tag:'td',type:3});});return _U}([]),context:_I,nativeAttrs:$11,operator:_D,tag:'tr',type:3};});return _U}([]),context:_I,nativeAttrs:$12,operator:_D,tag:'table',type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-description'+(_s('simple',_W.simple).value?' bell-description-simple':' bell-description-bordered'+(_s('size',_W.size).value?' bell-description-'+_A(_s('size',_W.size).value):''))+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  function addSlots2Props(children, props, column) {
      if (!children) {
          return;
      }
      var cells = [];
      var columnArray;
      var columnItem;
      var columnSpanSum = 0;
      var index = 0;
      children.vnodes.forEach(function (vnode) {
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
              props[RAW_SLOT_PREFIX + name] = vnode.slots[RAW_SLOT_CHILDREN];
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
      template: template$1k,
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
      beforeCreate: function (options) {
          if (!options.slots) {
              return;
          }
          var props = options.props || (options.props = {});
          addSlots2Props(options.slots[RAW_SLOT_CHILDREN], props, props.column || COLUMN_DEFAULT);
      },
      beforePropsUpdate: function (props) {
          addSlots2Props(props[RAW_SLOT_CHILDREN], props, props.column || COLUMN_DEFAULT);
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

  var template$1l = (function(){var $0=void 0,$2=!0,$5={class:'bell-thumbnail-placeholder'},$6={class:'bell-thumbnail-action'},$7={class:'bell-thumbnail-mask'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]={children:function(_U){_s('url',_W.url).value||_s('src',_W.src).value?_U[_U.length]=function(_T){_s('url',_W.url).value?_o(_T,'nativeAttrs','src',_s('formatUrl',_W.formatUrl).value?_z(_y(_s('formatUrl',_W.formatUrl,$0,_J&&_J.formatUrl||_K.formatUrl).value,_I,[{height:_s('customHeight',_W.customHeight).value,responsive:$2,url:_s('url',_W.url).value,width:_s('customWidth',_W.customWidth).value}])).value:_s('url',_W.url).value):_o(_T,'nativeAttrs','src',_s('src',_W.src).value);_s('srcSet',_W.srcSet).value?_o(_T,'nativeAttrs','srcset',_s('srcSet',_W.srcSet).value):$0;_s('alt',_W.alt).value?_o(_T,'nativeAttrs','alt',_s('alt',_W.alt).value):$0;return _T}({context:_I,events:{error:_g('error','error.thumbnail','error','','error','thumbnail')},nativeAttrs:{class:'bell-thumbnail-image',ondragstart:'return false'},operator:_D,tag:'img',type:3}):_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_placeholder',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3};_s('showZoom',_W.showZoom).value||_s('showUpload',_W.showUpload).value||_s('showDownload',_W.showDownload).value||_s('showDelete',_W.showDelete).value?_U[_U.length]={children:function(_U){_s('showZoom',_W.showZoom).value?_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,events:{'click.native':_g('click.native','zoom.thumbnail','click','native','zoom','thumbnail',$0,$2)},isComponent:$2,operator:_E,props:{name:'zoom-in-line'},tag:'Icon',type:4};return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_s('showUpload',_W.showUpload).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{accept:_s('accept',_W.accept).value,beforeUpload:_s('beforeUpload',_W.beforeUpload).value,className:'bell-thumbnail-action',upload:_s('uploadImage',_W.uploadImage).value},slots:_j({$slot_children:function(_U,_V){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{name:'upload-2-line'},tag:'Icon',type:4};}}),tag:'Upload',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_s('showDownload',_W.showDownload).value?_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,events:{'click.native':_g('click.native','download.thumbnail','click','native','download','thumbnail',$0,$2)},isComponent:$2,operator:_E,props:{name:'download-2-line'},tag:'Icon',type:4};return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_s('showDelete',_W.showDelete).value?_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,events:{'click.native':_g('click.native','delete.thumbnail','click','native','delete','thumbnail',$0,$2)},isComponent:$2,operator:_E,props:{name:'delete-bin-line'},tag:'Icon',type:4};return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:$7,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_s('loading',_W.loading).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{fixed:$2,size:'large'},tag:'Spin',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-thumbnail'+(_s('simple',_W.simple).value?' bell-thumbnail-simple':' bell-thumbnail-bordered')+(_s('loading',_W.loading).value?' bell-thumbnail-loading':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},nativeStyles:_c([{height:_s('customHeight',_W.customHeight).value+'px',lineHeight:_s('customHeight',_W.customHeight).value+'px',width:_s('customWidth',_W.customWidth).value+'px'},_s('style',_W.style).value]),operator:_D,tag:'div',type:3};}})();

  var Thumbnail = Yox.define({
      template: template$1l,
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
      },
      components: {
          Icon: Icon,
          Spin: Spin,
          Upload: Upload,
      }
  });

  var template$1m = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-timeline'+(_s('pending',_W.pending).value?' bell-timeline-pending':'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Timeline = Yox.define({
      template: template$1m,
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

  var template$1n = (function(){var $0=void 0,$2=!0,$5={class:'bell-timeline-custom'},$6={class:'bell-timeline-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['dot'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_dot',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]=function(_T){_s('color',_W.color).value?_T.nativeStyles={borderColor:_s('color',_W.color).value}:$0;return _T}({context:_I,nativeAttrs:{class:'bell-timeline-dot'},operator:_D,tag:'div',type:3});_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-timeline-item'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var TimelineItem = Yox.define({
      template: template$1n,
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

  var template$1o = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-form'+(_s('inline',_W.inline).value?' bell-form-inline':' bell-form-block')+(_s('showColon',_W.showColon).value?' bell-form-colon':'')+(_s('labelAlign',_W.labelAlign).value?' bell-form-label-'+_A(_s('labelAlign',_W.labelAlign).value):'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var Form = Yox.define({
      template: template$1o,
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

  var template$1p = (function(){var $0=void 0,$2=!0,$5={class:'bell-form-item-controls'},$6={class:'bell-form-item-extra'},$7={class:'bell-form-item-message'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_s('label',_W.label).value||_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['label'])).value?_U[_U.length]=function(_T){_s('itemLabelWidth',_W.itemLabelWidth).value&&_s('formLabelAlign',_W.formLabelAlign).value!==_s('RAW_TOP',_W.RAW_TOP).value?_T.nativeStyles={flex:'0 0 '+_s('itemLabelWidth',_W.itemLabelWidth).value+'px'}:$0;return _T}({children:function(_U){_a({children:function(_U){_k('$slot_label',_U)||(_U[_U.length]={isPure:$2,operator:_B,text:_A(_s('label',_W.label).value),type:1});return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:{class:'bell-form-item-label'+(_s('showRequiredMark',_W.showRequiredMark).value?' bell-form-item-label-required':'')},operator:_D,tag:'label',type:3}):_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_U[_U.length]=function(_T){_s('itemLabelWidth',_W.itemLabelWidth).value?_T.nativeStyles={marginLeft:_s('itemLabelWidth',_W.itemLabelWidth).value+'px'}:$0;return _T}({children:function(_U){_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_children',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3};_s('extra',_W.extra).value?_U[_U.length]={context:_I,html:_A(_z(_y(_s('formatMessage',_W.formatMessage,$0,_J&&_J.formatMessage||_K.formatMessage).value,_I,[_s('extra',_W.extra).value])).value),nativeAttrs:$6,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_s('showItemMessage',_W.showItemMessage).value?_U[_U.length]={context:_I,html:_A(_z(_y(_s('formatMessage',_W.formatMessage,$0,_J&&_J.formatMessage||_K.formatMessage).value,_I,[_s('itemMessage',_W.itemMessage).value])).value),nativeAttrs:$7,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-form-item-wrapper'},operator:_D,tag:'div',type:3});return _U}([]),context:_I,nativeAttrs:{class:'bell-form-item'+(_s('extra',_W.extra).value?' bell-form-item-with-extra':'')+(_s('showItemMessage',_W.showItemMessage).value?' bell-form-item-with-message':'')+(_s('adaptive',_W.adaptive).value?' bell-form-item-adaptive':'')+(_s('labelAlign',_W.labelAlign).value?' bell-form-item-align-'+_A(_s('labelAlign',_W.labelAlign).value):'')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var FormItem = Yox.define({
      template: template$1p,
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

  var template$1q = (function(){var $0=void 0,$2=!0,$5={class:'bell-dialog-header'},$6={class:'bell-dialog-body'},$7={class:'bell-dialog-footer'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_s('visible',_W.visible).value?_a({children:function(_U){_U[_U.length]=function(_T){_s('style',_W.style).value?_T.nativeStyles=_c(_s('style',_W.style).value):$0;return _T}({children:function(_U){_s('showMask',_W.showMask).value?_U[_U.length]=function(_T){_s('maskClosable',_W.maskClosable).value?_o(_T,'events','click',_f('click','close()','click','','close')):$0;return _T}({context:_I,nativeAttrs:{class:'bell-dialog-mask'},operator:_D,tag:'div',type:3}):_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_U[_U.length]=function(_T){_s('width',_W.width).value||_s('height',_W.height).value?_T.nativeStyles={height:_s('height',_W.height).value?_s('height',_W.height).value+'px':$0,width:_s('width',_W.width).value?_s('width',_W.width).value+'px':$0}:$0;return _T}({children:function(_U){_s('title',_W.title).value||_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['title'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_title',_U)||(_U[_U.length]={isPure:$2,operator:_B,text:_A(_s('title',_W.title).value),type:1});return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$5,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['content'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_content',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$6,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_z(_y(_s('hasSlot',_W.hasSlot,$0,_J&&_J.hasSlot||_K.hasSlot).value,_I,['footer'])).value?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_footer',_U);return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$7,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_s('closable',_W.closable).value?_U[_U.length]=_V[_V.length]={context:_I,events:{'click.native':_f('click.native','close()','click','native','close',$0,$0,$2)},isComponent:$2,operator:_E,props:{className:'bell-dialog-close',name:'close-line'},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-dialog-wrapper'},operator:_D,ref:'wrapper',tag:'div',type:3});return _U}([]),context:_I,nativeAttrs:{class:'bell-dialog'+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',transition:_d('dialog',_Q&&_Q.dialog||_R.dialog),type:3});return _U}([]),context:_I,operator:_G,tag:'portal',type:6},_U):_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};}})();

  var CLASS_VISIBLE$2 = 'bell-dialog-visible';
  var CLASS_FADE$2 = 'bell-dialog-fade';
  var Dialog = Yox.define({
      template: template$1q,
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

  var template$1r = (function(){var $0=void 0,$2=!0,$4=function(_S){return _S.length-1},$5=function(){return 0},$6={class:'bell-table-sorter'},$7={class:'bell-table-header'},$8={class:'bell-table-body'},$9={class:'bell-table-empty'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=function(_T){_s('width',_W.width).value||_s('height',_W.height).value||_s('style',_W.style).value?_T.nativeStyles=_c([{height:_s('height',_W.height).value?_s('height',_W.height).value+'px':$0,overflowX:_s('width',_W.width).value?'auto':$0,overflowY:_s('height',_W.height).value?'auto':$0,width:_s('width',_W.width).value?_s('width',_W.width).value+'px':$0},_s('style',_W.style).value]):$0;return _T}({children:function(_U){_s('colWidths',_W.colWidths).value?(_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_m(_s('columns',_W.columns),function(_W,_X,_Y,index){_U[_U.length]={context:_I,nativeAttrs:{width:_r($5,['colWidths',index].join('.')).value},operator:_D,tag:'col',type:3};});return _U}([]),context:_I,operator:_D,tag:'colgroup',type:3};_U[_U.length]={children:function(_U){_U[_U.length]={children:function(_U){_m(_s('columns',_W.columns),function(_W,_X,_Y){_U[_U.length]=function(_T){_v('align',_W.align).value?_o(_T,'nativeAttrs','class','bell-table-'+_A(_v('align',_W.align).value)):$0;return _T}({children:function(_U){_v('key',_W.key).value==='selection'?_r($4,'list.length',$2).value>0?_U[_U.length]=_V[_V.length]={context:_I,events:{change:_f('change','allCheckedChange()','change','','allCheckedChange',$0,$2)},isComponent:$2,operator:_E,props:{checked:_w($5,'allChecked').value},tag:'Checkbox',type:4}:_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{disabled:$2},tag:'Checkbox',type:4}:(_U[_U.length]={isPure:$2,operator:_B,text:_A(_v('title',_W.title).value),type:1},_v('sortable',_W.sortable).value?_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-table-sort-asc'+(_w($5,'sortKey').value===_v('key',_W.key).value&&_w($5,'sortOrder').value===_w($5,'SORT_ORDER_ASC').value?' bell-table-sort-active':''),name:'arrow-up-s-fill'},tag:'Icon',type:4};_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-table-sort-desc'+(_w($5,'sortKey').value===_v('key',_W.key).value&&_w($5,'sortOrder').value===_w($5,'SORT_ORDER_DESC').value?' bell-table-sort-active':''),name:'arrow-down-s-fill'},tag:'Icon',type:4};return _U}([]),context:_I,events:{click:_f('click','sortColumn(this.key, ~/sortKey === this.key && ~/sortOrder === ~/SORT_ORDER_ASC ? ~/SORT_ORDER_DESC : ~/SORT_ORDER_ASC)','click','','sortColumn',{args:function(_S,_Z,_1){return [_v('key',_W.key,_S).value,_w($5,'sortKey',_S).value===_v('key',_W.key,_S).value&&_w($5,'sortOrder',_S).value===_w($5,'SORT_ORDER_ASC',_S).value?_w($5,'SORT_ORDER_DESC',_S).value:_w($5,'SORT_ORDER_ASC',_S).value]}})},nativeAttrs:$6,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2});return _U}([]),context:_I,operator:_D,tag:'td',type:3});});return _U}([]),context:_I,operator:_D,tag:'tr',type:3};return _U}([]),context:_I,nativeAttrs:$7,operator:_D,tag:'thead',type:3};_r($4,'list.length',$2).value>0?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_children',_U)||(_m(_s('list',_W.list),function(_W,_X,_Y,index){_U[_U.length]={children:function(_U){_m(_w($5,'columns'),function(_W,_X,_Y){_v('actions',_W.actions).value&&_r($4,'actions.length').value?_U[_U.length]=function(_T){_v('align',_W.align).value?_o(_T,'nativeAttrs','class','bell-table-'+_A(_v('align',_W.align).value)):$0;return _T}({children:function(_U){_m(_v('actions',_W.actions),function(_W,_X,_Y){_U[_U.length]=_V[_V.length]={context:_I,events:{click:_f('click','clickButton(this, list[index], index)','click','','clickButton',{args:function(_S,_Z,_1){return [_t(_W,_S).value,_r($4,['list',index].join('.'),$2,_S).value,index]}},$2)},isComponent:$2,operator:_E,props:{block:_v('block',_W.block).value,className:_v('className',_W.className).value,disabled:_v('disabled',_W.disabled).value,shape:_v('shape',_W.shape).value,size:_v('size',_W.size).value,type:_v('type',_W.type).value},slots:_j({$slot_children:function(_U,_V){_U[_U.length]={isPure:$2,operator:_B,text:_A(_v('text',_W.text).value),type:1};}}),tag:'Button',type:4};});return _U}([]),context:_I,operator:_D,tag:'td',type:3}):_r($4,['list',index,_v('key',_W.key).value].join('.'),$2).value!==$0?_U[_U.length]=function(_T){_v('align',_W.align).value?_o(_T,'nativeAttrs','class','bell-table-'+_A(_v('align',_W.align).value)):$0;return _T}({children:function(_U){_v('dangerous',_W.dangerous).value?_U[_U.length]={context:_I,html:_A(_r($4,['list',index,_v('key',_W.key).value].join('.'),$2).value),operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_B,text:_A(_r($4,['list',index,_v('key',_W.key).value].join('.'),$2).value),type:1};return _U}([]),context:_I,operator:_D,tag:'td',type:3}):_v('key',_W.key).value==='selection'?_U[_U.length]=function(_T){_v('align',_W.align).value?_o(_T,'nativeAttrs','class','bell-table-'+_A(_v('align',_W.align).value)):$0;return _T}({children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,events:{change:_f('change','rowCheckedChange($event, $data, index)','change','','rowCheckedChange',{args:function(_S,_Z,_1){return [_Z,_1,index]}},$2)},isComponent:$2,operator:_E,props:{checked:_z(_y(_s('inArray',_W.inArray,$0,_J&&_J.inArray||_K.inArray).value,_I,[_s('selection',_W.selection).value,_r($4,['list',index,'key'].join('.'),$2).value])).value},tag:'Checkbox',type:4};return _U}([]),context:_I,operator:_D,tag:'td',type:3}):_U[_U.length]=function(_T){_v('align',_W.align).value?_o(_T,'nativeAttrs','class','bell-table-'+_A(_v('align',_W.align).value)):$0;return _T}({children:function(_U){_U[_U.length]={isPure:$2,operator:_B,text:_A(_v('key',_W.key).value)+' is not found.',type:1};return _U}([]),context:_I,operator:_D,tag:'td',type:3});});return _U}([]),context:_I,operator:_D,tag:'tr',type:3};}));return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$8,operator:_D,tag:'tbody',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,operator:_D,tag:'table',type:3},_r($4,'list.length',$2).value===0?_U[_U.length]={children:function(_U){_a({children:function(_U){_k('$slot_empty',_U)||(_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,slots:_j({$slot_children:function(_U,_V){_U[_U.length]={isPure:$2,operator:_B,text:'暂无数据',type:1};}}),tag:'Empty',type:4});return _U}([]),context:_I,isSlot:$2,operator:_H,tag:'slot',type:7},_U);return _U}([]),context:_I,nativeAttrs:$9,operator:_D,tag:'div',type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2}):_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-table'+(_s('stripe',_W.stripe).value?' bell-table-stripe':'')+(_s('simple',_W.simple).value?' bell-table-simple':' bell-table-bordered')+(_s('className',_W.className).value?' '+_A(_s('className',_W.className).value):'')},operator:_D,tag:'div',type:3});}})();

  var SORT_ORDER_ASC = 'asc';
  var SORT_ORDER_DESC = 'desc';
  var Table = Yox.define({
      template: template$1r,
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
          }
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

  var template$1s = (function(){var $0=void 0,$4={class:'bell-loadingbar-indicator'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]={children:function(_U){_U[_U.length]={context:_I,nativeAttrs:$4,nativeStyles:{color:_s('color',_W.color).value||$0,height:_s('height',_W.height).value+'px',width:_s('percent',_W.percent).value+'%'},operator:_D,tag:'div',type:3};return _U}([]),context:_I,nativeAttrs:{class:'bell-loadingbar'+(_s('type',_W.type).value?' bell-loadingbar-'+_A(_s('type',_W.type).value):'')},operator:_D,tag:'div',type:3};}})();

  var LoadingBar = Yox.define({
      template: template$1s,
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

  var template$1t = (function(){var $0=void 0,$2=!0,$5={class:'bell-message-text'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]={children:function(_U){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-message-icon',name:_s('status',_W.status).value===_s('RAW_TYPE_SUCCESS',_W.RAW_TYPE_SUCCESS).value?'checkbox-circle-fill':_s('status',_W.status).value===_s('RAW_TYPE_WARNING',_W.RAW_TYPE_WARNING).value?'error-warning-fill':_s('status',_W.status).value===_s('RAW_TYPE_ERROR',_W.RAW_TYPE_ERROR).value?'close-circle-fill':'information-fill'},tag:'Icon',type:4};_U[_U.length]={context:_I,nativeAttrs:$5,operator:_D,tag:'span',text:_A(_s('content',_W.content).value),type:3};_s('closable',_W.closable).value?_U[_U.length]=_V[_V.length]={context:_I,events:{'click.native':_f('click.native','hide()','click','native','hide',$0,$0,$2)},isComponent:$2,operator:_E,props:{className:'bell-message-close',name:'close-line'},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-message'+(_s('status',_W.status).value?' bell-message-'+_A(_s('status',_W.status).value):'')+(_s('center',_W.center).value?' bell-message-center':'')+(_s('closable',_W.closable).value?' bell-message-with-close':'')},operator:_D,tag:'div',type:3};}})();

  var CLASS_VISIBLE$3 = 'bell-message-visible';
  var Message = Yox.define({
      template: template$1t,
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
              element.style.top = top + 'px';
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

  var template$1u = (function(){var $0=void 0,$2=!0,$3=!1;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-modal',closable:_s('closable',_W.closable).value,maskClosable:$3,showMask:$2,title:_s('title',_W.title).value,width:_s('width',_W.width).value},ref:'dialog',slots:_j({$slot_content:function(_U,_V){_U[_U.length]={isPure:$2,operator:_B,text:_A(_s('content',_W.content).value),type:1};},$slot_footer:function(_U,_V){_U[_U.length]=_V[_V.length]={context:_I,events:{click:_f('click','ok()','click','','ok',$0,$2)},isComponent:$2,operator:_E,props:{type:_s('okType',_W.okType).value},slots:_j({$slot_children:function(_U,_V){_U[_U.length]={isPure:$2,operator:_B,text:_A(_s('okText',_W.okText).value),type:1};}}),tag:'Button',type:4};}}),tag:'Dialog',type:4};}})();

  var Alert$1 = Yox.define({
      template: template$1u,
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

  var template$1v = (function(){var $0=void 0,$2=!0,$3=!1;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-modal',closable:_s('closable',_W.closable).value,maskClosable:$3,showMask:$2,title:_s('title',_W.title).value,width:_s('width',_W.width).value},ref:'dialog',slots:_j({$slot_content:function(_U,_V){_U[_U.length]={isPure:$2,operator:_B,text:_A(_s('content',_W.content).value),type:1};},$slot_footer:function(_U,_V){_U[_U.length]=_V[_V.length]={context:_I,events:{click:_f('click','cancel()','click','','cancel',$0,$2)},isComponent:$2,operator:_E,props:{type:_s('cancelType',_W.cancelType).value},slots:_j({$slot_children:function(_U,_V){_U[_U.length]={isPure:$2,operator:_B,text:_A(_s('cancelText',_W.cancelText).value),type:1};}}),tag:'Button',type:4};_U[_U.length]=_V[_V.length]={context:_I,events:{click:_f('click','ok()','click','','ok',$0,$2)},isComponent:$2,operator:_E,props:{type:_s('okType',_W.okType).value},slots:_j({$slot_children:function(_U,_V){_U[_U.length]={isPure:$2,operator:_B,text:_A(_s('okText',_W.okText).value),type:1};}}),tag:'Button',type:4};}}),tag:'Dialog',type:4};}})();

  var Confirm = Yox.define({
      template: template$1v,
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

  var template$1w = (function(){var $0=void 0,$2=!0,$5={class:'bell-notification-title'},$6={class:'bell-notification-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_Q,_R,_W,_X,_U,_V){_U[_U.length]={children:function(_U){_s('status',_W.status).value?_U[_U.length]=_V[_V.length]={context:_I,isComponent:$2,operator:_E,props:{className:'bell-notification-icon',name:_s('status',_W.status).value===_s('RAW_TYPE_SUCCESS',_W.RAW_TYPE_SUCCESS).value?'checkbox-circle-fill':_s('status',_W.status).value===_s('RAW_TYPE_WARNING',_W.RAW_TYPE_WARNING).value?'error-warning-fill':_s('status',_W.status).value===_s('RAW_TYPE_ERROR',_W.RAW_TYPE_ERROR).value?'close-circle-fill':'information-fill'},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_s('title',_W.title).value?_U[_U.length]={context:_I,nativeAttrs:$5,operator:_D,tag:'div',text:_A(_s('title',_W.title).value),type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_s('content',_W.content).value?_U[_U.length]={context:_I,nativeAttrs:$6,operator:_D,tag:'div',text:_A(_s('content',_W.content).value),type:3}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};_s('duration',_W.duration).value==0?_U[_U.length]=_V[_V.length]={context:_I,events:{'click.native':_f('click.native','hide()','click','native','hide',$0,$0,$2)},isComponent:$2,operator:_E,props:{className:'bell-notification-close',name:'close-line'},tag:'Icon',type:4}:_U[_U.length]={isPure:$2,operator:_C,text:'',type:2};return _U}([]),context:_I,nativeAttrs:{class:'bell-notification'+(_s('status',_W.status).value?' bell-notification-'+_A(_s('status',_W.status).value)+' bell-notification-with-icon':'')+(_s('title',_W.title).value?' bell-notification-with-title':'')+(_s('duration',_W.duration).value==0?' bell-notification-with-close':'')},nativeStyles:{right:_s('right',_W.right).value+'px',width:_s('width',_W.width).value+'px'},operator:_D,tag:'div',type:3};}})();

  var CLASS_VISIBLE$4 = 'bell-notification-visible';
  var Notification = Yox.define({
      template: template$1w,
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
  var version = "0.25.3";
  /**
   * 安装插件
   */
  function install(Yox) {
      Yox.component({
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
          CarouselItem: CarouselItem,
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
