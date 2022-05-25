import Yox from 'yox'

import template from './template/Tree.hbs'
// import './style/Tree.styl'

import Icon from '../icon/Icon'
import TreeNode from './TreeNode'

import {
  UNDEFINED,
  RAW_STRING,
  RAW_ARRAY,
  RAW_BOOLEAN,
  RAW_FUNCTION,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  formatExpandedKeys,
  formatSelectedKeys,
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
      innerCheckedKeys: checkedResult.checkedKeys,
      innerIndeterminateKeys: checkedResult.indeterminateKeys,
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

        const checkedKeys = this.copy(
          this.get('innerCheckedKeys')
        )

        const innerIndeterminateKeys = this.copy(
          this.get('innerIndeterminateKeys')
        )

        const { node, checked } = data

        setCheckedKey(
          this.get('data'),
          checkedKeys,
          innerIndeterminateKeys,
          node.key,
          checked,
          this.get('checkStrictly')
        )

        this.set({
          checkedKeys,
          innerCheckedKeys: checkedKeys,
          innerIndeterminateKeys,
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
        innerCheckedKeys: checkedResult.checkedKeys,
        innerIndeterminateKeys: checkedResult.indeterminateKeys,
      })
    }

  },

  components: {
    Icon,
    TreeNode,
  }

})
