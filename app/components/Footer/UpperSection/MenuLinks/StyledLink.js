import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fuscousGray } from 'utils/colors';

const StyledLink = styled(Link)`
  font-size: 14px;
  color: ${fuscousGray};
  text-decoration: none;
`;

export default StyledLink;
