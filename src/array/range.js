// @flow

function range(min: number = 0, max: number): Array<number> {
  const arr = []
  for (let i = min; i < max; i += 1) {
    arr.push(i)
  }
  return arr
}

export default range
