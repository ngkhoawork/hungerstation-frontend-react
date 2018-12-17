import styled from 'styled-components';
import { flex, device, mediaMedium, mediaSmall } from 'utils/css/styles';
import { borderRadius } from 'utils/css/variables';
import imgBg from 'images/homeBusiness.png';
import imgBg2x from 'images/homeBusiness@2x.png';
import imgBg3x from 'images/homeBusiness@3x.png';
import imgBgMob from 'images/homeBusinessMob.png';
import imgBgMob2x from 'images/homeBusinessMob@2x.png';
import imgBgMob3x from 'images/homeBusinessMob@3x.png';
import secondaryImgBg from 'images/homeBusiness2.png';
import secondaryImgBg2x from 'images/homeBusiness2@2x.png';
import secondaryImgBg3x from 'images/homeBusiness2@3x.png';
import DetailsText from '../SectionDetails/DetailsText';

export const ImageGroup = styled.div`
  ${flex({
    align: 'flex-end',
    direction: 'column',
    justify: 'space-around',
  })};
`;

export const PrimaryImg = styled.div`
  width: 100%;
  padding-top: 40%;
  border-radius: ${borderRadius};
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${imgBg});

  ${device.retina`background-image: url(${imgBg2x});`};
  ${device.retina3x`background-image: url(${imgBg3x});`};

  ${mediaMedium`
    width: 100%;
    padding-top: 53.658536585%;
    background-image: url(${imgBgMob});

    ${device.retina`background-image: url(${imgBgMob2x});`};
    ${device.retina3x`background-image: url(${imgBgMob3x});`};
  `};
`;

export const SecondaryImg = styled.div`
  width: 40%;
  margin-top: 40px;
  border-radius: ${borderRadius};
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${secondaryImgBg});

  ${device.retina`background-image: url(${secondaryImgBg2x});`};
  ${device.retina3x`background-image: url(${secondaryImgBg3x});`};

  :before {
    content: '';
    display: block;
    padding-top: 48.087431694%;
  }

  ${mediaMedium`margin: 20px 0 10px`};
`;

export const DetailsWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  padding: 0 100px;
  border-radius: 8px;

  & ${DetailsText} {
    width: 380px;

    ${mediaSmall`width: auto;`};
  }

  ${mediaMedium`padding: 40px;`};

  ${mediaSmall`padding: 20px 0 0;`};
`;
