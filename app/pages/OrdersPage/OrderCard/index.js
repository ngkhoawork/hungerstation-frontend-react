import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import { css } from 'styled-components';
import Icon from 'components/Icon';
import Button from 'components/Button';
import Price from 'components/Price';
import Row from 'components/Row';
import { Title } from 'components/Typography';
import { alabaster } from 'utils/css/colors';
import { StatusContent, Desktop, Mobile } from 'utils/css/styledComponents';
import DateTimeElement from 'components/DateTime';
import TrackingTimer from 'components/TrackingTimer';
import { sideMargin } from 'utils/css/styles';
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

const iconStyle = css`
  ${sideMargin('start', '10px')};
`;

const getDeliveryType = provider =>
  provider === 'hungerstation_delivery'
    ? intl.formatMessage(messages.fastDelivery)
    : intl.formatMessage(messages.restaurantDelivery);

const renderButton = (order, onOrderClick, onRateClick) => {
  if (onRateClick) {
    // we don't show rate button in this release
    return null;
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
      {order.tracking.activeStatus && <Icon style={iconStyle} name="car" />}
    </Button>
  );
};

const renderInfo = (order, onOrderClick, onRateClick) => (
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
      <Desktop>{renderButton(order, onOrderClick, onRateClick)}</Desktop>
    </Row>
  </React.Fragment>
);

const renderState = order => {
  switch (order.state) {
    case 'processing':
      return (
        <StatusContent color="success" style={{ marginLeft: 5 }}>
          {intl.formatMessage(messages.processing)}
        </StatusContent>
      );
    case 'failed':
      return (
        <StatusContent color="error" style={{ marginLeft: 5 }}>
          {intl.formatMessage(messages.failed)}
        </StatusContent>
      );
    case 'successful':
      if (order.deliveredAt) {
        return <DateTimeElement time={order.deliveredAt} />;
      }
      return (
        <TrackingTimer startAt={order.createdAt} endAt={order.deliveryEta} />
      );
    default:
      return null;
  }
};

const OrderCard = ({ order, onOrderClick, onRateClick }) => (
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
          <OrderState>{renderState(order)}</OrderState>
        </Row>
        <Desktop>{renderInfo(order, onOrderClick, onRateClick)}</Desktop>
      </Content>
    </Row>
    <Mobile>
      <Row css={mobileInfo}>{renderInfo(order, onOrderClick, onRateClick)}</Row>
      {renderButton(order, onOrderClick, onRateClick)}
    </Mobile>
  </Item>
);

OrderCard.propTypes = {
  order: PropTypes.object.isRequired,
  onOrderClick: PropTypes.func,
  onRateClick: PropTypes.func,
};

export default OrderCard;
