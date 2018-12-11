import React from 'react';
import styled from 'styled-components';
import intl from 'utils/intlService';
import { gold } from 'utils/css/colors';
import { sideMargin } from 'utils/css/styles';
import Paragraph from 'components/Paragraph';
import messages from './messages';

const Promoted = () => (
  <Wrapper>
    <ParagraphWithStar color="white" size={12} margin="2px 8px 0 8px">
      {intl.formatMessage(messages.promoted)}
    </ParagraphWithStar>{' '}
  </Wrapper>
);

export default Promoted;

const Wrapper = styled.div`
  height: 24px;
  width: 72px;
  border-radius: 8px;
  background-color: ${gold};
  box-shadow: 0 9px 12px -3px rgba(134, 16, 16, 0.16);
`;

const ParagraphWithStar = styled(Paragraph)`
  font-weight: bold;
  &:before {
    content: '★';
    font-size: 8px;
    ${sideMargin('end', '4px')};
    vertical-align: text-top;
    line-height: 15px;
  }
`;
