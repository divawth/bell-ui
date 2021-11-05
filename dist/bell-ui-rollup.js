/**
 * bell-ui.js v0.22.8
 * (c) 2018-2021 
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('yox')) :
  typeof define === 'function' && define.amd ? define(['exports', 'yox'], factory) :
  (global = global || self, factory(global.Bell = {}, global.Yox));
}(this, (function (exports, Yox) { 'use strict';

  Yox = Yox && Object.prototype.hasOwnProperty.call(Yox, 'default') ? Yox['default'] : Yox;

  var template = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-menu'+(_q('mode',_U.mode).value?' bell-menu-'+_y(_q('mode',_U.mode).value):'')+(!_q('inner',_U.inner).value&&_q('theme',_U.theme).value?' bell-menu-'+_y(_q('theme',_U.theme).value):'')+(_q('collapsed',_U.collapsed).value?' bell-menu-collapsed':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

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
  function toBoolean(value) {
      return Yox.is.boolean(value)
          ? value
          : FALSE;
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

  var template$1 = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;!_q('disabled',_U.disabled).value?_b(_R,'events',_g('click','click()','click','',_G.click),'click'):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-menu-item'+(_q('isActive',_U.isActive).value?' bell-menu-item-active':'')+(_q('disabled',_U.disabled).value?' bell-menu-item-disabled':' bell-menu-item-enabled')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

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

  var template$2 = (function(){var $0=void 0,$2=!0,$5={className:'bell-menu-group-title'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]={context:_G,nativeProps:$5,operator:_B,tag:'div',text:_y(_q('title',_U.title).value),type:3};_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['children'])).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{inner:$2,mode:_q('mode',_U.mode).value==='inline'?'inline':'vertical'},slots:_k({$slot_children:function(_S,_T){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);}}),tag:'Menu',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-menu-group'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

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

  var template$3 = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('color',_U.color).value||_q('size',_U.size).value>0||_q('style',_U.style).value?_R.nativeStyles=_d([{color:_q('color',_U.color).value||$0,fontSize:_q('size',_U.size).value>0?_q('size',_U.size).value+'px':$0},_q('style',_U.style).value]):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-icon'+(_q('name',_U.name).value?' bell-icon-'+_y(_q('name',_U.name).value):'')+(_q('spin',_U.spin).value?' bell-icon-spin':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'i',type:3});}})();

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

  var template$4 = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_a({children:function(_S){_a(function(_R){!_q('disabled',_U.disabled).value?_q('trigger',_U.trigger).value===_q('RAW_CLICK',_U.RAW_CLICK).value?_b(_R,'events',_g('click','toggleVisible()','click','',_G.toggleVisible),'click'):_q('trigger',_U.trigger).value===_q('RAW_HOVER',_U.RAW_HOVER).value?(_b(_R,'events',_g('mouseenter','enter()','mouseenter','',_G.enter),'mouseenter'),_b(_R,'events',_g('mouseleave','leave()','mouseleave','',_G.leave),'mouseleave')):$0:$0;return _R}({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,ref:'trigger',tag:'slot',type:7}),_S);_q('visible',_U.visible).value?_a({children:function(_S){_a(function(_R){!_q('disabled',_U.disabled).value?_q('trigger',_U.trigger).value===_q('RAW_HOVER',_U.RAW_HOVER).value?(_b(_R,'events',_g('mouseenter','enter()','mouseenter','',_G.enter),'mouseenter'),_b(_R,'events',_g('mouseleave','leave()','mouseleave','',_G.leave),'mouseleave')):$0:$0;return _R}({children:function(_S){_l('$slot_overlay',_S);return _S}([]),context:_G,events:{click:_g('click','click()','click','',_G.click)},isSlot:$2,operator:_F,ref:'overlay',tag:'slot',transition:_e('overlay',_O&&_O.overlay||_P.overlay),type:7}),_S);return _S}([]),context:_G,operator:_E,tag:'portal',type:6},_S):_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,isFragment:$2,operator:_D,tag:'fragment',type:5},_S);}})();

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

  var template$5 = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_q('mode',_U.mode).value==='inline'?_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]=function(_R){!_q('collapsed',_U.collapsed).value?(_b(_R,'lazy',300,'click'),_b(_R,'events',_g('click',"toggle('isOpen')",'click','',_G.toggle,{args:function(_Q,_X,_Y){return ['isOpen']}}),'click')):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_title',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);!_q('collapsed',_U.collapsed).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-sub-menu-arrow-icon',name:'arrow-down-s-line'},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-sub-menu-title'},operator:_B,tag:'div',type:3});_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{inner:$2,mode:_q('mode',_U.mode).value},ref:'menu',slots:_k({$slot_children:function(_S,_T){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);}}),tag:'Menu',type:4};return _S}([]),context:_G,nativeProps:{className:'bell-sub-menu'+(_q('isOpen',_U.isOpen).value?' bell-menu-open':'')+(_q('isActive',_U.isActive).value?' bell-menu-active':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3}):_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{gap:'5',placement:_q('mode',_U.mode).value===_q('RAW_HORIZONTAL',_U.RAW_HORIZONTAL).value?_q('RAW_BOTTOM',_U.RAW_BOTTOM).value:_q('RAW_RIGHT_START',_U.RAW_RIGHT_START).value,trigger:_q('RAW_CUSTOM',_U.RAW_CUSTOM).value,visible:_q('isOpen',_U.isOpen).value},slots:_k({$slot_children:function(_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]=function(_R){!_q('collapsed',_U.collapsed).value?(_b(_R,'lazy',300,'click'),_b(_R,'events',_g('click',"toggle('isOpen')",'click','',_G.toggle,{args:function(_Q,_X,_Y){return ['isOpen']}}),'click')):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_title',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);!_q('collapsed',_U.collapsed).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-sub-menu-arrow-icon',name:'arrow-down-s-line'},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-sub-menu-title'},operator:_B,tag:'div',type:3});return _S}([]),context:_G,nativeProps:{className:'bell-sub-menu'+(_q('isActive',_U.isActive).value?' bell-menu-active':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});},$slot_overlay:function(_S,_T){_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-menu-overlay'+(_q('theme',_U.theme).value?' bell-menu-'+_y(_q('theme',_U.theme).value):'')},operator:_B,tag:'div',type:3};}}),tag:'Popover',type:4};}})();

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

  var template$6 = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-text'+(_q('type',_U.type).value?' bell-text-'+_y(_q('type',_U.type).value):'')+(_q('size',_U.size).value?' bell-text-'+_y(_q('size',_U.size).value):'')+(_q('bold',_U.bold).value?' bell-text-bold':'')+(_q('block',_U.block).value?' bell-text-block':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'span',type:3});}})();

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

  var template$7 = (function(){var $0=void 0,$2=!0,$5={className:'bell-drawer-header'},$6={className:'bell-drawer-body'},$7={className:'bell-drawer-wrapper'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_q('visible',_U.visible).value?_a({children:function(_S){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_q('showMask',_U.showMask).value?_S[_S.length]=function(_R){_q('maskClosable',_U.maskClosable).value?_b(_R,'events',_g('click','close()','click','',_G.close),'click'):$0;return _R}({context:_G,nativeProps:{className:'bell-drawer-mask'},operator:_B,tag:'div',type:3}):_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_S[_S.length]={children:function(_S){_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['title'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_title',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_content',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3};_q('closable',_U.closable).value?_S[_S.length]=_T[_T.length]={context:_G,events:{'click.native':_g('click.native','close()','click','native',_G.close,$0,$0,$2)},isComponent:$2,operator:_C,props:{className:'bell-drawer-close',name:'close-line'},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:$7,nativeStyles:_d(_q('wrapperStyle',_U.wrapperStyle).value),operator:_B,ref:'wrapper',tag:'div',type:3};return _S}([]),context:_G,nativeProps:{className:'bell-drawer'+(_q('placement',_U.placement).value?' bell-drawer-'+_y(_q('placement',_U.placement).value):'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',transition:_e('drawer',_O&&_O.drawer||_P.drawer),type:3});return _S}([]),context:_G,operator:_E,tag:'portal',type:6},_S):_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};}})();

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

  var template$8 = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-breadcrumb'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

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

  var template$9 = (function(){var $0=void 0,$2=!0,$5={className:'bell-breadcrumb-separator'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]=function(_R){_q('last',_U.last).value?_b(_R,'nativeProps','bell-breadcrumb-text','className'):(_b(_R,'nativeProps','bell-breadcrumb-link','className'),_b(_R,'events',_h('click','click.breadcrumbItem','click','','click','breadcrumbItem'),'click'));return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,operator:_B,tag:'span',type:3});!_q('last',_U.last).value?_S[_S.length]={context:_G,nativeProps:$5,operator:_B,tag:'span',text:_y(_q('separator',_U.separator).value),type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-breadcrumb-item'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'span',type:3});}})();

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

  var template$a = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('disabled',_U.disabled).value?_b(_R,'nativeProps',$2,'disabled'):!_q('loading',_U.loading).value?_b(_R,'events',_h('click','click.button','click','','click','button'),'click'):$0;_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_prefix',_S)||(_q('loading',_U.loading).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-button-loading-icon',name:'loader-5-line',spin:$2},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2});return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['children'])).value?_q('loading',_U.loading).value||_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['prefix'])).value||_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['suffix'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,operator:_B,tag:'span',type:3}:_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S):_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_a({children:function(_S){_l('$slot_suffix',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-button'+(_q('type',_U.type).value?' bell-button-'+_y(_q('type',_U.type).value):'')+(_q('size',_U.size).value?' bell-button-'+_y(_q('size',_U.size).value):'')+(_q('shape',_U.shape).value?' bell-button-'+_y(_q('shape',_U.shape).value):'')+(_q('ghost',_U.ghost).value?' bell-button-ghost':'')+(_q('loading',_U.loading).value?' bell-button-loading':'')+(_q('disabled',_U.disabled).value?' bell-button-disabled':' bell-button-enabled')+(_q('block',_U.block).value?' bell-button-block':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'button',type:3});}})();

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

  var template$b = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-button-group'+(_q('shape',_U.shape).value?' bell-button-group-'+_y(_q('shape',_U.shape).value):'')+(_q('size',_U.size).value?' bell-button-group-'+_y(_q('size',_U.size).value):'')+(_q('vertical',_U.vertical).value?' bell-button-group-vertical':' bell-button-group-horizontal')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

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

  var template$c = (function(){var $0=void 0,$2=!0,$5={className:'bell-input-prepend-wrapper'},$6={className:'bell-input-prepend'},$7={className:'bell-input-prefix bell-input-prefix-icon-wrapper'},$8={className:'bell-input-suffix bell-input-suffix-text-wrapper'},$9={className:'bell-input-suffix bell-input-suffix-icon-wrapper'},$10={className:'bell-input-suffix bell-input-suffix-icon-wrapper bell-input-secure'},$11={className:'bell-input-suffix bell-input-suffix-icon-wrapper bell-input-clear'},$12={className:'bell-input-content'},$13={className:'bell-input-append-wrapper'},$14={className:'bell-input-append'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('width',_U.width).value||_q('style',_U.style).value?_R.nativeStyles=_d([_q('width',_U.width).value?{width:_q('width',_U.width).value+'px'}:$0,_q('style',_U.style).value]):$0;return _R}({children:function(_S){_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['prepend'])).value?_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_prepend',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_S[_S.length]={children:function(_S){_S[_S.length]=function(_R){_q('maxLength',_U.maxLength).value?_b(_R,'nativeProps',_q('maxLength',_U.maxLength).value,'maxLength'):$0;_q('placeholder',_U.placeholder).value?_b(_R,'nativeProps',_q('placeholder',_U.placeholder).value,'placeholder'):$0;_q('autoFocus',_U.autoFocus).value?_b(_R,'nativeProps',$2,'autofocus'):$0;_q('readOnly',_U.readOnly).value?_b(_R,'nativeProps',$2,'readOnly'):$0;_q('spellCheck',_U.spellCheck).value?_b(_R,'nativeProps',$2,'spellcheck'):$0;_q('disabled',_U.disabled).value?_b(_R,'nativeProps',$2,'disabled'):(_b(_R,'events',_g('focus','handleFocus()','focus','',_G.handleFocus),'focus'),_b(_R,'events',_g('blur','handleBlur()','blur','',_G.handleBlur),'blur'),_b(_R,'events',_h('input','input.input','input','','input','input'),'input'),_b(_R,'events',_h('compositionstart','compositionstart.input','compositionstart','','compositionstart','input'),'compositionstart'),_b(_R,'events',_h('compositionend','compositionend.input','compositionend','','compositionend','input'),'compositionend'));return _R}({context:_G,model:_f(_q('value',_U.value)),nativeProps:{className:'bell-input-el'+(_q('prefix',_U.prefix).value?' bell-input-el-with-prefix':'')+(_q('hasCount',_U.hasCount).value||_q('suffix',_U.suffix).value||_q('secure',_U.secure).value||_q('clearable',_U.clearable).value&&!_q('disabled',_U.disabled).value?' bell-input-el-with-suffix':'')+(_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['prepend'])).value?' bell-input-el-with-prepend':'')+(_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['append'])).value?' bell-input-el-with-append':''),type:_q('currentType',_U.currentType).value},operator:_B,ref:'input',tag:'input',type:3});_q('prefix',_U.prefix).value?_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-input-prefix-icon',name:_q('prefix',_U.prefix).value},tag:'Icon',type:4};return _S}([]),context:_G,nativeProps:$7,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_q('hasCount',_U.hasCount).value?_S[_S.length]={children:function(_S){_S[_S.length]={isPure:$2,operator:_z,text:_y(_x(_w(_q('formatValueLength',_U.formatValueLength,$0,_H&&_H.formatValueLength||_I.formatValueLength).value,_G,[_q('value',_U.value).value])).value)+' / '+_y(_q('maxLength',_U.maxLength).value),type:1};return _S}([]),context:_G,nativeProps:$8,operator:_B,tag:'div',type:3}:_q('suffix',_U.suffix).value?_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-input-suffix-icon',name:_q('suffix',_U.suffix).value},tag:'Icon',type:4};return _S}([]),context:_G,nativeProps:$9,operator:_B,tag:'div',type:3}:_q('secure',_U.secure).value?_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-input-secure-icon',name:_q('isSecure',_U.isSecure).value?'eye-close-line':'eye-line'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click',"toggle('isSecure')",'click','',_G.toggle,{args:function(_Q,_X,_Y){return ['isSecure']}})},nativeProps:$10,operator:_B,tag:'div',type:3}:_q('clearable',_U.clearable).value&&!_q('disabled',_U.disabled).value?_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-input-clear-icon',name:'close-circle-fill'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','handleClearClick()','click','',_G.handleClearClick)},nativeProps:$11,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$12,operator:_B,tag:'div',type:3};_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['append'])).value?_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_append',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$13,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:$14,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-input'+(_q('size',_U.size).value?' bell-input-'+_y(_q('size',_U.size).value):'')+(_q('status',_U.status).value?' bell-input-'+_y(_q('status',_U.status).value):'')+(_q('block',_U.block).value?' bell-input-block':'')+(_q('isFocus',_U.isFocus).value?' bell-input-focused':'')+(_q('disabled',_U.disabled).value?' bell-input-disabled':' bell-input-enabled')+(!_q('value',_U.value).value?' bell-input-no-value':' bell-input-has-value')+(_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['prepend'])).value?' bell-input-with-prepend':'')+(_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['append'])).value?' bell-input-with-append':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

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

  var template$d = (function(){var $0=void 0,$2=!0,$5={className:'bell-input-number-actions'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=_T[_T.length]={context:_G,events:{blur:_g('blur','handleBlur()','blur','',_G.handleBlur,$0,$2),compositionend:_g('compositionend','handleCompositionEnd()','compositionend','',_G.handleCompositionEnd,$0,$2),compositionstart:_g('compositionstart','handleCompositionStart()','compositionstart','',_G.handleCompositionStart,$0,$2),down:_g('down','handleDown()','down','',_G.handleDown,$0,$2),enter:_g('enter','handleEnter()','enter','',_G.handleEnter,$0,$2),focus:_g('focus','handleFocus()','focus','',_G.handleFocus,$0,$2),input:_g('input','handleInput()','input','',_G.handleInput,$0,$2),keydown:_g('keydown','handleKeydown()','keydown','',_G.handleKeydown,$0,$2),keyup:_g('keyup','handleKeyup()','keyup','',_G.handleKeyup,$0,$2),up:_g('up','handleUp()','up','',_G.handleUp,$0,$2)},isComponent:$2,operator:_C,props:{autoFocus:_q('autoFocus',_U.autoFocus).value,block:_q('block',_U.block).value,className:_q('customClassName',_U.customClassName).value,disabled:_q('disabled',_U.disabled).value,placeholder:_q('placeholder',_U.placeholder).value,readOnly:_q('readOnly',_U.readOnly).value,size:_q('size',_U.size).value,status:_q('status',_U.status).value,style:_q('style',_U.style).value,value:_q('value',_U.value).value,width:_q('width',_U.width).value},ref:'input',slots:_k({$slot_append:function(_S,_T){_a({children:function(_S){_l('$slot_append',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);},$slot_children:function(_S,_T){_S[_S.length]={context:_G,nativeProps:{className:'bell-input-number-el',max:_q('max',_U.max).value,min:_q('min',_U.min).value,step:_q('step',_U.step).value,type:'number',value:_q('value',_U.value).value},operator:_B,ref:'numberInput',tag:'input',type:3};_q('showStep',_U.showStep).value?_S[_S.length]={children:function(_S){_S[_S.length]=function(_R){_q('upDisabled',_U.upDisabled).value?_b(_R,'nativeProps','bell-input-number-up bell-input-number-up-disabled','className'):(_b(_R,'nativeProps','bell-input-number-up bell-input-number-up-enabled','className'),_b(_R,'events',_g('click','handleUp()','click','',_G.handleUp),'click'));return _R}({children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-input-number-up-icon',name:'arrow-up-s-line'},tag:'Icon',type:4};return _S}([]),context:_G,operator:_B,tag:'div',type:3});_S[_S.length]=function(_R){_q('downDisabled',_U.downDisabled).value?_b(_R,'nativeProps','bell-input-number-down bell-input-number-down-disabled','className'):(_b(_R,'nativeProps','bell-input-number-down bell-input-number-down-enabled','className'),_b(_R,'events',_g('click','handleDown()','click','',_G.handleDown),'click'));return _R}({children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-input-number-down-icon',name:'arrow-down-s-line'},tag:'Icon',type:4};return _S}([]),context:_G,operator:_B,tag:'div',type:3});return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};},$slot_prepend:function(_S,_T){_a({children:function(_S){_l('$slot_prepend',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);}}),tag:'Input',type:4};}})();

  // 数字键 48-57
  // 大键盘 .(190) -(189)
  // 小键盘 .(110) -(109)
  // 删除键 8
  // shift 16
  // ctrl 17
  // alt 18
  // capslock 20
  // cmd 91、93
  // 方向键 37-40
  function isHelper(keyCode) {
      return keyCode >= 37 && keyCode <= 40
          || keyCode >= 16 && keyCode <= 18
          || keyCode === 8
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

  var template$e = (function(){var $0=void 0,$2=!0,$5={className:'bell-textarea-word-count'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('width',_U.width).value||_q('style',_U.style).value?_R.nativeStyles=_d([_q('width',_U.width).value?{width:_q('width',_U.width).value+'px'}:$0,_q('style',_U.style).value]):$0;return _R}({children:function(_S){_S[_S.length]=function(_R){_q('wrap',_U.wrap).value?_b(_R,'nativeProps',_q('wrap',_U.wrap).value,'wrap'):$0;_q('placeholder',_U.placeholder).value?_b(_R,'nativeProps',_q('placeholder',_U.placeholder).value,'placeholder'):$0;_q('maxLength',_U.maxLength).value?_b(_R,'nativeProps',_q('maxLength',_U.maxLength).value,'maxLength'):$0;_q('autoFocus',_U.autoFocus).value?_b(_R,'nativeProps',$2,'autofocus'):$0;_q('readOnly',_U.readOnly).value?_b(_R,'nativeProps',$2,'readOnly'):$0;_q('spellCheck',_U.spellCheck).value?_b(_R,'nativeProps',$2,'spellcheck'):$0;_q('disabled',_U.disabled).value?_b(_R,'nativeProps',$2,'disabled'):(_b(_R,'events',_g('blur','handleBlur()','blur','',_G.handleBlur),'blur'),_b(_R,'events',_g('focus','handleFocus()','focus','',_G.handleFocus),'focus'));return _R}({context:_G,model:_f(_q('value',_U.value)),nativeProps:{className:'bell-textarea-el'+(_q('hasCount',_U.hasCount).value?' bell-textarea-el-with-word-count':'')},nativeStyles:_d(_q('textareaStyle',_U.textareaStyle).value),operator:_B,tag:'textarea',type:3});_q('hasCount',_U.hasCount).value?_S[_S.length]={children:function(_S){_S[_S.length]={isPure:$2,operator:_z,text:_y(_x(_w(_q('formatValueLength',_U.formatValueLength,$0,_H&&_H.formatValueLength||_I.formatValueLength).value,_G,[_q('value',_U.value).value])).value)+' / '+_y(_q('maxLength',_U.maxLength).value),type:1};return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-textarea'+(_q('size',_U.size).value?' bell-textarea-'+_y(_q('size',_U.size).value):'')+(_q('status',_U.status).value?' bell-textarea-'+_y(_q('status',_U.status).value):'')+(_q('block',_U.block).value?' bell-textarea-block':'')+(_q('resize',_U.resize).value===_q('RAW_HORIZONTAL',_U.RAW_HORIZONTAL).value?' bell-textarea-resize-horizontal':_q('resize',_U.resize).value===_q('RAW_VERTICAL',_U.RAW_VERTICAL).value?' bell-textarea-resize-vertical':'')+(_q('disabled',_U.disabled).value?' bell-textarea-disabled':' bell-textarea-enabled')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

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

  var template$f = (function(){var $0=void 0,$2=!0,$3=!1,$5={className:'bell-radio-icon'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;!_q('disabled',_U.disabled).value?_b(_R,'events',_g('click','handleClick()','click','',_G.handleClick),'click'):$0;return _R}({children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]=function(_R){_q('name',_U.name).value?_b(_R,'nativeProps',_q('name',_U.name).value,'name'):$0;return _R}({context:_G,events:{blur:_g('blur',"set('isFocus', false)",'blur','',_G.set,{args:function(_Q,_X,_Y){return ['isFocus',$3]}}),focus:_g('focus',"set('isFocus', true)",'focus','',_G.set,{args:function(_Q,_X,_Y){return ['isFocus',$2]}})},nativeProps:{className:'bell-radio-input',disabled:_q('disabled',_U.disabled).value,type:'radio',value:_q('value',_U.value).value},operator:_B,tag:'input',type:3});return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'span',type:3};_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-radio'+(_q('disabled',_U.disabled).value?' bell-radio-disabled':' bell-radio-enabled')+(_q('checked',_U.checked).value?' bell-radio-active':'')+(_q('isFocus',_U.isFocus).value?' bell-radio-focus':'')+(_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['children'])).value?' bell-radio-with-label':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'label',type:3});}})();

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

  var template$g = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:(_q('button',_U.button).value?'bell-radio-button'+(_q('size',_U.size).value?' bell-radio-button-'+_y(_q('size',_U.size).value):'')+(_q('disabled',_U.disabled).value?' bell-radio-button-disabled':' bell-radio-button-enable'):'bell-radio-group'+(_q('disabled',_U.disabled).value?' bell-radio-group-disabled':' bell-radio-group-enabled'))+(_q('vertical',_U.vertical).value?' bell-radio-vertical':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

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

  var template$h = (function(){var $0=void 0,$2=!0,$3=!1,$5={className:'bell-checkbox-icon'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]=function(_R){_q('name',_U.name).value?_b(_R,'nativeProps',_q('name',_U.name).value,'name'):$0;return _R}({context:_G,events:{blur:_g('blur',"set('isFocus', false)",'blur','',_G.set,{args:function(_Q,_X,_Y){return ['isFocus',$3]}}),change:_g('change','onChange()','change','',_G.onChange),focus:_g('focus',"set('isFocus', true)",'focus','',_G.set,{args:function(_Q,_X,_Y){return ['isFocus',$2]}})},nativeProps:{checked:_q('checked',_U.checked).value,className:'bell-checkbox-input',disabled:_q('disabled',_U.disabled).value,type:'checkbox'},operator:_B,tag:'input',type:3});return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'span',type:3};_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-checkbox'+(_q('disabled',_U.disabled).value?' bell-checkbox-disabled':' bell-checkbox-enabled')+(_q('checked',_U.checked).value?' bell-checkbox-active':'')+(_q('isFocus',_U.isFocus).value?' bell-checkbox-focus':'')+(_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['children'])).value?' bell-checkbox-with-label':'')+(_q('indeterminate',_U.indeterminate).value?' bell-checkbox-indeterminate':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'label',type:3});}})();

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

  var template$i = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=_T[_T.length]=function(_R){_q('vertical',_U.vertical).value?(_b(_R,'props',$2,'vertical'),_b(_R,'props','start','align'),_b(_R,'props',_q('CHECKBOX_GAP_VERTICAL',_U.CHECKBOX_GAP_VERTICAL).value,'size')):(_b(_R,'props',$2,'autoWrap'),_b(_R,'props','center','align'),_b(_R,'props',[_q('CHECKBOX_GAP_HORIZONTAL',_U.CHECKBOX_GAP_HORIZONTAL).value,_q('CHECKBOX_GAP_VERTICAL',_U.CHECKBOX_GAP_VERTICAL).value],'size'));_q('style',_U.style).value?_b(_R,'props',_q('style',_U.style).value,'style'):$0;return _R}({context:_G,isComponent:$2,operator:_C,props:{className:'bell-checkbox-group'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},slots:_k({$slot_children:function(_S,_T){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);}}),tag:'Space',type:4});}})();

  var template$j = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('sizeValue',_U.sizeValue).value||_q('style',_U.style).value?_R.nativeStyles=_d([_q('sizeValue',_U.sizeValue).value?{gap:_q('sizeValue',_U.sizeValue).value}:$0,_q('style',_U.style).value]):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-space'+(_q('vertical',_U.vertical).value?' bell-space-vertical':' bell-space-horizontal')+(_q('align',_U.align).value?' bell-space-align-'+_y(_q('align',_U.align).value):'')+(_q('autoWrap',_U.autoWrap).value?' bell-space-auto-wrap':'')+(_q('block',_U.block).value?' bell-space-block':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var Space = Yox.define({
      template: template$j,
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

  var CHECKBOX_GAP_HORIZONTAL = 16;
  var CHECKBOX_GAP_VERTICAL = 8;
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
      data: function () {
          return {
              CHECKBOX_GAP_HORIZONTAL: CHECKBOX_GAP_HORIZONTAL,
              CHECKBOX_GAP_VERTICAL: CHECKBOX_GAP_VERTICAL,
          };
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
      components: {
          Space: Space,
      }
  });

  var template$k = (function(){var $0=void 0,$2=!0,$4={className:'bell-slider-bar'},$6={className:'bell-slider-stop'},$7=function(){return 0};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('width',_U.width).value||_q('height',_U.height).value||_q('style',_U.style).value?_R.nativeStyles=_d([{height:_q('height',_U.height).value?_q('height',_U.height).value+'px':$0,width:_q('width',_U.width).value?_q('width',_U.width).value+'px':$0},_q('style',_U.style).value]):$0;return _R}({children:function(_S){_S[_S.length]=function(_R){!_q('disabled',_U.disabled).value?_b(_R,'events',_h('click','trackClick.slider','click','','trackClick','slider'),'click'):$0;return _R}({children:function(_S){_S[_S.length]={context:_G,nativeProps:$4,nativeStyles:{height:_q('vertical',_U.vertical).value?_q('percent',_U.percent).value+'%':$0,width:_q('vertical',_U.vertical).value?$0:_q('percent',_U.percent).value+'%'},operator:_B,tag:'div',type:3};_q('showStops',_U.showStops).value?_n(_q('stops',_U.stops),function(_U,_V,_W){_S[_S.length]={context:_G,key:_r(_U).value,nativeProps:$6,nativeStyles:{bottom:_u($7,'vertical').value?_r(_U).value+'%':$0,left:_u($7,'vertical').value?$0:_r(_U).value+'%'},operator:_B,tag:'div',type:3};}):_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{content:_q('formatTooltip',_U.formatTooltip).value?_x(_w(_q('formatTooltip',_U.formatTooltip,$0,_H&&_H.formatTooltip||_I.formatTooltip).value,_G,[_q('value',_U.value).value])).value:_q('value',_U.value).value,mode:_q('RAW_CUSTOM',_U.RAW_CUSTOM).value,placement:_q('vertical',_U.vertical).value?_q('RAW_RIGHT',_U.RAW_RIGHT).value:_q('RAW_TOP',_U.RAW_TOP).value},ref:'tooltip',slots:_k({$slot_children:function(_S,_T){_S[_S.length]=function(_R){!_q('disabled',_U.disabled).value?_b(_R,'events',_h('mousedown','thumbMouseDown.slider','mousedown','','thumbMouseDown','slider'),'mousedown'):$0;return _R}({context:_G,events:{mouseenter:_h('mouseenter','thumbMouseEnter.slider','mouseenter','','thumbMouseEnter','slider'),mouseleave:_h('mouseleave','thumbMouseLeave.slider','mouseleave','','thumbMouseLeave','slider')},lazy:{mouseenter:200,mouseleave:200},nativeProps:{className:'bell-slider-thumb'},nativeStyles:{bottom:_q('vertical',_U.vertical).value?_q('percent',_U.percent).value+'%':$0,left:_q('vertical',_U.vertical).value?$0:_q('percent',_U.percent).value+'%'},operator:_B,tag:'div',type:3});}}),tag:'Tooltip',type:4};return _S}([]),context:_G,nativeProps:{className:'bell-slider-track'},operator:_B,tag:'div',type:3});return _S}([]),context:_G,nativeProps:{className:'bell-slider'+(_q('vertical',_U.vertical).value?' bell-slider-vertical':' bell-slider-horizontal')+(_q('disabled',_U.disabled).value?' bell-slider-disabled':' bell-slider-enabled')+(_q('block',_U.block).value?' bell-slider-block':'')+(_q('thumbIsDragging',_U.thumbIsDragging).value?' bell-slider-dragging':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var template$l = (function(){var $0=void 0,$2=!0,$5={className:'bell-popover-arrow'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{disabled:_q('disabled',_U.disabled).value,offsetX:_q('offsetX',_U.offsetX).value,offsetY:_q('offsetY',_U.offsetY).value,placement:_q('placement',_U.placement).value,showArrow:$2,showDelay:_q('delay',_U.delay).value,trigger:_q('mode',_U.mode).value,visible:_q('isVisible',_U.isVisible).value},ref:'popover',slots:_k({$slot_children:function(_S,_T){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);},$slot_overlay:function(_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]=function(_R){_q('maxWidth',_U.maxWidth).value||_q('maxHeight',_U.maxHeight).value?_R.nativeStyles={maxHeight:_q('maxHeight',_U.maxHeight).value?_q('maxHeight',_U.maxHeight).value+'px':$0,maxWidth:_q('maxWidth',_U.maxWidth).value?_q('maxWidth',_U.maxWidth).value+'px':$0}:$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_content',_S)||(_S[_S.length]={isPure:$2,operator:_z,text:_y(_q('content',_U.content).value),type:1});return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-popover-content'},operator:_B,tag:'div',type:3});_S[_S.length]={context:_G,isPure:$2,isStatic:$2,nativeProps:$5,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:{className:'bell-tooltip'+(_q('theme',_U.theme).value?' bell-tooltip-'+_y(_q('theme',_U.theme).value):'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}}),tag:'Popover',type:4};}})();

  var Tooltip = Yox.define({
      template: template$l,
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

  var Slider = Yox.define({
      template: template$k,
      name: 'bell-Slider',
      propTypes: {
          value: {
              type: RAW_NUMERIC,
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
              thumbIsDragging: FALSE,
              mouseInThumb: FALSE,
              tooltipVisible: FALSE,
          };
      },
      computed: {
          percent: function () {
              var min = toNumber(this.get('min'));
              var max = toNumber(this.get('max'));
              var range = max - min;
              var value = toNumber(this.get('value'));
              if (value > max) {
                  value = max;
              }
              else if (value < min) {
                  value = min;
              }
              return range > 0
                  ? (value - min) / range * 100
                  : 0;
          },
          stops: function () {
              var min = toNumber(this.get('min'));
              var max = toNumber(this.get('max'));
              var step = toNumber(this.get('step'));
              var range = max - min;
              var result = [];
              if (max - min > step) {
                  var count = Math.floor(range / step);
                  var interval = 100 / count;
                  for (var i = 1; i < count; i++) {
                      result.push(i * interval);
                  }
              }
              return result;
          }
      },
      watchers: {
          value: function () {
              this.nextTick(function () {
                  var tooltip = this.$refs.tooltip;
                  tooltip.refresh();
              });
          },
          tooltipVisible: function (value, oldValue) {
              var tooltip = this.$refs.tooltip;
              if (value) {
                  tooltip.open();
              }
              else if (oldValue) {
                  tooltip.close();
              }
          }
      },
      events: {
          outside: {
              listener: function (event) {
                  if (event.phase !== Yox.Event.PHASE_UPWARD) {
                      return;
                  }
                  event.stop();
                  this.set('tooltipVisible', FALSE);
              },
              ns: 'tooltip'
          }
      },
      afterMount: function () {
          var me = this;
          var isVertical = FALSE;
          var min = 0;
          var max = 0;
          var step = 0;
          var trackLeft = 0;
          var trackTop = 0;
          var trackRight = 0;
          var trackBottom = 0;
          var onMouseMove = function (event) {
              var originalEvent = event.originalEvent;
              updatePosition(originalEvent.pageX, originalEvent.pageY);
          };
          var onMouseUp = function () {
              Yox.dom.off(DOCUMENT, RAW_EVENT_MOUSEMOVE, onMouseMove);
              Yox.dom.off(DOCUMENT, RAW_EVENT_MOUSEUP, onMouseUp);
              me.set('thumbIsDragging', FALSE);
              if (!me.get('mouseInThumb')) {
                  me.set('tooltipVisible', FALSE);
              }
          };
          var updatePosition = function (x, y) {
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
              var newValue = (max - min) * ratio + min;
              if (step > 0) {
                  var count = Math.round(newValue / step);
                  me.set('value', step * count);
              }
              else {
                  me.set('value', newValue);
              }
          };
          var updateValues = function () {
              isVertical = me.get('vertical');
              max = toNumber(me.get('max'));
              min = toNumber(me.get('min'));
              step = toNumber(me.get('step'));
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
          me
              .on('thumbMouseEnter.slider', function (event) {
              event.stop();
              me.set({
                  mouseInThumb: TRUE,
                  tooltipVisible: toBoolean(me.get('showTooltip')),
              });
          })
              .on('thumbMouseLeave.slider', function (event) {
              event.stop();
              me.set('mouseInThumb', FALSE);
              if (!me.get('thumbIsDragging')) {
                  me.set('tooltipVisible', FALSE);
              }
          })
              .on('thumbMouseDown.slider', function (event) {
              event.stop();
              updateValues();
              Yox.dom.on(DOCUMENT, RAW_EVENT_MOUSEMOVE, onMouseMove);
              Yox.dom.on(DOCUMENT, RAW_EVENT_MOUSEUP, onMouseUp);
              me.set({
                  thumbIsDragging: TRUE,
                  tooltipVisible: toBoolean(me.get('showTooltip')),
              });
          })
              .on('trackClick.slider', function (event) {
              event.stop();
              fireClickEvent(event);
              updateValues();
              var originalEvent = event.originalEvent;
              updatePosition(originalEvent.pageX, originalEvent.pageY);
          });
      },
      components: {
          Tooltip: Tooltip,
      },
  });

  var template$m = (function(){var $0=void 0,$2=!0,$5={className:'bell-statistic-title'},$6={className:'bell-statistic-content-prefix'},$7={className:'bell-statistic-content-value'},$8={className:'bell-statistic-content-suffix'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]={context:_G,nativeProps:$5,operator:_B,tag:'div',text:_y(_q('title',_U.title).value),type:3};_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{loading:_q('loading',_U.loading).value,text:{rows:1}},slots:_k({$slot_children:function(_S,_T){_S[_S.length]=function(_R){_q('color',_U.color).value?_R.nativeStyles={color:_q('color',_U.color).value}:$0;return _R}({children:function(_S){_q('prefix',_U.prefix).value||_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['prefix'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_prefix',_S)||(_S[_S.length]={isPure:$2,operator:_z,text:_y(_q('prefix',_U.prefix).value),type:1});return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_S[_S.length]={context:_G,nativeProps:$7,operator:_B,tag:'div',text:_y(_q('value',_U.value).value),type:3};_q('suffix',_U.suffix).value||_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['suffix'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_suffix',_S)||(_S[_S.length]={isPure:$2,operator:_z,text:_y(_q('suffix',_U.suffix).value),type:1});return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$8,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-statistic-content'},operator:_B,tag:'div',type:3});}}),tag:'Skeleton',type:4};return _S}([]),context:_G,nativeProps:{className:'bell-statistic'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var template$n = (function(){var $0=void 0,$2=!0,$5={className:'bell-skeleton-header'},$6={className:'bell-skeleton-text-row'},$7={className:'bell-skeleton-text'},$8={className:'bell-skeleton-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_q('loading',_U.loading).value?_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_q('imageSize',_U.imageSize).value?_S[_S.length]={children:function(_S){_S[_S.length]={context:_G,nativeProps:{className:'bell-skeleton-image bell-skeleton-image-'+_y(_q('imageShape',_U.imageShape).value)},nativeStyles:{height:_q('imageSize',_U.imageSize).value,width:_q('imageSize',_U.imageSize).value},operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_S[_S.length]={children:function(_S){_q('computedText',_U.computedText).value?_S[_S.length]={children:function(_S){_n(_q('computedText',_U.computedText),function(_U,_V,_W,index){_S[_S.length]={context:_G,nativeProps:$6,nativeStyles:{width:_t('width',_U.width).value},operator:_B,tag:'li',type:3};});return _S}([]),context:_G,nativeProps:$7,operator:_B,tag:'ul',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:$8,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:{className:'bell-skeleton'+(_q('active',_U.active).value?' bell-skeleton-active':'')+(_q('imageSize',_U.imageSize).value?' bell-skeleton-with-image':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3}):_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);}})();

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

  var template$o = (function(){var $0=void 0,$2=!0,$5={className:'bell-switch-label'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;!_q('disabled',_U.disabled).value&&!_q('loading',_U.loading).value?_b(_R,'events',_g('click','handleClick()','click','',_G.handleClick),'click'):$0;return _R}({children:function(_S){_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['on'])).value||_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['off'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_'+(_q('checked',_U.checked).value?'on':'off'),_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-switch'+(_q('size',_U.size).value?' bell-switch-'+_y(_q('size',_U.size).value):'')+(_q('disabled',_U.disabled).value?' bell-switch-disabled':' bell-switch-enabled')+(_q('checked',_U.checked).value?' bell-switch-active':'')+(_q('loading',_U.loading).value?' bell-switch-loading':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

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

  var template$p = (function(){var $0=void 0,$2=!0,$4=function(_Q){return _Q.length-1},$5={className:'bell-select-prefix'},$6={className:'bell-select-placeholder'},$7={className:'bell-select-values'},$8={className:'bell-select-value'},$9={className:'bell-select-overlay'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{gap:'5',placement:_q('placement',_U.placement).value,trigger:_q('RAW_CUSTOM',_U.RAW_CUSTOM).value,visible:_q('visible',_U.visible).value,widthAlign:$2},ref:'popover',slots:_k({$slot_children:function(_S,_T){_S[_S.length]=function(_R){!_q('disabled',_U.disabled).value?_b(_R,'events',_g('click',"toggle('visible')",'click','',_G.toggle,{args:function(_Q,_X,_Y){return ['visible']}}),'click'):$0;_q('width',_U.width).value||_q('style',_U.style).value?_R.nativeStyles=_d([_q('width',_U.width).value?{width:_q('width',_U.width).value+'px'}:$0,_q('style',_U.style).value]):$0;return _R}({children:function(_S){_q('prefix',_U.prefix).value||_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['prefix'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_prefix',_S)||(_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-select-prefix-icon',name:_q('prefix',_U.prefix).value},tag:'Icon',type:4});return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_p($4,'selectedOptions.length',$2).value===0?_S[_S.length]={context:_G,nativeProps:$6,operator:_B,tag:'div',text:_y(_q('placeholder',_U.placeholder).value),type:3}:_q('multiple',_U.multiple).value?_S[_S.length]={children:function(_S){_n(_q('selectedOptions',_U.selectedOptions),function(_U,_V,_W,index){_S[_S.length]=_T[_T.length]={context:_G,events:{close:_g('close','handleRemoveOption($event, index)','close','',_G.handleRemoveOption,{args:function(_Q,_X,_Y){return [_X,index]}},$2)},isComponent:$2,operator:_C,props:{closable:$2,simple:$2},slots:_k({$slot_children:function(_S,_T){_S[_S.length]={isPure:$2,operator:_z,text:_y(_t('text',_U.text).value),type:1};}}),tag:'Tag',type:4};});return _S}([]),context:_G,nativeProps:$7,operator:_B,tag:'div',type:3}:_S[_S.length]={context:_G,nativeProps:$8,operator:_B,tag:'div',text:_y(_p($4,'selectedOptions.0.text',$2).value),type:3};_q('clearable',_U.clearable).value&&_p($4,'selectedOptions.length',$2).value?_S[_S.length]=_T[_T.length]={context:_G,events:{'click.native':_g('click.native','handleClearClick()','click','native',_G.handleClearClick,$0,$0,$2)},isComponent:$2,operator:_C,props:{className:'bell-select-clear-icon',name:'close-circle-fill'},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-select-arrow-icon',name:'arrow-down-s-line'},tag:'Icon',type:4};return _S}([]),context:_G,nativeProps:{className:'bell-select'+(_q('status',_U.status).value?' bell-select-'+_y(_q('status',_U.status).value):'')+(_q('size',_U.size).value?' bell-select-'+_y(_q('size',_U.size).value):'')+(_q('block',_U.block).value?' bell-select-block':'')+(_q('visible',_U.visible).value?' bell-select-opened':'')+(_q('clearable',_U.clearable).value?' bell-select-clearable':'')+(_q('placement',_U.placement).value===_q('RAW_TOP',_U.RAW_TOP).value?' bell-select-reversed':'')+(_q('disabled',_U.disabled).value?' bell-select-disabled':' bell-select-enabled')+(_q('prefix',_U.prefix).value||_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['prefix'])).value?' bell-select-with-prefix':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});},$slot_overlay:function(_S,_T){_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$9,operator:_B,tag:'div',type:3};}}),tag:'Popover',type:4};}})();

  var template$q = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('color',_U.color).value||_q('style',_U.style).value?_R.nativeStyles=_d([_q('color',_U.color).value?{backgroundColor:!_q('checkable',_U.checkable).value||_q('checked',_U.checked).value?_q('color',_U.color).value:$0,color:_q('checkable',_U.checkable).value&&!_q('checked',_U.checked).value?_q('color',_U.color).value:$0}:$0,_q('style',_U.style).value]):$0;_q('checkable',_U.checkable).value?_b(_R,'events',_g('click','toggleChecked()','click','',_G.toggleChecked),'click'):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);_q('closable',_U.closable).value?_S[_S.length]=_T[_T.length]={context:_G,events:{'click.native':_h('click.native','close.tag','click','native','close','tag',$0,$2)},isComponent:$2,operator:_C,props:{className:'bell-tag-close-icon',name:'close-line'},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-tag'+(_q('type',_U.type).value?' bell-tag-'+_y(_q('type',_U.type).value):'')+(_q('size',_U.size).value?' bell-tag-'+_y(_q('size',_U.size).value):'')+(_q('checkable',_U.checkable).value?' bell-tag-checkable':'')+(_q('closable',_U.closable).value?' bell-tag-closable':'')+(_q('color',_U.color).value?' bell-tag-pure':'')+(_q('checked',_U.checked).value?' bell-tag-checked':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

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

  var template$r = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;!_q('disabled',_U.disabled).value?_b(_R,'events',_g('click','handleClick()','click','',_G.handleClick),'click'):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S)||(_S[_S.length]={isPure:$2,operator:_z,text:_y(_q('text',_U.text).value),type:1});return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-select-option'+(_q('disabled',_U.disabled).value?' bell-select-option-disabled':' bell-select-option-enabled')+(_q('isSelected',_U.isSelected).value?' bell-select-option-active':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

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

  var template$s = (function(){var $0=void 0,$2=!0,$5={className:'bell-select-group-title'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]={context:_G,nativeProps:$5,operator:_B,tag:'div',text:_y(_q('label',_U.label).value),type:3};_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-select-option-group'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

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

  var template$t = (function(){var $0=void 0,$2=!0,$4=function(_Q){return _Q.length-1},$5={className:'bell-pagination-total'},$6={className:'bell-pagination-separator'},$7={className:'bell-pagination-count'},$8={className:'bell-pagination-simple'},$9={className:'bell-pagination-ellipsis'},$10={className:'bell-pagination-list'},$11={className:'bell-pagination-jumper'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_q('showTotal',_U.showTotal).value?_S[_S.length]={children:function(_S){_S[_S.length]={isPure:$2,operator:_z,text:'共 '+_y(_q('total',_U.total).value)+' 条',type:1};return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'span',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_p($4,'pageSizeList.length',$2).value>0?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,model:_f(_q('pageSize',_U.pageSize)),operator:_C,props:{placement:_q('placement',_U.placement).value,size:_q('size',_U.size).value},slots:_k({$slot_children:function(_S,_T){_n(_q('pageSizeList',_U.pageSizeList),function(_U,_V,_W){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{text:_t('text',_U.text).value,value:_t('value',_U.value).value},tag:'Option',type:4};});}}),tag:'Select',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_q('simple',_U.simple).value?_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,key:'prev',operator:_C,props:{disabled:_q('current',_U.current).value===1},slots:_k({$slot_children:function(_S,_T){_a({children:function(_S){_l('$slot_prev',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);}}),tag:'PrevPage',type:4};_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,model:_f(_q('page',_U.page)),operator:_C,props:{className:'bell-pagination-simple-input',size:_q('size',_U.size).value},ref:'simpleInput',tag:'Input',type:4};_S[_S.length]={context:_G,isPure:$2,isStatic:$2,nativeProps:$6,operator:_B,tag:'span',text:'/',type:3};_S[_S.length]={context:_G,nativeProps:$7,operator:_B,tag:'span',text:_y(_q('count',_U.count).value),type:3};_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,key:'next',operator:_C,props:{disabled:_q('current',_U.current).value===_q('count',_U.count).value},slots:_k({$slot_children:function(_S,_T){_a({children:function(_S){_l('$slot_next',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);}}),tag:'NextPage',type:4};return _S}([]),context:_G,nativeProps:$8,operator:_B,tag:'div',type:3}:_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,key:'prev',operator:_C,props:{disabled:_q('current',_U.current).value===1},slots:_k({$slot_children:function(_S,_T){_a({children:function(_S){_l('$slot_prev',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);}}),tag:'PrevPage',type:4};_n(_q('pageList',_U.pageList),function(_U,_V,_W){_t('prev',_U.prev).value?_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-pagination-icon',name:'arrow-left-s-fill'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','decreaseCurrent(5)','click','',_G.decreaseCurrent,{args:function(_Q,_X,_Y){return [5]}})},key:'prev-ellipsis',nativeProps:$9,operator:_B,tag:'div',type:3}:_t('next',_U.next).value?_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-pagination-icon',name:'arrow-right-s-fill'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','increaseCurrent(5)','click','',_G.increaseCurrent,{args:function(_Q,_X,_Y){return [5]}})},key:'next-ellipsis',nativeProps:$9,operator:_B,tag:'div',type:3}:_S[_S.length]=function(_R){!_t('active',_U.active).value?_b(_R,'events',_g('click','setCurrent(this.value)','click','',_G.setCurrent,{args:function(_Q,_X,_Y){return [_t('value',_U.value,_Q).value]}}),'click'):$0;return _R}({context:_G,key:'page'+_y(_t('value',_U.value).value),nativeProps:{className:'bell-pagination-item'+(_t('active',_U.active).value?' bell-pagination-item-active':'')},operator:_B,tag:'div',text:_y(_t('value',_U.value).value),type:3});});_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,key:'next',operator:_C,props:{disabled:_q('current',_U.current).value===_q('count',_U.count).value},slots:_k({$slot_children:function(_S,_T){_a({children:function(_S){_l('$slot_next',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);}}),tag:'NextPage',type:4};return _S}([]),context:_G,nativeProps:$10,operator:_B,tag:'div',type:3};_q('showJumper',_U.showJumper).value?_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,model:_f(_q('page',_U.page)),operator:_C,props:{className:'bell-pagination-jumper-input',placeholder:'请输入页码',size:_q('size',_U.size).value},ref:'jumperInput',tag:'Input',type:4};_S[_S.length]=_T[_T.length]={context:_G,events:{click:_g('click','jump()','click','',_G.jump,$0,$2)},isComponent:$2,operator:_C,props:{size:_q('size',_U.size).value,type:'primary'},slots:_k({$slot_children:function(_S,_T){_S[_S.length]={isPure:$2,operator:_z,text:'跳转',type:1};}}),tag:'Button',type:4};return _S}([]),context:_G,nativeProps:$11,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-pagination'+(_q('size',_U.size).value?' bell-pagination-'+_y(_q('size',_U.size).value):'')+(_q('hideOnSinglePage',_U.hideOnSinglePage).value&&_q('count',_U.count).value<=1?' bell-pagination-hidden':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var template$u = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['children'])).value?_S[_S.length]=function(_R){!_q('disabled',_U.disabled).value?_b(_R,'events',_h('click','click.prevPage','click','','click','prevPage'),'click'):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-pagination-custom-prev'+(_q('disabled',_U.disabled).value?' bell-pagination-custom-disabled':'')},operator:_B,tag:'div',type:3}):_S[_S.length]=function(_R){!_q('disabled',_U.disabled).value?_b(_R,'events',_h('click','click.prevPage','click','','click','prevPage'),'click'):$0;return _R}({children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-pagination-icon',name:'arrow-left-s-line'},tag:'Icon',type:4};return _S}([]),context:_G,nativeProps:{className:'bell-pagination-item bell-pagination-prev'+(_q('disabled',_U.disabled).value?' bell-pagination-item-disabled':'')},operator:_B,tag:'div',type:3});}})();

  var PrevPage = Yox.define({
      template: template$u,
      propTypes: {
          disabled: {
              type: RAW_BOOLEAN,
          },
      }
  });

  var template$v = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['children'])).value?_S[_S.length]=function(_R){!_q('disabled',_U.disabled).value?_b(_R,'events',_h('click','click.nextPage','click','','click','nextPage'),'click'):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-pagination-custom-next'+(_q('disabled',_U.disabled).value?' bell-pagination-custom-disabled':'')},operator:_B,tag:'div',type:3}):_S[_S.length]=function(_R){!_q('disabled',_U.disabled).value?_b(_R,'events',_h('click','click.nextPage','click','','click','nextPage'),'click'):$0;return _R}({children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-pagination-icon',name:'arrow-right-s-line'},tag:'Icon',type:4};return _S}([]),context:_G,nativeProps:{className:'bell-pagination-item bell-pagination-next'+(_q('disabled',_U.disabled).value?' bell-pagination-item-disabled':'')},operator:_B,tag:'div',type:3});}})();

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
      events: {
          'change.select': function (event, data) {
              if (event.phase !== Yox.Event.PHASE_UPWARD) {
                  return;
              }
              event.stop();
              this.fire({
                  type: 'change',
                  ns: 'pagination',
              }, {
                  pageSize: data.value
              });
          },
          'click.prevPage': function (event) {
              if (event.phase !== Yox.Event.PHASE_UPWARD) {
                  return;
              }
              event.stop();
              this.decreaseCurrent(1);
          },
          'click.nextPage': function (event) {
              if (event.phase !== Yox.Event.PHASE_UPWARD) {
                  return;
              }
              event.stop();
              this.increaseCurrent(1);
          },
          change: {
              listener: function (event) {
                  if (event.phase !== Yox.Event.PHASE_UPWARD) {
                      return;
                  }
                  event.stop();
              },
              ns: 'input',
          },
          enter: {
              listener: function (event) {
                  if (event.phase !== Yox.Event.PHASE_UPWARD) {
                      return;
                  }
                  event.stop();
                  this.jump();
              },
              ns: 'input',
          }
      },
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

  var template$w = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);_S[_S.length]={children:function(_S){_S[_S.length]={context:_G,events:{change:_g('change','onChange()','change','',_G.onChange)},nativeProps:{accept:_q('accept',_U.accept).value,multiple:_q('multiple',_U.multiple).value,type:'file'},operator:_B,ref:'input',tag:'input',type:3};return _S}([]),context:_G,operator:_B,ref:'form',tag:'form',type:3};return _S}([]),context:_G,events:{click:_g('click','click()','click','',_G.click)},nativeProps:{className:'bell-upload'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  // 本地文件用负数，避免和数据库自增 id 冲突
  var guid = -1;
  var Upload = Yox.define({
      template: template$w,
      name: 'bell-Upload',
      propTypes: {
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
      methods: {
          beforeUpload: function (fileList) {
              var me = this;
              var beforeUpload = me.get('beforeUpload');
              if (beforeUpload) {
                  beforeUpload({
                      fileList: fileList,
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
              Yox.array.each(fileList, function (item) {
                  me.upload(item);
              });
          },
          upload: function (file) {
              var me = this;
              var upload = me.get('upload');
              upload({
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
          click: function () {
              this.$refs.input.click();
          },
          onChange: function (event) {
              var fileList = Yox.array.toArray(event.originalEvent.target.files);
              this.beforeUpload(fileList.map(function (file) {
                  return {
                      // 用字符串类型表示本地文件
                      id: toString(guid--),
                      file: file,
                      name: file.name,
                      size: file.size,
                  };
              }));
          }
      },
  });

  var template$x = (function(){var $0=void 0,$2=!0,$5={className:'bell-alert-title'},$6={className:'bell-alert-content'},$7={className:'bell-alert-close'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_q('showIcon',_U.showIcon).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-alert-status-icon',name:_q('status',_U.status).value===_q('RAW_TYPE_SUCCESS',_U.RAW_TYPE_SUCCESS).value?'checkbox-circle-fill':_q('status',_U.status).value===_q('RAW_TYPE_WARNING',_U.RAW_TYPE_WARNING).value?'error-warning-fill':_q('status',_U.status).value===_q('RAW_TYPE_ERROR',_U.RAW_TYPE_ERROR).value?'close-circle-fill':'information-fill'},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['title'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_title',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['children'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_q('closable',_U.closable).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_close',_S)||(_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-alert-close-icon',name:'close-line'},tag:'Icon',type:4});return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,events:{click:_h('click','close.alert','click','','close','alert')},nativeProps:$7,operator:_B,ref:'close',tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-alert'+(_q('status',_U.status).value?' bell-alert-'+_y(_q('status',_U.status).value):'')+(_q('banner',_U.banner).value?' bell-alert-banner':'')+(_q('center',_U.center).value?' bell-alert-center':'')+(_q('showIcon',_U.showIcon).value?' bell-alert-with-icon':'')+(_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['title'])).value?' bell-alert-with-title':'')+(_q('closable',_U.closable).value||_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['close'])).value?' bell-alert-with-close':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

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

  var template$y = (function(){var $0=void 0,$2=!0,$5={className:'bell-article-title'},$6={className:'bell-article-sub-title'},$7={className:'bell-article-cover'},$8={className:'bell-article-content'},$9={className:'bell-article-signature'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_q('title',_U.title).value?_S[_S.length]={children:function(_S){_S[_S.length]={isPure:$2,operator:_z,text:_y(_q('title',_U.title).value),type:1};_q('showLink',_U.showLink).value?_S[_S.length]=_T[_T.length]={context:_G,events:{'click.native':_h('click.native','link.article','click','native','link','article',$0,$2)},isComponent:$2,operator:_C,props:{className:'bell-article-link',name:'links-line'},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_q('subTitle',_U.subTitle).value?_S[_S.length]={context:_G,nativeProps:$6,operator:_B,tag:'div',text:_y(_q('subTitle',_U.subTitle).value),type:3}:_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['subTitle'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_subTitle',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['cover'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_cover',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$7,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_content',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$8,operator:_B,tag:'div',type:3};_q('signature',_U.signature).value?_S[_S.length]={context:_G,nativeProps:$9,operator:_B,tag:'div',text:_y(_q('signature',_U.signature).value),type:3}:_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['signature'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_signature',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$9,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-article'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

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

  var template$z = (function(){var $0=void 0,$2=!0,$5={className:'bell-spin-text'},$6={className:'bell-spin-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_children',_S)||(_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-spin-icon',name:_q('icon',_U.icon).value,spin:$2},tag:'Icon',type:4},_q('text',_U.text).value?_S[_S.length]={context:_G,nativeProps:$5,operator:_B,tag:'div',text:_y(_q('text',_U.text).value),type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2});return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$6,operator:_B,ref:'content',tag:'div',type:3};return _S}([]),context:_G,nativeProps:{className:'bell-spin'+(_q('type',_U.type).value?' bell-spin-'+_y(_q('type',_U.type).value):'')+(_q('size',_U.size).value?' bell-spin-'+_y(_q('size',_U.size).value):'')+(_q('theme',_U.theme).value?' bell-spin-'+_y(_q('theme',_U.theme).value):'')+(_q('fixed',_U.fixed).value?' bell-spin-fixed':'')+(_q('legacy',_U.legacy).value?' bell-spin-legacy':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var Spin = Yox.define({
      template: template$z,
      name: 'bell-Spin',
      propTypes: {
          type: {
              type: oneOf(RAW_TYPE_ARRAY),
              value: RAW_TYPE_PRIMARY,
          },
          size: {
              type: oneOf(RAW_SIZE_ARRAY),
              value: RAW_DEFAULT,
          },
          theme: {
              type: oneOf(RAW_THEME_ARRAY),
              value: RAW_LIGHT,
          },
          fixed: {
              type: RAW_BOOLEAN,
          },
          icon: {
              type: RAW_STRING,
              value: 'loader-line',
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
      data: function () {
          return {
              legacy: !supportTransform,
          };
      },
      methods: {
          updatePosition: function () {
              if (supportTransform) {
                  return;
              }
              if (!this.get('fixed')) {
                  return;
              }
              var content = this.$refs.content;
              content.style.marginLeft = -0.5 * content.offsetWidth + 'px';
              content.style.marginTop = -0.5 * content.offsetHeight + 'px';
          }
      },
      components: {
          Icon: Icon,
      },
      afterMount: function () {
          this.updatePosition();
      }
  });

  var template$A = (function(){var $0=void 0,$2=!0,$5={className:'bell-split-button-menu'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-split-button'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):''),size:_q('size',_U.size).value,style:_q('style',_U.style).value},slots:_k({$slot_children:function(_S,_T){_S[_S.length]=_T[_T.length]={context:_G,events:{click:_g('click','handleButtonClick()','click','',_G.handleButtonClick,$0,$2)},isComponent:$2,operator:_C,props:{disabled:_q('disabled',_U.disabled).value,loading:_q('loading',_U.loading).value,type:_q('type',_U.type).value},slots:_k({$slot_children:function(_S,_T){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);}}),tag:'Button',type:4};_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{disabled:_q('disabled',_U.disabled).value||_q('loading',_U.loading).value,gap:'5',placement:_q('placement',_U.placement).value,trigger:_q('RAW_CLICK',_U.RAW_CLICK).value,visible:_q('menuVisible',_U.menuVisible).value},slots:_k({$slot_children:function(_S,_T){_S[_S.length]=_T[_T.length]=function(_R){_q('loading',_U.loading).value?_b(_R,'props','bell-button-loading','className'):$0;return _R}({context:_G,isComponent:$2,operator:_C,props:{disabled:_q('disabled',_U.disabled).value,type:_q('type',_U.type).value},slots:_k({$slot_children:function(_S,_T){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{name:'arrow-down-s-line'},tag:'Icon',type:4};}}),tag:'Button',type:4});},$slot_overlay:function(_S,_T){_S[_S.length]={children:function(_S){_n(_q('menu',_U.menu),function(_U,_V,_W,index){_S[_S.length]=function(_R){!_t('disabled',_U.disabled).value?_b(_R,'events',_g('click','handleItemClick(this, index)','click','',_G.handleItemClick,{args:function(_Q,_X,_Y){return [_r(_U,_Q).value,index]}}),'click'):$0;return _R}({context:_G,nativeProps:{className:'bell-split-button-menu-item'+(_t('disabled',_U.disabled).value?' bell-split-button-menu-item-disabled':' bell-split-button-menu-item-enabled')},operator:_B,tag:'div',text:_y(_t('text',_U.text).value),type:3});});return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3};}}),tag:'Popover',type:4};}}),tag:'ButtonGroup',type:4};}})();

  var SplitButton = Yox.define({
      template: template$A,
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

  var template$B = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_q('visible',_U.visible).value?_a({children:function(_S){_S[_S.length]=function(_R){_q('bottom',_U.bottom).value||_q('right',_U.right).value||_q('style',_U.style).value?_R.nativeStyles=_d([{bottom:_q('bottom',_U.bottom).value?_q('bottom',_U.bottom).value+'px':$0,right:_q('right',_U.right).value?_q('right',_U.right).value+'px':$0},_q('style',_U.style).value]):$0;return _R}({children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{name:'arrow-up-line'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_h('click','click.backTop','click','','click','backTop')},nativeProps:{className:'bell-backtop'+(_q('legacy',_U.legacy).value?' bell-backtop-legacy':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',transition:_e('backTop',_O&&_O.backTop||_P.backTop),type:3});return _S}([]),context:_G,operator:_E,tag:'portal',type:6},_S):_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};}})();

  var CLASS_VISIBLE$1 = 'bell-backtop-visible';
  var CLASS_FADE$1 = 'bell-backtop-fade';
  var BackTop = Yox.define({
      template: template$B,
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
              legacy: !supportTransform,
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

  var template$C = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('clickable',_U.clickable).value?_b(_R,'events',_h('click','click','click','','click'),'click'):$0;return _R}({children:function(_S){_q('url',_U.url).value||_q('src',_U.src).value?_S[_S.length]=function(_R){_q('url',_U.url).value?_b(_R,'nativeProps',_q('formatUrl',_U.formatUrl).value?_x(_w(_q('formatUrl',_U.formatUrl,$0,_H&&_H.formatUrl||_I.formatUrl).value,_G,[{height:_q('sizeValue',_U.sizeValue).value,responsive:$2,url:_q('url',_U.url).value,width:_q('sizeValue',_U.sizeValue).value}])).value:_q('url',_U.url).value,'src'):_b(_R,'nativeProps',_q('src',_U.src).value,'src');_q('srcSet',_U.srcSet).value?_b(_R,'nativeAttrs',_q('srcSet',_U.srcSet).value,'srcset'):$0;_q('alt',_U.alt).value?_b(_R,'nativeProps',_q('alt',_U.alt).value,'alt'):$0;return _R}({context:_G,events:{error:_h('error','error.avatar','error','','error','avatar')},nativeAttrs:{ondragstart:'return false'},operator:_B,tag:'img',type:3}):_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['icon'])).value?_a({children:function(_S){_l('$slot_icon',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S):_q('text',_U.text).value?_S[_S.length]=function(_R){_q('color',_U.color).value||_q('fontSize',_U.fontSize).value?_R.nativeStyles={color:_q('color',_U.color).value||$0,fontSize:_q('fontSize',_U.fontSize).value?_q('fontSize',_U.fontSize).value+'px':$0}:$0;return _R}({context:_G,nativeProps:{className:'bell-avatar-text'},operator:_B,ref:'text',tag:'span',text:_y(_q('text',_U.text).value),type:3}):_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-avatar'+(_q('shape',_U.shape).value?' bell-avatar-'+_y(_q('shape',_U.shape).value):'')+(_q('src',_U.src).value?' bell-avatar-image':'')+(_q('clickable',_U.clickable).value?' bell-avatar-clickable':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},nativeStyles:_d([{backgroundColor:_q('backgroundColor',_U.backgroundColor).value||$0,height:_q('sizeValue',_U.sizeValue).value+'px',lineHeight:_q('sizeValue',_U.sizeValue).value+'px',width:_q('sizeValue',_U.sizeValue).value+'px'},_q('style',_U.style).value]),operator:_B,tag:'div',type:3});}})();

  var SPACE_HORIZONTAL = 8;
  var SIZE_DEFAULT = 32;
  var SIZE_SMALL = 24;
  var SIZE_LARGE = 40;
  var Avatar = Yox.define({
      template: template$C,
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
          if (!supportTransform) {
              return;
          }
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

  var template$D = (function(){var $0=void 0,$2=!0,$5={className:'bell-badge-dot'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);!_q('hidden',_U.hidden).value?(_q('dot',_U.dot).value?_S[_S.length]={context:_G,isPure:$2,isStatic:$2,nativeProps:$5,operator:_B,tag:'span',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2},_q('text',_U.text).value||_x(_w(_q('isNumeric',_U.isNumeric,$0,_H&&_H.isNumeric||_I.isNumeric).value,_G,[_q('count',_U.count).value])).value?_S[_S.length]={context:_G,nativeProps:{className:'bell-badge-text'+(_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['children'])).value?' bell-badge-text-append':'')},operator:_B,ref:'append',tag:'span',text:_y(_q('text',_U.text).value||_x(_w(_q('formatText',_U.formatText,$0,_H&&_H.formatText||_I.formatText).value,_G,[_q('count',_U.count).value,_q('max',_U.max).value])).value),type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2}):_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-badge'+(_q('status',_U.status).value?'-status':'')+(_q('status',_U.status).value?' bell-badge-status-'+_y(_q('status',_U.status).value):_q('type',_U.type).value?' bell-badge-'+_y(_q('type',_U.type).value):'')+(_q('dot',_U.dot).value&&_q('text',_U.text).value?' bell-badge-with-dot-text':'')+(_q('ripple',_U.ripple).value?' bell-badge-ripple':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var Badge = Yox.define({
      template: template$D,
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
      },
      watchers: {
          count: function () {
              this.updatePosition();
          },
          max: function () {
              this.updatePosition();
          },
          hidden: function () {
              this.updatePosition();
          }
      },
      methods: {
          updatePosition: function () {
              if (supportTransform) {
                  return;
              }
              var append = this.$refs.append;
              if (!append || !Yox.string.has(append.className, 'bell-badge-text-append')) {
                  return;
              }
              append.style.marginLeft = -0.5 * append.offsetWidth + 'px';
              append.style.marginTop = -0.5 * append.offsetHeight + 'px';
          }
      },
      afterMount: function () {
          this.updatePosition();
      }
  });

  var template$E = (function(){var $0=void 0,$2=!0,$4=function(_Q){return _Q.length-1},$5={className:'bell-date-picker-header-button'},$6={className:'bell-date-picker-prev'},$7={className:'bell-date-picker-header-year'},$8={className:'bell-date-picker-header-month'},$9={className:'bell-date-picker-next'},$10={className:'bell-date-picker-header'},$11={className:'bell-date-picker-col'},$12={className:'bell-date-picker-weeks'},$13={className:'bell-date-picker-text'},$14={className:'bell-date-picker-row'},$15={className:'bell-date-picker-days'},$16={className:'bell-date-picker-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_q('type',_U.type).value===_q('RAW_TYPE_DATE',_U.RAW_TYPE_DATE).value?_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','offset(-12)','click','',_G.offset,{args:function(_Q,_X,_Y){return [-12]}})},nativeProps:$5,operator:_B,tag:'span',type:3};_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','offset(-1)','click','',_G.offset,{args:function(_Q,_X,_Y){return [-1]}})},nativeProps:$5,operator:_B,tag:'span',type:3};return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3};_S[_S.length]=function(_R){_q('canPickYear',_U.canPickYear).value?(_b(_R,'nativeProps','bell-date-picker-header-link','className'),_b(_R,'events',_g('click',"set('type', RAW_TYPE_YEAR)",'click','',_G.set,{args:function(_Q,_X,_Y){return ['type',_q('RAW_TYPE_YEAR',_U.RAW_TYPE_YEAR,_Q).value]}}),'click')):$0;return _R}({children:function(_S){_S[_S.length]={context:_G,nativeProps:$7,operator:_B,tag:'span',text:_y(_p($4,'date.year',$2).value),type:3};_S[_S.length]={isPure:$2,operator:_z,text:'年',type:1};return _S}([]),context:_G,operator:_B,tag:'span',type:3});_S[_S.length]=function(_R){_q('canPickMonth',_U.canPickMonth).value?(_b(_R,'nativeProps','bell-date-picker-header-link','className'),_b(_R,'events',_g('click',"set('type', RAW_TYPE_MONTH)",'click','',_G.set,{args:function(_Q,_X,_Y){return ['type',_q('RAW_TYPE_MONTH',_U.RAW_TYPE_MONTH,_Q).value]}}),'click')):$0;return _R}({children:function(_S){_S[_S.length]={context:_G,nativeProps:$8,operator:_B,tag:'span',text:_y(_p($4,'date.month',$2).value),type:3};_S[_S.length]={isPure:$2,operator:_z,text:'月',type:1};return _S}([]),context:_G,operator:_B,tag:'span',type:3});_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','offset(1)','click','',_G.offset,{args:function(_Q,_X,_Y){return [1]}})},nativeProps:$5,operator:_B,tag:'span',type:3};_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','offset(12)','click','',_G.offset,{args:function(_Q,_X,_Y){return [12]}})},nativeProps:$5,operator:_B,tag:'span',type:3};return _S}([]),context:_G,nativeProps:$9,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:$10,operator:_B,tag:'div',type:3};_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_n(_q('weeks',_U.weeks),function(_U,_V,_W){_S[_S.length]={context:_G,nativeProps:$11,operator:_B,tag:'div',text:_y(_r(_U).value),type:3};});return _S}([]),context:_G,nativeProps:$12,operator:_B,tag:'div',type:3};_S[_S.length]={children:function(_S){_n(_q('datasource',_U.datasource),function(_U,_V,_W){_S[_S.length]={children:function(_S){_n(_t('list',_U.list),function(_U,_V,_W){_S[_S.length]=function(_R){_x(_w(_q('isEnabled',_U.isEnabled,$0,_H&&_H.isEnabled||_I.isEnabled).value,_G,[_r(_U).value])).value?_b(_R,'events',_g('click','click(this)','click','',_G.click,{args:function(_Q,_X,_Y){return [_r(_U,_Q).value]}}),'click'):$0;return _R}({children:function(_S){_S[_S.length]={context:_G,nativeProps:$13,operator:_B,tag:'div',text:_y(_t('date',_U.date).value),type:3};return _S}([]),context:_G,nativeProps:{className:'bell-date-picker-col'+(_x(_w(_q('isEnabled',_U.isEnabled,$0,_H&&_H.isEnabled||_I.isEnabled).value,_G,[_r(_U).value])).value?' bell-date-picker-col-enabled'+(_x(_w(_q('isCurrentMonth',_U.isCurrentMonth,$0,_H&&_H.isCurrentMonth||_I.isCurrentMonth).value,_G,[_r(_U).value])).value?' bell-date-picker-col-current-month'+(_x(_w(_q('isChecked',_U.isChecked,$0,_H&&_H.isChecked||_I.isChecked).value,_G,[_r(_U).value])).value?' bell-date-picker-col-checked':''):' bell-date-picker-col-adjacent-month'):' bell-date-picker-col-disabled')},operator:_B,tag:'div',type:3});});return _S}([]),context:_G,nativeProps:$14,operator:_B,tag:'div',type:3};});return _S}([]),context:_G,nativeProps:$15,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:$16,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:{className:'bell-date-picker-date bell-date-picker-panel'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3}):_q('type',_U.type).value===_q('RAW_TYPE_YEAR',_U.RAW_TYPE_YEAR).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{checkedYear:_p($4,'date.year',$2).value},tag:'DateYear',type:4}:_q('type',_U.type).value===_q('RAW_TYPE_MONTH',_U.RAW_TYPE_MONTH).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{checkedMonth:_p($4,'date.month',$2).value,checkedYear:_p($4,'date.year',$2).value},tag:'DateMonth',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};}})();

  var template$F = (function(){var $0=void 0,$2=!0,$5={className:'bell-date-picker-header-button'},$6={className:'bell-date-picker-prev'},$7={className:'bell-date-picker-header-year'},$8={className:'bell-date-picker-next'},$9={className:'bell-date-picker-header'},$10={className:'bell-date-picker-text'},$11={className:'bell-date-picker-row'},$12={className:'bell-date-picker-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_q('type',_U.type).value===_q('RAW_TYPE_MONTH',_U.RAW_TYPE_MONTH).value?_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click',"decrease('year', 10)",'click','',_G.decrease,{args:function(_Q,_X,_Y){return ['year',10]}})},nativeProps:$5,operator:_B,tag:'span',type:3};_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click',"decrease('year', 1)",'click','',_G.decrease,{args:function(_Q,_X,_Y){return ['year',1]}})},nativeProps:$5,operator:_B,tag:'span',type:3};return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3};_S[_S.length]=function(_R){_q('canPickYear',_U.canPickYear).value?(_b(_R,'nativeProps','bell-date-picker-header-link','className'),_b(_R,'events',_g('click',"set('type', RAW_TYPE_YEAR)",'click','',_G.set,{args:function(_Q,_X,_Y){return ['type',_q('RAW_TYPE_YEAR',_U.RAW_TYPE_YEAR,_Q).value]}}),'click')):$0;return _R}({children:function(_S){_S[_S.length]={context:_G,nativeProps:$7,operator:_B,tag:'span',text:_y(_q('year',_U.year).value),type:3};_S[_S.length]={isPure:$2,operator:_z,text:'年',type:1};return _S}([]),context:_G,operator:_B,tag:'span',type:3});_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click',"increase('year', 1)",'click','',_G.increase,{args:function(_Q,_X,_Y){return ['year',1]}})},nativeProps:$5,operator:_B,tag:'span',type:3};_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click',"increase('year', 10)",'click','',_G.increase,{args:function(_Q,_X,_Y){return ['year',10]}})},nativeProps:$5,operator:_B,tag:'span',type:3};return _S}([]),context:_G,nativeProps:$8,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:$9,operator:_B,tag:'div',type:3};_S[_S.length]={children:function(_S){_n(_q('datasource',_U.datasource),function(_U,_V,_W){_S[_S.length]={children:function(_S){_n(_r(_U),function(_U,_V,_W){_S[_S.length]={children:function(_S){_S[_S.length]={context:_G,nativeProps:$10,operator:_B,tag:'div',text:_y(_t('text',_U.text).value),type:3};return _S}([]),context:_G,events:{click:_g('click','click(this)','click','',_G.click,{args:function(_Q,_X,_Y){return [_r(_U,_Q).value]}})},nativeProps:{className:'bell-date-picker-col bell-date-picker-col-enabled'+(_x(_w(_q('isChecked',_U.isChecked,$0,_H&&_H.isChecked||_I.isChecked).value,_G,[_r(_U).value])).value?' bell-date-picker-col-checked':'')},operator:_B,tag:'div',type:3};});return _S}([]),context:_G,nativeProps:$11,operator:_B,tag:'div',type:3};});return _S}([]),context:_G,nativeProps:$12,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:{className:'bell-date-picker-month bell-date-picker-panel'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3}):_q('type',_U.type).value===_q('RAW_TYPE_YEAR',_U.RAW_TYPE_YEAR).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{checkedYear:_q('year',_U.year).value},tag:'DateYear',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};}})();

  var template$G = (function(){var $0=void 0,$2=!0,$4={className:'bell-date-picker-header-button bell-date-picker-prev'},$6={className:'bell-date-picker-header-year'},$7={className:'bell-date-picker-header-separator'},$8={className:'bell-date-picker-header-button bell-date-picker-next'},$9={className:'bell-date-picker-header'},$10={className:'bell-date-picker-text'},$11={className:'bell-date-picker-row'},$12={className:'bell-date-picker-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click',"decrease('year', count)",'click','',_G.decrease,{args:function(_Q,_X,_Y){return ['year',_q('count',_U.count,_Q).value]}})},nativeProps:$4,operator:_B,tag:'span',type:3};_S[_S.length]={context:_G,nativeProps:$6,operator:_B,tag:'span',text:_y(_q('year',_U.year).value),type:3};_S[_S.length]={isPure:$2,operator:_z,text:'年',type:1};_S[_S.length]={context:_G,isPure:$2,isStatic:$2,nativeProps:$7,operator:_B,tag:'span',text:'-',type:3};_S[_S.length]={context:_G,nativeProps:$6,operator:_B,tag:'span',text:_y(_q('year',_U.year).value+_q('count',_U.count).value-1),type:3};_S[_S.length]={isPure:$2,operator:_z,text:'年',type:1};_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click',"increase('year', count)",'click','',_G.increase,{args:function(_Q,_X,_Y){return ['year',_q('count',_U.count,_Q).value]}})},nativeProps:$8,operator:_B,tag:'span',type:3};return _S}([]),context:_G,nativeProps:$9,operator:_B,tag:'div',type:3};_S[_S.length]={children:function(_S){_n(_q('datasource',_U.datasource),function(_U,_V,_W){_S[_S.length]={children:function(_S){_n(_r(_U),function(_U,_V,_W){_S[_S.length]={children:function(_S){_S[_S.length]={context:_G,nativeProps:$10,operator:_B,tag:'div',text:_y(_r(_U).value),type:3};return _S}([]),context:_G,events:{click:_g('click','click(this)','click','',_G.click,{args:function(_Q,_X,_Y){return [_r(_U,_Q).value]}})},nativeProps:{className:'bell-date-picker-col bell-date-picker-col-enabled'+(_x(_w(_q('isChecked',_U.isChecked,$0,_H&&_H.isChecked||_I.isChecked).value,_G,[_r(_U).value])).value?' bell-date-picker-col-checked':'')},operator:_B,tag:'div',type:3};});return _S}([]),context:_G,nativeProps:$11,operator:_B,tag:'div',type:3};});return _S}([]),context:_G,nativeProps:$12,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:{className:'bell-date-picker-year bell-date-picker-panel'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

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
      template: template$G,
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
      template: template$F,
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
      template: template$E,
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
      events: {
          'change.year': function (event, data) {
              event.stop();
              var date = new Date(this.get('timestamp'));
              date.setFullYear(data.year);
              this.set({
                  type: RAW_TYPE_DATE,
                  timestamp: date.getTime()
              });
          },
          'change.month': function (event, data) {
              event.stop();
              var date = new Date(this.get('timestamp'));
              date.setFullYear(data.year);
              date.setMonth(data.month - 1);
              this.set({
                  type: RAW_TYPE_DATE,
                  timestamp: date.getTime()
              });
          }
      },
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

  var template$H = (function(){var $0=void 0,$2=!0,$4={className:'bell-date-picker-header-button'},$5={className:'bell-date-picker-prev'},$6=function(_Q){return _Q.length-1},$7={className:'bell-date-picker-header-year'},$8={className:'bell-date-picker-header-month'},$9={className:'bell-date-picker-next'},$10={className:'bell-date-picker-header'},$11={className:'bell-date-picker-col'},$12={className:'bell-date-picker-weeks'},$13={className:'bell-date-picker-text'},$14=function(){return 0},$15={className:'bell-date-picker-row'},$16={className:'bell-date-picker-days'},$17={className:'bell-date-picker-body'},$18={className:'bell-date-picker-panel'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','offsetStart(-12)','click','',_G.offsetStart,{args:function(_Q,_X,_Y){return [-12]}})},nativeProps:$4,operator:_B,tag:'span',type:3};_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','offsetStart(-1)','click','',_G.offsetStart,{args:function(_Q,_X,_Y){return [-1]}})},nativeProps:$4,operator:_B,tag:'span',type:3};return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3};_S[_S.length]={context:_G,nativeProps:$7,operator:_B,tag:'span',text:_y(_p($6,'startDate.year',$2).value),type:3};_S[_S.length]={isPure:$2,operator:_z,text:'年',type:1};_S[_S.length]={context:_G,nativeProps:$8,operator:_B,tag:'span',text:_y(_p($6,'startDate.month',$2).value),type:3};_S[_S.length]={isPure:$2,operator:_z,text:'月',type:1};_q('splitPanel',_U.splitPanel).value?_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','offsetStart(1)','click','',_G.offsetStart,{args:function(_Q,_X,_Y){return [1]}})},nativeProps:$4,operator:_B,tag:'span',type:3};_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','offsetStart(12)','click','',_G.offsetStart,{args:function(_Q,_X,_Y){return [12]}})},nativeProps:$4,operator:_B,tag:'span',type:3};return _S}([]),context:_G,nativeProps:$9,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:$10,operator:_B,tag:'div',type:3};_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_n(_q('weeks',_U.weeks),function(_U,_V,_W){_S[_S.length]={context:_G,nativeProps:$11,operator:_B,tag:'div',text:_y(_r(_U).value),type:3};});return _S}([]),context:_G,nativeProps:$12,operator:_B,tag:'div',type:3};_S[_S.length]={children:function(_S){_n(_q('startDatasource',_U.startDatasource),function(_U,_V,_W){_S[_S.length]={children:function(_S){_n(_t('list',_U.list),function(_U,_V,_W){_S[_S.length]=function(_R){_u($14,'pinDate').value?_b(_R,'events',_g('mouseenter','hover(this)','mouseenter','',_G.hover,{args:function(_Q,_X,_Y){return [_r(_U,_Q).value]}}),'mouseenter'):$0;_x(_w(_q('isEnabled',_U.isEnabled,$0,_H&&_H.isEnabled||_I.isEnabled).value,_G,[_r(_U).value])).value?_b(_R,'events',_g('click','click(this)','click','',_G.click,{args:function(_Q,_X,_Y){return [_r(_U,_Q).value]}}),'click'):$0;return _R}({children:function(_S){_S[_S.length]={context:_G,nativeProps:$13,operator:_B,tag:'div',text:_y(_t('date',_U.date).value),type:3};return _S}([]),context:_G,nativeProps:{className:'bell-date-picker-col'+(_x(_w(_q('isEnabled',_U.isEnabled,$0,_H&&_H.isEnabled||_I.isEnabled).value,_G,[_r(_U).value])).value?' bell-date-picker-col-enabled'+(_x(_w(_q('isCurrentMonth',_U.isCurrentMonth,$0,_H&&_H.isCurrentMonth||_I.isCurrentMonth).value,_G,[_r(_U).value,_u($14,'startDate').value])).value?' bell-date-picker-col-current-month'+(_t('timestamp',_U.timestamp).value===_u($14,'computedCheckedStartTimestamp').value?' bell-date-picker-col-checked'+(_u($14,'computedCheckedEndTimestamp').value?' bell-date-picker-col-start':' bell-date-picker-col-range'):'')+(_t('timestamp',_U.timestamp).value===_u($14,'computedCheckedEndTimestamp').value?' bell-date-picker-col-checked bell-date-picker-col-end':'')+(_u($14,'computedCheckedStartTimestamp').value<_t('timestamp',_U.timestamp).value&&_u($14,'computedCheckedEndTimestamp').value>_t('timestamp',_U.timestamp).value?' bell-date-picker-col-range':''):' bell-date-picker-col-adjacent-month'):' bell-date-picker-col-disabled')},operator:_B,tag:'div',type:3});});return _S}([]),context:_G,nativeProps:$15,operator:_B,tag:'div',type:3};});return _S}([]),context:_G,events:{mouseleave:_g('mouseleave','leave()','mouseleave','',_G.leave)},nativeProps:$16,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:$17,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:$18,operator:_B,tag:'div',type:3};_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_q('splitPanel',_U.splitPanel).value?_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','offsetEnd(-12)','click','',_G.offsetEnd,{args:function(_Q,_X,_Y){return [-12]}})},nativeProps:$4,operator:_B,tag:'span',type:3};_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','offsetEnd(-1)','click','',_G.offsetEnd,{args:function(_Q,_X,_Y){return [-1]}})},nativeProps:$4,operator:_B,tag:'span',type:3};return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_S[_S.length]={context:_G,nativeProps:$7,operator:_B,tag:'span',text:_y(_p($6,'endDate.year',$2).value),type:3};_S[_S.length]={isPure:$2,operator:_z,text:'年',type:1};_S[_S.length]={context:_G,nativeProps:$8,operator:_B,tag:'span',text:_y(_p($6,'endDate.month',$2).value),type:3};_S[_S.length]={isPure:$2,operator:_z,text:'月',type:1};_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','offsetEnd(1)','click','',_G.offsetEnd,{args:function(_Q,_X,_Y){return [1]}})},nativeProps:$4,operator:_B,tag:'span',type:3};_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','offsetEnd(12)','click','',_G.offsetEnd,{args:function(_Q,_X,_Y){return [12]}})},nativeProps:$4,operator:_B,tag:'span',type:3};return _S}([]),context:_G,nativeProps:$9,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:$10,operator:_B,tag:'div',type:3};_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_n(_q('weeks',_U.weeks),function(_U,_V,_W){_S[_S.length]={context:_G,nativeProps:$11,operator:_B,tag:'div',text:_y(_r(_U).value),type:3};});return _S}([]),context:_G,nativeProps:$12,operator:_B,tag:'div',type:3};_S[_S.length]={children:function(_S){_n(_q('endDatasource',_U.endDatasource),function(_U,_V,_W){_S[_S.length]={children:function(_S){_n(_t('list',_U.list),function(_U,_V,_W){_S[_S.length]=function(_R){_u($14,'pinDate').value?_b(_R,'events',_g('mouseenter','hover(this)','mouseenter','',_G.hover,{args:function(_Q,_X,_Y){return [_r(_U,_Q).value]}}),'mouseenter'):$0;_x(_w(_q('isEnabled',_U.isEnabled,$0,_H&&_H.isEnabled||_I.isEnabled).value,_G,[_r(_U).value])).value?_b(_R,'events',_g('click','click(this)','click','',_G.click,{args:function(_Q,_X,_Y){return [_r(_U,_Q).value]}}),'click'):$0;return _R}({children:function(_S){_S[_S.length]={context:_G,nativeProps:$13,operator:_B,tag:'div',text:_y(_t('date',_U.date).value),type:3};return _S}([]),context:_G,nativeProps:{className:'bell-date-picker-col'+(_x(_w(_q('isEnabled',_U.isEnabled,$0,_H&&_H.isEnabled||_I.isEnabled).value,_G,[_r(_U).value])).value?' bell-date-picker-col-enabled'+(_x(_w(_q('isCurrentMonth',_U.isCurrentMonth,$0,_H&&_H.isCurrentMonth||_I.isCurrentMonth).value,_G,[_r(_U).value,_u($14,'endDate').value])).value?' bell-date-picker-col-current-month'+(_t('timestamp',_U.timestamp).value===_u($14,'computedCheckedStartTimestamp').value?' bell-date-picker-col-checked'+(_u($14,'computedCheckedEndTimestamp').value?' bell-date-picker-col-start':' bell-date-picker-col-range'):'')+(_t('timestamp',_U.timestamp).value===_u($14,'computedCheckedEndTimestamp').value?' bell-date-picker-col-checked bell-date-picker-col-end':'')+(_u($14,'computedCheckedStartTimestamp').value<_t('timestamp',_U.timestamp).value&&_u($14,'computedCheckedEndTimestamp').value>_t('timestamp',_U.timestamp).value?' bell-date-picker-col-range':''):' bell-date-picker-col-adjacent-month'):' bell-date-picker-col-disabled')},operator:_B,tag:'div',type:3});});return _S}([]),context:_G,nativeProps:$15,operator:_B,tag:'div',type:3};});return _S}([]),context:_G,events:{mouseleave:_g('mouseleave','leave()','mouseleave','',_G.leave)},nativeProps:$16,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:$17,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:$18,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:{className:'bell-date-picker-daterange'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

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
      template: template$H,
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

  var template$I = (function(){var $0=void 0,$2=!0,$4=function(_Q){return _Q.length-1},$5={className:'bell-date-picker-header-button'},$6={className:'bell-date-picker-prev'},$7={className:'bell-date-picker-header-year'},$8={className:'bell-date-picker-header-month'},$9={className:'bell-date-picker-next'},$10={className:'bell-date-picker-header'},$11={className:'bell-date-picker-col'},$12={className:'bell-date-picker-weeks'},$13={className:'bell-date-picker-text'},$14=function(){return 0},$15=function(_Q){return _Q.length-2},$16={className:'bell-date-picker-row'},$17={className:'bell-date-picker-days'},$18={className:'bell-date-picker-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_q('type',_U.type).value===_q('RAW_TYPE_WEEK',_U.RAW_TYPE_WEEK).value?_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','offset(-12)','click','',_G.offset,{args:function(_Q,_X,_Y){return [-12]}})},nativeProps:$5,operator:_B,tag:'span',type:3};_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','offset(-1)','click','',_G.offset,{args:function(_Q,_X,_Y){return [-1]}})},nativeProps:$5,operator:_B,tag:'span',type:3};return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3};_S[_S.length]=function(_R){_q('canPickYear',_U.canPickYear).value?(_b(_R,'nativeProps','bell-date-picker-header-link','className'),_b(_R,'events',_g('click',"set('type', RAW_TYPE_YEAR)",'click','',_G.set,{args:function(_Q,_X,_Y){return ['type',_q('RAW_TYPE_YEAR',_U.RAW_TYPE_YEAR,_Q).value]}}),'click')):$0;return _R}({children:function(_S){_S[_S.length]={context:_G,nativeProps:$7,operator:_B,tag:'span',text:_y(_p($4,'date.year',$2).value),type:3};_S[_S.length]={isPure:$2,operator:_z,text:'年',type:1};return _S}([]),context:_G,operator:_B,tag:'span',type:3});_S[_S.length]=function(_R){_q('canPickMonth',_U.canPickMonth).value?(_b(_R,'nativeProps','bell-date-picker-header-link','className'),_b(_R,'events',_g('click',"set('type', RAW_TYPE_MONTH)",'click','',_G.set,{args:function(_Q,_X,_Y){return ['type',_q('RAW_TYPE_MONTH',_U.RAW_TYPE_MONTH,_Q).value]}}),'click')):$0;return _R}({children:function(_S){_S[_S.length]={context:_G,nativeProps:$8,operator:_B,tag:'span',text:_y(_p($4,'date.month',$2).value),type:3};_S[_S.length]={isPure:$2,operator:_z,text:'月',type:1};return _S}([]),context:_G,operator:_B,tag:'span',type:3});_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','offset(12)','click','',_G.offset,{args:function(_Q,_X,_Y){return [12]}})},nativeProps:$5,operator:_B,tag:'span',type:3};_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','offset(1)','click','',_G.offset,{args:function(_Q,_X,_Y){return [1]}})},nativeProps:$5,operator:_B,tag:'span',type:3};return _S}([]),context:_G,nativeProps:$9,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:$10,operator:_B,tag:'div',type:3};_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_n(_q('weeks',_U.weeks),function(_U,_V,_W){_S[_S.length]={context:_G,nativeProps:$11,operator:_B,tag:'div',text:_y(_r(_U).value),type:3};});return _S}([]),context:_G,nativeProps:$12,operator:_B,tag:'div',type:3};_S[_S.length]={children:function(_S){_n(_q('datasource',_U.datasource),function(_U,_V,_W,rowIndex){_S[_S.length]={children:function(_S){_n(_t('list',_U.list),function(_U,_V,_W,colIndex){_S[_S.length]=function(_R){_x(_w(_q('isEnabled',_U.isEnabled,$0,_H&&_H.isEnabled||_I.isEnabled).value,_G,[_r(_U).value])).value?_b(_R,'events',_g('click','click(../rowIndex)','click','',_G.click,{args:function(_Q,_X,_Y){return [rowIndex]}}),'click'):$0;return _R}({children:function(_S){_S[_S.length]={context:_G,nativeProps:$13,operator:_B,tag:'div',text:_y(_t('date',_U.date).value),type:3};return _S}([]),context:_G,nativeProps:{className:'bell-date-picker-col'+(_x(_w(_q('isEnabled',_U.isEnabled,$0,_H&&_H.isEnabled||_I.isEnabled).value,_G,[_r(_U).value])).value?' bell-date-picker-col-enabled'+(_x(_w(_q('isCurrentMonth',_U.isCurrentMonth,$0,_H&&_H.isCurrentMonth||_I.isCurrentMonth).value,_G,[_r(_U).value])).value?' bell-date-picker-col-current-month':' bell-date-picker-col-adjacent-month'):' bell-date-picker-col-disabled')+(_u($14,'checkedTimestamp').value>=_p($15,'start.timestamp').value&&_u($14,'checkedTimestamp').value<_p($15,'end.timestamp').value?colIndex===0?' bell-date-picker-col-checked bell-date-picker-col-start':colIndex===_W-1?' bell-date-picker-col-checked bell-date-picker-col-end':' bell-date-picker-col-range':'')},operator:_B,tag:'div',type:3});});return _S}([]),context:_G,nativeProps:$16,operator:_B,tag:'div',type:3};});return _S}([]),context:_G,nativeProps:$17,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:$18,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:{className:'bell-date-picker-week bell-date-picker-panel'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3}):_q('type',_U.type).value===_q('RAW_TYPE_YEAR',_U.RAW_TYPE_YEAR).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{checkedYear:_p($4,'date.year',$2).value},tag:'DateYear',type:4}:_q('type',_U.type).value===_q('RAW_TYPE_MONTH',_U.RAW_TYPE_MONTH).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{checkedMonth:_p($4,'date.month',$2).value,checkedYear:_p($4,'date.year',$2).value},tag:'DateMonth',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};}})();

  var DateWeek = Yox.define({
      template: template$I,
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
      events: {
          'change.year': function (event, data) {
              event.stop();
              var date = new Date(this.get('timestamp'));
              date.setFullYear(data.year);
              this.set({
                  type: RAW_TYPE_WEEK,
                  timestamp: date.getTime()
              });
          },
          'change.month': function (event, data) {
              event.stop();
              var date = new Date(this.get('timestamp'));
              date.setFullYear(data.year);
              date.setMonth(data.month - 1);
              this.set({
                  type: RAW_TYPE_WEEK,
                  timestamp: date.getTime()
              });
          }
      },
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

  var template$J = (function(){var $0=void 0,$2=!0,$4=function(_Q){return _Q.length-1},$5={className:'bell-date-picker-values'},$6={className:'bell-date-picker-separator'},$7={className:'bell-date-picker-value'},$8={className:'bell-date-picker-placeholder'},$9={className:'bell-date-picker-shortcut-item'},$10={className:'bell-date-picker-shortcut'},$11={className:'bell-date-picker-overlay'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{gap:'5',placement:_q('placement',_U.placement).value,trigger:_q('RAW_CUSTOM',_U.RAW_CUSTOM).value,visible:_q('visible',_U.visible).value},ref:'overlay',slots:_k({$slot_children:function(_S,_T){_S[_S.length]=function(_R){!_q('disabled',_U.disabled).value?_b(_R,'events',_g('click',"toggle('visible')",'click','',_G.toggle,{args:function(_Q,_X,_Y){return ['visible']}}),'click'):$0;_q('width',_U.width).value||_q('style',_U.style).value?_R.nativeStyles=_d([_q('width',_U.width).value?{width:_q('width',_U.width).value+'px'}:$0,_q('style',_U.style).value]):$0;return _R}({children:function(_S){_p($4,'formatedValues.length',$2).value>0?_q('multiple',_U.multiple).value&&_q('type',_U.type).value!==_q('RAW_TYPE_DATE_RANGE',_U.RAW_TYPE_DATE_RANGE).value&&_q('type',_U.type).value!==_q('RAW_TYPE_WEEK',_U.RAW_TYPE_WEEK).value?_S[_S.length]={children:function(_S){_n(_q('formatedValues',_U.formatedValues),function(_U,_V,_W,index){_S[_S.length]=_T[_T.length]={context:_G,events:{close:_g('close','handleRemoveItem($event, index)','close','',_G.handleRemoveItem,{args:function(_Q,_X,_Y){return [_X,index]}},$2)},isComponent:$2,operator:_C,props:{closable:$2,simple:$2},slots:_k({$slot_children:function(_S,_T){_S[_S.length]={isPure:$2,operator:_z,text:_y(_r(_U).value),type:1};}}),tag:'Tag',type:4};});return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3}:_S[_S.length]={children:function(_S){_S[_S.length]={isPure:$2,operator:_z,text:_y(_p($4,'formatedValues.0',$2).value),type:1};_p($4,'formatedValues.1',$2).value?(_S[_S.length]={context:_G,isPure:$2,isStatic:$2,nativeProps:$6,operator:_B,tag:'span',text:'~',type:3},_S[_S.length]={isPure:$2,operator:_z,text:_y(_p($4,'formatedValues.1',$2).value),type:1}):_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:$7,operator:_B,tag:'div',type:3}:_S[_S.length]={context:_G,nativeProps:$8,operator:_B,tag:'div',text:_y(_q('placeholder',_U.placeholder).value),type:3};_q('clearable',_U.clearable).value&&_p($4,'formatedValues.length',$2).value?_S[_S.length]=_T[_T.length]={context:_G,events:{'click.native':_g('click.native','handleClearClick()','click','native',_G.handleClearClick,$0,$0,$2)},isComponent:$2,operator:_C,props:{className:'bell-date-picker-clear-icon',name:'close-circle-fill'},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-date-picker-calendar-icon',name:'calendar-line'},tag:'Icon',type:4};return _S}([]),context:_G,nativeProps:{className:'bell-date-picker'+(_q('status',_U.status).value?' bell-date-picker-'+_y(_q('status',_U.status).value):'')+(_q('size',_U.size).value?' bell-date-picker-'+_y(_q('size',_U.size).value):'')+(_q('block',_U.block).value?' bell-date-picker-block':'')+(_q('visible',_U.visible).value?' bell-date-picker-opened':'')+(_q('clearable',_U.clearable).value?' bell-date-picker-clearable':'')+(_q('disabled',_U.disabled).value?' bell-date-picker-disabled':' bell-date-picker-enabled')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});},$slot_overlay:function(_S,_T){_S[_S.length]={children:function(_S){_q('shortcuts',_U.shortcuts).value&&_p($4,'shortcuts.length',$2).value>0?_S[_S.length]={children:function(_S){_n(_q('shortcuts',_U.shortcuts),function(_U,_V,_W){_S[_S.length]={context:_G,events:{click:_g('click','handleShortcutClick(this)','click','',_G.handleShortcutClick,{args:function(_Q,_X,_Y){return [_r(_U,_Q).value]}})},nativeProps:$9,operator:_B,tag:'div',text:_y(_t('text',_U.text).value),type:3};});return _S}([]),context:_G,nativeProps:$10,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_q('type',_U.type).value===_q('RAW_TYPE_DATE',_U.RAW_TYPE_DATE).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{canPickMonth:$2,canPickYear:$2,checkedDate:_q('value',_U.value).value,defaultDate:_p($4,'defaultSimpleDate.timestamp',$2).value,disabledDate:_q('disabledDate',_U.disabledDate).value},tag:'DateView',type:4}:_q('type',_U.type).value===_q('RAW_TYPE_DATE_RANGE',_U.RAW_TYPE_DATE_RANGE).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{checkedEndDate:_p($4,'value.1',$2).value,checkedStartDate:_p($4,'value.0',$2).value,defaultEndDate:_p($4,'defaultSimpleDate.timestamp',$2).value,defaultStartDate:_p($4,'defaultSimpleDate.timestamp',$2).value,disabledDate:_q('disabledDate',_U.disabledDate).value,splitPanel:_q('splitPanel',_U.splitPanel).value},tag:'DateRange',type:4}:_q('type',_U.type).value===_q('RAW_TYPE_WEEK',_U.RAW_TYPE_WEEK).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{canPickMonth:$2,canPickYear:$2,checkedDate:_p($4,'value.0',$2).value,defaultDate:_p($4,'defaultSimpleDate.timestamp',$2).value},tag:'DateWeek',type:4}:_q('type',_U.type).value===_q('RAW_TYPE_YEAR',_U.RAW_TYPE_YEAR).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{checkedDate:_q('value',_U.value).value,defaultDate:_p($4,'defaultSimpleDate.timestamp',$2).value},tag:'DateYear',type:4}:_q('type',_U.type).value===_q('RAW_TYPE_MONTH',_U.RAW_TYPE_MONTH).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{canPickYear:$2,checkedDate:_q('value',_U.value).value,defaultDate:_p($4,'defaultSimpleDate.timestamp',$2).value},tag:'DateMonth',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:$11,operator:_B,tag:'div',type:3};}}),tag:'Popover',type:4};}})();

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
      template: template$J,
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
      events: {
          'change.date': function (event, data) {
              event.stop();
              this.dateChange(data.timestamp);
          },
          'change.year': function (event, data) {
              event.stop();
              var date = new Date();
              date.setFullYear(data.year);
              this.dateChange(toTimestamp(date), YEAR_FORMAT);
          },
          'change.month': function (event, data) {
              event.stop();
              var date = new Date();
              date.setFullYear(data.year);
              date.setMonth(data.month - 1);
              this.dateChange(toTimestamp(date), MONTH_FORMAT);
          },
          'change.week': function (event, data) {
              event.stop();
              this.dateRangeChange(data.start.timestamp, data.end.timestamp);
          },
          'change.range': function (event, data) {
              event.stop();
              this.dateRangeChange(data.start.timestamp, data.end.timestamp);
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

  var template$K = (function(){var $0=void 0,$2=!0,$4=function(_Q){return _Q.length-1},$5=function(){return 0},$6={className:'bell-time-picker-panel-column'},$7={className:'bell-time-picker-panel-columns'},$8={className:'bell-time-picker-panel-footer'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_n(_q('hourList',_U.hourList),function(_U,_V,_W,index){_S[_S.length]={context:_G,events:{click:_g('click','handleHourClick(index)','click','',_G.handleHourClick,{args:function(_Q,_X,_Y){return [index]}})},key:_r(_U).value,nativeProps:{className:'bell-time-picker-panel-row'+(index===_u($5,'hourIndex').value?' bell-time-picker-panel-row-active':'')},operator:_B,tag:'li',text:_y(_x(_w(_q('padStart',_U.padStart,$0,_H&&_H.padStart||_I.padStart).value,_G,[_r(_U).value])).value),type:3};});return _S}([]),context:_G,nativeProps:$6,operator:_B,ref:'hourList',tag:'ul',type:3};_S[_S.length]={children:function(_S){_n(_q('minuteList',_U.minuteList),function(_U,_V,_W,index){_S[_S.length]={context:_G,events:{click:_g('click','handleMinuteClick(index)','click','',_G.handleMinuteClick,{args:function(_Q,_X,_Y){return [index]}})},key:_r(_U).value,nativeProps:{className:'bell-time-picker-panel-row'+(index===_u($5,'minuteIndex').value?' bell-time-picker-panel-row-active':'')},operator:_B,tag:'li',text:_y(_x(_w(_q('padStart',_U.padStart,$0,_H&&_H.padStart||_I.padStart).value,_G,[_r(_U).value])).value),type:3};});return _S}([]),context:_G,nativeProps:$6,operator:_B,ref:'minuteList',tag:'ul',type:3};_p($4,'secondList.length',$2).value>0?_S[_S.length]={children:function(_S){_n(_q('secondList',_U.secondList),function(_U,_V,_W,index){_S[_S.length]={context:_G,events:{click:_g('click','handleSecondClick(index)','click','',_G.handleSecondClick,{args:function(_Q,_X,_Y){return [index]}})},key:_r(_U).value,nativeProps:{className:'bell-time-picker-panel-row'+(index===_u($5,'secondIndex').value?' bell-time-picker-panel-row-active':'')},operator:_B,tag:'li',text:_y(_x(_w(_q('padStart',_U.padStart,$0,_H&&_H.padStart||_I.padStart).value,_G,[_r(_U).value])).value),type:3};});return _S}([]),context:_G,nativeProps:$6,operator:_B,ref:'secondList',tag:'ul',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:$7,operator:_B,tag:'div',type:3};_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,events:{click:_g('click','handleSubmitClick()','click','',_G.handleSubmitClick,$0,$2)},isComponent:$2,operator:_C,props:{disabled:!_q('hasValue',_U.hasValue).value,size:'small',type:'primary'},slots:_k({$slot_children:function(_S,_T){_S[_S.length]={isPure:$2,operator:_z,text:'确定',type:1};}}),tag:'Button',type:4};return _S}([]),context:_G,nativeProps:$8,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:{className:'bell-time-picker-panel'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

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
      template: template$K,
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

  var template$L = (function(){var $0=void 0,$2=!0,$5={className:'bell-time-picker-value'},$6={className:'bell-time-picker-placeholder'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{gap:'5',placement:_q('placement',_U.placement).value,trigger:_q('RAW_CUSTOM',_U.RAW_CUSTOM).value,visible:_q('visible',_U.visible).value},slots:_k({$slot_children:function(_S,_T){_S[_S.length]=function(_R){!_q('disabled',_U.disabled).value?_b(_R,'events',_g('click',"toggle('visible')",'click','',_G.toggle,{args:function(_Q,_X,_Y){return ['visible']}}),'click'):$0;return _R}({children:function(_S){_q('text',_U.text).value?_S[_S.length]={context:_G,nativeProps:$5,operator:_B,tag:'div',text:_y(_q('text',_U.text).value),type:3}:_S[_S.length]={context:_G,nativeProps:$6,operator:_B,tag:'div',text:_y(_q('placeholder',_U.placeholder).value),type:3};_q('clearable',_U.clearable).value&&_q('hasValue',_U.hasValue).value?_S[_S.length]=_T[_T.length]={context:_G,events:{'click.native':_g('click.native','handleClearClick()','click','native',_G.handleClearClick,$0,$0,$2)},isComponent:$2,operator:_C,props:{className:'bell-time-picker-clear-icon',name:'close-circle-fill'},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-time-picker-time-icon',name:'time-line'},tag:'Icon',type:4};return _S}([]),context:_G,nativeProps:{className:'bell-time-picker'+(_q('status',_U.status).value?' bell-time-picker-'+_y(_q('status',_U.status).value):'')+(_q('size',_U.size).value?' bell-time-picker-'+_y(_q('size',_U.size).value):'')+(_q('block',_U.block).value?' bell-time-picker-block':'')+(_q('visible',_U.visible).value?' bell-time-picker-opened':'')+(_q('clearable',_U.clearable).value?' bell-time-picker-clearable':'')+(_q('disabled',_U.disabled).value?' bell-time-picker-disabled':' bell-time-picker-enabled')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},nativeStyles:_d([_q('componentWidth',_U.componentWidth).value?{width:_q('componentWidth',_U.componentWidth).value+'px'}:$0,_q('style',_U.style).value]),operator:_B,tag:'div',type:3});},$slot_overlay:function(_S,_T){_S[_S.length]=function(_R){_q('componentWidth',_U.componentWidth).value?_R.nativeStyles={width:_q('componentWidth',_U.componentWidth).value+'px'}:$0;return _R}({children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{hourIndex:_q('visible',_U.visible).value?_q('hourIndex',_U.hourIndex).value:-1,hourList:_q('hourList',_U.hourList).value,minuteIndex:_q('visible',_U.visible).value?_q('minuteIndex',_U.minuteIndex).value:-1,minuteList:_q('minuteList',_U.minuteList).value,secondIndex:_q('visible',_U.visible).value?_q('secondIndex',_U.secondIndex).value:-1,secondList:_q('secondList',_U.secondList).value},tag:'TimePanel',type:4};return _S}([]),context:_G,nativeProps:{className:'bell-time-picker-overlay'},operator:_B,tag:'div',type:3});}}),tag:'Popover',type:4};}})();

  var DEFAULT_HOUR_STEP = 1;
  var DEFAULT_MINUTE_STEP = 1;
  var DEFAULT_SECOND_STEP = 1;
  var TimePicker = Yox.define({
      template: template$L,
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

  var template$M = (function(){var $0=void 0,$2=!0,$4=function(_Q){return _Q.length-1},$5=function(){return 0},$6={className:'bell-image-picker-mask'},$7={className:'bell-image-picker-image-size'},$8={className:'bell-image-picker-items-wrapper'},$9={className:'bell-image-picker-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]={children:function(_S){_n(_q('imageList',_U.imageList),function(_U,_V,_W,index){_S[_S.length]={children:function(_S){_t('url',_U.url).value||_t('base64',_U.base64).value?_S[_S.length]=function(_R){_t('url',_U.url).value?_b(_R,'nativeProps',_u($5,'formatImageUrl').value?_x(_w(_u($5,'formatImageUrl').value,_G,[{height:_u($5,'customImageHeight').value,responsive:$2,url:_t('url',_U.url).value,width:_u($5,'customImageWidth').value}])).value:_t('url',_U.url).value,'src'):_t('base64',_U.base64).value?_b(_R,'nativeProps',_t('base64',_U.base64).value,'src'):$0;_t('name',_U.name).value?_b(_R,'nativeProps',_t('name',_U.name).value,'alt'):$0;_u($5,'draggingIndex').value<0?_b(_R,'events',_g('click','handleImageClick(this, index)','click','',_G.handleImageClick,{args:function(_Q,_X,_Y){return [_r(_U,_Q).value,index]}}),'click'):$0;return _R}({context:_G,nativeProps:{className:'bell-image-picker-image',draggable:_q('canDraggable',_U.canDraggable).value},operator:_B,tag:'img',type:3}):_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_t('status',_U.status).value===_q('STATUS_UPLOADING',_U.STATUS_UPLOADING).value?_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{percent:_t('progress',_U.progress).value>0?_t('progress',_U.progress).value*100:0,size:'60'},slots:_k({$slot_children:function(_S,_T){_S[_S.length]={isPure:$2,operator:_z,text:'上传中',type:1};}}),tag:'Circle',type:4};return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3}:(_t('status',_U.status).value===_q('STATUS_ERROR',_U.STATUS_ERROR).value?_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{percent:_t('progress',_U.progress).value>0?_t('progress',_U.progress).value*100:0,size:'60',strokeColor:'#ff5500'},slots:_k({$slot_children:function(_S,_T){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{color:'#ff5500',name:'close-line',size:'30'},tag:'Icon',type:4};}}),tag:'Circle',type:4};return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3}:_t('size',_U.size).value>0?_S[_S.length]={context:_G,nativeProps:$7,operator:_B,tag:'div',text:_y(_x(_w(_q('formatImageSize',_U.formatImageSize,$0,_H&&_H.formatImageSize||_I.formatImageSize).value,_G,[_t('size',_U.size).value])).value),type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2},!_q('readOnly',_U.readOnly).value&&_q('draggingIndex',_U.draggingIndex).value<0?_S[_S.length]=_T[_T.length]={context:_G,events:{'click.native':_g('click.native','removeItem(index)','click','native',_G.removeItem,{args:function(_Q,_X,_Y){return [index]}},$0,$2)},isComponent:$2,operator:_C,props:{className:'bell-image-picker-remove-icon',name:'close-circle-fill'},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2});return _S}([]),context:_G,events:{dragend:_g('dragend','handleDragEnd()','dragend','',_G.handleDragEnd),dragenter:_g('dragenter','handleDragEnter(index)','dragenter','',_G.handleDragEnter,{args:function(_Q,_X,_Y){return [index]}}),dragleave:_g('dragleave','handleDragLeave(index)','dragleave','',_G.handleDragLeave,{args:function(_Q,_X,_Y){return [index]}}),dragover:_g('dragover','handleDragOver(index)','dragover','',_G.handleDragOver,{args:function(_Q,_X,_Y){return [index]}}),dragstart:_g('dragstart','handleDragStart(index)','dragstart','',_G.handleDragStart,{args:function(_Q,_X,_Y){return [index]}}),drop:_g('drop','handleDragDrop(index)','drop','',_G.handleDragDrop,{args:function(_Q,_X,_Y){return [index]}}),mouseenter:_g('mouseenter','handleMouseEnter(index)','mouseenter','',_G.handleMouseEnter,{args:function(_Q,_X,_Y){return [index]}}),mouseleave:_g('mouseleave','handleMouseLeave(index)','mouseleave','',_G.handleMouseLeave,{args:function(_Q,_X,_Y){return [index]}})},nativeProps:{className:'bell-image-picker-item bell-image-picker-card',draggable:_q('canDraggable',_U.canDraggable).value},nativeStyles:{height:_u($5,'customImageHeight').value+'px',width:_u($5,'customImageWidth').value+'px'},operator:_B,tag:'div',type:3};});!_q('readOnly',_U.readOnly).value&&_p($4,'imageList.length',$2).value<_q('maxCount',_U.maxCount).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{accept:_q('accept',_U.accept).value,beforeUpload:_q('beforeUploadImage',_U.beforeUploadImage).value,className:'bell-image-picker-item bell-image-picker-append',multiple:_q('restCount',_U.restCount).value>1,style:{height:_q('customImageHeight',_U.customImageHeight).value+'px',width:_q('customImageWidth',_U.customImageWidth).value+'px'}},ref:'upload',slots:_k({$slot_children:function(_S,_T){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-image-picker-append-icon',name:'add-line'},tag:'Icon',type:4};}}),tag:'Upload',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:$8,operator:_B,ref:'imagePickerList',tag:'div',type:3};_q('extra',_U.extra).value?_S[_S.length]={context:_G,nativeProps:$9,operator:_B,tag:'div',text:_y(_q('extra',_U.extra).value),type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-image-picker'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var STATUS_UPLOADING = 'uploading';
  var STATUS_ERROR = 'error';
  var KB = 1024;
  var MB = 1024 * KB;
  function readImageFile(item) {
      return new Promise(function (resolve) {
          var reader = new FileReader();
          reader.onload = function (event) {
              item.base64 = event.target.result;
              resolve(item);
          };
          reader.onerror = function () {
              item.status = STATUS_ERROR;
              resolve(item);
          };
          reader.readAsDataURL(item.file);
      });
  }
  function formatImageSize(size) {
      if (size >= MB) {
          return (size / MB).toFixed(1) + ' MB';
      }
      return (size / KB).toFixed(1) + ' KB';
  }

  var CLASS_CARD_MOUSE_ENTER = 'bell-image-picker-card-mouse-enter';
  var CLASS_CARD_DRAG_ENTER = 'bell-image-picker-card-drag-enter';
  var ImagePicker = Yox.define({
      template: template$M,
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
          maxSize: {
              type: RAW_NUMERIC,
          },
          maxCount: {
              type: RAW_NUMERIC,
          },
          accept: {
              type: RAW_STRING,
              value: RAW_IMAGE_ACCEPT,
          },
          formatImageUrl: {
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
              draggingIndex: -1,
              beforeUploadImage: function (data) {
                  var restCount = me.get('restCount');
                  var fileList = data.fileList;
                  // 校验可选数量
                  if (fileList.length > restCount) {
                      me.fireError("\u4EC5\u53EF\u4EE5\u9009\u62E9 " + restCount + " \u5F20\u56FE\u7247");
                      return;
                  }
                  // 校验图片大小
                  var maxSize = me.get('maxSize');
                  if (maxSize > 0) {
                      for (var i = 0, len = fileList.length; i < len; i++) {
                          if (fileList[i].size > maxSize) {
                              me.fireError("\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 " + formatImageSize(maxSize));
                              return;
                          }
                      }
                  }
                  Promise.all(fileList.map(readImageFile))
                      .then(function (newList) {
                      var upload = me.$refs.upload;
                      upload.reset();
                      me.appendItems(newList);
                  });
              }
          };
      },
      computed: {
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
              var readOnly = this.get('readOnly');
              var imageList = this.get('imageList');
              return !readOnly && imageList.length > 1;
          }
      },
      filters: {
          formatImageSize: formatImageSize,
      },
      components: {
          Icon: Icon,
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
                  else if (imageList[i].status === STATUS_ERROR) {
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
              items.forEach(function (item) {
                  imageList.push(item);
              });
              me.set('imageList', imageList);
              me.fireChange();
              items.forEach(function (item) {
                  me.uploadItem(item.id);
              });
          },
          removeItem: function (index) {
              this.removeAt('imageList', index);
              this.fireChange();
          },
          upload: function () {
              var me = this;
              var imageList = me.get('imageList');
              Yox.array.each(imageList, function (item) {
                  if (!item.url) {
                      me.uploadItem(item.id);
                  }
              });
          },
          uploadItem: function (id) {
              var me = this;
              var index = me.getImageIndexById(id);
              if (index < 0) {
                  return;
              }
              var uploadImage = me.get('uploadImage');
              var item = me.get("imageList." + index);
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
                  onError: function () {
                      var index = me.getImageIndexById(id);
                      if (index >= 0) {
                          me.set("imageList." + index + ".status", STATUS_ERROR);
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
                          me.fireChange();
                      }
                  }
              });
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

  var template$N = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-collapse'+(_q('simple',_U.simple).value?' bell-collapse-simple':' bell-collapse-bordered')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var Collapse = Yox.define({
      template: template$N,
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

  var template$O = (function(){var $0=void 0,$2=!0,$5={className:'bell-collapse-extra'},$6={className:'bell-collapse-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]=function(_R){!_q('disabled',_U.disabled).value?_b(_R,'events',_g('click','click()','click','',_G.click),'click'):$0;return _R}({children:function(_S){_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['extra'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_extra',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-collapse-arrow-icon',name:'arrow-right-s-line'},tag:'Icon',type:4};_S[_S.length]={isPure:$2,operator:_z,text:_y(_q('title',_U.title).value),type:1};return _S}([]),context:_G,nativeProps:{className:'bell-collapse-header'},operator:_B,tag:'div',type:3});_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:{className:'bell-collapse-item'+(_q('opened',_U.opened).value?' bell-collapse-opened':'')+(_q('disabled',_U.disabled).value?' bell-collapse-disabled':' bell-collapse-enabled')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var CollapseItem = Yox.define({
      template: template$O,
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

  var template$P = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('width',_U.width).value||_q('style',_U.style).value?_R.nativeStyles=_d([_q('width',_U.width).value?{width:_q('width',_U.width).value+'px'}:$0,_q('style',_U.style).value]):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-card bell-card-shadow-'+_y(_q('shadow',_U.shadow).value)+(_q('simple',_U.simple).value?' bell-card-simple':' bell-card-bordered')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var Card = Yox.define({
      template: template$P,
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

  var template$Q = (function(){var $0=void 0,$2=!0,$4={className:'bell-card-header-title'},$6={className:'bell-card-header-sub-title'},$7={className:'bell-card-header-detail'},$8={className:'bell-card-header-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_avatar',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_title',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$4,operator:_B,tag:'div',type:3};_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['subTitle'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_subTitle',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:$7,operator:_B,tag:'div',type:3};_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['extra'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_extra',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$8,operator:_B,tag:'span',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-card-header'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var CardHeader = Yox.define({
      template: template$Q,
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

  var template$R = (function(){var $0=void 0,$2=!0,$5={className:'bell-card-media-title'},$6={className:'bell-card-media-sub-title'},$7={className:'bell-card-media-detail'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['title'])).value||_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['subTitle'])).value?_S[_S.length]={children:function(_S){_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['title'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_title',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['subTitle'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_subTitle',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:$7,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-card-media'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var CardMedia = Yox.define({
      template: template$R,
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

  var template$S = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-card-body'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var CardBody = Yox.define({
      template: template$S,
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

  var template$T = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-card-footer'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var CardFooter = Yox.define({
      template: template$T,
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

  var template$U = (function(){var $0=void 0,$2=!0,$5={className:'bell-page-header-title'},$6={className:'bell-page-header-tags'},$7={className:'bell-page-header-extra'},$8={className:'bell-page-header-header'},$9={className:'bell-page-header-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_breadcrumb',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);_S[_S.length]={children:function(_S){_q('showBack',_U.showBack).value?_S[_S.length]=_T[_T.length]={context:_G,events:{'click.native':_h('click.native','back.pageHeader','click','native','back','pageHeader',$0,$2)},isComponent:$2,operator:_C,props:{className:'bell-page-header-back',name:'arrow-left-line'},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_S[_S.length]={context:_G,nativeProps:$5,operator:_B,tag:'div',text:_y(_q('title',_U.title).value),type:3};_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['tags'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_tags',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['extra'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_extra',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$7,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:$8,operator:_B,tag:'div',type:3};_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['content'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_content',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$9,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-page-header'+(_q('showBack',_U.showBack).value?' bell-page-header-with-back':'')+(_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['tags'])).value?' bell-page-header-with-tags':'')+(_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['extra'])).value?' bell-page-header-with-extra':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var PageHeader = Yox.define({
      template: template$U,
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

  var template$V = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-layout'+(_q('vertical',_U.vertical).value?' bell-layout-vertical':' bell-layout-horizontal')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var Layout = Yox.define({
      template: template$V,
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

  var template$W = (function(){var $0=void 0,$2=!0,$5={className:'bell-layout-header-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['extra'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_extra',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-layout-header'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var LayoutHeader = Yox.define({
      template: template$W,
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

  var template$X = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-layout-content'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var LayoutContent = Yox.define({
      template: template$X,
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

  var template$Y = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-layout-footer'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var LayoutFooter = Yox.define({
      template: template$Y,
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

  var template$Z = (function(){var $0=void 0,$2=!0,$5={className:'bell-layout-sider-logo'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('customWidth',_U.customWidth).value||_q('style',_U.style).value?_R.nativeStyles=_d([_q('customWidth',_U.customWidth).value?{flex:'0 0 '+_q('customWidth',_U.customWidth).value+'px',maxWidth:_q('customWidth',_U.customWidth).value+'px',minWidth:_q('customWidth',_U.customWidth).value+'px',width:_q('customWidth',_U.customWidth).value+'px'}:$0,_q('style',_U.style).value]):$0;return _R}({children:function(_S){_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['logo'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_logo',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);_q('showTrigger',_U.showTrigger).value?_S[_S.length]=function(_R){_q('customWidth',_U.customWidth).value?_R.nativeStyles={width:_q('customWidth',_U.customWidth).value+'px'}:$0;return _R}({children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-layout-sider-trigger-icon',name:'arrow-left-s-line'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click',"toggle('collapsed')",'click','',_G.toggle,{args:function(_Q,_X,_Y){return ['collapsed']}})},nativeProps:{className:'bell-layout-sider-trigger'},operator:_B,tag:'div',type:3}):_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-layout-sider'+(_q('collapsed',_U.collapsed).value?' bell-layout-sider-collapsed':'')+(_q('showTrigger',_U.showTrigger).value?' bell-layout-sider-with-trigger':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var LayoutSider = Yox.define({
      template: template$Z,
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

  var template$_ = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('target',_U.target).value?_b(_R,'nativeProps',_q('target',_U.target).value,'target'):$0;_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;!_q('href',_U.href).value&&!_q('disabled',_U.disabled).value?_b(_R,'events',_h('click','click.link','click','','click','link'),'click'):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeAttrs:{ondragstart:'return false'},nativeProps:{className:'bell-link'+(_q('type',_U.type).value?' bell-link-'+_y(_q('type',_U.type).value):'')+(_q('size',_U.size).value?' bell-link-'+_y(_q('size',_U.size).value):'')+(_q('underline',_U.underline).value?' bell-link-underline':'')+(_q('disabled',_U.disabled).value?' bell-link-disabled':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):''),href:_q('href',_U.href).value||'javascript:void(0)'},operator:_B,tag:'a',type:3});}})();

  var Link = Yox.define({
      template: template$_,
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

  var template$$ = (function(){var $0=void 0,$2=!0,$5={className:'bell-list-header'},$6={className:'bell-list-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['header'])).value?(_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_header',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3},_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_children',_S)||(_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,slots:_k({$slot_children:function(_S,_T){_a({children:function(_S){_l('$slot_empty',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);}}),tag:'ListEmpty',type:4});return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3}):_a({children:function(_S){_l('$slot_children',_S)||(_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,slots:_k({$slot_children:function(_S,_T){_a({children:function(_S){_l('$slot_empty',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);}}),tag:'ListEmpty',type:4});return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);_q('loading',_U.loading).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{fixed:$2,size:'large'},tag:'Spin',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-list'+(_q('size',_U.size).value?' bell-list-'+_y(_q('size',_U.size).value):'')+(_q('simple',_U.simple).value?' bell-list-simple':' bell-list-bordered')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var template$10 = (function(){var $2=!0,$4={className:'bell-list-empty'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_children',_S)||(_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,slots:_k({$slot_children:function(_S,_T){_S[_S.length]={isPure:$2,operator:_z,text:'暂无数据',type:1};}}),tag:'Empty',type:4});return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$4,operator:_B,tag:'div',type:3};}})();

  var template$11 = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-empty'+(_q('simple',_U.simple).value?' bell-empty-simple':'')+(_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['children'])).value?' bell-empty-with-content':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var Empty = Yox.define({
      template: template$11,
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
      template: template$10,
      components: {
          Empty: Empty,
      }
  });

  var List = Yox.define({
      template: template$$,
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

  var template$12 = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;_q('clickable',_U.clickable).value?_b(_R,'events',_h('click','click.listItem','click','','click','listItem'),'click'):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-list-item'+(_q('clickable',_U.clickable).value?' bell-list-item-clickable':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var ListItem = Yox.define({
      template: template$12,
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

  var template$13 = (function(){var $0=void 0,$2=!0,$5={className:'bell-result-icon'},$6={className:'bell-result-title'},$7={className:'bell-result-sub-title'},$8={className:'bell-result-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_icon',_S)||(_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-result-status-icon',name:_q('status',_U.status).value===_q('RAW_TYPE_SUCCESS',_U.RAW_TYPE_SUCCESS).value?'checkbox-circle-fill':_q('status',_U.status).value===_q('RAW_TYPE_WARNING',_U.RAW_TYPE_WARNING).value?'error-warning-fill':_q('status',_U.status).value===_q('RAW_TYPE_ERROR',_U.RAW_TYPE_ERROR).value?'close-circle-fill':'information-fill'},tag:'Icon',type:4});return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3};_q('title',_U.title).value?_S[_S.length]={context:_G,nativeProps:$6,operator:_B,tag:'div',text:_y(_q('title',_U.title).value),type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_q('subTitle',_U.subTitle).value?_S[_S.length]={context:_G,nativeProps:$7,operator:_B,tag:'div',text:_y(_q('subTitle',_U.subTitle).value),type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['extra'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_extra',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$8,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-result'+(_q('status',_U.status).value?' bell-result-'+_y(_q('status',_U.status).value):'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var Result = Yox.define({
      template: template$13,
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

  var template$14 = (function(){var $0=void 0,$2=!0,$5={className:'bell-exception-title'},$6={className:'bell-exception-sub-title'},$7={className:'bell-exception-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_q('title',_U.title).value?_S[_S.length]={context:_G,nativeProps:$5,operator:_B,tag:'div',text:_y(_q('title',_U.title).value),type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_q('subTitle',_U.subTitle).value?_S[_S.length]={context:_G,nativeProps:$6,operator:_B,tag:'div',text:_y(_q('subTitle',_U.subTitle).value),type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['extra'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_extra',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$7,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-exception'+(_q('status',_U.status).value?' bell-exception-'+_y(_q('status',_U.status).value):'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var Exception = Yox.define({
      template: template$14,
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

  var template$15 = (function(){var $0=void 0,$2=!0,$5={className:'bell-divider-text'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['children'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-divider'+(_q('vertical',_U.vertical).value?' bell-divider-vertical':' bell-divider-horizontal')+(_q('dashed',_U.dashed).value?' bell-divider-dashed':'')+(_q('align',_U.align).value?' bell-divider-'+_y(_q('align',_U.align).value):'')+(_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['children'])).value?' bell-divider-with-text':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var Divider = Yox.define({
      template: template$15,
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

  var template$16 = (function(){var $0=void 0,$2=!0,$5={viewBox:'0 0 100 100'},$6={className:'bell-circle-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]={context:_G,isSvg:$2,nativeAttrs:{d:_q('path',_U.path).value,'fill-opacity':'0',stroke:_q('trailColor',_U.trailColor).value,'stroke-width':_q('trailWidth',_U.trailWidth).value},nativeStyles:_d(_q('trailStyle',_U.trailStyle).value),operator:_B,tag:'path',type:3};_S[_S.length]={context:_G,isSvg:$2,nativeAttrs:{d:_q('path',_U.path).value,'fill-opacity':'0',stroke:_q('strokeColor',_U.strokeColor).value,'stroke-linecap':_q('strokeLinecap',_U.strokeLinecap).value,'stroke-width':_q('strokeWidth',_U.strokeWidth).value},nativeStyles:_d(_q('pathStyle',_U.pathStyle).value),operator:_B,tag:'path',type:3};return _S}([]),context:_G,isSvg:$2,nativeAttrs:$5,operator:_B,tag:'svg',type:3};_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['children'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-circle'+(_q('dashboard',_U.dashboard).value?' bell-circle-dashboard':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},nativeStyles:_d([{height:_q('size',_U.size).value+'px',width:_q('size',_U.size).value+'px'},_q('style',_U.style).value]),operator:_B,tag:'div',type:3};}})();

  var Circle = Yox.define({
      template: template$16,
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

  var template$17 = (function(){var $0=void 0,$2=!0,$5={className:'bell-popconfirm-title'},$6={className:'bell-popconfirm-footer'},$7={className:'bell-popover-arrow'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{placement:_q('placement',_U.placement).value,showArrow:$2,trigger:_q('RAW_CLICK',_U.RAW_CLICK).value,visible:_q('isVisible',_U.isVisible).value},ref:'popover',slots:_k({$slot_children:function(_S,_T){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);},$slot_overlay:function(_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]=function(_R){_q('maxWidth',_U.maxWidth).value||_q('maxHeight',_U.maxHeight).value?_R.nativeStyles={maxHeight:_q('maxHeight',_U.maxHeight).value?_q('maxHeight',_U.maxHeight).value+'px':$0,maxWidth:_q('maxWidth',_U.maxWidth).value?_q('maxWidth',_U.maxWidth).value+'px':$0}:$0;return _R}({children:function(_S){_q('showIcon',_U.showIcon).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-popconfirm-status-icon',name:_q('status',_U.status).value===_q('RAW_TYPE_SUCCESS',_U.RAW_TYPE_SUCCESS).value?'checkbox-circle-fill':_q('status',_U.status).value===_q('RAW_TYPE_WARNING',_U.RAW_TYPE_WARNING).value?'error-warning-fill':_q('status',_U.status).value===_q('RAW_TYPE_ERROR',_U.RAW_TYPE_ERROR).value?'close-circle-fill':'information-fill'},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_S[_S.length]={context:_G,nativeProps:$5,operator:_B,tag:'div',text:_y(_q('title',_U.title).value),type:3};_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,events:{click:_g('click','handleCancelClick()','click','',_G.handleCancelClick,$0,$2)},isComponent:$2,operator:_C,props:{size:'small'},slots:_k({$slot_children:function(_S,_T){_S[_S.length]={isPure:$2,operator:_z,text:_y(_q('cancelText',_U.cancelText).value),type:1};}}),tag:'Button',type:4};_S[_S.length]=_T[_T.length]={context:_G,events:{click:_g('click','handleOkClick()','click','',_G.handleOkClick,$0,$2)},isComponent:$2,operator:_C,props:{size:'small',type:_q('okType',_U.okType).value||_q('status',_U.status).value},slots:_k({$slot_children:function(_S,_T){_S[_S.length]={isPure:$2,operator:_z,text:_y(_q('okText',_U.okText).value),type:1};}}),tag:'Button',type:4};return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:{className:'bell-popover-content'},operator:_B,tag:'div',type:3});_S[_S.length]={context:_G,isPure:$2,isStatic:$2,nativeProps:$7,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:{className:'bell-popconfirm'+(_q('status',_U.status).value?' bell-popconfirm-'+_y(_q('status',_U.status).value):'')+(_q('showIcon',_U.showIcon).value?' bell-popconfirm-with-icon':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}}),tag:'Popover',type:4};}})();

  var Popconfirm = Yox.define({
      template: template$17,
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

  var template$18 = (function(){var $0=void 0,$2=!0,$5={className:'bell-progress-block'},$6={className:'bell-progress-text'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_q('inside',_U.inside).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{inside:_q('inside',_U.inside).value,percent:_q('percent',_U.percent).value,thickness:_q('thickness',_U.thickness).value,vertical:_q('vertical',_U.vertical).value},slots:_k({$slot_children:function(_S,_T){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);}}),tag:'ProgressTrack',type:4}:(!_q('vertical',_U.vertical).value&&_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['children'])).value?_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{inside:_q('inside',_U.inside).value,percent:_q('percent',_U.percent).value,thickness:_q('thickness',_U.thickness).value,vertical:_q('vertical',_U.vertical).value},slots:_k({$slot_children:function(_S,_T){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);}}),tag:'ProgressTrack',type:4};return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3}:_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{inside:_q('inside',_U.inside).value,percent:_q('percent',_U.percent).value,thickness:_q('thickness',_U.thickness).value,vertical:_q('vertical',_U.vertical).value},slots:_k({$slot_children:function(_S,_T){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);}}),tag:'ProgressTrack',type:4},_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['children'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2});return _S}([]),context:_G,nativeProps:{className:'bell-progress'+(_q('status',_U.status).value?' bell-progress-'+_y(_q('status',_U.status).value):'')+(_q('active',_U.active).value?' bell-progress-active':'')+(_q('inside',_U.inside).value?' bell-progress-inside':' bell-progress-outside')+(_q('vertical',_U.vertical).value?' bell-progress-vertical':' bell-progress-horizontal')+(!_q('inside',_U.inside).value&&!_q('vertical',_U.vertical).value&&_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['children'])).value?' bell-progress-with-text':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var template$19 = (function(){var $0=void 0,$2=!0,$5={className:'bell-progress-text'},$6={className:'bell-progress-bar'},$7={className:'bell-progress-track'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_q('inside',_U.inside).value?_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['children'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:$6,nativeStyles:{height:_q('vertical',_U.vertical).value?_q('percent',_U.percent).value+'%':_q('thickness',_U.thickness).value+'px',lineHeight:_q('vertical',_U.vertical).value?$0:_q('thickness',_U.thickness).value+'px',width:_q('vertical',_U.vertical).value?_q('thickness',_U.thickness).value+'px':_q('percent',_U.percent).value+'%'},operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:$7,nativeStyles:{height:_q('vertical',_U.vertical).value?$0:_q('thickness',_U.thickness).value+'px',width:_q('vertical',_U.vertical).value?_q('thickness',_U.thickness).value+'px':$0},operator:_B,tag:'div',type:3};}})();

  var ProgressTrack = Yox.define({
      template: template$19,
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
      template: template$18,
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

  var template$1a = (function(){var $0=void 0,$2=!0,$4={type:'hidden'},$5=function(_Q){return _Q.length-1},$6=function(){return 0},$7={className:'bell-rate-text'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;!_q('readOnly',_U.readOnly).value?_b(_R,'events',_g('mouseleave','handleLeave()','mouseleave','',_G.handleLeave),'mouseleave'):$0;return _R}({children:function(_S){_S[_S.length]={context:_G,model:_f(_q('value',_U.value)),nativeProps:$4,operator:_B,tag:'input',type:3};_o(1,_q('count',_U.count).value,$2,function(_U,_V,_W){_S[_S.length]=_T[_T.length]=function(_R){!_u($6,'readOnly').value?(_b(_R,'events',_g('mousemove.native','handleMove($event, this)','mousemove','native',_G.handleMove,{args:function(_Q,_X,_Y){return [_X,_U]}},$0,$2),'mousemove.native'),_b(_R,'events',_g('click.native','handleClick($event, this)','click','native',_G.handleClick,{args:function(_Q,_X,_Y){return [_X,_U]}},$0,$2),'click.native')):$0;return _R}({context:_G,isComponent:$2,operator:_C,props:{className:'bell-rate-icon-full'+(_u($6,'activeValue').value-_U>=0?' bell-rate-icon-active':''),name:_u($6,'iconName').value,size:_u($6,'iconSize').value},slots:_k({$slot_children:function(_S,_T){_u($6,'half').value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-rate-icon-half'+(_u($6,'activeValue').value-_U>=-0.5?' bell-rate-icon-active':''),name:_u($6,'iconName').value,size:_u($6,'iconSize').value},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};}}),tag:'Icon',type:4});});_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['children'])).value||_q('texts',_U.texts).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_children',_S)||(_S[_S.length]={isPure:$2,operator:_z,text:_y(_p($5,['texts',_q('activeValue',_U.activeValue).value-1].join('.'),$2).value),type:1});return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$7,nativeStyles:{lineHeight:_q('iconSize',_U.iconSize).value+'px'},operator:_B,tag:'span',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-rate'+(_q('type',_U.type).value?' bell-rate-'+_y(_q('type',_U.type).value):'')+(_q('readOnly',_U.readOnly).value?' bell-rate-dead':' bell-rate-live')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var Rate = Yox.define({
      template: template$1a,
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

  var template$1b = (function(){var $0=void 0,$2=!0,$5=function(_Q){return _Q.length-2},$6={className:'bell-tabs-bar'},$7={className:'bell-tabs-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_n(_q('tabs',_U.tabs),function(_U,_V,_W){_S[_S.length]=function(_R){!_t('disabled',_U.disabled).value?_b(_R,'events',_g('click','handleClickTab(this)','click','',_G.handleClickTab,{args:function(_Q,_X,_Y){return [_r(_U,_Q).value]}}),'click'):$0;return _R}({children:function(_S){_t('icon',_U.icon).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-tabs-tab-icon',name:_t('icon',_U.icon).value},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_S[_S.length]={isPure:$2,operator:_z,text:_y(_t('label',_U.label).value),type:1};_u($5,'closable').value?_S[_S.length]=_T[_T.length]={context:_G,events:{'click.native':_g('click.native','handleCloseTab(this)','click','native',_G.handleCloseTab,{args:function(_Q,_X,_Y){return [_r(_U,_Q).value]}},$0,$2)},isComponent:$2,operator:_C,props:{className:'bell-tabs-tab-close-icon',name:'close-line'},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-tabs-tab'+(_t('disabled',_U.disabled).value?' bell-tabs-tab-disabled':' bell-tabs-tab-enabled')+(_t('name',_U.name).value===_u($5,'value').value?' bell-tabs-tab-active':'')},operator:_B,tag:'div',type:3});});return _S}([]),context:_G,nativeProps:{className:'bell-tabs-nav'+(_q('closable',_U.closable).value?' bell-tabs-nav-closable':'')},operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3};_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$7,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:{className:'bell-tabs'+(_q('type',_U.type).value?' bell-tabs-'+_y(_q('type',_U.type).value):'')+(_q('size',_U.size).value?' bell-tabs-'+_y(_q('size',_U.size).value):'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var Tabs = Yox.define({
      template: template$1b,
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

  var template$1c = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-tabs-panel'+(_q('isActive',_U.isActive).value?' bell-tabs-panel-active':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var TabPanel = Yox.define({
      template: template$1c,
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

  var template$1d = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{gap:'5',placement:_q('placement',_U.placement).value,trigger:_q('trigger',_U.trigger).value,visible:_q('visible',_U.visible).value},ref:'popover',slots:_k({$slot_children:function(_S,_T){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);},$slot_overlay:function(_S,_T){_S[_S.length]=function(_R){_q('maxHeight',_U.maxHeight).value||_q('style',_U.style).value?_R.nativeStyles=_d([_q('maxHeight',_U.maxHeight).value?{maxHeight:_q('maxHeight',_U.maxHeight).value+'px'}:$0,_q('style',_U.style).value]):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_overlay',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-dropdown-overlay'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}}),tag:'Popover',type:4};}})();

  var Dropdown = Yox.define({
      template: template$1d,
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

  var template$1e = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;!_q('disabled',_U.disabled).value?_b(_R,'events',_h('click','click.dropdownItem','click','','click','dropdownItem'),'click'):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-dropdown-item'+(_q('divided',_U.divided).value?' bell-dropdown-item-divided':'')+(_q('active',_U.active).value?' bell-dropdown-item-active':'')+(_q('disabled',_U.disabled).value?' bell-dropdown-item-disabled':' bell-dropdown-item-enabled')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var DropdownItem = Yox.define({
      template: template$1e,
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

  var template$1f = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-dropdown-menu'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var DropdownMenu = Yox.define({
      template: template$1f,
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

  var template$1g = (function(){var $0=void 0,$2=!0,$5={className:'bell-description-title'},$6={className:'bell-description-extra'},$7={className:'bell-description-header'},$8={className:'bell-description-item-label'},$9={className:'bell-description-item-content'},$10={className:'bell-description-item-wrapper'},$11={className:'bell-description-row'},$12={className:'bell-description-table'},$13={className:'bell-description-cell bell-description-item-label'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_q('title',_U.title).value?_S[_S.length]={children:function(_S){_S[_S.length]={context:_G,nativeProps:$5,operator:_B,tag:'div',text:_y(_q('title',_U.title).value),type:3};_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['extra'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_extra',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:$7,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_q('simple',_U.simple).value?_S[_S.length]={children:function(_S){_n(_q('cells',_U.cells),function(_U,_V,_W,rowIndex){_S[_S.length]={children:function(_S){_n(_r(_U),function(_U,_V,_W,colIndex){_S[_S.length]=function(_R){_t('span',_U.span).value>1?_b(_R,'nativeProps',_t('span',_U.span).value*2-1,'colSpan'):$0;return _R}({children:function(_S){_S[_S.length]={children:function(_S){_S[_S.length]={context:_G,nativeProps:$8,operator:_B,tag:'div',text:_y(_t('label',_U.label).value),type:3};_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_'+(_t('name',_U.name).value),_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$9,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:$10,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:{className:'bell-description-cell'},operator:_B,tag:'td',type:3});});return _S}([]),context:_G,nativeProps:$11,operator:_B,tag:'tr',type:3};});return _S}([]),context:_G,nativeProps:$12,operator:_B,tag:'table',type:3}:_S[_S.length]={children:function(_S){_n(_q('cells',_U.cells),function(_U,_V,_W,rowIndex){_S[_S.length]={children:function(_S){_n(_r(_U),function(_U,_V,_W,colIndex){_S[_S.length]={context:_G,nativeProps:$13,operator:_B,tag:'td',text:_y(_t('label',_U.label).value),type:3};_S[_S.length]=function(_R){_t('span',_U.span).value>1?_b(_R,'nativeProps',_t('span',_U.span).value*2-1,'colSpan'):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_'+(_t('name',_U.name).value),_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-description-cell bell-description-item-content'},operator:_B,tag:'td',type:3});});return _S}([]),context:_G,nativeProps:$11,operator:_B,tag:'tr',type:3};});return _S}([]),context:_G,nativeProps:$12,operator:_B,tag:'table',type:3};return _S}([]),context:_G,nativeProps:{className:'bell-description'+(_q('simple',_U.simple).value?' bell-description-simple':' bell-description-bordered'+(_q('size',_U.size).value?' bell-description-'+_y(_q('size',_U.size).value):''))+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

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
      template: template$1g,
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

  var template$1h = (function(){var $0=void 0,$2=!0,$5={className:'bell-thumbnail-placeholder'},$6={className:'bell-thumbnail-action'},$7={className:'bell-thumbnail-mask'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]={children:function(_S){_q('url',_U.url).value||_q('src',_U.src).value?_S[_S.length]=function(_R){_q('url',_U.url).value?_b(_R,'nativeProps',_q('formatUrl',_U.formatUrl).value?_x(_w(_q('formatUrl',_U.formatUrl,$0,_H&&_H.formatUrl||_I.formatUrl).value,_G,[{height:_q('customHeight',_U.customHeight).value,responsive:$2,url:_q('url',_U.url).value,width:_q('customWidth',_U.customWidth).value}])).value:_q('url',_U.url).value,'src'):_b(_R,'nativeProps',_q('src',_U.src).value,'src');_q('srcSet',_U.srcSet).value?_b(_R,'nativeAttrs',_q('srcSet',_U.srcSet).value,'srcset'):$0;_q('alt',_U.alt).value?_b(_R,'nativeProps',_q('alt',_U.alt).value,'alt'):$0;return _R}({context:_G,events:{error:_h('error','error.thumbnail','error','','error','thumbnail')},nativeAttrs:{ondragstart:'return false'},nativeProps:{className:'bell-thumbnail-image'},operator:_B,tag:'img',type:3}):_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_placeholder',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3};_q('showZoom',_U.showZoom).value||_q('showUpload',_U.showUpload).value||_q('showDownload',_U.showDownload).value||_q('showDelete',_U.showDelete).value?_S[_S.length]={children:function(_S){_q('showZoom',_U.showZoom).value?_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,events:{'click.native':_h('click.native','zoom.thumbnail','click','native','zoom','thumbnail',$0,$2)},isComponent:$2,operator:_C,props:{name:'zoom-in-line'},tag:'Icon',type:4};return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_q('showUpload',_U.showUpload).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{accept:_q('accept',_U.accept).value,beforeUpload:_q('beforeUpload',_U.beforeUpload).value,className:'bell-thumbnail-action',upload:_q('uploadImage',_U.uploadImage).value},slots:_k({$slot_children:function(_S,_T){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{name:'upload-2-line'},tag:'Icon',type:4};}}),tag:'Upload',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_q('showDownload',_U.showDownload).value?_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,events:{'click.native':_h('click.native','download.thumbnail','click','native','download','thumbnail',$0,$2)},isComponent:$2,operator:_C,props:{name:'download-2-line'},tag:'Icon',type:4};return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_q('showDelete',_U.showDelete).value?_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,events:{'click.native':_h('click.native','delete.thumbnail','click','native','delete','thumbnail',$0,$2)},isComponent:$2,operator:_C,props:{name:'delete-bin-line'},tag:'Icon',type:4};return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:$7,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_q('loading',_U.loading).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{fixed:$2,size:'large'},tag:'Spin',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-thumbnail'+(_q('simple',_U.simple).value?' bell-thumbnail-simple':' bell-thumbnail-bordered')+(_q('loading',_U.loading).value?' bell-thumbnail-loading':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},nativeStyles:_d([{height:_q('customHeight',_U.customHeight).value+'px',lineHeight:_q('customHeight',_U.customHeight).value+'px',width:_q('customWidth',_U.customWidth).value+'px'},_q('style',_U.style).value]),operator:_B,tag:'div',type:3};}})();

  var Thumbnail = Yox.define({
      template: template$1h,
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

  var template$1i = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-timeline'+(_q('pending',_U.pending).value?' bell-timeline-pending':'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var Timeline = Yox.define({
      template: template$1i,
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

  var template$1j = (function(){var $0=void 0,$2=!0,$5={className:'bell-timeline-custom'},$6={className:'bell-timeline-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['dot'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_dot',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3}:_S[_S.length]=function(_R){_q('color',_U.color).value?_R.nativeStyles={borderColor:_q('color',_U.color).value}:$0;return _R}({context:_G,nativeProps:{className:'bell-timeline-dot'},operator:_B,tag:'div',type:3});_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:{className:'bell-timeline-item'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var TimelineItem = Yox.define({
      template: template$1j,
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

  var template$1k = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-form'+(_q('inline',_U.inline).value?' bell-form-inline':' bell-form-block')+(_q('showColon',_U.showColon).value?' bell-form-colon':'')+(_q('labelAlign',_U.labelAlign).value?' bell-form-label-'+_y(_q('labelAlign',_U.labelAlign).value):'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var Form = Yox.define({
      template: template$1k,
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

  var template$1l = (function(){var $0=void 0,$2=!0,$5={className:'bell-form-item-controls'},$6={className:'bell-form-item-extra'},$7={className:'bell-form-item-message'},$8={className:'bell-form-item-wrapper'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_q('label',_U.label).value||_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['label'])).value?(_S[_S.length]=function(_R){_q('itemLabelWidth',_U.itemLabelWidth).value?_R.nativeStyles={flex:'0 0 '+_q('itemLabelWidth',_U.itemLabelWidth).value+'px'}:$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_label',_S)||(_S[_S.length]={isPure:$2,operator:_z,text:_y(_q('label',_U.label).value),type:1});return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:{className:'bell-form-item-label'+(_q('showRequiredMark',_U.showRequiredMark).value?' bell-form-item-label-required':'')},operator:_B,tag:'label',type:3}),_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3};_q('extra',_U.extra).value?_S[_S.length]={context:_G,nativeProps:$6,operator:_B,tag:'div',text:_y(_q('extra',_U.extra).value),type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_q('showItemMessage',_U.showItemMessage).value?_S[_S.length]={context:_G,nativeProps:$7,operator:_B,tag:'div',text:_y(_q('itemMessage',_U.itemMessage).value),type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:$8,operator:_B,tag:'div',type:3}):_S[_S.length]=function(_R){_q('itemLabelWidth',_U.itemLabelWidth).value?_R.nativeStyles={marginLeft:_q('itemLabelWidth',_U.itemLabelWidth).value+'px'}:$0;return _R}({children:function(_S){_a({children:function(_S){_l('$slot_children',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);_q('extra',_U.extra).value?_S[_S.length]={context:_G,nativeProps:$6,operator:_B,tag:'div',text:_y(_q('extra',_U.extra).value),type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_q('showItemMessage',_U.showItemMessage).value?_S[_S.length]={context:_G,nativeProps:$7,operator:_B,tag:'div',text:_y(_q('itemMessage',_U.itemMessage).value),type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-form-item-wrapper'},operator:_B,tag:'div',type:3});return _S}([]),context:_G,nativeProps:{className:'bell-form-item'+(_q('extra',_U.extra).value?' bell-form-item-with-extra':'')+(_q('showItemMessage',_U.showItemMessage).value?' bell-form-item-with-message':'')+(_q('labelAlign',_U.labelAlign).value?' bell-form-item-align-'+_y(_q('labelAlign',_U.labelAlign).value):'')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var FormItem = Yox.define({
      template: template$1l,
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
              error: UNDEFINED,
              itemLabelWidth: form.get('labelWidth'),
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

  var template$1m = (function(){var $0=void 0,$2=!0,$5={className:'bell-dialog-header'},$6={className:'bell-dialog-body'},$7={className:'bell-dialog-footer'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_q('visible',_U.visible).value?_a({children:function(_S){_S[_S.length]=function(_R){_q('style',_U.style).value?_R.nativeStyles=_d(_q('style',_U.style).value):$0;return _R}({children:function(_S){_q('showMask',_U.showMask).value?_S[_S.length]=function(_R){_q('maskClosable',_U.maskClosable).value?_b(_R,'events',_g('click','close()','click','',_G.close),'click'):$0;return _R}({context:_G,nativeProps:{className:'bell-dialog-mask'},operator:_B,tag:'div',type:3}):_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_S[_S.length]=function(_R){_q('width',_U.width).value||_q('height',_U.height).value?_R.nativeStyles={height:_q('height',_U.height).value?_q('height',_U.height).value+'px':$0,width:_q('width',_U.width).value?_q('width',_U.width).value+'px':$0}:$0;return _R}({children:function(_S){_q('title',_U.title).value||_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['title'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_title',_S)||(_S[_S.length]={isPure:$2,operator:_z,text:_y(_q('title',_U.title).value),type:1});return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$5,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['content'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_content',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$6,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_x(_w(_q('hasSlot',_U.hasSlot,$0,_H&&_H.hasSlot||_I.hasSlot).value,_G,['footer'])).value?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_footer',_S);return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$7,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_q('closable',_U.closable).value?_S[_S.length]=_T[_T.length]={context:_G,events:{'click.native':_g('click.native','close()','click','native',_G.close,$0,$0,$2)},isComponent:$2,operator:_C,props:{className:'bell-dialog-close',name:'close-line'},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-dialog-wrapper'},operator:_B,ref:'wrapper',tag:'div',type:3});return _S}([]),context:_G,nativeProps:{className:'bell-dialog'+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',transition:_e('dialog',_O&&_O.dialog||_P.dialog),type:3});return _S}([]),context:_G,operator:_E,tag:'portal',type:6},_S):_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};}})();

  var CLASS_VISIBLE$2 = 'bell-dialog-visible';
  var CLASS_FADE$2 = 'bell-dialog-fade';
  var Dialog = Yox.define({
      template: template$1m,
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

  var template$1n = (function(){var $0=void 0,$2=!0,$4=function(_Q){return _Q.length-1},$5=function(){return 0},$6={className:'bell-table-sorter'},$7={className:'bell-table-header'},$8={className:'bell-table-body'},$9={className:'bell-table-empty'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=function(_R){_q('width',_U.width).value||_q('height',_U.height).value||_q('style',_U.style).value?_R.nativeStyles=_d([{height:_q('height',_U.height).value?_q('height',_U.height).value+'px':$0,overflowX:_q('width',_U.width).value?'auto':$0,overflowY:_q('height',_U.height).value?'auto':$0,width:_q('width',_U.width).value?_q('width',_U.width).value+'px':$0},_q('style',_U.style).value]):$0;return _R}({children:function(_S){_q('colWidths',_U.colWidths).value?(_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_n(_q('columns',_U.columns),function(_U,_V,_W,index){_S[_S.length]={context:_G,nativeAttrs:{width:_p($5,['colWidths',index].join('.')).value},operator:_B,tag:'col',type:3};});return _S}([]),context:_G,operator:_B,tag:'colgroup',type:3};_S[_S.length]={children:function(_S){_S[_S.length]={children:function(_S){_n(_q('columns',_U.columns),function(_U,_V,_W){_S[_S.length]=function(_R){_t('align',_U.align).value?_b(_R,'nativeProps','bell-table-'+_y(_t('align',_U.align).value),'className'):$0;return _R}({children:function(_S){_t('key',_U.key).value==='selection'?_p($4,'list.length',$2).value>0?_S[_S.length]=_T[_T.length]={context:_G,events:{change:_g('change','allCheckedChange()','change','',_G.allCheckedChange,$0,$2)},isComponent:$2,operator:_C,props:{checked:_u($5,'allChecked').value},tag:'Checkbox',type:4}:_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{disabled:$2},tag:'Checkbox',type:4}:(_S[_S.length]={isPure:$2,operator:_z,text:_y(_t('title',_U.title).value),type:1},_t('sortable',_U.sortable).value?_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-table-sort-asc'+(_u($5,'sortKey').value===_t('key',_U.key).value&&_u($5,'sortOrder').value===_u($5,'SORT_ORDER_ASC').value?' bell-table-sort-active':''),name:'arrow-up-s-fill'},tag:'Icon',type:4};_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-table-sort-desc'+(_u($5,'sortKey').value===_t('key',_U.key).value&&_u($5,'sortOrder').value===_u($5,'SORT_ORDER_DESC').value?' bell-table-sort-active':''),name:'arrow-down-s-fill'},tag:'Icon',type:4};return _S}([]),context:_G,events:{click:_g('click','sortColumn(this.key, ~/sortKey === this.key && ~/sortOrder === ~/SORT_ORDER_ASC ? ~/SORT_ORDER_DESC : ~/SORT_ORDER_ASC)','click','',_G.sortColumn,{args:function(_Q,_X,_Y){return [_t('key',_U.key,_Q).value,_u($5,'sortKey',_Q).value===_t('key',_U.key,_Q).value&&_u($5,'sortOrder',_Q).value===_u($5,'SORT_ORDER_ASC',_Q).value?_u($5,'SORT_ORDER_DESC',_Q).value:_u($5,'SORT_ORDER_ASC',_Q).value]}})},nativeProps:$6,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2});return _S}([]),context:_G,operator:_B,tag:'td',type:3});});return _S}([]),context:_G,operator:_B,tag:'tr',type:3};return _S}([]),context:_G,nativeProps:$7,operator:_B,tag:'thead',type:3};_p($4,'list.length',$2).value>0?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_children',_S)||(_n(_q('list',_U.list),function(_U,_V,_W,index){_S[_S.length]={children:function(_S){_n(_u($5,'columns'),function(_U,_V,_W){_t('actions',_U.actions).value&&_p($4,'actions.length').value?_S[_S.length]=function(_R){_t('align',_U.align).value?_b(_R,'nativeProps','bell-table-'+_y(_t('align',_U.align).value),'className'):$0;return _R}({children:function(_S){_n(_t('actions',_U.actions),function(_U,_V,_W){_S[_S.length]=_T[_T.length]={context:_G,events:{click:_g('click','clickButton(this, list[index], index)','click','',_G.clickButton,{args:function(_Q,_X,_Y){return [_r(_U,_Q).value,_p($4,['list',index].join('.'),$2,_Q).value,index]}},$2)},isComponent:$2,operator:_C,props:{block:_t('block',_U.block).value,className:_t('className',_U.className).value,disabled:_t('disabled',_U.disabled).value,shape:_t('shape',_U.shape).value,size:_t('size',_U.size).value,type:_t('type',_U.type).value},slots:_k({$slot_children:function(_S,_T){_S[_S.length]={isPure:$2,operator:_z,text:_y(_t('text',_U.text).value),type:1};}}),tag:'Button',type:4};});return _S}([]),context:_G,operator:_B,tag:'td',type:3}):_p($4,['list',index,_t('key',_U.key).value].join('.'),$2).value!==$0?_S[_S.length]=function(_R){_t('align',_U.align).value?_b(_R,'nativeProps','bell-table-'+_y(_t('align',_U.align).value),'className'):$0;return _R}({children:function(_S){_t('dangerous',_U.dangerous).value?_S[_S.length]={context:_G,html:_y(_p($4,['list',index,_t('key',_U.key).value].join('.'),$2).value),operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_z,text:_y(_p($4,['list',index,_t('key',_U.key).value].join('.'),$2).value),type:1};return _S}([]),context:_G,operator:_B,tag:'td',type:3}):_t('key',_U.key).value==='selection'?_S[_S.length]=function(_R){_t('align',_U.align).value?_b(_R,'nativeProps','bell-table-'+_y(_t('align',_U.align).value),'className'):$0;return _R}({children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,events:{change:_g('change','rowCheckedChange($event, $data, index)','change','',_G.rowCheckedChange,{args:function(_Q,_X,_Y){return [_X,_Y,index]}},$2)},isComponent:$2,operator:_C,props:{checked:_x(_w(_q('inArray',_U.inArray,$0,_H&&_H.inArray||_I.inArray).value,_G,[_q('selection',_U.selection).value,_p($4,['list',index,'key'].join('.'),$2).value])).value},tag:'Checkbox',type:4};return _S}([]),context:_G,operator:_B,tag:'td',type:3}):_S[_S.length]=function(_R){_t('align',_U.align).value?_b(_R,'nativeProps','bell-table-'+_y(_t('align',_U.align).value),'className'):$0;return _R}({children:function(_S){_S[_S.length]={isPure:$2,operator:_z,text:_y(_t('key',_U.key).value)+' is not found.',type:1};return _S}([]),context:_G,operator:_B,tag:'td',type:3});});return _S}([]),context:_G,operator:_B,tag:'tr',type:3};}));return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$8,operator:_B,tag:'tbody',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,operator:_B,tag:'table',type:3},_p($4,'list.length',$2).value===0?_S[_S.length]={children:function(_S){_a({children:function(_S){_l('$slot_empty',_S)||(_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,slots:_k({$slot_children:function(_S,_T){_S[_S.length]={isPure:$2,operator:_z,text:'暂无数据',type:1};}}),tag:'Empty',type:4});return _S}([]),context:_G,isSlot:$2,operator:_F,tag:'slot',type:7},_S);return _S}([]),context:_G,nativeProps:$9,operator:_B,tag:'div',type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2}):_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-table'+(_q('stripe',_U.stripe).value?' bell-table-stripe':'')+(_q('simple',_U.simple).value?' bell-table-simple':' bell-table-bordered')+(_q('className',_U.className).value?' '+_y(_q('className',_U.className).value):'')},operator:_B,tag:'div',type:3});}})();

  var SORT_ORDER_ASC = 'asc';
  var SORT_ORDER_DESC = 'desc';
  var Table = Yox.define({
      template: template$1n,
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

  var template$1o = (function(){var $0=void 0,$4={className:'bell-loadingbar-indicator'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]={children:function(_S){_S[_S.length]={context:_G,nativeProps:$4,nativeStyles:{color:_q('color',_U.color).value||$0,height:_q('height',_U.height).value+'px',width:_q('percent',_U.percent).value+'%'},operator:_B,tag:'div',type:3};return _S}([]),context:_G,nativeProps:{className:'bell-loadingbar'+(_q('type',_U.type).value?' bell-loadingbar-'+_y(_q('type',_U.type).value):'')},operator:_B,tag:'div',type:3};}})();

  var LoadingBar = Yox.define({
      template: template$1o,
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
          Yox.dom.setProp(wrapper, 'id', 'bell-loadingbar-wrapper');
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

  var template$1p = (function(){var $0=void 0,$2=!0,$5={className:'bell-message-text'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]={children:function(_S){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-message-icon',name:_q('status',_U.status).value===_q('RAW_TYPE_SUCCESS',_U.RAW_TYPE_SUCCESS).value?'checkbox-circle-fill':_q('status',_U.status).value===_q('RAW_TYPE_WARNING',_U.RAW_TYPE_WARNING).value?'error-warning-fill':_q('status',_U.status).value===_q('RAW_TYPE_ERROR',_U.RAW_TYPE_ERROR).value?'close-circle-fill':'information-fill'},tag:'Icon',type:4};_S[_S.length]={context:_G,nativeProps:$5,operator:_B,tag:'span',text:_y(_q('content',_U.content).value),type:3};_q('closable',_U.closable).value?_S[_S.length]=_T[_T.length]={context:_G,events:{'click.native':_g('click.native','hide()','click','native',_G.hide,$0,$0,$2)},isComponent:$2,operator:_C,props:{className:'bell-message-close',name:'close-line'},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-message'+(_q('status',_U.status).value?' bell-message-'+_y(_q('status',_U.status).value):'')+(_q('center',_U.center).value?' bell-message-center':'')+(_q('closable',_U.closable).value?' bell-message-with-close':'')},operator:_B,tag:'div',type:3};}})();

  var CLASS_VISIBLE$3 = 'bell-message-visible';
  var Message = Yox.define({
      template: template$1p,
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
      afterMount: function () {
          if (!supportTransform) {
              var element = this.$el;
              element.style.marginLeft = -0.5 * element.offsetWidth + 'px';
          }
      }
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

  var template$1q = (function(){var $0=void 0,$2=!0,$3=!1;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-modal',closable:_q('closable',_U.closable).value,maskClosable:$3,showMask:$2,title:_q('title',_U.title).value,width:_q('width',_U.width).value},ref:'dialog',slots:_k({$slot_content:function(_S,_T){_S[_S.length]={isPure:$2,operator:_z,text:_y(_q('content',_U.content).value),type:1};},$slot_footer:function(_S,_T){_S[_S.length]=_T[_T.length]={context:_G,events:{click:_g('click','ok()','click','',_G.ok,$0,$2)},isComponent:$2,operator:_C,props:{type:_q('okType',_U.okType).value},slots:_k({$slot_children:function(_S,_T){_S[_S.length]={isPure:$2,operator:_z,text:_y(_q('okText',_U.okText).value),type:1};}}),tag:'Button',type:4};}}),tag:'Dialog',type:4};}})();

  var Alert$1 = Yox.define({
      template: template$1q,
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

  var template$1r = (function(){var $0=void 0,$2=!0,$3=!1;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-modal',closable:_q('closable',_U.closable).value,maskClosable:$3,showMask:$2,title:_q('title',_U.title).value,width:_q('width',_U.width).value},ref:'dialog',slots:_k({$slot_content:function(_S,_T){_S[_S.length]={isPure:$2,operator:_z,text:_y(_q('content',_U.content).value),type:1};},$slot_footer:function(_S,_T){_S[_S.length]=_T[_T.length]={context:_G,events:{click:_g('click','cancel()','click','',_G.cancel,$0,$2)},isComponent:$2,operator:_C,props:{type:_q('cancelType',_U.cancelType).value},slots:_k({$slot_children:function(_S,_T){_S[_S.length]={isPure:$2,operator:_z,text:_y(_q('cancelText',_U.cancelText).value),type:1};}}),tag:'Button',type:4};_S[_S.length]=_T[_T.length]={context:_G,events:{click:_g('click','ok()','click','',_G.ok,$0,$2)},isComponent:$2,operator:_C,props:{type:_q('okType',_U.okType).value},slots:_k({$slot_children:function(_S,_T){_S[_S.length]={isPure:$2,operator:_z,text:_y(_q('okText',_U.okText).value),type:1};}}),tag:'Button',type:4};}}),tag:'Dialog',type:4};}})();

  var Confirm = Yox.define({
      template: template$1r,
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

  var template$1s = (function(){var $0=void 0,$2=!0,$5={className:'bell-notification-title'},$6={className:'bell-notification-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_A,_B,_C,_D,_E,_F,_G,_H,_I,_J,_K,_L,_M,_N,_O,_P,_U,_V,_S,_T){_S[_S.length]={children:function(_S){_q('status',_U.status).value?_S[_S.length]=_T[_T.length]={context:_G,isComponent:$2,operator:_C,props:{className:'bell-notification-icon',name:_q('status',_U.status).value===_q('RAW_TYPE_SUCCESS',_U.RAW_TYPE_SUCCESS).value?'checkbox-circle-fill':_q('status',_U.status).value===_q('RAW_TYPE_WARNING',_U.RAW_TYPE_WARNING).value?'error-warning-fill':_q('status',_U.status).value===_q('RAW_TYPE_ERROR',_U.RAW_TYPE_ERROR).value?'close-circle-fill':'information-fill'},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_q('title',_U.title).value?_S[_S.length]={context:_G,nativeProps:$5,operator:_B,tag:'div',text:_y(_q('title',_U.title).value),type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_q('content',_U.content).value?_S[_S.length]={context:_G,nativeProps:$6,operator:_B,tag:'div',text:_y(_q('content',_U.content).value),type:3}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};_q('duration',_U.duration).value==0?_S[_S.length]=_T[_T.length]={context:_G,events:{'click.native':_g('click.native','hide()','click','native',_G.hide,$0,$0,$2)},isComponent:$2,operator:_C,props:{className:'bell-notification-close',name:'close-line'},tag:'Icon',type:4}:_S[_S.length]={isPure:$2,operator:_A,text:'',type:2};return _S}([]),context:_G,nativeProps:{className:'bell-notification'+(_q('status',_U.status).value?' bell-notification-'+_y(_q('status',_U.status).value)+' bell-notification-with-icon':'')+(_q('title',_U.title).value?' bell-notification-with-title':'')+(_q('duration',_U.duration).value==0?' bell-notification-with-close':'')},nativeStyles:{right:_q('right',_U.right).value+'px',width:_q('width',_U.width).value+'px'},operator:_B,tag:'div',type:3};}})();

  var CLASS_VISIBLE$4 = 'bell-notification-visible';
  var Notification = Yox.define({
      template: template$1s,
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
          Yox.dom.setProp(wrapper, 'id', 'bell-notification-wrapper');
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
  var version = "0.22.8";
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

})));
//# sourceMappingURL=bell-ui-rollup.js.map
