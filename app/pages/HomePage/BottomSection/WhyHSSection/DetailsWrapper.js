import styled from 'styled-components';
import { mediaSmall, mediaMedium } from 'utils/css/styles';

const DetailsWrapper = styled.div`
  display: block;
  padding: 60px 100px;
  border-radius: 8px;
  background: white;
  margin-top: 40px;
  line-height: 24px;
  letter-spacing: 0.5px;
  ${mediaMedium`
    padding: 40px;
  `};
  ${mediaSmall`
    margin-top: -80px;
    padding: 20px 20px 60px;
  `};
`;

export default DetailsWrapper;
