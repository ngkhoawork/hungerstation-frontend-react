import React from 'react';
import { shallow } from 'enzyme';

import RegistrationForm from '../index';

const renderRegistrationForm = () => shallow(<RegistrationForm />);

describe('<RegistrationForm />', () => {
  it('Expect to have unit tests specified', () => {
    renderRegistrationForm();
  });
});
