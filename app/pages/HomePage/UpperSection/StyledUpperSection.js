import styled from 'styled-components';
import { flexBox, mediaMedium, mediaSmall } from 'utils/css/styles';
import { paleSlate } from 'utils/css/colors';

import BackgroundCropped from 'images/background-cropped.png';
import BackgroundMobile from 'images/background-small.png';
import BackgroundMedium from 'images/background-medium.png';

const StyledUpperSection = styled.div`
  ${flexBox(
    { align: 'center', justify: 'center', direction: 'column' },
    `
  width: 100%;
  padding-bottom: 80px;
  background-position-x: center;
  background-position-y: -2px;
  background-image: url(${BackgroundCropped});
  `,
  )};
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
