import './home.scss';

import ko from 'knockout';
import template from './home.html';
import FileModel from "../../components/file-list/file-model";

// This named export returns the view model and can be used to get the VM for unit tests
export class HomeViewModel {

  constructor() {

    console.log('Hello from HomeViewModel');

    this.firstName = ko.observable('Mike');
    this.lastName = ko.observable('Smith');

    this.files = [
      new FileModel('VSCode-darwin-stable.zip', 76845743),
      new FileModel('atom-mac.zip', 146559757),
      new FileModel('WebStorm-2018.2.dmg', 232382597)
    ];

    // Very basic Promise example to check Promises have been polyfilled
    function getPromiseThatResolvesIn1Second() {
      return new Promise(resolve => {
        setTimeout(resolve, 1000);
      })
    }

    getPromiseThatResolvesIn1Second()
      .then(() => {
        this.lastName('Jones');
      })
  }

}

// The default export returns the component details object to register with KO
export default { viewModel: HomeViewModel, template: template };

