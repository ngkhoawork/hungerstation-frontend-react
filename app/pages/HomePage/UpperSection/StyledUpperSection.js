import styled from 'styled-components';
import { flex, device, mediaMedium, mediaSmall } from 'utils/css/styles';
import { paleSlate } from 'utils/css/colors';
import bgImg from 'images/home.png';
import bgImg2x from 'images/home@2x.png';
import bgImg3x from 'images/home@3x.png';
import bgImgSmall from 'images/homeMob.png';
import bgImgSmall2x from 'images/homeMob@2x.png';
import bgImgSmall3x from 'images/homeMob@3x.png';

const StyledUpperSection = styled.div`
  ${flex({ align: 'center', justify: 'center', direction: 'column' })};

  border-radius: 8px;
  margin-top: 8px;
  width: 100%;
  padding-bottom: 80px;
  background-image: url(${bgImg});
  background-size: cover;

  ${device.retina`background-image: url(${bgImg2x});`};
  ${device.retina3x`background-image: url(${bgImg3x});`};

  ${mediaMedium`
    padding-bottom: 20px;
    background-position-y: bottom;
    background-color: ${paleSlate};
  `};

  ${mediaSmall`
    background-image: url(${bgImgSmall});

    ${device.retina`background-image: url(${bgImgSmall2x});`};
    ${device.retina3x`background-image: url(${bgImgSmall3x});`};
  `};
`;

export default StyledUpperSection;
