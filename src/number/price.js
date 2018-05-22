// @flow

class Price {
  static isPrice(num: ?number): boolean {
    if (Number.isNaN(num)) {
      return false
    }
    return true
  }

  static isZero(num: ?number): boolean {
    if (this.isPrice(num)) {
      num = Number(num)
    }
    return num === 0
  }
}

export default Price
