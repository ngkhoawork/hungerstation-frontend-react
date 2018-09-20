import styled from 'styled-components';
import { mediaMedium } from 'utils/css/styles';

const Header = styled.p`
  font-size: 50px;
  color: white;
  margin: 0;
  margin-top: -10px;
  margin-bottom: 40px;
  ${mediaMedium`
    margin-top: 15px;
    font-size: 35px;
    text-align: center;
    line-height: 35px;
  `};
`;

export default Header;
