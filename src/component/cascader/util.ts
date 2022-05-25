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

  let selectedOptions: any[]
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

  // 如果是单选模式，selected 等价于 checked
  if (!multiple) {
    selectedOptions = checkedOptions[0]
  }

  return {
    checkedOptions,
    selectedOptions: selectedOptions || [],
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

  const checkedIdentities = getOptionsProps(checkedOptions, 'value').map(renderValue)

  const isChecked = function (option, parents) {
    const { identity } = combine(option, parents)
    return checkedIdentities.indexOf(identity) >= 0
  }
  const addChecked = function (option, parents) {
    const { options, identity } = combine(option, parents)
    checkedOptions.push(options)
    checkedIdentities.push(identity)
  }
  const removeChecked = function (option, parents) {
    const { identity } = combine(option, parents)
    const index = checkedIdentities.indexOf(identity)
    if (index >= 0) {
      checkedOptions.splice(index, 1)
      checkedIdentities.splice(index, 1)
    }
  }

  let isIndeterminate: (option, parent) => boolean
  let addIndeterminate: (option, parent) => void
  let removeIndeterminate: (option, parent) => void

  if (indeterminateOptions) {
    const indeterminateIdentities = getOptionsProps(indeterminateOptions, 'value').map(renderValue)
    isIndeterminate = function (option, parents) {
      const { identity } = combine(option, parents)
      return indeterminateIdentities.indexOf(identity) >= 0
    }
    addIndeterminate = function (option, parents) {
      const { options, identity } = combine(option, parents)
      indeterminateOptions.push(options)
      indeterminateIdentities.push(identity)
    }
    removeIndeterminate = function (option, parents) {
      const { identity } = combine(option, parents)
      const index = indeterminateIdentities.indexOf(identity)
      if (index >= 0) {
        indeterminateOptions.splice(index, 1)
        indeterminateIdentities.splice(index, 1)
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