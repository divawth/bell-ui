import Yox from 'yox'
import { FALSE, TRUE, UNDEFINED } from '../constant'

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

export function formatCheckedKeys(data: any[], checkedKeys: string[], disabledKeys: string[], checkStrictly: boolean) {
  Yox.array.each(
    checkedKeys,
    function (key) {
      setCheckedKey(checkedKeys, disabledKeys, key, TRUE, checkStrictly, data)
    }
  )
}

export function setCheckedKey(checkedKeys: string[], disabledKeys: string[], key: string, checked: boolean, checkStrictly: boolean, data: any[]) {

  const parents: any[] = []
  let node: any

  const handleNode = function (child: any) {

    if (child.key === key) {
      node = child
      return FALSE
    }

    parents.push(child)
    if (child.children) {
      let result = UNDEFINED
      Yox.array.each(
        child.children,
        function (child) {
          return result = handleNode(child)
        }
      )
      if (result === FALSE) {
        return result
      }
    }
    parents.pop()

  }
  Yox.array.each(
    data,
    handleNode
  )

  if (!node) {
    return
  }

  parents.reverse()

  const addNode = function (node: any, addChildren?: boolean) {
    if (Yox.array.has(disabledKeys, node.key)) {
      return
    }
    if (!Yox.array.has(checkedKeys, node.key)) {
      checkedKeys.push(node.key)
    }
    if (addChildren === TRUE && node.children) {
      Yox.array.each(
        node.children,
        function (node) {
          addNode(node, TRUE)
        }
      )
    }
  }

  const removeNode = function (node: any, removeChildren?: boolean) {
    if (Yox.array.has(disabledKeys, node.key)) {
      return
    }
    Yox.array.remove(checkedKeys, node.key)
    if (removeChildren === TRUE && node.children) {
      Yox.array.each(
        node.children,
        function (node) {
          removeNode(node, TRUE)
        }
      )
    }
  }

  if (checked) {
    addNode(node, !checkStrictly)
    if (!checkStrictly) {
      Yox.array.each(
        parents,
        function (parent: any) {

          if (Yox.array.has(disabledKeys, parent.key)) {
            return FALSE
          }

          // 看下兄弟节点是否全部勾选
          let allChecked = TRUE
          Yox.array.each(
            parent.children,
            function (node: any) {
              if (!Yox.array.has(checkedKeys, node.key)) {
                return allChecked = FALSE
              }
            }
          )
          if (allChecked) {
            addNode(parent)
          }
          else {
            removeNode(parent)
          }

        }
      )
    }
  }
  else {
    removeNode(node, !checkStrictly)
    if (!checkStrictly) {
      Yox.array.each(
        parents,
        function (parent) {
          removeNode(parent)
        }
      )
    }
  }

}