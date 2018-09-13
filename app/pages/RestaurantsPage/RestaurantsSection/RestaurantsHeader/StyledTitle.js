import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/styles';

const StyledTitle = styled.div`
  ${flexBox({ align: 'center', justify: 'center' })};
  ${mediaLess(1250)`
    > p:first-child, > p:last-child {
      font-size: 25px;
    }
  `};
  ${mediaLess(1085)`
    > p:first-child, > p:last-child {
      font-size: 18px;
    }
  `};
  ${mediaLess(1000)`
    > p:first-child, > p:last-child {
      font-size: 30px;
    }
  `};
  ${mediaLess(700)`
    > p:first-child, > p:last-child {
      font-size: 20px;
    }
  `};
  ${mediaLess(600)`
    > p:first-child, > p:last-child {
      font-size: 22px;
    }
  `};
`;

export default StyledTitle;
