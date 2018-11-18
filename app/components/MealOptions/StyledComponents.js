import styled, { css } from 'styled-components';
import {
  mediaMedium,
  mediaMediumGreater,
  flex,
  borderBottom,
} from 'utils/css/styles';
import { maxModalWidth } from 'utils/css/variables';

export const containerStyle = css`
  width: 600px;
  ${mediaMedium`width: ${maxModalWidth}`};
`;

export const headerStyle = css`
  ${borderBottom};
  text-align: left;
  padding-bottom: 10px;
`;

export const Content = styled.div`
  ${flex({ direction: 'column', grow: 1 })};
  overflow-y: auto;
  margin-bottom: 20px;
  padding-right: 10px;
  min-height: 220px;
`;

export const Footer = styled.div`
  ${flex({ justify: 'space-between', shrink: 0 })};

  ${mediaMedium`${flex({ align: 'center', direction: 'column' })}`};
`;

export const FooterLeftSide = styled.div`
  ${flex({ align: 'center', justify: 'space-between' })};

  ${mediaMedium`margin-bottom: 30px;`};
`;

export const FooterRightSide = styled.div`
  ${flex({ align: 'center' })};

  ${mediaMedium`width: 100%;`};
`;

export const LeftSidePrice = styled.span`
  ${mediaMediumGreater`display: none;`};
`;

export const RightSidePrice = styled.span`
  ${mediaMedium`display: none;`};
`;

export const btn = css`
  ${mediaMedium`width: 100%; padding: 18px;`};
`;
