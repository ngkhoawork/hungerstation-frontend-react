import React from 'react';
import { shallow } from 'enzyme';

import { StyledPage } from 'utils/styledComponents';
import RegistrationPage from '../index';

const renderRegistrationPage = () => shallow(<RegistrationPage />);

describe('<RegistrationPage />', () => {
  it('It should render without crashing', () => {
    renderRegistrationPage();
  });

  describe('RegistrationPage children components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<RegistrationPage />);
    });

    it('it should render StyledPage component', () => {
      expect(wrapper.find(StyledPage)).toHaveLength(1);
    });

    it('it should render TextItem components', () => {
      expect(wrapper.find('TextItem')).toHaveLength(3);
    });

    it('it should render SocialAuth components', () => {
      expect(wrapper.find('SocialAuth')).toHaveLength(1);
    });

    it('it should render RegistrationFormContainer components', () => {
      expect(
        wrapper.find('Connect(withRouter(WithStyles(Connect(Form))))'),
      ).toHaveLength(1);
    });
  });
});
