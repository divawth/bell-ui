
import SpinnerTpl from './template/Spinner.html'

export default {
  template: SpinnerTpl,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    size: {
      type: 'string'
    },
    text: {
      type: 'string'
    },
    fix: {
      type: 'boolean'
    },
    type: {
      type: 'string'
    }
  }
};