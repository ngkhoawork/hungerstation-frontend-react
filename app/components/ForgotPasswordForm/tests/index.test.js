import React from 'react';
import { shallow } from 'enzyme';

import StyledForm from 'components/StyledForm';
import ForgotPasswordForm from '../index';

const props = {
  handleSubmit: jest.fn(),
  submitting: false,
  classes: {
    button: 'btn',
  },
};
const renderForgotPasswordForm = () =>
  shallow(<ForgotPasswordForm {...props} />);

describe('<ForgotPasswordForm />', () => {
  it('It should render without crashing', () => {
    renderForgotPasswordForm();
  });

  describe('ForgotPasswordForm children components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<ForgotPasswordForm {...props} />);
    });

    it('it should render StyledForm component', () => {
      expect(wrapper.find(StyledForm)).toHaveLength(1);
    });
  });
});
