import './person.scss';

import ko from 'knockout';
import template from './person.html';

// This named export returns the view model and can be used to get the VM for unit tests
export class PersonViewModel {

  constructor(params) {

    console.log('Hello from PersonViewModel');

    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.fullName = ko.computed(() => {
      return this.firstName() + ' ' + this.lastName();
    });
  }

}

// The default export returns the component details object to register with KO
export default { viewModel: PersonViewModel, template: template };

