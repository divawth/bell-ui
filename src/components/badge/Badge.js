import BadgeTpl from './template/Badge.html'

export default {
  template: BadgeTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    count: {
      type: 'numeric'
    },
    maxCount: {
      type: 'numeric'
    },
    dot: {
      type: 'boolean'
    },
    hidden: {
      type: 'boolean'
    },
    type: {
      type: 'string'
    }
  },

  filters: {
    getText(count, maxCount) {
      maxCount = Yox.is.number(maxCount) ? +maxCount : 1;
      let countStr = Yox.is.number(count) ? +count : 0;

      return maxCount < countStr
        ? maxCount + '+'
        : count;
    }
  }
};