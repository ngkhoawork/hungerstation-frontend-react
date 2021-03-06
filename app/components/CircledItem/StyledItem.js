import styled, { css } from 'styled-components';
import { flex } from 'utils/css/styles';
import { fuscousGray } from 'utils/css/colors';

const StyledItem = styled.div`
  ${flex({ align: 'center', justify: 'center' })};
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'initial')};
  user-select: none;
  color: ${fuscousGray};
  line-height: 1;

  & > p {
    z-index: 5;
  }

  ${({ style }) => style && css(style)};
  ${({ css }) => css};
`;

export default StyledItem;
