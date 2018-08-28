import styled from 'styled-components';
import { mediaLess } from 'utils/styles';

const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 115px;
  cursor: pointer;
  ${mediaLess(950)`
    right: 70px;
  `};
`;

export default IconWrapper;
