import { injectGlobal } from 'styled-components';
import HSRwoff from './vendor/fonts/HungerStation-Regular.woff';
import HSRwoff2 from './vendor/fonts/HungerStation-Regular.woff2';
import HSRotf from './vendor/fonts/HungerStation-Regular.otf';

import HSLwoff from './vendor/fonts/HungerStation-Light.woff';
import HSLwoff2 from './vendor/fonts/HungerStation-Light.woff2';
import HSLotf from './vendor/fonts/HungerStation-Light.otf';

import HSBwoff from './vendor/fonts/HungerStation-Bold.woff';
import HSBwoff2 from './vendor/fonts/HungerStation-Bold.woff2';
import HSBotf from './vendor/fonts/HungerStation-Bold.otf';

/* eslint no-unused-expressions: 0 */
injectGlobal`
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
    background-color: white;
    width: 600px;
    max-width: 100%;
    height: 900px;
    max-height: 100%;
    z-index: 101;
    outline: 9999px solid rgba(0, 0, 0, 0.5);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .Overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .ReactModal__Body--open {
    overflow-y: hidden;
  }
`;
