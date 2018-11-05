import styled, { css } from 'styled-components';
import { mediaMediumGreater, flex, borderBottom } from 'utils/css/styles';

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
  overflow-y: auto;
  margin: 20px 0;
  padding-right: 10px;
`;

export const Footer = styled.div`
  ${flex({ justify: 'space-between', shrink: 0 })};
`;

export const FooterRightSide = styled.div`
  ${flex({ align: 'center' })};
`;
