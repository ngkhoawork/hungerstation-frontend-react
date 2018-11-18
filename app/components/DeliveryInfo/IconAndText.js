import React from 'react';
import { string, number } from 'prop-types';
import Row from 'components/Row';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import { silverChalice } from 'utils/css/colors';

const IconAndText = ({ iconName, text, textSize = 14 }) => (
  <Row align="center">
    <Icon name={iconName} style={{ marginRight: 9 }} />
    <Paragraph
      size={textSize}
      color={silverChalice}
      style={{ marginRight: 18 }}
    >
      {text}
    </Paragraph>
  </Row>
);

IconAndText.propTypes = {
  iconName: string,
  text: string,
  textSize: number,
};
export default IconAndText;
