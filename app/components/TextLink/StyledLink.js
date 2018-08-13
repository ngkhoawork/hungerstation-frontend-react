import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  font-weight: 600;
  color: ${({ color }) => color};
  text-decoration: none;
`;

export default StyledLink;
