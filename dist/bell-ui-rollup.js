/**
 * bell-ui.js v0.12.4
 * (c) 2018-2020 
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('yox')) :
  typeof define === 'function' && define.amd ? define(['exports', 'yox'], factory) :
  (global = global || self, factory(global.Bell = {}, global.Yox));
}(this, (function (exports, Yox) { 'use strict';

  Yox = Yox && Object.prototype.hasOwnProperty.call(Yox, 'default') ? Yox['default'] : Yox;

  function template(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-menu",a("mode",$2)?([" bell-menu-",a("mode",$2)].join("")):"",(!a("inner",$2)&&a("theme",$2))?([" bell-menu-",a("theme",$2)].join("")):"",a("collapsed",$2)?" bell-menu-collapsed":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_children");})}

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
  var RAW_EVENT_BEFORE_DESTROY = 'beforeDestroy.hook';
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
      if (transitionEnd && (el.offsetWidth || el.offsetWidth)) {
          Yox.dom.on(el, transitionEnd, function (event) {
              Yox.dom.off(el, transitionEnd, event.listener);
              callback();
          });
      }
      else {
          Yox.nextTick(callback);
      }
  }
  var supportPageOffset = WINDOW.pageXOffset !== UNDEFINED;
  var isCSS1Compat = (DOCUMENT.compatMode || '') === 'CSS1Compat';
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
              this.fire('activeName.menu', { activeName: activeName }, TRUE);
          },
          openNames: function (openNames) {
              this.fire('openNames.menu', { openNames: openNames }, TRUE);
          },
          collapsed: function (collapsed) {
              this.fire('collapsed.menu', { collapsed: collapsed }, TRUE);
          }
      },
      events: {
          'click.menuItem': function (event, data) {
              if (event.phase === Yox.Event.PHASE_UPWARD
                  && !this.get('inner')) {
                  this.fire('change.menu', {
                      activeName: data.name
                  });
              }
          },
          'isOpen.subMenu': function (event, data) {
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
                  this.fire('change.menu', {
                      openNames: openNames,
                  });
              }
          }
      }
  });

  function template$1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-menu-item",a("isActive",$2)?" bell-menu-item-active":"",a("disabled",$2)?" bell-menu-item-disabled":" bell-menu-item-enabled",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0,(!a("disabled",$2))?(l("click","event.click",$0,"click()","click")):$0;},function(){s("$slot_children");})}

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
          'activeName.menu': function (_, data) {
              this.set('isActive', data.activeName === this.get('name'));
          },
      },
      methods: {
          click: function () {
              this.fire('click.menuItem', {
                  name: this.get('name')
              });
          }
      }
  });

  function template$2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-menu-group",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){q("div",function(){g("className","bell-menu-group-title");},function(){e(a("title",$2));}),(d(a("hasSlot",$2),["children"]))?(r("Menu",function(){f("inner",$2),f("mode",(a("mode",$2)==="inline")?"inline":"vertical");},{"$slot_children":function(){s("$slot_children");}})):p();})}

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

  function template$3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("i",function(){g("className",["bell-icon",a("name",$2)?([" bell-icon-",a("name",$2)].join("")):"",a("spin",$2)?" bell-icon-spin":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),(((a("size",$2)>0)||a("color",$2))||a("style",$2))?(g("style.cssText",[(a("size",$2)>0)?(["font-size: ",a("size",$2),"px;"].join("")):"",a("color",$2)?(["color: ",a("color",$2),";"].join("")):"",a("style",$2)?a("style",$2):""].join(""))):$0;},function(){s("$slot_children");})}

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

  function template$4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-dropdown bell-dropdown-",a("placement",$2),a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){q("div",function(){g("className","bell-dropdown-trigger"),(a("trigger",$2)===a("RAW_CLICK",$2))?(l("click","event.click",$0,"toggleVisible()","toggleVisible")):((a("trigger",$2)===a("RAW_HOVER",$2))?(l("mouseenter","event.mouseenter",$0,"enter()","enter"),l("mouseleave","event.mouseleave",$0,"leave()","leave")):$0);},function(){s("$slot_children");}),q("div",function(){g("className","bell-dropdown-overlay"),(a("height",$2)>0)?(g("style.cssText",["max-height: ",a("height",$2),"px;"].join(""))):$0,(a("trigger",$2)===a("RAW_HOVER",$2))?(l("mouseenter","event.mouseenter",$0,"enter()","enter"),l("mouseleave","event.mouseleave",$0,"leave()","leave")):$0;},function(){s("$slot_overlay");},$0,$0,$0,$0,$0,"overlay");})}

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
          'click.dropdownItem': function () {
              this.fire('close.dropdown');
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
                  this.fire('open.dropdown');
              }
          },
          leave: function () {
              var me = this;
              me.leaveTimer = setTimeout(function () {
                  if (me.$el) {
                      me.leaveTimer = UNDEFINED;
                      me.fire('close.dropdown');
                  }
              }, 300);
          },
          toggleVisible: function () {
              if (this.get('visible')) {
                  this.fire('close.dropdown');
              }
              else {
                  this.fire('open.dropdown');
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
                  me.fire('outside.dropdown');
              }
              else {
                  me.fire('close.dropdown');
              }
          };
          Yox.dom.on(DOCUMENT, RAW_CLICK, onClick);
          me.on(RAW_EVENT_BEFORE_DESTROY, function (event) {
              if (event.phase === Yox.Event.PHASE_CURRENT) {
                  Yox.dom.off(DOCUMENT, RAW_CLICK, onClick);
              }
          });
      }
  });

  function template$5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return (a("mode",$2)==="inline")?(q("div",function(){g("className",["bell-sub-menu",a("isOpen",$2)?" bell-menu-open":"",a("isActive",$2)?" bell-menu-active":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){q("div",function(){g("className","bell-sub-menu-title"),(!a("collapsed",$2))?(l("click","event.click",$0,"toggle('isOpen')","toggle",function(y){return ["isOpen"]}),h("click",300)):$0;},function(){s("$slot_title"),(!a("collapsed",$2))?(r("Icon",function(){f("name","arrow-down-s-line"),f("size","0"),f("className","bell-sub-menu-arrow-icon");})):p();}),r("Menu",function(){f("mode",j("mode",a("mode",$2,$0,$2,$2))),f("inner",$2);},{"$slot_children":function(){s("$slot_children");}},"menu");})):(r("Dropdown",function(){f("className",["bell-sub-menu",a("isActive",$2)?" bell-menu-active":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(f("style",j("style",a("style",$2,$0,$2,$2)))):$0,f("trigger","custom"),f("visible",j("visible",a("isOpen",$2,$0,$2,$2))),f("placement",(a("mode",$2)==="horizontal")?"bottom":"right-start"),l("outside","event.outside",$0,"handleOutsideClick()","handleOutsideClick");},{"$slot_children":function(){q("div",function(){g("className","bell-sub-menu-title"),(!a("collapsed",$2))?(l("click","event.click",$0,"toggle('isOpen')","toggle",function(y){return ["isOpen"]}),h("click",300)):$0;},function(){s("$slot_title"),(!a("collapsed",$2))?(r("Icon",function(){f("name","arrow-down-s-line"),f("size","0"),f("className","bell-sub-menu-arrow-icon");})):p();});},"$slot_overlay":function(){s("$slot_children");}}))}

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
                  this.fire('isOpen.subMenu', {
                      isOpen: isOpen,
                      name: name,
                  });
              }
          }
      },
      events: {
          'activeName.menu': function (_, data) {
              this.set('isActive', data.activeName === this.get('name'));
          },
          'openNames.menu': function (_, data) {
              this.set('isOpen', data.openNames && Yox.array.has(data.openNames, this.get('name')));
          },
          'collapsed.menu': function (_, data) {
              this.set('collapsed', data.collapsed);
          },
          'click.menuItem': function () {
              if (this.get('mode') !== RAW_INLINE) {
                  this.set('isOpen', FALSE);
              }
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

  function template$6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("span",function(){g("className",["bell-text",a("type",$2)?([" bell-text-",a("type",$2)].join("")):"",a("size",$2)?([" bell-text-",a("size",$2)].join("")):"",a("bold",$2)?" bell-text-bold":"",a("block",$2)?" bell-text-block":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_children");})}

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

  function template$7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-drawer",a("placement",$2)?([" bell-drawer-",a("placement",$2)].join("")):"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){a("mask",$2)?(q("div",function(){g("className","bell-drawer-mask"),a("maskClosable",$2)?(l("click","event.click",$0,"close()","close")):$0;})):p(),q("div",function(){g("className","bell-drawer-wrapper"),g("style.cssText",j("style.cssText",a("wrapperStyle",$2,$0,$2,$2),1));},function(){(d(a("hasSlot",$2),["title"]))?(q("div",function(){g("className","bell-drawer-header");},function(){s("$slot_title");})):p(),q("div",function(){g("className","bell-drawer-body");},function(){s("$slot_content");}),a("closable",$2)?(r("Icon",function(){f("name","close-line"),f("size","0"),f("className","bell-drawer-close"),l("click","event.click","native","close()","close");})):p();},$0,$0,$0,$0,$0,"wrapper");})}

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
                  me.fire('open.drawer');
                  setTimeout(function () {
                      Yox.dom.addClass(element, CLASS_FADE$1);
                      onTransitionEnd(wrapper, function () {
                          if (me.$el) {
                              me.fire('opened.drawer');
                          }
                      });
                  }, 50);
              }
              else if (oldVisible) {
                  Yox.dom.removeClass(element, CLASS_FADE$1);
                  me.fire('close.drawer');
                  onTransitionEnd(wrapper, function () {
                      if (me.$el) {
                          Yox.dom.removeClass(element, CLASS_VISIBLE$1);
                          me.fire('closed.drawer');
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

  function template$8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-breadcrumb",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_children");})}

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

  function template$9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("span",function(){g("className",["bell-breadcrumb-item",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){q("span",function(){a("last",$2)?g("className","bell-breadcrumb-text"):(g("className","bell-breadcrumb-link"),m("click","event.click",$0,"click.breadcrumbItem","click.breadcrumbItem"));},function(){s("$slot_children");}),(!a("last",$2))?(q("span",function(){g("className","bell-breadcrumb-separator");},function(){e(a("separator",$2));})):p();})}

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

  function template$a(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("button",function(){g("className",["bell-button",a("type",$2)?([" bell-button-",a("type",$2)].join("")):"",a("size",$2)?([" bell-button-",a("size",$2)].join("")):"",a("shape",$2)?([" bell-button-",a("shape",$2)].join("")):"",a("ghost",$2)?" bell-button-ghost":"",a("loading",$2)?" bell-button-loading":"",a("disabled",$2)?" bell-button-disabled":" bell-button-enabled",a("block",$2)?" bell-button-block":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("disabled",$2)?g("disabled",$2):((!a("loading",$2))?m("click","event.click",$0,"click.button","click.button"):$0),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_prefix",function(){a("loading",$2)?(r("Icon",function(){f("spin",$2),f("size","0"),f("name","loader-5-line"),f("className","bell-button-loading-icon");})):p();}),(d(a("hasSlot",$2),["children"]))?(((a("loading",$2)||(d(a("hasSlot",$2),["prefix"])))||(d(a("hasSlot",$2),["suffix"])))?(q("span",$0,function(){s("$slot_children");})):s("$slot_children")):p(),s("$slot_suffix");})}

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

  function template$b(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-button-group",a("shape",$2)?([" bell-button-group-",a("shape",$2)].join("")):"",a("size",$2)?([" bell-button-group-",a("size",$2)].join("")):"",a("vertical",$2)?" bell-button-group-vertical":" bell-button-group-horizontal",a("className",$2)?a("className",$2):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_children");})}

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

  function template$c(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-input",a("size",$2)?([" bell-input-",a("size",$2)].join("")):"",a("status",$2)?([" bell-input-",a("status",$2)].join("")):"",a("block",$2)?" bell-input-block":"",a("disabled",$2)?" bell-input-disabled":" bell-input-enabled",(!a("value",$2))?" bell-input-no-value":" bell-input-has-value",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),(a("width",$2)||a("style",$2))?(g("style.cssText",[a("width",$2)?(["width: ",a("width",$2),"px;"].join("")):"",a("style",$2)?a("style",$2):""].join(""))):$0;},function(){(d(a("hasSlot",$2),["prepend"]))?(q("div",function(){g("className","bell-input-prepend");},function(){s("$slot_prepend");})):p(),q("div",function(){g("className","bell-input-content");},function(){q("input",function(){g("type",j("type",a("currentType",$2,$0,$2,$2),1)),k(a("value",$2,$0,$2,$2)),g("className",["bell-input-el",a("prefix",$2)?" bell-input-el-with-prefix":"",((a("suffix",$2)||a("secure",$2))||(a("clearable",$2)&&(!a("disabled",$2))))?" bell-input-el-with-suffix":"",(d(a("hasSlot",$2),["prepend"]))?" bell-input-el-with-prepend":"",(d(a("hasSlot",$2),["append"]))?" bell-input-el-with-append":""].join("")),a("maxLength",$2)?(g("maxLength",j("maxLength",a("maxLength",$2,$0,$2,$2),2))):$0,a("placeholder",$2)?(g("placeholder",j("placeholder",a("placeholder",$2,$0,$2,$2),1))):$0,a("autoFocus",$2)?g("autofocus",$2):$0,a("readOnly",$2)?g("readOnly",$2):$0,a("spellCheck",$2)?g("spellcheck",$2):$0,a("disabled",$2)?g("disabled",$2):(l("blur","event.blur",$0,"handleBlur()","handleBlur"),l("focus","event.focus",$0,"handleFocus()","handleFocus"));},$0,$0,$0,$0,$0,$0,"input"),a("prefix",$2)?(q("div",function(){g("className","bell-input-prefix");},function(){r("Icon",function(){f("name",j("name",a("prefix",$2,$0,$2,$2))),f("size","0"),f("className","bell-input-prefix-icon");});})):p(),a("suffix",$2)?(q("div",function(){g("className","bell-input-suffix");},function(){r("Icon",function(){f("name",j("name",a("suffix",$2,$0,$2,$2))),f("size","0"),f("className","bell-input-suffix-icon");});})):(a("secure",$2)?(q("div",function(){g("className","bell-input-suffix bell-input-secure"),l("click","event.click",$0,"toggle('isSecure')","toggle",function(y){return ["isSecure"]});},function(){r("Icon",function(){f("name",a("isSecure",$2)?"eye-close-line":"eye-line"),f("size","0"),f("className","bell-input-secure-icon");});})):((a("clearable",$2)&&(!a("disabled",$2)))?(q("div",function(){g("className","bell-input-suffix bell-input-clear"),l("click","event.click",$0,"handleClearClick()","handleClearClick");},function(){r("Icon",function(){f("name","close-circle-fill"),f("size","0"),f("className","bell-input-clear-icon");});})):p()));}),(d(a("hasSlot",$2),["append"]))?(q("div",function(){g("className","bell-input-append");},function(){s("$slot_append");})):p();})}

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
          handleFocus: function () {
              this.set('isFocus', TRUE);
              this.fire('focus.input');
          },
          handleBlur: function () {
              this.set('isFocus', FALSE);
              this.fire('blur.input');
          },
          handleClearClick: function () {
              this.set('value', '');
              this.fire('clear.input');
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
                  me.fire('enter.input');
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
          me.on(RAW_EVENT_BEFORE_DESTROY, function (event) {
              if (event.phase === Yox.Event.PHASE_CURRENT) {
                  Yox.dom.off(DOCUMENT, RAW_EVENT_KEYDOWN, onKeydown);
                  Yox.dom.off(DOCUMENT, RAW_EVENT_KEYUP, onKeyup);
                  Yox.dom.off(DOCUMENT, RAW_EVENT_KEYPRESS, onKeypress);
              }
          });
      }
  });

  function template$d(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-input-number",a("status",$2)?([" bell-input-number-",a("status",$2)].join("")):"",a("size",$2)?([" bell-input-number-",a("size",$2)].join("")):"",a("block",$2)?" bell-input-number-block":"",a("disabled",$2)?" bell-input-number-disabled":" bell-input-number-enabled",a("isFocus",$2)?" bell-input-number-focus":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),(a("width",$2)||a("style",$2))?(g("style.cssText",[a("width",$2)?(["width: ",a("width",$2),"px;"].join("")):"",a("style",$2)?a("style",$2):""].join(""))):$0;},function(){q("input",function(){g("type","text"),g("className","bell-input-number-el"),k(a("computedValue",$2,$0,$2,$2)),a("placeholder",$2)?(g("placeholder",j("placeholder",a("placeholder",$2,$0,$2,$2),1))):$0,a("disabled",$2)?g("disabled",$2):$0,a("autoFocus",$2)?g("autofocus",$2):$0,(a("readOnly",$2)||(!a("editable",$2)))?g("readOnly",$2):(l("blur","event.blur",$0,"handleBlur()","handleBlur"),l("focus","event.focus",$0,"handleFocus()","handleFocus"));}),(!a("disabled",$2)&&(!a("readOnly",$2)))?(q("div",function(){g("className","bell-input-number-actions");},function(){q("div",function(){a("upDisabled",$2)?g("className","bell-input-number-up bell-input-number-up-disabled"):(g("className","bell-input-number-up bell-input-number-up-enabled"),l("click","event.click",$0,"up()","up"));},function(){r("Icon",function(){f("name","arrow-up-s-line"),f("size","0"),f("className","bell-input-number-up-icon");});}),q("div",function(){a("downDisabled",$2)?g("className","bell-input-number-down bell-input-number-down-disabled"):(g("className","bell-input-number-down bell-input-number-down-enabled"),l("click","event.click",$0,"down()","down"));},function(){r("Icon",function(){f("name","arrow-down-s-line"),f("size","0"),f("className","bell-input-number-down-icon");});});})):p();})}

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
              this.fire('change.inputNumber', { value: value });
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
              this.fire('focus.inputNumber');
          },
          handleBlur: function () {
              this.set('isFocus', FALSE);
              this.fire('blur.inputNumber');
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
          me.on(RAW_EVENT_BEFORE_DESTROY, function (event) {
              if (event.phase === Yox.Event.PHASE_CURRENT) {
                  Yox.dom.off(DOCUMENT, RAW_EVENT_KEYDOWN, onKeydown);
              }
          });
      }
  });

  function template$e(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-textarea",a("size",$2)?([" bell-textarea-",a("size",$2)].join("")):"",a("status",$2)?([" bell-textarea-",a("status",$2)].join("")):"",a("block",$2)?" bell-textarea-block":"",a("disabled",$2)?" bell-textarea-disabled":" bell-textarea-enabled",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),(a("width",$2)||a("style",$2))?(g("style.cssText",[a("width",$2)?(["width: ",a("width",$2),"px;"].join("")):"",a("style",$2)?a("style",$2):""].join(""))):$0;},function(){q("textarea",function(){g("className","bell-textarea-el"),k(a("value",$2,$0,$2,$2)),a("wrap",$2)?(g("wrap",j("wrap",a("wrap",$2,$0,$2,$2),1))):$0,a("placeholder",$2)?(g("placeholder",j("placeholder",a("placeholder",$2,$0,$2,$2),1))):$0,a("maxLength",$2)?(g("maxLength",j("maxLength",a("maxLength",$2,$0,$2,$2),2))):$0,a("autoFocus",$2)?g("autofocus",$2):$0,a("readOnly",$2)?g("readOnly",$2):$0,a("spellCheck",$2)?g("spellcheck",$2):$0,a("disabled",$2)?g("disabled",$2):(l("blur","event.blur",$0,"handleBlur()","handleBlur"),l("focus","event.focus",$0,"handleFocus()","handleFocus")),g("style.cssText",j("style.cssText",a("textareaStyle",$2,$0,$2,$2),1));});})}

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
              this.fire('change.input', { value: value });
          },
      },
      methods: {
          handleFocus: function () {
              this.set('isFocus', TRUE);
              this.fire('focus.input');
          },
          handleBlur: function () {
              this.set('isFocus', FALSE);
              this.fire('blur.input');
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
                  me.fire('enter.input');
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
          me.on(RAW_EVENT_BEFORE_DESTROY, function (event) {
              if (event.phase === Yox.Event.PHASE_CURRENT) {
                  Yox.dom.off(DOCUMENT, RAW_EVENT_KEYDOWN, onKeydown);
                  Yox.dom.off(DOCUMENT, RAW_EVENT_KEYUP, onKeyup);
                  Yox.dom.off(DOCUMENT, RAW_EVENT_KEYPRESS, onKeypress);
              }
          });
      }
  });

  function template$f(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0,$3=!1;return q("label",function(){g("className",["bell-radio",a("disabled",$2)?" bell-radio-disabled":" bell-radio-enabled",a("checked",$2)?" bell-radio-active":"",a("isFocus",$2)?" bell-radio-focus":"",(d(a("hasSlot",$2),["children"]))?" bell-radio-with-label":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0,(!a("disabled",$2))?(l("click","event.click",$0,"set('checked', true)","set",function(y){return ["checked",$2]})):$0;},function(){q("span",function(){g("className","bell-radio-icon");},function(){q("input",function(){g("className","bell-radio-input"),g("type","radio"),a("name",$2)?(g("name",j("name",a("name",$2,$0,$2,$2),1))):$0,g("value",j("value",a("value",$2,$0,$2,$2),1)),g("disabled",j("disabled",a("disabled",$2,$0,$2,$2),3)),l("focus","event.focus",$0,"set('isFocus', true)","set",function(y){return ["isFocus",$2]}),l("blur","event.blur",$0,"set('isFocus', false)","set",function(y){return ["isFocus",$3]});});}),s("$slot_children");})}

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
          'change.radioGroup': function (_, data) {
              if (data.value !== UNDEFINED) {
                  this.set('checked', data.value == this.get('value'));
              }
              if (data.disabled !== UNDEFINED) {
                  this.set('disabled', data.disabled);
              }
          }
      },
      watchers: {
          checked: function (checked) {
              this.fire('change.radio', {
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

  function template$g(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",[a("button",$2)?(["bell-radio-button",a("size",$2)?([" bell-radio-button-",a("size",$2)].join("")):"",a("disabled",$2)?" bell-radio-button-disabled":" bell-radio-button-enable"].join("")):(["bell-radio-group",a("disabled",$2)?" bell-radio-group-disabled":" bell-radio-group-enabled"].join("")),a("vertical",$2)?" bell-radio-vertical":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_children");})}

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
              this.fire('change.radioGroup', {
                  disabled: disabled,
              }, TRUE);
          },
          value: function (value) {
              this.fire('change.radioGroup', {
                  value: value,
              }, TRUE);
          }
      },
      events: {
          'change.radio': function (event, data) {
              event.stop();
              // 只关心选中的
              if (!data.checked) {
                  return;
              }
              this.set('value', data.value);
          }
      }
  });

  function template$h(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0,$3=!1;return q("label",function(){g("className",["bell-checkbox",a("disabled",$2)?" bell-checkbox-disabled":" bell-checkbox-enabled",a("checked",$2)?" bell-checkbox-active":"",a("isFocus",$2)?" bell-checkbox-focus":"",(d(a("hasSlot",$2),["children"]))?" bell-checkbox-with-label":"",a("indeterminate",$2)?" bell-checkbox-indeterminate":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){q("span",function(){g("className","bell-checkbox-icon");},function(){q("input",function(){g("className","bell-checkbox-input"),g("type","checkbox"),k(a("checked",$2,$0,$2,$2)),g("name",j("name",a("name",$2,$0,$2,$2),1)),g("disabled",j("disabled",a("disabled",$2,$0,$2,$2),3)),l("focus","event.focus",$0,"set('isFocus', true)","set",function(y){return ["isFocus",$2]}),l("blur","event.blur",$0,"set('isFocus', false)","set",function(y){return ["isFocus",$3]});});}),s("$slot_children");})}

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
          'change.checkboxGroup': function (_, data) {
              this.set({
                  checked: Yox.array.has(data.value, this.get('value'))
              });
          }
      },
      watchers: {
          checked: function (checked) {
              this.fire('change.checkbox', {
                  checked: checked,
                  value: this.get('value'),
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

  function template$i(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-checkbox-group",a("vertical",$2)?" bell-checkbox-vertical":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_children");})}

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
          'change.checkbox': function (event, data) {
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
          }
      },
      watchers: {
          value: function (value) {
              this.fire('change.checkboxGroup', { value: value }, TRUE);
          }
      }
  });

  function template$j(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-switch",a("size",$2)?([" bell-switch-",a("size",$2)].join("")):"",a("disabled",$2)?" bell-switch-disabled":" bell-switch-enabled",a("checked",$2)?" bell-switch-active":"",a("loading",$2)?" bell-switch-loading":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0,(!a("disabled",$2)&&(!a("loading",$2)))?(l("click","event.click",$0,"handleClick()","handleClick")):$0;},function(){((d(a("hasSlot",$2),["on"]))||(d(a("hasSlot",$2),["off"])))?(q("div",function(){g("className","bell-switch-label");},function(){a("checked",$2)?s("$slot_on"):s("$slot_off");})):p();})}

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
              this.fire('change.switch', {
                  checked: this.toggle('checked')
              });
          }
      }
  });

  function template$k(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0,$3=!1;return q("div",function(){g("className",["bell-slider",a("vertical",$2)?" bell-slider-vertical":" bell-slider-horizontal",a("disabled",$2)?" bell-slider-disabled":" bell-slider-enabled",a("block",$2)?" bell-slider-block":"",a("thumbIsDragging",$2)?" bell-slider-dragging":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),((a("width",$2)||a("height",$2))||a("style",$2))?(g("style.cssText",[a("width",$2)?(["width:",a("width",$2),"px;"].join("")):"",a("height",$2)?(["height:",a("height",$2),"px;"].join("")):"",a("style",$2)?a("style",$2):""].join(""))):$0;},function(){q("div",function(){g("className","bell-slider-track"),(!a("disabled",$2))?m("click","event.click",$0,"trackClick.slider","trackClick.slider"):$0;},function(){q("div",function(){g("className","bell-slider-bar"),g("style.cssText",a("vertical",$2)?(["height: ",a("percent",$2),"%;"].join("")):(["width: ",a("percent",$2),"%;"].join("")));}),a("showStops",$2)?(v(function(){q("div",function(){g("className","bell-slider-stop"),g("style.cssText",a("vertical",$2)?(["bottom: ",a("",$3),"%;"].join("")):(["left: ",a("",$3),"%;"].join("")));},$0,$0,$0,$0,$0,$0,$0,a("",$3));},a("stops",$2,$0,$2),$0)):p(),q("div",function(){g("className","bell-slider-thumb"),g("style.cssText",a("vertical",$2)?(["bottom: ",a("percent",$2),"%;"].join("")):(["left: ",a("percent",$2),"%;"].join(""))),m("mouseenter","event.mouseenter",$0,"thumbMouseEnter.slider","thumbMouseEnter.slider"),m("mouseleave","event.mouseleave",$0,"thumbMouseLeave.slider","thumbMouseLeave.slider"),h("mouseenter",200),h("mouseleave",200),(!a("disabled",$2))?m("mousedown","event.mousedown",$0,"thumbMouseDown.slider","thumbMouseDown.slider"):$0;}),a("showTooltip",$2)?(q("div",function(){g("className",["bell-tooltip-popup bell-tooltip-dark",a("vertical",$2)?" bell-tooltip-right":" bell-tooltip-top"].join("")),g("style.cssText",a("vertical",$2)?(["bottom: ",a("percent",$2),"%;"].join("")):(["left: ",a("percent",$2),"%;"].join("")));},function(){q("div",function(){g("className","bell-tooltip-arrow");},$0,$2),q("div",function(){g("className","bell-tooltip-content");},function(){a("formatTooltip",$2)?(e(d(a("formatTooltip",$2),[a("value",$2)]))):(e(a("value",$2)));});},$0,$0,$0,$0,$0,"tooltip")):p();});})}

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

  function template$l(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0,$3=!1;return r("Dropdown",function(){f("placement",j("placement",a("placement",$2,$0,$2,$2))),f("trigger","custom"),f("visible",j("visible",a("visible",$2,$0,$2,$2))),l("outside","event.outside",$0,"handleOutsideClick()","handleOutsideClick"),f("className",["bell-select",a("status",$2)?([" bell-select-",a("status",$2)].join("")):"",a("size",$2)?([" bell-select-",a("size",$2)].join("")):"",a("block",$2)?" bell-select-block":"",a("disabled",$2)?" bell-select-disabled":" bell-select-enabled",a("clearable",$2)?" bell-select-clearable":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),(a("width",$2)||a("style",$2))?(f("style",[a("width",$2)?(["width: ",a("width",$2),"px;"].join("")):"",a("style",$2)?a("style",$2):""].join(""))):$0;},{"$slot_children":function(){q("div",function(){g("className",["bell-select-button",(a("prefix",$2)||(d(a("hasSlot",$2),["prefix"])))?" bell-select-button-with-prefix":""].join("")),(!a("disabled",$2))?(l("click","event.click",$0,"toggle('visible')","toggle",function(y){return ["visible"]})):$0;},function(){(a("prefix",$2)||(d(a("hasSlot",$2),["prefix"])))?(q("div",function(){g("className","bell-select-prefix");},function(){s("$slot_prefix",function(){r("Icon",function(){f("name",j("name",a("prefix",$2,$0,$2,$2))),f("size","0"),f("className","bell-select-prefix-icon");});});})):p(),(a("selectedOptions.length",$2)===0)?(q("div",function(){g("className","bell-select-placeholder");},function(){e(a("placeholder",$2));})):(a("multiple",$2)?(q("div",function(){g("className","bell-select-values");},function(){v(function(){r("Tag",function(){f("simple",$2),f("closable",$2),l("close","event.close",$0,"handleRemoveOption($event, index)","handleRemoveOption",function(y){return [a("$event",$2,$0,$0,$0,y),a("index",$2,$0,$0,$0,y)]});},{"$slot_children":function(){e(a("text",$3));}});},a("selectedOptions",$2,$0,$2),"index");})):(q("div",function(){g("className","bell-select-value");},function(){e(a("selectedOptions.0.text",$2));}))),(a("clearable",$2)&&a("selectedOptions.length",$2))?(r("Icon",function(){f("name","close-circle-fill"),f("size","0"),f("className","bell-select-clear-icon"),l("click","event.click","native","handleClearClick()","handleClearClick");})):p(),r("Icon",function(){f("name","arrow-down-s-line"),f("size","0"),f("className","bell-select-arrow-icon");});});},"$slot_overlay":function(){s("$slot_children");}})}

  function template$m(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-tag",a("type",$2)?([" bell-tag-",a("type",$2)].join("")):"",a("size",$2)?([" bell-tag-",a("size",$2)].join("")):"",a("checkable",$2)?" bell-tag-checkable":"",a("closable",$2)?" bell-tag-closable":"",a("color",$2)?" bell-tag-pure":"",a("checked",$2)?" bell-tag-checked":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),(a("color",$2)||a("style",$2))?(g("style.cssText",[a("color",$2)?(a("checkable",$2)?(a("checked",$2)?(["background-color: ",a("color",$2),";"].join("")):(["color: ",a("color",$2),";"].join(""))):(["background-color: ",a("color",$2),";"].join(""))):"",a("style",$2)?a("style",$2):""].join(""))):$0,a("checkable",$2)?(l("click","event.click",$0,"toggleChecked()","toggleChecked")):$0;},function(){s("$slot_children"),a("closable",$2)?(r("Icon",function(){f("name","close-line"),f("size","0"),f("className","bell-tag-close-icon"),m("click","event.click","native","close.tag","close.tag");})):p();})}

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
              this.fire('change.tag', {
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
              this.fire('change.select', { value: value });
          },
      },
      events: {
          'update.selectOption': function (event, data) {
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
          }
      },
      methods: {
          handleClearClick: function (event) {
              // 停止冒泡，否则会展开下拉框
              event.stop();
              this.set('value', UNDEFINED);
              this.fire('change.select', {
                  value: UNDEFINED,
              }, TRUE);
              this.fire('clear.select');
          },
          handleRemoveOption: function (event, index) {
              event.stop();
              this.removeAt('value', index);
              this.fire('change.select', {
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
              this.fire('change.select', {
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

  function template$n(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-dropdown-item",a("disabled",$2)?" bell-dropdown-item-disabled":" bell-dropdown-item-enabled",a("isSelected",$2)?" bell-dropdown-item-active":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0,(!a("disabled",$2))?(l("click","event.click",$0,"clickOption()","clickOption")):$0;},function(){s("$slot_children",function(){e(a("text",$2));});})}

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
          'change.select': function (_, data) {
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
      },
      methods: {
          clickOption: function () {
              this.fireEvent(TRUE);
          },
          getText: function () {
              return this.get('text') || Yox.dom.text(this.$el);
          },
          fireEvent: function (isSelected) {
              this.fire('update.selectOption', {
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

  function template$o(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-select-option-group",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){q("div",function(){g("className","bell-select-group-title");},function(){e(a("label",$2));}),s("$slot_children");})}

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

  function template$p(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0,$3=!1;return q("div",function(){g("className",["bell-pagination",a("size",$2)?([" bell-pagination-",a("size",$2)].join("")):"",(a("hideOnSinglePage",$2)&&(a("count",$2)<=1))?" bell-pagination-hidden":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){t("prevPage",function(){(d(a("hasSlot",$2),["prev"]))?(q("div",function(){g("className",["bell-pagination-custom-prev",(a("current",$2)===1)?" bell-pagination-custom-disabled":""].join("")),(a("current",$2)>1)?(l("click","event.click",$0,"decrease('current', 1, 1)","decrease",function(y){return ["current",1,1]})):$0;},function(){s("$slot_prev");},$0,$0,$0,$0,$0,$0,"prev")):(q("button",function(){g("className","bell-pagination-item bell-pagination-prev"),(a("current",$2)>1)?(l("click","event.click",$0,"decrease('current', 1, 1)","decrease",function(y){return ["current",1,1]})):g("disabled",$2);},function(){r("Icon",function(){f("name","arrow-left-s-line"),f("size","0"),f("className","bell-pagination-icon");});},$0,$0,$0,$0,$0,$0,"prev"));}),t("nextPage",function(){(d(a("hasSlot",$2),["next"]))?(q("div",function(){g("className",["bell-pagination-custom-next",(a("current",$2)===a("count",$2))?" bell-pagination-custom-disabled":""].join("")),(a("current",$2)<a("count",$2))?(l("click","event.click",$0,"increase('current', 1, count)","increase",function(y){return ["current",1,a("count",$2,$0,$0,$0,y)]})):$0;},function(){s("$slot_next");},$0,$0,$0,$0,$0,$0,"next")):(q("button",function(){g("className","bell-pagination-item bell-pagination-next"),(a("current",$2)<a("count",$2))?(l("click","event.click",$0,"increase('current', 1, count)","increase",function(y){return ["current",1,a("count",$2,$0,$0,$0,y)]})):g("disabled",$2);},function(){r("Icon",function(){f("name","arrow-right-s-line"),f("size","0"),f("className","bell-pagination-icon");});},$0,$0,$0,$0,$0,$0,"next"));}),a("showTotal",$2)?(q("span",function(){g("className","bell-pagination-total");},function(){e("共 "),e(a("total",$2)),e(" 条");})):p(),(a("pageSizeList.length",$2)>0)?(r("Select",function(){k(a("pageSize",$2,$0,$2,$2)),f("size",j("size",a("size",$2,$0,$2,$2))),f("placement",j("placement",a("placement",$2,$0,$2,$2))),l("change","event.change",$0,"pageSizeChange()","pageSizeChange");},{"$slot_children":function(){v(function(){r("Option",function(){f("value",j("value",a("value",$3,$0,$2,$2))),f("text",j("text",a("text",$3,$0,$2,$2)));},{"$slot_children":function(){e(a("text",$3));}});},a("pageSizeList",$2,$0,$2),$0);}})):p(),a("simple",$2)?(q("div",function(){g("className","bell-pagination-simple");},function(){u("prevPage"),r("Input",function(){f("size",j("size",a("size",$2,$0,$2,$2))),k(a("page",$2,$0,$2,$2)),f("className","bell-pagination-simple-input");},$0,"simpleInput"),q("span",function(){g("className","bell-pagination-separator");},function(){e("/");},$2),q("span",function(){g("className","bell-pagination-count");},function(){e(a("count",$2));}),u("nextPage");})):(q("div",function(){g("className","bell-pagination-list");},function(){u("prevPage"),v(function(){a("prev",$3)?(q("div",function(){g("className","bell-pagination-ellipsis"),l("click","event.click",$0,"decrease('current', 5, 1)","decrease",function(y){return ["current",5,1]});},function(){r("Icon",function(){f("name","arrow-left-s-fill"),f("size","0"),f("className","bell-pagination-icon");});},$0,$0,$0,$0,$0,$0,"prev-ellipsis")):(a("next",$3)?(q("div",function(){g("className","bell-pagination-ellipsis"),l("click","event.click",$0,"increase('current', 5, ../count)","increase",function(y){return ["current",5,a("count",$3,1,$0,$0,y)]});},function(){r("Icon",function(){f("name","arrow-right-s-fill"),f("size","0"),f("className","bell-pagination-icon");});},$0,$0,$0,$0,$0,$0,"next-ellipsis")):(q("button",function(){g("className",["bell-pagination-item",a("active",$3)?" bell-pagination-active":""].join("")),(!a("active",$3))?(l("click","event.click",$0,"set('current', this.value)","set",function(y){return ["current",a("value",$3,$0,$0,$0,y)]})):$0;},function(){e(a("value",$3));},$0,$0,$0,$0,$0,$0,["page",a("value",$3)].join(""))));},a("pageList",$2,$0,$2),$0),u("nextPage");})),a("showJumper",$2)?(q("div",function(){g("className","bell-pagination-jumper");},function(){r("Input",function(){f("placeholder","请输入页码"),k(a("page",$2,$0,$2,$2)),f("size",j("size",a("size",$2,$0,$2,$2))),f("className","bell-pagination-jumper-input");},$0,"jumperInput"),r("Button",function(){f("type","primary"),l("click","event.click",$0,"jump()","jump");},{"$slot_children":function(){e("跳转");}});})):p();})}

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
              this.fire('change.pagination', {
                  pageSize: data.value
              });
          },
          'change.input': function (event) {
              if (event.phase !== Yox.Event.PHASE_UPWARD) {
                  return;
              }
              event.stop();
          },
          'enter.input': function (event) {
              if (event.phase !== Yox.Event.PHASE_UPWARD) {
                  return;
              }
              event.stop();
              this.jump();
          }
      },
      watchers: {
          current: function (current) {
              this.set('page', current);
              this.fire('change.pagination', {
                  current: current,
              });
          }
      },
      methods: {
          showError: function (error) {
              this.fire('error.pagination', {
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

  function template$q(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-upload",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0,l("click","event.click",$0,"click()","click");},function(){s("$slot_children"),q("form",$0,function(){q("input",function(){g("type","file"),g("multiple",j("multiple",a("multiple",$2,$0,$2,$2),3)),g("accept",j("accept",a("accept",$2,$0,$2,$2),1)),l("change","event.change",$0,"changeFiles()","changeFiles");},$0,$0,$0,$0,$0,$0,"input");},$0,$0,$0,$0,$0,"form");})}

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
                      me.fire('start.upload', file);
                  },
                  onEnd: function () {
                      me.fire('end.upload', file);
                      // 重置一下，这样再次选择相同文件才能生效
                      var form = me.$refs.form;
                      form.reset();
                  },
                  onAbort: function () {
                      me.fire('abort.upload', file);
                  },
                  onError: function () {
                      me.fire('error.upload', file);
                  },
                  onProgress: function (progress) {
                      me.fire('progress.upload', {
                          id: file.id,
                          file: file.file,
                          progress: progress,
                      });
                  },
                  onSuccess: function (response) {
                      me.fire('success.upload', {
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

  function template$r(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-alert",a("status",$2)?([" bell-alert-",a("status",$2)].join("")):"",a("banner",$2)?" bell-alert-banner":"",a("center",$2)?" bell-alert-center":"",a("showIcon",$2)?" bell-alert-with-icon":"",(d(a("hasSlot",$2),["title"]))?" bell-alert-with-title":"",(a("closable",$2)||(d(a("hasSlot",$2),["close"])))?" bell-alert-with-close":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){a("showIcon",$2)?(r("Icon",function(){f("name",(a("status",$2)===a("RAW_TYPE_SUCCESS",$2))?"checkbox-circle-fill":((a("status",$2)===a("RAW_TYPE_WARNING",$2))?"error-warning-fill":((a("status",$2)===a("RAW_TYPE_ERROR",$2))?"close-circle-fill":"information-fill"))),f("size","0"),f("className","bell-alert-status-icon");})):p(),(d(a("hasSlot",$2),["title"]))?(q("div",function(){g("className","bell-alert-title");},function(){s("$slot_title");})):p(),(d(a("hasSlot",$2),["children"]))?(q("div",function(){g("className","bell-alert-content");},function(){s("$slot_children");})):p(),a("closable",$2)?(q("div",function(){g("className","bell-alert-close"),m("click","event.click",$0,"close.alert","close.alert");},function(){s("$slot_close",function(){r("Icon",function(){f("name","close-line"),f("size","0"),f("className","bell-alert-close-icon");});});},$0,$0,$0,$0,$0,"close")):p();})}

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

  function template$s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-article",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){a("title",$2)?(q("div",function(){g("className","bell-article-title");},function(){e(a("title",$2)),a("showLink",$2)?(r("Icon",function(){f("name","links-line"),f("size","0"),f("className","bell-article-link"),m("click","event.click","native","link.article","link.article");})):p();})):p(),a("subTitle",$2)?(q("div",function(){g("className","bell-article-sub-title");},function(){e(a("subTitle",$2));})):((d(a("hasSlot",$2),["subTitle"]))?(q("div",function(){g("className","bell-article-sub-title");},function(){s("$slot_subTitle");})):p()),(d(a("hasSlot",$2),["cover"]))?(q("div",function(){g("className","bell-article-cover");},function(){s("$slot_cover");})):p(),q("div",function(){g("className","bell-article-content");},function(){s("$slot_content");}),a("signature",$2)?(q("div",function(){g("className","bell-article-signature");},function(){e(a("signature",$2));})):((d(a("hasSlot",$2),["signature"]))?(q("div",function(){g("className","bell-article-signature");},function(){s("$slot_signature");})):p());})}

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

  function template$t(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-spin",a("type",$2)?([" bell-spin-",a("type",$2)].join("")):"",a("size",$2)?([" bell-spin-",a("size",$2)].join("")):"",a("theme",$2)?([" bell-spin-",a("theme",$2)].join("")):"",a("fixed",$2)?" bell-spin-fixed":"",a("legacy",$2)?" bell-spin-legacy":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){q("div",function(){g("className","bell-spin-content");},function(){s("$slot_children",function(){r("Icon",function(){f("spin",$2),f("name",j("name",a("icon",$2,$0,$2,$2))),f("size","0"),f("className","bell-spin-icon");}),a("text",$2)?(q("div",function(){g("className","bell-spin-text");},function(){e(a("text",$2));})):p();});},$0,$0,$0,$0,$0,"content");})}

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

  function template$u(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-backtop",a("legacy",$2)?" bell-backtop-legacy":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),((a("bottom",$2)||a("right",$2))||a("style",$2))?(g("style.cssText",[a("bottom",$2)?(["bottom: ",a("bottom",$2),"px;"].join("")):"",a("right",$2)?(["right: ",a("right",$2),"px;"].join("")):"",a("style",$2)?a("style",$2):""].join(""))):$0,m("click","event.click",$0,"click.backTop","click.backTop");},function(){r("Icon",function(){f("size","0"),f("name","arrow-up-line");});})}

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
          me.on(RAW_EVENT_BEFORE_DESTROY, function (event) {
              if (event.phase === Yox.Event.PHASE_CURRENT) {
                  Yox.dom.off(container, RAW_EVENT_SCROLL, onRefresh);
                  Yox.dom.off(WINDOW, RAW_EVENT_RESIZE, onRefresh);
              }
          });
      }
  });

  function template$v(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-avatar",a("size",$2)?([" bell-avatar-",a("size",$2)].join("")):"",a("shape",$2)?([" bell-avatar-",a("shape",$2)].join("")):"",a("src",$2)?" bell-avatar-image":"",a("clickable",$2)?" bell-avatar-clickable":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),(a("backgroundColor",$2)||a("style",$2))?(g("style.cssText",[a("backgroundColor",$2)?(["background-color: ",a("backgroundColor",$2),";"].join("")):"",a("style",$2)?a("style",$2):""].join(""))):$0,a("clickable",$2)?m("click","event.click",$0,"click","click"):$0;},function(){a("src",$2)?(q("img",function(){g("src",j("src",a("src",$2,$0,$2,$2),1)),a("srcSet",$2)?(f("srcset",j("srcset",a("srcSet",$2,$0,$2,$2)))):$0,a("alt",$2)?(g("alt",j("alt",a("alt",$2,$0,$2,$2),1))):$0,f("ondragstart","return false"),m("error","event.error",$0,"error.avatar","error.avatar");})):((d(a("hasSlot",$2),["icon"]))?s("$slot_icon"):(a("text",$2)?(q("span",function(){g("className","bell-avatar-text"),(a("color",$2)||a("fontSize",$2))?(g("style.cssText",[a("color",$2)?(["color: ",a("color",$2),";"].join("")):"",a("fontSize",$2)?(["font-size: ",a("fontSize",$2),"px;"].join("")):""].join(""))):$0;},function(){e(a("text",$2));},$0,$0,$0,$0,$0,"text")):p()));})}

  var SPACE_HORIZONTAL = 8;
  var Avatar = Yox.define({
      template: template$v,
      name: 'bell-Avatar',
      propTypes: {
          size: {
              type: oneOf(RAW_SIZE_ARRAY),
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

  function template$w(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-badge",a("status",$2)?"-status":"",a("status",$2)?([" bell-badge-status-",a("status",$2)].join("")):(a("type",$2)?([" bell-badge-",a("type",$2)].join("")):""),a("ripple",$2)?" bell-badge-ripple":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_children"),(!a("hidden",$2))?(a("dot",$2)?(q("span",function(){g("className","bell-badge-dot");},$0,$2)):p(),(a("text",$2)||(d(a("isNumeric",$2),[a("count",$2)])))?(q("span",function(){g("className",["bell-badge-text",(d(a("hasSlot",$2),["children"]))?" bell-badge-text-append":""].join(""));},function(){e(a("text",$2)||(d(a("formatText",$2),[a("count",$2),a("max",$2)])));},$0,$0,$0,$0,$0,"append")):p()):p();})}

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

  function template$x(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0,$3=!1;return (a("type",$2)===a("RAW_TYPE_DATE",$2))?(q("div",function(){g("className",["bell-datepicker-date bell-datepicker-panel",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){q("div",function(){g("className","bell-datepicker-header");},function(){q("div",function(){g("className","bell-datepicker-prev");},function(){q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"offset(-12)","offset",function(y){return [-12]});},function(){r("Icon",function(){f("name","arrow-left-s-fill"),f("size","0"),f("className","bell-datepicker-header-icon");});}),q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"offset(-1)","offset",function(y){return [-1]});},function(){r("Icon",function(){f("name","arrow-left-s-line"),f("size","0"),f("className","bell-datepicker-header-icon");});});}),q("span",function(){a("canPickYear",$2)?(g("className","bell-datepicker-header-link"),l("click","event.click",$0,"set('type', RAW_TYPE_YEAR)","set",function(y){return ["type",a("RAW_TYPE_YEAR",$2,$0,$0,$0,y)]})):$0;},function(){q("span",function(){g("className","bell-datepicker-header-year");},function(){e(a("date.year",$2));}),e("年");}),q("span",function(){a("canPickMonth",$2)?(g("className","bell-datepicker-header-link"),l("click","event.click",$0,"set('type', RAW_TYPE_MONTH)","set",function(y){return ["type",a("RAW_TYPE_MONTH",$2,$0,$0,$0,y)]})):$0;},function(){q("span",function(){g("className","bell-datepicker-header-month");},function(){e(a("date.month",$2));}),e("月");}),q("div",function(){g("className","bell-datepicker-next");},function(){q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"offset(1)","offset",function(y){return [1]});},function(){r("Icon",function(){f("name","arrow-right-s-line"),f("size","0"),f("className","bell-datepicker-header-icon");});}),q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"offset(12)","offset",function(y){return [12]});},function(){r("Icon",function(){f("name","arrow-right-s-fill"),f("size","0"),f("className","bell-datepicker-header-icon");});});});}),q("div",function(){g("className","bell-datepicker-body");},function(){q("div",function(){g("className","bell-datepicker-weeks");},function(){v(function(){q("div",function(){g("className","bell-datepicker-col");},function(){e(a("",$3));});},a("weeks",$2,$0,$2),$0);}),q("div",function(){g("className","bell-datepicker-days");},function(){v(function(){q("div",function(){g("className","bell-datepicker-row");},function(){v(function(){q("div",function(){g("className",["bell-datepicker-col",(d(a("isEnabled",$2),[a("",$3)]))?([" bell-datepicker-col-enabled",(d(a("isCurrentMonth",$2),[a("",$3)]))?([" bell-datepicker-col-current-month",(d(a("isChecked",$2),[a("",$3)]))?" bell-datepicker-col-checked":""].join("")):" bell-datepicker-col-adjacent-month"].join("")):" bell-datepicker-col-disabled"].join("")),(d(a("isEnabled",$2),[a("",$3)]))?(l("click","event.click",$0,"click(this)","click",function(y){return [a("",$3,$0,$0,$0,y)]})):$0;},function(){q("div",function(){g("className","bell-datepicker-text");},function(){e(a("date",$3));});});},a("list",$3,$0,$2),$0);});},a("datasource",$2,$0,$2),$0);});});})):((a("type",$2)===a("RAW_TYPE_YEAR",$2))?(r("DateYear",function(){f("checkedYear",j("checkedYear",a("date.year",$2,$0,$2,$2)));})):((a("type",$2)===a("RAW_TYPE_MONTH",$2))?(r("DateMonth",function(){f("checkedYear",j("checkedYear",a("date.year",$2,$0,$2,$2))),f("checkedMonth",j("checkedMonth",a("date.month",$2,$0,$2,$2)));})):$0))}

  function template$y(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0,$3=!1;return (a("type",$2)===a("RAW_TYPE_MONTH",$2))?(q("div",function(){g("className",["bell-datepicker-month bell-datepicker-panel",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){q("div",function(){g("className","bell-datepicker-header");},function(){q("div",function(){g("className","bell-datepicker-prev");},function(){q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"decrease('year', 10)","decrease",function(y){return ["year",10]});},function(){r("Icon",function(){f("name","arrow-left-s-fill"),f("size","0"),f("className","bell-datepicker-header-icon");});}),q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"decrease('year', 1)","decrease",function(y){return ["year",1]});},function(){r("Icon",function(){f("name","arrow-left-s-line"),f("size","0"),f("className","bell-datepicker-header-icon");});});}),q("span",function(){a("canPickYear",$2)?(g("className","bell-datepicker-header-link"),l("click","event.click",$0,"set('type', RAW_TYPE_YEAR)","set",function(y){return ["type",a("RAW_TYPE_YEAR",$2,$0,$0,$0,y)]})):$0;},function(){q("span",function(){g("className","bell-datepicker-header-year");},function(){e(a("year",$2));}),e("年");}),q("div",function(){g("className","bell-datepicker-next");},function(){q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"increase('year', 1)","increase",function(y){return ["year",1]});},function(){r("Icon",function(){f("name","arrow-right-s-line"),f("size","0"),f("className","bell-datepicker-header-icon");});}),q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"increase('year', 10)","increase",function(y){return ["year",10]});},function(){r("Icon",function(){f("name","arrow-right-s-fill"),f("size","0"),f("className","bell-datepicker-header-icon");});});});}),q("div",function(){g("className","bell-datepicker-body");},function(){v(function(){q("div",function(){g("className","bell-datepicker-row");},function(){v(function(){q("div",function(){g("className",["bell-datepicker-col bell-datepicker-col-enabled",(d(a("isChecked",$2),[a("",$3)]))?" bell-datepicker-col-checked":""].join("")),l("click","event.click",$0,"click(this)","click",function(y){return [a("",$3,$0,$0,$0,y)]});},function(){q("div",function(){g("className","bell-datepicker-text");},function(){e(a("text",$3));});});},a("",$3,$0,$2),$0);});},a("datasource",$2,$0,$2),$0);});})):((a("type",$2)===a("RAW_TYPE_YEAR",$2))?(r("DateYear",function(){f("checkedYear",j("checkedYear",a("year",$2,$0,$2,$2)));})):$0)}

  function template$z(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0,$3=!1;return q("div",function(){g("className",["bell-datepicker-year bell-datepicker-panel",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){q("div",function(){g("className","bell-datepicker-header");},function(){q("span",function(){g("className","bell-datepicker-header-button bell-datepicker-prev"),l("click","event.click",$0,"decrease('year', count)","decrease",function(y){return ["year",a("count",$2,$0,$0,$0,y)]});},function(){r("Icon",function(){f("name","arrow-left-s-line"),f("size","0"),f("className","bell-datepicker-header-icon");});}),q("span",function(){g("className","bell-datepicker-header-year");},function(){e(a("year",$2));}),e("年"),q("span",function(){g("className","bell-datepicker-header-separator");},function(){e("-");},$2),q("span",function(){g("className","bell-datepicker-header-year");},function(){e((a("year",$2)+a("count",$2))-1);}),e("年"),q("span",function(){g("className","bell-datepicker-header-button bell-datepicker-next"),l("click","event.click",$0,"increase('year', count)","increase",function(y){return ["year",a("count",$2,$0,$0,$0,y)]});},function(){r("Icon",function(){f("name","arrow-right-s-line"),f("size","0"),f("className","bell-datepicker-header-icon");});});}),q("div",function(){g("className","bell-datepicker-body");},function(){v(function(){q("div",function(){g("className","bell-datepicker-row");},function(){v(function(){q("div",function(){g("className",["bell-datepicker-col bell-datepicker-col-enabled",(d(a("isChecked",$2),[a("",$3)]))?" bell-datepicker-col-checked":""].join("")),l("click","event.click",$0,"click(this)","click",function(y){return [a("",$3,$0,$0,$0,y)]});},function(){q("div",function(){g("className","bell-datepicker-text");},function(){e(a("",$3));});});},a("",$3,$0,$2),$0);});},a("datasource",$2,$0,$2),$0);});})}

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
              this.fire('change.year', {
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
          'change.year': function (event, data) {
              event.stop();
              this.set({
                  type: RAW_TYPE_MONTH,
                  year: data.year,
              });
          },
      },
      methods: {
          click: function (item) {
              this.fire('change.month', item);
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
              this.fire('change.date', item);
          }
      }
  });

  function template$A(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0,$3=!1;return q("div",function(){g("className",["bell-datepicker-daterange",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){q("div",function(){g("className","bell-datepicker-panel");},function(){q("div",function(){g("className","bell-datepicker-header");},function(){q("div",function(){g("className","bell-datepicker-prev");},function(){q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"offsetStart(-12)","offsetStart",function(y){return [-12]});},function(){r("Icon",function(){f("name","arrow-left-s-fill"),f("size","0"),f("className","bell-datepicker-header-icon");});}),q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"offsetStart(-1)","offsetStart",function(y){return [-1]});},function(){r("Icon",function(){f("name","arrow-left-s-line"),f("size","0"),f("className","bell-datepicker-header-icon");});});}),q("span",function(){g("className","bell-datepicker-header-year");},function(){e(a("startDate.year",$2));}),e("年"),q("span",function(){g("className","bell-datepicker-header-month");},function(){e(a("startDate.month",$2));}),e("月"),a("splitPanel",$2)?(q("div",function(){g("className","bell-datepicker-next");},function(){q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"offsetStart(1)","offsetStart",function(y){return [1]});},function(){r("Icon",function(){f("name","arrow-right-s-line"),f("size","0"),f("className","bell-datepicker-header-icon");});}),q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"offsetStart(12)","offsetStart",function(y){return [12]});},function(){r("Icon",function(){f("name","arrow-right-s-fill"),f("size","0"),f("className","bell-datepicker-header-icon");});});})):p();}),q("div",function(){g("className","bell-datepicker-body");},function(){q("div",function(){g("className","bell-datepicker-weeks");},function(){v(function(){q("div",function(){g("className","bell-datepicker-col");},function(){e(a("",$3));});},a("weeks",$2,$0,$2),$0);}),q("div",function(){g("className","bell-datepicker-days"),l("mouseleave","event.mouseleave",$0,"leave()","leave");},function(){v(function(){q("div",function(){g("className","bell-datepicker-row");},function(){v(function(){q("div",function(){g("className",["bell-datepicker-col",(d(a("isEnabled",$2),[a("",$3)]))?([" bell-datepicker-col-enabled",(d(a("isCurrentMonth",$2),[a("",$3),a("startDate",$3,2)]))?([" bell-datepicker-col-current-month",(a("timestamp",$3)===a("computedCheckedStartTimestamp",$3,2))?([" bell-datepicker-col-checked",a("computedCheckedEndTimestamp",$3,2)?" bell-datepicker-col-start":" bell-datepicker-col-range"].join("")):"",(a("timestamp",$3)===a("computedCheckedEndTimestamp",$3,2))?" bell-datepicker-col-checked bell-datepicker-col-end":"",((a("computedCheckedStartTimestamp",$3,2)<a("timestamp",$3))&&(a("computedCheckedEndTimestamp",$3,2)>a("timestamp",$3)))?" bell-datepicker-col-range":""].join("")):" bell-datepicker-col-adjacent-month"].join("")):" bell-datepicker-col-disabled"].join("")),a("pinDate",$3,2)?(l("mouseenter","event.mouseenter",$0,"hover(this)","hover",function(y){return [a("",$3,$0,$0,$0,y)]})):$0,(d(a("isEnabled",$2),[a("",$3)]))?(l("click","event.click",$0,"click(this)","click",function(y){return [a("",$3,$0,$0,$0,y)]})):$0;},function(){q("div",function(){g("className","bell-datepicker-text");},function(){e(a("date",$3));});});},a("list",$3,$0,$2),$0);});},a("startDatasource",$2,$0,$2),$0);});});}),q("div",function(){g("className","bell-datepicker-panel");},function(){q("div",function(){g("className","bell-datepicker-header");},function(){a("splitPanel",$2)?(q("div",function(){g("className","bell-datepicker-prev");},function(){q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"offsetEnd(-12)","offsetEnd",function(y){return [-12]});},function(){r("Icon",function(){f("name","arrow-left-s-fill"),f("size","0"),f("className","bell-datepicker-header-icon");});}),q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"offsetEnd(-1)","offsetEnd",function(y){return [-1]});},function(){r("Icon",function(){f("name","arrow-left-s-line"),f("size","0"),f("className","bell-datepicker-header-icon");});});})):p(),q("span",function(){g("className","bell-datepicker-header-year");},function(){e(a("endDate.year",$2));}),e("年"),q("span",function(){g("className","bell-datepicker-header-month");},function(){e(a("endDate.month",$2));}),e("月"),q("div",function(){g("className","bell-datepicker-next");},function(){q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"offsetEnd(1)","offsetEnd",function(y){return [1]});},function(){r("Icon",function(){f("name","arrow-right-s-line"),f("size","0"),f("className","bell-datepicker-header-icon");});}),q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"offsetEnd(12)","offsetEnd",function(y){return [12]});},function(){r("Icon",function(){f("name","arrow-right-s-fill"),f("size","0"),f("className","bell-datepicker-header-icon");});});});}),q("div",function(){g("className","bell-datepicker-body");},function(){q("div",function(){g("className","bell-datepicker-weeks");},function(){v(function(){q("div",function(){g("className","bell-datepicker-col");},function(){e(a("",$3));});},a("weeks",$2,$0,$2),$0);}),q("div",function(){g("className","bell-datepicker-days"),l("mouseleave","event.mouseleave",$0,"leave()","leave");},function(){v(function(){q("div",function(){g("className","bell-datepicker-row");},function(){v(function(){q("div",function(){g("className",["bell-datepicker-col",(d(a("isEnabled",$2),[a("",$3)]))?([" bell-datepicker-col-enabled",(d(a("isCurrentMonth",$2),[a("",$3),a("endDate",$3,2)]))?([" bell-datepicker-col-current-month",(a("timestamp",$3)===a("computedCheckedStartTimestamp",$3,2))?([" bell-datepicker-col-checked",a("computedCheckedEndTimestamp",$3,2)?" bell-datepicker-col-start":" bell-datepicker-col-range"].join("")):"",(a("timestamp",$3)===a("computedCheckedEndTimestamp",$3,2))?" bell-datepicker-col-checked bell-datepicker-col-end":"",((a("computedCheckedStartTimestamp",$3,2)<a("timestamp",$3))&&(a("computedCheckedEndTimestamp",$3,2)>a("timestamp",$3)))?" bell-datepicker-col-range":""].join("")):" bell-datepicker-col-adjacent-month"].join("")):" bell-datepicker-col-disabled"].join("")),a("pinDate",$3,2)?(l("mouseenter","event.mouseenter",$0,"hover(this)","hover",function(y){return [a("",$3,$0,$0,$0,y)]})):$0,(d(a("isEnabled",$2),[a("",$3)]))?(l("click","event.click",$0,"click(this)","click",function(y){return [a("",$3,$0,$0,$0,y)]})):$0;},function(){q("div",function(){g("className","bell-datepicker-text");},function(){e(a("date",$3));});});},a("list",$3,$0,$2),$0);});},a("endDatasource",$2,$0,$2),$0);});});});})}

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
                  me.fire('change.range', {
                      start: pinDate,
                      end: item,
                  });
              }
              else {
                  me.fire('change.range', {
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

  function template$B(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0,$3=!1;return (a("type",$2)===a("RAW_TYPE_WEEK",$2))?(q("div",function(){g("className",["bell-datepicker-week bell-datepicker-panel",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){q("div",function(){g("className","bell-datepicker-header");},function(){q("div",function(){g("className","bell-datepicker-prev");},function(){q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"offset(-12)","offset",function(y){return [-12]});},function(){r("Icon",function(){f("name","arrow-left-s-fill"),f("size","0"),f("className","bell-datepicker-header-icon");});}),q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"offset(-1)","offset",function(y){return [-1]});},function(){r("Icon",function(){f("name","arrow-left-s-line"),f("size","0"),f("className","bell-datepicker-header-icon");});});}),q("span",function(){a("canPickYear",$2)?(g("className","bell-datepicker-header-link"),l("click","event.click",$0,"set('type', RAW_TYPE_YEAR)","set",function(y){return ["type",a("RAW_TYPE_YEAR",$2,$0,$0,$0,y)]})):$0;},function(){q("span",function(){g("className","bell-datepicker-header-year");},function(){e(a("date.year",$2));}),e("年");}),q("span",function(){a("canPickMonth",$2)?(g("className","bell-datepicker-header-link"),l("click","event.click",$0,"set('type', RAW_TYPE_MONTH)","set",function(y){return ["type",a("RAW_TYPE_MONTH",$2,$0,$0,$0,y)]})):$0;},function(){q("span",function(){g("className","bell-datepicker-header-month");},function(){e(a("date.month",$2));}),e("月");}),q("div",function(){g("className","bell-datepicker-next");},function(){q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"offset(12)","offset",function(y){return [12]});},function(){r("Icon",function(){f("name","arrow-right-s-line"),f("size","0"),f("className","bell-datepicker-header-icon");});}),q("span",function(){g("className","bell-datepicker-header-button"),l("click","event.click",$0,"offset(1)","offset",function(y){return [1]});},function(){r("Icon",function(){f("name","arrow-right-s-fill"),f("size","0"),f("className","bell-datepicker-header-icon");});});});}),q("div",function(){g("className","bell-datepicker-body");},function(){q("div",function(){g("className","bell-datepicker-weeks");},function(){v(function(){q("div",function(){g("className","bell-datepicker-col");},function(){e(a("",$3));});},a("weeks",$2,$0,$2),$0);}),q("div",function(){g("className","bell-datepicker-days");},function(){v(function(){q("div",function(){g("className","bell-datepicker-row");},function(){v(function(){q("div",function(){g("className",["bell-datepicker-col",(d(a("isEnabled",$2),[a("",$3)]))?([" bell-datepicker-col-enabled",(d(a("isCurrentMonth",$2),[a("",$3)]))?" bell-datepicker-col-current-month":" bell-datepicker-col-adjacent-month"].join("")):" bell-datepicker-col-disabled",((a("checkedTimestamp",$3,2)>=a("start.timestamp",$3,1))&&(a("checkedTimestamp",$3,2)<a("end.timestamp",$3,1)))?((a("colIndex",$2)===0)?" bell-datepicker-col-checked bell-datepicker-col-start":((a("colIndex",$2)===(a("$length",$2)-1))?" bell-datepicker-col-checked bell-datepicker-col-end":" bell-datepicker-col-range")):""].join("")),(d(a("isEnabled",$2),[a("",$3)]))?(l("click","event.click",$0,"click(../rowIndex)","click",function(y){return [a("rowIndex",$3,1,$0,$0,y)]})):$0;},function(){q("div",function(){g("className","bell-datepicker-text");},function(){e(a("date",$3));});});},a("list",$3,$0,$2),"colIndex");});},a("datasource",$2,$0,$2),"rowIndex");});});})):((a("type",$2)===a("RAW_TYPE_YEAR",$2))?(r("DateYear",function(){f("checkedYear",j("checkedYear",a("date.year",$2,$0,$2,$2)));})):((a("type",$2)===a("RAW_TYPE_MONTH",$2))?(r("DateMonth",function(){f("checkedYear",j("checkedYear",a("date.year",$2,$0,$2,$2))),f("checkedMonth",j("checkedMonth",a("date.month",$2,$0,$2,$2)));})):$0))}

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
              this.fire('change.week', {
                  start: start,
                  end: end,
              });
          },
      }
  });

  function template$C(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0,$3=!1;return r("Dropdown",function(){f("trigger","custom"),f("visible",j("visible",a("visible",$2,$0,$2,$2))),f("placement",j("placement",a("placement",$2,$0,$2,$2))),l("outside","event.outside",$0,"handleOutsideClick()","handleOutsideClick"),f("className",["bell-datepicker",a("status",$2)?([" bell-datepicker-",a("status",$2)].join("")):"",a("size",$2)?([" bell-datepicker-",a("size",$2)].join("")):"",a("block",$2)?" bell-datepicker-block":"",a("disabled",$2)?" bell-datepicker-disabled":" bell-datepicker-enabled",a("clearable",$2)?" bell-datepicker-clearable":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),(a("width",$2)||a("style",$2))?(f("style",[a("width",$2)?(["width: ",a("width",$2),"px;"].join("")):"",a("style",$2)?a("style",$2):""].join(""))):$0;},{"$slot_children":function(){q("div",function(){g("className","bell-datepicker-button"),(!a("disabled",$2))?(l("click","event.click",$0,"toggle('visible')","toggle",function(y){return ["visible"]})):$0;},function(){(a("formatedValues.length",$2)>0)?((a("multiple",$2)&&((a("type",$2)!==a("RAW_TYPE_DATE_RANGE",$2))&&(a("type",$2)!==a("RAW_TYPE_WEEK",$2))))?(q("div",function(){g("className","bell-datepicker-values");},function(){v(function(){r("Tag",function(){f("simple",$2),f("closable",$2),l("close","event.close",$0,"handleRemoveItem($event, index)","handleRemoveItem",function(y){return [a("$event",$2,$0,$0,$0,y),a("index",$2,$0,$0,$0,y)]});},{"$slot_children":function(){e(a("",$3));}});},a("formatedValues",$2,$0,$2),"index");})):(q("div",function(){g("className","bell-datepicker-value");},function(){e(a("formatedValues.0",$2)),a("formatedValues.1",$2)?(q("span",function(){g("className","bell-datepicker-separator");},function(){e("~");},$2),e(a("formatedValues.1",$2))):p();}))):(q("div",function(){g("className","bell-datepicker-placeholder");},function(){e(a("placeholder",$2));})),(a("clearable",$2)&&a("formatedValues.length",$2))?(r("Icon",function(){f("name","close-circle-fill"),f("size","0"),f("className","bell-datepicker-clear-icon"),l("click","event.click","native","handleClearClick()","handleClearClick");})):p(),r("Icon",function(){f("name","calendar-line"),f("size","0"),f("className","bell-datepicker-calendar-icon");});});},"$slot_overlay":function(){(a("shortcuts",$2)&&(a("shortcuts.length",$2)>0))?(q("div",function(){g("className","bell-datepicker-shortcut");},function(){v(function(){q("div",function(){g("className","bell-datepicker-shortcut-item"),l("click","event.click",$0,"handleShortcutClick(this)","handleShortcutClick",function(y){return [a("",$3,$0,$0,$0,y)]});},function(){e(a("text",$3));});},a("shortcuts",$2,$0,$2),$0);})):p(),(a("type",$2)===a("RAW_TYPE_DATE",$2))?(r("DateView",function(){f("defaultDate",j("defaultDate",a("defaultSimpleDate.timestamp",$2,$0,$2,$2))),f("checkedDate",j("checkedDate",a("value",$2,$0,$2,$2))),f("disabledDate",j("disabledDate",a("disabledDate",$2,$0,$2,$2))),f("canPickYear",$2),f("canPickMonth",$2);})):((a("type",$2)===a("RAW_TYPE_DATE_RANGE",$2))?(r("DateRange",function(){f("splitPanel",j("splitPanel",a("splitPanel",$2,$0,$2,$2))),f("defaultStartDate",j("defaultStartDate",a("defaultSimpleDate.timestamp",$2,$0,$2,$2))),f("checkedStartDate",j("checkedStartDate",a("value.0",$2,$0,$2,$2))),f("defaultEndDate",j("defaultEndDate",a("defaultSimpleDate.timestamp",$2,$0,$2,$2))),f("checkedEndDate",j("checkedEndDate",a("value.1",$2,$0,$2,$2))),f("disabledDate",j("disabledDate",a("disabledDate",$2,$0,$2,$2)));})):((a("type",$2)===a("RAW_TYPE_WEEK",$2))?(r("DateWeek",function(){f("defaultDate",j("defaultDate",a("defaultSimpleDate.timestamp",$2,$0,$2,$2))),f("checkedDate",j("checkedDate",a("value.0",$2,$0,$2,$2))),f("canPickYear",$2),f("canPickMonth",$2);})):((a("type",$2)===a("RAW_TYPE_YEAR",$2))?(r("DateYear",function(){f("defaultDate",j("defaultDate",a("defaultSimpleDate.timestamp",$2,$0,$2,$2))),f("checkedDate",j("checkedDate",a("value",$2,$0,$2,$2)));})):((a("type",$2)===a("RAW_TYPE_MONTH",$2))?(r("DateMonth",function(){f("defaultDate",j("defaultDate",a("defaultSimpleDate.timestamp",$2,$0,$2,$2))),f("checkedDate",j("checkedDate",a("value",$2,$0,$2,$2))),f("canPickYear",$2);})):p()))));}})}

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
          'change.input': function (event) {
              event.stop();
          },
          'clear.input': function (event) {
              event.stop();
              this.fire('clear.datepicker', TRUE);
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
              this.fire('clear.datepicker', TRUE);
              this.fire('clear.datepicker');
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

  function template$D(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-tooltip",a("disabled",$2)?" bell-tooltip-disabled":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){q("div",function(){g("className","bell-tooltip-el"),(!a("disabled",$2))?((a("mode",$2)==="click")?(l("click","event.click",$0,"click()","click")):(l("mouseenter","event.mouseenter",$0,"enter()","enter"),l("mouseleave","event.mouseleave",$0,"leave()","leave"))):$0;},function(){s("$slot_children");}),q("div",function(){g("className",["bell-tooltip-popup",a("theme",$2)?([" bell-tooltip-",a("theme",$2)].join("")):"",a("placement",$2)?([" bell-tooltip-",a("placement",$2)].join("")):""].join(""));},function(){q("div",function(){g("className","bell-tooltip-arrow");},$0,$2),q("div",function(){g("className","bell-tooltip-content"),(a("maxWidth",$2)||a("maxHeight",$2))?(g("style.cssText",[a("maxWidth",$2)?(["max-width: ",a("maxWidth",$2),"px;"].join("")):"",a("maxHeight",$2)?(["max-height: ",a("maxHeight",$2),"px;"].join("")):""].join(""))):$0;},function(){s("$slot_content",function(){e(a("content",$2));});});},$0,$0,$0,$0,$0,"popup");})}

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
              me.on(RAW_EVENT_BEFORE_DESTROY, function (event) {
                  if (event.phase === Yox.Event.PHASE_CURRENT) {
                      Yox.dom.off(DOCUMENT, RAW_CLICK, onClick_1);
                  }
              });
          }
      },
      beforeDestroy: function () {
          var me = this;
          if (me.timer) {
              clearTimeout(me.timer);
          }
      }
  });

  function template$E(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-collapse",a("simple",$2)?" bell-collapse-simple":" bell-collapse-bordered",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_children");})}

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
              this.fire('change.collapse', {
                  value: value,
              }, TRUE);
          }
      },
      events: {
          'open.collapseItem': function (event, data) {
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
          }
      }
  });

  function template$F(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-collapse-item",a("opened",$2)?" bell-collapse-opened":"",a("disabled",$2)?" bell-collapse-disabled":" bell-collapse-enabled",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){q("div",function(){g("className","bell-collapse-header"),(!a("disabled",$2))?(l("click","event.click",$0,"click()","click")):$0;},function(){(d(a("hasSlot",$2),["extra"]))?(q("div",function(){g("className","bell-collapse-extra");},function(){s("$slot_extra");})):p(),r("Icon",function(){f("name","arrow-right-s-line"),f("size","0"),f("className","bell-collapse-arrow-icon");}),e(a("title",$2));}),q("div",function(){g("className","bell-collapse-content");},function(){s("$slot_children");});})}

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
          'change.collapse': function (event, data) {
              // 只接收父级事件，再上一级的就不管了
              // 避免嵌套面板的问题
              if (event.target !== this.$parent) {
                  return;
              }
              var name = this.get('name');
              this.set('opened', Yox.is.array(data.value)
                  ? Yox.array.has(data.value, name, FALSE)
                  : data.value == name);
          }
      },
      methods: {
          click: function () {
              this.fire('open.collapseItem', {
                  name: this.get('name'),
                  opened: !this.get('opened'),
              });
          },
      },
      components: {
          Icon: Icon,
      }
  });

  function template$G(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-card bell-card-shadow-",a("shadow",$2),a("simple",$2)?" bell-card-simple":" bell-card-bordered",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),(a("width",$2)||a("style",$2))?(g("style.cssText",[a("width",$2)?(["width: ",a("width",$2),"px;"].join("")):"",a("style",$2)?a("style",$2):""].join(""))):$0;},function(){s("$slot_children");})}

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

  function template$H(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-card-header",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_avatar"),q("div",function(){g("className","bell-card-header-detail");},function(){q("div",function(){g("className","bell-card-header-title");},function(){s("$slot_title");}),(d(a("hasSlot",$2),["subTitle"]))?(q("div",function(){g("className","bell-card-header-sub-title");},function(){s("$slot_subTitle");})):p();}),(d(a("hasSlot",$2),["extra"]))?(q("span",function(){g("className","bell-card-header-extra");},function(){s("$slot_extra");})):p();})}

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

  function template$I(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-card-media",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_children"),((d(a("hasSlot",$2),["title"]))||(d(a("hasSlot",$2),["subTitle"])))?(q("div",function(){g("className","bell-card-media-detail");},function(){(d(a("hasSlot",$2),["title"]))?(q("div",function(){g("className","bell-card-media-title");},function(){s("$slot_title");})):p(),(d(a("hasSlot",$2),["subTitle"]))?(q("div",function(){g("className","bell-card-media-sub-title");},function(){s("$slot_subTitle");})):p();})):p();})}

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

  function template$J(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-card-body",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_children");})}

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

  function template$K(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-card-footer",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_children");})}

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

  function template$L(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-page-header",a("showBack",$2)?" bell-page-header-with-back":"",(d(a("hasSlot",$2),["tags"]))?" bell-page-header-with-tags":"",(d(a("hasSlot",$2),["extra"]))?" bell-page-header-with-extra":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_breadcrumb"),q("div",function(){g("className","bell-page-header-header");},function(){a("showBack",$2)?(r("Icon",function(){f("name","arrow-left-line"),f("size","0"),f("className","bell-page-header-back"),m("click","event.click","native","back.pageHeader","back.pageHeader");})):p(),q("div",function(){g("className","bell-page-header-title");},function(){e(a("title",$2));}),(d(a("hasSlot",$2),["tags"]))?(q("div",function(){g("className","bell-page-header-tags");},function(){s("$slot_tags");})):p(),(d(a("hasSlot",$2),["extra"]))?(q("div",function(){g("className","bell-page-header-extra");},function(){s("$slot_extra");})):p();}),(d(a("hasSlot",$2),["content"]))?(q("div",function(){g("className","bell-page-header-body");},function(){s("$slot_content");})):p();})}

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

  function template$M(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-layout",a("vertical",$2)?" bell-layout-vertical":" bell-layout-horizontal",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_children");})}

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

  function template$N(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-layout-header",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){(d(a("hasSlot",$2),["extra"]))?(q("div",function(){g("className","bell-layout-header-extra");},function(){s("$slot_extra");})):p(),s("$slot_children");})}

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

  function template$O(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-layout-content",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_children");})}

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

  function template$P(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-layout-footer",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_children");})}

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

  function template$Q(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-layout-sider",a("collapsed",$2)?" bell-layout-sider-collapsed":"",a("showTrigger",$2)?" bell-layout-sider-with-trigger":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),((a("collapsed",$2)||a("width",$2))||a("style",$2))?(g("style.cssText",[a("collapsed",$2)?"flex: 0 0 80px;\n    width: 80px;\n    min-width: 80px;\n    max-width: 80px;":(a("width",$2)?(["flex: 0 0 ",a("width",$2),"px;\n    width: ",a("width",$2),"px;\n    min-width: ",a("width",$2),"px;\n    max-width: ",a("width",$2),"px;"].join("")):""),a("style",$2)?a("style",$2):""].join(""))):$0;},function(){(d(a("hasSlot",$2),["logo"]))?(q("div",function(){g("className","bell-layout-sider-logo");},function(){s("$slot_logo");})):p(),s("$slot_children"),a("showTrigger",$2)?(q("div",function(){g("className","bell-layout-sider-trigger"),l("click","event.click",$0,"toggle('collapsed')","toggle",function(y){return ["collapsed"]}),g("style.cssText",a("collapsed",$2)?"width: 80px;":(a("width",$2)?(["width: ",a("width",$2),"px;"].join("")):""));},function(){r("Icon",function(){f("name","arrow-left-s-line"),f("size","0"),f("className","bell-layout-sider-trigger-icon");});})):p();})}

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

  function template$R(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("a",function(){g("className",["bell-link",a("type",$2)?([" bell-link-",a("type",$2)].join("")):"",a("size",$2)?([" bell-link-",a("size",$2)].join("")):"",a("underline",$2)?" bell-link-underline":"",a("disabled",$2)?" bell-link-disabled":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),g("href",a("href",$2)||"javascript:void(0)"),a("target",$2)?(g("target",j("target",a("target",$2,$0,$2,$2),1))):$0,a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0,(!a("href",$2)&&(!a("disabled",$2)))?m("click","event.click",$0,"click.link","click.link"):$0,f("ondragstart","return false");},function(){s("$slot_children");})}

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

  function template$S(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-list",a("size",$2)?([" bell-list-",a("size",$2)].join("")):"",a("simple",$2)?" bell-list-simple":" bell-list-bordered",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){t("empty",function(){q("div",function(){g("className","bell-list-empty");},function(){s("$slot_empty",function(){r("Empty",$0,{"$slot_children":function(){e("暂无数据");}});});});}),(d(a("hasSlot",$2),["header"]))?(q("div",function(){g("className","bell-list-header");},function(){s("$slot_header");}),q("div",function(){g("className","bell-list-body");},function(){s("$slot_children",function(){u("empty");});})):(s("$slot_children",function(){u("empty");})),a("loading",$2)?(r("Spin",function(){f("size","large"),f("fixed",$2);})):p();})}

  function template$T(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-empty",a("simple",$2)?" bell-empty-simple":"",(d(a("hasSlot",$2),["children"]))?" bell-empty-with-content":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_children");})}

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

  function template$U(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-list-item",a("clickable",$2)?" bell-list-item-clickable":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0,a("clickable",$2)?m("click","event.click",$0,"click.listItem","click.listItem"):$0;},function(){s("$slot_children");})}

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

  function template$V(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-result",a("status",$2)?([" bell-result-",a("status",$2)].join("")):"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){q("div",function(){g("className","bell-result-icon");},function(){s("$slot_icon",function(){r("Icon",function(){f("name",(a("status",$2)===a("RAW_TYPE_SUCCESS",$2))?"checkbox-circle-fill":((a("status",$2)===a("RAW_TYPE_WARNING",$2))?"error-warning-fill":((a("status",$2)===a("RAW_TYPE_ERROR",$2))?"close-circle-fill":"information-fill"))),f("size","0"),f("className","bell-result-status-icon");});});}),a("title",$2)?(q("div",function(){g("className","bell-result-title");},function(){e(a("title",$2));})):p(),a("subTitle",$2)?(q("div",function(){g("className","bell-result-sub-title");},function(){e(a("subTitle",$2));})):p(),(d(a("hasSlot",$2),["extra"]))?(q("div",function(){g("className","bell-result-extra");},function(){s("$slot_extra");})):p();})}

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

  function template$W(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-exception",a("status",$2)?([" bell-exception-",a("status",$2)].join("")):"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){a("title",$2)?(q("div",function(){g("className","bell-exception-title");},function(){e(a("title",$2));})):p(),a("subTitle",$2)?(q("div",function(){g("className","bell-exception-sub-title");},function(){e(a("subTitle",$2));})):p(),(d(a("hasSlot",$2),["extra"]))?(q("div",function(){g("className","bell-exception-extra");},function(){s("$slot_extra");})):p();})}

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

  function template$X(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-divider",a("vertical",$2)?" bell-divider-vertical":" bell-divider-horizontal",a("dashed",$2)?" bell-divider-dashed":"",a("align",$2)?([" bell-divider-",a("align",$2)].join("")):"",(d(a("hasSlot",$2),["children"]))?" bell-divider-with-text":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){(d(a("hasSlot",$2),["children"]))?(q("div",function(){g("className","bell-divider-text");},function(){s("$slot_children");})):p();})}

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

  function template$Y(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-circle",a("dashboard",$2)?" bell-circle-dashboard":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),g("style.cssText",["width: ",a("size",$2),"px;height: ",a("size",$2),"px;",a("style",$2)?a("style",$2):""].join(""));},function(){q("svg",function(){f("viewBox","0 0 100 100");},function(){q("path",function(){f("d",j("d",a("path",$2,$0,$2,$2))),f("stroke",j("stroke",a("trailColor",$2,$0,$2,$2))),f("stroke-width",j("stroke-width",a("trailWidth",$2,$0,$2,$2))),f("fill-opacity","0"),f("style",j("style",a("trailStyle",$2,$0,$2,$2)));},$0,$0,$0,$0,$2),q("path",function(){f("d",j("d",a("path",$2,$0,$2,$2))),f("stroke-linecap",j("stroke-linecap",a("strokeLinecap",$2,$0,$2,$2))),f("stroke",j("stroke",a("strokeColor",$2,$0,$2,$2))),f("stroke-width",j("stroke-width",a("strokeWidth",$2,$0,$2,$2))),f("fill-opacity","0"),f("style",j("style",a("pathStyle",$2,$0,$2,$2)));},$0,$0,$0,$0,$2);},$0,$0,$0,$2),(d(a("hasSlot",$2),["children"]))?(q("div",function(){g("className","bell-circle-content");},function(){s("$slot_children");})):p();})}

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

  function template$Z(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-progress",a("status",$2)?([" bell-progress-",a("status",$2)].join("")):"",a("active",$2)?" bell-progress-active":"",a("inside",$2)?" bell-progress-inside":" bell-progress-outside",a("vertical",$2)?" bell-progress-vertical":" bell-progress-horizontal",(!a("inside",$2)&&(!a("vertical",$2)&&(d(a("hasSlot",$2),["children"]))))?" bell-progress-with-text":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){t("text",function(){(d(a("hasSlot",$2),["children"]))?(q("div",function(){g("className","bell-progress-text");},function(){s("$slot_children");})):p();}),t("track",function(){q("div",function(){g("className","bell-progress-track"),a("vertical",$2)?(g("style.cssText",["width: ",a("thickness",$2),"px;"].join(""))):(g("style.cssText",["height: ",a("thickness",$2),"px;"].join("")));},function(){q("div",function(){g("className","bell-progress-bar"),g("style.cssText",a("vertical",$2)?(["height: ",a("percent",$2),"%;\n          width: ",a("thickness",$2),"px;"].join("")):(["width: ",a("percent",$2),"%;\n          height: ",a("thickness",$2),"px;\n          line-height: ",a("thickness",$2),"px;"].join("")));},function(){a("inside",$2)?u("text"):p();});});}),a("inside",$2)?u("track"):((!a("vertical",$2)&&(d(a("hasSlot",$2),["children"])))?(q("div",function(){g("className","bell-progress-block");},function(){u("track");})):u("track"),u("text"));})}

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

  function template$_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0,$3=!1;return q("div",function(){g("className",["bell-rate",a("type",$2)?([" bell-rate-",a("type",$2)].join("")):"",a("readOnly",$2)?" bell-rate-dead":" bell-rate-live",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0,(!a("readOnly",$2))?(l("mouseleave","event.mouseleave",$0,"handleLeave()","handleLeave")):$0;},function(){q("input",function(){g("type","hidden"),k(a("value",$2,$0,$2,$2));}),x(function(){r("Icon",function(){f("name",j("name",a("iconName",$2,$0,$2,$2))),f("size",j("size",a("iconSize",$2,$0,$2,$2))),f("className",["bell-rate-icon-full",((a("activeValue",$2)-a("",$3))>=0)?" bell-rate-icon-active":""].join("")),(!a("readOnly",$2))?(l("mousemove","event.mousemove","native","handleMove($event, this)","handleMove",function(y){return [a("$event",$2,$0,$0,$0,y),a("",$3,$0,$0,$0,y)]}),l("click","event.click","native","handleClick($event, this)","handleClick",function(y){return [a("$event",$2,$0,$0,$0,y),a("",$3,$0,$0,$0,y)]})):$0;},{"$slot_children":function(){a("half",$2)?(r("Icon",function(){f("name",j("name",a("iconName",$2,$0,$2,$2))),f("size",j("size",a("iconSize",$2,$0,$2,$2))),f("className",["bell-rate-icon-half",((a("activeValue",$2)-a("",$3))>=(-0.5))?" bell-rate-icon-active":""].join(""));})):p();}});},1,a("count",$2),$0),((d(a("hasSlot",$2),["children"]))||a("texts",$2))?(q("span",function(){g("className","bell-rate-text"),g("style.cssText",["line-height: ",a("iconSize",$2),"px"].join(""));},function(){s("$slot_children",function(){e(a(b("texts",[a("activeValue",$2)-1]),$2));});})):p();})}

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
              this.fire('change.rate', {
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

  function template$$(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0,$3=!1;return q("div",function(){g("className",["bell-tabs",a("type",$2)?([" bell-tabs-",a("type",$2)].join("")):"",a("size",$2)?([" bell-tabs-",a("size",$2)].join("")):"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){q("div",function(){g("className","bell-tabs-bar");},function(){q("div",function(){g("className",["bell-tabs-nav",a("closable",$2)?" bell-tabs-nav-closable":""].join(""));},function(){v(function(){q("div",function(){g("className",["bell-tabs-tab",a("disabled",$3)?" bell-tabs-tab-disabled":" bell-tabs-tab-enabled",(a("name",$3)===a("value",$3,1))?" bell-tabs-tab-active":""].join("")),(!a("disabled",$3))?(l("click","event.click",$0,"handleClickTab(this)","handleClickTab",function(y){return [a("",$3,$0,$0,$0,y)]})):$0;},function(){a("icon",$3)?(r("Icon",function(){f("className","bell-tabs-tab-icon"),f("name",j("name",a("icon",$3,$0,$2,$2)));})):p(),e(a("label",$3)),a("closable",$3,1)?(r("Icon",function(){f("className","bell-tabs-tab-close-icon"),f("name","close-line"),f("size","0"),l("click","event.click","native","handleCloseTab(this)","handleCloseTab",function(y){return [a("",$3,$0,$0,$0,y)]});})):p();});},a("tabs",$2,$0,$2),$0);});}),q("div",function(){g("className","bell-tabs-content");},function(){s("$slot_children");});})}

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
          'add.tabPanel': function (event, data) {
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
          'remove.tabPanel': function (event) {
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
          'update.tabPanel': function (event) {
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
          }
      },
      watchers: {
          value: function (value) {
              this.fire('change.tabs', { value: value }, TRUE);
          },
      },
      methods: {
          handleCloseTab: function (tab) {
              this.fire('tabRemove.tabs', {
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

  function template$10(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-tabs-panel",a("isActive",$2)?" bell-tabs-panel-active":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_children");})}

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
              this.fire('update.tabPanel');
          },
          icon: function () {
              this.fire('update.tabPanel');
          },
          label: function () {
              this.fire('update.tabPanel');
          },
          disabled: function () {
              this.fire('update.tabPanel');
          },
      },
      events: {
          'change.tabs': function (_, data) {
              this.set({
                  isActive: this.get('name') == data.value
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
          this.fire('add.tabPanel', {
              isActive: isActive,
          });
      },
      beforeDestroy: function () {
          this.fire('remove.tabPanel');
      }
  });

  function template$11(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-dropdown-item",a("divided",$2)?" bell-dropdown-item-divided":"",a("active",$2)?" bell-dropdown-item-active":"",a("disabled",$2)?" bell-dropdown-item-disabled":" bell-dropdown-item-enabled",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0,(!a("disabled",$2))?m("click","event.click",$0,"click.dropdownItem","click.dropdownItem"):$0;},function(){s("$slot_children");})}

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

  function template$12(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-dropdown-menu",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_children");})}

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

  function template$13(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-thumbnail",a("loading",$2)?" bell-thumbnail-loading":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),g("style.cssText",["width:",a("width",$2),"px;height:",a("height",$2),"px;line-height:",a("height",$2),"px;",a("style",$2)?a("style",$2):""].join(""));},function(){a("src",$2)?(q("img",function(){g("className","bell-thumbnail-image"),g("src",j("src",a("src",$2,$0,$2,$2),1)),a("srcSet",$2)?(f("srcset",j("srcset",a("srcSet",$2,$0,$2,$2)))):$0,a("alt",$2)?(g("alt",j("alt",a("alt",$2,$0,$2,$2),1))):$0,f("ondragstart","return false"),m("error","event.error",$0,"error.thumbnail","error.thumbnail");}),((a("showZoom",$2)||a("showDownload",$2))||a("showDelete",$2))?(q("div",function(){g("className","bell-thumbnail-mask");},function(){a("showZoom",$2)?(r("Icon",function(){f("name","zoom-in-line"),f("size","0"),m("click","event.click","native","zoom.thumbnail","zoom.thumbnail");})):p(),a("showDownload",$2)?(r("Icon",function(){f("name","download-2-line"),f("size","0"),m("click","event.click","native","download.thumbnail","download.thumbnail");})):p(),a("showDelete",$2)?(r("Icon",function(){f("name","delete-bin-line"),f("size","0"),m("click","event.click","native","delete.thumbnail","delete.thumbnail");})):p();})):p()):(q("div",function(){g("className","bell-thumbnail-placeholder");},function(){s("$slot_placeholder");})),a("loading",$2)?(r("Spin",function(){f("size","large"),f("fixed",$2);})):p();})}

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

  function template$14(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-timeline",a("pending",$2)?" bell-timeline-pending":"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_children");})}

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

  function template$15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-timeline-item",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){(d(a("hasSlot",$2),["dot"]))?(q("div",function(){g("className","bell-timeline-custom");},function(){s("$slot_dot");})):(q("div",function(){g("className","bell-timeline-dot"),a("color",$2)?(g("style.cssText",["border-color: ",a("color",$2)].join(""))):$0;})),q("div",function(){g("className","bell-timeline-content");},function(){s("$slot_children");});})}

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

  function template$16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-form",a("inline",$2)?" bell-form-inline":"",a("showColon",$2)?" bell-form-colon":"",a("labelAlign",$2)?([" bell-form-label-",a("labelAlign",$2)].join("")):"",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){s("$slot_children");})}

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
              this.fire('validate.form', { errors: errors }, TRUE);
          },
      }
  });

  function template$17(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-form-item",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){(a("label",$2)||(d(a("hasSlot",$2),["label"])))?(q("label",function(){g("className",["bell-form-item-label",a("showRequiredMark",$2)?" bell-form-item-label-required":""].join("")),(a("itemLabelWidth",$2)||a("labelAlign",$2))?(g("style.cssText",[a("itemLabelWidth",$2)?(["width: ",a("itemLabelWidth",$2),"px;"].join("")):"",a("labelAlign",$2)?(["vertical-align: ",a("labelAlign",$2),";"].join("")):""].join(""))):$0;},function(){s("$slot_label",function(){e(a("label",$2));});}),q("div",function(){g("className","bell-form-item-wrapper");},function(){s("$slot_children"),(a("showMessage",$2)&&a("itemMessage",$2))?(q("div",function(){g("className","bell-form-item-error");},function(){e(a("itemMessage",$2));})):p();})):(q("div",function(){g("className","bell-form-item-wrapper"),a("itemLabelWidth",$2)?(g("style.cssText",["margin-left: ",a("itemLabelWidth",$2),"px;"].join(""))):$0;},function(){s("$slot_children"),(a("showMessage",$2)&&a("itemMessage",$2))?(q("div",function(){g("className","bell-form-item-error");},function(){e(a("itemMessage",$2));})):p();}));})}

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
          'validate.form': function (_, data) {
              var errors = data.errors;
              this.set('error', errors
                  ? errors[this.get('prop')]
                  : UNDEFINED);
          }
      }
  });

  function template$18(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0;return q("div",function(){g("className",["bell-dialog",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),a("style",$2)?(g("style.cssText",j("style.cssText",a("style",$2,$0,$2,$2),1))):$0;},function(){a("mask",$2)?(q("div",function(){g("className","bell-dialog-mask"),a("maskClosable",$2)?(l("click","event.click",$0,"close()","close")):$0;})):p(),q("div",function(){g("className","bell-dialog-wrapper"),(a("width",$2)||a("height",$2))?(g("style.cssText",[a("width",$2)?(["width:",a("width",$2),"px;"].join("")):"",a("height",$2)?(["height:",a("height",$2),"px;"].join("")):""].join(""))):$0;},function(){(a("title",$2)||(d(a("hasSlot",$2),["title"])))?(q("div",function(){g("className","bell-dialog-header");},function(){s("$slot_title",function(){e(a("title",$2));});})):p(),(d(a("hasSlot",$2),["content"]))?(q("div",function(){g("className","bell-dialog-body");},function(){s("$slot_content");})):p(),(d(a("hasSlot",$2),["footer"]))?(q("div",function(){g("className","bell-dialog-footer");},function(){s("$slot_footer");})):p(),a("closable",$2)?(r("Icon",function(){f("name","close-line"),f("size","0"),f("className","bell-dialog-close"),l("click","event.click","native","close()","close");})):p();},$0,$0,$0,$0,$0,"wrapper");})}

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
                  me.fire('open.dialog');
                  setTimeout(function () {
                      Yox.dom.addClass(element, CLASS_FADE$5);
                      onTransitionEnd(wrapper, function () {
                          if (me.$el) {
                              me.fire('opened.dialog');
                          }
                      });
                  }, 50);
              }
              else if (oldVisible) {
                  Yox.dom.removeClass(element, CLASS_FADE$5);
                  me.fire('close.dialog');
                  onTransitionEnd(wrapper, function () {
                      if (me.$el) {
                          Yox.dom.removeClass(element, CLASS_VISIBLE$5);
                          me.fire('closed.dialog');
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

  function template$19(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0,$3=!1;return q("div",function(){g("className",["bell-table",a("stripe",$2)?" bell-table-stripe":"",a("simple",$2)?" bell-table-simple":" bell-table-bordered",a("className",$2)?([" ",a("className",$2)].join("")):""].join("")),g("style.cssText",[a("width",$2)?(["width: ",a("width",$2),"px; overflow-x: auto;"].join("")):"",a("height",$2)?(["height: ",a("height",$2),"px; overflow-y: auto;"].join("")):"",a("style",$2)?a("style",$2):""].join(""));},function(){a("colWidths",$2)?(q("table",$0,function(){q("colgroup",$0,function(){v(function(){q("col",function(){g("width",a(b("colWidths",[a("index",$2)]),$3,1));});},a("columns",$2,$0,$2),"index");}),q("thead",function(){g("className","bell-table-header");},function(){q("tr",$0,function(){v(function(){q("td",function(){a("align",$3)?(g("className",["bell-table-",a("align",$3)].join(""))):$0;},function(){(a("key",$3)==="selection")?((a("list.length",$2)>0)?(r("Checkbox",function(){f("checked",j("checked",a("allChecked",$3,1,$2,$2))),l("change","event.change",$0,"allCheckedChange()","allCheckedChange");})):(r("Checkbox",function(){f("disabled",$2);}))):(e(a("title",$3)),a("sortable",$3)?(q("div",function(){g("className","bell-table-sorter"),l("click","event.click",$0,"sortColumn(this.key, ../sortKey === this.key && ../sortOrder === SORT_ORDER_ASC ? SORT_ORDER_DESC : SORT_ORDER_ASC)","sortColumn",function(y){return [a("key",$3,$0,$0,$0,y),((a("sortKey",$3,1,$0,$0,y)===a("key",$3,$0,$0,$0,y))&&(a("sortOrder",$3,1,$0,$0,y)===a("SORT_ORDER_ASC",$2,$0,$0,$0,y)))?a("SORT_ORDER_DESC",$2,$0,$0,$0,y):a("SORT_ORDER_ASC",$2,$0,$0,$0,y)]});},function(){r("Icon",function(){f("size","0"),f("name","arrow-up-s-fill"),f("className",["bell-table-sort-asc",((a("sortKey",$3,1)===a("key",$3))&&(a("sortOrder",$3,1)===a("SORT_ORDER_ASC",$2)))?" bell-table-sort-active":""].join(""));}),r("Icon",function(){f("size","0"),f("name","arrow-down-s-fill"),f("className",["bell-table-sort-desc",((a("sortKey",$3,1)===a("key",$3))&&(a("sortOrder",$3,1)===a("SORT_ORDER_DESC",$2)))?" bell-table-sort-active":""].join(""));});})):p());});},a("columns",$2,$0,$2),$0);});}),(a("list.length",$2)>0)?(q("tbody",function(){g("className","bell-table-body");},function(){s("$slot_children",function(){v(function(){q("tr",$0,function(){v(function(){(a("actions",$3)&&a("actions.length",$3))?(q("td",function(){a("align",$3)?(g("className",["bell-table-",a("align",$3)].join(""))):$0;},function(){v(function(){r("Button",function(){l("click","event.click",$0,"clickButton(this, list[index], index)","clickButton",function(y){return [a("",$3,$0,$0,$0,y),a(b("list",[a("index",$2,$0,$0,$0,y)]),$2,$0,$0,$0,y),a("index",$2,$0,$0,$0,y)]}),f("className",j("className",a("className",$3,$0,$2,$2))),f("disabled",j("disabled",a("disabled",$3,$0,$2,$2))),f("block",j("block",a("block",$3,$0,$2,$2))),f("shape",j("shape",a("shape",$3,$0,$2,$2))),f("size",j("size",a("size",$3,$0,$2,$2))),f("type",j("type",a("type",$3,$0,$2,$2)));},{"$slot_children":function(){e(a("text",$3));}});},a("actions",$3,$0,$2),$0);})):(((a(b("list",[a("index",$2),a("key",$3)]),$2))!==$0)?(q("td",function(){a("align",$3)?(g("className",["bell-table-",a("align",$3)].join(""))):$0;},function(){a("dangerous",$3)?(q("div",$0,$0,$0,$0,$0,$0,a(b("list",[a("index",$2),a("key",$3)]),$2))):(e(a(b("list",[a("index",$2),a("key",$3)]),$2)));})):((a("key",$3)==="selection")?(q("td",function(){a("align",$3)?(g("className",["bell-table-",a("align",$3)].join(""))):$0;},function(){r("Checkbox",function(){f("checked",d(a("inArray",$2),[a("selection",$2),a(b("list",[a("index",$2),"key"]),$2)])),l("change","event.change",$0,"rowCheckedChange($event, $data, index)","rowCheckedChange",function(y){return [a("$event",$2,$0,$0,$0,y),a("$data",$2,$0,$0,$0,y),a("index",$2,$0,$0,$0,y)]});});})):(q("td",function(){a("align",$3)?(g("className",["bell-table-",a("align",$3)].join(""))):$0;},function(){e(a("key",$3)),e(" is not found.");}))));},a("columns",$3,1,$2),$0);});},a("list",$2,$0,$2),"index");});})):p();}),(a("list.length",$2)===0)?(q("div",function(){g("className","bell-table-empty");},function(){s("$slot_empty",function(){r("Empty",$0,{"$slot_children":function(){e("暂无数据");}});});})):p()):p();})}

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

  function template$1a(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $2=!0;return q("div",function(){g("className",["bell-loadingbar",a("type",$2)?([" bell-loadingbar-",a("type",$2)].join("")):""].join(""));},function(){q("div",function(){g("className","bell-loadingbar-indicator"),g("style.cssText",["width: ",a("percent",$2),"%;height: ",a("height",$2),"px;",a("color",$2)?(["color: ",a("color",$2),";"].join("")):""].join(""));});})}

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

  function template$1b(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $2=!0;return q("div",function(){g("className",["bell-message",a("status",$2)?([" bell-message-",a("status",$2)].join("")):"",a("center",$2)?" bell-message-center":"",a("closable",$2)?" bell-message-with-close":""].join(""));},function(){r("Icon",function(){f("name",(a("status",$2)===a("RAW_TYPE_SUCCESS",$2))?"checkbox-circle-fill":((a("status",$2)===a("RAW_TYPE_WARNING",$2))?"error-warning-fill":((a("status",$2)===a("RAW_TYPE_ERROR",$2))?"close-circle-fill":"information-fill"))),f("size","0"),f("className","bell-message-icon");}),q("span",function(){g("className","bell-message-text");},function(){e(a("content",$2));}),a("closable",$2)?(r("Icon",function(){f("name","close-line"),f("size","0"),f("className","bell-message-close"),l("click","event.click","native","hide()","hide");})):p();})}

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
                      me.fire('hide.message');
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

  function template$1c(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0,$3=!1;return r("Dialog",function(){f("mask",$2),f("width",j("width",a("width",$2,$0,$2,$2))),f("title",j("title",a("title",$2,$0,$2,$2))),f("maskClosable",$3),f("closable",j("closable",a("closable",$2,$0,$2,$2))),f("className","bell-modal");},{"$slot_content":function(){e(a("content",$2));},"$slot_footer":function(){r("Button",function(){f("type",j("type",a("okType",$2,$0,$2,$2))),l("click","event.click",$0,"ok()","ok");},{"$slot_children":function(){e(a("okText",$2));}});}},"dialog")}

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
          'closed.dialog': function (event) {
              event.stop();
              this.destroy();
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

  function template$1d(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $0=void 0,$2=!0,$3=!1;return r("Dialog",function(){f("mask",$2),f("width",j("width",a("width",$2,$0,$2,$2))),f("title",j("title",a("title",$2,$0,$2,$2))),f("maskClosable",$3),f("closable",j("closable",a("closable",$2,$0,$2,$2))),f("className","bell-modal");},{"$slot_content":function(){e(a("content",$2));},"$slot_footer":function(){r("Button",function(){f("type",j("type",a("cancelType",$2,$0,$2,$2))),l("click","event.click",$0,"cancel()","cancel");},{"$slot_children":function(){e(a("cancelText",$2));}}),r("Button",function(){f("type",j("type",a("okType",$2,$0,$2,$2))),l("click","event.click",$0,"ok()","ok");},{"$slot_children":function(){e(a("okText",$2));}});}},"dialog")}

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
          'closed.dialog': function (event) {
              event.stop();
              this.destroy();
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

  function template$1e(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var $2=!0;return q("div",function(){g("className",["bell-notification",a("status",$2)?([" bell-notification-",a("status",$2)," bell-notification-with-icon"].join("")):"",a("title",$2)?" bell-notification-with-title":"",(a("duration",$2)==0)?" bell-notification-with-close":""].join("")),g("style.cssText",["width: ",a("width",$2),"px;right: ",a("right",$2),"px;"].join(""));},function(){a("status",$2)?(r("Icon",function(){f("name",(a("status",$2)===a("RAW_TYPE_SUCCESS",$2))?"checkbox-circle-fill":((a("status",$2)===a("RAW_TYPE_WARNING",$2))?"error-warning-fill":((a("status",$2)===a("RAW_TYPE_ERROR",$2))?"close-circle-fill":"information-fill"))),f("size","0"),f("className","bell-notification-icon");})):p(),a("title",$2)?(q("div",function(){g("className","bell-notification-title");},function(){e(a("title",$2));})):p(),a("content",$2)?(q("div",function(){g("className","bell-notification-content");},function(){e(a("content",$2));})):p(),(a("duration",$2)==0)?(r("Icon",function(){f("name","close-line"),f("size","0"),f("className","bell-notification-close"),l("click","event.click","native","hide()","hide");})):p();})}

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
                          me.fire('hide.notification');
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
  var version = "0.12.4";
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
