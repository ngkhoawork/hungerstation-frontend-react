import styled from 'styled-components';
import { mediaSmall, mediaMedium, device, sidePadding } from 'utils/css/styles';
import { borderRadius } from 'utils/css/variables';
import imgBg from 'images/whyHS.png';
import imgBg2x from 'images/whyHS@2x.png';
import imgBg3x from 'images/whyHS@3x.png';
import imgBgMob from 'images/whyHSMob.png';
import imgBgMob2x from 'images/whyHSMob@2x.png';
import imgBgMob3x from 'images/whyHSMob@3x.png';

export const ImageBackground = styled.div`
  width: 740px;
  padding-top: 43.617021276%;
  background-image: url(${imgBg});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${borderRadius};

  ${device.retina`background-image: url(${imgBg2x});`};
  ${device.retina3x`background-image: url(${imgBg3x});`};

  ${mediaMedium`
    width: 100%;
    padding-top: 55.555555555%;
    background-image: url(${imgBgMob});

    ${device.retina`background-image: url(${imgBgMob2x});`};
    ${device.retina3x`background-image: url(${imgBgMob3x});`};
  `};
`;

export const DetailsWrapper = styled.div`
  display: block;
  padding: 60px 100px;
  border-top-left-radius: ${borderRadius};
  background: white;
  margin-top: 55px;
  margin-right: -1px;
  line-height: 24px;
  letter-spacing: 0.5px;

  ${mediaMedium`
    padding: 40px;
    margin-top: -80px;
  `};

  ${mediaSmall`
    padding-top: 20px;
    padding-bottom: 60px;
    ${sidePadding('end', '43px;')};
  `};
`;
