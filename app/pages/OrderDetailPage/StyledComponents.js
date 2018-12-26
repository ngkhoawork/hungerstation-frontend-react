import styled, { css } from 'styled-components';
import {
  flex,
  mediaMedium,
  mediaMediumGreater,
  sideMargin,
} from 'utils/css/styles';

export const cartCss = css`
  ${mediaMedium`
    padding-top: 0;

    > div:first-child {
      display: none;
    }
  `};
`;

export const titleCss = css`
  margin: 0 0 40px 0;
  font-size: 42px;
`;

export const OrderDetailSection = styled.div`
  width: 100%;
  margin-bottom: 50px;
  overflow: visible;
  position: relative;
  ${flex({
    align: 'space-between',
    justify: 'flex-start',
  })};
  flex: 1;

  ${mediaMediumGreater`
    ${sideMargin('start', '40px')};
  `};

  ${mediaMedium`
    padding: 0 23px;
    width:100%;

    ${flex({ direction: 'column', align: 'center' }, false)};
  `};
`;
