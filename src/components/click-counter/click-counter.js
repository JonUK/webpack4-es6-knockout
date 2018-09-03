import './click-counter.scss';

import ko from 'knockout';
import template from './click-counter.html';

// This named export returns the view model and can be used to get the VM for unit tests
export class ClickCounterViewModel {

  constructor() {
    console.log('Hello from ClickCounterViewModel');

    this.count = ko.observable(0);

    this.increment = () => {
      this.count(this.count() + 1);
    }
  }

  dispose() {
    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions.
  }
}

// The default export returns the component details object to register with KO
export default { viewModel: ClickCounterViewModel, template: template };

