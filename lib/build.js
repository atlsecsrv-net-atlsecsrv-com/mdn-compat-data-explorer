// From https://github.com/eduardoboucas/compat-report/blob/master/pre-build/build-data.js
// Licensed under the ISC License.
const compatData = require('mdn-browser-compat-data')
const fs = require('fs')
const path = require('path')

// const payload = {
//   api: compatData.api,
//   browsers: compatData.browsers,
//   css: compatData.css,
//   html: compatData.html,
//   http: compatData.http,
//   javascript: compatData.javascript,
//   svg: compatData.svg,
//   webdriver: compatData.webdriver,
//   webextensions: compatData.webextensions
// }

const payload = {
  browsers: compatData.browsers,
  css: compatData.css
}

fs.writeFile(
  path.resolve(
    __dirname,
    '..',
    'public',
    'data.json'
  ),
  JSON.stringify(payload),
  err => {
    if (err) {
      console.error(err)
    }
  }
)