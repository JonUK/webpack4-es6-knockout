import ko from 'knockout';
import fileSize from './bindings/file-size';

class BindingRegistration {

  static registerBindings() {

    ko.bindingHandlers.fileSize = fileSize;

  }
}

export default BindingRegistration;
