import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import Button from 'components/Button';
import Price from 'components/Price';
import Row from 'components/Row';
import TrackingTimer from 'components/TrackingTimer';
import { Title } from 'components/Typography';
import { alabaster } from 'utils/css/colors';
import DateTimeElement from 'components/DateTime';
import { css } from 'styled-components';
import messages from './messages';
import DeliveryType from './DeliveryType';

import {
  Item,
  Content,
  TitleContainer,
  titleStyle,
  OrderItems,
  Img,
  PriceContainer,
  DeliveryLocation,
  IconPosition,
  Description,
  OrderState,
  Status,
} from '../StyledComponents';
import OrderId from './OrderId';
import ButtonWrapper from './ButtonWrapper';

const rateButtonCss = css`
  &:after {
    content: '★';
    font-size: 8px;
    margin-left: 8px;
    margin-top: 2px;
    vertical-align: text-top;
    line-height: 15px;
  }
`;

const getDeliveryType = provider =>
  provider === 'hungerstation_delivery'
    ? intl.formatMessage(messages.fastDelivery)
    : intl.formatMessage(messages.restaurantDelivery);

const OrderCard = ({ order, onRateClick }) => (
  <Item key={order.id}>
    <Img image={order.image} />
    <Content>
      <div>
        <Row justify="space-between">
          <TitleContainer>
            <Title css={titleStyle}>{order.branchName}</Title>
            <DeliveryLocation>
              <IconPosition>
                <Icon name="pin" />
              </IconPosition>
              {order.address}
            </DeliveryLocation>
          </TitleContainer>
          <OrderState>
            {order.state === 'delivered' && (
              <DateTimeElement time={order.delivedAt} />
            )}
            {order.state === 'failed' && <Status color="error">Failed</Status>}
            {order.tracking.activeStatus && (
              <TrackingTimer
                startAt={order.actionAt}
                endAt={order.actionAt + 60 * 60 * 2}
              />
            )}
          </OrderState>
        </Row>
        <OrderItems>
          {order.orderItems.map(item => item.description).join(', ')}
        </OrderItems>
        <Row>
          <Description>
            <DeliveryType
              iconName="car"
              text={getDeliveryType(order.deliveryProvider)}
            />
            <OrderId id={order.id} />
            <PriceContainer>
              <Price price={order.price} isPrimary hasTag />
            </PriceContainer>
          </Description>
          <ButtonWrapper>
            <Button
              label={intl.formatMessage(messages.rateRestaurant)}
              primary={false}
              lift={false}
              color={alabaster}
              fontSize={16}
              inline
              onClick={onRateClick}
              css={rateButtonCss}
            />
          </ButtonWrapper>
        </Row>
      </div>
    </Content>
  </Item>
);

OrderCard.propTypes = {
  order: PropTypes.object.isRequired,
  onRateClick: PropTypes.func.isRequired,
};

export default OrderCard;
