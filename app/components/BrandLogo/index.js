import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import messages from './messages';
import StyledLogo from './StyledLogo';

const BrandLogo = ({ src }) => (
  <StyledLogo src={src} alt={intl.formatMessage(messages.altText)} />
);

BrandLogo.propTypes = {
  src: PropTypes.string.isRequired,
};

export default BrandLogo;
