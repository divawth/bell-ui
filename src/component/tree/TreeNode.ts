import Yox, { CustomEventInterface, Data } from 'yox'

import template from './template/TreeNode.hbs'
// import './style/TreeNode.styl'

import Icon from '../icon/Icon'
import Checkbox from '../checkbox/Checkbox'

import {
  TRUE,
  FALSE,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_ARRAY,
  RAW_OBJECT,
  RAW_FUNCTION,
} from '../constant'

import { isMac } from '../util'

const TreeNode = Yox.define({

  template,

  name: '${prefix}TreeNode',

  propTypes: {
    loadingKeys: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    expandedKeys: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    selectedKeys: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    checkedKeys: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    indeterminateKeys: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    selectable: {
      type: RAW_BOOLEAN,
    },
    checkable: {
      type: RAW_BOOLEAN,
    },
    block: {
      type: RAW_BOOLEAN,
    },
    showLine: {
      type: RAW_BOOLEAN,
    },
    showIndeterminate: {
      type: RAW_BOOLEAN,
    },
    loadData: {
      type: RAW_FUNCTION,
    },
    last: {
      type: RAW_BOOLEAN,
    },
    level: {
      type: RAW_NUMERIC,
    },
    node: {
      type: RAW_OBJECT,
    },
  },

  computed: {
    loading() {
      const loadingKeys = this.get('loadingKeys')
      const key = this.get('node.key')
      return Yox.array.has(loadingKeys, key)
    },
    expanded() {
      const expandedKeys = this.get('expandedKeys')
      const key = this.get('node.key')
      return Yox.array.has(expandedKeys, key)
    },
    checked() {
      if (this.get('checkable')) {
        const checkedKeys = this.get('checkedKeys')
        const key = this.get('node.key')
        return Yox.array.has(checkedKeys, key)
      }
      return FALSE
    },
    indeterminate() {
      if (this.get('showIndeterminate') && !this.get('checked')) {
        const indeterminateKeys = this.get('indeterminateKeys')
        const key = this.get('node.key')
        return Yox.array.has(indeterminateKeys, key)
      }
      return FALSE
    },
    selected() {
      if (this.get('selectable') && !this.get('node.disabled')) {
        const selectedKeys = this.get('selectedKeys')
        const key = this.get('node.key')
        return Yox.array.has(selectedKeys, key)
      }
      return FALSE
    },
    hasChildren() {
      const children = this.get('node.children')
      return children && children.length > 0
    },
    isLeaf() {
      if (this.get('node.isLeaf') === FALSE) {
        return FALSE
      }
      return !this.get('hasChildren')
    }
  },

  methods: {
    onExpandClick() {

      const me = this

      const node = me.get('node')
      const expanded = !me.get('expanded')

      const fireExpandEvent = function () {
        me.fire(
          {
            type: 'expand',
            ns: 'treeNode'
          },
          {
            node,
            expanded,
          }
        )
      }

      if (expanded) {
        // 如果是展开，需判断是否要加载数据
        const loadData = me.get('loadData')
        if (loadData && node.isLeaf === FALSE) {

          me.fire(
            {
              type: 'loading',
              ns: 'treeNode'
            },
            {
              node,
              loading: TRUE,
            }
          )

          loadData(node)
          .then(function (children: any[]) {
            delete node.isLeaf
            if (children && children.length > 0) {
              node.children = children
              fireExpandEvent()
            }
          })
          .finally(function () {
            me.fire(
              {
                type: 'loading',
                ns: 'treeNode'
              },
              {
                node,
                loading: FALSE,
              }
            )
          })

          return
        }
      }

      fireExpandEvent()

    },
    onSelectClick(event: CustomEventInterface) {

      const node = this.get('node')
      const selected = this.get('selected')

      const originalEvent = event.originalEvent as MouseEvent

      this.fire(
        {
          type: 'select',
          ns: 'treeNode'
        },
        {
          node,
          selected: !selected,
          multiple: isMac
            ? originalEvent.metaKey
            : originalEvent.ctrlKey
        }
      )

    },
    onCheckClick() {

      // @ts-ignore
      this.fireCheck(
        !this.get('checked')
      )

    },
    onCheckboxChange(event: CustomEventInterface, data: Data) {

      event.stop()

      // @ts-ignore
      this.fireCheck(data.checked)

    },

    fireCheck(checked: boolean) {

      const node = this.get('node')

      this.fire(
        {
          type: 'check',
          ns: 'treeNode'
        },
        {
          node,
          checked,
        }
      )

    }
  },

  components: {
    Icon,
    Checkbox,
  }

})

TreeNode.components.TreeNode = TreeNode

export default TreeNode
