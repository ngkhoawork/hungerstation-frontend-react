import styled, { css } from 'styled-components';
import { flex } from 'utils/css/styles';

const StyledItem = styled.div`
  ${flex({ align: 'center', justify: 'center' })};
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'initial')};
  user-select: none;

  & > p {
    z-index: 5;
  }

  ${({ style }) => style && css(style)};
`;

export default StyledItem;
