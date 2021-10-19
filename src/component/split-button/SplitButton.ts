import Yox, { CustomEventInterface } from 'yox'

import template from './template/SplitButton.hbs'
// import './style/SplitButton.styl'

import Icon from '../icon/Icon'
import Button from '../button/Button'
import ButtonGroup from '../button/ButtonGroup'
import Popover from '../popover/Popover'

import {
  TRUE,
  FALSE,
  RAW_SMALL,
  RAW_LARGE,
  RAW_DEFAULT,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_TYPE_PRIMARY,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_WARNING,
  RAW_TYPE_ERROR,
  RAW_CLICK,
  RAW_PLACEMENT_ARRAY,
  RAW_BOTTOM_END,
  RAW_ARRAY,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
} from '../util'

import {
  fireClickEvent
} from '../event'

export default Yox.define({

  template,

  name: '${prefix}SplitButton',

  propTypes: {
    type: {
      type: oneOf([
        RAW_TYPE_PRIMARY,
        RAW_TYPE_INFO,
        RAW_TYPE_SUCCESS,
        RAW_TYPE_WARNING,
        RAW_TYPE_ERROR,
      ]),
    },
    size: {
      type: oneOf([RAW_DEFAULT, RAW_LARGE, RAW_SMALL]),
      value: RAW_DEFAULT,
    },
    placement: {
      type: oneOf(RAW_PLACEMENT_ARRAY),
      value: RAW_BOTTOM_END,
    },
    menu: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    loading: {
      type: RAW_BOOLEAN,
    },
    disabled: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  data() {
    return {
      RAW_CLICK,
      menuVisible: FALSE,
    }
  },

  events: {
    click(event) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        event.stop()
        fireClickEvent(event)
      }
    },
    open(event) {
      event.stop()
      this.set('menuVisible', TRUE)
    },
    close(event) {
      event.stop()
      this.set('menuVisible', FALSE)
    }
  },

  methods: {
    handleButtonClick(event: CustomEventInterface) {
      event.stop()
      fireClickEvent(event)
      this.fire(
        {
          type: 'click',
          ns: 'splitButton',
        }
      )
    },
    handleItemClick(item, index) {
      this.set('menuVisible', FALSE)
      this.fire(
        {
          type: 'select',
          ns: 'splitButton',
        },
        {
          item,
          index,
        }
      )
    }
  },

  components: {
    Icon,
    Button,
    ButtonGroup,
    Popover,
  },

})