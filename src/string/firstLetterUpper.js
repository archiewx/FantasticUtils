/**
 * 首字母大写
 * @flow
 */

function firstLetterUpper(letter: string): string {
  return letter[0].toUpperCase() + letter.slice(1, letter.length)
}

export default firstLetterUpper
