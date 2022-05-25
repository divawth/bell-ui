import Yox from 'yox'
import { FALSE, TRUE, UNDEFINED } from '../constant'
import { setTreeCheckedKey } from '../util'

export function isLeafOption(option: any) {
  return !option.children && option.isLeaf !== FALSE
}

export function getOptionsProps(options: any[], propName: string) {

  const result: any[] = []

  Yox.array.each(
    options,
    function (option: any) {
      result.push(
        Yox.is.array(option)
        ? getOptionsProps(option, propName)
        : option[propName]
      )
    }
  )

  return result

}

export function renderValue(value: any) {
  if (Yox.is.array(value)) {
    return value.join(' / ')
  }
  return value
}

function combine(option: any, parents: any[]) {

  const options = [option]
  const values = [option.value]

  Yox.array.each(
    parents,
    function (parent) {
      options.unshift(parent)
      values.unshift(parent.value)
    }
  )

  return {
    options,
    values,
    identity: renderValue(values),
  }

}

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
  const indeterminateOptions = multiple ? [] : UNDEFINED

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
    indeterminateOptions: indeterminateOptions || [],
  }

}

export function setCheckedOptions(
  options: any[],
  checkedOptions: any[],
  indeterminateOptions: any[] | void,
  values: any[],
  checked: any[]
) {

  const checkedKeys = getOptionsProps(checkedOptions, 'value').map(renderValue)

  const isChecked = function (option, parents) {
    const { identity } = combine(option, parents)
    return checkedKeys.indexOf(identity) >= 0
  }
  const addChecked = function (option, parents) {
    const { options, identity } = combine(option, parents)
    checkedOptions.push(options)
    checkedKeys.push(identity)
  }
  const removeChecked = function (option, parents) {
    const { identity } = combine(option, parents)
    const index = checkedKeys.indexOf(identity)
    if (index >= 0) {
      checkedOptions.splice(index, 1)
      checkedKeys.splice(index, 1)
    }
  }

  let isIndeterminate: (option, parent) => boolean
  let addIndeterminate: (option, parent) => void
  let removeIndeterminate: (option, parent) => void

  if (indeterminateOptions) {
    const indeterminateKeys = getOptionsProps(indeterminateOptions, 'value').map(renderValue)
    isIndeterminate = function (option, parents) {
      const { identity } = combine(option, parents)
      return indeterminateKeys.indexOf(identity) >= 0
    }
    addIndeterminate = function (option, parents) {
      const { options, identity } = combine(option, parents)
      indeterminateOptions.push(options)
      indeterminateKeys.push(identity)
    }
    removeIndeterminate = function (option, parents) {
      const { identity } = combine(option, parents)
      const index = indeterminateKeys.indexOf(identity)
      if (index >= 0) {
        indeterminateOptions.splice(index, 1)
        indeterminateKeys.splice(index, 1)
      }
    }
  }

  for (let i = 0, len = values.length; i < len; i++) {
    const value = renderValue(values[i])
    setTreeCheckedKey(
      options,
      checked[i],
      function (option, parents) {
        const { identity } = combine(option, parents)
        return identity === value
      },
      isChecked,
      addChecked,
      removeChecked,
      TRUE,
      isIndeterminate,
      addIndeterminate,
      removeIndeterminate
    )
  }

}