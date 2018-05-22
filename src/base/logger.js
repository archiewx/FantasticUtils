/* eslint-disable */
// @flow

function log(...args: Array<mixed>): void {
  console.log(...args)
}

function warn(...args: Array<mixed>): void {
  console.warn(...args)
}

function error(...args: Array<mixed>): void {
  console.error(...args)
}

export default {
  log,
  warn,
  error
}
