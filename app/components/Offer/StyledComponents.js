import styled, { css } from 'styled-components';
import {
  flex,
  sideMargin,
  mediaMedium,
  mediaMediumGreater,
} from 'utils/css/styles';
import { alabaster, gray } from 'utils/css/colors';
import { borderRadius } from 'utils/css/variables';
import Tooltip from 'components/Tooltip';

export const descCss = css`
  font-size: 12px;
  margin: 10px 0 0;
  color: ${gray};
`;

export const Container = styled.div`
  position: relative;
  background: ${alabaster};
  border-radius: ${borderRadius};

  ${mediaMediumGreater`max-width: 30%;`};

  ${({ style }) => style && css(style)};
  ${({ css }) => css};
`;

export const Content = styled.div`
  ${flex({ align: 'center' })};
  padding: 10px;

  ${mediaMedium`padding: 10px 20px;`};
`;

export const titleCss = css`
  font-size: 14px;
  margin: 0 10px;

  ${mediaMedium`margin: 0 20px;`};
`;

export const StyledTooltip = styled(Tooltip)`
  top: calc(100% + 7px);
  right: 0;
  display: none;
  max-width: 300px;
  width: max-content;
  text-align: right;

  ${Content}:hover ~ & {
    display: block;
  }

  ${mediaMedium`display: none !important;`};
`;

export const moreIconCss = css`
  ${sideMargin('start', 'auto')};

  ${mediaMediumGreater`display: none;`};
`;
