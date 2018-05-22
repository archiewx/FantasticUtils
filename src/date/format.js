// @flow

function dateFormat(formats: string, time: number | string | Date): string {
  return [formats, time].join('')
}

export default dateFormat
