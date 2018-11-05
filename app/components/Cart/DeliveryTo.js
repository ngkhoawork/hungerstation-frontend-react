import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { flex } from 'utils/css/styles';
import { fontFamilyLight, fontFamilyRegular } from 'utils/css/variables';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import messages from './messages';

const Wrapper = styled.div`
  ${flex({ direction: 'column', align: 'center' })};
`;

const DeliveryTitle = styled.div`
  height: 16px;
  width: 63px;
  color: #434340;
  font-family: ${fontFamilyRegular};
  font-size: 14px;
  line-height: 16px;
  margin: 5px 0;
`;

const DeliveryLocation = styled.div`
  position: relative;
  display: inline-block;
  height: 17px;
  color: #434340;
  font-family: ${fontFamilyLight};
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.22px;
  line-height: 17px;
  margin: 0 0 20px 20px;
`;

const IconPosition = styled.div`
  position: absolute;
  left: -20px;
`;

const DeliveryTo = ({ city, district }) => (
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
