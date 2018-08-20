import React from 'react';

import { FormattedMessage } from 'react-intl';
import Icon from 'components/Icon';

import StyledLink from './StyledLink';
import Text from './Text';
import messages from './messages';

const BackHome = () => (
  <StyledLink to="/">
    <Icon name="back" />
    <Text>
      <FormattedMessage {...messages.backHome} />
    </Text>
  </StyledLink>
);

export default BackHome;
