import React from 'react';
import intl from 'utils/intlService';
import Paragraph from 'components/Paragraph';
import StyledContainer from './StyledContainer';
import messages from './messages';

const QuickFilters = () => (
  <StyledContainer>
    <Paragraph color="white">
      {intl.formatMessage(messages.allRestaurant)}
    </Paragraph>
    <Paragraph color="white">
      {intl.formatMessage(messages.topOffers)}
    </Paragraph>
  </StyledContainer>
);

export default QuickFilters;
