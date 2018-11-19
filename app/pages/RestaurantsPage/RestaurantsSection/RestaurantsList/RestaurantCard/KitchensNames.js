import React, { Fragment } from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';
import Row from 'components/Row';
import Paragraph from 'components/Paragraph';
import { silverChalice } from 'utils/css/colors';
import { sideMargin } from 'utils/css/styles';

const KitchensNames = ({ names }) => (
  <Row>
    {names.map(n => (
      <Fragment key={n}>
        <ParagraphWithPoint size={14} color={silverChalice} margin="none">
          {n}
        </ParagraphWithPoint>
      </Fragment>
    ))}
  </Row>
);

KitchensNames.propTypes = {
  names: array,
};
export default KitchensNames;

const ParagraphWithPoint = styled(Paragraph)`
  &:before {
    content: '•';
    ${sideMargin('end', '2px')};
  }
  height: 18px;
  padding: 0;
  margin-top: 0px;
  margin-bottom: 5px;
  ${sideMargin('end', '8px')};
`;
