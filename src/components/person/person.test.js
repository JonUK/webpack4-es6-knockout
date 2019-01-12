import ko from 'knockout';
import {expect} from 'chai';
import { PersonViewModel } from './person';

describe('PersonViewModel', () => {

  it('computes the correct full name', () => {

    // Arrange
    const params = {
      firstName: ko.observable('Mike'),
      lastName: ko.observable('Smith')
    };

    // Act
    const viewModel = new PersonViewModel(params);

    // Assert
    expect(viewModel.fullName()).to.equal('Mike Smith');
  });
});



