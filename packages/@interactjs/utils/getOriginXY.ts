import { PerActionDefaults } from '@interactjs/core/defaultOptions'
import { ActionName } from '@interactjs/core/scope'
import { HasGetRect } from '@interactjs/types'

import { rectToXY, resolveRectLike } from './rect'

export default function (
  target: HasGetRect & { options: PerActionDefaults },
  element: Node,
  actionName?: ActionName,
) {
  const actionOptions = (target.options as any)[actionName]
  const actionOrigin = actionOptions && actionOptions.origin
  const origin = actionOrigin || target.options.origin

  const originRect = resolveRectLike(origin, target, element, [target && element])

  return rectToXY(originRect) || { x: 0, y: 0 }
}
