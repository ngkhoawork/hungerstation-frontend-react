import styled, { css } from 'styled-components';
import { flex } from 'utils/css/styles';
import { maxPageWidth } from 'utils/css/variables';

const StyledFooter = styled.div`
  ${flex({ direction: 'column' })};
  position: relative;
  width: 100%;
  max-width: ${maxPageWidth};

  ${({ css }) => css};
  ${({ style }) => style && css(style)};
`;

export default StyledFooter;
