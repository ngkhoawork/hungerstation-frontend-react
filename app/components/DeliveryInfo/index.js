import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { flex } from 'utils/css/styles';
import intl, { priceIntlOptions } from 'utils/intlService';
import IconAndText from './IconAndText';
import messages from './messages';

const Container = styled.div`
  ${flex()};

  ${({ style }) => style && css(style)};
`;

const DeliveryInfo = ({ delivery_fee = 0, minimum_order = 0, ...props }) => (
  <Container {...props}>
    {/* <IconAndText
      iconName="time"
      text={intl.formatMessage(messages.time, { max: delivery_estimation_time })}
    /> */}
    <IconAndText
      iconName="delivery"
      text={intl.formatNumber(delivery_fee, priceIntlOptions)}
    />
    <IconAndText
      iconName="bag"
      text={intl.formatMessage(messages.minValue, {
        min: intl.formatNumber(minimum_order, priceIntlOptions),
      })}
    />
  </Container>
);

DeliveryInfo.propTypes = {
  minimum_order: PropTypes.number,
  delivery_fee: PropTypes.number,
  // delivery_estimation_time: PropTypes.number,
};

export default DeliveryInfo;
