import Yox, { Data } from 'yox'

function getType(value: any) {
  return Object.prototype.toString.call(value).toLowerCase().slice(8, -1)
}

function checkInteger(rule: Data, value: any) {
  if (!Yox.is.numeric(value)) {
    return 'type'
  }

  value = +value

  if (value % 1 !== 0) {
    return 'type'
  }

  if (rule.hasOwnProperty('min') && value < rule.min) {
    return 'min'
  }

  if (rule.hasOwnProperty('max') && value > rule.max) {
    return 'max'
  }
}

function checkNumber(rule: Data, value: any) {
  if (!Yox.is.numeric(value)) {
    return 'type'
  }

  value = +value

  if (rule.hasOwnProperty('min') && value < rule.min) {
    return 'min'
  }

  if (rule.hasOwnProperty('max') && value > rule.max) {
    return 'max'
  }
}

function checkString(rule: Data, value: any) {

  if (value === '') {
    // 是否允许为空，默认不允许
    if (rule.empty === true) {
      return
    }
    else {
      return 'empty'
    }
  }

  if (!Yox.is.string(value)) {
    return 'type'
  }

  if (rule.hasOwnProperty('min') && value.length < rule.min) {
    return 'min'
  }

  if (rule.hasOwnProperty('max') && value.length > rule.max) {
    return 'max'
  }

  if (rule.hasOwnProperty('pattern')
    && !rule.pattern.test(value)
  ) {
    return 'pattern'
  }

}

function checkBoolean(rule: Data, value: any) {
  if (!Yox.is.boolean(value)) {
    return 'type'
  }
}

function checkEnum(rule: Data, value: any) {
  if (!Yox.array.has(rule.values, value)) {
    return 'type'
  }
}

function checkArray(rule: Data, value: any) {

  if (!value || !Yox.is.array(value)) {
    return 'type'
  }

  const { length } = value

  if (rule.hasOwnProperty('min') && length < rule.min) {
    return 'min'
  }

  if (rule.hasOwnProperty('max') && length < rule.max) {
    return 'max'
  }

  const { itemType } = rule
  if (!itemType) {
    return
  }

  for (let i = 0; i < length; i++) {
    if (getType(value[i]) !== itemType) {
      return 'itemType'
    }
  }

}

function checkObject(rule: Data, value: any) {
  if (!Yox.is.object(value)) {
    return 'type'
  }
}

class Validator {

  rules: Record<string, (rule: Data, value: any) => string | void>

  constructor() {
    this.rules = {
      int: checkInteger,
      integer: checkInteger,
      number: checkNumber,
      string: checkString,
      bool: checkBoolean,
      boolean: checkBoolean,
      enum: checkEnum,
      array: checkArray,
      object: checkObject,
    }
  }

  validate(data: Data, rules: Data, messages: Data) {

    const errors = {}

    for (let key in rules) {

      let rule = rules[key]

      switch (getType(rule)) {
        case 'string':
          rule = {
            type: rule,
          }
          break

        case 'array':
          rule = {
            type: 'enum',
            values: rule,
          }
          break

        case 'regexp':
          rule = {
            type: 'string',
            pattern: rule,
          }
          break
      }

      if (!Yox.is.object(rule)) {
        throw new TypeError(`${key}'s rule is not found.`)
      }

      let errorReason: string | void

      if (data.hasOwnProperty(key)) {
        if (rule.validate) {
          errorReason = rule.validate(data[key], data)
        }
        else {
          errorReason = this.rules[rule.type](rule, data[key])
        }
      }
      else {
        // 默认必传
        if (rule.required !== false) {
          errorReason = 'required'
        }
        else {
          continue
        }
      }

      if (errorReason) {

        let message = messages && messages[key] && messages[key][errorReason]
        if (Yox.is.string(message)) {
          errors[key] = message
        }
        else {
          errors[key] = errorReason
        }

      }

    }

    if (Object.keys(errors).length > 0) {
      return errors
    }

  }
}

export {
  Validator,
  checkInteger,
  checkNumber,
  checkString,
  checkBoolean,
  checkEnum,
  checkObject,
  checkArray,
}