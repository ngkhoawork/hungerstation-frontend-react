import styled from 'styled-components';
import { mediaSmall } from 'utils/css/styles';

const RightSection = styled.div`
  width: 200px;
  z-index: 100;
  ${mediaSmall`
    width: 90%;
    margin-left: 10%;
  `};
`;

export default RightSection;
