const puppeteer = require('puppeteer')
const mkdirp = require('mkdirp')
const fs = require('fs')
const os = require('os')
const path = require('path')

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

module.exports = async function setup() {
  const browser = await puppeteer.launch()
  global.__BROWSER__ = browser
  mkdirp.sync(DIR)
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint())
}
