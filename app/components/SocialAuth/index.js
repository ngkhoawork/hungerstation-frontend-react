import React from 'react';

import { CenteredContent } from 'utils/css/styledComponents';
import Icon from 'components/Icon';

const SocialAuth = () => (
  <CenteredContent>
    <Icon name="google" size={32} />
    <Icon name="facebook" size={32} />
    <Icon name="twitter" size={32} />
  </CenteredContent>
);

export default SocialAuth;
