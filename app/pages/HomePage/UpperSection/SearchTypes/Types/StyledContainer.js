import styled from 'styled-components';
import { flex, mediaMedium } from 'utils/css/styles';

const StyledContainer = styled.span`
  ${flex({ align: 'center' })};

  ${mediaMedium`
    flex: 1;
    justify-content: center;
  `};
`;

export default StyledContainer;
