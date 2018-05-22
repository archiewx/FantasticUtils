/**
 * @flow
 * 过滤分组
 */

export default function reducedFilter(data: any[], keys: string[], fn: (any) => boolean) {
  return data.filter(fn).map((el) =>
    keys.reduce((acc, key) => {
      acc[key] = el[key]
      return acc
    }, {})
  )
}
