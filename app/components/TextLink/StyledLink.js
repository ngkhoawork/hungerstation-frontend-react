import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  font-weight: 500;
  color: ${({ color }) => color};
  text-decoration: none;
  margin: 0;
`;

export default StyledLink;
