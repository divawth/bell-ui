import DescTpl from './Desc.html'

export default {
  template: DescTpl,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
  },
  afterMount() {
    this.fire(
      'hasDesc'
    );
  }
};