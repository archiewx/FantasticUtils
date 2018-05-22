/**
 * 图片压缩
 * @flow
 */
function imageCompress(
  file: File,
  options: {
    width?: number,
    height?: number,
    level: number,
    scale?: boolean,
    output?: 'base64' | 'blob' | 'text' | 'array-buffer',
    debug?: boolean
  } = { level: 5, output: 'base64', scale: true }
): Promise<string | Blob> {
  if (!/image\//.test(file.type)) {
    throw new TypeError('请传入图片文件')
  }
  if (options.level < 1) {
    throw new TypeError('option[level]的取值范围(1-9]')
  }

  options = { ...options, level: options.level / 10 }
  const fileReader = new FileReader()
  fileReader.readAsDataURL(file)

  const image = new Image()
  // 图片读取完成
  fileReader.onload = (e) => {
    image.src = e.target.result
  }
  const canvas = window.document.createElement('canvas')
  const context = canvas.getContext('2d')
  // 图片加载完成
  return new Promise((resolve, reject) => {
    image.onload = () => {
      let targetHeight = 0
      let targetWidth = 0
      const originHeight = image.height
      const originWidth = image.width
      if (options.scale) {
        // 按照缩放比例
        targetHeight = originHeight * options.level
        targetWidth = originWidth * options.level
      } else {
        targetHeight = options.height
        targetHeight = options.width
      }

      canvas.width = targetWidth
      canvas.height = targetHeight
      context.clearRect(0, 0, targetWidth, targetHeight)
      context.drawImage(image, 0, 0, targetWidth, targetHeight)
      const blob = canvas.toBlob()
      const resultFileReader = new FileReader()
      switch (options.output) {
        case 'text':
          resultFileReader.readAsText(blob)
          resultFileReader.onload = (e) => {
            resolve(e.target.result)
          }
          break
        case 'blob':
          resolve(blob)
          break
        case 'array-buffer':
          resultFileReader.readAsArrayBuffer(blob)
          resultFileReader.onload = (e) => {
            resolve(e.target.result)
          }
          break
        default:
          resultFileReader.readAsDataURL(blob)
          resultFileReader.onload = (e) => {
            resolve(e.target.result)
          }
      }
    }
    image.onerror = reject()
  })
}

export default imageCompress
