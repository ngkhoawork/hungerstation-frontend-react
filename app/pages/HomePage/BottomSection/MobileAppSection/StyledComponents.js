import styled, { css } from 'styled-components';
import {
  flex,
  device,
  mediaSmall,
  mediaMedium,
  mediaMediumGreater,
  sideMargin,
} from 'utils/css/styles';
import IconWrapper from 'components/Icon/IconWrapper';
import imgBg from 'images/homeMobAppsBg.png';
import imgBg2x from 'images/homeMobAppsBg@2x.png';
import imgBg3x from 'images/homeMobAppsBg@3x.png';
import imgBgMob from 'images/homeMobAppsBgMob.png';
import imgBgMob2x from 'images/homeMobAppsBgMob@2x.png';
import imgBgMob3x from 'images/homeMobAppsBgMob@3x.png';
import secondaryImgBg from 'images/homeMobAppsScreens.png';
import secondaryImgBg2x from 'images/homeMobAppsScreens@2x.png';
import secondaryImgBg3x from 'images/homeMobAppsScreens@3x.png';
import secondaryImgBgMob from 'images/homeMobAppsScreensMob.png';
import secondaryImgBgMob2x from 'images/homeMobAppsScreensMob@2x.png';
import secondaryImgBgMob3x from 'images/homeMobAppsScreensMob@3x.png';

export const sectionCss = css`
  ${mediaMediumGreater`
    background-image: url(${imgBg});
    background-size: contain;
    background-position: bottom left;
    padding-bottom: 70px;
    overflow: hidden;

    ${device.retina`background-image: url(${imgBg2x});`};
    ${device.retina3x`background-image: url(${imgBg3x});`};
  `};

  ${mediaMedium`margin-bottom: 100px;`};
  ${mediaSmall`margin-bottom: 50px;`};
`;

export const rightSectionCss = css`
  ${mediaMediumGreater`
    position: relative;
    margin-top: auto;
    bottom: -70px;
  `};

  ${mediaMedium`padding: 0;`};
`;

export const MobileBackgroundContainer = styled.div`
  ${mediaMediumGreater`
    position: absolute;
    width: calc(100% - 110px);
    ${sideMargin('start', '100px')};
    bottom: -135px;
    background-image: url(${secondaryImgBg});
    background-size: cover;

    ${device.retina`background-image: url(${secondaryImgBg2x});`};
    ${device.retina3x`background-image: url(${secondaryImgBg3x});`};

    :before {
      content: '';
      display: block;
      padding-top: 112.975778547%;
    }
  `};

  ${mediaMedium`
    background-image: url(${imgBgMob});
    background-size: cover;
    background-position: bottom left;

    ${device.retina`background-image: url(${imgBgMob2x});`};
    ${device.retina3x`background-image: url(${imgBgMob3x});`};

    :before {
      content: '';
      display: block;
      padding-top: 106%;
    }
  `};
`;

export const MobileBackground = styled.div`
  ${mediaMedium`
    width: 80%;
    left: 10%;
    padding-top: 108.227848101%;
    position: absolute;
    bottom: -12%;
    background-size: cover;
    background-image: url(${secondaryImgBgMob});

    ${device.retina`background-image: url(${secondaryImgBgMob2x});`};
    ${device.retina3x`background-image: url(${secondaryImgBgMob3x});`};
  `};

  ${mediaSmall`bottom: -10%;`};
`;

export const DetailsWrapper = styled.div`
  display: block;
  padding: 130px 60px 80px;
  border-radius: 8px;

  ${/* sc-selector */ IconWrapper} {
    margin-bottom: 24px;
  }
  ${mediaMedium`padding: 100px 20px 20px;`};

  ${mediaSmall`
    padding: 60px 20px 56px;

    ${IconWrapper} {
      display: none;
    }
  `};
`;

export const ButtonWrapper = styled.a`
  width: 144px;
  height: 40px;

  :first-child {
    ${sideMargin('end', '20px')};

    ${mediaSmall`
      ${sideMargin('end', '10px')};
    `};
  }
`;

export const ButtonGroup = styled.div`
  ${flex({ align: 'center' })};
  margin-top: 40px;
`;
