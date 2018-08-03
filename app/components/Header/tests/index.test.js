import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

const renderHeader = () => shallow(<Header />);

describe('<Header />', () => {
  it('it should render without crashing', () => {
    renderHeader();
  });
});
