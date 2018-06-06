/**
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
 * @flow
 */

const browserList: BrowserType[] = [
  { name: 'Firefox', inspecter: 'Firefox', engine: 'Gecko' },
  { name: 'Chrome', inspecter: 'Chrome', engine: 'AppleWebkit' },
  { name: 'Chromium', inspecter: 'Chromium', engine: 'Blink' },
  { name: 'Safari', inspecter: 'Safari', engine: 'AppleWebkit' },
  {
    name: 'Opera',
    inspecter: 'Opera',
    engine: 'Blink'
  },
  { name: 'Internet Explorer', inspecter: ';MSIE', engine: 'Trident' }
]

/**
 * 解析userAgent
 */
export function clientInfo(): Environment | null {
  if (!window) {
    return null
  }
  const { userAgent } = window.navigator
  const environmentStr: string | null = userAgent.match(/\([\w|\s|;]+\)/)[0]
  const environment: string[] =
    (environmentStr && environmentStr.replace(/\(|\)/g, '').split(/;|\s/)) || []
  const os: string = environment[0] || ''
  const cpu: string = environment[2] || ''
  const osVersion = environment[environment.length - 1]
  const browser: BrowserType | void = browserList.find(
    (item: BrowserType) => userAgent.indexOf(item.inspecter) !== -1
  )
  if (browser) {
    return {
      os,
      osVersion,
      cpu,
      browser: browser.name,
      engine: browser.engine
    }
  }
  return null
}

export default clientInfo
