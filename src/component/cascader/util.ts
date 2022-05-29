import { TRUE } from '../constant'
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