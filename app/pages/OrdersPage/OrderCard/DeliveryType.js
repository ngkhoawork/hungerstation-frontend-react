import React from 'react';
import { string, number } from 'prop-types';
import Row from 'components/Row';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import { silverChalice } from 'utils/css/colors';

const DeliveryType = ({ iconName, text, textSize = 14 }) => (
  <Row align="center">
    <Paragraph size={textSize} color={silverChalice} margin="0 5px 0 0">
      {text}
    </Paragraph>
    <Icon name={iconName} offsetY="1" />
  </Row>
);

DeliveryType.propTypes = {
  iconName: string,
  text: string,
  textSize: number,
};
export default DeliveryType;
