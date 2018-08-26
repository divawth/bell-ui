export let contains = function(element, target) {
  if (element.contains && element.contains(target)) {
    return true;
  }
  else if (element.compareDocumentPosition && element.compareDocumentPosition(target) > 16) {
    return true;
  }
  return false;
};