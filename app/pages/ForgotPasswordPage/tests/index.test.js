import React from 'react';
import { shallow } from 'enzyme';

import { StyledPage } from 'utils/styledComponents';
import ForgotPasswordPage from '../index';

const renderForgotPasswordPage = () => shallow(<ForgotPasswordPage />);

describe('<ForgotPasswordPage />', () => {
  it('It should render without crashing', () => {
    renderForgotPasswordPage();
  });

  describe('ForgotPasswordPage children components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<ForgotPasswordPage />);
    });

    it('it should render StyledPage component', () => {
      expect(wrapper.find(StyledPage)).toHaveLength(1);
    });

    it('it should render TextItem components', () => {
      expect(wrapper.find('TextItem')).toHaveLength(2);
    });

    it('it should render SocialAuth components', () => {
      expect(wrapper.find('SocialAuth')).toHaveLength(1);
    });

    it('it should render ForgotPasswordFormContainer components', () => {
      expect(
        wrapper.find('withRouter(WithStyles(Connect(Form)))'),
      ).toHaveLength(1);
    });
  });
});
