import React from 'react';
import { shallow } from 'enzyme';

import { StyledPage } from 'utils/styledComponents';
import ResetPasswordPage from '../index';

const renderResetPasswordPage = () => shallow(<ResetPasswordPage />);

describe('<ResetPasswordPage />', () => {
  it('It should render without crashing', () => {
    renderResetPasswordPage();
  });

  describe('ResetPasswordPage children components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<ResetPasswordPage />);
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

    it('it should render ResetPasswordFormContainer components', () => {
      expect(
        wrapper.find('withRouter(WithStyles(Connect(Form)))'),
      ).toHaveLength(1);
    });
  });
});
