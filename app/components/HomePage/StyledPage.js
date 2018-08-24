import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/styles';

const StyledPage = styled.div`
  font-family: 'HungerStation-Regular', sans-serif;
  z-index: 100;
  max-width: 1446px;
  ${flexBox({ align: 'center', justify: 'center', direction: 'column' })};
  ${mediaMedium`
    paddin: 0 10px;
  `};
`;

export default StyledPage;
