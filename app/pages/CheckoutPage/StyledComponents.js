import styled, { css } from 'styled-components';
import {
  flex,
  mediaMedium,
  mediaMediumGreater,
  sidePadding,
} from 'utils/css/styles';
import { pageOffsetX, mobPageOffsetX, maxPageWidth } from 'utils/css/variables';

export const footerCss = css`
  ${mediaMedium`display: none;`};
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${maxPageWidth};

  ${mediaMediumGreater`margin-bottom: 60px;`};

  ${mediaMedium`max-width: 100%;`};
`;

export const ContentContainer = styled.div`
  ${sidePadding('start', pageOffsetX)};
  ${flex({ align: 'flex-start' })};

  ${mediaMedium`
    padding: 0 ${mobPageOffsetX};
    ${flex({ direction: 'column' }, false)};
  `};
`;

export const LeftSide = styled.div`
  ${flex({ grow: 1 }, false)};
  width: 100%;
  position: relative;
`;

export const RightSide = styled.div`
  margin: 0 20px;

  ${mediaMedium`
    margin: 20px 0 -140px 0;
    width: 100%;
  `};
`;

export const cartBtnsStyle = css`
  padding: 10px 0 20px 0;
  width: 100%;
  background: white;
  position: sticky;
  bottom: 0;
  z-index: 100;
  box-shadow: 5px -10px 0.0000001px 10px white;
  -webkit-font-smoothing: subpixel-antialiased;
  transition: opacity 0.3s;

  ${mediaMediumGreater`display: none;`};
`;

// box-shadow: 5px -10px 0.0000000001px 10px white;
//   -webkit-font-smoothing: antialiased;
//   width: calc(100% + 20px);
//   margin-left: -10px;
//   padding: 10px;
//   filter: drop-shadow(0px -15px 10px white);
//   transform: translateZ(0);
//   will-change: position;
//   will-change: transform;
