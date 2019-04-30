import CardMediaTpl from './template/CardMedia.html'

export default {
  template: CardMediaTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    titleClass: {
      type: 'string'
    },
    subTitle: {
      type: 'string'
    },
    subTitleClass: {
      type: 'string'
    }
  }
};