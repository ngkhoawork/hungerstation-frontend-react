import React from 'react';
import PropTypes from 'prop-types';
import { alabaster } from 'utils/css/colors';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import Button from 'components/Button';
import ButtonWrapper from './ButtonWrapper';
import messages from './messages';

const LoadMore = ({ showMore }) => (
  <ButtonWrapper onClick={showMore}>
    <Button
      label={intl.formatMessage(messages.label)}
      primary={false}
      lift={false}
      color={alabaster}
    >
      <Icon name="refresh" />
    </Button>
  </ButtonWrapper>
);

LoadMore.propTypes = {
  showMore: PropTypes.func.isRequired,
};

export default LoadMore;
