import styled from 'styled-components';
import { mediaSmall } from 'utils/styles';

const RightSection = styled.div`
  width: 700px;
  z-index: 100;
  ${mediaSmall`
    width: 80%;
  `};
`;

export default RightSection;
