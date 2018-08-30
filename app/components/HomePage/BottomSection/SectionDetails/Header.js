import styled from 'styled-components';
import { fuscousGray } from 'utils/colors';
import { mediaMedium } from 'utils/styles';

const Header = styled.p`
  font-size: 40px;
  letter-spacing: 0.56px;
  color: ${fuscousGray};
  margin: 0;
  margin-bottom: 15px;
  line-height: 50px;
  ${mediaMedium`
    font-size: 35px;
  `};
`;

export default Header;
