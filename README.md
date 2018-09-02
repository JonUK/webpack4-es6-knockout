# webpack4-es6-knockout
Project to review the best use of Webpack 4 with ES6 and Knockout.

## Steps to run website
1. Run `npm install`
2. Run `npm run start` to start the Webpack Dev Server
3. Browse to [http://localhost:8080/](http://localhost:8080/)


## Steps to build production assets
1. Run `npm run build`

## Goals to achieve
1. **Done -** Setup Webpack Dev Server to serve content and reload page when content (JS, HTML or CSS / SASS) changes
2. **Done -** Use ES6 modules for Knockout components & view models
3. **Done -** Use ES6 classes for Knockout view models
4. **Done -** Add Knockout component HTML templates to Webpack bundle
5. **Done -** Use Babel to transpile ES6 to ES5
6. **Done -** Use Babel polyfill to support Promises and newer methods on native prototypes
7. **Done -** Use Webpack to compile multiple SASS files into a single CSS file and generate a sourcemap
8. **Done -** Use a SASS / CSS autoprefixer to automatically add vendor prefixes
9. **Not Done -** Use "scoped" component SASS files that only affect the elements in the component HTML templates
10. **Not Done -** Create a vendor bundle using Webpack. The bundle should contain just third-party scripts and the bundle can be reused by several pages alongside a page specific code bundle.
11. **Done -** Support handlebars syntax `{{title}}` for setting HTML text and HTML attribute values ([Knockout.Punches](http://mbest.github.io/knockout.punches/))
12. **Not Done -** Write unit tests against Knockout view models using Jasmine and potentially a test runner like Karama
13. **Done -** Add Bootstrap 4 SASS files then compile to CSS and bundle into a single CSS file
14: **Not Done -** Ensure Boostrap 4 variables can be used in our own CSS files (useful for media queries, colours etc)
15. **Not Done -** Create an npm package for a reusable component with zero dependencies and use this external component
16. **Not Done -** Review the best way to support HTML templates in different languages (KO binding vs compiled templates in multiple languages)
17. **Not Done -** Add a KO click handler to show how to use an ES6 arrow function to have the VM context for this.



## Possible things to look at implementing
1. **Not Done -** Use a fetch polyfill and create example where fetch is used to get data from the server
2. **Not Done -** Create a service worker and cache bundles. Ensure a suitable version number / hash is used to allow bundle to be updated.
3. **Not Done -** Review modern but still backwards compatible approach to routing. Move on from hash based routing?
4. **Not Done -** State store that manages and controls state changes for complicated a state scenario
5. **Not Done -** Review if "html-webpack-plugin" should be used to generate the HTML files to serve up the bundles
6. **Not Done -** Configure Webpack Dev Server for hot module reload (rather than just page reload) when changes made


## Reference articles
https://github.com/abdennour/knockout-es6-components-webpack-boilerplate
<br />
https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1
<br />
https://github.com/vkrol/knockout-webpack-example
<br />
https://github.com/johnligt/Knockout-TypeScript-Webpack-Starter