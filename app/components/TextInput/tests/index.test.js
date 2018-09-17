import React from 'react';
import { shallow } from 'enzyme';

import TextInput from '../index';

const props = {
  field: 'test',
  form: {
    touched: true,
    errors: {
      name: 'Invalid',
    },
  },
};
const renderTextInput = () => shallow(<TextInput {...props} />);

describe('<TextInput />', () => {
  it('it should render without crashing', () => {
    renderTextInput();
  });
});
