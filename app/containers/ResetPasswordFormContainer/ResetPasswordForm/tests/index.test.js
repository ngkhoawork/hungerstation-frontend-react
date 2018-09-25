import React from 'react';
import { shallow } from 'enzyme';

import { StyledForm } from 'utils/css/styledComponents';
import ResetPasswordForm from '../index';

const props = {
  handleSubmit: jest.fn(),
  submitting: false,
  classes: {
    button: 'btn',
  },
};
const renderForgotPasswordForm = () =>
  shallow(<ResetPasswordForm {...props} />);

describe('<ResetPasswordForm />', () => {
  it('It should render without crashing', () => {
    renderForgotPasswordForm();
  });

  describe('ResetPasswordForm children components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<ResetPasswordForm {...props} />);
    });

    it('it should render StyledForm component', () => {
      expect(wrapper.find(StyledForm)).toHaveLength(1);
    });
  });
});
