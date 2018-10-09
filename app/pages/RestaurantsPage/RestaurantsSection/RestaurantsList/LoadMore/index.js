import React from 'react';
import Proptypes from 'prop-types';
import { wildSant } from 'utils/css/colors';

import Icon from 'components/Icon';
import Button from 'components/Button';
import ButtonWrapper from './ButtonWrapper';

const LoadMore = ({ showMore }) => (
  <ButtonWrapper onClick={showMore}>
    <Button label="Load More" primary={false} color={wildSant}>
      <Icon name="refresh" />
    </Button>
  </ButtonWrapper>
);

LoadMore.propTypes = {
  showMore: Proptypes.func.isRequired,
};

export default LoadMore;
