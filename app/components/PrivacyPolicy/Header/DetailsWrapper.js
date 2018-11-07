import styled from 'styled-components';
import { mediaSmall, mediaMedium } from 'utils/css/styles';

const DetailsWrapper = styled.div`
  display: block;
  padding: 60px 150px;
  border-radius: 8px;
  background: white;
  margin-top: 25px;
  line-height: 24px;
  letter-spacing: 0.5px;
  ${mediaMedium`
    padding: 40px;
  `};
  ${mediaSmall`
    margin: -120px -11px 0 -12px;
    padding: 35px 15px 0px;
  `};
`;

export default DetailsWrapper;
