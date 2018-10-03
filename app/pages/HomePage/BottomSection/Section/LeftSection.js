import styled from 'styled-components';
import { mediaSmall } from 'utils/css/styles';

const LeftSection = styled.div`
  width: 520px;
  background: white;
  z-index: 50;
  overflow: visible;
  ${mediaSmall`
    width: auto;
  `};
  &:nth-of-type(2) {
    border-radius: 0 0 8px 8px;
    ${mediaSmall`
      width: 90%;
    `};
  }
`;

export default LeftSection;
