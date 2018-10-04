import styled from 'styled-components';
import { mediaMedium, mediaSmall } from 'utils/css/styles';
import DetailsText from '../SectionDetails/DetailsText';

const DetailsWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  padding: 66px 60px;
  border-radius: 8px;

  & ${DetailsText} {
    width: 380px;
    ${mediaSmall`
      width: auto;
    `};
  }

  ${mediaMedium`
    padding: 40px;
  `};
  ${mediaSmall`
    padding: 20px 0 0;
  `};
`;

export default DetailsWrapper;
