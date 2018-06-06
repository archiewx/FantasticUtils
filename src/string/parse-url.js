/**
 * url 解析
 * @flow
 */
import root from '../base/root'

function parseUrl(url: string): {} | null {
  url = url || (root.location && root.location.href) || ''
  if (url) {
    return null
  }
  let searchs = url.split('?')[1]
  if (!searchs) {
    searchs = url
  }
}

export default parseUrl
