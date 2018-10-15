import React from 'react';
import { restaurantPropTypes } from 'prop-types';
import {
  silverChalice,
  jade,
  gold,
  persimmon,
  fuscousGray,
} from 'utils/css/colors';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import CircledItem from 'components/CircledItem';
import Paragraph from 'components/Paragraph';
import StyledBottomPart from './StyledBottomPart';
import Row from '../Row';
import messages from './messages';

const mappedStatusToColor = {
  closed: persimmon,
  busy: gold,
  ready: jade,
};

const BottomPart = ({ name, deliveryTime, minOrder, deliveryFee, status }) => (
  <StyledBottomPart>
    <Row>
      <CircledItem
        color={mappedStatusToColor[status] || fuscousGray}
        width={7}
      />
      <Paragraph size={17} margin="0 0 0 5px">
        {name}
      </Paragraph>
    </Row>
    <Row>
      <Icon name="time" />
      <Paragraph size={12}>
        {intl.formatMessage(messages.time, {
          max: deliveryTime,
        })}
      </Paragraph>
      <Icon name="delivery" />
      <Paragraph size={12} color={silverChalice}>
        {intl.formatNumber(deliveryFee, { style: 'currency', currency: 'SAR' })}
      </Paragraph>
      <Icon name="bag" />
      <Paragraph size={12} color={silverChalice}>
        {intl.formatMessage(messages.minValue, {
          min: intl.formatNumber(minOrder, {
            style: 'currency',
            currency: 'SAR',
          }),
        })}
      </Paragraph>
    </Row>
  </StyledBottomPart>
);

BottomPart.propTypes = {
  ...restaurantPropTypes,
};

export default BottomPart;
