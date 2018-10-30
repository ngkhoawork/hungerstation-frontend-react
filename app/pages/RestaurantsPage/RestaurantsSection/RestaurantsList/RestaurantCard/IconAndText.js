import React from 'react';
import { string, number } from 'prop-types';
import Row from 'components/Row';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import { silverChalice } from 'utils/css/colors';

const CardTitle = ({ iconName, text, textSize = 14 }) => (
  <Row align="center">
    <Icon name={iconName} />
    <Paragraph size={textSize} color={silverChalice}>
      {text}
    </Paragraph>
  </Row>
);

CardTitle.propTypes = {
  iconName: string,
  text: string,
  textSize: number,
};
export default CardTitle;
