import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import intl from 'utils/intlService';
import { getPathname } from 'utils/location';
import { jade } from 'utils/css/colors';
import CircledItem from 'components/CircledItem';
import Icon from 'components/Icon';
import Button from 'components/Button';
import Price from 'components/Price';
import messages from './messages';
import {
  CartBtns,
  BasketBtn,
  ButtonWrapper,
  Content,
  LeftSide,
  Label,
  RightSide,
} from './StyledComponents';

const ViewCartButton = ({
  isModal,
  isCheckout,
  isDisabled,
  isOrderDetail,
  isWithBasket,
  quantity,
  price,
  onClick,
  onBasketClick,
  innerStyle,
  ...props
}) => {
  const getHref = () => {
    if (isDisabled || onClick) return '#';
    return isCheckout ? '/payment' : `${getPathname()}/checkout`;
  };

  const renderViewCartBtn = () => {
    let label;

    if (isCheckout) {
      label = 'placeOrder';
    } else if (isOrderDetail) {
      label = 'reorder';
    } else {
      label = 'goToCheckout';
    }

    return (
      <ButtonWrapper>
        <Link to={getHref()}>
          <Button
            primary={!isCheckout}
            color={isCheckout ? jade : undefined}
            size="xl"
            style={{ whiteSpace: 'nowrap' }}
            disabled={isDisabled}
            disabledColor="white"
            onClick={onClick}
          >
            <Content>
              <LeftSide>
                {!isModal && isWithBasket && quantity !== undefined ? (
                  <CircledItem color="white" width={30}>
                    <span style={{ zIndex: 1, paddingTop: 3 }}>{quantity}</span>
                  </CircledItem>
                ) : null}
              </LeftSide>
              <Icon
                name={isCheckout && !isDisabled ? 'basket-white' : 'basket'}
              />
              <Label isCheckout={isCheckout} isDisabled={isDisabled}>
                {intl.formatMessage(messages[label])}
              </Label>
              <RightSide>
                {!isModal && isWithBasket && price !== undefined ? (
                  <Price price={price} isPrimary />
                ) : null}
              </RightSide>
            </Content>
          </Button>
        </Link>
      </ButtonWrapper>
    );
  };

  if (!isWithBasket) return renderViewCartBtn();

  return (
    <CartBtns style={innerStyle} {...props}>
      <BasketBtn onClick={onBasketClick}>
        {intl.formatMessage(messages.checkBasket)}
      </BasketBtn>
      {renderViewCartBtn()}
    </CartBtns>
  );
};

ViewCartButton.propTypes = {
  isModal: PropTypes.bool,
  isWithBasket: PropTypes.bool,
  isCheckout: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isOrderDetail: PropTypes.bool,
  quantity: PropTypes.number,
  price: PropTypes.number,
  onClick: PropTypes.func,
  onBasketClick: PropTypes.func,
};

export default ViewCartButton;
