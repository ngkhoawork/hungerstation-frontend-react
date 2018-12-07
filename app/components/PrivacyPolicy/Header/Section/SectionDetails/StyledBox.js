import styled from 'styled-components';
import { flex, mediaSmall, sidePadding, sideMargin } from 'utils/css/styles';

const StyledBox = styled.div`
  ${flex({ align: 'center', direction: 'column' })};
  width: 100%;
  z-index: 100;
  background: white;
  border-radius: 8px;
  ${sideMargin('start', '-190px')};
  white-space: nowrap;
  ${mediaSmall`
    ${sideMargin('start', '12px')};
    white-space: unset;
    ${sidePadding('start', '40px')};
    `};
`;
export default StyledBox;
