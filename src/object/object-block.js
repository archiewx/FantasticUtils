// @flow

/**
 * 过滤对象字符串
 * @param {object} obj
 * @param {array} arr
 */
function objectBlock(obj: {}, arr: string[]): Object {
  return Object.keys(obj)
    .filter((key) => arr.indexOf(key) === -1)
    .reduce((acc, key) => {
      acc[key] = obj[key]
      return acc
    }, {})
}
export default objectBlock
