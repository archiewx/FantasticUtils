/**
 * 节流
 * @flow
 */

function throttle(
  func: (...args: Array<mixed>) => mixed,
  interval: number = 0
): (...args: Array<mixed>) => mixed {
  return func
}

export default throttle
