import React from 'react';
import { shallow } from 'enzyme';

import LoginForm from '../index';

const props = {
  handleSubmit: () => {},
  submitting: false,
  classes: { button: 'hey' },
};
const renderLoginForm = () => shallow(<LoginForm {...props} />);

describe('<LoginForm />', () => {
  it('Expect to initialize component without crash', () => {
    renderLoginForm();
  });
});
