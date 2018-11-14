import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import Button from 'components/Button';
import Paragraph from 'components/Paragraph';
import { gold } from 'utils/css/colors';
import StyledNotFound from './StyledNotFound';
import messages from './messages';
import ButtonWrapper from './ButtonWrapper';

const NotFound = ({ onClickBack }) => (
  <StyledNotFound>
    <Icon name="bag-red" size={56} />
    <Paragraph size={36}>{intl.formatMessage(messages.text)}</Paragraph>
    <ButtonWrapper onClick={onClickBack}>
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

NotFound.propTypes = {
  onClickBack: PropTypes.func.isRequired,
};

export default NotFound;
