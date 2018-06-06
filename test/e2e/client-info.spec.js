import { clientInfo } from '../../src/window/client-info'

describe('browser', () => {
  let page = null
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage()
    await page.goto('https://www.baidu.com')
  })
  afterAll(async () => {
    await page.close()
  })
  it('system info', async () => {
    const systemInfo = await page.evaluate(() => {
      return clientInfo()
    })
    console.log(systemInfo)
  })
})
