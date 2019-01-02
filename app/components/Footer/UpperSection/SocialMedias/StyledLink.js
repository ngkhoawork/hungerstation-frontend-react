import styled from 'styled-components';
import { sideMargin } from 'utils/css/styles';

const StyledLink = styled.div`
  ${sideMargin('start', '20px')};

  :first-child {
    ${sideMargin('start', '0')};
  }
`;

export default StyledLink;
