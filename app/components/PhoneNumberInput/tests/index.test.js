import React from 'react';
import { shallow } from 'enzyme';

import PhoneNumberInput from '../index';

const props = {
  field: 'Field',
  form: {
    errors: {
      phone: 'Phone error',
    },
  },
};
const renderPhoneNumberInput = () => shallow(<PhoneNumberInput {...props} />);

describe('<PhoneNumberInput />', () => {
  it('It should render without crashing', () => {
    renderPhoneNumberInput();
  });
});
