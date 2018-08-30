# webpack4-es6-knockout
Project to review the best use of Webpack 4 using ES6 and Knockout.

## Steps to run website
1. Run `npm install`
2. Run `npm run start` to start the Webpack Dev Server
3. Browse to `index.html`

## Steps to build production assets
1. Run `npm run build`

## Goals to achieve
1. **Done -** Setup Webpack Dev Server to serve content and reload page when content (JS, HTML or CSS / SASS) changes
2. **Done -** Use ES6 modules for Knockout components & view models
3. **Done -** Use ES6 classes for Knockout view models
4. **Done -** Add Knockout component HTML templates to Webpack bundle
5. **Not Done -** Use Babel to transpile ES6 to ES5
6. **Not Done -** Use Babel polyfill to support Promises and newer methods on native prototypes
7. **Not Done -** Use Webpack to compile multiple SASS files into a single CSS file
8. **Not Done -** Use "scoped" component SASS files that only affect the elements in the component HTML templates
9. **Not Done -** Create a vendor bundle using Webpack. The bundle should contain just third-party scripts and the bundle can be reused by several pages alongside a page specific code bundle.
10. **Not Done -** Support handlebars syntax `{{title}}` for setting HTML text and HTML element values ([Knockout.Punches](http://mbest.github.io/knockout.punches/))
11. **Not Done -** Write unit tests against Knockout view models using Jasmine and potentially a test runner like Karama


## Possible things to look at implementing
1. **Not Done -** Use a fetch polyfill and create example where fetch is used to get data from the server
2. **Not Done -** Create a service worker and cache bundles. Ensure a suitable version number / hash is used to allow bundle to be updated.
3. **Not Done -** Review modern but still backwards compatible approach to routing. Move on from hash based routing?


## Reference articles
https://github.com/abdennour/knockout-es6-components-webpack-boilerplate
<br />
https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1
<br />
https://github.com/vkrol/knockout-webpack-example
<br />
https://github.com/johnligt/Knockout-TypeScript-Webpack-Starter