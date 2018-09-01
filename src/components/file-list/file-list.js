import './file-list.scss';

import template from './file-list.html';
import FileModel from './file-model';

// This named export returns the view model and can be used to get the VM for unit tests
export class FileListViewModel {

  constructor() {

    console.log('Hello from FileListViewModel');

    this.files = [
      new FileModel('VSCode-darwin-stable.zip', 76845743),
      new FileModel('atom-mac.zip', 146559757),
      new FileModel('WebStorm-2018.2.dmg', 232382597)
    ];

  }

}

// The default export returns the component details object to register with KO
export default { viewModel: FileListViewModel, template: template };

