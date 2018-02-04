export let addClass = function (element, className) {
    var classNameArray = element.className.split(/\s/g);
    if (Yox.array.indexOf(classNameArray, className) > 0) {
        return;
    }
    else {
        classNameArray.push(className);
        element.className = classNameArray.join(' ');
    }
};

export let removeClass = function (element, className) {
    var classNameArray = element.className.split(/\s/g);
    var index = Yox.array.indexOf(classNameArray, className);
    if (index > 0) {
        classNameArray.splice(index);
        element.className = classNameArray.join(' ');
        if (Yox.array.indexOf(classNameArray, className) > 0) {
            removeClass(element, className)
        }
    }
    else {
        return;
    }
};