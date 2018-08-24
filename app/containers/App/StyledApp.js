import styled from 'styled-components';
import { flexBox, mediaMedium, mediaSmall } from 'utils/styles';
import Background from 'images/background.png';
import BackgroundMobile from 'images/background-mobile.png';
import BackgroundMedium from 'images/background-medium.png';

const StyledApp = styled.div`
  ${flexBox({
    align: 'center',
    direction: 'column',
    justify: 'flex-start',
  })};
  background-color: white;
  font-family: 'HungerStation-Regular', sans-serif;
  background-image: url(${Background});
  background-position-x: center;
  ${mediaMedium`
    padding: 0 10px;
    background-image: url(${BackgroundMedium});
  `};
  ${mediaSmall`
    background-image: url(${BackgroundMobile});
    background-size: 95%;
  `};
`;

export default StyledApp;
