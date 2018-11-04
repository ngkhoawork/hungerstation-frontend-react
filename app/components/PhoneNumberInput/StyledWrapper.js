import styled, { css } from 'styled-components';
import { flex } from 'utils/css/styles';

export default styled.div`
  ${flex({ align: 'flex-start' })};

  > div.prefix {
    margin-right: 16px;
  }

  [dir='rtl'] & > div.prefix {
    margin-left: 16px;
  }

  > div.input {
    ${flex({ grow: 1 }, false)};
  }

  ${({ style }) => style && css(style)};
`;
