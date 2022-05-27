import Yox from 'yox'

import template from './template/Tree.hbs'
// import './style/Tree.styl'

import Icon from '../icon/Icon'
import TreeNode from './TreeNode'

import {
  FALSE,
  UNDEFINED,
  RAW_STRING,
  RAW_ARRAY,
  RAW_BOOLEAN,
  RAW_FUNCTION,
  RAW_ALL,
  RAW_PARENT,
  RAW_CHILD,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  formatExpandedKeys,
  formatSelectedKeys,
  formatCheckedKeys,
  setCheckedKey,
  getLastNodeKey,
} from './util'

import {
  oneOf,
} from '../util'

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
    showCheckedStrategy: {
      type: oneOf([RAW_ALL, RAW_PARENT, RAW_CHILD]),
      value: RAW_ALL,
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

  data() {
    const data = this.get('data')
    const expandedKeys = this.get('expandedKeys')
    const defaultExpandedKeys = this.get('defaultExpandedKeys')
    const innerExpandedKeys = formatExpandedKeys(data, expandedKeys || defaultExpandedKeys, this.get('defaultExpandAll'))

    const selectedKeys = this.get('selectedKeys')
    const defaultSelectedKeys = this.get('defaultSelectedKeys')
    const innerSelectedKeys = formatSelectedKeys(selectedKeys || defaultSelectedKeys)

    const checkedKeys = this.get('checkedKeys')
    const defaultCheckedKeys = this.get('defaultCheckedKeys')
    const checkedResult = formatCheckedKeys(data, checkedKeys || defaultCheckedKeys, this.get('checkStrictly'))

    return {
      innerExpandedKeys,
      innerSelectedKeys,
      innerCheckedNodes: checkedResult.checkedNodes,
      innerIndeterminateNodes: checkedResult.indeterminateNodes,
    }
  },

  computed: {
    actualNodes(): any[] {

      const showCheckedStrategy = this.get('showCheckedStrategy')
      const innerCheckedNodes = this.get('innerCheckedNodes')

      if (showCheckedStrategy === RAW_ALL) {
        return innerCheckedNodes
      }

      const showChildStrategy = showCheckedStrategy === RAW_CHILD
      const actualNodes: any[] = []
      const innerCheckedKeys = this.get('innerCheckedKeys')

      Yox.array.each(
        innerCheckedNodes,
        function (nodes: any[]) {

          let isParentChecked = FALSE

          if (nodes.length > 1) {
            const parentKey = nodes[nodes.length - 2].key
            isParentChecked = innerCheckedKeys.indexOf(parentKey) >= 0
          }

          if (Yox.array.last(nodes).children) {
            // branch 节点，父级没选中时有效
            // 如果父级选中了，则有效的是父级
            if (!showChildStrategy && !isParentChecked) {
              actualNodes.push(nodes)
            }
          }
          else {
            // leaf 节点
            if (showChildStrategy || !isParentChecked) {
              actualNodes.push(nodes)
            }
          }
        }
      )

      return actualNodes

    },
    actualKeys() {
      const actualNodes = this.get('actualNodes')
      return actualNodes.map(getLastNodeKey)
    },
    innerCheckedKeys() {
      const innerCheckedNodes = this.get('innerCheckedNodes')
      return innerCheckedNodes.map(getLastNodeKey)
    },
    innerIndeterminateKeys() {
      const innerIndeterminateNodes = this.get('innerIndeterminateNodes')
      return innerIndeterminateNodes.map(getLastNodeKey)
    }
  },

  events: {
    expand: {
      listener(event, data) {
        event.stop()

        const expandedKeys = this.copy(
          this.get('innerExpandedKeys')
        )

        const { node, expanded } = data
        const { key } = node

        if (expanded) {
          expandedKeys.push(key)
        }
        else {
          Yox.array.remove(expandedKeys, key)
        }

        this.set({
          expandedKeys,
          innerExpandedKeys: expandedKeys,
        })

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

        const { node, selected } = data
        const { key } = node

        if (selected) {
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

        this.set({
          selectedKeys,
          innerSelectedKeys: selectedKeys,
        })

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

        const innerCheckedNodes = this.copy(
          this.get('innerCheckedNodes')
        )

        const innerIndeterminateNodes = this.copy(
          this.get('innerIndeterminateNodes')
        )

        const { node, checked } = data

        setCheckedKey(
          this.get('data'),
          innerCheckedNodes,
          innerIndeterminateNodes,
          [node.key],
          [checked],
          this.get('checkStrictly')
        )

        this.set({
          innerCheckedNodes,
          innerIndeterminateNodes,
        })

        const checkedKeys = this.get('actualKeys')
        this.set({
          checkedKeys,
        })

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

  beforePropsUpdate(props) {

    const {
      data,
      expandedKeys, defaultExpandAll,
      selectedKeys,
      checkedKeys, checkStrictly,
    } = props

    if (data !== this.get('data')
      || (expandedKeys !== UNDEFINED && expandedKeys !== this.get('expandedKeys'))
    ) {
      this.set({
        innerExpandedKeys: formatExpandedKeys(data, expandedKeys, defaultExpandAll)
      })
    }

    if (selectedKeys !== UNDEFINED && selectedKeys !== this.get('selectedKeys')) {
      this.set({
        selectedKeys: formatSelectedKeys(selectedKeys)
      })
    }

    if (data !== this.get('data')
      || (checkedKeys !== UNDEFINED && checkedKeys !== this.get('checkedKeys'))
      || (checkStrictly !== UNDEFINED && checkStrictly !== this.get('checkStrictly'))
    ) {
      const checkedResult = formatCheckedKeys(data, checkedKeys, checkStrictly)
      this.set({
        innerCheckedNodes: checkedResult.checkedNodes,
        innerIndeterminateNodes: checkedResult.indeterminateNodes,
      })
    }

  },

  components: {
    Icon,
    TreeNode,
  }

})
