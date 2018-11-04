import styled from 'styled-components';
import { flex, mediaMedium, mediaSmall } from 'utils/css/styles';
import { paleSlate } from 'utils/css/colors';

import BackgroundCropped from 'images/background-cropped.png';
import BackgroundMobile from 'images/background-small.png';
import BackgroundMedium from 'images/background-medium.png';

const StyledUpperSection = styled.div`
  ${flex({ align: 'center', justify: 'center', direction: 'column' })};

  border-radius: 8px;
  margin-top: 8px;
  width: 100%;
  padding-bottom: 80px;
  background-position-x: center;
  background-position-y: -2px;
  background-image: url(${BackgroundCropped});

  ${mediaMedium`
    background-image: url(${BackgroundMedium});
    padding-bottom: 20px;
    background-position-y: bottom;
    background-color: ${paleSlate};
  `};

  ${mediaSmall`
    background-image: url(${BackgroundMobile});
    background-size: 100%;
  `};
`;

export default StyledUpperSection;
