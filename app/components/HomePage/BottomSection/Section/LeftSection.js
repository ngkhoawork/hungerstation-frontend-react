import styled from 'styled-components';
import { mediaSmall } from 'utils/styles';

const LeftSection = styled.div`
  width: 500px;
  background: white;
  z-index: 50;
  &:nth-of-type(2) {
    border-radius: 0 0 8px 8px;
    ${mediaSmall`
      width: 80%;
    `};
  }
`;

export default LeftSection;
