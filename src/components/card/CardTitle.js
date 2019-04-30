import CardTitleTpl from './template/CardTitle.html'

export default {
  template: CardTitleTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    titleClass: {
      type: 'string'
    },
    subTitleClass: {
      type: 'string'
    }
  }
};