import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import Button from 'components/Button';
import Price from 'components/Price';
import Row from 'components/Row';
import { Title } from 'components/Typography';
import { alabaster } from 'utils/css/colors';
import DateTimeElement from 'components/DateTime';
import TrackingTimer from 'components/TrackingTimer';
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

const getDeliveryType = provider =>
  provider === 'hungerstation_delivery'
    ? intl.formatMessage(messages.fastDelivery)
    : intl.formatMessage(messages.restaurantDelivery);

const OrderCard = ({ order, onOrderClick }) => (
  <Item key={order.id}>
    <Img image={order.image} />
    <Content>
      <div>
        <Row justify="space-between">
          <TitleContainer>
            <Title css={titleStyle}>{order.restaurant.name}</Title>
            <DeliveryLocation>
              <IconPosition>
                <Icon name="pin" />
              </IconPosition>
              {order.address}
            </DeliveryLocation>
          </TitleContainer>
          <OrderState>
            {order.state === 'successful' && (
              <DateTimeElement time={order.delivedAt} />
            )}
            {order.state === 'failed' && <Status color="error">Failed</Status>}
            {order.tracking.activeStatus && (
              <TrackingTimer
                startAt={order.createdAt}
                endAt={order.deliveryEta}
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
              iconName={
                order.deliveryProvider === 'hungerstation_delivery'
                  ? 'hungerstation-delivery'
                  : 'car'
              }
              text={getDeliveryType(order.deliveryProvider)}
            />
            <OrderId id={order.id} />
            <PriceContainer>
              <Price price={order.price} isPrimary hasTag />
            </PriceContainer>
          </Description>
          <ButtonWrapper>
            <Button
              primary={false}
              lift={false}
              color={alabaster}
              fontSize={16}
              inline
              onClick={() => {
                onOrderClick(order.id);
              }}
            >
              {order.tracking.activeStatus
                ? intl.formatMessage(messages.tracking)
                : intl.formatMessage(messages.details)}
              {order.tracking.activeStatus && (
                <Icon style={{ marginLeft: '10px' }} name="car" />
              )}
            </Button>
          </ButtonWrapper>
        </Row>
      </div>
    </Content>
  </Item>
);

OrderCard.propTypes = {
  order: PropTypes.object.isRequired,
  onOrderClick: PropTypes.func.isRequired,
};
export default OrderCard;
