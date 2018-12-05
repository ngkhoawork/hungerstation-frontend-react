import styled, { css } from 'styled-components';
import { flex } from 'utils/css/styles';

const Group = styled.div`
  ${flex({ align: 'center', justify: 'flex-start' })};

  ${({ style }) => style && css(style)};
`;

export default Group;
