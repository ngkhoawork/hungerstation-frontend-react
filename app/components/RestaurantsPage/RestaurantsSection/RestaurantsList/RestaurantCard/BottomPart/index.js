import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import StyledBottomPart from './StyledBottomPart';
import Row from '../Row';

const BottomPart = ({ name, deliveryTimeMin, deliveryTimeMax }) => (
  <StyledBottomPart>
    <Row>
      <Paragraph size="big">{name}</Paragraph>
    </Row>
    <Row>
      <Icon name="tick" />
      <Paragraph>
        {deliveryTimeMin}-{deliveryTimeMax} min
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
