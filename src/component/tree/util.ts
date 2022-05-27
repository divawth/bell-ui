import Yox from 'yox'
import { TRUE } from '../constant'
import { getNodesProps, renderNodesProps, setTreeCheckedKey } from '../util'

export function getLastNodeKey(nodes: any[]) {
  const node = Yox.array.last(nodes)
  return node.key
}

function expandAll(data: any[], expandedKeys: string[]) {
  const handleNode = function (child: any) {
    if (child.children && child.children.length) {
      if (!Yox.array.has(expandedKeys, child.key)) {
        expandedKeys.push(child.key)
      }
      Yox.array.each(
        child.children,
        handleNode
      )
    }
  }
  Yox.array.each(
    data,
    handleNode
  )
}

export function formatExpandedKeys(data: any[], expandedKeys: string[] | void, defaultExpandAll: boolean) {

  const result = expandedKeys
    ? expandedKeys.slice()
    : []

  const parents: any[] = []

  const handleNode = function (child: any) {

    if (Yox.array.has(result, child.key)) {
      Yox.array.each(
        parents,
        function (parent: any) {
          if (!Yox.array.has(result, parent.key)) {
            result.push(parent.key)
          }
        }
      )
    }

    parents.push(child)
    if (child.children) {
      Yox.array.each(
        child.children,
        handleNode
      )
    }
    parents.pop()

  }
  Yox.array.each(
    data,
    handleNode
  )

  if (defaultExpandAll) {
    expandAll(data, result)
  }

  return result

}

export function formatSelectedKeys(selectedKeys: string[] | void) {
  return selectedKeys
    ? selectedKeys.slice()
    : []
}

export function formatCheckedKeys(data: any[], checkedKeys: string[] | void, checkStrictly: boolean) {

  const result = checkedKeys
    ? checkedKeys.slice()
    : []

  const checkedNodes = []
  const indeterminateNodes = []

  setCheckedKey(
    data,
    checkedNodes,
    indeterminateNodes,
    result,
    result.map(function () {
      return TRUE
    }),
    checkStrictly
  )

  return {
    checkedNodes,
    indeterminateNodes,
  }

}

export function setCheckedKey(
  data: any[],
  checkedNodes: any[],
  indeterminateNodes: any[],
  keys: string[],
  checked: boolean[],
  checkStrictly: boolean
) {

  const checkedKeys = getNodesProps(checkedNodes, 'key').map(renderNodesProps)
  const indeterminateKeys = getNodesProps(indeterminateNodes, 'key').map(renderNodesProps)

  const interact = !checkStrictly

  const isChecked = function (key: string) {
    return checkedKeys.indexOf(key) >= 0
  }
  const addChecked = function (key: string, nodes: any[]) {
    checkedNodes.push(nodes)
    checkedKeys.push(key)
  }
  const removeChecked = function (key: string) {
    const index = checkedKeys.indexOf(key)
    if (index >= 0) {
      checkedNodes.splice(index, 1)
      checkedKeys.splice(index, 1)
    }
  }
  const isIndeterminate = function (key: string) {
    return indeterminateKeys.indexOf(key) >= 0
  }
  const addIndeterminate = function (key: string, nodes: any[]) {
    indeterminateNodes.push(nodes)
    indeterminateKeys.push(key)
  }
  const removeIndeterminate = function (key: string) {
    const index = indeterminateKeys.indexOf(key)
    if (index >= 0) {
      indeterminateNodes.splice(index, 1)
      indeterminateKeys.splice(index, 1)
    }
  }

  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i]
    setTreeCheckedKey(
      data,
      'key',
      checked[i],
      interact,
      function (k, nodes) {
        return Yox.array.last(nodes).key === key
      },
      isChecked,
      addChecked,
      removeChecked,
      isIndeterminate,
      addIndeterminate,
      removeIndeterminate,
    )
  }

}