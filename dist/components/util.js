var element = document.createElement('div');
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
var transitionEnd = testCSS('transition') ? 'transitionend' : '';
export var supportTransform = testCSS('transform') ? true : false;
export function onTransitionEnd(el, callback) {
    if (transitionEnd) {
        Yox.dom.on(el, transitionEnd, callback);
    }
    else {
        Yox.nextTick(callback);
    }
}
export var requestAnimationFrame = (window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        return window.setTimeout(callback, 1000 / 60);
    });
export function contains(element, target) {
    if (element.contains && element.contains(target)) {
        return true;
    }
    else if (element.compareDocumentPosition && element.compareDocumentPosition(target) > 16) {
        return true;
    }
    return false;
}
export function findComponentUpward(context, componentName) {
    if (typeof componentName === 'string') {
        componentName = [componentName];
    }
    else {
        componentName = componentName;
    }
    var parent = context.$parent;
    var name = parent.$options.name;
    while (parent && (!name || componentName.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent)
            name = parent.$options.name;
    }
    return parent;
}
export function oneOf(values) {
    return function (key, value) {
        if (!Yox.array.has(values, value)) {
            Yox.logger.warn(key + " \u671F\u671B\u662F " + values.join(',') + " \u4E2D\u7684\u503C\uFF0C\u5B9E\u9645\u4F20\u503C " + value + "\u3002");
        }
        return true;
    };
}
export function isDate() {
    return function (key, value) {
        if (value instanceof Date) {
            return true;
        }
        Yox.logger.warn(key + " \u671F\u671B\u662F Date \u7C7B\u578B\uFF0C\u5B9E\u9645\u4F20\u503C " + value + "\u3002");
    };
}
export function scrollTop(element, from, to, duration, endCallback) {
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
export function getType(value) {
    return Object.prototype.toString.call(value).toLowerCase().slice(8, -1);
}
//# sourceMappingURL=util.js.map