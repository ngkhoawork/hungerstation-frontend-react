import React from 'react';
import { string, number } from 'prop-types';
import Row from 'components/Row';
import Paragraph from 'components/Paragraph';
import { silverChalice } from 'utils/css/colors';

const OrderId = ({ id, textSize = 14 }) => (
  <Row align="center">
    <Paragraph size={textSize} color={silverChalice} margin="0 10px 0 0">
      ID
    </Paragraph>
    <Paragraph size={textSize}>#{id}</Paragraph>
  </Row>
);

OrderId.propTypes = {
  id: string,
  textSize: number,
};
export default OrderId;
