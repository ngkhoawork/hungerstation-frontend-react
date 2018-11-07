import styled from 'styled-components';
import { mediaSmall } from 'utils/css/styles';

const LeftSection = styled.div`
  width: 220px;
  background: white;
  z-index: 50;
  overflow: visible;
  ${mediaSmall`
    width: auto;
  `};
`;

export default LeftSection;
