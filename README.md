# GWG - Worker

# WebPerformanceDashboard

- [Installation](#Installation)
- [Run locally](#Run-locally)
- [Production build](#Production-build)
- [Run All Acceptance Tests](#Run-All-Acceptance-Tests)
- [Run Single Acceptance Test](#Run-Single-Acceptance-Test)
- [Tips](#Tips)

### Installation

```bash
$ npm install
```

### Run locally


Note, you will also need to run the [login service](gwg-login-web/README.md)  and the [GWG backend](gwg/README.md##Running the Service) to use the app locally.

```bash
$ npm run start
```

### Production build

```bash
$ npm run build
```

### Run All Acceptance Tests

1. Start the app

```bash
$ npm run start
```

1. Run all tests

```bash
$ npm run iotest
```

### Run Single Acceptance Test

1. Start the app

```bash
$ npm run start
```

2. Run single one

```bash
Simpy go the spec file you want to test in wdiotests/specs/file.spec.ts
From the VSCode debug profile drop down, select OC-WEb Debug
Hit F5 and you should be able to run those specific tests.
Note that we are telling VSCode which file to test by the one you have opens
```

or

```
./node_modules/.bin/wdio ./wdio.conf.debug.js --spec ./wdiotests/init.spec.ts
```

### Tips

- install Apollo Client Developer Tools to explore data model in Inspector tab (https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm)
- install Apollo Client VS Code to enable autocomplete for your queries (https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo)
- sync graphql schema running `npm run sync-oc-grapqhl-schema`, be need to be up

<!-- end::body[] -->
