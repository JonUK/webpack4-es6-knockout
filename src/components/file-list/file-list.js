import './file-list.scss';

import template from './file-list.html';

// This named export returns the view model and can be used to get the VM for unit tests
export class FileListViewModel {

  constructor(params) {

    console.log('Hello from FileListViewModel');

    this.files = params.files;
  }

  dispose() {
    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions.
  }
}

// The default export returns the component details object to register with KO
export default { viewModel: FileListViewModel, template: template };

