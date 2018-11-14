import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import intl from 'utils/intlService';
import { getPathname } from 'utils/location';
import { alabaster, jade } from 'utils/css/colors';
import CircledItem from 'components/CircledItem';
import Icon from 'components/Icon';
import Button from 'components/Button';
import Price from 'components/Price';
import messages from './messages';
import {
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
  quantity,
  price,
}) => {
  const getHref = () => {
    if (isDisabled) return '#';
    return isCheckout ? '/payment' : `${getPathname()}/checkout`;
  };

  return (
    <ButtonWrapper>
      <Link to={getHref()}>
        <Button
          primary={!isCheckout}
          color={isCheckout ? jade : undefined}
          size="xl"
          style={{ whiteSpace: 'nowrap' }}
          disabled={isDisabled}
          disabledColor={alabaster}
        >
          <Content>
            <LeftSide>
              {!isModal && !isCheckout && quantity !== undefined ? (
                <CircledItem color="white" width={30}>
                  <span style={{ zIndex: 1, paddingTop: 3 }}>{quantity}</span>
                </CircledItem>
              ) : null}
            </LeftSide>
            <Icon
              name={isCheckout && !isDisabled ? 'basket-white' : 'basket'}
            />
            <Label isCheckout={isCheckout} isDisabled={isDisabled}>
              {intl.formatMessage(
                messages[isCheckout ? 'placeOrder' : 'viewCart'],
              )}
            </Label>
            <RightSide>
              {!isModal && !isCheckout && price !== undefined ? (
                <Price price={price} isPrimary />
              ) : null}
            </RightSide>
          </Content>
        </Button>
      </Link>
    </ButtonWrapper>
  );
};

ViewCartButton.propTypes = {
  isModal: PropTypes.bool,
  isCheckout: PropTypes.bool,
  isDisabled: PropTypes.bool,
  quantity: PropTypes.number,
  price: PropTypes.number,
};

export default ViewCartButton;
