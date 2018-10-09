import React from 'react';
import PropTypes from 'prop-types';
import { silverChalice, jade } from 'utils/css/colors';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import CircledItem from 'components/CircledItem';
import Paragraph from 'components/Paragraph';
import StyledBottomPart from './StyledBottomPart';
import Row from '../Row';
import messages from './messages';

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
        {intl.formatMessage(messages.time, {
          min: deliveryTimeMin,
          max: deliveryTimeMax,
        })}
      </Paragraph>
      <Icon name="delivery" />
      <Paragraph size={12} color={silverChalice}>
        {intl.formatNumber(250, { style: 'currency', currency: 'SAR' })}
      </Paragraph>
      <Icon name="bag" />
      <Paragraph size={12} color={silverChalice}>
        {intl.formatMessage(messages.minValue, {
          min: intl.formatNumber(250, { style: 'currency', currency: 'SAR' }),
        })}
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
