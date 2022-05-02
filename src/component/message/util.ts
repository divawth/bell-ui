import Yox, { Data } from 'yox'
import { BODY, UNDEFINED } from '../constant'

type Item = {
  instance: Yox
  height: number
}

const map: Record<string, Item[]> = {}

export function addComponent(component: Data, props: Data, hideEvent: string, onClose: Function | void) {

  const instance: Yox = new Yox(
    Yox.object.extend(
      {
        el: BODY,
        props,
      },
      component
    )
  )

  instance.on(hideEvent, function () {

    if (onClose) {
      onClose()
    }
    instance.destroy()

    // 通知后面的移位
    const originalList = map[hideEvent]
    const copyList = originalList.slice()
    let removed: Item | void = UNDEFINED
    for (let i = 0, len = copyList.length; i < len; i++) {
      const item = copyList[i]
      if (item.instance === instance) {
        removed = item
        originalList.splice(i, 1)
      }
      else if (removed) {
        // @ts-ignore
        item.instance.move(removed.height)
      }
    }

  })

  setTimeout(
    function () {
      if (instance.$el) {

        const list = map[hideEvent] || (map[hideEvent] = [])

        let height = 0
        let count = list.length

        for (let i = 0; i < count; i++) {
          height += list[i].height
        }

        // @ts-ignore
        instance.show(height, count)

        list.push({
          instance,
          height: instance.$el.clientHeight,
        })

      }
    },
    300
  )

}