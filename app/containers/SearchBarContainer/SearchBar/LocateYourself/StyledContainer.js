import styled from 'styled-components';
import { flex, mediaMedium, sideMargin, sidePosition } from 'utils/css/styles';

const StyledContainer = styled.span`
  ${flex({ align: 'center' })};
  padding: 0 10px;
  cursor: pointer;

  ${mediaMedium`
    position: absolute;
    ${sidePosition('end', '5%')};
    ${sideMargin('end', '16px')};
  `};
`;

export default StyledContainer;
