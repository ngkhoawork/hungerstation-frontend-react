import React from 'react';
import styled from 'styled-components';
import { string, number } from 'prop-types';
import Row from 'components/Row';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import { silverChalice } from 'utils/css/colors';
import { sideMargin } from 'utils/css/styles';

const Wrapper = styled.div`
  ${sideMargin('end', '18px')};
  ${sideMargin('start', '9px')};

  p {
    line-height: 1;
  }
`;

const IconAndText = ({ iconName, text, textSize = 14 }) => (
  <Row align="center">
    <Icon name={iconName} />
    <Wrapper>
      <Paragraph size={textSize} color={silverChalice}>
        {text}
      </Paragraph>
    </Wrapper>
  </Row>
);

IconAndText.propTypes = {
  iconName: string,
  text: string,
  textSize: number,
};
export default IconAndText;
