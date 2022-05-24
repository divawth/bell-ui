import Yox from 'yox'
import { TRUE } from '../constant'
import { setTreeCheckedKey } from '../util'

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

  const indeterminateKeys: string[] = []

  Yox.array.each(
    result,
    function (key) {
      setCheckedKey(data, result, indeterminateKeys, key, TRUE, checkStrictly)
    }
  )

  return {
    checkedKeys: result,
    indeterminateKeys,
  }

}

export function setCheckedKey(data: any[], checkedKeys: string[], indeterminateKeys: string[], key: string, checked: boolean, checkStrictly: boolean) {

  setTreeCheckedKey(
    data,
    checked,
    function (node) {
      return node.key === key
    },
    function (node) {
      return Yox.array.has(checkedKeys, node.key)
    },
    function (node) {
      checkedKeys.push(node.key)
    },
    function (node) {
      Yox.array.remove(checkedKeys, node.key)
    },
    !checkStrictly,
    function (node) {
      return indeterminateKeys.indexOf(node.key) >= 0
    },
    function (node) {
      indeterminateKeys.push(node.key)
    },
    function (node) {
      const index = indeterminateKeys.indexOf(node.key)
      if (index >= 0) {
        indeterminateKeys.splice(index, 1)
      }
    },
  )

}