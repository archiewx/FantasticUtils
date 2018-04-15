// @flow
import getType from './native-types'

const baseType = ['String', 'Number']

function empty(mix: mixed): boolean {
  const type = getType(mix)
  if (baseType.indexOf(type) !== -1) {
    return !!mix
  }
  if (mix instanceof Array) {
    return !!mix.length
  }
  if (mix instanceof Object) {
    return !!Object.keys(mix).length
  }
  return false
}

export default empty

export function good() {
  return 'good'
}
