import styled from 'styled-components';
import { mediaLess, sidePosition } from 'utils/css/styles';

const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  ${sidePosition('end', '115px')};
  cursor: pointer;
  ${mediaLess(950)`
    ${sidePosition('end', '70px')};
  `};
`;

export default IconWrapper;
