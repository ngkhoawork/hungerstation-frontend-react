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

const IneligibleAddress = ({ onEditClick, onSearchClick }) => (
  <ModalFrame>
    <Content>
      <Icon name="pin-red-large" size={56} />
      <Title>{intl.formatMessage(messages.title)}</Title>
      <Description>{intl.formatMessage(messages.description)}</Description>
    </Content>
    <Footer>
      <Button
        primary={false}
        lift={false}
        inline
        size="l"
        color={alabaster}
        onClick={onEditClick}
      >
        {intl.formatMessage(messages.edit)} &nbsp; &nbsp; &nbsp;
        <Icon name="edit" size={16} />
      </Button>
      <Button
        primary={false}
        lift
        inline
        size="l"
        style={SearchBtnStyle}
        onClick={onSearchClick}
      >
        {intl.formatMessage(messages.search)}
      </Button>
    </Footer>
  </ModalFrame>
);

IneligibleAddress.propTypes = {
  onEditClick: PropTypes.func.isRequired,
  onSearchClick: PropTypes.func.isRequired,
};

export default IneligibleAddress;
