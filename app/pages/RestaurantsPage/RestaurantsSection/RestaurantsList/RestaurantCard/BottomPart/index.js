import React from 'react';
import PropTypes from 'prop-types';
import { silverChalice, jade } from 'utils/css/colors';

import Icon from 'components/Icon';
import CircledItem from 'components/CircledItem';
import Paragraph from 'components/Paragraph';
import StyledBottomPart from './StyledBottomPart';
import Row from '../Row';

const BottomPart = ({ name, deliveryTimeMin, deliveryTimeMax }) => (
  <StyledBottomPart>
    <Row>
      <CircledItem color={jade} width={7} />
      <Paragraph size={17} margin="0 0 0 5px">
        {name}
      </Paragraph>
    </Row>
    <Row>
      <Icon name="time" />
      <Paragraph size={12}>
        {deliveryTimeMin}-{deliveryTimeMax} min
      </Paragraph>
      <Icon name="delivery" />
      <Paragraph size={12} color={silverChalice}>
        SR 250
      </Paragraph>
      <Icon name="bag" />
      <Paragraph size={12} color={silverChalice}>
        min. SR 55
      </Paragraph>
    </Row>
  </StyledBottomPart>
);

BottomPart.propTypes = {
  name: PropTypes.string.isRequired,
  deliveryTimeMin: PropTypes.number.isRequired,
  deliveryTimeMax: PropTypes.number.isRequired,
};

export default BottomPart;
