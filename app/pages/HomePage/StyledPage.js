import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/css/styles';

const StyledPage = styled.div`
  background: ${props => (props.dark ? '#f7f7f7' : '#ffffff')};
  font-family: 'HungerStation-Regular', sans-serif;
  z-index: 100;
  max-width: 1446px;
  width: 100%;
  ${flexBox({ align: 'center', justify: 'center', direction: 'column' })};
  ${mediaMedium`
    padding: 0 10px;
  `};
`;

export default StyledPage;
