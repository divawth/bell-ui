import CardHeaderTpl from './template/CardHeader.html'

export default {
  template: CardHeaderTpl,

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