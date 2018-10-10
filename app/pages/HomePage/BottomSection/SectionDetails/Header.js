import styled from 'styled-components';
import { fuscousGray } from 'utils/css/colors';
import { mediaMedium } from 'utils/css/styles';

const Header = styled.div`
  font-size: 36px;
  letter-spacing: 0.56px;
  color: ${fuscousGray};
  margin: 0;
  line-height: 1.2em;
  ${mediaMedium`
    font-size: 35px;
  `};
`;

export default Header;
