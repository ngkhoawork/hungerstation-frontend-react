import styled from 'styled-components';
import { flex, device, mediaMedium, mediaSmall } from 'utils/css/styles';
import { paleSlate } from 'utils/css/colors';
import bgImg from 'images/home.png';
import bgImg2x from 'images/home@2x.png';
import bgImg3x from 'images/home@3x.png';
import bgImgSmall from 'images/mobile-homepage-header.png';
import bgImgSmall2x from 'images/mobile-homepage-header@2x.png';
import bgImgSmall3x from 'images/mobile-homepage-header@3x.png';

const gradient =
  'linear-gradient(180deg, rgba(81,92,84,0.5) 0%, transparent 50%)';

const gradientMob1 = 'linear-gradient(180deg, transparent 58%, #88C3AB 70%)';
const gradientMob2 =
  'linear-gradient(180deg, transparent 0%, rgba(147,146,146,0.38) 65%, rgba(0,0,0,0.68) 98%)';
const gradientMob3 =
  'linear-gradient(rgba(134,134,134,0.21), rgba(134,134,134,0.21))';
const gradientMob4 = 'linear-gradient(rgba(81,4,4,0.04), rgba(81,4,4,0.04))';
const mobileGradient = `${gradientMob4}, ${gradientMob3}, ${gradientMob2}, ${gradientMob1}`;

const StyledUpperSection = styled.div`
  ${flex({ align: 'center', justify: 'center', direction: 'column' })};

  border-radius: 8px;
  margin-top: 8px;
  width: 100%;
  padding-bottom: 80px;
  background-size: cover;
  background-image: ${gradient}, url(${bgImg});

  ${device.retina`background-image: ${gradient}, url(${bgImg2x});`};
  ${device.retina3x`background-image: ${gradient}, url(${bgImg3x});`};

  ${mediaMedium`
    padding-bottom: 20px;
    background-position-y: bottom;
    background-color: ${paleSlate};
  `};

  ${mediaSmall`
    background-image: ${mobileGradient}, url(${bgImgSmall});

    ${device.retina`background-image: ${mobileGradient}, url(${bgImgSmall2x});`};
    ${device.retina3x`background-image: ${mobileGradient}, url(${bgImgSmall3x});`};
  `};
`;

export default StyledUpperSection;
