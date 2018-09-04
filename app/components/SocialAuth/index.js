import React from 'react';

import styled from 'styled-components';
import { flexBox } from 'utils/styles';
import Icon from 'components/Icon';

const CenteredContent = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-evenly' },
    `
      > * {
        margin: 0 10px;
      }
    `,
  )};
`;

const SocialAuth = () => (
  <CenteredContent>
    <Icon name="google" size={32} />
    <Icon name="facebook" size={32} />
    <Icon name="twitter" size={32} />
  </CenteredContent>
);

export default SocialAuth;
