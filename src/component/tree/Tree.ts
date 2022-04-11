import Yox from 'yox'

import template from './template/Tree.hbs'
// import './style/Tree.styl'

import Icon from '../icon/Icon'
import TreeNode from './TreeNode'

import {
  RAW_STRING,
  RAW_ARRAY,
  RAW_BOOLEAN,
  RAW_FUNCTION,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  expandAll,
  formatExpandedKeys,
  formatCheckedKeys,
  setCheckedKey,
} from './util'

export default Yox.define({

  template,

  name: '${prefix}Tree',

  propTypes: {
    data: {
      type: RAW_ARRAY,
    },
    defaultExpandedKeys: {
      type: RAW_ARRAY,
    },
    defaultSelectedKeys: {
      type: RAW_ARRAY,
    },
    defaultCheckedKeys: {
      type: RAW_ARRAY,
    },
    defaultExpandAll: {
      type: RAW_BOOLEAN,
    },
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
    checkStrictly: {
      type: RAW_BOOLEAN,
    },
    selectable: {
      type: RAW_BOOLEAN,
    },
    checkable: {
      type: RAW_BOOLEAN,
    },
    multiple: {
      type: RAW_BOOLEAN,
    },
    showLine: {
      type: RAW_BOOLEAN,
    },
    blockNode:  {
      type: RAW_BOOLEAN,
    },
    loadData: {
      type: RAW_FUNCTION,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  computed: {
    innerExpandedKeys() {
      const data = this.get('data')
      const expandedKeys = this.get('expandedKeys')
      const defaultExpandedKeys = this.get('defaultExpandedKeys')

      const innerExpandedKeys = (expandedKeys || defaultExpandedKeys || []).slice()
      formatExpandedKeys(data, innerExpandedKeys)
      if (this.get('defaultExpandAll')) {
        expandAll(data, innerExpandedKeys)
      }

      return innerExpandedKeys
    },
    innerSelectedKeys() {
      const selectedKeys = this.get('selectedKeys')
      const defaultSelectedKeys = this.get('defaultSelectedKeys')
      return (selectedKeys || defaultSelectedKeys || []).slice()
    },
    innerCheckedKeys() {
      const data = this.get('data')
      const checkStrictly = this.get('checkStrictly')
      const checkedKeys = this.get('checkedKeys')
      const defaultCheckedKeys = this.get('defaultCheckedKeys')
      const innerDisabledKeys = this.get('innerDisabledKeys')

      const innerCheckedKeys = (checkedKeys || defaultCheckedKeys || []).slice()
      formatCheckedKeys(data, innerCheckedKeys, innerDisabledKeys, checkStrictly)

      return innerCheckedKeys
    },
    innerDisabledKeys() {
      const disabledKeys = this.get('disabledKeys')
      return (disabledKeys || []).slice()
    }
  },

  events: {
    expand: {
      listener(event, data) {
        event.stop()

        const expandedKeys = this.copy(
          this.get('innerExpandedKeys')
        )

        const { node } = data
        const { key } = node

        if (data.expanded) {
          expandedKeys.push(key)
        }
        else {
          Yox.array.remove(expandedKeys, key)
        }

        this.set('expandedKeys', expandedKeys)

        this.fire(
          {
            type: 'expand',
            ns: 'tree'
          },
          {
            expandedKeys,
            node,
          }
        )
      },
      ns: 'treeNode'
    },
    select: {
      listener(event, data) {
        event.stop()

        const selectedKeys = this.copy(
          this.get('innerSelectedKeys')
        )

        const { node } = data
        const { key } = node

        if (data.selected) {
          if (this.get('multiple') && data.multiple) {
            selectedKeys.push(key)
          }
          else {
            selectedKeys.length = 1
            selectedKeys[0] = key
          }
        }
        else {
          if (this.get('multiple') && !data.multiple && selectedKeys.length > 1) {
            selectedKeys.length = 1
            selectedKeys[0] = key
          }
          else {
            Yox.array.remove(selectedKeys, key)
          }
        }

        this.set('selectedKeys', selectedKeys)

        this.fire(
          {
            type: 'select',
            ns: 'tree'
          },
          {
            selectedKeys,
            node,
          }
        )
      },
      ns: 'treeNode'
    },
    check: {
      listener(event, data) {
        event.stop()

        const checkedKeys = this.copy(
          this.get('innerCheckedKeys')
        )

        const { checked, node } = data

        setCheckedKey(
          checkedKeys,
          this.get('innerDisabledKeys'),
          node.key,
          checked,
          this.get('checkStrictly'),
          this.get('data')
        )

        this.set('checkedKeys', checkedKeys)

        this.fire(
          {
            type: 'check',
            ns: 'tree'
          },
          {
            checkedKeys,
            node,
          }
        )
      },
      ns: 'treeNode'
    }
  },

  components: {
    Icon,
    TreeNode,
  }

})
