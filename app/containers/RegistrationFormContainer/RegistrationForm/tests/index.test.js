import React from 'react';
import { shallow } from 'enzyme';

import RegistrationForm from '../index';

const props = {
  handleSubmit: () => {},
  submitting: false,
  classes: { button: 'hey' },
};
const renderRegistrationForm = () => shallow(<RegistrationForm {...props} />);

describe('<RegistrationForm />', () => {
  it('Expect to have unit tests specified', () => {
    renderRegistrationForm();
  });
});
