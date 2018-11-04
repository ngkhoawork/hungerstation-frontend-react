import styled, { css } from 'styled-components';
import { flexBox } from 'utils/css/styles';

export default styled.div`
  ${flexBox({ align: 'flex-start' })};

  > div.prefix {
    margin-right: 16px;
  }

  [dir='rtl'] & > div.prefix {
    margin-left: 16px;
  }

  > div.input {
    flex-grow: 1;
  }

  ${({ style }) => style && css(style)};
`;
