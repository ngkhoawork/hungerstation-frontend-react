import styled from 'styled-components';
import { mediaSmall, mediaMedium } from 'utils/css/styles';
import IconWrapper from 'components/Icon/IconWrapper';

const DetailsWrapper = styled.div`
  display: block;
  padding: 160px 60px 80px;
  border-radius: 8px;

  ${IconWrapper} {
    margin-bottom: 24px;
  }
  ${mediaMedium`
    padding: 100px 20px 20px;
  `} ${mediaSmall`
    padding: 60px 40px 56px;

    ${IconWrapper} {
      display: none;
    }
  `};
`;

export default DetailsWrapper;
