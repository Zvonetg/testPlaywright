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


### Run Test in with json scripts

"scripts": 

"pwTest": "playwright test",
"pwUi": "playwright test --ui",
"pwChrome": "playwright test --project=chromium",
"pwDebug": "playwright test --debug"

Browser for test: Chrome (default)

For advanced Task I didn't want to write more tests because I can write a lot of them.
Bonus from my side for this task is a gitlab action which will be triggered every time when we push some changes.
This CI part is define in playwright.yml file.

there is also video report that I upload as a PoC.

https://drive.google.com/drive/folders/19UIKVXOKUNHI89Y-AU3sI6pKQRE7IMpF

UI:

<img width="1578" alt="Image" src="https://github.com/user-attachments/assets/047b30df-6d8b-48ff-ab99-588b037238ac" />
