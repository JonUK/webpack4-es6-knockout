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

  }

  dispose() {
    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions.
  }
}

// The default export returns the component details object to register with KO
export default { viewModel: HomeViewModel, template: template };

// TODO: Review if components should just be registered here with KO directly
//ko.components.register({viewModel: HomeViewModel, template: template})