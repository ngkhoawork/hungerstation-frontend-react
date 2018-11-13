import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  margin-left: 20px;

  :first-child {
    margin-left: 0;
  }
`;

export default StyledLink;
