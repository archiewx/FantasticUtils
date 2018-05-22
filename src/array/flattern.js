/**
 * 数组扁平化
 * @flow
 */

function flatten(depthArray: Array<mixed>): Array<mixed> {
  const result = []
  depthArray.forEach((item) => {
    if (Array.isArray(item)) {
      // eslint-disable-next-line
      result.push(...flatten(item))
    } else {
      result.push(item)
    }
  })
  return result
}

export default flatten
