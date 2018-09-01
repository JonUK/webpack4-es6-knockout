import '@babel/polyfill';
import './index.html';
import 'knockout-punches';

import ko from 'knockout';
import ComponentRegistration from './registration-components';
import BindingRegistration from './registration-bindings';

class AppViewModel {
  constructor() {
    ComponentRegistration.registerComponents();
    BindingRegistration.registerBindings();
  }
}

ko.punches.enableAll(); // Enable support for handlebars syntax
ko.applyBindings(new AppViewModel(), document.getElementById('app'));