import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import Button from 'components/Button';
import Price from 'components/Price';
import Row from 'components/Row';
import { Title } from 'components/Typography';
import { alabaster } from 'utils/css/colors';
import { StatusContent, Desktop, Mobile } from 'utils/css/styledComponents';
import DateTimeElement from 'components/DateTime';
import TrackingTimer from 'components/TrackingTimer';
import DeliveryType from './DeliveryType';
import OrderId from './OrderId';
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
} from '../StyledComponents';
import { btnCss, mobileInfo } from './StyledComponents';
import messages from './messages';

const getDeliveryType = provider =>
  provider === 'hungerstation_delivery'
    ? intl.formatMessage(messages.fastDelivery)
    : intl.formatMessage(messages.restaurantDelivery);

const OrderCard = ({ order, onOrderClick, onRateClick }) => {
  const renderButton = () => {
    if (onRateClick) {
      if (order.state === 'failed') return null;

      return (
        <Button
          label={intl.formatMessage(messages.rateRestaurant)}
          primary={false}
          lift={false}
          color={alabaster}
          fontSize={16}
          inline
          onClick={onRateClick}
          css={btnCss}
          isRateBtn
        />
      );
    }

    return (
      <Button
        primary={false}
        lift={false}
        color={alabaster}
        fontSize={16}
        inline
        css={btnCss}
        onClick={() => onOrderClick(order.id)}
      >
        {order.tracking.activeStatus
          ? intl.formatMessage(messages.tracking)
          : intl.formatMessage(messages.details)}
        {order.tracking.activeStatus && (
          <Icon style={{ marginLeft: '10px' }} name="car" />
        )}
      </Button>
    );
  };

  const renderInfo = () => (
    <React.Fragment>
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
        <Desktop>{renderButton()}</Desktop>
      </Row>
    </React.Fragment>
  );

  return (
    <Item key={order.id}>
      <Row>
        <Img image={order.image} />
        <Content>
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
                <DateTimeElement
                  time={
                    order.deliveredAt || new Date(order.deliveryEta).getTime()
                  }
                />
              )}
              {order.state === 'processing' && (
                <DateTimeElement time={new Date(order.deliveryEta).getTime()} />
              )}
              {order.state === 'failed' && (
                <StatusContent color="error" style={{ marginLeft: 5 }}>
                  {intl.formatMessage(messages.failed)}
                </StatusContent>
              )}
              {order.tracking.activeStatus && (
                <TrackingTimer
                  startAt={order.createdAt}
                  endAt={new Date(order.deliveryEta).getTime()}
                />
              )}
            </OrderState>
          </Row>
          <Desktop>{renderInfo()}</Desktop>
        </Content>
      </Row>
      <Mobile>
        <Row css={mobileInfo}>{renderInfo()}</Row>
        {renderButton()}
      </Mobile>
    </Item>
  );
};

OrderCard.propTypes = {
  order: PropTypes.object.isRequired,
  onOrderClick: PropTypes.func,
  onRateClick: PropTypes.func,
};
export default OrderCard;
