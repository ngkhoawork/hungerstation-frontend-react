import React from 'react';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import StyledNotFound from './StyledNotFound';
import messages from './messages';

const NotFound = () => (
  <StyledNotFound>
    <Icon name="pin-red-large" size={56} />
    <Paragraph size={36}>{intl.formatMessage(messages.text)}</Paragraph>
    <Paragraph light size={14}>
      {intl.formatMessage(messages.description)}
    </Paragraph>
  </StyledNotFound>
);

export default NotFound;
