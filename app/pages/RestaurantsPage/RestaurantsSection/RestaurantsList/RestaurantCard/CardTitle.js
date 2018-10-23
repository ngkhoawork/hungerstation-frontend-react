import React from 'react';
import { string } from 'prop-types';
import Row from 'components/Row';
import Paragraph from 'components/Paragraph';
import CircledItem from 'components/CircledItem';
import { jade, gold, persimmon, fuscousGray } from 'utils/css/colors';

const mappedStatusToColor = {
  closed: persimmon,
  busy: gold,
  ready: jade,
};

const CardTitle = ({ name, status }) => (
  <Row align="center">
    <CircledItem color={mappedStatusToColor[status] || fuscousGray} width={7} />
    <Paragraph size={17} margin="0 0 0 5px">
      {name}
    </Paragraph>
  </Row>
);

CardTitle.propTypes = {
  name: string,
  status: string,
};
export default CardTitle;
