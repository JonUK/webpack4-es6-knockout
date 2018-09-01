import './file-list.scss';

import template from './file-list.html';
import FileModel from './file-model';

// This named export returns the view model and can be used to get the VM for unit tests
export class FileListViewModel {

  constructor(params) {

    console.log('Hello from FileListViewModel');

    this.files = params.files;
  }

}

// The default export returns the component details object to register with KO
export default { viewModel: FileListViewModel, template: template };

