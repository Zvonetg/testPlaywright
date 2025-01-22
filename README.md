# Playwright Test

### Installation

$ npm install
node version v20 or higher
npm v10 or higher

npm i playwright


### Default Configuration

    {
      name: 'chromium',
      use: {
        headless: true,
        viewport: { width: 1680, height: 1050},
        ignoreHTTPSErrors: true,
        trace: 'on',
        screenshot: 'on',
        channel: "chrome",
        video: 'off'
      },

headless mode is on, feel free to change in pw config

### Run Test
npx playwright test --ui

### Debug Test
npx playwright test syskit.spec.js --debug


### Run Test in package.json

"scripts": 

"pwTest": "playwright test",
"pwUi": "playwright test --ui",
"pwChrome": "playwright test --project=chromium",
"pwDebug": "playwright test --debug"

Browser for test: Chrome (default)

For advanced Task I didn't want to write more tests because I can write a lot of them.
Bonus from my side for this task is a gitlab action which will be triggered every time when we push some changes.
This CI part is define in playwright.yml file.