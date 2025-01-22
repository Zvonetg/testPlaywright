# Playwirght Test

# WebPerformanceDashboard

### Installation

$ npm install
node version v20 or higher
npm v10 or higher

npm i playwright


### Default Configuration

    {
      name: 'chromium',
      use: {
        headless: false,
        viewport: { width: 1680, height: 1050},
        ignoreHTTPSErrors: true,
        trace: 'on',
        screenshot: 'on',
        channel: "chrome",
        video: 'off'
      },

headless mode is off with default

### Run Test in package.json

"scripts": 

"pwTest": "playwright test",
"pwUi": "playwright test --ui",
"pwChrome": "playwright test --project=chromium",
"pwDebug": "playwright test --debug"



