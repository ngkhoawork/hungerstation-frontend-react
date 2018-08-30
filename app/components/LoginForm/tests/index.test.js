import React from 'react';
import { shallow } from 'enzyme';

import LoginForm from '../index';

const renderLoginForm = () => shallow(<LoginForm />);

describe('<LoginForm />', () => {
  it('Expect to have unit tests specified', () => {
    renderLoginForm();
  });
});
