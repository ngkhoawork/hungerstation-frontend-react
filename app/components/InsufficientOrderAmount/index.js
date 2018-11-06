import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import ModalFrame from 'containers/ModalFrameContainer';
import Button from 'components/Button';
import Icon from 'components/Icon';
import { Title, Description } from 'components/Typography';
import { alabaster } from 'utils/css/colors';
import messages from './messages';
import { Content, Footer, SearchBtnStyle } from './StyledComponents';

const InsufficientOrderAmount = ({ onCancel, onAddMore }) => (
  <ModalFrame>
    <Content>
      <Icon name="pin-red-large-2" size={56} />
      <Title>{intl.formatMessage(messages.title)}</Title>
      <Description>{intl.formatMessage(messages.message)}</Description>
    </Content>
    <Footer>
      <Button
        primary={false}
        lift={false}
        inline
        size="l"
        color={alabaster}
        onClick={onCancel}
      >
        {intl.formatMessage(messages.cancel)}
      </Button>
      <Button
        primary={false}
        lift
        inline
        size="l"
        style={SearchBtnStyle}
        onClick={onAddMore}
      >
        {intl.formatMessage(messages.addMore)}
      </Button>
    </Footer>
  </ModalFrame>
);

InsufficientOrderAmount.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAddMore: PropTypes.func.isRequired,
};

export default InsufficientOrderAmount;
