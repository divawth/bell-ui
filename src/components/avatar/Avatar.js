import AvatarTpl from './template/Avatar.html'

export default {
  template: AvatarTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    shape: {
      type: 'string'
    },
    src: {
      type: 'string'
    },
    srcset: {
      type: 'string'
    },
    size: {
      type: 'string'
    },
    fontSize: function (value) {
      return value != null ? +value : 14;
    },
    backgroundColor: {
      type: 'string'
    },
    color: {
      type: 'string'
    }
  }
}