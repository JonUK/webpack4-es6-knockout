import ko from 'knockout';
import FileListComponent from './components/file-list/file-list';
import PersonComponent from './components/person/person';

class ComponentRegistration {

  static registerComponents() {

    ko.components.register('file-list', FileListComponent);
    ko.components.register('inv-person', PersonComponent);

  }
}

export default ComponentRegistration;

