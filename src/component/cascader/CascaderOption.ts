import Yox, { CustomEventInterface, Data } from 'yox'

import template from './template/CascaderOption.hbs'

import Icon from '../icon/Icon'
import Checkbox from '../checkbox/Checkbox'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_NUMBER,
  RAW_BOOLEAN,
  RAW_OBJECT,
  RAW_ARRAY,
  RAW_FUNCTION,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}CascaderOption',

  propTypes: {
    level: {
      type: RAW_NUMBER,
      required: TRUE,
    },
    index: {
      type: RAW_NUMBER,
      required: TRUE,
    },
    option: {
      type: RAW_OBJECT,
      required: TRUE,
    },
    checkable: {
      type: RAW_BOOLEAN,
    },
    loadData: {
      type: RAW_FUNCTION,
    },
    loadingValues: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    selectedValue: {
      type: [RAW_STRING, RAW_NUMBER],
      required: TRUE,
    },
    checkedValues: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    indeterminateValues: {
      type: RAW_ARRAY,
      required: TRUE,
    },
  },

  computed: {
    interactive() {
      return !this.get('option.disabled') && !this.get('loading')
    },
    loading() {
      return Yox.array.has(
        this.get('loadingValues'),
        this.get('option.value')
      )
    },
    selected() {
      return this.get('option.value') == this.get('selectedValue')
    },
    checked() {
      if (this.get('indeterminate')) {
        return FALSE
      }
      return Yox.array.has(
        this.get('checkedValues'),
        this.get('option.value')
      )
    },
    indeterminate() {
      return Yox.array.has(
        this.get('indeterminateValues'),
        this.get('option.value')
      )
    },
  },

  methods: {
    onClick() {

      const me = this

      const option = me.get('option')
      const level = me.get('level')

      const options: any[] = []
      const values: any[] = []
      options[level] = option
      values[level] = option.value

      const isLeaf = !option.children && option.isLeaf !== FALSE

      me.fire(
        {
          type: 'select',
          ns: 'cascaderOption'
        },
        {
          options,
          values,
          level,
          checked: me.get('checked'),
          index: me.get('index'),
          isLeaf,
        }
      )

      const loadData = me.get('loadData')
      if (loadData && option.isLeaf === FALSE) {

        me.fire(
          {
            type: 'loading',
            ns: 'cascaderOption'
          },
          {
            options,
            values,
            level,
            loading: TRUE,
          }
        )

        loadData(option)
        .then(function (children: any[]) {
          delete option.isLeaf
          if (children && children.length > 0) {
            option.children = children
          }
        })
        .finally(function () {
          me.fire(
            {
              type: 'loading',
              ns: 'cascaderOption'
            },
            {
              options,
              values,
              level,
              loading: FALSE,
            }
          )
        })

      }

    },
    onCheckboxChange(event: CustomEventInterface, data: Data) {

      event.stop()

      const option = this.get('option')
      const level = this.get('level')

      const options: any[] = []
      const values: any[] = []
      options[level] = option
      values[level] = option.value

      this.fire(
        {
          type: 'check',
          ns: 'cascaderOption'
        },
        {
          options,
          values,
          level,
          checked: data.checked,
        }
      )

    }
  },

  components: {
    Icon,
    Checkbox,
  }

})
