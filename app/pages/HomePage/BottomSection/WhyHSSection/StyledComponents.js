import styled from 'styled-components';
import { mediaSmall, mediaMedium, device } from 'utils/css/styles';
import { borderRadius } from 'utils/css/variables';
import imgBg from 'images/whyHS.png';
import imgBg2x from 'images/whyHS@2x.png';
import imgBg3x from 'images/whyHS@3x.png';

export const ImageBackground = styled.div`
  width: 740px;
  padding-top: 43.617021276%;
  background-image: url(${imgBg});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${borderRadius};

  ${mediaMedium`width: 100%;`};

  ${device.retina`
    background-image: url(${imgBg2x});
  `};

  ${device.retina3x`
    background-image: url(${imgBg3x});
  `};
`;

export const DetailsWrapper = styled.div`
  display: block;
  padding: 60px 100px;
  border-top-left-radius: ${borderRadius};
  background: white;
  margin-top: 40px;
  margin-right: -1px;
  line-height: 24px;
  letter-spacing: 0.5px;

  ${mediaMedium`
    padding: 40px;
    margin-top: -80px;
  `};

  ${mediaSmall`
    padding: 20px 20px 60px;
  `};
`;
