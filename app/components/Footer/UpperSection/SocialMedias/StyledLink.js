import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mediaMedium } from 'utils/css/styles';

const StyledLink = styled(Link)`
  margin-left: 20px;
  ${mediaMedium`
    margin-left: 0;
    margin-right: 20px;
  `};
`;

export default StyledLink;
