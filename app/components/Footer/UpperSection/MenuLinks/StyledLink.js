import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fuscousGray } from 'utils/colors';
import { mediaMedium } from 'utils/styles';

const StyledLink = styled(Link)`
  font-size: 14px;
  color: ${fuscousGray};
  text-decoration: none;
  ${mediaMedium`
    flex: 0 1 28%;
    margin-bottom: 5px;
  `};
`;

export default StyledLink;
