import React from 'react';
import { boulder } from 'utils/css/colors';

import Paragraph from 'components/Paragraph';
import StyledFilter from './StyledFilter';

const Filter = () => (
  <StyledFilter>
    <Paragraph>Check out all cuisines</Paragraph>
    <Paragraph light color={boulder}>
      at Almohammadeah, Baljursahi
    </Paragraph>
  </StyledFilter>
);

export default Filter;
