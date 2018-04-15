// @flow

/**
 * 获取mix的类型
 * @param {*} mix
 */
function getTypes(mix: mixed): string {
  const typeStr = Object.prototype.toString.apply(mix)
  const nativeType = typeStr.slice(8, typeStr.length - 1)
  return nativeType
}

export default getTypes
