import styled, { css } from 'styled-components';
import { mediaMediumGreater, flex, borderBottom } from 'utils/css/styles';

export const containerStyle = css`
  ${mediaMediumGreater`width: 600px`};
  padding: 30px 25px;
`;

export const headerStyle = css`
  ${borderBottom};
  text-align: left;
  padding: 0px;
  margin: 0;
  width: calc(100% - 25px);
`;

export const Content = styled.div`
  ${flex({ direction: 'column', grow: 1 })};
  overflow-y: visible;
  margin: 0;
`;

export const Footer = styled.div`
  ${flex({ justify: 'flex-end', shrink: 0 })};
`;

export const FooterRightSide = styled.div`
  ${flex({ align: 'center' })};
`;
