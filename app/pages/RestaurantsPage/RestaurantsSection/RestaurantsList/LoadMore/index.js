import React from 'react';
import Proptypes from 'prop-types';
import { wildSant } from 'utils/css/colors';
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
      color={wildSant}
    >
      <Icon name="refresh" />
    </Button>
  </ButtonWrapper>
);

LoadMore.propTypes = {
  showMore: Proptypes.func.isRequired,
};

export default LoadMore;
