import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/styles';
import Background from 'images/background.png';

const StyledApp = styled.div`
  ${flexBox({
    align: 'center',
    direction: 'column',
    justify: 'flex-start',
  })};
  background-color: white;
  font-family: 'HungerStation-Regular', sans-serif;
  background-image: url(${Background});
  ${mediaMedium`
    padding: 0 10px;
  `};
`;

export default StyledApp;
