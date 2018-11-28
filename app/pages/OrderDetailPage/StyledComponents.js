import styled, { css } from 'styled-components';
import { flex, mediaMedium, mediaMediumGreater } from 'utils/css/styles';

export const cartCss = css`
  ${mediaMedium`
    padding-top: 0;

    > div:first-child {
      display: none;
    }
  `};
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
    margin-left: 40px;
  `};

  ${mediaMedium`
    padding: 0 23px;
    width:100%;

    ${flex({ direction: 'column', align: 'center' }, false)};
  `};
`;
