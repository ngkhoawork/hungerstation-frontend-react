import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import styled from 'styled-components';
import { alabaster, fuscousGray } from 'utils/css/colors';
import { fontFamilyRegular, borderRadius } from 'utils/css/variables';
import CircledItem from 'components/CircledItem';
import Icon from 'components/Icon';
import Button from 'components/Button';
import Price from 'components/Price';
import messages from './messages';

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
  color: ${fuscousGray} !important;
  font-size: 20px;
  display: inline-block;
  margin-top: 2px;
`;

const ViewCartButton = ({ quantity, price }) => (
  <ButtonWrapper>
    <Button primary={false} size="xl" color={alabaster}>
      <Content>
        <LeftSide>
          {quantity !== undefined ? (
            <CircledItem color="white" width={30}>
              <span style={{ zIndex: 1, paddingTop: 3 }}>{quantity}</span>
            </CircledItem>
          ) : null}
        </LeftSide>
        <Icon name="basket" />
        <Label>{intl.formatMessage(messages.buttonLabel)}</Label>
        <RightSide>
          {price !== undefined ? <Price price={price} isPrimary /> : null}
        </RightSide>
      </Content>
    </Button>
  </ButtonWrapper>
);

ViewCartButton.propTypes = {
  quantity: PropTypes.number,
  price: PropTypes.number,
};

export default ViewCartButton;
