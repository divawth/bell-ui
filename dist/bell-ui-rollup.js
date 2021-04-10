/**
 * bell-ui.js v0.15.2
 * (c) 2018-2021 
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('yox')) :
  typeof define === 'function' && define.amd ? define(['exports', 'yox'], factory) :
  (global = global || self, factory(global.Bell = {}, global.Yox));
}(this, (function (exports, Yox) { 'use strict';

  Yox = Yox && Object.prototype.hasOwnProperty.call(Yox, 'default') ? Yox['default'] : Yox;

  function template(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-menu',_p(_v0,['mode'],$3).value?[' bell-menu-',_p(_v0,['mode'],$3).value].join(''):$1,!_p(_v0,['inner'],$3).value&&_p(_v0,['theme'],$3).value?[' bell-menu-',_p(_v0,['theme'],$3).value].join(''):$1,_p(_v0,['collapsed'],$3).value?' bell-menu-collapsed':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);});}

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
          if (!Yox.array.has(values, value, FALSE)) {
              Yox.logger.warn(key + " \u671F\u671B\u662F " + values.join(',') + " \u4E2D\u7684\u503C\uFF0C\u5B9E\u9645\u4F20\u503C [" + value + "]\u3002", componentName);
          }
          return TRUE;
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

  function template$1(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-menu-item',_p(_v0,['isActive'],$3).value?' bell-menu-item-active':$1,_p(_v0,['disabled'],$3).value?' bell-menu-item-disabled':' bell-menu-item-enabled',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;!_p(_v0,['disabled'],$3).value?_d(_4,'events',_h('click','click()','click','','click'),'click'):$1;},function(_5){_l('$slot_children',_5);});}

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

  function template$2(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-menu-group',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['title'],$3).value),nativeProps:{className:'bell-menu-group-title'}});_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['children']).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Menu',props:{inner:$3,mode:_p(_v0,['mode'],$3).value==='inline'?'inline':'vertical'},isComponent:$3},$1,{$slot_children:function(_5,_6){_l('$slot_children',_5);}}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

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

  function template$3(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'i',nativeProps:{className:['bell-icon',_p(_v0,['name'],$3).value?[' bell-icon-',_p(_v0,['name'],$3).value].join(''):$1,_p(_v0,['spin'],$3).value?' bell-icon-spin':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['size'],$3).value>0||_p(_v0,['color'],$3).value||_p(_v0,['style'],$3).value?_d(_4,'nativeProps',[_p(_v0,['size'],$3).value>0?['font-size: ',_p(_v0,['size'],$3).value,'px;'].join(''):$1,_p(_v0,['color'],$3).value?['color: ',_p(_v0,['color'],$3).value,';'].join(''):$1,_p(_v0,['style'],$3).value?_p(_v0,['style'],$3).value:$1].join(''),'style.cssText'):$1;},function(_5){_l('$slot_children',_5);});}

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
              value: 14,
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

  function template$4(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-dropdown bell-dropdown-',_p(_v0,['placement'],$3).value,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-dropdown-trigger'}},function(_4){_p(_v0,['trigger'],$3).value===_p(_v0,['RAW_CLICK'],$3).value?_d(_4,'events',_h('click','toggleVisible()','click','','toggleVisible'),'click'):_p(_v0,['trigger'],$3).value===_p(_v0,['RAW_HOVER'],$3).value?[_d(_4,'events',_h('mouseenter','enter()','mouseenter','','enter'),'mouseenter'),_d(_4,'events',_h('mouseleave','leave()','mouseleave','','leave'),'mouseleave')]:$1;},function(_5){_l('$slot_children',_5);});_5[_5.length]=_b({context:_a,tag:'div',ref:'overlay',nativeProps:{className:'bell-dropdown-overlay'}},function(_4){_p(_v0,['height'],$3).value>0?_d(_4,'nativeProps',['max-height: ',_p(_v0,['height'],$3).value,'px;'].join(''),'style.cssText'):$1;_p(_v0,['trigger'],$3).value===_p(_v0,['RAW_HOVER'],$3).value?[_d(_4,'events',_h('mouseenter','enter()','mouseenter','','enter'),'mouseenter'),_d(_4,'events',_h('mouseleave','leave()','mouseleave','','leave'),'mouseleave')]:$1;},function(_5){_l('$slot_overlay',_5);});});}

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

  function template$5(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_p(_v0,['mode'],$3).value==='inline'?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-sub-menu',_p(_v0,['isOpen'],$3).value?' bell-menu-open':$1,_p(_v0,['isActive'],$3).value?' bell-menu-active':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-sub-menu-title'}},function(_4){!_p(_v0,['collapsed'],$3).value?[_d(_4,'lazy',300,'click'),_d(_4,'events',_h('click',"toggle('isOpen')",'click','','toggle',{args:function(_3,_10,_11){return ['isOpen']}}),'click')]:$1;},function(_5){_l('$slot_title',_5);!_p(_v0,['collapsed'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-down-s-line',size:'0',className:'bell-sub-menu-arrow-icon'},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};});_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Menu',ref:'menu',props:{mode:_p(_v0,['mode'],$3).value,inner:$3},isComponent:$3},$1,{$slot_children:function(_5,_6){_l('$slot_children',_5);}});}):_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Dropdown',props:{className:['bell-sub-menu',_p(_v0,['isActive'],$3).value?' bell-menu-active':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join(''),trigger:'custom',visible:_p(_v0,['isOpen'],$3).value,placement:_p(_v0,['mode'],$3).value==='horizontal'?'bottom':'right-start'},events:{outside:_h('outside','handleOutsideClick()','outside','','handleOutsideClick',$1,$3)},isComponent:$3},function(_4){_p(_v0,['style'],$3).value?_d(_4,'props',_p(_v0,['style'],$3).value,'style'):$1;},{$slot_children:function(_5,_6){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-sub-menu-title'}},function(_4){!_p(_v0,['collapsed'],$3).value?[_d(_4,'lazy',300,'click'),_d(_4,'events',_h('click',"toggle('isOpen')",'click','','toggle',{args:function(_3,_10,_11){return ['isOpen']}}),'click')]:$1;},function(_5){_l('$slot_title',_5);!_p(_v0,['collapsed'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-down-s-line',size:'0',className:'bell-sub-menu-arrow-icon'},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};});},$slot_overlay:function(_5,_6){_l('$slot_children',_5);}});}

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

  function template$6(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:['bell-text',_p(_v0,['type'],$3).value?[' bell-text-',_p(_v0,['type'],$3).value].join(''):$1,_p(_v0,['size'],$3).value?[' bell-text-',_p(_v0,['size'],$3).value].join(''):$1,_p(_v0,['bold'],$3).value?' bell-text-bold':$1,_p(_v0,['block'],$3).value?' bell-text-block':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);});}

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

  function template$7(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-drawer',_p(_v0,['placement'],$3).value?[' bell-drawer-',_p(_v0,['placement'],$3).value].join(''):$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_p(_v0,['mask'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-drawer-mask'}},function(_4){_p(_v0,['maskClosable'],$3).value?_d(_4,'events',_h('click','close()','click','','close'),'click'):$1;}):_5[_5.length]={context:_a,isComment:$3,text:''};_5[_5.length]=_b({context:_a,tag:'div',ref:'wrapper',nativeProps:{className:'bell-drawer-wrapper','style.cssText':_p(_v0,['wrapperStyle'],$3).value}},$1,function(_5){_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['title']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-drawer-header'}},$1,function(_5){_l('$slot_title',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-drawer-body'}},$1,function(_5){_l('$slot_content',_5);});_p(_v0,['closable'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'close-line',size:'0',className:'bell-drawer-close'},events:{'click.native':_h('click.native','close()','click','native','close',$1,$1,$3)},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};});});}

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

  function template$8(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-breadcrumb',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);});}

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

  function template$9(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:['bell-breadcrumb-item',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'span'},function(_4){_p(_v0,['last'],$3).value?_d(_4,'nativeProps','bell-breadcrumb-text','className'):[_d(_4,'nativeProps','bell-breadcrumb-link','className'),_d(_4,'events',_i('click','click.breadcrumbItem','click','','click','breadcrumbItem'),'click')];},function(_5){_l('$slot_children',_5);});!_p(_v0,['last'],$3).value?_5[_5.length]=_b({context:_a,tag:'span',text:_s(_p(_v0,['separator'],$3).value),nativeProps:{className:'bell-breadcrumb-separator'}}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

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

  function template$a(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'button',nativeProps:{className:['bell-button',_p(_v0,['type'],$3).value?[' bell-button-',_p(_v0,['type'],$3).value].join(''):$1,_p(_v0,['size'],$3).value?[' bell-button-',_p(_v0,['size'],$3).value].join(''):$1,_p(_v0,['shape'],$3).value?[' bell-button-',_p(_v0,['shape'],$3).value].join(''):$1,_p(_v0,['ghost'],$3).value?' bell-button-ghost':$1,_p(_v0,['loading'],$3).value?' bell-button-loading':$1,_p(_v0,['disabled'],$3).value?' bell-button-disabled':' bell-button-enabled',_p(_v0,['block'],$3).value?' bell-button-block':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['disabled'],$3).value?_d(_4,'nativeProps',$3,'disabled'):!_p(_v0,['loading'],$3).value?_d(_4,'events',_i('click','click.button','click','','click','button'),'click'):$1;_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_prefix',_5,function(){_p(_v0,['loading'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{spin:$3,size:'0',name:'loader-5-line',className:'bell-button-loading-icon'},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};});_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['children']).value?_p(_v0,['loading'],$3).value||_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['prefix']).value||_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['suffix']).value?_5[_5.length]=_b({context:_a,tag:'span'},$1,function(_5){_l('$slot_children',_5);}):_l('$slot_children',_5):_5[_5.length]={context:_a,isComment:$3,text:''};_l('$slot_suffix',_5);});}

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
                  RAW_TYPE_TEXT ]),
              value: 'pure'
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

  function template$b(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-button-group',_p(_v0,['shape'],$3).value?[' bell-button-group-',_p(_v0,['shape'],$3).value].join(''):$1,_p(_v0,['size'],$3).value?[' bell-button-group-',_p(_v0,['size'],$3).value].join(''):$1,_p(_v0,['vertical'],$3).value?' bell-button-group-vertical':' bell-button-group-horizontal',_p(_v0,['className'],$3).value?_p(_v0,['className'],$3).value:$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);});}

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

  function template$c(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-input',_p(_v0,['size'],$3).value?[' bell-input-',_p(_v0,['size'],$3).value].join(''):$1,_p(_v0,['status'],$3).value?[' bell-input-',_p(_v0,['status'],$3).value].join(''):$1,_p(_v0,['block'],$3).value?' bell-input-block':$1,_p(_v0,['disabled'],$3).value?' bell-input-disabled':' bell-input-enabled',!_p(_v0,['value'],$3).value?' bell-input-no-value':' bell-input-has-value',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['width'],$3).value||_p(_v0,['style'],$3).value?_d(_4,'nativeProps',[_p(_v0,['width'],$3).value?['width: ',_p(_v0,['width'],$3).value,'px;'].join(''):$1,_p(_v0,['style'],$3).value?_p(_v0,['style'],$3).value:$1].join(''),'style.cssText'):$1;},function(_5){_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['prepend']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-input-prepend'}},$1,function(_5){_l('$slot_prepend',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-input-content'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'input',ref:'input',nativeProps:{type:_p(_v0,['currentType'],$3).value,className:['bell-input-el',_p(_v0,['prefix'],$3).value?' bell-input-el-with-prefix':$1,_p(_v0,['suffix'],$3).value||_p(_v0,['secure'],$3).value||_p(_v0,['clearable'],$3).value&&!_p(_v0,['disabled'],$3).value?' bell-input-el-with-suffix':$1,_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['prepend']).value?' bell-input-el-with-prepend':$1,_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['append']).value?' bell-input-el-with-append':$1].join('')},model:_g(_p(_v0,['value'],$3))},function(_4){_p(_v0,['maxLength'],$3).value?_d(_4,'nativeProps',_p(_v0,['maxLength'],$3).value,'maxLength'):$1;_p(_v0,['placeholder'],$3).value?_d(_4,'nativeProps',_p(_v0,['placeholder'],$3).value,'placeholder'):$1;_p(_v0,['autoFocus'],$3).value?_d(_4,'nativeProps',$3,'autofocus'):$1;_p(_v0,['readOnly'],$3).value?_d(_4,'nativeProps',$3,'readOnly'):$1;_p(_v0,['spellCheck'],$3).value?_d(_4,'nativeProps',$3,'spellcheck'):$1;_p(_v0,['disabled'],$3).value?_d(_4,'nativeProps',$3,'disabled'):[_d(_4,'events',_h('blur','handleBlur()','blur','','handleBlur'),'blur'),_d(_4,'events',_h('focus','handleFocus()','focus','','handleFocus'),'focus')];});_p(_v0,['prefix'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-input-prefix'}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:_p(_v0,['prefix'],$3).value,size:'0',className:'bell-input-prefix-icon'},isComponent:$3});}):_5[_5.length]={context:_a,isComment:$3,text:''};_p(_v0,['suffix'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-input-suffix'}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:_p(_v0,['suffix'],$3).value,size:'0',className:'bell-input-suffix-icon'},isComponent:$3});}):_p(_v0,['secure'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-input-suffix bell-input-secure'},events:{click:_h('click',"toggle('isSecure')",'click','','toggle',{args:function(_3,_10,_11){return ['isSecure']}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:_p(_v0,['isSecure'],$3).value?'eye-close-line':'eye-line',size:'0',className:'bell-input-secure-icon'},isComponent:$3});}):_p(_v0,['clearable'],$3).value&&!_p(_v0,['disabled'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-input-suffix bell-input-clear'},events:{click:_h('click','handleClearClick()','click','','handleClearClick')}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'close-circle-fill',size:'0',className:'bell-input-clear-icon'},isComponent:$3});}):_5[_5.length]={context:_a,isComment:$3,text:''};});_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['append']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-input-append'}},$1,function(_5){_l('$slot_append',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

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
              value: FALSE,
          },
          disabled: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          clearable: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          secure: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          prefix: {
              type: RAW_STRING,
          },
          suffix: {
              type: RAW_STRING,
          },
          autoFocus: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          spellCheck: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          readOnly: {
              type: RAW_BOOLEAN,
              value: FALSE,
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
              if (originalEvent.keyCode === 13) {
                  me.fire({
                      type: 'enter',
                      ns: 'input',
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

  function template$d(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-input-number',_p(_v0,['status'],$3).value?[' bell-input-number-',_p(_v0,['status'],$3).value].join(''):$1,_p(_v0,['size'],$3).value?[' bell-input-number-',_p(_v0,['size'],$3).value].join(''):$1,_p(_v0,['block'],$3).value?' bell-input-number-block':$1,_p(_v0,['disabled'],$3).value?' bell-input-number-disabled':' bell-input-number-enabled',_p(_v0,['isFocus'],$3).value?' bell-input-number-focus':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['width'],$3).value||_p(_v0,['style'],$3).value?_d(_4,'nativeProps',[_p(_v0,['width'],$3).value?['width: ',_p(_v0,['width'],$3).value,'px;'].join(''):$1,_p(_v0,['style'],$3).value?_p(_v0,['style'],$3).value:$1].join(''),'style.cssText'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'input',nativeProps:{type:'text',className:'bell-input-number-el'},model:_g(_p(_v0,['computedValue'],$3))},function(_4){_p(_v0,['placeholder'],$3).value?_d(_4,'nativeProps',_p(_v0,['placeholder'],$3).value,'placeholder'):$1;_p(_v0,['disabled'],$3).value?_d(_4,'nativeProps',$3,'disabled'):$1;_p(_v0,['autoFocus'],$3).value?_d(_4,'nativeProps',$3,'autofocus'):$1;_p(_v0,['readOnly'],$3).value||!_p(_v0,['editable'],$3).value?_d(_4,'nativeProps',$3,'readOnly'):[_d(_4,'events',_h('blur','handleBlur()','blur','','handleBlur'),'blur'),_d(_4,'events',_h('focus','handleFocus()','focus','','handleFocus'),'focus')];});!_p(_v0,['disabled'],$3).value&&!_p(_v0,['readOnly'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-input-number-actions'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'div'},function(_4){_p(_v0,['upDisabled'],$3).value?_d(_4,'nativeProps','bell-input-number-up bell-input-number-up-disabled','className'):[_d(_4,'nativeProps','bell-input-number-up bell-input-number-up-enabled','className'),_d(_4,'events',_h('click','up()','click','','up'),'click')];},function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-up-s-line',size:'0',className:'bell-input-number-up-icon'},isComponent:$3});});_5[_5.length]=_b({context:_a,tag:'div'},function(_4){_p(_v0,['downDisabled'],$3).value?_d(_4,'nativeProps','bell-input-number-down bell-input-number-down-disabled','className'):[_d(_4,'nativeProps','bell-input-number-down bell-input-number-down-enabled','className'),_d(_4,'events',_h('click','down()','click','','down'),'click')];},function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-down-s-line',size:'0',className:'bell-input-number-down-icon'},isComponent:$3});});}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

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
          editable: {
              type: RAW_BOOLEAN,
              value: TRUE,
          },
          autoFocus: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          readOnly: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          disabled: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          block: {
              type: RAW_BOOLEAN,
              value: FALSE,
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
      data: function () {
          return {
              isFocus: FALSE,
          };
      },
      watchers: {
          value: function (value) {
              this.fire({
                  type: 'change',
                  ns: 'inputNumber',
              }, { value: value });
          }
      },
      computed: {
          computedValue: {
              get: function () {
                  return this.get('value');
              },
              set: function (value) {
                  this.set('value', toNumber(value, 0));
              }
          },
          upDisabled: function () {
              var max = this.get('max');
              return Yox.is.numeric(max)
                  && max - this.get('value') < this.get('step');
          },
          downDisabled: function () {
              var min = this.get('min');
              return Yox.is.numeric(min)
                  && this.get('value') - min < this.get('step');
          }
      },
      methods: {
          up: function () {
              var max = this.get('max');
              var step = this.get('step');
              this.increase('value', toNumber(step), Yox.is.numeric(max) ? +max : UNDEFINED);
          },
          down: function () {
              var min = this.get('min');
              var step = this.get('step');
              this.decrease('value', toNumber(step), Yox.is.numeric(min) ? +min : UNDEFINED);
          },
          handleFocus: function () {
              this.set('isFocus', TRUE);
              this.fire({
                  type: 'focus',
                  ns: 'inputNumber',
              });
          },
          handleBlur: function () {
              this.set('isFocus', FALSE);
              this.fire({
                  type: 'blur',
                  ns: 'inputNumber',
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
              // 阻止事件默认行为，避免光标的跳动
              switch (event.originalEvent.keyCode) {
                  case 38:
                      me.up();
                      event.prevent();
                      break;
                  case 40:
                      me.down();
                      event.prevent();
                      break;
              }
          };
          Yox.dom.on(DOCUMENT, RAW_EVENT_KEYDOWN, onKeydown);
          var destroy = function (component) {
              if (component === me) {
                  Yox.dom.off(DOCUMENT, RAW_EVENT_KEYDOWN, onKeydown);
                  Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy);
              }
          };
          Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy);
      }
  });

  function template$e(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-textarea',_p(_v0,['size'],$3).value?[' bell-textarea-',_p(_v0,['size'],$3).value].join(''):$1,_p(_v0,['status'],$3).value?[' bell-textarea-',_p(_v0,['status'],$3).value].join(''):$1,_p(_v0,['block'],$3).value?' bell-textarea-block':$1,_p(_v0,['disabled'],$3).value?' bell-textarea-disabled':' bell-textarea-enabled',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['width'],$3).value||_p(_v0,['style'],$3).value?_d(_4,'nativeProps',[_p(_v0,['width'],$3).value?['width: ',_p(_v0,['width'],$3).value,'px;'].join(''):$1,_p(_v0,['style'],$3).value?_p(_v0,['style'],$3).value:$1].join(''),'style.cssText'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'textarea',nativeProps:{className:'bell-textarea-el','style.cssText':_p(_v0,['textareaStyle'],$3).value},model:_g(_p(_v0,['value'],$3))},function(_4){_p(_v0,['wrap'],$3).value?_d(_4,'nativeProps',_p(_v0,['wrap'],$3).value,'wrap'):$1;_p(_v0,['placeholder'],$3).value?_d(_4,'nativeProps',_p(_v0,['placeholder'],$3).value,'placeholder'):$1;_p(_v0,['maxLength'],$3).value?_d(_4,'nativeProps',_p(_v0,['maxLength'],$3).value,'maxLength'):$1;_p(_v0,['autoFocus'],$3).value?_d(_4,'nativeProps',$3,'autofocus'):$1;_p(_v0,['readOnly'],$3).value?_d(_4,'nativeProps',$3,'readOnly'):$1;_p(_v0,['spellCheck'],$3).value?_d(_4,'nativeProps',$3,'spellcheck'):$1;_p(_v0,['disabled'],$3).value?_d(_4,'nativeProps',$3,'disabled'):[_d(_4,'events',_h('blur','handleBlur()','blur','','handleBlur'),'blur'),_d(_4,'events',_h('focus','handleFocus()','focus','','handleFocus'),'focus')];});});}

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
              value: FALSE,
          },
          wrap: {
              type: oneOf(['hard', 'soft']),
          },
          autoFocus: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          spellCheck: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          readOnly: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          block: {
              type: RAW_BOOLEAN,
              value: FALSE,
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
          };
      },
      watchers: {
          value: function (value) {
              this.fire({
                  type: 'change',
                  ns: 'textarea',
              }, { value: value });
          },
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
      computed: {
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

  function template$f(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,$4=!1,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'label',nativeProps:{className:['bell-radio',_p(_v0,['disabled'],$3).value?' bell-radio-disabled':' bell-radio-enabled',_p(_v0,['checked'],$3).value?' bell-radio-active':$1,_p(_v0,['isFocus'],$3).value?' bell-radio-focus':$1,_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['children']).value?' bell-radio-with-label':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;!_p(_v0,['disabled'],$3).value?_d(_4,'events',_h('click',"set('checked', true)",'click','','set',{args:function(_3,_10,_11){return ['checked',$3]}}),'click'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-radio-icon'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'input',nativeProps:{className:'bell-radio-input',type:'radio',value:_p(_v0,['value'],$3).value,disabled:_p(_v0,['disabled'],$3).value},events:{focus:_h('focus',"set('isFocus', true)",'focus','','set',{args:function(_3,_10,_11){return ['isFocus',$3]}}),blur:_h('blur',"set('isFocus', false)",'blur','','set',{args:function(_3,_10,_11){return ['isFocus',$4]}})}},function(_4){_p(_v0,['name'],$3).value?_d(_4,'nativeProps',_p(_v0,['name'],$3).value,'name'):$1;});});_l('$slot_children',_5);});}

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
                      this.set('checked', data.value == this.get('value'));
                  }
                  if (data.disabled !== UNDEFINED) {
                      this.set('disabled', data.disabled);
                  }
              },
              ns: 'radioGroup',
          }
      },
      watchers: {
          checked: function (checked) {
              this.fire({
                  type: 'change',
                  ns: 'radio',
              }, {
                  checked: checked,
                  value: this.get('value'),
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

  function template$g(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:[_p(_v0,['button'],$3).value?['bell-radio-button',_p(_v0,['size'],$3).value?[' bell-radio-button-',_p(_v0,['size'],$3).value].join(''):$1,_p(_v0,['disabled'],$3).value?' bell-radio-button-disabled':' bell-radio-button-enable'].join(''):['bell-radio-group',_p(_v0,['disabled'],$3).value?' bell-radio-group-disabled':' bell-radio-group-enabled'].join(''),_p(_v0,['vertical'],$3).value?' bell-radio-vertical':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);});}

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
              required: TRUE,
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
                  this.set('value', data.value);
              },
              ns: 'radio',
          }
      }
  });

  function template$h(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,$4=!1,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'label',nativeProps:{className:['bell-checkbox',_p(_v0,['disabled'],$3).value?' bell-checkbox-disabled':' bell-checkbox-enabled',_p(_v0,['checked'],$3).value?' bell-checkbox-active':$1,_p(_v0,['isFocus'],$3).value?' bell-checkbox-focus':$1,_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['children']).value?' bell-checkbox-with-label':$1,_p(_v0,['indeterminate'],$3).value?' bell-checkbox-indeterminate':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-checkbox-icon'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'input',nativeProps:{className:'bell-checkbox-input',type:'checkbox',name:_p(_v0,['name'],$3).value,checked:_p(_v0,['checked'],$3).value,disabled:_p(_v0,['disabled'],$3).value},events:{change:_h('change','onChange()','change','','onChange'),focus:_h('focus',"set('isFocus', true)",'focus','','set',{args:function(_3,_10,_11){return ['isFocus',$3]}}),blur:_h('blur',"set('isFocus', false)",'blur','','set',{args:function(_3,_10,_11){return ['isFocus',$4]}})}});});_l('$slot_children',_5);});}

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
                      this.fire({
                          type: 'change',
                          ns: 'checkbox',
                      }, {
                          checked: newChecked,
                          value: value,
                      });
                  }
              },
              ns: 'checkboxGroup',
          }
      },
      methods: {
          onChange: function (event) {
              var target = event.originalEvent.target;
              var checked = target.checked;
              this.set({
                  checked: checked,
              });
              this.fire({
                  type: 'change',
                  ns: 'checkbox',
              }, {
                  checked: checked,
                  value: this.get('value'),
                  target: target,
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

  function template$i(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-checkbox-group',_p(_v0,['vertical'],$3).value?' bell-checkbox-vertical':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);});}

  var CheckboxGroup = Yox.define({
      template: template$i,
      name: 'bell-CheckboxGroup',
      propTypes: {
          name: {
              type: RAW_STRING,
              required: TRUE,
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
                  }
              },
              ns: 'checkbox',
          }
      },
      watchers: {
          value: function (value) {
              this.fire({
                  type: 'change',
                  ns: 'checkboxGroup',
              }, { value: value }, TRUE);
          }
      }
  });

  function template$j(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-switch',_p(_v0,['size'],$3).value?[' bell-switch-',_p(_v0,['size'],$3).value].join(''):$1,_p(_v0,['disabled'],$3).value?' bell-switch-disabled':' bell-switch-enabled',_p(_v0,['checked'],$3).value?' bell-switch-active':$1,_p(_v0,['loading'],$3).value?' bell-switch-loading':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;!_p(_v0,['disabled'],$3).value&&!_p(_v0,['loading'],$3).value?_d(_4,'events',_h('click','handleClick()','click','','handleClick'),'click'):$1;},function(_5){_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['on']).value||_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['off']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-switch-label'}},$1,function(_5){_p(_v0,['checked'],$3).value?_l('$slot_on',_5):_l('$slot_off',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

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

  function template$k(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-slider',_p(_v0,['vertical'],$3).value?' bell-slider-vertical':' bell-slider-horizontal',_p(_v0,['disabled'],$3).value?' bell-slider-disabled':' bell-slider-enabled',_p(_v0,['block'],$3).value?' bell-slider-block':$1,_p(_v0,['thumbIsDragging'],$3).value?' bell-slider-dragging':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['width'],$3).value||_p(_v0,['height'],$3).value||_p(_v0,['style'],$3).value?_d(_4,'nativeProps',[_p(_v0,['width'],$3).value?['width:',_p(_v0,['width'],$3).value,'px;'].join(''):$1,_p(_v0,['height'],$3).value?['height:',_p(_v0,['height'],$3).value,'px;'].join(''):$1,_p(_v0,['style'],$3).value?_p(_v0,['style'],$3).value:$1].join(''),'style.cssText'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-slider-track'}},function(_4){!_p(_v0,['disabled'],$3).value?_d(_4,'events',_i('click','trackClick.slider','click','','trackClick','slider'),'click'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-slider-bar','style.cssText':_p(_v0,['vertical'],$3).value?['height: ',_p(_v0,['percent'],$3).value,'%;'].join(''):['width: ',_p(_v0,['percent'],$3).value,'%;'].join('')}});_p(_v0,['showStops'],$3).value?_n(_p(_v0,['stops'],$3),function(_8,_9,_7){_5[_5.length]=_b({context:_a,tag:'div',key:_p(_v0).value,nativeProps:{className:'bell-slider-stop','style.cssText':_p(_v0,['vertical'],$3).value?['bottom: ',_p(_v0).value,'%;'].join(''):['left: ',_p(_v0).value,'%;'].join('')}});}):_5[_5.length]={context:_a,isComment:$3,text:''};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-slider-thumb','style.cssText':_p(_v0,['vertical'],$3).value?['bottom: ',_p(_v0,['percent'],$3).value,'%;'].join(''):['left: ',_p(_v0,['percent'],$3).value,'%;'].join('')},lazy:{mouseenter:200,mouseleave:200},events:{mouseenter:_i('mouseenter','thumbMouseEnter.slider','mouseenter','','thumbMouseEnter','slider'),mouseleave:_i('mouseleave','thumbMouseLeave.slider','mouseleave','','thumbMouseLeave','slider')}},function(_4){!_p(_v0,['disabled'],$3).value?_d(_4,'events',_i('mousedown','thumbMouseDown.slider','mousedown','','thumbMouseDown','slider'),'mousedown'):$1;});_p(_v0,['showTooltip'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',ref:'tooltip',nativeProps:{className:['bell-tooltip-popup bell-tooltip-dark',_p(_v0,['vertical'],$3).value?' bell-tooltip-right':' bell-tooltip-top'].join(''),'style.cssText':_p(_v0,['vertical'],$3).value?['bottom: ',_p(_v0,['percent'],$3).value,'%;'].join(''):['left: ',_p(_v0,['percent'],$3).value,'%;'].join('')}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-tooltip-arrow'},isStatic:$3});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-tooltip-content'}},$1,function(_5){_p(_v0,['formatTooltip'],$3).value?_e(_5,{context:_a,isText:$3,text:_s(_r(_p(_v0,['formatTooltip'],$3,$1,_t&&_t.formatTooltip||_u.formatTooltip).value,[_p(_v0,['value'],$3).value]).value)}):_e(_5,{context:_a,isText:$3,text:_s(_p(_v0,['value'],$3).value)});});}):_5[_5.length]={context:_a,isComment:$3,text:''};});});}

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

  function template$l(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Dropdown',props:{placement:_p(_v0,['placement'],$3).value,trigger:'custom',visible:_p(_v0,['visible'],$3).value,className:['bell-select',_p(_v0,['status'],$3).value?[' bell-select-',_p(_v0,['status'],$3).value].join(''):$1,_p(_v0,['size'],$3).value?[' bell-select-',_p(_v0,['size'],$3).value].join(''):$1,_p(_v0,['block'],$3).value?' bell-select-block':$1,_p(_v0,['disabled'],$3).value?' bell-select-disabled':' bell-select-enabled',_p(_v0,['clearable'],$3).value?' bell-select-clearable':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')},events:{outside:_h('outside','handleOutsideClick()','outside','','handleOutsideClick',$1,$3)},isComponent:$3},function(_4){_p(_v0,['width'],$3).value||_p(_v0,['style'],$3).value?_d(_4,'props',[_p(_v0,['width'],$3).value?['width: ',_p(_v0,['width'],$3).value,'px;'].join(''):$1,_p(_v0,['style'],$3).value?_p(_v0,['style'],$3).value:$1].join(''),'style'):$1;},{$slot_children:function(_5,_6){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-select-button',_p(_v0,['prefix'],$3).value||_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['prefix']).value?' bell-select-button-with-prefix':$1].join('')}},function(_4){!_p(_v0,['disabled'],$3).value?_d(_4,'events',_h('click',"toggle('visible')",'click','','toggle',{args:function(_3,_10,_11){return ['visible']}}),'click'):$1;},function(_5){_p(_v0,['prefix'],$3).value||_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['prefix']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-select-prefix'}},$1,function(_5){_l('$slot_prefix',_5,function(){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:_p(_v0,['prefix'],$3).value,size:'0',className:'bell-select-prefix-icon'},isComponent:$3});});}):_5[_5.length]={context:_a,isComment:$3,text:''};_p(_v0,['selectedOptions','length'],$3).value===0?_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['placeholder'],$3).value),nativeProps:{className:'bell-select-placeholder'}}):_p(_v0,['multiple'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-select-values'}},$1,function(_5){_n(_p(_v0,['selectedOptions'],$3),function(_8,_9,_7,index){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Tag',props:{simple:$3,closable:$3},events:{close:_h('close','handleRemoveOption($event, index)','close','','handleRemoveOption',{args:function(_3,_10,_11){return [_10,index]}},$3)},isComponent:$3},$1,{$slot_children:function(_5,_6){_e(_5,{context:_a,isText:$3,text:_s(_p(_v0,['text']).value)});}});});}):_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['selectedOptions','0','text'],$3).value),nativeProps:{className:'bell-select-value'}});_p(_v0,['clearable'],$3).value&&_p(_v0,['selectedOptions','length'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'close-circle-fill',size:'0',className:'bell-select-clear-icon'},events:{'click.native':_h('click.native','handleClearClick()','click','native','handleClearClick',$1,$1,$3)},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-down-s-line',size:'0',className:'bell-select-arrow-icon'},isComponent:$3});});},$slot_overlay:function(_5,_6){_l('$slot_children',_5);}});}

  function template$m(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-tag',_p(_v0,['type'],$3).value?[' bell-tag-',_p(_v0,['type'],$3).value].join(''):$1,_p(_v0,['size'],$3).value?[' bell-tag-',_p(_v0,['size'],$3).value].join(''):$1,_p(_v0,['checkable'],$3).value?' bell-tag-checkable':$1,_p(_v0,['closable'],$3).value?' bell-tag-closable':$1,_p(_v0,['color'],$3).value?' bell-tag-pure':$1,_p(_v0,['checked'],$3).value?' bell-tag-checked':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['color'],$3).value||_p(_v0,['style'],$3).value?_d(_4,'nativeProps',[_p(_v0,['color'],$3).value?_p(_v0,['checkable'],$3).value?_p(_v0,['checked'],$3).value?['background-color: ',_p(_v0,['color'],$3).value,';'].join(''):['color: ',_p(_v0,['color'],$3).value,';'].join(''):['background-color: ',_p(_v0,['color'],$3).value,';'].join(''):$1,_p(_v0,['style'],$3).value?_p(_v0,['style'],$3).value:$1].join(''),'style.cssText'):$1;_p(_v0,['checkable'],$3).value?_d(_4,'events',_h('click','toggleChecked()','click','','toggleChecked'),'click'):$1;},function(_5){_l('$slot_children',_5);_p(_v0,['closable'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'close-line',size:'0',className:'bell-tag-close-icon'},events:{'click.native':_i('click.native','close.tag','click','native','close','tag',$1,$3)},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

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
      watchers: {
          value: function (value) {
              // 在这同步 selectedOptions，可兼顾内外的改动
              this.updateSelectedOptions(value);
              this.fire({
                  type: 'change',
                  ns: 'select',
              }, { value: value });
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
          }
      },
      methods: {
          handleClearClick: function (event) {
              // 停止冒泡，否则会展开下拉框
              event.stop();
              this.set('value', UNDEFINED);
              this.fire({
                  type: 'change',
                  ns: 'select',
              }, {
                  value: UNDEFINED,
              }, TRUE);
              this.fire({
                  type: 'clear',
                  ns: 'select',
              });
          },
          handleRemoveOption: function (event, index) {
              event.stop();
              this.removeAt('value', index);
              this.fire({
                  type: 'change',
                  ns: 'select',
              }, {
                  value: this.get('value')
              }, TRUE);
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
              }
              else {
                  if (values !== value) {
                      me.set('value', value);
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
              }
              else {
                  if (values !== value) {
                      return;
                  }
                  me.set('value', UNDEFINED);
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
          }
      },
      components: {
          Tag: Tag,
          Icon: Icon,
          Dropdown: Dropdown,
      },
      afterMount: function () {
          this.updateSelectedOptions(this.get('value'));
      }
  });

  function template$n(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-dropdown-item',_p(_v0,['disabled'],$3).value?' bell-dropdown-item-disabled':' bell-dropdown-item-enabled',_p(_v0,['isSelected'],$3).value?' bell-dropdown-item-active':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;!_p(_v0,['disabled'],$3).value?_d(_4,'events',_h('click','clickOption()','click','','clickOption'),'click'):$1;},function(_5){_l('$slot_children',_5,function(){_e(_5,{context:_a,isText:$3,text:_s(_p(_v0,['text'],$3).value)});});});}

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
                  this.set('isSelected', isSelected);
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
          clickOption: function () {
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

  function template$o(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-select-option-group',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['label'],$3).value),nativeProps:{className:'bell-select-group-title'}});_l('$slot_children',_5);});}

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

  function template$p(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1},_v1=function(_3){return _3.length-2};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-pagination',_p(_v0,['size'],$3).value?[' bell-pagination-',_p(_v0,['size'],$3).value].join(''):$1,_p(_v0,['hideOnSinglePage'],$3).value&&_p(_v0,['count'],$3).value<=1?' bell-pagination-hidden':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_v.prevPage = function(_8,_5,_6){_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['prev']).value?_5[_5.length]=_b({context:_a,tag:'div',key:'prev',nativeProps:{className:['bell-pagination-custom-prev',_p(_v0,['current'],$3).value===1?' bell-pagination-custom-disabled':$1].join('')}},function(_4){_p(_v0,['current'],$3).value>1?_d(_4,'events',_h('click',"decrease('current', 1, 1)",'click','','decrease',{args:function(_3,_10,_11){return ['current',1,1]}}),'click'):$1;},function(_5){_l('$slot_prev',_5);}):_5[_5.length]=_b({context:_a,tag:'button',key:'prev',nativeProps:{className:'bell-pagination-item bell-pagination-prev'}},function(_4){_p(_v0,['current'],$3).value>1?_d(_4,'events',_h('click',"decrease('current', 1, 1)",'click','','decrease',{args:function(_3,_10,_11){return ['current',1,1]}}),'click'):_d(_4,'nativeProps',$3,'disabled');},function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-left-s-line',size:'0',className:'bell-pagination-icon'},isComponent:$3});});};_v.nextPage = function(_8,_5,_6){_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['next']).value?_5[_5.length]=_b({context:_a,tag:'div',key:'next',nativeProps:{className:['bell-pagination-custom-next',_p(_v0,['current'],$3).value===_p(_v0,['count'],$3).value?' bell-pagination-custom-disabled':$1].join('')}},function(_4){_p(_v0,['current'],$3).value<_p(_v0,['count'],$3).value?_d(_4,'events',_h('click',"increase('current', 1, count)",'click','','increase',{args:function(_3,_10,_11){return ['current',1,_p(_v0,['count'],$3,_3).value]}}),'click'):$1;},function(_5){_l('$slot_next',_5);}):_5[_5.length]=_b({context:_a,tag:'button',key:'next',nativeProps:{className:'bell-pagination-item bell-pagination-next'}},function(_4){_p(_v0,['current'],$3).value<_p(_v0,['count'],$3).value?_d(_4,'events',_h('click',"increase('current', 1, count)",'click','','increase',{args:function(_3,_10,_11){return ['current',1,_p(_v0,['count'],$3,_3).value]}}),'click'):_d(_4,'nativeProps',$3,'disabled');},function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-right-s-line',size:'0',className:'bell-pagination-icon'},isComponent:$3});});};_p(_v0,['showTotal'],$3).value?_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-pagination-total'}},$1,function(_5){_e(_5,{context:_a,isText:$3,text:'共 '});_e(_5,{context:_a,isText:$3,text:_s(_p(_v0,['total'],$3).value)});_e(_5,{context:_a,isText:$3,text:' 条'});}):_5[_5.length]={context:_a,isComment:$3,text:''};_p(_v0,['pageSizeList','length'],$3).value>0?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Select',props:{size:_p(_v0,['size'],$3).value,placement:_p(_v0,['placement'],$3).value},model:_g(_p(_v0,['pageSize'],$3)),events:{change:_h('change','pageSizeChange()','change','','pageSizeChange',$1,$3)},isComponent:$3},$1,{$slot_children:function(_5,_6){_n(_p(_v0,['pageSizeList'],$3),function(_8,_9,_7){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Option',props:{value:_p(_v0,['value']).value,text:_p(_v0,['text']).value},isComponent:$3},$1,{$slot_children:function(_5,_6){_e(_5,{context:_a,isText:$3,text:_s(_p(_v0,['text']).value)});}});});}}):_5[_5.length]={context:_a,isComment:$3,text:''};_p(_v0,['simple'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-pagination-simple'}},$1,function(_5){_m('prevPage',_8,_5,_6,_v.prevPage,_w&&_w.prevPage||_x.prevPage);_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Input',ref:'simpleInput',props:{size:_p(_v0,['size'],$3).value,className:'bell-pagination-simple-input'},model:_g(_p(_v0,['page'],$3)),isComponent:$3});_5[_5.length]=_b({context:_a,tag:'span',text:'/',nativeProps:{className:'bell-pagination-separator'},isStatic:$3});_5[_5.length]=_b({context:_a,tag:'span',text:_s(_p(_v0,['count'],$3).value),nativeProps:{className:'bell-pagination-count'}});_m('nextPage',_8,_5,_6,_v.nextPage,_w&&_w.nextPage||_x.nextPage);}):_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-pagination-list'}},$1,function(_5){_m('prevPage',_8,_5,_6,_v.prevPage,_w&&_w.prevPage||_x.prevPage);_n(_p(_v0,['pageList'],$3),function(_8,_9,_7){_p(_v0,['prev']).value?_5[_5.length]=_b({context:_a,tag:'div',key:'prev-ellipsis',nativeProps:{className:'bell-pagination-ellipsis'},events:{click:_h('click',"decrease('current', 5, 1)",'click','','decrease',{args:function(_3,_10,_11){return ['current',5,1]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-left-s-fill',size:'0',className:'bell-pagination-icon'},isComponent:$3});}):_p(_v0,['next']).value?_5[_5.length]=_b({context:_a,tag:'div',key:'next-ellipsis',nativeProps:{className:'bell-pagination-ellipsis'},events:{click:_h('click',"increase('current', 5, ../count)",'click','','increase',{args:function(_3,_10,_11){return ['current',5,_p(_v1,['count'],$1,_3).value]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-right-s-fill',size:'0',className:'bell-pagination-icon'},isComponent:$3});}):_5[_5.length]=_b({context:_a,tag:'button',key:['page',_p(_v0,['value']).value].join(''),text:_s(_p(_v0,['value']).value),nativeProps:{className:['bell-pagination-item',_p(_v0,['active']).value?' bell-pagination-active':$1].join('')}},function(_4){!_p(_v0,['active']).value?_d(_4,'events',_h('click',"set('current', this.value)",'click','','set',{args:function(_3,_10,_11){return ['current',_p(_v0,['value'],$1,_3).value]}}),'click'):$1;});});_m('nextPage',_8,_5,_6,_v.nextPage,_w&&_w.nextPage||_x.nextPage);});_p(_v0,['showJumper'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-pagination-jumper'}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Input',ref:'jumperInput',props:{placeholder:'请输入页码',size:_p(_v0,['size'],$3).value,className:'bell-pagination-jumper-input'},model:_g(_p(_v0,['page'],$3)),isComponent:$3});_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Button',props:{type:'primary'},events:{click:_h('click','jump()','click','','jump',$1,$3)},isComponent:$3},$1,{$slot_children:function(_5,_6){_e(_5,{context:_a,isText:$3,text:'跳转'});}});}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

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

  function template$q(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-upload',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')},events:{click:_h('click','click()','click','','click')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);_5[_5.length]=_b({context:_a,tag:'form',ref:'form'},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'input',ref:'input',nativeProps:{type:'file',multiple:_p(_v0,['multiple'],$3).value,accept:_p(_v0,['accept'],$3).value},events:{change:_h('change','changeFiles()','change','','changeFiles')}});});});}

  function createResponse (xhr, headers) {
      function response() {
          return {
              ok: xhr.status >= 200 && xhr.status < 300,
              statusText: xhr.statusText || 'OK',
              status: xhr.status || 200,
              url: xhr.responseURL || headers['x-request-url'] || '',
              headers: {
                  get: function (name) {
                      return headers[name.toLowerCase()];
                  },
                  has: function (name) {
                      return name.toLowerCase() in headers;
                  }
              },
              body: xhr.response || xhr.responseText,
              text: function () {
                  return xhr.responseText;
              },
              json: function () {
                  return JSON.parse(xhr.responseText);
              },
              blob: function () {
                  return new Blob([xhr.response]);
              },
              clone: response,
          };
      }
      return response;
  }

  function parseResponse (xhr) {
      var headers = {};
      var rawHeaders = xhr.getAllResponseHeaders() || '';
      rawHeaders.replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (match, key, value) {
          headers[key.toLowerCase()] = value;
          return match;
      });
      return createResponse(xhr, headers);
  }

  function setRequestHeaders (xhr, headers) {
      for (var key in headers) {
          xhr.setRequestHeader(key, headers[key]);
      }
  }

  var AjaxUploader = /** @class */ (function () {
      function AjaxUploader(file, hooks) {
          var instance = this;
          instance.file = file;
          instance.hooks = hooks;
          // 碰到过传了几个分片之后，file.size 变成 0 的情况
          // 因此先存一下最初的 fileSize
          instance.fileSize = file.size || 0;
          var xhr = instance.xhr = new XMLHttpRequest();
          xhr.onloadstart = function () {
              if (hooks.onStart) {
                  hooks.onStart();
              }
          };
          xhr.onloadend = function () {
              if (hooks.onEnd) {
                  hooks.onEnd();
              }
          };
          xhr.onload = function () {
              var fileSize = instance.fileSize, chunkInfo = instance.chunkInfo;
              if (chunkInfo) {
                  if (chunkInfo.uploaded < fileSize) {
                      chunkInfo.uploaded += chunkInfo.uploading;
                      if (hooks.onChunkSuccess) {
                          hooks.onChunkSuccess({
                              chunkIndex: chunkInfo.options.chunkIndex
                          });
                      }
                      // 还有分片没上传完则继续上传下一个
                      if (chunkInfo.uploaded < fileSize) {
                          chunkInfo.options.chunkIndex++;
                          instance.uploadChunk(chunkInfo.options);
                          return;
                      }
                  }
              }
              if (hooks.onSuccess) {
                  var response = parseResponse(xhr);
                  hooks.onSuccess(response());
              }
          };
          xhr.onerror = function () {
              if (hooks.onError) {
                  hooks.onError();
              }
          };
          xhr.onabort = function () {
              if (hooks.onAbort) {
                  hooks.onAbort();
              }
          };
          // 下载文件触发的是 xhr.onprogress
          // 上传文件触发的是 xhr.upload.onprogress
          xhr.upload.onprogress = function (event) {
              var fileSize = instance.fileSize, chunkInfo = instance.chunkInfo;
              var uploaded;
              if (chunkInfo) {
                  // 当前正在上传的分片 size
                  var chunkTotal = chunkInfo.uploading;
                  // 不能比当前正在上传的 size 还大
                  var chunkUploaded = Math.min(chunkTotal, event.loaded);
                  if (hooks.onChunkProgress) {
                      hooks.onChunkProgress({
                          chunkIndex: chunkInfo.options.chunkIndex,
                          uploaded: chunkUploaded,
                          total: chunkTotal,
                          // 怕浏览器有 bug 导致 chunkTotal 为 0
                          percent: chunkTotal > 0 ? chunkUploaded / chunkTotal : 0
                      });
                  }
                  // 加上之前上传成功的分片 size
                  uploaded = chunkInfo.uploaded + chunkUploaded;
              }
              else {
                  // 不能比文件 size 还大
                  uploaded = Math.min(fileSize, event.loaded);
              }
              if (hooks.onProgress) {
                  hooks.onProgress({
                      uploaded: uploaded,
                      total: fileSize,
                      // 怕浏览器有 bug 导致 fileSize 为 0
                      percent: fileSize > 0 ? uploaded / fileSize : 0
                  });
              }
          };
      }
      AjaxUploader.support = function () {
          var xhr = new XMLHttpRequest();
          return 'upload' in xhr && 'onprogress' in xhr.upload;
      };
      /**
       * 上传整个文件
       */
      AjaxUploader.prototype.upload = function (options) {
          var _a = this, xhr = _a.xhr, file = _a.file;
          xhr.open('post', options.action, true);
          if (options.credentials === 'include') {
              xhr.withCredentials = true;
          }
          else if (options.credentials === 'omit') {
              xhr.withCredentials = false;
          }
          var formData = new FormData();
          for (var key in options.data) {
              formData.append(key, options.data[key]);
          }
          formData.append(options.fileName, file);
          setRequestHeaders(xhr, options.headers);
          xhr.send(formData);
      };
      /**
       * 上传文件分片
       */
      AjaxUploader.prototype.uploadChunk = function (options) {
          var _a = this, xhr = _a.xhr, file = _a.file, fileSize = _a.fileSize, chunkInfo = _a.chunkInfo;
          if (!chunkInfo) {
              chunkInfo = this.chunkInfo = {
                  uploaded: 0,
                  uploading: 0,
                  options: options,
              };
          }
          else if (chunkInfo.options !== options) {
              chunkInfo.options = options;
          }
          // 默认从第一个分片开始上传，断点续传可以传入指定的分片
          var chunkIndex = options.chunkIndex || 0;
          // 默认一个分片为 4M
          var chunkSize = options.chunkSize || (4 * 1024 * 1024);
          var start = chunkSize * chunkIndex;
          var end = Math.min(fileSize, chunkSize * (chunkIndex + 1));
          chunkInfo.uploading = end - start;
          xhr.open('post', options.action, true);
          // xhr.setRequestHeader 必须在 open() 方法之后，send() 方法之前调用，否则会报错
          // xhr.setRequestHeader 设置相同的请求头不会覆盖，而是追加，如 key: value1, value2
          // 这里改成覆盖
          var headers = {
              Range: "bytes " + start + "-" + end + "/" + fileSize
          };
          for (var key in options.headers) {
              headers[key] = options.headers[key];
          }
          setRequestHeaders(xhr, headers);
          var blobSlice = File.prototype.slice || File.prototype['webkitSlice'] || File.prototype['mozSlice'];
          xhr.send(blobSlice.call(file, start, end));
      };
      /**
       * 取消上传
       */
      AjaxUploader.prototype.abort = function () {
          this.xhr.abort();
      };
      /**
       * 销毁
       */
      AjaxUploader.prototype.destroy = function () {
          this.abort();
      };
      return AjaxUploader;
  }());

  var FlashUploader = /** @class */ (function () {
      function FlashUploader(options, hooks) {
          if (hooks === void 0) { hooks = {}; }
          var movieName = createMovieName();
          var swf = createSWF(movieName, options.swfUrl, createFlashVars(movieName, options.accept || '', options.multiple || false));
          var el = options.el;
          if (el.parentNode) {
              el.parentNode.replaceChild(swf, el);
          }
          else {
              throw new Error('el.parentNode is not found.');
          }
          this.swf = swf;
          this.movieName = movieName;
          this.hooks = hooks;
          this.debug = !!options.debug;
          FlashUploader.instances[movieName] = this;
      }
      /**
       * 获得要上传的文件
       */
      FlashUploader.prototype.getFiles = function () {
          return this.swf['getFiles']();
      };
      /**
       * 上传
       */
      FlashUploader.prototype.upload = function (index, options) {
          this.swf['upload'](index, options.action, options.fileName, options.data, options.headers);
      };
      /**
       * 取消上传
       */
      FlashUploader.prototype.abort = function (index) {
          this.swf['abort'](index);
      };
      /**
       * 启用鼠标点击打开文件选择窗口
       */
      FlashUploader.prototype.enable = function () {
          this.swf['enable']();
      };
      /**
       * 禁用鼠标点击打开文件选择窗口
       */
      FlashUploader.prototype.disable = function () {
          this.swf['disable']();
      };
      /**
       * 销毁对象
       */
      FlashUploader.prototype.destroy = function () {
          var files = this.getFiles();
          for (var i = 0, len = files.length; i < len; i++) {
              this.abort(files[i].index);
          }
          this.swf['destroy']();
          FlashUploader.instances[this.movieName] = null;
          // 清除 IE 引用
          window[this.movieName] = null;
      };
      FlashUploader.prototype.onReady = function () {
          // swf 文件初始化成功
          var onReady = this.hooks.onReady;
          if (onReady) {
              onReady();
          }
      };
      FlashUploader.prototype.onFileChange = function () {
          // 用户选择文件
          var onFileChange = this.hooks.onFileChange;
          if (onFileChange) {
              onFileChange();
          }
      };
      FlashUploader.prototype.onStart = function (data) {
          var onStart = this.hooks.onStart;
          if (onStart) {
              onStart(data.file);
          }
      };
      FlashUploader.prototype.onEnd = function (data) {
          var onEnd = this.hooks.onEnd;
          if (onEnd) {
              onEnd(data.file);
          }
      };
      FlashUploader.prototype.onError = function (data) {
          var onError = this.hooks.onError;
          if (onError) {
              onError(data.file, data.code, data.detail);
          }
      };
      FlashUploader.prototype.onAbort = function (data) {
          var onAbort = this.hooks.onAbort;
          if (onAbort) {
              onAbort(data.file);
          }
      };
      FlashUploader.prototype.onProgress = function (data) {
          var onProgress = this.hooks.onProgress;
          if (onProgress) {
              var file = data.file, uploaded = data.uploaded, total = data.total;
              onProgress(file, {
                  uploaded: uploaded,
                  total: total,
                  percent: total > 0 ? uploaded / total : 0
              });
          }
      };
      FlashUploader.prototype.onSuccess = function (data) {
          var onSuccess = this.hooks.onSuccess;
          if (onSuccess) {
              onSuccess(data.file, data.responseText);
          }
      };
      FlashUploader.prototype.onDebug = function (data) {
          if (this.debug) {
              console.log(data.text);
          }
      };
      FlashUploader.instances = {};
      /**
       * 文件状态 - 等待上传
       */
      FlashUploader.STATUS_WAITING = 0;
      /**
       * 文件状态 - 正在上传
       */
      FlashUploader.STATUS_UPLOADING = 1;
      /**
       * 文件状态 - 上传成功
       */
      FlashUploader.STATUS_UPLOAD_SUCCESS = 2;
      /**
       * 文件状态 - 上传失败
       */
      FlashUploader.STATUS_UPLOAD_ERROR = 3;
      /**
       * 文件状态 - 上传中止
       */
      FlashUploader.STATUS_UPLOAD_ABORT = 4;
      /**
       * 错误码 - 上传出现沙箱安全错误
       */
      FlashUploader.ERROR_SECURITY = 0;
      /**
       * 错误码 - 上传 IO 错误
       */
      FlashUploader.ERROR_IO = 1;
      return FlashUploader;
  }());
  /**
   * 项目名称 AS 会用 projectName.instances[movieName] 找出当前实例
   */
  var projectName = 'Soga_Flash_Uploader';
  /**
   * 暴露给全局的对象，这样 AS 才能调到
   */
  window[projectName] = FlashUploader;
  /**
   * guid 初始值
   */
  var guid = 0;
  /**
   * 创建新的唯一的影片剪辑名称
   */
  function createMovieName() {
      return projectName + (guid++);
  }
  /**
   * 创建 swf 元素
   *
   * 无需兼容 IE67 用现有方法即可
   *
   * 如果想兼容 IE67，有两种方法：
   *
   * 1. 把 wmode 改成 opaque
   * 2. 用 swfobject 或别的库重写此方法
   *
   * 这里不兼容 IE67 是因为要判断浏览器实在太蛋疼了。。。
   */
  function createSWF(id, swfUrl, flashVars) {
      var div = document.createElement('div');
      // 不加 ID 在 IE 下没法运行
      div.innerHTML = '<object id="' + id + '" class="' + projectName.toLowerCase()
          + '" type="application/x-shockwave-flash" data="' + swfUrl + '">'
          + '<param name="movie" value="' + swfUrl + '" />'
          + '<param name="allowscriptaccess" value="always" />'
          + '<param name="wmode" value="transparent" />'
          + '<param name="flashvars" value="' + flashVars + '" />'
          + '</object>';
      return div.children[0];
  }
  /**
   * 拼装给 swf 用的参数
   */
  function createFlashVars(movieName, accept, multiple) {
      var result = [
          'projectName=' + projectName,
          'movieName=' + movieName,
          'accept=' + encodeURIComponent(accept),
          'multiple=' + (multiple ? 'true' : 'false')
      ];
      return result.join('&amp;');
  }

  var guid$1 = 0;
  var Upload = Yox.define({
      template: template$q,
      name: 'bell-Upload',
      propTypes: {
          action: {
              type: RAW_STRING,
          },
          headers: {
              type: RAW_OBJECT,
          },
          withCredentials: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          multiple: {
              type: RAW_BOOLEAN,
              value: FALSE,
          },
          accept: {
              type: RAW_STRING,
          },
          data: {
              type: RAW_OBJECT,
          },
          name: {
              type: RAW_STRING,
              value: 'file',
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
      methods: {
          upload: function (files) {
              var me = this;
              var beforeUpload = me.get('beforeUpload');
              if (beforeUpload) {
                  var currentFile = beforeUpload(files);
                  if (currentFile && currentFile.then) {
                      currentFile
                          .then(function (result) {
                          if (Yox.is.array(result)) {
                              Yox.array.each(result, function (item) {
                                  me.uploadFile(item);
                              });
                          }
                          else if (result) {
                              me.uploadFile(result);
                          }
                      });
                  }
                  else {
                      if (Yox.is.array(currentFile)) {
                          Yox.array.each(currentFile, function (item) {
                              me.uploadFile(item);
                          });
                      }
                      else if (currentFile) {
                          me.uploadFile(currentFile);
                      }
                  }
                  return;
              }
              Yox.array.each(files, function (item) {
                  me.uploadFile(item);
              });
          },
          uploadFile: function (file) {
              var me = this;
              var ajaxUploader = new AjaxUploader(file.file, {
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
              ajaxUploader.upload({
                  action: me.get('action'),
                  fileName: me.get('name'),
                  data: me.get('data'),
                  headers: me.get('headers'),
                  credentials: me.get('withCredentials') ? 'include' : 'omit'
              });
          },
          reset: function () {
              // 重置一下，这样再次选择相同文件才能生效
              this.$refs.form.reset();
          },
          click: function () {
              this.$refs.input.click();
          },
          changeFiles: function (event) {
              var files = Yox.array.toArray(event.originalEvent.target.files);
              this.upload(files.map(function (file) {
                  return {
                      file: file,
                      id: ++guid$1,
                  };
              }));
          }
      },
  });

  function template$r(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-alert',_p(_v0,['status'],$3).value?[' bell-alert-',_p(_v0,['status'],$3).value].join(''):$1,_p(_v0,['banner'],$3).value?' bell-alert-banner':$1,_p(_v0,['center'],$3).value?' bell-alert-center':$1,_p(_v0,['showIcon'],$3).value?' bell-alert-with-icon':$1,_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['title']).value?' bell-alert-with-title':$1,_p(_v0,['closable'],$3).value||_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['close']).value?' bell-alert-with-close':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_p(_v0,['showIcon'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:_p(_v0,['status'],$3).value===_p(_v0,['RAW_TYPE_SUCCESS'],$3).value?'checkbox-circle-fill':_p(_v0,['status'],$3).value===_p(_v0,['RAW_TYPE_WARNING'],$3).value?'error-warning-fill':_p(_v0,['status'],$3).value===_p(_v0,['RAW_TYPE_ERROR'],$3).value?'close-circle-fill':'information-fill',size:'0',className:'bell-alert-status-icon'},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['title']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-alert-title'}},$1,function(_5){_l('$slot_title',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['children']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-alert-content'}},$1,function(_5){_l('$slot_children',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};_p(_v0,['closable'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',ref:'close',nativeProps:{className:'bell-alert-close'},events:{click:_i('click','close.alert','click','','close','alert')}},$1,function(_5){_l('$slot_close',_5,function(){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'close-line',size:'0',className:'bell-alert-close-icon'},isComponent:$3});});}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

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

  function template$s(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-article',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_p(_v0,['title'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-article-title'}},$1,function(_5){_e(_5,{context:_a,isText:$3,text:_s(_p(_v0,['title'],$3).value)});_p(_v0,['showLink'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'links-line',size:'0',className:'bell-article-link'},events:{'click.native':_i('click.native','link.article','click','native','link','article',$1,$3)},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};}):_5[_5.length]={context:_a,isComment:$3,text:''};_p(_v0,['subTitle'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['subTitle'],$3).value),nativeProps:{className:'bell-article-sub-title'}}):_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['subTitle']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-article-sub-title'}},$1,function(_5){_l('$slot_subTitle',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['cover']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-article-cover'}},$1,function(_5){_l('$slot_cover',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-article-content'}},$1,function(_5){_l('$slot_content',_5);});_p(_v0,['signature'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['signature'],$3).value),nativeProps:{className:'bell-article-signature'}}):_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['signature']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-article-signature'}},$1,function(_5){_l('$slot_signature',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

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

  function template$t(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-spin',_p(_v0,['type'],$3).value?[' bell-spin-',_p(_v0,['type'],$3).value].join(''):$1,_p(_v0,['size'],$3).value?[' bell-spin-',_p(_v0,['size'],$3).value].join(''):$1,_p(_v0,['theme'],$3).value?[' bell-spin-',_p(_v0,['theme'],$3).value].join(''):$1,_p(_v0,['fixed'],$3).value?' bell-spin-fixed':$1,_p(_v0,['legacy'],$3).value?' bell-spin-legacy':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',ref:'content',nativeProps:{className:'bell-spin-content'}},$1,function(_5){_l('$slot_children',_5,function(){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{spin:$3,name:_p(_v0,['icon'],$3).value,size:'0',className:'bell-spin-icon'},isComponent:$3});_p(_v0,['text'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['text'],$3).value),nativeProps:{className:'bell-spin-text'}}):_5[_5.length]={context:_a,isComment:$3,text:''};});});});}

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

  function template$u(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-backtop',_p(_v0,['legacy'],$3).value?' bell-backtop-legacy':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')},events:{click:_i('click','click.backTop','click','','click','backTop')}},function(_4){_p(_v0,['bottom'],$3).value||_p(_v0,['right'],$3).value||_p(_v0,['style'],$3).value?_d(_4,'nativeProps',[_p(_v0,['bottom'],$3).value?['bottom: ',_p(_v0,['bottom'],$3).value,'px;'].join(''):$1,_p(_v0,['right'],$3).value?['right: ',_p(_v0,['right'],$3).value,'px;'].join(''):$1,_p(_v0,['style'],$3).value?_p(_v0,['style'],$3).value:$1].join(''),'style.cssText'):$1;},function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{size:'0',name:'arrow-up-line'},isComponent:$3});});}

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
              scrollTop(containerElement, containerElement.scrollTop, 0, duration);
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

  function template$v(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-avatar',_p(_v0,['size'],$3).value&&!_p(_v0,['customSize'],$3).value?[' bell-avatar-',_p(_v0,['size'],$3).value].join(''):$1,_p(_v0,['shape'],$3).value?[' bell-avatar-',_p(_v0,['shape'],$3).value].join(''):$1,_p(_v0,['src'],$3).value?' bell-avatar-image':$1,_p(_v0,['clickable'],$3).value?' bell-avatar-clickable':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['backgroundColor'],$3).value||_p(_v0,['customSize'],$3).value||_p(_v0,['style'],$3).value?_d(_4,'nativeProps',[_p(_v0,['backgroundColor'],$3).value?['background-color: ',_p(_v0,['backgroundColor'],$3).value,';'].join(''):$1,_p(_v0,['customSize'],$3).value?['width: ',_p(_v0,['customSize'],$3).value,'px;height: ',_p(_v0,['customSize'],$3).value,'px;'].join(''):$1,_p(_v0,['style'],$3).value?_p(_v0,['style'],$3).value:$1].join(''),'style.cssText'):$1;_p(_v0,['clickable'],$3).value?_d(_4,'events',_i('click','click','click','','click'),'click'):$1;},function(_5){_p(_v0,['src'],$3).value?_5[_5.length]=_b({context:_a,tag:'img',nativeAttrs:{ondragstart:'return false'},nativeProps:{src:_p(_v0,['src'],$3).value},events:{error:_i('error','error.avatar','error','','error','avatar')}},function(_4){_p(_v0,['srcSet'],$3).value?_d(_4,'nativeAttrs',_p(_v0,['srcSet'],$3).value,'srcset'):$1;_p(_v0,['alt'],$3).value?_d(_4,'nativeProps',_p(_v0,['alt'],$3).value,'alt'):$1;}):_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['icon']).value?_l('$slot_icon',_5):_p(_v0,['text'],$3).value?_5[_5.length]=_b({context:_a,tag:'span',ref:'text',text:_s(_p(_v0,['text'],$3).value),nativeProps:{className:'bell-avatar-text'}},function(_4){_p(_v0,['color'],$3).value||_p(_v0,['fontSize'],$3).value?_d(_4,'nativeProps',[_p(_v0,['color'],$3).value?['color: ',_p(_v0,['color'],$3).value,';'].join(''):$1,_p(_v0,['fontSize'],$3).value?['font-size: ',_p(_v0,['fontSize'],$3).value,'px;'].join(''):$1].join(''),'style.cssText'):$1;}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

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
              var size = this.get('size');
              return Yox.is.numeric(size)
                  ? size
                  : UNDEFINED;
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

  function template$w(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-badge',_p(_v0,['status'],$3).value?'-status':$1,_p(_v0,['status'],$3).value?[' bell-badge-status-',_p(_v0,['status'],$3).value].join(''):_p(_v0,['type'],$3).value?[' bell-badge-',_p(_v0,['type'],$3).value].join(''):$1,_p(_v0,['ripple'],$3).value?' bell-badge-ripple':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);!_p(_v0,['hidden'],$3).value?[_p(_v0,['dot'],$3).value?_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-badge-dot'},isStatic:$3}):_5[_5.length]={context:_a,isComment:$3,text:''},_p(_v0,['text'],$3).value||_r(_p(_v0,['isNumeric'],$3,$1,_t&&_t.isNumeric||_u.isNumeric).value,[_p(_v0,['count'],$3).value]).value?_5[_5.length]=_b({context:_a,tag:'span',ref:'append',text:_s(_p(_v0,['text'],$3).value||_r(_p(_v0,['formatText'],$3,$1,_t&&_t.formatText||_u.formatText).value,[_p(_v0,['count'],$3).value,_p(_v0,['max'],$3).value]).value),nativeProps:{className:['bell-badge-text',_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['children']).value?' bell-badge-text-append':$1].join('')}}):_5[_5.length]={context:_a,isComment:$3,text:''}]:_5[_5.length]={context:_a,isComment:$3,text:''};});}

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

  function template$x(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_p(_v0,['type'],$3).value===_p(_v0,['RAW_TYPE_DATE'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-datepicker-date bell-datepicker-panel',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-header'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-prev'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click','offset(-12)','click','','offset',{args:function(_3,_10,_11){return [-12]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-left-s-fill',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click','offset(-1)','click','','offset',{args:function(_3,_10,_11){return [-1]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-left-s-line',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});});_5[_5.length]=_b({context:_a,tag:'span'},function(_4){_p(_v0,['canPickYear'],$3).value?[_d(_4,'nativeProps','bell-datepicker-header-link','className'),_d(_4,'events',_h('click',"set('type', RAW_TYPE_YEAR)",'click','','set',{args:function(_3,_10,_11){return ['type',_p(_v0,['RAW_TYPE_YEAR'],$3,_3).value]}}),'click')]:$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'span',text:_s(_p(_v0,['date','year'],$3).value),nativeProps:{className:'bell-datepicker-header-year'}});_e(_5,{context:_a,isText:$3,text:'年'});});_5[_5.length]=_b({context:_a,tag:'span'},function(_4){_p(_v0,['canPickMonth'],$3).value?[_d(_4,'nativeProps','bell-datepicker-header-link','className'),_d(_4,'events',_h('click',"set('type', RAW_TYPE_MONTH)",'click','','set',{args:function(_3,_10,_11){return ['type',_p(_v0,['RAW_TYPE_MONTH'],$3,_3).value]}}),'click')]:$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'span',text:_s(_p(_v0,['date','month'],$3).value),nativeProps:{className:'bell-datepicker-header-month'}});_e(_5,{context:_a,isText:$3,text:'月'});});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-next'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click','offset(1)','click','','offset',{args:function(_3,_10,_11){return [1]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-right-s-line',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click','offset(12)','click','','offset',{args:function(_3,_10,_11){return [12]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-right-s-fill',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});});});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-body'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-weeks'}},$1,function(_5){_n(_p(_v0,['weeks'],$3),function(_8,_9,_7){_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0).value),nativeProps:{className:'bell-datepicker-col'}});});});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-days'}},$1,function(_5){_n(_p(_v0,['datasource'],$3),function(_8,_9,_7){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-row'}},$1,function(_5){_n(_p(_v0,['list']),function(_8,_9,_7){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-datepicker-col',_r(_p(_v0,['isEnabled'],$3,$1,_t&&_t.isEnabled||_u.isEnabled).value,[_p(_v0).value]).value?[' bell-datepicker-col-enabled',_r(_p(_v0,['isCurrentMonth'],$3,$1,_t&&_t.isCurrentMonth||_u.isCurrentMonth).value,[_p(_v0).value]).value?[' bell-datepicker-col-current-month',_r(_p(_v0,['isChecked'],$3,$1,_t&&_t.isChecked||_u.isChecked).value,[_p(_v0).value]).value?' bell-datepicker-col-checked':$1].join(''):' bell-datepicker-col-adjacent-month'].join(''):' bell-datepicker-col-disabled'].join('')}},function(_4){_r(_p(_v0,['isEnabled'],$3,$1,_t&&_t.isEnabled||_u.isEnabled).value,[_p(_v0).value]).value?_d(_4,'events',_h('click','click(this)','click','','click',{args:function(_3,_10,_11){return [_p(_v0,$1,$1,_3).value]}}),'click'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['date']).value),nativeProps:{className:'bell-datepicker-text'}});});});});});});});}):_p(_v0,['type'],$3).value===_p(_v0,['RAW_TYPE_YEAR'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'DateYear',props:{checkedYear:_p(_v0,['date','year'],$3).value},isComponent:$3}):_p(_v0,['type'],$3).value===_p(_v0,['RAW_TYPE_MONTH'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'DateMonth',props:{checkedYear:_p(_v0,['date','year'],$3).value,checkedMonth:_p(_v0,['date','month'],$3).value},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};}

  function template$y(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_p(_v0,['type'],$3).value===_p(_v0,['RAW_TYPE_MONTH'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-datepicker-month bell-datepicker-panel',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-header'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-prev'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click',"decrease('year', 10)",'click','','decrease',{args:function(_3,_10,_11){return ['year',10]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-left-s-fill',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click',"decrease('year', 1)",'click','','decrease',{args:function(_3,_10,_11){return ['year',1]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-left-s-line',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});});_5[_5.length]=_b({context:_a,tag:'span'},function(_4){_p(_v0,['canPickYear'],$3).value?[_d(_4,'nativeProps','bell-datepicker-header-link','className'),_d(_4,'events',_h('click',"set('type', RAW_TYPE_YEAR)",'click','','set',{args:function(_3,_10,_11){return ['type',_p(_v0,['RAW_TYPE_YEAR'],$3,_3).value]}}),'click')]:$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'span',text:_s(_p(_v0,['year'],$3).value),nativeProps:{className:'bell-datepicker-header-year'}});_e(_5,{context:_a,isText:$3,text:'年'});});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-next'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click',"increase('year', 1)",'click','','increase',{args:function(_3,_10,_11){return ['year',1]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-right-s-line',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click',"increase('year', 10)",'click','','increase',{args:function(_3,_10,_11){return ['year',10]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-right-s-fill',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});});});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-body'}},$1,function(_5){_n(_p(_v0,['datasource'],$3),function(_8,_9,_7){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-row'}},$1,function(_5){_n(_p(_v0),function(_8,_9,_7){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-datepicker-col bell-datepicker-col-enabled',_r(_p(_v0,['isChecked'],$3,$1,_t&&_t.isChecked||_u.isChecked).value,[_p(_v0).value]).value?' bell-datepicker-col-checked':$1].join('')},events:{click:_h('click','click(this)','click','','click',{args:function(_3,_10,_11){return [_p(_v0,$1,$1,_3).value]}})}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['text']).value),nativeProps:{className:'bell-datepicker-text'}});});});});});});}):_p(_v0,['type'],$3).value===_p(_v0,['RAW_TYPE_YEAR'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'DateYear',props:{checkedYear:_p(_v0,['year'],$3).value},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};}

  function template$z(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-datepicker-year bell-datepicker-panel',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-header'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button bell-datepicker-prev'},events:{click:_h('click',"decrease('year', count)",'click','','decrease',{args:function(_3,_10,_11){return ['year',_p(_v0,['count'],$3,_3).value]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-left-s-line',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});_5[_5.length]=_b({context:_a,tag:'span',text:_s(_p(_v0,['year'],$3).value),nativeProps:{className:'bell-datepicker-header-year'}});_e(_5,{context:_a,isText:$3,text:'年'});_5[_5.length]=_b({context:_a,tag:'span',text:'-',nativeProps:{className:'bell-datepicker-header-separator'},isStatic:$3});_5[_5.length]=_b({context:_a,tag:'span',text:_s(_p(_v0,['year'],$3).value+_p(_v0,['count'],$3).value-1),nativeProps:{className:'bell-datepicker-header-year'}});_e(_5,{context:_a,isText:$3,text:'年'});_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button bell-datepicker-next'},events:{click:_h('click',"increase('year', count)",'click','','increase',{args:function(_3,_10,_11){return ['year',_p(_v0,['count'],$3,_3).value]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-right-s-line',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-body'}},$1,function(_5){_n(_p(_v0,['datasource'],$3),function(_8,_9,_7){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-row'}},$1,function(_5){_n(_p(_v0),function(_8,_9,_7){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-datepicker-col bell-datepicker-col-enabled',_r(_p(_v0,['isChecked'],$3,$1,_t&&_t.isChecked||_u.isChecked).value,[_p(_v0).value]).value?' bell-datepicker-col-checked':$1].join('')},events:{click:_h('click','click(this)','click','','click',{args:function(_3,_10,_11){return [_p(_v0,$1,$1,_3).value]}})}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0).value),nativeProps:{className:'bell-datepicker-text'}});});});});});});});}

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
  function lpad(value) {
      return value < 10
          ? '0' + value
          : '' + value;
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
          .replace(/MM/i, lpad(date.getMonth() + 1))
          .replace(/M/i, toString(date.getMonth()))
          .replace(/dd/i, lpad(date.getDate()))
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

  function template$A(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1},_v1=function(_3){return _3.length-3};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-datepicker-daterange',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-panel'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-header'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-prev'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click','offsetStart(-12)','click','','offsetStart',{args:function(_3,_10,_11){return [-12]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-left-s-fill',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click','offsetStart(-1)','click','','offsetStart',{args:function(_3,_10,_11){return [-1]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-left-s-line',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});});_5[_5.length]=_b({context:_a,tag:'span',text:_s(_p(_v0,['startDate','year'],$3).value),nativeProps:{className:'bell-datepicker-header-year'}});_e(_5,{context:_a,isText:$3,text:'年'});_5[_5.length]=_b({context:_a,tag:'span',text:_s(_p(_v0,['startDate','month'],$3).value),nativeProps:{className:'bell-datepicker-header-month'}});_e(_5,{context:_a,isText:$3,text:'月'});_p(_v0,['splitPanel'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-next'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click','offsetStart(1)','click','','offsetStart',{args:function(_3,_10,_11){return [1]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-right-s-line',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click','offsetStart(12)','click','','offsetStart',{args:function(_3,_10,_11){return [12]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-right-s-fill',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});}):_5[_5.length]={context:_a,isComment:$3,text:''};});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-body'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-weeks'}},$1,function(_5){_n(_p(_v0,['weeks'],$3),function(_8,_9,_7){_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0).value),nativeProps:{className:'bell-datepicker-col'}});});});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-days'},events:{mouseleave:_h('mouseleave','leave()','mouseleave','','leave')}},$1,function(_5){_n(_p(_v0,['startDatasource'],$3),function(_8,_9,_7){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-row'}},$1,function(_5){_n(_p(_v0,['list']),function(_8,_9,_7){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-datepicker-col',_r(_p(_v0,['isEnabled'],$3,$1,_t&&_t.isEnabled||_u.isEnabled).value,[_p(_v0).value]).value?[' bell-datepicker-col-enabled',_r(_p(_v0,['isCurrentMonth'],$3,$1,_t&&_t.isCurrentMonth||_u.isCurrentMonth).value,[_p(_v0).value,_p(_v1,['startDate']).value]).value?[' bell-datepicker-col-current-month',_p(_v0,['timestamp']).value===_p(_v1,['computedCheckedStartTimestamp']).value?[' bell-datepicker-col-checked',_p(_v1,['computedCheckedEndTimestamp']).value?' bell-datepicker-col-start':' bell-datepicker-col-range'].join(''):$1,_p(_v0,['timestamp']).value===_p(_v1,['computedCheckedEndTimestamp']).value?' bell-datepicker-col-checked bell-datepicker-col-end':$1,_p(_v1,['computedCheckedStartTimestamp']).value<_p(_v0,['timestamp']).value&&_p(_v1,['computedCheckedEndTimestamp']).value>_p(_v0,['timestamp']).value?' bell-datepicker-col-range':$1].join(''):' bell-datepicker-col-adjacent-month'].join(''):' bell-datepicker-col-disabled'].join('')}},function(_4){_p(_v1,['pinDate']).value?_d(_4,'events',_h('mouseenter','hover(this)','mouseenter','','hover',{args:function(_3,_10,_11){return [_p(_v0,$1,$1,_3).value]}}),'mouseenter'):$1;_r(_p(_v0,['isEnabled'],$3,$1,_t&&_t.isEnabled||_u.isEnabled).value,[_p(_v0).value]).value?_d(_4,'events',_h('click','click(this)','click','','click',{args:function(_3,_10,_11){return [_p(_v0,$1,$1,_3).value]}}),'click'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['date']).value),nativeProps:{className:'bell-datepicker-text'}});});});});});});});});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-panel'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-header'}},$1,function(_5){_p(_v0,['splitPanel'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-prev'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click','offsetEnd(-12)','click','','offsetEnd',{args:function(_3,_10,_11){return [-12]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-left-s-fill',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click','offsetEnd(-1)','click','','offsetEnd',{args:function(_3,_10,_11){return [-1]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-left-s-line',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});}):_5[_5.length]={context:_a,isComment:$3,text:''};_5[_5.length]=_b({context:_a,tag:'span',text:_s(_p(_v0,['endDate','year'],$3).value),nativeProps:{className:'bell-datepicker-header-year'}});_e(_5,{context:_a,isText:$3,text:'年'});_5[_5.length]=_b({context:_a,tag:'span',text:_s(_p(_v0,['endDate','month'],$3).value),nativeProps:{className:'bell-datepicker-header-month'}});_e(_5,{context:_a,isText:$3,text:'月'});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-next'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click','offsetEnd(1)','click','','offsetEnd',{args:function(_3,_10,_11){return [1]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-right-s-line',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click','offsetEnd(12)','click','','offsetEnd',{args:function(_3,_10,_11){return [12]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-right-s-fill',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});});});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-body'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-weeks'}},$1,function(_5){_n(_p(_v0,['weeks'],$3),function(_8,_9,_7){_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0).value),nativeProps:{className:'bell-datepicker-col'}});});});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-days'},events:{mouseleave:_h('mouseleave','leave()','mouseleave','','leave')}},$1,function(_5){_n(_p(_v0,['endDatasource'],$3),function(_8,_9,_7){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-row'}},$1,function(_5){_n(_p(_v0,['list']),function(_8,_9,_7){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-datepicker-col',_r(_p(_v0,['isEnabled'],$3,$1,_t&&_t.isEnabled||_u.isEnabled).value,[_p(_v0).value]).value?[' bell-datepicker-col-enabled',_r(_p(_v0,['isCurrentMonth'],$3,$1,_t&&_t.isCurrentMonth||_u.isCurrentMonth).value,[_p(_v0).value,_p(_v1,['endDate']).value]).value?[' bell-datepicker-col-current-month',_p(_v0,['timestamp']).value===_p(_v1,['computedCheckedStartTimestamp']).value?[' bell-datepicker-col-checked',_p(_v1,['computedCheckedEndTimestamp']).value?' bell-datepicker-col-start':' bell-datepicker-col-range'].join(''):$1,_p(_v0,['timestamp']).value===_p(_v1,['computedCheckedEndTimestamp']).value?' bell-datepicker-col-checked bell-datepicker-col-end':$1,_p(_v1,['computedCheckedStartTimestamp']).value<_p(_v0,['timestamp']).value&&_p(_v1,['computedCheckedEndTimestamp']).value>_p(_v0,['timestamp']).value?' bell-datepicker-col-range':$1].join(''):' bell-datepicker-col-adjacent-month'].join(''):' bell-datepicker-col-disabled'].join('')}},function(_4){_p(_v1,['pinDate']).value?_d(_4,'events',_h('mouseenter','hover(this)','mouseenter','','hover',{args:function(_3,_10,_11){return [_p(_v0,$1,$1,_3).value]}}),'mouseenter'):$1;_r(_p(_v0,['isEnabled'],$3,$1,_t&&_t.isEnabled||_u.isEnabled).value,[_p(_v0).value]).value?_d(_4,'events',_h('click','click(this)','click','','click',{args:function(_3,_10,_11){return [_p(_v0,$1,$1,_3).value]}}),'click'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['date']).value),nativeProps:{className:'bell-datepicker-text'}});});});});});});});});});}

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

  function template$B(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1},_v1=function(_3){return _3.length-3},_v2=function(_3){return _3.length-2};_p(_v0,['type'],$3).value===_p(_v0,['RAW_TYPE_WEEK'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-datepicker-week bell-datepicker-panel',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-header'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-prev'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click','offset(-12)','click','','offset',{args:function(_3,_10,_11){return [-12]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-left-s-fill',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click','offset(-1)','click','','offset',{args:function(_3,_10,_11){return [-1]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-left-s-line',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});});_5[_5.length]=_b({context:_a,tag:'span'},function(_4){_p(_v0,['canPickYear'],$3).value?[_d(_4,'nativeProps','bell-datepicker-header-link','className'),_d(_4,'events',_h('click',"set('type', RAW_TYPE_YEAR)",'click','','set',{args:function(_3,_10,_11){return ['type',_p(_v0,['RAW_TYPE_YEAR'],$3,_3).value]}}),'click')]:$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'span',text:_s(_p(_v0,['date','year'],$3).value),nativeProps:{className:'bell-datepicker-header-year'}});_e(_5,{context:_a,isText:$3,text:'年'});});_5[_5.length]=_b({context:_a,tag:'span'},function(_4){_p(_v0,['canPickMonth'],$3).value?[_d(_4,'nativeProps','bell-datepicker-header-link','className'),_d(_4,'events',_h('click',"set('type', RAW_TYPE_MONTH)",'click','','set',{args:function(_3,_10,_11){return ['type',_p(_v0,['RAW_TYPE_MONTH'],$3,_3).value]}}),'click')]:$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'span',text:_s(_p(_v0,['date','month'],$3).value),nativeProps:{className:'bell-datepicker-header-month'}});_e(_5,{context:_a,isText:$3,text:'月'});});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-next'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click','offset(12)','click','','offset',{args:function(_3,_10,_11){return [12]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-right-s-line',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-datepicker-header-button'},events:{click:_h('click','offset(1)','click','','offset',{args:function(_3,_10,_11){return [1]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-right-s-fill',size:'0',className:'bell-datepicker-header-icon'},isComponent:$3});});});});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-body'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-weeks'}},$1,function(_5){_n(_p(_v0,['weeks'],$3),function(_8,_9,_7){_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0).value),nativeProps:{className:'bell-datepicker-col'}});});});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-days'}},$1,function(_5){_n(_p(_v0,['datasource'],$3),function(_8,_9,_7,rowIndex){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-row'}},$1,function(_5){_n(_p(_v0,['list']),function(_8,_9,_7,colIndex){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-datepicker-col',_r(_p(_v0,['isEnabled'],$3,$1,_t&&_t.isEnabled||_u.isEnabled).value,[_p(_v0).value]).value?[' bell-datepicker-col-enabled',_r(_p(_v0,['isCurrentMonth'],$3,$1,_t&&_t.isCurrentMonth||_u.isCurrentMonth).value,[_p(_v0).value]).value?' bell-datepicker-col-current-month':' bell-datepicker-col-adjacent-month'].join(''):' bell-datepicker-col-disabled',_p(_v1,['checkedTimestamp']).value>=_p(_v2,['start','timestamp']).value&&_p(_v1,['checkedTimestamp']).value<_p(_v2,['end','timestamp']).value?colIndex===0?' bell-datepicker-col-checked bell-datepicker-col-start':colIndex===_9-1?' bell-datepicker-col-checked bell-datepicker-col-end':' bell-datepicker-col-range':$1].join('')}},function(_4){_r(_p(_v0,['isEnabled'],$3,$1,_t&&_t.isEnabled||_u.isEnabled).value,[_p(_v0).value]).value?_d(_4,'events',_h('click','click(../rowIndex)','click','','click',{args:function(_3,_10,_11){return [rowIndex]}}),'click'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['date']).value),nativeProps:{className:'bell-datepicker-text'}});});});});});});});}):_p(_v0,['type'],$3).value===_p(_v0,['RAW_TYPE_YEAR'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'DateYear',props:{checkedYear:_p(_v0,['date','year'],$3).value},isComponent:$3}):_p(_v0,['type'],$3).value===_p(_v0,['RAW_TYPE_MONTH'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'DateMonth',props:{checkedYear:_p(_v0,['date','year'],$3).value,checkedMonth:_p(_v0,['date','month'],$3).value},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};}

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

  function template$C(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Dropdown',props:{trigger:'custom',visible:_p(_v0,['visible'],$3).value,placement:_p(_v0,['placement'],$3).value,className:['bell-datepicker',_p(_v0,['status'],$3).value?[' bell-datepicker-',_p(_v0,['status'],$3).value].join(''):$1,_p(_v0,['size'],$3).value?[' bell-datepicker-',_p(_v0,['size'],$3).value].join(''):$1,_p(_v0,['block'],$3).value?' bell-datepicker-block':$1,_p(_v0,['disabled'],$3).value?' bell-datepicker-disabled':' bell-datepicker-enabled',_p(_v0,['clearable'],$3).value?' bell-datepicker-clearable':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')},events:{outside:_h('outside','handleOutsideClick()','outside','','handleOutsideClick',$1,$3)},isComponent:$3},function(_4){_p(_v0,['width'],$3).value||_p(_v0,['style'],$3).value?_d(_4,'props',[_p(_v0,['width'],$3).value?['width: ',_p(_v0,['width'],$3).value,'px;'].join(''):$1,_p(_v0,['style'],$3).value?_p(_v0,['style'],$3).value:$1].join(''),'style'):$1;},{$slot_children:function(_5,_6){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-button'}},function(_4){!_p(_v0,['disabled'],$3).value?_d(_4,'events',_h('click',"toggle('visible')",'click','','toggle',{args:function(_3,_10,_11){return ['visible']}}),'click'):$1;},function(_5){_p(_v0,['formatedValues','length'],$3).value>0?_p(_v0,['multiple'],$3).value&&_p(_v0,['type'],$3).value!==_p(_v0,['RAW_TYPE_DATE_RANGE'],$3).value&&_p(_v0,['type'],$3).value!==_p(_v0,['RAW_TYPE_WEEK'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-values'}},$1,function(_5){_n(_p(_v0,['formatedValues'],$3),function(_8,_9,_7,index){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Tag',props:{simple:$3,closable:$3},events:{close:_h('close','handleRemoveItem($event, index)','close','','handleRemoveItem',{args:function(_3,_10,_11){return [_10,index]}},$3)},isComponent:$3},$1,{$slot_children:function(_5,_6){_e(_5,{context:_a,isText:$3,text:_s(_p(_v0).value)});}});});}):_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-value'}},$1,function(_5){_e(_5,{context:_a,isText:$3,text:_s(_p(_v0,['formatedValues','0'],$3).value)});_p(_v0,['formatedValues','1'],$3).value?[_5[_5.length]=_b({context:_a,tag:'span',text:'~',nativeProps:{className:'bell-datepicker-separator'},isStatic:$3}),_e(_5,{context:_a,isText:$3,text:_s(_p(_v0,['formatedValues','1'],$3).value)})]:_5[_5.length]={context:_a,isComment:$3,text:''};}):_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['placeholder'],$3).value),nativeProps:{className:'bell-datepicker-placeholder'}});_p(_v0,['clearable'],$3).value&&_p(_v0,['formatedValues','length'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'close-circle-fill',size:'0',className:'bell-datepicker-clear-icon'},events:{'click.native':_h('click.native','handleClearClick()','click','native','handleClearClick',$1,$1,$3)},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'calendar-line',size:'0',className:'bell-datepicker-calendar-icon'},isComponent:$3});});},$slot_overlay:function(_5,_6){_p(_v0,['shortcuts'],$3).value&&_p(_v0,['shortcuts','length'],$3).value>0?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-datepicker-shortcut'}},$1,function(_5){_n(_p(_v0,['shortcuts'],$3),function(_8,_9,_7){_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['text']).value),nativeProps:{className:'bell-datepicker-shortcut-item'},events:{click:_h('click','handleShortcutClick(this)','click','','handleShortcutClick',{args:function(_3,_10,_11){return [_p(_v0,$1,$1,_3).value]}})}});});}):_5[_5.length]={context:_a,isComment:$3,text:''};_p(_v0,['type'],$3).value===_p(_v0,['RAW_TYPE_DATE'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'DateView',props:{defaultDate:_p(_v0,['defaultSimpleDate','timestamp'],$3).value,checkedDate:_p(_v0,['value'],$3).value,disabledDate:_p(_v0,['disabledDate'],$3).value,canPickYear:$3,canPickMonth:$3},isComponent:$3}):_p(_v0,['type'],$3).value===_p(_v0,['RAW_TYPE_DATE_RANGE'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'DateRange',props:{splitPanel:_p(_v0,['splitPanel'],$3).value,defaultStartDate:_p(_v0,['defaultSimpleDate','timestamp'],$3).value,checkedStartDate:_p(_v0,['value','0'],$3).value,defaultEndDate:_p(_v0,['defaultSimpleDate','timestamp'],$3).value,checkedEndDate:_p(_v0,['value','1'],$3).value,disabledDate:_p(_v0,['disabledDate'],$3).value},isComponent:$3}):_p(_v0,['type'],$3).value===_p(_v0,['RAW_TYPE_WEEK'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'DateWeek',props:{defaultDate:_p(_v0,['defaultSimpleDate','timestamp'],$3).value,checkedDate:_p(_v0,['value','0'],$3).value,canPickYear:$3,canPickMonth:$3},isComponent:$3}):_p(_v0,['type'],$3).value===_p(_v0,['RAW_TYPE_YEAR'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'DateYear',props:{defaultDate:_p(_v0,['defaultSimpleDate','timestamp'],$3).value,checkedDate:_p(_v0,['value'],$3).value},isComponent:$3}):_p(_v0,['type'],$3).value===_p(_v0,['RAW_TYPE_MONTH'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'DateMonth',props:{defaultDate:_p(_v0,['defaultSimpleDate','timestamp'],$3).value,checkedDate:_p(_v0,['value'],$3).value,canPickYear:$3},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};}});}

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
          change: {
              listener: function (event) {
                  event.stop();
              },
              ns: 'input',
          },
          clear: {
              listener: function (event) {
                  event.stop();
                  this.fire({
                      type: 'clear',
                      ns: 'datepicker',
                  }, TRUE);
              },
              ns: 'input',
          },
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
              this.set({
                  value: this.get('multiple') ? [] : UNDEFINED,
              });
              var clearEvent = {
                  type: 'clear',
                  ns: 'datepicker',
              };
              this.fire(clearEvent, TRUE);
              this.fire(clearEvent);
          },
          handleRemoveItem: function (event, index) {
              event.stop();
              this.removeAt('value', index);
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
                      }
                  }
                  else {
                      me.append('value', date);
                  }
              }
              else {
                  me.set('value', date);
              }
              if (!me.get('multiple')) {
                  me.nextTick(function () {
                      me.set('visible', FALSE);
                  });
              }
          },
          dateRangeChange: function (start, end) {
              this.set('value', [new Date(start), new Date(end)]);
              if (!this.get('multiple')) {
                  this.nextTick(function () {
                      this.set('visible', FALSE);
                  });
              }
          }
      },
  });

  function template$D(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-tooltip',_p(_v0,['disabled'],$3).value?' bell-tooltip-disabled':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-tooltip-el'}},function(_4){!_p(_v0,['disabled'],$3).value?_p(_v0,['mode'],$3).value==='click'?_d(_4,'events',_h('click','click()','click','','click'),'click'):[_d(_4,'events',_h('mouseenter','enter()','mouseenter','','enter'),'mouseenter'),_d(_4,'events',_h('mouseleave','leave()','mouseleave','','leave'),'mouseleave')]:$1;},function(_5){_l('$slot_children',_5);});_5[_5.length]=_b({context:_a,tag:'div',ref:'popup',nativeProps:{className:['bell-tooltip-popup',_p(_v0,['theme'],$3).value?[' bell-tooltip-',_p(_v0,['theme'],$3).value].join(''):$1,_p(_v0,['placement'],$3).value?[' bell-tooltip-',_p(_v0,['placement'],$3).value].join(''):$1].join('')}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-tooltip-arrow'},isStatic:$3});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-tooltip-content'}},function(_4){_p(_v0,['maxWidth'],$3).value||_p(_v0,['maxHeight'],$3).value?_d(_4,'nativeProps',[_p(_v0,['maxWidth'],$3).value?['max-width: ',_p(_v0,['maxWidth'],$3).value,'px;'].join(''):$1,_p(_v0,['maxHeight'],$3).value?['max-height: ',_p(_v0,['maxHeight'],$3).value,'px;'].join(''):$1].join(''),'style.cssText'):$1;},function(_5){_l('$slot_content',_5,function(){_e(_5,{context:_a,isText:$3,text:_s(_p(_v0,['content'],$3).value)});});});});});}

  var CLASS_VISIBLE$4 = 'bell-tooltip-visible';
  var CLASS_FADE$4 = 'bell-tooltip-fade';
  var Tooltip = Yox.define({
      template: template$D,
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

  function template$E(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-collapse',_p(_v0,['simple'],$3).value?' bell-collapse-simple':' bell-collapse-bordered',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);});}

  var Collapse = Yox.define({
      template: template$E,
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

  function template$F(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-collapse-item',_p(_v0,['opened'],$3).value?' bell-collapse-opened':$1,_p(_v0,['disabled'],$3).value?' bell-collapse-disabled':' bell-collapse-enabled',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-collapse-header'}},function(_4){!_p(_v0,['disabled'],$3).value?_d(_4,'events',_h('click','click()','click','','click'),'click'):$1;},function(_5){_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['extra']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-collapse-extra'}},$1,function(_5){_l('$slot_extra',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-right-s-line',size:'0',className:'bell-collapse-arrow-icon'},isComponent:$3});_e(_5,{context:_a,isText:$3,text:_s(_p(_v0,['title'],$3).value)});});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-collapse-content'}},$1,function(_5){_l('$slot_children',_5);});});}

  var CollapseItem = Yox.define({
      template: template$F,
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

  function template$G(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-card bell-card-shadow-',_p(_v0,['shadow'],$3).value,_p(_v0,['simple'],$3).value?' bell-card-simple':' bell-card-bordered',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['width'],$3).value||_p(_v0,['style'],$3).value?_d(_4,'nativeProps',[_p(_v0,['width'],$3).value?['width: ',_p(_v0,['width'],$3).value,'px;'].join(''):$1,_p(_v0,['style'],$3).value?_p(_v0,['style'],$3).value:$1].join(''),'style.cssText'):$1;},function(_5){_l('$slot_children',_5);});}

  var Card = Yox.define({
      template: template$G,
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

  function template$H(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-card-header',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_avatar',_5);_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-card-header-detail'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-card-header-title'}},$1,function(_5){_l('$slot_title',_5);});_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['subTitle']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-card-header-sub-title'}},$1,function(_5){_l('$slot_subTitle',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};});_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['extra']).value?_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-card-header-extra'}},$1,function(_5){_l('$slot_extra',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

  var CardHeader = Yox.define({
      template: template$H,
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

  function template$I(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-card-media',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['title']).value||_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['subTitle']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-card-media-detail'}},$1,function(_5){_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['title']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-card-media-title'}},$1,function(_5){_l('$slot_title',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['subTitle']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-card-media-sub-title'}},$1,function(_5){_l('$slot_subTitle',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

  var CardMedia = Yox.define({
      template: template$I,
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

  function template$J(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-card-body',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);});}

  var CardBody = Yox.define({
      template: template$J,
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

  function template$K(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-card-footer',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);});}

  var CardFooter = Yox.define({
      template: template$K,
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

  function template$L(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-page-header',_p(_v0,['showBack'],$3).value?' bell-page-header-with-back':$1,_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['tags']).value?' bell-page-header-with-tags':$1,_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['extra']).value?' bell-page-header-with-extra':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_breadcrumb',_5);_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-page-header-header'}},$1,function(_5){_p(_v0,['showBack'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-left-line',size:'0',className:'bell-page-header-back'},events:{'click.native':_i('click.native','back.pageHeader','click','native','back','pageHeader',$1,$3)},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['title'],$3).value),nativeProps:{className:'bell-page-header-title'}});_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['tags']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-page-header-tags'}},$1,function(_5){_l('$slot_tags',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['extra']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-page-header-extra'}},$1,function(_5){_l('$slot_extra',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};});_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['content']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-page-header-body'}},$1,function(_5){_l('$slot_content',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

  var PageHeader = Yox.define({
      template: template$L,
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

  function template$M(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-layout',_p(_v0,['vertical'],$3).value?' bell-layout-vertical':' bell-layout-horizontal',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);});}

  var Layout = Yox.define({
      template: template$M,
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

  function template$N(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-layout-header',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['extra']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-layout-header-extra'}},$1,function(_5){_l('$slot_extra',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};_l('$slot_children',_5);});}

  var LayoutHeader = Yox.define({
      template: template$N,
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

  function template$O(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-layout-content',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);});}

  var LayoutContent = Yox.define({
      template: template$O,
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

  function template$P(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-layout-footer',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);});}

  var LayoutFooter = Yox.define({
      template: template$P,
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

  function template$Q(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-layout-sider',_p(_v0,['collapsed'],$3).value?' bell-layout-sider-collapsed':$1,_p(_v0,['showTrigger'],$3).value?' bell-layout-sider-with-trigger':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['collapsed'],$3).value||_p(_v0,['width'],$3).value||_p(_v0,['style'],$3).value?_d(_4,'nativeProps',[_p(_v0,['collapsed'],$3).value?'flex: 0 0 80px;\nwidth: 80px;\nmin-width: 80px;\nmax-width: 80px;':_p(_v0,['width'],$3).value?['flex: 0 0 ',_p(_v0,['width'],$3).value,'px;\nwidth: ',_p(_v0,['width'],$3).value,'px;\nmin-width: ',_p(_v0,['width'],$3).value,'px;\nmax-width: ',_p(_v0,['width'],$3).value,'px;'].join(''):$1,_p(_v0,['style'],$3).value?_p(_v0,['style'],$3).value:$1].join(''),'style.cssText'):$1;},function(_5){_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['logo']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-layout-sider-logo'}},$1,function(_5){_l('$slot_logo',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};_l('$slot_children',_5);_p(_v0,['showTrigger'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-layout-sider-trigger','style.cssText':_p(_v0,['collapsed'],$3).value?'width: 80px;':_p(_v0,['width'],$3).value?['width: ',_p(_v0,['width'],$3).value,'px;'].join(''):$1},events:{click:_h('click',"toggle('collapsed')",'click','','toggle',{args:function(_3,_10,_11){return ['collapsed']}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'arrow-left-s-line',size:'0',className:'bell-layout-sider-trigger-icon'},isComponent:$3});}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

  var LayoutSider = Yox.define({
      template: template$Q,
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

  function template$R(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'a',nativeAttrs:{ondragstart:'return false'},nativeProps:{className:['bell-link',_p(_v0,['type'],$3).value?[' bell-link-',_p(_v0,['type'],$3).value].join(''):$1,_p(_v0,['size'],$3).value?[' bell-link-',_p(_v0,['size'],$3).value].join(''):$1,_p(_v0,['underline'],$3).value?' bell-link-underline':$1,_p(_v0,['disabled'],$3).value?' bell-link-disabled':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join(''),href:_p(_v0,['href'],$3).value||'javascript:void(0)'}},function(_4){_p(_v0,['target'],$3).value?_d(_4,'nativeProps',_p(_v0,['target'],$3).value,'target'):$1;_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;!_p(_v0,['href'],$3).value&&!_p(_v0,['disabled'],$3).value?_d(_4,'events',_i('click','click.link','click','','click','link'),'click'):$1;},function(_5){_l('$slot_children',_5);});}

  var Link = Yox.define({
      template: template$R,
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

  function template$S(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-list',_p(_v0,['size'],$3).value?[' bell-list-',_p(_v0,['size'],$3).value].join(''):$1,_p(_v0,['simple'],$3).value?' bell-list-simple':' bell-list-bordered',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_v.empty = function(_8,_5,_6){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-list-empty'}},$1,function(_5){_l('$slot_empty',_5,function(){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Empty',isComponent:$3},$1,{$slot_children:function(_5,_6){_e(_5,{context:_a,isText:$3,text:'暂无数据'});}});});});};_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['header']).value?[_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-list-header'}},$1,function(_5){_l('$slot_header',_5);}),_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-list-body'}},$1,function(_5){_l('$slot_children',_5,function(){_m('empty',_8,_5,_6,_v.empty,_w&&_w.empty||_x.empty);});})]:_l('$slot_children',_5,function(){_m('empty',_8,_5,_6,_v.empty,_w&&_w.empty||_x.empty);});_p(_v0,['loading'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Spin',props:{size:'large',fixed:$3},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

  function template$T(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-empty',_p(_v0,['simple'],$3).value?' bell-empty-simple':$1,_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['children']).value?' bell-empty-with-content':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);});}

  var Empty = Yox.define({
      template: template$T,
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
      template: template$S,
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

  function template$U(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-list-item',_p(_v0,['clickable'],$3).value?' bell-list-item-clickable':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;_p(_v0,['clickable'],$3).value?_d(_4,'events',_i('click','click.listItem','click','','click','listItem'),'click'):$1;},function(_5){_l('$slot_children',_5);});}

  var ListItem = Yox.define({
      template: template$U,
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

  function template$V(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-result',_p(_v0,['status'],$3).value?[' bell-result-',_p(_v0,['status'],$3).value].join(''):$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-result-icon'}},$1,function(_5){_l('$slot_icon',_5,function(){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:_p(_v0,['status'],$3).value===_p(_v0,['RAW_TYPE_SUCCESS'],$3).value?'checkbox-circle-fill':_p(_v0,['status'],$3).value===_p(_v0,['RAW_TYPE_WARNING'],$3).value?'error-warning-fill':_p(_v0,['status'],$3).value===_p(_v0,['RAW_TYPE_ERROR'],$3).value?'close-circle-fill':'information-fill',size:'0',className:'bell-result-status-icon'},isComponent:$3});});});_p(_v0,['title'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['title'],$3).value),nativeProps:{className:'bell-result-title'}}):_5[_5.length]={context:_a,isComment:$3,text:''};_p(_v0,['subTitle'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['subTitle'],$3).value),nativeProps:{className:'bell-result-sub-title'}}):_5[_5.length]={context:_a,isComment:$3,text:''};_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['extra']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-result-extra'}},$1,function(_5){_l('$slot_extra',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

  var Result = Yox.define({
      template: template$V,
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

  function template$W(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-exception',_p(_v0,['status'],$3).value?[' bell-exception-',_p(_v0,['status'],$3).value].join(''):$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_p(_v0,['title'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['title'],$3).value),nativeProps:{className:'bell-exception-title'}}):_5[_5.length]={context:_a,isComment:$3,text:''};_p(_v0,['subTitle'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['subTitle'],$3).value),nativeProps:{className:'bell-exception-sub-title'}}):_5[_5.length]={context:_a,isComment:$3,text:''};_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['extra']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-exception-extra'}},$1,function(_5){_l('$slot_extra',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

  var Exception = Yox.define({
      template: template$W,
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

  function template$X(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-divider',_p(_v0,['vertical'],$3).value?' bell-divider-vertical':' bell-divider-horizontal',_p(_v0,['dashed'],$3).value?' bell-divider-dashed':$1,_p(_v0,['align'],$3).value?[' bell-divider-',_p(_v0,['align'],$3).value].join(''):$1,_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['children']).value?' bell-divider-with-text':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['children']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-divider-text'}},$1,function(_5){_l('$slot_children',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

  var Divider = Yox.define({
      template: template$X,
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

  function template$Y(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-circle',_p(_v0,['dashboard'],$3).value?' bell-circle-dashboard':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join(''),'style.cssText':['width: ',_p(_v0,['size'],$3).value,'px;height: ',_p(_v0,['size'],$3).value,'px;',_p(_v0,['style'],$3).value?_p(_v0,['style'],$3).value:$1].join('')}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'svg',nativeAttrs:{viewBox:'0 0 100 100'},isSvg:$3},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'path',nativeAttrs:{d:_p(_v0,['path'],$3).value,stroke:_p(_v0,['trailColor'],$3).value,'stroke-width':_p(_v0,['trailWidth'],$3).value,'fill-opacity':'0',style:_p(_v0,['trailStyle'],$3).value},isSvg:$3});_5[_5.length]=_b({context:_a,tag:'path',nativeAttrs:{d:_p(_v0,['path'],$3).value,'stroke-linecap':_p(_v0,['strokeLinecap'],$3).value,stroke:_p(_v0,['strokeColor'],$3).value,'stroke-width':_p(_v0,['strokeWidth'],$3).value,'fill-opacity':'0',style:_p(_v0,['pathStyle'],$3).value},isSvg:$3});});_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['children']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-circle-content'}},$1,function(_5){_l('$slot_children',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

  var Circle = Yox.define({
      template: template$Y,
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

  function template$Z(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-progress',_p(_v0,['status'],$3).value?[' bell-progress-',_p(_v0,['status'],$3).value].join(''):$1,_p(_v0,['active'],$3).value?' bell-progress-active':$1,_p(_v0,['inside'],$3).value?' bell-progress-inside':' bell-progress-outside',_p(_v0,['vertical'],$3).value?' bell-progress-vertical':' bell-progress-horizontal',!_p(_v0,['inside'],$3).value&&!_p(_v0,['vertical'],$3).value&&_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['children']).value?' bell-progress-with-text':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_v.text = function(_8,_5,_6){_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['children']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-progress-text'}},$1,function(_5){_l('$slot_children',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};};_v.track = function(_8,_5,_6){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-progress-track'}},function(_4){_p(_v0,['vertical'],$3).value?_d(_4,'nativeProps',['width: ',_p(_v0,['thickness'],$3).value,'px;'].join(''),'style.cssText'):_d(_4,'nativeProps',['height: ',_p(_v0,['thickness'],$3).value,'px;'].join(''),'style.cssText');},function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-progress-bar','style.cssText':_p(_v0,['vertical'],$3).value?['height: ',_p(_v0,['percent'],$3).value,'%;\nwidth: ',_p(_v0,['thickness'],$3).value,'px;'].join(''):['width: ',_p(_v0,['percent'],$3).value,'%;\nheight: ',_p(_v0,['thickness'],$3).value,'px;\nline-height: ',_p(_v0,['thickness'],$3).value,'px;'].join('')}},$1,function(_5){_p(_v0,['inside'],$3).value?_m('text',_8,_5,_6,_v.text,_w&&_w.text||_x.text):_5[_5.length]={context:_a,isComment:$3,text:''};});});};_p(_v0,['inside'],$3).value?_m('track',_8,_5,_6,_v.track,_w&&_w.track||_x.track):[!_p(_v0,['vertical'],$3).value&&_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['children']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-progress-block'}},$1,function(_5){_m('track',_8,_5,_6,_v.track,_w&&_w.track||_x.track);}):_m('track',_8,_5,_6,_v.track,_w&&_w.track||_x.track),_m('text',_8,_5,_6,_v.text,_w&&_w.text||_x.text)];});}

  var Progress = Yox.define({
      template: template$Z,
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

  function template$_(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-rate',_p(_v0,['type'],$3).value?[' bell-rate-',_p(_v0,['type'],$3).value].join(''):$1,_p(_v0,['readOnly'],$3).value?' bell-rate-dead':' bell-rate-live',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;!_p(_v0,['readOnly'],$3).value?_d(_4,'events',_h('mouseleave','handleLeave()','mouseleave','','handleLeave'),'mouseleave'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'input',nativeProps:{type:'hidden'},model:_g(_p(_v0,['value'],$3))});_o(1,_p(_v0,['count'],$3).value,$3,function(_8,_9,_7){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:_p(_v0,['iconName'],$3).value,size:_p(_v0,['iconSize'],$3).value,className:['bell-rate-icon-full',_p(_v0,['activeValue'],$3).value-_7>=0?' bell-rate-icon-active':$1].join('')},isComponent:$3},function(_4){!_p(_v0,['readOnly'],$3).value?[_d(_4,'events',_h('mousemove.native','handleMove($event, this)','mousemove','native','handleMove',{args:function(_3,_10,_11){return [_10,_7]}},$1,$3),'mousemove.native'),_d(_4,'events',_h('click.native','handleClick($event, this)','click','native','handleClick',{args:function(_3,_10,_11){return [_10,_7]}},$1,$3),'click.native')]:$1;},{$slot_children:function(_5,_6){_p(_v0,['half'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:_p(_v0,['iconName'],$3).value,size:_p(_v0,['iconSize'],$3).value,className:['bell-rate-icon-half',_p(_v0,['activeValue'],$3).value-_7>=-0.5?' bell-rate-icon-active':$1].join('')},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};}});});_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['children']).value||_p(_v0,['texts'],$3).value?_5[_5.length]=_b({context:_a,tag:'span',nativeProps:{className:'bell-rate-text','style.cssText':['line-height: ',_p(_v0,['iconSize'],$3).value,'px'].join('')}},$1,function(_5){_l('$slot_children',_5,function(){_e(_5,{context:_a,isText:$3,text:_s(_p(_v0,['texts',_p(_v0,['activeValue'],$3).value-1],$3).value)});});}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

  var Rate = Yox.define({
      template: template$_,
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

  function template$$(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1},_v1=function(_3){return _3.length-2};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-tabs',_p(_v0,['type'],$3).value?[' bell-tabs-',_p(_v0,['type'],$3).value].join(''):$1,_p(_v0,['size'],$3).value?[' bell-tabs-',_p(_v0,['size'],$3).value].join(''):$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-tabs-bar'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-tabs-nav',_p(_v0,['closable'],$3).value?' bell-tabs-nav-closable':$1].join('')}},$1,function(_5){_n(_p(_v0,['tabs'],$3),function(_8,_9,_7){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-tabs-tab',_p(_v0,['disabled']).value?' bell-tabs-tab-disabled':' bell-tabs-tab-enabled',_p(_v0,['name']).value===_p(_v1,['value']).value?' bell-tabs-tab-active':$1].join('')}},function(_4){!_p(_v0,['disabled']).value?_d(_4,'events',_h('click','handleClickTab(this)','click','','handleClickTab',{args:function(_3,_10,_11){return [_p(_v0,$1,$1,_3).value]}}),'click'):$1;},function(_5){_p(_v0,['icon']).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{className:'bell-tabs-tab-icon',name:_p(_v0,['icon']).value},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};_e(_5,{context:_a,isText:$3,text:_s(_p(_v0,['label']).value)});_p(_v1,['closable']).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{className:'bell-tabs-tab-close-icon',name:'close-line',size:'0'},events:{'click.native':_h('click.native','handleCloseTab(this)','click','native','handleCloseTab',{args:function(_3,_10,_11){return [_p(_v0,$1,$1,_3).value]}},$1,$3)},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};});});});});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-tabs-content'}},$1,function(_5){_l('$slot_children',_5);});});}

  var Tabs = Yox.define({
      template: template$$,
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

  function template$10(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-tabs-panel',_p(_v0,['isActive'],$3).value?' bell-tabs-panel-active':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);});}

  var TabPanel = Yox.define({
      template: template$10,
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

  function template$11(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-dropdown-item',_p(_v0,['divided'],$3).value?' bell-dropdown-item-divided':$1,_p(_v0,['active'],$3).value?' bell-dropdown-item-active':$1,_p(_v0,['disabled'],$3).value?' bell-dropdown-item-disabled':' bell-dropdown-item-enabled',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;!_p(_v0,['disabled'],$3).value?_d(_4,'events',_i('click','click.dropdownItem','click','','click','dropdownItem'),'click'):$1;},function(_5){_l('$slot_children',_5);});}

  var DropdownItem = Yox.define({
      template: template$11,
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

  function template$12(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-dropdown-menu',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);});}

  var DropdownMenu = Yox.define({
      template: template$12,
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

  function template$13(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-thumbnail',_p(_v0,['loading'],$3).value?' bell-thumbnail-loading':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join(''),'style.cssText':['width:',_p(_v0,['width'],$3).value,'px;height:',_p(_v0,['height'],$3).value,'px;line-height:',_p(_v0,['height'],$3).value,'px;',_p(_v0,['style'],$3).value?_p(_v0,['style'],$3).value:$1].join('')}},$1,function(_5){_p(_v0,['src'],$3).value?[_5[_5.length]=_b({context:_a,tag:'img',nativeAttrs:{ondragstart:'return false'},nativeProps:{className:'bell-thumbnail-image',src:_p(_v0,['src'],$3).value},events:{error:_i('error','error.thumbnail','error','','error','thumbnail')}},function(_4){_p(_v0,['srcSet'],$3).value?_d(_4,'nativeAttrs',_p(_v0,['srcSet'],$3).value,'srcset'):$1;_p(_v0,['alt'],$3).value?_d(_4,'nativeProps',_p(_v0,['alt'],$3).value,'alt'):$1;}),_p(_v0,['showZoom'],$3).value||_p(_v0,['showDownload'],$3).value||_p(_v0,['showDelete'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-thumbnail-mask'}},$1,function(_5){_p(_v0,['showZoom'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'zoom-in-line',size:'0'},events:{'click.native':_i('click.native','zoom.thumbnail','click','native','zoom','thumbnail',$1,$3)},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};_p(_v0,['showDownload'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'download-2-line',size:'0'},events:{'click.native':_i('click.native','download.thumbnail','click','native','download','thumbnail',$1,$3)},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};_p(_v0,['showDelete'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'delete-bin-line',size:'0'},events:{'click.native':_i('click.native','delete.thumbnail','click','native','delete','thumbnail',$1,$3)},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};}):_5[_5.length]={context:_a,isComment:$3,text:''}]:_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-thumbnail-placeholder'}},$1,function(_5){_l('$slot_placeholder',_5);});_p(_v0,['loading'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Spin',props:{size:'large',fixed:$3},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

  var Thumbnail = Yox.define({
      template: template$13,
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
          loading: {
              type: RAW_BOOLEAN,
          },
          showZoom: {
              type: RAW_BOOLEAN,
          },
          showDownload: {
              type: RAW_BOOLEAN,
          },
          showDelete: {
              type: RAW_BOOLEAN,
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
          className: {
              type: RAW_STRING,
          },
          style: {
              type: RAW_STRING,
          }
      },
      components: {
          Icon: Icon,
          Spin: Spin,
      }
  });

  function template$14(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-timeline',_p(_v0,['pending'],$3).value?' bell-timeline-pending':$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);});}

  var Timeline = Yox.define({
      template: template$14,
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

  function template$15(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-timeline-item',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['dot']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-timeline-custom'}},$1,function(_5){_l('$slot_dot',_5);}):_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-timeline-dot'}},function(_4){_p(_v0,['color'],$3).value?_d(_4,'nativeProps',['border-color: ',_p(_v0,['color'],$3).value].join(''),'style.cssText'):$1;});_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-timeline-content'}},$1,function(_5){_l('$slot_children',_5);});});}

  var TimelineItem = Yox.define({
      template: template$15,
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

  function template$16(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-form',_p(_v0,['inline'],$3).value?' bell-form-inline':$1,_p(_v0,['showColon'],$3).value?' bell-form-colon':$1,_p(_v0,['labelAlign'],$3).value?[' bell-form-label-',_p(_v0,['labelAlign'],$3).value].join(''):$1,_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_l('$slot_children',_5);});}

  var Form = Yox.define({
      template: template$16,
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

  function template$17(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-form-item',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_p(_v0,['label'],$3).value||_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['label']).value?[_5[_5.length]=_b({context:_a,tag:'label',nativeProps:{className:['bell-form-item-label',_p(_v0,['showRequiredMark'],$3).value?' bell-form-item-label-required':$1].join('')}},function(_4){_p(_v0,['itemLabelWidth'],$3).value||_p(_v0,['labelAlign'],$3).value?_d(_4,'nativeProps',[_p(_v0,['itemLabelWidth'],$3).value?['width: ',_p(_v0,['itemLabelWidth'],$3).value,'px;'].join(''):$1,_p(_v0,['labelAlign'],$3).value?['vertical-align: ',_p(_v0,['labelAlign'],$3).value,';'].join(''):$1].join(''),'style.cssText'):$1;},function(_5){_l('$slot_label',_5,function(){_e(_5,{context:_a,isText:$3,text:_s(_p(_v0,['label'],$3).value)});});}),_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-form-item-wrapper'}},$1,function(_5){_l('$slot_children',_5);_p(_v0,['showMessage'],$3).value&&_p(_v0,['itemMessage'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['itemMessage'],$3).value),nativeProps:{className:'bell-form-item-error'}}):_5[_5.length]={context:_a,isComment:$3,text:''};})]:_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-form-item-wrapper'}},function(_4){_p(_v0,['itemLabelWidth'],$3).value?_d(_4,'nativeProps',['margin-left: ',_p(_v0,['itemLabelWidth'],$3).value,'px;'].join(''),'style.cssText'):$1;},function(_5){_l('$slot_children',_5);_p(_v0,['showMessage'],$3).value&&_p(_v0,['itemMessage'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['itemMessage'],$3).value),nativeProps:{className:'bell-form-item-error'}}):_5[_5.length]={context:_a,isComment:$3,text:''};});});}

  var FormItem = Yox.define({
      template: template$17,
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

  function template$18(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-dialog',_p(_v0,['className'],$3).value?[' ',_p(_v0,['className'],$3).value].join(''):$1].join('')}},function(_4){_p(_v0,['style'],$3).value?_d(_4,'nativeProps',_p(_v0,['style'],$3).value,'style.cssText'):$1;},function(_5){_p(_v0,['mask'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-dialog-mask'}},function(_4){_p(_v0,['maskClosable'],$3).value?_d(_4,'events',_h('click','close()','click','','close'),'click'):$1;}):_5[_5.length]={context:_a,isComment:$3,text:''};_5[_5.length]=_b({context:_a,tag:'div',ref:'wrapper',nativeProps:{className:'bell-dialog-wrapper'}},function(_4){_p(_v0,['width'],$3).value||_p(_v0,['height'],$3).value?_d(_4,'nativeProps',[_p(_v0,['width'],$3).value?['width:',_p(_v0,['width'],$3).value,'px;'].join(''):$1,_p(_v0,['height'],$3).value?['height:',_p(_v0,['height'],$3).value,'px;'].join(''):$1].join(''),'style.cssText'):$1;},function(_5){_p(_v0,['title'],$3).value||_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['title']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-dialog-header'}},$1,function(_5){_l('$slot_title',_5,function(){_e(_5,{context:_a,isText:$3,text:_s(_p(_v0,['title'],$3).value)});});}):_5[_5.length]={context:_a,isComment:$3,text:''};_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['content']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-dialog-body'}},$1,function(_5){_l('$slot_content',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};_r(_p(_v0,['hasSlot'],$3,$1,_t&&_t.hasSlot||_u.hasSlot).value,['footer']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-dialog-footer'}},$1,function(_5){_l('$slot_footer',_5);}):_5[_5.length]={context:_a,isComment:$3,text:''};_p(_v0,['closable'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'close-line',size:'0',className:'bell-dialog-close'},events:{'click.native':_h('click.native','close()','click','native','close',$1,$1,$3)},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};});});}

  var CLASS_VISIBLE$5 = 'bell-dialog-visible';
  var CLASS_FADE$5 = 'bell-dialog-fade';
  var Dialog = Yox.define({
      template: template$18,
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

  function template$19(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-2},_v1=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-table',_p(_v1,['stripe'],$3).value?' bell-table-stripe':$1,_p(_v1,['simple'],$3).value?' bell-table-simple':' bell-table-bordered',_p(_v1,['className'],$3).value?[' ',_p(_v1,['className'],$3).value].join(''):$1].join(''),'style.cssText':[_p(_v1,['width'],$3).value?['width: ',_p(_v1,['width'],$3).value,'px; overflow-x: auto;'].join(''):$1,_p(_v1,['height'],$3).value?['height: ',_p(_v1,['height'],$3).value,'px; overflow-y: auto;'].join(''):$1,_p(_v1,['style'],$3).value?_p(_v1,['style'],$3).value:$1].join('')}},$1,function(_5){_p(_v1,['colWidths'],$3).value?[_5[_5.length]=_b({context:_a,tag:'table'},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'colgroup'},$1,function(_5){_n(_p(_v1,['columns'],$3),function(_8,_9,_7,index){_5[_5.length]=_b({context:_a,tag:'col',nativeAttrs:{width:_p(_v0,['colWidths',index]).value}});});});_5[_5.length]=_b({context:_a,tag:'thead',nativeProps:{className:'bell-table-header'}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'tr'},$1,function(_5){_n(_p(_v1,['columns'],$3),function(_8,_9,_7){_5[_5.length]=_b({context:_a,tag:'td'},function(_4){_p(_v1,['align']).value?_d(_4,'nativeProps',['bell-table-',_p(_v1,['align']).value].join(''),'className'):$1;},function(_5){_p(_v1,['key']).value==='selection'?_p(_v1,['list','length'],$3).value>0?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Checkbox',props:{checked:_p(_v0,['allChecked']).value},events:{change:_h('change','allCheckedChange()','change','','allCheckedChange',$1,$3)},isComponent:$3}):_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Checkbox',props:{disabled:$3},isComponent:$3}):[_e(_5,{context:_a,isText:$3,text:_s(_p(_v1,['title']).value)}),_p(_v1,['sortable']).value?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-table-sorter'},events:{click:_h('click','sortColumn(this.key, ../sortKey === this.key && ../sortOrder === SORT_ORDER_ASC ? SORT_ORDER_DESC : SORT_ORDER_ASC)','click','','sortColumn',{args:function(_3,_10,_11){return [_p(_v1,['key'],$1,_3).value,_p(_v0,['sortKey'],$1,_3).value===_p(_v1,['key'],$1,_3).value&&_p(_v0,['sortOrder'],$1,_3).value===_p(_v1,['SORT_ORDER_ASC'],$3,_3).value?_p(_v1,['SORT_ORDER_DESC'],$3,_3).value:_p(_v1,['SORT_ORDER_ASC'],$3,_3).value]}})}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{size:'0',name:'arrow-up-s-fill',className:['bell-table-sort-asc',_p(_v0,['sortKey']).value===_p(_v1,['key']).value&&_p(_v0,['sortOrder']).value===_p(_v1,['SORT_ORDER_ASC'],$3).value?' bell-table-sort-active':$1].join('')},isComponent:$3});_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{size:'0',name:'arrow-down-s-fill',className:['bell-table-sort-desc',_p(_v0,['sortKey']).value===_p(_v1,['key']).value&&_p(_v0,['sortOrder']).value===_p(_v1,['SORT_ORDER_DESC'],$3).value?' bell-table-sort-active':$1].join('')},isComponent:$3});}):_5[_5.length]={context:_a,isComment:$3,text:''}];});});});});_p(_v1,['list','length'],$3).value>0?_5[_5.length]=_b({context:_a,tag:'tbody',nativeProps:{className:'bell-table-body'}},$1,function(_5){_l('$slot_children',_5,function(){_n(_p(_v1,['list'],$3),function(_8,_9,_7,index){_5[_5.length]=_b({context:_a,tag:'tr'},$1,function(_5){_n(_p(_v0,['columns']),function(_8,_9,_7){_p(_v1,['actions']).value&&_p(_v1,['actions','length']).value?_5[_5.length]=_b({context:_a,tag:'td'},function(_4){_p(_v1,['align']).value?_d(_4,'nativeProps',['bell-table-',_p(_v1,['align']).value].join(''),'className'):$1;},function(_5){_n(_p(_v1,['actions']),function(_8,_9,_7){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Button',props:{className:_p(_v1,['className']).value,disabled:_p(_v1,['disabled']).value,block:_p(_v1,['block']).value,shape:_p(_v1,['shape']).value,size:_p(_v1,['size']).value,type:_p(_v1,['type']).value},events:{click:_h('click','clickButton(this, list[index], index)','click','','clickButton',{args:function(_3,_10,_11){return [_p(_v1,$1,$1,_3).value,_p(_v1,['list',index],$3,_3).value,index]}},$3)},isComponent:$3},$1,{$slot_children:function(_5,_6){_e(_5,{context:_a,isText:$3,text:_s(_p(_v1,['text']).value)});}});});}):_p(_v1,['list',index,_p(_v1,['key']).value],$3).value!==$1?_5[_5.length]=_b({context:_a,tag:'td'},function(_4){_p(_v1,['align']).value?_d(_4,'nativeProps',['bell-table-',_p(_v1,['align']).value].join(''),'className'):$1;},function(_5){_p(_v1,['dangerous']).value?_5[_5.length]=_b({context:_a,tag:'div',html:_s(_p(_v1,['list',index,_p(_v1,['key']).value],$3).value)}):_e(_5,{context:_a,isText:$3,text:_s(_p(_v1,['list',index,_p(_v1,['key']).value],$3).value)});}):_p(_v1,['key']).value==='selection'?_5[_5.length]=_b({context:_a,tag:'td'},function(_4){_p(_v1,['align']).value?_d(_4,'nativeProps',['bell-table-',_p(_v1,['align']).value].join(''),'className'):$1;},function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Checkbox',props:{checked:_r(_p(_v1,['inArray'],$3,$1,_t&&_t.inArray||_u.inArray).value,[_p(_v1,['selection'],$3).value,_p(_v1,['list',index,'key'],$3).value]).value},events:{change:_h('change','rowCheckedChange($event, $data, index)','change','','rowCheckedChange',{args:function(_3,_10,_11){return [_10,_11,index]}},$3)},isComponent:$3});}):_5[_5.length]=_b({context:_a,tag:'td'},function(_4){_p(_v1,['align']).value?_d(_4,'nativeProps',['bell-table-',_p(_v1,['align']).value].join(''),'className'):$1;},function(_5){_e(_5,{context:_a,isText:$3,text:_s(_p(_v1,['key']).value)});_e(_5,{context:_a,isText:$3,text:' is not found.'});});});});});});}):_5[_5.length]={context:_a,isComment:$3,text:''};}),_p(_v1,['list','length'],$3).value===0?_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-table-empty'}},$1,function(_5){_l('$slot_empty',_5,function(){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Empty',isComponent:$3},$1,{$slot_children:function(_5,_6){_e(_5,{context:_a,isText:$3,text:'暂无数据'});}});});}):_5[_5.length]={context:_a,isComment:$3,text:''}]:_5[_5.length]={context:_a,isComment:$3,text:''};});}

  var SORT_ORDER_ASC = 'asc';
  var SORT_ORDER_DESC = 'desc';
  var Table = Yox.define({
      template: template$19,
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

  function template$1a(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-loadingbar',_p(_v0,['type'],$3).value?[' bell-loadingbar-',_p(_v0,['type'],$3).value].join(''):$1].join('')}},$1,function(_5){_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:'bell-loadingbar-indicator','style.cssText':['width: ',_p(_v0,['percent'],$3).value,'%;height: ',_p(_v0,['height'],$3).value,'px;',_p(_v0,['color'],$3).value?['color: ',_p(_v0,['color'],$3).value,';'].join(''):$1].join('')}});});}

  var LoadingBar = Yox.define({
      template: template$1a,
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

  function template$1b(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-message',_p(_v0,['status'],$3).value?[' bell-message-',_p(_v0,['status'],$3).value].join(''):$1,_p(_v0,['center'],$3).value?' bell-message-center':$1,_p(_v0,['closable'],$3).value?' bell-message-with-close':$1].join('')}},$1,function(_5){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:_p(_v0,['status'],$3).value===_p(_v0,['RAW_TYPE_SUCCESS'],$3).value?'checkbox-circle-fill':_p(_v0,['status'],$3).value===_p(_v0,['RAW_TYPE_WARNING'],$3).value?'error-warning-fill':_p(_v0,['status'],$3).value===_p(_v0,['RAW_TYPE_ERROR'],$3).value?'close-circle-fill':'information-fill',size:'0',className:'bell-message-icon'},isComponent:$3});_5[_5.length]=_b({context:_a,tag:'span',text:_s(_p(_v0,['content'],$3).value),nativeProps:{className:'bell-message-text'}});_p(_v0,['closable'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'close-line',size:'0',className:'bell-message-close'},events:{'click.native':_h('click.native','hide()','click','native','hide',$1,$1,$3)},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

  var CLASS_VISIBLE$6 = 'bell-message-visible';
  var Message = Yox.define({
      template: template$1b,
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

  function template$1c(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,$4=!1,_v0=function(_3){return _3.length-1};_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Dialog',ref:'dialog',props:{mask:$3,width:_p(_v0,['width'],$3).value,title:_p(_v0,['title'],$3).value,maskClosable:$4,closable:_p(_v0,['closable'],$3).value,className:'bell-modal'},isComponent:$3},$1,{$slot_content:function(_5,_6){_e(_5,{context:_a,isText:$3,text:_s(_p(_v0,['content'],$3).value)});},$slot_footer:function(_5,_6){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Button',props:{type:_p(_v0,['okType'],$3).value},events:{click:_h('click','ok()','click','','ok',$1,$3)},isComponent:$3},$1,{$slot_children:function(_5,_6){_e(_5,{context:_a,isText:$3,text:_s(_p(_v0,['okText'],$3).value)});}});}});}

  var Alert$1 = Yox.define({
      template: template$1c,
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

  function template$1d(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,$4=!1,_v0=function(_3){return _3.length-1};_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Dialog',ref:'dialog',props:{mask:$3,width:_p(_v0,['width'],$3).value,title:_p(_v0,['title'],$3).value,maskClosable:$4,closable:_p(_v0,['closable'],$3).value,className:'bell-modal'},isComponent:$3},$1,{$slot_content:function(_5,_6){_e(_5,{context:_a,isText:$3,text:_s(_p(_v0,['content'],$3).value)});},$slot_footer:function(_5,_6){_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Button',props:{type:_p(_v0,['cancelType'],$3).value},events:{click:_h('click','cancel()','click','','cancel',$1,$3)},isComponent:$3},$1,{$slot_children:function(_5,_6){_e(_5,{context:_a,isText:$3,text:_s(_p(_v0,['cancelText'],$3).value)});}});_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Button',props:{type:_p(_v0,['okType'],$3).value},events:{click:_h('click','ok()','click','','ok',$1,$3)},isComponent:$3},$1,{$slot_children:function(_5,_6){_e(_5,{context:_a,isText:$3,text:_s(_p(_v0,['okText'],$3).value)});}});}});}

  var Confirm = Yox.define({
      template: template$1d,
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

  function template$1e(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_1,_2,_8,_5,_6){var $1=void 0,$3=!0,_v0=function(_3){return _3.length-1};_5[_5.length]=_b({context:_a,tag:'div',nativeProps:{className:['bell-notification',_p(_v0,['status'],$3).value?[' bell-notification-',_p(_v0,['status'],$3).value,' bell-notification-with-icon'].join(''):$1,_p(_v0,['title'],$3).value?' bell-notification-with-title':$1,_p(_v0,['duration'],$3).value==0?' bell-notification-with-close':$1].join(''),'style.cssText':['width: ',_p(_v0,['width'],$3).value,'px;right: ',_p(_v0,['right'],$3).value,'px;'].join('')}},$1,function(_5){_p(_v0,['status'],$3).value?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:_p(_v0,['status'],$3).value===_p(_v0,['RAW_TYPE_SUCCESS'],$3).value?'checkbox-circle-fill':_p(_v0,['status'],$3).value===_p(_v0,['RAW_TYPE_WARNING'],$3).value?'error-warning-fill':_p(_v0,['status'],$3).value===_p(_v0,['RAW_TYPE_ERROR'],$3).value?'close-circle-fill':'information-fill',size:'0',className:'bell-notification-icon'},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};_p(_v0,['title'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['title'],$3).value),nativeProps:{className:'bell-notification-title'}}):_5[_5.length]={context:_a,isComment:$3,text:''};_p(_v0,['content'],$3).value?_5[_5.length]=_b({context:_a,tag:'div',text:_s(_p(_v0,['content'],$3).value),nativeProps:{className:'bell-notification-content'}}):_5[_5.length]={context:_a,isComment:$3,text:''};_p(_v0,['duration'],$3).value==0?_5[_5.length]=_6[_6.length]=_c({context:_a,tag:'Icon',props:{name:'close-line',size:'0',className:'bell-notification-close'},events:{'click.native':_h('click.native','hide()','click','native','hide',$1,$1,$3)},isComponent:$3}):_5[_5.length]={context:_a,isComment:$3,text:''};});}

  var CLASS_VISIBLE$7 = 'bell-notification-visible';
  var Notification = Yox.define({
      template: template$1e,
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
  var version = "0.15.2";
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
