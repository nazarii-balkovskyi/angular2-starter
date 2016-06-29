#angular2-starter
webpack starter project for angular 2 development.

#Getting started

##Required dependenies
What do you need to start:
* node and npm installed
* Ensure that you are using latest version of Node v4.x.x.x and NPM 3.x.x.x

If you have those, you have to install next items globally:
* webpack (`npm i webpack --g`)
* typings (`npm i typings --g`)
* typescript (`npm i typescript --g`)
* karma (`npm i karma --g`)
* protractor (`npm i protractor --g`)

##Installing dependencies
* run `npm i`
* run `npm start` - it starts `webpack-dev-server` on `localhost:3000`

##Making production build
```
npm run build:prod
npm run server:prod
```

##Configuration
All configurations can be found in `config` directory.

##Project structure
```
angular2-starter/
 ├──config/                    * configuration
 |   ├──helpers.js             * helper functions
 |   ├──spec-bundle.js         * angular 2 testing environment
 |   ├──karma.conf.js          * karma config for unit tests
 |   ├──protractor.conf.js     * protractor config for end-to-end tests
 │   ├──webpack.dev.js         * development webpack config
 │   ├──webpack.prod.js        * production webpack config
 │   └──webpack.test.js        * testing webpack config
 │
 ├──src/                       * source directory
 |   ├──main.ts                * main entry file 
 │   │
 |   ├──index.html             * Index.html: where we generate our index page
 │   │
 |   ├──polyfills.ts           * polyfills file
 │   │
 |   ├──vendor.ts              * vendor file
 │   │
 │   ├──app/                   * WebApp: folder
 │   │   ├──app.routess.ts     * routings for our application
 │   │   ├──app.component.html * html template for our application
 │   │   └──app.component.ts   * App.ts: a simple version of our App component components
 │
 ├──tslint.json                * typescript lint config
 ├──typedoc.json               * typescript documentation generator
 ├──tsconfig.json              * config that webpack uses for typescript
 ├──typings.json               * our typings manager
 ├──package.json               * what npm uses to manage it's dependencies
 └──webpack.config.js          * webpack main configuration file
```