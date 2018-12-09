import React from 'react';
import { string, number } from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Row from 'components/Row';
import Paragraph from 'components/Paragraph';
import { silverChalice } from 'utils/css/colors';

// TODO: this should not be using Paragraphs
const OrderId = ({ id, textSize = 14 }) => (
  <Row align="center">
    <Paragraph size={textSize} color={silverChalice} margin="0 10px 0 10px">
      ID
    </Paragraph>
    <CopyToClipboard text={id}>
      <Paragraph size={textSize}>#{id}</Paragraph>
    </CopyToClipboard>
  </Row>
);

OrderId.propTypes = {
  id: string,
  textSize: number,
};

export default OrderId;
