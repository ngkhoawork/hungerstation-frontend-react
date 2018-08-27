import styled from 'styled-components';
import { flexBox, mediaMedium, mediaSmall } from 'utils/styles';
import Background from 'images/background.png';
import BackgroundMobile from 'images/background-small.png';
import BackgroundMedium from 'images/background-medium.png';
import BackgroundCropped from 'images/background-cropped.png';

const StyledApp = styled.div`
  ${flexBox({
    align: 'center',
    direction: 'column',
    justify: 'flex-start',
  })};
  background-color: white;
  font-family: 'HungerStation-Regular', sans-serif;
  background-position-x: center;
  background-image: url(${Background});
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
