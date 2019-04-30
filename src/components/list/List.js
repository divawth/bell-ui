import ListTpl from './template/List.html'

export default {
  template: ListTpl,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    border: {
      type: 'boolean',
      value: true
    }
  }
};