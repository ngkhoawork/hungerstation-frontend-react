import { injectGlobal } from 'styled-components';
import { flex } from 'utils/css/styles';
import { jade, alabaster } from 'utils/css/colors';
import { zIndexModal, fontFamilyRegular } from 'utils/css/variables';
import HSRwoff from './vendor/fonts/HungerStation-Regular.woff';
import HSRwoff2 from './vendor/fonts/HungerStation-Regular.woff2';
import HSRotf from './vendor/fonts/HungerStation-Regular.otf';
import HSReot from './vendor/fonts/HungerStation-Regular.eot';

import HSLwoff from './vendor/fonts/HungerStation-Light.woff';
import HSLwoff2 from './vendor/fonts/HungerStation-Light.woff2';
import HSLotf from './vendor/fonts/HungerStation-Light.otf';
import HSLeot from './vendor/fonts/HungerStation-Light.eot';

import HSBwoff from './vendor/fonts/HungerStation-Bold.woff';
import HSBwoff2 from './vendor/fonts/HungerStation-Bold.woff2';
import HSBotf from './vendor/fonts/HungerStation-Bold.otf';
import HSBeot from './vendor/fonts/HungerStation-Bold.eot';

export const global = injectGlobal`
  @font-face {
    font-family: 'HungerStation-Regular';
    src: url(${HSReot});
    src: url(${HSReot}?#iefix) format('embedded-opentype'),
      url(${HSRwoff2}) format('woff2'),
      url(${HSRwoff}) format('woff'),
      url(${HSRotf}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'HungerStation-Light';
    src: url(${HSLeot});
    src: url(${HSLeot}?#iefix) format('embedded-opentype'),
      url(${HSLwoff2})  format('woff2'),
      url(${HSLwoff}) format('woff'),
      url(${HSLotf}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'HungerStation-Bold';
    src: url(${HSBeot});
    src: url(${HSBeot}?#iefix) format('embedded-opentype'),
      url(${HSBwoff2}) format('woff2'),
      url(${HSBwoff}) format('woff'),
      url(${HSBotf}) format('opentype');
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
    font-family: ${fontFamilyRegular};
  }

  ::-webkit-scrollbar-track {
    border-radius: 5.5px;
    background-color: ${alabaster};
  }

  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 5.5px;
    background-color: ${alabaster};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5.5px;
    background-color: #e4e4e4;
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
    max-width: 100vw;
    max-height: 100vh;
    outline: none;
  }

  .FiltersModal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 600px;
    max-width: 100%;
    height: 900px;
    max-height: 100%;
    z-index: 101;
    ${flex({ justify: 'space-between', direction: 'column' })};
  }

  .Overlay {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${zIndexModal};
    background: rgba(0.4, 0.4, 0.4, 0.35);
    position: fixed;
  }

  .ReactModal__Body--open {
    overflow-y: hidden;
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
