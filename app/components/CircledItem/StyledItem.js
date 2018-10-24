import styled, { css } from 'styled-components';
import { flex } from 'utils/css/styles';
import { fuscousGray } from 'utils/css/colors';

const StyledItem = styled.div`
  ${flex({ align: 'center', justify: 'center' })};
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'initial')};
  user-select: none;
  color: ${fuscousGray};

  & > p {
    z-index: 5;
  }

  ${({ style }) => style && css(style)};
`;

export default StyledItem;
