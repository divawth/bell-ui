/**
 * bell-ui.js v0.2.0
 * (c) 2016-2019 
 * Released under the BSD License.
 */

'use strict';

var FADE = 'fade';
var COLLAPSE = 'collapse';

var Transition = {
  template: "<slot name=\"children\" />",

  propTypes: {
    // 是否在初始渲染时使用过渡
    appear: {
      type: ['numeric', 'boolean']
    },
    // 是否使用 CSS 过渡类。如果设置为 false，将只通过组件事件触发注册的 JavaScript 钩子
    css: {
      type: ['numeric', 'boolean']
    },
    // 指定过渡事件类型
    type: {
      type: 'string'
    },
    mode: {
      type: 'string'
    },
    value: {
      type: ['numeric', 'boolean']
    },
    enterClass: {
      type: 'string'
    },
    leaveClass: {
      type: 'string'
    },
    appearClass: {
      type: 'string'
    },
    enterToClass: {
      type: 'string'
    },
    leaveToClass: {
      type: 'string'
    },
    appearToClass: {
      type: 'string'
    },
    enterActiveClass: {
      type: 'string'
    },
    leaveActiveClass: {
      type: 'string'
    },
    appearActiveClass: {
      type: 'string'
    },

    onEnter: {
      type: 'function'
    },
    onLeave: {
      type: 'function'
    },
    onAppear: {
      type: 'function'
    },
    onEnd: {
      type: 'function'
    },
    beforeEnter: {
      type: 'function'
    },
    beforeLeave: {
      type: 'function'
    },
    beforeAppear: {
      type: 'function'
    },
    afterEnter: {
      type: 'function'
    },
    afterLeave: {
      type: 'function'
    },
    afterAppear: {
      type: 'function'
    }
  },

  watchers: {
    value: function value(value$1) {
      var me = this;
      if (value$1) {
        me.begin();
      }
      else {
        me.beginTo();
      }
    }
  },

  methods: {
    begin: function begin() {
      var me = this;
      me.enter();
      setTimeout(
        function () {
          me.leave();
          setTimeout(
            function () {
              me.appear();
              setTimeout(
                function () {
                  me.end();
                },
                100
              );
            },
            300
          );
        },
        100
      );
    },

    enter: function enter() {
      var me = this;
      var element = me.$el;
      if (me.get('css') === false) {
        me.get('onEnter') && me.get('onEnter')();
        return;
      }
      if (me.get('mode') === FADE) {
        element.style.opacity = '';
      }
      else if (me.get('mode') === COLLAPSE) {
        me.collapseClientHeight = element.clientHeight;
        me.collapsePaddingTop = element.style.paddingTop;
        me.collapsePaddingBottom = element.style.paddingBottom;
        element.style.height = me.collapseClientHeight + 'px';
      }
      else {
        element.style.display = '';
      }
      Yox.dom.addClass(element, me.get('enterClass'));
    },

    leave: function leave() {
      var me = this;
      var element = me.$el;
      if (me.get('css') === false) {
        me.get('onLeave') && me.get('onLeave')();
        return;
      }
      if (me.get('mode') === COLLAPSE) {
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
      }
      Yox.dom.addClass(element, me.get('leaveClass'));
    },

    appear: function appear() {
      var me = this;
      var element = me.$el;
      if (me.get('css') === false) {
        me.get('onAppear') && me.get('onAppear')();
        return;
      }
      Yox.dom.removeClass(element, me.get('enterClass'));
      Yox.dom.removeClass(element, me.get('leaveClass'));
      Yox.dom.addClass(element, me.get('appearClass'));
    },

    end: function end() {
      var me = this;
      var element = me.$el;
      if (me.get('css') === false) {
        me.get('onEnd') && me.get('onEnd')();
        return;
      }
      if (me.get('mode') === FADE) {
        element.style.opacity = 0;
      }
      else if (me.get('mode') === COLLAPSE) {
        element.style.height = '';
        element.style.display = 'none';
        element.style.paddingTop = '';
        element.style.paddingBottom = '';
      }
      else {
        element.style.display = 'none';
      }
      Yox.dom.removeClass(element, me.get('appearClass'));
    },

    beginTo: function beginTo() {
      var me = this;
      me.enterTo();
      setTimeout(
        function () {
          me.leaveTo();
          setTimeout(
            function () {
              me.appearTo();
              setTimeout(
                function () {
                  me.endTo();
                },
                100
              );
            },
            300
          );
        },
        100
      );
    },

    enterTo: function enterTo() {
      var me = this;
      var element = me.$el;
      if (me.get('css') === false) {
        me.get('onEnter') && me.get('onEnter')();
        return;
      }
      if (me.get('mode') === FADE) {
        element.style.opacity = '';
      }
      else if (me.get('mode') === COLLAPSE) {
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.display = '';
      }
      else {
        element.style.display = '';
      }
      Yox.dom.addClass(element, me.get('enterToClass'));
    },

    leaveTo: function leaveTo() {
      var me = this;
      var element = me.$el;
      if (me.get('css') === false) {
        me.get('onLeave') && me.get('onLeave')();
        return;
      }
      if (me.get('mode') === COLLAPSE) {
        element.style.height = me.collapseClientHeight + 'px';
        element.style.paddingTop = me.collapsePaddingTop;
        element.style.paddingBottom = me.collapsePaddingBottom;
      }
      Yox.dom.addClass(element, me.get('leaveToClass'));
    },

    appearTo: function appearTo() {
      var me = this;
      var element = me.$el;
      if (me.get('css') === false) {
        me.get('onAppear') && me.get('onAppear')();
        return;
      }
      Yox.dom.removeClass(element, this.get('enterToClass'));
      Yox.dom.removeClass(element, this.get('leaveToClass'));
      Yox.dom.addClass(element, this.get('appearToClass'));
    },

    endTo: function endTo() {
      var me = this;
      var element = me.$el;
      if (me.get('css') === false) {
        me.get('onEnd') && me.get('onEnd')();
        return;
      }
      if (me.get('mode') === FADE) {
        element.style.opacity = 1;
      }
      else if (me.get('mode') === COLLAPSE) {
        element.style.height = '';
      }
      Yox.dom.removeClass(element, me.get('appearToClass'));
    }
  },

  afterMount: function afterMount() {
    var me = this;
    if (me.get('type')) {
      me.$el.style.transitionTimingFunction = me.get('type');
    }

    me.set({
      enterClass: me.get('enterClass') ? me.get('enterClass') : 'bell-' + me.get('mode') + '-enter',
      leaveClass: me.get('leaveClass') ? me.get('leaveClass') : 'bell-' + me.get('mode') + '-leave',
      appearClass: me.get('appearClass') ? me.get('appearClass') : 'bell-' + me.get('mode') + '-appear',
      enterToClass: me.get('enterToClass') ? me.get('enterToClass') : 'bell-' + me.get('mode') + '-enter-to',
      leaveToClass: me.get('leaveToClass') ? me.get('leaveToClass') : 'bell-' + me.get('mode') + '-leave-to',
      appearToClass: me.get('appearToClass') ? me.get('appearToClass') : 'bell-' + me.get('mode') + '-appear-to',
      enterActiveClass: me.get('enterActiveClass') ? me.get('enterActiveClass') : 'bell-' + me.get('mode') + '-enter-active',
      leaveActiveClass: me.get('leaveActiveClass') ? me.get('leaveActiveClass') : 'bell-' + me.get('mode') + '-leave-active',
      appearActiveClass: me.get('appearActiveClass') ? me.get('appearActiveClass') : 'bell-' + me.get('mode') + '-appear-active',
    });

    if (me.get('appear')) {
      if (me.get('value')) {
        me.begin();
      }
      else {
        me.beginTo();
      }
    }
  }
};

var template = "<div \nclass=\"bell-layout bell-row\n  \n  {{#if hasSider}} bell-col-24\n  {{else}} column\n  {{/if}}\n  \n  {{#if fixed}} bell-layout-fixed{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n  <slot name=\"children\" />\n</div>";

var TRUE = true;
var FALSE = false;
var NULL = null;
var UNDEFINED = void 0;

var RAW_ARRAY = 'array';
var RAW_STRING = 'string';
var RAW_BOOLEAN = 'boolean';
var RAW_NUMERIC = 'numeric';
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

var Layout = {
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

  template: template,

  data: function data () {
    return {
      hasSider: FALSE
    }
  },

  events: {
    hasSider: function hasSider(event) {
      if (event.phase === Yox.Event.PHASE_CURRENT) {
        return
      }
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        this.set({
          hasSider: TRUE
        });
        this.fire(
          'hasSider',
          TRUE
        );
      }
      // 阻止嵌套模式下 上层 layout 发下来的 hasSider 事件
      event.stop();
    }
  }
};

var template$1 = "<div \nclass=\"bell-layout-header \n  {{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n\n  {{#if hasSlot('left')}}\n    <div class=\"bell-layout-header-left\">\n      <slot name=\"left\" />\n    </div>\n  {{/if}}\n\n  {{#if hasSlot('center')}}\n    <div class=\"bell-layout-header-center\">\n      <slot name=\"center\" />\n    </div>\n  {{/if}}\n\n  <slot name=\"children\" />\n\n  {{#if hasSlot('right')}}\n    <div class=\"bell-layout-header-right\">\n      <slot name=\"right\" />\n    </div>\n  {{/if}}\n  \n</div>";

var Header = {
  propTypes: {
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },
  template: template$1
};

var template$2 = "<div \nclass=\"bell-layout-sider bell-col-6\n  {{#if className}} {{className}}{{/if}}\n  {{#if isCollapsed}} bell-layout-sider-collapsed{{/if}}\n\" \n{{#if style}}style=\"{{style}}\"{{/if}}\n>\n  <div class=\"bell-layout-sider-children\">\n    <slot name=\"children\" />\n  </div>\n  {{#if isCollapsed != null}}\n    <div class=\"bell-layout-sider-trigger\" on-click=\"toggle('isCollapsed')\">\n      <slot name=\"trigger\">\n        <Icon name=\"arrow-back\" className=\"bell-layout-sider-trigger-icon\" />\n      </slot>\n    </div>\n  {{/if}}\n\n</div>";

var Sider = {
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

  template: template$2,

  afterMount: function afterMount() {
    this.fire(
      'hasSider'
    );
  }
};

var template$3 = "<div \nclass=\"bell-layout-content\n  \n  {{#if hasSider}} bell-col-18\n  {{else}} bell-col-24\n  {{/if}}\n  \n  {{#if className}} {{className}}{{/if}}\n\" \n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n  <slot name=\"children\" />\n</div>";

var Content = {
  propTypes: {
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template: template$3,

  events: {
    hasSider: function hasSider(_) {
      this.set({
        hasSider: TRUE
      });
    }
  },

  data: function data() {
    return {
      hasSider: FALSE
    }
  }
};

var template$4 = "<div \nclass=\"bell-layout-footer \n  {{#if className}} {{className}}{{/if}}\n\" \n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n  <slot name=\"children\" />\n</div>";

var Footer = {
  propTypes: {
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },
  template: template$4
};

var template$5 = "<ul \nclass=\"bell-menu bell-menu-{{mode}} bell-menu-{{theme}}\n{{#if isCollapsed}} bell-menu-collapsed{{/if}}\n{{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n  <slot name=\"children\" />\n</ul>";

var contains = function(element, target) {
  if (element.contains && element.contains(target)) {
    return true
  }
  else if (element.compareDocumentPosition && element.compareDocumentPosition(target) > 16) {
    return true
  }
  return false
};

var findComponentUpward = function (context, componentName) {
  if (typeof componentName === 'string') {
    componentName = [ componentName ];
  } else {
    componentName = componentName;
  }

  var parent = context.$parent;
  var name = parent.$options.name;

  while (parent && (!name || componentName.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) { name = parent.$options.name; }
  }

  return parent
};

var oneOf = function (values) {
  return function (props, key) {
    if (!Yox.array.has(values, props[ key ])) {
      Yox.logger.warn((key + " 期望是 " + (values.join(',')) + " 中的值，实际传值 " + (props[ key ]) + "。"));
    }
    return true
  }
};

var isDate = function () {
  return function (props, key) {
    if (!Object.prototype.toString.call(props[ key ]).toLowerCase() === '[object date]') {
      Yox.logger.warn((key + " 期望是 Date 类型，实际传值 " + (props[ key ]) + "。"));
    }
    return true
  }
};

var scrollTop = function (element, from, to, duration, endCallback) {
  if ( from === void 0 ) from = 0;
  if ( duration === void 0 ) duration = 500;

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60)
      }
    );
  }
  var difference = Math.abs(from - to);
  var step = Math.ceil(difference / duration * 50);

  function scroll(start, end, step) {
    if (start === end) {
      endCallback && endCallback();
      return
    }

    var duration = (start + step > end) ? end : start + step;
    if (start > end) {
      duration = (start - step < end) ? end : start - step;
    }

    if (element === window) {
      window.scrollTo(duration, duration);
    } else {
      element.scrollTop = duration;
    }
    window.requestAnimationFrame(function () {
      scroll(duration, end, step);
    });
  }
  scroll(from, to, step);
};

var getType = function (value) {
  return Object.prototype.toString.call(value).toLowerCase().slice(8, -1)
};

var Menu = {

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

  template: template$5,

  watchers: {
    theme: function theme(theme$1) {
      this.fire(
        'themeChanged',
        { theme: theme$1 },
        TRUE
      );
    },
    isCollapsed: function isCollapsed(isCollapsed$1) {
      this.fire(
        'isCollapsedChanged',
        { isCollapsed: isCollapsed$1 },
        TRUE
      );
    }
  },

  events: {
    menuItemSelected: function menuItemSelected(event, data) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        this.fire(
          'menuItemSelected',
          data,
          TRUE
        );
      }
    }
  }
};

var template$6 = "<li \nclass=\"bell-menu-item\n  {{#if className}} {{className}}{{/if}}\n  {{#if isActive}} bell-menu-active{{/if}}\n  {{#if disabled}} bell-menu-item-disabled{{/if}}\n\" \nstyle=\"{{style}}\" \non-click=\"click()\"\n>\n  <slot name=\"children\" />\n</li>";

var MenuItem = {
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

  template: template$6,

  data: function data() {
    return {
      mode: NULL,
      isActive: FALSE,
      isCollapsed: FALSE
    }
  },

  events: {
    menuItemSelected: function menuItemSelected(event, data) {
      if (event.phase === Yox.Event.PHASE_DOWNWARD) {
        this.set('isActive', data.name === this.get('name'));
      }
    },
    isCollapsedChanged: function isCollapsedChanged(_, data) {
      this.set('isCollapsed', data.isCollapsed);
    }
  },

  methods: {
    click: function click() {
      this.fire('menuItemSelected', {
        name: this.get('name')
      });
    }
  },

  afterMount: function afterMount () {
    var element = findComponentUpward(this, 'bell-menu');
    this.set({
      'mode': element.get('mode'),
      'isActive': element.get('activeName') === this.get('name')
    });
  }
};

var template$7 = "<ul \nclass=\"bell-menu-group\n  {{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n  <li class=\"bell-menu-group-title\">\n    {{title}}\n  </li>\n\n  {{#if hasSlot('children')}}\n  <Menu mode=\"{{mode === 'inline' ? 'inline' : 'vertical'}}\" theme=\"{{theme}}\">\n    <slot name=\"children\" />\n  </Menu>\n  {{/if}}\n</ul>";

var MenuGroup = {
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

  template: template$7, 

  data: function data() {
    return {
      mode: NULL,
      theme: NULL
    }
  },

  events: {
    themeChanged: function themeChanged(_, data) {
      this.set('theme', data.theme);
    }
  },

  afterMount: function afterMount () {
    var element = findComponentUpward(this, 'bell-menu');
    this.set({
      'mode': element.get('mode'),
      'theme': element.get('theme'),
    });
  }
};

var template$8 = "<li \nclass=\"bell-submenu \n  {{#if className}} {{className}}{{/if}}\n  {{#if isOpen}} bell-menu-open{{/if}}\n  {{#if isActive}} bell-menu-active{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n{{#if isCollapsed}}\n  on-mouseenter=\"set('isOpen', true)\"\n  on-mouseleave=\"set('isOpen', false)\"\n  lazy-mouseleave=\"300\"\n{{/if}}\n> \n  <div class=\"bell-submenu-title\" on-click=\"click()\">\n    <slot name=\"title\" />\n    <Icon className=\"bell-submenu-title-icon\" type=\"arrow-down\" />\n  </div>\n\n  {{#if mode != 'inline'}}\n    <div class=\"bell-menu-dropdown\">\n      <slot name=\"children\" />\n    </div>\n  {{else}}\n    <Menu ref=\"menu\" mode=\"{{mode}}\" theme=\"{{theme}}\">\n      <slot name=\"children\" />\n    </Menu>\n  {{/if}}\n</li>";

var Submenu = {
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

  template: template$8,

  data: function data() {
    return {
      isOpen: FALSE,
      isActive: FALSE,
      activeName: NULL,
      mode: NULL,
      theme: NULL,
      isCollapsed: FALSE
    }
  },

  methods: {
    click: function click () {
      this.get('isOpen') ? this.close() : this.open();
    },

    close: function close() {
      var me = this;
      var element = me.$refs.menu.$el;
      element.style.height = element.clientHeight + 'px';

      me.closeTimer = setTimeout(
        function () {
          element.style.height = 0;
          element.style.overflow = 'hidden';
          me.initTimer = setTimeout(
            function () {
              element.style.height = '';
              element.style.overflow = '';
              me.set('isOpen', FALSE);
            },
            100
          );
        }
      );
    },

    open: function open() {
      var me = this;
      me.set('isOpen', TRUE);

      me.nextTick(function () {
        var element = me.$refs.menu.$el;
        var height = element.clientHeight;
        element.style.height = 0;

        me.openTimer = setTimeout(
          function () {
            element.style.height = height + 'px';
            me.initTimer = setTimeout(
              function () {
                element.style.height = '';
              },
              100
            );
          }
        );
      });
    }
  },

  events: {
    themeChanged: function themeChanged(_, data) {
      this.set('theme', data.theme);
    },
    isCollapsedChanged: function isCollapsedChanged(_, data) {
      this.set('isCollapsed', data.isCollapsed);
    },
    menuItemSelected: function menuItemSelected(event, data) {
      if (event.phase === Yox.Event.PHASE_DOWNWARD) {
        this.set('isActive', data.name === this.get('activeName'));
      }
      else if (event.phase === Yox.Event.PHASE_UPWARD) {
        this.set('activeName', data.name);
        if (this.get('mode') !== 'inline' || this.get('isCollapsed')) {
          this.toggle('isOpen');
        }
      }
    }
  },
   
  afterMount: function afterMount () {
    var element = findComponentUpward(this, 'bell-menu');
    this.set({
      'mode': element.get('mode'),
      'theme': element.get('theme'),
      'isActive': element.get('activeName') === this.get('name'),
      'isOpen': element.get('openNames').indexOf(this.get('name')) >= 0 
    });
  }
};

var template$9 = "<div \nclass=\"bell-row\n  {{#if gutter}} bell-row-gutter{{/if}}\n  {{#if type}} bell-row-{{type}}{{/if}}\n  {{#if justify}} bell-row-justify-{{justify}}{{/if}}\n  {{#if align}} bell-row-align-{{align}}{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\" \nstyle=\"{{inlineStyle}}\"\n>\n  <slot name=\"children\" />\n</div>";

