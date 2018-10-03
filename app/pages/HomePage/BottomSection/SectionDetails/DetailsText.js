import styled from 'styled-components';
import { ironsideGray } from 'utils/css/colors';
import { mediaSmall } from 'utils/css/styles';

const DetailsText = styled.p`
  color: ${ironsideGray};
  font-family: 'HungerStation-Light', sans-serif;
  font-size: 16px;
  letter-spacing: 0.5px;
  margin: 24px 0 32px;
  opacity: 0.6;
  line-height: 1.8em;
  ${mediaSmall`
    font-size: 14px;
  `};
`;

export default DetailsText;
