import '@babel/polyfill';
import './index.html';
import './main.scss';

import ko from 'knockout';
import ComponentRegistration from './components/component-registration';

class AppViewModel {
  constructor() {

    ComponentRegistration.registerComponents();

    console.log('Hello from AppViewModel');

    this.firstName = ko.observable('Mike');
    this.lastName = ko.observable('Smith');

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

ko.applyBindings(new AppViewModel(), document.getElementById('app'));