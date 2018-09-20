import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fuscousGray } from 'utils/css/colors';
import { mediaMedium, mediaLess } from 'utils/css/styles';

const StyledLink = styled(Link)`
  font-size: 14px;
  color: ${fuscousGray};
  text-decoration: none;
  ${mediaLess(1080)`
    flex: 0 1 30%;
  `};
  ${mediaMedium`
    margin-bottom: 5px;
  `};
`;

export default StyledLink;
