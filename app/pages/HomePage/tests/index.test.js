import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';
import StyledPage from '../StyledPage';

const renderHomePage = () => shallow(<HomePage />);

describe('<HomePage />', () => {
  it('It should render without crashing', () => {
    renderHomePage();
  });

  describe('HomePage children components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<HomePage />);
    });

    it('it should render StyledPage component', () => {
      expect(wrapper.find(StyledPage)).toHaveLength(1);
    });

    it('it should render BottomSection component', () => {
      expect(wrapper.find('BottomSection')).toHaveLength(1);
    });

    it('it should render UpperSection component', () => {
      expect(wrapper.find('withRouter(UpperSection)')).toHaveLength(1);
    });
  });
});
