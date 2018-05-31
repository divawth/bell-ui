export let addClass = (element, className) => {
    let classNameArray = element.className.split(/\s/g);
    if (Yox.array.indexOf(classNameArray, className) > 0) {
        return;
    }
    else {
        classNameArray.push(className);
        element.className = classNameArray.join(' ');
    }
};

export let removeClass = (element, className) => {
    let classNameArray = element.className.split(/\s/g);
    let index = Yox.array.indexOf(classNameArray, className);
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