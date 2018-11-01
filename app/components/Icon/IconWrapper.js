import styled, { css } from 'styled-components';

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 15;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'inherit')};
  top: ${({ offsetY }) => offsetY || 0}px;

  ${({ css }) => css};
  ${({ style }) => style && css(style)};
`;

export default IconWrapper;
