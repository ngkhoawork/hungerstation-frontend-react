import styled, { css } from 'styled-components';
import { flex } from 'utils/css/styles';
import { zIndexLoader, boxShadow } from 'utils/css/variables';

export const Container = styled.div`
  ${flex({ direction: 'column', justify: 'center', align: 'center' })};
  transform: translateZ(0);
  z-index: ${zIndexLoader};
  position: absolute;
  width: 100%;

  ${({ isFullHeight }) => isFullHeight && `height: 100%`};

  ${({ style }) => style && css(style)};
  ${({ css }) => css};
`;

export const Spinner = styled.div`
  width: 240px;
  height: 240px;
  padding: 30px;
  box-shadow: ${boxShadow};
  text-align: center;
  background: white;

  > svg {
    width: 140px !important;
    height: 140px !important;
    margin-top: 0px;
  }
`;

export const Label = styled.div`
  position: relative;
  bottom: 70px;
  font-size: 20px;
`;
