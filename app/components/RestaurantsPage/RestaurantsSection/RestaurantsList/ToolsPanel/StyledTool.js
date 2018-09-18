import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/styles';

const StyledTool = styled.div`
  ${flexBox({ align: 'center' })} flex: 0.25;
  div > img {
    margin-bottom: 4px;
  }
  &:last-of-type {
    flex: 0.08;
  }
  ${mediaLess(800)`
    flex: 0.4;
    &:last-of-type {
      flex: 0.2;
    }
  `};
  ${mediaLess(600)`
    flex: 0.66;
    &:last-of-type {
      flex: 0.23;
    }
  `};
`;

export default StyledTool;
