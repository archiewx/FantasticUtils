/**
 * 函数科里化
 * @flow
 */

function curry(func: Function): Function {
  const len = func.length
  return function curried(...args: Array<mixed>) {
    const params = [].slice.call(args)
    if (params.length < len) {
      // eslint-disable-next-line
      return function(...args: Array<mixed>) {
        const argsInner = [].slice.call(args)
        return curried.apply(this, params.concat(argsInner))
      }
    }
    return func.call(this, params)
  }
}

function addFunc(x: ?number, y: ?number): ?number {
  const total = x + y
  if (typeof total === 'number') {
    return total
  }
  return 0
}

curry(addFunc)

export default curry
