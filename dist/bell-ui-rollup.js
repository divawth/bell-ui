/**
 * bell-ui.js v0.19.0
 * (c) 2018-2021 
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('yox')) :
  typeof define === 'function' && define.amd ? define(['exports', 'yox'], factory) :
  (global = global || self, factory(global.Bell = {}, global.Yox));
}(this, (function (exports, Yox) { 'use strict';

  Yox = Yox && Object.prototype.hasOwnProperty.call(Yox, 'default') ? Yox['default'] : Yox;

  var template = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-menu'+(_o('mode',__l.mode).value?' bell-menu-'+_w(_o('mode',__l.mode).value):'')+(!_o('inner',__l.inner).value&&_o('theme',__l.theme).value?' bell-menu-'+_w(_o('theme',__l.theme).value):'')+(_o('collapsed',__l.collapsed).value?' bell-menu-collapsed':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);});}})();

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
  var RAW_DARK = 'dark';
  var RAW_LIGHT = 'light';
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
              value: FALSE,
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
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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
                  type: 'collapsed',
                  ns: 'menu',
              }, { collapsed: collapsed }, TRUE);
          }
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

  var template$1 = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-menu-item'+(_o('isActive',__l.isActive).value?' bell-menu-item-active':'')+(_o('disabled',__l.disabled).value?' bell-menu-item-disabled':' bell-menu-item-enabled')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;!_o('disabled',__l.disabled).value?_c(__i,'events',_f('click','click()','click','',_x.click),'click'):$0;},function(__j){_j('$slot_children',__j);});}})();

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
              type: RAW_STRING,
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

  var template$2 = (function(){var $0=void 0,$2=!0,$5={className:'bell-menu-group-title'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-menu-group'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__j[__j.length]={context:_x,nativeProps:$5,tag:'div',text:_w(_o('title',__l.title).value),type:3};_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['children'])).value?__j[__j.length]=__k[__k.length]=_b({context:_x,isComponent:$2,props:{inner:$2,mode:_o('mode',__l.mode).value==='inline'?'inline':'vertical'},tag:'Menu',type:4},$0,{$slot_children:function(__j,__k){_j('$slot_children',__j);}}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

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
              type: RAW_STRING,
          }
      },
      data: function (options) {
          var menu = findComponentUpward(options.parent, 'bell-Menu');
          return {
              mode: menu.get('mode'),
          };
      },
  });

  var template$3 = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-icon'+(_o('name',__l.name).value?' bell-icon-'+_w(_o('name',__l.name).value):'')+(_o('spin',__l.spin).value?' bell-icon-spin':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'i',type:3},function(__i){_o('size',__l.size).value>0||_o('color',__l.color).value||_o('style',__l.style).value?_c(__i,'nativeProps',(_o('size',__l.size).value>0?'font-size: '+_w(_o('size',__l.size).value)+'px;':'')+(_o('color',__l.color).value?'color: '+_w(_o('color',__l.color).value)+';':'')+(_o('style',__l.style).value?_w(_o('style',__l.style).value):''),'style.cssText'):$0;},function(__j){_j('$slot_children',__j);});}})();

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
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
  });

  var template$4 = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-dropdown bell-dropdown-'+_w(_o('placement',__l.placement).value)+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-dropdown-trigger'},tag:'div',type:3},function(__i){_o('trigger',__l.trigger).value===_o('RAW_CLICK',__l.RAW_CLICK).value?_c(__i,'events',_f('click','toggleVisible()','click','',_x.toggleVisible),'click'):_o('trigger',__l.trigger).value===_o('RAW_HOVER',__l.RAW_HOVER).value?(_c(__i,'events',_f('mouseenter','enter()','mouseenter','',_x.enter),'mouseenter'),_c(__i,'events',_f('mouseleave','leave()','mouseleave','',_x.leave),'mouseleave')):$0;},function(__j){_j('$slot_children',__j);});__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-dropdown-overlay'},ref:'overlay',tag:'div',type:3},function(__i){_o('height',__l.height).value>0?_c(__i,'nativeProps','max-height: '+_w(_o('height',__l.height).value)+'px;','style.cssText'):$0;_o('trigger',__l.trigger).value===_o('RAW_HOVER',__l.RAW_HOVER).value?(_c(__i,'events',_f('mouseenter','enter()','mouseenter','',_x.enter),'mouseenter'),_c(__i,'events',_f('mouseleave','leave()','mouseleave','',_x.leave),'mouseleave')):$0;},function(__j){_j('$slot_overlay',__j);});});}})();

  var CLASS_VISIBLE = 'bell-dropdown-visible';
  var CLASS_FADE = 'bell-dropdown-fade';
  var Dropdown = Yox.define({
      template: template$4,
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
              value: FALSE,
          },
          height: {
              type: RAW_NUMERIC,
              value: 280,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
      watchers: {
          // 同步外部的传值
          visible: function (visible, oldVisible) {
              var me = this;
              var element = me.$el;
              var overlay = me.$refs.overlay;
              if (visible) {
                  Yox.dom.addClass(element, CLASS_VISIBLE);
                  // 用 js 计算的原因
                  // 1. css transform 被动画占用了
                  // 2. 兼容 IE
                  var cssText = '';
                  var width = overlay.offsetWidth;
                  var height = overlay.offsetHeight;
                  switch (me.get('placement')) {
                      case RAW_BOTTOM:
                      case RAW_TOP:
                          cssText = "margin-left:" + -0.5 * width + "px";
                          break;
                      case RAW_LEFT:
                      case RAW_RIGHT:
                          cssText = "margin-top:" + -0.5 * height + "px";
                          break;
                  }
                  overlay.style.cssText = cssText;
                  setTimeout(function () {
                      Yox.dom.addClass(element, CLASS_FADE);
                  }, 50);
              }
              else if (oldVisible) {
                  Yox.dom.removeClass(element, CLASS_FADE);
                  onTransitionEnd(overlay, function () {
                      Yox.dom.removeClass(element, CLASS_VISIBLE);
                  });
              }
          }
      },
      data: function () {
          return {
              RAW_HOVER: RAW_HOVER,
              RAW_CLICK: RAW_CLICK,
              RAW_CUSTOM: RAW_CUSTOM,
          };
      },
      events: {
          click: {
              listener: function () {
                  this.fire({
                      type: 'close',
                      ns: 'dropdown',
                  });
              },
              ns: 'dropdownItem',
          }
      },
      methods: {
          enter: function () {
              var me = this;
              if (me.leaveTimer) {
                  clearTimeout(me.leaveTimer);
                  me.leaveTimer = UNDEFINED;
              }
              else {
                  this.fire({
                      type: 'open',
                      ns: 'dropdown',
                  });
              }
          },
          leave: function () {
              var me = this;
              me.leaveTimer = setTimeout(function () {
                  if (me.$el) {
                      me.leaveTimer = UNDEFINED;
                      me.fire({
                          type: 'close',
                          ns: 'dropdown',
                      });
                  }
              }, 300);
          },
          toggleVisible: function () {
              if (this.get('visible')) {
                  this.fire({
                      type: 'close',
                      ns: 'dropdown',
                  });
              }
              else {
                  this.fire({
                      type: 'open',
                      ns: 'dropdown',
                  });
              }
          }
      },
      afterMount: function () {
          var me = this;
          var onClick = function (event) {
              if (!me.get('visible')) {
                  return;
              }
              var element = me.$el;
              var target = event.originalEvent.target;
              if (contains(element, target)) {
                  return;
              }
              if (me.get('trigger') === RAW_CUSTOM) {
                  me.fire({
                      type: 'outside',
                      ns: 'dropdown',
                  });
              }
              else {
                  me.fire({
                      type: 'close',
                      ns: 'dropdown',
                  });
              }
          };
          Yox.dom.on(DOCUMENT, RAW_CLICK, onClick);
          var destroy = function (component) {
              if (component === me) {
                  Yox.dom.off(DOCUMENT, RAW_CLICK, onClick);
                  Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy);
              }
          };
          Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy);
      }
  });

  var template$5 = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){_o('mode',__l.mode).value==='inline'?__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-sub-menu'+(_o('isOpen',__l.isOpen).value?' bell-menu-open':'')+(_o('isActive',__l.isActive).value?' bell-menu-active':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-sub-menu-title'},tag:'div',type:3},function(__i){!_o('collapsed',__l.collapsed).value?(_c(__i,'lazy',300,'click'),_c(__i,'events',_f('click',"toggle('isOpen')",'click','',_x.toggle,{args:function(__h,__o,__p){return ['isOpen']}}),'click')):$0;},function(__j){_j('$slot_title',__j);!_o('collapsed',__l.collapsed).value?__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-sub-menu-arrow-icon',name:'arrow-down-s-line',size:'0'},tag:'Icon',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});__j[__j.length]=__k[__k.length]=_b({context:_x,isComponent:$2,props:{inner:$2,mode:_o('mode',__l.mode).value},ref:'menu',tag:'Menu',type:4},$0,{$slot_children:function(__j,__k){_j('$slot_children',__j);}});}):__j[__j.length]=__k[__k.length]=_b({context:_x,events:{outside:_f('outside','handleOutsideClick()','outside','',_x.handleOutsideClick,$0,$2)},isComponent:$2,props:{className:'bell-sub-menu'+(_o('isActive',__l.isActive).value?' bell-menu-active':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):''),placement:_o('mode',__l.mode).value==='horizontal'?'bottom':'right-start',trigger:'custom',visible:_o('isOpen',__l.isOpen).value},tag:'Dropdown',type:4},function(__i){_o('style',__l.style).value?_c(__i,'props',_o('style',__l.style).value,'style'):$0;},{$slot_children:function(__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-sub-menu-title'},tag:'div',type:3},function(__i){!_o('collapsed',__l.collapsed).value?(_c(__i,'lazy',300,'click'),_c(__i,'events',_f('click',"toggle('isOpen')",'click','',_x.toggle,{args:function(__h,__o,__p){return ['isOpen']}}),'click')):$0;},function(__j){_j('$slot_title',__j);!_o('collapsed',__l.collapsed).value?__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-sub-menu-arrow-icon',name:'arrow-down-s-line',size:'0'},tag:'Icon',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});},$slot_overlay:function(__j,__k){_j('$slot_children',__j);}});}})();

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
              type: RAW_STRING,
          }
      },
      data: function (options) {
          var menu = findComponentUpward(options.parent, 'bell-Menu');
          var name = this.get('name');
          var openNames = menu.get('openNames');
          return {
              isOpen: openNames && Yox.array.has(openNames, name),
              isActive: menu.get('activeName') === name,
              mode: menu.get('mode'),
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
          collapsed: {
              listener: function (_, data) {
                  this.set('collapsed', data.collapsed);
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
          }
      },
      methods: {
          handleOutsideClick: function (event) {
              event.stop();
              this.set('isOpen', FALSE);
          }
      },
      components: {
          Icon: Icon,
          Dropdown: Dropdown,
      }
  });

  var template$6 = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-text'+(_o('type',__l.type).value?' bell-text-'+_w(_o('type',__l.type).value):'')+(_o('size',__l.size).value?' bell-text-'+_w(_o('size',__l.size).value):'')+(_o('bold',__l.bold).value?' bell-text-bold':'')+(_o('block',__l.block).value?' bell-text-block':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'span',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);});}})();

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
              type: RAW_STRING,
          }
      }
  });

  var template$7 = (function(){var $0=void 0,$2=!0,$5={className:'bell-drawer-header'},$6={className:'bell-drawer-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-drawer'+(_o('placement',__l.placement).value?' bell-drawer-'+_w(_o('placement',__l.placement).value):'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_o('mask',__l.mask).value?__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-drawer-mask'},tag:'div',type:3},function(__i){_o('maskClosable',__l.maskClosable).value?_c(__i,'events',_f('click','close()','click','',_x.close),'click'):$0;}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-drawer-wrapper','style.cssText':_o('wrapperStyle',__l.wrapperStyle).value},ref:'wrapper',tag:'div',type:3},$0,function(__j){_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['title'])).value?__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){_j('$slot_title',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){_j('$slot_content',__j);});_o('closable',__l.closable).value?__j[__j.length]=__k[__k.length]={context:_x,events:{'click.native':_f('click.native','close()','click','native',_x.close,$0,$0,$2)},isComponent:$2,props:{className:'bell-drawer-close',name:'close-line',size:'0'},tag:'Icon',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});});}})();

  var CLASS_VISIBLE$1 = 'bell-drawer-visible';
  var CLASS_FADE$1 = 'bell-drawer-fade';
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
          mask: {
              type: RAW_BOOLEAN,
              value: TRUE,
          },
          maskClosable: {
              type: RAW_BOOLEAN,
              value: TRUE,
          },
          visible: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
      watchers: {
          visible: function (visible, oldVisible) {
              var me = this;
              var element = this.$el;
              var wrapper = this.$refs.wrapper;
              if (visible) {
                  // 设置为 display block
                  Yox.dom.addClass(element, CLASS_VISIBLE$1);
                  me.fire({
                      type: 'open',
                      ns: 'drawer',
                  });
                  setTimeout(function () {
                      Yox.dom.addClass(element, CLASS_FADE$1);
                      onTransitionEnd(wrapper, function () {
                          if (me.$el) {
                              me.fire({
                                  type: 'opened',
                                  ns: 'drawer',
                              });
                          }
                      });
                  }, 50);
              }
              else if (oldVisible) {
                  Yox.dom.removeClass(element, CLASS_FADE$1);
                  me.fire({
                      type: 'close',
                      ns: 'drawer',
                  });
                  onTransitionEnd(wrapper, function () {
                      if (me.$el) {
                          Yox.dom.removeClass(element, CLASS_VISIBLE$1);
                          me.fire({
                              type: 'closed',
                              ns: 'drawer',
                          });
                      }
                  });
              }
          }
      },
      computed: {
          wrapperStyle: function () {
              var style = '';
              var placement = this.get('placement');
              if (placement === RAW_LEFT
                  || placement === RAW_RIGHT) {
                  var width = toNumber(this.get('width'));
                  style = "width: " + width + "px;";
              }
              else {
                  var height = toNumber(this.get('height'));
                  style = "height: " + height + "px;";
              }
              return style;
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
      components: {
          Icon: Icon,
      }
  });

  var template$8 = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-breadcrumb'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);});}})();

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
              type: RAW_STRING,
          }
      },
  });

  var template$9 = (function(){var $0=void 0,$2=!0,$5={className:'bell-breadcrumb-separator'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-breadcrumb-item'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'span',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__j[__j.length]=_a({context:_x,tag:'span',type:3},function(__i){_o('last',__l.last).value?_c(__i,'nativeProps','bell-breadcrumb-text','className'):(_c(__i,'nativeProps','bell-breadcrumb-link','className'),_c(__i,'events',_g('click','click.breadcrumbItem','click','','click','breadcrumbItem'),'click'));},function(__j){_j('$slot_children',__j);});!_o('last',__l.last).value?__j[__j.length]={context:_x,nativeProps:$5,tag:'span',text:_w(_o('separator',__l.separator).value),type:3}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var BreadcrumbItem = Yox.define({
      template: template$9,
      name: 'bell-BreadcrumbItem',
      propTypes: {
          last: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
      data: function (options) {
          var breadcrumb = findComponentUpward(options.parent, 'bell-Breadcrumb');
          return {
              separator: breadcrumb.get('separator')
          };
      }
  });

  var template$a = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-button'+(_o('type',__l.type).value?' bell-button-'+_w(_o('type',__l.type).value):'')+(_o('size',__l.size).value?' bell-button-'+_w(_o('size',__l.size).value):'')+(_o('shape',__l.shape).value?' bell-button-'+_w(_o('shape',__l.shape).value):'')+(_o('ghost',__l.ghost).value?' bell-button-ghost':'')+(_o('loading',__l.loading).value?' bell-button-loading':'')+(_o('disabled',__l.disabled).value?' bell-button-disabled':' bell-button-enabled')+(_o('block',__l.block).value?' bell-button-block':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'button',type:3},function(__i){_o('disabled',__l.disabled).value?_c(__i,'nativeProps',$2,'disabled'):!_o('loading',__l.loading).value?_c(__i,'events',_g('click','click.button','click','','click','button'),'click'):$0;_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_prefix',__j,function(){_o('loading',__l.loading).value?__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-button-loading-icon',name:'loader-5-line',size:'0',spin:$2},tag:'Icon',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['children'])).value?_o('loading',__l.loading).value||_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['prefix'])).value||_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['suffix'])).value?__j[__j.length]=_a({context:_x,tag:'span',type:3},$0,function(__j){_j('$slot_children',__j);}):_j('$slot_children',__j):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_j('$slot_suffix',__j);});}})();

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
              type: RAW_STRING,
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

  var template$b = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-button-group'+(_o('shape',__l.shape).value?' bell-button-group-'+_w(_o('shape',__l.shape).value):'')+(_o('size',__l.size).value?' bell-button-group-'+_w(_o('size',__l.size).value):'')+(_o('vertical',__l.vertical).value?' bell-button-group-vertical':' bell-button-group-horizontal')+(_o('className',__l.className).value?_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);});}})();

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
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
  });

  var template$c = (function(){var $0=void 0,$2=!0,$5={className:'bell-input-prepend'},$6={className:'bell-input-prefix bell-input-prefix-icon-wrapper'},$7={className:'bell-input-suffix bell-input-suffix-text-wrapper'},$8={className:'bell-input-suffix bell-input-suffix-icon-wrapper'},$9={className:'bell-input-suffix bell-input-suffix-icon-wrapper bell-input-secure'},$10={className:'bell-input-suffix bell-input-suffix-icon-wrapper bell-input-clear'},$11={className:'bell-input-content'},$12={className:'bell-input-append'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-input'+(_o('size',__l.size).value?' bell-input-'+_w(_o('size',__l.size).value):'')+(_o('status',__l.status).value?' bell-input-'+_w(_o('status',__l.status).value):'')+(_o('block',__l.block).value?' bell-input-block':'')+(_o('disabled',__l.disabled).value?' bell-input-disabled':' bell-input-enabled')+(!_o('value',__l.value).value?' bell-input-no-value':' bell-input-has-value')+(_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['prepend'])).value?' bell-input-with-prepend':'')+(_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['append'])).value?' bell-input-with-append':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('width',__l.width).value||_o('style',__l.style).value?_c(__i,'nativeProps',(_o('width',__l.width).value?'width: '+_w(_o('width',__l.width).value)+'px;':'')+(_o('style',__l.style).value?_w(_o('style',__l.style).value):''),'style.cssText'):$0;},function(__j){_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['prepend'])).value?__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){_j('$slot_prepend',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};__j[__j.length]=_a({context:_x,nativeProps:$11,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,model:_e(_o('value',__l.value)),nativeProps:{className:'bell-input-el'+(_o('prefix',__l.prefix).value?' bell-input-el-with-prefix':'')+(_o('hasCount',__l.hasCount).value||_o('suffix',__l.suffix).value||_o('secure',__l.secure).value||_o('clearable',__l.clearable).value&&!_o('disabled',__l.disabled).value?' bell-input-el-with-suffix':'')+(_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['prepend'])).value?' bell-input-el-with-prepend':'')+(_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['append'])).value?' bell-input-el-with-append':''),type:_o('currentType',__l.currentType).value},ref:'input',tag:'input',type:3},function(__i){_o('maxLength',__l.maxLength).value?_c(__i,'nativeProps',_o('maxLength',__l.maxLength).value,'maxLength'):$0;_o('placeholder',__l.placeholder).value?_c(__i,'nativeProps',_o('placeholder',__l.placeholder).value,'placeholder'):$0;_o('autoFocus',__l.autoFocus).value?_c(__i,'nativeProps',$2,'autofocus'):$0;_o('readOnly',__l.readOnly).value?_c(__i,'nativeProps',$2,'readOnly'):$0;_o('spellCheck',__l.spellCheck).value?_c(__i,'nativeProps',$2,'spellcheck'):$0;_o('disabled',__l.disabled).value?_c(__i,'nativeProps',$2,'disabled'):(_c(__i,'events',_f('focus','handleFocus()','focus','',_x.handleFocus),'focus'),_c(__i,'events',_f('blur','handleBlur()','blur','',_x.handleBlur),'blur'),_c(__i,'events',_g('input','input.input','input','','input','input'),'input'),_c(__i,'events',_g('compositionstart','compositionstart.input','compositionstart','','compositionstart','input'),'compositionstart'),_c(__i,'events',_g('compositionend','compositionend.input','compositionend','','compositionend','input'),'compositionend'));});_o('prefix',__l.prefix).value?__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-input-prefix-icon',name:_o('prefix',__l.prefix).value,size:'0'},tag:'Icon',type:4};}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_o('hasCount',__l.hasCount).value?__j[__j.length]=_a({context:_x,nativeProps:$7,tag:'div',type:3},$0,function(__j){__j[__j.length]={isPure:$2,isText:$2,text:_w(_v(_u(_o('formatValueLength',__l.formatValueLength,$0,_y&&_y.formatValueLength||_z.formatValueLength).value,_x,[_o('value',__l.value).value])).value)+' / '+_w(_o('maxLength',__l.maxLength).value),type:1};}):_o('suffix',__l.suffix).value?__j[__j.length]=_a({context:_x,nativeProps:$8,tag:'div',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-input-suffix-icon',name:_o('suffix',__l.suffix).value,size:'0'},tag:'Icon',type:4};}):_o('secure',__l.secure).value?__j[__j.length]=_a({context:_x,events:{click:_f('click',"toggle('isSecure')",'click','',_x.toggle,{args:function(__h,__o,__p){return ['isSecure']}})},nativeProps:$9,tag:'div',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-input-secure-icon',name:_o('isSecure',__l.isSecure).value?'eye-close-line':'eye-line',size:'0'},tag:'Icon',type:4};}):_o('clearable',__l.clearable).value&&!_o('disabled',__l.disabled).value?__j[__j.length]=_a({context:_x,events:{click:_f('click','handleClearClick()','click','',_x.handleClearClick)},nativeProps:$10,tag:'div',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-input-clear-icon',name:'close-circle-fill',size:'0'},tag:'Icon',type:4};}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_j('$slot_children',__j);});_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['append'])).value?__j[__j.length]=_a({context:_x,nativeProps:$12,tag:'div',type:3},$0,function(__j){_j('$slot_append',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

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
              type: RAW_STRING,
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

  var template$d = (function(){var $0=void 0,$2=!0,$5={className:'bell-input-number-actions'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=__k[__k.length]=_b({context:_x,events:{blur:_f('blur','handleBlur()','blur','',_x.handleBlur,$0,$2),compositionend:_f('compositionend','handleCompositionEnd()','compositionend','',_x.handleCompositionEnd,$0,$2),compositionstart:_f('compositionstart','handleCompositionStart()','compositionstart','',_x.handleCompositionStart,$0,$2),down:_f('down','handleDown()','down','',_x.handleDown,$0,$2),enter:_f('enter','handleEnter()','enter','',_x.handleEnter,$0,$2),focus:_f('focus','handleFocus()','focus','',_x.handleFocus,$0,$2),input:_f('input','handleInput()','input','',_x.handleInput,$0,$2),keydown:_f('keydown','handleKeydown()','keydown','',_x.handleKeydown,$0,$2),keyup:_f('keyup','handleKeyup()','keyup','',_x.handleKeyup,$0,$2),up:_f('up','handleUp()','up','',_x.handleUp,$0,$2)},isComponent:$2,props:{autoFocus:_o('autoFocus',__l.autoFocus).value,block:_o('block',__l.block).value,className:_o('customClassName',__l.customClassName).value,disabled:_o('disabled',__l.disabled).value,placeholder:_o('placeholder',__l.placeholder).value,readOnly:_o('readOnly',__l.readOnly).value,size:_o('size',__l.size).value,status:_o('status',__l.status).value,style:_o('style',__l.style).value,value:_o('value',__l.value).value,width:_o('width',__l.width).value},ref:'input',tag:'Input',type:4},$0,{$slot_append:function(__j,__k){_j('$slot_append',__j);},$slot_children:function(__j,__k){__j[__j.length]={context:_x,nativeProps:{className:'bell-input-number-el',max:_o('max',__l.max).value,min:_o('min',__l.min).value,step:_o('step',__l.step).value,type:'number',value:_o('value',__l.value).value},ref:'numberInput',tag:'input',type:3};_o('showStep',__l.showStep).value?__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,tag:'div',type:3},function(__i){_o('upDisabled',__l.upDisabled).value?_c(__i,'nativeProps','bell-input-number-up bell-input-number-up-disabled','className'):(_c(__i,'nativeProps','bell-input-number-up bell-input-number-up-enabled','className'),_c(__i,'events',_f('click','handleUp()','click','',_x.handleUp),'click'));},function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-input-number-up-icon',name:'arrow-up-s-line',size:'0'},tag:'Icon',type:4};});__j[__j.length]=_a({context:_x,tag:'div',type:3},function(__i){_o('downDisabled',__l.downDisabled).value?_c(__i,'nativeProps','bell-input-number-down bell-input-number-down-disabled','className'):(_c(__i,'nativeProps','bell-input-number-down bell-input-number-down-enabled','className'),_c(__i,'events',_f('click','handleDown()','click','',_x.handleDown),'click'));},function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-input-number-down-icon',name:'arrow-down-s-line',size:'0'},tag:'Icon',type:4};});}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};},$slot_prepend:function(__j,__k){_j('$slot_prepend',__j);}});}})();

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
              type: RAW_STRING,
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

  var template$e = (function(){var $0=void 0,$2=!0,$5={className:'bell-textarea-word-count'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-textarea'+(_o('size',__l.size).value?' bell-textarea-'+_w(_o('size',__l.size).value):'')+(_o('status',__l.status).value?' bell-textarea-'+_w(_o('status',__l.status).value):'')+(_o('block',__l.block).value?' bell-textarea-block':'')+(_o('resize',__l.resize).value===_o('RAW_HORIZONTAL',__l.RAW_HORIZONTAL).value?' bell-textarea-resize-horizontal':_o('resize',__l.resize).value===_o('RAW_VERTICAL',__l.RAW_VERTICAL).value?' bell-textarea-resize-vertical':'')+(_o('disabled',__l.disabled).value?' bell-textarea-disabled':' bell-textarea-enabled')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('width',__l.width).value||_o('style',__l.style).value?_c(__i,'nativeProps',(_o('width',__l.width).value?'width: '+_w(_o('width',__l.width).value)+'px;':'')+(_o('style',__l.style).value?_w(_o('style',__l.style).value):''),'style.cssText'):$0;},function(__j){__j[__j.length]=_a({context:_x,model:_e(_o('value',__l.value)),nativeProps:{className:'bell-textarea-el'+(_o('hasCount',__l.hasCount).value?' bell-textarea-el-with-word-count':''),'style.cssText':_o('textareaStyle',__l.textareaStyle).value},tag:'textarea',type:3},function(__i){_o('wrap',__l.wrap).value?_c(__i,'nativeProps',_o('wrap',__l.wrap).value,'wrap'):$0;_o('placeholder',__l.placeholder).value?_c(__i,'nativeProps',_o('placeholder',__l.placeholder).value,'placeholder'):$0;_o('maxLength',__l.maxLength).value?_c(__i,'nativeProps',_o('maxLength',__l.maxLength).value,'maxLength'):$0;_o('autoFocus',__l.autoFocus).value?_c(__i,'nativeProps',$2,'autofocus'):$0;_o('readOnly',__l.readOnly).value?_c(__i,'nativeProps',$2,'readOnly'):$0;_o('spellCheck',__l.spellCheck).value?_c(__i,'nativeProps',$2,'spellcheck'):$0;_o('disabled',__l.disabled).value?_c(__i,'nativeProps',$2,'disabled'):(_c(__i,'events',_f('blur','handleBlur()','blur','',_x.handleBlur),'blur'),_c(__i,'events',_f('focus','handleFocus()','focus','',_x.handleFocus),'focus'));});_o('hasCount',__l.hasCount).value?__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){__j[__j.length]={isPure:$2,isText:$2,text:_w(_v(_u(_o('formatValueLength',__l.formatValueLength,$0,_y&&_y.formatValueLength||_z.formatValueLength).value,_x,[_o('value',__l.value).value])).value)+' / '+_w(_o('maxLength',__l.maxLength).value),type:1};}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

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
              type: RAW_STRING,
          },
      },
      data: function () {
          return {
              RAW_HORIZONTAL: RAW_HORIZONTAL,
              RAW_VERTICAL: RAW_VERTICAL,
              isSecure: TRUE,
              isFocus: FALSE,
          };
      },
      computed: {
          hasCount: function () {
              return this.get('showCount') && this.get('maxLength') > 0;
          },
          textareaStyle: function () {
              var size = this.get('size');
              var autoSize = this.get('autoSize');
              // 单行的高度
              var ROW_HEIGHT = fontSizes[size] * 1.5;
              // 上下 padding + border
              var PADDING_VERTICAL = 2 * (1 + sizes[size]);
              if (autoSize) {
                  var rows = this.get('rows');
                  var value = this.get('value');
                  if (Yox.is.object(autoSize)) {
                      rows = value ? value.split('\n').length : autoSize.minRows;
                      return "min-height: " + (autoSize.minRows * ROW_HEIGHT + PADDING_VERTICAL) + "px;max-height: " + (autoSize.maxRows * ROW_HEIGHT + PADDING_VERTICAL) + "px;height: " + (rows * ROW_HEIGHT + PADDING_VERTICAL) + "px;";
                  }
                  rows = value ? value.split('\n').length : 1;
                  return "min-height: " + (ROW_HEIGHT + PADDING_VERTICAL) + "px;height: " + (rows * ROW_HEIGHT + PADDING_VERTICAL) + "px;";
              }
              return "height: " + (this.get('rows') * ROW_HEIGHT + PADDING_VERTICAL) + "px;";
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

  var template$f = (function(){var $0=void 0,$2=!0,$3=!1,$5={className:'bell-radio-icon'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-radio'+(_o('disabled',__l.disabled).value?' bell-radio-disabled':' bell-radio-enabled')+(_o('checked',__l.checked).value?' bell-radio-active':'')+(_o('isFocus',__l.isFocus).value?' bell-radio-focus':'')+(_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['children'])).value?' bell-radio-with-label':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'label',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;!_o('disabled',__l.disabled).value?_c(__i,'events',_f('click','handleClick()','click','',_x.handleClick),'click'):$0;},function(__j){__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'span',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,events:{blur:_f('blur',"set('isFocus', false)",'blur','',_x.set,{args:function(__h,__o,__p){return ['isFocus',$3]}}),focus:_f('focus',"set('isFocus', true)",'focus','',_x.set,{args:function(__h,__o,__p){return ['isFocus',$2]}})},nativeProps:{className:'bell-radio-input',disabled:_o('disabled',__l.disabled).value,type:'radio',value:_o('value',__l.value).value},tag:'input',type:3},function(__i){_o('name',__l.name).value?_c(__i,'nativeProps',_o('name',__l.name).value,'name'):$0;});});_j('$slot_children',__j);});}})();

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
              value: FALSE,
          },
          checked: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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

  var template$g = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:(_o('button',__l.button).value?'bell-radio-button'+(_o('size',__l.size).value?' bell-radio-button-'+_w(_o('size',__l.size).value):'')+(_o('disabled',__l.disabled).value?' bell-radio-button-disabled':' bell-radio-button-enable'):'bell-radio-group'+(_o('disabled',__l.disabled).value?' bell-radio-group-disabled':' bell-radio-group-enabled'))+(_o('vertical',__l.vertical).value?' bell-radio-vertical':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);});}})();

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
              value: FALSE,
          },
          vertical: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          button: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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

  var template$h = (function(){var $0=void 0,$2=!0,$3=!1,$5={className:'bell-checkbox-icon'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-checkbox'+(_o('disabled',__l.disabled).value?' bell-checkbox-disabled':' bell-checkbox-enabled')+(_o('checked',__l.checked).value?' bell-checkbox-active':'')+(_o('isFocus',__l.isFocus).value?' bell-checkbox-focus':'')+(_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['children'])).value?' bell-checkbox-with-label':'')+(_o('indeterminate',__l.indeterminate).value?' bell-checkbox-indeterminate':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'label',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'span',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,events:{blur:_f('blur',"set('isFocus', false)",'blur','',_x.set,{args:function(__h,__o,__p){return ['isFocus',$3]}}),change:_f('change','onChange()','change','',_x.onChange),focus:_f('focus',"set('isFocus', true)",'focus','',_x.set,{args:function(__h,__o,__p){return ['isFocus',$2]}})},nativeProps:{checked:_o('checked',__l.checked).value,className:'bell-checkbox-input',disabled:_o('disabled',__l.disabled).value,type:'checkbox'},tag:'input',type:3},function(__i){_o('name',__l.name).value?_c(__i,'nativeProps',_o('name',__l.name).value,'name'):$0;});});_j('$slot_children',__j);});}})();

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
              value: FALSE,
          },
          disabled: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          checked: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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

  var template$i = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-checkbox-group'+(_o('vertical',__l.vertical).value?' bell-checkbox-vertical':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);});}})();

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
              value: FALSE,
          },
          vertical: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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

  var template$j = (function(){var $0=void 0,$2=!0,$5={className:'bell-switch-label'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-switch'+(_o('size',__l.size).value?' bell-switch-'+_w(_o('size',__l.size).value):'')+(_o('disabled',__l.disabled).value?' bell-switch-disabled':' bell-switch-enabled')+(_o('checked',__l.checked).value?' bell-switch-active':'')+(_o('loading',__l.loading).value?' bell-switch-loading':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;!_o('disabled',__l.disabled).value&&!_o('loading',__l.loading).value?_c(__i,'events',_f('click','handleClick()','click','',_x.handleClick),'click'):$0;},function(__j){_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['on'])).value||_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['off'])).value?__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){_o('checked',__l.checked).value?_j('$slot_on',__j):_j('$slot_off',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var Switch = Yox.define({
      template: template$j,
      model: 'checked',
      name: 'bell-Switch',
      propTypes: {
          size: {
              type: oneOf([RAW_DEFAULT, RAW_SMALL]),
              value: RAW_DEFAULT,
          },
          disabled: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          checked: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          loading: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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

  var template$k = (function(){var $0=void 0,$2=!0,$5={className:'bell-tooltip-arrow'},$6={className:'bell-tooltip-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-slider'+(_o('vertical',__l.vertical).value?' bell-slider-vertical':' bell-slider-horizontal')+(_o('disabled',__l.disabled).value?' bell-slider-disabled':' bell-slider-enabled')+(_o('block',__l.block).value?' bell-slider-block':'')+(_o('thumbIsDragging',__l.thumbIsDragging).value?' bell-slider-dragging':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('width',__l.width).value||_o('height',__l.height).value||_o('style',__l.style).value?_c(__i,'nativeProps',(_o('width',__l.width).value?'width:'+_w(_o('width',__l.width).value)+'px;':'')+(_o('height',__l.height).value?'height:'+_w(_o('height',__l.height).value)+'px;':'')+(_o('style',__l.style).value?_w(_o('style',__l.style).value):''),'style.cssText'):$0;},function(__j){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-slider-track'},tag:'div',type:3},function(__i){!_o('disabled',__l.disabled).value?_c(__i,'events',_g('click','trackClick.slider','click','','trackClick','slider'),'click'):$0;},function(__j){__j[__j.length]={context:_x,nativeProps:{className:'bell-slider-bar','style.cssText':_o('vertical',__l.vertical).value?'height: '+_w(_o('percent',__l.percent).value)+'%;':'width: '+_w(_o('percent',__l.percent).value)+'%;'},tag:'div',type:3};_o('showStops',__l.showStops).value?_l(_o('stops',__l.stops),function(__l,__m,__n){__j[__j.length]={context:_x,key:_p(__l).value,nativeProps:{className:'bell-slider-stop','style.cssText':_o('vertical',__l.vertical).value?'bottom: '+_w(_p(__l).value)+'%;':'left: '+_w(_p(__l).value)+'%;'},tag:'div',type:3};}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};__j[__j.length]=_a({context:_x,events:{mouseenter:_g('mouseenter','thumbMouseEnter.slider','mouseenter','','thumbMouseEnter','slider'),mouseleave:_g('mouseleave','thumbMouseLeave.slider','mouseleave','','thumbMouseLeave','slider')},lazy:{mouseenter:200,mouseleave:200},nativeProps:{className:'bell-slider-thumb','style.cssText':_o('vertical',__l.vertical).value?'bottom: '+_w(_o('percent',__l.percent).value)+'%;':'left: '+_w(_o('percent',__l.percent).value)+'%;'},tag:'div',type:3},function(__i){!_o('disabled',__l.disabled).value?_c(__i,'events',_g('mousedown','thumbMouseDown.slider','mousedown','','thumbMouseDown','slider'),'mousedown'):$0;});_o('showTooltip',__l.showTooltip).value?__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-tooltip-popup bell-tooltip-dark'+(_o('vertical',__l.vertical).value?' bell-tooltip-right':' bell-tooltip-top'),'style.cssText':_o('vertical',__l.vertical).value?'bottom: '+_w(_o('percent',__l.percent).value)+'%;':'left: '+_w(_o('percent',__l.percent).value)+'%;'},ref:'tooltip',tag:'div',type:3},$0,function(__j){__j[__j.length]={context:_x,isPure:$2,isStatic:$2,nativeProps:$5,tag:'div',type:3};__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){_o('formatTooltip',__l.formatTooltip).value?__j[__j.length]={isPure:$2,isText:$2,text:_w(_v(_u(_o('formatTooltip',__l.formatTooltip,$0,_y&&_y.formatTooltip||_z.formatTooltip).value,_x,[_o('value',__l.value).value])).value),type:1}:__j[__j.length]={isPure:$2,isText:$2,text:_w(_o('value',__l.value).value),type:1};});}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});});}})();

  var CLASS_VISIBLE$2 = 'bell-tooltip-visible';
  var CLASS_FADE$2 = 'bell-tooltip-fade';
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
              value: FALSE,
          },
          vertical: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          disabled: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          showStops: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          showTooltip: {
              type: RAW_BOOLEAN,
              value: FALSE,
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
              type: RAW_STRING,
          }
      },
      data: function () {
          return {
              thumbIsDragging: FALSE,
              mouseInThumb: FALSE,
              tooltipVisible: FALSE,
          };
      },
      watchers: {
          value: function () {
              var tooltip = this.$refs.tooltip;
              if (!tooltip) {
                  return;
              }
              this.updateTooltipPosition(tooltip);
          },
          tooltipVisible: function (visible, oldVisible) {
              var tooltip = this.$refs.tooltip;
              if (!tooltip) {
                  return;
              }
              if (visible) {
                  Yox.dom.addClass(tooltip, CLASS_VISIBLE$2);
                  this.updateTooltipPosition(tooltip);
                  setTimeout(function () {
                      Yox.dom.addClass(tooltip, CLASS_FADE$2);
                  }, 50);
              }
              else if (oldVisible) {
                  Yox.dom.removeClass(tooltip, CLASS_FADE$2);
                  onTransitionEnd(tooltip, function () {
                      Yox.dom.removeClass(tooltip, CLASS_VISIBLE$2);
                  });
              }
          }
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
      methods: {
          updateTooltipPosition: function (tooltip) {
              var offsetWidth = tooltip.offsetWidth, offsetHeight = tooltip.offsetHeight;
              if (!offsetWidth || !offsetHeight) {
                  return;
              }
              if (this.get('vertical')) {
                  tooltip.style.marginBottom = -0.5 * offsetHeight + 'px';
                  tooltip.style.marginLeft = '0px';
              }
              else {
                  tooltip.style.marginLeft = -0.5 * offsetWidth + 'px';
                  tooltip.style.marginBottom = '0px';
              }
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
                  tooltipVisible: TRUE
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
                  tooltipVisible: TRUE
              });
          })
              .on('trackClick.slider', function (event) {
              event.stop();
              updateValues();
              var originalEvent = event.originalEvent.originalEvent;
              updatePosition(originalEvent.pageX, originalEvent.pageY);
          });
      },
  });

  var template$l = (function(){var $0=void 0,$2=!0,$4=function(__h){return __h.length-1},$5={className:'bell-select-prefix'},$6={className:'bell-select-placeholder'},$7={className:'bell-select-values'},$8={className:'bell-select-value'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=__k[__k.length]=_b({context:_x,events:{outside:_f('outside','handleOutsideClick()','outside','',_x.handleOutsideClick,$0,$2)},isComponent:$2,props:{className:'bell-select'+(_o('status',__l.status).value?' bell-select-'+_w(_o('status',__l.status).value):'')+(_o('size',__l.size).value?' bell-select-'+_w(_o('size',__l.size).value):'')+(_o('block',__l.block).value?' bell-select-block':'')+(_o('disabled',__l.disabled).value?' bell-select-disabled':' bell-select-enabled')+(_o('clearable',__l.clearable).value?' bell-select-clearable':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):''),placement:_o('placement',__l.placement).value,trigger:'custom',visible:_o('visible',__l.visible).value},tag:'Dropdown',type:4},function(__i){_o('width',__l.width).value||_o('style',__l.style).value?_c(__i,'props',(_o('width',__l.width).value?'width: '+_w(_o('width',__l.width).value)+'px;':'')+(_o('style',__l.style).value?_w(_o('style',__l.style).value):''),'style'):$0;},{$slot_children:function(__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-select-button'+(_o('prefix',__l.prefix).value||_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['prefix'])).value?' bell-select-button-with-prefix':'')},tag:'div',type:3},function(__i){!_o('disabled',__l.disabled).value?_c(__i,'events',_f('click',"toggle('visible')",'click','',_x.toggle,{args:function(__h,__o,__p){return ['visible']}}),'click'):$0;},function(__j){_o('prefix',__l.prefix).value||_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['prefix'])).value?__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){_j('$slot_prefix',__j,function(){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-select-prefix-icon',name:_o('prefix',__l.prefix).value,size:'0'},tag:'Icon',type:4};});}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_n($4,'selectedOptions.length',$2).value===0?__j[__j.length]={context:_x,nativeProps:$6,tag:'div',text:_w(_o('placeholder',__l.placeholder).value),type:3}:_o('multiple',__l.multiple).value?__j[__j.length]=_a({context:_x,nativeProps:$7,tag:'div',type:3},$0,function(__j){_l(_o('selectedOptions',__l.selectedOptions),function(__l,__m,__n,index){__j[__j.length]=__k[__k.length]=_b({context:_x,events:{close:_f('close','handleRemoveOption($event, index)','close','',_x.handleRemoveOption,{args:function(__h,__o,__p){return [__o,index]}},$2)},isComponent:$2,props:{closable:$2,simple:$2},tag:'Tag',type:4},$0,{$slot_children:function(__j,__k){__j[__j.length]={isPure:$2,isText:$2,text:_w(_r('text',__l.text).value),type:1};}});});}):__j[__j.length]={context:_x,nativeProps:$8,tag:'div',text:_w(_n($4,'selectedOptions.0.text',$2).value),type:3};_o('clearable',__l.clearable).value&&_n($4,'selectedOptions.length',$2).value?__j[__j.length]=__k[__k.length]={context:_x,events:{'click.native':_f('click.native','handleClearClick()','click','native',_x.handleClearClick,$0,$0,$2)},isComponent:$2,props:{className:'bell-select-clear-icon',name:'close-circle-fill',size:'0'},tag:'Icon',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-select-arrow-icon',name:'arrow-down-s-line',size:'0'},tag:'Icon',type:4};});},$slot_overlay:function(__j,__k){_j('$slot_children',__j);}});}})();

  var template$m = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-tag'+(_o('type',__l.type).value?' bell-tag-'+_w(_o('type',__l.type).value):'')+(_o('size',__l.size).value?' bell-tag-'+_w(_o('size',__l.size).value):'')+(_o('checkable',__l.checkable).value?' bell-tag-checkable':'')+(_o('closable',__l.closable).value?' bell-tag-closable':'')+(_o('color',__l.color).value?' bell-tag-pure':'')+(_o('checked',__l.checked).value?' bell-tag-checked':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('color',__l.color).value||_o('style',__l.style).value?_c(__i,'nativeProps',(_o('color',__l.color).value?_o('checkable',__l.checkable).value?_o('checked',__l.checked).value?'background-color: '+_w(_o('color',__l.color).value)+';':'color: '+_w(_o('color',__l.color).value)+';':'background-color: '+_w(_o('color',__l.color).value)+';':'')+(_o('style',__l.style).value?_w(_o('style',__l.style).value):''),'style.cssText'):$0;_o('checkable',__l.checkable).value?_c(__i,'events',_f('click','toggleChecked()','click','',_x.toggleChecked),'click'):$0;},function(__j){_j('$slot_children',__j);_o('closable',__l.closable).value?__j[__j.length]=__k[__k.length]={context:_x,events:{'click.native':_g('click.native','close.tag','click','native','close','tag',$0,$2)},isComponent:$2,props:{className:'bell-tag-close-icon',name:'close-line',size:'0'},tag:'Icon',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var Tag = Yox.define({
      template: template$m,
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
              value: FALSE,
          },
          closable: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          checked: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          color: {
              type: RAW_STRING,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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

  var Select = Yox.define({
      template: template$l,
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
              value: FALSE,
          },
          placement: {
              type: oneOf(RAW_PLACEMENT_ARRAY),
              value: RAW_BOTTOM_START,
          },
          multiple: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          clearable: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          block: {
              type: RAW_BOOLEAN,
              value: FALSE,
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
              type: RAW_STRING,
          }
      },
      data: function () {
          return {
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
          }
      },
      methods: {
          handleClearClick: function (event) {
              // 停止冒泡，否则会展开下拉框
              event.stop();
              this.set('value', UNDEFINED);
              this.fireChange(UNDEFINED);
          },
          handleRemoveOption: function (event, index) {
              event.stop();
              this.removeAt('value', index);
              this.fireChange(this.get('value'));
          },
          handleOutsideClick: function (event) {
              event.stop();
              this.set('visible', FALSE);
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
                      this.updateSelectedOptions(value);
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
          updateSelectedOptions: function (value) {
              // 用一个空数组，通过事件流收集选中的 option
              var selectedOptions = [];
              this.fire({
                  type: 'change',
                  ns: 'select',
              }, {
                  value: value,
                  selectedOptions: selectedOptions,
              }, TRUE);
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
          Dropdown: Dropdown,
      },
      afterMount: function () {
          this.watch('value', function (value) {
              // 在这同步 selectedOptions，可兼顾内外的改动
              this.updateSelectedOptions(value);
          }, TRUE);
      }
  });

  var template$n = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-dropdown-item'+(_o('disabled',__l.disabled).value?' bell-dropdown-item-disabled':' bell-dropdown-item-enabled')+(_o('isSelected',__l.isSelected).value?' bell-dropdown-item-active':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;!_o('disabled',__l.disabled).value?_c(__i,'events',_f('click','handleClick()','click','',_x.handleClick),'click'):$0;},function(__j){_j('$slot_children',__j,function(){__j[__j.length]={isPure:$2,isText:$2,text:_w(_o('text',__l.text).value),type:1};});});}})();

  function isOptionSelected(values, value) {
      return Yox.is.array(values)
          ? Yox.array.has(values, value, FALSE)
          : values == value;
  }
  var Option = Yox.define({
      template: template$n,
      name: 'bell-Option',
      propTypes: {
          value: {
              type: [RAW_STRING, RAW_NUMBER],
          },
          disabled: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          text: {
              type: RAW_STRING,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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
      events: {
          change: {
              listener: function (_, data) {
                  var value = data.value, selectedOptions = data.selectedOptions;
                  var isSelected = isOptionSelected(value, this.get('value'));
                  this.set({
                      isSelected: isSelected,
                  });
                  if (isSelected) {
                      selectedOptions.push({
                          text: this.getText(),
                          value: this.get('value')
                      });
                  }
              },
              ns: 'select',
          },
      },
      methods: {
          handleClick: function () {
              this.fireEvent(TRUE);
          },
          getText: function () {
              return this.get('text') || Yox.dom.text(this.$el);
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
      },
      afterMount: function () {
          this.fireEvent(this.get('isSelected'));
      },
      beforeDestroy: function () {
          this.fireEvent(FALSE);
      }
  });

  var template$o = (function(){var $0=void 0,$5={className:'bell-select-group-title'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-select-option-group'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__j[__j.length]={context:_x,nativeProps:$5,tag:'div',text:_w(_o('label',__l.label).value),type:3};_j('$slot_children',__j);});}})();

  var OptionGroup = Yox.define({
      template: template$o,
      name: 'bell-OptionGroup',
      propTypes: {
          label: {
              type: RAW_STRING,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
  });

  var template$p = (function(){var $0=void 0,$2=!0,$4=function(__h){return __h.length-1},$5={className:'bell-pagination-total'},$6={className:'bell-pagination-separator'},$7={className:'bell-pagination-count'},$8={className:'bell-pagination-simple'},$9={className:'bell-pagination-ellipsis'},$10=function(__h){return __h.length-2},$11={className:'bell-pagination-list'},$12={className:'bell-pagination-jumper'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-pagination'+(_o('size',__l.size).value?' bell-pagination-'+_w(_o('size',__l.size).value):'')+(_o('hideOnSinglePage',__l.hideOnSinglePage).value&&_o('count',__l.count).value<=1?' bell-pagination-hidden':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__a.prevPage=function(__l,__m,__j,__k){_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['prev'])).value?__j[__j.length]=_a({context:_x,key:'prev',nativeProps:{className:'bell-pagination-custom-prev'+(_o('current',__l.current).value===1?' bell-pagination-custom-disabled':'')},tag:'div',type:3},function(__i){_o('current',__l.current).value>1?_c(__i,'events',_f('click',"decrease('current', 1, 1)",'click','',_x.decrease,{args:function(__h,__o,__p){return ['current',1,1]}}),'click'):$0;},function(__j){_j('$slot_prev',__j);}):__j[__j.length]=_a({context:_x,key:'prev',nativeProps:{className:'bell-pagination-item bell-pagination-prev'},tag:'button',type:3},function(__i){_o('current',__l.current).value>1?_c(__i,'events',_f('click',"decrease('current', 1, 1)",'click','',_x.decrease,{args:function(__h,__o,__p){return ['current',1,1]}}),'click'):_c(__i,'nativeProps',$2,'disabled');},function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-pagination-icon',name:'arrow-left-s-line',size:'0'},tag:'Icon',type:4};});};__a.nextPage=function(__l,__m,__j,__k){_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['next'])).value?__j[__j.length]=_a({context:_x,key:'next',nativeProps:{className:'bell-pagination-custom-next'+(_o('current',__l.current).value===_o('count',__l.count).value?' bell-pagination-custom-disabled':'')},tag:'div',type:3},function(__i){_o('current',__l.current).value<_o('count',__l.count).value?_c(__i,'events',_f('click',"increase('current', 1, count)",'click','',_x.increase,{args:function(__h,__o,__p){return ['current',1,_o('count',__l.count,__h).value]}}),'click'):$0;},function(__j){_j('$slot_next',__j);}):__j[__j.length]=_a({context:_x,key:'next',nativeProps:{className:'bell-pagination-item bell-pagination-next'},tag:'button',type:3},function(__i){_o('current',__l.current).value<_o('count',__l.count).value?_c(__i,'events',_f('click',"increase('current', 1, count)",'click','',_x.increase,{args:function(__h,__o,__p){return ['current',1,_o('count',__l.count,__h).value]}}),'click'):_c(__i,'nativeProps',$2,'disabled');},function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-pagination-icon',name:'arrow-right-s-line',size:'0'},tag:'Icon',type:4};});};_o('showTotal',__l.showTotal).value?__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'span',type:3},$0,function(__j){__j[__j.length]={isPure:$2,isText:$2,text:'共 '+_w(_o('total',__l.total).value)+' 条',type:1};}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_n($4,'pageSizeList.length',$2).value>0?__j[__j.length]=__k[__k.length]=_b({context:_x,events:{change:_f('change','pageSizeChange()','change','',_x.pageSizeChange,$0,$2)},isComponent:$2,model:_e(_o('pageSize',__l.pageSize)),props:{placement:_o('placement',__l.placement).value,size:_o('size',__l.size).value},tag:'Select',type:4},$0,{$slot_children:function(__j,__k){_l(_o('pageSizeList',__l.pageSizeList),function(__l,__m,__n){__j[__j.length]=__k[__k.length]=_b({context:_x,isComponent:$2,props:{text:_r('text',__l.text).value,value:_r('value',__l.value).value},tag:'Option',type:4},$0,{$slot_children:function(__j,__k){__j[__j.length]={isPure:$2,isText:$2,text:_w(_r('text',__l.text).value),type:1};}});});}}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_o('simple',__l.simple).value?__j[__j.length]=_a({context:_x,nativeProps:$8,tag:'div',type:3},$0,function(__j){_k('prevPage',__l,__m,__j,__k,__a.prevPage,__b&&__b.prevPage||__c.prevPage);__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,model:_e(_o('page',__l.page)),props:{className:'bell-pagination-simple-input',size:_o('size',__l.size).value},ref:'simpleInput',tag:'Input',type:4};__j[__j.length]={context:_x,isPure:$2,isStatic:$2,nativeProps:$6,tag:'span',text:'/',type:3};__j[__j.length]={context:_x,nativeProps:$7,tag:'span',text:_w(_o('count',__l.count).value),type:3};_k('nextPage',__l,__m,__j,__k,__a.nextPage,__b&&__b.nextPage||__c.nextPage);}):__j[__j.length]=_a({context:_x,nativeProps:$11,tag:'div',type:3},$0,function(__j){_k('prevPage',__l,__m,__j,__k,__a.prevPage,__b&&__b.prevPage||__c.prevPage);_l(_o('pageList',__l.pageList),function(__l,__m,__n){_r('prev',__l.prev).value?__j[__j.length]=_a({context:_x,events:{click:_f('click',"decrease('current', 5, 1)",'click','',_x.decrease,{args:function(__h,__o,__p){return ['current',5,1]}})},key:'prev-ellipsis',nativeProps:$9,tag:'div',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-pagination-icon',name:'arrow-left-s-fill',size:'0'},tag:'Icon',type:4};}):_r('next',__l.next).value?__j[__j.length]=_a({context:_x,events:{click:_f('click',"increase('current', 5, ../count)",'click','',_x.increase,{args:function(__h,__o,__p){return ['current',5,_s($10,'count',__h).value]}})},key:'next-ellipsis',nativeProps:$9,tag:'div',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-pagination-icon',name:'arrow-right-s-fill',size:'0'},tag:'Icon',type:4};}):__j[__j.length]=_a({context:_x,key:'page'+_w(_r('value',__l.value).value),nativeProps:{className:'bell-pagination-item'+(_r('active',__l.active).value?' bell-pagination-active':'')},tag:'button',text:_w(_r('value',__l.value).value),type:3},function(__i){!_r('active',__l.active).value?_c(__i,'events',_f('click',"set('current', this.value)",'click','',_x.set,{args:function(__h,__o,__p){return ['current',_r('value',__l.value,__h).value]}}),'click'):$0;});});_k('nextPage',__l,__m,__j,__k,__a.nextPage,__b&&__b.nextPage||__c.nextPage);});_o('showJumper',__l.showJumper).value?__j[__j.length]=_a({context:_x,nativeProps:$12,tag:'div',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,model:_e(_o('page',__l.page)),props:{className:'bell-pagination-jumper-input',placeholder:'请输入页码',size:_o('size',__l.size).value},ref:'jumperInput',tag:'Input',type:4};__j[__j.length]=__k[__k.length]=_b({context:_x,events:{click:_f('click','jump()','click','',_x.jump,$0,$2)},isComponent:$2,props:{type:'primary'},tag:'Button',type:4},$0,{$slot_children:function(__j,__k){__j[__j.length]={isPure:$2,isText:$2,text:'跳转',type:1};}});}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var Pagination = Yox.define({
      template: template$p,
      model: 'current',
      name: 'bell-Pagination',
      propTypes: {
          size: {
              type: oneOf([RAW_DEFAULT, RAW_SMALL]),
              value: RAW_DEFAULT,
          },
          simple: {
              type: RAW_BOOLEAN,
              value: FALSE,
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
              value: FALSE,
          },
          showTotal: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          hideOnSinglePage: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          placement: {
              type: oneOf([RAW_TOP, RAW_BOTTOM]),
              value: RAW_BOTTOM,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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
              this.fire({
                  type: 'change',
                  ns: 'pagination',
              }, {
                  current: current,
              });
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
                          this.set('current', page);
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
      },
      components: {
          Icon: Icon,
          Input: Input,
          Button: Button,
          Select: Select,
      }
  });

  var template$q = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,events:{click:_f('click','click()','click','',_x.click)},nativeProps:{className:'bell-upload'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);__j[__j.length]=_a({context:_x,ref:'form',tag:'form',type:3},$0,function(__j){__j[__j.length]={context:_x,events:{change:_f('change','onChange()','change','',_x.onChange)},nativeProps:{accept:_o('accept',__l.accept).value,multiple:_o('multiple',__l.multiple).value,type:'file'},ref:'input',tag:'input',type:3};});});}})();

  // 本地文件用负数，避免和数据库自增 id 冲突
  var guid = -1;
  var Upload = Yox.define({
      template: template$q,
      name: 'bell-Upload',
      propTypes: {
          multiple: {
              type: RAW_BOOLEAN,
              value: FALSE,
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
              type: RAW_STRING,
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

  var template$r = (function(){var $0=void 0,$2=!0,$5={className:'bell-alert-title'},$6={className:'bell-alert-content'},$7={className:'bell-alert-close'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-alert'+(_o('status',__l.status).value?' bell-alert-'+_w(_o('status',__l.status).value):'')+(_o('banner',__l.banner).value?' bell-alert-banner':'')+(_o('center',__l.center).value?' bell-alert-center':'')+(_o('showIcon',__l.showIcon).value?' bell-alert-with-icon':'')+(_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['title'])).value?' bell-alert-with-title':'')+(_o('closable',__l.closable).value||_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['close'])).value?' bell-alert-with-close':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_o('showIcon',__l.showIcon).value?__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-alert-status-icon',name:_o('status',__l.status).value===_o('RAW_TYPE_SUCCESS',__l.RAW_TYPE_SUCCESS).value?'checkbox-circle-fill':_o('status',__l.status).value===_o('RAW_TYPE_WARNING',__l.RAW_TYPE_WARNING).value?'error-warning-fill':_o('status',__l.status).value===_o('RAW_TYPE_ERROR',__l.RAW_TYPE_ERROR).value?'close-circle-fill':'information-fill',size:'0'},tag:'Icon',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['title'])).value?__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){_j('$slot_title',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['children'])).value?__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){_j('$slot_children',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_o('closable',__l.closable).value?__j[__j.length]=_a({context:_x,events:{click:_g('click','close.alert','click','','close','alert')},nativeProps:$7,ref:'close',tag:'div',type:3},$0,function(__j){_j('$slot_close',__j,function(){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-alert-close-icon',name:'close-line',size:'0'},tag:'Icon',type:4};});}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var Alert = Yox.define({
      template: template$r,
      name: 'bell-Alert',
      propTypes: {
          status: {
              type: oneOf(RAW_STATUS_ARRAY),
              value: RAW_TYPE_WARNING,
          },
          showIcon: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          banner: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          closable: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          center: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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

  var template$s = (function(){var $0=void 0,$2=!0,$5={className:'bell-article-title'},$6={className:'bell-article-sub-title'},$7={className:'bell-article-cover'},$8={className:'bell-article-content'},$9={className:'bell-article-signature'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-article'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_o('title',__l.title).value?__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){__j[__j.length]={isPure:$2,isText:$2,text:_w(_o('title',__l.title).value),type:1};_o('showLink',__l.showLink).value?__j[__j.length]=__k[__k.length]={context:_x,events:{'click.native':_g('click.native','link.article','click','native','link','article',$0,$2)},isComponent:$2,props:{className:'bell-article-link',name:'links-line',size:'0'},tag:'Icon',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_o('subTitle',__l.subTitle).value?__j[__j.length]={context:_x,nativeProps:$6,tag:'div',text:_w(_o('subTitle',__l.subTitle).value),type:3}:_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['subTitle'])).value?__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){_j('$slot_subTitle',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['cover'])).value?__j[__j.length]=_a({context:_x,nativeProps:$7,tag:'div',type:3},$0,function(__j){_j('$slot_cover',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};__j[__j.length]=_a({context:_x,nativeProps:$8,tag:'div',type:3},$0,function(__j){_j('$slot_content',__j);});_o('signature',__l.signature).value?__j[__j.length]={context:_x,nativeProps:$9,tag:'div',text:_w(_o('signature',__l.signature).value),type:3}:_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['signature'])).value?__j[__j.length]=_a({context:_x,nativeProps:$9,tag:'div',type:3},$0,function(__j){_j('$slot_signature',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var Article = Yox.define({
      template: template$s,
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
              type: RAW_STRING,
          }
      },
      components: {
          Icon: Icon,
      }
  });

  var template$t = (function(){var $0=void 0,$2=!0,$5={className:'bell-spin-text'},$6={className:'bell-spin-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-spin'+(_o('type',__l.type).value?' bell-spin-'+_w(_o('type',__l.type).value):'')+(_o('size',__l.size).value?' bell-spin-'+_w(_o('size',__l.size).value):'')+(_o('theme',__l.theme).value?' bell-spin-'+_w(_o('theme',__l.theme).value):'')+(_o('fixed',__l.fixed).value?' bell-spin-fixed':'')+(_o('legacy',__l.legacy).value?' bell-spin-legacy':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__j[__j.length]=_a({context:_x,nativeProps:$6,ref:'content',tag:'div',type:3},$0,function(__j){_j('$slot_children',__j,function(){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-spin-icon',name:_o('icon',__l.icon).value,size:'0',spin:$2},tag:'Icon',type:4};_o('text',__l.text).value?__j[__j.length]={context:_x,nativeProps:$5,tag:'div',text:_w(_o('text',__l.text).value),type:3}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});});});}})();

  var Spin = Yox.define({
      template: template$t,
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
              value: FALSE,
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
              type: RAW_STRING,
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

  var template$u = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,events:{click:_g('click','click.backTop','click','','click','backTop')},nativeProps:{className:'bell-backtop'+(_o('legacy',__l.legacy).value?' bell-backtop-legacy':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('bottom',__l.bottom).value||_o('right',__l.right).value||_o('style',__l.style).value?_c(__i,'nativeProps',(_o('bottom',__l.bottom).value?'bottom: '+_w(_o('bottom',__l.bottom).value)+'px;':'')+(_o('right',__l.right).value?'right: '+_w(_o('right',__l.right).value)+'px;':'')+(_o('style',__l.style).value?_w(_o('style',__l.style).value):''),'style.cssText'):$0;},function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{name:'arrow-up-line',size:'0'},tag:'Icon',type:4};});}})();

  var CLASS_VISIBLE$3 = 'bell-backtop-visible';
  var CLASS_FADE$3 = 'bell-backtop-fade';
  var BackTop = Yox.define({
      template: template$u,
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
              type: RAW_STRING,
          }
      },
      data: function () {
          return {
              visible: FALSE,
              legacy: !supportTransform,
          };
      },
      watchers: {
          visible: function (visible, oldVisible) {
              var me = this;
              var element = me.$el;
              if (visible) {
                  // 设置为 display block
                  Yox.dom.addClass(element, CLASS_VISIBLE$3);
                  setTimeout(function () {
                      Yox.dom.addClass(element, CLASS_FADE$3);
                  }, 50);
              }
              else if (oldVisible) {
                  Yox.dom.removeClass(element, CLASS_FADE$3);
                  onTransitionEnd(element, function () {
                      if (me.$el) {
                          Yox.dom.removeClass(element, CLASS_VISIBLE$3);
                      }
                  });
              }
          }
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

  var template$v = (function(){var $0=void 0,$2=!0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-avatar'+(_o('size',__l.size).value&&!_o('customSize',__l.customSize).value?' bell-avatar-'+_w(_o('size',__l.size).value):'')+(_o('shape',__l.shape).value?' bell-avatar-'+_w(_o('shape',__l.shape).value):'')+(_o('src',__l.src).value?' bell-avatar-image':'')+(_o('clickable',__l.clickable).value?' bell-avatar-clickable':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('backgroundColor',__l.backgroundColor).value||_o('customSize',__l.customSize).value||_o('style',__l.style).value?_c(__i,'nativeProps',(_o('backgroundColor',__l.backgroundColor).value?'background-color: '+_w(_o('backgroundColor',__l.backgroundColor).value)+';':'')+(_o('customSize',__l.customSize).value?'width: '+_w(_o('customSize',__l.customSize).value)+'px;height: '+_w(_o('customSize',__l.customSize).value)+'px;':'')+(_o('style',__l.style).value?_w(_o('style',__l.style).value):''),'style.cssText'):$0;_o('clickable',__l.clickable).value?_c(__i,'events',_g('click','click','click','','click'),'click'):$0;},function(__j){_o('url',__l.url).value||_o('src',__l.src).value?__j[__j.length]=_a({context:_x,events:{error:_g('error','error.avatar','error','','error','avatar')},nativeAttrs:{ondragstart:'return false'},tag:'img',type:3},function(__i){_o('url',__l.url).value?_c(__i,'nativeProps',_o('formatUrl',__l.formatUrl).value?_v(_u(_o('formatUrl',__l.formatUrl,$0,_y&&_y.formatUrl||_z.formatUrl).value,_x,[{height:_o('customSize',__l.customSize).value,responsive:$2,url:_o('url',__l.url).value,width:_o('customSize',__l.customSize).value}])).value:_o('url',__l.url).value,'src'):_c(__i,'nativeProps',_o('src',__l.src).value,'src');_o('srcSet',__l.srcSet).value?_c(__i,'nativeAttrs',_o('srcSet',__l.srcSet).value,'srcset'):$0;_o('alt',__l.alt).value?_c(__i,'nativeProps',_o('alt',__l.alt).value,'alt'):$0;}):_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['icon'])).value?_j('$slot_icon',__j):_o('text',__l.text).value?__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-avatar-text'},ref:'text',tag:'span',text:_w(_o('text',__l.text).value),type:3},function(__i){_o('color',__l.color).value||_o('fontSize',__l.fontSize).value?_c(__i,'nativeProps',(_o('color',__l.color).value?'color: '+_w(_o('color',__l.color).value)+';':'')+(_o('fontSize',__l.fontSize).value?'font-size: '+_w(_o('fontSize',__l.fontSize).value)+'px;':''),'style.cssText'):$0;}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var SPACE_HORIZONTAL = 8;
  var Avatar = Yox.define({
      template: template$v,
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
              type: RAW_STRING,
          }
      },
      computed: {
          customSize: function () {
              return toNumber(this.get('size'));
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

  var template$w = (function(){var $0=void 0,$2=!0,$5={className:'bell-badge-dot'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-badge'+(_o('status',__l.status).value?'-status':'')+(_o('status',__l.status).value?' bell-badge-status-'+_w(_o('status',__l.status).value):_o('type',__l.type).value?' bell-badge-'+_w(_o('type',__l.type).value):'')+(_o('ripple',__l.ripple).value?' bell-badge-ripple':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);!_o('hidden',__l.hidden).value?(_o('dot',__l.dot).value?__j[__j.length]={context:_x,isPure:$2,isStatic:$2,nativeProps:$5,tag:'span',type:3}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2},_o('text',__l.text).value||_v(_u(_o('isNumeric',__l.isNumeric,$0,_y&&_y.isNumeric||_z.isNumeric).value,_x,[_o('count',__l.count).value])).value?__j[__j.length]={context:_x,nativeProps:{className:'bell-badge-text'+(_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['children'])).value?' bell-badge-text-append':'')},ref:'append',tag:'span',text:_w(_o('text',__l.text).value||_v(_u(_o('formatText',__l.formatText,$0,_y&&_y.formatText||_z.formatText).value,_x,[_o('count',__l.count).value,_o('max',__l.max).value])).value),type:3}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var Badge = Yox.define({
      template: template$w,
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
              value: FALSE,
          },
          hidden: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          ripple: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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

  var template$x = (function(){var $0=void 0,$2=!0,$4=function(__h){return __h.length-1},$5={className:'bell-date-picker-header-button'},$6={className:'bell-date-picker-prev'},$7={className:'bell-date-picker-header-year'},$8={className:'bell-date-picker-header-month'},$9={className:'bell-date-picker-next'},$10={className:'bell-date-picker-header'},$11={className:'bell-date-picker-col'},$12={className:'bell-date-picker-weeks'},$13={className:'bell-date-picker-text'},$14={className:'bell-date-picker-row'},$15={className:'bell-date-picker-days'},$16={className:'bell-date-picker-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){_o('type',__l.type).value===_o('RAW_TYPE_DATE',__l.RAW_TYPE_DATE).value?__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-date-picker-date bell-date-picker-panel'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__j[__j.length]=_a({context:_x,nativeProps:$10,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,events:{click:_f('click','offset(-12)','click','',_x.offset,{args:function(__h,__o,__p){return [-12]}})},nativeProps:$5,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill',size:'0'},tag:'Icon',type:4};});__j[__j.length]=_a({context:_x,events:{click:_f('click','offset(-1)','click','',_x.offset,{args:function(__h,__o,__p){return [-1]}})},nativeProps:$5,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line',size:'0'},tag:'Icon',type:4};});});__j[__j.length]=_a({context:_x,tag:'span',type:3},function(__i){_o('canPickYear',__l.canPickYear).value?(_c(__i,'nativeProps','bell-date-picker-header-link','className'),_c(__i,'events',_f('click',"set('type', RAW_TYPE_YEAR)",'click','',_x.set,{args:function(__h,__o,__p){return ['type',_o('RAW_TYPE_YEAR',__l.RAW_TYPE_YEAR,__h).value]}}),'click')):$0;},function(__j){__j[__j.length]={context:_x,nativeProps:$7,tag:'span',text:_w(_n($4,'date.year',$2).value),type:3};__j[__j.length]={isPure:$2,isText:$2,text:'年',type:1};});__j[__j.length]=_a({context:_x,tag:'span',type:3},function(__i){_o('canPickMonth',__l.canPickMonth).value?(_c(__i,'nativeProps','bell-date-picker-header-link','className'),_c(__i,'events',_f('click',"set('type', RAW_TYPE_MONTH)",'click','',_x.set,{args:function(__h,__o,__p){return ['type',_o('RAW_TYPE_MONTH',__l.RAW_TYPE_MONTH,__h).value]}}),'click')):$0;},function(__j){__j[__j.length]={context:_x,nativeProps:$8,tag:'span',text:_w(_n($4,'date.month',$2).value),type:3};__j[__j.length]={isPure:$2,isText:$2,text:'月',type:1};});__j[__j.length]=_a({context:_x,nativeProps:$9,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,events:{click:_f('click','offset(1)','click','',_x.offset,{args:function(__h,__o,__p){return [1]}})},nativeProps:$5,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line',size:'0'},tag:'Icon',type:4};});__j[__j.length]=_a({context:_x,events:{click:_f('click','offset(12)','click','',_x.offset,{args:function(__h,__o,__p){return [12]}})},nativeProps:$5,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill',size:'0'},tag:'Icon',type:4};});});});__j[__j.length]=_a({context:_x,nativeProps:$16,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,nativeProps:$12,tag:'div',type:3},$0,function(__j){_l(_o('weeks',__l.weeks),function(__l,__m,__n){__j[__j.length]={context:_x,nativeProps:$11,tag:'div',text:_w(_p(__l).value),type:3};});});__j[__j.length]=_a({context:_x,nativeProps:$15,tag:'div',type:3},$0,function(__j){_l(_o('datasource',__l.datasource),function(__l,__m,__n){__j[__j.length]=_a({context:_x,nativeProps:$14,tag:'div',type:3},$0,function(__j){_l(_r('list',__l.list),function(__l,__m,__n){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-date-picker-col'+(_v(_u(_o('isEnabled',__l.isEnabled,$0,_y&&_y.isEnabled||_z.isEnabled).value,_x,[_p(__l).value])).value?' bell-date-picker-col-enabled'+(_v(_u(_o('isCurrentMonth',__l.isCurrentMonth,$0,_y&&_y.isCurrentMonth||_z.isCurrentMonth).value,_x,[_p(__l).value])).value?' bell-date-picker-col-current-month'+(_v(_u(_o('isChecked',__l.isChecked,$0,_y&&_y.isChecked||_z.isChecked).value,_x,[_p(__l).value])).value?' bell-date-picker-col-checked':''):' bell-date-picker-col-adjacent-month'):' bell-date-picker-col-disabled')},tag:'div',type:3},function(__i){_v(_u(_o('isEnabled',__l.isEnabled,$0,_y&&_y.isEnabled||_z.isEnabled).value,_x,[_p(__l).value])).value?_c(__i,'events',_f('click','click(this)','click','',_x.click,{args:function(__h,__o,__p){return [_p(__l,__h).value]}}),'click'):$0;},function(__j){__j[__j.length]={context:_x,nativeProps:$13,tag:'div',text:_w(_r('date',__l.date).value),type:3};});});});});});});}):_o('type',__l.type).value===_o('RAW_TYPE_YEAR',__l.RAW_TYPE_YEAR).value?__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{checkedYear:_n($4,'date.year',$2).value},tag:'DateYear',type:4}:_o('type',__l.type).value===_o('RAW_TYPE_MONTH',__l.RAW_TYPE_MONTH).value?__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{checkedMonth:_n($4,'date.month',$2).value,checkedYear:_n($4,'date.year',$2).value},tag:'DateMonth',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};}})();

  var template$y = (function(){var $0=void 0,$2=!0,$5={className:'bell-date-picker-header-button'},$6={className:'bell-date-picker-prev'},$7={className:'bell-date-picker-header-year'},$8={className:'bell-date-picker-next'},$9={className:'bell-date-picker-header'},$10={className:'bell-date-picker-text'},$11={className:'bell-date-picker-row'},$12={className:'bell-date-picker-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){_o('type',__l.type).value===_o('RAW_TYPE_MONTH',__l.RAW_TYPE_MONTH).value?__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-date-picker-month bell-date-picker-panel'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__j[__j.length]=_a({context:_x,nativeProps:$9,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,events:{click:_f('click',"decrease('year', 10)",'click','',_x.decrease,{args:function(__h,__o,__p){return ['year',10]}})},nativeProps:$5,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill',size:'0'},tag:'Icon',type:4};});__j[__j.length]=_a({context:_x,events:{click:_f('click',"decrease('year', 1)",'click','',_x.decrease,{args:function(__h,__o,__p){return ['year',1]}})},nativeProps:$5,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line',size:'0'},tag:'Icon',type:4};});});__j[__j.length]=_a({context:_x,tag:'span',type:3},function(__i){_o('canPickYear',__l.canPickYear).value?(_c(__i,'nativeProps','bell-date-picker-header-link','className'),_c(__i,'events',_f('click',"set('type', RAW_TYPE_YEAR)",'click','',_x.set,{args:function(__h,__o,__p){return ['type',_o('RAW_TYPE_YEAR',__l.RAW_TYPE_YEAR,__h).value]}}),'click')):$0;},function(__j){__j[__j.length]={context:_x,nativeProps:$7,tag:'span',text:_w(_o('year',__l.year).value),type:3};__j[__j.length]={isPure:$2,isText:$2,text:'年',type:1};});__j[__j.length]=_a({context:_x,nativeProps:$8,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,events:{click:_f('click',"increase('year', 1)",'click','',_x.increase,{args:function(__h,__o,__p){return ['year',1]}})},nativeProps:$5,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line',size:'0'},tag:'Icon',type:4};});__j[__j.length]=_a({context:_x,events:{click:_f('click',"increase('year', 10)",'click','',_x.increase,{args:function(__h,__o,__p){return ['year',10]}})},nativeProps:$5,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill',size:'0'},tag:'Icon',type:4};});});});__j[__j.length]=_a({context:_x,nativeProps:$12,tag:'div',type:3},$0,function(__j){_l(_o('datasource',__l.datasource),function(__l,__m,__n){__j[__j.length]=_a({context:_x,nativeProps:$11,tag:'div',type:3},$0,function(__j){_l(_p(__l),function(__l,__m,__n){__j[__j.length]=_a({context:_x,events:{click:_f('click','click(this)','click','',_x.click,{args:function(__h,__o,__p){return [_p(__l,__h).value]}})},nativeProps:{className:'bell-date-picker-col bell-date-picker-col-enabled'+(_v(_u(_o('isChecked',__l.isChecked,$0,_y&&_y.isChecked||_z.isChecked).value,_x,[_p(__l).value])).value?' bell-date-picker-col-checked':'')},tag:'div',type:3},$0,function(__j){__j[__j.length]={context:_x,nativeProps:$10,tag:'div',text:_w(_r('text',__l.text).value),type:3};});});});});});}):_o('type',__l.type).value===_o('RAW_TYPE_YEAR',__l.RAW_TYPE_YEAR).value?__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{checkedYear:_o('year',__l.year).value},tag:'DateYear',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};}})();

  var template$z = (function(){var $0=void 0,$2=!0,$4={className:'bell-date-picker-header-button bell-date-picker-prev'},$6={className:'bell-date-picker-header-year'},$7={className:'bell-date-picker-header-separator'},$8={className:'bell-date-picker-header-button bell-date-picker-next'},$9={className:'bell-date-picker-header'},$10={className:'bell-date-picker-text'},$11={className:'bell-date-picker-row'},$12={className:'bell-date-picker-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-date-picker-year bell-date-picker-panel'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__j[__j.length]=_a({context:_x,nativeProps:$9,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,events:{click:_f('click',"decrease('year', count)",'click','',_x.decrease,{args:function(__h,__o,__p){return ['year',_o('count',__l.count,__h).value]}})},nativeProps:$4,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line',size:'0'},tag:'Icon',type:4};});__j[__j.length]={context:_x,nativeProps:$6,tag:'span',text:_w(_o('year',__l.year).value),type:3};__j[__j.length]={isPure:$2,isText:$2,text:'年',type:1};__j[__j.length]={context:_x,isPure:$2,isStatic:$2,nativeProps:$7,tag:'span',text:'-',type:3};__j[__j.length]={context:_x,nativeProps:$6,tag:'span',text:_w(_o('year',__l.year).value+_o('count',__l.count).value-1),type:3};__j[__j.length]={isPure:$2,isText:$2,text:'年',type:1};__j[__j.length]=_a({context:_x,events:{click:_f('click',"increase('year', count)",'click','',_x.increase,{args:function(__h,__o,__p){return ['year',_o('count',__l.count,__h).value]}})},nativeProps:$8,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line',size:'0'},tag:'Icon',type:4};});});__j[__j.length]=_a({context:_x,nativeProps:$12,tag:'div',type:3},$0,function(__j){_l(_o('datasource',__l.datasource),function(__l,__m,__n){__j[__j.length]=_a({context:_x,nativeProps:$11,tag:'div',type:3},$0,function(__j){_l(_p(__l),function(__l,__m,__n){__j[__j.length]=_a({context:_x,events:{click:_f('click','click(this)','click','',_x.click,{args:function(__h,__o,__p){return [_p(__l,__h).value]}})},nativeProps:{className:'bell-date-picker-col bell-date-picker-col-enabled'+(_v(_u(_o('isChecked',__l.isChecked,$0,_y&&_y.isChecked||_z.isChecked).value,_x,[_p(__l).value])).value?' bell-date-picker-col-checked':'')},tag:'div',type:3},$0,function(__j){__j[__j.length]={context:_x,nativeProps:$10,tag:'div',text:_w(_p(__l).value),type:3};});});});});});});}})();

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
      template: template$z,
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
              type: RAW_STRING,
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
      template: template$y,
      propTypes: {
          defaultDate: {
              type: RAW_NUMBER,
          },
          checkedDate: {
              type: [RAW_DATE, RAW_NUMBER, RAW_ARRAY],
          },
          canPickYear: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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
      template: template$x,
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
              value: FALSE,
          },
          canPickMonth: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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

  var template$A = (function(){var $0=void 0,$2=!0,$4={className:'bell-date-picker-header-button'},$5={className:'bell-date-picker-prev'},$6=function(__h){return __h.length-1},$7={className:'bell-date-picker-header-year'},$8={className:'bell-date-picker-header-month'},$9={className:'bell-date-picker-next'},$10={className:'bell-date-picker-header'},$11={className:'bell-date-picker-col'},$12={className:'bell-date-picker-weeks'},$13={className:'bell-date-picker-text'},$14=function(__h){return __h.length-3},$15={className:'bell-date-picker-row'},$16={className:'bell-date-picker-days'},$17={className:'bell-date-picker-body'},$18={className:'bell-date-picker-panel'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-date-picker-daterange'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__j[__j.length]=_a({context:_x,nativeProps:$18,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,nativeProps:$10,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,events:{click:_f('click','offsetStart(-12)','click','',_x.offsetStart,{args:function(__h,__o,__p){return [-12]}})},nativeProps:$4,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill',size:'0'},tag:'Icon',type:4};});__j[__j.length]=_a({context:_x,events:{click:_f('click','offsetStart(-1)','click','',_x.offsetStart,{args:function(__h,__o,__p){return [-1]}})},nativeProps:$4,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line',size:'0'},tag:'Icon',type:4};});});__j[__j.length]={context:_x,nativeProps:$7,tag:'span',text:_w(_n($6,'startDate.year',$2).value),type:3};__j[__j.length]={isPure:$2,isText:$2,text:'年',type:1};__j[__j.length]={context:_x,nativeProps:$8,tag:'span',text:_w(_n($6,'startDate.month',$2).value),type:3};__j[__j.length]={isPure:$2,isText:$2,text:'月',type:1};_o('splitPanel',__l.splitPanel).value?__j[__j.length]=_a({context:_x,nativeProps:$9,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,events:{click:_f('click','offsetStart(1)','click','',_x.offsetStart,{args:function(__h,__o,__p){return [1]}})},nativeProps:$4,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line',size:'0'},tag:'Icon',type:4};});__j[__j.length]=_a({context:_x,events:{click:_f('click','offsetStart(12)','click','',_x.offsetStart,{args:function(__h,__o,__p){return [12]}})},nativeProps:$4,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill',size:'0'},tag:'Icon',type:4};});}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});__j[__j.length]=_a({context:_x,nativeProps:$17,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,nativeProps:$12,tag:'div',type:3},$0,function(__j){_l(_o('weeks',__l.weeks),function(__l,__m,__n){__j[__j.length]={context:_x,nativeProps:$11,tag:'div',text:_w(_p(__l).value),type:3};});});__j[__j.length]=_a({context:_x,events:{mouseleave:_f('mouseleave','leave()','mouseleave','',_x.leave)},nativeProps:$16,tag:'div',type:3},$0,function(__j){_l(_o('startDatasource',__l.startDatasource),function(__l,__m,__n){__j[__j.length]=_a({context:_x,nativeProps:$15,tag:'div',type:3},$0,function(__j){_l(_r('list',__l.list),function(__l,__m,__n){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-date-picker-col'+(_v(_u(_o('isEnabled',__l.isEnabled,$0,_y&&_y.isEnabled||_z.isEnabled).value,_x,[_p(__l).value])).value?' bell-date-picker-col-enabled'+(_v(_u(_o('isCurrentMonth',__l.isCurrentMonth,$0,_y&&_y.isCurrentMonth||_z.isCurrentMonth).value,_x,[_p(__l).value,_s($14,'startDate').value])).value?' bell-date-picker-col-current-month'+(_r('timestamp',__l.timestamp).value===_s($14,'computedCheckedStartTimestamp').value?' bell-date-picker-col-checked'+(_s($14,'computedCheckedEndTimestamp').value?' bell-date-picker-col-start':' bell-date-picker-col-range'):'')+(_r('timestamp',__l.timestamp).value===_s($14,'computedCheckedEndTimestamp').value?' bell-date-picker-col-checked bell-date-picker-col-end':'')+(_s($14,'computedCheckedStartTimestamp').value<_r('timestamp',__l.timestamp).value&&_s($14,'computedCheckedEndTimestamp').value>_r('timestamp',__l.timestamp).value?' bell-date-picker-col-range':''):' bell-date-picker-col-adjacent-month'):' bell-date-picker-col-disabled')},tag:'div',type:3},function(__i){_s($14,'pinDate').value?_c(__i,'events',_f('mouseenter','hover(this)','mouseenter','',_x.hover,{args:function(__h,__o,__p){return [_p(__l,__h).value]}}),'mouseenter'):$0;_v(_u(_o('isEnabled',__l.isEnabled,$0,_y&&_y.isEnabled||_z.isEnabled).value,_x,[_p(__l).value])).value?_c(__i,'events',_f('click','click(this)','click','',_x.click,{args:function(__h,__o,__p){return [_p(__l,__h).value]}}),'click'):$0;},function(__j){__j[__j.length]={context:_x,nativeProps:$13,tag:'div',text:_w(_r('date',__l.date).value),type:3};});});});});});});});__j[__j.length]=_a({context:_x,nativeProps:$18,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,nativeProps:$10,tag:'div',type:3},$0,function(__j){_o('splitPanel',__l.splitPanel).value?__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,events:{click:_f('click','offsetEnd(-12)','click','',_x.offsetEnd,{args:function(__h,__o,__p){return [-12]}})},nativeProps:$4,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill',size:'0'},tag:'Icon',type:4};});__j[__j.length]=_a({context:_x,events:{click:_f('click','offsetEnd(-1)','click','',_x.offsetEnd,{args:function(__h,__o,__p){return [-1]}})},nativeProps:$4,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line',size:'0'},tag:'Icon',type:4};});}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};__j[__j.length]={context:_x,nativeProps:$7,tag:'span',text:_w(_n($6,'endDate.year',$2).value),type:3};__j[__j.length]={isPure:$2,isText:$2,text:'年',type:1};__j[__j.length]={context:_x,nativeProps:$8,tag:'span',text:_w(_n($6,'endDate.month',$2).value),type:3};__j[__j.length]={isPure:$2,isText:$2,text:'月',type:1};__j[__j.length]=_a({context:_x,nativeProps:$9,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,events:{click:_f('click','offsetEnd(1)','click','',_x.offsetEnd,{args:function(__h,__o,__p){return [1]}})},nativeProps:$4,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line',size:'0'},tag:'Icon',type:4};});__j[__j.length]=_a({context:_x,events:{click:_f('click','offsetEnd(12)','click','',_x.offsetEnd,{args:function(__h,__o,__p){return [12]}})},nativeProps:$4,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill',size:'0'},tag:'Icon',type:4};});});});__j[__j.length]=_a({context:_x,nativeProps:$17,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,nativeProps:$12,tag:'div',type:3},$0,function(__j){_l(_o('weeks',__l.weeks),function(__l,__m,__n){__j[__j.length]={context:_x,nativeProps:$11,tag:'div',text:_w(_p(__l).value),type:3};});});__j[__j.length]=_a({context:_x,events:{mouseleave:_f('mouseleave','leave()','mouseleave','',_x.leave)},nativeProps:$16,tag:'div',type:3},$0,function(__j){_l(_o('endDatasource',__l.endDatasource),function(__l,__m,__n){__j[__j.length]=_a({context:_x,nativeProps:$15,tag:'div',type:3},$0,function(__j){_l(_r('list',__l.list),function(__l,__m,__n){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-date-picker-col'+(_v(_u(_o('isEnabled',__l.isEnabled,$0,_y&&_y.isEnabled||_z.isEnabled).value,_x,[_p(__l).value])).value?' bell-date-picker-col-enabled'+(_v(_u(_o('isCurrentMonth',__l.isCurrentMonth,$0,_y&&_y.isCurrentMonth||_z.isCurrentMonth).value,_x,[_p(__l).value,_s($14,'endDate').value])).value?' bell-date-picker-col-current-month'+(_r('timestamp',__l.timestamp).value===_s($14,'computedCheckedStartTimestamp').value?' bell-date-picker-col-checked'+(_s($14,'computedCheckedEndTimestamp').value?' bell-date-picker-col-start':' bell-date-picker-col-range'):'')+(_r('timestamp',__l.timestamp).value===_s($14,'computedCheckedEndTimestamp').value?' bell-date-picker-col-checked bell-date-picker-col-end':'')+(_s($14,'computedCheckedStartTimestamp').value<_r('timestamp',__l.timestamp).value&&_s($14,'computedCheckedEndTimestamp').value>_r('timestamp',__l.timestamp).value?' bell-date-picker-col-range':''):' bell-date-picker-col-adjacent-month'):' bell-date-picker-col-disabled')},tag:'div',type:3},function(__i){_s($14,'pinDate').value?_c(__i,'events',_f('mouseenter','hover(this)','mouseenter','',_x.hover,{args:function(__h,__o,__p){return [_p(__l,__h).value]}}),'mouseenter'):$0;_v(_u(_o('isEnabled',__l.isEnabled,$0,_y&&_y.isEnabled||_z.isEnabled).value,_x,[_p(__l).value])).value?_c(__i,'events',_f('click','click(this)','click','',_x.click,{args:function(__h,__o,__p){return [_p(__l,__h).value]}}),'click'):$0;},function(__j){__j[__j.length]={context:_x,nativeProps:$13,tag:'div',text:_w(_r('date',__l.date).value),type:3};});});});});});});});});}})();

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
      template: template$A,
      propTypes: {
          splitPanel: {
              type: RAW_BOOLEAN,
              value: FALSE,
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
              type: RAW_STRING,
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

  var template$B = (function(){var $0=void 0,$2=!0,$4=function(__h){return __h.length-1},$5={className:'bell-date-picker-header-button'},$6={className:'bell-date-picker-prev'},$7={className:'bell-date-picker-header-year'},$8={className:'bell-date-picker-header-month'},$9={className:'bell-date-picker-next'},$10={className:'bell-date-picker-header'},$11={className:'bell-date-picker-col'},$12={className:'bell-date-picker-weeks'},$13={className:'bell-date-picker-text'},$14=function(__h){return __h.length-3},$15=function(__h){return __h.length-2},$16={className:'bell-date-picker-row'},$17={className:'bell-date-picker-days'},$18={className:'bell-date-picker-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){_o('type',__l.type).value===_o('RAW_TYPE_WEEK',__l.RAW_TYPE_WEEK).value?__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-date-picker-week bell-date-picker-panel'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__j[__j.length]=_a({context:_x,nativeProps:$10,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,events:{click:_f('click','offset(-12)','click','',_x.offset,{args:function(__h,__o,__p){return [-12]}})},nativeProps:$5,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-fill',size:'0'},tag:'Icon',type:4};});__j[__j.length]=_a({context:_x,events:{click:_f('click','offset(-1)','click','',_x.offset,{args:function(__h,__o,__p){return [-1]}})},nativeProps:$5,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-left-s-line',size:'0'},tag:'Icon',type:4};});});__j[__j.length]=_a({context:_x,tag:'span',type:3},function(__i){_o('canPickYear',__l.canPickYear).value?(_c(__i,'nativeProps','bell-date-picker-header-link','className'),_c(__i,'events',_f('click',"set('type', RAW_TYPE_YEAR)",'click','',_x.set,{args:function(__h,__o,__p){return ['type',_o('RAW_TYPE_YEAR',__l.RAW_TYPE_YEAR,__h).value]}}),'click')):$0;},function(__j){__j[__j.length]={context:_x,nativeProps:$7,tag:'span',text:_w(_n($4,'date.year',$2).value),type:3};__j[__j.length]={isPure:$2,isText:$2,text:'年',type:1};});__j[__j.length]=_a({context:_x,tag:'span',type:3},function(__i){_o('canPickMonth',__l.canPickMonth).value?(_c(__i,'nativeProps','bell-date-picker-header-link','className'),_c(__i,'events',_f('click',"set('type', RAW_TYPE_MONTH)",'click','',_x.set,{args:function(__h,__o,__p){return ['type',_o('RAW_TYPE_MONTH',__l.RAW_TYPE_MONTH,__h).value]}}),'click')):$0;},function(__j){__j[__j.length]={context:_x,nativeProps:$8,tag:'span',text:_w(_n($4,'date.month',$2).value),type:3};__j[__j.length]={isPure:$2,isText:$2,text:'月',type:1};});__j[__j.length]=_a({context:_x,nativeProps:$9,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,events:{click:_f('click','offset(12)','click','',_x.offset,{args:function(__h,__o,__p){return [12]}})},nativeProps:$5,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-line',size:'0'},tag:'Icon',type:4};});__j[__j.length]=_a({context:_x,events:{click:_f('click','offset(1)','click','',_x.offset,{args:function(__h,__o,__p){return [1]}})},nativeProps:$5,tag:'span',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-header-icon',name:'arrow-right-s-fill',size:'0'},tag:'Icon',type:4};});});});__j[__j.length]=_a({context:_x,nativeProps:$18,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,nativeProps:$12,tag:'div',type:3},$0,function(__j){_l(_o('weeks',__l.weeks),function(__l,__m,__n){__j[__j.length]={context:_x,nativeProps:$11,tag:'div',text:_w(_p(__l).value),type:3};});});__j[__j.length]=_a({context:_x,nativeProps:$17,tag:'div',type:3},$0,function(__j){_l(_o('datasource',__l.datasource),function(__l,__m,__n,rowIndex){__j[__j.length]=_a({context:_x,nativeProps:$16,tag:'div',type:3},$0,function(__j){_l(_r('list',__l.list),function(__l,__m,__n,colIndex){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-date-picker-col'+(_v(_u(_o('isEnabled',__l.isEnabled,$0,_y&&_y.isEnabled||_z.isEnabled).value,_x,[_p(__l).value])).value?' bell-date-picker-col-enabled'+(_v(_u(_o('isCurrentMonth',__l.isCurrentMonth,$0,_y&&_y.isCurrentMonth||_z.isCurrentMonth).value,_x,[_p(__l).value])).value?' bell-date-picker-col-current-month':' bell-date-picker-col-adjacent-month'):' bell-date-picker-col-disabled')+(_s($14,'checkedTimestamp').value>=_n($15,'start.timestamp').value&&_s($14,'checkedTimestamp').value<_n($15,'end.timestamp').value?colIndex===0?' bell-date-picker-col-checked bell-date-picker-col-start':colIndex===__n-1?' bell-date-picker-col-checked bell-date-picker-col-end':' bell-date-picker-col-range':'')},tag:'div',type:3},function(__i){_v(_u(_o('isEnabled',__l.isEnabled,$0,_y&&_y.isEnabled||_z.isEnabled).value,_x,[_p(__l).value])).value?_c(__i,'events',_f('click','click(../rowIndex)','click','',_x.click,{args:function(__h,__o,__p){return [rowIndex]}}),'click'):$0;},function(__j){__j[__j.length]={context:_x,nativeProps:$13,tag:'div',text:_w(_r('date',__l.date).value),type:3};});});});});});});}):_o('type',__l.type).value===_o('RAW_TYPE_YEAR',__l.RAW_TYPE_YEAR).value?__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{checkedYear:_n($4,'date.year',$2).value},tag:'DateYear',type:4}:_o('type',__l.type).value===_o('RAW_TYPE_MONTH',__l.RAW_TYPE_MONTH).value?__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{checkedMonth:_n($4,'date.month',$2).value,checkedYear:_n($4,'date.year',$2).value},tag:'DateMonth',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};}})();

  var DateWeek = Yox.define({
      template: template$B,
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
              value: FALSE,
          },
          canPickMonth: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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

  var template$C = (function(){var $0=void 0,$2=!0,$4=function(__h){return __h.length-1},$5={className:'bell-date-picker-values'},$6={className:'bell-date-picker-separator'},$7={className:'bell-date-picker-value'},$8={className:'bell-date-picker-placeholder'},$9={className:'bell-date-picker-shortcut-item'},$10={className:'bell-date-picker-shortcut'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=__k[__k.length]=_b({context:_x,events:{outside:_f('outside','handleOutsideClick()','outside','',_x.handleOutsideClick,$0,$2)},isComponent:$2,props:{className:'bell-date-picker'+(_o('status',__l.status).value?' bell-date-picker-'+_w(_o('status',__l.status).value):'')+(_o('size',__l.size).value?' bell-date-picker-'+_w(_o('size',__l.size).value):'')+(_o('block',__l.block).value?' bell-date-picker-block':'')+(_o('disabled',__l.disabled).value?' bell-date-picker-disabled':' bell-date-picker-enabled')+(_o('clearable',__l.clearable).value?' bell-date-picker-clearable':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):''),placement:_o('placement',__l.placement).value,trigger:'custom',visible:_o('visible',__l.visible).value},tag:'Dropdown',type:4},function(__i){_o('width',__l.width).value||_o('style',__l.style).value?_c(__i,'props',(_o('width',__l.width).value?'width: '+_w(_o('width',__l.width).value)+'px;':'')+(_o('style',__l.style).value?_w(_o('style',__l.style).value):''),'style'):$0;},{$slot_children:function(__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-date-picker-button'},tag:'div',type:3},function(__i){!_o('disabled',__l.disabled).value?_c(__i,'events',_f('click',"toggle('visible')",'click','',_x.toggle,{args:function(__h,__o,__p){return ['visible']}}),'click'):$0;},function(__j){_n($4,'formatedValues.length',$2).value>0?_o('multiple',__l.multiple).value&&_o('type',__l.type).value!==_o('RAW_TYPE_DATE_RANGE',__l.RAW_TYPE_DATE_RANGE).value&&_o('type',__l.type).value!==_o('RAW_TYPE_WEEK',__l.RAW_TYPE_WEEK).value?__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){_l(_o('formatedValues',__l.formatedValues),function(__l,__m,__n,index){__j[__j.length]=__k[__k.length]=_b({context:_x,events:{close:_f('close','handleRemoveItem($event, index)','close','',_x.handleRemoveItem,{args:function(__h,__o,__p){return [__o,index]}},$2)},isComponent:$2,props:{closable:$2,simple:$2},tag:'Tag',type:4},$0,{$slot_children:function(__j,__k){__j[__j.length]={isPure:$2,isText:$2,text:_w(_p(__l).value),type:1};}});});}):__j[__j.length]=_a({context:_x,nativeProps:$7,tag:'div',type:3},$0,function(__j){__j[__j.length]={isPure:$2,isText:$2,text:_w(_n($4,'formatedValues.0',$2).value),type:1};_n($4,'formatedValues.1',$2).value?(__j[__j.length]={context:_x,isPure:$2,isStatic:$2,nativeProps:$6,tag:'span',text:'~',type:3},__j[__j.length]={isPure:$2,isText:$2,text:_w(_n($4,'formatedValues.1',$2).value),type:1}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};}):__j[__j.length]={context:_x,nativeProps:$8,tag:'div',text:_w(_o('placeholder',__l.placeholder).value),type:3};_o('clearable',__l.clearable).value&&_n($4,'formatedValues.length',$2).value?__j[__j.length]=__k[__k.length]={context:_x,events:{'click.native':_f('click.native','handleClearClick()','click','native',_x.handleClearClick,$0,$0,$2)},isComponent:$2,props:{className:'bell-date-picker-clear-icon',name:'close-circle-fill',size:'0'},tag:'Icon',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-date-picker-calendar-icon',name:'calendar-line',size:'0'},tag:'Icon',type:4};});},$slot_overlay:function(__j,__k){_o('shortcuts',__l.shortcuts).value&&_n($4,'shortcuts.length',$2).value>0?__j[__j.length]=_a({context:_x,nativeProps:$10,tag:'div',type:3},$0,function(__j){_l(_o('shortcuts',__l.shortcuts),function(__l,__m,__n){__j[__j.length]={context:_x,events:{click:_f('click','handleShortcutClick(this)','click','',_x.handleShortcutClick,{args:function(__h,__o,__p){return [_p(__l,__h).value]}})},nativeProps:$9,tag:'div',text:_w(_r('text',__l.text).value),type:3};});}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_o('type',__l.type).value===_o('RAW_TYPE_DATE',__l.RAW_TYPE_DATE).value?__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{canPickMonth:$2,canPickYear:$2,checkedDate:_o('value',__l.value).value,defaultDate:_n($4,'defaultSimpleDate.timestamp',$2).value,disabledDate:_o('disabledDate',__l.disabledDate).value},tag:'DateView',type:4}:_o('type',__l.type).value===_o('RAW_TYPE_DATE_RANGE',__l.RAW_TYPE_DATE_RANGE).value?__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{checkedEndDate:_n($4,'value.1',$2).value,checkedStartDate:_n($4,'value.0',$2).value,defaultEndDate:_n($4,'defaultSimpleDate.timestamp',$2).value,defaultStartDate:_n($4,'defaultSimpleDate.timestamp',$2).value,disabledDate:_o('disabledDate',__l.disabledDate).value,splitPanel:_o('splitPanel',__l.splitPanel).value},tag:'DateRange',type:4}:_o('type',__l.type).value===_o('RAW_TYPE_WEEK',__l.RAW_TYPE_WEEK).value?__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{canPickMonth:$2,canPickYear:$2,checkedDate:_n($4,'value.0',$2).value,defaultDate:_n($4,'defaultSimpleDate.timestamp',$2).value},tag:'DateWeek',type:4}:_o('type',__l.type).value===_o('RAW_TYPE_YEAR',__l.RAW_TYPE_YEAR).value?__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{checkedDate:_o('value',__l.value).value,defaultDate:_n($4,'defaultSimpleDate.timestamp',$2).value},tag:'DateYear',type:4}:_o('type',__l.type).value===_o('RAW_TYPE_MONTH',__l.RAW_TYPE_MONTH).value?__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{canPickYear:$2,checkedDate:_o('value',__l.value).value,defaultDate:_n($4,'defaultSimpleDate.timestamp',$2).value},tag:'DateMonth',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};}});}})();

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
      template: template$C,
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
              value: FALSE,
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
              value: FALSE,
          },
          multiple: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          block: {
              type: RAW_BOOLEAN,
              value: FALSE,
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
              value: FALSE,
          },
          width: {
              type: RAW_NUMERIC,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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
              visible: FALSE,
              formatText: props.format || defaultFormat[props.type || RAW_TYPE_DATE]
          };
      },
      components: {
          Tag: Tag,
          Dropdown: Dropdown,
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
          }
      },
      methods: {
          handleClearClick: function (event) {
              // 停止冒泡，否则会展开下拉框
              event.stop();
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
          handleOutsideClick: function (event) {
              event.stop();
              this.set('visible', FALSE);
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
  });

  var template$D = (function(){var $0=void 0,$2=!0,$4=function(__h){return __h.length-1},$5=function(){return 0},$6={className:'bell-time-picker-panel-column'},$7={className:'bell-time-picker-panel-columns'},$8={className:'bell-time-picker-panel-footer'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-time-picker-panel'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__j[__j.length]=_a({context:_x,nativeProps:$7,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,nativeProps:$6,ref:'hourList',tag:'ul',type:3},$0,function(__j){_l(_o('hourList',__l.hourList),function(__l,__m,__n,index){__j[__j.length]={context:_x,events:{click:_f('click','handleHourClick(index)','click','',_x.handleHourClick,{args:function(__h,__o,__p){return [index]}})},key:_p(__l).value,nativeProps:{className:'bell-time-picker-panel-row'+(index===_s($5,'hourIndex').value?' bell-time-picker-panel-row-active':'')},tag:'li',text:_w(_v(_u(_o('padStart',__l.padStart,$0,_y&&_y.padStart||_z.padStart).value,_x,[_p(__l).value])).value),type:3};});});__j[__j.length]=_a({context:_x,nativeProps:$6,ref:'minuteList',tag:'ul',type:3},$0,function(__j){_l(_o('minuteList',__l.minuteList),function(__l,__m,__n,index){__j[__j.length]={context:_x,events:{click:_f('click','handleMinuteClick(index)','click','',_x.handleMinuteClick,{args:function(__h,__o,__p){return [index]}})},key:_p(__l).value,nativeProps:{className:'bell-time-picker-panel-row'+(index===_s($5,'minuteIndex').value?' bell-time-picker-panel-row-active':'')},tag:'li',text:_w(_v(_u(_o('padStart',__l.padStart,$0,_y&&_y.padStart||_z.padStart).value,_x,[_p(__l).value])).value),type:3};});});_n($4,'secondList.length',$2).value>0?__j[__j.length]=_a({context:_x,nativeProps:$6,ref:'secondList',tag:'ul',type:3},$0,function(__j){_l(_o('secondList',__l.secondList),function(__l,__m,__n,index){__j[__j.length]={context:_x,events:{click:_f('click','handleSecondClick(index)','click','',_x.handleSecondClick,{args:function(__h,__o,__p){return [index]}})},key:_p(__l).value,nativeProps:{className:'bell-time-picker-panel-row'+(index===_s($5,'secondIndex').value?' bell-time-picker-panel-row-active':'')},tag:'li',text:_w(_v(_u(_o('padStart',__l.padStart,$0,_y&&_y.padStart||_z.padStart).value,_x,[_p(__l).value])).value),type:3};});}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});__j[__j.length]=_a({context:_x,nativeProps:$8,tag:'div',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]=_b({context:_x,events:{click:_f('click','handleSubmitClick()','click','',_x.handleSubmitClick,$0,$2)},isComponent:$2,props:{disabled:!_o('hasValue',__l.hasValue).value,size:'small',type:'primary'},tag:'Button',type:4},$0,{$slot_children:function(__j,__k){__j[__j.length]={isPure:$2,isText:$2,text:'确定',type:1};}});});});}})();

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
      template: template$D,
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
              type: RAW_STRING,
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

  var template$E = (function(){var $0=void 0,$2=!0,$5={className:'bell-time-picker-value'},$6={className:'bell-time-picker-placeholder'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=__k[__k.length]=_b({context:_x,events:{outside:_f('outside','handleOutsideClick()','outside','',_x.handleOutsideClick,$0,$2)},isComponent:$2,props:{className:'bell-time-picker'+(_o('status',__l.status).value?' bell-time-picker-'+_w(_o('status',__l.status).value):'')+(_o('size',__l.size).value?' bell-time-picker-'+_w(_o('size',__l.size).value):'')+(_o('block',__l.block).value?' bell-time-picker-block':'')+(_o('disabled',__l.disabled).value?' bell-time-picker-disabled':' bell-time-picker-enabled')+(_o('clearable',__l.clearable).value?' bell-time-picker-clearable':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):''),placement:_o('placement',__l.placement).value,style:(_o('componentWidth',__l.componentWidth).value?'width: '+_w(_o('componentWidth',__l.componentWidth).value)+'px;':'')+(_o('style',__l.style).value?_w(_o('style',__l.style).value):''),trigger:'custom',visible:_o('visible',__l.visible).value},tag:'Dropdown',type:4},$0,{$slot_children:function(__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-time-picker-button'},tag:'div',type:3},function(__i){!_o('disabled',__l.disabled).value?_c(__i,'events',_f('click',"toggle('visible')",'click','',_x.toggle,{args:function(__h,__o,__p){return ['visible']}}),'click'):$0;},function(__j){_o('text',__l.text).value?__j[__j.length]={context:_x,nativeProps:$5,tag:'div',text:_w(_o('text',__l.text).value),type:3}:__j[__j.length]={context:_x,nativeProps:$6,tag:'div',text:_w(_o('placeholder',__l.placeholder).value),type:3};_o('clearable',__l.clearable).value&&_o('hasValue',__l.hasValue).value?__j[__j.length]=__k[__k.length]={context:_x,events:{'click.native':_f('click.native','handleClearClick()','click','native',_x.handleClearClick,$0,$0,$2)},isComponent:$2,props:{className:'bell-time-picker-clear-icon',name:'close-circle-fill',size:'0'},tag:'Icon',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-time-picker-time-icon',name:'time-line',size:'0'},tag:'Icon',type:4};});},$slot_overlay:function(__j,__k){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{hourIndex:_o('visible',__l.visible).value?_o('hourIndex',__l.hourIndex).value:-1,hourList:_o('hourList',__l.hourList).value,minuteIndex:_o('visible',__l.visible).value?_o('minuteIndex',__l.minuteIndex).value:-1,minuteList:_o('minuteList',__l.minuteList).value,secondIndex:_o('visible',__l.visible).value?_o('secondIndex',__l.secondIndex).value:-1,secondList:_o('secondList',__l.secondList).value},tag:'TimePanel',type:4};}});}})();

  var DEFAULT_HOUR_STEP = 1;
  var DEFAULT_MINUTE_STEP = 1;
  var DEFAULT_SECOND_STEP = 1;
  var TimePicker = Yox.define({
      template: template$E,
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
              value: FALSE,
          },
          block: {
              type: RAW_BOOLEAN,
              value: FALSE,
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
              value: FALSE,
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
              type: RAW_STRING,
          }
      },
      data: function (options) {
          var props = toTimeProps(options.props && options.props.defaultValue, this.get('hourList'), this.get('minuteList'), this.get('secondList'));
          props.visible = FALSE;
          return props;
      },
      components: {
          Dropdown: Dropdown,
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
              return this.get('needSecond') ? 170 : 125;
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
          'change.timePanel': function (event, data) {
              event.stop();
              var hourIndex = data.hourIndex, minuteIndex = data.minuteIndex, secondIndex = data.secondIndex;
              this.set({
                  hourIndex: hourIndex,
                  minuteIndex: minuteIndex,
                  secondIndex: secondIndex,
                  text: formatTime(this.get('hourList')[hourIndex], this.get('minuteList')[minuteIndex], this.get('secondList')[secondIndex])
              });
          },
          'submit.timePanel': function (event, data) {
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
      },
      methods: {
          handleClearClick: function (event) {
              // 停止冒泡，否则会展开下拉框
              event.stop();
              var props = toTimeProps(UNDEFINED, this.get('hourList'), this.get('minuteList'), this.get('secondList'));
              this.set(props);
              this.fireChange(props.hour, props.minute, props.second);
          },
          handleOutsideClick: function (event) {
              event.stop();
              this.set({
                  visible: FALSE,
                  text: formatTime(this.get('hour'), this.get('minute'), this.get('second'))
              });
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

  var template$F = (function(){var $0=void 0,$2=!0,$4=function(__h){return __h.length-1},$5=function(){return 0},$6={className:'bell-image-picker-mask'},$7={className:'bell-image-picker-image-size'},$8={className:'bell-image-picker-wrapper'},$9={className:'bell-image-picker-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-image-picker'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__j[__j.length]=_a({context:_x,nativeProps:$8,tag:'div',type:3},$0,function(__j){_l(_o('imageList',__l.imageList),function(__l,__m,__n,index){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-image-picker-item bell-image-picker-card','style.cssText':'width: '+_w(_s($5,'customImageWidth').value)+'px;height: '+_w(_s($5,'customImageHeight').value)+'px'},tag:'div',type:3},$0,function(__j){_r('url',__l.url).value||_r('base64',__l.base64).value?__j[__j.length]=_a({context:_x,events:{click:_f('click','handleImageClick(this, index)','click','',_x.handleImageClick,{args:function(__h,__o,__p){return [_p(__l,__h).value,index]}})},nativeAttrs:{ondragstart:'return false'},nativeProps:{className:'bell-image-picker-image'},tag:'img',type:3},function(__i){_r('url',__l.url).value?_c(__i,'nativeProps',_s($5,'formatImageUrl').value?_v(_u(_s($5,'formatImageUrl').value,_x,[{height:_s($5,'customImageHeight').value,responsive:$2,url:_r('url',__l.url).value,width:_s($5,'customImageWidth').value}])).value:_r('url',__l.url).value,'src'):_r('base64',__l.base64).value?_c(__i,'nativeProps',_r('base64',__l.base64).value,'src'):$0;_r('name',__l.name).value?_c(__i,'nativeProps',_r('name',__l.name).value,'alt'):$0;}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_r('status',__l.status).value===_o('STATUS_UPLOADING',__l.STATUS_UPLOADING).value?__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]=_b({context:_x,isComponent:$2,props:{percent:_r('progress',__l.progress).value>0?_r('progress',__l.progress).value*100:0,size:'60'},tag:'Circle',type:4},$0,{$slot_children:function(__j,__k){__j[__j.length]={isPure:$2,isText:$2,text:'上传中',type:1};}});}):(_r('status',__l.status).value===_o('STATUS_ERROR',__l.STATUS_ERROR).value?__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]=_b({context:_x,isComponent:$2,props:{percent:_r('progress',__l.progress).value>0?_r('progress',__l.progress).value*100:0,size:'60',strokeColor:'#ff5500'},tag:'Circle',type:4},$0,{$slot_children:function(__j,__k){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{name:'close-line',size:'30',style:'color:#ff5500'},tag:'Icon',type:4};}});}):_r('size',__l.size).value>0?__j[__j.length]={context:_x,nativeProps:$7,tag:'div',text:_w(_v(_u(_o('formatImageSize',__l.formatImageSize,$0,_y&&_y.formatImageSize||_z.formatImageSize).value,_x,[_r('size',__l.size).value])).value),type:3}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2},!_o('readOnly',__l.readOnly).value?__j[__j.length]=__k[__k.length]={context:_x,events:{'click.native':_f('click.native','removeItem(index)','click','native',_x.removeItem,{args:function(__h,__o,__p){return [index]}},$0,$2)},isComponent:$2,props:{className:'bell-image-picker-remove-icon',name:'close-circle-fill'},tag:'Icon',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2});});});!_o('readOnly',__l.readOnly).value&&_n($4,'imageList.length',$2).value<_o('maxCount',__l.maxCount).value?__j[__j.length]=__k[__k.length]=_b({context:_x,isComponent:$2,props:{accept:_o('accept',__l.accept).value,beforeUpload:_o('beforeUploadImage',__l.beforeUploadImage).value,className:'bell-image-picker-item bell-image-picker-append',multiple:_o('restCount',__l.restCount).value>1,style:'width: '+_w(_o('customImageWidth',__l.customImageWidth).value)+'px;height: '+_w(_o('customImageHeight',__l.customImageHeight).value)+'px'},ref:'upload',tag:'Upload',type:4},$0,{$slot_children:function(__j,__k){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-image-picker-append-icon',name:'add-line'},tag:'Icon',type:4};}}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});_o('extra',__l.extra).value?__j[__j.length]={context:_x,nativeProps:$9,tag:'div',text:_w(_o('extra',__l.extra).value),type:3}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

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

  var ImagePicker = Yox.define({
      template: template$F,
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
              value: 'image/png,image/jpeg,image/jpg,image/gif'
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
              type: RAW_STRING,
          }
      },
      data: function () {
          var me = this;
          return {
              STATUS_UPLOADING: STATUS_UPLOADING,
              STATUS_ERROR: STATUS_ERROR,
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
          }
      },
      filters: {
          formatImageSize: formatImageSize,
      },
      components: {
          Icon: Icon,
          Upload: Upload,
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
          }
      }
  });

  var template$G = (function(){var $0=void 0,$2=!0,$5={className:'bell-tooltip-arrow'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-tooltip'+(_o('disabled',__l.disabled).value?' bell-tooltip-disabled':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-tooltip-el'},tag:'div',type:3},function(__i){!_o('disabled',__l.disabled).value?_o('mode',__l.mode).value==='click'?_c(__i,'events',_f('click','click()','click','',_x.click),'click'):(_c(__i,'events',_f('mouseenter','enter()','mouseenter','',_x.enter),'mouseenter'),_c(__i,'events',_f('mouseleave','leave()','mouseleave','',_x.leave),'mouseleave')):$0;},function(__j){_j('$slot_children',__j);});__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-tooltip-popup'+(_o('theme',__l.theme).value?' bell-tooltip-'+_w(_o('theme',__l.theme).value):'')+(_o('placement',__l.placement).value?' bell-tooltip-'+_w(_o('placement',__l.placement).value):'')},ref:'popup',tag:'div',type:3},$0,function(__j){__j[__j.length]={context:_x,isPure:$2,isStatic:$2,nativeProps:$5,tag:'div',type:3};__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-tooltip-content'},tag:'div',type:3},function(__i){_o('maxWidth',__l.maxWidth).value||_o('maxHeight',__l.maxHeight).value?_c(__i,'nativeProps',(_o('maxWidth',__l.maxWidth).value?'max-width: '+_w(_o('maxWidth',__l.maxWidth).value)+'px;':'')+(_o('maxHeight',__l.maxHeight).value?'max-height: '+_w(_o('maxHeight',__l.maxHeight).value)+'px;':''),'style.cssText'):$0;},function(__j){_j('$slot_content',__j,function(){__j[__j.length]={isPure:$2,isText:$2,text:_w(_o('content',__l.content).value),type:1};});});});});}})();

  var CLASS_VISIBLE$4 = 'bell-tooltip-visible';
  var CLASS_FADE$4 = 'bell-tooltip-fade';
  var Tooltip = Yox.define({
      template: template$G,
      name: 'bell-Tooltip',
      propTypes: {
          content: {
              type: RAW_STRING,
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
              value: FALSE,
          },
          delay: {
              type: RAW_NUMERIC,
              value: HOVER_DELAY,
          },
          mode: {
              type: oneOf([RAW_CLICK, RAW_HOVER]),
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
              type: RAW_STRING,
          }
      },
      data: function () {
          return {
              isVisible: FALSE,
              isHover: FALSE,
          };
      },
      watchers: {
          disabled: function () {
              this.set('isVisible', FALSE);
          },
          isVisible: function (visible, oldVisible) {
              var popup = this.$refs.popup;
              if (visible) {
                  Yox.dom.addClass(popup, CLASS_VISIBLE$4);
                  this.setPosition();
                  setTimeout(function () {
                      Yox.dom.addClass(popup, CLASS_FADE$4);
                  }, 50);
              }
              else if (oldVisible) {
                  Yox.dom.removeClass(popup, CLASS_FADE$4);
                  onTransitionEnd(popup, function () {
                      Yox.dom.removeClass(popup, CLASS_VISIBLE$4);
                  });
              }
          }
      },
      methods: {
          setPosition: function () {
              var me = this;
              var placement = me.get('placement');
              var offsetX = toNumber(me.get('offsetX'));
              var offsetY = toNumber(me.get('offsetY'));
              var popupElement = this.$refs.popup;
              var popupWidth = popupElement.offsetWidth;
              var popupHeight = popupElement.offsetHeight;
              var marginLeft = 0;
              var marginTop = 0;
              if (placement === RAW_BOTTOM) {
                  marginLeft = -(popupWidth / 2);
              }
              else if (placement === RAW_BOTTOM_START) {
                  marginLeft = 0;
              }
              else if (placement === RAW_BOTTOM_END) {
                  marginLeft = 0;
              }
              else if (placement === RAW_TOP) {
                  marginLeft = -(popupWidth / 2);
                  marginTop = -popupHeight;
              }
              else if (placement === RAW_TOP_START) {
                  marginTop = -popupHeight;
              }
              else if (placement === RAW_TOP_END) {
                  marginTop = -popupHeight;
              }
              else if (placement === RAW_LEFT) {
                  marginLeft = -popupWidth;
                  marginTop = -(popupHeight / 2);
              }
              else if (placement === RAW_LEFT_START) {
                  marginLeft = -popupWidth;
              }
              else if (placement === RAW_LEFT_END) {
                  marginLeft = -popupWidth;
              }
              else if (placement === RAW_RIGHT) {
                  marginTop = -(popupHeight / 2);
              }
              popupElement.style.marginLeft = (marginLeft + offsetX) + 'px';
              popupElement.style.marginTop = (marginTop + offsetY) + 'px';
          },
          enter: function () {
              var me = this;
              var delay = toNumber(me.get('delay'));
              if (delay > 0) {
                  me.set('isHover', TRUE);
                  me.timer = setTimeout(function () {
                      if (me.get('isHover')) {
                          me.set('isVisible', TRUE);
                      }
                  }, delay);
              }
              else {
                  me.set('isVisible', TRUE);
              }
          },
          leave: function () {
              this.set({
                  isVisible: FALSE,
                  isHover: FALSE,
              });
          },
          click: function () {
              this.toggle('isVisible');
          }
      },
      afterMount: function () {
          var me = this;
          if (me.get('mode') === RAW_CLICK) {
              var onClick_1 = function (event) {
                  if (!me.get('isVisible')) {
                      return;
                  }
                  var element = me.$el;
                  var target = event.originalEvent.target;
                  if (contains(element, target)) {
                      return;
                  }
                  me.set('isVisible', FALSE);
              };
              Yox.dom.on(DOCUMENT, RAW_CLICK, onClick_1);
              var destroy_1 = function (component) {
                  if (component === me) {
                      Yox.dom.off(DOCUMENT, RAW_CLICK, onClick_1);
                      Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy_1);
                  }
              };
              Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy_1);
          }
      },
      beforeDestroy: function () {
          var me = this;
          if (me.timer) {
              clearTimeout(me.timer);
          }
      }
  });

  var template$H = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-collapse'+(_o('simple',__l.simple).value?' bell-collapse-simple':' bell-collapse-bordered')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);});}})();

  var Collapse = Yox.define({
      template: template$H,
      name: 'bell-Collapse',
      propTypes: {
          value: {
              type: [RAW_STRING, RAW_NUMBER, RAW_ARRAY],
          },
          accordion: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          simple: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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

  var template$I = (function(){var $0=void 0,$2=!0,$5={className:'bell-collapse-extra'},$6={className:'bell-collapse-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-collapse-item'+(_o('opened',__l.opened).value?' bell-collapse-opened':'')+(_o('disabled',__l.disabled).value?' bell-collapse-disabled':' bell-collapse-enabled')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-collapse-header'},tag:'div',type:3},function(__i){!_o('disabled',__l.disabled).value?_c(__i,'events',_f('click','click()','click','',_x.click),'click'):$0;},function(__j){_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['extra'])).value?__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){_j('$slot_extra',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-collapse-arrow-icon',name:'arrow-right-s-line',size:'0'},tag:'Icon',type:4};__j[__j.length]={isPure:$2,isText:$2,text:_w(_o('title',__l.title).value),type:1};});__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){_j('$slot_children',__j);});});}})();

  var CollapseItem = Yox.define({
      template: template$I,
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
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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

  var template$J = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-card bell-card-shadow-'+_w(_o('shadow',__l.shadow).value)+(_o('simple',__l.simple).value?' bell-card-simple':' bell-card-bordered')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('width',__l.width).value||_o('style',__l.style).value?_c(__i,'nativeProps',(_o('width',__l.width).value?'width: '+_w(_o('width',__l.width).value)+'px;':'')+(_o('style',__l.style).value?_w(_o('style',__l.style).value):''),'style.cssText'):$0;},function(__j){_j('$slot_children',__j);});}})();

  var Card = Yox.define({
      template: template$J,
      name: 'bell-Card',
      propTypes: {
          simple: {
              type: RAW_BOOLEAN,
              value: FALSE,
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
              type: RAW_STRING,
          }
      },
  });

  var template$K = (function(){var $0=void 0,$2=!0,$4={className:'bell-card-header-title'},$6={className:'bell-card-header-sub-title'},$7={className:'bell-card-header-detail'},$8={className:'bell-card-header-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-card-header'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_avatar',__j);__j[__j.length]=_a({context:_x,nativeProps:$7,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,nativeProps:$4,tag:'div',type:3},$0,function(__j){_j('$slot_title',__j);});_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['subTitle'])).value?__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){_j('$slot_subTitle',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['extra'])).value?__j[__j.length]=_a({context:_x,nativeProps:$8,tag:'span',type:3},$0,function(__j){_j('$slot_extra',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var CardHeader = Yox.define({
      template: template$K,
      name: 'bell-CardHeader',
      propTypes: {
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          },
      },
  });

  var template$L = (function(){var $0=void 0,$2=!0,$5={className:'bell-card-media-title'},$6={className:'bell-card-media-sub-title'},$7={className:'bell-card-media-detail'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-card-media'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['title'])).value||_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['subTitle'])).value?__j[__j.length]=_a({context:_x,nativeProps:$7,tag:'div',type:3},$0,function(__j){_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['title'])).value?__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){_j('$slot_title',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['subTitle'])).value?__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){_j('$slot_subTitle',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var CardMedia = Yox.define({
      template: template$L,
      name: 'bell-CardMedia',
      propTypes: {
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
  });

  var template$M = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-card-body'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);});}})();

  var CardBody = Yox.define({
      template: template$M,
      name: 'bell-CardBody',
      propTypes: {
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
  });

  var template$N = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-card-footer'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);});}})();

  var CardFooter = Yox.define({
      template: template$N,
      name: 'bell-CardFooter',
      propTypes: {
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
  });

  var template$O = (function(){var $0=void 0,$2=!0,$5={className:'bell-page-header-title'},$6={className:'bell-page-header-tags'},$7={className:'bell-page-header-extra'},$8={className:'bell-page-header-header'},$9={className:'bell-page-header-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-page-header'+(_o('showBack',__l.showBack).value?' bell-page-header-with-back':'')+(_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['tags'])).value?' bell-page-header-with-tags':'')+(_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['extra'])).value?' bell-page-header-with-extra':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_breadcrumb',__j);__j[__j.length]=_a({context:_x,nativeProps:$8,tag:'div',type:3},$0,function(__j){_o('showBack',__l.showBack).value?__j[__j.length]=__k[__k.length]={context:_x,events:{'click.native':_g('click.native','back.pageHeader','click','native','back','pageHeader',$0,$2)},isComponent:$2,props:{className:'bell-page-header-back',name:'arrow-left-line',size:'0'},tag:'Icon',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};__j[__j.length]={context:_x,nativeProps:$5,tag:'div',text:_w(_o('title',__l.title).value),type:3};_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['tags'])).value?__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){_j('$slot_tags',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['extra'])).value?__j[__j.length]=_a({context:_x,nativeProps:$7,tag:'div',type:3},$0,function(__j){_j('$slot_extra',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['content'])).value?__j[__j.length]=_a({context:_x,nativeProps:$9,tag:'div',type:3},$0,function(__j){_j('$slot_content',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var PageHeader = Yox.define({
      template: template$O,
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
              type: RAW_STRING,
          }
      },
      components: {
          Icon: Icon,
      }
  });

  var template$P = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-layout'+(_o('vertical',__l.vertical).value?' bell-layout-vertical':' bell-layout-horizontal')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);});}})();

  var Layout = Yox.define({
      template: template$P,
      name: 'bell-Layout',
      propTypes: {
          vertical: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      }
  });

  var template$Q = (function(){var $0=void 0,$2=!0,$5={className:'bell-layout-header-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-layout-header'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['extra'])).value?__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){_j('$slot_extra',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_j('$slot_children',__j);});}})();

  var LayoutHeader = Yox.define({
      template: template$Q,
      name: 'bell-LayoutHeader',
      propTypes: {
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
  });

  var template$R = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-layout-content'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);});}})();

  var LayoutContent = Yox.define({
      template: template$R,
      name: 'bell-LayoutContent',
      propTypes: {
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
  });

  var template$S = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-layout-footer'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);});}})();

  var LayoutFooter = Yox.define({
      template: template$S,
      name: 'bell-LayoutFooter',
      propTypes: {
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
  });

  var template$T = (function(){var $0=void 0,$2=!0,$5={className:'bell-layout-sider-logo'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-layout-sider'+(_o('collapsed',__l.collapsed).value?' bell-layout-sider-collapsed':'')+(_o('showTrigger',__l.showTrigger).value?' bell-layout-sider-with-trigger':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('collapsed',__l.collapsed).value||_o('width',__l.width).value||_o('style',__l.style).value?_c(__i,'nativeProps',(_o('collapsed',__l.collapsed).value?'flex: 0 0 80px;\nwidth: 80px;\nmin-width: 80px;\nmax-width: 80px;':_o('width',__l.width).value?'flex: 0 0 '+_w(_o('width',__l.width).value)+'px;\nwidth: '+_w(_o('width',__l.width).value)+'px;\nmin-width: '+_w(_o('width',__l.width).value)+'px;\nmax-width: '+_w(_o('width',__l.width).value)+'px;':'')+(_o('style',__l.style).value?_w(_o('style',__l.style).value):''),'style.cssText'):$0;},function(__j){_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['logo'])).value?__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){_j('$slot_logo',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_j('$slot_children',__j);_o('showTrigger',__l.showTrigger).value?__j[__j.length]=_a({context:_x,events:{click:_f('click',"toggle('collapsed')",'click','',_x.toggle,{args:function(__h,__o,__p){return ['collapsed']}})},nativeProps:{className:'bell-layout-sider-trigger','style.cssText':_o('collapsed',__l.collapsed).value?'width: 80px;':_o('width',__l.width).value?'width: '+_w(_o('width',__l.width).value)+'px;':''},tag:'div',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-layout-sider-trigger-icon',name:'arrow-left-s-line',size:'0'},tag:'Icon',type:4};}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var LayoutSider = Yox.define({
      template: template$T,
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
              type: RAW_STRING,
          }
      },
      components: {
          Icon: Icon,
      }
  });

  var template$U = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeAttrs:{ondragstart:'return false'},nativeProps:{className:'bell-link'+(_o('type',__l.type).value?' bell-link-'+_w(_o('type',__l.type).value):'')+(_o('size',__l.size).value?' bell-link-'+_w(_o('size',__l.size).value):'')+(_o('underline',__l.underline).value?' bell-link-underline':'')+(_o('disabled',__l.disabled).value?' bell-link-disabled':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):''),href:_o('href',__l.href).value||'javascript:void(0)'},tag:'a',type:3},function(__i){_o('target',__l.target).value?_c(__i,'nativeProps',_o('target',__l.target).value,'target'):$0;_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;!_o('href',__l.href).value&&!_o('disabled',__l.disabled).value?_c(__i,'events',_g('click','click.link','click','','click','link'),'click'):$0;},function(__j){_j('$slot_children',__j);});}})();

  var Link = Yox.define({
      template: template$U,
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
              type: RAW_STRING,
          }
      }
  });

  var template$V = (function(){var $0=void 0,$2=!0,$4={className:'bell-list-empty'},$6={className:'bell-list-header'},$7={className:'bell-list-body'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-list'+(_o('size',__l.size).value?' bell-list-'+_w(_o('size',__l.size).value):'')+(_o('simple',__l.simple).value?' bell-list-simple':' bell-list-bordered')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__a.empty=function(__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:$4,tag:'div',type:3},$0,function(__j){_j('$slot_empty',__j,function(){__j[__j.length]=__k[__k.length]=_b({context:_x,isComponent:$2,tag:'Empty',type:4},$0,{$slot_children:function(__j,__k){__j[__j.length]={isPure:$2,isText:$2,text:'暂无数据',type:1};}});});});};_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['header'])).value?(__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){_j('$slot_header',__j);}),__j[__j.length]=_a({context:_x,nativeProps:$7,tag:'div',type:3},$0,function(__j){_j('$slot_children',__j,function(){_k('empty',__l,__m,__j,__k,__a.empty,__b&&__b.empty||__c.empty);});})):_j('$slot_children',__j,function(){_k('empty',__l,__m,__j,__k,__a.empty,__b&&__b.empty||__c.empty);});_o('loading',__l.loading).value?__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{fixed:$2,size:'large'},tag:'Spin',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var template$W = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-empty'+(_o('simple',__l.simple).value?' bell-empty-simple':'')+(_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['children'])).value?' bell-empty-with-content':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);});}})();

  var Empty = Yox.define({
      template: template$W,
      name: 'bell-Empty',
      propTypes: {
          simple: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      }
  });

  var List = Yox.define({
      template: template$V,
      name: 'bell-List',
      propTypes: {
          simple: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          loading: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          clickable: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          size: {
              type: oneOf(RAW_SIZE_ARRAY),
              value: RAW_DEFAULT,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
      components: {
          Spin: Spin,
          Empty: Empty,
      }
  });

  var template$X = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-list-item'+(_o('clickable',__l.clickable).value?' bell-list-item-clickable':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;_o('clickable',__l.clickable).value?_c(__i,'events',_g('click','click.listItem','click','','click','listItem'),'click'):$0;},function(__j){_j('$slot_children',__j);});}})();

  var ListItem = Yox.define({
      template: template$X,
      name: 'bell-ListItem',
      propTypes: {
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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

  var template$Y = (function(){var $0=void 0,$2=!0,$5={className:'bell-result-icon'},$6={className:'bell-result-title'},$7={className:'bell-result-sub-title'},$8={className:'bell-result-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-result'+(_o('status',__l.status).value?' bell-result-'+_w(_o('status',__l.status).value):'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){_j('$slot_icon',__j,function(){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-result-status-icon',name:_o('status',__l.status).value===_o('RAW_TYPE_SUCCESS',__l.RAW_TYPE_SUCCESS).value?'checkbox-circle-fill':_o('status',__l.status).value===_o('RAW_TYPE_WARNING',__l.RAW_TYPE_WARNING).value?'error-warning-fill':_o('status',__l.status).value===_o('RAW_TYPE_ERROR',__l.RAW_TYPE_ERROR).value?'close-circle-fill':'information-fill',size:'0'},tag:'Icon',type:4};});});_o('title',__l.title).value?__j[__j.length]={context:_x,nativeProps:$6,tag:'div',text:_w(_o('title',__l.title).value),type:3}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_o('subTitle',__l.subTitle).value?__j[__j.length]={context:_x,nativeProps:$7,tag:'div',text:_w(_o('subTitle',__l.subTitle).value),type:3}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['extra'])).value?__j[__j.length]=_a({context:_x,nativeProps:$8,tag:'div',type:3},$0,function(__j){_j('$slot_extra',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var Result = Yox.define({
      template: template$Y,
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
              type: RAW_STRING,
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

  var template$Z = (function(){var $0=void 0,$2=!0,$5={className:'bell-exception-title'},$6={className:'bell-exception-sub-title'},$7={className:'bell-exception-extra'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-exception'+(_o('status',__l.status).value?' bell-exception-'+_w(_o('status',__l.status).value):'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_o('title',__l.title).value?__j[__j.length]={context:_x,nativeProps:$5,tag:'div',text:_w(_o('title',__l.title).value),type:3}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_o('subTitle',__l.subTitle).value?__j[__j.length]={context:_x,nativeProps:$6,tag:'div',text:_w(_o('subTitle',__l.subTitle).value),type:3}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['extra'])).value?__j[__j.length]=_a({context:_x,nativeProps:$7,tag:'div',type:3},$0,function(__j){_j('$slot_extra',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var Exception = Yox.define({
      template: template$Z,
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
              type: RAW_STRING,
          }
      },
  });

  var template$_ = (function(){var $0=void 0,$2=!0,$5={className:'bell-divider-text'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-divider'+(_o('vertical',__l.vertical).value?' bell-divider-vertical':' bell-divider-horizontal')+(_o('dashed',__l.dashed).value?' bell-divider-dashed':'')+(_o('align',__l.align).value?' bell-divider-'+_w(_o('align',__l.align).value):'')+(_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['children'])).value?' bell-divider-with-text':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['children'])).value?__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){_j('$slot_children',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var Divider = Yox.define({
      template: template$_,
      name: 'bell-Divider',
      propTypes: {
          vertical: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          dashed: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          align: {
              type: oneOf([RAW_CENTER, RAW_LEFT, RAW_RIGHT]),
              value: RAW_CENTER,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
  });

  var template$$ = (function(){var $0=void 0,$2=!0,$5={viewBox:'0 0 100 100'},$6={className:'bell-circle-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-circle'+(_o('dashboard',__l.dashboard).value?' bell-circle-dashboard':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):''),'style.cssText':'width: '+_w(_o('size',__l.size).value)+'px;height: '+_w(_o('size',__l.size).value)+'px;'+(_o('style',__l.style).value?_w(_o('style',__l.style).value):'')},tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,isSvg:$2,nativeAttrs:$5,tag:'svg',type:3},$0,function(__j){__j[__j.length]={context:_x,isSvg:$2,nativeAttrs:{d:_o('path',__l.path).value,'fill-opacity':'0',stroke:_o('trailColor',__l.trailColor).value,'stroke-width':_o('trailWidth',__l.trailWidth).value,style:_o('trailStyle',__l.trailStyle).value},tag:'path',type:3};__j[__j.length]={context:_x,isSvg:$2,nativeAttrs:{d:_o('path',__l.path).value,'fill-opacity':'0',stroke:_o('strokeColor',__l.strokeColor).value,'stroke-linecap':_o('strokeLinecap',__l.strokeLinecap).value,'stroke-width':_o('strokeWidth',__l.strokeWidth).value,style:_o('pathStyle',__l.pathStyle).value},tag:'path',type:3};});_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['children'])).value?__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){_j('$slot_children',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var Circle = Yox.define({
      template: template$$,
      name: 'bell-Circle',
      propTypes: {
          dashboard: {
              type: RAW_BOOLEAN,
              value: FALSE,
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
              type: RAW_STRING,
          }
      },
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
  });

  var template$10 = (function(){var $0=void 0,$2=!0,$5={className:'bell-progress-text'},$6={className:'bell-progress-block'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-progress'+(_o('status',__l.status).value?' bell-progress-'+_w(_o('status',__l.status).value):'')+(_o('active',__l.active).value?' bell-progress-active':'')+(_o('inside',__l.inside).value?' bell-progress-inside':' bell-progress-outside')+(_o('vertical',__l.vertical).value?' bell-progress-vertical':' bell-progress-horizontal')+(!_o('inside',__l.inside).value&&!_o('vertical',__l.vertical).value&&_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['children'])).value?' bell-progress-with-text':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__a.text=function(__l,__m,__j,__k){_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['children'])).value?__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){_j('$slot_children',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};};__a.track=function(__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-progress-track'},tag:'div',type:3},function(__i){_o('vertical',__l.vertical).value?_c(__i,'nativeProps','width: '+_w(_o('thickness',__l.thickness).value)+'px;','style.cssText'):_c(__i,'nativeProps','height: '+_w(_o('thickness',__l.thickness).value)+'px;','style.cssText');},function(__j){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-progress-bar','style.cssText':_o('vertical',__l.vertical).value?'height: '+_w(_o('percent',__l.percent).value)+'%;\nwidth: '+_w(_o('thickness',__l.thickness).value)+'px;':'width: '+_w(_o('percent',__l.percent).value)+'%;\nheight: '+_w(_o('thickness',__l.thickness).value)+'px;\nline-height: '+_w(_o('thickness',__l.thickness).value)+'px;'},tag:'div',type:3},$0,function(__j){_o('inside',__l.inside).value?_k('text',__l,__m,__j,__k,__a.text,__b&&__b.text||__c.text):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});});};_o('inside',__l.inside).value?_k('track',__l,__m,__j,__k,__a.track,__b&&__b.track||__c.track):(!_o('vertical',__l.vertical).value&&_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['children'])).value?__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){_k('track',__l,__m,__j,__k,__a.track,__b&&__b.track||__c.track);}):_k('track',__l,__m,__j,__k,__a.track,__b&&__b.track||__c.track),_k('text',__l,__m,__j,__k,__a.text,__b&&__b.text||__c.text));});}})();

  var Progress = Yox.define({
      template: template$10,
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
              value: FALSE,
          },
          vertical: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          active: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
  });

  var template$11 = (function(){var $0=void 0,$2=!0,$4={type:'hidden'},$5=function(__h){return __h.length-1};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-rate'+(_o('type',__l.type).value?' bell-rate-'+_w(_o('type',__l.type).value):'')+(_o('readOnly',__l.readOnly).value?' bell-rate-dead':' bell-rate-live')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;!_o('readOnly',__l.readOnly).value?_c(__i,'events',_f('mouseleave','handleLeave()','mouseleave','',_x.handleLeave),'mouseleave'):$0;},function(__j){__j[__j.length]={context:_x,model:_e(_o('value',__l.value)),nativeProps:$4,tag:'input',type:3};_m(1,_o('count',__l.count).value,$2,function(__l,__m,__n){__j[__j.length]=__k[__k.length]=_b({context:_x,isComponent:$2,props:{className:'bell-rate-icon-full'+(_o('activeValue',__l.activeValue).value-__l>=0?' bell-rate-icon-active':''),name:_o('iconName',__l.iconName).value,size:_o('iconSize',__l.iconSize).value},tag:'Icon',type:4},function(__i){!_o('readOnly',__l.readOnly).value?(_c(__i,'events',_f('mousemove.native','handleMove($event, this)','mousemove','native',_x.handleMove,{args:function(__h,__o,__p){return [__o,__l]}},$0,$2),'mousemove.native'),_c(__i,'events',_f('click.native','handleClick($event, this)','click','native',_x.handleClick,{args:function(__h,__o,__p){return [__o,__l]}},$0,$2),'click.native')):$0;},{$slot_children:function(__j,__k){_o('half',__l.half).value?__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-rate-icon-half'+(_o('activeValue',__l.activeValue).value-__l>=-0.5?' bell-rate-icon-active':''),name:_o('iconName',__l.iconName).value,size:_o('iconSize',__l.iconSize).value},tag:'Icon',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};}});});_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['children'])).value||_o('texts',__l.texts).value?__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-rate-text','style.cssText':'line-height: '+_w(_o('iconSize',__l.iconSize).value)+'px'},tag:'span',type:3},$0,function(__j){_j('$slot_children',__j,function(){__j[__j.length]={isPure:$2,isText:$2,text:_w(_n($5,['texts',_o('activeValue',__l.activeValue).value-1].join('.'),$2).value),type:1};});}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var Rate = Yox.define({
      template: template$11,
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
              value: FALSE,
          },
          readOnly: {
              type: RAW_BOOLEAN,
              value: FALSE,
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
              type: RAW_STRING,
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

  var template$12 = (function(){var $0=void 0,$2=!0,$5=function(__h){return __h.length-2},$6={className:'bell-tabs-bar'},$7={className:'bell-tabs-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-tabs'+(_o('type',__l.type).value?' bell-tabs-'+_w(_o('type',__l.type).value):'')+(_o('size',__l.size).value?' bell-tabs-'+_w(_o('size',__l.size).value):'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-tabs-nav'+(_o('closable',__l.closable).value?' bell-tabs-nav-closable':'')},tag:'div',type:3},$0,function(__j){_l(_o('tabs',__l.tabs),function(__l,__m,__n){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-tabs-tab'+(_r('disabled',__l.disabled).value?' bell-tabs-tab-disabled':' bell-tabs-tab-enabled')+(_r('name',__l.name).value===_s($5,'value').value?' bell-tabs-tab-active':'')},tag:'div',type:3},function(__i){!_r('disabled',__l.disabled).value?_c(__i,'events',_f('click','handleClickTab(this)','click','',_x.handleClickTab,{args:function(__h,__o,__p){return [_p(__l,__h).value]}}),'click'):$0;},function(__j){_r('icon',__l.icon).value?__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-tabs-tab-icon',name:_r('icon',__l.icon).value},tag:'Icon',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};__j[__j.length]={isPure:$2,isText:$2,text:_w(_r('label',__l.label).value),type:1};_s($5,'closable').value?__j[__j.length]=__k[__k.length]={context:_x,events:{'click.native':_f('click.native','handleCloseTab(this)','click','native',_x.handleCloseTab,{args:function(__h,__o,__p){return [_p(__l,__h).value]}},$0,$2)},isComponent:$2,props:{className:'bell-tabs-tab-close-icon',name:'close-line',size:'0'},tag:'Icon',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});});});});__j[__j.length]=_a({context:_x,nativeProps:$7,tag:'div',type:3},$0,function(__j){_j('$slot_children',__j);});});}})();

  var Tabs = Yox.define({
      template: template$12,
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
              value: FALSE,
          },
          value: {
              type: RAW_STRING,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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

  var template$13 = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-tabs-panel'+(_o('isActive',__l.isActive).value?' bell-tabs-panel-active':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);});}})();

  var TabPanel = Yox.define({
      template: template$13,
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
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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

  var template$14 = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-dropdown-item'+(_o('divided',__l.divided).value?' bell-dropdown-item-divided':'')+(_o('active',__l.active).value?' bell-dropdown-item-active':'')+(_o('disabled',__l.disabled).value?' bell-dropdown-item-disabled':' bell-dropdown-item-enabled')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;!_o('disabled',__l.disabled).value?_c(__i,'events',_g('click','click.dropdownItem','click','','click','dropdownItem'),'click'):$0;},function(__j){_j('$slot_children',__j);});}})();

  var DropdownItem = Yox.define({
      template: template$14,
      name: 'bell-DropdownItem',
      propTypes: {
          name: {
              type: RAW_STRING,
          },
          divided: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          disabled: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          active: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
  });

  var template$15 = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-dropdown-menu'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);});}})();

  var DropdownMenu = Yox.define({
      template: template$15,
      name: 'bell-DropdownMenu',
      propTypes: {
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
  });

  var template$16 = (function(){var $0=void 0,$2=!0,$5={className:'bell-thumbnail-placeholder'},$6={className:'bell-thumbnail-action'},$7={className:'bell-thumbnail-mask'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-thumbnail'+(_o('simple',__l.simple).value?' bell-thumbnail-simple':' bell-thumbnail-bordered')+(_o('loading',__l.loading).value?' bell-thumbnail-loading':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):''),'style.cssText':'width:'+_w(_o('customWidth',__l.customWidth).value)+'px;height:'+_w(_o('customWidth',__l.customWidth).value)+'px;line-height:'+_w(_o('customHeight',__l.customHeight).value)+'px;'+(_o('style',__l.style).value?_w(_o('style',__l.style).value):'')},tag:'div',type:3},$0,function(__j){_o('url',__l.url).value||_o('src',__l.src).value?__j[__j.length]=_a({context:_x,events:{error:_g('error','error.thumbnail','error','','error','thumbnail')},nativeAttrs:{ondragstart:'return false'},nativeProps:{className:'bell-thumbnail-image'},tag:'img',type:3},function(__i){_o('url',__l.url).value?_c(__i,'nativeProps',_o('formatUrl',__l.formatUrl).value?_v(_u(_o('formatUrl',__l.formatUrl,$0,_y&&_y.formatUrl||_z.formatUrl).value,_x,[{height:_o('customHeight',__l.customHeight).value,responsive:$2,url:_o('url',__l.url).value,width:_o('customWidth',__l.customWidth).value}])).value:_o('url',__l.url).value,'src'):_c(__i,'nativeProps',_o('src',__l.src).value,'src');_o('srcSet',__l.srcSet).value?_c(__i,'nativeAttrs',_o('srcSet',__l.srcSet).value,'srcset'):$0;_o('alt',__l.alt).value?_c(__i,'nativeProps',_o('alt',__l.alt).value,'alt'):$0;}):__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){_j('$slot_placeholder',__j);});_o('showZoom',__l.showZoom).value||_o('showUpload',__l.showUpload).value||_o('showDownload',__l.showDownload).value||_o('showDelete',__l.showDelete).value?__j[__j.length]=_a({context:_x,nativeProps:$7,tag:'div',type:3},$0,function(__j){_o('showZoom',__l.showZoom).value?__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,events:{'click.native':_g('click.native','zoom.thumbnail','click','native','zoom','thumbnail',$0,$2)},isComponent:$2,props:{name:'zoom-in-line',size:'0'},tag:'Icon',type:4};}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_o('showUpload',__l.showUpload).value?__j[__j.length]=__k[__k.length]=_b({context:_x,isComponent:$2,props:{accept:_o('accept',__l.accept).value,beforeUpload:_o('beforeUpload',__l.beforeUpload).value,className:'bell-thumbnail-action',upload:_o('uploadImage',__l.uploadImage).value},tag:'Upload',type:4},$0,{$slot_children:function(__j,__k){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{name:'upload-2-line',size:'0'},tag:'Icon',type:4};}}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_o('showDownload',__l.showDownload).value?__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,events:{'click.native':_g('click.native','download.thumbnail','click','native','download','thumbnail',$0,$2)},isComponent:$2,props:{name:'download-2-line',size:'0'},tag:'Icon',type:4};}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_o('showDelete',__l.showDelete).value?__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,events:{'click.native':_g('click.native','delete.thumbnail','click','native','delete','thumbnail',$0,$2)},isComponent:$2,props:{name:'delete-bin-line',size:'0'},tag:'Icon',type:4};}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_o('loading',__l.loading).value?__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{fixed:$2,size:'large'},tag:'Spin',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var Thumbnail = Yox.define({
      template: template$16,
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
              value: 'image/png,image/jpeg,image/jpg,image/gif'
          },
          beforeUpload: {
              type: RAW_FUNCTION,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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

  var template$17 = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-timeline'+(_o('pending',__l.pending).value?' bell-timeline-pending':'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);});}})();

  var Timeline = Yox.define({
      template: template$17,
      name: 'bell-Timeline',
      propTypes: {
          pending: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
  });

  var template$18 = (function(){var $0=void 0,$5={className:'bell-timeline-custom'},$6={className:'bell-timeline-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-timeline-item'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['dot'])).value?__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){_j('$slot_dot',__j);}):__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-timeline-dot'},tag:'div',type:3},function(__i){_o('color',__l.color).value?_c(__i,'nativeProps','border-color: '+_w(_o('color',__l.color).value),'style.cssText'):$0;});__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){_j('$slot_children',__j);});});}})();

  var TimelineItem = Yox.define({
      template: template$18,
      name: 'bell-TimelineItem',
      propTypes: {
          color: {
              type: RAW_STRING,
          },
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
  });

  var template$19 = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-form'+(_o('inline',__l.inline).value?' bell-form-inline':'')+(_o('showColon',__l.showColon).value?' bell-form-colon':'')+(_o('labelAlign',__l.labelAlign).value?' bell-form-label-'+_w(_o('labelAlign',__l.labelAlign).value):'')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_j('$slot_children',__j);});}})();

  var Form = Yox.define({
      template: template$19,
      name: 'bell-Form',
      propTypes: {
          inline: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          showColon: {
              type: RAW_BOOLEAN,
              value: FALSE,
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
              type: RAW_STRING,
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

  var template$1a = (function(){var $0=void 0,$2=!0,$5={className:'bell-form-item-error'},$6={className:'bell-form-item-wrapper'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-form-item'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_o('label',__l.label).value||_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['label'])).value?(__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-form-item-label'+(_o('showRequiredMark',__l.showRequiredMark).value?' bell-form-item-label-required':'')},tag:'label',type:3},function(__i){_o('itemLabelWidth',__l.itemLabelWidth).value||_o('labelAlign',__l.labelAlign).value?_c(__i,'nativeProps',(_o('itemLabelWidth',__l.itemLabelWidth).value?'width: '+_w(_o('itemLabelWidth',__l.itemLabelWidth).value)+'px;':'')+(_o('labelAlign',__l.labelAlign).value?'vertical-align: '+_w(_o('labelAlign',__l.labelAlign).value)+';':''),'style.cssText'):$0;},function(__j){_j('$slot_label',__j,function(){__j[__j.length]={isPure:$2,isText:$2,text:_w(_o('label',__l.label).value),type:1};});}),__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){_j('$slot_children',__j);_o('showMessage',__l.showMessage).value&&_o('itemMessage',__l.itemMessage).value?__j[__j.length]={context:_x,nativeProps:$5,tag:'div',text:_w(_o('itemMessage',__l.itemMessage).value),type:3}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};})):__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-form-item-wrapper'},tag:'div',type:3},function(__i){_o('itemLabelWidth',__l.itemLabelWidth).value?_c(__i,'nativeProps','margin-left: '+_w(_o('itemLabelWidth',__l.itemLabelWidth).value)+'px;','style.cssText'):$0;},function(__j){_j('$slot_children',__j);_o('showMessage',__l.showMessage).value&&_o('itemMessage',__l.itemMessage).value?__j[__j.length]={context:_x,nativeProps:$5,tag:'div',text:_w(_o('itemMessage',__l.itemMessage).value),type:3}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});});}})();

  var FormItem = Yox.define({
      template: template$1a,
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
              value: FALSE,
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
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
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

  var template$1b = (function(){var $0=void 0,$2=!0,$5={className:'bell-dialog-header'},$6={className:'bell-dialog-body'},$7={className:'bell-dialog-footer'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-dialog'+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):'')},tag:'div',type:3},function(__i){_o('style',__l.style).value?_c(__i,'nativeProps',_o('style',__l.style).value,'style.cssText'):$0;},function(__j){_o('mask',__l.mask).value?__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-dialog-mask'},tag:'div',type:3},function(__i){_o('maskClosable',__l.maskClosable).value?_c(__i,'events',_f('click','close()','click','',_x.close),'click'):$0;}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-dialog-wrapper'},ref:'wrapper',tag:'div',type:3},function(__i){_o('width',__l.width).value||_o('height',__l.height).value?_c(__i,'nativeProps',(_o('width',__l.width).value?'width:'+_w(_o('width',__l.width).value)+'px;':'')+(_o('height',__l.height).value?'height:'+_w(_o('height',__l.height).value)+'px;':''),'style.cssText'):$0;},function(__j){_o('title',__l.title).value||_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['title'])).value?__j[__j.length]=_a({context:_x,nativeProps:$5,tag:'div',type:3},$0,function(__j){_j('$slot_title',__j,function(){__j[__j.length]={isPure:$2,isText:$2,text:_w(_o('title',__l.title).value),type:1};});}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['content'])).value?__j[__j.length]=_a({context:_x,nativeProps:$6,tag:'div',type:3},$0,function(__j){_j('$slot_content',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_v(_u(_o('hasSlot',__l.hasSlot,$0,_y&&_y.hasSlot||_z.hasSlot).value,_x,['footer'])).value?__j[__j.length]=_a({context:_x,nativeProps:$7,tag:'div',type:3},$0,function(__j){_j('$slot_footer',__j);}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_o('closable',__l.closable).value?__j[__j.length]=__k[__k.length]={context:_x,events:{'click.native':_f('click.native','close()','click','native',_x.close,$0,$0,$2)},isComponent:$2,props:{className:'bell-dialog-close',name:'close-line',size:'0'},tag:'Icon',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});});}})();

  var CLASS_VISIBLE$5 = 'bell-dialog-visible';
  var CLASS_FADE$5 = 'bell-dialog-fade';
  var Dialog = Yox.define({
      template: template$1b,
      model: 'visible',
      name: 'bell-Dialog',
      propTypes: {
          title: {
              type: RAW_STRING,
          },
          visible: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          mask: {
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
              type: RAW_STRING,
          }
      },
      watchers: {
          visible: function (visible, oldVisible) {
              var me = this;
              var element = me.$el;
              var wrapper = me.$refs.wrapper;
              if (visible) {
                  // 设置为 display block
                  Yox.dom.addClass(element, CLASS_VISIBLE$5);
                  me.fire({
                      type: 'open',
                      ns: 'dialog',
                  });
                  setTimeout(function () {
                      Yox.dom.addClass(element, CLASS_FADE$5);
                      onTransitionEnd(wrapper, function () {
                          if (me.$el) {
                              me.fire({
                                  type: 'opened',
                                  ns: 'dialog',
                              });
                          }
                      });
                  }, 50);
              }
              else if (oldVisible) {
                  Yox.dom.removeClass(element, CLASS_FADE$5);
                  me.fire({
                      type: 'close',
                      ns: 'dialog',
                  });
                  onTransitionEnd(wrapper, function () {
                      if (me.$el) {
                          Yox.dom.removeClass(element, CLASS_VISIBLE$5);
                          me.fire({
                              type: 'closed',
                              ns: 'dialog',
                          });
                      }
                  });
              }
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
      components: {
          Icon: Icon,
      }
  });

  var template$1c = (function(){var $0=void 0,$2=!0,$4=function(__h){return __h.length-1},$5=function(__h){return __h.length-2},$6={className:'bell-table-sorter'},$7={className:'bell-table-header'},$8={className:'bell-table-body'},$9={className:'bell-table-empty'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-table'+(_o('stripe',__l.stripe).value?' bell-table-stripe':'')+(_o('simple',__l.simple).value?' bell-table-simple':' bell-table-bordered')+(_o('className',__l.className).value?' '+_w(_o('className',__l.className).value):''),'style.cssText':(_o('width',__l.width).value?'width: '+_w(_o('width',__l.width).value)+'px; overflow-x: auto;':'')+(_o('height',__l.height).value?'height: '+_w(_o('height',__l.height).value)+'px; overflow-y: auto;':'')+(_o('style',__l.style).value?_w(_o('style',__l.style).value):'')},tag:'div',type:3},$0,function(__j){_o('colWidths',__l.colWidths).value?(__j[__j.length]=_a({context:_x,tag:'table',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,tag:'colgroup',type:3},$0,function(__j){_l(_o('columns',__l.columns),function(__l,__m,__n,index){__j[__j.length]={context:_x,nativeAttrs:{width:_n($5,['colWidths',index].join('.')).value},tag:'col',type:3};});});__j[__j.length]=_a({context:_x,nativeProps:$7,tag:'thead',type:3},$0,function(__j){__j[__j.length]=_a({context:_x,tag:'tr',type:3},$0,function(__j){_l(_o('columns',__l.columns),function(__l,__m,__n){__j[__j.length]=_a({context:_x,tag:'td',type:3},function(__i){_r('align',__l.align).value?_c(__i,'nativeProps','bell-table-'+_w(_r('align',__l.align).value),'className'):$0;},function(__j){_r('key',__l.key).value==='selection'?_n($4,'list.length',$2).value>0?__j[__j.length]=__k[__k.length]={context:_x,events:{change:_f('change','allCheckedChange()','change','',_x.allCheckedChange,$0,$2)},isComponent:$2,props:{checked:_s($5,'allChecked').value},tag:'Checkbox',type:4}:__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{disabled:$2},tag:'Checkbox',type:4}:(__j[__j.length]={isPure:$2,isText:$2,text:_w(_r('title',__l.title).value),type:1},_r('sortable',__l.sortable).value?__j[__j.length]=_a({context:_x,events:{click:_f('click','sortColumn(this.key, ../sortKey === this.key && ../sortOrder === SORT_ORDER_ASC ? SORT_ORDER_DESC : SORT_ORDER_ASC)','click','',_x.sortColumn,{args:function(__h,__o,__p){return [_r('key',__l.key,__h).value,_s($5,'sortKey',__h).value===_r('key',__l.key,__h).value&&_s($5,'sortOrder',__h).value===_o('SORT_ORDER_ASC',__l.SORT_ORDER_ASC,__h).value?_o('SORT_ORDER_DESC',__l.SORT_ORDER_DESC,__h).value:_o('SORT_ORDER_ASC',__l.SORT_ORDER_ASC,__h).value]}})},nativeProps:$6,tag:'div',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-table-sort-asc'+(_s($5,'sortKey').value===_r('key',__l.key).value&&_s($5,'sortOrder').value===_o('SORT_ORDER_ASC',__l.SORT_ORDER_ASC).value?' bell-table-sort-active':''),name:'arrow-up-s-fill',size:'0'},tag:'Icon',type:4};__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-table-sort-desc'+(_s($5,'sortKey').value===_r('key',__l.key).value&&_s($5,'sortOrder').value===_o('SORT_ORDER_DESC',__l.SORT_ORDER_DESC).value?' bell-table-sort-active':''),name:'arrow-down-s-fill',size:'0'},tag:'Icon',type:4};}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2});});});});});_n($4,'list.length',$2).value>0?__j[__j.length]=_a({context:_x,nativeProps:$8,tag:'tbody',type:3},$0,function(__j){_j('$slot_children',__j,function(){_l(_o('list',__l.list),function(__l,__m,__n,index){__j[__j.length]=_a({context:_x,tag:'tr',type:3},$0,function(__j){_l(_s($5,'columns'),function(__l,__m,__n){_r('actions',__l.actions).value&&_n($4,'actions.length').value?__j[__j.length]=_a({context:_x,tag:'td',type:3},function(__i){_r('align',__l.align).value?_c(__i,'nativeProps','bell-table-'+_w(_r('align',__l.align).value),'className'):$0;},function(__j){_l(_r('actions',__l.actions),function(__l,__m,__n){__j[__j.length]=__k[__k.length]=_b({context:_x,events:{click:_f('click','clickButton(this, list[index], index)','click','',_x.clickButton,{args:function(__h,__o,__p){return [_p(__l,__h).value,_n($4,['list',index].join('.'),$2,__h).value,index]}},$2)},isComponent:$2,props:{block:_r('block',__l.block).value,className:_r('className',__l.className).value,disabled:_r('disabled',__l.disabled).value,shape:_r('shape',__l.shape).value,size:_r('size',__l.size).value,type:_r('type',__l.type).value},tag:'Button',type:4},$0,{$slot_children:function(__j,__k){__j[__j.length]={isPure:$2,isText:$2,text:_w(_r('text',__l.text).value),type:1};}});});}):_n($4,['list',index,_r('key',__l.key).value].join('.'),$2).value!==$0?__j[__j.length]=_a({context:_x,tag:'td',type:3},function(__i){_r('align',__l.align).value?_c(__i,'nativeProps','bell-table-'+_w(_r('align',__l.align).value),'className'):$0;},function(__j){_r('dangerous',__l.dangerous).value?__j[__j.length]={context:_x,html:_w(_n($4,['list',index,_r('key',__l.key).value].join('.'),$2).value),tag:'div',type:3}:__j[__j.length]={isPure:$2,isText:$2,text:_w(_n($4,['list',index,_r('key',__l.key).value].join('.'),$2).value),type:1};}):_r('key',__l.key).value==='selection'?__j[__j.length]=_a({context:_x,tag:'td',type:3},function(__i){_r('align',__l.align).value?_c(__i,'nativeProps','bell-table-'+_w(_r('align',__l.align).value),'className'):$0;},function(__j){__j[__j.length]=__k[__k.length]={context:_x,events:{change:_f('change','rowCheckedChange($event, $data, index)','change','',_x.rowCheckedChange,{args:function(__h,__o,__p){return [__o,__p,index]}},$2)},isComponent:$2,props:{checked:_v(_u(_o('inArray',__l.inArray,$0,_y&&_y.inArray||_z.inArray).value,_x,[_o('selection',__l.selection).value,_n($4,['list',index,'key'].join('.'),$2).value])).value},tag:'Checkbox',type:4};}):__j[__j.length]=_a({context:_x,tag:'td',type:3},function(__i){_r('align',__l.align).value?_c(__i,'nativeProps','bell-table-'+_w(_r('align',__l.align).value),'className'):$0;},function(__j){__j[__j.length]={isPure:$2,isText:$2,text:_w(_r('key',__l.key).value)+' is not found.',type:1};});});});});});}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};}),_n($4,'list.length',$2).value===0?__j[__j.length]=_a({context:_x,nativeProps:$9,tag:'div',type:3},$0,function(__j){_j('$slot_empty',__j,function(){__j[__j.length]=__k[__k.length]=_b({context:_x,isComponent:$2,tag:'Empty',type:4},$0,{$slot_children:function(__j,__k){__j[__j.length]={isPure:$2,isText:$2,text:'暂无数据',type:1};}});});}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2}):__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var SORT_ORDER_ASC = 'asc';
  var SORT_ORDER_DESC = 'desc';
  var Table = Yox.define({
      template: template$1c,
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
              value: FALSE,
          },
          simple: {
              type: RAW_BOOLEAN,
              value: FALSE,
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
              type: RAW_STRING,
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
      }
  });

  var template$1d = (function(){var $0=void 0;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-loadingbar'+(_o('type',__l.type).value?' bell-loadingbar-'+_w(_o('type',__l.type).value):'')},tag:'div',type:3},$0,function(__j){__j[__j.length]={context:_x,nativeProps:{className:'bell-loadingbar-indicator','style.cssText':'width: '+_w(_o('percent',__l.percent).value)+'%;height: '+_w(_o('height',__l.height).value)+'px;'+(_o('color',__l.color).value?'color: '+_w(_o('color',__l.color).value)+';':'')},tag:'div',type:3};});}})();

  var LoadingBar = Yox.define({
      template: template$1d,
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

  var template$1e = (function(){var $0=void 0,$2=!0,$5={className:'bell-message-text'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-message'+(_o('status',__l.status).value?' bell-message-'+_w(_o('status',__l.status).value):'')+(_o('center',__l.center).value?' bell-message-center':'')+(_o('closable',__l.closable).value?' bell-message-with-close':'')},tag:'div',type:3},$0,function(__j){__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-message-icon',name:_o('status',__l.status).value===_o('RAW_TYPE_SUCCESS',__l.RAW_TYPE_SUCCESS).value?'checkbox-circle-fill':_o('status',__l.status).value===_o('RAW_TYPE_WARNING',__l.RAW_TYPE_WARNING).value?'error-warning-fill':_o('status',__l.status).value===_o('RAW_TYPE_ERROR',__l.RAW_TYPE_ERROR).value?'close-circle-fill':'information-fill',size:'0'},tag:'Icon',type:4};__j[__j.length]={context:_x,nativeProps:$5,tag:'span',text:_w(_o('content',__l.content).value),type:3};_o('closable',__l.closable).value?__j[__j.length]=__k[__k.length]={context:_x,events:{'click.native':_f('click.native','hide()','click','native',_x.hide,$0,$0,$2)},isComponent:$2,props:{className:'bell-message-close',name:'close-line',size:'0'},tag:'Icon',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var CLASS_VISIBLE$6 = 'bell-message-visible';
  var Message = Yox.define({
      template: template$1e,
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
              value: FALSE,
          },
          center: {
              type: RAW_BOOLEAN,
              value: FALSE,
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
              Yox.dom.addClass(element, CLASS_VISIBLE$6);
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
              Yox.dom.removeClass(element, CLASS_VISIBLE$6);
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

  var template$1f = (function(){var $0=void 0,$2=!0,$3=!1;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=__k[__k.length]=_b({context:_x,isComponent:$2,props:{className:'bell-modal',closable:_o('closable',__l.closable).value,mask:$2,maskClosable:$3,title:_o('title',__l.title).value,width:_o('width',__l.width).value},ref:'dialog',tag:'Dialog',type:4},$0,{$slot_content:function(__j,__k){__j[__j.length]={isPure:$2,isText:$2,text:_w(_o('content',__l.content).value),type:1};},$slot_footer:function(__j,__k){__j[__j.length]=__k[__k.length]=_b({context:_x,events:{click:_f('click','ok()','click','',_x.ok,$0,$2)},isComponent:$2,props:{type:_o('okType',__l.okType).value},tag:'Button',type:4},$0,{$slot_children:function(__j,__k){__j[__j.length]={isPure:$2,isText:$2,text:_w(_o('okText',__l.okText).value),type:1};}});}});}})();

  var Alert$1 = Yox.define({
      template: template$1f,
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
              value: FALSE,
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

  var template$1g = (function(){var $0=void 0,$2=!0,$3=!1;return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=__k[__k.length]=_b({context:_x,isComponent:$2,props:{className:'bell-modal',closable:_o('closable',__l.closable).value,mask:$2,maskClosable:$3,title:_o('title',__l.title).value,width:_o('width',__l.width).value},ref:'dialog',tag:'Dialog',type:4},$0,{$slot_content:function(__j,__k){__j[__j.length]={isPure:$2,isText:$2,text:_w(_o('content',__l.content).value),type:1};},$slot_footer:function(__j,__k){__j[__j.length]=__k[__k.length]=_b({context:_x,events:{click:_f('click','cancel()','click','',_x.cancel,$0,$2)},isComponent:$2,props:{type:_o('cancelType',__l.cancelType).value},tag:'Button',type:4},$0,{$slot_children:function(__j,__k){__j[__j.length]={isPure:$2,isText:$2,text:_w(_o('cancelText',__l.cancelText).value),type:1};}});__j[__j.length]=__k[__k.length]=_b({context:_x,events:{click:_f('click','ok()','click','',_x.ok,$0,$2)},isComponent:$2,props:{type:_o('okType',__l.okType).value},tag:'Button',type:4},$0,{$slot_children:function(__j,__k){__j[__j.length]={isPure:$2,isText:$2,text:_w(_o('okText',__l.okText).value),type:1};}});}});}})();

  var Confirm = Yox.define({
      template: template$1g,
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
              value: FALSE,
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

  var template$1h = (function(){var $0=void 0,$2=!0,$5={className:'bell-notification-title'},$6={className:'bell-notification-content'};return function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,__a,__b,__c,__d,__e,__f,__g,__l,__m,__j,__k){__j[__j.length]=_a({context:_x,nativeProps:{className:'bell-notification'+(_o('status',__l.status).value?' bell-notification-'+_w(_o('status',__l.status).value)+' bell-notification-with-icon':'')+(_o('title',__l.title).value?' bell-notification-with-title':'')+(_o('duration',__l.duration).value==0?' bell-notification-with-close':''),'style.cssText':'width: '+_w(_o('width',__l.width).value)+'px;right: '+_w(_o('right',__l.right).value)+'px;'},tag:'div',type:3},$0,function(__j){_o('status',__l.status).value?__j[__j.length]=__k[__k.length]={context:_x,isComponent:$2,props:{className:'bell-notification-icon',name:_o('status',__l.status).value===_o('RAW_TYPE_SUCCESS',__l.RAW_TYPE_SUCCESS).value?'checkbox-circle-fill':_o('status',__l.status).value===_o('RAW_TYPE_WARNING',__l.RAW_TYPE_WARNING).value?'error-warning-fill':_o('status',__l.status).value===_o('RAW_TYPE_ERROR',__l.RAW_TYPE_ERROR).value?'close-circle-fill':'information-fill',size:'0'},tag:'Icon',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_o('title',__l.title).value?__j[__j.length]={context:_x,nativeProps:$5,tag:'div',text:_w(_o('title',__l.title).value),type:3}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_o('content',__l.content).value?__j[__j.length]={context:_x,nativeProps:$6,tag:'div',text:_w(_o('content',__l.content).value),type:3}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};_o('duration',__l.duration).value==0?__j[__j.length]=__k[__k.length]={context:_x,events:{'click.native':_f('click.native','hide()','click','native',_x.hide,$0,$0,$2)},isComponent:$2,props:{className:'bell-notification-close',name:'close-line',size:'0'},tag:'Icon',type:4}:__j[__j.length]={isComment:$2,isPure:$2,text:'',type:2};});}})();

  var CLASS_VISIBLE$7 = 'bell-notification-visible';
  var Notification = Yox.define({
      template: template$1h,
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
              Yox.dom.addClass(me.$el, CLASS_VISIBLE$7);
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
              Yox.dom.removeClass(me.$el, CLASS_VISIBLE$7);
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
      var instance = new Yox(Yox.object.extend({
          el: '#bell-notification-wrapper',
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

  var component = {
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
      Switch: Switch,
      Slider: Slider,
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
      Tag: Tag,
      Rate: Rate,
      Tabs: Tabs,
      TabPanel: TabPanel,
      Dropdown: Dropdown,
      DropdownItem: DropdownItem,
      DropdownMenu: DropdownMenu,
      Thumbnail: Thumbnail,
      Timeline: Timeline,
      TimelineItem: TimelineItem,
      Form: Form,
      FormItem: FormItem,
      Dialog: Dialog,
      Table: Table,
  };
  /**
   * 版本
   */
  var version = "0.19.0";
  /**
   * 安装插件
   */
  function install(Yox) {
      var loadingbarElement = Yox.dom.createElement('div');
      Yox.dom.prop(loadingbarElement, 'id', 'bell-loadingbar-wrapper');
      Yox.dom.append(BODY, loadingbarElement);
      var notificationElement = Yox.dom.createElement('div');
      Yox.dom.prop(notificationElement, 'id', 'bell-notification-wrapper');
      Yox.dom.append(BODY, notificationElement);
      Yox.component(component);
  }

  exports.install = install;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bell-ui-rollup.js.map
