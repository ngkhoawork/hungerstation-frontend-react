import styled, { css } from 'styled-components';
import {
  mediaMediumGreater,
  flex,
  borderBottom,
  sidePadding,
} from 'utils/css/styles';

export const containerStyle = css`
  ${mediaMediumGreater`width: 600px`};
`;

export const headerStyle = css`
  ${borderBottom};
  text-align: left;
  padding-bottom: 10px;
`;

export const Content = styled.div`
  ${flex({ direction: 'column', grow: 1 })};
  overflow-y: visible;
  margin: 20px 0;
  ${sidePadding('end', '10px;')};
`;

export const Footer = styled.div`
  ${flex({ justify: 'flex-end', shrink: 0 })};
`;

export const FooterRightSide = styled.div`
  ${flex({ align: 'center' })};
`;