var Row = {
  propTypes: {
    gutter: {
      type: RAW_NUMERIC,
      gutter: 0
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

  template: template$9,

  watchers: {
    gutter: {
      watcher: function (value) {
        this.fire(
          'gutterChanged.row',
          {
            gutter: value
          },
          TRUE
        );
      },
      immediate: TRUE
    }
  },
  
  computed: {
    inlineStyle: function inlineStyle() {
      var gap = 0; 
      var style = '';
      if (this.get('style') 
        && Yox.sring.trim(this.get('style')) 
        && !Yox.sring.endsWith(style, ';')
      ) {
        style += ';';
      }
      if (this.get('gutter')) {
        gap = +this.get('gutter') / 2;
      }
      return (style + "margin-left: -" + gap + "px; margin-right: -" + gap + "px;")
    }
  }
};

var template$a = "<div \nclass=\"bell-col\n  {{#if span}} bell-col-{{span}}{{/if}}\n  {{#if order}} bell-col-order-{{order}}{{/if}}\n  {{#if push}} bell-col-push-{{push}}{{/if}}\n  {{#if pull}} bell-col-pull-{{pull}}{{/if}}\n  {{#if offset}} bell-col-offset-{{offset}}{{/if}}\n  {{#if xsClass}} {{xsClass}}{{/if}}\n  {{#if mdClass}} {{mdClass}}{{/if}}\n  {{#if smClass}} {{smClass}}{{/if}}\n  {{#if lgClass}} {{lgClass}}{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\"\nstyle=\"{{inlineStyle}}\"\n>\n  <slot name=\"children\" />\n</div>";

var Col = {
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
  
  template: template$a,

  data: function data () {
    return {
      style: '',
      gutter: ''
    }
  },
  computed: {
    xsClass: function xsClass() {
      var data = this.get('xs');
      if (!data) {
        return
      }
      return this.getClass('xs', data)
    },
    smClass: function smClass() {
      var data = this.get('sm');
      if (!data) {
        return
      }
      return this.getClass('sm', data)
    },
    mdClass: function mdClass() {
      var data = this.get('md');
      if (!data) {
        return
      }
      return this.getClass('md', data)
    },
    lgClass: function lgClass() {
      var data = this.get('lg');
      if (!data) {
        return
      }
      return this.getClass('lg', data)
    },
    inlineStyle: function inlineStyle() {
      var gap = 0;
      var style = '';
      if (this.get('style') 
        && Yox.sring.trim(this.get('style')) 
        && !Yox.sring.endsWith(style, ';')
      ) {
        style += ';';
      }
      if (this.get('gutter')) {
        gap = +this.get('gutter') / 2;
      }
      return (style + "padding-left: " + gap + "px; padding-right: " + gap + "px")
    }
  },

  methods: {
    getClass: function getClass(name, data) {
      var classArr = [];
      if (Yox.is.object(data)) {
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

      return classArr.join(' ')
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

  afterMount: function afterMount() {
    var row = findComponentUpward(this, 'bell-raw');
    this.set('gutter', row.get('gutter'));
  }
};

var template$b = "<i \nclass=\"bell-icon \n  {{#if name}} bell-icon-{{type}}-{{name}}{{/if}}\n  {{#if spin}} bell-icon-spin{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\"\nstyle=\"font-size: {{size}}px; \n  {{#if color}} color: {{color}};{{/if}}\n  {{#if style}} {{style}}{{/if}}\n\"\non-click=\"click.icon\"\non-mousemove=\"mousemove.icon\"\n>\n  <slot name=\"children\" />\n</i>";

var Icon = {
  propTypes: {
    type: {
      type: oneOf(RAW_ICON_TYPE_ARRAY),
      value: RAW_ICON_IOS
    },
    name: {
      type: RAW_STRING
    },
    size: {
      type: RAW_NUMERIC
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
  template: template$b
};

var template$c = "<div \nclass=\"bell-drawer\n  {{#if className}} {{className}}{{/if}}\n\" \ndata-placement=\"{{placement}}\"\n{{#if style}}style=\"{{style}}\"{{/if}}\n>\n\n  {{#if mask}}\n    <div class=\"bell-drawer-mask\"\n      {{#if maskClosable}}on-close=\"this.set('open', false)\"{{/if}}\n    ></div>\n  {{/if}}\n\n  <div class=\"bell-drawer-content\"\n    style=\"{{contentStyle}}\"\n  > \n    {{#if title || hasSlot('title')}}\n    <div class=\"bell-drawer-header\">\n      <div class=\"bell-drawer-title\">\n        <slot name=\"title\">\n          {{title}}\n        </slot>\n      </div>\n    </div>\n    {{/if}}\n    \n    <div class=\"bell-drawer-body\">\n      <slot name=\"children\" />\n    </div>\n\n    {{#if closable}}\n    <Button className=\"bell-drawer-close\" size=\"small\" borderType=\"none\" on-click=\"this.set('open', false)\">\n      <template slot=\"icon\">\n        <Icon size=\"28\" name=\"close\"></Icon>\n      </template>\n    </Button>\n    {{/if}}\n  </div>\n\n</div>";

var Drawer = {
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

  template: template$c,

  watchers: {
    open: function open(isOpen) {
      var element = this.$el;
      if (isOpen) {
        Yox.dom.addClass(element, 'bell-drawer-open');
        this.fire('open.drawer');
      }
      else {
        Yox.dom.addClass(element, 'bell-drawer-leave');
        setTimeout(
          function () {
            Yox.dom.removeClass(element, 'bell-drawer-open');
            Yox.dom.removeClass(element, 'bell-drawer-leave');
          },
          300
        );
        this.fire('close.drawer');
      }
    }
  },

  computed: {
    contentStyle: function contentStyle() {
      var style = '';
      if (this.get('placement') === 'left'
        || this.get('placement') === 'right'
      ) {
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
      return style
    }
  },

  afterMount: function afterMount() {
    Yox.dom.append(document.body, this.$el);
  },

  beforeDestroy: function beforeDestroy() {
    Yox.dom.remove(document.body, this.$el);
  }
};

var template$d = "<div \nclass=\"bell-breadcrumb bell-texts\n{{#if className}} {{className}}{{/if}}\n\" \n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n  <slot name=\"children\" />\n</div>";

var Breadcrumb = {
  propTypes: {
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template: template$d
};

var template$e = "<span \nclass=\"bell-breadcrumb-item bell-text\n{{#if className}} {{className}}{{/if}}\n\" \n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n\n  <a {{#if to}}href=\"{{to}}\"{{/if}} class=\"bell-breadcrumb-link\">\n    <slot name=\"children\" />\n  </a>\n\n  <span class=\"bell-breadcrumb-gap\">\n    {{separator}}\n  </span>\n\n</span>";

var BreadcrumbItem = {

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

  template: template$e
};

var template$f = "<button \non-click=\"click.button\"\nclass=\"bell-button bell-button-{{borderType}}\n  {{#if ghost}} bell-button-{{type}}-ghost \n  {{else}} bell-button-{{type}}-normal \n  {{/if}}  \n  \n  {{#if shape}} bell-button-{{shape}}{{/if}}\n  {{#if size}} bell-button-{{size}}{{/if}}\n  {{#if fluid}} bell-button-fluid{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\"\n{{#if disabled}} disabled{{/if}} \n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n\n  {{#if hasSlot('icon')}}\n    <slot name=\"icon\" />\n  {{else if icon}}\n    <Icon name=\"{{icon}}\" />\n  {{/if}}\n\n  {{#if hasSlot('children')}}\n  <span>\n    <slot name=\"children\" />\n  </span>\n  {{/if}}\n  \n</button>";

var Button = {
  propTypes: {
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_DEFAULT
    },
    size: {
      type: oneOf([ RAW_TINY, RAW_SMALL, RAW_LARGE ])
    },
    borderType: {
      type: oneOf(['solid', 'none', 'dashed']), 
      value: 'solid'
    },
    shape: {
      type: RAW_STRING
    },
    icon: {
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
  template: template$f
};

var template$g = "<div \nclass=\"bell-button-group\n  {{#if shape}} bell-button-group-{{shape}}{{/if}}\n  {{#if size}} bell-button-group-{{size}}{{/if}}\n  \n  {{#if vertical}} bell-button-group-vertical\n  {{else}} bell-button-group-horizontal\n  {{/if}}\n\n  {{#if className}} {{className}}{{/if}}\n\" \n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n\n  <slot name=\"children\" />\n\n</div>";

var ButtonGroup = {
  propTypes: {
    size: {
      type: oneOf(['large', 'small', 'tiny'])
    },
    shape: {
      type: oneOf(['round', 'circle'])
    },
    vertical: {
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
  template: template$g
};

var template$h = "<div \nclass=\"bell-input-wrapper\n{{#if hasSlot('prepend')}} bell-input-has-prepend{{/if}}\n{{#if hasSlot('append') || (search && enterButton)}} bell-input-has-append{{/if}}\n{{#if size}} bell-input-wrapper-{{size}}{{/if}}\n{{#if status}} bell-input-wrapper-{{status}}{{/if}}\n{{#if isFocus}} bell-focus{{/if}}\n{{#if autoSize}} bell-input-autosize{{/if}}\n{{#if clearable}} bell-input-wrapper-clearable{{/if}}\n{{#if disabled}} bell-input-wrapper-disabled{{/if}}\n{{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n\n  {{#if hasSlot('prepend')}}\n  <div class=\"bell-input-prepend\">\n    <slot name=\"prepend\" />\n  </div>\n  {{/if}}\n\n  <div class=\"bell-input\n    {{#if type === TEXT_TYPE_TEXTAREA}} bell-textarea{{/if}}\n  \">\n\n    {{#if type === TEXT_TYPE_TEXTAREA}}\n\n      <textarea class=\"bell-input-el\" model=\"value\"\n        {{#if rows}} rows=\"{{rows}}\"{{/if}}\n        {{#if placeholder}} placeholder=\"{{placeholder}}\"{{/if}}\n        {{#if disabled}} disabled{{/if}}\n        {{#if autocomplete}} autocomplete=\"{{autocomplete}}\"{{/if}}\n        {{#if wrap}} wrap=\"{{wrap}}\"{{/if}}\n        {{#if spellcheck}} spellcheck=\"{{spellcheck}}\"{{/if}}\n        {{#if readonly}} readonly=\"readonly\"{{/if}}\n        style=\"{{textComputedStyle}}\"\n      >\n      </textarea>\n\n    {{else}}\n\n      <input ref=\"input\"\n        type=\"{{currentType}}\"\n        class=\"bell-input-el\n          {{#if size}} bell-input-{{size}}{{/if}}\n          {{#if hasSlot('prefix') || prefix}} bell-input-with-prefix{{/if}}\n          {{#if hasSlot('suffix') || suffix}} bell-input-with-suffix{{/if}}\n        \"\n        {{#if readonly}} readonly=\"{{readonly}}\"{{/if}}\n        {{#if maxLength}} maxlength=\"{{maxLength}}\"{{/if}}\n        {{#if autocomplete}} autocomplete=\"{{autocomplete}}\"{{/if}}\n        {{#if wrap}} wrap=\"{{wrap}}\"{{/if}}\n        {{#if spellcheck}} spellcheck=\"{{spellcheck}}\"{{/if}}\n        {{#if placeholder}} placeholder=\"{{placeholder}}\"{{/if}}\n        {{#if disabled}} disabled=\"disabled\"{{/if}}\n        model=\"value\"\n        on-blur=\"blur()\"\n        on-focus=\"focus()\"\n      />\n\n      {{#if clearable}}\n        <Icon name=\"close-circle\" \n          size=\"16\"\n          className=\"bell-input-clear-icon\" \n          on-click=\"clear()\" \n        />\n      {{/if}}\n\n      {{#if hasSlot('prefix') || prefix}}\n      <span class=\"bell-input-prefix\">\n        <slot name=\"prefix\">\n          <Icon name=\"{{prefix}}\" className=\"bell-input-prefix-icon\" />\n        </slot>\n      </span>\n      {{/if}}\n\n      {{#if hasSlot('suffix') || suffix}}\n      <span class=\"bell-input-suffix\">\n        <slot name=\"suffix\">\n          <Icon name=\"{{suffix}}\" className=\"bell-input-suffix-icon\" />\n        </slot>\n      </span>\n      {{/if}}\n\n      {{#if search && !enterButton}}\n        <span class=\"bell-input-suffix\" on-click=\"search()\">\n          <Icon name=\"search\" className=\"bell-input-suffix-icon\" />\n        </span>\n      {{/if}}\n\n      {{#if secure}}\n        {{#if isSecure}}\n          <span class=\"bell-input-suffix\" on-click=\"toggle('isSecure')\">\n            <Icon name=\"eye\" className=\"bell-input-suffix-icon\" />\n          </span>\n        {{else}}\n          <span class=\"bell-input-suffix\" on-click=\"toggle('isSecure')\">\n            <Icon name=\"eye-off\" className=\"bell-input-suffix-icon\" />\n          </span>\n        {{/if}}\n      {{/if}}\n\n    {{/if}}\n\n  </div>\n\n  {{#if hasSlot('append')}}\n  <div class=\"bell-input-append\">\n    <slot name=\"append\" />\n  </div>\n  {{/if}}\n\n  {{#if search && enterButton}}\n    <div class=\"bell-input-append\" on-click=\"search()\">\n      <Button type=\"primary\">\n        {{#if isBoolean(enterButton)}}\n          <Icon name=\"search\" />\n        {{else}}\n          {{enterButton}}\n        {{/if}}\n      </Button>\n    </div>\n  {{/if}}\n\n</div>";

var TEXT_TYPE_PASSWORD = 'password';
var TEXT_TYPE_TEXTAREA = 'textarea';
var TEXT_TYPE_TEXT = 'text';
var ROWS_HEIGHT = 22;

var Input = {
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
      type: [ RAW_BOOLEAN, RAW_STRING ]
    },
    autoSize: {
      type: [ RAW_BOOLEAN, RAW_OBJECT ]
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
      type: oneOf([ 'on', 'off' ])
    },
    wrap: {
      type: oneOf([ 'hard', 'soft' ])
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

  template: template$h,

  data: function data() {
    return {
      isSecure: true,
      isFocus: false,
      currentType: this.get('type'),

      TEXT_TYPE_TEXT: TEXT_TYPE_TEXT,
      TEXT_TYPE_TEXTAREA: TEXT_TYPE_TEXTAREA,
      TEXT_TYPE_PASSWORD: TEXT_TYPE_PASSWORD,

      isBoolean: function isBoolean(value) {
        return Yox.is.boolean(value)
      }
    }
  },

  watchers: {
    value: function value(value$1) {
      this.fire(
        'change.input',
        { value: value$1 }
      );
    },
    isSecure: function isSecure(isSecure$1) {
      this.set({
        currentType: isSecure$1 ? TEXT_TYPE_PASSWORD : TEXT_TYPE_TEXT
      });
    }
  },

  methods: {
    blur: function blur() {
      this.set('isFocus', false);
      this.fire('blur.input');
    },
    focus: function focus() {
      this.set('isFocus', true);
      this.fire('focus.input');
    },
    clear: function clear() {
      this.set('value', '');
      this.fire('clear.input');
    },
    search: function search() {
      this.fire(
        'search.input',
        {
          value: this.get('value')
        }
      );
    }
  },

  computed: {
    textComputedStyle: function textComputedStyle() {
      var size = this.get('autoSize');
      if (size) {
        var minRows = 2;
        var maxRows = 2;
        var height = 2;
        if (Yox.is.object(size)) {
          minRows = size.minRows;
          maxRows = size.maxRows;
          height = this.get('value') ? this.get('value').split('\n').length : minRows;
          return ("min-height: " + (minRows * ROWS_HEIGHT) + "px;max-height: " + (maxRows * ROWS_HEIGHT) + "px;height: " + (height * ROWS_HEIGHT) + "px;")
        }
        else {
          height = this.get('value') ? this.get('value').split('\n').length : minRows;
          return ("min-height: " + (minRows * ROWS_HEIGHT) + "px;height: " + (height * ROWS_HEIGHT) + "px;")
        }
        
      }
      else {
        return ("height: " + (this.get('rows') * ROWS_HEIGHT) + "px")
      }
    }
  },

  afterMount: function afterMount() {

    var me = this;
    me.documentKeydownHandler = function (event) {
      event = event.originalEvent;
      if (me.$refs && event.target == me.$refs.input) {
        me.fire('keydown.input');
        if (event.keyCode === 13) {
          me.fire('enter.input');
        }
      }
    };
    me.documentKeyupHandler = function (event) {
      event = event.originalEvent;
      if (me.$refs && event.target == me.$refs.input) {
        me.fire('keyup.input');
      }
    };
    me.documentKeypressHandler = function (event) {
      event = event.originalEvent;
      if (me.$refs && event.target == me.$refs.input) {
        me.fire('keypress.input');
      }
    };
    Yox.dom.on(
      document,
      'keydown',
      me.documentKeydownHandler
    );
    Yox.dom.on(
      document,
      'keyup',
      me.documentKeyupHandler
    );
    Yox.dom.on(
      document,
      'keypress',
      me.documentKeypressHandler
    );
    
  },

  beforeDestroy: function beforeDestroy() {
    Yox.dom.off(
      document,
      'keydown',
      this.documentKeydownHandler
    );
    Yox.dom.off(
      document,
      'keyup',
      this.documentKeyupHandler
    );
    Yox.dom.off(
      document,
      'keypress',
      this.documentKeypressHandler
    );
  }
};

var template$i = "<div class=\"bell-input-number\n  {{#if size}} bell-input-number-{{size}}{{/if}}\n  {{#if status}} bell-input-number-{{status}}{{/if}}\n  {{#if disabled}} bell-input-number-disabled{{/if}}\n  {{#if readonly}} bell-input-number-readonly{{/if}}\n  {{#if isFocus}} bell-focus{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n\n  <input type=\"text\" \n    class=\"bell-input\"\n    model=\"computedValue\"\n    {{#if placeholder}} placeholder=\"{{placeholder}}\"{{/if}}\n    {{#if disabled}}disabled=\"disabled\"{{/if}}\n    {{#if readonly || !editable}}readonly=\"{{readonly || !editable}}\"{{/if}}\n    on-blur=\"blur()\" \n    on-focus=\"focus()\"\n  ></input>\n\n  <span class=\"bell-input-number-actions\">\n    <Icon name=\"arrow-up\" \n      className=\"bell-input-number-icon {{#if max != null && max - value < +step}}disabled{{/if}}\"\n      on-click=\"up()\"\n    />\n    <Icon name=\"arrow-down\" \n      className=\"bell-input-number-icon {{#if min != null && value - min < +step}}disabled{{/if}}\" \n      on-click=\"down()\"\n    />\n  </span>\n\n</div>";

var InputNumber = {
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

  template: template$i,

  data: function data() {
    return {
      isFocus: FALSE
    }
  },

  watchers: {
    value: function value(value$1) {
      this.fire(
        'change.inputnumber',
        { value: value$1 }
      );
    }
  },

  computed: {
    computedValue: function computedValue() {
      if (this.get('formatter')) {
        return this.get('formatter')(this.get('value'))
      }
      else {
        return this.get('value')
      }
    }
  },

  methods: {
    up: function up() {
      var value = this.increase('value', +this.get('step'), +this.get('max'));
      this.fire(
        'change.inputnumber', 
        { value: value }
      );
    },
    down: function down() {
      var value = this.decrease('value', +this.get('step'), +this.get('min'));
      this.fire(
        'change.inputnumber', 
        { value: value }
      );
    },
    blur: function blur() {
      this.set('isFocus', FALSE);
      this.fire('blur.inputnumber');
    },
    focus: function focus() {
      this.set('isFocus', TRUE);
      this.fire('focus.inputnumber');
    },
    documentKeydownHander: function documentKeydownHander(event) {
      switch (event.originalEvent.keyCode) {
        case 38:
          this.up();
          break
        case 40:
          this.down();
          break
      }
    }
  },

  afterMount: function afterMount() {
    this.documentKeydownHander = this.documentKeydownHander.bind(this);
    Yox.dom.on(
      document,
      'keydown',
      this.documentKeydownHander
    );
  },

  beforeDestroy: function beforeDestroy() {
    Yox.dom.off(
      document,
      'keydown',
      this.documentKeydownHander
    );
  }
};

var template$j = "<label \nclass=\"bell-radio\n  {{#if isChecked}} bell-active{{/if}}\n  {{#if isDisabled}} bell-radio-disabled{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n\n  <span class=\"bell-radio-wrapper\" on-click=\"click()\">\n    <span class=\"bell-radio-inner\"></span>\n    <input class=\"bell-radio-input\" type=\"radio\" value=\"{{value}}\" />\n  </span>\n\n  <span class=\"bell-radio-label\">\n    <slot name=\"children\">\n      {{label}}\n    </slot>\n  </span>\n\n</label>";

var Radio = {
  propTypes: {
    label: {
      type: RAW_STRING
    },
    value: {
      type: [ RAW_NUMERIC, RAW_BOOLEAN, RAW_STRING ]
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
  template: template$j,

  data: function data() {
    return {
      isChecked: FALSE,
      name: '',
      isDisabled: this.get('disabled')
    }
  },

  events: {
    updateRadioValue: function updateRadioValue(_, data) {
      this.set({
        isChecked: data.value == this.get('value')
      });
    }
  },

  methods: {
    click: function click() {
      var me = this;
      if (me.get('isDisabled')) {
        return
      }
      me.fire(
        'radioValueChange',
        {
          value: me.get('value')
        }
      );
      return
    }
  },

  afterMount: function afterMount() {
    var radiogroup = findComponentUpward(this, 'bell-radiogroup');
    if (radiogroup) {
      this.set({
        name: radiogroup.get('name'),
        isDisabled: this.get('disabled') || radiogroup.get('disabled'),
        isChecked: this.get('checked') || radiogroup.get('value') == this.get('value')
      });
    }
  }
  
};

var template$k = "<div \nclass=\"{{#if button}}bell-radio-button{{else}}bell-radio-group{{/if}}\n  {{#if type && button}} bell-radio-button-{{type}}{{else if type}} bell-radio-group-{{type}}{{/if}}\n  {{#if size && button}} bell-radio-button-{{size}}{{/if}}\n  {{#if disabled && button}} bell-radio-button-disabled{{else if disabled}} bell-radio-group-disabled{{/if}}\n  {{#if vertical}} bell-radio-vertical{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n  <slot name=\"children\" />\n</div>";

var RadioGroup = {
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

  template: template$k,

  events: {
    radioValueChange: function radioValueChange(_, data) {
      this.set({
        value: data.value
      });
      this.fire(
        'updateRadioValue',
        {
          value: data.value
        },
        TRUE
      );
      this.fire(
        'change.radiogroup',
        {
          value: data.value
        }
      );
    }
  }
};

var template$l = "<label \nclass=\"bell-checkbox\n  {{#if disabled}} bell-checkbox-disabled{{/if}}\n  {{#if type}} bell-checkbox-{{type}}{{/if}}\n  {{#if size}} bell-checkbox-{{size}}{{/if}}\n  {{#if checked}} bell-checkbox-active{{/if}}\n  {{#if indeterminate}} bell-checkbox-indeterminate{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n\n  <label class=\"bell-checkbox-wrapper\">\n    <span class=\"bell-checkbox-inner\"></span>\n    <input class=\"bell-checkbox-input\" \n      type=\"checkbox\" \n      model=\"checked\" \n      name=\"{{name}}\"\n      {{#if disabled}} disabled{{/if}}\n    />\n  </label>\n\n  <span class=\"bell-checkbox-label\">\n    <slot name=\"children\">\n      {{label || value}}\n    </slot>\n  </span>\n\n</label>";

var Checkbox = {

  model: 'checked',

  propTypes: {
    label: {
      type: RAW_STRING
    },
    value: {
      type: [RAW_STRING, RAW_BOOLEAN],
      require: true
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

  template: template$l,

  events: {
    groupChange: function groupChange(event, data) {
      if (event.phase === Yox.Event.PHASE_DOWNWARD) {
        this.set({
          checked: Yox.array.has(data.selected, this.get('value'))
        });
      }
    }
  },

  watchers: {
    checked: function checked(checked$1) {
      this.fire(
        'change',
        {
          checked: checked$1,
          value: this.get('value')
        }
      );
    }
  },

  afterMount: function afterMount() {
    var checkboxGroup = findComponentUpward(this, 'bell-checkboxGroup');
    if (checkboxGroup) {
      this.set({
        type: this.get('type') || checkboxGroup.get('type'),
        disabled: this.get('disabled') || checkboxGroup.get('disabled'),
        checked: Yox.array.has(checkboxGroup.get('selected'), this.get('value')),
        name: this.get('name') || checkboxGroup.get('name'),
        size: this.get('size') || checkboxGroup.get('size')
      });
    }
  }
};

var template$m = "<div \nclass=\"bell-checkbox-group\n  {{#if type}} bell-checkbox-group-{{type}}{{/if}}\n  {{#if size}} bell-checkbox-group-{{size}}{{/if}}\n  {{#if vertical}} bell-checkbox-vertical{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n  <slot name=\"children\" />\n</div>";

var CheckboxGroup = {

  model: 'selected',

  name: 'bell-checkboxGroup',

  propTypes: {
    name: {
      type: RAW_STRING
    },
    selected: {
      type: 'array',
      value: function () {
        return []
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

  template: template$m,

  events: {
    groupChange: function groupChange(event) {
      if (event.phase === Yox.Event.PHASE_DOWNWARD) {
        event.stop();
      }
    },
    change: function change(event, data) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        var me = this;
        var selected = me.copy(me.get('selected'));
        if (data.checked) {
          if (Yox.array.indexOf(selected, data.value) === -1) {
            selected.push(data.value);
          }
        }
        else {
          Yox.array.remove(selected, data.value);
        }
        me.set({ selected: selected });
        event.stop();
      }
    }
  },
  watchers: {
    selected: function selected (selected$1) {
      this.fire(
        'groupChange', 
        { selected: selected$1 }, 
        true
      );
    }
  }
};

var SwitchTpl = "<div class=\"bell-switch\n  {{#if type}} bell-switch-{{type}}{{/if}}\n  {{#if size}} bell-switch-{{size}}{{/if}}\n  {{#if disabled}} bell-switch-disabled{{/if}}\n  {{#if checked}} bell-active{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\"{{#if style}} style=\"{{style}}\"{{/if}} on-click=\"click()\">\n\n  <span class=\"bell-switch-button\">\n    <span class=\"bell-switch-on\">\n      {{#if hasSlot('checkedText')}}\n        <slot name=\"checkedText\" />\n      {{/if}}\n    </span>\n    <span class=\"bell-switch-off\">\n      {{#if hasSlot('unCheckedText')}}\n        <slot name=\"unCheckedText\" />\n      {{/if}}\n    </span>\n  </span>\n  <input class=\"bell-switch-input\" type=\"hidden\" value=\"{{value}}\" />\n</div>";

var Switch = {
  template: SwitchTpl,

  model: 'checked',

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    type: {
      type: 'string'
    },
    size: {
      type: 'string'
    },
    disabled: {
      type: 'boolean'
    },
    checked: {
      type: 'boolean'
    }
  },

  methods: {
    click: function click() {
      var me = this;
      if (me.get('disabled')) {
        return;
      }

      me.toggle('checked');
      me.fire(
        'change',
        {
          checked: me.get('checked')
        }
      );
    }
  }
};

var template$n = "<div \nclass=\"bell-select\n  {{#if size}} bell-select-{{size}}{{/if}}\n  {{#if type}} bell-select-{{type}}{{/if}}\n  {{#if visible}} bell-active{{/if}}\n  {{#if disabled}} bell-select-disabled{{/if}}\n  {{#if placement}} bell-select-{{placement}}{{/if}}\n  {{#if multiple}} bell-select-multiple{{/if}}\n  {{#if clearable}} bell-select-clearable{{/if}}\n  {{#if prefix || hasSlot('prefix')}} bell-select-with-prefix{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n\n  <div class=\"bell-select-button\">\n\n    {{#if prefix || hasSlot('prefix')}}\n      <div class=\"bell-select-prefix\">\n        <slot name=\"prefix\">\n          <Icon name=\"{{prefix}}\" />\n        </slot>\n      </div>\n    {{/if}}\n\n    <input type=\"hidden\" model=\"value\" />\n\n    <div class=\"bell-select-value\n      {{#if value == null}} bell-hide{{/if}}\n    \" on-click=\"toggleMenu()\"\n    >\n      {{#if selectedText && !multiple}}\n        {{selectedText}}\n      {{else if selectedText}}\n        {{#each selectedText:index}}\n        <Tag size=\"tiny\" closable on-close=\"tagClose($event, this, index)\">\n          {{this}}\n        </Tag>\n        {{/each}}\n      {{else if defaultText}}\n        {{{defaultText}}}\n      {{else}}\n        请选择...\n      {{/if}}\n    </div>\n\n    <div class=\"bell-select-placeholder\n      {{#if value != null}} bell-hide{{/if}}\n    \" on-click=\"toggleMenu()\">\n      {{#if defaultText}}\n        {{{defaultText}}}\n      {{else}}\n        请选择...\n      {{/if}}\n    </div>\n\n    <Icon name=\"arrow-down\" className=\"bell-select-arrow\" />\n\n    {{#if clearable}}\n      <Icon name=\"close-circle\" \n        size=\"16\"\n        className=\"bell-select-clear-icon\" \n        on-click=\"clear()\" \n      />\n    {{/if}}\n  </div>\n\n  <div class=\"bell-dropdown-list\">\n    <ul class=\"bell-dropdown-menu\">\n      <slot name=\"children\" />\n    </ul>\n  </div>\n</div>";

var Select = {
  propTypes: {
    clearable: {
      type: RAW_BOOLEAN
    },
    defaultText: {
      type: RAW_STRING
    },
    value: {
      type: [ RAW_NUMERIC, RAW_STRING ]
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

  template: template$n,

  data: function data() {
    return {
      count: 0,
      visible: false,
      hoverIndex: 0,
      selectedIndex: null,
      selectedText: null,
    }
  },

  watchers: {
    value: function value(value$1) {
      this.fire(
        'optionSelectedChange',
        { value: value$1 },
        true
      );

      this.fire(
        'change',
        {
          value: value$1,
          text: this.get('selectedText'),
          index: this.get('selectedIndex')
        }
      );
    }
  },

  events: {
    selectedOptionChange: function selectedOptionChange(event) {
      var option = event.target;
      if (!this.get('multiple')) {
        this.set({
          selectedIndex: option.get('index'),
          selectedText: option.get('text')
        });
      }
    },

    optionAdd: function optionAdd() {
      this.increase('count');
    },

    optionRemove: function optionRemove() {
      this.decrease('count');
    },

    optionSelect: function optionSelect(event) {
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
          visible: true
        });
      }
      else {
        me.set({
          value: value,
          selectedText: text,
          selectedIndex: index,
          visible: false
        });
      }
    }
  },

  methods: {
    clear: function clear() {
      this.set({
        value: null,
        selectedText: null,
        selectedIndex: null
      });
    },
    setArrayValue: function setArrayValue(text, values) {

      values = this.copy(values);
      if (Yox.is.array(values)) {
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

      return values.length ? values : null

    },

    tagClose: function tagClose(event, text, index) {
      var me = this;

      this.set({
        value: me.setArrayValue(me.get('value')[index], me.get('value')),
        selectedText: me.setArrayValue(text, me.get('selectedText'))
      });
      event.stop();

    },

    toggleMenu: function toggleMenu() {
      if (this.get('disabled')) {
        return false
      }
      this.toggle('visible');
    },

    decreaseHoverIndex: function decreaseHoverIndex() {
      var hoverIndex = this.get('hoverIndex');
      hoverIndex = hoverIndex <= 0 ? (this.get('count') - 1) : hoverIndex - 1;
      this.set({
        hoverIndex: hoverIndex
      });
      this.fire(
        'optionHoveredChange',
        {
          index: hoverIndex
        },
        true
      );
    },

    increaseHoverIndex: function increaseHoverIndex() {
      var hoverIndex = this.get('hoverIndex');
      hoverIndex = hoverIndex >= (this.get('count') - 1) ? 0 : hoverIndex + 1;
      this.set({
        hoverIndex: hoverIndex
      });

      this.fire(
        'optionHoveredChange',
        {
          index: hoverIndex
        },
        true
      );
    },

    selectOption: function selectOption() {
      this.fire(
        'optionHoveredChange',
        {
          index: this.get('hoverIndex'),
          selected: true
        },
        true
      );
    }

  },

  afterMount: function afterMount() {
    var me = this;

    if (me.get('value') != null
      && me.get('selectedText') == null
      && me.get('selectedIndex') == null
    ) {
      me.fire(
        'optionSelectedChange',
        {
          value: me.get('value')
        },
        true
      );
    }

    me.documentClickHandler = function (e) {
      if (!me.get('visible')) {
        return
      }

      var element = me.$el;
      var target = e.originalEvent.target;
      if (contains(element, target)) {
        return
      }
      me.set({
        visible: false
      });
    };

    me.documentKeydownHander = function (e) {
      if (!me.get('visible')) {
        return
      }

      switch (e.originalEvent.keyCode) {
        case 40:
          e.prevent();
          me.increaseHoverIndex();
          break

        case 38:
          e.prevent();
          me.decreaseHoverIndex();
          break

        case 13:
          me.selectOption();
          break
      }
    };

    Yox.dom.on(
      document,
      'click',
      me.documentClickHandler
    );
    Yox.dom.on(
      document,
      'keydown',
      me.documentKeydownHander
    );
  },

  beforeDestroy: function beforeDestroy() {
    var me = this;
    Yox.dom.off(
      document,
      'click',
      me.documentClickHandler
    );
    Yox.dom.off(
      document,
      'keydown',
      me.documentKeydownHander
    );
  }
};

var template$o = "<li \nclass=\"bell-select-option\n  {{#if isHover}} bell-hover{{/if}}\n  {{#if isSelected}} bell-active{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}} \non-click=\"click(index)\"\n>\n  <slot name=\"children\">\n    {{text}}\n  </slot>\n</li>";

var Option = {
  propTypes: {
    value: {
      type: [ RAW_STRING, RAW_NUMERIC ]
    },
    text: {
      type: [ RAW_STRING, RAW_NUMERIC ]
    },
    index: {
      type: [ RAW_STRING, RAW_NUMERIC ],
      require: true
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },
  template: template$o,
  events: {
    optionHoveredChange: function optionHoveredChange(_, data) {
      var me = this;
      var isHover = data.index == me.get('index');
      me.set({
        isHover: isHover
      });
      if (isHover && !me.get('isSelected')) {
        me.set({
          isSelected: data.selected
        });
      }
    },

    optionSelectedChange: function optionSelectedChange(_, data) {
      var value = this.get('value');
      var values = data.value;

      var isSelected = Yox.is.array(values) ? values.indexOf(value) >= 0 : values == value;
      this.set({
        isSelected: isSelected
      });
      
      if (isSelected) {
        this.fire('selectedOptionChange');
      }
    }
  },

  data: function data() {
    return {
      isSelected: false,
      isHover: false
    }
  },

  methods: {
    click: function click() {
      this.fire(
        'optionSelect'
      );
    }
  },

  afterMount: function afterMount() {
    this.fire(
      'optionAdd',
      {
        value: this.get('value'),
        text: this.get('text'),
        index: this.get('index')
      }
    );
  },

  beforeDestroy: function beforeDestroy() {
    this.fire(
      'optionRemove'
    );
  }

};

var template$p = "<li \nclass=\"bell-select-option-group\n  {{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}} \n>\n  <div class=\"bell-select-option-title\">\n    {{label}}\n  </div>\n  <slot name=\"children\" />\n</li>";

var OptionGroup = {
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
  template: template$p
};

var template$q = "<div \nclass=\"bell-page\n  {{#if size}} bell-page-{{size}}{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n  {{#partial pageCenter}}\n    {{#if current - 5 >= 1}}\n      <li class=\"bell-page-item bell-page-item-prev\" on-click=\"fastPrev()\">\n        <Icon name=\"arrow-back\" />\n        <Icon name=\"arrow-back\" />\n      </li>\n    {{else}}\n      {{#if current - 3 > 1}}\n        <li class=\"bell-page-item\" on-click=\"changePage(current - 3)\">\n          {{ current - 3 }}\n        </li>\n      {{/if}}\n      {{#if current - 4 > 1}}\n        <li class=\"bell-page-item\" on-click=\"changePage(current - 4)\">\n          {{ current - 4 }}\n        </li>\n      {{/if}}\n    {{/if}}\n\n    {{#if current - 2 > 1}}\n      <li class=\"bell-page-item\" on-click=\"changePage(current - 2)\">\n        {{ current - 2 }}\n      </li>\n    {{/if}}\n\n    {{#if current - 1 > 1}}\n      <li class=\"bell-page-item\" on-click=\"changePage(current - 1)\">\n        {{ current - 1 }}\n      </li>\n    {{/if}}\n\n    {{#if current != 1 && current != count}}\n      <li class=\"bell-page-item bell-active\">\n        {{ current }}\n      </li>\n    {{/if}}\n\n    {{#if current + 1 < count}}\n      <li class=\"bell-page-item\" on-click=\"changePage(current + 1)\">\n        {{ current + 1 }}\n      </li>\n    {{/if}}\n\n    {{#if current + 2 < count}}\n      <li class=\"bell-page-item\" on-click=\"changePage(current + 2)\">\n        {{ current + 2 }}\n      </li>\n    {{/if}}\n\n    {{#if current + 5 <= count}}\n      <li class=\"bell-page-item bell-page-item-next\" on-click=\"fastNext()\">\n        <Icon name=\"arrow-forward\" />\n        <Icon name=\"arrow-forward\" />\n      </li>\n    {{else}}\n      {{#if current + 3 < count}}\n        <li class=\"bell-page-item\" on-click=\"changePage(current + 3)\">\n          {{ current + 3 }}\n        </li>\n      {{/if}}\n\n      {{#if current + 4 < count}}\n        <li class=\"bell-page-item\" on-click=\"changePage(current + 4)\">\n          {{ current + 4 }}\n        </li>\n      {{/if}}\n    {{/if}}\n  {{/partial}}\n\n  {{#if showTotal}}\n  <span class=\"bell-page-total\">\n    共 {{total}} 条\n  </span>\n  {{/if}}\n\n  {{#if showSizer}}\n  <div class=\"bell-page-select\">\n    <Select model=\"pageSize\"\n      size=\"{{size}}\"\n      placement=\"{{placement}}\"\n      on-change=\"pageSizeChange()\"\n    >\n      {{#each pageList:index}}\n        <Option index=\"{{index}}\" value=\"{{value}}\" text=\"{{text}}\">\n          {{text}}\n        </Option>\n      {{/each}}\n    </Select>\n  </div>\n  {{/if}}\n\n  {{#if !simple}}\n  <ul class=\"bell-page-list\">\n\n    <li class=\"bell-page-item bell-page-prev\n      {{#if current <= 1}} bell-disabled{{/if}}\n    \" on-click=\"prev()\">\n      <Icon name=\"arrow-back\" />\n    </li>\n\n    <li class=\"bell-page-item\n      {{#if current == 1}} bell-active{{/if}}\n    \" on-click=\"changePage(1)\">\n      1\n    </li>\n\n    {{#if count > 1}}\n      {{> pageCenter}}\n      <li class=\"bell-page-item\n        {{#if current == count}} bell-active{{/if}}\n      \" on-click=\"changePage(count)\">\n        {{count}}\n      </li>\n    {{/if}}\n\n    <li class=\"bell-page-item bell-page-next \n      {{#if current >= count}} bell-disabled{{/if}}\n    \" on-click=\"next()\">\n      <Icon name=\"arrow-forward\" />\n    </li>\n  </ul>\n\n  {{else}}\n    <div class=\"bell-page-simple\">\n      <span class=\"bell-page-item bell-page-prev\n        {{#if current <= 1}} bell-disabled{{/if}}\n      \" on-click=\"prev()\">\n        <Icon name=\"arrow-back\" />\n      </span>\n\n      <div class=\"bell-page-input\">\n        <Input type=\"input\"\n          size=\"small\"\n          model=\"currentPage\"\n        ></Input>\n      </div>\n\n      <span class=\"bell-page-item\n        {{#if current == count}} bell-active{{/if}}\n      \" on-click=\"changePage(count)\">\n        {{'/' + count}}\n      </span>\n\n      <span class=\"bell-page-item bell-page-next\n        {{#if current >= count}} bell-disabled{{/if}}\n      \" on-click=\"next()\">\n        <Icon name=\"arrow-forward\" />\n      </span>\n    </div>\n  {{/if}}\n\n  {{#if showElevator}}\n    <div class=\"bell-page-elevator\">\n      <div class=\"bell-page-input\">\n        <Input type=\"input\"\n          placeholder=\"请输入页码\"\n          model=\"elevatorPage\"\n          size=\"{{size}}\"\n        ></Input>\n      </div>\n      <Button type=\"primary\" on-click=\"elevator()\">\n        跳转\n      </Button>\n    </div>\n  {{/if}}\n  \n</div>";

var Page = {

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

  template: template$q,

  data: function data() {
    var me = this;
    var getPageList = function () {
      var pageList = [];
      if (me.get('showSizer')
        && me.get('pageSizeOpts')
      ) {
        Yox.array.each(
          me.get('pageSizeOpts'),
          function (value) {
            pageList.push({
              text: value + ' 条/页',
              value: value
            });
          }
        );
      }
      return pageList
    };
    return {
      pageList: getPageList(),
      count: 0,
      currentPage: 1,
      elevatorPage: ''
    }
  },

  events: {
    change: function (event) {
      if (event.target != this) {
        event.stop();
      }
    }
  },

  watchers: {
    current: function current(value) {
      this.fire(
        'change.page',
        {
          value: value
        }
      );
    }
  },

  methods: {  

    elevator: function elevator() {
      var page = this.get('elevatorPage');
      if (Yox.is.numeric(page)) {
        this.changePage(+page);
        return 
      } 
    },

    pageSizeChange: function pageSizeChange(event, data) {

      this.updateCount();
      this.fire(
        'pageSizeChange.page',
        {
          value: data.value
        }
      );
      event.stop();
    },

    fastPrev: function fastPrev() {
      var me = this;
      if (me.get('current') < 1) {
        return
      }
      me.decrease('current', 5, 1);
    },

    fastNext: function fastNext() {
      var me = this;
      if (me.get('current') >= me.get('count')) {
        return
      }
      me.increase('current', 5, me.get('count'));
    },

    prev: function prev() {
      var me = this;
      if (me.get('current') < 1) {
        return
      }
      me.decrease('current', 1, 1);

      if (me.get('simple')) {
        me.decrease('currentPage', 1, 1);
      }
    },

    next: function next() {
      var me = this;
      if (me.get('current') >= me.get('count')) {
        return
      }
      me.increase('current', 1, me.get('count'));
      if (me.get('simple')) {
        me.increase('currentPage', 1, me.get('count'));
      }
    },

    changePage: function changePage(page) {
      this.set({
        current: page,
        currentPage: page
      });
    },

    updateCount: function updateCount() {
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

  afterMount: function afterMount() {
    var me = this;
    me.updateCount();

    me.documentKeydownHander = function (event) {

      var currentPage = +me.get('currentPage');
      var current = me.get('current');
      var count = me.get('count');

      switch (event.originalEvent.keyCode) {
        case 40:
          current = current + 1 > count ? count : current + 1;
          break
        case 38:
          current = current > 1 ? current - 1 : 1;
          break
        case 13:
          if (Yox.is.number(currentPage)
            && currentPage > 0
            && currentPage <= count
          ) {
            current = currentPage;
          }
          break
      }

      me.set({
        current: current,
        currentPage: current
      });

    };

    Yox.dom.on(
      document,
      'keydown',
      me.documentKeydownHander
    );
  },

  beforeDestroy: function beforeDestroy() {
    var me = this;
    Yox.dom.off(
      document,
      'keydown',
      me.documentKeydownHander
    );
  }
};

var UploadTpl = "<div class=\"bell-upload\n  {{#if className}} {{className}}{{/if}}\n\"{{#if style}} style=\"{{style}}\"{{/if}} on-click=\"click()\">\n  {{#if hasSlot('children')}}\n    <slot name=\"children\" />\n  {{/if}}\n</div>";

var Upload = {
  template: UploadTpl,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    action: {
      type: 'string'
    },
    data: {
      type: 'object'
    },
    multiple: {
      type: 'boolean',
      value: function (value) {
        return value ? true : false;
      }
    },
    accept: {
      type: 'array'
    }
  },

  watchers: {
    
  },

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
        
        me.fire(
          'uploadstart',
          {
            file: files[ 0 ],
          } 
        );
        me.upload(files[ 0 ]);

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
        for(var key in data) {
          formData.append(key, data[ key ]);
        }
      }
      formData.append('file', file);
      xhr.send(formData);

      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {  // 4 为完成
          if (xhr.status == 200) {  // 200 为成功
            me.fire(
              'uploadsuccess',
              JSON.parse(xhr.responseText)
            );
          } 
          else {
            me.fire(
              'uploadsuccess',
              JSON.parse(xhr.responseText)
            );
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
};

var template$r = "<div \nclass=\"bell-alert\n{{#if type}} bell-alert-{{type}}{{/if}}\n{{#if hasSlot('content')}} bell-alert-with-content{{/if}}\n{{#if showIcon || hasSlot('icon')}} bell-alert-with-icon{{/if}}\n{{#if center}} bell-alert-center{{/if}}\n{{#if className}} {{className}}{{/if}}\n\" \n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n  {{#if showIcon || hasSlot('icon')}}\n    <span class=\"bell-alert-icon\">\n      <slot name=\"icon\">\n        {{#if type == 'primary'}}\n          <Icon name=\"information-circle\" />\n        {{else if type == 'success'}}\n          <Icon name=\"checkmark-circle\" />\n        {{else if type == 'warning'}}\n          <Icon name=\"alert\" />\n        {{else if type == 'error'}}\n          <Icon name=\"close-circle\" />\n        {{/if}}\n      </slot>>\n    </span>\n  {{/if}}\n\n  <div class=\"bell-alert-wrapper\">\n    \n    {{#if hasSlot('children')}}\n    <div class=\"bell-alert-title\">\n      <slot name=\"children\" />\n    </div>\n    {{/if}}\n\n    {{#if hasSlot('content')}}\n    <div class=\"bell-alert-content\">\n      <slot name=\"content\" />\n    </div>\n    {{/if}}\n\n  </div>\n\n  {{#if closable || hasSlot('close')}}\n    <span ref=\"close\" class=\"bell-alert-close\" on-click=\"close()\">\n      <slot name=\"close\">\n        {{#if closeText}}\n          {{closeText}}\n        {{else}}\n          <Icon name=\"close\" size=\"24\" />\n        {{/if}}\n      </slot>\n    </span>\n  {{/if}}\n</div>";

var Alert = {

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
    closeText: {
      type: RAW_STRING
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template: template$r,

  methods: {
    close: function close() {
      var me = this;
      Yox.dom.addClass(me.$el, 'bell-hide');
      setTimeout(
        function () {
          me.$el && me.$el.remove();
        },
        500
      );
      me.fire('close.alert');
    }
  }
};

var SpinnerTpl = "<div class=\"bell-spinner\n  {{#if className}} {{className}}{{/if}}\n  {{#if size}} {{size}}{{/if}}\n  {{#if type}} {{type}}{{/if}}\n  {{#if fix}} bell-spinner-fix{{/if}}\n\" {{#if style}} style=\"{{style}}\"{{/if}}>\n\n  {{#if hasSlot('children')}}\n    <slot name=\"children\" />\n  {{else}}\n    <div class=\"bell-spinner-main\">\n      <span class=\"bell-spinner-dot\"></span>\n      {{#if text}}\n        <span class=\"bell-spinner-text\">\n          {{text}}\n        </span>\n      {{/if}}\n    </div>\n  {{/if}}\n\n</div>";

var Spinner = {
  template: SpinnerTpl,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    size: {
      type: 'string'
    },
    text: {
      type: 'string'
    },
    fix: {
      type: 'boolean'
    },
    type: {
      type: 'string'
    }
  }
};

var template$s = "<div \nclass=\"bell-backtop\n{{#if !isShow}} bell-backtop-hide{{/if}}\n{{#if className}} {{className}}{{/if}}\n\"\nstyle=\"bottom: {{bottom}}px;\nright: {{right}}px;\n{{#if style}} {{style}}{{/if}}\n\" \non-click=\"back()\"\n>\n  <div class=\"bell-backtop-inner\">\n    <slot name=\"children\">\n      <Icon name=\"arrow-up\"></Icon>\n    </slot>\n  </div>\n</div>";

var BackTop = {

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

  template: template$s,

  data: function data() {
    return {
      isShow: false
    }
  },

  methods: {
    back: function back() {
      var parentElement = this.$parent.$el;
      scrollTop(parentElement, parentElement.scrollTop, 0, this.get('duration'));
      this.fire('click');
    }
  },

  afterMount: function afterMount() {
    var me = this;
    var parentElement = me.$parent.$el;
    me.handleScroll = function () {
      var height = me.get('height') || parentElement.clientHeight;
      me.set({
        isShow: parentElement.scrollTop >= height
      });
    };
    Yox.dom.on(parentElement, 'scroll', me.handleScroll);
    Yox.dom.on(document, 'resize', me.handleScroll);
  },

  beforeDestroy: function beforeDestroy() {
    Yox.dom.off(this.$parent.$el, 'scroll', this.handleScroll);
    Yox.dom.off(document, 'resize', this.handleScroll);
  }
};

var template$t = "<div \nclass=\"bell-avatar bell-avatar-{{size}} bell-avatar-{{shape}}\n{{#if className}} {{className}}{{/if}}\n\" \nstyle=\"color: {{color}};\n{{#if fontSize}} font-size: {{fontSize}}px;{{/if}}\n{{#if bgColor}} background-color: {{bgColor}};{{/if}}\n{{#if style}} {{style}}{{/if}}\n\"\n>\n  \n  {{#if src}}\n  <img className=\"bell-avatar-image\"\n    {{#if srcset}} srcset=\"{{srcset}}\"{{/if}} \n    ondragstart=\"return false\" \n    src=\"{{src}}\" \n  />\n  {{else if icon}}\n    <Icon type=\"{{iconType}}\" className=\"bell-avatar-icon\" name=\"{{icon}}\" />\n  {{else if text}}\n    <span ref=\"textStr\" class=\"bell-avatar-string\" style=\"transform: {{transformStyle}};\">\n      {{text}}\n    </span>\n  {{/if}}\n\n</div>";

var Avatar = {

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
    icon: {
      type: RAW_STRING
    },
    iconType: {
      type: oneOf(RAW_ICON_TYPE_ARRAY)
    },
    fontSize: {
      type: RAW_NUMERIC
    },
    bgColor: {
      type: RAW_STRING
    },
    color: {
      type: RAW_STRING,
      value: '#ffffff'
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template: template$t,
  
  data: function data () {
    return {
      transformStyle: "scale(1) translateX(-50%)"
    }
  },

  watchers: {
    
  },

  afterMount: function afterMount () {
    var elWidth = this.$el.clientWidth - 8;
    this.watch(
      'text',
      {
        watcher: function () {
          this.nextTick(function () {
            var scale = 1;
            if (this.$refs.textStr && this.$refs.textStr.clientWidth) {
              scale = elWidth / this.$refs.textStr.clientWidth; 
            }

            this.set(
              'transformStyle',
              ("scale(" + (scale > 1 ? 1 : scale) + ") translateX(-50%)")
            );
          });
        },
        immediate: true
      }
    );
  }
};

var template$u = "<div \nclass=\"bell-badge{{#if status}}-status{{/if}}\n{{#if status || type}} bell-badge-{{status || type}}{{/if}}\n{{#if className}} {{className}}{{/if}}\n\" \n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n\n  <slot name=\"children\" />\n\n  {{#if !hidden}}\n    \n    {{#if dot}}\n      <span class=\"bell-badge-dot\"></span>\n    {{/if}}\n    \n    {{#if text || count}}\n    <span class=\"bell-badge-count\n      {{#if !hasSlot('children')}} bell-badge-count-alone{{/if}}\n    \">\n      {{text ? text : getText(count, maxCount)}}\n    </span>\n    {{/if}}\n\n  {{/if}}\n  \n</div>";

var Badge = {
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

  template: template$u,

  filters: {
    getText: function getText(count, maxCount) {
      maxCount = Yox.is.numeric(maxCount) ? +maxCount : 1;
      var countStr = Yox.is.numeric(count) ? +count : 0;

      return maxCount < countStr
        ? maxCount + '+'
        : count
    }
  }
};

var normalizeDate = function(date) {
  return date.setHours(0, 0, 0, 0)
};

var offsetSecond = function(date, offset) {
  if (!Yox.is.numeric(date)) {
    date = date.getTime();
  }
  return new Date(date + offset * 1000)
};

var offsetMinute = function(date, offset) {
  return offsetSecond(date, offset * 60)
};

var offsetHour = function(date, offset) {
  return offsetMinute(date, offset * 60)
};

var offsetDate = function(date, offset) {
  return offsetHour(date, offset * 24)
};

var offsetMonth = function(date, offset) {
  if (!Yox.is.numeric(date)) {
    date = date.getTime();
  }
  date = new Date(date);
  date.setDate(1);
  date.setMonth(date.getMonth() + offset);
  return date
};

var firstDateInWeek = function(date, firstDay) {
  if (Yox.is.numeric(date)) {
    date = new Date(date);
  }
  var day = date.getDay();
  day = day >= firstDay ? day : (day + 7);

  return offsetDate(date, -1 * (day - firstDay))
};

var lastDateInWeek = function(date, firstDay) {
  return offsetDate(
    firstDateInWeek(date, firstDay),
    6
  )
};

var firstDateInMonth = function (date) {
  if (Yox.is.numeric(date)) {
    date = new Date(date);
  }
  return offsetDate(
    date,
    1 - date.getDate()
  )
};

var lastDateInMonth = function (date) {
  return offsetDate(
    firstDateInMonth(
      offsetMonth(date, 1)
    ),
    -1
  )
};

var isValidDate = function (date) {
  var time = date.getTime && date.getTime();
  if (!time) {
    time = date;
  }
  if (Yox.is.number(time)) {
    return ('' + time).length > 8
  }
  return false
};

var parseDate = function(year, month, date) {
  var valid = false;

  if (Yox.is.numeric(year)
    && Yox.is.numeric(month)
    && Yox.is.numeric(date)
  ) {
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
      && date >= 1 && date <= 31
    ) {
      return new Date(year, month - 1, date)
    }
  }
};

var simplifyDate = function (date) {
  if (!date || !isValidDate(date)) {
    return date
  }

  date = new Date(date);

  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    day: date.getDay()
  }
};

var getOffsetTime = function (date) {
  if (!date) {
    return 0
  }
  return date.getTime()
};

var lpad = function (num, length) {
  if (num == undefined) {
    return ''
  }
  if (length == null) {
    length = 2;
  }
  var arr = new Array(
    length - ('' + num).length + 1
  );

  return arr.join('0') + num
};

var formatList = function (list) {
  var result = [];
  var arr = [];
  for (var i = 0; i < list.length; i++) {
    arr.push(list[ i ]);
    if (i % 7 == 6) {
      result.push(arr);
      arr = [];
    }
  }
  return result
};

var WEEKS = [ '日', '一', '二', '三', '四', '五', '六' ];
var DAY = 24 * 60 * 60 * 1000;
var STABLE_DURATION = 41 * DAY;
var MONTHS = [
  '一月', '二月', '三月', '四月', '五月', 
  '六月', '七月', '八月', '九月', '十月', 
  '十一月', '十二月'
];

var template$v = "<div \nclass=\"bell-datepicker-date\n{{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} {{style}}{{/if}}\n>\n\n  <div class=\"bell-datepicker-header\">\n    <span class=\"bell-datepicker-header-button\" on-click=\"this.changeDateList(-12)\">\n      <Icon name=\"arrow-back\" />\n      <Icon name=\"arrow-back\" />\n    </span>\n\n    <span class=\"bell-datepicker-header-button\" on-click=\"this.changeDateList(-1)\">\n      <Icon name=\"arrow-back\" />\n    </span>\n\n    <span class=\"bell-text-medium\">\n      {{modeDate.year}} 年 {{modeDate.month}} 月\n    </span>\n\n    <span class=\"bell-datepicker-header-button\" on-click=\"this.changeDateList(1)\">\n      <Icon name=\"arrow-forward\" />\n    </span>\n\n    <span class=\"bell-datepicker-header-button\" on-click=\"this.changeDateList(12)\">\n      <Icon name=\"arrow-forward\" />\n      <Icon name=\"arrow-forward\" />\n    </span>\n  </div>\n\n  <div class=\"bell-datepicker-body\">\n    <div class=\"bell-datepicker-weeks\">\n      {{#each weeks}}\n        <span class=\"bell-datepicker-col\">\n          {{this}}\n        </span>\n      {{/each}}\n    </div>\n    <div class=\"bell-datepicker-days\">\n      {{#each dateList:index}}\n        <div class=\"bell-datepicker-row\">\n          {{#each this:index}}\n            <div\n              class=\"{{#if isCurrentMonth && !disabled}} \n                bell-datepicker-col-current-month\n              {{else if disabled}}\n                bell-datepicker-col-disabled\n              {{/if}} bell-datepicker-col\n              {{#if isPrevMonth}} bell-datepicker-col-prev-month{{/if}}\n              {{#if isLastMonth}} bell-datepicker-col-last-month{{/if}}\n              {{#if isCurrentDate}} bell-datepicker-col-checked{{/if}}\n            \"\n            {{#if isCurrentMonth && !disabled}} on-click=\"click(this)\"{{/if}}\n            >\n              {{date}}\n            </div>\n          {{/each}}\n        </div>\n      {{/each}}\n    </div>\n  </div>\n</div>";

var Date$1 = {

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

  template: template$v,

  data: function data() {
    var modeDate = this.get('startDate') ? this.get('startDate') : new Date();
    var selectedDates = [];
    if (this.get('selected') && this.get('selected').length) {
      selectedDates = this.get('selected').map(function (item) {
        var date = simplifyDate(item);
        return ((date.year) + "/" + (date.month) + "/" + (date.date) + "/" + (date.day))
      });
    }
    return {
      weeks: WEEKS,
      currentDate: null,
      modeDate: simplifyDate(modeDate),

      dateList: [],
      selectedDates: selectedDates
    }
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
    value: function value(date) {
      var value = date ? simplifyDate(date) : null;
      this.set({
        currentDate: value,
        dateList: this.createRenderData(
          this.get('modeDate'), 
          value,
          this.get('selectedDates')
        )
      });
    },
    currentDate: {
      watcher: function (date) {
        this.fire(
          'change.date',
          {
            date: date,
            selectedDates: this.get('selectedDates')
          }
        );
      },
      sync: true
    }
  },

  methods: {
    changeDateList: function changeDateList(offset) {
      var me = this;
      var modeDate = simplifyDate(
        offsetMonth(
          parseDate(me.get('modeDate')), 
          offset
        )
      ); 
      var dateList = me.createRenderData(
        modeDate, 
        me.get('currentDate'),
        me.get('selectedDates')
      );
      me.set({
        modeDate: modeDate,
        dateList: dateList
      });
    },

    addDates: function addDates(date) {
      var selectedDates = this.copy(this.get('selectedDates'));
      var index = this.getDateIndex(date, selectedDates);
      if (index < 0) {
        selectedDates.push(
          this.getDateString(date)
        );
      }
      else {
        selectedDates.splice(index, 1);
      }
      this.set({ selectedDates: selectedDates });
    },

    click: function click(date) {
      var me = this;
      me.get('multiple') && me.addDates(date);
      me.set({
        currentDate: date,
        dateList: me.createRenderData(
          me.get('modeDate'), 
          date,
          me.get('selectedDates')
        )
      });
    },

    getDateString: function getDateString(date) {
      return ((date.year) + "/" + (date.month) + "/" + (date.date) + "/" + (date.day))
    },
    getDateIndex: function getDateIndex(item, list) {
      return list.indexOf(this.getDateString(item))
    },

    getDataSource: function getDataSource(start, end, modeDate, currentDate, selectedDates) {
      var data = [];
      for (var time = start, item = (void 0); time <= end; time += DAY) {
        item = simplifyDate(time);

        if (this.get('multiple')) {
          if (this.getDateIndex(item, selectedDates) >= 0) {
            item.isCurrentDate = true;
          }
        }
        else if (currentDate
          && currentDate.year === item.year 
          && currentDate.month === item.month
          && currentDate.date === item.date
        ) {
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
      return data
    },
    createRenderData: function createRenderData(modeDate, currentDate, selectedDates) {
      var me = this;
      var firstDay = me.get('firstDay') || 0;
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
      var list = me.getDataSource(
        startDate, 
        endDate, 
        modeDate, 
        currentDate, 
        selectedDates
      );
      return formatList(list)
    }
  },

  afterMount: function afterMount() {
    var value = this.get('value') ? simplifyDate(this.get('value')) : null;
    this.set({
      currentDate: value,
      dateList: this.createRenderData(
        this.get('modeDate'), 
        value, 
        this.get('selectedDates')
      )
    });
    if (this.get('selected')) {
      this.fire(
        'change.date',
        {
          date: value,
          selectedDates: this.get('selectedDates')
        }
      );
    }
  }
};

var template$w = "<div class=\"bell-datepicker-daterange\n  {{#if className}} {{className}}{{/if}}\n\"{{#if style}} {{style}}{{/if}}>\n\n  <div class=\"bell-datepicker-header\">\n    <span class=\"bell-datepicker-header-button\" on-click=\"startPrevYear()\">\n      <Icon name=\"arrow-back\" />\n      <Icon name=\"arrow-back\" />\n    </span>\n\n    <span class=\"bell-datepicker-header-button\" on-click=\"startPrevMonth()\">\n      <Icon name=\"arrow-back\" />\n    </span>\n\n    <span class=\"bell-text-medium \n    {{#if !splitPanel}} bell-datepicker-header-month{{/if}}\"\n    >\n      {{startModeDateYear}} 年 {{startModeDateMonth}} 月\n    </span>\n    \n    {{#if splitPanel}}\n      <span class=\"bell-datepicker-header-button\" on-click=\"startNextMonth()\">\n        <Icon name=\"arrow-forward\" />\n      </span>\n  \n      <span class=\"bell-datepicker-header-button\" on-click=\"startNextYear()\">\n        <Icon name=\"arrow-forward\" />\n        <Icon name=\"arrow-forward\" />\n      </span>\n\n      <span class=\"bell-datepicker-header-button\" on-click=\"endPrevYear()\">\n        <Icon name=\"arrow-back\" />\n        <Icon name=\"arrow-back\" />\n      </span>\n  \n      <span class=\"bell-datepicker-header-button\" on-click=\"endPrevMonth()\">\n        <Icon name=\"arrow-back\" />\n      </span>\n    {{/if}}\n\n    <span class=\"bell-text-medium\">\n      {{endModeDateYear}} 年 {{endModeDateMonth}} 月\n    </span>\n\n    <span class=\"bell-datepicker-header-button\" on-click=\"endNextMonth()\">\n      <Icon name=\"arrow-forward\" />\n    </span>\n\n    <span class=\"bell-datepicker-header-button\" on-click=\"endNextYear()\">\n      <Icon name=\"arrow-forward\" />\n      <Icon name=\"arrow-forward\" />\n    </span>\n  </div>\n\n  <div class=\"bell-datepicker-daterange-wrapper\">\n    <div class=\"bell-datepicker-body\">\n      <div class=\"bell-datepicker-weeks\">\n        {{#each weeks}}\n          <span class=\"bell-datepicker-col bell-text-sub\">\n            {{this}}\n          </span>\n        {{/each}}\n      </div>\n      <div class=\"bell-datepicker-days\">\n        {{#each startModeList:key}}\n          <div class=\"bell-datepicker-row\">\n            {{#each this:index}}\n              <span\n                class=\"{{#if isCurrentMonth && !disabled}} \n                  bell-datepicker-col-current-month\n                {{else if disabled}}\n                  bell-datepicker-col-disabled\n                {{/if}} bell-datepicker-col\n                {{#if isCurrentMonth}} bell-datepicker-col-current-month{{/if}}\n                {{#if isPrevMonth}} bell-datepicker-col-prev-month{{/if}}\n                {{#if isLastMonth}} bell-datepicker-col-last-month{{/if}}\n                {{#if isCurrentMonth && isCheckedDate}} bell-datepicker-col-checked{{/if}}\n                {{#if isCurrentMonth && isRangeDate}} bell-datepicker-col-range{{/if}}\n              \"\n              {{#if isCurrentMonth && !disabled}} on-click=\"click(this)\"{{/if}}\n                on-mouseover=\"hover(this)\"\n              >\n                {{date}}\n              </span>\n            {{/each}}\n          </div>\n        {{/each}}\n    </div>\n  </div>\n    <div class=\"bell-datepicker-body\">\n      <div class=\"bell-datepicker-weeks\">\n        {{#each weeks}}\n          <span class=\"bell-datepicker-col bell-text-sub\">\n            {{this}}\n          </span>\n        {{/each}}\n      </div>\n      <div class=\"bell-datepicker-days\">\n        {{#each endModeList:key}}\n          <div class=\"bell-datepicker-row\">\n            {{#each this:index}}\n              <span\n                class=\"{{#if isCurrentMonth && !disabled}} \n                  bell-datepicker-col-current-month\n                {{else if disabled}}\n                  bell-datepicker-col-disabled\n                {{/if}} bell-datepicker-col\n                {{#if isCurrentMonth}} bell-datepicker-col-current-month{{/if}}\n                {{#if isPrevMonth}} bell-datepicker-col-prev-month{{/if}}\n                {{#if isLastMonth}} bell-datepicker-col-last-month{{/if}}\n                {{#if isCurrentMonth && isCheckedDate}} bell-datepicker-col-checked{{/if}}\n                {{#if isCurrentMonth && isRangeDate}} bell-datepicker-col-range{{/if}}\n              \"\n              {{#if isCurrentMonth && !disabled}} on-click=\"click(this)\"{{/if}}\n                on-mouseover=\"hover(this)\"\n              >\n                {{date}}\n              </span>\n            {{/each}}\n          </div>\n        {{/each}}\n      </div>\n    </div>\n  </div>\n\n</div>";

var DateRange = {

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

  template: template$w,

  data: function data() {
    return {
      weeks: WEEKS,
      
      startModeDate: '',
      endModeDate: '',

      checkedStartDate: '',
      checkedEndDate: '',

      startModeList: [],
      endModeList: []
    }
  },

  computed: {
    startModeDateYear: function startModeDateYear() {
      return simplifyDate(this.get('startModeDate')).year
    },
    startModeDateMonth: function startModeDateMonth() {
      return simplifyDate(this.get('startModeDate')).month
    },
    endModeDateYear: function endModeDateYear() {
      return simplifyDate(this.get('endModeDate')).year
    },
    endModeDateMonth: function endModeDateMonth() {
      return simplifyDate(this.get('endModeDate')).month
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
    changeStartModeDate: function changeStartModeDate(offset) {
      var me = this;
      var startModeDate = me.get('startModeDate');
      startModeDate = offsetMonth(startModeDate, offset);
      var startModeList = me.createRenderData(
        startModeDate,
        me.get('checkedStartDate'),
        me.get('checkedEndDate')
      );
      me.set({
        startModeDate: startModeDate,
        startModeList: startModeList
      });
      if (me.get('endModeDate').getTime() <= startModeDate.getTime()) {
        me.changeEndModeDate(offset);
      }
    },
    changeEndModeDate: function changeEndModeDate(offset) {
      var me = this;
      var endModeDate = me.get('endModeDate');
      endModeDate = offsetMonth(endModeDate, offset);
      var endModeList = me.createRenderData(
        endModeDate,
        me.get('checkedStartDate'),
        me.get('checkedEndDate')
      );
      me.set({
        endModeDate: endModeDate,
        endModeList: endModeList
      });
      if (me.get('endModeDate').getTime() <= me.get('startModeDate').getTime()) {
        me.changeStartModeDate(offset);
      }
    },
    startPrevYear: function startPrevYear() {
      this.changeStartModeDate(-12);
      if (!this.get('splitPanel')) {
        this.changeEndModeDate(-12);
      }
    },
    startPrevMonth: function startPrevMonth() {
      this.changeStartModeDate(-1);
      if (!this.get('splitPanel')) {
        this.changeEndModeDate(-1);
      }
    },
    startNextYear: function startNextYear() {
      this.changeStartModeDate(12);
    },
    startNextMonth: function startNextMonth() {
      this.changeStartModeDate(1);
    },
    endPrevYear: function endPrevYear() {
      this.changeEndModeDate(-12);
    },
    endPrevMonth: function endPrevMonth() {
      this.changeEndModeDate(-1);
    },
    endNextYear: function endNextYear() {
      this.changeEndModeDate(12);
      if (!this.get('splitPanel')) {
        this.changeStartModeDate(12);
      }
    },
    endNextMonth: function endNextMonth() {
      this.changeEndModeDate(1);
      if (!this.get('splitPanel')) {
        this.changeStartModeDate(1);
      }
    },
    hover: function hover(date) {
      var me = this;
      var startDate = me.get('checkedStartDate');
      var endDate = me.get('checkedEndDate');

      if (!startDate || endDate) {
        return
      }

      var rangDate = '';
      if (!startDate
        || me.get('checkedEndDate')
        || getOffsetTime(parseDate(date)) < getOffsetTime(parseDate(startDate))
      ) {
        rangDate = '';
      } else {
        rangDate = date;
      }

      me.refresh(
        getOffsetTime(parseDate(startDate)),
        getOffsetTime(parseDate(rangDate))
      );
    },
    click: function click(date) {
      var me = this;
      var checkedStartDate = me.get('checkedStartDate');
      var checkedEndDate = me.get('checkedEndDate');

      if (!checkedStartDate || me.get('checkedEndDate')
        || getOffsetTime(parseDate(date)) < getOffsetTime(parseDate(checkedStartDate))
      ) {
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
      me.refresh(
        getOffsetTime(parseDate(checkedStartDate)),
        getOffsetTime(parseDate(checkedEndDate))
      );

      if (checkedStartDate && checkedEndDate) {
        me.fire(
          'change.daterange',
          {
            start: checkedStartDate,
            end: checkedEndDate
          }
        );
      }
    },
    refresh: function refresh(start, end) {
      var me = this;

      var startModeList = me.copy(me.get('startModeList'));
      var endModeList = me.copy(me.get('endModeList'));

      if (end) {
        Yox.array.each(
          startModeList,
          function (arr) {
            Yox.array.each(
              arr,
              function (item) {
                var itemTime = getOffsetTime(parseDate(item));
                item.isRangeDate
                  = itemTime < end
                  && itemTime > start;
                item.isCheckedDate
                  = itemTime == end || itemTime == start;
              }
            );
          }
        );
        Yox.array.each(
          endModeList,
          function (arr) {
            Yox.array.each(
              arr,
              function (item) {
                var itemTime = getOffsetTime(parseDate(item));
                item.isRangeDate
                  = itemTime < end
                  && itemTime > start;
                item.isCheckedDate
                  = itemTime == end || itemTime == start;
              }
            );
          }
        );
      }
      else if (start) {
        Yox.array.each(
          startModeList,
          function (arr) {
            Yox.array.each(
              arr,
              function (item) {
                item.isCheckedDate
                  = getOffsetTime(parseDate(item)) == start;
                item.isRangeDate = false;
              }
            );
          }
        );
        Yox.array.each(
          endModeList,
          function (arr) {
            Yox.array.each(
              arr,
              function (item) {
                item.isCheckedDate
                  = getOffsetTime(parseDate(item)) == start;
                item.isRangeDate = false;
              }
            );
          }
        );
      }

      me.set({
        startModeList: startModeList,
        endModeList: endModeList
      });
    },
    getDataSource: function getDataSource(start, end, date, checkedStartDate, checkedEndDate) {
      var data = [];
      date = simplifyDate(date);

      var checkedStart = getOffsetTime(
        parseDate(checkedStartDate)
      );
      var checkedEnd = getOffsetTime(
        parseDate(checkedEndDate)
      );

      for (var time = start, item = (void 0); time <= end; time += DAY) {
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
      return data
    },
    createRenderData: function createRenderData(date, checkedStartDate, checkedEndDate) {
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
      var list = me.getDataSource(
        startDate,
        endDate,
        date,
        checkedStartDate,
        checkedEndDate
      );
      return formatList(list)
    }
  },

  watchers: {
    value: function value(value$1) {
      var checkedStartDate = simplifyDate(value$1[ 0 ]);
      var checkedEndDate = simplifyDate(value$1[ 1 ]);
      var startModeList = this.createRenderData(
        this.get('startModeDate'),
        checkedStartDate,
        checkedEndDate
      );
      var endModeList = this.createRenderData(
        this.get('endModeDate'),  
        checkedStartDate, 
        checkedEndDate
      );
      this.set({
        checkedStartDate: checkedStartDate,
        checkedEndDate: checkedEndDate,
        startModeList: startModeList,
        endModeList: endModeList
      });
    }
  },

  afterMount: function afterMount() {

    var me = this;
    var startModeDate = me.get('startDate') ? me.get('startDate') : new Date();
    var endModeDate = offsetMonth(startModeDate, 1);
    var startModeList = me.createRenderData(
      startModeDate, 
      me.get('checkedStartDate'), 
      me.get('checkedEndDate')
    );
    var endModeList = me.createRenderData(
      endModeDate,  
      me.get('checkedStartDate'), 
      me.get('checkedEndDate')
    );

    var value = me.get('value');
    if (value) {
      var checkedStartDate = simplifyDate(value[ 0 ]);
      var checkedEndDate = simplifyDate(value[ 1 ]);
      me.set({
        checkedStartDate: checkedStartDate,
        checkedEndDate: checkedEndDate
      });
      me.fire(
        'change.daterange',
        {
          start: checkedStartDate,
          end: checkedEndDate
        }
      );
    }

    me.set({
      startModeDate: startModeDate,
      endModeDate: endModeDate,
      startModeList: startModeList,
      endModeList: endModeList
    });

  }
};

var template$x = "<div class=\"bell-datepicker-week\n  {{#if className}} {{className}}{{/if}}\n\"{{#if style}} {{style}}{{/if}}>\n\n  <div class=\"bell-datepicker-header\">\n    <span class=\"bell-datepicker-header-button\" on-click=\"prevYear()\">\n      <Icon name=\"arrow-back\" />\n      <Icon name=\"arrow-back\" />\n    </span>\n\n    <span class=\"bell-datepicker-header-button\" on-click=\"prevMonth()\">\n      <Icon name=\"arrow-back\" />\n    </span>\n\n    <span class=\"bell-text-medium\">\n      {{currentYear}} 年 {{currentMonth}} 月\n    </span>\n\n    <span class=\"bell-datepicker-header-button\" on-click=\"nextMonth()\">\n      <Icon name=\"arrow-forward\" />\n    </span>\n\n    <span class=\"bell-datepicker-header-button\" on-click=\"nextYear()\">\n      <Icon name=\"arrow-forward\" />\n      <Icon name=\"arrow-forward\" />\n    </span>\n  </div>\n\n  <div class=\"bell-datepicker-body\">\n    <div class=\"bell-datepicker-weeks\">\n      {{#each weeks}}\n        <span class=\"bell-datepicker-col bell-text-sub\">\n          {{this}}\n        </span>\n      {{/each}}\n    </div>\n    <div class=\"bell-datepicker-days\">\n      {{#each dateList:index}}\n        <div class=\"bell-datepicker-row\n        {{#if checkedIndex == index}} bell-datepicker-row-checked{{/if}}\n        \" on-click=\"click(this)\">\n          {{#each this:key}}\n            <span\n              class=\"bell-datepicker-col\n              {{#if isCurrentMonth}} bell-datepicker-col-current-month{{/if}}\n              {{#if isPrevMonth}} bell-datepicker-col-prev-month{{/if}}\n              {{#if isLastMonth}} bell-datepicker-col-last-month{{/if}}\n              {{#if isCurrentDate}} bell-datepicker-col-checked{{/if}}\"\n            >\n              {{date}}\n            </span>\n          {{/each}}\n        </div>\n      {{/each}}\n    </div>\n  </div>\n\n</div>";

var DateWeek = {

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

  template: template$x,

  data: function data() {
    return {
      weeks: WEEKS,
      dateList: [],
      modeDate: this.get('startDate') ? this.get('startDate') : new Date(),
      checkedIndex: 0,
      checkedDateTime: -1
    }
  },

  computed: {
    currentYear: function currentYear() {
      return simplifyDate(this.get('modeDate')).year
    },
    currentMonth: function currentMonth() {
      return simplifyDate(this.get('modeDate')).month
    }
  },

  methods: {
    changeDate: function changeDate(offset) {
      var me = this;
      var date = me.get('modeDate');
      date = offsetMonth(date, offset);
      me.set({
        checkedIndex: -1,
        modeDate: date,
        dateList: me.createRenderData(
          date,
          me.get('checkedDateTime')
        )
      });
    },
    prevYear: function prevYear() {
      this.changeDate(-12);
    },
    prevMonth: function prevMonth() {
      this.changeDate(-1);
    },
    nextYear: function nextYear() {
      this.changeDate(12);
    },
    nextMonth: function nextMonth() {
      this.changeDate(1);
    },
    click: function click(date) {
      this.fire(
        'change.week',
        {
          start: date[ 0 ],
          end: date[ date.length - 1 ]
        }
      );
      this.refresh(
        getOffsetTime(parseDate(date[ 0 ]))
      );
    },
    refresh: function refresh(start) {
      var me = this;
      var dateList = me.get('dateList');
      var checkedIndex = '';
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
    getDatasource: function getDatasource(start, end, date, checkedDateTime) {
      var data = [];
      date = simplifyDate(date);
      for (var time = start, item = (void 0); time <= end; time += DAY) {
        item = simplifyDate(time);
        item.isCurrentDate = checkedDateTime && checkedDateTime === getOffsetTime(parseDate(item));
        item.isPrevMonth = item.month < date.month;
        item.isCurrentMonth = item.month == date.month;
        item.isLastMonth = item.month > date.month;
        data.push(item);
      }
      return data

    },
    createRenderData: function createRenderData(modeDate, checkedDateTime) {
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
      return me.format(list)
    },
    format: function format(list) {
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
      return result
    }
  },

  afterMount: function afterMount() {
    var me = this;
    var today = new Date();
    var date = me.get('modeDate');
    date = date ? date : today;
    me.set({
      modeDate: date,
      dateList: me.createRenderData(
        date,
        me.get('checkedDateTime')
      )
    });
    var start = me.get('value') ? me.get('value')[ 0 ] : UNDEFINED;
    if (start) {
      me.refresh(
        getOffsetTime(start)
      );
      this.fire(
        'change.week',
        {
          start: simplifyDate(start),
          end: simplifyDate(me.get('value')[ 1 ])
        }
      );
    }
  }
};

var template$y = "<div class=\"bell-datepicker-month\n  {{#if className}} {{className}}{{/if}}\n\"{{#if style}} {{style}}{{/if}}>\n\n  <div class=\"bell-datepicker-header\">\n    <span class=\"bell-datepicker-header-button\" on-click=\"this.decrease('modeYear', 10)\">\n      <Icon name=\"arrow-back\" />\n      <Icon name=\"arrow-back\" />\n    </span>\n\n    <span class=\"bell-datepicker-header-button\" on-click=\"this.decrease('modeYear', 1)\">\n      <Icon name=\"arrow-back\" />\n    </span>\n\n    <span class=\"bell-text-medium\">\n      {{modeYear}} 年\n    </span>\n\n    <span class=\"bell-datepicker-header-button\" on-click=\"this.increase('modeYear', 1)\">\n      <Icon name=\"arrow-forward\" />\n    </span>\n\n    <span class=\"bell-datepicker-header-button\" on-click=\"this.increase('modeYear', 10)\">\n      <Icon name=\"arrow-forward\" />\n      <Icon name=\"arrow-forward\" />\n    </span>\n  </div>\n\n  <div class=\"bell-datepicker-body\">\n    {{#each months:index}}\n      <span\n        class=\"bell-datepicker-col\n        {{#if checkedMonth == index && checkedYear == modeYear}} bell-datepicker-col-checked{{/if}}\"\n        on-click=\"click(index)\"\n      >\n        {{this}}\n      </span>\n    {{/each}}\n  </div>\n\n</div>";

var DateMonth = {

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

  template: template$y,

  data: function data() {
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
    }
  },

  watchers: {
    value: function value(value$1) {
      var checkedMonth = '';
      var checkedYear = '';
      if (value$1) {
        checkedYear = value$1.getFullYear();
        checkedMonth = value$1.getMonth();
      }
      this.set({
        checkedYear: checkedYear,
        checkedMonth: checkedMonth
      });
    }
  },

  methods: {
    click: function click(month) {

      var year = this.get('modeYear');

      this.set({
        checkedYear: year,
        checkedMonth: month
      });

      this.fire(
        'change.month',
        {
          year: year,
          month: month + 1
        }
      );

    }
  },

  afterMount: function afterMount() {
    if (this.get('value')) {
      this.fire(
        'change.month',
        {
          year: this.get('checkedYear'),
          month: this.get('checkedMonth') + 1
        }
      );
    }
  }
};

var template$z = "<div class=\"bell-datepicker-year\n  {{#if className}} {{className}}{{/if}}\n\"{{#if style}} {{style}}{{/if}}>\n\n  <div class=\"bell-datepicker-header\">\n    <span class=\"bell-datepicker-header-button\" on-click=\"prev()\">\n      <Icon name=\"arrow-back\" />\n    </span>\n\n    <span class=\"bell-text-medium\">\n      {{modeYear}} 年 ~ {{modeYear + 12}} 年\n    </span>\n\n    <span class=\"bell-datepicker-header-button\" on-click=\"next()\">\n      <Icon name=\"arrow-forward\" />\n    </span>\n  </div>\n\n  <div class=\"bell-datepicker-body\">\n    {{#each years:index}}\n      <span\n        class=\"bell-datepicker-col\n        {{#if checkedYear == this}} bell-datepicker-col-checked{{/if}}\"\n        on-click=\"click(this)\"\n      >\n        {{this}}\n      </span>\n    {{/each}}\n  </div>\n\n</div>";

var DateYear = {

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

  template: template$z,

  data: function data() {
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
    }
  },

  watchers: {
    value: function value(value$1) {
      var checkedYear = '';
      if (value$1) {
        checkedYear = value$1.getFullYear();
      }
      this.set({ checkedYear: checkedYear });
    }
  },

  methods: {
    prev: function prev() {
      this.decrease('modeYear', 12);
      this.getYearList(this.get('modeYear'));
    },
    next: function next() {
      this.increase('modeYear', 12);
      this.getYearList(this.get('modeYear'));
    },
    click: function click(year) {
      this.set({
        checkedYear: year
      });
      this.fire(
        'change.year',
        {
          year: year
        }
      );
    },
    getYearList: function getYearList(startYear) {
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

  afterMount: function afterMount() {
    this.getYearList(this.get('modeYear'));
    if (this.get('value')) {
      this.fire(
        'change.year',
        {
          year: this.get('checkedYear')
        }
      );
    }
  }
};

var template$A = "<div \nclass=\"bell-datepicker\n{{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n\n  <Dropdown height=\"{{autoClose ? 230 : 320}}\" \n    className=\"bell-datepicker-dropdown\" \n    placement=\"{{placement}}\" \n    trigger=\"custom\" \n    visible=\"{{isOpen}}\"\n  >\n\n    <div class=\"bell-datepicker-el\">\n      <slot name=\"children\">\n        <Input placeholder=\"请选择日期...\"\n          model=\"formatDate\"\n          type=\"input\"\n          size=\"{{size}}\"\n          on-focus=\"focus()\"\n          suffix=\"calendar\"\n          clearable=\"{{clearable}}\"\n        />\n      </slot>\n    </div>\n\n    <template slot=\"list\">\n\n      {{#if shortcuts}}\n      <div class=\"bell-datepicker-sidebar\">\n        {{#each shortcuts}}\n          <div class=\"bell-datepicker-shortcut\" on-click=\"shortcutClick(this)\">\n            {{text}}\n          </div>\n        {{/each}}\n      </div>\n      {{/if}}\n\n      <div class=\"bell-datepicker-poper\n        {{#if shortcuts}} bell-datepicker-poper-with-sidebar{{/if}}\n      \">\n        {{#if type == 'date'}}\n          <Date multiple=\"{{multiple}}\" \n            startDate=\"{{startDate}}\" \n            {{#if multiple}}\n              selected=\"{{value}}\"\n            {{else}}\n              value=\"{{value}}\"\n            {{/if}}\n            disabledDate=\"{{disabledDate}}\"\n          />\n        {{else if type == 'dateRange'}}\n          <DateRange \n            splitPanel=\"{{splitPanel}}\" \n            startDate=\"{{startDate}}\" \n            value=\"{{value}}\"\n            disabledDate=\"{{disabledDate}}\"\n          />\n        {{else if type == 'week'}}\n          <DateWeek \n            startDate=\"{{startDate}}\"\n            value=\"{{value}}\"  \n          />\n        {{else if type == 'year'}}\n          <DateYear\n            startDate=\"{{startDate}}\"\n            value=\"{{value}}\"   \n          />\n        {{else if type == 'month'}}\n          <DateMonth \n            startDate=\"{{startDate}}\"\n            value=\"{{value}}\"   \n          />\n        {{/if}}\n      </div>\n\n      {{#if autoClose}}\n      <div class=\"bell-datepicker-confirm\">\n        <Button size=\"small\" type=\"primary\" on-click=\"ok()\">\n          确认\n        </Button>\n        <Button size=\"small\" on-click=\"clear()\">\n          清空\n        </Button>\n      </div>\n      {{/if}}\n    </template>\n\n  </Dropdown>\n\n</div>\n\n";

var DAY_MAP = [ '日', '一', '二', '三', '四', '五', '六' ];

var DatePicker = {

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

  template: template$A,

  data: function data() {
    return {
      date: NULL,
      start: NULL,
      end: NULL,

      visible: FALSE
    }
  },

  computed: {
    autoClose: function autoClose() {
      return this.get('multiple') || this.get('confirm')
    },
    isOpen: function isOpen() {
      return this.get('visible') || this.get('open')
    }
  },

  components: {
    Date: Date$1,
    DateRange: DateRange,
    DateWeek: DateWeek,
    DateMonth: DateMonth,
    DateYear: DateYear
  },

  events: {
    'clear.input': function (event) {
      this.fire(
        'clear.datepicker',
        true
      );
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
    change: function change(_, data) {
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
    shortcutClick: function shortcutClick(data) {
      var date = data.value && data.value();
      if (!date) {
        Yox.logger.warn("shortcuts value 传值错误");
        return
      }
      if (!Yox.is.array(date)) {
        date = simplifyDate(date);
        this.dateChange(date);
      }
      else {
        this.dateRangeChange({
          start: simplifyDate(date[ 0 ]),
          end: simplifyDate(date[ 1 ])
        });
      }
      this.set({ 
        value: date
      });
      data.onClick && data.onClick();
    },

    focus: function focus() {
      this.set('visible', true);
    },

    close: function close() {
      this.set('visible', false);
    },

    formatDate: function formatDate(date) {

      if (!date) {
        return ''
      }
      var argsLen = arguments.length;
      var result = '';
      var me = this;
      var startFormat = me.get('formatText').split('$')[0];
      var endFormat = me.get('formatText').split('$')[1];

      if (argsLen > 1) {
        var start = arguments[0];
        var end = arguments[1];

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
          .replace(/yyyy/i, date.year)
          .replace(/yy/i, +('' + date.year).substr(2))
          .replace(/MM/, lpad(date.month))
          .replace(/M/, date.month)
          .replace(/dd/i, lpad(date.date))
          .replace(/d/i, date.date)
          .replace(/w/, DAY_MAP[date.day]);
      }
      return result.trim()
    },

    dateChange: function dateChange(date) {

      var me = this;
      var multiple = me.get('multiple');

      if (!multiple) {
        var formatDate = me.get('formatDate');
        var newFormateDate = me.formatDate(date);
        if (newFormateDate !== formatDate) {
          me.fire(
            'change.datepicker',
            {
              value: {
                formatDate: newFormateDate,
                date: date,
              },
              oldValue: {
                formatDate: formatDate,
                date: me.get('date')
              }
            }
          );
        }
        me.set({
          date: date,
          formatDate: newFormateDate
        });
      }
      else {
        var formatDateArray = [];
        var selectedDates = me.get('selectedDates');
        selectedDates.forEach(function (item) {
          var dateArray = item.split('/');
          var date = {
            year: dateArray[ 0 ],
            month: dateArray[ 1 ],
            date: dateArray[ 2 ],
            day: dateArray[ 3 ],
          };
          formatDateArray.push(
            me.formatDate(date)
          );
        });
        me.set({
          formatDate: formatDateArray.join(', ')
        });
      }
      !me.get('autoClose') && me.close();
    },

    dateRangeChange: function dateRangeChange(data) {
      
      var end = data.end;

      if (!end) {
        return
      }

      var me = this;
      var start = data.start;

      me.fire(
        'change.datepicker',
        {
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
        }
      );

      me.set({
        start: start,
        end: end,
        formatDate: me.formatDate(start, end)
      });
      !me.get('autoClose') && me.close();
    },
    clear: function clear() {
      this.set('formatDate', '');
      this.fire('clear.datepicker', true);
      this.fire('clear.datepicker');
      this.close();
    },
    ok: function ok() {
      this.close();
      this.fire('ok.datepicker');
    }
  },

  afterMount: function afterMount() {
    var me = this;
    if (!me.get('formatText')) {
      var formatText = '';
      switch (me.get('type')) {
        case 'date':
          formatText = 'YYYY/MM/DD';
          break
        case 'dateRange':
          formatText = 'YYYY/MM/DD $- YYYY/MM/DD';
          break
        case 'week':
          formatText = 'YYYY/MM/DD $- YYYY/MM/DD';
          break
        case 'year':
          formatText = 'YYYY';
          break
        case 'month':
          formatText = 'YYYY/MM';
          break
      }
      me.set({ formatText: formatText });
    }

    me.documentClickHandler = function (e) {
      var element = me.$el;
      var target = e.originalEvent.target;
      if (contains(element, target)) {
        return
      }
      me.close();
    };

    Yox.dom.on(
      document,
      'click',
      me.documentClickHandler
    );

  },

  beforeDestroy: function beforeDestroy() {
    Yox.dom.off(
      document,
      'click',
      this.documentClickHandler
    );
  }
};

var TooltipTpl = "<div class=\"bell-tooltip\n  {{#if className}} {{className}}{{/if}}\n  {{#if isShow}} bell-show{{/if}}\n  {{#if isHover}} bell-hover{{/if}}\n\"{{#if style}} style=\"{{style}}\"{{/if}}>\n  <div class=\"bell-tooltip-el\"\n    on-mouseover=\"hover()\"\n    on-mouseleave=\"leave()\"\n    on-click=\"click()\"\n  >\n    {{#if hasSlot('children')}}\n      <slot name=\"children\" />\n    {{/if}}\n  </div>\n\n  <div class=\"bell-tooltip-popper\n    {{#if disabled}} bell-tooltip-disabled{{/if}}\"\n    data-placement=\"{{placement ? placement : 'bottom'}}\"\n  >\n    <div class=\"bell-tooltip-arrow\"></div>\n    <div class=\"bell-tooltip-inner\"\n    style=\"{{#if maxWidth}}max-width: {{maxWidth}}px{{/if}};\n      {{#if maxHeight}} max-height: {{maxHeight}}px{{/if}};\n    \">\n      {{content}}\n    </div>\n  </div>\n</div>";

var timer;

var Tooltip = {

  template: TooltipTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    content: {
      type: 'string'
    },
    placement: {
      type: 'string'
    },
    disabled: {
      type: ['string', 'boolean']
    },
    delay: {
      type: 'numeric'
    },
    mode: {
      type: 'string'
    },
    maxWidth: {
      type: 'numeric'
    },
    maxHeight: {
      type: 'numeric'
    },
    offsetX: {
      type: 'numeric'
    },
    offsetY: {
      type: 'numeric'
    }
  },

  events: {
    hasTooltipItem: function hasTooltipItem(event, data) {
      var me = this;
      var element = me.$el.getElementsByClassName('bell-tooltip-el')[0];
      var content = element.getElementsByClassName('bell-tooltip-inner-content');
      var inner = me.$el.getElementsByClassName('bell-tooltip-inner')[0];
      if (content.length) {
        for (var i = 0; i < content.length; i++) {
          inner.appendChild(content[i]);
        }
      }
    }
  },

  data: function data() {
    return {
      isShow: false,
      isHover: false,
    }
  },

  watchers: {
    disabled: function disabled(disabled$1) {
      this.setPos();
    }
  },

  methods: {
    setPos: function setPos() {
      var me = this;
      var offsetX = me.get('offsetX') ? +me.get('offsetX') : 0;
      var offsetY = me.get('offsetY') ? +me.get('offsetY') : 0;

      var poperElement = me.$el.getElementsByClassName('bell-tooltip-popper')[0];
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

      if (Yox.is.number(offsetX)) {
        marginLeft += offsetX;
      }
      if (Yox.is.number(offsetY)) {
        marginTop += offsetY;
      }

      poperElement.style.marginLeft = marginLeft + 'px';
      poperElement.style.marginTop = marginTop + 'px';
    },

    leave: function leave() {
      var me = this;
      if (me.get('mode') && me.get('mode') == 'click') {
        return;
      }

      me.set({
        isShow: false,
        isHover: false
      });
    },

    hover: function hover() {
      var me = this;
      if (me.get('mode') && me.get('mode') == 'click') {
        return;
      }
      var delay = me.get('delay') ? +me.get('delay') : 0;
      me.set({
        isHover: true
      });
      Yox.nextTick(function () {
        me.setPos();
        timer = setTimeout(
          function () {
            if (me.get('isHover')) {
              me.set({
                isShow: true
              });
            }
          },
          delay
        );
      });
    },

    click: function click() {
      var me = this;
      if (!me.get('mode') || me.get('mode') == 'hover') {
        return;
      }

      me.set({
        isShow: !me.get('isShow')
      });

      Yox.nextTick(function () {
        me.setPos();
      });
    }
  },

  beforeDestroy: function beforeDestroy() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
};

var TooltipItemTpl = "<div class=\"bell-tooltip-inner-content\n  {{#if className}} {{className}}{{/if}}\n\"{{#if style}} style=\"{{style}}\"{{/if}}>\n\n  {{#if hasSlot('children')}}\n    <slot name=\"children\" />\n  {{/if}}\n\n</div>";

var TooltipItem = {
  template: TooltipItemTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
  },

  afterMount: function afterMount() {
    var me = this;
    me.fire(
      'hasTooltipItem'
    );
  }
};

var template$B = "<div \nclass=\"bell-collapse\n  {{#if bordered}} bell-collapse-bordered{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} {{style}}{{/if}}\n>\n  <slot name=\"children\" />\n</div>";

var Collapse = {

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

  template: template$B,

  watchers: {
    accordion: function accordion(accordion$1) {
      this.fire(
        'accordionChanged',
        { accordion: accordion$1 },
        TRUE
      );
    }
  },

  events: {
    panelOpen: function panelOpen(event, data) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        this.fire(
          'panelOpen',
          {
            name: data.name,
            isOpen: data.isOpen
          },
          TRUE
        );
      }
    }
  }

};

var template$C = "<div \nclass=\"bell-collapse-item\n  {{#if isOpen}} bell-collapse-item-open{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} {{style}}{{/if}}\n>\n\n  <div class=\"bell-collapse-header\" on-click=\"click()\">\n    <slot name=\"icon\">\n      {{#if showIcon}}\n      <Icon \n        type=\"arrow-down\" \n        className=\"bell-collapse-header-icon\" \n      />\n      {{/if}}\n    </slot>\n    {{title}}\n\n    {{#if hasSlot('extra')}}\n      <div class=\"bell-collapse-header-extra\">\n        <slot name=\"extra\"></slot>\n      </div>\n    {{/if}}\n  </div>\n\n  <div ref=\"panelContent\" class=\"bell-collapse-content\">\n    <div class=\"bell-collapse-content-box\">\n      <slot name=\"children\" />\n    </div>\n  </div>\n\n</div>";

var Panel = {

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

  template: template$C,

  data: function data() {
    return {
      isOpen: FALSE,
      accordion: FALSE,
    }
  },

  events: {
    accordionChanged: function accordionChanged(_, data) {
      this.set('accordion', data.accordion);
    },

    panelOpen: function panelOpen(event, data) {
      if (event.phase === Yox.Event.PHASE_DOWNWARD) {
        var me = this;
        if (data.name === me.get('name')) {
          data.isOpen ? me.open() : me.close();
        }
        else if (me.get('accordion')) {
          me.close();
        }
      }
    }
  },

  methods: {

    click: function click() {
      this.fire(
        'panelOpen',
        {
          name: this.get('name'),
          isOpen: !this.get('isOpen')
        }
      );
    },

    close: function close() {
      var me = this;
      var element = me.$refs.panelContent;
      element.style.height = element.clientHeight + 'px';

      me.closeTimer = setTimeout(
        function () {
          element.style.height = 0;
          me.initTimer = setTimeout(
            function () {
              element.style.height = '';
              me.set('isOpen', FALSE);
            },
            100
          );
        }
      );
    },

    open: function open() {
      var me = this;
      me.set('isOpen', TRUE);

      me.nextTick(function () {
        var element = me.$refs.panelContent;
        var height = element.clientHeight;
        element.style.height = 0;

        me.openTimer = setTimeout(
          function () {
            element.style.height = height + 'px';
            me.initTimer = setTimeout(
              function () {
                element.style.height = '';
              },
              100
            );
          }
        );
      });
    }
  },

  afterMount: function afterMount () {
    var collapse = findComponentUpward(this, 'bell-collapse');
    this.set('accordion', collapse.get('accordion'));
    this.watch(
      'isActive',
      {
        watcher: function watcher(isActive) {
          if (isActive == NULL) {
            return
          }
          this.fire(
            'panelOpen',
            {
              name: this.get('name'),
              isOpen: isActive 
            }
          );
        },
        immediate: TRUE
      }
    );
  },

  beforeDestroy: function beforeDestroy() {
    var me = this;
    clearTimeout(me.closeTimer);
    clearTimeout(me.initTimer);
    clearTimeout(me.openTimer);
  }
};

var template$D = "<div \nclass=\"bell-card\n{{#if bordered}} bell-card-bordered{{/if}}\n{{#if hoverDisabled}} bell-card-hover-disabled{{/if}}\n{{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n  <slot name=\"children\" />\n</div>";

var Card = {
  
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

  template: template$D
};

var template$E = "<div \nclass=\"bell-card-header\n{{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n\n  <slot name=\"avatar\" />\n\n  <div class=\"bell-card-header-detail\">\n    <div class=\"bell-card-header-title\">\n      <slot name=\"title\" />\n      <slot name=\"children\" />\n    </div>\n    \n    {{#if hasSlot('subTitle')}}\n      <div class=\"bell-card-header-sub-title\">\n        <slot name=\"subTitle\" />\n      </div>\n    {{/if}}\n  </div>\n\n  {{#if hasSlot('extra')}}\n    <span class=\"bell-card-header-extra\">\n      <slot name=\"extra\" />\n    </span>\n  {{/if}}\n\n  <slot name=\"children\" />\n\n</div>";

var CardHeader = {

  propTypes: {
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    },
  },

  template: template$E

};

var template$F = "<div \nclass=\"bell-card-media\n{{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n\n  {{#if hasSlot('children')}}\n    <slot name=\"children\" />\n  {{/if}}\n\n  <div class=\"bell-card-media-detail\">\n\n    {{#if title}}\n      <div class=\"bell-card-media-title\">\n        {{title}}\n      </div>\n    {{/if}}\n\n    {{#if subTitle}}\n      <div class=\"bell-card-media-sub-title\">\n        {{subTitle}}\n      </div>\n    {{/if}}\n\n  </div>\n</div>";

var CardMedia = {

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

  template: template$F
};

var template$G = "<div \nclass=\"bell-card-body\n{{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n  <slot name=\"children\" />\n</div>";

var CardBody = {
  propTypes: {
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },
  template: template$G
};

var template$H = "<div \nclass=\"bell-card-actions\n{{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n  <slot name=\"children\" />\n</div>";

var CardActions = {
  
  propTypes: {
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template: template$H

};

var template$I = "<ul \nclass=\"bell-list\n  {{#if border}} bell-list-border{{/if}}\n  {{#if size}} bell-list-{{size}}{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n  {{#if hasSlot('subHeader')}}\n  <div class=\"bell-list-header\">\n    <slot name=\"subHeader\" />\n  </div>\n  {{/if}}\n\n  {{#if loading}}\n  <Spinner size=\"large\" fix></Spinner>\n  {{/if}}\n\n  <slot name=\"children\">\n    <div class=\"bell-list-empty\">\n      <slot name=\"empty\"> \n        <p class=\"bell-list-empty-description\">\n          暂无数据\n        </p>\n      </slot>\n    </div>\n  </slot>\n</ul>";

var List = {
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

  template: template$I
};

var template$J = "<li \nclass=\"bell-list-item\n  {{#if className}} {{className}}{{/if}}\n  {{#if hasSlot('header')}} bell-list-item-has-header{{/if}}\n  {{#if hasSlot('footer')}} bell-list-item-has-footer{{/if}}\n\"\non-click=\"itemClick(hasSlot('nested'))\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n\n  <div class=\"bell-list-item-content\n    {{#if !disableHover}} bell-list-item-content-hover{{/if}}\n    {{#if active}} bell-active{{/if}}\n  \">\n    {{#if hasSlot('header')}}\n    <div class=\"bell-list-item-header\">\n      <slot name=\"header\" />\n    </div>\n    {{/if}}\n\n    {{#if hasSlot('footer')}}\n    <div class=\"bell-list-item-footer\">\n      <slot name=\"footer\" />\n    </div>\n    {{/if}}\n\n    {{#if hasSlot('children')}}\n    <div class=\"bell-list-item-text\">\n      <slot name=\"children\" />\n    </div>\n    {{/if}}\n  </div>\n\n  {{#if hasSlot('nested')}}\n  <div class=\"bell-list-item-nested{{#if nestedIsShow}} bell-show{{/if}}\">\n    <slot name=\"nested\" />\n  </div>\n  {{/if}}\n\n</li>";

var Item = {
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

  template: template$J,

  data: function data() {
    return {
      nestedIsShow: FALSE
    }
  },

  methods: {
    itemClick: function itemClick(hasNested) {
      this.fire('click.item');
      this.toggle('nestedIsShow');
    }
  }
};

var template$K = "<div \nclass=\"bell-divider bell-divider-{{type}} \n{{#if hasSlot('children')}} bell-divider-with-text-{{align}}{{/if}}\n{{#if dashed}} bell-divider-dashed{{/if}}\n{{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n  {{#if hasSlot('children')}}\n    <div class=\"bell-divider-text\">\n      <slot name=\"children\" />\n    </div> \n  {{/if}}\n</div>";

var Divider = {
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
  
  template: template$K
};

var template$L = "<div \nclass=\"bell-circle\n  {{#if dashboard}} bell-circle-dashboard{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\"\nstyle=\"width: {{size}}px;\n  height: {{size}}px;\n  {{#if style}} {{style}}{{/if}}\n\"\n>\n  <svg viewBox=\"0 0 100 100\">\n    <path d=\"{{path}}\"\n      stroke=\"{{trailColor}}\"\n      stroke-width=\"{{trailWidth}}\"\n      fill-opacity=\"0\"\n      style=\"{{trailStyle}}\"\n    />\n    <path d=\"{{path}}\"\n      stroke-linecap=\"{{strokeLinecap}}\"\n      stroke=\"{{strokeColor}}\"\n      stroke-width=\"{{strokeWidth}}\"\n      fill-opacity=\"0\"\n      style=\"{{pathStyle}}\"\n    />\n  </svg>\n  <div class=\"bell-circle-inner\">\n    {{#if hasSlot('children')}}\n      <slot name=\"children\" />\n    {{/if}}\n  </div>\n</div>";

var Circle = {

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

  template: template$L,

  computed: {
    computedStrokeWidth: function computedStrokeWidth() {
      return this.get('percent') === 0 && this.get('dashboard') ? 0 : this.get('strokeWidth')
    },
    trailStyle: function trailStyle() {
      var style = [];
      var len = this.get('len');
      if (this.get('dashboard')) {
        style = [
          ("stroke-dasharray: " + (len - 75) + "px " + len + "px"),
          ("stroke-dashoffset: -" + (75 / 2) + "px"),
          'transition: stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        ];
      }
      return style.join(';')
    },
    pathStyle: function pathStyle() {
      var style = [];
      var percent = this.get('percent');
      var len = this.get('len');
      if (this.get('dashboard')) {
        style = [
          ("stroke-dasharray: " + ((percent / 100) * (len - 75)) + "px " + len + "px"),
          ("stroke-dashoffset: -" + (75 / 2) + "px"),
          'transition: stroke-dashoffset .3s ease 0s, stroke-dasharray .6s ease 0s, stroke .6s, stroke-width .06s ease .6s'
        ];
      } else {
        style = [
          ("stroke-dasharray: " + len + "px " + len + "px"),
          ("stroke-dashoffset: " + (((100 - percent) / 100 * len)) + "px"),
          'transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
        ];
      }
      return style.join(';')
    },
    radius: function radius() {
      return 50 - this.get('strokeWidth') / 2
    },
    len: function len() {
      return Math.PI * 2 * this.get('radius')
    },
    path: function path() {
      var radius = this.get('radius');
      if (this.get('dashboard')) {
        return ("M 50,50 m 0," + radius + "\n        a " + radius + "," + radius + " 0 1 1 0,-" + (2 * radius) + "\n        a " + radius + "," + radius + " 0 1 1 0," + (2 * radius))
      } else {
        return ("M 50,50 m 0,-" + radius + "\n        a " + radius + "," + radius + " 0 1 1 0," + (2 * radius) + "\n        a " + radius + "," + radius + " 0 1 1 0,-" + (2 * radius))
      }
    }
  }
};

var template$M = "<div \nclass=\"bell-progress\n  {{#if type}} {{type}}{{/if}}\n  {{#if active}} active{{/if}}\n  {{#if vertical}} bell-progress-vertical{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n  <div class=\"bell-progress-outer\">\n    <div class=\"bell-progress-inner\"\n      style=\"{{#if vertical}} width: {{strokeWidth}}px;{{/if}}\n    \">\n      <div class=\"bell-progress-bg\" style=\"\n        {{#if !vertical}}\n          width: {{percent}}%;\n          height: {{strokeWidth}}px;\n        {{else}}\n          height: {{percent}}%;\n          width: {{strokeWidth}}px;\n        {{/if}}\n      \"></div>\n    </div>\n  </div>\n\n  {{#if !hideInfo}}\n    <span class=\"bell-progress-inner-text\">\n      <slot name=\"children\">\n        {{percent}}%\n      </slot>\n    </span>\n  {{/if}}\n</div>";

var Progress = {
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
  template: template$M
};

var SliderTpl = "<div class=\"bell-slider\n  {{#if className}} {{className}}{{/if}}\n  {{#if disabled}} bell-slider-disabled{{/if}}\n  {{#if type}} bell-slider-{{type}}{{/if}}\n  {{#if dragging}} dragging{{/if}}\n\"{{#if style}} style=\"{{style}}\" {{/if}}\n  on-blur=\"handleBlur($event)\"\n  on-focus=\"handleFocus($event)\"\n  on-touchstart=\"handleTouchStart($event)\"\n  on-touchend=\"handleTouchEnd($event)\"\n  on-touchcancel=\"handleTouchEnd($event)\"\n  on-mousedown=\"handleMouseDown($event)\"\n  on-mouseup=\"handleMouseUp($event)\"\n  on-mouseenter=\"handleMouseEnter($event)\"\n  on-mouseleave=\"handleMouseLeave($event)\"\n>\n\n  <input type=\"hidden\" disabled=\"{{disabled ? ' disabled' : ''}}\" model=\"value\">\n\n  <div class=\"bell-slider-bg\">\n    <div class=\"bell-slider-fill\"\n      style=\"{{fillStyle}}\"\n    ></div>\n\n    <div class=\"bell-slider-thumb\"\n      style=\"{{thumbStyle}}\"\n      title=\"值：{{value}}；占比：{{percent + '%'}}\"\n    >\n    </div>\n  </div>\n\n  <div class=\"bell-tooltip\n    {{#if dragging}} bell-show{{/if}}\n  \" style=\"{{tooltipStyle}}\">\n\n    <div ref=\"tooltip\" class=\"bell-tooltip-popper\" data-placement=\"top\">\n      <div class=\"bell-tooltip-arrow\"></div>\n      <div class=\"bell-tooltip-inner\">\n        {{percent}}%\n      </div>\n    </div>\n\n  </div>\n</div>";

var SLIDER_TOOLTIP_MARGIN_TOP = 68;
var SLIDER_TOOLTIP_MARGIN_LEFT = 29;

var Slider = {
  template: SliderTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    value: {
      type: ['number', 'array'],
      value: 40
    },
    // 最大值
    max: {
      type: 'number',
      value: 100
    },
    // 最小值
    min: {
      type: 'number',
      value: 0
    },
    // 最小步数
    step: {
      type: 'number',
      value: 1
    },
    disabled: {
      type: 'boolean',
      value: false
    },
    range: {
      type: 'boolean',
      value: false
    },
    type: {
      type: 'string'
    }
  },

  data: function data() {
    return {
      dragging: false
    }
  },

  computed: {
    percent: function percent() {
      var me = this;
      var range = me.get('max') - me.get('min');
      var percentNum = range > 0
        ? (me.get('value') - me.get('min')) / range * 100
        : 0;

      return percentNum > 100
        ? 100
        : (percentNum < 0 ? 0 : percentNum.toFixed(2));
    },

    fillStyle: function fillStyle() {
      return 'width: ' + this.get('percent') + '%';
    },

    tooltipStyle: function tooltipStyle() {
      var me = this;
      if (!me.$refs) {
        if (me.get('percent')) {
          return '';
        }
        return '';
      }

      return 'left: ' + me.get('percent') + '%;'
        + 'margin-left: -' + SLIDER_TOOLTIP_MARGIN_LEFT + 'px;'
        + 'top: -' + SLIDER_TOOLTIP_MARGIN_TOP + 'px;';
    },

    thumbStyle: function thumbStyle() {
      return 'left: ' + this.get('percent') + '%';
    },

    range: function range() {
      return this.get('max') - this.get('min');
    }
  },

  methods: {

    handleTouchStart: function handleTouchStart(event) {
      var me = this;
      if (me.get('disabled')) {
        return;
      }

      me.setValue(event);

      Yox.dom.on(
        document,
        'touchmove',
        me.handleTouchMove
      );
      Yox.dom.on(
        document,
        'touchup',
        me.handleTouchEnd
      );
      Yox.dom.on(
        document,
        'touchend',
        me.handleTouchEnd
      );
      Yox.dom.on(
        document,
        'touchcancel',
        me.handleTouchEnd
      );

      event.prevent();
      me.onDragStart(event);
    },

    handleTouchEnd: function handleTouchEnd(event) {
      var me = this;
      if (me.get('disabled')) {
        return;
      }
      Yox.dom.off(
        document,
        'touchmove',
        me.handleTouchMove
      );
      Yox.dom.off(
        document,
        'touchup',
        me.handleTouchEnd
      );
      Yox.dom.off(
        document,
        'touchend',
        me.handleTouchEnd
      );
      Yox.dom.off(
        document,
        'touchcancel',
        me.handleTouchEnd
      );
      event.prevent();
      me.onDragStop(event);
    },

    handleTouchMove: function handleTouchMove(event) {
      this.onDragUpdate(event);
    },

    handleDragMouseMove: function handleDragMouseMove(event) {
      this.onDragUpdate(event);
    },

    handleMouseDown: function handleMouseDown(event) {
      var me = this;
      if (me.get('disabled')) {
        return;
      }

      me.setValue(event);

      Yox.dom.on(
        document,
        'mousemove',
        me.handleDragMouseMove
      );
      Yox.dom.on(
        document,
        'mouseup',
        me.handleDragMouseEnd
      );

      event.prevent();
      me.onDragStart();
    },

    handleDragMouseEnd: function handleDragMouseEnd() {
      var me = this;
      if (me.get('disabled')) {
        return;
      }
      Yox.dom.off(
        document,
        'mousemove',
        me.handleDragMouseMove
      );
      Yox.dom.off(
        document,
        'mouseup',
        me.handleDragMouseEnd
      );
      me.onDragStop();
    },

    onDragStart: function onDragStart() {
      this.set({
        dragging: 1,
        active: 1
      });
      this.fire('dragStart');
    },

    onDragStop: function onDragStop() {
      this.set({
        dragging: 0,
        active: 0
      });
      this.fire('dragStop');
    },

    onDragUpdate: function onDragUpdate(event) {
      var me = this;
      if (me.get('draging')) {
        return;
      }
      me.set('draging', 1);

      window.requestAnimationFrame(function () {
        me.set('draging', 0);
        if (!me.get('disabled')) {
          me.setValue(event);
        }
      });
    },

    handleMouseUp: function handleMouseUp() {
      if (this.get('disabled')) {
        return;
      }
      this.set('active', 0);
    },

    handleMouseEnter: function handleMouseEnter() {
      if (this.get('disabled')) {
        return;
      }
      this.set('hover', 1);
    },

    handleMouseLeave: function handleMouseLeave() {
      if (this.get('disabled')) {
        return;
      }
      this.set('hover', 0);
    },

    setValue: function setValue(event) {

      event = event.originalEvent;
      var clientX = event.touches ? event.touches[0].clientX : event.clientX;

      var me = this;
      var element = me.$el;
      var oldValue = me.get('value');
      var elementLeft = element.getBoundingClientRect().left;
      var elementWidth = element.offsetWidth;
      var min = me.get('min');

      var value = 0;
      value = elementWidth && ((clientX - elementLeft) / elementWidth * me.get('range'));
      value = Math.round(value / me.get('step')) * me.get('step') + min;
      value = parseFloat(value.toFixed(5));

      value = value > me.get('max')
        ? me.get('max')
        : (value < min ? min : value);

      if (value !== oldValue) {
        me.set({
          value: value
        });
        me.fire(
          'change',
          {
            value: value,
            oldValue: oldValue
          }
        );
      }
    }

  },

  afterMount: function afterMount() {
    var me = this;

    me.handleDragMouseMove = me.handleDragMouseMove.bind(me);
    me.handleDragMouseEnd = me.handleDragMouseEnd.bind(me);
    me.handleTouchMove = me.handleTouchMove.bind(me);
    me.handleTouchEnd = me.handleTouchEnd.bind(me);
  }
};

var TagTpl = "<div class=\"bell-tag\n  {{#if className}} {{className}}{{/if}}\n  {{#if border}} bell-tag-border{{/if}}\n  {{#if size}} {{size}}{{/if}}\n  {{#if type}} {{type}}{{/if}}\n  {{#if checked}} bell-tag-checked{{/if}}\n\"{{#if style}} style=\"{{style}}\"{{/if}} on-click=\"click()\">\n  <div class=\"bell-tag-text\">\n    {{#if hasSlot('children')}}\n      <slot name=\"children\" />\n    {{/if}}\n\n    {{#if closable}}\n      <i class=\"bell-tag-close-icon bell-icon bell-icon-ios-close-empty\" on-click=\"close()\"></i>\n    {{/if}}\n  </div>\n</div>";

var Tag = {
  template: TagTpl,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    size: {
      type: 'string'
    },
    closable: {
      type: 'boolean',
      value: false
    },
    border: {
      type: 'boolean',
      value: false
    },
    type: {
      type: 'string'
    },
    checkable: {
      type: 'boolean',
      value: false
    },
    checked: {
      type: 'boolean',
      value: true
    }
  },

  watchers: {
    checked: function checked(value) {
      this.fire(
        'check',
        {
          value: value
        }
      );
    }
  },

  methods: {
    click: function click() {
      var me = this;
      if (!me.get('checkable')) {
        return;
      }
      me.toggle('checked');
    },
    close: function close() {
      this.fire('close');
    }
  }
};

var template$N = "<div \nclass=\"bell-rate\n  {{#if readOnly}} bell-rate-readonly{{/if}}\n  {{#if type}} bell-rate-{{type}}{{/if}}\n  {{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}} \non-mouseleave=\"handleLeave()\"\n>\n  <input type=\"hidden\" model=\"value\">\n\n  {{#each 1 => count}}\n    <Icon name=\"{{icon}}\"  \n      className=\"bell-rate-star-full {{#if activeValue - this >= 0}} active{{/if}}\"\n      on-mousemove=\"handleMove($event, this)\"\n      on-click=\"handleClick($event, this)\"\n    >\n      {{#if half}}\n        <span data-type=\"half\" class=\"bell-icon bell-rate-star-content bell-icon-ios-star-half\n          {{#if activeValue - this >= -0.5}} active{{/if}}\">\n        </span>\n      {{/if}}\n    </Icon>\n  {{/each}}\n\n  {{#if showTexts}}\n    <span class=\"bell-rate-text\">\n      <slot name=\"children\">\n        {{#if !texts}}\n          {{value}} 星\n        {{else}}\n          {{getValue(activeValue)}}\n        {{/if}}\n      </slot>\n    </span>\n  {{/if}}\n\n</div>";

var Rate = {
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

  template: template$N,

  data: function data() {
    return {
      hoverValue: -1
    }
  },

  computed: {
    activeValue: function activeValue() {
      return this.get('hoverValue') < 0 ? this.get('value') : this.get('hoverValue')
    }
  },

  filters: {
    getValue: function getValue(index) {
      var texts = this.get('texts');
      return texts && texts[ index - 1 ] 
    }
  },

  methods: {
    handleMove: function handleMove(event, index) {
      if (this.get('readOnly')) {
        return
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

    handleLeave: function handleLeave() {
      if (this.get('readOnly')) {
        return
      }

      this.set({
        hoverValue: this.get('value') >= 0 ? this.get('value') : -1
      });
    },

    handleClick: function handleClick(event, index) {
      if (this.get('readOnly')) {
        return
      }

      event = event.originalEvent.originalEvent;

      var isHalf = event && event.target.getAttribute('data-type') == 'half';
      if (isHalf) {
        index -= 0.5;
      }

      this.set({
        value: index
      });
      this.fire(
        'change',
        {
          value: index
        }
      );
    }
  }
};

var template$O = "<div \nclass=\"bell-tabs bell-tabs-{{type}}\n{{#if size}} bell-tabs-{{size}}{{/if}}\n{{#if animated}} bell-tabs-animated{{/if}}\n{{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n\n  <div class=\"bell-tabs-bar\">\n    {{#if hasSlot('extra')}}\n      <div class=\"bell-tabs-extra-container\">\n        <slot name=\"extra\" />\n      </div>\n    {{/if}}\n    <div class=\"bell-tabs-nav-container\">\n      <span class=\"bell-tabs-tab-prev\"></span>\n      <span class=\"bell-tabs-tab-next\"></span>\n      <div class=\"bell-tabs-tab-wrap\">\n        <div class=\"bell-tabs-tab-scroll\">\n          <div class=\"bell-tabs-nav bell-tabs-animated\">\n            {{#each tabsList}}\n              <div class=\"bell-tabs-tab\n                {{#if disabled}} bell-tabs-tab-disabled{{/if}}\n                {{#if value === id}} bell-tabs-tab-active{{/if}}\n              \" on-click=\"click(this)\"\n              >\n                {{#if this.icon}}\n                  <Icon className=\"bell-tabs-tab-icon\" type=\"{{this.icon}}\" />\n                {{/if}}\n                {{label}}\n                {{#if value === id && closable}}\n                  <div class=\"bell-tabs-tab-close-icon\" on-click=\"close(this)\">\n                    <Icon className=\"bell-tabs-tab-icon-close\" type=\"close\" size=\"20\" /> \n                  </div>\n                {{/if}}\n              </div>\n            {{/each}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"bell-tabs-content\" style=\"transform: translateX({{translateStyle}});\">\n    <slot name=\"children\" />\n  </div>\n</div>";

var Tabs = {

  name: 'bell-tabs',

  propTypes: {
    type: {
      type: oneOf(['line', 'card']),
      value: 'line'
    },
    size: {
      type: oneOf([ RAW_TINY, RAW_SMALL, RAW_LARGE, 'default' ])
    },
    closable: {
      type: 'boolean',
      value: FALSE
    },
    animated: {
      type: 'boolean',
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

  template: template$O,

  data: function data() {
    return {
      tabsList: []
    }
  },

  computed: {
    translateStyle: function translateStyle() {
      var me = this;
      var index = 0;
      Yox.array.each(
        me.get('tabsList'),
        function (item, key) {
          if (item.id == me.get('value')) {
            index = key;
            return FALSE
          }
        }
      );
      return index * (-100) + '%'
    }
  },

  events: {
    tabPanelRemove: function tabPanelRemove(event, data) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        var tabsList = this.copy(this.get('tabsList'));
        tabsList = tabsList.filter(function (item) {
          return item.id !== data.id
        });
        this.set({ tabsList: tabsList });
      }
    },
    tabsValueUpdate: function tabsValueUpdate(event, data) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
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
    tabPanelAdd: function tabPanelAdd(event, data) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        this.append('tabsList', data);
      }
    }
  },

  watchers: {
    value: function value(value$1) {
      this.fire(
        'tabSelected',
        { value: value$1 },
        TRUE
      );
    }
  },

  methods: {
    close: function close (data) {
      this.fire('tabRemove', data);
    },
    click: function click(data) {
      if (data.disabled) { return }
      this.set({
        value: data.id
      });
    }
  }
};

var template$P = "<div \nclass=\"bell-tabs-panel\n{{#if disabled}} bell-tabs-panel-disabled{{/if}}\n{{#if isActive}} bell-active{{/if}}\n{{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n  <slot name=\"children\" />\n</div>";

var TabPanel = {
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

  template: template$P,

  data: function data() {
    return {
      id: 0,
      isActive: FALSE
    }
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
    tabSelected: function tabSelected(_, data) {
      this.set({
        isActive: this.get('id') == data.value
      });
    }
  },

  methods: {
    upsert: function upsert(name) {
      var me = this;
      me.fire(
        name,
        {
          label: me.get('label'),
          icon: me.get('icon'),
          disabled: me.get('disabled'),
          id: me.get('id')
        }
      );
    }
  },

  afterMount: function afterMount() {
    var me = this;
    var name = me.get('name');
    if (name == null) {
      var element = findComponentUpward(me, 'bell-tabs');
      name = Yox.array.indexOf(element.$children, me);
    }
    me.set('id', name);
    me.upsert('tabPanelAdd');
  },
  beforeDestroy: function beforeDestroy() {
    this.upsert('tabPanelRemove');
  }
};

var template$Q = "<div \nclass=\"bell-dropdown\n{{#if isOpen}} bell-dropdown-open{{/if}}\n{{#if disabled}} bell-dropdown-disabled{{/if}}\n{{#if className}} {{className}}{{/if}}\n\" \n{{#if style}} style=\"{{style}}\"{{/if}}\n\n{{#if trigger === RAW_HOVER}}\n  on-mouseenter=\"set('isOpen', TRUE)\"\n{{/if}}\n{{#if trigger != RAW_CUSTOM}}\n  on-mouseleave=\"set('isOpen', FALSE)\"\n  lazy-mouseleave=\"300\"\n{{/if}}\ndata-placement=\"{{placement}}\"\n>\n\n  <div class=\"bell-dropdown-trigger\"\n    {{#if trigger === RAW_CLICK}}\n      on-click=\"toggle('isOpen')\"\n    {{/if}}\n  >\n    <slot name=\"children\" />\n  </div>\n\n  <div class=\"bell-dropdown-list\">\n    <slot name=\"list\" />\n  </div>\n\n  <style>\n    .bell-dropdown.bell-dropdown-open > .bell-dropdown-list {\n      max-height: {{height}}px;\n    }\n  </style>\n\n</div>";

var Dropdown = {
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
      type: function () {
        return function (props, key) {
          if (props[ 'trigger' ] !== RAW_CUSTOM) {
            Yox.logger.warn((key + " 期望在 trigger 取值为 custom 时传值"));
          }
          return true
        }
      }
    },
    height: {
      type: RAW_NUMERIC,
      value: 200
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template: template$Q,

  watchers: {
    visible: function visible (isOpen) {
      this.set({ isOpen: isOpen });
    }
  },

  data: function data () {
    return {
      isOpen: FALSE,
      FALSE: FALSE,
      TRUE: TRUE,
      RAW_HOVER: RAW_HOVER,
      RAW_CLICK: RAW_CLICK,
      RAW_CUSTOM: RAW_CUSTOM
    }
  },
  
  events: {
    'click.dropdownItem': function () {
      this.set({ 
        isOpen: FALSE
      });
    }
  }
};

var template$R = "<li \nclass=\"bell-dropdown-item\n{{#if selected}} bell-dropdown-selected{{/if}}\n{{#if disabled}} bell-dropdown-disabled{{/if}}\n{{#if divided}} bell-dropdown-divided{{/if}}\n{{#if className}} {{className}}{{/if}}\n\" \n{{#if style}} style=\"{{style}}\"{{/if}}\non-click=\"click.dropdownItem\"\n>\n\n  <slot name=\"children\" />  \n  \n</li>";

var DropdownItem = {
  propTypes: {
    divided: {
      type: RAW_BOOLEAN,
      value: false
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: false
    }, 
    selected: {
      type: RAW_BOOLEAN,
      value: false
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

  template: template$R
};

var template$S = "<ul \nclass=\"bell-dropdown-menu\n{{#if className}} {{className}}{{/if}}\n\" \n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n\n  <slot name=\"children\" />  \n  \n</ul>";

var DropdownMenu = {
  propTypes: {
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template: template$S
};

var TransferTpl = "<div class=\"bell-transfer\">\n  <div class=\"bell-transfer-list\">\n    <div class=\"bell-transfer-list-header\">\n      <span class=\"bell-transfer-list-header-checkbox\">\n        <Checkbox model=\"checkLeftAll\" onChange=\"{{onCheckLeftAllChange}}\">\n        </Checkbox>\n      </span>\n      <span class=\"bell-transfer-list-header-title\">\n        {{leftLabel}}\n      </span>\n      <span class=\"bell-transfer-list-header-count\">\n        {{left.length}} / {{leftList.length}}\n      </span>\n    </div>\n\n    <div class=\"bell-transfer-list-body\">\n      <CheckboxGroup vertical model=\"left\" onChange=\"{{onLeftChange}}\">\n        {{#each leftList}}\n          <Checkbox value=\"{{this.key}}\">\n            <span>\n              {{text}}\n            </span>\n          </Checkbox>\n        {{/each}}\n      </CheckboxGroup>\n    </div>\n  </div>\n\n  <div class=\"bell-transfer-actions\">\n    <Button shape=\"circle\" on-click=\"addToLeft()\">\n      <i class=\"bell-icon bell-icon-ios-arrow-left\"></i>\n    </Button>\n    <Button shape=\"circle\" on-click=\"addToRight()\">\n      <i class=\"bell-icon bell-icon-ios-arrow-right\"></i>\n    </Button>\n  </div>\n\n  <div class=\"bell-transfer-list\">\n    <div class=\"bell-transfer-list-header\">\n      <span class=\"bell-transfer-list-header-checkbox\">\n        <Checkbox model=\"checkRightAll\" onChange=\"{{onCheckRightAllChange}}\">\n        </Checkbox>\n      </span>\n      <span class=\"bell-transfer-list-header-title\">\n        {{rightLabel}}\n      </span>\n      <span class=\"bell-transfer-list-header-count\">\n        {{right.length}} / {{rightList.length}}\n      </span>\n    </div>\n    <div class=\"bell-transfer-list-body\">\n      <CheckboxGroup vertical model=\"right\" onChange=\"{{onRightChange}}\">\n        {{#each rightList}}\n          <Checkbox value=\"{{this.key}}\">\n            <span>\n              {{text}}\n            </span>\n          </Checkbox>\n        {{/each}}\n      </CheckboxGroup>\n    </div>\n  </div>\n</div>";

var Transfer = {
  template: TransferTpl,

  propTypes: {
    data: {
      type: 'array',
      value: function value() {
        return [];
      }
    },
    targetKeys: {
      type: 'array',
      value: function value() {
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
  data: function data() {
    var me = this;
    return {
      leftKeys: [],
      rightKeys: [],

      checkLeftAll: false,
      checkRightAll: false,

      left: [],
      right: [],

      onLeftChange: function onLeftChange(left) {
        me.set({
          left: left,
          checkLeftAll: left && left.length == me.get('leftList.length')
        });
      },
      onRightChange: function onRightChange(right) {
        me.set({
          right: right,
          checkRightAll: right && right.length == me.get('rightList.length')
        });
      },
      onCheckLeftAllChange: function onCheckLeftAllChange(isCheckAll) {
        me.set({
          left: isCheckAll ? me.getListKeys(me.get('leftList')) : []
        });
      },
      onCheckRightAllChange: function onCheckRightAllChange(isCheckAll) {
        me.set({
          right: isCheckAll ? me.getListKeys(me.get('rightList')) : []
        });
      }
    }
  },

  computed: {
    rightList: {
      deps: ['targetKeys', 'targetKeys.length', 'data.*'],
      get: function get() {
        var me = this;
        var data = me.get('data');
        var targetKeys = me.get('targetKeys');
        if (!data
          || !targetKeys
        ) {
          return [];
        }
        return data.filter(function (item) { return targetKeys.indexOf(item['key']) !== -1; });
      }
    },

    leftList: {
      deps: ['targetKeys', 'targetKeys.length', 'data.*', 'data'],
      get: function get() {
        var me = this;
        var data = me.get('data');
        var targetKeys = me.get('targetKeys');
        if (!data
          || !targetKeys
        ) {
          return [];
        }
        return data.filter(function (item) { return targetKeys.indexOf(item['key']) === -1; });      }
    }
  },
  methods: {
    addToLeft: function addToLeft() {
      var me = this;
      me.get('right').map(function (item) {
        Yox.array.remove('targetKeys', item.key);
      });
    },
    addToRight: function addToRight() {
      var me = this;
      me.set({
        targetKeys: Yox.array.merge(me.get('targetKeys'), me.get('left'))
      });
    },
    getListCheckedkeys: function getListCheckedkeys(list) {
      var keys = [];
      if (list.length) {
        keys = list.map(function (item) {
          if (item.checked) {
            return item.keys
          }
        });
      }
      return keys;
    },
    getListKeys: function getListKeys(list) {
      var keys = [];
      if (list.length) {
        keys = list.map(function (item) { return item.key; });
      }
      return keys;
    }
  }
};

var TimeLineTpl = "<ul class=\"bell-time-line\n  {{#if pending}} bell-time-line-padding{{/if}}\n\">\n  {{#if hasSlot('children')}}\n      <slot name=\"children\" />\n  {{/if}}\n</ul>";

var TimeLine = {
  template: TimeLineTpl,
  propTypes: {
    pending: {
      type: 'boolean'
    }
  }
};

var TimeLineItemTpl = "<li class=\"bell-time-line-item\">\n  <div class=\"bell-time-line-tail\"></div>\n  {{#if hasSlot('dot')}}\n    <slot name=\"dot\" />\n  {{else}}\n    <div class=\"bell-time-line-dot\"\n      style=\"color: {{color}}\"\n    ></div>\n  {{/if}}\n  <div class=\"bell-time-line-content\">\n    {{#if hasSlot('children')}}\n      <slot name=\"children\" />\n    {{/if}}\n  </div>\n</li>";

var TimeLineItem = {
  template: TimeLineItemTpl,
  propTypes: {
    color: {
      type: 'string',
      value: '#348EED'
    }
  }

};

function checkInteger(rule, value) {
  if (getType(value) !== 'number' || value % 1 !== 0) {
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
  if (getType(value) !== 'number' || isNaN(value)) {
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
  if (getType(value) !== RAW_STRING) {
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
  if (getType(value) !== 'boolean') {
    return 'type'
  }
}

function checkEnum(rule, value) {
  if (rule.values.indexOf(value) < 0) {
    return 'type'
  }
}

function checkArray(rule, value) {
  if (!value || getType(value) !== RAW_ARRAY) {
    return 'type'
  }

  var length = value.length;

  if (rule.hasOwnProperty('min') && length < rule.min) {
    return 'min'
  }

  if (rule.hasOwnProperty('max') && length < rule.max) {
    return 'max'
  }
  var itemType = rule.itemType;

  if (!itemType) {
    return
  }
  for(var i = 0; i < length; i++) {
    if (getType(value[ i ]) !== itemType) {
      return 'itemType';
    }
  }
}

function checkObject(rule, value) {
  if (!value || getType(value) !== RAW_OBJECT) {
    return 'type'
  }
}

var Validator = function Validator(translate) {

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

};

Validator.prototype.validate = function validate (data, rules, messages) {

  var errors = { };

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
      || !rule.type
    ) {
      throw new TypeError((key + "'s rule is not found."))
    }

    var errorType;
    if (data.hasOwnProperty(key)) {
      errorType = this.rules[ rule.type ](rule, value, data);
    }
    else {
      if (rule.required !== false) {
        errorType = 'required';
      }
      else {
        continue
      }
    }

    if (errorType) {
      var message = messages && messages[ key ] && messages[ key ][ errorType ];
      if (getType(message) !== RAW_STRING) {
        message = this.messages[ rule.type ] && this.messages[ rule.type ][ errorType ];
      }

      if (getType(message) === RAW_STRING) {
        errors[ key ] = message;
      }
      else if (this.translate) {
        errors[ key ] = this.translate(key, value, errorType, rule);
      }
      else {
        errors[ key ] = errorType;
      }
    }

  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

};

var template$T = "<div \nclass=\"bell-form\n{{#if inline}} bell-form-inline{{/if}}\n{{#if className}} {{className}}{{/if}}\n\"\ndata-position=\"{{labelPosition}}\"\n{{#if style}} {{style}}{{/if}}\n>\n  <slot name=\"children\" />\n</div>";

var Form = {
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
  
  template: template$T,

  methods: {
    validate: function validate(callback) {
      var me = this;
      var validator = new Validator();
      var errors = validator.validate(
        me.get('value'),
        me.get('rules'),
        me.get('messages')
      );
      var isValid = !errors;
      if (isValid) {
        callback(true);
      }
      else {
        me.fire(
          'validateError.form',
          { errors: errors },
          TRUE
        );
        callback(false, errors);
      }
    }
  }
};

var template$U = "<div \nclass=\"bell-form-item\n{{#if required}} bell-form-item-required{{/if}}\n{{#if className}} {{className}}{{/if}}\n\"\n{{#if style}} style=\"{{style}}\"{{/if}}\n>\n  {{#if label || hasSlot('lable')}}\n  <label class=\"bell-form-item-label\"\n    {{#if width}} style=\"width: {{width}}px;\"{{/if}}\n    {{#if labelFor}} for=\"{{labelFor}}\"{{/if}}\n  >\n    <slot name=\"label\">\n      {{label}}\n    </slot>\n  </label>\n  {{/if}}\n\n  <div class=\"bell-form-item-content\"\n  {{#if (label || hasSlot('lable')) && width}} style=\"margin-left: {{width}}px;\"{{/if}}\n  >\n\n    <slot name=\"children\" />\n\n    {{#if isShowError && (error || errorMsg)}}\n    <div class=\"bell-form-item-error-tip\">\n      {{error || errorMsg}}\n    </div>\n    {{/if}}\n\n  </div>\n</div>";

var FormItem = {
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
  template: template$U,

  data: function data() {
    return {
      rules: [],
      messages: [],
      defaultValue: '',
      errorMsg: '',
      isShowError: this.get('showMessage'),

      width: this.get('labelWidth')
    }
  },

  events: {
    'validateError.form': function (_, data) {
      var error = data.errors[ this.get('prop') ];
      this.set('errorMsg', error);
    }
  },
  
  afterMount: function afterMount() {
    var form = findComponentUpward(this, 'bell-form');
    var prop = this.get('prop');
    var rules = form.get('rules');
    if (rules && prop) {
      rules = form.get('rules')[ prop ];
    }
    var messages = form.get('messages');
    if (messages && prop) {
      messages = form.get('messages')[ prop ];
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
        'required': rules[ 'required' ]
      });
    }
  }
};

var template$V = "<div \nclass=\"bell-dialog\n{{#if className}} {{className}}{{/if}}\n\" \n{{#if style}}style=\"{{style}}\"{{/if}}\n>\n  <div class=\"bell-dialog-mask\" on-click=\"maskClick()\"></div>\n  <div class=\"bell-dialog-content\">\n    <div class=\"bell-dialog-title\">\n      <slot name=\"title\">\n        温馨提示\n      </slot>\n      {{#if closable}}\n      <Button className=\"bell-dialog-close\" size=\"small\" borderType=\"none\" on-click=\"close()\">\n        <template slot=\"icon\">\n          <Icon size=\"28\" name=\"close\"></Icon>\n        </template>\n      </Button>\n      {{/if}}\n    </div>\n\n    {{#if hasSlot('children')}}\n    <div class=\"bell-dialog-body\">\n      <slot name=\"children\" />\n    </div>\n    {{/if}}\n\n    {{#if hasSlot('actions')}}\n    <div class=\"bell-dialog-actions\">\n      <slot name=\"actions\" />\n    </div>\n    {{/if}}\n  </div>\n</div>";

var Dialog = {
  propTypes: {
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

  template: template$V,

  model: 'open',

  watchers: {
    open: function open(isOpen) {
      var element = this.$el;
      if (isOpen) {
        Yox.dom.addClass(element, 'bell-dialog-open');
      }
      else {
        Yox.dom.addClass(element, 'bell-dialog-leave');
        setTimeout(
          function () {
            Yox.dom.removeClass(element, 'bell-dialog-open');
            Yox.dom.removeClass(element, 'bell-dialog-leave');
          },
          300
        );
      }
    }
  },

  methods: {
    maskClick: function () {
      this.set('open', false);
    },
    close: function () {
      this.set('open', false);
    }
  },

  afterMount: function afterMount() {
    Yox.dom.append(document.body, this.$el);
  },
  
  beforeDestroy: function beforeDestroy() {
    Yox.dom.remove(document.body, this.$el);
  }
};

var SmallTableTpl = "<table class=\"bell-table\n{{#if className}} {{className}}{{/if}}\n{{#if stripe}} bell-table-stripe{{/if}}\n{{#if border}} bell-table-border{{/if}}\n\"{{#if style}} style=\"{{style}}\"{{/if}}>\n  <colgroup>\n    {{#each colWidths}}\n      <col align=\"left\" width=\"{{this}}\"></col>\n    {{/each}}\n  </colgroup>\n  <thead class=\"bell-table-header\">\n    {{#each columns}}\n      <th class=\"{{#if className}}{{className}}{{/if}}{{#if fixed || (height && !header)}} bell-table-hidden{{/if}}\">\n        {{#if key !== 'checked'}}\n          {{title}}\n        {{else}}\n          <Checkbox checked=\"{{checkAll}}\" on-change=\"checkedAllChange()\">\n            {{title}}\n          </Checkbox>\n        {{/if}}\n      </th>\n    {{/each}}\n  </thead>\n  <tbody class=\"bell-table-body\"> \n    {{#if !header}}\n      {{#each list:index}}\n        <tr class=\"{{#if setRowClassName}}{{setRowClassName(this, index)}}{{/if}}\n            {{#if currentItem && currentItem.index == index}} bell-table-active{{/if}}\n          \" \n          on-click=\"rowClick(this, index)\"\n        >\n          {{#each columns}}\n            {{#if list[ index ][ key ]}}\n              <td class=\"{{#if className}}{{className}}{{/if}}\n                  {{#if list[ index ].cellClassName && list[ index ].cellClassName[ this.key ]}} {{list[ index ].cellClassName[ this.key ]}}{{/if}}\n                \"\n                {{#if isObject(list[ index ][ key ]) && list[ index ][ key ][ 'rowSpan' ]}}\n                  rowspan=\"{{list[ index ][ key ][ 'rowSpan' ]}}\"\n                {{/if}}\n                {{#if isObject(list[ index ][ key ]) && list[ index ][ key ][ 'colSpan' ]}}\n                  colspan=\"{{list[ index ][ key ][ 'colSpan' ]}}\"\n                {{/if}}\n              >  \n                {{#if key == 'index'}}\n                  {{#if setIndex}}\n                    {{setIndex(this, index)}}\n                  {{else}}\n                    {{index + 1}}\n                  {{/if}}\n                {{else if key == 'checked'}}\n                  <Checkbox checked=\"{{list[ index ][ key ]}}\" on-change=\"checkedChange($data, index)\">\n                  </Checkbox>\n                {{else if key != 'action'}}\n                  {{isObject(list[ index ][ key ]) ? list[ index ][ key ][ 'value' ] : list[ index ][ key ]}}\n                {{else}}\n                  {{#each actions}}\n                    <Button on-click=\"click(this, list[ index ], index)\" className=\"{{className}}\" disabled=\"{{disabled}}\" fluid=\"{{fluid}}\" shape=\"{{shape}}\" size=\"{{size}}\" type=\"{{type}}\">\n                      {{text}}\n                    </Button>\n                  {{/each}}\n                {{/if}}\n              </td>\n            {{/if}}\n          {{/each}}\n        </tr>\n      {{/each}}\n    {{/if}} \n  </tbody>\n</table>";

var SmallTable = {
  template: SmallTableTpl,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    list: {
      type: 'array'
    },
    columns: {
      type: 'array',
      default: []
    },
    stripe: {
      type: 'boolean'
    },
    border: {
      type: 'boolean'
    },
    setRowClassName: {
      type: 'function'
    },
    height: {
      type: 'string'
    },
    width: {
      type: 'string'
    },
    header: {
      type: 'boolean',
      default: false
    },
    highlightRow: {
      type: 'boolean'
    },
    setIndex: {
      type: 'function'
    },
    selection: {
      type: 'boolean'
    }
  },

  data: function data() {
    return {
      colWidths: [],
      currentItem: null,
      isObject: function isObject(data) {
        return Object.prototype.toString.call(data).toLocaleLowerCase().substr(8, 6) === 'object'
      },
    };
  },

  computed: {
    checkAll: function checkAll () {
      return this.get('list').filter(function (item) {
        return item.checked;
      }).length === this.get('list').length;
    }
  },

  methods: {
    checkedChange: function checkedChange (data, index) {
      this.setChecked(data.isChecked, true, index);
      data.index = index;
      this.fire('select', data);
    },
    checkedAllChange: function checkedAllChange (event, data) {
      this.setChecked(data.isChecked, true);
      this.fire('selectAll', data);
    },
    selectAll: function selectAll () {
      this.checkedAllChange(null, {
        isChecked: true
      });
    },
    clearCurrentRow: function () {
      this.set({
        'currentItem': null
      });
    },
    click: function (item, data, index) {
      item.action(data, index);
    },
    rowClick: function (data, index) {
      var me = this;
      if (!me.get('highlightRow') || me.get('header')) {
        return;
      }
      data.index = index;
      me.fire('currentChange', {
        current: data,
        oldCurrent: me.get('currentItem')
      });
      me.set({
        'currentItem': data
      });
    },

    setChecked: function setChecked(value, force, index) {
      var me = this;
      var list = me.copy(me.get('list'));
      list = list.map(function (item, key) {
        if (force && index == null) {
          item.checked = value;
        }
        else if (index != null) {
          if (key === index) {
            item.checked = value;
          }
        }
        else {
          item.checked = item.checked != null ? item.checked : value;
        }
        return item;
      });

      this.fire('selectChange', list);
      me.set({
        list: list
      });
    }
  },

  afterMount: function () {
    var me = this;
    if (me.get('selection')) {
      me.setChecked();
    }
    if (!me.get('columns').length) {
      return;
    }
    var colWidths = [];
    me.get('columns').forEach(function (item) {
      var colWidth = me.$el.clientWidth / 3;
      if (item.width) {
        colWidth = item.width;
      }
      colWidths.push(colWidth);
    });
    me.set({
      colWidths: colWidths
    });
  }
};

var TableTpl = "<div class=\"{{#if fixedLeftList.length || fixedRightList.length || height}} \n  bell-table-fixed\n{{/if}} \"\nstyle=\"{{#if width}} width: {{width}}px; overflow-x: auto;{{/if}}\"\n>\n\n  {{#if height}}\n  <div class=\"bell-table-fixed-header\">\n    <SmallTable {{...this}} header></SmallTable>\n  </div>\n  {{/if}}\n\n  {{#if fixedLeftList.length}}\n    <div class=\"bell-table-fixed-left\">\n      <SmallTable {{...this}} columns=\"{{fixedLeftList}}\" list=\"{{list}}\"></SmallTable>\n    </div>\n  {{/if}}\n  <div class=\"bell-table-insert{{#if height}} bell-table-insert{{/if}}\"{{#if height}}style=\"height: {{height}}px; overflow-y: auto;\"{{/if}}>\n    <SmallTable {{...this}}></SmallTable>\n  </div>\n  {{#if fixedRightList.length}}\n    <div class=\"bell-table-fixed-right\">\n      <SmallTable {{...this}} columns=\"{{fixedRightList}}\" list=\"{{list}}\"></SmallTable>\n    </div>\n  {{/if}}\n</div>";

var Table = {
  template: TableTpl,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    list: {
      type: 'array'
    },
    columns: {
      type: 'array',
      value: []
    },
    stripe: {
      type: 'boolean'
    },
    border: {
      type: 'boolean'
    },
    setRowClassName: {
      type: 'function'
    },
    height: {
      type: 'string'
    },
    width: {
      type: 'string'
    },
    highlightRow: {
      type: 'boolean'
    },
    setIndex: {
      type: 'function'
    },
    selection: {
      type: 'boolean'
    }
  },

  data: function data() {
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
      this.$refs.smallTable.clearCurrentRow();
    },
    selectAll: function () {
      this.$refs.smallTable.selectAll();
    }
  },

  afterMount: function () {
    var me = this;
    if (!me.get('columns').length) {
      return;
    }
    var fixedLeftList = [];
    var fixedRightList = [];
    var columns = me.copy(me.get('columns'));
    columns.forEach(function (item) {
      var fixed = item.fixed;
      switch(fixed) {
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
    me.set({
      fixedLeftList: fixedLeftList,
      fixedRightList: fixedRightList
    });
  }
};

var template$W = "<div \nclass=\"bell-message bell-message-{{type}}\n  {{#if isShow}} bell-show{{/if}}\n\" \nstyle=\"margin-left: -{{marginLeft / 2}}px;\n  {{#if top}} top: {{top}}px;{{/if}}\n\">\n  <Alert type=\"{{type}}\" closeText=\"{{closeText}}\" center=\"{{center}}\" showIcon=\"{{showIcon}}\" closable=\"{{closable}}\" close=\"{{close}}\">\n    {{content}}\n  </Alert>\n</div>";

var id = 0;

var createMessage = function (data) {

  var namespace = 'bell-message-' + id++;
  var element = Yox.dom.createElement('div');
  Yox.dom.prop(element, 'id', namespace);
  Yox.dom.append(document.body, element);

  var instance = new Yox({
    el: '#' + namespace,
    replace: true,
    template: template$W,
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
    data: function data$1() {
      return {
        marginLeft: 0,
        top: 0,
        isShow: false,
        close: function close() {
          if (instance) {
            instance.destroy();
          }
          if (Yox.is.func(data.onClose)) {
            data.onClose();
          }
        }
      }
    },

    methods: {
      fadeIn: function fadeIn() {
        var me = this;
        me.fadeInFuc = setTimeout(
          function () {
            me.set({
              isShow: true,
              top: me.top
            });
            me.fadeOut();
          },
          me.fadeInTime
        );
      },
      fadeOut: function fadeOut() {
        var me = this;
        me.showTimeFuc = setTimeout(
          function () {
            me.set({
              isShow: false,
              top: 0
            });

            me.fadeOutFuc = setTimeout(
              function () {
                if (instance) {
                  instance.destroy();
                }
                if (Yox.is.func(data.onClose)) {
                  data.onClose();
                }
              },
              me.fadeOutTime
            );
          },
          me.showTime
        );
      }
    },

    afterMount: function afterMount() {
      var me = this;
      me.fadeInTime = 300;
      me.fadeOutTime = 300;
      me.showTime = data.duration || 1500;
      me.top = data.top || 15;

      me.set({
        marginLeft: me.$el.clientWidth
      });

      me.fadeIn();
    },

    beforeDestroy: function beforeDestroy() {
      var me = this;
      clearTimeout(me.fadeInFuc);
      clearTimeout(me.showTimeFuc);
      clearTimeout(me.fadeOutFuc);
    }
  });
};

var add = function (data) {
  createMessage(data);
};

var config = {};

var addMessage = function (type, arg) {
  var data = {};
  data.type = type;

  if (Yox.is.string(arg)) {
    data.content = arg;
  }
  else {
    Yox.object.extend(data, arg, config);
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

Yox.prototype.$Message = {
  success: function(arg) {
    addMessage('success', arg);
  },
  info: function(arg) {
    addMessage('info', arg);
  },
  warning: function(arg) {
    addMessage('warning', arg);
  },
  error: function(arg) {
    addMessage('error', arg);
  },
  loading: function(arg) {
    addMessage('loading', arg);
  },
  config: function (options) {
    updateConfig(options);
  },
  destroy: function () {
    console.log('destroy');
  }
};

var template$X = "<div \nclass=\"bell-notice bell-notice-{{type}}\n  {{#if isShow}} bell-show{{/if}}\n\" \nstyle=\"width: {{width}}px;\n  {{#if rightSize}}right: {{rightSize}}px;{{/if}}\n\">\n\n  <div class=\"bell-notice-title\">\n    {{title}}\n  </div>\n\n  <div class=\"bell-notice-desc\">\n    {{content}}\n  </div>\n\n  {{#if duration == 0}}\n    <Icon name=\"close\" className=\"bell-notice-close\" on-click=\"close()\" />\n  {{/if}}\n\n</div>";

var id$1 = 0;

var createNotice = function (data) {

  var namespace = 'bell-notice-' + id$1++;
  var body = Yox.dom.find('#bell-notice-wrapper');
  var element = Yox.dom.createElement('div');
  Yox.dom.prop(element, 'id', namespace);
  Yox.dom.append(body, element);

  var instance = new Yox({
    el: '#' + namespace,
    replace: true,
    template: template$X,
    
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
    data: function data () {
      return {
        isShow: false,
        rightSize: 15
      }
    },
    methods: {
      close: function close() {
        this.hide();
      },
      fadeIn: function fadeIn() {
        var me = this;
        me.fadeInTimer = setTimeout(
          function () {
            me.set({
              isShow: true,
              rightSize: me.get('right')
            });
            if (me.get('duration') == 0) {
              return
            }
            me.fadeOut();
          },
          300
        );
      },
      fadeOut: function fadeOut() {
        var me = this;
        me.showTimer = setTimeout(
          function () {
            me.hide();
          },
          me.get('duration')
        );
      },
      hide: function hide() {
        var me = this;
        me.set({
          isShow: false,
          rightSize: ("-" + (me.$el.clientWidth))
        });
        me.fadeOutTimer = setTimeout(
          function () {
            me.get('onClose') && me.get('onClose')();
            if (instance) {
              instance.destroy();
            }
          },
          300
        );
      }
    },

    afterMount: function afterMount() {
      this.set({
        rightSize: ("-" + (this.$el.clientWidth))
      });
      this.fadeIn();
    },

    beforeDestroy: function beforeDestroy() {
      var me = this;
      clearTimeout(me.fadeInTimer);
      clearTimeout(me.showTimer);
      clearTimeout(me.fadeOutTimer);
    }
  });
};

var add$1 = function (data) {
  createNotice(data);
};

var config$1 = {};

var addNotice = function (type, arg) {
  var data = {};
  data.type = type;

  if (Yox.is.string(arg)) {
    data.content = arg;
  }
  else {
    Yox.object.extend(data, arg, config$1);
  }

  add$1(data);
};

var updateConfig$1 = function (data) {
  if (data.duration) {
    config$1.duration = data.duration;
  }

  if (data.top) {
    config$1.top = data.top;
  }
};

var element = Yox.dom.createElement('div');
Yox.dom.prop(element, 'id', 'bell-notice-wrapper');
Yox.dom.append(document.body, element);

Yox.prototype.$Notice = {
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
    updateConfig$1(options);
  },
  destroy: function () {
    config$1 = {};
  }
};

var MsgboxTpl = "<div \nclass=\"bell-msg-alert-wrapper\n{{#if isHidden}} bell-msg-alert-hidden{{/if}}\n\">\n  <div class=\"bell-msg-alert\"\n    {{#if width}} style=\"width: {{width}}px;\"{{/if}}\n  >\n    {{#if closable}}\n    <div class=\"bell-msg-alert-close\" on-click=\"hide()\">\n      <Icon name=\"close\"></Icon>\n    </div>\n    {{/if}}\n\n    {{#if title}}\n    <div class=\"bell-msg-alert-title\">\n      {{{title}}}\n    </div>\n    {{/if}}\n\n    <div class=\"bell-msg-alert-desc\">\n      {{{content}}}\n    </div>\n\n    <div class=\"bell-msg-alert-footer\">\n      <Button type=\"{{button.type}}\" on-click=\"hide()\">\n        {{button.text}}\n      </Button>\n    </div>\n  </div>\n\n  {{#if mask}}\n  <div class=\"bell-msg-mask\" on-click=\"maskClick()\"></div>\n  {{/if}}\n</div>";

var ConfirmTpl = "<div \nclass=\"bell-msg-confirm-wrapper\n  {{#if isHidden}} bell-msg-confirm-hidden{{/if}}\n\">\n  <div class=\"bell-msg-confirm\"\n    {{#if width}} style=\"width: {{width}}px;\"{{/if}}\n  >\n    {{#if closable}}\n    <div class=\"bell-msg-confirm-close\" on-click=\"hide()\">\n      <Icon name=\"close\"></Icon>\n    </div>\n    {{/if}}\n\n    {{#if title}}\n    <div class=\"bell-msg-confirm-title\">\n      {{{title}}}\n    </div>\n    {{/if}}\n\n    <div class=\"bell-msg-confirm-desc\">\n      {{{content}}}\n    </div>\n\n    {{#if buttons}}\n    <div class=\"bell-msg-confirm-footer\">\n      {{#each buttons:index}}\n      <Button type=\"{{type}}\" on-click=\"buttonClick(index)\">\n        {{text}}\n      </Button>\n      {{/each}}\n    </div>\n    {{/if}}\n\n  </div>\n  {{#if mask}}\n  <div class=\"bell-msg-mask\" on-click=\"maskClick()\"></div>\n  {{/if}}\n</div>";

var id$2 = 0;

var createAlert = function (data) {

  var namespace = 'bell-msg-alert-' + id$2++;
  var body = Yox.dom.find('#bell-msgbox-wrapper');
  var element = Yox.dom.createElement('div');
  Yox.dom.prop(element, 'id', namespace);
  Yox.dom.append(body, element);

  var instance = new Yox({
    el: '#' + namespace,
    replace: true,
    template: MsgboxTpl,
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
    data: function data() {
      return {
        isHidden: true
      }
    },

    methods: {
      maskClick: function maskClick() {
        if (!this.get('maskClosable')) {
          return
        }
        this.hide();
      },
      hide: function hide() {
        var me = this;
        me.set({
          isHidden: true
        });
        me.transTimer = setTimeout(
          function () {
            me.get('onClose') && me.get('onClose')();
            if (instance) {
              instance.destroy();
            }
          },
          500
        );
      }
    },

    afterMount: function afterMount() {
      var me = this;
      me.transTimer = setTimeout(
        function () {
          me.set({
            isHidden: false
          });
        },
        300
      );
    },

    beforeDestroy: function beforeDestroy() {
      var me = this;
      clearTimeout(me.transTimer);
    }
  });
};

var createConfirm = function (data) {

  var namespace = 'bell-msg-confirm-' + id$2++;
  var body = Yox.dom.find('#bell-msgbox-wrapper');
  var element = Yox.dom.createElement('div');
  Yox.dom.prop(element, 'id', namespace);
  Yox.dom.append(body, element);

  var instance = new Yox({
    el: '#' + namespace,
    replace: true,
    template: ConfirmTpl,
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
    data: function data() {
      return {
        isHidden: true
      }
    },

    methods: {
      buttonClick: function buttonClick(index) {
        this.get('buttons.' + index + '.action').call(instance);
      },

      maskClick: function maskClick() {
        if (!this.get('maskClosable')) {
          return
        }
        this.hide();
      },

      hide: function hide() {
        var me = this;
        me.set({
          isHidden: true
        });
        me.transTimer = setTimeout(
          function () {
            me.get('onClose') && me.get('onClose')();
            if (instance) {
              instance.destroy();
            }
          },
          500
        );
      }
    },

    afterMount: function afterMount() {
      var me = this;
      me.transTimer = setTimeout(
        function () {
          me.set({
            isHidden: false
          });
        },
        300
      );
    },

    beforeDestroy: function beforeDestroy() {
      var me = this;
      clearTimeout(me.transTimer);
    }
  });
};

var addAlert = function (data) {
  createAlert(data);
};

var addConfirm = function (data) {
  createConfirm(data);
};

var element$1 = Yox.dom.createElement('div');
Yox.dom.prop(element$1, 'id', 'bell-msgbox-wrapper');
Yox.dom.append(document.body, element$1);

Yox.prototype.$Alert = function (data) {
  addAlert(data);
};

Yox.prototype.$Confirm = function (data) {
  addConfirm(data);
};

var template$Y = "<div \nclass=\"bell-loadingbar\n  {{#if type}} bell-loadingbar-{{type}}{{/if}}\n\">\n  <div class=\"bell-loadingbar-inner\">\n    <div class=\"bell-loadingbar-bg\"\n      style=\"\n        width: {{percent}}%;\n        height: {{height}}px;\n        {{#if color}} color: {{color}};{{/if}}\n      \"\n    ></div>\n  </div>\n</div>";

var namespace = 'bell-loadingbar';
var instance = NULL;
var timer$1 = NULL;

var add$2 = function(data) {
  if (instance) {
    remove();
  }
  var body = Yox.dom.find('#bell-loadingbar-wrapper');
  var element = Yox.dom.createElement('div');
  Yox.dom.prop(element, 'id', namespace);
  Yox.dom.append(body, element);

  instance = new Yox({
    el: '#' + namespace,
    replace: true,
    props: {
      percent: data.percent,
      height: data.height,
      type: data.type,
      color: data.color
    },
    template: template$Y,
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

    afterMount: function afterMount() {
      var me = this;
      var timerStart = function () {
        timer$1 = setTimeout(
          function () {
            if (!timer$1 || !me) {
              return
            }
            me.increase('percent', Math.floor(Math.random() * 10), 98);
            if (me.get('percent') <= 98) {
              timerStart();
            }
          },
          200
        );
      };
      timerStart();
    },

    beforeDestroy: function beforeDestroy() {
      if (timer$1) {
        clearTimeout(timer$1);
      }
    }
  });
  return instance
};

var remove = function() {
  if (instance) {
    instance.destroy();
    instance = NULL;
  }
  var body = Yox.dom.find('#bell-loadingbar-wrapper');
  var element = Yox.dom.find(("#" + namespace));
  if (element) {
    Yox.dom.remove(body, element);
  }
};

var update = function(config) {
  if (instance) {
    instance.set(config);
  }
};

var element$2 = Yox.dom.createElement('div');
Yox.dom.prop(element$2, 'id', 'bell-loadingbar-wrapper');
Yox.dom.append(document.body, element$2);

var config$2 = {};

var updateConfig$2 = function (data) {
  config$2.type = data.type ? data.type : config$2.type;
  config$2.color = data.color ? data.color : config$2.color;
  config$2.height = data.height ? data.height : config$2.height;
};

Yox.prototype.$LoadingBar = {
  // 开始从 0 显示进度条，并自动加载进度
  start: function start(options) {
    return add$2(
      Yox.object.extend(
        {},
        options,
        config$2
      )
    )
  },
  // 结束进度条，自动补全剩余进度
  finish: function finish() {
    update({
      percent: 100
    });
    setTimeout(
      function () {
        return remove()
      },
      1000
    );
  },
  // 精确加载到指定的进度
  update: function update$1(data) {
    return update(data)
  },
  config: function config(data) {
    updateConfig$2(data);
  },
  destroy: function destroy() {
    config$2 = {};
    element$2.remove();
  }
};

/*
 * @file 主模块
 * @author wangtianhua
 */

Yox.component({
  Transition: Transition,

  Layout: Layout,
  Header: Header,
  Sider: Sider,
  Content: Content,
  Footer: Footer,
  Menu: Menu,
  MenuItem: MenuItem,
  MenuGroup: MenuGroup,
  Submenu: Submenu,
  Row: Row,
  Col: Col,
  Icon: Icon,
  Drawer: Drawer,

  Breadcrumb: Breadcrumb,
  BreadcrumbItem: BreadcrumbItem,

  Button: Button,
  ButtonGroup: ButtonGroup,
  Input: Input,
  InputNumber: InputNumber,
  Radio: Radio,
  RadioGroup: RadioGroup,
  Checkbox: Checkbox,
  CheckboxGroup: CheckboxGroup,
  Switch: Switch,
  Select: Select,
  Option: Option,
  OptionGroup: OptionGroup,
  Page: Page,
  DatePicker: DatePicker,
  Upload: Upload,

  Tooltip: Tooltip,
  TooltipItem: TooltipItem,

  Alert: Alert,
  Spinner: Spinner,
  BackTop: BackTop,
  Avatar: Avatar,
  Badge: Badge,

  Card: Card,
  CardHeader: CardHeader,
  CardMedia: CardMedia,
  CardBody: CardBody,
  CardActions: CardActions,

  Collapse: Collapse,
  Panel: Panel,
  List: List,
  Item: Item,
  Divider: Divider,
  Circle: Circle,
  Progress: Progress,
  Slider: Slider,
  Tag: Tag,
  Rate: Rate,
  Tabs: Tabs,
  TabPanel: TabPanel,

  Dropdown: Dropdown,
  DropdownItem: DropdownItem,
  DropdownMenu: DropdownMenu,

  Transfer: Transfer,
  TimeLine: TimeLine,
  TimeLineItem: TimeLineItem,
  Form: Form,
  FormItem: FormItem,
  Dialog: Dialog,
  SmallTable: SmallTable,
  Table: Table
});
//# sourceMappingURL=bell-ui.cjs.js.map
