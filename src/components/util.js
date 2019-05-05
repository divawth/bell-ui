const contains = function(element, target) {
  if (element.contains && element.contains(target)) {
    return true;
  }
  else if (element.compareDocumentPosition && element.compareDocumentPosition(target) > 16) {
    return true;
  }
  return false;
};

const findComponentUpward = function (context, componentName) {
  if (typeof componentName === 'string') {
    componentName = [ componentName ];
  } else {
    componentName = componentName;
  }

  let parent = context.$parent;
  let name = parent.$options.name;

  while (parent && (!name || componentName.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }

  return parent;
}
export {
  contains,
  findComponentUpward
}
