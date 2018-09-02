import ko from 'knockout';

// Standard components
import ClickCounterComponent from './components/click-counter/click-counter';
import FileListComponent from './components/file-list/file-list';
import GithubReposComponent from './components/github-repos/github-repos';
import PersonComponent from './components/person/person';


// Page components
import HomeComponents from './page-components/home/home';


class ComponentRegistration {

  static registerComponents() {
    ComponentRegistration.registerStandardComponents();
    ComponentRegistration.registerPageComponents();
  }

  static registerStandardComponents() {
    ko.components.register('click-counter', ClickCounterComponent);
    ko.components.register('file-list', FileListComponent);
    ko.components.register('github-repos', GithubReposComponent);
    ko.components.register('inv-person', PersonComponent);
  }

  static registerPageComponents() {
    ko.components.register('home', HomeComponents);
  }

}

export default ComponentRegistration;

