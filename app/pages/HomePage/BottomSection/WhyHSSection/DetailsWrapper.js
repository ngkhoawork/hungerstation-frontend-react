import styled from 'styled-components';
import { mediaSmall, mediaMedium } from 'utils/styles';

const DetailsWrapper = styled.div`
  display: block;
  padding: 80px 60px;
  border-radius: 8px;
  background: white;
  ${mediaMedium`
    padding: 40px;
  `};
  ${mediaSmall`
    padding: 20px 20px 60px;
  `};
`;

export default DetailsWrapper;
