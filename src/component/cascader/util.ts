import Yox from 'yox'

import { FALSE, TRUE } from '../constant'
import { getNodesProps, renderNodesProps, setTreeCheckedKey } from '../util'

export function formatOptions(
  options: any[] | void,
  values: any[] | void,
  multiple: boolean,
) {

  if (!options) {
    options = []
  }
  if (!values) {
    values = []
  }
  if (values.length > 0 && !multiple) {
    values = [
      values
    ]
  }

  const checkedOptions = []
  const indeterminateOptions = []

  setCheckedOptions(
    options,
    checkedOptions,
    indeterminateOptions,
    values,
    values.map(function () {
      return TRUE
    })
  )

  return {
    checkedOptions,
    selectedOptions: checkedOptions[0] || [],
    indeterminateOptions,
  }

}

function searchOption(text: string, query: string): string {
  const pattern = new RegExp(query, 'gi')
  return text.replace(pattern, function ($0) {
    return '<em>' + $0 + '</em>'
  })
}

export function searchOptions(
  options: any[] | void,
  checkedOptions: any[],
  query: string,
) {

  if (!options) {
    options = []
  }

  const list = []

  const flatten = function (option: any, stack: any[], level: number, index: number) {
    stack.push(option)
    if (option.children) {
      Yox.array.each(
        option.children,
        function (option, index) {
          flatten(option, Yox.object.copy(stack), level + 1, index)
        }
      )
    }
    else {
      list.push({
        options: stack,
        level,
        index,
      })
    }
  }

  // 把树形结构压平
  Yox.array.each(
    options,
    function (option, index) {
      flatten(option, [], 1, index)
    }
  )

  const result = []
  const selectedMap = {}

  Yox.array.each(
    checkedOptions,
    function (item) {
      const key = renderNodesProps(
        item.map(function (child: any) {
          return child.value
        })
      )
      selectedMap[key] = TRUE
    }
  )

  Yox.array.each(
    list,
    function (item) {

      const texts = []
      const values = []

      let disabled = FALSE

      Yox.array.each(
        item.options,
        function (option: any) {
          texts.push(option.text)
          values.push(option.value)
          if (option.disabled) {
            disabled = TRUE
          }
        }
      )

      const originalText = renderNodesProps(texts)
      const searchText = searchOption(originalText, query)
      if (originalText !== searchText) {
        result.push({
          options: item.options,
          level: item.level,
          index: item.index,
          text: searchText,
          texts,
          values,
          disabled,
          checked: selectedMap[renderNodesProps(values)],
        })
      }

    }
  )

  return result

}

export function setCheckedOptions(
  options: any[],
  checkedOptions: any[],
  indeterminateOptions: any[],
  values: any[],
  checked: any[]
) {

  const checkedKeys = getNodesProps(checkedOptions, 'value').map(renderNodesProps)
  const indeterminateKeys = getNodesProps(indeterminateOptions, 'value').map(renderNodesProps)

  const isChecked = function (key: string) {
    return checkedKeys.indexOf(key) >= 0
  }
  const addChecked = function (key: string, options: any[]) {
    checkedOptions.push(options)
    checkedKeys.push(key)
  }
  const removeChecked = function (key: string) {
    const index = checkedKeys.indexOf(key)
    if (index >= 0) {
      checkedOptions.splice(index, 1)
      checkedKeys.splice(index, 1)
    }
  }
  const isIndeterminate = function (key: string) {
    return indeterminateKeys.indexOf(key) >= 0
  }
  const addIndeterminate = function (key: string, options: any[]) {
    indeterminateOptions.push(options)
    indeterminateKeys.push(key)
  }
  const removeIndeterminate = function (key: string) {
    const index = indeterminateKeys.indexOf(key)
    if (index >= 0) {
      indeterminateOptions.splice(index, 1)
      indeterminateKeys.splice(index, 1)
    }
  }

  for (let i = 0, len = values.length; i < len; i++) {
    const key = renderNodesProps(values[i])
    setTreeCheckedKey(
      options,
      'value',
      checked[i],
      TRUE,
      function (k) {
        return k === key
      },
      isChecked,
      addChecked,
      removeChecked,
      isIndeterminate,
      addIndeterminate,
      removeIndeterminate
    )
  }

}