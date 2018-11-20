import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import Row from 'components/Row';
import Paragraph from 'components/Paragraph';
import CircledItem from 'components/CircledItem';
import { silverChalice, gold, persimmon } from 'utils/css/colors';
import { sideMargin } from 'utils/css/styles';

const mappedStatusToColor = {
  closed: silverChalice,
  busy: persimmon,
  ready: '#32D48A',
  soon: gold,
};

const Title = styled.p`
  ${sideMargin('start', '6px')};
  margin-top: 0;
  margin-bottom: 0;
`;

const CardTitle = ({ name, status }) => (
  <Row align="center">
    <CircledItem
      color={mappedStatusToColor[status] || silverChalice}
      width={7}
    />
    <Paragraph size={17}>
      <Title>{name}</Title>
    </Paragraph>
  </Row>
);

CardTitle.propTypes = {
  name: string,
  status: string,
};
export default CardTitle;
