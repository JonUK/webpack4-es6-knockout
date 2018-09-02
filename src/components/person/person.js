import './person.scss';

import ko from 'knockout';
import template from './person.html';

// This named export returns the view model and can be used to get the VM for unit tests
export class PersonViewModel {

  constructor(params) {

    console.log('Hello from PersonViewModel');

    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.fullName = ko.pureComputed(() => {
      return this.firstName() + ' ' + this.lastName();
    });

    // Very basic Promise example to check Promises have been polyfilled
    function getPromiseThatResolvesIn1Second() {
      return new Promise(resolve => {
        setTimeout(resolve, 1000);
      })
    }

    getPromiseThatResolvesIn1Second()
      .then(() => {
        this.firstName('Sarah');
        this.lastName('Jones');
      })
  }

  dispose() {
    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions.
  }
}

// The default export returns the component details object to register with KO
export default { viewModel: PersonViewModel, template: template };

