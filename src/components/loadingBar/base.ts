import Yox from 'yox'

import { NULL, TRUE } from '../constant'

import LoadingBar from './LoadingBar'

interface Config {
  type?: string,
  color?: string,
  height?: number,
  percent?: number
}

let instance = NULL

function add(props: Config | void) {

  const wrapper = Yox.dom.find('#${prefix}loadingbar-wrapper') as HTMLElement

  instance = new Yox(
    Yox.object.extend(
      {
        el: wrapper,
        props,
      },
      LoadingBar
    )
  )

  return instance

}

function remove() {
  if (instance) {
    instance.destroy()
    instance = NULL
  }
}

export default {
  // 开始从 0 显示进度条，并自动加载进度
  start(options?: Config) {
    if (instance) {
      remove()
    }
    return add(options)
  },
  // 结束进度条，自动补全剩余进度
  finish() {
    if (instance) {
      instance.set('percent', 100)
      setTimeout(remove, 300)
    }
  },
  // 精确加载到指定的进度
  update(data: Config) {
    if (instance) {
      instance.set(data)
    }
  }
}


