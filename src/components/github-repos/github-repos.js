import './github-repos.scss';

import ko from 'knockout';
import template from './github-repos.html';
import RepoModel from './repo-model';

// This named export returns the view model and can be used to get the VM for unit tests
export class GithubReposViewModel {

  constructor(params) {

    console.log('Hello from GithubReposViewModel');

    this.username = params.username;
    this.repos = ko.observable([]);

    fetch(`https://api.github.com/users/${this.username}/repos`)
      .then(response => {
        return response.json();
      })
      .then(items => {
        const models = items.map(x => new RepoModel(x.name, x.description, x.html_url));
        this.repos(models);
      })
      .catch(err => {
        console.error(`Failed to retrieve the repos for ${this.username}`, err);
      })
  }

  dispose() {
    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions.
  }
}

// The default export returns the component details object to register with KO
export default { viewModel: GithubReposViewModel, template: template };

