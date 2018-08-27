import styled from 'styled-components';
import { mediaSmall } from 'utils/styles';

const LeftSection = styled.div`
  width: 500px;
  background: white;
  z-index: 50;
  &:nth-of-type(2) {
    ${mediaSmall`
      width: 80%;
    `};
  }
`;

// border: 2px solid green;

export default LeftSection;
