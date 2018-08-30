require('./index.html');
require('./main.css');

import ko from 'knockout';
import ComponentRegistration from './Components/component-registration';

class AppViewModel {
  constructor() {

    ComponentRegistration.registerComponents();

    console.log('Hello from AppViewModel');

    this.firstName = ko.observable('Mike');
    this.lastName = ko.observable('Smith');
  }
}

ko.applyBindings(new AppViewModel(), document.getElementById('app'));