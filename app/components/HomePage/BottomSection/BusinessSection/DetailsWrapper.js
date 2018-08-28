import styled from 'styled-components';
import { mediaMedium, mediaSmall } from 'utils/styles';

const DetailsWrapper = styled.div`
  display: block;
  padding: 80px 60px;
  border-radius: 8px;
  ${mediaMedium`
    padding: 40px;
  `};
  ${mediaSmall`
    padding: 20px 0 0;
  `};
`;

export default DetailsWrapper;
