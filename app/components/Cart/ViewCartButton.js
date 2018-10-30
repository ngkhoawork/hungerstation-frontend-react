import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import intl from 'utils/intlService';
import styled from 'styled-components';
import { alabaster, fuscousGray, jade } from 'utils/css/colors';
import { fontFamilyRegular, borderRadius } from 'utils/css/variables';
import CircledItem from 'components/CircledItem';
import Icon from 'components/Icon';
import Button from 'components/Button';
import Price from 'components/Price';
import messages from './messages';

const ViewCartButton = ({ isCheckout, quantity, price }) => (
  <ButtonWrapper>
    <Link to={isCheckout ? '/payment' : '/checkout'}>
      <Button primary={false} color={isCheckout ? jade : alabaster} size="xl">
        <Content>
          <LeftSide>
            {quantity !== undefined ? (
              <CircledItem color="white" width={30}>
                <span style={{ zIndex: 1, paddingTop: 3 }}>{quantity}</span>
              </CircledItem>
            ) : null}
          </LeftSide>
          <Icon name={isCheckout ? 'basket-white' : 'basket'} />
          <Label isCheckout={isCheckout}>
            {intl.formatMessage(
              messages[isCheckout ? 'placeOrder' : 'viewCart'],
            )}
          </Label>
          <RightSide>
            {price !== undefined ? <Price price={price} isPrimary /> : null}
          </RightSide>
        </Content>
      </Button>
    </Link>
  </ButtonWrapper>
);

ViewCartButton.propTypes = {
  isCheckout: PropTypes.bool,
  quantity: PropTypes.number,
  price: PropTypes.number,
};

export default ViewCartButton;

const ButtonWrapper = styled.div`
  width: 100%;
  border-radius: ${borderRadius};
`;

const Content = styled.div`
  font-family: ${fontFamilyRegular} !important;
  position: relative;
  width: 100%;
`;

const LeftSide = styled.span`
  position: absolute;
  left: 20px;
  top: -4px;
`;

const RightSide = styled.span`
  position: absolute;
  right: 20px;
  top: 4px;
`;

const Label = styled.span`
  color: ${({ isCheckout }) => (isCheckout ? 'white' : fuscousGray)};
  font-size: 20px;
  display: inline-block;
  margin-top: 2px;
`;
