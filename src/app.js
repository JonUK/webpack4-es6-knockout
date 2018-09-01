import '@babel/polyfill';
import './index.html';
import 'knockout-punches';

import ko from 'knockout';
import ComponentRegistration from './registration-components';
import BindingRegistration from './registration-bindings';
import FileModel from "./components/file-list/file-model";

class AppViewModel {
  constructor() {

    ComponentRegistration.registerComponents();
    BindingRegistration.registerBindings();

    console.log('Hello from AppViewModel');

    this.firstName = ko.observable('Mike');
    this.lastName = ko.observable('Smith');

    this.files = [
      new FileModel('VSCode-darwin-stable.zip', 76845743),
      new FileModel('atom-mac.zip', 146559757),
      new FileModel('WebStorm-2018.2.dmg', 232382597)
    ];

    // Very basic Promise example to check Promises have been polyfilled
    function getPromiseThatResolvesIn1Second() {
      return new Promise(resolve => {
        setTimeout(resolve, 1000);
      })
    }

    getPromiseThatResolvesIn1Second()
      .then(() => {
        this.lastName('Jones');
      })
  }
}

ko.punches.enableAll(); // Enable support for handlebars syntax
ko.applyBindings(new AppViewModel(), document.getElementById('app'));