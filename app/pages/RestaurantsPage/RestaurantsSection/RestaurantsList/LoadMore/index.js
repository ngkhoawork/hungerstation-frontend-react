import React from 'react';
import { wildSant } from 'utils/colors';

import Icon from 'components/Icon';
import Button from 'components/Button';
import ButtonWrapper from './ButtonWrapper';

const LoadMore = () => (
  <ButtonWrapper>
    <Button label="Load More" primary={false} color={wildSant}>
      <Icon name="refresh" />
    </Button>
  </ButtonWrapper>
);

export default LoadMore;
