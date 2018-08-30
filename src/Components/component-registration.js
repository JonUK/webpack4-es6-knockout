import ko from 'knockout';

import PersonComponent from './Person/person';

class ComponentRegistration {

  static registerComponents() {

    ko.components.register('inv-person', PersonComponent);

  }
}

export default ComponentRegistration;

