import { injectGlobal } from 'styled-components';
import { jade } from 'utils/css/colors';
import { zIndexModal, borderRadius } from 'utils/css/variables';
import HSRwoff from './vendor/fonts/HungerStation-Regular.woff';
import HSRwoff2 from './vendor/fonts/HungerStation-Regular.woff2';
import HSRotf from './vendor/fonts/HungerStation-Regular.otf';

import HSLwoff from './vendor/fonts/HungerStation-Light.woff';
import HSLwoff2 from './vendor/fonts/HungerStation-Light.woff2';
import HSLotf from './vendor/fonts/HungerStation-Light.otf';

import HSBwoff from './vendor/fonts/HungerStation-Bold.woff';
import HSBwoff2 from './vendor/fonts/HungerStation-Bold.woff2';
import HSBotf from './vendor/fonts/HungerStation-Bold.otf';

export const global = injectGlobal`
  @font-face {
    font-family: 'HungerStation-Regular';
    src: url(${HSRwoff2});
    src:
      url(${HSRotf}) format('opentype'),
      url(${HSRwoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'HungerStation-Light';
    src: url(${HSLwoff2});
    src:
      url(${HSLotf}) format('opentype'),
      url(${HSLwoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'HungerStation-Bold';
    src: url(${HSBwoff2});
    src:
      url(${HSBotf}) format('opentype'),
      url(${HSBwoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'HungerStation-Regular', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #F7F7F7;
    min-height: 100%;
    min-width: 100%;
    color: #434340;
  }

  .Modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 96%;
    max-height: 96%;
    outline: none;
    border-radius: ${borderRadius};
    overflow: hidden;
  }

  .Overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${zIndexModal};
    background: rgba(0, 0, 0, 0.5);
  }

  .slick-dots {
    top: -60px;
    right: 0;
    width: auto !important;
    z-index: 0;
  }

  .slick-dots button:before {
    font-size: 9px !important;
    opacity: 0.1 !important;
  }

  .slick-dots li {
    margin: 0 !important;
    width: 15px !important;
    height: 15px !important;
  }

  .slick-active button:before {
    color: ${jade} !important;
    font-size: 9px !important;
    opacity: 1 !important;
  }

  .slick-prev:before, .slick-next:before {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    .slick-dots {
      right: 20px;
    }
  }
`;
