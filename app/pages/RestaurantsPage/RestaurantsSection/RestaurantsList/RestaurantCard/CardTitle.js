import React from 'react';
import { string } from 'prop-types';
import Row from 'components/Row';
import Paragraph from 'components/Paragraph';
import CircledItem from 'components/CircledItem';
import { silverChalice, gold, persimmon } from 'utils/css/colors';

const mappedStatusToColor = {
  closed: silverChalice,
  busy: persimmon,
  ready: '#32D48A',
  soon: gold,
};

const CardTitle = ({ name, status }) => (
  <Row align="center">
    <CircledItem
      color={mappedStatusToColor[status] || silverChalice}
      width={7}
    />
    <Paragraph size={17} margin="0 0 0 6px">
      {name}
    </Paragraph>
  </Row>
);

CardTitle.propTypes = {
  name: string,
  status: string,
};
export default CardTitle;
