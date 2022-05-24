import Yox from 'yox'
import { TRUE } from '../constant'
import { setTreeCheckedKey } from '../util'

export function expandAll(data: any[], expandedKeys: string[]) {
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

export function formatExpandedKeys(data: any[], expandedKeys: string[]) {

  const parents: any[] = []

  const handleNode = function (child: any) {

    if (Yox.array.has(expandedKeys, child.key)) {
      Yox.array.each(
        parents,
        function (parent: any) {
          if (!Yox.array.has(expandedKeys, parent.key)) {
            expandedKeys.push(parent.key)
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

}

export function formatCheckedKeys(data: any[], checkedKeys: string[], checkStrictly: boolean) {
  Yox.array.each(
    checkedKeys,
    function (key) {
      setCheckedKey(data, checkedKeys, key, TRUE, checkStrictly)
    }
  )
}

export function setCheckedKey(data: any[], checkedKeys: string[], key: string, checked: boolean, checkStrictly: boolean) {

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
    !checkStrictly
  )

}