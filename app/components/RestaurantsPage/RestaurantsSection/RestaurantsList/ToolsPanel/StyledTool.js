import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledTool = styled.div`
  ${flexBox({ align: 'center' })} flex: 0.25;
  div > img {
    margin-bottom: 4px;
  }
  &:last-of-type {
    flex: 0.08;
  }
`;

export default StyledTool;
