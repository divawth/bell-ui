import { VNode } from 'yox'

export const PHASE_OPERATING = 1
export const PHASE_WAITING = 2
export const PHASE_FINISHED = 3

export function setStepIndex(children: VNode[]) {

  children.forEach(
    function (vnode: VNode, index: number) {
      if (vnode.tag === 'Step') {
        vnode.props.index = index
      }
    }
  )

}