import { css } from 'styled-components';
import { flex, mediaMediumGreater, mediaMedium } from 'utils/css/styles';

export const mobileInfo = css`
  margin: 20px 0 15px;
  ${flex({ direction: 'column' })};
`;

export const btnCss = css`
  height: 40px;

  ${mediaMediumGreater`
    ${flex({ justify: 'flex-end' })};
    align-self: center;
    margin-left: 20px;
  `};

  ${mediaMedium`width: 100%;`};

  ${({ isRateBtn }) =>
    isRateBtn &&
    `
    &:after {
      content: '★';
      font-size: 8px;
      margin-left: 8px;
      margin-top: 2px;
      vertical-align: text-top;
      line-height: 15px;
    }
  `};
`;
