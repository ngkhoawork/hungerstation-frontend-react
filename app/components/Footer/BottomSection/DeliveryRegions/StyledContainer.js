import styled from 'styled-components';
import { flex, mediaMedium } from 'utils/css/styles';

const StyledContainer = styled.span`
  width: 100%;
  ${flex({ justify: 'space-between', wrap: 'wrap' })};

  ${mediaMedium`
    ${flex({ justify: 'flex-start' }, false)};
  `};
`;

export default StyledContainer;
