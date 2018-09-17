import React from 'react';
import { shallow } from 'enzyme';

import { StyledPage } from 'utils/styledComponents';
import LoginPage from '../index';

const renderLoginPage = () => shallow(<LoginPage />);

describe('<LoginPage />', () => {
  it('It should render without crashing', () => {
    renderLoginPage();
  });

  describe('HomePage children components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<LoginPage />);
    });

    it('it should render StyledPage component', () => {
      expect(wrapper.find(StyledPage)).toHaveLength(1);
    });
  });
});
