import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';

const StyledAction = styled.div`
  ${flexBox({ align: 'center', justify: 'center' })};
  width: 100%;
  margin-bottom: 5px;

  p {
    margin-right: 10px;
  }
`;

export default StyledAction;
