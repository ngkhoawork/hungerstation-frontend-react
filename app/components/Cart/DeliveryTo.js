import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import messages from './messages';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DeliveryTitle = styled.div`
  height: 16px;
  width: 63px;
  color: #434340;
  font-family: 'HungerStation-Regular', sans-serif;
  font-size: 14px;
  line-height: 16px;
  margin: 5px 0;
`;

const DeliveryLocation = styled.div`
  position: relative;
  display: inline-block;
  height: 17px;
  color: #434340;
  font-family: 'HungerStation-Light', sans-serif;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.22px;
  line-height: 17px;
  margin: 0px auto 20px;
`;

const IconPosition = styled.div`
  position: absolute;
  left: -20px;
`;

const DeliveryTo = ({ city = 'Almohammadeah', district = 'Baljursahi' }) => (
  <Wrapper>
    <DeliveryTitle>{intl.formatMessage(messages.deliveryTo)}</DeliveryTitle>
    <DeliveryLocation>
      <IconPosition>
        <Icon name="pin" />
      </IconPosition>
      {city}, {district}
    </DeliveryLocation>
  </Wrapper>
);

DeliveryTo.propTypes = {
  city: PropTypes.string,
  district: PropTypes.string,
};

export default DeliveryTo;
