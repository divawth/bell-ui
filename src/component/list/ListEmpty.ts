import Yox from 'yox'

import template from './template/ListEmpty.hbs'

import Empty from '../empty/Empty'

export default Yox.define({

  template,

  components: {
    Empty,
  }

})