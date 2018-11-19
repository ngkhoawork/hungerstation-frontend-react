import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { sideMargin } from 'utils/css/styles';

const StyledLink = styled(Link)`
  ${sideMargin('start', '20px')};

  :first-child {
    margin-left: 0;
  }
`;

export default StyledLink;
