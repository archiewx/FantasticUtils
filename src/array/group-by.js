/**
 * 数组通过某一项分组
 * @flow
 */

function groupBy(arr, fn: string | number | Function) {
  const groups = arr.map(typeof fn === 'function' ? fn : (val) => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i])
    return acc
  }, {})
  return Object.keys(groups).map((_) => groups[_])
}

export default groupBy
