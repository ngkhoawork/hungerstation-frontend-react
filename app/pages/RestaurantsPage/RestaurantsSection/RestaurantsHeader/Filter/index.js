import React from 'react';
import { boulder } from 'utils/css/colors';
import intl from 'utils/intlService';

import Paragraph from 'components/Paragraph';
import StyledFilter from './StyledFilter';
import messages from './messages';

const Filter = () => (
  <StyledFilter>
    <Paragraph>{intl.formatMessage(messages.label)}</Paragraph>
    <Paragraph light color={boulder}>
      {intl.formatMessage(messages.location)}
    </Paragraph>
  </StyledFilter>
);

export default Filter;
