import Yox from 'yox'

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
} from '../constant'

import { isMac } from '../util'

const TreeNode = Yox.define({

  template,

  name: '${prefix}TreeNode',

  propTypes: {
    expandedKeys: {
      type: RAW_ARRAY,
    },
    selectedKeys: {
      type: RAW_ARRAY,
    },
    checkedKeys: {
      type: RAW_ARRAY,
    },
    disabledKeys: {
      type: RAW_ARRAY,
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
    last: {
      type: RAW_BOOLEAN,
    },
    indent: {
      type: RAW_NUMERIC,
    },
    node: {
      type: RAW_OBJECT,
    },
  },

  computed: {
    expanded() {
      const expandedKeys = this.get('expandedKeys')
      const key = this.get('node.key')
      return Yox.array.has(expandedKeys, key)
    },
    checked() {
      if (!this.get('checkable')) {
        return FALSE
      }
      const checkedKeys = this.get('checkedKeys')
      const key = this.get('node.key')
      return Yox.array.has(checkedKeys, key)
    },
    indeterminate() {
      let result = FALSE
      if (this.get('showIndeterminate') && !this.get('checked')) {
        const checkedKeys = this.get('checkedKeys')
        const disabledKeys = this.get('disabledKeys')
        const children = this.get('node.children')
        if (children) {
          Yox.array.each(
            children,
            function (child: any) {
              if (!Yox.array.has(disabledKeys, child.key)
                && Yox.array.has(checkedKeys, child.key)
              ) {
                result = TRUE
                return FALSE
              }
            }
          )
        }
      }
      return result
    },
    selected() {
      if (!this.get('selectable') || this.get('disabled')) {
        return FALSE
      }
      const selectedKeys = this.get('selectedKeys')
      const key = this.get('node.key')
      return Yox.array.has(selectedKeys, key)
    },
    disabled() {
      const disabledKeys = this.get('disabledKeys')
      const key = this.get('node.key')
      return Yox.array.has(disabledKeys, key)
    },
    hasChildren() {
      const children = this.get('node.children')
      return children && children.length > 0
    }
  },

  methods: {
    handleExpandClick() {

      const node = this.get('node')
      const expanded = this.get('expanded')

      this.fire(
        {
          type: 'expand',
          ns: 'treeNode'
        },
        {
          node,
          expanded: !expanded,
        }
      )

    },
    handleSelectClick(event) {

      const node = this.get('node')
      const selected = this.get('selected')

      const originalEvent = event.originalEvent

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
    handleCheckClick() {

      const node = this.get('node')

      this.fire(
        {
          type: 'check',
          ns: 'treeNode'
        },
        {
          node,
          checked: !this.get('checked'),
        }
      )

    },
    handleCheckedChange(data) {

      const node = this.get('node')

      this.fire(
        {
          type: 'check',
          ns: 'treeNode'
        },
        {
          node,
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

TreeNode.components.TreeNode = TreeNode

export default TreeNode
