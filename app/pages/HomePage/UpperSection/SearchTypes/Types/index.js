import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import Paragraph from 'components/Paragraph';
import Switch from '../Switch';
import StyledContainer from './StyledContainer';
import messages from './messages';

const Types = ({ onSelect }) => (
  <StyledContainer>
    <Paragraph color="white">{intl.formatMessage(messages.delivery)}</Paragraph>
    <Switch onSelect={onSelect} />
    <Paragraph color="white">{intl.formatMessage(messages.pickup)}</Paragraph>
  </StyledContainer>
);

Types.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default Types;
