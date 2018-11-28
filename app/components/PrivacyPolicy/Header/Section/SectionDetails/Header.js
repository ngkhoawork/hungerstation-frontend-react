import styled from 'styled-components';
import { fuscousGray } from 'utils/css/colors';
import { mediaMedium, sidePadding } from 'utils/css/styles';

const Header = styled.p`
  font-size: 40px;
  letter-spacing: 0.56px;
  color: ${fuscousGray};
  margin: 0;
  line-height: 1.2em;
  height: 30px;
  width: 374px;
  ${mediaMedium`
    font-size: 35px;
    ${sidePadding('start', '46px')};
  `};
`;

export default Header;
