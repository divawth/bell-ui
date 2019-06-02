import { add } from './base'

let config = {}

let addNotice = function (type, arg) {
  let data = {}
  data.type = type

  if (Yox.is.string(arg)) {
    data.content = arg
  }
  else {
    Yox.object.extend(data, arg, config)
  }

  add(data)
}

let updateConfig = function (data) {
  if (data.duration) {
    config.duration = data.duration
  }

  if (data.top) {
    config.top = data.top
  }
}

let element = Yox.dom.createElement('div')
Yox.dom.prop(element, 'id', '${prefix}notice-wrapper')
Yox.dom.append(document.body, element)

Yox.prototype.$Notice = {
  success: function (arg) {
    addNotice('success', arg)
  },
  info: function (arg) {
    addNotice('info', arg)
  },
  warning: function (arg) {
    addNotice('warning', arg)
  },
  error: function (arg) {
    addNotice('error', arg)
  },
  loading: function (arg) {
    addNotice('loading', arg)
  },
  config: function (options) {
    updateConfig(options)
  },
  destroy: function () {
    config = {}
  }
}
