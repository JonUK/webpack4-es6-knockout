import '@babel/polyfill'; // Promise polyfill and others
import 'unfetch/polyfill'; // Fetch polyfill
import 'knockout-punches';
import './index.html';

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