import React from 'react';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import Button from 'components/Button';
import Paragraph from 'components/Paragraph';
import { gold, silverChalice } from 'utils/css/colors';
import StyledNotFound from './StyledNotFound';
import messages from './messages';
import ButtonWrapper from './ButtonWrapper';

const NotFound = () => (
  <StyledNotFound>
    <Icon name="pin-red-large" size={56} />
    <Paragraph size={36}>{intl.formatMessage(messages.text)}</Paragraph>
    <Paragraph light size={14} color={silverChalice}>
      {intl.formatMessage(messages.description)}
    </Paragraph>

    <ButtonWrapper to="/">
      <Button
        label={intl.formatMessage(messages.buttonLabel)}
        primary={false}
        lift={false}
        color={gold}
        fontSize={16}
      />
    </ButtonWrapper>
  </StyledNotFound>
);

export default NotFound;
