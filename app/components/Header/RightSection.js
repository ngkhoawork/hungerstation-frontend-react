import styled from 'styled-components';
import { mediaSmall, mediaMedium } from 'utils/css/styles';

const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  ${mediaMedium`
    flex: 0.4;
  `};
  ${mediaSmall`
    flex: 0.6;
  `};
`;

export default RightSection;