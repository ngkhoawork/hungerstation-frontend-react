import React from 'react';
import { shallow } from 'enzyme';

import UserProfile from '../index';

const renderUserProfile = () => shallow(<UserProfile />);

describe('<UserProfile />', () => {
  it('it should render without crashing', () => {
    renderUserProfile();
  });
});
